# Co.work.PLAY Workstation & Ordering System – V1

## Goals
- Provide a reliable check-in-to-check-out workflow that pairs every member visit with an assigned workstation code.
- Enable members to login and order from their seats via phone or optional shared tablet without staff intervention.
- Route orders with clear seat context to the cafe and runners so table service stays fast and accurate.
- Keep data models and APIs simple enough for launch while leaving space for later automation.

## Roles & Actors
- **Member/Guest:** Authenticates to a seat, places orders, and receives deliveries.
- **Host:** Assigns seats at check-in, assists with login issues, and manages check-out.
- **Cafe Operator/Kitchen:** Prepares orders with seat codes visible on the KDS and labels.
- **Runner:** Delivers completed orders to seats using seat codes; updates completion status if needed.
- **System Services:** Authentication, seat assignment, order management, notifications.

## Core Concepts
- **Seat:** A workstation with a unique seat_code (e.g., A-12) and QR for login/orders.
- **SeatSession:** Time-bounded association of a member with a seat, including status and timestamps.
- **Member:** Authenticated adult with contact info, payment methods, and preferences.
- **Order:** A cart with items, payment status, seat_code, and fulfillment events.

## User Flows
### Check-in & Seat Assignment
1. Host confirms membership/day pass and assigns an available seat with visible seat_code and QR.
2. System creates a `seat_session` with member ID, seat_code, start time, and status = active.
3. Host provides quick orientation: how to login and order from the seat.

### Login to Seat (Phone + Optional Tablet)
1. Member scans seat QR or enters seat_code in the app; system validates active `seat_session`.
2. Primary login methods: phone/email + PIN or QR-based session claim.
3. Optional shared tablet at the workstation mirrors the same login flow; no biometric required at launch.

### Ordering
1. Member browses menu in the app or on the tablet tied to the seat_code.
2. Order is created with seat_code, member ID, payment method, and any allergy notes.
3. Payment is authorized; order status moves to `received` and routes to the cafe/KDS.

### Fulfillment & Delivery (Manual Runners)
1. Cafe operator prepares items; KDS and labels show seat_code prominently.
2. Runner picks up completed orders, confirms seat_code, and delivers to the workstation.
3. Runner can mark `delivered` in the system or notify host if the member is unavailable.

### Check-out
1. Member requests check-out or host initiates when visit ends; outstanding orders must be closed.
2. System closes the `seat_session`, releases the seat, and triggers thank-you/feedback notifications.
3. Host resets the seat for the next member (wipe, verify QR/seating signage intact).

## High-Level Data Model
- **member:** id, name, contact (phone/email), payment_token(s), preferences, status.
- **seat:** seat_code, zone, amenities, status (available/occupied/maintenance), qr_asset.
- **seat_session:** id, member_id, seat_code, start_time, end_time, status, auth_method, notes.
- **order:** id, member_id, seat_code, items, total, payment_status, fulfillment_status, timestamps.
- **notification:** id, member_id, seat_code, type (order_ready, thank_you, issue), channel, content, status.

### Member

- `id`
- `first_name`, `last_name`
- `email`, `phone`
- `membership_type`
- `status`
- `default_payment_token_id`
- `children[]` (list of Child records)
- `approved_caregivers[]` (list of Adult profiles who may bring this member’s children)

### Child

- `id`
- `first_name`, `last_name`
- `date_of_birth`
- `primary_guardian_member_id`
- `notes` (allergies, medical, etc.)

### Visit / Play Session

- `id`
- `caregiver_adult_id` (member or Approved Caregiver)
- `children_present_ids[]` (list of Child ids)
- `start_time`, `end_time`
- `seat_session_id` (if caregiver is also using a workstation)

`caregiver_adult_id` can reference the member themself or an Approved Caregiver who is linked to one or more member accounts, and `children_present_ids[]` may include children from different `primary_guardian_member_id` values.

## API Outline
- `POST /seats/assign` – assign seat_code to member and open `seat_session`.
- `POST /seats/{seat_code}/login` – claim active session via phone/email + PIN or QR token.
- `GET /seats/{seat_code}/session` – fetch active session details for UI binding.
- `POST /orders` – create order tied to seat_code and member; authorize payment.
- `GET /orders/{order_id}` – retrieve order status and delivery updates.
- `POST /orders/{order_id}/status` – update fulfillment status (received/prep/ready/delivered).
- `POST /notifications` – send push/SMS/app alerts with seat context.
- `POST /seats/{seat_code}/checkout` – close session, release seat, trigger wrap-up messaging.

## Future Phases
Biometrics, robotic delivery, and AI-GM overlays are **Phase 2+ enhancements** and are **not required at launch**. The V1 system deliberately uses phone/email + PIN and manual runners so the store can open and operate reliably without advanced hardware.
