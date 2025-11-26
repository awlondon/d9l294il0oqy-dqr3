# Biometric and Authentication Flows

Adult-only, optional biometrics paired with inclusive alternatives.

## Enrollment Flow
1. Present consent screen outlining purpose, storage, and opt-out rights.
2. Capture biometric template via approved device; collect backup method (QR/PIN/card).
3. Store encrypted template with member ID; log consent timestamp.
4. Issue QR wristband/physical card as fallback.

## Check-In / Access
- Default: Scan QR/wristband or biometric tap to match adult to account and linked children.
- Confirm wellness attestation prompt; print/apply child wristbands; log entry time and zone capacity.
- Failed biometric attempts auto-prompt QR/PIN; staff can override with ID + account verification.

## Workstation Login & Ordering
- Members can authenticate at shared workstations/tablets via biometric tap or QR/PIN.
- Orders placed in café app can leverage stored authentication; fallback to card/contactless payment at POS.

## Account Changes & Opt-Out
- Members can revoke biometric consent at any time; template deleted and QR/PIN remains active.
- Lost wristbands/cards can be reissued; require ID check before re-linking to account.

## Security Controls
- Limit biometric device access to logged-in staff; audit biometric events.
- Enforce liveness/anti-spoofing where supported; disable devices after repeated failures.
