# Disbursement Gaming Tests and A017 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A017-disbursement-gaming.md`
- Defense: `defenses/D017-disbursement-gaming.md`

## Resolution decision

A017 is founded and does not distort the project when it improves milestone and release discipline. The accepted resolution is disbursement-gaming tests for milestone design, partial release, advance payment, and phase-gate release.

## Rule added to Core v0

Milestone-based disbursement must be reviewed for gaming risk before it can support release.

Minimum tests:

- milestone links to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount;
- advance payment has recoverability, retention, direct supplier payment, guarantee, or equivalent protection;
- weak milestone design can trigger designer/modeler responsibility review where it creates avoidable release risk;
- fiscalizer states why evidence supports release, partial release, retention, or rejection;
- citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status.

## Macul example

`Site preparation and materials purchase` should not justify a large release unless it is tied to value-relevant progress, recoverability, retained funds, and evidence beyond receipts. Receipts alone do not prove usable courts.

## Citizen simplicity

Citizens should see `funding reserved`, `release blocked`, `partial release`, `retained amount`, or `guarantee materialized` rather than a single money status.

## Transparency and accountability effect

The rule prevents project actors from turning milestone formalities into early unrecoverable payment.

## Residual risks

- Sophisticated actors may still design formally valid but weak milestones.
- Fiscalizers may accept weak evidence unless quality rules are enforced.
- Project risk varies more than the global v0 guarantee percentage.

## Integration target

This resolution should inform DisbursementMilestonePlan, ProjectPhase, BudgetLine, FundingCommitment, Disbursement, FinancialAssuranceProfile, GuaranteeMaterializationRecord, FiscalizationReport, and EvaluationRecord.
