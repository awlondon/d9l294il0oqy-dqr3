import { useMemo, useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Pediatric OT Talk: Calming Play at Home',
    description: 'A 45-minute conversation with a licensed OT about sensory-friendly play setups.',
    audience: 'parents',
    isFree: true,
    requiresRsvp: true,
    hostType: 'internal',
    capacity: 40,
    start: 'Thu 6:00p',
    end: 'Thu 6:45p'
  },
  {
    id: 2,
    title: 'Family Build Hour',
    description: 'Collaborative STEM stations for caregivers and kids to build side by side.',
    audience: 'families',
    isFree: false,
    requiresRsvp: true,
    hostType: 'partner',
    capacity: 30,
    start: 'Sat 10:00a',
    end: 'Sat 11:30a'
  },
  {
    id: 3,
    title: 'Members-only Breakfast & Founder Q&A',
    description: 'Ask questions about the roadmap and share feedback over pastries and espresso.',
    audience: 'parents',
    isFree: true,
    requiresRsvp: true,
    hostType: 'internal',
    capacity: 25,
    start: 'Fri 8:00a',
    end: 'Fri 9:00a',
    membersOnly: true
  }
];

const EventsPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return events;
    if (filter === 'members') return events.filter((event) => event.membersOnly);
    return events.filter((event) => event.audience === filter);
  }, [filter]);

  return (
    <div className="bg-brand-sand min-h-screen px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
      <p className="badge bg-white/90 text-brand-espresso">Events</p>
      <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Community-first programming</h1>
      <p className="mt-3 max-w-3xl text-lg text-brand-espresso/80">
        RSVPs only need name and email. We follow up with gentle invites to guest passes or the waitlist—never hard sells.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'All' },
          { key: 'parents', label: 'Parents' },
          { key: 'kids', label: 'Kids' },
          { key: 'families', label: 'Families' },
          { key: 'members', label: 'Members-only' }
        ].map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setFilter(option.key)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === option.key
                ? 'border-brand-pine bg-brand-pine text-brand-sand'
                : 'border-brand-sage/70 bg-white text-brand-espresso hover:border-brand-pine'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {filteredEvents.map((event) => (
          <div key={event.id} className="card bg-white/90">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{event.hostType} host</p>
                <h2 className="text-2xl font-heading font-bold text-brand-espresso">{event.title}</h2>
                <p className="text-brand-espresso/80">{event.description}</p>
                <p className="mt-2 text-sm text-brand-espresso/70">
                  Audience: {event.audience} · Capacity: {event.capacity} · {event.start}–{event.end}
                </p>
                <p className="mt-1 text-sm text-brand-espresso/70">
                  {event.requiresRsvp ? 'RSVP required' : 'Walk-ins ok'} · {event.isFree ? 'Free' : 'Paid'} {event.membersOnly ? ' · Members-only' : ''}
                </p>
              </div>
              <button
                type="button"
                className="rounded-full bg-brand-pine px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
              >
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Lead capture</p>
          <p className="mt-2 text-brand-espresso/80">
            When a non-member attends, we log them as a lead tagged <code>attended_event:&lt;event_id&gt;</code> and send a value-first recap.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-espresso/80">
            <li>Thanks for coming + link to slides or takeaways.</li>
            <li>Link to guest passes or day-rate drop-ins.</li>
            <li>Option to join the waitlist with transparent response windows.</li>
          </ul>
        </div>
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Programming rules</p>
          <p className="mt-2 text-brand-espresso/80">Value-first events only:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-espresso/80">
            <li>No surprise sales pitches or hidden upsells.</li>
            <li>Clearly mark free vs. paid, and whether RSVP is required.</li>
            <li>Keep hosts single-level—no ranks, downlines, or pressure.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
