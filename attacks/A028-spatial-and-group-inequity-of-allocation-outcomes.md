# A028 - Spatial and Group Inequity of Allocation Outcomes

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION|docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md]] and propagated into the core corpus.

## Description

Even with strictly equal per-citizen allocation amounts and equal capacity to participate, allocation outcomes concentrate where social capital, organizational density, and proposal-writing capacity already concentrate: well-organized comunas out-propose, out-fund, and out-execute marginalized ones, so equal wallets produce unequal territorial and group results. Horizontal fiscal equity — equal treatment of equals across territories — is not guaranteed by equal individual inputs; it requires equalization mechanisms (per-territory floors, matching, compensatory routing) that the model does not contain, and participatory instruments have historically reproduced or amplified spatial inequality rather than corrected it. Unlike A009, which attacks unequal capacity to participate as an input, this attack targets the distributive pattern of outcomes and the absence of any outcome-equity observability or equalization layer, and it holds even if A009 were fully solved.

## Location in current project

- [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]], which addresses participation as an input and explicitly defers demographic and outcome measurement to Extension v1+.
- [[H025-civic-tax-wallet-and-distributed-allocation|knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md]], whose equal-per-citizen formula equalizes inputs but says nothing about where allocation lands.
- [[H033-system-defined-default-allocation-rule|knowledge/hypotheses/H033-system-defined-default-allocation-rule.md]], whose default routes toward roadmap, near-completion, and regional projects but not toward under-served territories by equity rule.
- [[21_CITIZEN_FUNDING_FLOW|docs/21_CITIZEN_FUNDING_FLOW.md]], where a project's ability to attract funding depends on its being proposed, modeled, and made execution-ready in the first place.
- [[H041-distributed-participation-capacity|knowledge/hypotheses/H041-distributed-participation-capacity.md]], which supports capacity but frames the fix as assistance, not outcome equalization.
- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]], whose protected-floor and planning-target machinery is the closest existing analogue to an equalization mechanism but is scoped to essential services, not territorial equity.

## Problem

Equal wallets equalize the right to allocate, not the supply of fundable projects. A project only exists to be funded if someone proposes it, models it to threshold, recruits a fiscalizer, and produces readiness evidence — all of which require organizational capacity, technical skill, and social capital that are unevenly distributed across territories and groups. Comunas with dense associational life, professional residents, and established clubs will generate a steady pipeline of well-formed proposals and mobilize their own equal wallets plus their neighbors' toward them. Marginalized comunas, with thinner organizational infrastructure, will generate fewer and weaker proposals and see their residents' equal wallets flow, via defaults and delegation, toward the better-supplied projects elsewhere. The result is that public resources concentrate where capacity concentrates, reproducing existing spatial and group hierarchy despite perfectly equal inputs.

Public-finance theory calls the missing property horizontal equity: equals across jurisdictions should receive equal treatment, and where local capacity differs, equalization transfers are required to achieve it. The model has equal inputs but no equalization: nothing routes resources toward under-served territories, no floor guarantees a minimum allocation per comuna or group, and no surface even measures the outcome distribution. The essential-service protection machinery (A005) shows the house is capable of floors and planning targets, but it is scoped to essential guarantees, not to territorial or group equity of ordinary allocation. Participatory-budgeting scholarship warns specifically that, absent deliberate design, participatory instruments track and amplify the geography of organization rather than flatten it.

Example:

```text
Two comunas each have 20,000 residents and identical $1,000/month wallets.
Las Condes-style comuna: dense clubs, professionals, 40 well-modeled sports projects.
Marginal comuna: few organizations, 3 thin proposals, no fiscalizer offers.
Residents of both, via defaults and delegation, fund the well-supplied projects.
Year-end: the organized comuna captures 8x the allocation per capita.
Inputs were equal; the outcome reproduced the existing gap.
```

## Recommended resolution path

- Make outcome distribution observable as a Core v0 signal: publish allocation per capita by territory and, where lawful and privacy-aware, by group, as a versioned public metric, so spatial and group concentration is visible rather than invisible.
- Distinguish input equity (equal wallets, participation support) from outcome equity (where allocation lands) in the model's own language, so equal inputs are not presented as evidence of fair outcomes.
- Consider proportionate equalization mechanisms consistent with the house philosophy: per-territory minimum-allocation floors, capacity-compensating matching for under-served comunas, or default-rule routing that gives weight to under-allocated territories, all versioned, public, and auditable.
- Reuse the A005 floor-and-lane pattern as a template for a territorial or group equity target, kept distinct from essential-service floors, and gated by explicit authorization rather than silent administrator choice.
- Invest supply-side: fund proposal-generation, modeling, and fiscalization-support projects preferentially in low-capacity territories, so the pipeline of fundable projects is more even, not only the wallets.
- Frame full equalization mechanics as Extension v1+ while requiring Core v0 to at least measure and disclose outcome inequity rather than treat equal inputs as sufficient.

