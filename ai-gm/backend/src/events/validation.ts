import {
  AiGmEvent,
  ALL_EVENT_SOURCES,
  ALL_EVENT_TYPES,
  EventSource,
  EventType,
} from "./eventTypes.js";

export class ValidationError extends Error {}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${field} must be a non-empty string`);
  }
  return value;
}

function assertEnum<T extends string>(value: unknown, allowed: readonly T[], field: string): T {
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    throw new ValidationError(`${field} is invalid`);
  }
  return value as T;
}

function assertTimestamp(value: unknown): string {
  const timestamp = assertString(value, "timestamp");
  if (Number.isNaN(Date.parse(timestamp))) {
    throw new ValidationError("timestamp must be an ISO 8601 string");
  }
  return timestamp;
}

export function parseAiGmEvent(raw: unknown): AiGmEvent {
  if (!isRecord(raw)) {
    throw new ValidationError("body must be an object");
  }

  const id = assertString(raw.id, "id");
  const source = assertEnum<EventSource>(raw.source, ALL_EVENT_SOURCES, "source");
  const type = assertEnum<EventType>(raw.type, ALL_EVENT_TYPES, "type");
  const timestamp = assertTimestamp(raw.timestamp);
  const payload = isRecord(raw.payload) ? raw.payload : {};

  return {
    id,
    source,
    type,
    timestamp,
    payload,
  };
}
