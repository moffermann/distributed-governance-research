# Diagram - Audit Trail Pattern v0

## Purpose

Show the common audit structure for material decisions, state changes, AI assistance, privacy actions, governance resolutions, and discovery visibility effects.

Related resolutions: C008, C019, C020, C024, C025.

```mermaid
flowchart LR
    A[Actor or external authority] --> B[Role or authority context]
    B --> C[Event]
    C --> D[Object]
    D --> E[State change]
    E --> F[Audit Event]

    F --> P[Protocol version and rule applied]
    F --> AI[Material AI assistance reference]
    F --> PR[Privacy or protected-identity trace]
    F --> GR[Governance or timeout resolution link]
    F --> DV[Discovery visibility reason when material]

    F --> CV[Citizen-facing view]
    F --> TV[Technical audit trail]
    TV --> EX[Export or review access with privacy controls]
```

## Rule

> Every important system decision should be expressible as: actor in role performs event on object, causing a state change recorded as an audit event with protocol, privacy, AI, governance, and discovery context where material.
