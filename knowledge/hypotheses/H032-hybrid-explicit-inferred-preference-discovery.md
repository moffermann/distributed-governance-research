# H032 — Hybrid Explicit and Inferred Preference Discovery

## Status

Extension v1+ recommender-system hypothesis aligned with [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|C025]].

H032 remains compatible with the project, but advanced inferred personalization should not be treated as a Core v0 requirement. Core v0 should use simple visible ordering modes, Home customization, search, filters, and explainable urgent or recommended visibility before introducing deeper inferred ranking.

## Hypothesis

The project discovery layer should combine explicitly declared user preferences with inferred behavioral preferences, while remaining explainable, configurable, and auditable.

## Rationale

A large-scale project platform may contain thousands or millions of projects. Citizens need discovery mechanisms that help them find projects they value without handing decision-making power to a hidden algorithm.

Users should be able to state their interests directly, but the system can also learn from behavior.

## C025 alignment

C025 allows discovery to organize attention, but it prevents the recommendation layer from becoming a hidden allocator.

Advanced inferred discovery is allowed only if it remains:

- explainable: the user can see why a project appears;
- configurable: the user can adjust the signals that influence recommendations;
- correctable: inferred preferences can be edited or reset;
- controllable: the user can reduce or turn off personalization;
- auditable: material recommendation and visibility reasons are preserved for review;
- non-commercial: no paid promotion or paid ranking;
- non-sovereign: funding still requires explicit citizen action.

Example:

```text
Recommended project:
  Children's sports school in Maipu.

Allowed explanation:
  Shown because you follow sports projects,
  you funded two nearby youth programs,
  and this project needs a fiscalizer before closing.

Required controls:
  Change recommendation settings.
  Reset inferred preferences.
  Switch to Near me, Newest, Closing soon, or Search relevance.
  Search manually.

Rejected pattern:
  The project is recommended because the platform silently predicts
  higher funding probability, because it maximizes engagement,
  or because someone paid for priority.
```

The inferred layer may support discovery, but it must not replace simple list modes or make Home behave like an opaque feed.

## Explicit preferences

Users may declare preferences such as:

- areas of interest;
- geographic focus;
- roadmap branches followed;
- preferred project types;
- risk tolerance;
- preferred time horizon;
- categories to prioritize or deprioritize.

## Inferred preferences

The system may infer preferences from behavior such as:

- projects viewed;
- projects funded;
- projects saved;
- projects shared;
- categories explored;
- roadmap branches visited;
- fiscalizations supported;
- comments or engagement.

## User control

The user should be able to:

- inspect why a project is recommended;
- correct inferred preferences;
- disable or reduce personalization;
- switch ranking modes;
- explore outside their usual interests;
- search freely.

## Design constraints

The discovery layer should balance:

- relevance;
- diversity;
- serendipity;
- local relevance;
- roadmap relevance;
- strategic relevance;
- underexposed categories;
- projects close to funding completion.

It should not optimize only for clicks, engagement, popularity, or funding probability.

## Literature need

This layer should be informed by research on recommender systems, explainable recommendations, fairness, diversity, multi-stakeholder recommendation, and popularity bias.

The project should not invent this field from scratch.

## Principle

> The platform may learn what citizens value, but citizens must be able to understand, correct, and override what the platform thinks they value.

## Remaining design questions

Extension v1+ of H031 aligned with C025. Requires literature review before detailed design, especially on explainable recommendations, fairness, diversity, popularity bias, multi-stakeholder recommendation, user control, and auditability.
