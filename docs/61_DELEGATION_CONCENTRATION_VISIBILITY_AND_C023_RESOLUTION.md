# Delegation Concentration Visibility and C023 Resolution v0

## Purpose

This document resolves contradiction C023 from the v0 contradiction checklist.

C023 was originally framed as the risk that the model makes delegation concentration visible but does not define a default hard cap.

The accepted resolution is that Core v0 should not impose a universal delegation cap. If citizens freely choose to concentrate delegated authority in a trusted actor, that may be a legitimate collective choice. The system's role is not to force participation to follow a predetermined political philosophy of dispersion.

The system's role is to make delegated concentration visible, auditable, revocable, and configurable where a specific pilot or protocol chooses stricter limits.

## Status

Accepted as the v0 resolution for C023.

## Core principle

> If citizens voluntarily concentrate delegation, that is their choice. The system must expose the concentration, not override citizen choice with a universal anti-concentration rule.

Distributed governance should increase freedom of civic allocation and representation. It should not replace institutional centralization with a hidden platform ideology that forbids voluntary coordination.

## The contradiction

Delegation helps citizens participate when they lack time, expertise, interest, digital capacity, or confidence to evaluate every project directly.

But delegation can also concentrate influence.

The contradiction is not:

```text
Any delegation concentration is illegitimate.
```

The contradiction is:

```text
Delegation concentration may become hidden power if citizens cannot see how much influence a delegate already holds.
```

## Accepted distinction

Core v0 should separate:

```text
Delegation concentration:
  allowed by default when voluntary.

Delegation opacity:
  not allowed.

Universal hard cap:
  not required by default.

Configurable cap:
  allowed if a pilot, public function, territory, action type, or protocol defines one in advance.
```

## Example: sports delegation

A citizen wants to delegate sports allocation to:

```text
Fundacion Vecinos por el Deporte
```

Before confirming the delegation, the system shows:

```text
This delegate currently represents:
2,430 citizens.

Delegated influence in this commune:
28% of delegated sports allocation.

Main scopes:
sports, local infrastructure, youth activities.

Recent delegated actions:
funded 14 sports projects;
followed 22 projects;
supported 3 fiscalization actions.
```

The citizen may still delegate.

The point is informed choice, not forced dispersion.

## Why no universal hard cap

A universal cap may punish legitimate trust and coordination.

Examples:

```text
A disability-rights organization receives many delegations because affected citizens trust its expertise.

A rural education foundation receives many delegations because isolated communities lack time or technical capacity.

A local sports association receives concentrated delegation because it has proven results and transparent reporting.
```

Blocking these delegations by default would reduce participation capacity and weaken citizen choice.

The model should not assume that concentration is always capture.

## Why concentration must be visible

Delegation concentration still creates power.

Therefore, citizens and observers should be able to see:

- number of active delegators;
- total delegated civic allocation;
- delegated action scopes;
- public functions or domains affected;
- territorial concentration;
- share of total delegated influence in a scope;
- share of total civic allocation influenced, where relevant;
- recent delegated actions;
- delegate reputation;
- conflicts of interest;
- related-party warnings;
- concentration trend over time.

## Required Core v0 warnings

Core v0 should include soft warnings when concentration is significant.

Example warning:

```text
High delegation concentration:
This delegate represents 28% of delegated sports allocation in this commune.
```

Another example:

```text
This delegate controls delegated action for 12,000 citizens in this public function.
You may still delegate, but this will increase their influence.
```

Warnings should inform. They should not shame the citizen, block the action, or imply that trust is illegitimate.

## Warning timing

Concentration should be visible at least in these moments:

1. Delegate profile view.
2. Before a citizen confirms a delegation request.
3. When a delegate acts with represented weight.
4. In delegated-action reports to delegators.
5. In administrative observability metrics.
6. In public audit views where appropriate.

## Delegated action weight

When a delegate acts within an accepted delegation scope, the represented weight should be visible.

Example:

```text
Delegate action:
Supported Project A.

Represented weight:
1 own action + 2,430 delegated citizens.

Scope:
Sports allocation in Commune X.
```

This makes clear whether an action is one actor's personal opinion or a delegated action representing many citizens.

## Configurable caps

Core v0 should allow configurable caps, but should not impose them globally.

Caps may be configured by:

