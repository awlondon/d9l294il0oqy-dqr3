import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { eventBus } from "./events/eventBus.js";
import { AiGmEvent, EventType } from "./events/eventTypes.js";
import { processEvent } from "./rules/rulesEngine.js";
import { dispatchIntents, registerClient, removeClient } from "./orchestrator/orchestrator.js";
import { config } from "./config.js";
import { getAllScreens } from "./registry/screensRegistry.js";
import { seedScreens } from "./registry/screens.seed.js";

seedScreens();

const app = express();
app.use(express.json());

app.get("/ai-gm/health", (_req, res) => {
  res.json({ status: "ok", screens: getAllScreens().length });
});

app.post("/ai-gm/events", (req, res) => {
  const event = req.body as AiGmEvent;
  if (!event?.id || !event?.type) {
    return res.status(400).json({ error: "Missing id or type" });
  }
  eventBus.publishEvent(event);
  res.json({ status: "accepted" });
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: config.wsPath });

const allEventTypes: EventType[] = [
  "PLAYAREA_AT_CAPACITY",
  "PLAYAREA_BELOW_CAPACITY",
  "TODDLER_ENTERED_PLAYAREA",
  "TODDLER_EXITED_PLAYAREA",
  "STAFF_CHECKIN_AT_STATION",
  "PARTY_ROOM_START",
  "PARTY_ROOM_END",
  "CLOSING_TIME_T_MINUS_30",
  "CLOSING_TIME_T_MINUS_10",
  "CLOSING_TIME_T_MINUS_5",
  "CLOSING_TIME_NOW",
];

allEventTypes.forEach((type) => {
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
