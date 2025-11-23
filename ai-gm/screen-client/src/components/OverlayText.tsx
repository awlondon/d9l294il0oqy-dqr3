import React from "react";

interface Props {
  text?: string;
  tone: "STAFF" | "CUSTOMER";
}

export const OverlayText: React.FC<Props> = ({ text, tone }) => {
  if (!text) return null;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        background: tone === "STAFF" ? "rgba(30,30,60,0.7)" : "rgba(20,70,120,0.65)",
        color: "#f5f7ff",
        fontSize: "1.1rem",
        lineHeight: 1.5,
      }}
    >
      {text}
    </div>
  );
};
