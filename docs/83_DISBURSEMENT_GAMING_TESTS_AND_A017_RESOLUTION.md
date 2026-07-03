# Disbursement Gaming Tests and A017 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A017-disbursement-gaming|attacks/A017-disbursement-gaming.md]]
- Defense: [[D017-disbursement-gaming|defenses/D017-disbursement-gaming.md]]

## Resolution decision

A017 is founded and does not distort the project when it improves milestone and release discipline. The accepted resolution is disbursement-gaming tests for milestone design, partial release, advance payment, and phase-gate release.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates: disbursement gaming attacks the conditional-disbursement core claim directly, and the tests are linkage and justification checks over existing disbursement objects, not new machinery.

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

## Scope boundary and limitation

Core v0 does not require per-project actuarial guarantee calibration, automated milestone-design scoring, or cost-verification machinery. The global v0 guarantee percentage plus configurable ThresholdPolicy retention remains the Core v0 answer; risk-priced guarantees and milestone-design analytics remain Extension v1+ or country implementation.

Limitation statement: milestone quality ultimately depends on human review of milestone design; a formally valid but substantively weak milestone plan approved by a weak reviewer can still release funds early, and the architecture's answer is designer responsibility and retention, not detection.

## Residual risks

- Sophisticated actors may still design formally valid but weak milestones.
- Fiscalizers may accept weak evidence unless quality rules are enforced.
- Project risk varies more than the global v0 guarantee percentage.

## Integration target

This resolution should inform DisbursementMilestonePlan, ProjectPhase, BudgetLine, FundingCommitment, Disbursement, FinancialAssuranceProfile, GuaranteeMaterializationRecord, FiscalizationReport, and EvaluationRecord.
