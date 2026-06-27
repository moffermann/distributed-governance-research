# H031 — Transparent Project Discovery Layer

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

The system should not push proponents to convert inferred impacts into formal secondary goals.

A proponent may discover that the platform detected additional strategic relevance, but adding those impacts as formal goals increases obligations, KPIs, and reputational risk. The decision to assume additional goals should remain voluntary.

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

## Status

Discovery and user-experience hypothesis. Needs further design only after the core project architecture is stable.
