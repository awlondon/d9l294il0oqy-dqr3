# Financial Model

## Intro & Context
AI-GM is the automated "game master" that monitors sensors, reservations, and schedules to orchestrate on-site screens and workflows without constant staff input. It is deployed across Co.Work.Play flagships and franchises to keep guest messaging, safety cues, and staff prompts consistent. All figures below are illustrative and for planning only—not financial advice.

## Baseline Comparison
- Traditional human oversight labor (manual monitoring of screens and guest flow): **~$25,000/year**.
- AI-GM operating cost: **~$8,220/year**.

## Assumptions
- Human oversight equivalent: **$25/hour × 20 hours/week × 52 weeks ≈ $26,000/year** (rounded to ~$25k for comparison).
- AI-GM OpEx components (annual):
  - Cloud hosting & bandwidth: **$180/month × 12 ≈ $2,160**.
  - Power for displays + media players: **$40/month × 12 ≈ $480**.
  - Content pipeline (Sora + template updates): **$250/month × 12 ≈ $3,000**.
  - Managed services, monitoring, and replacement reserve: **$220/month × 12 ≈ $2,640**.
- Total AI-GM OpEx: **$2,160 + $480 + $3,000 + $2,640 = $8,280/year** (rounded to ~$8.2k).

## ROI Scenarios
| Scenario | Daily Hours Saved | Implied Annual Labor Savings* | Net Annual Savings (after ~$8.2k OpEx) | Simple Payback vs ~$25k CapEx |
| --- | --- | --- | --- | --- |
| Conservative | 1.5 hrs/day | 1.5 × $25 × 365 ≈ **$13,688** | **~$5,468** | **~4.6 years** |
| Base | 2.0 hrs/day | 2.0 × $25 × 365 ≈ **$18,250** | **~$10,030** | **~2.5 years** |
| Aggressive | 3.0 hrs/day | 3.0 × $25 × 365 ≈ **$27,375** | **~$19,155** | **~1.3 years** |

*Labor savings use the same $25/hour assumption. Conservative applies to sites with limited programming; base aligns with steady day-long programming; aggressive applies in high-utilization sites where screens and staff prompts run continuously.

## Link to Unit Economics
- The Co.Work.Play mature-unit model in `finance/co-work-play-unit-economics.md` allocates **~$30k/year** to "Software & AI-GM Ops." The AI-GM OpEx of **~$8.2k/year** fits inside that line alongside POS and networking.
- When the labor savings above are realized, store-level EBITDA in the mature-unit model (currently ~18–20% after fees) improves by the net savings, creating faster payback and better franchisee cash flow.

## Risks & Sensitivity Notes
- Underutilization: insufficient daily events reduces realized hours saved.
- Deployment or maintenance failures: downtime erodes guest experience and ROI.
- Staff adoption and training: weak onboarding limits savings and compliance.
- Sensitivity analyses and edge cases are covered in the broader finance models.

## Further Reading
- `finance/co-work-play-unit-economics.md`
- `finance/phoenix-flagship-summary.md`
- `ai-gm/docs/capex-opex.md`
- `finance/business-model-overview.md`

## Disclaimer
Numbers are illustrative, not investment, legal, or tax advice, and are subject to change as vendor quotes and operating data evolve.
