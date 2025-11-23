import React from "react";

interface Props {
  videoUrl?: string;
  tone: "STAFF" | "CUSTOMER";
}

export const VideoPlayer: React.FC<Props> = ({ videoUrl, tone }) => {
  return (
    <div
      style={{
        background: tone === "STAFF" ? "#0f1b2d" : "#0d304f",
        color: "#e7ecf5",
        border: "2px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "32px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Playing</div>
        <div style={{ fontFamily: "monospace", marginTop: "8px" }}>{videoUrl ?? "Idle"}</div>
      </div>
    </div>
  );
};
