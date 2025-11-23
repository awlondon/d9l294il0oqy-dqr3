import { Channel } from "../types";

export interface PlayCommand {
  id: string;
  intentId: string;
  screenId: string;
  channel: Channel;
  priority: number;
  videoUrl?: string;
  overlayText?: string;
  startTime: "NOW" | string;
  durationSeconds: number;
}
