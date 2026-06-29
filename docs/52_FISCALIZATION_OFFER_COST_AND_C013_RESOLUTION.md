# Fiscalization Offer Cost and C013 Resolution v0

## Purpose

This document resolves contradiction C013 from the v0 contradiction checklist.

C013 was originally framed as the tension between fiscalization cost being part of project control cost, while fiscalizer offers may need to exist before the project is fully funded. The final v0 resolution is that fiscalizer offer preparation must be lightweight and mostly unpaid before funding closure, while the accepted fiscalization work is paid only through the project's separated control budget after the project reaches execution-ready conditions.

## Status

Accepted as the v0 resolution for C013.

## Core principle

> The system may ask fiscalizers for a lightweight accountable offer before funding closure, but it must not create a paid pre-project bureaucracy before there is a funded project to control.

Fiscalization is a control cost, but not every offer to fiscalize is itself a payable control activity.

## Description

The architecture already separates execution from control.

A project may include:

```text
execution budget
responsible fiscalization budget
evidence mission budget
contingency / extraordinary review budget
guarantees or retentions
```

The executor should not directly control the fiscalization budget or appoint the reviewer responsible for validating its own performance.

At the same time, a fiscalizer may need to submit an offer before the project becomes fully financeable or execution-ready.

That offer may include:

- methodology;
- required budget;
- travel and logistics needs;
- deliverables;
- timeline;
- qualifications;
- relationship declarations;
- conflict-of-interest declarations.

This creates the C013 question:

```text
Who pays for fiscalizer effort before the project is funded?
```

## Explanation

There are two different activities that must not be confused:

```text
1. Fiscalization offer preparation
2. Accepted fiscalization work
```

Offer preparation is the act of declaring availability, methodology, estimated cost, qualifications, and conflicts.

Accepted fiscalization work is the actual responsibility-bearing review work performed after the fiscalizer is selected and the project enters execution conditions.

The first should be lightweight in v0.

The second should be paid from the project's separated control budget when the project is funded and execution-ready.

## Why this is a contradiction

If fiscalization is mandatory control work, it must be funded.

But if every fiscalization offer is paid before the project is funded, the system creates a new funding problem before the project itself exists as a funded execution object.

That would create several contradictions:

```text
Fiscalization is supposed to control funded execution,
but paid pre-assessment would require money before funded execution exists.
```

```text
The model prevents uncontrolled money movement,
but paid offer preparation could create payments for projects that never execute.
```

```text
The model protects citizen simplicity,
but paid pre-assessment would create another mini-procurement layer before the citizen can even fund the project.
```

```text
The model resists gatekeeping,
but paid expert pre-assessment could become a hidden barrier to publication or funding.
```

The contradiction is therefore not that fiscalization costs money.

The contradiction is when that cost becomes payable.

## Example

A project proposes to repair a rural bridge.

The project needs technical fiscalization because the work is physical, remote, and safety-relevant.

Several fiscalizers may offer:

```text
Fiscalizer A:
  Methodology: two site visits + photo evidence + technical report
  Required budget: $1,200,000
  Travel: required
  Conflict: none declared

Fiscalizer B:
  Methodology: remote document review only
  Required budget: $250,000
  Travel: none
  Conflict: former subcontractor of executor

Fiscalizer C:
  Methodology: one site visit + beneficiary confirmation + final report
  Required budget: $850,000
  Travel: required
  Conflict: none declared
```

In v0, these offers can exist before the project is fully funded.

But the system should not pay all three fiscalizers just for submitting those offers.

Instead:

```text
1. The offers are lightweight and standardized.
2. The system filters admissible offers.
3. The selected fiscalizer's accepted cost becomes part of the project control budget.
4. Payment occurs only when the project reaches the required funded/execution-ready state and the fiscalizer accepts the responsibility role.
```

## Proposed resolution

C013 is resolved by separating fiscalizer participation into three tiers.

## Tier 1 — Lightweight offer

This is the default v0 mechanism.

A lightweight offer is unpaid and standardized.

It should require enough information to evaluate admissibility, but not enough work to become a professional unpaid study.

Minimum fields:

```text
actor identity
role requested
scope of fiscalization
methodology summary
estimated fiscalization budget
travel/logistics estimate
availability
qualification summary
relationship/conflict declaration
acceptance of role responsibility if selected
```

The goal is to keep participation cheap enough for good fiscalizers while structured enough to prevent low-quality spam.

## Tier 2 — Accepted fiscalization plan

Once a fiscalizer is selected or conditionally selected, the offer becomes an accepted fiscalization plan.

This accepted plan is part of the project's separated control budget.

It may include:

```text
final deliverables
review calendar
evidence requirements
reporting obligations
payment schedule
replacement condition
reputation consequences
```

Payment belongs here, not at the first offer stage.

