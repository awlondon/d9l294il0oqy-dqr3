import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">About</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Built for caregivers, kids, and local owners</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Co.work.PLAY Café is a system, not a personality brand. We exist so caregivers can do real work while children play nearby,
          and so local owners can bring that promise to life in their own communities.
        </p>
      </section>

      <AboutSection />

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="space-y-4">
          <h2 className="section-title">Origin story (without ego)</h2>
          <p className="section-subtitle">
            Co.work.PLAY Café was co-founded by Alexander Warren London and Savannah Strasner with early support from Michael Strasner.
            The flagship in Phoenix serves as a prototype and training hub, proving that caregivers can work and kids can play in the same
            calm, supervised space. From day one, the goal has been a replicable system—not a founder spotlight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="space-y-4">
          <h2 className="section-title">Ownership-first model</h2>
          <p className="section-subtitle">
            Local franchise owners are the face of Co.work.PLAY Café in their neighborhoods. Corporate maintains the playbook—brand,
            safety, operating model, training, and tech—while each owner adapts within clear guardrails to serve their market.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
              <h3 className="text-xl font-heading font-semibold text-brand-espresso">How we share the work</h3>
              <ul className="mt-4 space-y-3 text-brand-espresso/80">
                <li>• Local owners lead the day-to-day experience and community relationships.</li>
                <li>• Corporate provides standards for safety, hospitality, brand, and kids’ programming.</li>
                <li>• Training, technology, and ongoing support keep every location aligned and trusted.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/90 p-6 shadow-soft">
              <h3 className="text-xl font-heading font-semibold text-brand-espresso">Guardrails with room to adapt</h3>
              <ul className="mt-4 space-y-3 text-brand-espresso/80">
                <li>• Safety, wellness, and brand basics stay consistent everywhere.</li>
                <li>• Owners tailor partnerships, local programming, and team culture to their city.</li>
                <li>• Feedback flows both ways so the system keeps improving without losing local flavor.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-brand-sage/70 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-heading font-semibold text-brand-espresso">Our Promise to Families</h3>
          <p className="mt-3 text-brand-espresso/80">
            Every Co.work.PLAY Café honors safety, calm, and respect for caregivers and children. We keep sightlines open, maintain a
            predictable rhythm, and welcome feedback so everyone feels at ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
