# A041 - Partial Deployment of the Deterrence Stack: Individually Dispensable, Jointly Indispensable

## Status

Reviewed in paired review. Resolved in [[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]] (author verdict 2026-07-06, accepting D041's recommendation). Originated from the satellite ablation program (pre-registered design, engine v0.5, `distributed-governance-experiments`) — the first attack sourced from the program's own stress-testing rather than a reviewer. Paired defense: [[D041-partial-deterrence-stack-deployment|defenses/D041-partial-deterrence-stack-deployment.md]].

## Description

The architecture's deterrence stack — detection, retention, guarantee, reputational memory, future-selection loss — holds the diversion-deterrence inequality with large slack at the designed operating point. The satellite ablation measured what that slack does to perception: removing any *single* term costs almost nothing (ΔV ≤ 0.003 verified value per budget; the inequality still binds without it), while removing the *whole* stack collapses verified value by 60% and drops the architecture **below the status quo** (0.87×) with its selection quality intact. The threat this creates is not an attacker but an implementer: every real deployment negotiates, and every negotiated cut is individually defensible with the marginal number in hand. A sequence of defensible cuts crosses the inequality threshold invisibly, and the resulting deployment is not proportionally weaker — it is worse than not deploying, while presenting modern, participatory, and instrumented. The formal companion note always treated the terms as one inequality; the corpus nowhere warns that partial stacks can underperform the incumbent, nor gives a deployment any instrument for noticing that its accumulated concessions have crossed the line.

## Location in current project

- The formal companion note (Propositions 1–2) derives the deterrence inequality jointly but is silent on partial-instantiation risk at deployment time.
- [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]] ("Funding is conditional") presents the disbursement terms as the inequality's terms without a joint-integrity requirement.
- [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] prices the authority's operating burden per scope — the precedent for pre-launch declarations this attack's resolution would extend.
- [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]] raises the stakes: in the semi-open regime approval is automatic under protocol, so a mis-parameterized deterrence stack runs with no human backstop between configuration and disbursement.
- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]] classifies rule changes but does not flag deterrence-term reductions as a class requiring inequality re-verification.
- Satellite evidence: `distributed-governance-experiments/adversarial-abm/RUN_2026_07_06_ABLATION_RESULTS.md` (knock-outs K2–K4 vs the K10 joint cell).

## Problem

Deterrence terms are complements, not substitutes, and complements fail non-linearly: at the designed operating point each term's *marginal* contribution is near zero precisely because the others carry the inequality, so marginal measurement systematically undervalues every component of a redundant system. Real deployment pressure attacks exactly there. Guarantees are legally cumbersome for small contractors; inspection costs money the pilot budget lacks; permanent reputational records draw privacy objections; retention irritates cash-starved executors. Each concession will arrive separately, sponsored by a different stakeholder, supported by the true observation that "the simulation shows this term alone barely matters." No actor in the negotiation owns the joint constraint. The corpus's own honesty becomes the vector: its published ablation numbers are the ammunition for dismantling its stack one defensible cut at a time — and the resulting sub-threshold deployment, failing visibly under the architecture's own instrumentation, would discredit the design rather than the concessions.

Example:

```text
The Macul pilot negotiation, minute by minute: legal counsel waives
guarantee bonds for firms under a size threshold (cost per the
ablation: 0.002); the budget office keeps municipal inspection as-is
rather than funding the control lines (cost: 0.003); the data-privacy
review caps reputational memory at twelve months (cost: 0.001). Three
approvals, three defensible memos, total apparent cost below one
percent. The deterrence threshold has silently crossed under the
opportunist cost floor: diversion now pays. The pilot's own metering
publishes the leak it can no longer deter.
```

## Recommended resolution path

