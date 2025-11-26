# AI-GM System Architecture (Conceptual)

**AI-GM is a Phase 2+ enhancement. The store can operate fully without it; this system will be layered onto the existing Workstation & Ordering System once economics and tech maturity permit.**

Overview of inputs, core services, and outputs for the AI-enabled general manager assist planned as an optional upgrade.

## Inputs
- **Cameras:** Fixed-position cameras in public areas for occupancy counts and environmental monitoring (no restrooms/nursing rooms).
- **Sensors:** Occupancy counters, noise level monitors, temperature/air quality sensors.
- **Operational systems:** POS transactions, membership database, ticketing for parties/classes, incident logs.
- **Manual flags:** Staff-submitted notes (e.g., spill in café, toy breakage) via tablets/phones.

## Core Services (planned upgrade)
- **Occupancy monitoring:** Real-time counts by zone with alerts when nearing capacity limits.
- **Noise/environment alerts:** Threshold-based notifications when noise exceeds comfort levels or when temperature/humidity drifts.
- **Anomaly cues:** Simple rules for unusual dwell times, back-of-house door props, or unusual after-hours motion.
- **Data layer:** Event stream feeding dashboards and historical reporting for staffing and safety reviews.

## Outputs (optional enhancement)
- **Notifications:** Push to staff tablets/monitors with location, severity, and suggested actions.
- **Dashboards:** Live occupancy and queue views for hosts/managers; daily summary for leadership.
- **Integrations:** Hooks to POS/LMS for tagging incidents to orders or training modules.

## Privacy & Limits
- No facial recognition of children; adults can opt-out of biometric tie-in and use QR/PIN instead.
- Data retention minimized; camera footage held for short windows unless flagged for incidents.
- Human-in-the-loop required for any action; AI does not auto-enforce or score individuals.
