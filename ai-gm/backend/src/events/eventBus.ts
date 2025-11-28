import { createRequire } from "module";
import { config } from "../config.js";
import { AiGmEvent, EventType } from "./eventTypes.js";

const require = createRequire(import.meta.url);

type EventHandler = (event: AiGmEvent) => void;

export interface EventBus {
  publish(event: AiGmEvent): void;
  subscribe(type: EventType, handler: EventHandler): () => void;
}

class InMemoryEventBus implements EventBus {
  private subscribers: { type: EventType; handler: EventHandler }[] = [];

  publish(event: AiGmEvent): void {
    this.subscribers.filter((sub) => sub.type === event.type).forEach((sub) => sub.handler(event));
  }

  subscribe(type: EventType, handler: EventHandler): () => void {
    const sub = { type, handler };
    this.subscribers.push(sub);
    return () => {
      const index = this.subscribers.indexOf(sub);
      if (index >= 0) {
        this.subscribers.splice(index, 1);
      }
    };
  }
}

class MqttEventBus implements EventBus {
  private client: any;
  private handlers = new Map<EventType, Set<EventHandler>>();

  constructor(brokerUrl: string, options?: Record<string, unknown>) {
    const mqttLib = this.loadClient();
    this.client = mqttLib.connect(brokerUrl, options);
  }

  private loadClient(): any {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("mqtt");
    } catch (error) {
      throw new Error("MQTT adapter requested but mqtt package is not available");
    }
  }

  private topicFor(type: EventType): string {
    return `ai-gm/events/${type}`;
  }

  publish(event: AiGmEvent): void {
    const topic = this.topicFor(event.type);
    this.client.publish(topic, JSON.stringify(event), {
      retain: true,
      properties: { messageExpiryInterval: 30 },
    });
  }

  subscribe(type: EventType, handler: EventHandler): () => void {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, new Set());
      this.client.subscribe(this.topicFor(type), { qos: 1 });
    }
    this.handlers.get(type)?.add(handler);
    const onMessage = (topic: string, payload: Buffer) => {
      if (topic !== this.topicFor(type)) return;
      try {
        const parsed = JSON.parse(payload.toString()) as AiGmEvent;
        handler(parsed);
      } catch (err) {
        console.error("Failed to parse MQTT event", err);
      }
    };
    this.client.on("message", onMessage);
    return () => {
      this.handlers.get(type)?.delete(handler);
      this.client.off("message", onMessage);
      if ((this.handlers.get(type)?.size ?? 0) === 0) {
        this.client.unsubscribe(this.topicFor(type));
      }
    };
  }
}

function buildEventBus(): EventBus {
  if (config.eventBusType === "mqtt" && config.mqttUrl) {
    return new MqttEventBus(config.mqttUrl, { keepalive: 5 });
  }
  return new InMemoryEventBus();
}

export const eventBus: EventBus = buildEventBus();
export { InMemoryEventBus, MqttEventBus, EventHandler };
