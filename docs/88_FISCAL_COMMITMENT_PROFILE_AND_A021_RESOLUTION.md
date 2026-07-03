# Fiscal Commitment Profile and A021 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A021-treasury-dependence-and-fiscal-strangulation.md`
- Defense: `defenses/D021-treasury-dependence-and-fiscal-strangulation.md`

## Resolution decision

A021 is founded. The state controls the fiscal spigot and can strangle the system without attacking it openly — through late or partial delivery, mid-cycle reduction of the migrated share, zero indexation, or unexecuted valid orders — while the platform still displays green funding states. The accepted resolution is a public, versioned `Fiscal Commitment Profile` per Planning Scope plus fiscal-reliability observability.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution integrates observability through existing objects — the Planning Scope, treasury and custody records, signed Financial Orders, and AuditEvents. It converts fiscal strangulation from invisible to measurable and attributable; enforcement stays external.

## Rule added to Core v0

The fiscal commitment behind each Planning Scope is a public, versioned profile, and changes to it are visible governance events, not silent parameter edits. Delivery and execution reliability are surfaced as public signals attributable to the fiscal authority rather than the visible executor.

Minimum elements:

- Fiscal Commitment Profile per Planning Scope: migrated percentage, indexation rule, delivery-latency target, and cycle horizon;
- expected-versus-actual delivery dates of signed balances;
- order-to-execution latency distribution and an aggregate `unexecuted valid order` indicator;
- a real-value-preservation warning where nominal allocation amounts are not inflation-adjusted;
- profile changes recorded as governance events with reason, magnitude, affected scopes, and beneficiary impact;
- missed windows and systematic delay feeding H054 transition metrics and the A016 incumbent-resistance indicators.

## Macul example

A mid-year cut from 5% to 2% plus two months of late balance files becomes a visible Fiscal Commitment Profile change with reason, magnitude, and affected scopes, alongside reliability alerts showing that funded courts sit unpaid because orders are unexecuted upstream — not because the executor failed and not as silent starvation blamed on executors.

## Citizen simplicity

Citizens should see whether the migrated share, indexation, and delivery are on their committed terms, and a plain alert such as `funds committed but not delivered on time — upstream fiscal delay` when they are not.

## Transparency and accountability effect

Quiet strangulation becomes a public reliability signal distinguishable from lawful adjustment, and the reputational cost of unpaid work no longer falls silently on the visible executor.

## Scope boundary and limitation

Core v0 records and surfaces fiscal behavior; it enforces nothing. No software can compel a sovereign to pay. Multi-year appropriation locks, statutory indexation, and budget floors are country implementation.

Limitation statement: the platform converts fiscal strangulation from invisible to measurable and attributable, but credible commitment itself must come from law, and a determined treasury can still defund the system in full public view.

## Residual risks

- A determined state can still deliver late, index below inflation, and reduce the migrated share.
- Officials may frame systematic underdelivery as ordinary fiscal prudence.
- Enforceable floors, statutory indexation, and appropriation locks remain outside Core v0.

## Integration target

This resolution should inform the Planning Scope, Treasury and Allocation Amount Provider, the custodian role, Financial Order execution, H054 transition metrics, the A016 incumbent-resistance indicators, and administrative and citizen observability.
