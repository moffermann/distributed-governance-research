# H034 — Configurable Allocation Profiles

## Hypothesis

Citizens should be able to choose between several predefined allocation profiles, instead of being required to manually configure every parameter of their civic budget allocation rule.

## Rationale

A distributed allocation system must be easy to use. Many citizens will not want to design a custom rule from scratch, but they may still want their resources to follow a broad preference pattern.

Predefined profiles reduce cognitive burden while preserving citizen choice.

## Relationship with default allocation

If a citizen does nothing, the system applies the system-defined default allocation rule.

If the citizen wants more control, they can choose one of several allocation profiles.

If the citizen wants full control, they can customize their own rule.

## Possible profiles

Examples:

```text
Balanced profile:
  distributed across strategic, local, near-completion, and social projects.

Local profile:
  prioritizes regional and communal projects.

Strategic profile:
  prioritizes roadmap-relevant and high-impact projects.

Social profile:
  prioritizes poverty, care, education, health, and vulnerable groups.

Science / long-term profile:
  prioritizes research, prevention, infrastructure, and long-horizon projects.

Fiscalization profile:
  allocates a meaningful portion to oversight, complaints, mitigation, and accountability.

Custom profile:
  citizen defines percentages and criteria manually.
```

## Requirements

Profiles must be:

- simple to understand;
- transparent;
- editable;
- auditable;
- reversible;
- explainable in plain language;
- compatible with monthly allocation.

## Monthly report

The citizen should be able to see how their profile allocated resources each month:

```text
This month your profile assigned:
  30% to local projects
  25% to strategic projects
  20% to projects close to funding
  15% to social projects
  10% to fiscalization and mitigation
```

## Principle

> Participation should not require constant attention or expert configuration. Citizens should be able to choose simple allocation profiles that express broad priorities.

## Status

Extension of H033 — System-Defined Default Allocation Rule.
