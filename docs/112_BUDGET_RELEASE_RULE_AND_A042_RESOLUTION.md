# Budget-Release Rule (Pull Against a Verification-Calibrated WIP Ceiling) and A042 Resolution v0

## Status

Accepted resolution for the ablation/longitudinal-round pair:

- Attack: [[A042-calendar-budget-release|attacks/A042-calendar-budget-release.md]]
- Defense: [[D042-calendar-budget-release|defenses/D042-calendar-budget-release.md]]

Author verdict (2026-07-07): accepted. Sourced from the satellite Experiment E-1a (longitudinal engine, `distributed-governance-experiments`, doi:10.5281/zenodo.21246089). Like docs/111, this is a P007 bounded integration on an existing object — the operating-mode configuration — not a new mechanism.

## The gap A042 named

Core v0 specified how citizens allocate, how funds disburse against milestones, and how delivery is verified — but **nothing specified when the implementing authority releases budget into the allocation machinery.** The satellite measured the consequence: releasing the whole year on day zero freezes ~5 months of budget in execution escrow and saturates the verification queue; releasing on the calendar (uniform monthly) maximizes project mortality through funding-window expiry (docs/104); and — the binding fact — where verification capacity is scarce, **no release policy recovers the delivered value, and over-release actively destroys it.** Verification capacity is the pipeline's ceiling before it is the anti-fraud instrument.

## Rule added to Core v0

**The authority meters budget release against a work-in-progress ceiling calibrated to the delivery-and-verification pipeline's throughput and cycle time — not against the calendar.** Formally, release each period only the amount that keeps committed-but-undelivered budget (sub-threshold commitments + execution escrow) at or below a ceiling *W*, where *W* tracks the pipeline's binding resource — verification capacity when scarce, execution duration when abundant (Little's Law: healthy WIP ≈ achievable throughput × cycle time). The satellite's optimum sat near seven months of budget for its calibration; the rule is stated in mechanism terms (meter to the binding resource), not fitted constants.

Consequential points:
1. The rule is **conditional on a carryforward instrument** — a capital fund, revolving fund, or multi-year investment program; the semi-open envelope of [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]] is precisely such a vehicle. Under strict fiscal-year annuality it degenerates to within-year metering, at no measured cost — a pull-metered treasury stays near-drained and so lapses nothing.
2. **Conditioning on the outstanding-commitment stock, not the recent approval flow.** Feedback release keyed to last period's activations underperforms; the correct control variable is the WIP stock the pull rule holds.
3. **Verification capacity is a sizing decision, not a free dial.** Because it is the ceiling, a deployment that under-funds fiscalization cannot buy back delivered value with any release schedule; capacity must be sized to the release plan (and see docs/113 for how machine verification raises it).

## Macul example

The municipality funds a plaza-and-sidewalk program of forty projects over three years from a capital fund. Instead of transferring the whole year's allocation to the platform in January (day-zero: money sits in escrow on works that cannot all be verified before year-end) or one-twelfth each month regardless of pipeline state (uniform: half the projects expire unfunded in slow months), the treasury releases only what keeps outstanding commitments near the seven-month ceiling its fiscalizer capacity can process. Delivered value rises; frozen capital falls; and if the fund is strictly annual, the ceiling simply resets each year with nothing stranded.

## Citizen simplicity

Nothing changes for citizens. The scope's public configuration card gains one line — "budget-release policy: pull, WIP ceiling *W*" — and allocation, delegation, and defaults are untouched.

## Scope boundary and limitation

P007 bounded integration: a release-policy field on the operating-mode configuration, plus the sizing discipline. It does not mandate a numeric *W* (that is a per-deployment calibration to the local pipeline), does not override appropriations law (it operates within whatever carryforward instrument the jurisdiction has), and does not by itself fund verification capacity — it makes the capacity-vs-release dependency explicit so a deployment cannot ignore it.

## Residual risks

- A deployment can mis-estimate its pipeline throughput and set *W* wrong; the frozen-capital and verification-queue metrics are the published feedback that surfaces the error.
- Strict-annuality regimes with no carryforward instrument at all cannot run cross-year pull; the rule degrades to within-year metering, which the satellite measured as costless at its parameters but which bounds the achievable smoothing.

## Integration target

- docs/110's semi-open envelope references this rule as its release discipline — done with this resolution.
- The manuscript's implementation pathway (Section 9) carries the rule — applied in v1.9.
- The satellite repository's traceability matrix gains the resolution anchor.