## Tier 3 — Exceptional paid pre-assessment

Paid pre-assessment should not be required in Core v0.

It may be allowed only as an explicit exception for projects that are:

- high-risk;
- technically complex;
- remote or logistically uncertain;
- materially unsafe if mis-scoped;
- above a protocol-defined amount threshold;
- dependent on feasibility questions that cannot be answered by a lightweight offer.

Even then, it must be governed as a separate protocol-visible object, not hidden inside fiscalizer selection.

Possible object:

```text
Pre-assessment mission
```

A pre-assessment mission should include:

```text
reason
scope
maximum payable amount
selection rule
deliverable
publication rule
conflict declaration
funding source
audit event
```

## v0 rule

Recommended v0 rule:

```text
Fiscalizer offers are unpaid lightweight role offers by default.
The selected fiscalizer's accepted fiscalization cost becomes part of the project's separated control budget.
Paid pre-assessment is not a default Core v0 requirement and may only exist as an exceptional protocol-defined mission for high-risk or technically complex projects.
```

## Funding treatment

The project funding target should include the accepted control budget.

Example:

```text
Execution budget:              $20,000,000
Responsible fiscalization:      $1,200,000
Evidence missions:                $400,000
Extraordinary review reserve:      $300,000
Total funding target:          $21,900,000
```

The citizen should not see the fiscalization cost as an unrelated fee.

They should see it as part of the cost of making the project auditable.

## Relationship with execution-ready state

A project should not become execution-ready unless required fiscalization is confirmed.

Therefore, the sequence should be:

```text
1. Project published for funding with estimated or accepted control cost.
2. Fiscalization offer window runs where required.
3. Eligible fiscalizer is selected according to rule.
4. Fiscalization cost is included in the total funding target.
5. Funding target is reached.
6. Fiscalizer accepts responsibility role.
7. Project becomes execution-ready.
```

If the fiscalization cost changes materially after funding, the project may require:

```text
reformulation
additional funding window
scope reduction
replacement fiscalizer
return/reassignment of committed funds according to funding rules
```

## Anti-spam protections

Because lightweight offers are unpaid, the system must prevent offer flooding.

Minimum safeguards:

- verified identity;
- eligibility threshold by project type;
- standardized form;
- required conflict declaration;
- maximum active offers per actor unless reputation permits more;
- offer withdrawal/expiry rules;
- public offer status;
- negative reputation for repeated bad-faith or misleading offers.

## Anti-capture protections

The executor must not solve C013 by privately paying or selecting its preferred fiscalizer.

Rejected rule:

```text
Executor pays a fiscalizer before funding and then the system accepts that fiscalizer.
```

Accepted rule:

```text
The protocol defines fiscalizer admissibility and selection.
The control budget is separated from the execution budget.
The executor does not privately appoint the actor that validates its own performance.
```

## Citizen-facing explanation

The interface should keep this simple.

Example:

```text
This project includes a control budget.

That budget pays the accepted fiscalizer and evidence work needed to verify execution.

Fiscalizers may offer to review the project before funding is complete, but payment only applies to the accepted fiscalization work if the project reaches execution conditions.
```

For complex projects:

```text
This project requires a paid pre-assessment before execution because the control cost cannot be estimated safely from the available information.

The pre-assessment has its own scope, cost limit, selection rule, and public report.
```

## C013 final resolution

C013 is resolved as follows:

```text
Do not create a mandatory paid pre-assessment layer in Core v0. Use unpaid standardized lightweight fiscalizer offers by default, include the selected fiscalizer's cost in the project's separated control budget, and allow paid pre-assessment only as an exceptional protocol-defined mission for high-risk or technically complex projects.
```

Final rule:

> Fiscalization is paid as accepted control work, not as ordinary offer preparation. Pre-funding offers must be lightweight, standardized, auditable, and non-binding until selected under protocol rules.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- fiscalization, evidence, and control model;
- citizen fiscalizer offer flow;
- project creation and publication flow;
- project lifecycle after publication flow;
- project disbursement flow;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Good fiscalizers may still consider unpaid lightweight offers unattractive.
- Cheap low-quality offers may still appear.
- Complex projects may need real pre-assessment earlier than v0 expects.
- Control budget estimates may change after funding.
- Paid pre-assessment exceptions may become a new gatekeeping layer.

## Mitigations

- keep lightweight offers standardized and short;
- use eligibility and reputation filters;
- expose offer cost, methodology, and conflict declarations;
- include control budget in the project funding target;
- allow paid pre-assessment only with explicit protocol trigger, cap, scope, deliverable, and audit trail;
- prevent executor-controlled fiscalizer payments;
- track bad-faith or misleading offers as responsibility events where appropriate.

## Design rule

> Control has a cost, but the cost of control must not create a new hidden authority before the project exists.