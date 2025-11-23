import { Channel } from "../types";

export type ScreenRole = "STAFF" | "CUSTOMER";

export interface Screen {
  screenId: string;
  floor: number;
  zone: string;
  role: ScreenRole;
  channel: Channel;
}

export type EventSource =
  | "PLAY_AREA_SENSOR"
  | "STAFF_CHECKIN"
  | "POS"
  | "SCHEDULER"
  | "MANUAL";

export type EventType =
  | "PLAYAREA_AT_CAPACITY"
  | "PLAYAREA_BELOW_CAPACITY"
  | "TODDLER_ENTERED_PLAYAREA"
  | "TODDLER_EXITED_PLAYAREA"
  | "STAFF_CHECKIN_AT_STATION"
  | "PARTY_ROOM_START"
  | "PARTY_ROOM_END"
  | "CLOSING_TIME_T_MINUS_30"
  | "CLOSING_TIME_T_MINUS_10"
  | "CLOSING_TIME_T_MINUS_5"
  | "CLOSING_TIME_NOW";

export interface AiGmEvent {
  id: string;
  source: EventSource;
  type: EventType;
  timestamp: string;
  payload: Record<string, any>;
}

export interface PlayAreaCapacityPayload {
  playAreaId: string;
  currentCount: number;
  capacity: number;
}

export interface StaffCheckInPayload {
  staffId: string;
  stationId: string;
  role: string;
}

export interface PartyRoomStartPayload {
  roomId: string;
  hostName: string;
  partyName: string;
  startTime: string;
}

export interface ClosingTimePayload {
  locationId: string;
  scheduledCloseTime: string;
}
