# AI GM Monitoring & Notifications System

A modular subsystem for automated operational awareness, real-time staff guidance, and customer-facing ambient notifications. This module turns the building into a software-defined General Manager: it consumes operational events, processes them through a rules engine, and routes context-aware notifications to designated screens throughout the facility.

## Channels and Presence
- **Staff channel:** Anime-style “Mastermind Boss + Parrot” clips for operational prompts.
- **Customer channel:** Soft, colorful ambient clips for guests, families, and parents.
- **Display network:** Distributed mirror-display screens at co-work tables and staff-only stations, addressable through a unified screen-ID scheme.

## Directory Structure
```
ai-gm/
  backend/            # Event bus, rules, orchestrator, registry, server entrypoint
  screen-client/      # React-based client for each screen
  docs/               # Architecture, economics, deployment, and lore references
  tools/              # Demo scripts for manual event emission
```

### Backend
- Entry point: `ai-gm/backend/src/server.ts`
- Subsystems: `events/`, `rules/`, `orchestrator/`, `registry/`
- Runs a WebSocket endpoint (`/ws`) and an event loop

### Screen Client
- React app that connects to the orchestrator via WebSocket
- Renders STAFF (control-room motif) vs CUSTOMER (ambient mirror-friendly) UIs
- Configurable per-screen via query parameter `screenId`

### Documentation
Reference materials live in `ai-gm/docs/` (see below).

### Tools
Demo/event scripts live in `ai-gm/tools/` to seed traffic end-to-end.

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm
- TypeScript
- ts-node
- Vite (installed via npm)

### Backend Setup
```bash
cd ai-gm/backend
npm install
npm run dev
```

Starts the backend dev server with the event bus, rules engine, orchestrator, and WebSocket endpoint (`/ws`).

### Screen Client Setup
```bash
cd ai-gm/screen-client
npm install
npm run dev
```

Launch a screen by specifying a `screenId`, e.g.: `http://localhost:5173/?screenId=F1_PLAY_STAFF_01`.

## System Overview
1. **Event Bus** — Lightweight publish/subscribe layer. Events originate from play area sensors, staff station check-ins, POS/reservation system, time schedulers, and manual triggers.
2. **Rules Engine** — Matches inbound events with rule definitions, outputting `ContentIntent` objects that describe channel (STAFF or CUSTOMER), zones/screen IDs, priority, textual content, and template mapping.
3. **Screen Orchestrator** — Resolves which screens receive content, attaches overlay text/metadata, selects video asset templates, and broadcasts play commands via WebSocket.
4. **Screen Clients** — Independent React apps running in fullscreen kiosk mode that listen for play commands and render STAFF or CUSTOMER presentations.

## Screen ID Scheme
Pattern: `<FLOOR>_<ZONE>_<ROLE>_<INDEX>`

Example set:
- **Co-work tables (customer channel):** `F1_CW_A_TBL_01 … F1_CW_A_TBL_10`, `F1_CW_B_TBL_11 … F1_CW_B_TBL_20`
- **Staff stations:** `F1_POS_STAFF_01`, `F1_ENTRY_STAFF_01`, `F1_BAR_STAFF_01`, `F1_PLAY_STAFF_01`, `F1_PARTY_STAFF_01`, `F1_PARTY_RM1_STAFF_01`, `F1_SUP_STAFF_01`, `F1_BOH_STAFF_01`
- **Customer shared screens:** `F1_PLAY_INFO_01`, `F1_ENTRY_INFO_01`, `F1_DINE_INFO_01`

Full map: see `ai-gm/docs/screen-map.md`.

## Documentation Included (in `ai-gm/docs`)
1. `purchase-order.md` — Itemized hardware/networking bill with quantities, unit prices, and total CapEx (~$25,220).
2. `capex-opex.md` — One-time and recurring cost breakdown (CapEx ~$25,220; OpEx ~$8,220/year including hosting, power, content, reserves).
3. `financial-model.md` — Economics and ROI scenarios vs. traditional oversight labor (~$25k/yr), including 3-year models.
4. `architecture.md` — Event flow, rules/intent pipeline, orchestrator behavior, screen topology, VLAN segmentation, PoE architecture.
5. `deployment-plan.md` — Rollout guide covering hardware install, network config, imaging, kiosk mode, and hosting options.
6. `screen-map.md` — Full screen ID map for customer/staff displays across zones.
7. `sora-character-lore.md` — Staff-only anime channel lore, prompts, tone, and usage guidance.
8. `docs/floor-plan-electrical.md` — Floor plan & electrical/low-voltage layout for AI-GM screens.

## Demo Commands
Manual event triggers (run from repo root):
```bash
npm run emit:playarea-full
npm run emit:closing30
npm run emit:staff-checkin-playarea
```

Screen clients respond in real time.

## What This Module Solves
- Staff oversight automation and accountability
- Safety and capacity control with consistent closing procedures
- Real-time guest messaging and brand-consistent prompts
- Reduced manager dependency; operational discipline at scale

Traditional approach: costs ~$25,000 annually in human oversight and remains inconsistent.

AI-GM approach: costs ~$8,220/year to run, outperforms humans, and pays back over ~2 years.

## Future Enhancements
- Replace mock event bus with MQTT
- Central dashboard UI
- Per-zone health monitoring
- Remote clip uploads (Sora, TTS pipeline)
- Multi-site cloud federation
- Staff training mode and analytics
