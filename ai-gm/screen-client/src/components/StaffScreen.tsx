import React from "react";
import { PlayCommand } from "../api";
import { OverlayText } from "./OverlayText";
import { VideoPlayer } from "./VideoPlayer";

interface Props {
  command?: PlayCommand;
  screenId: string;
}

export const StaffScreen: React.FC<Props> = ({ command, screenId }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "radial-gradient(circle at 20% 20%, rgba(65,105,225,0.08), #050915)",
        color: "#d1ddff",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <header style={{ marginBottom: "18px" }}>
        <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>AI GM · Staff Control Room</div>
        <div style={{ fontWeight: 700, fontSize: "1.3rem" }}>{screenId}</div>
      </header>
      <VideoPlayer tone="STAFF" videoUrl={command?.videoUrl} />
      <OverlayText tone="STAFF" text={command?.overlayText} />
    </div>
  );
};
