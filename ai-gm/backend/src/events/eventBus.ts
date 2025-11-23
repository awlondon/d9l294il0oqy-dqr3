import { AiGmEvent, EventType } from "./eventTypes.js";

type EventHandler = (event: AiGmEvent) => void;

type Subscription = {
  type: EventType;
  handler: EventHandler;
};

const subscribers: Subscription[] = [];

/**
 * Simple in-memory pub/sub abstraction. In a future iteration this can be swapped
 * out for MQTT, NATS, or another broker by keeping the same interface.
 */
export const eventBus = {
  publishEvent: (event: AiGmEvent): void => {
    subscribers
      .filter((sub) => sub.type === event.type)
      .forEach((sub) => sub.handler(event));
  },
  subscribe: (type: EventType, handler: EventHandler): (() => void) => {
    const sub: Subscription = { type, handler };
    subscribers.push(sub);
    return () => {
      const index = subscribers.indexOf(sub);
      if (index >= 0) {
        subscribers.splice(index, 1);
      }
    };
  },
};
