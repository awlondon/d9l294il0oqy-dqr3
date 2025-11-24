# AI-GM Architecture Upgrade Roadmap

This roadmap translates the recent architecture review into concrete improvements across the AI-GM subsystem. Each section lists the problem surfaced in the review, the target behavior, and the implementation approach.

## Event Flow & Intent Routing
- **Time windows and expiry:** Add `validFrom`, `validUntil`, and `ttlSeconds` fields on events/intents so the orchestrator can drop outdated intents and auto-expire overlays. Implement scheduler-driven pruning of active overlays on expiry.
- **Temporal matching:** Extend rule predicates to allow "active between" and recurring schedules (e.g., weekdays 15:00–17:00). Provide helper predicates for relative times (T-minus warnings) and holidays.
- **Dedupe and rate limiting:** Track recent intent hashes per screen to prevent rapid repeats; expose rate-limit buckets in config.

## Rules Engine & Business Logic
- **Rule authoring ergonomics:** Introduce a JSON schema + CLI validator for rule packs (lint, duplicates, missing assets). Add a watch mode to hot-reload rules without restarting the backend.
- **Higher-level DSL:** Offer a thin YAML/DSL layer that compiles to JSON rules (e.g., `on PLAYAREA_AT_CAPACITY -> staff.play_area overlay="Capacity reached"`).
- **Test harness:** Provide a deterministic rule-test runner that feeds fixture events and snapshots the emitted intents for review.

## Screen Client Capabilities
- **Content types:** Beyond video + overlay text, support cards (title/body/icon), data widgets (capacity, ETA), image banners, and multi-step playlists. Add guarded fallbacks when assets fail to load.
- **Motion and polish:** Integrate a lightweight animation layer (e.g., Framer Motion) for overlay entrance/exit and template-specific transitions. Allow per-channel theme tokens for color, typography, and spacing.
- **Caching and offline resilience:** Cache recent assets and overlays so short disconnects do not blank screens; show a channel-specific fallback loop when offline.

## Extensibility for Zones, Content, and Inputs
- **Pluggable inputs:** Define an adapter interface (`registerEventSource(name, start, stop)`) so new sensors (RFID, BLE, cameras) can publish events without touching the core loop.
- **Zone/channel mapping as data:** Move zone-to-screen/channel mappings into data files with validation (see maintainability section) so new zones can be added via config.
- **Capability flags:** Annotate screens with capabilities (audio, touchscreen, aspect ratio) so rules can target compatible templates.

## JSON Rules & Registry Maintainability
- **Data-driven registry:** Externalize the screen registry to a `screens.json` file with fields for `screenId`, `zone`, `channel`, `circuit`, and `capabilities`. Provide a schema and validation CLI.
- **Versioning and review:** Store rules and registry files in a `registry/` folder with pull-request templates and diff-friendly formatting. Add a CI check that lints JSON/YAML and blocks broken rule packs.
- **Operational tooling:** Supply a simple "registry inspector" CLI that answers "which screens are in zone X?" and "what channel does screen Y listen to?" to help non-engineering staff.

## Testing, Simulation, and Observability
- **Scenario simulator:** Expand `tools/emitSampleEvents.ts` into a scenario player that replays time-stamped event traces for QA and demos.
- **Intent/command tracing:** Add an in-memory intent log with timestamps, rule IDs, and target screens; expose a debug endpoint or UI to visualize recent decisions.
- **Health metrics:** Emit per-screen heartbeat and asset-load metrics (success/failure counts) to support proactive alerting when a screen goes dark.

## Landing Plan
1. Ship schema + validation for rules and screen registry (enables safe data-only changes).
2. Add time-window predicates and intent expiry in the orchestrator to tighten temporal behavior.
3. Extend the screen client with cards/widgets + animation layer; ship capability flags so rules can target these templates.
4. Build the rule test harness and scenario simulator to keep regressions visible.
5. Layer in observability (intent log + heartbeats) to close the loop with operations.
