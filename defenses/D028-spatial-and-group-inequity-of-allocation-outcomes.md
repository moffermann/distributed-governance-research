# D028 - Defense Against A028: Spatial and Group Inequity of Allocation Outcomes

## Integration status

Second-round paired review completed. Accepted resolution: `docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A028-spatial-and-group-inequity-of-allocation-outcomes.md`
- Attack title: `A028 - Spatial and Group Inequity of Allocation Outcomes`
- Source: second-round attack queue, spatial and group inequity of allocation outcomes.

## Attack summary

The attack argues that even with strictly equal per-citizen allocation amounts and equal capacity, allocation outcomes concentrate where social capital, organizational density, and proposal-writing capacity already concentrate: well-organized comunas out-propose, out-fund, and out-execute marginalized ones, so equal wallets produce unequal territorial and group results. Horizontal fiscal equity is not guaranteed by equal inputs; it requires equalization mechanisms the model does not contain, and participatory instruments have historically reproduced spatial inequality rather than corrected it. Unlike A009, the attack targets the distributive pattern of outcomes and the absence of outcome-equity observability or any equalization layer, and it holds even if A009 were fully solved.

The example imagines two comunas of 20,000 residents each with identical $1,000 wallets: a dense, professionalized comuna with 40 well-modeled sports projects, and a marginal comuna with few organizations, three thin proposals, and no fiscalizer offers. Residents of both, via defaults and delegation, fund the well-supplied projects, and by year-end the organized comuna captures eight times the allocation per capita. Inputs were equal; the outcome reproduced the existing gap.

## Objective evaluation

- Classification: founded.
- Why it is founded: Core v0 mandates no equalization mechanism and no outcome-equity observability, so organized comunas out-capture marginalized ones by default, and equal inputs demonstrably do not produce equitable outcomes.
- Why it is not fatal to the architecture: equal per-citizen wallets are a large equity improvement over a baseline where allocation follows lobbying capacity with zero per-territory visibility, and for the first time per-territory and per-group outcomes become measurable from the audit trail, which is the precondition for any equalization policy.
- Difference of judgment: medium. How much equalization is desirable is a political choice, not an architecture defect; the architecture must make outcomes observable and equalization representable, not mandate a particular redistribution.
- Editorial distortion risk: medium. The attack would distort the project if it demanded outcome equality rather than outcome observability plus equalization capability. The project's position is measurable outcomes and configurable equalization, not enforced equal results.

## Response

The defense is that equal wallets are a real equity gain over the current baseline, that the audit trail makes territorial and group outcomes measurable for the first time, and that the machinery to equalize already exists in representable form even though Core v0 does not mandate its use.

Under P001, the comparison is not an ideal equalizing state but today's allocation, which follows lobbying capacity and political connection with no per-territory visibility at all. H025 gives every eligible citizen an equal civic allocation amount as its simplest formula, which removes the wealth-weighting of influence that the status quo embeds. H041 already acknowledges that open access can reproduce power asymmetries when only well-resourced actors can produce evidence and navigate the platform, so the attack's mechanism is recognized rather than denied. Crucially, the same formula layer is not limited to equal shares: H025 supports redistributive and hybrid formulas, and the default allocation rule can weight regional and local projects, so needs-weighted allocation and territorial priority are representable choices, not architectural impossibilities. The essential-service resolution demonstrates that the house can build floors and lanes: its protected-floor-plus-distributed-lane-plus-continuity-target pattern is a working template that a territorial or group equity target could reuse, and its stated purpose is to make both central political neglect and popularity-driven neglect visible.

For the two Macul comunas, the honest defense is that the architecture can see the eight-to-one gap the attack describes, because per-comuna allocation is reconstructable from the audit trail, and it can route against that gap through a redistributive formula, a territorial floor, or preferential supply-side funding of proposal, modeling, and fiscalization support in the marginal comuna. What it does not do in Core v0 is require any of that. So the gap can form, and today no standing metric would surface it without an external researcher assembling the data.

