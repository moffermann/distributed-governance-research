# Diagram - Governance Resolution Sequence v0

## Purpose

Show how a material tutored governance decision, or the absence of a decision before timeout, becomes a public civic object without making the platform the sovereign decision-maker.

This diagram expands the earlier tutored-mode sketch by separating:

- the external authority decision;
- the system completeness check for required public fields;
- the automatic timeout record;
- citizen audit actions;
- configured clarification, correction, appeal, or override paths;
- audit events and aggregate observability effects.

Source baseline:

- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]]
- [[59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION|docs/59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION.md]]
- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]]
- [[35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP|docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md]]
- [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]]
- [[v0-operating-mode-transition-state|docs/diagrams/v0-operating-mode-transition-state.md]]
- [[v0-tutored-mode-governance-resolution|docs/diagrams/v0-tutored-mode-governance-resolution.md]]

Related sources: C007, C019, C020, C021, H009, H017, H058.

## Governance Resolution Publication Sequence

```mermaid
sequenceDiagram
    participant P as Proposer
    participant S as System
    participant A as External Authority
    participant C as Citizens
    participant T as Audit Trail
    participant O as Observability Baseline

    P->>S: Submit project or scope request under configured review
    S->>S: Read operating mode, planning scope, rule version, deadline, timeout policy
    S->>T: Record submission, scope, rule version, authority, review window
    S->>A: Open tutored review package

    alt Authority decides before deadline
        A->>S: Send decision package with result, rule, reason, and next path
        S->>S: Check minimum public fields
        alt Required fields complete
            S->>C: Publish Governance Resolution
            S->>T: Record decision, field check, rule version, and publication event
        else Required fields missing
            S->>A: Request correction before publication
            S->>T: Record incomplete decision package
        end
    else Deadline expires without decision
        S->>S: Apply predeclared timeout policy
        S->>C: Publish Review Timeout Resolution
        S->>T: Record timeout, policy, configured consequence, and affected scope
    end

    C->>S: Comment, support, object, follow, or request clarification where configured
    S->>T: Record civic response and visibility/privacy treatment

    alt Clarification or correction path configured
        S->>A: Route clarification, correction, appeal, or override trigger
        A->>S: Answer, correct, reverse, escalate, or confirm
        S->>C: Publish linked response or updated resolution status
        S->>T: Record linked response and effect
    else No configured reversal path
        S->>C: Keep civic audit visible without automatic reversal
    end

    S->>O: Aggregate decisions, reasons, review time, timeouts, policy effects, and civic responses
```

## Governance Resolution Object Lifecycle

```mermaid
stateDiagram-v2
    [*] --> DecisionExpected

    DecisionExpected --> DraftResolutionPackage: authority submits decision
    DecisionExpected --> TimeoutDetected: review deadline expires

    DraftResolutionPackage --> FieldCompletenessCheck: system receives package
    FieldCompletenessCheck --> NeedsCorrection: required public field missing
    NeedsCorrection --> DraftResolutionPackage: corrected package submitted
    FieldCompletenessCheck --> PublishedGovernanceResolution: required fields present

    TimeoutDetected --> TimeoutCompletenessCheck: system builds timeout record
    TimeoutCompletenessCheck --> PublishedTimeoutResolution: deadline, policy, and consequence recorded

    PublishedGovernanceResolution --> CitizenAuditOpen: civic object visible
    PublishedTimeoutResolution --> TimeoutPolicyEffectPending: predeclared timeout policy applied

    TimeoutPolicyEffectPending --> CitizenAuditOpen: visibility-only policy
    TimeoutPolicyEffectPending --> Escalated: escalation policy
    TimeoutPolicyEffectPending --> CommunityOverrideOpen: override policy configured
    TimeoutPolicyEffectPending --> AutomaticApprovalCheck: positive silence configured

    CommunityOverrideOpen --> CitizenAuditOpen: threshold result published
    AutomaticApprovalCheck --> CitizenAuditOpen: non-discretionary check result published
    Escalated --> CitizenAuditOpen: escalation reference published

    CitizenAuditOpen --> ClarificationRequested: configured clarification requested
    ClarificationRequested --> ClarificationAnswered: answer published
    ClarificationAnswered --> CitizenAuditOpen

    CitizenAuditOpen --> AppealOrCorrectionOpen: configured path triggered
    AppealOrCorrectionOpen --> CorrectionOrReversalIssued: decision corrected or reversed
    AppealOrCorrectionOpen --> Escalated: competent process required
    CorrectionOrReversalIssued --> CitizenAuditOpen: linked corrected record visible

    CitizenAuditOpen --> Closed: civic response or configured review window ends
    Closed --> AggregatedForObservability: baseline metrics retained
    AggregatedForObservability --> [*]
```

## Resolution Effect Routing

