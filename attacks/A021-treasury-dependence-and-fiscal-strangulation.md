# A021 - Treasury Dependence and Fiscal Strangulation

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md` and propagated into the core corpus.

## Description

The architecture treats Treasury and the custodian as honest neutral infrastructure that reports signed allocation amounts and executes valid Financial Orders, and it assumes the migrated budget share is stable. This attack asks whether the state, which still controls the fiscal spigot, can strangle the system without ever attacking it openly: through late or partial delivery of allocation amounts, custodian slow-walking of valid orders, mid-cycle reduction of the migrated percentage, clawbacks framed as fiscal emergency, or inflation eroding non-indexed amounts. Unlike A016, which targets political and legal resistance by incumbent institutions, this attack targets the fiscal-plumbing channel: a credible-commitment failure where the money infrastructure itself becomes the instrument of quiet defunding.

## Location in current project

- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md`, custodian role and closed rejection causes.
- `knowledge/hypotheses/H037-public-revenue-custody-and-disbursement.md`, custody-execution boundary.
- `knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md`, non-withdrawable allocation right and amount provider.
- `docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md`, Budget Liquidity Smoothing and authorized-budget guardrails.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md`, Financial Order execution path.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md`, public budget boundary and assignable share.

## Problem

The system separates civic decision-making from financial execution and insists that the custodian may reject orders only for closed technical or legal causes. That boundary defends against discretionary project selection by Treasury, but it does not defend against the state acting through the parameters and timing it still controls. The migrated percentage, the allocation formula version, the calculation date, the delivery latency of signed balance files, and the pace of order execution are all upstream of the platform. A government that cannot legally reject a citizen's project can still deliver the allocation amount weeks late, index it below inflation, reduce the migrated share at the next cycle, or let valid Financial Orders sit unexecuted under generic compliance or cash-flow pretexts. Each act is individually defensible as ordinary public finance, but in aggregate they hollow out the system while the platform still displays green funding states.

The deeper issue is credible commitment. Distributed allocation only has value if citizens believe the migrated budget will actually arrive and actually pay executors. Because the state can revise that commitment at any cycle without a visible governance event, rational executors, fiscalizers, and citizens will discount future allocations, and the ecosystem thins before any open confrontation occurs.

Example:

```text
A Macul sports pilot runs on 5% of the sports budget.
Mid-year the finance ministry cites a fiscal emergency, cuts the migrated share to 2%, and delays two months of signed balance files.
Executors with milestones due see Financial Orders marked "ready for execution" but unpaid; retention releases stall.
The platform shows funded projects, but the money never moves, and citizens blame the executors.
```

## Recommended resolution path

- Represent the fiscal commitment as a public, versioned `Fiscal Commitment Profile` per Planning Scope: migrated percentage, indexation rule, delivery-latency target, and cycle horizon, so any change becomes a visible governance event rather than a silent parameter edit.
- Add custodian and amount-provider service-level observability: expected versus actual delivery date of signed balances, order-to-execution latency distributions, and an aggregate `unexecuted valid order` indicator visible on administrative and citizen-facing layers.
- Treat mid-cycle reduction of the migrated share, missed delivery windows, or systematic order-execution delay as tracked fiscal-reliability signals feeding the H054 transition metrics and the incumbent-resistance indicators.
- Require an indexation or real-value-preservation rule for authorized allocation amounts, with a visible warning when nominal amounts are not inflation-adjusted.
- Keep this in the Core v0 boundary as observability and versioned public rules over the fiscal parameters; leave enforceable budget floors, legal indexation guarantees, and multi-year appropriation locks as Extension v1+ or country-implementation commitments.
- Distinguish a lawful, capped, publicly justified fiscal adjustment from strangulation by requiring reason, magnitude, affected scopes, and beneficiary impact on every change to the Fiscal Commitment Profile.

## Theoretical base and citations

