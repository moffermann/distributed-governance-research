# D018 - Defense Against A018: Collusion Among Project Roles

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md`, refined under `knowledge/principles/P007-integrate-or-bound-rule.md` before core propagation.

## Attack reference

- Attack file: `attacks/A018-collusion-among-project-roles.md`
- Attack title: `A018 - Collusion Among Project Roles`
- Roadmap source: Phase 3 priority objection, collusion among project roles.

## Attack summary

The attack argues that formally separate roles can coordinate to satisfy rules while defeating accountability. A proposer, designer, executor, evidence producer, fiscalizer, delegate, and supplier may coordinate informally to define weak evidence, approve weak milestones, suppress contradictions, and release funds.

## Objective evaluation

- Classification: founded and systemic.
- Why it is founded: collusion can happen without formal ownership, and no system can perfectly detect off-platform coordination.
- Why it is not fatal to the architecture: the model already assumes hidden collusion is possible and does not depend on perfect conflict detection. Its defense is layered: role separation, disclosure, independent assignment, evidence quality, corroboration, repeat-relationship visibility, fiscalizer reputation, complaint paths, verified discovery, and auditability.
- Difference of judgment: low. Collusion is a standard principal-agent and regulatory-capture risk.
- Editorial distortion risk: medium. The attack would distort the project if it demands perfect anti-collusion before any distributed system can operate. The comparative question is whether collusion becomes harder, riskier, more visible, less sufficient, and more reviewable than in opaque institutional monopoly.

## Response

The defense is that role separation is necessary but not sufficient; it must be combined with pattern observability and independent formal-effect gates.

The architecture should not assume that separate actors are independent. It should look at relationship declarations, repeated interactions, timing anomalies, outcome patterns, shared control, related suppliers, evidence/fiscalizer dependencies, and verified discoveries.

For Macul, if all formal records exist but later discovery shows the evidence producer and fiscalizer coordinated with the executor, the system should be able to reopen effects where rules allow, create responsibility events, correct reputation inputs, block unreleased funds, activate recovery/guarantee paths, and preserve a public audit record.

## Project-document basis

- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:570` states that the system should assume hidden collusion is possible.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:574` states that the architecture should not depend on perfect conflict detection.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:582` through `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:598` list safeguards: executor does not choose or directly pay, related-party status is declared, false evidence penalties exist, repeated relationships are visible, and supplemental control is capped.
- `knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md:190` states that hidden collusion is possible.
- `knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md:194` notes that the system cannot perfectly detect every friendship, off-platform payment, repeated relationship, holding-linked dependency, or informal pressure.
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md:40` states that one actor may hold multiple roles only with separate authority, duties, conflicts, records, effects, reputation treatment, and audit references.
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md:192` records the remaining risk that role accumulation may create practical conflicts even when disclosed.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:43` requires objects carrying state, authority, responsibility, funding, review, evidence, reputation, or formal effect to reference AuditEvent records.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:163` defines `VerifiedDiscovery` as able to create reward, reputation input, correction, complaint, responsibility, or disbursement effects after review.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:229` defines `ResponsibilityEvent` as reviewed and role-specific, with possible effects on reputation, eligibility, disbursement, correction, revocation, or legal referral.
- `knowledge/principles/P007-integrate-or-bound-rule.md:5` classifies this as integration of observability through existing objects — the A014 relationship graph, VerifiedDiscovery, and ResponsibilityEvent — with detection machinery bounded out of Core v0.

## Bibliographic basis

- George Stigler, "The Theory of Economic Regulation" (1971): capture often operates through aligned interests rather than explicit illegality.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): collusion and information control are central regulatory risks.
- Bengt Holmstrom, "Moral Hazard and Observability" (1979): hidden action requires incentive-compatible monitoring.
- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agency costs arise where agents control information and action.
- Robert Michels, `Political Parties` (1911): organized actors can consolidate power inside formal democratic structures.
- Michael Power, `The Audit Society` (1997): formal compliance can hide substantive failure.

## Proposed improvements

Define collusion observability and response paths:

- repeated actor-cluster visibility across projects;
- relationship and control graph across roles and suppliers;
- timing anomaly detection for evidence, fiscalizer reports, disbursement requests, and complaints;
- outcome-pattern review for unusually favorable or fast approvals;
- independent corroboration requirements for critical milestones;
- verified-discovery route for hidden coordination;
- cross-role responsibility event handling where collusion is confirmed.

## Applies to

- proposer, designer, executor, fiscalizer, evidence producer, delegate, supplier, and custodian relationships;
- RelatedPartyConflictReview;
- FiscalizationAssignment;
- EvidenceQualityReview;
- VerifiedDiscovery;
- ResponsibilityEvent;
- Disbursement;
- audit trail and role-specific reputation.

## Defense strength and residual risk

Defense strength: moderate. The model has the right anti-collusion posture but cannot eliminate informal coordination.

Residual risk: collusion can remain undetected, especially in small markets, local networks, holding structures, and repeated professional ecosystems. The project should be honest that it reduces and exposes collusion risk rather than abolishing it.

## Decision

The attack is founded and central. The integrated answer is collusion observability across role clusters — reusing the A014 relationship graph, corroboration requirements, VerifiedDiscovery, and ResponsibilityEvent — with pattern surfaces feeding human review rather than an automated detection engine. The declared limitation is comparative honesty: purely off-platform coordination among formally compliant actors can remain invisible; the claim is that collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly, not that it is eliminated.
