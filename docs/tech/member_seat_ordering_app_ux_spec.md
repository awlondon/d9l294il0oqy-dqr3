# Member Seat Ordering App – Screen-by-Screen UX (V1)

## 0. Context & Goals
- **Users:** Members (primary) and day-pass guests with lightweight accounts.
- **Devices:** Smartphone (mobile web/app for MVP); optional workstation tablet at the seat (Phase 1).
- **Core goals:**
  - Let a member order food and drinks from their seat.
  - Automatically attach orders to their active seat session and default payment method.
  - Show a simple order status so they don’t need to get up or wonder where things are.
- **Reuse later for:** notifications (policy, playtime warnings), Sora clips, and robots/AI-GM—without changing the UX.

## 1. Entry Points
### A. Phone (MVP)
- Seat signage example: “Seat A-12 · Scan to order”.
- QR opens `https://coworkplay.app/seat-order?seat=A-12`.
- App checks whether there is an active `seat_session` for this seat + member.

### B. Workstation Tablet (Phase 1)
- Tablet copy: “You’re at seat A-12.”
- Primary button: **[Log in to order & see updates]**.
- Login methods:
  - QR handoff from phone.
  - Phone/email + code/PIN.
- Both entry paths converge into the same Home/Session view.

## 2. Screen Map
1. Welcome / Seat Check
2. Member Login
3. Session Home
4. Menu – Browse & Select
5. Cart / Order Review
6. Payment Confirmation
7. Order Status
8. Notifications & Messages
9. Session Summary / Goodbye

## 3. Screens & Flows
### 3.1 Welcome / Seat Check
**Purpose:** Confirm where the user is and whether they have a valid session.

**Elements:**
- Logo (small): Co.work.PLAY Cafe.
- Title: “Welcome to Co.work.PLAY Cafe”.
- Subtitle (dynamic by URL): “You’re at seat A-12.”
- Message when seat code is present: “We’ll use this seat to bring your orders to you.”

**Buttons:**
- **[Sign in to order]** (primary).
- Link: “Not at seat A-12?” → **[Choose a different seat]**.

**States:**
- If no seat in URL (e.g., direct app launch): Title “Choose your seat” with a simple selector/search: “Enter your seat code.”
- Tapping **[Sign in to order]** routes to Member Login.

### 3.2 Member Login
**Purpose:** Attach a real person + account to the seat session.

**Elements:**
- Title: “Sign in”.
- Copy: “Sign in so we can connect your orders to your account and membership.”

**Options:**
- **Option 1 – Mobile number (recommended):** field for mobile number + **[Send code]**, then enter 6-digit code.
- **Option 2 – Email (secondary):** “Use email instead” link with email field + **[Send magic link]**.

**Copy:**
- After sending code: “We’ve sent a code to [phone/email]. Enter it below to continue.”

**Error states:**
- “That code is not quite right. Please try again.”
- “Code expired. Request a new one.”

**Happy path:**
- On valid code, server checks for active `seat_session` for seat_code.
- If yes → Session Home.
- If no session: show “We don’t see an active seat for you at A-12. Please check in at the Host stand or ask a staff member for help.” with button **[I’ll talk to the Host]**. (Future: add “link my seat” flow.)

### 3.3 Session Home
**Purpose:** Main landing for a seated member.

**Layout:**
- Header: “Hi, Alexander Warren London 👋”; seat label “You’re at A-12”; time remaining (if known) “2h 15m left in your session”.
- Main tiles/buttons: **[Order food & drinks]** (primary CTA), **[Order history]**, **[House rules & policies]**, **[Notifications]** (badge when new), and later **[Watch quick tips / Sora clips]**.
- Info bar: “We’ll deliver your order to this seat. Please keep the aisle clear.”
- Primary flow: **[Order food & drinks]**.

### 3.4 Menu – Browse & Select
**Purpose:** Let members pick items quickly with a mobile-friendly menu.

