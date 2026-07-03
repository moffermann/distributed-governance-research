# D024 - Defense Against A024: Underprovision of Non-Salient Public Goods by Atomized Choice

## Integration status

Second-round paired review completed. Accepted resolution: `docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md`. Propagated into the core corpus.

## Attack reference

- Attack file: `attacks/A024-underprovision-of-non-salient-public-goods.md`
- Attack title: `A024 - Underprovision of Non-Salient Public Goods by Atomized Choice`
- Source: second-round attack queue, underprovision of non-salient public goods.

## Attack summary

The attack argues that atomized voluntary allocation inherits the documented biases of charitable giving: identifiable-victim salience, warm-glow satisfaction, and preference for photogenic, visible outputs. If so, then non-excludable, abstract, statistical-life goods such as drainage, disease prevention, data infrastructure, and routine maintenance are systematically underfunded relative to their welfare value even when every actor is honest. Where A005 protects a named set of essential floors, A024 targets the aggregate bias across the vast middle ground above the floor, where the losers are a diffuse class of unglamorous goods that no floor names and no dishonest actor is needed to starve.

In the example, citizens in a Chilean commune enthusiastically fund a riverside plaza and playground while an unglamorous stormwater drainage upgrade for the same neighborhood attracts almost no allocation, because its benefit is an averted flood no one can picture. Two winters later the plaza floods and the value the drainage would have protected is destroyed; every allocation decision was honest, yet the aggregate portfolio was still biased against the abstract good.

## Objective evaluation

- Classification: partially founded.
- Why it is founded: above the protected floor the salience gradient is real and currently unmeasured, so abstract preventive goods can be under-allocated relative to their welfare value even under fully honest participation.
- Why it is not fatal to the architecture: the architecture never routes the whole budget through salience-driven choice; the non-assignable pool and essential floors exclude precisely the catastrophic-underprovision goods, and system-defined defaults channel inactive citizens' funds by rule rather than salience.
- Difference of judgment: medium. The disagreement is over how much of the valuable middle ground is left to unstructured salience once floors, defaults, and planning scopes are accounted for.
- Editorial distortion risk: medium. The attack distorts the project if it assumes the alternative is an ideal welfare-maximizing Samuelson planner, when discretionary allocation also over-funds visible, politically photogenic projects.

## Response

The defense is that salience-driven choice governs only a bounded slice of the budget, because the goods where underprovision is catastrophic are excluded from popularity dynamics by structure, while conceding that above the floor the salience gradient is real and unmeasured. The public budget boundary distinguishes the assignable civic wallet from a non-assignable common pool, and the essential-service floor-and-lane rule protects continuity guarantees behind a floor rather than exposing them to monthly attention. The anti-neglect safeguards explicitly preserve default allocation rules, strategic categories, and observability of underfunded areas so low-visibility functions are not silently starved. For the millions who never actively choose, the system applies a transparent default allocation rule that channels funds by category, not by salience, and official profiles can be selected to support underfunded protected scopes.

Under P001, the comparison baseline is not a benevolent Samuelson planner who funds drainage in proportion to expected harm averted. The resolution baseline is real institutional allocation, where central political discretion also over-funds visible, ribbon-cutting projects and quietly starves prevention and maintenance for years when the agenda changes. Ribbon-cutting bias is a governmental pathology, not a novel defect introduced by distributed allocation; the architecture's contribution is to make both central political neglect and popularity-driven neglect visible rather than to claim it abolishes salience bias.

For the commune, the drainage upgrade sits above the essential floor, so the defense concedes it can lose the salience contest to the plaza under unstructured choice. What the architecture can add is a portfolio view showing funding per category against declared planning-scope need, so the neighborhood, its auditors, and its planning authority can see the abstract good being under-funded before the flood rather than diagnosing it afterward, and a transparent, versioned default weighting toward under-allocated non-salient categories presented as a public protocol choice rather than a hidden nudge.

## Project-document basis

- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION#Resolution decision|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] defines the floor-and-lane rule protecting an essential floor separately from the contestable service lane.
- [[H002-distributed-resource-allocation#^rdf3fe4e3|knowledge/hypotheses/H002-distributed-resource-allocation.md]] sets the public budget boundary distinguishing the assignable wallet from a non-assignable common pool of essential functions.
- [[H002-distributed-resource-allocation#^r1722756d|knowledge/hypotheses/H002-distributed-resource-allocation.md]] requires anti-neglect safeguards including strategic categories and observability of underfunded areas so low-visibility functions are not silently starved.
- [[H033-system-defined-default-allocation-rule#Example default rule|knowledge/hypotheses/H033-system-defined-default-allocation-rule.md]] gives an example default rule that channels funds across strategic, near-completion, regional, control, and new-project categories by rule.
- [[28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW#Base profile selection|docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md]] lists an official profile option to support underfunded protected scopes through a visible assignable lane.
- [[H038-monthly-use-it-or-allocate-it-cycle#^r5cecbdca|knowledge/hypotheses/H038-monthly-use-it-or-allocate-it-cycle.md]] applies the configured or protocol-defined default allocation rule when the citizen does not act, routing inactive funds by rule rather than salience.
- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION#^r1e71c059|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] sets the comparison baseline as real institutional allocation, not an ideal central state, since central discretion also hides underfunding.
- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION#^r91c050a9|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] records the residual risk that low-visibility needs still require outreach and participation-capacity support.

## Bibliographic basis

- Paul Samuelson, "The Pure Theory of Public Expenditure" (1954): non-excludable goods are underprovided by decentralized voluntary choice, which is exactly why the architecture removes catastrophic-underprovision goods from citizen-by-citizen allocation into the non-assignable pool.
- James Andreoni, "Impure Altruism and Donations to Public Goods: A Theory of Warm-Glow Giving" (1990): giving flows to gratifying causes, so above the floor the defense adds portfolio observability rather than trusting warm glow to fund prevention.
- Deborah Small and George Loewenstein, "Helping a Victim or Helping the Victim: Altruism and Identifiability" (2003): identifiable victims attract more than statistical ones, which harm-averted framing on non-salient projects is meant to partially counter.
- Thomas Schelling, "The Life You Save May Be Your Own" (1968): a named life commands resources a statistical life does not, reinforcing that abstract preventive goods need structural protection, not persuasion alone.
- Kenneth Arrow, `Social Choice and Individual Values` (1951): no neutral aggregation rule exists, so the default-rule weighting toward non-salient categories is disclosed as a deliberate, versioned protocol choice rather than a neutral mechanism.

## Proposed improvements

Add salience-bias observability above the protected floor:

- a public-good salience classification of eligible project types by excludability, benefit visibility, and time-to-benefit;
- an aggregate allocation-portfolio view showing funding per category against declared planning-scope need, across salient versus non-salient and preventive versus remedial lanes;
- a transparent, versioned default-rule weighting toward under-allocated non-salient categories, presented as a public protocol choice gated by threshold policy;
- harm-averted and resilience framing attached to non-salient projects so abstract benefits are more legible to funders.

## Applies to

- Citizen funding and automatic allocation profiles;
- system-defined default allocation rule;
- Planning Scope;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong for the goods where underprovision is catastrophic, which are shielded by the non-assignable pool and essential floors; moderate for the non-essential-but-valuable middle ground, where salience bias operates above any floor.

Residual risk: even with observability and a disclosed default weighting, honest citizens may keep directing free choice toward salient projects, and no view forces the abstract good to win. The architecture surfaces the bias and offers structured counterweights, but it does not eliminate the salience gradient above the floor.

## Decision

The attack is partially founded. Phase 3 should add salience-bias observability and a disclosed non-salient default weighting above the protected floor, while noting that the catastrophic cases are already excluded from salience dynamics and that the comparison baseline is a discretionary allocator with its own ribbon-cutting bias.
