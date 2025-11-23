# AI-GM Architecture

## Event Flow
- Sensors, POS/reservation systems, staff check-ins, and schedulers publish events to the event bus.
- Events are wrapped in typed envelopes for consistent validation and tracing.

## Rules and Intent Pipeline
- Rules engine matches inbound events to rule definitions.
- Each rule emits `ContentIntent` objects describing channel, target zones/screens, priority, overlays, and template mappings.

## Screen Orchestrator
- Resolves the concrete screens for each intent using the registry and zone mappings.
- Applies rate limiting, merges overlays, and converts intents into WebSocket play commands.
- Broadcasts play commands to all connected screen clients; clients filter on their `screenId`.

## Screen Network Topology
- Mirror displays across co-work tables and staff-only stations.
- STAFF and CUSTOMER channels coexist with distinct theming and overlay treatments.

## Networking and Infrastructure
- VLAN segmentation isolates screen clients and backend services.
- PoE provides power and network to SBCs/NUCs driving the displays.
- Backend can run locally or in the cloud; clients auto-reconnect via WebSocket.
- For detailed electrical and low-voltage layout, see `docs/floor-plan-electrical.md`.
