# Digital Security Policy for AI-GM Notifications and Operations UI

## Purpose and Scope
This policy establishes controls for the AI Game Master (AI-GM) notification systems and all operational UIs (ordering, hosting, play attendant, café operations, and manager views). It covers software protections, hardware hardening for deployed electronics, and human processes that reduce risk of hacking, phishing, sabotage, or manipulation.

## Guiding Principles
- **Defense in depth:** Layered safeguards from the UI to backend services and hardware endpoints.
- **Least privilege:** Limit access tokens, roles, and device permissions to only what each function requires.
- **Secure defaults:** MFA, TLS, and content safety filters are enabled by default and cannot be disabled by end users.
- **Auditability:** All privileged actions and notification edits are logged with user, device, and session context.

## Roles and Responsibilities
- **Security & Compliance Lead:** Owns this policy, risk assessments, and annual reviews.
- **Engineering:** Implements secure coding, automated testing, SBOM/SCA checks, and secrets hygiene for all AI-GM and UI components.
- **Ops Managers:** Validate account permissions for staff roles (ordering, hosting, play attendant, café ops, manager) every quarter and upon role changes.
- **Venue Staff:** Complete anti-phishing and secure device handling training before gaining system access.

## Access Control
- Enforce SSO + MFA for all staff-facing UIs; time-bound session tokens with idle timeouts and automatic logout on shared kiosks.
- Role-based access profiles per function (ordering, hosting, play attendant, café ops, manager) with explicit separation of duties; emergency override accounts require dual approval and post-event review.
- Limit notification configuration rights to designated managers; AI-GM content tuning and escalation routing changes require change tickets.

## AI-GM Notification Security
- Content filters block prompt injections, malicious URLs, and non-whitelisted file types before rendering in any UI.
- Notifications include signed metadata (sender, timestamp, scope) and are displayed with immutable read-only history to prevent spoofing or deletion.
- Provide clear user affordances for reporting suspicious messages; flagged items trigger automated quarantine and security review workflows.
- Use rate limiting and anomaly detection to prevent notification floods or replay attacks targeting operators.

## Operational UI Safeguards
- **Ordering & Payments:** Encrypt payment inputs in transit and at rest; enforce PCI-aligned handling with masked display in logs and UI.
- **Hosting & Play Attendant:** Restrict access to player identity data; require verified check-in before modifying bookings or party rosters.
- **Café Operations:** Segregate POS, inventory, and HR functions; apply geo-fencing to restrict manager overrides to venue networks or approved VPNs.
- **Manager Dashboards:** Require step-up authentication for payroll, refunds, or data exports; display tamper-evident audit trails for all changes.

## Secure Development and Deployment
- Perform threat modeling for new AI-GM notification flows and UI features; update abuse cases for prompt manipulation and social engineering vectors.
- Mandate static analysis, dependency vulnerability scanning, and IaC checks in CI; block deployments on high/critical findings until remediated or formally risk accepted.
- Rotate secrets automatically; store keys and model credentials in a centralized secrets manager with per-environment access policies.
- Use signed builds and attestations; require code reviews with security checklists for UI logic that touches identity, payments, or notifications.

## Hardware Hardening
- Lock BIOS/UEFI with strong passwords and disable boot-from-external-media on kiosks and staff devices; enable secure boot.
- Apply full-disk encryption on laptops, tablets, and kiosks; auto-lock screens after short inactivity intervals.
- Use tamper-evident seals and port blockers on kiosks and POS terminals; restrict USB and Bluetooth to approved peripherals.
- Place devices in monitored areas with CCTV where feasible; maintain asset inventories with patch levels and location tracking.

## Network and Data Protection
- Segment guest Wi‑Fi from operations networks; whitelist only required outbound destinations for AI-GM services.
- Enforce TLS 1.2+ with certificate pinning where supported; rotate certificates at least annually.
- Apply data minimization for PII and payment data; purge or anonymize customer interaction logs on defined retention schedules.
- Enable DLP controls to prevent exfiltration of prompts, model outputs, or internal playbooks.

## Monitoring and Incident Response
- Centralize logging (auth events, notification edits, device posture changes) with alerting for privilege escalations and anomalous activity.
- Maintain runbooks for phishing attempts, suspected prompt injection, device tampering, and data breach scenarios; conduct quarterly tabletop exercises.
- Provide on-call escalation paths for both engineering and venue operations; ensure backups are tested and encrypted.

## Training and Awareness
- Require annual security training covering phishing recognition, secure kiosk handling, and escalation steps for suspicious AI-GM behavior.
- Conduct periodic phishing simulations for staff roles; remediate with targeted training for failures.

## Policy Maintenance
- Review this policy at least annually or after material incidents; document deviations and compensating controls.
- Track compliance status and remediation owners within the security governance tracker.
