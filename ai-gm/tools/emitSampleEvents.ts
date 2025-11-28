import { v4 as uuid } from "uuid";
import { eventBus } from "../backend/src/events/eventBus.js";
import { AiGmEvent } from "../backend/src/events/eventTypes.js";
import { startServer } from "../backend/src/server.js";

startServer();

function emit(event: AiGmEvent) {
  console.log("Emitting", event.type);
  eventBus.publish(event);
}

const now = new Date();

emit({
  id: uuid(),
  source: "PLAY_AREA_SENSOR",
  type: "PLAYAREA_AT_CAPACITY",
  timestamp: now.toISOString(),
  payload: { playAreaId: "PLAY", currentCount: 30, capacity: 30, zone: "PLAY" },
});

setTimeout(() =>
  emit({
    id: uuid(),
    source: "STAFF_CHECKIN",
    type: "STAFF_CHECKIN_AT_STATION",
    timestamp: new Date().toISOString(),
    payload: { staffId: "stf-1", stationId: "F1_PLAY_STAFF_01", role: "SUPERVISOR", zone: "PLAY" },
  }),
  2_000,
);

setTimeout(() =>
  emit({
    id: uuid(),
    source: "SCHEDULER",
    type: "CLOSING_TIME_T_MINUS_30",
    timestamp: new Date().toISOString(),
    payload: { locationId: "F1" },
  }),
  4_000,
);

setTimeout(() =>
  emit({
    id: uuid(),
    source: "PLAY_AREA_SENSOR",
    type: "PLAYAREA_BELOW_CAPACITY",
    timestamp: new Date().toISOString(),
    payload: { playAreaId: "PLAY", currentCount: 15, capacity: 30, zone: "PLAY" },
  }),
  6_000,
);