**Layout:**
- Top bar: back link “← Back to home”; title “Order from your seat”; seat label “Seat A-12”.
- Category tabs: **[Coffee & Tea] [Cold Drinks] [Food] [Kids’ Snacks] [Treats]**.
- Item cards: name (e.g., “Latte”), short description (“12 oz, whole milk”), price (“$5.00”), and **[+]** button.
- Detail sheet on tap: customization options (size, milk type, additions) with **[Add to order]** and **[Cancel]**.
- Cart indicator in top right: icon with count + approximate total, e.g., “🛒 3 items · $17.50”; tapping opens Cart / Order Review.

### 3.5 Cart / Order Review
**Purpose:** Final check before charging card and firing order to POS/KDS.

**Layout:**
- Title: “Review your order”; seat line “Deliver to Seat A-12”.
- Items list: name, options summary, price, quantity stepper (- 1 +), trash icon to remove.
- Summary: subtotal, estimated tax, estimated total.
- Info: “Charged to your Co.work.PLAY account card ending in •••• 1234.” with link **[Change payment method]** (Phase 1+).
- Buttons: **[Place order]** (primary), **[Keep browsing]** (secondary).

**Edge state:**
- If no default payment method: message “We don’t have a payment method on file. Please add a card at the Host stand or in your account settings.” Show only **[Cancel]** or “Save as draft” in V1.

### 3.6 Payment Confirmation
**Purpose:** Confirm intent to charge and clearly show what happens next.

**Flow:**
- On **[Place order]** → confirmation overlay.
- Title: “Confirm your order”.
- Text: “We’ll charge $17.50 to your Co.work.PLAY account card ending in •••• 1234 and deliver your order to Seat A-12.”
- Buttons: **[Confirm & place order]**, **[Go back]**.
- On confirm: backend creates order and calls POS; client navigates to Order Status.

### 3.7 Order Status Screen
**Purpose:** Reassure member and reduce “where is my food?” interruptions.

**Layout:**
- Title: “Order in progress”.
- Summary: “Order #1248 · Seat A-12”.
- Short list: “Latte (12 oz, oat milk)”; “Snack Box – Kids”.
- Status timeline: [●] Received → [○] In the cafe → [○] Out for delivery → [○] Delivered.
- Text while in progress: “We’re preparing your order in the cafe. A team member will bring it to your seat.”
- Hint: “Please keep the aisle clear so staff can deliver.”

**Live updates:**
- When cafe marks `in_progress` → highlight “In the cafe”.
- When runner marks `out_for_delivery` → highlight that step.
- When runner marks `delivered`: switch to success state with header “✅ Delivered to Seat A-12”, text “Enjoy! If anything’s not right, please let our team know.” and buttons **[Order something else]** / **[Back to home]**.

### 3.8 Notifications & Messages
**Purpose:** Central spot for order updates, session time warnings, and house messages.

**Access:** From Session Home via **[Notifications]** tile (with badge if unread).

**Layout:**
- Title: “Notifications”.
- List items, newest first, e.g.:
  - [Order] 10:12 AM – “Your order #1248 is on its way to Seat A-12.”
  - [Session] 11:45 AM – “Your session at Seat A-12 ends in 30 minutes.”
  - [House rule] 10:00 AM – “Reminder: socks required in play area for all children and adults entering the space.”
- Tapping marks as read or opens detail if needed.

### 3.9 Session Summary / Goodbye
**Purpose:** Optional wrap-up when Host ends session or time runs out.

**Layout:**
- Title: “Session ended”.
- Text: “Thanks for working with us today at Seat A-12.”
- Summary bullets: “You placed 2 orders today.”; “Total charged: $24.50”.
- Buttons: **[View today’s receipt]** (transaction history) and **[Close]**.

**When shown:**
- If `seat_session` transitions to ended while the app is open.
- Or on next app open that day.

## 4. Tone & Microcopy
- Calm, non-urgent, service-focused: “We’ll bring it to you.” / “We’ve got your seat.”
- Avoid tech jargon; no mention of internal objects like `seat_session` or POS.
- Emphasize convenience (“stay in your flow”) and clarity (“we’re charging this card,” “we’re delivering here”).
