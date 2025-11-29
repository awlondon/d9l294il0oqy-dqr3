import { useMemo, useState } from 'react';

const MAX_ACTIVE_MEMBERS = 350;

const initialWaitlist = [
  { id: 1, name: 'Priya Desai', email: 'priya@example.com', waitlist_position: 1, requestedAt: '5 days ago' },
  { id: 2, name: 'Sam and Jordan Chen', email: 'thechens@example.com', waitlist_position: 2, requestedAt: '1 week ago' },
  { id: 3, name: 'River Morales', email: 'river@example.com', waitlist_position: 3, requestedAt: '1 week ago' },
  { id: 4, name: 'Aiden Brooks', email: 'aiden@example.com', waitlist_position: 4, requestedAt: '2 weeks ago' }
];

const AdminMembershipPage = () => {
  const [activeMembers] = useState(350);
  const [waitlist, setWaitlist] = useState(initialWaitlist);
  const [invited, setInvited] = useState(null);

  const totalWaitlisted = useMemo(() => waitlist.length, [waitlist]);

  const movePosition = (id, direction) => {
    setWaitlist((list) => {
      const index = list.findIndex((item) => item.id === id);
      if (index === -1) return list;
      if ((direction === 'up' && index === 0) || (direction === 'down' && index === list.length - 1)) {
        return list;
      }

      const updated = [...list];
      const swapWith = direction === 'up' ? index - 1 : index + 1;
      [updated[index], updated[swapWith]] = [updated[swapWith], updated[index]];

      return updated.map((item, newIndex) => ({ ...item, waitlist_position: newIndex + 1 }));
    });
  };

  const handleInvite = (id) => {
    const person = waitlist.find((entry) => entry.id === id);
    // IMPORTANT: This is a simple, single-level invitation—do NOT extend into rank-based or multi-level incentives.
    setInvited(person ? person.name : null);
  };

  return (
    <div className="bg-brand-sand min-h-screen px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
      <p className="badge bg-white/90 text-brand-espresso">Admin dashboard</p>
      <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Membership capacity & waitlist</h1>
      <p className="mt-3 max-w-3xl text-lg text-brand-espresso/80">
        Monitor the capped program, move waitlist positions when needed, and trigger invitations that respect the three-day response window.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Active members</p>
          <p className="text-2xl font-heading font-bold text-brand-espresso">{activeMembers} / {MAX_ACTIVE_MEMBERS}</p>
          <p className="text-brand-espresso/70">Auto-waitlist once the cap is reached.</p>
        </div>
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Waitlisted</p>
          <p className="text-2xl font-heading font-bold text-brand-espresso">{totalWaitlisted}</p>
          <p className="text-brand-espresso/70">Positions are lowest-number-first.</p>
        </div>
        <div className="card bg-white/90">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Invites</p>
          <p className="text-2xl font-heading font-bold text-brand-espresso">3-day window</p>
          <p className="text-brand-espresso/70">Auto-advance if declined or expired.</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-brand-sage/60 bg-white/95 p-6 shadow-soft">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Waitlist</p>
            <p className="text-brand-espresso/80">Reorder only for fairness/ops corrections; log adjustments.</p>
          </div>
          <div className="rounded-full bg-brand-sand px-4 py-2 text-sm font-semibold text-brand-espresso">
            Lowest number moves first
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-brand-espresso">
            <thead>
              <tr className="border-b border-brand-sage/50 text-xs uppercase tracking-wide text-brand-espresso/70">
                <th className="px-3 py-2">Position</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Requested</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {waitlist.map((entry) => (
                <tr key={entry.id} className="border-b border-brand-sage/40 last:border-0">
                  <td className="px-3 py-3 font-heading font-semibold">{entry.waitlist_position}</td>
                  <td className="px-3 py-3">{entry.name}</td>
                  <td className="px-3 py-3 text-brand-espresso/80">{entry.email}</td>
                  <td className="px-3 py-3 text-brand-espresso/80">{entry.requestedAt}</td>
                  <td className="px-3 py-3">
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-full border border-brand-pine px-3 py-2 text-xs font-semibold uppercase tracking-wide text-brand-pine transition hover:bg-brand-pine hover:text-brand-sand"
                        onClick={() => movePosition(entry.id, 'up')}
                        aria-label={`Move ${entry.name} up`}
                      >
                        Move up
                      </button>
                      <button
                        type="button"
                        className="rounded-full border border-brand-pine px-3 py-2 text-xs font-semibold uppercase tracking-wide text-brand-pine transition hover:bg-brand-pine hover:text-brand-sand"
                        onClick={() => movePosition(entry.id, 'down')}
                        aria-label={`Move ${entry.name} down`}
                      >
                        Move down
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-brand-espresso px-3 py-2 text-xs font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-pine"
                        onClick={() => handleInvite(entry.id)}
                        aria-label={`Invite ${entry.name}`}
                      >
                        Invite to membership
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-brand-sage/70 bg-brand-sand/70 p-4 text-sm text-brand-espresso/80">
          <p className="font-semibold text-brand-espresso">Waitlist rules</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Respect first-come order; only move positions to correct errors or accessibility needs.</li>
            <li>Send invites to the lowest position first with a three-day acceptance timer.</li>
            <li>If declined or expired, immediately notify the next person and log the action.</li>
          </ul>
        </div>
        {invited && (
          <div className="mt-4 rounded-xl border border-brand-pine bg-brand-sage/70 p-4 text-sm text-brand-espresso">
            <p className="font-heading font-semibold text-brand-espresso">Invite sent</p>
            <p>
              Spot available for <strong>{invited}</strong>. They have 3 days to accept before we invite the next waitlisted family.
            </p>
            <p className="mt-1 text-brand-espresso/80">
              IMPORTANT: This is a simple, single-level invitation—do NOT add rank-based perks or downline logic.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMembershipPage;
