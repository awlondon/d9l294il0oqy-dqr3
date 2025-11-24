import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  type: '',
  guests: '',
  message: ''
};

const BookingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulated post to /api/party-inquiry
    console.log('Submitting inquiry', form);
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-white/90 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Party type
          <input
            name="type"
            placeholder="Birthday, class, meeting"
            value={form.type}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Desired date
          <input
            required
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Desired time
          <input
            required
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso">
          Number of guests
          <input
            required
            type="number"
            min="1"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-brand-espresso sm:col-span-2">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-lg border border-brand-sage/50 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
            placeholder="Let us know about themes, catering, or accessibility needs"
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
      >
        Submit inquiry
      </button>
      {submitted && <p className="text-sm text-green-700">Thanks! We’ll confirm your party room availability shortly.</p>}
    </form>
  );
};

export default BookingForm;
