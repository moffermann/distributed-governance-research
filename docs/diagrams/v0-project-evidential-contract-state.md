# Diagram - Project Evidential Contract State v0

## Purpose

Show how a `Project Evidential Contract` and its `Fulfillment Evidence Need` records move from project design into producer offers, evidence production, review, and formal effects.

This diagram formalizes the chain:

```text
Value Thesis
-> Value Verification Package
-> Project Evidential Contract
-> Fulfillment Evidence Need
-> Evidence Producer Offer or commitment
-> Contextualized Evidence Item
-> Fiscalization / Evaluation Record
-> disbursement, closure, responsibility, reputation, correction, or reformulation effect
```

The contract defines evidence needs and source-role expectations. It does not preselect evidence producers and does not validate submitted evidence by itself.

Source baseline:

- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md`
- `knowledge/hypotheses/H022-project-evidential-contract.md`
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md`
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`
- `docs/24_CITIZEN_EVIDENCE_PRODUCTION_FLOW.md`
- `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md`
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md`
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`
- `docs/diagrams/v0-contextualized-evidence-item-state.md`

Related sources: H012, H015, H016, H018, H022, H023, C003, C010, C015, C016, C018.

## Project Evidential Contract State Machine

This state machine tracks the contract baseline. It is not the same as the state of a submitted evidence item.

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> CompletenessCheck: proposer or modeler submits value verification package
    CompletenessCheck --> NeedsCompletion: missing value floor, antivalue ceiling, metric, source role, timing, or consequence
    NeedsCompletion --> Draft: completion submitted

    CompletenessCheck --> UnderValidation: minimum structure complete
    UnderValidation --> RequiresAdjustment: weak metric, missing evidence need, capture risk, or unclear review effect
    RequiresAdjustment --> UnderValidation: adjusted contract submitted

    UnderValidation --> AcceptedBaseline: reviewer, protocol, threshold policy, or admissibility path accepts
    AcceptedBaseline --> PublishedWithProject: project becomes financeable
    PublishedWithProject --> FundingBaselineLocked: funding commitments begin
    FundingBaselineLocked --> ActiveForExecution: execution readiness uses this baseline

    ActiveForExecution --> ChangeProposed: proposer, executor, fiscalizer, reviewer, or protocol proposes change
    ChangeProposed --> MinorCorrection: wording, typo, or non-material clarification
    MinorCorrection --> ActiveForExecution: audit trail updated

    ChangeProposed --> OperationalVariation: method change without material value weakening
    OperationalVariation --> ActiveForExecution: accepted under active variation policy

    ChangeProposed --> MaterialReformulationRequired: value, metric, evidence burden, phase gate, or consequence materially changes
    MaterialReformulationRequired --> UnderValidation: new version submitted
    MaterialReformulationRequired --> Superseded: replacement version accepted or original cannot continue

    ActiveForExecution --> ClosureReview: final value and evidence review starts
    ClosureReview --> Closed: closure accountability record created

    Superseded --> Archived
    Closed --> Archived
    Archived --> [*]
```

## Fulfillment Evidence Need and Producer Offer State Machine

This state machine tracks a requirement and the producer offers or commitments that try to satisfy it.

```mermaid
stateDiagram-v2
    [*] --> NeedDraft
    NeedDraft --> NeedAccepted: tied to value floor, antivalue ceiling, metric, claim, milestone, phase, risk, or policy
    NeedAccepted --> OpenForOffers: visible to eligible evidence producers

    OpenForOffers --> ContractMatchedOffer: offer addresses accepted need
    OpenForOffers --> OutOfContractOffer: offer addresses useful but undeclared material

    OutOfContractOffer --> LowerPriorityEligible: reviewer or protocol accepts as equivalent, necessary, useful, or complementary
    OutOfContractOffer --> RejectedAsUnrelated: unrelated, duplicative, or outside control budget

    ContractMatchedOffer --> EligibilityConflictReview
    LowerPriorityEligible --> EligibilityConflictReview

    EligibilityConflictReview --> RejectedConflictOrDuplicate: conflict, capture risk, duplication, or weak method
    EligibilityConflictReview --> BudgetPending: offer admissible and funding needed
    EligibilityConflictReview --> AssignedOrAccepted: voluntary or already funded work accepted

    BudgetPending --> AssignedOrAccepted: control or evidence mission funding covered
    BudgetPending --> ClosedUnfunded: budget window expires or control budget exhausted

    AssignedOrAccepted --> ExpectedEvidence: producer commitment or mission active
    ExpectedEvidence --> EvidenceSubmitted: ContextualizedEvidenceItem linked
    ExpectedEvidence --> MissedOrLate: deadline missed

    EvidenceSubmitted --> QualityReviewRequired: relevance, metadata, authenticity, independence, completeness, and corroboration checked
    QualityReviewRequired --> Satisfied: sufficient for declared need
    QualityReviewRequired --> PartiallySatisfied: useful but incomplete
    QualityReviewRequired --> NeedsCorroboration: cannot support formal effect alone
    QualityReviewRequired --> Insufficient: weak, unclear, missing metadata, or irrelevant for claimed effect
    QualityReviewRequired --> Contradicted: credible contradictory material exists

    PartiallySatisfied --> ExpectedEvidence: remaining evidence still expected
    NeedsCorroboration --> ExpectedEvidence: corroborating evidence requested
    Insufficient --> ExpectedEvidence: corrected or replacement evidence requested
    Contradicted --> FiscalizationOrComplaintPath: formal review or complaint path may be triggered
    MissedOrLate --> ControlOrDisbursementEffect: deadline effect under contract

    Satisfied --> ClosedSatisfied
    FiscalizationOrComplaintPath --> ClosedWithEffect
    ControlOrDisbursementEffect --> ClosedWithEffect
    RejectedAsUnrelated --> ClosedRejected
    RejectedConflictOrDuplicate --> ClosedRejected
    ClosedUnfunded --> [*]
    ClosedRejected --> [*]
    ClosedSatisfied --> [*]
    ClosedWithEffect --> [*]
```

