# AI-GM Screen Inventory, Circuits, and Patch Panel Map

This file is the single source of truth for all displays, their zones, circuits, and patch panel ports for Floor 1 of the CoWorkPlay flagship layout (3×3 grid: Café, Entry, Bar, Open Cowork, Main Toddler Play, Multi-Use/Party, Quiet Cowork, Baby/Sensory, Restrooms+BOH/Kitchen).

## Circuit Overview
- **Circuit 1 – Entry + Café Seating & Lounge**
- **Circuit 2 – Café Bar & To-Go**
- **Circuit 3 – Open Cowork**
- **Circuit 4 – Quiet Cowork + Baby/Sensory**
- **Circuit 5 – Play Core + Party Room**
- **Circuit 6 – BOH + Kitchen + Core Rack**

## Full Inventory
| Screen ID | Zone | Role | Channel | Circuit | Patch Panel Port |
|-----------|------|------|---------|---------|------------------|
| F1_CAFE_TBL_01     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP01 |
| F1_CAFE_TBL_02     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP02 |
| F1_CAFE_TBL_03     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP03 |
| F1_CAFE_TBL_04     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP04 |
| F1_CAFE_TBL_05     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP05 |
| F1_CAFE_TBL_06     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP06 |
| F1_CAFE_TBL_07     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP07 |
| F1_CAFE_TBL_08     | Café Seating & Lounge         | Customer | CUSTOMER | Ckt 1 | PP08 |
| F1_ENTRY_INFO_01   | Entry / Host / Retail         | Customer | CUSTOMER | Ckt 1 | PP09 |
| F1_ENTRY_STAFF_01  | Entry / Host / Retail         | Staff    | STAFF    | Ckt 1 | PP10 |
| F1_BAR_STAFF_01    | Café Bar & To-Go              | Staff    | STAFF    | Ckt 2 | PP11 |
| F1_BAR_STAFF_02    | Café Bar & To-Go              | Staff    | STAFF    | Ckt 2 | PP12 |
| F1_CW_OPEN_TBL_01  | Open Cowork                   | Customer | CUSTOMER | Ckt 3 | PP13 |
| F1_CW_OPEN_TBL_02  | Open Cowork                   | Customer | CUSTOMER | Ckt 3 | PP14 |
| F1_CW_OPEN_TBL_03  | Open Cowork                   | Customer | CUSTOMER | Ckt 3 | PP15 |
| F1_CW_OPEN_TBL_04  | Open Cowork                   | Customer | CUSTOMER | Ckt 3 | PP16 |
| F1_CW_QUIET_01     | Quiet Cowork / Phone          | Customer | CUSTOMER | Ckt 4 | PP17 |
| F1_CW_QUIET_02     | Quiet Cowork / Phone          | Customer | CUSTOMER | Ckt 4 | PP18 |
| F1_BABY_INFO_01    | Baby / Under-2 & Sensory      | Customer | CUSTOMER | Ckt 4 | PP19 |
| F1_PLAY_INFO_01    | Main Toddler Play             | Customer | CUSTOMER | Ckt 5 | PP20 |
| F1_PLAY_STAFF_01   | Main Toddler Play             | Staff    | STAFF    | Ckt 5 | PP21 |
| F1_PARTY_INFO_01   | Multi-Use / Party Room        | Customer | CUSTOMER | Ckt 5 | PP22 |
| F1_PARTY_STAFF_01  | Multi-Use / Party Room        | Staff    | STAFF    | Ckt 5 | PP23 |
| F1_KITCHEN_STAFF_01| Restrooms + BOH / Kitchen     | Staff    | STAFF    | Ckt 6 | PP24 |
| F1_SUP_STAFF_01    | Restrooms + BOH / Kitchen     | Staff    | STAFF    | Ckt 6 | PP25 |
| F1_BOH_STAFF_01    | Restrooms + BOH / Kitchen     | Staff    | STAFF    | Ckt 6 | PP26 |
| F1_CORE_RACK_01    | Restrooms + BOH / Kitchen     | Infra    | N/A      | Ckt 6 | PP27–PP32 |

### Notes
- F1_CORE_RACK_01 is not a screen but the core infra node (router, PoE switch, NAS, UPS).
- PP27–PP32 are reserved for infra and future expansion.