- Margaret Levi, `Of Rule and Revenue` (1988): rulers structure revenue extraction and delivery to maximize their own control, so fiscal channels are instruments of power, not neutral plumbing.
- Douglass North and Barry Weingast, "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England" (1989): credible restraints on the sovereign's fiscal discretion are what make commitments believable and investment possible.
- Joseph Schumpeter, "The Crisis of the Tax State" (1918): the fiscal capacity and choices of the state are the foundation on which all public programs ultimately depend.
- Terry Moe, "The Politics of Structural Choice: Toward a Theory of Public Bureaucracy" (1990): political actors design and redesign structures to preserve control, and rivals cannot lock in arrangements against later fiscal reversal.
- Finn Kydland and Edward Prescott, "Rules Rather than Discretion: The Inconsistency of Optimal Plans" (1977): without binding rules, a government's optimal promise today is time-inconsistent and predictably revised tomorrow.

## Social reasons

Citizens and executors will invest effort, reputation, and organizational capacity in the system only if they trust that allocated public money will actually flow. If the state can quietly reduce, delay, or erode that flow, the people who lose most are the executors who staffed up on the promise of the migrated budget and the beneficiaries whose projects stall mid-milestone. Silent fiscal strangulation converts a participation promise into a broken one, and the reputational cost falls on the visible executor rather than the invisible ministry.

## Conflicts of interest

- The finance authority may prefer to preserve discretionary control over the migrated share and its timing.
- The custodian may face institutional or political pressure to slow-walk orders that fund inconvenient projects.
- Incumbent programs competing with distributed projects benefit when the migrated budget is quietly squeezed.
- Officials may frame ordinary underdelivery as fiscal prudence to avoid a visible governance event.
- Platform operators dependent on state contracts may under-report delivery failures.

## Inconsistencies to test

- The custodian may reject only for closed technical or legal causes, but delivery timing and migrated percentage are set upstream and need no rejection to defund the system.
- Funding is a stable commitment until closure, but the underlying fiscal commitment can be revised at each cycle without any commitment event on the platform.
- Treasury is framed as neutral infrastructure, but the same authority sets the allocation formula version, indexation, and delivery cadence that determine whether the system survives.
- Budget Liquidity Smoothing must not hide fiscal risk, but a missing or late allocation delivery already hides it downstream of the smoothing rule.

## Stress scenario

A jurisdiction runs the distributed sports function well for a year, then enters a budget-consolidation period. The finance ministry does not reject a single project. It moves the signed-balance delivery from day one to day twenty of each cycle, indexes allocation amounts at zero while inflation runs at eight percent, and instructs the custodian to batch order execution weekly instead of daily under a generic anti-fraud review. Within two cycles, executors face payment delays that breach their own supplier terms, fiscalizers decline new assignments because control payments lag, and citizens see a growing backlog of funded-but-unpaid projects. No open attack occurred, yet the ecosystem contracts, and the ministry can credibly report that the pilot simply lost momentum.

## Review checklist

- Is the migrated percentage exposed as a public, versioned parameter with change reasons?
- Are expected and actual delivery dates for signed allocation balances observable?
- Is order-to-execution latency measured and surfaced as an aggregate reliability indicator?
- Are allocation amounts protected against inflation, or is the absence of indexation visibly warned?
- Is a mid-cycle reduction of the migrated share recorded as a governance event with beneficiary-impact disclosure?
- Can citizens and auditors distinguish a lawful capped adjustment from a pattern of quiet strangulation?

## Resolution output

Resolved in `docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md`: a public, versioned `Fiscal Commitment Profile` per Planning Scope plus fiscal-reliability observability, integrated through existing objects (Planning Scope, treasury and custody records, signed Financial Orders, AuditEvents). The profile records the migrated percentage, indexation rule, delivery-latency target, and cycle horizon; observability adds expected-versus-actual delivery of signed balances, order-to-execution latency, an aggregate `unexecuted valid order` indicator, and a real-value-preservation warning where amounts are not inflation-adjusted. Profile changes are governance events with reason, magnitude, affected scopes, and beneficiary impact, and missed windows and systematic delay feed the H054 transition metrics and A016 incumbent-resistance indicators. Core v0 records and surfaces fiscal behavior but enforces nothing: no software can compel a sovereign to pay, and multi-year appropriation locks, statutory indexation, and budget floors remain country implementation. The platform converts strangulation from invisible to measurable and attributable; a determined treasury can still defund the system in full public view.
