# A019 - Procedural Legitimacy Cannot Substitute Democratic Mandate

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md`.

## Description

At the macro level, the architecture supplies abundant procedural legitimacy — visibility, versioning, auditability, non-surprise rules — but never establishes who holds a democratic mandate to migrate public budget share into civic wallets, to fix the per-citizen allocation formula, or to replace representative appropriation with atomized individual allocation. Unlike A001, which targets project-level legitimacy and treats funding as a poor proxy for a single project's social approval, this attack targets system-level democratic authorization: the decision to run distributed allocation at all, and the choice of allocation rule, are presented as configuration rather than as constitutional choices requiring a mandate. Procedural transparency can make a fundamentally unauthorized reallocation of the public purse perfectly auditable and still illegitimate.

## Location in current project

- `knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md` civic tax wallet, assignable/non-assignable pool split, and per-citizen amount formulas.
- `knowledge/hypotheses/H033-system-defined-default-allocation-rule.md` system-defined default allocation rule applied to inactive citizens.
- `knowledge/principles/P002-social-sovereignty-over-value.md` claim that society is sovereign over value assignment.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md` Citizen Funding Account as authorized civic funding capacity.
- `docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md` project-level legitimacy profile that this attack deliberately steps above.
- `docs/00_RESEARCH_PHILOSOPHY.md` comparative-critique and functional-distribution framing.
- `docs/02_PROJECT_SCOPE.md` scope of the distributed governance model.

## Problem

The model carefully separates funding, support, delegation, and complaint signals, and it makes every rule change traceable. But traceability answers "was this change visible and versioned?", not "who was authorized to make it?". H025 assigns the assignable/non-assignable split, eligibility, and amount formula to "the competent authority, institutional administrator, protocol, or country implementation" without naming a democratic source for that authority. The contribution-weighted formula option is, in effect, one-dollar-one-vote over the assignable pool: it converts tax magnitude into allocation power and calls it configuration. H033 then applies a system-defined default to citizens who never participate, governing dormant public funds by a protocol rule no electorate ratified.

Example:

```text
The Macul sports pilot migrates 5% of the sports budget into civic wallets.
The implementing administrator selects a contribution-weighted allocation formula.
Higher-income residents receive larger monthly allocation amounts.
Every step is versioned and auditable, but no council vote, referendum, or
statutory mandate authorized either the migration or the plutocratic formula.
```

## Recommended resolution path

- Distinguish, as a Core v0 conceptual boundary, an `Allocation Mandate` (democratic authorization to run distributed allocation and to choose its formula) from the existing procedural `Administrative Rule Change` machinery.
- Require every active Planning Scope to record its mandate source (statute, ordinance, referendum, delegated authority) and the legal instrument that authorized budget migration, visible to citizens.
- Treat the allocation-amount formula, especially any contribution-weighted variant, as a constitutional-level choice requiring a higher authorization threshold than ordinary parameter edits.
- Add an explicit citizen-facing disclosure when a formula departs from equal-per-citizen allocation, naming who authorized the departure and on what mandate.
- Keep the atomized civic-wallet model as one configuration, but require that representative-appropriation fallback and the mandate basis remain visible rather than assumed.
- Leave full mandate-construction mechanics as Extension v1+ while preventing Core v0 from presenting unauthorized reallocation as mere configuration.

## Theoretical base and citations

- Pierre Rosanvallon, `Counter-Democracy: Politics in an Age of Distrust` (2008): oversight, veto, and monitoring powers supplement but cannot replace the electoral-representative moment of authorization.
- Nadia Urbinati, `Democracy Disfigured` (2014): unmediated or "plebiscitary" participation can hollow out the representative circuit that confers mandate.
- Joseph Schumpeter, `Capitalism, Socialism and Democracy` (1942): democratic legitimacy is procedural competition for a mandate to decide, not direct citizen administration of every allocation.
- Philip Pettit, `On the People's Terms` (2012): legitimacy requires that coercive collective decisions track the controlled, authorized will of the people, not merely transparent procedure.
- Jürgen Habermas, `Between Facts and Norms` (1996): legitimacy derives from a discursively authorized will-formation process, not from auditability alone.

## Social reasons

Public money is coercively raised and collectively owned. Deciding how it is divided is one of the oldest objects of democratic contestation. If the rule for dividing it can be set by an administrator and merely published, citizens lose the very authorization power that distinguishes a budget from a private allocation. A contribution-weighted formula additionally risks entrenching existing wealth as civic power, precisely for the people least able to contest it.

## Conflicts of interest

- Implementing administrators may prefer allocation formulas that flatter their own constituencies or funders.
- Higher-income citizens benefit directly from contribution-weighted formulas and may lobby for them under the label of fairness.
- Platform operators gain institutional relevance from expanding the assignable share regardless of mandate.
- Incumbent authorities may authorize migration selectively to bypass representative bodies they do not control.

## Inconsistencies to test

- The model insists funding does not equal legitimacy, but it treats the choice of who-allocates-the-budget as configurable without a legitimacy source of its own.
- P002 asserts social sovereignty over value, but the amount formula that weights each citizen's voice is set by an administrator, not by society.
- H025 offers equal allocation as a simple option, but it equally offers a contribution-weighted formula that converts money into allocation power.
- Every rule change must be non-surprising and versioned, but no rule requires that the underlying reallocation of the public purse be democratically mandated.

## Stress scenario

A ministry launches distributed allocation across an entire public function, not a bounded pilot, and configures a contribution-weighted formula plus a system default that routes all inactive citizens' shares toward roadmap-aligned projects the ministry favors. The full change history is public and auditable. A civil-society group argues that no legislature authorized replacing appropriation with atomized allocation and that the formula is plutocratic. The system can display every version of the rule but cannot show any mandate that authorized it, and has no object that represents the missing authorization.

## Review checklist

- Does each active Planning Scope record the legal or democratic mandate that authorized budget migration?
- Is the allocation-amount formula treated as a higher-authorization decision than ordinary parameter edits?
- Are departures from equal-per-citizen allocation disclosed with their authorizing mandate?
- Can a citizen see who authorized distributed allocation for a given public function, not only who configured its parameters?
- Is representative-appropriation fallback visible rather than silently displaced?
- Does the audit trail distinguish "visible and versioned" from "democratically authorized"?

## Resolution output

Resolved in `docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md`: an `Allocation Mandate` record per active Planning Scope, integrated as a minimal record through the existing Planning Scope object rather than a new adjudicating entity. The record names the mandate source (statute, ordinance, referendum, or delegated authority), the legal instrument authorizing budget migration, the migrated share, the allocation-amount formula version with an explicit flag and authority when it departs from equal-per-citizen, and effective dates with version history; non-equal formulas are treated as higher-authorization decisions than ordinary parameter edits. Core v0 records and exposes the mandate but does not create, validate, or adjudicate it — mandate construction remains external constitutional law and country implementation, and the democratic-deficit critique of substituting atomized allocation for representative appropriation remains a recorded open normative debate.