## Theoretical base and citations

- Gianpaolo Baiocchi and Ernesto Ganuza, `Popular Democracy: The Paradox of Participation` (2017): participatory instruments can reproduce or deepen existing inequalities when the geography of organization is left uncorrected.
- Charles Tiebout, "A Pure Theory of Local Expenditures" (1956): decentralized allocation sorts resources by local characteristics, which without correction entrenches disparities across places.
- Richard Musgrave, `The Theory of Public Finance` (1959): public budgeting has a distribution function that equal formal access does not by itself discharge.
- Wallace Oates, `Fiscal Federalism` (1972): decentralized fiscal systems require equalization transfers to achieve horizontal equity across jurisdictions of unequal capacity.
- Robert Putnam, `Making Democracy Work: Civic Traditions in Modern Italy` (1993): differences in social-capital density produce durable differences in collective performance and resource capture.

## Social reasons

The comunas and groups with the least organizational capacity are usually those with the greatest need, so an allocation pattern that follows capacity sends public money away from where it is most needed. Residents of marginalized areas contribute equal wallets but see the resources flow to better-organized places, which can deepen alienation and the sense that participation is rigged against them. Because the disadvantage operates through the supply of proposals and the density of organizations rather than through any explicit rule, it is easy to miss and easy to deny — the inputs look fair, so the unfair outcome is attributed to the losers' own passivity rather than to structural capacity gaps.

## Conflicts of interest

- Well-organized comunas and their clubs benefit from an outcome pattern that rewards existing organizational density.
- Professionalized proposers and modelers concentrated in high-capacity areas capture more execution work.
- Authorities may prefer invisible outcome inequity because publishing per-territory allocation would expose distributive failure.
- Delegates and support organizations rooted in organized comunas gain represented weight that further channels resources homeward.
- Incumbent spatial elites benefit from framing equal inputs as sufficient fairness, foreclosing equalization.

## Inconsistencies to test

- The model equalizes wallets as a fairness guarantee, but fairness of inputs does not entail fairness of where allocation lands.
- A009's resolution treats capacity support as the remedy, but capacity support raises participation without guaranteeing equitable outcome distribution.
- A005 demonstrates the system can build floors and planning targets, but no equivalent floor protects territorial or group outcome equity.
- Discovery favors projects that are proposed, modeled, and ready, but readiness capacity is itself unequally distributed across territories.

## Stress scenario

A ministry runs distributed allocation nationwide for a full function with strictly equal per-citizen wallets and a well-funded participation-support program, so A009's capacity concerns are largely met. After a year, an independent researcher assembles allocation-by-comuna data the platform does not itself publish. The wealthiest quintile of comunas has captured several times the per-capita allocation of the poorest, driven almost entirely by differences in the number and quality of proposals generated and in the density of clubs and delegates mobilizing local wallets. The poorest comunas' residents largely allocated through defaults, whose funds flowed outward to the better-supplied projects. Every input was equal and every rule was neutral, yet the distributive outcome tracked the pre-existing map of organization, and the system offered no surface that would have made this visible, no floor that would have softened it, and no equalization that would have corrected it.

## Review checklist

- Does the system publish allocation per capita by territory, and where lawful by group, as a standing metric?
- Is input equity distinguished from outcome equity in citizen-facing and administrative language?
- Is there any floor, matching, or routing mechanism that channels resources toward under-allocated territories or groups?
- Is supply-side support (proposal, modeling, fiscalization help) directed preferentially to low-capacity territories?
- Can an observer detect spatial or group concentration of outcomes without assembling external data?
- Is any equalization mechanism versioned, publicly authorized, and auditable rather than a silent administrator setting?

## Resolution output

Resolved in [[96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION|docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md]] as a founded attack under P007: a bounded resolution with core observability. Core v0 now mandates per-territory and per-group allocation outcome observability — funding per capita by comuna, funded-project density against planning-scope need weights, and capture share by organized proposers — plus an explicit input-equity versus outcome-equity distinction, so equal wallets are not presented as evidence of fair outcomes. Equalization capability is documented as available through allocation-amount formulas (H025), planning-scope lanes and the reused A005 floor-and-lane pattern, the H033 default rule's territorial routing, and preferential supply-side support, all as versioned, publicly authorized country-implementation choices. Core v0 mandates outcome observability, not outcome equality; equalization remains a political choice. With equal wallets and no equalization configured, organized territories will out-capture marginalized ones by default — the architecture makes that measurable for the first time but does not prevent it, a declared limitation for the paper.
