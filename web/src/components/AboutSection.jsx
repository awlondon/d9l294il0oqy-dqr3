const pillars = [
  {
    title: 'Real work happens here',
    copy: 'Quiet cowork areas, focus pods, and reliable Wi-Fi keep projects moving while little ones play close by.'
  },
  {
    title: 'Safe, joyful play',
    copy: 'Supervised zones, calming textures, and sightlines that help caregivers exhale without losing connection.'
  },
  {
    title: 'Hospitality-forward cafe',
    copy: 'Great coffee, snacks, and meals that honor the rhythms of families and the pace of real workdays.'
  },
  {
    title: 'Local and connected',
    copy: 'Every location is locally owned and rooted in its neighborhood, supported by a shared playbook and standards.'
  }
];

const AboutSection = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <div className="space-y-4 text-center">
      <h2 className="section-title">What Co.work.PLAY Cafe is</h2>
      <p className="section-subtitle mx-auto">
        A place where caregivers can get real work done while their kids play nearby, safely and joyfully. We combine
        coworking comfort, supervised play, and a hospitality-first cafe under one roof so families feel welcome and
        focused.
      </p>
    </div>
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {pillars.map((pillar) => (
        <div key={pillar.title} className="card h-full text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{pillar.title}</p>
          <p className="mt-3 text-brand-espresso/80">{pillar.copy}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
