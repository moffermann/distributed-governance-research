# D014 - Defense Against A014: Related-Party Projects and Hidden Control

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md`, refined under `knowledge/principles/P007-integrate-or-bound-rule.md` before core propagation. Propagated into the core corpus.

## Attack reference

- Attack file: `attacks/A014-related-party-projects-and-hidden-control.md`
- Attack title: `A014 - Related-Party Projects and Hidden Control`
- Roadmap source: Phase 3 priority objection, related-party projects.

## Attack summary

The attack argues that declared or hidden related parties can convert distributed funding into self-dealing. In Macul, one holding could propose, design, execute, supply, produce evidence, and influence fiscalization through formally separate but controlled affiliates.

## Objective evaluation

- Classification: founded.
- Why it is founded: hidden ownership, repeated relationships, control chains, and supplier relationships can defeat formal role separation.
- Why it is not fatal to the architecture: the model explicitly rejects automatic invalidation of all related parties and instead uses disclosure, severity classification, proportional safeguards, independent control, blocking, reformulation, exclusion, complaint review, responsibility events, and reputation effects.
- Difference of judgment: medium. Some systems may prefer categorical bans. Core v0 uses proportionality because legitimate related design-and-execution or community overlap can exist.
- Editorial distortion risk: high if the attack pushes the project to ban all related-party projects. That would wrongly classify efficient, declared, accountable design-and-build or community projects as illegitimate by default.

## Response

The defense is that declared proximity is not hidden capture.

The system should not prohibit a company from designing and executing a project merely because related firms are involved. It should require clear role traceability, ownership/control declaration, phase gates, independent design review where required, independent fiscalization, evidence quality review, and visible conflict severity.

For Macul, one holding designing and constructing the facility can be legitimate if declared, phase-gated, independently reviewed, and subject to stronger control. The same structure becomes a severe problem if relationships are hidden or if the holding also controls evidence and fiscalization.

## Project-document basis

- `knowledge/hypotheses/H028-related-party-conflict-of-interest.md:7` states that related-party links do not automatically make a project illegitimate, but must be declared, classified, exposed, and handled with proportional safeguards.
- `knowledge/hypotheses/H028-related-party-conflict-of-interest.md:53` through `knowledge/hypotheses/H028-related-party-conflict-of-interest.md:65` define proportional conflict categories from declared low conflict to hidden or misrepresented conflict.
- `knowledge/hypotheses/H028-related-party-conflict-of-interest.md:108` through `knowledge/hypotheses/H028-related-party-conflict-of-interest.md:110` gives the design-and-build holding example and requires phase planning and independent design-gate verification where policy requires it.
- `docs/09_PROJECT_OBJECT_MODEL.md:83` allows the same actor to design and execute only with traceability and without self-acceptance where independent review is required.
- `docs/09_PROJECT_OBJECT_MODEL.md:282` requires related-party and conflict declarations among proposers, modelers, executors, fiscalizers, evidence producers, operators, owners, revenue recipients, funders, and beneficiaries.
- `docs/09_PROJECT_OBJECT_MODEL.md:303` states that a Macul multi-court project may be legitimate even when a local club uses the facility, if public access and independent control are declared.
- `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md:169` states that hidden or misrepresented control relationships may trigger reformulation, exclusion, disbursement blocking, rejection, complaint review, responsibility review, or reputation effects.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:147` defines `RelatedPartyConflictReview` with severity classification, disclosure status, review status, and effect references.
- `knowledge/principles/P007-integrate-or-bound-rule.md:5` classifies the relationship graph as integration through existing objects — observability over declarations already required by the role model — with verification depth bounded to country implementation.

## Bibliographic basis

- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agency costs arise when control and incentives diverge.
- George Stigler, "The Theory of Economic Regulation" (1971): regulated actors can shape oversight systems.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): capture can operate through information and interest-group influence.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): transaction costs and opportunism shape governance structures.
- George Akerlof, "The Market for Lemons" (1970): hidden information can undermine trust and selection.

## Proposed improvements

Define a minimum relationship graph:

- ownership and control chain;
- board or management control;
- supplier and subcontractor relationships where material;
- repeated fiscalizer/evidence-producer relationships;
- delegate or funder relationships to project actors;
- authority-linked operator status;
- hidden-conflict escalation rule.

## Applies to

- proposer, designer, executor, fiscalizer, evidence producer, supplier, delegate, and operator roles;
- RelatedPartyConflictReview;
- Project Phase gates;
- FiscalizationAssignment;
- disbursement blockers;
- role-specific responsibility and reputation.

## Defense strength and residual risk

Defense strength: strong against declared conflicts, moderate against hidden control.

Residual risk: hidden beneficial ownership, informal dependency, future-work arrangements, and proxy entities may remain difficult to detect. The defense is to make concealment risky and insufficient, not to promise perfect discovery.

## Decision

The attack is founded. The integrated answer is the relationship graph and severity model over existing declarations — one graph shared with A018 collusion observability. The bounded remainder is declared openly: Core v0 does not verify beneficial ownership or integrate corporate registries; concealed off-platform control is made costly and reviewable, not impossible, and verification depth is a country-implementation decision.
