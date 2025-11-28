import { WebSocketServer } from "ws";
import { v4 as uuid } from "uuid";
import { ContentIntent } from "../rules/rulesEngine";
import { getScreensByZoneAndChannel } from "../registry/screensRegistry";
import { PlayCommand } from "./playCommandTypes.js";
import { Channel } from "../types";
import { loadMediaRegistry } from "./mediaRegistry.js";

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
const lastSentByScreenAndIntent = new Map<string, number>();
const mediaRegistry = loadMediaRegistry();

function getVideoForIntent(intentType: ContentIntent["intentType"], channel: Channel): string {
  const entry = mediaRegistry[intentType]?.[channel];
  if (entry) return entry;
  return channel === "STAFF"
    ? "/media/staff/mastermind_parrot_generic.mp4"
    : "/media/customer/ambient_info_generic.mp4";
}

function shouldSend(screenId: string, intentType: string, rateLimitMs: number): boolean {
  const key = `${screenId}:${intentType}`;
  const lastSent = lastSentByScreenAndIntent.get(key) ?? 0;
  const now = Date.now();
  if (now - lastSent < rateLimitMs) {
    return false;
  }
  lastSentByScreenAndIntent.set(key, now);
  return true;
}

export function registerClient(socket: WebSocket, info: ClientInfo): void {
  clientRegistry.set(socket, info);
}

export function removeClient(socket: WebSocket): void {
  clientRegistry.delete(socket);
}

export function createPlayCommands(intent: ContentIntent, defaultDurationSeconds = 30): PlayCommand[] {
  if (intent.expiresAt && intent.expiresAt < Date.now()) {
    return [];
  }
  return intent.zones.flatMap((zone) => {
    const targetScreens = getScreensByZoneAndChannel(zone, intent.channel);
    return targetScreens.map((screen) => ({
      id: uuid(),
      intentId: intent.id,
      intentType: intent.intentType,
      screenId: screen.screenId,
      channel: intent.channel,
      priority: intent.priority,
      videoUrl: getVideoForIntent(intent.intentType, intent.channel),
      overlayText: intent.copy,
      startTime: "NOW",
      durationSeconds: intent.durationSeconds ?? defaultDurationSeconds,
    }));
  });
}

export function dispatchIntents(intents: ContentIntent[], options: OrchestratorOptions): void {
  const rateLimitMs = options.rateLimitMs ?? 5_000;
  const allCommands = intents.flatMap((intent) => createPlayCommands(intent, options.defaultDurationSeconds));

  const groupedByScreen = new Map<string, PlayCommand[]>();
  allCommands.forEach((cmd) => {
    const existing = groupedByScreen.get(cmd.screenId) ?? [];
    existing.push(cmd);
    groupedByScreen.set(cmd.screenId, existing);
  });

  groupedByScreen.forEach((commands, screenId) => {
    const lowPriority = commands.filter((c) => c.priority < 50);
    const highPriority = commands.filter((c) => c.priority >= 50);
    if (lowPriority.length > 1) {
      const merged = {
        ...lowPriority[0],
        id: uuid(),
        overlayText: lowPriority.map((c) => c.overlayText).filter(Boolean).join(" • "),
      };
      commands = [...highPriority, merged];
    }

    commands.forEach((command) => {
      const key = command.intentType ?? command.intentId;
      if (!shouldSend(screenId, key, rateLimitMs)) {
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
