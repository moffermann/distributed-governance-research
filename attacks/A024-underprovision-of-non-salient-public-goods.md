# A024 - Underprovision of Non-Salient Public Goods by Atomized Choice

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md` and propagated into the core corpus.

## Description

Atomized voluntary allocation lets millions of citizens direct assignable funds toward the projects they find compelling. This attack asks whether that mechanism inherits the well-documented biases of charitable giving: identifiable-victim salience, warm-glow satisfaction, and preference for photogenic, visible outputs. If so, then non-excludable, abstract, statistical-life goods such as drainage, disease prevention, data infrastructure, and routine maintenance are systematically underfunded relative to their welfare value even when every actor is honest. Unlike A005, which protects essential floors for a known set of essential services, this attack targets the aggregate allocation bias across everything above the floor: Samuelsonian underprovision of public goods reproduced at the platform level, where the losers are not a protected category but a diffuse class of unglamorous goods that no floor names.

## Location in current project

- `docs/21_CITIZEN_FUNDING_FLOW.md`, funding as a bounded allocation action driven by citizen choice.
- `docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md`, floor-and-lane rule and its scope limits.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md`, anti-neglect safeguards and what H002 does not claim.
- `knowledge/hypotheses/H033-system-defined-default-allocation-rule.md`, default allocation categories.
- `knowledge/hypotheses/H038-monthly-use-it-or-allocate-it-cycle.md`, monthly cycle and fallback routing.
- `docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md`, automatic allocation profile categories.

## Problem

The system's core wager is that aggregating many citizen valuations beats opaque centralized allocation. That wager is strong for goods whose value is legible to an individual funder: a visible court, a named beneficiary, a completed building. It is weak precisely where public economics predicts markets and voluntary contribution fail: non-excludable goods with diffuse, statistical, or deferred benefits. Drainage that prevents a flood that now never happens, a vaccination campaign whose success is invisible, a data or monitoring backbone that only matters when something goes wrong, or unglamorous maintenance that produces no ribbon-cutting all generate little warm glow and name no identifiable victim. Honest, well-meaning citizens will predictably direct attention and funds toward salient, gratifying projects, leaving non-salient public goods underfunded even though their marginal welfare value is high.

The protected-floor mechanism from A005 does not cure this. Floors protect a named set of essential guarantees; they do not protect the vast middle ground of ordinary public goods that are valuable but not classified as essential floors. Nor do default allocation rules and near-completion preferences fix it, because those categories still route toward whatever projects exist and attract support. The result is a platform-level version of the free-rider and salience problem: the aggregate portfolio over-weights visible outputs and under-weights prevention, maintenance, and abstract infrastructure, and no single dishonest actor is required to produce the distortion.

Example:

```text
In a Chilean commune, citizens enthusiastically fund a new riverside plaza and playground.
An unglamorous stormwater drainage upgrade for the same neighborhood attracts almost no allocation, because its benefit is an averted flood that no one can picture.
Two winters later the plaza floods, and the value the drainage would have protected is destroyed.
Every allocation decision was honest; the aggregate portfolio was still biased against the abstract good.
```

## Recommended resolution path

- Add a `Public-Good Salience Profile` to Planning Scopes that classifies eligible project types by excludability, benefit visibility, and time-to-benefit, making the non-salient categories observable rather than invisibly starved.
- Extend the anti-neglect safeguards beyond essential floors: expose an aggregate portfolio view showing how allocation is distributed across salient versus non-salient, preventive versus remedial, and maintenance versus new-build categories.
- Allow default allocation profiles and fallback rules to carry a transparent, versioned weighting toward under-allocated non-salient categories, presented as a public protocol choice rather than a hidden nudge.
- Support evidence and framing that make abstract benefits legible: expected-harm-averted estimates, statistical-life or resilience metrics, and prevention narratives attached to non-salient projects so citizens can value them more accurately.
- Keep the citizen's free choice as the Core v0 default and treat portfolio-level rebalancing toward non-salient goods as an Extension v1+ default-rule and planning-scope instrument, gated by threshold policy rather than hard mandate.
- Distinguish this aggregate-bias observability from the A005 essential-floor guarantee, so the two mechanisms cover the floor and the non-salient middle ground respectively.

