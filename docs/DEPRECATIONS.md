# Deprecations and legacy folder guide

Use this guide to avoid stale drafts and route contributors to the canonical documents in `docs/0X_*`.

## Active-but-legacy aliases
- `docs/design/` → Canonical content now lives in [`03_architecture_and_design/`](03_architecture_and_design/) (keep only WIP stubs here).
- `docs/business_and_financials/` → Use [`02_business_and_financials/`](02_business_and_financials/) for all financial modeling and summaries.
- `docs/operations/` → Use [`04_operations_and_sops/`](04_operations_and_sops/) for SOPs, staffing, and checklists.
- `docs/training_and_media/` → Prefer [`05_training_and_media/`](05_training_and_media/) for the canonical training index and scripts.
- `docs/legal_and_policy/` → Prefer [`06_legal_and_policy/`](06_legal_and_policy/) for member/day-pass terms and privacy.

## Fully archived drafts
- Anything under [`docs/archive/`](archive/) follows the previous numbering scheme and now exists for reference only. Each archived folder contains a stub README pointing back to the canonical location.

## How to migrate
1. File new work under the numbered canonical folders above.
2. When touching a legacy alias, either move the file into the canonical folder or add a stub link pointing to the canonical version.
3. Delete superseded drafts in the legacy folders once their content is merged into the canonical documents.
