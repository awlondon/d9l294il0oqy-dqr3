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

export const CustomerScreen: React.FC<Props> = ({ command, screenId, connected }) => {
  return (
    <div className={`${styles.container} ${styles.customerTheme}`}>
      <header className={styles.header}>
        <div className={styles.subheader}>AI GM · Guest Mirror</div>
        <div className={styles.title}>{screenId}</div>
      </header>
      {!connected && <div className={styles.connection}>Reconnecting…</div>}
      <VideoPlayer tone="CUSTOMER" videoUrl={command?.videoUrl} />
      <OverlayText tone="CUSTOMER" text={command?.overlayText} />
    </div>
  );
};
