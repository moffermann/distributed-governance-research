# D019 - Defense Against A019: Procedural Legitimacy Cannot Substitute Democratic Mandate

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A019-procedural-legitimacy-cannot-substitute-democratic-mandate.md`
- Attack title: `A019 - Procedural Legitimacy Cannot Substitute Democratic Mandate`
- Source: second-round attack queue, system-level democratic authorization.

## Attack summary

The attack argues that the architecture supplies abundant procedural legitimacy — visibility, versioning, auditability, non-surprise rules — but never establishes who holds a democratic mandate to migrate public budget share into civic wallets, to fix the per-citizen allocation formula, or to replace representative appropriation with atomized individual allocation. It targets system-level authorization rather than project-level legitimacy: the decision to run distributed allocation at all, and the choice of allocation rule, are presented as configuration rather than as constitutional choices requiring a mandate. Procedural transparency can make a fundamentally unauthorized reallocation of the public purse perfectly auditable and still illegitimate.

In the Macul example, the sports pilot migrates 5% of the sports budget into civic wallets and the implementing administrator selects a contribution-weighted formula under which higher-income residents receive larger monthly allocations. Every step is versioned and auditable, yet no council vote, referendum, or statute authorized either the migration or the plutocratic formula, and the system has no object that represents the missing authorization.

## Objective evaluation

- Classification: founded as a system-level authorization gap.
- Why it is founded: the corpus lets an administrator, protocol, or country implementation set the assignable share and the amount formula, and requires that choice to be public and versioned, but it nowhere requires recording the democratic mandate source that authorized budget migration. Traceability answers "was this change visible and versioned?", not "who was authorized to make it?".
- Why it is not fatal to the architecture: the mandate to migrate budget and to choose the allocation formula is an implementing-authority and country-implementation decision that the platform records but cannot itself generate; equal-per-citizen is the simplest default, and contribution-weighted variants are options a country must affirmatively authorize; under P001, the current baseline of representative appropriation also gives citizens no per-decision mandate, only a periodic electoral one, while offering far less visibility of who decided what.
- Difference of judgment: high. Whether a software architecture must model democratic authorization at all, or whether mandate is inherently external constitutional law that no platform object can manufacture, is a genuine normative disagreement.
- Editorial distortion risk: medium. The attack would distort the project if it demands that Core v0 construct the constitutional mandate itself; it strengthens the project if it is read as requiring the platform to record the mandate that external law supplies.

## Response

The defense is that democratic mandate is external constitutional law that the platform must display and anchor, not manufacture, and that the honest gap is the absence of a required mandate record rather than a claim that configuration confers authority.

The corpus already treats the decisive facts the attack names as external decisions. Migrating an official budget percentage into distributed allocation is listed as a country-implementation choice, and Treasury informs authorized funding capacity while it does not decide priorities by discretionary judgment. The amount formula is likewise a configurable institutional, protocol, or country-implementation rule, with equal-per-citizen offered as the simplest first-class option and contribution-weighted variants flagged as increasing the relative allocation power of higher-income citizens. None of this claims that the administrator's act of configuring generates the authority to reallocate; the authority is presumed to come from law. The architecture's residual-risk register even concedes that allocation formulas may hide political choices if not published. What the corpus does not yet do — and this is the founded part — is require every active Planning Scope to carry an Allocation Mandate record naming the statute, ordinance, referendum, or delegated authority that authorized the migration and the formula, distinct from the procedural Administrative Rule Change machinery.

Under P001, the comparison is not against an ideal parliament but against current appropriation. Today a legislature authorizes a budget line and an executive spends it, but citizens receive no per-decision mandate and cannot see which official chose which allocation; the electoral mandate is periodic and coarse. The platform's improvement is not that it invents a new source of authorization but that it makes the existing one inspectable: an Allocation Mandate record would let a citizen see who authorized distributed allocation for a public function, on what legal instrument, and whether a formula departed from equal-per-citizen — visibility the current baseline does not provide.

For Macul, the contribution-weighted migration described in the attack should not be presentable as neutral configuration. The pilot should be required to record that the 5% migration rests on a specific municipal or ministerial instrument and that any departure from equal-per-citizen allocation names the authority that chose it. If no such instrument exists, the missing Allocation Mandate record makes the gap visible rather than laundering it through a clean version history. The platform still cannot supply a mandate the law never granted; it can refuse to let the absence be invisible.

## Project-document basis

- `knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md:78` states the amount formula is configured by the competent authority, institutional administrator, protocol, or country implementation, and must be public, versioned, auditable, and explainable.
- `knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md:92` states that equal for all eligible citizens is the simplest option, the default the attack treats as displaced.
- `knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md:118` states a contribution-weighted formula increases the relative allocation power of higher-income citizens and should be visible as such.
- `knowledge/hypotheses/H033-system-defined-default-allocation-rule.md:23` requires that the default rule solve inactivity without becoming a hidden decision and that an onboarded citizen explicitly accept the default or choose another base profile.
- `knowledge/principles/P002-social-sovereignty-over-value.md:5` states that society is sovereign in assigning value, which the attack argues is not honored when an administrator sets the amount formula.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md:20` states that Treasury informs authorized funding capacity and executes valid movements but does not decide projects or priorities by discretionary judgment.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md:407` concedes that allocation formulas may hide political choices if not published.
- `docs/34_CORE_V0_SCOPE_FREEZE.md:840` lists the official budget percentage migrated to the system as a country-implementation decision, confirming migration is external law, not platform configuration.

## Bibliographic basis

- Pierre Rosanvallon, `Counter-Democracy: Politics in an Age of Distrust` (2008): monitoring and oversight powers supplement the electoral moment; a platform that makes authorization inspectable extends counter-democratic vigilance without pretending to replace the mandate.
- Nadia Urbinati, `Democracy Disfigured` (2014): the representative circuit confers mandate, so the platform must anchor to it rather than route around it — an argument for recording the mandate source, not for abolishing distributed allocation.
- Joseph Schumpeter, `Capitalism, Socialism and Democracy` (1942): legitimacy is procedural competition for a mandate to decide; the platform records the mandate that external competition produced instead of generating it internally.
- Philip Pettit, `On the People's Terms` (2012): coercive decisions must track the controlled, authorized will of the people, which supports requiring a visible authorization anchor over mere auditability.
- Jürgen Habermas, `Between Facts and Norms` (1996): legitimacy derives from discursively authorized will-formation; the Allocation Mandate record is where that external authorization becomes visible inside the system.

