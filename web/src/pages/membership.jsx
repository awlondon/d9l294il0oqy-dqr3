import { useMemo, useState } from 'react';
import Link from 'next/link';

const MAX_ACTIVE_MEMBERS = 350;

const membershipSnapshot = {
  active: 350,
  waitlisted: 28,
  invitesPending: 2,
  guestPassesIssuedThisMonth: 46
};

const waitlistExplainers = [
  {
    title: 'State A — spots available',
    copy: 'Active members are below the cap. Families can join immediately and start using supervised play and cowork perks.'
  },
  {
    title: 'State B — membership full',
    copy: 'Once we hit the cap, new join requests are waitlisted. We protect kid:adult ratios and preserve calm, safe experiences.'
  }
];

const guestPerks = [
  {
    title: 'Guest passes',
    copy: 'Members can generate limited QR/email passes for friends. Each pass tracks uses_remaining and expires_at.'
  },
  {
    title: 'Drop-in visits',
    copy: 'Non-pass visitors are welcome at day-rate pricing with limited perks. They can still enjoy the cafe and a short play block.'
  },
  {
    title: 'Invite a friend',
    copy: 'Share a guest pass link straight from the member portal. No pressure to join—just a low-stakes visit.'
  }
];

const yourStatusOptions = [
  { key: 'active', label: 'Active member', description: 'Unlimited monthly visits, lockers, and member pricing.' },
  { key: 'waitlisted', label: 'Waitlisted', description: 'We will invite you in order. Watch for your spot notification.' },
  { key: 'guest', label: 'Guest / drop-in', description: 'Visit with a guest pass or day rate; upgrade anytime.' }
];

const waitlistQueue = [
  { name: 'Priya Desai', position: 1, requested: '5 days ago' },
  { name: 'Sam and Jordan Chen', position: 2, requested: '1 week ago' },
  { name: 'River Morales', position: 3, requested: '1 week ago' }
];

const frontDeskActions = [
  'Scan guest pass QR or search by email to validate uses_remaining.',
  'Mark the visit access_tier as guest, member, or drop_in.',
  'Log check-in reason (cowork, play, cafe-only) to watch ratios and revenue mix.'
];

const MembershipPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('waitlisted');

  const queueSummary = useMemo(() => {
    if (selectedStatus !== 'waitlisted') return null;
    const person = waitlistQueue.find((item) => item.position === 2);
    return person ? person.position : waitlistQueue.length;
  }, [selectedStatus]);

  const membershipFull = membershipSnapshot.active >= MAX_ACTIVE_MEMBERS;

  return (
    <div className="bg-brand-sand">
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="badge bg-white/90 text-brand-espresso">Membership & access</p>
        <h1 className="mt-4 text-4xl font-heading font-extrabold text-brand-espresso">Capped membership with a clear waitlist</h1>
        <p className="mt-3 text-lg text-brand-espresso/80 max-w-3xl">
          We cap active members at {MAX_ACTIVE_MEMBERS} to protect safety and experience. When we reach the limit, new join requests move to a transparent waitlist. Guests and drop-ins can still enjoy the cafe.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card bg-white/90 lg:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Current load</p>
                <p className="text-2xl font-heading font-bold text-brand-espresso">
                  {membershipSnapshot.active} / {MAX_ACTIVE_MEMBERS} active members
                </p>
                <p className="text-brand-espresso/70">Waitlist: {membershipSnapshot.waitlisted} | Invites pending: {membershipSnapshot.invitesPending}</p>
              </div>
              <Link
                href={membershipFull ? '#waitlist' : '#join'}
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide shadow-soft transition ${
                  membershipFull ? 'bg-brand-espresso text-brand-sand hover:bg-brand-pine' : 'bg-brand-pine text-brand-sand hover:bg-brand-espresso'
                }`}
              >
                {membershipFull ? 'Membership full — join the waitlist' : 'Join as a member'}
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {waitlistExplainers.map((item) => (
                <div key={item.title} className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">{item.title}</p>
                  <p className="mt-2 text-brand-espresso/80">{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-brand-sage/70 bg-brand-sand/70 p-4" id="waitlist">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Waitlist promise</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-espresso/80">
                <li>Positions are assigned in order and visible to you. Lowest number moves first.</li>
                <li>When someone cancels, we invite the next person and give them 3 days to accept.</li>
                <li>If they decline or time out, we invite the next family automatically.</li>
              </ul>
            </div>
          </div>

          <div className="card bg-white/90" id="join">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Your status</p>
            <p className="mt-2 text-brand-espresso/80">
              Choose the example that matches you to see what happens next.
            </p>
            <div className="mt-4 space-y-3">
              {yourStatusOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSelectedStatus(option.key)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    selectedStatus === option.key
                      ? 'border-brand-pine bg-brand-sage/60 text-brand-espresso'
                      : 'border-brand-sage/60 bg-white text-brand-espresso/80 hover:border-brand-pine'
                  }`}
                >
                  <p className="font-semibold text-brand-espresso">{option.label}</p>
                  <p className="text-sm">{option.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-brand-sage/70 bg-brand-sand/70 p-3 text-sm text-brand-espresso/80">
              {selectedStatus === 'active' && (
                <p>Welcome in! Stop by anytime for supervised play, cowork, and member pricing. You’ll see guest pass totals in your portal.</p>
              )}
              {selectedStatus === 'waitlisted' && (
                <p>
                  You’re in line. Your current queue number is approximately {queueSummary}. We’ll email when a spot opens—accept within three days to activate.
                </p>
              )}
              {selectedStatus === 'guest' && (
                <p>
                  You can visit as a guest or drop-in today. Grab a guest pass from a member friend or check in at the desk for day-rate access.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card bg-white/90">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Guest access</p>
            <p className="mt-2 text-brand-espresso/80">Bring friends without breaking the member-first experience.</p>
            <div className="mt-4 space-y-3">
              {guestPerks.map((perk) => (
                <div key={perk.title} className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
                  <p className="font-semibold text-brand-espresso">{perk.title}</p>
                  <p className="text-brand-espresso/80">{perk.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-brand-sage/70 bg-brand-sand/70 p-3 text-sm text-brand-espresso/80">
              Members issued <strong>{membershipSnapshot.guestPassesIssuedThisMonth}</strong> guest passes this month. At the desk, we mark visits as <code>guest</code> or <code>drop_in</code> to keep ratios safe.
            </div>
          </div>

          <div className="card bg-white/90">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Front-desk tools</p>
            <p className="mt-2 text-brand-espresso/80">Quick actions to honor the cap and welcome visitors.</p>
            <form className="mt-4 space-y-3">
              <label className="block text-sm font-semibold text-brand-espresso" htmlFor="lookup-email">
                Look up a guest or member
              </label>
              <input
                id="lookup-email"
                className="w-full rounded-lg border border-brand-sage/60 bg-white px-3 py-2 text-brand-espresso focus:border-brand-pine focus:outline-none"
                placeholder="Email or QR code value"
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-full bg-brand-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-espresso"
                >
                  Apply guest pass
                </button>
                <button
                  type="button"
                  className="rounded-full border border-brand-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-pine transition hover:bg-brand-pine hover:text-brand-sand"
                >
                  Register drop-in
                </button>
              </div>
            </form>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-brand-espresso/80">
              {frontDeskActions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-brand-sage/70 bg-brand-sand/70 p-3 text-sm text-brand-espresso/80">
              Access tiers: <code>member</code>, <code>guest</code>, <code>drop_in</code>. Pricing and perks adjust automatically so members stay first in line.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="card bg-white/90">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Admin visibility</p>
              <p className="text-brand-espresso/80">See capacity, move waitlist positions, and trigger invites without breaking fairness.</p>
            </div>
            <Link
              href="/admin/membership"
              className="inline-flex items-center justify-center rounded-full bg-brand-espresso px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-sand shadow-soft transition hover:bg-brand-pine"
            >
              Open admin dashboard
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Active / cap</p>
              <p className="text-xl font-heading font-bold text-brand-espresso">{membershipSnapshot.active} / {MAX_ACTIVE_MEMBERS}</p>
              <p className="text-brand-espresso/70">Auto-waitlist when the cap is met.</p>
            </div>
            <div className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Waitlisted</p>
              <p className="text-xl font-heading font-bold text-brand-espresso">{membershipSnapshot.waitlisted}</p>
              <p className="text-brand-espresso/70">Positions and invites are logged.</p>
            </div>
            <div className="rounded-xl border border-brand-sage/60 bg-white/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pine">Invites pending</p>
              <p className="text-xl font-heading font-bold text-brand-espresso">{membershipSnapshot.invitesPending}</p>
              <p className="text-brand-espresso/70">Three-day response window.</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-brand-sage/70 bg-brand-sand/70 p-4 text-sm text-brand-espresso/80">
            We honor safety by keeping membership capped, preserving kid:adult ratios, and giving guests clear pathways via passes or drop-ins. No pressure, no tiers, just transparent access.
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
