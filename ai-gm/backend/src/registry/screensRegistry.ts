import { Screen } from "../events/eventTypes";
import { Channel } from "../types";

const screens: Screen[] = [];

export function registerScreen(screen: Screen): void {
  const exists = screens.find((s) => s.screenId === screen.screenId);
  if (!exists) {
    screens.push(screen);
  }
}

export function getAllScreens(): Screen[] {
  return [...screens];
}

export function getScreensByZoneAndChannel(zone: string, channel: Channel): Screen[] {
  return screens.filter((screen) => screen.zone === zone && screen.channel === channel);
}
