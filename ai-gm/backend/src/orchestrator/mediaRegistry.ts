import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { IntentType } from "../rules/intentTypes.js";
import { Channel } from "../types.js";

export type MediaRegistry = Record<IntentType, Partial<Record<Channel, string>>>;

function getMediaPath(): string {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(dirname, "../../data/media.json");
}

export function loadMediaRegistry(): MediaRegistry {
  const raw = fs.readFileSync(getMediaPath(), "utf-8");
  return JSON.parse(raw) as MediaRegistry;
}
