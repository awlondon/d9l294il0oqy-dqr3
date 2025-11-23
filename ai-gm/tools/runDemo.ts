import { v4 as uuid } from "uuid";
import { eventBus } from "../backend/src/events/eventBus.js";
import { AiGmEvent } from "../backend/src/events/eventTypes.js";
import { startServer } from "../backend/src/server.js";

startServer();

function emit(event: AiGmEvent) {
  console.log(`[demo] ${event.type}`);
  eventBus.publishEvent(event);
}

function cycleEvents() {
  const baseTime = new Date().toISOString();
  emit({
    id: uuid(),
    source: "PLAY_AREA_SENSOR",
    type: "PLAYAREA_AT_CAPACITY",
    timestamp: baseTime,
    payload: { playAreaId: "PLAY", currentCount: 30, capacity: 30, zone: "PLAY" },
  });

  setTimeout(() =>
    emit({
      id: uuid(),
      source: "SCHEDULER",
      type: "CLOSING_TIME_T_MINUS_10",
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
      payload: { playAreaId: "PLAY", currentCount: 18, capacity: 30, zone: "PLAY" },
    }),
    8_000,
  );
}

cycleEvents();
setInterval(cycleEvents, 20_000);
