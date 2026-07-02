# Diagram - Project Creation and Publication v0

## Purpose

Show how an idea becomes a financeable project only after responsibility, value, budget, Project Evidential Contract, fiscalization, common-good impact, related-party conflict, material visibility, and disbursement plan requirements are coherent.

Related references: C001, C002, C008, C010, C013, C016, C020, C022, H018, H019, H020, H022, H027, H028, A001, A002, A004, A005.

```mermaid
flowchart TD
    A[Idea: public civic demand]
    A --> A1[Followers, comments, objections, associated proposals]
    A1 --> E{Executor accepts responsibility?}
    E -->|No| A2[Idea remains public but not financeable]
    E -->|Yes| P[Project Draft]

    P --> B[Problem and solution]
    B --> C[Value thesis and value icons]
    C --> VVP[Value Verification Package]
    VVP --> COV[A004 evidence coverage and metric-gaming check]
    COV --> ESP[A005 Essential Service Protection check where scope is protected]
    ESP --> D[Beneficiaries and affected parties]
    D --> CG[Common-good impact declaration where relevant]
    CG --> RPC[Related-party and conflict declarations]
    RPC --> F[Execution budget]
    F --> PH{Phases needed?}
    PH -->|No| EC[Project Evidential Contract]
    PH -->|Yes| PG[Project Phase plan: design gate, execution lane, fund treatment]
    PG --> EC
    EC --> MP[Disbursement Milestone Plan]
    MP --> EV[Fulfillment evidence needs and corroboration requirements]
    EV --> TP[Threshold Policy and Procedural Burden Profile]
    TP --> DOC[Required documents, phase gates, and admissibility review needs]
    DOC --> CTRL[Control package and fiscalization requirements]
    CTRL --> RA[Risks, antivalues, and mitigation]
    RA --> MIC[Material claims, approval source links, and unresolved warnings]
    MIC --> AS[Assisted validation by rules and AI]

    AS -->|missing documents| DOC
    AS -->|evidence coverage gap| COV
    AS -->|essential floor or lane unclear| ESP
    AS -->|hidden material warning| MIC
    AS -->|review required| AR[Authority or Control Subproject review]
    AR -->|accepted| CP
    AR -->|requires adjustment| P
    AS -->|critical issue| B
    AS -->|requires adjustment| P
    AS -->|valid| CP[Citizen preview]
    CP -->|warning missing from citizen surface| MIC
    CP --> OP[Publish as Open Project]
```

## Rule

> Ideas capture demand. Projects execute responsibility. AI may assist requirement discovery, but publication depends on protocol rules, an accepted evidential contract, A004 evidence coverage, A005 essential-service floor/lane clarity where applicable, required documents, threshold policy, procedural burden profile, material visibility of claims and approval conditions, and accountable project roles or reviewers where applicable.
