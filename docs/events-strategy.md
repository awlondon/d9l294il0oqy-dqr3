> See also: ethics-and-influence.md

# Events Strategy

## Principles
- Events are value-first: education, community, and play-forward experiences for families.
- No surprise pitches; membership is mentioned gently as a way to deepen access.
- Clear labeling of free vs. paid events and whether RSVP is required.

## Data model
See `docs/tech/membership-and-access.md` for the `events` table and RSVP lead tagging.

## RSVP flow
1. Collect name + email; optional phone for on-site updates.
2. Confirm capacity before accepting the RSVP.
3. Tag non-members who attend as `attended_event:<event_id>` leads.
4. Post-event follow-up email: thanks for coming, link to guest passes, waitlist, and upcoming events.

## Programming examples
- Pediatric OT talk (education).
- Parent roundtable or coworking accountability hour (community).
- Family build days or music circles (playful learning).

## Explicitly forbid
- Surprise high-pressure pitches during events.
- Hidden upsell structures or gated access not stated upfront.
- Multi-level or rank-based rewards for hosting or inviting.