## Proposed improvements

Add an Allocation Mandate record to the Planning Scope model:

- require every active Planning Scope to record its mandate source and the legal instrument that authorized budget migration, visible to citizens;
- treat any contribution-weighted or otherwise non-equal amount formula as a higher-authorization decision than an ordinary parameter edit;
- surface an explicit citizen-facing disclosure whenever a formula departs from equal-per-citizen allocation, naming who authorized the departure and on what mandate;
- keep the representative-appropriation fallback and the mandate basis visible rather than assumed;
- distinguish, in the audit trail, "visible and versioned" from "democratically authorized";

## Applies to

- Planning Scope;
- Allocation formula and Allocation Amount Provider;
- Administrative Rule Change machinery;
- Citizen Funding Account;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong against the claim that the platform manufactures unauthorized authority, since migration and formula choice are already external decisions; moderate against the claim that Core v0 adequately represents authorization, since no mandate record is required today.

Residual risk: an implementing authority may record a formally valid but substantively thin mandate, or may migrate budget under contested legal authority that the platform can display but cannot adjudicate. The system can require the mandate to be named and anchored; it cannot make the underlying constitutional authorization sound, and mandate construction remains external law.

## Decision

The attack is founded as a system-level authorization gap. Phase 3 should add an Allocation Mandate record per Planning Scope, treat non-equal formulas as higher-authorization decisions, and distinguish visibility from authorization; construction of the mandate itself remains external constitutional law.