The concession is direct. Core v0 mandates no equalization mechanism and no outcome-equity observability, so organized comunas will out-capture marginalized ones by default, and equal inputs will not by themselves produce equitable outcomes. The corpus currently measures neither the outcome distribution nor the supply-side gap, and outcome-equity indicators are explicitly deferred to Extension v1+.

## Project-document basis

- [[H025-civic-tax-wallet-and-distributed-allocation#^r2e7340e8|knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md]] defines the equal-for-all-eligible-citizens formula in which each citizen receives the same civic allocation amount, the input-equity improvement over the status quo.
- [[H025-civic-tax-wallet-and-distributed-allocation#^rcf4f1501|knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md]] provides a redistributive or inverse formula that assigns larger amounts by vulnerability, access, or territorial priority.
- [[H025-civic-tax-wallet-and-distributed-allocation#Hybrid formula|knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md]] shows a hybrid formula weighting part of the allocation by territorial priority or social vulnerability, making equalization representable.
- [[H033-system-defined-default-allocation-rule#Example default rule|knowledge/hypotheses/H033-system-defined-default-allocation-rule.md]] routes a share of the default allocation toward regional or local projects, a hook for territorial routing.
- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION#Resolution decision|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] defines the protected-floor-plus-distributed-lane pattern that a territorial or group equity target could reuse.
- [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION#^rf821ddba|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] states the system should make both central political neglect and popularity-driven neglect visible.
- [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION#^rd61b0f81|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]] defers privacy-aware participation-equity indicators to Extension v1+ or implementation observability, confirming outcome equity is not yet a Core v0 layer.
- [[H041-distributed-participation-capacity#^re5b2547d|knowledge/hypotheses/H041-distributed-participation-capacity.md]] acknowledges that formal openness can reproduce existing power asymmetries when capacity is unevenly distributed.

## Bibliographic basis

- Gianpaolo Baiocchi and Ernesto Ganuza, `Popular Democracy: The Paradox of Participation` (2017): participatory instruments can reproduce inequality when the geography of organization is uncorrected, which the defense answers with outcome observability plus optional equalization.
- Charles Tiebout, "A Pure Theory of Local Expenditures" (1956): decentralized allocation sorts resources by local characteristics, motivating measurement of where allocation lands before any correction.
- Richard Musgrave, `The Theory of Public Finance` (1959): budgeting has a distribution function that equal formal access does not discharge, supporting representable redistributive formulas.
- Wallace Oates, `Fiscal Federalism` (1972): decentralized systems require equalization transfers across jurisdictions of unequal capacity, which the formula layer and floor pattern can express as country-implementation choices.
- Robert Putnam, `Making Democracy Work: Civic Traditions in Modern Italy` (1993): social-capital density produces durable differences in collective performance, which is why supply-side support should be directed to low-capacity territories.

## Proposed improvements

Add outcome-equity observability and representable equalization:

- allocation-per-capita metrics by territory and, where lawful and privacy-aware, by group, as versioned core administrative observability;
- an explicit input-equity versus outcome-equity distinction in the model's own language;
- reuse of the essential-service floor-and-lane pattern as a template for a publicly authorized territorial or group equity target, kept distinct from essential-service floors;
- supply-side support projects for proposal, modeling, and fiscalization preferentially directed to low-capacity territories.

## Applies to

- Civic tax wallet and allocation formula;
- system default allocation rule;
- essential-service protection pattern;
- administrative observability;
- participation-support projects.

## Defense strength and residual risk

Defense strength: strong that equal wallets improve on the lobbying-driven baseline, strong that per-territory outcomes are reconstructable from the audit trail, and strong that equalization is representable through existing formula, lane, and pool mechanisms.

Residual risk: Core v0 mandates neither equalization nor outcome observability, so the default outcome reproduces the pre-existing map of organization, and the gap remains invisible without external data assembly until standing metrics are added. Equal inputs do not produce equitable outcomes, and the choice of how much to equalize is political rather than architectural.

## Decision

The attack is founded. Phase 3 should add territorial and group outcome observability as core administrative observability, while equalization mechanisms remain country implementation or Extension v1+ modeled on but distinct from the essential-service floors.
