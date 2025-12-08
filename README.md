# Co.work.PLAY Cafe

Co.work.PLAY Cafe is a remote-first coworking cafe paired with supervised play for young children. This repository is the single source of truth for the flagship business plan (Phoenix metro) and the franchise system that will scale the concept nationally and beyond.

## Repository Purpose
- **Flagship operations:** Market thesis, design program, SOPs, and training for the ~8,500 SF Phoenix location.
- **Franchise platform:** Playbooks, financial model inputs, and design prototypes for future locations.
- **Investor and partner materials:** Summaries for equity, debt, and landlord discussions.

## Documentation map
Start with the living index in [`docs/README.md`](docs/README.md). It links every canonical document, explains which legacy folders are deprecated, and connects related topics Wikipedia-style so you can jump sideways instead of drilling through folders.

## Directory Structure (canonical)
- [`docs/01_concept_and_brand/`](docs/01_concept_and_brand/) – Concept overview, target customers, brand principles.
- [`docs/02_business_and_financials/`](docs/02_business_and_financials/) – Flagship business plan, franchise model, financial assumptions, and summary tables.
- [`docs/03_architecture_and_design/`](docs/03_architecture_and_design/) – Program briefs, prototype guidance, RFP language, and interior design outline.
- [`docs/04_operations_and_sops/`](docs/04_operations_and_sops/) – Staffing templates, SOPs, cleaning/safety checklists, and member/day-pass flows.
- [`docs/05_training_and_media/`](docs/05_training_and_media/) – Hiring/training playbooks, module index, Sora prompts, and readiness checklists.
- [`docs/06_legal_and_policy/`](docs/06_legal_and_policy/) – Terms of service, privacy policy, waiver outline, and franchise agreement outline.
- [`docs/07_investor_materials/`](docs/07_investor_materials/) – Investor one-pager, pitch narrative, CapEx/returns, and growth plan.
- [`docs/archive/`](docs/archive/) – Deprecated drafts from an older numbering scheme with README stubs pointing to their canonical replacements above.
- [`media/`](media/) – Floorplans, renders, and decks (add exports here as produced).
- [`web/`](web/) – Next.js marketing site for Co.work.PLAY Cafe with Tailwind CSS.

## Quick Start
- Read the brand one-pager: [`docs/01_concept_and_brand/brand_one_pager.md`](docs/01_concept_and_brand/brand_one_pager.md)
- Read the concept overview: [`docs/01_concept_and_brand/concept_overview.md`](docs/01_concept_and_brand/concept_overview.md)
- Review the flagship business plan: [`docs/02_business_and_financials/flagship_business_plan_phoenix.md`](docs/02_business_and_financials/flagship_business_plan_phoenix.md)
- Share design needs using the program brief: [`docs/03_architecture_and_design/design_program_brief_flagship_phoenix.md`](docs/03_architecture_and_design/design_program_brief_flagship_phoenix.md)
- Set up operations with staffing and SOPs: [`docs/04_operations_and_sops/`](docs/04_operations_and_sops/)
- Plan training content with module index and Sora prompts: [`docs/05_training_and_media/`](docs/05_training_and_media/)
- Prepare investor conversations with the one-pager and pitch narrative: [`docs/07_investor_materials/`](docs/07_investor_materials/)
- Preview the marketing site locally: [`web/README.md`](web/README.md)

## Audiences
Founders/operators, franchisees, architects/designers, investors/lenders, and store staff. Each section is written to be reusable across flagship and future locations while clearly noting Phoenix-specific details.

## AI GM Monitoring & Notifications (ai-gm)
The `ai-gm` module turns the store into a software-defined game master that ingests operational events and routes notifications to staff-only and customer-facing screens. See the system overview and demo scripts in [`ai-gm/`](ai-gm/), and cross-link back to operational flows in [`docs/04_operations_and_sops/`](docs/04_operations_and_sops/).

### Quick start
1. **Backend (Node + TypeScript)**
   - Install deps: `cd ai-gm/backend && npm install`.
   - Run the service with hot-reload: `npm run dev` (uses `ts-node`). The HTTP API listens on port `4000` and the WebSocket endpoint is `ws://localhost:4000/ai-gm/ws`.
   - POST events (JSON) to `/ai-gm/events` or run the demo emitter below.
2. **Screen client (React + Vite)**
   - `cd ai-gm/screen-client && npm install`
   - `npm run dev` then open `http://localhost:5173/?screenId=F1_PLAY_INFO_01` (customer mirror) or `?screenId=F1_PLAY_STAFF_01` (staff anime screen). The client connects to the orchestrator via WebSocket and displays play commands with placeholder video + overlays.
3. **Demo scripts**
   - `node --loader ts-node/esm ai-gm/tools/emitSampleEvents.ts` — starts the backend and emits sample capacity, staff check-in, and closing-time events.
   - `node --loader ts-node/esm ai-gm/tools/runDemo.ts` — runs a looping demo sequence.

### What’s included
- **Event bus** (`ai-gm/backend/src/events/`) — in-memory publish/subscribe abstraction with typed `AiGmEvent` envelopes.
- **Rules engine** (`ai-gm/backend/src/rules/`) — JSON-configurable mappings from events to `ContentIntent` objects for staff and customer channels.
- **Screen orchestrator** (`ai-gm/backend/src/orchestrator/`) — converts intents to play commands, applies rate limiting, and broadcasts over WebSocket.
- **Screen registry** (`ai-gm/backend/src/registry/`) — seeds default screen IDs and provides lookup helpers by zone/channel.
- **Screen client** (`ai-gm/screen-client/`) — React UI that distinguishes STAFF vs CUSTOMER styling and renders placeholder video/overlay text.
- **Tools** (`ai-gm/tools/`) — scripts to seed sample traffic and validate the end-to-end path during demos.

Screen ID pattern: `<FLOOR>_<ZONE>_<ROLE>_<INDEX>` (e.g., `F1_PLAY_STAFF_01`, `F1_ENTRY_INFO_01`). Staff channel screens render a darker “control room” motif; customer screens render a softer mirror-friendly UI.

## Financial Model – Co.Work.Play Cafe

Preliminary unit economics and a simple model for the Co.Work.Play hybrid cowork + cafe + play concept are documented in:

- [`finance/co-work-play-unit-economics.md`](finance/co-work-play-unit-economics.md)
- [`finance/co-work-play-unit-model.csv`](finance/co-work-play-unit-model.csv)

These files capture a mature-unit revenue mix, cost structure, franchise fee stack, and illustrative payback period. A more detailed narrative and summary links live in the documentation hub at [`docs/README.md`](docs/README.md).

## Legacy and deprecated notes
- Use the numbered `docs/0X_*` folders for all net-new content. Former alias folders have been folded into the canonical sections, with any lingering drafts cataloged in [`docs/DEPRECATIONS.md`](docs/DEPRECATIONS.md) and parked under [`docs/archive/legacy_aliases/`](docs/archive/legacy_aliases/).
- Archived drafts are under [`docs/archive/`](docs/archive/) with stubs pointing to their canonical replacements.
