import React from "react";
import styles from "./Screen.module.css";

interface Props {
  text?: string;
  tone: "STAFF" | "CUSTOMER";
}

export const OverlayText: React.FC<Props> = ({ text, tone }) => {
  if (!text) return null;
  const themeClass = tone === "STAFF" ? styles.staffOverlay : styles.customerOverlay;
  return <div className={`${styles.overlay} ${themeClass}`}>{text}</div>;
};
