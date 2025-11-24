const pillars = [
  { title: 'Safe & Seen', copy: 'Design-forward supervision sightlines so caregivers can exhale while kids explore freely.' },
  { title: 'Productive & Calm', copy: 'Acoustic treatments, focus pods, and reliable Wi-Fi to keep work moving between cuddles.' },
  { title: 'Warm Modern', copy: 'Light wood textures, greenery, and soft shapes inspired by biophilic play cues.' },
  { title: 'Community Heartbeat', copy: 'Programming and pop-ups that connect caregivers, founders, and kids in one clubhouse.' }
];

const AboutSection = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <div className="space-y-4 text-center">
      <h2 className="section-title">Built for the way families work now</h2>
      <p className="section-subtitle mx-auto">
        Our flagship café blends specialty coffee, quick-serve food, and kids’ bento options with open seating,
        focus pods, and supervised play zones. It’s a community-driven work+play mission where caregivers stay productive
        and kids feel celebrated.
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
