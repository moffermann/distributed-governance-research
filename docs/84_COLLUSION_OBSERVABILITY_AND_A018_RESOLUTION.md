# Collusion Observability and A018 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A018-collusion-among-project-roles|attacks/A018-collusion-among-project-roles.md]]
- Defense: [[D018-collusion-among-project-roles|defenses/D018-collusion-among-project-roles.md]]

## Resolution decision

A018 is founded and does not distort the project when it is treated as a systemic stress test rather than a demand for impossible perfect detection. The accepted resolution is collusion observability across role clusters and response paths for confirmed hidden coordination.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates observability through existing objects and bounds detection: the relationship-and-control graph is the same graph defined for A014 ([[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]]), timing and outcome patterns are administrative-observability review surfaces rather than an automated detection engine, and the response paths reuse VerifiedDiscovery and ResponsibilityEvent.

## Rule added to Core v0

Role separation is necessary but not sufficient. The system should expose relationship, repetition, timing, and outcome patterns across project roles and material suppliers.

Minimum observability:

- repeated actor-cluster visibility across projects;
- relationship and control graph across roles and suppliers;
- timing anomaly detection for evidence, fiscalizer reports, disbursement requests, and complaints;
- outcome-pattern review for unusually favorable or fast approvals;
- independent corroboration requirements for critical milestones;
- verified-discovery route for hidden coordination;
- cross-role responsibility event handling where collusion is confirmed.

## Macul example

If a proposer, designer, executor, evidence producer, and fiscalizer are formally separate but repeatedly coordinate reports and releases, the system should make the cluster visible, reopen affected effects where rules allow, create role-specific responsibility events, correct reputation inputs, and block unreleased funds where justified.

## Citizen simplicity

Citizens should see compact signals such as `related actor cluster visible`, `repeat pattern under review`, or `confirmed hidden coordination`. The full network evidence belongs in Layer 5.

## Transparency and accountability effect

The system does not promise to eliminate collusion. It makes collusion harder, riskier, less sufficient, more discoverable, and more reviewable than in opaque institutional monopoly.

## Scope boundary and limitation

Core v0 does not require an automated collusion-detection engine, network-analysis scoring, or investigative capability. Pattern surfaces feed human review, complaint, and verified-discovery paths; automated anomaly scoring remains Extension v1+, and prosecution of confirmed collusion remains external law.

Limitation statement: purely off-platform coordination among formally compliant actors can remain invisible to the system; the architecture's claim is comparative — collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly — not that collusion is eliminated.

## Residual risks

- Off-platform coordination may remain invisible.
- Small markets may naturally create repeated clusters.
- Pattern indicators can create false suspicion without careful review.

## Integration target

This resolution should inform RelatedPartyConflictReview, FiscalizationAssignment, EvidenceQualityReview, VerifiedDiscovery, ResponsibilityEvent, Disbursement, role-specific reputation, and Layer 5 audit trail.