## Value-to-Effect Routing

This flowchart shows how the contract connects project promises to formal effects. It also marks the unresolved evidence-quality issue as a boundary, not as a solved scoring model.

```mermaid
flowchart TD
    VT[Value Thesis]
    VAP[Value-Antivalue Profile]
    M[Metric or qualitative commitment]
    VVP[Value Verification Package]
    PEC[Project Evidential Contract]
    FEN[Fulfillment Evidence Need]
    EO[Evidence Producer Offer or commitment]
    CP[Control Subproject or assignment where needed]
    CEI[Contextualized Evidence Item with fulfillment or control context]
    EQ[Evidence quality / sufficiency review]
    FR[Fiscalization Report]
    ER[EvaluationRecord]
    DIS[Disbursement decision]
    CL[Project Closure Accountability Record]
    RE[ResponsibilityEvent]
    RI[ReputationInput]
    COR[Correction, mitigation, or reformulation]
    OQ[Open question: evidence quality validation model]
    AUD[AuditEvent]

    VT --> VAP
    VAP --> M
    M --> VVP
    VVP --> PEC
    PEC --> FEN
    FEN --> EO
    EO --> CP
    CP --> CEI
    CEI --> EQ
    EQ --> FR
    FR --> ER
    ER --> DIS
    ER --> CL
    ER --> RE
    RE --> RI
    ER --> COR
    PEC --> AUD
    FEN --> AUD
    EO --> AUD
    ER --> AUD

    OQ -. unresolved scoring and authenticity model .-> EQ
    CEI -. publication is not validation .-> EQ
    EO -. accepted offer is not proof .-> CEI
```

## State Rules

- `Project Evidential Contract` is part of the financeable project baseline. A project should not receive execution funding without a proportional accepted contract.
- The contract is versioned. A material weakening of value metrics, evidence needs, source roles, phase gates, disbursement criteria, or review consequences requires reformulation or review rather than silent editing.
- `Value Verification Package` is the value-specific portion of the evidential contract. It should avoid isolated input metrics and connect each value floor or antivalue ceiling to evidence and review consequences.
- `Fulfillment Evidence Need` defines what must be evidenced. It does not name the final evidence producer as part of the project promise.
- Evidence producer offers that match the accepted contract receive higher eligibility priority.
- Out-of-contract fulfillment/control evidence may still be accepted when equivalent, necessary, materially useful, or complementary, but normally has lower priority and should not consume control budget ahead of accepted minimum needs.
- An accepted evidence producer offer, paid mission, or assignment is not proof of fulfillment. It only creates an expected evidence task.
- Submitted evidence becomes a `ContextualizedEvidenceItem` with fulfillment or control context. It still needs review before disbursement, closure, responsibility, reputation, or complaint effects.
- Evidence-quality validation remains an open Core v0 question. This diagram recognizes the required gate but does not finalize a scoring or authenticity model.

## Macul Example Trace

```text
Project:
Design and Construction of Multi-Courts in Macul

Value thesis:
Create usable public sports infrastructure for the community.

Value floors:
accepted court dimensions, public access, safe usable facility, bathroom or accessibility commitments where required.

Antivalue ceilings:
for example, maximum construction noise at declared times and points where the project accepts that commitment.

Project Evidential Contract:
design package, dimension verification, public-access rule verification, bathroom/accessibility review, construction milestone evidence, georeferenced site evidence, fiscalizer review, and final public-use evidence.

Fulfillment Evidence Need:
verify that construction delivered courts with accepted dimensions and public access.

Evidence producer offer:
field measurement visit, georeferenced photos, public-access observation, and short report linked to the construction milestone.

Priority:
high if the offer directly satisfies the accepted need.
lower if it only provides generic photos not tied to dimensions, access, bathrooms, milestone, date, or location.

Quality risk:
photos may be real but incomplete, taken from one angle, missing metadata, AI-altered, or irrelevant to the claimed dimension metric.
The fiscalizer cannot rely on them for release or closure until the quality and sufficiency review supports the intended effect.
```

## Boundary With Other State Machines

This diagram does not replace:

- the contextualized evidence item state diagram;
- the control subproject and fiscalization assignment diagram;
- the funding and disbursement state diagram;
- the complaint evidence and review state diagram.

It defines the ex ante contract and the evidence-need lifecycle that those other diagrams use.

## Rule

> The project must declare how fulfillment will be known before execution funding. That declaration creates evidence needs, not captive producers, and submitted evidence creates review material, not automatic truth or automatic formal effects.
