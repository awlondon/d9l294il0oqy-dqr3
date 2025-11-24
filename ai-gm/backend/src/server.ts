import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { eventBus } from "./events/eventBus.js";
import { ALL_EVENT_TYPES } from "./events/eventTypes.js";
import { parseAiGmEvent, ValidationError } from "./events/validation.js";
import { processEvent } from "./rules/rulesEngine.js";
import { dispatchIntents, registerClient, removeClient } from "./orchestrator/orchestrator.js";
import { config } from "./config.js";
import { getAllScreens } from "./registry/screensRegistry.js";

const app = express();
app.use(express.json());

app.get("/ai-gm/health", (_req, res) => {
  res.json({ status: "ok", screens: getAllScreens().length });
});

app.post("/ai-gm/events", (req, res) => {
  try {
    const event = parseAiGmEvent(req.body);
    eventBus.publishEvent(event);
    res.json({ status: "accepted" });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Unexpected error validating event" });
  }
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: config.wsPath });

ALL_EVENT_TYPES.forEach((type) => {
  eventBus.subscribe(type, (event) => {
    const intents = processEvent(event);
    dispatchIntents(intents, { wss });
  });
});

wss.on("connection", (socket, request) => {
  const url = new URL(request.url ?? "", `http://${request.headers.host}`);
  const screenId = url.searchParams.get("screenId");
  if (!screenId) {
    socket.close(1008, "Missing screenId");
    return;
  }

  const screen = getAllScreens().find((s) => s.screenId === screenId);
  if (!screen) {
    socket.close(1008, "Unknown screenId");
    return;
  }

  registerClient(socket, { screenId, channel: screen.channel });

  socket.on("close", () => removeClient(socket));
});

export function startServer(): void {
  server.listen(config.port, () => {
    console.log(`AI GM backend listening on port ${config.port}`);
  });
}

const isExecutedDirectly =
  process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;

if (process.env.NODE_ENV !== "test" && isExecutedDirectly) {
  startServer();
}
