# Diagram - Open Project Parallel Closure v0

## Purpose

Show that execution readiness depends on the project's applicable threshold policy and multiple closure conditions, including both execution funding and independent control capacity.

Related references: H011, H019, H027, C002, C003, C013, C016, A001.

```mermaid
flowchart TD
    OP[Open Project]

    OP --> TP[Applicable Threshold Policy]
    OP --> PH[Project Phase Gates if applicable]
    OP --> F[Execution Funding Commitments]
    OP --> FS[Fiscalizer Offers]
    OP --> EP[Evidence Producer Commitments for fulfillment/control evidence]
    OP --> LP[Project Legitimacy Profile if required]
    OP --> AP[Affected-party map, notification, consultation, or observation evidence if required]
    OP --> CP[Control Subproject or Control Package]
    OP --> B[Beneficiary or Affected-Party Confirmation]
    OP --> D[Required Documents and Permits]
    OP --> AS[Financial Assurance Profile and guarantee materialization]
    OP --> C[Comments and Questions]
    OP --> Q[Complaints]
    OP --> MP[Disbursement Milestone Plan Validation]

    TP --> CC
    PH --> CC
    F --> CC{Closure Conditions Complete?}
    FS --> CC
    EP --> CC
    LP --> CC
    AP --> CC
    CP --> CC
    B --> CC
    D --> CC
    AS --> CC
    MP --> CC
    Q -->|no active systemic pause or blocking complaint| CC

    CC -->|No| OP
    CC -->|Yes| ER[Execution Ready for relevant phase]
```

## Rule

> A project becomes execution-ready only when its applicable threshold policy is visible and the required execution funding, phase gates, control capacity, fulfillment/control evidence capacity, legitimacy profile conditions where required, affected-party mapping or consultation evidence where required, documents, financial assurance, complaints, and disbursement-plan validation are coherent.
