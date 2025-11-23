import { Screen } from "../events/eventTypes";
import { registerScreen } from "./screensRegistry.js";

function buildScreen(screenId: string, floor: number, zone: string, channel: "STAFF" | "CUSTOMER"): Screen {
  return {
    screenId,
    floor,
    zone,
    role: channel === "STAFF" ? "STAFF" : "CUSTOMER",
    channel,
  };
}

export function seedScreens(): void {
  const seeds: Screen[] = [
    buildScreen("F1_CW_A_TBL_01", 1, "CW_A", "CUSTOMER"),
    buildScreen("F1_CW_A_TBL_02", 1, "CW_A", "CUSTOMER"),
    buildScreen("F1_CW_A_TBL_03", 1, "CW_A", "CUSTOMER"),
    buildScreen("F1_CW_B_TBL_11", 1, "CW_B", "CUSTOMER"),
    buildScreen("F1_CW_B_TBL_12", 1, "CW_B", "CUSTOMER"),
    buildScreen("F1_CW_B_TBL_13", 1, "CW_B", "CUSTOMER"),
    buildScreen("F1_PLAY_INFO_01", 1, "PLAY", "CUSTOMER"),
    buildScreen("F1_PLAY_STAFF_01", 1, "PLAY", "STAFF"),
    buildScreen("F1_ENTRY_INFO_01", 1, "ENTRY", "CUSTOMER"),
    buildScreen("F1_ENTRY_STAFF_01", 1, "ENTRY", "STAFF"),
  ];

  seeds.forEach(registerScreen);
}
