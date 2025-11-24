import ZonesMap from '@/components/ZonesMap';

const ZonesPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Zones</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Nine thoughtful areas</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Scroll through our parallax map to see how open coworking, quiet pods, café energy, and supervised play knit together.
          Hover markers to learn what makes each space special.
        </p>
      </section>
      <ZonesMap />
    </div>
  );
};

export default ZonesPage;
