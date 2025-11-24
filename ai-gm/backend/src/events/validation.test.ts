import assert from "node:assert";
import { parseAiGmEvent, ValidationError } from "./validation.js";

const baseEvent = {
  id: "evt-100",
  source: "MANUAL",
  type: "PLAYAREA_AT_CAPACITY",
  timestamp: new Date().toISOString(),
  payload: { playAreaId: "PLAY", currentCount: 30, capacity: 30 },
};

const parsed = parseAiGmEvent(baseEvent);
assert.equal(parsed.id, baseEvent.id);
assert.deepEqual(parsed.payload, baseEvent.payload);

assert.throws(
  () =>
    parseAiGmEvent({
      ...baseEvent,
      source: "UNKNOWN_SOURCE",
    }),
  ValidationError,
  "Unknown source should fail validation",
);

assert.throws(
  () =>
    parseAiGmEvent({
      ...baseEvent,
      type: "UNMAPPED_TYPE",
    }),
  ValidationError,
  "Unknown type should fail validation",
);

assert.throws(
  () =>
    parseAiGmEvent({
      ...baseEvent,
      timestamp: "not-a-date",
    }),
  ValidationError,
  "Bad timestamp should fail validation",
);

const nullPayloadEvent = parseAiGmEvent({ ...baseEvent, payload: null });
assert.deepEqual(nullPayloadEvent.payload, {});

console.log("validation tests passed");
