import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Channel } from "../types.js";

export type ScreenRole = "STAFF" | "CUSTOMER" | "INFRA";
export interface ScreenRecord {
  screenId: string;
  zone: string;
  role: ScreenRole;
  channel: Channel;
  circuit: string;
  patchPort: string;
}

function assertScreen(record: unknown): asserts record is ScreenRecord {
  if (typeof record !== "object" || record === null) {
    throw new Error("Screen entry must be an object");
  }
  const value = record as Record<string, unknown>;
  const requiredString = ["screenId", "zone", "role", "channel", "circuit", "patchPort"];
  requiredString.forEach((field) => {
    if (typeof value[field] !== "string") {
      throw new Error(`Screen entry missing or invalid field: ${field}`);
    }
  });
  if (!["STAFF", "CUSTOMER", "INFRA"].includes(String(value.role))) {
    throw new Error(`Invalid screen role: ${String(value.role)}`);
  }
}

function getDataPath(): string {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(dirname, "../../data/screens.json");
}

export function loadScreens(): ScreenRecord[] {
  const filePath = getDataPath();
  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("Screens data must be an array");
  }
  parsed.forEach(assertScreen);
  return parsed;
}
