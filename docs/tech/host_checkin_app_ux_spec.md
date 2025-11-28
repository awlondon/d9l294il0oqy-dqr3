# Host Check-In App – Screen-by-Screen UX Spec (V1)

## 0. Context & Goals
- **Primary user:** Front-of-house Host (Manager backup).
- **Device:** Tablet at Host stand (iPad / Android tablet; web app acceptable).
- **Jobs to be done:**
  - Check in members and guests.
  - Assign and manage seats/workstations.
  - Track active sessions (who is where, until when).
  - Handle exceptions: move seat, extend time, end session.
- **Principles:** No robotics or biometrics; clean UX connecting Member → Seat → Session.

## 1. Screen Map
1. Staff Login / PIN Screen
2. Dashboard – Today Overview
3. Member Lookup & Check-In
4. New Member / Guest Quick Registration
5. Seat Map & Assignment
6. Active Session Details
7. Session Actions (Move / Extend / End)
8. Alerts & System Messages (lightweight)

## 2. Screen-by-Screen Specification

### 2.1 Staff Login / PIN Screen
**Purpose:** restrict tablet access to staff.

**Elements:**
- Logo: small Co.work.PLAY Cafe logo at top.
- Title: “Host Console – Staff Login”.
- Fields:
  - Staff ID or Email (text field).
  - PIN (4–6 digits, masked).
- Buttons:
  - **[Sign In]** (primary).
  - **[Forgot PIN]** (secondary link).

**Copy & States:**
- Placeholders: “Enter your staff email” / “Enter your PIN”.
- Wrong PIN error: “That login or PIN doesn’t match our records. Please try again or ask a manager.”
- After 3 failed attempts: “Too many attempts. Please ask a manager to unlock this device.”
- Success: valid login routes to Dashboard – Today Overview.

### 2.2 Dashboard – Today Overview
**Purpose:** provide a live snapshot of today.

**Layout (tablet-friendly):**
- Top bar:
  - Left: “Good morning, [StaffName]”.
  - Center: Date & time (e.g., “Tuesday, March 3 – 9:12 AM”).
  - Right: Small buttons **[New Check-In]**, **[Seat Map]**, **[Logout]**.
- Main area with two panels:
  - Panel A: “Arrivals & Check-Ins”.
    - Big button **[Check in member or guest]**.
    - List recent check-ins (last 5–10), e.g., “9:05 – Alexander Warren London – Member – Seat A-12 – 3 hrs”.
  - Panel B: “Today’s Snapshot”.
    - Stats: “Active seat sessions: 18”; “Reserved but not arrived: 3”; “Estimated capacity: 18 / 32 seats in use”.
    - Status chips: Green “Play area: Open”; Yellow “Quiet Zone: 2 seats left”; Gray “Party Room: Available”.

**Actions:**
- Tap **[Check in member or guest]** → Member Lookup & Check-In.
- Tap **[Seat Map]** → Seat Map & Assignment.
- Tap a recent check-in → Active Session Details.

### 2.3 Member Lookup & Check-In Screen
**Purpose:** starting point for every arrival.

**Layout:**
- Title: “Check In Member or Guest”.
- Tabs: **[Member]** (default), **[Guest / Day Pass]**.

**Member tab:**
- Search: “Search member by name, email, or phone”; typeahead results list with name, membership status (Active/Paused/Expired), and linked children icons (e.g., 👶x2).
- States:
  - 0 results: show “No member found. Check spelling or switch to ‘Guest / Day Pass’.” and button **[Register as new member]**.
  - 1+ results: tapping a member opens **Check-In Details** modal.

**Check-In Details modal:**
- Shows member name, membership type, flags/notes, and “Last visit: [date]”.
- Fields:
  - “Visit type”: Standard visit (default) or Party/event attendee.
  - “Children today”: select linked kids or add names/ages quickly.
- Buttons: **[Assign Seat]** (primary), **[Cancel]**.
- **[Assign Seat]** routes to Seat Map & Assignment with member pre-selected.

**Guest / Day Pass tab:**
- Fields: “Guest full name”; “Mobile number”; “Email (optional, for receipt & WiFi info)”.
- Toggle: “[ ] Convert to full member later”.
- Button: **[Continue to Seat Assignment]**.

### 2.4 New Member Quick Registration
**Trigger:** tap **[Register as new member]** from Member tab.

**Layout:**
- Title: “New Member – Quick Setup”.
- Fields: First Name; Last Name; Email; Mobile phone; Optional “How did you hear about us?” (dropdown).
- Button: **[Create Member & Assign Seat]**.

**Behavior:** creates minimal member account then routes directly to Seat Map & Assignment.

### 2.5 Seat Map & Assignment Screen
**Purpose:** visually assign a seat/workstation.

**Layout:**
- Title: “Assign Seat – [Member Name]” or “Assign Seat – Guest”.
- Filters/zone chips: **[Open Workspace]**, **[Quiet Zone]**, **[Near Play Area]**.
- Optional duration presets: 2h / 3h / 4h / Full session.
- Main panel: interactive seat map with seat code (A-12, B-03, etc.) colored Green (available), Gray (reserved), Red (occupied).
- Tap available seat → highlight + info card: seat code, zone, max people, distance to play area.
- Bottom bar summary: “Selected: Seat A-12 – Zone: Open Workspace – Duration: 3h (until 12:30 PM)”.
- Buttons: **[Confirm Check-In]** (primary), **[Cancel]** (secondary).

**Edge cases & confirmations:**
- Selecting occupied seat: “Seat A-12 is currently in use. Please choose another seat.”
- On confirm: create seat_session and show confirmation: “Alexander Warren London checked in at Seat A-12 until 12:30 PM.” with **[View Session]** or **[New Check-In]**.

### 2.6 Active Session Details Screen
**Purpose:** show visit details for a specific seat/session.

**Access:** from Dashboard recent check-ins or tapping an occupied seat on map.

**Layout:**
- Title: “Session – Seat A-12”.
- Key info: Member name + membership type; Status: Active; Start time; Scheduled end; Time remaining.
- Children present: list names/ages for the visit (e.g., “Eli (3), Nora (18 mo)”).
- Notes/flags: e.g., “Prefers quiet zone,” “Allergic to peanuts.”
- Orders (last 2 hours): simple list such as “9:30 – Latte – Delivered”; “10:05 – Snack Box – In progress”.
- Buttons/actions: **[Move to a different seat]**, **[Extend session]**, **[End session]**, **[Back to Dashboard]**.

### 2.7 Session Actions
**Move to different seat:**
- Seat Map opens in move mode with current seat highlighted and available seats in green.
- Select new seat → confirm dialog “Move Alexander Warren London from Seat A-12 to Seat B-04?”
- On confirm: update seat_session seat; map and dashboard refresh.

**Extend session:**
- Modal: “Extend Alexander Warren London’s session?” with options +30m / +60m / Custom (time picker).
- Confirmation: “New end time: 1:15 PM.”

**End session:**
- Confirmation: “End this seat session now? Any final charges will be applied to Alexander Warren London’s account.”
- Buttons: **[End session]** / **[Cancel]**; on confirm, mark seat_session ended and free the seat.

### 2.8 Alerts & System Messages
- Surface concise, non-blocking alerts for seat conflicts, capacity holds, or payment issues.
- Use toast/snackbar for low-severity notices; modal dialogs for destructive actions (end session, failed login lockout).
- Provide retry or alternative action (e.g., “Hold check-in and start waitlist”).
