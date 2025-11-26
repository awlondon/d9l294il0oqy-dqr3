# Robot Food Glider Integration

Phased approach to introducing robotic runners for café orders.

**Delivery V1 = manual runners using seat codes printed on signage, KDS tickets, and labels. Robots are a later drop-in replaceability test, not required at launch.**

## Physical Requirements
- **Lanes:** Clear, level lanes at least 36–42 inches wide; avoid tight turns and steep ramps.
- **Zones:** Restricted areas around toddler/under-2 zones, stairs, restrooms, and exits.
- **Charging/base:** Designated docking station near café/back-of-house with power and Wi-Fi coverage.
- **Signage:** Floor markings and gentle audio cues to alert guests; child-height visibility considered.

## Order Flow
1. Order placed via app/POS and tagged as “robot eligible” (future-state flag; defaults to manual runner).
2. Café operator loads the robot with labeled order; selects destination table/zone on tablet.
3. Robot follows mapped route; if blocked, pings staff for assist or reroute.
4. Guest retrieves order; robot confirms pickup and returns to base or next stop.
5. Failed delivery path triggers fallback to manual runner.

## Phasing Plan
- **Phase 0 (launch):** Manual runners only; map routes and collect obstacle data.
- **Phase 1:** Limited robot use during off-peak to validate routes, charging cycles, and guest reactions.
- **Phase 2:** Expand to peak windows; add party-room runs with attendant escort as needed.

## Safety & Compliance
- Speed limits and collision avoidance tuned for child-heavy environments.
- Routine cleaning of robot surfaces; food covers to maintain hygiene.
- ADA and local jurisdiction rules reviewed; signage posted to inform guests.

## Dependency on Workstation & Ordering System
- Robots consume the same order objects and seat_codes used by manual runners.
- No change to member-facing flow: ordering remains through phone/tablet tied to seat.
- KDS tickets and labels must keep seat_code prominence so either robots or humans can deliver.
