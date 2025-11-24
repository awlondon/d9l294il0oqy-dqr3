import { useEffect, useState } from 'react';

const statusStyles = {
  Available: 'bg-green-100 text-green-800 ring-green-500/50',
  Full: 'bg-red-100 text-red-800 ring-red-500/50',
  Refreshing: 'bg-amber-100 text-amber-800 ring-amber-500/50'
};

const PlayStatus = () => {
  const [status, setStatus] = useState('Refreshing');

  useEffect(() => {
    const statuses = ['Available', 'Full'];
    const update = () => {
      const next = statuses[Math.floor(Math.random() * statuses.length)];
      setStatus(next);
    };
    update();
    const id = setInterval(update, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`card flex items-center justify-between bg-white/90 ring-2 ${statusStyles[status] || ''}`}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Play area status</p>
        <p className="mt-2 text-lg font-heading text-brand-espresso">Main play zone</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-current" />
        <span className="text-sm font-semibold">{status}</span>
      </div>
    </div>
  );
};

export default PlayStatus;
