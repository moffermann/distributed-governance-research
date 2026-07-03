# Territorial Outcome Observability and A028 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A028-spatial-and-group-inequity-of-allocation-outcomes|attacks/A028-spatial-and-group-inequity-of-allocation-outcomes.md]]
- Defense: [[D028-spatial-and-group-inequity-of-allocation-outcomes|defenses/D028-spatial-and-group-inequity-of-allocation-outcomes.md]]

## Resolution decision

A028 is founded. Even with strictly equal per-citizen wallets and equal capacity, allocation outcomes concentrate where social capital, organizational density, and proposal-writing capacity already concentrate, so equal inputs produce unequal territorial and group results. Horizontal fiscal equity is not guaranteed by equal individual inputs; it requires equalization the model does not contain. This resolution mandates outcome observability and documents equalization as an available, unmandated capability.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution with core observability. Outcome inequity attacks the fairness claim of equal wallets, so it cannot be ignored, but the audit trail already makes per-territory outcomes reconstructable and the equalization machinery is representable through existing objects — the H025 formula layer, the H033 default rule, planning-scope lanes, and the non-assignable pool. Core v0 therefore integrates the observability minimally and bounds the redistribution as a political choice.

## Rule added to Core v0

Per-territory and per-group allocation outcomes are observable as core administrative observability. Core v0 mandates that the distribution of outcomes be measured; it does not mandate that outcomes be equalized.

Minimum outcome observability:

- funding per capita by comuna as a standing, versioned public metric;
- funded-project density measured against planning-scope need weights;
- capture share by organized proposers, so concentration among high-capacity actors is visible;
- an explicit input-equity versus outcome-equity distinction in the model's own language, so equal wallets are not presented as evidence of fair outcomes.

Equalization capability is documented as available and unmandated: allocation-amount formulas (redistributive and hybrid, H025), planning-scope lanes and the A005 floor-and-lane pattern reused for a distinct territorial or group equity target, the H033 default rule's territorial routing, and preferential supply-side funding of proposal, modeling, and fiscalization support in low-capacity territories are all country-implementation choices, each versioned, publicly authorized, and auditable rather than a silent administrator setting.

## Macul example

Two Macul comunas of 20,000 residents hold identical wallets; the organized one, with dense clubs and 40 well-modeled projects, captures eight times the per-capita allocation of the marginal one. The architecture now sees the eight-to-one gap from the audit trail as a standing metric, and can route against it through a redistributive formula, a territorial floor, or supply-side support — but only if the implementing country configures it.

## Citizen simplicity

Citizens should see that equal wallets guarantee an equal right to allocate, not an equal share of where allocation lands, and should be able to see funding per capita for their own comuna alongside others.

## Transparency and accountability effect

Spatial and group concentration becomes visible from within the platform for the first time, so distributive failure can be named and argued as policy rather than attributed to the passivity of the places that lost — and any equalization applied is a public, authorized choice on the record.

## Scope boundary and limitation

Core v0 mandates outcome observability, not outcome equality. Equalization mechanisms — floors, matching, compensatory routing, redistributive formulas — remain country implementation or Extension v1+, modeled on but distinct from the essential-service floors.

Limitation statement: with equal wallets and no equalization configured, organized territories will out-capture marginalized ones by default; the architecture makes that measurable for the first time but does not prevent it, and how much to equalize is a political choice, not an architectural one.

## Residual risks

- The default outcome reproduces the pre-existing map of organization until an implementer configures equalization.
- Supply-side capacity gaps persist even where wallets are equal, so the pipeline of fundable projects stays uneven.
- Group-level metrics are constrained by lawfulness and privacy, so some outcome inequity may remain unmeasurable in practice.

## Integration target

This resolution should inform the civic tax wallet and allocation formula (H025), the system default allocation rule (H033), the essential-service protection pattern (A005), participation-support projects, and administrative observability.
