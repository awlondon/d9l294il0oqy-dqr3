import ZoneMarker from './ZoneMarker';

const zones = [
  { title: 'Open Cowork', description: 'Communal tables and lounge seating with power everywhere.', icon: '🧑‍💻', x: 30, y: 25 },
  { title: 'Quiet Cowork / Phone', description: 'Eight focus desks plus two phone rooms.', icon: '🤫', x: 55, y: 18 },
  { title: 'Café Seating & Lounge', description: 'Soft seating wrapped around the café bar.', icon: '☕', x: 20, y: 55 },
  { title: 'Café Bar & To-Go', description: 'Order specialty drinks and grab-and-go bites.', icon: '🥐', x: 48, y: 62 },
  { title: 'Main Toddler Play', description: 'Climbing cubes, slides, and imaginative play corners.', icon: '🧸', x: 70, y: 50 },
  { title: 'Under-2 & Sensory', description: 'Soft mats, sensory bins, and cozy lighting.', icon: '🌿', x: 75, y: 65 },
  { title: 'Multi-Use / Party Room', description: 'Bookable for classes, meetings, or weekend celebrations.', icon: '🎈', x: 60, y: 80 }
];

const ZonesMap = () => {
  return (
    <section className="relative overflow-hidden bg-brand-sage/20">
      <div
        className="relative mx-auto mt-6 h-[520px] max-w-6xl rounded-3xl shadow-soft"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(186, 209, 193, 0.35), transparent 40%), radial-gradient(circle at 85% 10%, rgba(247, 214, 176, 0.35), transparent 38%), linear-gradient(135deg, #f7f1e9 0%, #e6f0ea 100%)'
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.04)_1px,_transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-brand-sage/30" />
        <div className="relative h-full w-full">
          {zones.map((zone) => (
            <ZoneMarker key={zone.title} {...zone} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6">
        <h3 className="section-title">Every zone has a story</h3>
        <p className="section-subtitle mx-auto">
          Hover over each marker to see how the floor plan blends café culture, coworking focus, and play-forward safety.
        </p>
        <a
          href="/assets/floorplan.pdf"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-pine px-5 py-3 text-sm font-semibold text-brand-sand shadow-soft transition hover:bg-brand-espresso"
        >
          Download floorplan PDF
        </a>
      </div>
    </section>
  );
};

export default ZonesMap;
