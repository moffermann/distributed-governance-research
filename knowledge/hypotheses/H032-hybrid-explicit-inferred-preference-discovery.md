# H032 — Hybrid Explicit and Inferred Preference Discovery

## Hypothesis

The project discovery layer should combine explicitly declared user preferences with inferred behavioral preferences, while remaining explainable, configurable, and auditable.

## Rationale

A large-scale project platform may contain thousands or millions of projects. Citizens need discovery mechanisms that help them find projects they value without handing decision-making power to a hidden algorithm.

Users should be able to state their interests directly, but the system can also learn from behavior.

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

## Status

Extension of H031. Requires literature review before detailed design.
