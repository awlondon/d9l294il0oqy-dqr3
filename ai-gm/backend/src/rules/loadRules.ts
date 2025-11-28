import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Channel } from "../types.js";
import { AiGmEvent } from "../events/eventTypes.js";
import { IntentType } from "./intentTypes.js";

export interface RuleConfig {
  match: {
    type: AiGmEvent["type"];
    zone?: string;
    payload?: Record<string, unknown>;
    between?: [string, string];
  };
  channel: Channel;
  intentType: IntentType;
  zones: string[];
  priority: number;
  template: string;
  ttlSeconds: number;
  expiresAfterSeconds?: number;
  durationSeconds?: number;
}

function assertRule(rule: unknown): asserts rule is RuleConfig {
  if (typeof rule !== "object" || rule === null) {
    throw new Error("Rule must be an object");
  }
  const value = rule as Record<string, unknown>;
  const match = value.match;
  if (typeof match !== "object" || match === null || typeof (match as Record<string, unknown>).type !== "string") {
    throw new Error("Rule.match.type is required");
  }
  if (value.channel !== "STAFF" && value.channel !== "CUSTOMER") {
    throw new Error("Rule.channel is required");
  }
  if (typeof value.intentType !== "string") {
    throw new Error("Rule.intentType is required");
  }
  if (!Array.isArray(value.zones)) {
    throw new Error("Rule.zones must be an array");
  }
  if (typeof value.priority !== "number") {
    throw new Error("Rule.priority must be a number");
  }
  if (typeof value.template !== "string") {
    throw new Error("Rule.template is required");
  }
  if (typeof value.ttlSeconds !== "number") {
    throw new Error("Rule.ttlSeconds must be a number");
  }
}

function getDataPath(): string {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(dirname, "../../data/rules.json");
}

export function loadRules(): RuleConfig[] {
  const raw = fs.readFileSync(getDataPath(), "utf-8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("Rules configuration must be an array");
  }
  parsed.forEach(assertRule);
  return parsed as RuleConfig[];
}
