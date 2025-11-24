# Day-Pass → Member Conversion Analytics Spec

## 5.1 IDs & Events
- **family_id (stable)** — Primary key across visits and membership lifecycle.
- **Events to log:**
  - `visit` — includes `visit_type` (day_pass | member | party), timestamp, channel (walk-in, paid ads, referral), check-in location.
  - `membership_started` — includes `family_id`, `plan_type`, `start_date`, acquisition channel, associated visit_id if triggered from a visit.
  - `membership_cancelled` — includes `family_id`, `cancel_date`, reason code, contract term if applicable.

## 5.2 Funnel Metrics
- Day-pass → second visit within 30 days.
- Day-pass → membership within 60 days.
- Time from first visit to membership start (distribution and median).
- Membership retention checkpoints at 3, 6, and 12 months.
- Cohort view: conversion and retention by acquisition channel (walk-in, paid ads, referral) and by location.

## 5.3 Data Destination
- Events should land in the analytics warehouse (or a queryable transactional DB) with timestamps and foreign keys to `family_id`.
- Required dashboards / queries:
  - "Last 90 days: day-pass → member conversion" with filters for channel and location.
  - "Conversion by acquisition channel" showing volume, conversion %, and time-to-membership.
  - Retention curves for members acquired from day-pass vs. direct membership sign-ups.
- Keep payloads lightweight so they can feed BI tools or embedded dashboards without additional ETL.
