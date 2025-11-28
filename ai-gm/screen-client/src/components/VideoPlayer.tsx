import React from "react";
import styles from "./Screen.module.css";

interface Props {
  videoUrl?: string;
  tone: "STAFF" | "CUSTOMER";
}

export const VideoPlayer: React.FC<Props> = ({ videoUrl, tone }) => {
  const fallback =
    tone === "STAFF" ? "/media/staff/mastermind_parrot_generic.mp4" : "/media/customer/ambient_info_generic.mp4";
  const urlToPlay = videoUrl || fallback;

  return (
    <div className={styles.videoWrapper}>
      <video
        src={urlToPlay}
        style={{ width: "100%", borderRadius: "12px", background: "black" }}
        autoPlay
        muted
        loop
        controls={false}
      />
    </div>
  );
};
