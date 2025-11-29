# Membership, Waitlist, and Access Controls

## Purpose
Define the data model and logic for a capped membership program with a waitlist, guest access, and ethical referral/lead flows.

## Configuration
- `MAX_ACTIVE_MEMBERS = 350`
- `WAITLIST_RESPONSE_WINDOW_DAYS = 3` (adjustable per market)
- `MEMBER_GUEST_PASSES_PER_MONTH = 4` (default, configurable)

## Data model
### `memberships`
- `id`
- `member_name`
- `email`
- `status` (`active`, `paused`, `canceled`, `waitlisted`)
- `joined_at`
- `canceled_at`
- `waitlist_position` (nullable integer; lower number = higher priority)
- `access_tier` (`member`, `guest`, `drop_in`) for visit-level overrides

### `guest_passes`
- `id`
- `issued_to_email`
- `issued_by_member_id` (nullable)
- `uses_remaining`
- `expires_at`
- `notes` (e.g., "Friend of Alex / school meetup")

### `referrals`
- `id`
- `referrer_member_id` (nullable)
- `referred_email`
- `referred_status` (`invited`, `visited`, `joined_member`, `joined_waitlist`)
- `created_at`

### `franchise_interest`
- `id`
- `name`
- `email`
- `city`
- `how_you_heard_about_us`
- `referred_by_franchisee_id` (nullable)
- `created_at`

### `events`
- `id`
- `title`
- `description`
- `host_type` (`internal`, `partner`)
- `target_audience` (`parents`, `kids`, `families`)
- `is_free` (bool)
- `capacity`
- `requires_rsvp` (bool)
- `start_time`, `end_time`

### `community_posts`
- `id`
- `author_name`
- `contact_info`
- `category` (`offering`, `seeking`, `event`, `announcement`)
- `content`
- `created_at`
- `is_approved` (bool)

### `contributors`
- `id`
- `member_id` (nullable)
- `role` (e.g., `event_helper`, `skill_sharing`, `community_board_moderator`)
- `hours_logged`
- `perks_earned` (JSON or relational)

### `perks`
- `id`
- `name`
- `description`
- `eligibility_hours`

## Business rules
### Joining & waitlist
- When `active_members_count >= MAX_ACTIVE_MEMBERS`, new join requests are recorded with `status = waitlisted` and the next sequential `waitlist_position`.
- When a member cancels:
  - Set `status = canceled`, `canceled_at = now`.
  - Automatically select the waitlisted record with the **lowest** `waitlist_position`.
  - Notify them: "Spot available; you have X days to accept."
  - If they accept within `WAITLIST_RESPONSE_WINDOW_DAYS` → set `status = active`, clear `waitlist_position`.
  - If they decline or time out → move to the next waitlisted person and increment the invitation log.

### Guest passes & drop-ins
- Members can generate up to `MEMBER_GUEST_PASSES_PER_MONTH` active passes per calendar month.
- A guest pass check-in marks the visitor `access_tier = guest` for the visit and decrements `uses_remaining`.
- Drop-in visitors are allowed with `access_tier = drop_in` and higher day-rate pricing; no member perks or lockers.

### Referrals (ethical guardrails)
- A single-level thank-you only: credit the referrer with a light perk when a referred person visits or joins.
- **Never** add levels, downlines, ranks, or escalating payouts.
- Track referral status updates without coercive scripts.

### Events & leads
- RSVP requires only name + email; seat is tentative until confirmed.
- When a non-member attends, create/attach a lead tagged `attended_event:<event_id>`.
- After the event, trigger a follow-up email linking to guest passes and the waitlist without hard-sell copy.

### Community board moderation
- Posts require approval before publishing.
- No algorithmic ranking; sort chronologically within category.
- Reject MLM recruitment, predatory offers, and unsafe content per `community-board-guidelines.md`.

### Contributors
- Applications are optional; members and non-members can offer skills.
- Admin approval required before scheduling.
- Perks are flat and modest (e.g., coffee, hour of play) with no rank ladders.
- Contributors can pause/stop at any time without penalty.

## Admin flows
- **Waitlist movement:** Admins can nudge `waitlist_position` up/down to correct ordering errors; changes are logged.
- **Invite to membership:** Sends an accept/decline link tied to the response window; on expiration, the invite is reassigned automatically.
- **Guest pass oversight:** Surface pass issuance and usage to prevent abuse and ensure ratios remain safe.
- **Franchise interest:** Capture leads and route to the expansion team; no compensation or multi-level incentives.

## Email/notification templates
- Waitlist invite: "A spot is open. Please accept within X days to activate your membership. If now isn’t right, tap decline and we’ll offer it to the next family."
- Drop-in recap: "Thanks for visiting as a drop-in. If you want recurring access or supervised play, join as a member or grab a guest pass." 
- Referral thank-you: "Thanks for inviting a friend. Enjoy a free coffee—no obligation for them to join."
