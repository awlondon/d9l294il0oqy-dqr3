# Deprecations and legacy folder guide

Use this guide to avoid stale drafts and route contributors to the canonical documents in `docs/0X_*`.

## Retired aliases
- `docs/design/` → Canonical content now lives in [`03_architecture_and_design/`](03_architecture_and_design/); the legacy README is preserved in [`archive/legacy_aliases/design_README.md`](archive/legacy_aliases/design_README.md).
- `docs/business_and_financials/` → Files relocated to [`archive/legacy_aliases/business_and_financials/`](archive/legacy_aliases/business_and_financials/) with active work maintained in [`02_business_and_financials/`](02_business_and_financials/).
- `docs/operations/` → Drafts and WIP checklists live under [`04_operations_and_sops/in_progress/`](04_operations_and_sops/in_progress/); use the parent folder for production SOPs.
- `docs/training_and_media/` → Scripts, module index, and Sora prompts have been merged into [`05_training_and_media/`](05_training_and_media/).
- `docs/legal_and_policy/` → Privacy/data use drafts and addenda now live in [`06_legal_and_policy/in_progress/`](06_legal_and_policy/in_progress/) alongside the canonical terms.

## Fully archived drafts
- Anything under [`docs/archive/`](archive/) follows the previous numbering scheme and now exists for reference only. Each archived folder contains a stub README pointing back to the canonical location.

## How to migrate
1. File new work under the numbered canonical folders above.
2. When touching a legacy alias, either move the file into the canonical folder or add a stub link pointing to the canonical version.
3. Delete superseded drafts in the legacy folders once their content is merged into the canonical documents.
