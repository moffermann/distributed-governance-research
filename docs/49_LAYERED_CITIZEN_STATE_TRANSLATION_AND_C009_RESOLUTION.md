# Layered Citizen State Translation and C009 Resolution v0

## Purpose

This document resolves contradiction C009 from the v0 contradiction checklist.

C009 was originally framed as the tension between the technical complexity required for project governance and the simplicity required for ordinary citizen use. The final resolution keeps full technical state internally while translating it into citizen-facing states, explanations, and actions through layered disclosure.

## Status

Accepted as the v0 resolution for C009.

## Core principle

> The complexity lives in the system; the clarity lives in the interface.

The system may need many technical states, but citizens should first see simple, meaningful, and actionable status language.

## The contradiction

The system requires detailed internal states for:

- ideas;
- projects;
- funding;
- execution readiness;
- milestones;
- disbursements;
- evidence;
- fiscalization;
- complaints;
- blocking status;
- reformulation;
- pause;
- revocation;
- closure;
- reputation effects.

But exposing all of that directly to citizens creates confusion and makes the system hard to use.

## Example of technical state

A technically correct state may look like:

```text
Project state: in_execution
Milestone 2: evidence_submitted
Fiscalizer review: pending
Complaint C-3: admitted_non_blocking
Funds: retained_for_milestone_2
```

That is useful internally, but it is not good citizen-facing language.

## Citizen translation

The citizen-facing version should say:

```text
The project is in execution.
The executor has submitted evidence for milestone 2.
The fiscalizer must review it before the next payment.
There is an active complaint, but it does not block progress.
```

## Resolution

Every technical state should have a citizen translation.

The translation should answer three questions:

```text
What is happening?
Why does it matter?
What can I do?
```

## State translation object

Recommended v0 structure:

```text
Technical state
Citizen label
Short explanation
Why it matters
Available citizen actions
Severity / attention level
Link to deeper detail
```

Example:

```text
Technical state:
funds_retained_pending_milestone_review

Citizen label:
Payment retained until milestone review.

Short explanation:
The executor will not receive this payment until the evidence is reviewed.

Why it matters:
This protects funders before money is released.

Citizen actions:
View evidence, follow review, file complaint.
```

## Citizen-facing aggregate states

The compact UI should use aggregate states such as:

```text
Needs funding
Almost ready
Ready for execution
In execution
Needs review
Has alert
Paused
Completed
Failed / revoked
```

These are not replacements for the technical states. They are summaries.

## Layered disclosure

The model should keep the existing layered citizen interface structure:

```text
Layer 0: Home / discovery
Layer 1: Compact card
Layer 2: Project dashboard
Layer 3: Signal detail
Layer 4: Full project sheet
Layer 5: Technical audit trail
```

Each layer reveals more complexity.

## Layer 1: compact card

The compact card should avoid jargon.

It should show:

- simple status;
- value icons;
- funding progress;
- main alert if any;
- next relevant action.

It should not show raw protocol state names.

## Layer 2: project dashboard

The dashboard may show more explanation:

- current phase;
- milestone status;
- evidence status;
- fiscalization status;
- active complaints;
- financial status in citizen language.

## Layer 5: technical audit trail

The technical audit trail should preserve full internal complexity for advanced review.

It may show:

- raw state transitions;
- actor actions;
- evidence references;
- financial orders;
- complaint states;
- fiscalizer decisions;
- protocol rules applied;
- timestamps;
- audit log.

## Rule for terminology

Citizen-facing language should avoid terms like:

- execution-ready;
- retained disbursement;
- admitted non-blocking complaint;
- pending verification state;
- financial order execution state;
- protocol block scope.

Unless the user opens the technical detail.

## Rule for actions

A citizen-facing state should not merely describe. It should expose possible actions.

Examples:

```text
Needs funding → finance project / follow project
In execution → view progress / view evidence
Needs review → follow review / view submitted evidence
Has alert → read alert / view complaint
Paused → understand reason / follow resolution
Completed → view closure report / evaluate value
Failed → view cause / see recovered funds / see reputation effect
```

## Transparency rule

Simplicity must not become opacity.

The citizen should always be able to drill down into deeper layers to see:

- why the state exists;
- what rule created it;
- who acted;
- what evidence was used;
- what funds are affected;
- what complaints or blocks exist.

## C009 final resolution

C009 is resolved as follows:

```text
Keep full technical state internally, but translate it into citizen-facing aggregate states with explanations and actions.
```

Final rule:

> Every technical state must have a citizen-facing translation. The first view should be simple and actionable, while deeper layers preserve full transparency and audit detail.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- layered citizen interface model;
- citizen compact project list layer;
- project dashboard layer;
- signal detail layer;
- full project sheet layer;
- technical audit trail layer;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Aggregated statuses may hide important nuance.
- Different technical states may collapse into the same citizen label.
- Citizens may misunderstand simplified wording.
- Too many alerts may still create confusion.
- Translating every state may require careful design.

## Mitigations

- make every citizen state expandable;
- include a short explanation and available actions;
- preserve full technical audit trail;
- use severity levels;
- avoid raw jargon in compact views;
- test labels with non-technical users.

## Design rule

> Do not remove complexity from the system. Hide it behind clear citizen language, then let citizens drill down when they want proof.
