import React from "react";
import { PlayCommand } from "../api";
import { OverlayText } from "./OverlayText";
import { VideoPlayer } from "./VideoPlayer";

interface Props {
  command?: PlayCommand;
  screenId: string;
}

export const CustomerScreen: React.FC<Props> = ({ command, screenId }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(135deg, #061a2f, #0b2947)",
        color: "#eaf5ff",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <header style={{ marginBottom: "18px" }}>
        <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>AI GM · Guest Mirror</div>
        <div style={{ fontWeight: 700, fontSize: "1.3rem" }}>{screenId}</div>
      </header>
      <VideoPlayer tone="CUSTOMER" videoUrl={command?.videoUrl} />
      <OverlayText tone="CUSTOMER" text={command?.overlayText} />
    </div>
  );
};
