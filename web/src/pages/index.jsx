import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Link from 'next/link';

const quickLinks = [
  { title: 'Explore zones', href: '/zones', copy: 'Hover-friendly markers and an interactive floor plan.' },
  { title: 'View the menu', href: '/menu', copy: 'Specialty coffee, playful kids plates, and snacks to fuel work.' },
  { title: 'Plan a party', href: '/party', copy: 'Book the multi-use room for celebrations or classes.' }
];

const IndexPage = () => {
  return (
    <div>
      <HeroSection />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <Link key={item.title} href={item.href} className="card block bg-white/90 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{item.title}</p>
              <p className="mt-2 text-brand-espresso/80">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>
      <AboutSection />
    </div>
  );
};

export default IndexPage;
