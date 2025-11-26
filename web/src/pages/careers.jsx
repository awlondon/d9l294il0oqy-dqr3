const careerHighlights = [
  {
    title: 'Here because we want to be',
    copy: 'We choose this work because supporting caregivers and kids matters. It’s hospitality with heart and purpose.'
  },
  {
    title: 'Clear expectations',
    copy: 'Predictable schedules, transparent responsibilities, and feedback that helps you grow.'
  },
  {
    title: 'Psychological safety',
    copy: 'Kindness, professionalism, and space to speak up when something feels off—especially around safety.'
  }
];

const rolePrinciples = [
  'Serve caregivers, children, and teammates with respect and warmth.',
  'Stay comfortable working around kids and in a café setting.',
  'Keep spaces calm, clean, and aligned with our safety standards.',
  'Collaborate with your team and practice honest, timely communication.',
  'Seek growth opportunities where possible, from new skills to leadership moments.'
];

const CareersPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Careers</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Join a team that wants to be here</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Work at Co.work.PLAY Café is intentional and meaningful. We support caregivers, kids, and each other with clear expectations
          and a culture grounded in safety, hospitality, and respect.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="space-y-3">
          <h2 className="section-title">Why We Work Here</h2>
          <p className="section-subtitle">
            Our team is here by choice. The work can be intense—families, food, and play under one roof—but it’s rewarding when everyone
            feels seen and supported.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerHighlights.map((item) => (
            <div key={item.title} className="card h-full bg-white/90 text-left backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{item.title}</p>
              <p className="mt-3 text-brand-espresso/80">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso">Culture and role expectations</h2>
          <p className="mt-3 text-brand-espresso/80">
            Purpose-driven roles at Co.work.PLAY Café blend hospitality and childcare support. We look for team members who are calm under
            pressure, kind to families, and committed to safety.
          </p>
          <ul className="mt-4 space-y-3 text-brand-espresso/80">
            {rolePrinciples.map((principle) => (
              <li key={principle}>• {principle}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
