# AI-GM Screen Network — Floor Plan & Electrical/Low-Voltage Plan

This guide is for electricians and low-voltage contractors deploying the AI-GM screen network. It summarizes AC circuiting, Cat6 home-runs, and screen locations so power and data land exactly where each display is mounted.

## Zones
- **ENTRY** — Guest arrival area with greeter/host podium and guest-facing messaging.
- **CAFE/POS** — Point-of-sale and bar service counter for staff operations and quick guest updates.
- **CW_A (Co-work area A)** — First co-work bay with tables 1–10 and mirrored customer screens.
- **CW_B (Co-work area B)** — Second co-work bay with tables 11–20 and mirrored customer screens.
- **PLAY** — Play area with family messaging plus a staff control screen.
- **PARTY** — Corridor and private rooms for party coordination and staff dispatch.
- **DINE** — Dining zone with shared customer information screen.
- **BOH** — Back-of-house support including kitchen, supervisor, and core rack.

## Top-Down Conceptual Floor Plan (Not to Scale)
```
+-----------------------------------------------------------+
|                         ENTRY                             |
|   [ENTRY_INFO_01]     [ENTRY_STAFF_01]                    |
+------------------------+----------------------------------+
|        CAFE / POS      |            CW_A (Tables 1-10)    |
|   [POS_STAFF_01]       |  T1  T2  T3  T4  T5              |
|   [BAR_STAFF_01]       |  T6  T7  T8  T9  T10             |
|                        |  [mirror screen per table]       |
+------------------------+----------------------------------+
|                         CW_B (Tables 11-20)               |
|  T11 T12 T13 T14 T15                                      |
|  T16 T17 T18 T19 T20                                      |
|  [mirror screen per table]                                |
+------------------------+--------------------+-------------+
|          PLAY AREA     |   PARTY CORRIDOR   |   DINE      |
|  [PLAY_INFO_01]        | [PARTY_STAFF_01]   | [DINE_INFO] |
|  [PLAY_STAFF_01]       | [RM1_INFO_01]      |             |
|                        | [RM1_STAFF_01]     |             |
|                        | [RM2_INFO_01]      |             |
|                        | [RM2_STAFF_01]     |             |
+------------------------+--------------------+-------------+
|                          BOH                             |
|  [KITCHEN_STAFF_01]    [SUP_STAFF_01] [BOH_STAFF_01]      |
|                                                           |
|  [CORE RACK: Router / PoE Switch / NAS / UPS]             |
+-----------------------------------------------------------+
```

**Legend:**
- Brackets `[ ]` show screen locations and IDs.
- `T#` codes mark co-work tables with mirrored customer screens.

