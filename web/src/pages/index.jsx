import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Link from 'next/link';

const quickLinks = [
  { title: 'Explore zones', href: '/zones', copy: 'See the supervised play areas, focus pods, and café seating.' },
  { title: 'View the menu', href: '/menu', copy: 'Coffee, snacks, and meals designed for caregivers and kids.' },
  { title: 'Plan a party', href: '/party', copy: 'Book the multi-use room for celebrations or classes.' },
  { title: 'Our story', href: '/about', copy: 'Learn how the concept started and why local owners lead the way.' }
];

const familyBenefits = [
  {
    title: 'Space to focus',
    copy: 'Reliable Wi-Fi, charging, and flexible seating that make remote work feel doable with kids in tow.'
  },
  {
    title: 'Play with purpose',
    copy: 'Supervised play led by trained team members who balance safety, calm, and curiosity.'
  },
  {
    title: 'Hospitality that understands',
    copy: 'Coffee, bites, and a welcoming team that respects caregivers, children, and the work you’re here to do.'
  }
];

const ownerHighlights = [
  {
    title: 'Own the story in your city',
    copy: 'Become the face of Co.work.PLAY Café locally while using a proven, safety-first operating system.'
  },
  {
    title: 'Guardrails with room to adapt',
    copy: 'Follow the brand, safety, and hospitality standards, then tailor partnerships and programming to your market.'
  }
];

const IndexPage = () => {
  return (
    <div>
      <HeroSection />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link key={item.title} href={item.href} className="card block bg-white/90 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{item.title}</p>
              <p className="mt-2 text-brand-espresso/80">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="space-y-3">
          <h2 className="section-title">For families</h2>
          <p className="section-subtitle max-w-3xl">
            We built Co.work.PLAY Café so caregivers can stay close, stay productive, and still enjoy a warm, welcoming space with their
            kids.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {familyBenefits.map((benefit) => (
            <div key={benefit.title} className="card h-full bg-white/90 text-left backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{benefit.title}</p>
              <p className="mt-3 text-brand-espresso/80">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="section-title">For local owners</h2>
            <p className="section-subtitle">
              Own the story in your city. We provide the brand, safety standards, training, and tech platform; you build the culture and
              relationships that make the café thrive.
            </p>
            <div className="space-y-3">
              {ownerHighlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-brand-sage/60 bg-white/80 p-4 shadow-soft">
                  <p className="font-heading font-semibold text-brand-espresso">{item.title}</p>
                  <p className="text-brand-espresso/80">{item.copy}</p>
                </div>
              ))}
            </div>
            <Link
              href="/franchise"
              className="inline-flex w-fit items-center justify-center rounded-full bg-brand-pine px-5 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
            >
              Learn about franchise ownership
            </Link>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 shadow-soft">
            <AboutSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
