# H038 — Monthly Use-It-or-Allocate-It Cycle

## Hypothesis

Assignable civic funds should be allocated monthly rather than accumulated indefinitely, in order to prevent projects from remaining stalled due to dormant balances.

## Rationale

If citizens can accumulate their assignable civic budget indefinitely, large amounts of public-purpose resources may remain inactive while projects wait for financing.

The system is intended to coordinate social value creation, not to create idle civic savings accounts.

## Rule

Each citizen's assignable civic budget is divided into monthly allocation cycles.

At the end of each cycle, funds are assigned according to one of the following:

- direct citizen allocation;
- citizen-selected allocation profile;
- custom allocation rule;
- delegation rule;
- system-defined default rule.

## No indefinite accumulation

Unassigned monthly funds should not simply accumulate forever.

If the citizen does not act, the system applies the configured or default allocation rule.

## Configurable fallback behavior

When a profile category has no available projects that satisfy its criteria during a monthly cycle, the fallback behavior should be configurable.

Example:

```text
Profile rule:
30% → local projects

Problem:
No local projects are currently active, eligible, or fundable.
```

The citizen should be able to choose a fallback rule, such as:

- reassign proportionally to the rest of the profile;
- apply the system default rule for that portion;
- redirect to strategic projects;
- redirect to projects close to funding completion;
- redirect to fiscalization or mitigation;
- hold only until the next monthly cycle, not indefinitely.

## Default fallback

If the citizen does not configure fallback behavior, the system should apply a simple default fallback defined by the protocol.

The fallback must be:

- public;
- simple;
- auditable;
- explainable;
- modifiable by the citizen.

## Reason

Monthly automatic allocation creates a continuous flow of resources into the project ecosystem and reduces financing bottlenecks.

## Relationship to project funding

Projects still close when they reach their funding target. Monthly allocation helps projects reach targets without waiting for annual or sporadic citizen participation.

## Principle

> Civic funds exist to be assigned to public-value projects, not to remain dormant indefinitely. If a chosen category has no eligible projects, the system should apply a transparent fallback rather than freeze resources.

## Status

Financing-cycle hypothesis. Extends H025, H033, and H034.
