import { useState } from 'react';

const VideoPlayer = ({ src, title = 'Clip', autoPlay = false, muted = false, loop = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-soft bg-black">
      <video
        className="h-full w-full"
        src={src}
        title={title}
        playsInline
        controls
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-espresso/60 to-transparent">
          <div className="h-14 w-14 rounded-full bg-white/90 text-brand-espresso shadow-soft ring-4 ring-brand-sunset/60" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
