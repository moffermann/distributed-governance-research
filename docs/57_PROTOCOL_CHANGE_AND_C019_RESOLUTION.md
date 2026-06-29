# Protocol Change Governance and C019 Resolution v0

## Purpose

This document resolves contradiction C019 from the v0 contradiction checklist.

C019 was originally framed as the risk that Core v0 conceptually depends on meta-governance and protocol evolution, but does not yet explain who can change protocol rules, under what conditions, and with what safeguards.

The final v0 resolution is to define a minimum protocol-change path. Full administrative meta-governance implementation can remain future work, but v0 must distinguish administrative configuration changes from system implementation changes, and must distinguish tutored from non-tutored operating modes.

## Status

Accepted as the v0 resolution for C019.

## Core principle

> The system may evolve, but rule changes must be visible, versioned, justified, non-surprising, and governed by the operating mode in effect.

A tutored operating mode may give an administrator or implementing ministry authority to configure rules.

But tutored authority does not imply silent, retroactive, or overnight rule changes.

## The contradiction

The model uses protocol-configurable rules in many places.

Examples:

```text
guarantee or bond percentages
retention thresholds
fiscalization requirements
complaint blocking criteria
reputation update weights
eligibility rules
operating mode rules
funding deadlines
review windows
approval thresholds
```

But if the architecture says these are configurable without defining who can configure them, the system creates a hidden authority problem.

The contradiction is:

```text
The protocol must be able to evolve,
but the power to change the protocol must itself be governed.
```

## Two kinds of rule change

C019 separates two different kinds of change.

## 1. Administrative configuration change

An administrative configuration change modifies a parameter, threshold, or operational rule within the existing system.

Examples:

```text
guarantee percentage changes from 5% to 20%
minimum publication period changes
retention minimum changes
threshold for reinforced fiscalization changes
eligibility criteria for fiscalizers changes
complaint blocking rule changes
maximum active fiscalizer offers changes
```

These changes affect how the system operates without necessarily changing the underlying software or protocol model.

Possible object:

```text
Administrative Rule Change
```

## 2. System implementation change

A system implementation change modifies the software, algorithm, AI validator, interface, data model, or technical behavior of the system.

Examples:

```text
new reputation formula implementation
new milestone validator version
new privacy AI model
new fiscalizer selection algorithm
new project publication workflow
bug fix affecting project states
schema migration
new citizen interface layer
```

Possible object:

```text
System Implementation Change
```

These changes need release notes, migration rules, testing, rollback, and version traceability.

## Operating mode distinction

C019 also separates tutored and non-tutored modes.

## Tutored mode

In tutored mode, governance authority belongs to the administrator defined by the implementation context.

In a public-sector pilot, this may be:

```text
the implementing ministry
the administrative authority responsible for the pilot
the public institution operating the system
```

This authority may configure protocol parameters within its mandate.

However, it must do so publicly and traceably.

Tutored mode is not permission for arbitrary hidden rule changes.

## Non-tutored mode

In non-tutored mode, major protocol changes should follow a participatory protocol-change path.

Possible object:

```text
Protocol Change Proposal
```

The minimum path is:

```text
proposal
public reason
scope definition
impact analysis
review period
sandbox or simulation
approval mechanism
implementation date
versioned protocol update
rollback path
```

This may involve citizen proposal, community review, voting, delegated voting, protocol-defined approval bodies, or other open mechanisms depending on implementation.

The exact voting mechanics can remain future work.

The v0 requirement is that non-tutored protocol change must not be an invisible administrator edit.

## Rule-change object fields

Every relevant rule change should contain:

```text
change id
change type
operating mode
proposing actor or authority
rule affected
old value or behavior
new value or behavior
reason
scope
affected project states
affected roles
affected future projects
affected existing projects, if any
publication date
effective date
adaptation period
transition rule
rollback rule
implementation version
citizen-facing summary
audit trail reference
```

For system implementation changes, add:

```text
release notes
migration plan
test or sandbox result
known risks
monitoring rule
rollback version
```

For non-tutored protocol changes, add:

```text
review period
approval method
approval result
participation record
minority objections or dissent summary
```

## No silent rule change

Rejected rule:

```text
The administrator changes system rules without public notice or visible history.
```

Accepted rule:

```text
Every material rule change is versioned, visible, justified, and traceable.
```

Layer 5 should preserve rule-change history.

Citizen-facing layers should summarize material changes in simple language when they affect projects, funding, guarantees, fiscalization, complaints, reputation, or eligibility.

## No surprise effective date

Relevant rule changes must include an effective date and adaptation period.

Example:

```text
Guarantee requirement changes from 5% to 20%.

Publication date:
1 July

Effective date:
1 October

Adaptation period:
90 days
```