- pilot protocol;
- public function;
- territory;
- action type;
- operating mode;
- protocol-change process;
- country implementation rule.

Example:

```text
Protocol-change votes:
No delegate may represent more than 5% of total voting weight in this process.
```

Example:

```text
Local sports allocation:
No cap.
Concentration warnings only.
```

These are different contexts and may legitimately use different rules.

## No hidden caps

If a cap exists, it must be visible before delegation.

Rejected pattern:

```text
A citizen delegates successfully, but later discovers that part of the delegation was silently ignored because a hidden cap applied.
```

Accepted pattern:

```text
This delegation is allowed, but the protocol caps represented voting weight at 5% for protocol-change votes.
Any excess delegation remains visible but does not increase represented vote weight beyond the cap in that specific action type.
```

The citizen should understand whether the delegate can fully exercise the delegated authority in the chosen scope.

## Cap effects must be explicit

If a cap exists, the protocol must define what happens beyond the cap.

Possible effects:

```text
reject additional delegation requests;
allow delegation but cap represented action weight;
place new delegations in waitlisted status;
require delegate rejection once cap is reached;
allow delegation for non-capped actions only;
trigger enhanced reporting or review.
```

These effects should not be improvised case by case.

## Delegate acceptance and self-limitation

Delegates may also reject delegation requests if they do not want to accumulate more influence.

This is already consistent with the delegation request-and-acceptance model.

Example:

```text
Delegate response:
Rejected.

Reason:
We have reached our internal capacity limit for education delegations.
```

This is voluntary self-limitation, not a system-wide cap.

## Relationship with citizen simplicity

The warning should be simple.

Ordinary citizen-facing example:

```text
High influence delegate.
Represents many citizens in this area.

[View details]
[Continue]
[Choose another delegate]
```

Advanced details can show percentages, territory, history, delegated actions, and trends.

The citizen should not need to understand the full concentration model to delegate.

## Relationship with C021

C021 requires basic concentration indicators in the administrative observability baseline.

C023 specifies the delegation part of that baseline:

```text
delegators per delegate
delegated budget per delegate
delegated action weight
scope concentration
territorial concentration
delegation revocation trends
delegate resignation trends
high-concentration warnings
configured caps, if any
```

## Relationship with role reputation

Delegate reputation should remain role-specific.

A good executor is not automatically a good delegate.

Delegation concentration should therefore be shown alongside delegate-specific history:

- reports delivered;
- alignment with declared criteria;
- complaints or objections;
- revocation rates;
- outcomes of delegated decisions;
- conflicts declared;
- responsiveness to delegators.

## C023 final resolution

C023 is resolved as follows:

```text
Core v0 does not impose a universal hard cap on delegation concentration. If citizens voluntarily concentrate delegated authority in a trusted actor, that is a legitimate civic choice. Core v0 must instead make delegation concentration visible before delegation, during delegated action, in delegate reports, and in administrative observability. Soft warnings are required when concentration is significant. Configurable caps may be defined by pilot protocol, public function, territory, action type, operating mode, or country implementation, but any cap must be public, explicit, and defined before it affects delegation.
```

Final rule:

> Delegation concentration is not forbidden, but it must never be hidden.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- contradiction checklist;
- citizen delegation flow;
- layered delegation architecture;
- transparent delegation concentration hypothesis;
- delegated action weight hypothesis;
- delegated action reporting hypothesis;
- core observability baseline;
- consolidated entity/object/state map;
- scope classification matrix;
- future implementable schema.

## Remaining risks

- Citizens may ignore concentration warnings.
- Popular delegates may become de facto political machines.
- Related delegates may split influence across multiple entities to evade caps.
- Caps may be configured in ways that are themselves political or exclusionary.
- Too many warnings may create fatigue.
- Delegates may report formally but not meaningfully.

## Mitigations

- show warnings before delegation, not only after;
- make represented weight visible when delegates act;
- keep immediate revocation available;
- require periodic delegated-action reports;
- show delegate-specific reputation and history;
- include delegation concentration in administrative observability;
- make any configured cap public before it affects delegation;
- allow related-party and conflict-of-interest declarations to reveal artificial fragmentation;
- avoid universal caps unless a specific protocol or pilot justifies them.

## Design rule

> The system should protect freedom of delegation by making concentration visible, not by assuming that voluntary concentration is automatically illegitimate.
