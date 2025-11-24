import { useState } from 'react';

const ZoneMarker = ({ x, y, title, description, icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="group relative flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sunset text-brand-espresso shadow-soft transition group-hover:-translate-y-1 group-hover:shadow-lg">
          {icon}
        </span>
        {hover && (
          <div className="absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-xl bg-white p-3 text-xs text-brand-espresso shadow-soft">
            <p className="font-heading text-sm font-semibold">{title}</p>
            <p className="mt-1 text-brand-espresso/80">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZoneMarker;
