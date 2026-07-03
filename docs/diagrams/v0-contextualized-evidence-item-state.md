# Diagram - Contextualized Evidence Item State v0

## Purpose

Show the formal lifecycle of a `ContextualizedEvidenceItem`.

This diagram separates evidence submission from formal evaluation. A contextualized evidence item may support a complaint, fulfillment review, control review, contradiction, administrative observability, or research use, but it does not create disbursement, closure, responsibility, reputation, or legal effects by itself.

Source baseline:

- [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]]
- [[evidence-context-taxonomy-v0|knowledge/concepts/evidence-context-taxonomy-v0.md]]
- [[10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL|docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md]]
- [[24_CITIZEN_EVIDENCE_PRODUCTION_FLOW|docs/24_CITIZEN_EVIDENCE_PRODUCTION_FLOW.md]]
- [[26_CITIZEN_COMPLAINT_FLOW|docs/26_CITIZEN_COMPLAINT_FLOW.md]]
- [[30_PROJECT_LIFECYCLE_AFTER_PUBLICATION_FLOW|docs/30_PROJECT_LIFECYCLE_AFTER_PUBLICATION_FLOW.md]]
- [[31_PROJECT_DISBURSEMENT_FLOW|docs/31_PROJECT_DISBURSEMENT_FLOW.md]]
- [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]]

Related sources: H008, H012, H015, H016, H018, H022, H023, H024, C002, C003, C004, C005, C013, C015, C016, C018, C024.

## Evidence Item Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Expected: evidence need, complaint, control task, or observability requirement
    [*] --> Submitted: unsolicited observation or attached material

    Expected --> Submitted: material uploaded or collected
    Submitted --> ContextCheck: evidence_context proposed
    Submitted --> IntakeRejected: missing required context or unusable material

    ContextCheck --> PrivacySafetyReview: context present
    ContextCheck --> ContextCorrectionRequired: context ambiguous or wrong
    ContextCorrectionRequired --> ContextCheck: corrected context submitted
    ContextCorrectionRequired --> IntakeRejected: not corrected

    PrivacySafetyReview --> PendingReview: public or restricted version accepted
    PrivacySafetyReview --> RestrictedVisibility: sensitive material retained with limited access
    PrivacySafetyReview --> IntakeRejected: unsafe or unlawful to retain
    RestrictedVisibility --> PendingReview: reviewer access logged

    PendingReview --> AcceptedForDeclaredContext: sufficient for proposed context and required standard
    PendingReview --> AcceptedAsContextualMaterial: useful but insufficient for claimed effect
    PendingReview --> InsufficientForClaimedEffect: does not satisfy needed proof, qualification, or method
    PendingReview --> NeedsCorroboration: plausible but not enough alone
    PendingReview --> Observed: recorded as observation only
    PendingReview --> Rejected: irrelevant, unreliable, duplicate, or unusable
    PendingReview --> Contradicted: materially challenged by other record

    Observed --> AcceptedAsContextualMaterial: relevant context identified
    Observed --> NeedsCorroboration: possible formal use needs support
    Observed --> ArchivedNoFormalEffect: retained for transparency
    AcceptedAsContextualMaterial --> NeedsCorroboration: reviewer requests stronger support
    InsufficientForClaimedEffect --> NeedsCorroboration: additional support may cure weakness
    NeedsCorroboration --> PendingReview: corroborating material submitted
    Contradicted --> PendingReview: contradiction reviewed
    Contradicted --> Rejected: contradiction confirmed
    Rejected --> [*]

    AcceptedForDeclaredContext --> LinkedToReport: used by fiscalizer, reviewer, or complaint review
    AcceptedAsContextualMaterial --> LinkedToReport: included with limitation
    NeedsCorroboration --> LinkedToReport: included with limitation
    Contradicted --> LinkedToReport: included as disputed material

    LinkedToReport --> UsedInEvaluationRecord: formal effect considered
    LinkedToReport --> UsedInVerifiedDiscovery: material hidden issue confirmed
    LinkedToReport --> ArchivedNoFormalEffect: visible history, no formal effect

    UsedInEvaluationRecord --> ArchivedWithEffect: disbursement, closure, correction, responsibility, or reputation path references evaluation
    UsedInVerifiedDiscovery --> ArchivedWithEffect: discovery, correction, complaint, or responsibility path references finding
    ArchivedNoFormalEffect --> [*]
    ArchivedWithEffect --> [*]
    IntakeRejected --> [*]
