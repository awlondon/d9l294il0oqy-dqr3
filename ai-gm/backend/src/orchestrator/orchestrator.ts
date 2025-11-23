import { WebSocketServer } from "ws";
import { v4 as uuid } from "uuid";
import { ContentIntent } from "../rules/rulesEngine";
import { getScreensByZoneAndChannel } from "../registry/screensRegistry";
import { PlayCommand } from "./playCommandTypes.js";
import { Channel } from "../types";

interface OrchestratorOptions {
  wss: WebSocketServer;
  defaultDurationSeconds?: number;
  rateLimitMs?: number;
}

interface ClientInfo {
  screenId: string;
  channel: Channel;
}

const clientRegistry = new Map<WebSocket, ClientInfo>();
const lastSentByScreen = new Map<string, number>();

function getPlaceholderVideo(channel: Channel): string {
  return channel === "STAFF"
    ? "/media/staff/mastermind_parrot_generic.mp4"
    : "/media/customer/ambient_info_generic.mp4";
}

function shouldSend(screenId: string, rateLimitMs: number): boolean {
  const lastSent = lastSentByScreen.get(screenId) ?? 0;
  const now = Date.now();
  if (now - lastSent < rateLimitMs) {
    return false;
  }
  lastSentByScreen.set(screenId, now);
  return true;
}

export function registerClient(socket: WebSocket, info: ClientInfo): void {
  clientRegistry.set(socket, info);
}

export function removeClient(socket: WebSocket): void {
  clientRegistry.delete(socket);
}

export function createPlayCommands(intent: ContentIntent): PlayCommand[] {
  return intent.zones.flatMap((zone) => {
    const targetScreens = getScreensByZoneAndChannel(zone, intent.channel);
    return targetScreens.map((screen) => ({
      id: uuid(),
      intentId: intent.id,
      screenId: screen.screenId,
      channel: intent.channel,
      priority: intent.priority,
      videoUrl: getPlaceholderVideo(intent.channel),
      overlayText: intent.copy,
      startTime: "NOW",
      durationSeconds: 30,
    }));
  });
}

export function dispatchIntents(intents: ContentIntent[], options: OrchestratorOptions): void {
  const rateLimitMs = options.rateLimitMs ?? 5_000;
  intents.forEach((intent) => {
    const commands = createPlayCommands(intent);
    commands.forEach((command) => {
      if (!shouldSend(command.screenId, rateLimitMs)) {
        return;
      }
      const payload = JSON.stringify({ type: "PLAY_COMMAND", data: command });
      clientRegistry.forEach((info, socket) => {
        if (socket.readyState === socket.OPEN && info.screenId === command.screenId) {
          socket.send(payload);
        }
      });
    });
  });
}
