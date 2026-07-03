# Salience Bias Observability and A024 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A024-underprovision-of-non-salient-public-goods|attacks/A024-underprovision-of-non-salient-public-goods.md]]
- Defense: [[D024-underprovision-of-non-salient-public-goods|defenses/D024-underprovision-of-non-salient-public-goods.md]]

## Resolution decision

A024 is partially founded. Atomized voluntary allocation inherits the documented biases of charitable giving — identifiable-victim salience, warm glow, and preference for photogenic outputs — so above the protected floor abstract, preventive, statistical-life goods such as drainage, disease prevention, data infrastructure, and routine maintenance can be under-allocated relative to their welfare value even under fully honest participation. The bias is real and currently unmeasured. But the architecture never routes the whole budget through salience-driven choice: the non-assignable pool and the essential floors (A005) exclude precisely the catastrophic-underprovision goods, and system-defined defaults channel inactive citizens' funds by rule rather than salience. The accepted resolution is salience-bias observability above the protected floor plus a disclosed non-salient default weighting.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution bounds with observability. It exposes the salience gradient through existing objects — Planning Scope, citizen funding and automatic allocation profiles, the default allocation rule, and administrative observability — rather than correcting citizen preferences or imposing a welfare function. The catastrophic cases are already structurally protected, so what remains is to make the middle-ground gradient visible and to route inactive budget by planning priority.

## Rule added to Core v0

Above the essential floor, the salience gradient in citizen allocation is an observable property, and any default weighting toward under-allocated non-salient categories is a disclosed, versioned public protocol choice rather than a hidden nudge. Default allocation rules channel inactive budget by planning priority, not by salience.

Minimum elements:

- salience-bias observability above the protected floor: funding per category against declared planning-scope need weights, across salient versus non-salient and preventive versus remedial lanes;
- underfunded-need indicators and non-salient-category visibility in the discovery surface, so a systematically under-funded category is seen before a shock reveals it;
- the non-assignable pool and essential floors (A005) as the structural answer for catastrophic tails, kept distinct from this middle-ground observability;
- default allocation rules that route inactive budget by planning priority rather than salience;
- a transparent, versioned default-rule weighting toward under-allocated non-salient categories, presented as a public protocol choice gated by threshold policy;
- optional harm-averted and resilience framing on non-salient projects so abstract benefits are more legible to funders.

## Macul example

Citizens in a Chilean commune fund a riverside plaza and playground enthusiastically while a stormwater drainage upgrade for the same neighborhood attracts almost no allocation, because its benefit is an averted flood no one can picture. The drainage sits above the essential floor, so under unstructured choice it can lose the salience contest. The portfolio view shows funding per category against the planning scope's declared need, so the neighborhood, its auditors, and its planning authority see the abstract good being under-funded before the flood rather than diagnosing it two winters later, and the default rule can carry a disclosed weighting toward the under-allocated preventive category.

## Citizen simplicity

Citizens should see which valuable categories are being systematically under-funded relative to declared need, with a plain indicator such as `prevention and maintenance under-funded here versus plan` and an honest note that any default lean toward them is a published protocol choice.

## Transparency and accountability effect

The salience gradient becomes a visible portfolio signal rather than an invisible starvation, both popularity-driven neglect and central ribbon-cutting neglect are made observable rather than either being hidden, and any default correction is disclosed and versioned rather than presented as a neutral mechanism.

## Scope boundary and limitation

Core v0 exposes the salience gradient and routes inactive budget by planning priority; it does not correct citizen preferences or impose a welfare function. Portfolio-level rebalancing toward non-salient goods beyond defaults and visibility is gated by threshold policy rather than mandated, and treating it as a stronger planning-scope instrument is Extension v1+ work.

Limitation statement: above the floor the salience gradient is real, and correcting it beyond defaults and visibility is a political choice for planning-scope governance rather than the platform, so even with observability and a disclosed default weighting honest citizens may keep directing free choice toward salient projects and no view forces the abstract good to win.

## Residual risks

- Even with observability and a disclosed default weighting, free choice may keep flowing to salient projects above the floor.
- Low-visibility needs still require outreach and participation-capacity support the platform does not supply.
- Discovery amplification of visually compelling projects can deepen the salience bias unless counter-weighted.

## Integration target

This resolution should inform citizen funding and automatic allocation profiles, the system-defined default allocation rule, the Planning Scope and its declared need weights, the discovery layer, and administrative observability.
