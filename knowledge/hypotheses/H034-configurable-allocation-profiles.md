# H034 — Configurable Allocation Profiles

## Hypothesis

Citizens should be able to choose between several predefined allocation profiles, instead of being required to manually configure every parameter of their civic budget allocation rule.

## Rationale

A distributed allocation system must be easy to use. Many citizens will not want to design a custom rule from scratch, but they may still want their resources to follow a broad preference pattern.

Predefined profiles reduce cognitive burden while preserving citizen choice.

## Relationship with default allocation

If a citizen never enters the platform, the system applies the system-defined default allocation rule under H033.

When a citizen enters the platform for the first time, the citizen should select or acknowledge a base allocation profile.

The system-defined default profile may be selected as that base profile.

If the citizen wants more control, they can choose one of several allocation profiles.

If the citizen wants full control, they can customize their own rule.

Before a citizen can activate budget delegation, the citizen should already have a base allocation profile or fallback rule. While delegation is active, the delegate has priority. If delegation ends, the selected base profile resumes.

## Official profile shortlist

The user interface should show a short, simple list of official profiles first.

The purpose is to avoid overwhelming the user with too many choices.

Example shortlist:

```text
Balanced
Local
Strategic
Social
Science / Long-term
Fiscalization
Custom
```

## More profile options

The interface may include a “more profiles” or “see more options” section where users can explore additional official profiles.

These profiles should still be system-defined and governed by the protocol. They should not be editable by external institutions.

## No third-party official profiles in the core design

Third parties should not be able to create official allocation profiles that other users adopt as if they were system profiles.

This avoids creating a new influence layer where organizations compete to control citizens' automatic allocation rules.

Third parties may still publish recommendations, guides, or educational material outside the official profile system, but official profiles belong to the protocol.

## Custom profiles

Citizens may create personal custom profiles.

A custom profile may define:

- allocation percentages;
- preferred categories;
- geographic priorities;
- roadmap branches;
- risk tolerance;
- fiscalization allocation;
- local versus national balance;
- strategic versus immediate balance.

Custom profiles apply only to the citizen who created them unless a future protocol explicitly allows profile sharing under controlled rules.

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
- editable by the citizen when custom;
- auditable;
- reversible;
- explainable in plain language;
- compatible with monthly allocation;
- governed by the protocol when official.

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

> Participation should not require constant attention or expert configuration. Citizens should be able to accept the public system default, choose simple official allocation profiles, explore more options if desired, or create a custom profile. That selected base profile provides continuity when delegation is revoked, rejected, expired, or resigned.

## Status

Extension of H033 — System-Defined Default Allocation Rule.