```

## Context and Effect Routing

```mermaid
flowchart TD
    CEI[ContextualizedEvidenceItem]
    EC{Required evidence_context}

    CEI --> EC
    EC --> CPE[Complaint Evidence]
    EC --> FFE[Fulfillment Evidence]
    EC --> COE[Control Evidence]
    EC --> CTE[Contradiction Evidence]
    EC --> AOD[Administrative Observability Data]
    EC --> RE[Research Evidence]

    CPE --> CR[Complaint review]
    CR --> CAR[Complaint admissibility/referral record]
    CAR --> SPR[Scoped systemic pause where admitted and blocking]

    FFE --> ER[EvaluationRecord]
    COE --> FR[FiscalizationReport]
    FR --> ER
    CTE --> ER

    ER --> DM[Disbursement, correction, closure, responsibility, or reputation effect]
    AOD --> OBS[Administrative observability readout]
    RE --> RSR[Research note or literature/theory use]

    CEI -. does not directly create .-> DM
    CEI -. does not directly create .-> SPR
```

## Context Rules

- A `ContextualizedEvidenceItem` requires `evidence_context` before it can be used for a formal effect.
- The same underlying source material may produce more than one contextualized evidence item or more than one reviewed context. Each formal use must be separately classified, reviewed, and auditable.
- `Complaint Evidence` supports, refutes, or contextualizes a complaint. It does not prove complaint merit or produce a project blocker by itself.
- `Fulfillment Evidence` is used to verify value floors, antivalue ceilings, metrics, milestones, phase gates, disbursement conditions, closure, or role-relevant accountability.
- Formal fulfillment/control evidence for hard KPIs must also satisfy the declared producer qualification and method/protocol standard before it can support a formal effect.
- `Control Evidence` is produced through fiscalization, technical review, evidence missions, admissibility review, or other control work. It may later support fulfillment review, complaint review, contradiction review, or verified discovery depending on accepted context.
- `Contradiction Evidence` challenges a material information claim, evidence item, report, or conclusion. It may trigger correction, corroboration, complaint review, extraordinary review, or verified discovery only after review.
- `Administrative Observability Data` audits the platform and transition process. It is not automatically complaint evidence or fulfillment evidence.
- `Research Evidence` belongs to the research project, not to the governance system's project-execution workflow.

## Formal Effect Rules

- Accepted evidence is not the same as formal evaluation. Formal effects require an `EvaluationRecord`, `FiscalizationReport`, `ComplaintAdmissibilityReferralRecord`, `SystemicPauseRecord`, `ProjectClosureAccountabilityRecord`, `ResponsibilityEvent`, or another scoped formal record.
- For hard technical KPIs, a contextualized evidence item is not accepted for the declared formal context unless producer qualification, method/protocol fit, instrument or tool basis, required metadata, and report limitations fit the relevant evidence need.
- Executor-submitted material is self-report unless corroborated by accepted non-executor evidence, fiscalizer review, beneficiary confirmation, technical record, or other valid source.
- Evidence accepted only as contextual material may remain visible and useful, but it cannot by itself release funds, close a milestone as fulfilled, prove a complaint, or update reputation.
- Contradicted or insufficient evidence is not proof of fraud by itself. It is also not proof of fulfillment.
- AI may flag missing metadata, privacy risk, duplicates, or contradictions, but AI does not decide truth, responsibility, fund release, legal effect, or reputation.

## Macul Example Trace

```text
Source material:
photo showing an incomplete multi-court surface.

Complaint Evidence context:
used to support a complaint alleging that the design/construction does not match the accepted baseline.

Fulfillment Evidence context:
reviewed against court dimensions, bathroom/accessibility commitments, public-access rules, construction milestone, or phase gate. A formal court-dimension KPI requires a qualified or otherwise protocol-idoneous producer, adequate measurement method, instrument basis, metadata, and report.

Control Evidence context:
if produced by an assigned field visit or fiscalization mission.

Possible result:
Accepted only as contextual material if the photo is dark, lacks location metadata, is not tied to a specific milestone, or cannot prove the hard KPI because the producer or method is not idoneous for that claimed effect.

Possible formal effect:
No construction disbursement release unless an EvaluationRecord or FiscalizationReport accepts sufficient fulfillment/control evidence for the relevant phase gate or milestone.
```

## Boundary With Other State Machines

This diagram does not replace the future diagrams for:

- complaint evidence and complaint review;
- funding commitment and disbursement;
- project evidential contract and fulfillment evidence needs;
- control subproject and fiscalization assignment.

Those diagrams should reference this evidence item lifecycle rather than recreating a generic `Evidence` node.

## Rule

> Evidence becomes operationally meaningful only when it is contextualized, reviewed for the claimed use, and linked to a scoped formal record. The platform must never let an undifferentiated evidence item create project, money, complaint, responsibility, or reputation effects directly.
