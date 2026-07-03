# D021 - Defense Against A021: Treasury Dependence and Fiscal Strangulation

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A021-treasury-dependence-and-fiscal-strangulation.md`
- Attack title: `A021 - Treasury Dependence and Fiscal Strangulation`
- Source: second-round attack queue, treasury dependence and fiscal strangulation.

## Attack summary

The attack argues that the architecture treats Treasury and the custodian as honest neutral infrastructure, while the state still controls the fiscal spigot and can strangle the system without ever attacking it openly. Because the migrated percentage, the allocation formula version, the calculation date, the delivery latency of signed balance files, and the pace of order execution are all upstream of the platform, a government that cannot legally reject a citizen's project can still deliver allocation amounts weeks late, index them below inflation, reduce the migrated share at the next cycle, or let valid Financial Orders sit unexecuted under generic compliance pretexts. Each act is individually defensible as ordinary public finance, yet in aggregate they hollow out the system while the platform still displays green funding states.

The deeper claim is a credible-commitment failure. In the Macul example, a sports pilot on five percent of the sports budget is quietly cut mid-year to two percent with two months of delayed balance files; executors see Financial Orders marked ready for execution but unpaid, retention releases stall, and citizens blame the executors while the ministry reports that the pilot simply lost momentum.

## Objective evaluation

- Classification: founded.
- Why it is founded: no software can compel a sovereign to appropriate, index, or deliver funds on time; the fiscal channel remains a real instrument of quiet defunding that the current platform does not fully neutralize.
- Why it is not fatal to the architecture: the platform already narrows custodian discretion to closed technical and legal rejection causes and makes every Financial Order and signed allocation amount traceable, so strangulation cannot be silent inside the platform even if it cannot be prevented outside it.
- Difference of judgment: low. The parties agree the fiscal commitment must ultimately come from country-implementation law; the disagreement is only over how much the platform itself can carry.
- Editorial distortion risk: low-medium. The attack distorts the project only if it demands that the platform itself guarantee fiscal sovereignty, a burden no observability layer and no software can bear.

## Response

The defense is that the platform converts fiscal strangulation from diffuse bureaucratic fog into visible, attributable data, while conceding that visibility is not enforcement and that credible commitment must come from law. The custodian may reject or suspend an order only for closed technical or legal causes, and every money movement is generated as a signed, auditable Financial Order, so a delayed or unexecuted order becomes a recorded event rather than an unexplained absence. The signed balance carries the allocation formula version, the calculation date, and a verifiable signature, so a mid-cycle change of the migrated share or a zero-indexation decision is a data point that can be surfaced and dated rather than an invisible parameter edit.

Under P001, the correct comparison is not an ideal state that always pays on time. In today's public finance, budget under-execution, late transfers, and inflation erosion are routine and largely invisible to citizens, who cannot see which ministry delayed which disbursement or by how much. The architecture's contribution is to make the same fiscal behavior legible: expected-versus-actual delivery dates, order-to-execution latency, and an aggregate unexecuted-valid-order indicator turn quiet strangulation into a public reliability signal attributable to the fiscal authority rather than the visible executor.

For Macul, the platform cannot stop the finance ministry from cutting five percent to two percent, but it can record the cut as a versioned change to a Fiscal Commitment Profile with reason, magnitude, and affected scopes, and it can show that the courts sit funded-but-unpaid because orders are unexecuted upstream, not because the executor failed. The honest concession is that enforceability, multi-year appropriations, statutory floors, and indexation guarantees are country-implementation commitments; the platform makes the breach observable, but only law can make the commitment binding.

## Project-document basis

- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md:20` states that Treasury informs authorized funding capacity and executes valid movements but does not decide projects, priorities, or disbursements by discretionary judgment.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md:289` restricts the custodian to rejecting an order only for closed technical or legal causes.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md:408` records the residual risk that external amount providers may be unavailable or delayed, which is precisely the strangulation vector the attack names.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:377` requires the system to generate a Financial Order whenever money must move, making each execution a traceable, signed event.
- `docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md:242` confirms Treasury may provide balance and smoothing inputs where lawful but still does not decide civic value or priority.
- `docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md:281` records the residual risk that Treasury or administrators may use smoothing parameters as hidden political steering.
- `knowledge/hypotheses/H037-public-revenue-custody-and-disbursement.md:18` states that the custody boundary is Core v0 but the specific legal custodian, tax integration, and enforceability mechanics depend on the implementing country.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md:57` sets the public budget boundary distinguishing the assignable civic wallet from a non-assignable common pool of essential fiscal obligations.

## Bibliographic basis

- Margaret Levi, `Of Rule and Revenue` (1988): because rulers structure revenue channels to preserve control, the architecture must assume the fiscal channel is contested and make its behavior observable rather than trusting it as neutral plumbing.
- Douglass North and Barry Weingast, "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England" (1989): credible restraints on sovereign fiscal discretion are what make commitments believable, which is why enforceable commitment must be located in country-implementation law, not software.
- Finn Kydland and Edward Prescott, "Rules Rather than Discretion: The Inconsistency of Optimal Plans" (1977): a government's promise is time-inconsistent without binding rules, so a versioned public Fiscal Commitment Profile at least dates and exposes each revision.
- Joseph Schumpeter, "The Crisis of the Tax State" (1918): public programs ultimately rest on the fiscal capacity of the state, so the platform can expose fiscal reliability but cannot substitute for it.
- Terry Moe, "The Politics of Structural Choice: Toward a Theory of Public Bureaucracy" (1990): rivals cannot lock in arrangements against later fiscal reversal, which is why observability of reversal, not prevention of it, is the platform's realistic contribution.

## Proposed improvements

Add a fiscal-commitment and delivery observability layer:

- a public, versioned Fiscal Commitment Profile per Planning Scope recording migrated percentage, indexation rule, delivery-latency target, and cycle horizon;
- expected-versus-actual delivery-date tracking for signed balances and an aggregate unexecuted-valid-order indicator on administrative and citizen surfaces;
- a real-value-preservation warning where nominal allocation amounts are not inflation-adjusted;
- a mid-cycle-change disclosure requiring reason, magnitude, affected scopes, and beneficiary impact on every Profile change.

## Applies to

- Treasury and Allocation Amount Provider;
- Custodian role;
- Financial Order execution;
- administrative and citizen observability.

## Defense strength and residual risk

Defense strength: strong at making fiscal strangulation visible, attributable, and distinguishable from lawful adjustment; weak at preventing it, because no software can compel a sovereign to pay.

Residual risk: a determined state can still deliver late, index below inflation, and reduce the migrated share, and the platform can only record and surface these acts. Enforceable budget floors, statutory indexation, and multi-year appropriation locks remain country-implementation commitments outside Core v0.

## Decision

The attack is founded. Phase 3 should add a versioned Fiscal Commitment Profile and delivery and execution-latency observability so strangulation becomes legible, while acknowledging that credible fiscal commitment is an enforcement problem that only country-implementation law can resolve.
