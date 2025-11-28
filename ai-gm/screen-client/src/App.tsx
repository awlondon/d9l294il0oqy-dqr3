import React, { useEffect, useMemo, useState } from "react";
import { connectToOrchestrator, PlayCommand } from "./api";
import { CustomerScreen } from "./components/CustomerScreen";
import { StaffScreen } from "./components/StaffScreen";

function resolveScreenId(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("screenId") ?? import.meta.env.VITE_SCREEN_ID ?? "F1_PLAY_INFO_01";
}

function resolveChannel(command?: PlayCommand): "STAFF" | "CUSTOMER" {
  return command?.channel ?? "CUSTOMER";
}

export const App: React.FC = () => {
  const [commands, setCommands] = useState<PlayCommand[]>([]);
  const [connected, setConnected] = useState(true);
  const screenId = useMemo(resolveScreenId, []);

  useEffect(() => {
    let active = true;
    const wsUrl = `${import.meta.env.VITE_WS_URL ?? "ws://localhost:4000"}/ai-gm/ws?screenId=${screenId}`;
    const socket = connectToOrchestrator(
      wsUrl,
      (cmd) =>
        setCommands((prev) => {
          const withExpiry = { ...cmd, expiresAt: Date.now() + cmd.durationSeconds * 1000 } as PlayCommand & {
            expiresAt: number;
          };
          return [...prev.filter((c) => c.intentId !== withExpiry.intentId), withExpiry].sort(
            (a, b) => b.priority - a.priority,
          );
        }),
      () => active && setConnected(false),
      () => active && setConnected(true),
      () => active,
    );

    const interval = setInterval(() => {
      setCommands((prev) => prev.filter((cmd: any) => !cmd.expiresAt || cmd.expiresAt > Date.now()));
    }, 1000);

    return () => {
      active = false;
      clearInterval(interval);
      socket.close();
    };
  }, [screenId]);

  const latestCommand = commands[0];
  const channel = resolveChannel(latestCommand);

  if (channel === "STAFF") {
    return <StaffScreen command={latestCommand} screenId={screenId} connected={connected} />;
  }
  return <CustomerScreen command={latestCommand} screenId={screenId} connected={connected} />;
};

export default App;
