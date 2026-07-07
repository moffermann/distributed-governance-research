# D041 - Defense Against A041: Partial Deployment of the Deterrence Stack

## Integration status

Paired review completed. Accepted resolution: [[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]] (author verdict 2026-07-06), adopting this defense's package in full: the integrity margin on the scope configuration, docs/57 material classification of term reductions, the docs/101 complementarity warning, the docs/110 semi-open precondition, and margin-stratified program evaluation. Manuscript warning queued for the next version.

## Attack reference

- Attack file: [[A041-partial-deterrence-stack-deployment|attacks/A041-partial-deterrence-stack-deployment.md]]
- Attack title: `A041 - Partial Deployment of the Deterrence Stack: Individually Dispensable, Jointly Indispensable`
- Source: satellite ablation program (pre-registered), `distributed-governance-experiments`, 2026-07-06.

## Attack summary

The ablation showed each deterrence term individually near-costless to remove (the inequality holds with slack) and the joint stack indispensable (removal collapses the architecture below the status quo, 0.87×, with selection intact). Real deployments negotiate cuts one at a time, each defensible by its marginal number; the accumulated concessions cross the incentive threshold invisibly, and the resulting deployment underperforms the incumbent while looking instrumented. The corpus computes the joint inequality but gives deployments no instrument for noticing a crossed line.

## Objective evaluation

- Classification: founded.
- Why it is founded: the finding is the corpus's own formal logic made quantitative — the formal note's Propositions 1–2 define deterrence as a joint threshold, and the ablation demonstrates that marginal measurement at a slack interior point undervalues every complement; the deployment-negotiation dynamic the attack describes is the ordinary life of public-sector implementations, and no corpus object currently records or re-verifies the inequality margin per scope.
- Why it is not fatal to the architecture: nothing in the attack touches the architecture's mechanisms — it confirms them (the stack, deployed whole, is what delivers the headline). The gap is a missing deployment-configuration guardrail, expressible entirely through existing objects: the operating-mode configuration record, the docs/103 capacity-declaration precedent, and the docs/57 rule-change classes. This is a P007 bounded integration, not a new mechanism.
- Difference of judgment: low. The formal note and the ablation agree; the only judgment is where the guardrail lives.
- Editorial distortion risk: medium. The finding is quotable as "the architecture's own experiments show its safeguards barely matter individually" — the defense must fix the complements-not-substitutes reading in the prose that introduces the disbursement terms.

## Response

The attack is best read as the deployment-time completion of the formal note. Propositions 1–2 already state that deterrence is a threshold over a product of terms; what the corpus never said is that a *deployment* is an instantiation of that inequality with locally negotiated parameters, and that the negotiation has no actor who owns the joint constraint. The remedy follows the corpus's own pattern for exactly this class of problem: docs/103 made administrative capacity a published per-scope declaration because staffing was being assumed rather than verified; the deterrence margin deserves the same treatment, because the incentive floor is currently assumed rather than verified.

The guardrail is cheap and uses only existing machinery. The scope's operating configuration already records the financial terms (retention, guarantee via the Financial Assurance Profile), the control resourcing (docs/40, docs/52 control budgets), and the reputational memory policy. A **deterrence-stack integrity check** computes the inequality margin from those recorded values against the declared opportunist cost support (the audit-anchored band of docs/105), publishes it in the configuration record at launch, and recomputes it whenever any term changes — with term reductions classified as material administrative rule changes under docs/57 (visible, versioned, justified, non-retroactive). In the semi-open regime of docs/110, where approval is automatic and no human stands between configuration and disbursement, a positive published margin becomes a precondition of the envelope's operation.

The Macul negotiation then changes shape without forbidding any concession: counsel may still waive bonds for small contractors, the budget office may still limit inspection — but each memo must carry the recomputed margin, and the third concession arrives at a configuration screen that reads "margin: negative — this envelope no longer deters diversion; the configuration cannot be published as compliant." The negotiation still happens; it just happens against the visible joint constraint instead of against three disconnected marginal numbers.

## Project-document basis

- The formal companion note, Propositions 1–2 — the joint threshold this defense operationalizes at deployment time.
- [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] — the per-scope published-declaration pattern this extends.
- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]] — the rule-change classes that receive deterrence-term reductions as a material class.
- [[105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION|docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md]] — the audit-anchored opportunist cost support the margin is computed against.
- [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]] — the semi-open envelope whose automatic approval makes the check a precondition.
- Satellite evidence: `distributed-governance-experiments/adversarial-abm/RUN_2026_07_06_ABLATION_RESULTS.md`.

## Bibliographic basis

- Paul Milgrom and John Roberts, "Complementarities and Fit" (1995): complementary systems fail non-linearly under partial adoption — the attack's engine, and the defense's justification for a joint check.
- Bengt Holmström and Paul Milgrom, "The Firm as an Incentive System" (1994): incentive instruments cohere as a system; the defense refuses piecewise evaluation at the configuration layer.
- Gary Becker, "Crime and Punishment: An Economic Approach" (1968): deterrence as a product of probability and consequence; margins, not term counts, are the safety metric.
- Elinor Ostrom, `Governing the Commons` (1990): graduated sanctions work as an interlocking rule system, monitored by the community that depends on them — the published margin is that monitoring, mechanized.

## Proposed improvements

Adopt as a bounded integration through existing objects:

- add the deterrence-stack integrity margin to the scope operating-configuration record, computed at launch and on every term change;
- classify deterrence-term reductions as material administrative rule changes under docs/57, carrying the recomputed margin;
- state the complements-not-substitutes warning in docs/101 and the manuscript where the disbursement terms are introduced;
- make a positive published margin a precondition of any semi-open automatic-approval envelope (docs/110);
- record in the pilot guidance that program evaluations must stratify results by margin compliance.

## Applies to

- scope operating-mode configuration records;
- Financial Assurance Profile and disbursement rule configuration;
- control-budget resourcing declarations (docs/40, docs/52);
- reputational memory policy configuration;
- docs/57 rule-change classification;
- docs/110 semi-open envelope preconditions;
- pilot and program evaluation guidance.

## Defense strength and residual risk

Defense strength: strong. The attack's own evidence confirms the architecture and localizes the gap at configuration time; the remedy is a published number derived from values every scope already records, following an accepted corpus pattern (docs/103), with no new mechanism, no new entity, and no discretion added anywhere.

Residual risk: the margin is computed against a declared opportunist cost support that is itself an estimate — a deployment can hold a formally positive margin against a mis-declared support; the docs/105 evidence discipline and pilot recalibration are the standing mitigations. And the check protects the incentive floor only: a deployment can pass it and still fail on capacity (docs/103) or planning quality (docs/87) — the margin is one gauge, not a certification of success.

## Decision

Founded; recommend acceptance as a deployment-configuration resolution (candidate docs/111): the deterrence-stack integrity check as a bounded integration on existing objects, with the complementarity warning propagated to docs/101 and the manuscript at the next version.
