# H031 — Transparent Project Discovery Layer

## Status

Core v0 discovery hypothesis aligned with [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|C025]].

H031 remains Core v0 only under C025 constraints: discovery must be explainable, user-configurable, non-commercial, auditable, and subordinate to explicit citizen action. It may organize attention, but it must not secretly allocate resources, sell visibility, or create hidden legitimacy through opaque ranking.

## Hypothesis

A distributed project platform requires a discovery layer to help citizens find relevant projects without turning the algorithm into a hidden decision-maker.

## Rationale

If a country-scale platform contains thousands or millions of projects, showing projects randomly or as an undifferentiated list would fragment attention and slow down financing.

Citizens need help discovering projects that match their interests, location, values, roadmap priorities, urgency, and likelihood of execution.

## Distinction

The discovery layer is not a decision layer.

```text
Decision layer: decides which projects receive resources.
Discovery layer: helps people find projects they may value.
```

The system should not allocate funds automatically based on algorithmic preference. It should only organize attention and information.

## C025 alignment

C025 makes this hypothesis operational for Core v0.

Core v0 discovery must include:

- user-customizable Home categories;
- project-list ordering modes that are visible to citizens;
- simple controls for switching ordering modes;
- visible reasons for urgent highlights and recommendations;
- no paid promotion;
- no opaque manual boosting;
- observability metrics for discovery influence;
- audit traces for material discovery decisions.

Advanced personalized ranking may exist later, but the Core v0 baseline should rely first on simple, visible, explainable modes.

Example:

```text
Project:
  School sports equipment delivery.

Valid urgent visibility:
  The project needs 1 fiscalizer and closes in 3 days.
  The urgent slot shows that reason.
  The citizen can ignore it, search manually, or change list ordering.

Invalid visibility:
  The project appears first because it paid for priority,
  or because an administrator manually boosted it without a visible protocol reason.
```

Home customization is personal navigation, not public project governance:

```text
The citizen hides "Culture" from Home.
Culture projects remain reachable through Explore, filters, and search.
```

## Possible discovery signals

- personal interests;
- previous support patterns;
- local relevance;
- roadmap branches followed by the user;
- projects close to funding completion;
- urgent projects;
- high social support;
- high executor reputation;
- underserved categories;
- regional or communal relevance;
- inferred strategic relevance inside the roadmap.

H031 is aligned with [[../../docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION|A027]]: because discovery signals such as projects close to funding completion, high social support, and "most supported" ordering turn cumulative advantage into social proof that later, weakly-informed citizens rationally imitate, Core v0 makes the amplification itself observable — funding-velocity-versus-evidence-maturity indicators, funding-source independence signals, and discovery-slot concentration — while funding-target closure (H035) truncates any single cascade. Herding is measured and bounded rather than prevented, since visible social proof is intrinsic to a transparent discovery surface, and allocation quality still depends on the default anchor rather than the funding cap.

## Strategic relevance

Some projects may be strategically important even if they are not immediately popular.

A project such as a bridge, energy system, logistics upgrade, or telecommunications asset may connect multiple branches of the roadmap:

- defense logistics;
- commerce;
- emergency response;
- regional integration;
- communications;
- access to health or education;
- resilience.

The platform may highlight such projects when they are structurally relevant within the roadmap.

## Declared commitments vs inferred impacts

The system should distinguish between:

```text
Declared commitments:
  goals the project formally accepts and must measure.

Inferred impacts:
  strategic benefits detected by the platform or AI based on the roadmap.
```

Declared commitments create responsibility, KPIs, and reputational consequences.

Inferred impacts can improve visibility and help citizens understand broader relevance, but they should not automatically create new obligations for the proponent.

## No automatic invitation to expand goals

The system should not push proponents to convert inferred impacts into formal secondary contributions.

A proponent may discover that the platform detected additional strategic relevance, but adding those impacts as formal commitments increases obligations, KPIs, evidence needs, and reputational risk. The decision to assume additional commitments should remain voluntary.

## User control

Users should be able to change how projects are ordered or discovered:

- for you;
- local;
- close to funding;
- urgent;
- most supported;
- new;
- by roadmap branch;
- by category;
- strategically relevant;
- exploratory / random.

## Transparency requirement

The platform should explain why a project is being shown.

Examples:

- this project is local to you;
- this project is close to funding completion;
- this project matches a roadmap branch you follow;
- this project has high support from people with similar interests;
- this project is urgent;
- this project appears strategically relevant because it connects multiple roadmap goals.

## No pay-to-play visibility in the core design

Paid visibility is intentionally excluded from the core architecture because it creates controversy, introduces attention capture risks, and does not add to the essence of the system.

Projects should compete through value, evidence, relevance, reputation, support, and financing — not through buying visibility.

## Principle

> The algorithm may coordinate attention and reveal strategic relevance, but it should not sell attention, decide value, or create obligations the project did not accept.

## Remaining design questions

Core v0 discovery and user-experience hypothesis aligned with C025. Needs further design around default ordering, urgent-slot rotation, recommendation explanations, discovery influence metrics, and audit traces, while keeping advanced inferred ranking in Extension v1+ unless it satisfies explainability, configurability, user ability to reduce or turn off personalization, and auditability constraints.
