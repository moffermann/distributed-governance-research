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
- regional or communal relevance.

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
- exploratory / random.

## Transparency requirement

The platform should explain why a project is being shown.

Examples:

- this project is local to you;
- this project is close to funding completion;
- this project matches a roadmap branch you follow;
- this project has high support from people with similar interests;
- this project is urgent.

## No pay-to-play visibility in the core design

Paid visibility is intentionally excluded from the core architecture because it creates controversy, introduces attention capture risks, and does not add to the essence of the system.

Projects should compete through value, evidence, relevance, reputation, support, and financing — not through buying visibility.

## Principle

> The algorithm may coordinate attention, but it should not sell attention or decide value.

## Status

Discovery and user-experience hypothesis. Needs further design only after the core project architecture is stable.