```mermaid
flowchart TD
    SUB[Project or scope request enters tutored review]
    MODE[Operating Mode, Planning Scope, Protocol Version, review window, timeout policy]
    AUTH[External Authority decision]
    TIMEOUT[No decision before declared deadline]
    CHECK[System checks minimum public fields]
    GR[Governance Resolution]
    RT[Review Timeout Resolution]
    PUB[Approved for publication or financing path]
    REF[Reformulation, reclassification, or additional information required]
    REJ[Rejected or outside scope with public reason]
    ESC[Escalated to configured authority or process]
    TP[Timeout policy effect]
    VIS[Visibility only]
    OVERRIDE[Community override path if configured]
    AUTO[Automatic approval check if configured]
    CITI[Citizen audit actions: comment, support, object, follow, clarification request]
    PATH[Configured correction, appeal, or override path]
    AUD[AuditEvent records actor, rule, object, transition, effect, and source]
    OBS[Administrative observability: approvals, rejections, reasons, review time, timeouts, policy effects]

    SUB --> MODE
    MODE --> AUTH
    MODE --> TIMEOUT

    AUTH --> CHECK
    CHECK --> GR
    TIMEOUT --> RT

    GR --> PUB
    GR --> REF
    GR --> REJ
    GR --> ESC

    RT --> TP
    TP --> VIS
    TP --> ESC
    TP --> OVERRIDE
    TP --> AUTO

    GR --> CITI
    RT --> CITI
    CITI --> AUD
    CITI -. no automatic reversal unless the active rule configures it .-> GR
    CITI -->|only if configured rule is triggered| PATH
    PATH --> GR
    PATH --> RT

    GR --> AUD
    RT --> AUD
    PUB --> AUD
    REF --> AUD
    REJ --> AUD
    ESC --> AUD
    VIS --> AUD
    OVERRIDE --> AUD
    AUTO --> AUD
    AUD --> OBS
```

## Minimum Field Rule

The `Governance Resolution` minimum field set is:

```text
resolution id
related project or request
public function
operating mode
decision type
decision result
responsible authority or authorized process
responsible official or role, where legally publishable
decision date
rule or eligibility criterion applied
plain-language reason
suggested next action
appeal or correction path, if configured
citizen-facing summary
audit trail reference
```

The `Review Timeout Resolution` minimum field set is:

```text
timeout resolution id
related project or request
public function
operating mode
submission date
review deadline
days elapsed
responsible authority or process
configured timeout policy
automatic consequence, if any
citizen-facing summary
audit trail reference
```

## Rules

- The authority or authorized process decides in tutored mode; the platform records, checks minimum publishable fields, publishes the civic object, and applies configured platform effects.
- Missing required public fields should create a correction request before publication rather than allowing opaque decisions to disappear into an internal record.
- A timeout consequence must be configured before submission. The administrator must not improvise the consequence after silence occurs.
- Citizen audit actions are civic visibility and accountability signals. They do not automatically reverse a decision unless the active operating-mode rule explicitly configures a correction, appeal, community override, or automatic-approval mechanism.
- Governance resolutions and timeout resolutions must reference the operating mode, planning scope, protocol or rule version, audit trail, and affected project or request.
- Governance resolutions and timeout resolutions should preserve A011 minimum moderation-audit fields, including reason category where practical, review time, timeout status, and known authority-linked operator context.
- The observability baseline aggregates basic patterns over time. Full moderation-abuse dashboards, automatic possible-abuse findings, cross-actor rejection-rate comparisons, and operator-concentration analytics remain Extension v1+ or country/administrator observability.
- Observability metrics do not convert into a hidden success score or automatic legal reversal.
- A public authority issuing or failing to issue a resolution remains an external actor under the C007 boundary. It does not become an internal proposer, executor, fiscalizer, delegate, or ordinary moderator in the same controlled scope.

## Macul Sports Example Trace

```text
Project:
Design and Construction of Multi-Courts in Macul.

Operating mode:
Sports function in tutored mode with a 30-day review window.

Authority decision:
Rejected because the proposed location duplicates an already approved public sports project.

Governance Resolution:
Published with the applied duplication rule, responsible authority/process, plain-language reason, suggested next path, and audit trail reference.

Citizen audit:
Citizens may comment, support, object, follow, or request clarification if that path is configured. These actions create visible accountability and aggregate observability, but they do not automatically overturn the rejection.

If no decision arrives in 30 days:
The system publishes a Review Timeout Resolution and applies the timeout policy that was public before submission, such as visibility only, escalation, community override trigger, or automatic approval after non-discretionary checks.
```

## Boundary With Other Diagrams

This diagram does not replace:

- the `OperatingMode` transition state diagram;
- the project creation and publication flow;
- the complaint review state diagram;
- the audit event schema diagram.

It defines the public decision record and civic audit path created by tutored decision or tutored silence.

## Rule

> Tutored authority may decide, but it may not decide invisibly. Tutored silence may persist as a political choice, but it must become a public timeout object with a predeclared consequence.