## Screen Inventory
| Screen ID | Zone | Role | Description |
| --- | --- | --- | --- |
| F1_ENTRY_INFO_01 | ENTRY | CUSTOMER | Customer-facing entry info display |
| F1_ENTRY_STAFF_01 | ENTRY | STAFF | Host/greeter staff screen |
| F1_POS_STAFF_01 | CAFE/POS | STAFF | POS station control screen |
| F1_BAR_STAFF_01 | CAFE/POS | STAFF | Bar staff control screen |
| F1_CW_A_TBL_01 | CW_A | CUSTOMER | Table 1 mirror/customer screen |
| F1_CW_A_TBL_02 | CW_A | CUSTOMER | Table 2 mirror/customer screen |
| F1_CW_A_TBL_03 | CW_A | CUSTOMER | Table 3 mirror/customer screen |
| F1_CW_A_TBL_04 | CW_A | CUSTOMER | Table 4 mirror/customer screen |
| F1_CW_A_TBL_05 | CW_A | CUSTOMER | Table 5 mirror/customer screen |
| F1_CW_A_TBL_06 | CW_A | CUSTOMER | Table 6 mirror/customer screen |
| F1_CW_A_TBL_07 | CW_A | CUSTOMER | Table 7 mirror/customer screen |
| F1_CW_A_TBL_08 | CW_A | CUSTOMER | Table 8 mirror/customer screen |
| F1_CW_A_TBL_09 | CW_A | CUSTOMER | Table 9 mirror/customer screen |
| F1_CW_A_TBL_10 | CW_A | CUSTOMER | Table 10 mirror/customer screen |
| F1_CW_B_TBL_11 | CW_B | CUSTOMER | Table 11 mirror/customer screen |
| F1_CW_B_TBL_12 | CW_B | CUSTOMER | Table 12 mirror/customer screen |
| F1_CW_B_TBL_13 | CW_B | CUSTOMER | Table 13 mirror/customer screen |
| F1_CW_B_TBL_14 | CW_B | CUSTOMER | Table 14 mirror/customer screen |
| F1_CW_B_TBL_15 | CW_B | CUSTOMER | Table 15 mirror/customer screen |
| F1_CW_B_TBL_16 | CW_B | CUSTOMER | Table 16 mirror/customer screen |
| F1_CW_B_TBL_17 | CW_B | CUSTOMER | Table 17 mirror/customer screen |
| F1_CW_B_TBL_18 | CW_B | CUSTOMER | Table 18 mirror/customer screen |
| F1_CW_B_TBL_19 | CW_B | CUSTOMER | Table 19 mirror/customer screen |
| F1_CW_B_TBL_20 | CW_B | CUSTOMER | Table 20 mirror/customer screen |
| F1_PLAY_INFO_01 | PLAY | CUSTOMER | Play area customer messaging screen |
| F1_PLAY_STAFF_01 | PLAY | STAFF | Play area staff control screen |
| F1_PARTY_STAFF_01 | PARTY | STAFF | Party corridor dispatch screen |
| F1_PARTY_RM1_INFO_01 | PARTY | CUSTOMER | Party Room 1 customer-facing info |
| F1_PARTY_RM1_STAFF_01 | PARTY | STAFF | Party Room 1 staff control screen |
| F1_PARTY_RM2_INFO_01 | PARTY | CUSTOMER | Party Room 2 customer-facing info |
| F1_PARTY_RM2_STAFF_01 | PARTY | STAFF | Party Room 2 staff control screen |
| F1_DINE_INFO_01 | DINE | CUSTOMER | Dining area shared screen |
| F1_KITCHEN_STAFF_01 | BOH | STAFF | Kitchen ticketing/staff screen |
| F1_SUP_STAFF_01 | BOH | STAFF | Supervisor dashboard |
| F1_BOH_STAFF_01 | BOH | STAFF | Back-of-house ops screen |

## Electrical Circuits (AC Power)
- Screens are distributed across 20A, 120V branch circuits to balance load and provide redundancy.
- Suggested groupings:
  - **Circuit #1** — ENTRY + CAFE/POS + part of CW_A
  - **Circuit #2** — Remaining CW_A tables
  - **Circuit #3** — CW_B tables
  - **Circuit #4** — PLAY + PARTY corridor/rooms + DINE
  - **Circuit #5** — BOH staff screens
  - **Circuit #6** — Core rack fed into UPS (router, PoE switch, NAS)
- Each screen location receives a duplex receptacle behind the display height; the core rack has a dedicated circuit feeding the UPS for ride-through during outages.

## Low-Voltage (Data) Wiring
- Every screen client receives a Cat6 home-run back to the core rack.
- All Cat6 terminations land on a patch panel adjacent to the PoE switch for tidy management.
- Approximate drop counts per zone:
  - **CW_A:** 10
  - **CW_B:** 10
  - **Entry/Cafe/POS:** 4
  - **Play/Party/Dine:** ~7–8
  - **BOH/Kitchen/Sup:** 3
- One-line data path:

```
[All Screens] -- Cat6 --> [Patch Panel] --> [PoE Switch] --> [Router] --> [Internet]
                                                    \ 
                                                     --> [NAS]
                                                     --> [Other LAN Services]
```

## One-Line Power + Network Diagram
```
[Main Panel]
   |-- Circuit #6 -> [UPS] -> [Core Rack: Router + PoE Switch + NAS]
   |-- Circuit #1 -> ENTRY / CAFE / partial CW_A screens
   |-- Circuit #2 -> Remaining CW_A screens
   |-- Circuit #3 -> CW_B screens
   |-- Circuit #4 -> PLAY + PARTY + DINE screens
   |-- Circuit #5 -> BOH staff screens

[PoE Switch] -- Cat6 --> [All Screen Clients]
         |\
         | \---> [Router] --> [Internet]
         | \
         |  \--> [NAS]
         |   \
         |    \--> [Other LAN Services]
```
