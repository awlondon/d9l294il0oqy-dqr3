const defaultPort = 4000;
const parsedPort = Number(process.env.AI_GM_PORT ?? process.env.PORT);

export const config = {
  port: Number.isFinite(parsedPort) ? parsedPort : defaultPort,
  wsPath: process.env.AI_GM_WS_PATH ?? process.env.WS_PATH ?? "/ai-gm/ws",
};
