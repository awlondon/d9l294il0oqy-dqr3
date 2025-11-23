import { v4 as uuid } from "uuid";
import rulesConfig from "./rulesConfig.json" assert { type: "json" };
import { AiGmEvent } from "../events/eventTypes";
import { Channel } from "../types";

export interface ContentIntent {
  id: string;
  eventId: string;
  channel: Channel;
  intentType:
    | "STAFF_SUPERVISION_REMINDER"
    | "STAFF_CLOSING_PROCEDURE_STEP"
    | "STAFF_PARTY_ROOM_TURNOVER"
    | "CUSTOMER_PLAYAREA_CAPACITY_NOTICE"
    | "CUSTOMER_CLOSING_SOON"
    | "CUSTOMER_GENERIC_INFO";
  priority: number;
  zones: string[];
  copy: string;
  ttlSeconds: number;
}

export interface RuleConfig {
  match: {
    type: AiGmEvent["type"];
    zone?: string;
  };
  channel: Channel;
  intentType: ContentIntent["intentType"];
  zones: string[];
  priority: number;
  template: string;
  ttlSeconds: number;
}

function matchesRule(event: AiGmEvent, rule: RuleConfig): boolean {
  if (event.type !== rule.match.type) {
    return false;
  }
  if (rule.match.zone && event.payload?.zone && event.payload.zone !== rule.match.zone) {
    return false;
  }
  return true;
}

/**
 * Convert inbound events into content intents using a declarative rule set.
 */
export function processEvent(event: AiGmEvent): ContentIntent[] {
  return rulesConfig
    .filter((rule) => matchesRule(event, rule))
    .map((rule) => ({
      id: uuid(),
      eventId: event.id,
      channel: rule.channel,
      intentType: rule.intentType,
      priority: rule.priority,
      zones: rule.zones,
      copy: rule.template,
      ttlSeconds: rule.ttlSeconds,
    }));
}

export function getRules(): RuleConfig[] {
  return rulesConfig;
}