## Theoretical base and citations

- Paul Samuelson, "The Pure Theory of Public Expenditure" (1954): non-excludable public goods are systematically underprovided by decentralized voluntary choice because individuals cannot capture their collective benefit.
- James Andreoni, "Impure Altruism and Donations to Public Goods: A Theory of Warm-Glow Giving" (1990): giving is driven partly by the private satisfaction of the act, so contributions flow to gratifying causes rather than to where welfare gains are largest.
- Deborah Small and George Loewenstein, "Helping a Victim or Helping the Victim: Altruism and Identifiability" (2003): people give far more to identifiable victims than to statistical ones, biasing voluntary allocation against abstract and preventive goods.
- Thomas Schelling, "The Life You Save May Be Your Own" (1968): a named individual life commands attention and resources that an equal statistical life does not.
- Kenneth Arrow, `Social Choice and Individual Values` (1951): aggregating individual preferences into a collective allocation has no neutral mechanism, so the aggregation rule itself shapes which goods win.

## Social reasons

The people harmed by underprovision of non-salient goods are usually those exposed to the averted risk: residents of a flood-prone street, patients spared by an invisible prevention program, communities whose infrastructure quietly decays. Because the harm is a non-event or a deferred failure, no constituency mobilizes to fund the good in advance, and the cost surfaces only after the damage. A participation system that channels enthusiasm toward visible wins can leave these diffuse, future-facing interests structurally unrepresented.

## Conflicts of interest

- Project promoters are rewarded for photogenic, quickly-legible outputs over abstract prevention.
- Executors may reframe maintenance or prevention as visible new-build to attract allocation.
- Authorities may let citizen enthusiasm cover salient goods while quietly deprioritizing the non-salient ones they should still fund.
- Delegates and profile designers may steer toward crowd-pleasing categories to retain support.
- Platform discovery may amplify visually compelling projects, deepening the salience bias.

## Inconsistencies to test

- Aggregating many citizen valuations is claimed to beat central allocation, but voluntary aggregation is exactly the mechanism public economics predicts will underprovide non-excludable goods.
- Essential floors protect named guarantees, but the large non-essential-but-valuable middle ground has no equivalent protection against salience bias.
- Default rules and near-completion preferences route funds efficiently, but they still follow existing salient supply rather than correcting for under-allocated abstract goods.
- Funding is meant to express public value, but warm-glow and identifiable-victim effects mean expressed funding diverges from welfare value.

## Stress scenario

A commune runs the distributed model for several years with high participation and visibly successful projects: parks, courts, murals, and community centers all reach funding quickly. Meanwhile the sewer network, the flood-prevention channels, and the epidemiological surveillance program receive almost no citizen allocation and sit below the essential-floor definitions. Administrators can honestly report booming participation and completed projects, yet the commune's resilience to floods and outbreaks has quietly degraded because the aggregate portfolio never valued the abstract goods. When a shock arrives, the failure is blamed on the shock, not on the years of salience-biased underinvestment.

## Review checklist

- Are eligible project types classified by excludability, benefit visibility, and time-to-benefit?
- Is the aggregate allocation portfolio observable across salient versus non-salient categories?
- Do default and fallback rules expose any weighting toward under-allocated non-salient goods as a public choice?
- Are abstract benefits made legible through harm-averted or resilience metrics?
- Is the non-salient middle ground covered by any mechanism distinct from the A005 essential floor?
- Can citizens and auditors see which valuable categories are being systematically under-funded before a shock reveals it?

## Resolution output

Resolved in `docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md`: classified partially founded and bounded with observability under P007. Core v0 gained salience-bias observability above the protected floor — funding per category against declared planning-scope need weights, underfunded-need indicators, and non-salient-category visibility in discovery — while the non-assignable pool and essential floors (A005) remain the structural answer for catastrophic tails and default allocation rules channel inactive budget by planning priority rather than salience; any default weighting toward under-allocated non-salient categories is a disclosed, versioned protocol choice. Core v0 does not correct citizen preferences or impose a welfare function; it exposes the salience gradient. Above the floor that gradient is real, and correcting it beyond defaults and visibility is a political choice for planning-scope governance, not the platform.
