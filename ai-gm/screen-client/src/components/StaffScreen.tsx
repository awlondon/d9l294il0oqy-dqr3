import React from "react";
import { PlayCommand } from "../api";
import { OverlayText } from "./OverlayText";
import { VideoPlayer } from "./VideoPlayer";
import styles from "./Screen.module.css";

interface Props {
  command?: PlayCommand;
  screenId: string;
  connected: boolean;
}

export const StaffScreen: React.FC<Props> = ({ command, screenId, connected }) => {
  return (
    <div className={`${styles.container} ${styles.staffTheme}`}>
      <header className={styles.header}>
        <div className={styles.subheader}>AI GM · Staff Control Room</div>
        <div className={styles.title}>{screenId}</div>
      </header>
      {!connected && <div className={styles.connection}>Reconnecting…</div>}
      <VideoPlayer tone="STAFF" videoUrl={command?.videoUrl} />
      <OverlayText tone="STAFF" text={command?.overlayText} />
    </div>
  );
};
