import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">About</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Community-first cowork + play</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          We exist to make caregivers feel seen while keeping creative work flowing. From the calm café bar to the kids’
          sensory corners, every zone honors warm modern textures and hospitality-forward service.
        </p>
      </section>
      <AboutSection />
    </div>
  );
};

export default AboutPage;
