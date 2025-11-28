export interface PlayCommandMessage<T> {
  type: "PLAY_COMMAND";
  data: T;
}

export interface PlayCommand {
  id: string;
  intentId: string;
  intentType?: string;
  screenId: string;
  channel: "STAFF" | "CUSTOMER";
  priority: number;
  videoUrl?: string;
  overlayText?: string;
  startTime: "NOW" | string;
  durationSeconds: number;
  expiresAt?: number;
}

export function connectToOrchestrator(
  wsUrl: string,
  onCommand: (command: PlayCommand) => void,
  onDisconnect: () => void,
  onReconnect: () => void,
  shouldReconnect: () => boolean = () => true,
): WebSocket {
  const socket = new WebSocket(wsUrl);
  socket.addEventListener("message", (event) => {
    try {
      const payload = JSON.parse(event.data) as PlayCommandMessage<PlayCommand>;
      if (payload.type === "PLAY_COMMAND") {
        onCommand(payload.data);
      }
    } catch (err) {
      console.error("Failed to parse message", err);
    }
  });

  socket.addEventListener("close", () => {
    onDisconnect();
    setTimeout(() => {
      if (!shouldReconnect()) {
        return;
      }
      const next = connectToOrchestrator(wsUrl, onCommand, onDisconnect, onReconnect, shouldReconnect);
      onReconnect();
      return next;
    }, 2000);
  });

  return socket;
}
