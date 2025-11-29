> See also: ethics-and-influence.md

# Referrals and Thank-Yous

## Purpose
Enable members and community partners to invite friends without pressure, ranks, or multi-level incentives.

## Data model
- `referrals` table (see `docs/tech/membership-and-access.md`).

## Flows
1. Member or partner sends an invite to a friend.
2. When the friend visits, RSVPs, or joins a waitlist/membership, update `referred_status`.
3. Trigger a light, one-time thank-you perk (e.g., coffee, snack credit) for the referrer.
4. Stop there—no stacking tiers or ongoing quotas.

## Guardrails
- **No scripts to close friends/family.** Invitations are optional, not obligations.
- **Single-level only.** Do not add downlines, ranks, or leaderboards.
- **Consent-first.** Referred guests control their communication preferences.

## Messaging examples
- "If you love this place, you can invite a friend. If you don’t, that’s totally fine too."
- "Thanks for bringing a friend by. Enjoy a coffee on us—no strings attached."
