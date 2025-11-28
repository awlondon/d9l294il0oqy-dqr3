import { Channel } from "../types.js";
import { loadScreens, ScreenRecord, ScreenRole } from "./loadScreens.js";

const ALL_SCREENS: ScreenRecord[] = loadScreens();

export type Screen = ScreenRecord;
export { ScreenRole };

export function getAllScreens(): Screen[] {
  return [...ALL_SCREENS];
}

export function getScreensByZone(zone: string): Screen[] {
  return ALL_SCREENS.filter((screen) => screen.zone === zone);
}

export function getScreensByChannel(channel: Channel): Screen[] {
  return ALL_SCREENS.filter((screen) => screen.channel === channel);
}

export function getScreensByZoneAndChannel(zone: string, channel: Channel): Screen[] {
  return ALL_SCREENS.filter((screen) => screen.zone === zone && screen.channel === channel);
}

export function getScreenById(screenId: string): Screen | undefined {
  return ALL_SCREENS.find((screen) => screen.screenId === screenId);
}