- Define a **deterrence-stack integrity check** as a deployment-configuration requirement on existing objects: before launch, and after any change to a deterrence term, the operating configuration must re-verify the incentive-compatibility inequality with the deployment's actual parameters (detection resourcing, retention, guarantee, memory horizon) against the declared opportunist cost support, and publish the margin as part of the scope's configuration record.
- Classify reductions of any deterrence term as **administrative rule changes of the material class** under docs/57: visible, versioned, justified, never retroactive — and accompanied by the recomputed margin.
- State the complementarity warning in the corpus and manuscript where the disbursement terms are introduced: partial stacks are not proportionally weaker; below the threshold they can underperform the status quo while looking instrumented.
- In the semi-open regime (docs/110), make the integrity check a precondition of the automatic-approval envelope: no envelope operates with a non-positive published margin.

## Theoretical base and citations

- Gary Becker, "Crime and Punishment: An Economic Approach" (1968): deterrence as probability times consequence — a product, not a sum; degrading factors multiplies.
- Paul Milgrom and John Roberts, "The Economics of Modern Manufacturing" (1990) and "Complementarities and Fit" (1995): systems of complements pay off jointly and fail non-linearly when single elements are removed; partial adoption of a complementary system can be worse than none.
- Bengt Holmström and Paul Milgrom, "The Firm as an Incentive System" (1994): incentive instruments work as a coherent system; piecewise adoption breaks the system logic.
- Ernesto Dal Bó and Frederico Finan, "Progress and Perspectives in the Study of Political Selection" (2018): institutional anti-corruption instruments interact; evaluations of instruments in isolation mislead deployment design.

## Social reasons

Citizens in a sub-threshold deployment get the worst of both worlds: the participation costs and the instrumentation spectacle of the new architecture with less verified delivery than the opaque system it replaced. And because the failure is measured by the architecture's own metering, the public lesson drawn will be "the distributed model failed", not "the concessions crossed a line the design had computed" — poisoning adoption everywhere else.

## Conflicts of interest

- Every negotiating stakeholder gains from the specific cut it sponsors and bears no responsibility for the joint threshold.
- The implementing authority gains a cheaper, smoother launch and inherits deniability: each cut was approved on documented, individually true numbers.
- Contractors gain directly from each removed term and can advocate cuts in the language of small-business relief.
- The research program itself is conflicted: publishing honest ablation numbers supplies the cut-by-cut justification material.

## Inconsistencies to test

- The corpus prices administrative capacity per scope (docs/103) but not deterrence integrity per scope — it declares who staffs the machine yet not whether the machine's incentive floor holds.
- docs/57 classifies rule changes by visibility but treats a retention reduction the same as a display tweak; the formal note's own inequality says one of these is load-bearing.
- The manuscript presents the deterrence terms additively in prose ("small advances, recoverability, externally held guarantees, retention") while its formal model multiplies them through a threshold — the prose invites the substitutes reading this attack exploits.

## Stress scenario

A national program adopts the architecture as a transfer condition (the A040 mandate archetype). Twenty municipalities deploy; each negotiates its own concessions within the program's loose template. Three years later the program evaluation finds bimodal results: municipalities above the threshold delivered 2× verified value; eight municipalities below it underperformed their own historical baselines. The evaluation cannot distinguish design failure from configuration failure because no deployment recorded its inequality margin, and the program is cancelled on the average.

## Review checklist

- Does every scope's configuration record publish its deterrence-inequality margin at launch and after every term change?
- Are deterrence-term reductions classified as material rule changes with recomputed margins, visible and non-retroactive?
- Does the corpus state the complementarity warning where disbursement terms are introduced?
- Is a positive published margin a precondition of any semi-open automatic-approval envelope?
- Can a program evaluator reconstruct, per deployment, whether the incentive floor held during the evaluated period?

## Resolution output

The accepted resolution ([[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]]) adopted the deterrence-stack integrity check as a P007 bounded integration on existing objects: every scope publishes its deterrence-inequality margin (computed from the configuration's recorded terms against the docs/105 opportunist cost support) at launch and on every term change; deterrence-term reductions are administrative rule changes of the material class under docs/57; a positive margin is a precondition of any semi-open automatic-approval envelope (docs/110); program evaluations stratify by margin compliance; and the complements-not-substitutes warning was propagated to docs/101 with the manuscript's version queued.
