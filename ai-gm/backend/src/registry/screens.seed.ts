import { Screen, getAllScreens } from "./screensRegistry.js";

// The screen registry is now a static, version-controlled inventory. This helper
// is retained for backward compatibility where a seeding hook is expected.
export function seedScreens(): Screen[] {
  return getAllScreens();
}
