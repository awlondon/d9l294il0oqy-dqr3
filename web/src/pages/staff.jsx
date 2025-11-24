import { useState } from 'react';
import PlayStatus from '@/components/PlayStatus';
import VideoPlayer from '@/components/VideoPlayer';

const screens = ['F1_PLAY_INFO_01', 'F1_ENTRY_INFO_01', 'F1_PLAY_INFO_02'];

const StaffPage = () => {
  const [screenId, setScreenId] = useState(screens[0]);

  const handleOpen = () => {
    const url = `/screen-client?screenId=${encodeURIComponent(screenId)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Staff portal</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Training + live status</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Launch the AI-GM screen client and review the latest Sora training clips to keep guests informed.
        </p>
      </section>
      <div className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-3">
        <div className="card bg-white/90 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Screen ID</p>
          <p className="mt-2 text-brand-espresso/80">Select the screen to pair with the AI-GM client.</p>
          <select
            className="mt-4 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
            value={screenId}
            onChange={(e) => setScreenId(e.target.value)}
          >
            {screens.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleOpen}
            className="mt-4 w-full rounded-full bg-brand-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
          >
            Open screen client
          </button>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <VideoPlayer src="/assets/play-area.mp4" title="Sora training clip" autoPlay muted loop />
          <PlayStatus />
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