This prevents actors from planning under one rule and being suddenly forced into another without warning.

## Transition / grandfathering rule

Every material rule change must declare which objects are governed by the old rule and which by the new rule.

Possible transition rule:

```text
New rule applies to:
- projects created after the effective date;
- draft projects not yet submitted for validation;
- materially reformulated projects after the effective date.

Old rule continues for:
- projects already published as financeable;
- projects already in funding;
- projects with guarantees already issued under the old rule;
- projects already execution-ready or in execution.
```

The exact transition rule may vary.

But the transition rule must be explicit.

## Protected project states

Projects in advanced states should generally be protected from sudden rule changes.

Recommended protected states:

```text
published as financeable
funding in progress
execution-funded
control-funded
execution-ready
in execution
under milestone review
```

A rule change should not normally invalidate these projects without a transition rule.

## Exceptions

Some urgent changes may need immediate or retroactive effect.

Examples:

```text
fraud vulnerability
legal prohibition
security issue
privacy risk
systemic exploit
court or authority order
critical safety risk
```

Even then, the change must include:

```text
emergency reason
scope
why ordinary adaptation is impossible
affected projects
temporary or permanent status
review date
appeal or review path, if applicable
```

Emergency rule changes should be exceptional and auditable.

## Example: guarantee change

Bad pattern:

```text
Yesterday guarantee was 5%.
Today it is 20%.
All projects must comply immediately.
```

This can make already planned projects impossible and damages trust in the system.

Accepted pattern:

```text
Administrative Rule Change:
Guarantee requirement increases from 5% to 20%.

Reason:
High failure rate in projects above threshold X.

Publication date:
1 July.

Effective date:
1 October.

Transition rule:
Applies only to projects published after 1 October.
Projects already published or with guarantees issued under the 5% rule remain under the previous rule unless materially reformulated.

Citizen summary:
Future high-risk projects will require stronger guarantees. Existing projects already planned under the old rule keep their original requirement.
```

## Relationship with project reformulation

A project reformulation is not a protocol change.

A reformulation changes one project or one project version.

A protocol change changes the rules that govern many projects or system behavior.

Therefore:

```text
Project Reformulation Proposal → changes a project.
Administrative Rule Change → changes a configured rule.
System Implementation Change → changes system behavior or software.
Protocol Change Proposal → changes governing protocol in non-tutored mode.
```

## Relationship with Core v0 scope

Core v0 does not need to implement a full constitutional meta-governance system.

But Core v0 must explain the minimum path by which rules can change.

Without this, the architecture relies on protocol evolution while leaving rule-changing power unexplained.

Therefore, C019 is a conceptual Core v0 requirement and a likely implementation v1+ expansion.

## Citizen-facing explanation

Tutored mode:

```text
This rule is being changed by the administrator of this operating mode.
The change is public, versioned, justified, and will take effect on the stated date.
Existing projects are affected only according to the transition rule.
```

Non-tutored mode:

```text
This rule change has been proposed through the protocol-change process.
Citizens may review the proposal, impact analysis, sandbox result, approval status, and implementation date.
```

Implementation change:

```text
The system will deploy a new version of this rule or validator.
The change log explains what changed, which projects are affected, and how rollback works if necessary.
```

## C019 final resolution

C019 is resolved as follows:

```text
Separate administrative configuration changes from system implementation changes. In tutored mode, the administrator or implementing ministry may configure rules within its mandate, but every material change must be public, versioned, justified, have an effective date, include an adaptation period, and define a transition rule. In non-tutored mode, protocol changes require a visible Protocol Change Proposal with review, sandbox or simulation, approval, implementation, and rollback. No material rule change may be silent, surprising, or retroactive except under exceptional justified emergency conditions.
```

Final rule:

> Even when an administrator governs a tutored mode, the rules of the game cannot be changed silently, overnight, or retroactively against actors who planned under the previous rule.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- scope classification matrix;
- distributed governance system blueprint;
- operating modes model;
- tutored transition model;
- project creation and publication flow;
- project lifecycle after publication flow;
- project dashboard;
- technical audit trail layer;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Administrators may abuse emergency exceptions.
- Transition rules may become too complex.
- Non-tutored approval mechanisms may be captured or underparticipated.
- Software changes may hide policy changes if not classified correctly.
- Too much notice may slow urgently needed safety fixes.

## Mitigations

- require emergency rule changes to be justified and reviewed;
- distinguish configuration changes from implementation changes;
- require citizen-facing summaries for material changes;
- require effective dates and adaptation periods by default;
- preserve prior protocol versions;
- show which projects are governed by which rule version;
- include rollback paths for implementation changes;
- define non-tutored voting/approval mechanics later without leaving v0 conceptually silent.

## Design rule

> A system that replaces discretionary authority must not hide discretion inside rule changes.