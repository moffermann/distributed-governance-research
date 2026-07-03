# D012 - Defense Against A012: Scope Creep and Excessive Complexity

## Integration status

Phase 3 paired review completed. Accepted resolution: [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]], now formalized as [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]] and refined before core propagation. Propagated into the core corpus.

## Attack reference

- Attack file: [[A012-scope-creep-and-excessive-complexity|attacks/A012-scope-creep-and-excessive-complexity.md]]
- Attack title: `A012 - Scope Creep and Excessive Complexity`
- Roadmap source: Phase 3 priority objection, scope creep and excessive complexity.

## Attack summary

The attack argues that the model may become too complex to implement, govern, or use. Each safeguard responds to a real failure mode, but together they may create a maze of value theses, evidence contracts, fiscalization, complaints, guarantees, delegation, operating modes, reputation, and audit events. A small school-supplies project could be burdened with controls designed for infrastructure.

## Objective evaluation

- Classification: founded and persistent.
- Why it is founded: every added safeguard has transaction costs and can create expert capture or administrative delay.
- Why it is not fatal to the architecture: Core v0 already uses proportional burden, Threshold Policies, citizen-facing layers, technical audit depth, and explicit Extension v1+ boundaries.
- Difference of judgment: medium. The exact minimum viable path depends on implementation strategy.
- Editorial distortion risk: high if the attack pushes the model either toward no controls or toward fully bureaucratic control. The project needs low-bureaucracy proportionality.

## Response

The defense is that complexity should live in the audit, expert, and high-risk layers, not in ordinary citizen participation or low-risk projects.

All projects may share the same conceptual architecture, but they should not share the same procedural burden. A small reversible workshop, a school-supplies purchase, an elder-care continuity service, and a multi-court construction project need different depth of documents, evidence, guarantees, fiscalization, and phase gates.

For a small school-supplies project, the model should support a low-risk fast path: clear supplier, budget line, delivery evidence, simple beneficiary or school confirmation, retained funds where needed, and role-specific accountability. It should not require a full infrastructure-style design phase.

## Project-document basis

- [[P006-layered-complexity-and-citizen-simplicity#^r98089f8d|knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md]] states that architecture may be complex but ordinary citizen participation must remain simple.
- [[P006-layered-complexity-and-citizen-simplicity#^r4954f825|knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md]] states the rule: simple to participate, deep to audit.
- [[34_CORE_V0_SCOPE_FREEZE#^r97a50a88|docs/34_CORE_V0_SCOPE_FREEZE.md]] requires each project to expose the applicable Threshold Policy.
- [[34_CORE_V0_SCOPE_FREEZE#^r686efce3|docs/34_CORE_V0_SCOPE_FREEZE.md]] ties procedural burden profiles to Threshold Policy and competent review.
- [[34_CORE_V0_SCOPE_FREEZE#^r686efce3|docs/34_CORE_V0_SCOPE_FREEZE.md]] prohibits proposers, designers, or executors from self-selecting lower burden when obligations decrease.
- [[H020-proportional-procedural-burden#^r0c61d1b6|knowledge/hypotheses/H020-proportional-procedural-burden.md]] states that all projects share conceptual structure, but not the same procedural burden.
- [[H020-proportional-procedural-burden#^r42cc39cf|knowledge/hypotheses/H020-proportional-procedural-burden.md]] makes burden proportional to size, risk, complexity, irreversibility, vulnerable beneficiaries, territory, public-function sensitivity, common-good impact, technical requirements, and potential antivalue.
- [[49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION#^r5a5ae7e7|docs/49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION.md]] requires every technical state to have a simple, actionable citizen-facing translation while deeper layers preserve full audit detail.
- [[64_FORMAL_ENTITY_INVENTORY_V0#13. Macul multi-court example|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]] states that a formal entity exists only if it carries responsibility, state, traceability, rule application, formal effect, or necessary citizen-facing explanation that cannot be safely derived from another record.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0#^re7800b2c|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] states that the schema draft is not yet a final database schema, API specification, class model, smart contract, legal implementation, or country-specific data model.
- [[P007-integrate-or-bound-rule#^r520eddb3|knowledge/principles/P007-integrate-or-bound-rule.md]] states that a founded attack produces a new Core v0 mechanism only when the failure mode would defeat a core-thesis claim and cannot be controlled through existing objects; otherwise it is bounded with a recorded limitation.

## Bibliographic basis

- Herbert Simon, `Administrative Behavior` (1947): bounded rationality limits what actors can process.
- Charles Perrow, `Normal Accidents` (1984): tightly coupled complex systems can fail unexpectedly.
- Michael Power, `The Audit Society` (1997): control systems can expand into ritualized bureaucracy.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): governance structures must account for transaction costs.
- Sherry Arnstein, "A Ladder of Citizen Participation" (1969): procedural participation can become symbolic if ordinary people cannot influence it.

## Proposed improvements

Add a complexity budget or procedural-burden test:

- every required object or step must state the failure mode it controls;
- low-risk projects must have an explicit minimum viable path;
- high-risk steps must be triggered by Threshold Policy, not universalized;
- citizen-facing screens must remain simple and action-oriented;
- new v0 objects must pass the "cannot be safely derived" test from the formal entity inventory;
- Extension v1+ ideas should not enter Core v0 by default.

## Applies to

- Core v0 scope decisions;
- ThresholdPolicy;
- Procedural Burden Profile;
- project creation;
- publication validation;
- citizen interface layers;
- future schema and API design.

## Defense strength and residual risk

Defense strength: moderate to strong. The project has a clear proportionality principle, but the actual minimum viable implementation path remains underdeveloped.

Residual risk: professional actors may benefit from complexity and convert the system into a compliance market. This requires deliberate product and protocol discipline.

## Decision

The attack is founded, and its resolution is the corpus's own editorial constitution: the complexity budget of `docs/78` is generalized as the P007 integrate-or-bound rule, under which later resolutions default to explicit boundaries and recorded limitations instead of new mechanisms. The declared limitation is that procedural burden remains unvalidated against real users or a working implementation.
