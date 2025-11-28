import fs from "fs";
import path from "path";

function loadEnv(): void {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf-8");
  content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .forEach((line) => {
      const [key, ...rest] = line.split("=");
      const value = rest.join("=");
      if (key && !process.env[key]) {
        process.env[key] = value;
      }
    });
}

loadEnv();

const defaultPort = 4000;
const parsedPort = Number(process.env.AI_GM_PORT ?? process.env.PORT);

export const config = {
  port: Number.isFinite(parsedPort) ? parsedPort : defaultPort,
  wsPath: process.env.AI_GM_WS_PATH ?? process.env.WS_PATH ?? "/ai-gm/ws",
  eventBusType: (process.env.EVENT_BUS_TYPE ?? "inMemory").toLowerCase() as "inmemory" | "mqtt",
  mqttUrl: process.env.MQTT_URL,
};
