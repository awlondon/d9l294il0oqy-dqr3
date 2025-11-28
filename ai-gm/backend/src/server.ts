import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { eventBus } from "./events/eventBus.js";
import { ALL_EVENT_TYPES } from "./events/eventTypes.js";
import { parseAiGmEvent, ValidationError } from "./events/validation.js";
import { getRules, processEvent } from "./rules/rulesEngine.js";
import { dispatchIntents, registerClient, removeClient } from "./orchestrator/orchestrator.js";
import { config } from "./config.js";
import { getAllScreens, getScreenById } from "./registry/screensRegistry.js";

const app = express();
app.use(express.json());

app.get("/ai-gm/health", (_req, res) => {
  res.json({ status: "ok", screens: getAllScreens().length });
});

app.post("/ai-gm/events", (req, res) => {
  try {
    const event = parseAiGmEvent(req.body);
    eventBus.publish(event);
    res.json({ status: "accepted" });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error", error.message);
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Unexpected error validating event" });
  }
});

app.get("/ai-gm/screens", (_req, res) => {
  res.json({ screens: getAllScreens() });
});

app.get("/ai-gm/screens/:screenId", (req, res) => {
  const screen = getScreenById(req.params.screenId);
  if (!screen) {
    return res.status(404).json({ error: "Screen not found" });
  }
  res.json({ screen });
});

app.get("/ai-gm/rules", (_req, res) => {
  res.json({ rules: getRules() });
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

  const screen = getScreenById(screenId);
  if (!screen) {
    socket.close(1008, "Unknown screenId");
    return;
  }

  registerClient(socket, { screenId, channel: screen.channel });

  socket.on("message", (data) => {
    try {
      JSON.parse(data.toString());
    } catch (err) {
      socket.send(JSON.stringify({ type: "ERROR", message: "Invalid JSON payload" }));
    }
  });

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
