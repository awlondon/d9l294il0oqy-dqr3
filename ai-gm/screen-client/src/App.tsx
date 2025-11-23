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
  const [latestCommand, setLatestCommand] = useState<PlayCommand | undefined>(undefined);
  const screenId = useMemo(resolveScreenId, []);

  useEffect(() => {
    const wsUrl = `${import.meta.env.VITE_WS_URL ?? "ws://localhost:4000"}/ai-gm/ws?screenId=${screenId}`;
    const socket = connectToOrchestrator(wsUrl, setLatestCommand);
    return () => socket.close();
  }, [screenId]);

  const channel = resolveChannel(latestCommand);

  if (channel === "STAFF") {
    return <StaffScreen command={latestCommand} screenId={screenId} />;
  }
  return <CustomerScreen command={latestCommand} screenId={screenId} />;
};

export default App;
