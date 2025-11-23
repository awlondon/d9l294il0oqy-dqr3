import assert from "node:assert";
import { processEvent } from "./rulesEngine.js";
import { AiGmEvent } from "../events/eventTypes.js";

const baseEvent: AiGmEvent = {
  id: "evt-1",
  source: "MANUAL",
  type: "PLAYAREA_AT_CAPACITY",
  timestamp: new Date().toISOString(),
  payload: { playAreaId: "PLAY", currentCount: 30, capacity: 30 },
};

const intents = processEvent(baseEvent);
assert.ok(intents.length === 1, "Expected capacity rule to trigger a single intent");
assert.equal(intents[0].intentType, "CUSTOMER_PLAYAREA_CAPACITY_NOTICE");
assert.equal(intents[0].channel, "CUSTOMER");
assert.deepEqual(intents[0].zones, ["PLAY"]);

const closingEvent: AiGmEvent = {
  id: "evt-2",
  source: "SCHEDULER",
  type: "CLOSING_TIME_T_MINUS_30",
  timestamp: new Date().toISOString(),
  payload: { locationId: "F1" },
};

const closingIntents = processEvent(closingEvent);
assert.ok(closingIntents.some((intent) => intent.intentType === "STAFF_CLOSING_PROCEDURE_STEP"));
console.log("rulesEngine tests passed");
