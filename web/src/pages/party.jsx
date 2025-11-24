import BookingForm from '@/components/BookingForm';

const PartyPage = () => {
  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Party</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Multi-use room bookings</h1>
        <p className="mt-3 text-lg text-brand-espresso/80">
          Host high-capacity parties, maker classes, or cozy celebrations with our modular tables, warm lighting, and catering partners.
          Bookable by appointment.
        </p>
      </section>
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">What to expect</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-espresso/80">
            <li>Capacity for up to 30 guests with flexible seating.</li>
            <li>Theme-ready decor hooks plus AV for slideshows or music.</li>
            <li>Café-led catering or outside vendors by request.</li>
          </ul>
        </div>
        <div className="mt-6">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default PartyPage;
