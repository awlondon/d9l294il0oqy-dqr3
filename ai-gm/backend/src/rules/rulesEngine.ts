/// <reference path="../types/uuid.d.ts" />
import { v4 as uuid } from "uuid";
import { AiGmEvent } from "../events/eventTypes.js";
import { isRecord } from "../events/validation.js";
import { RuleConfig, loadRules } from "./loadRules.js";
import { Channel } from "../types";
import { IntentType } from "./intentTypes.js";

export interface ContentIntent {
  id: string;
  eventId: string;
  channel: Channel;
  intentType: IntentType;
  priority: number;
  zones: string[];
  copy: string;
  ttlSeconds: number;
  expiresAt?: number;
  durationSeconds?: number;
}

function parseTimeHHMM(value: string): number | undefined {
  const [hours, minutes] = value.split(":").map((v) => Number(v));
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) {
    return undefined;
  }
  return hours * 60 + minutes;
}

function matchesNumeric(expected: string, actual: unknown): boolean {
  const actualNumber = typeof actual === "number" ? actual : Number(actual);
  if (!Number.isFinite(actualNumber)) {
    return false;
  }
  const match = expected.match(/^(>=|<=|>|<|==)?\s*(\d+(?:\.\d+)?)/);
  if (!match) return false;
  const operator = match[1] ?? "==";
  const expectedValue = Number(match[2]);
  switch (operator) {
    case ">":
      return actualNumber > expectedValue;
    case ">=":
      return actualNumber >= expectedValue;
    case "<":
      return actualNumber < expectedValue;
    case "<=":
      return actualNumber <= expectedValue;
    default:
      return actualNumber === expectedValue;
  }
}

function matchesPayloadConditions(eventPayload: Record<string, unknown>, payloadRule: Record<string, unknown>): boolean {
  return Object.entries(payloadRule).every(([key, expected]) => {
    const actual = eventPayload[key];
    if (typeof expected === "string" && /^[><=]/.test(expected)) {
      return matchesNumeric(expected, actual);
    }
    if (typeof expected === "string") {
      return actual === expected;
    }
    if (Array.isArray(expected)) {
      return Array.isArray(actual) && expected.every((v, idx) => actual[idx] === v);
    }
    return actual === expected;
  });
}

function isWithinWindow(event: AiGmEvent, between?: [string, string]): boolean {
  if (!between) return true;
  const [start, end] = between;
  const startMinutes = parseTimeHHMM(start);
  const endMinutes = parseTimeHHMM(end);
  const timestampMinutes = parseTimeHHMM(new Date(event.timestamp).toISOString().substring(11, 16));
  if (startMinutes === undefined || endMinutes === undefined || timestampMinutes === undefined) {
    return false;
  }
  return timestampMinutes >= startMinutes && timestampMinutes <= endMinutes;
}

function matchesRule(event: AiGmEvent, rule: RuleConfig): boolean {
  if (event.type !== rule.match.type) {
    return false;
  }
  if (!isRecord(event.payload)) {
    return false;
  }
  const payloadZone = event.payload.zone;
  if (rule.match.zone) {
    const zone = typeof payloadZone === "string" ? payloadZone : undefined;
    if (zone && zone !== rule.match.zone) {
      return false;
    }
  }
  if (typeof payloadZone !== "undefined" && typeof payloadZone !== "string") {
    return false;
  }
  if (rule.match.payload && !matchesPayloadConditions(event.payload, rule.match.payload)) {
    return false;
  }
  if (!isWithinWindow(event, rule.match.between)) {
    return false;
  }
  return true;
}

function computeExpiry(event: AiGmEvent, rule: RuleConfig): number | undefined {
  if (!rule.expiresAfterSeconds) {
    return undefined;
  }
  return new Date(event.timestamp).getTime() + rule.expiresAfterSeconds * 1000;
}

function getValueByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[segment];
    }
    return undefined;
  }, source);
}

function renderTemplate(template: string, event: AiGmEvent): string {
  return template.replace(/{{\s*([^}]+)\s*}}/g, (_match, path) => {
    const value = getValueByPath(event, path.trim());
    return typeof value === "undefined" ? "" : String(value);
  });
}

/**
 * Convert inbound events into content intents using a declarative rule set.
 */
export function processEvent(event: AiGmEvent): ContentIntent[] {
  const rulesConfig = loadRules();
  return rulesConfig
    .filter((rule) => matchesRule(event, rule))
    .map((rule) => ({
      id: uuid(),
      eventId: event.id,
      channel: rule.channel,
      intentType: rule.intentType,
      priority: rule.priority,
      zones: rule.zones,
      copy: renderTemplate(rule.template, event),
      ttlSeconds: rule.ttlSeconds,
      expiresAt: computeExpiry(event, rule),
      durationSeconds: rule.durationSeconds,
    }));
}

export function getRules(): RuleConfig[] {
  return loadRules();
}
