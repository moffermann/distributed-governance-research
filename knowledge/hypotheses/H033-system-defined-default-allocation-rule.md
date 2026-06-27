# H033 — System-Defined Default Allocation Rule

## Hypothesis

If citizens do not actively allocate their civic budget or configure their own allocation rule, the system should apply a transparent, system-defined default allocation rule.

## Rationale

A distributed governance system cannot assume that every citizen will enter the platform, configure preferences, or actively participate.

Many people will remain inactive. If their assignable civic funds remain indefinitely unallocated, large amounts of public resources may become dormant. If citizens are forced to enter the platform, the system becomes coercive in a way that contradicts its usability goals.

Therefore, the system needs a default rule.

## Civic autopilot

The default rule functions as a civic autopilot.

A citizen can:

- allocate resources manually;
- delegate allocation to a person, institution, portfolio, or AI guide;
- configure a personal automatic rule;
- do nothing, in which case the system default applies.

## Monthly allocation

Rather than allocating once per year, the civic budget can be divided into monthly portions and assigned automatically each month.

This creates continuous funding flow and reduces the risk of large dormant balances.

## Example default rule

A possible default allocation rule might be:

```text
20% → strategic projects aligned with the roadmap
30% → projects close to funding completion
30% → regional or local projects
10% → fiscalization / mitigation / complaints
10% → new or exploratory projects
```

This is only an example. The actual default rule would be part of the protocol and subject to meta-governance.

## Requirements

The default rule must be:

- public;
- simple;
- auditable;
- modifiable by the citizen;
- modifiable through meta-governance;
- explainable in plain language;
- visible in each citizen's monthly allocation report.

## User override

The citizen can change the default rule at any time by configuring their own allocation preferences or delegations.

## Principle

> Inactivity should not freeze public resources indefinitely, and participation should not require constant attention.

## Status

Core financing and participation hypothesis. Extends H025.
