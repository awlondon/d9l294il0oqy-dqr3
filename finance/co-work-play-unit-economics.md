# Co.Work.Play Café – Unit Economics & Franchise Model

This document captures the base mature-unit financial model for a Co.Work.Play hybrid coworking + café + play space. It is designed as a reference for both investors and franchisees when evaluating single-unit performance and multi-unit scalability.

## 1. Single-Unit Revenue (Mature Store)

Assumptions (steady state, Year 3+):

- Total annual revenue per location: **$2,000,000**
  - Café / Food & Beverage: **$900,000** (45%)
  - Coworking (memberships, day passes): **$700,000** (35%)
  - Parties & Events (birthday rentals, buyouts): **$400,000** (20%)

## 2. COGS and Gross Profit

Blended COGS assumptions:

- Café COGS: 35% of café sales → 0.35 × 900,000 = **$315,000**
- Cowork COGS: 5% of cowork sales → 0.05 × 700,000 = **$35,000**
- Parties COGS: 10% of event sales → 0.10 × 400,000 = **$40,000**

**Total COGS = $390,000**

> **Gross Profit = 2,000,000 – 390,000 = $1,610,000 (~80.5% gross margin)**

## 3. Operating Expenses (Before Franchise Fees)

Annual operating expense assumptions:

- Labor (baristas, kitchen, play staff, manager): **$600,000** (~30% of revenue)
- Rent / Occupancy: **$300,000** (~15% of revenue)
- Utilities: **$40,000**
- Maintenance / Cleaning / Security: **$30,000**
- Local Marketing: **$40,000** (~2% of revenue)
- Insurance / Licenses: **$20,000**
- Software & AI-GM Ops (POS, Wi-Fi, Sora, etc.): **$30,000**

**Total Opex (pre-fees) = $1,060,000**

Labor sensitivity analysis is provided in `finance/co-work-play-labor-sensitivity.csv`, showing how store-level EBITDA margin degrades as labor costs rise above the 30% baseline.

> **EBITDA before franchise fees = 1,610,000 – 1,060,000 = $550,000 (~27.5% margin)**

## 4. Franchise Royalties & System Fees

Assumed franchisor fee stack on gross sales:

- Royalty: **6%** of gross revenue
- Brand / Marketing Fund: **2%**
- Tech / AI-GM Platform Fee: **1%**

On $2,000,000 annual revenue:

- Royalty (6%): **$120,000**
- Brand fund (2%): **$40,000**
- Tech fee (1%): **$20,000**

**Total system fees = $180,000 (9% of revenue)**

> **Store-level EBITDA after fees = 550,000 – 180,000 = $370,000 (~18.5% margin)**

## 5. CAPEX & Payback

All-in build-out cost per location (leasehold improvements, kitchen/café equipment, play equipment, FF&E, AI-GM screens & rack):

- Estimated CAPEX: **$1.0M – $1.5M**
- Midpoint used for modeling: **$1.2M**

Using mature-unit EBITDA after fees (~$370,000/year):

> **Simple payback ≈ 1,200,000 ÷ 370,000 ≈ 3.2 years**

Target positioning:

- Mature-unit EBITDA margin after all fees: **18–20%**
- Payback window: **3–4 years** at steady state

## 6. Multi-Unit & Franchisor Economics (Illustrative)

### 10 Mature Units

- System revenue: 10 × $2.0M = **$20,000,000**
- Store-level EBITDA (post-fees): 10 × $370,000 = **$3.7M**
- Franchisor fee revenue (9%): 0.09 × 20M = **$1.8M**

### 20 Mature Units

- System revenue: **$40,000,000**
- Store-level EBITDA (post-fees): **$7.4M**
- Franchisor fee revenue (9%): **$3.6M**

These figures exclude one-time franchise fees and corporate overhead, which are handled in a separate model.

## 7. Churn and CAC Sensitivity

Churn and CAC assumptions are modeled in `finance/co-work-play-churn-cac-model.csv`.

We explicitly track LTV and healthy CAC ranges at 3%, 5%, and 8% monthly churn, and we compute the new members per month required to hold 350 active members steady.

## 8. Ramp and Cash Runway

A simple 24-month ramp and cash runway model is in `finance/co-work-play-ramp-model.csv`. It approximates revenue ramp, operating leverage, and cumulative cash to illustrate required runway (6–9 months of operating buffer is recommended).
