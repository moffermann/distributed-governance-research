# Allocation Mandate and A019 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A019-procedural-legitimacy-cannot-substitute-democratic-mandate.md`
- Defense: `defenses/D019-procedural-legitimacy-cannot-substitute-democratic-mandate.md`

## Resolution decision

A019 is founded as a system-level authorization gap and does not distort the project when it is read as requiring the platform to record the democratic mandate that external law supplies, not to manufacture one. The corpus already treats budget migration and formula choice as country-implementation decisions, but it nowhere requires each active Planning Scope to carry the authorization behind them. The accepted resolution is an `Allocation Mandate` record per active Planning Scope. ^rc17d69ad

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution integrates through an existing object: the mandate is a minimal record attached to the Planning Scope, giving visibility of an external authorization rather than constructing that authorization. It makes the missing authorization inspectable; it does not add a new adjudicating entity.

## Rule added to Core v0

Every active Planning Scope records the democratic mandate that authorized its budget migration and its allocation formula, distinct from the procedural Administrative Rule Change machinery. A non-equal allocation formula is a higher-authorization decision than an ordinary parameter edit.

Minimum Allocation Mandate fields:

- mandate source (statute, ordinance, referendum, or delegated authority);
- legal instrument reference authorizing budget migration;
- migrated share;
- allocation-amount formula version, with an explicit flag when it departs from equal-per-citizen and the authority that chose the departure;
- effective dates and version history.

## Macul example

The 5% sports migration must name the municipal or ministerial instrument that authorized it. A contribution-weighted formula cannot be presented as neutral configuration: the departure from equal-per-citizen must name the authority that chose it and the mandate it rests on. If no instrument exists, the missing Allocation Mandate record makes the gap visible instead of laundering it through a clean version history.

## Citizen simplicity

Citizens should see who authorized distributed allocation for a public function, on what legal instrument, and whether the formula departs from equal-per-citizen, with a plain warning such as `formula departs from equal share — authorized by [instrument]`.

## Transparency and accountability effect

The record separates "visible and versioned" from "democratically authorized," so an auditable reallocation can no longer pass as an authorized one, and a contribution-weighted formula cannot hide behind procedural cleanliness.

## Scope boundary and limitation

Core v0 records and exposes the mandate; it does not create, validate, or adjudicate it. Mandate construction remains external constitutional law and country implementation, and verification of the underlying instrument's soundness is outside the platform.

Limitation statement: an Allocation Mandate record makes missing authorization visible, but it cannot supply a mandate the law never granted, and the democratic-deficit critique of substituting atomized allocation for representative appropriation remains a recorded open normative debate.

## Residual risks

- An implementing authority may record a formally valid but substantively thin mandate.
- Budget may be migrated under contested legal authority the platform can display but cannot adjudicate.
- The normative case against replacing appropriation with atomized allocation is unresolved.

## Integration target

This resolution should inform Planning Scope, the allocation formula and Allocation Amount Provider, the Administrative Rule Change machinery, the Citizen Funding Account, and administrative observability.
