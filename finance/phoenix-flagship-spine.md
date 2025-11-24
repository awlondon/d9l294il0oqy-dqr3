# Co.work.play Café — Phoenix Flagship Model Spine (v2)

This document narrates the Phoenix flagship economics and timeline in terms that align with the canonical finance models in:
- `phoenix-flagship-model.csv`
- `phoenix-flagship-ramp-and-cash.csv`
- `co-work-play-churn-cac-model.csv`

## 1. Baseline

- Floor area: **8,500 SF**
- Stabilized monthly revenue: **$250,000**
- Stabilized annual revenue: **$3,000,000**

All Phoenix P&L and ramp calculations are driven off these values in `phoenix-flagship-model.csv`.

## 2. Revenue Mix

At stabilization, monthly revenue of $250k is composed as follows (see `phoenix-flagship-model.csv`):
- Memberships: **24%**
- Day passes: **18%**
- Café: **32%**
- Parties & events: **12%**
- Programs/classes: **8%**
- Other (retail, etc.): **6%**

The percentages sum to 100%; multiplying each share by the $250k baseline yields category revenues that sum back to the stabilized total.

## 3. Member Economics & CAC/LTV

Per-member metrics stay independent of any total revenue assumption. Use `co-work-play-churn-cac-model.csv` for the full table:
- Monthly ARPU: **$120**
- Contribution margin: **80%** → **$96** contribution per member per month
- Churn sensitivities at **3%, 5%, and 8%** monthly churn drive LTV and healthy CAC bands (20–30% of LTV).

No $2M or $7.5M revenue assumptions are used in this Phoenix spine—only per-member math tied back to the $250k stabilized baseline for reference.

## 4. Ramp & Runway

`phoenix-flagship-ramp-and-cash.csv` holds the month-by-month ramp and cumulative cash math.

- Ramp percentages run from **30% in Month 1** up to **100% by Month 18**, with Months 7–12 climbing from 80–90% and Months 13–18 from 93–100%.
- Monthly revenue = `Phoenix_Stabilized_Monthly_Revenue * Ramp_Pct`; cost lines scale off the same baseline using the percentage assumptions in `phoenix-flagship-model.csv` (COGS 20%, labor 32%, occupancy 10% of baseline, marketing 3%, other opex 8%).
- EBITDA each month = Revenue – COGS – Labor – Occupancy – Marketing – Other Opex.
- Cumulative cash starts with the **$2.1M upfront CapEx** hit, then adds monthly EBITDA; adding the **$900k operating reserve** reduces the starting deficit to ~$1.2M and shortens the path to breakeven.
- Under the base ramp, breakeven occurs once cumulative EBITDA offsets the upfront CapEx (net of reserve); a **20% slower ramp** scenario can be overlaid on the same table to test reserve sufficiency—the $900k reserve is designed to keep operations solvent through that slower case.

## 5. Gates & Decision Logic

Milestones align to ramp progress and the stabilized $250k/month baseline:
- **Month 14 gate:** confirm trajectory toward the $250k/month stabilized target (≥95% ramp) and validate unit economics before committing to marketing escalation.
- **Month 18 gate:** expect near-stabilization (~100% of baseline); if cumulative cash is still materially negative, trigger efficiency workstreams.
- **Month 22 gate:** if still below the stabilized baseline or if labor/COGS creep above planned percentages, pause expansion capital until corrective actions recover margins.

Labor oversight: training & recruiting budgets run **4–6% of payroll in Year 1** and **2–3% at stabilization**. If combined labor (wages + taxes + training/recruit) exceeds **35–37% of revenue** for more than three straight months, treat it as a margin red flag and execute an operational review.
