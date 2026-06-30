# H050 — Common Good Governance Program

## Status

Extension v1+ hypothesis aligned with [[60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION|C022]].

Full common-good governance is not part of Core v0. Core v0 only requires lightweight project-level common-good impact declaration where relevant, including affected assets, affected parties, risks, antivalues, evidence, fiscalization, and active-charter relationship disclosure when an active charter already exists.

## Hypothesis

A common good governance program is not a project and should not be approved through funding. It is a governance entity that defines a shared framework for managing a common good, and therefore should be approved or rejected through a deliberative voting process.

## Rationale

A project asks for resources to execute a defined commitment.

A common good governance program defines a framework that can affect many future projects and many actors over time. It is therefore closer to a governance charter than to an execution project.

## C022 alignment

C022 separates the future common-good governance system from the Core v0 project model.

In Core v0:

- a project may affect a common good even if no common-good governance program exists;
- the project is not automatically blocked merely because no active charter exists;
- the project must declare relevant common-good impacts through the ordinary project fields;
- if an active charter exists for the affected common good and scope, the project must declare its relationship to that charter;
- omission of a known or reasonably foreseeable charter relationship is an information failure;
- AI or platform assistance may suggest possible common-good impacts, but it does not decide the value, compatibility, or legitimacy of the project by itself.

The full system described in this hypothesis remains Extension v1+:

- common-good registry mechanics;
- governance charter creation and approval;
- charter voting thresholds;
- charter derogation;
- subordinate charters;
- full compatibility rule engines;
- formal legal authority relationships.

Example:

```text
Project:
  Repair and illuminate a neighborhood plaza.

Core v0 requirement:
  Declare that the project affects a public plaza,
  list expected benefits, risks, antivalues, affected parties,
  fulfillment evidence needs, and fiscalization needs.

If no active plaza charter exists:
  The project is not blocked.
  The impact remains visible, commentable, fiscalizable, and auditable.

If an active plaza charter exists:
  The project declares whether it is compatible, uncertain,
  or potentially incompatible with that charter.
```

Examples of common goods:

- river basin;
- forest;
- coastline;
- public square;
- irrigation system;
- shared infrastructure corridor;
- air quality zone;
- fisheries area;
- urban heritage district;
- statue, monument, heritage house, or other physical cultural asset.

## Core distinction

```text
Project:
  seeks funding;
  executes a defined scope;
  has a start and end;
  is evaluated by project KPIs.

Common good governance program:
  seeks approval;
  defines a governance framework;
  remains active over time;
  coordinates many projects, rules, KPIs, and reviews.
```

## Lifecycle

A common good governance program should follow a process such as:

```text
proposal
→ analysis period
→ debate / deliberation
→ construction of governance charter
→ definition of KPIs
→ definition of compatibility rules
→ definition of voting threshold
→ voting period
→ approved or rejected
→ if approved: active governance program
→ if rejected: archived or reformulable
```

## Governance charter

The charter should define:

- the common good being governed;
- territorial, physical, or functional scope;
- affected and beneficiary communities;
- purpose and value thesis;
- general KPIs;
- monitoring requirements;
- fiscalization requirements;
- conflict-resolution mechanisms;
- compatibility rules for related projects;
- revision and derogation rules;
- voting rules;
- approval threshold required for adoption.

## Voting participation

Participation should be free and transparent.

Any verified actor who wants to participate should be able to do so during the voting period.

The system should not create a hidden authority that decides who is allowed to care about a common good. Some actors may be affected directly, others may be beneficiaries, others may care for environmental, cultural, regional, scientific, strategic, or ethical reasons.

The important requirement is transparency: the system should show who participated, from what role or relationship if declared, and how concentrated or distributed the support and opposition were.

## Approval threshold

The approval threshold should be part of the program's own governance charter.

Different common goods may require different approval thresholds depending on their scope, risk, reversibility, affected communities, and long-term consequences.

However, the threshold can never be lower than simple majority.

Examples:

```text
Simple majority:
  minimum possible threshold.

Qualified majority:
  appropriate for high-impact, long-term, or conflict-prone common goods.

Special threshold above simple majority:
  possible when the program itself justifies a specific approval rule.
```

The threshold must be declared before the voting period begins. It cannot be changed during the vote.

## Common good registry

The system should maintain a registry of common goods with active or proposed governance programs.

This registry should not require a complete national inventory before the system can operate. It should grow organically as actors propose, debate, approve, reject, derogate, or replace common good governance programs.

Each registered common good should include:

- unique identifier;
- name;
- type of common good;
- scope or location;
- active charter, if any;
- derogated charter history;
- proposed replacement charters, if any;
- related projects;
- compatibility rules;
- relevant KPIs and monitoring information.

The registry is not an authority that decides the value of a common good by itself. It is an indexing and traceability layer for common goods that have entered the governance process.

## One active charter per scope

The system should avoid multiple active charters for the same common good and scope.

If two governance proposals refer to the same common good and the same scope, they should be treated as competing alternatives inside one deliberative process, not as separate charters that can both become active.

If a common good is too large and different areas require different rules, the preferred solution is to define separate non-overlapping common goods or scopes.

Example:

```text
Instead of:
  Lake X with two overlapping active charters.

Use:
  Lake X North
  Lake X South
```

This avoids subordinate charters in the core version and reduces complexity.

## Future concept: subordinate charters

Subordinate charters may be useful in a future version, but should not be part of the first design.

A subordinate charter could apply when an active main charter exists but a community wants to make additional or more specific requirements enforceable for a narrower scope or specific dimension that the main charter did not contemplate.

Example:

```text
Main charter:
  Lake X

Subordinate charter:
  Wetland restoration zone within Lake X
```

A project that declares association with the subordinate charter would need to comply with both:

```text
main charter + subordinate charter
```

This could add useful precision, but also adds complexity. For the core model, the preferred solution remains dividing the common good into clear non-overlapping scopes when different rules are needed.

## Relationship with projects

Once approved, the program can act as a parent context for projects.

Projects associated with the common good remain normal projects:

- they seek funding;
- they declare thesis of value;
- they define KPIs;
- they execute and are evaluated;
- they may be fiscalized.

However, they also need to declare how they relate to the common good governance program.

## Project compatibility with active charters

A project that affects a registered common good with an active charter must declare compatibility with that charter.

The system should not depend only on voluntary disclosure by the proponent. When a project declares its location, scope, affected assets, or expected externalities, the platform should check whether it intersects with registered common goods.

If the project intersects with an active charter, the project must address that relationship before publication or funding.

If a proponent hides or omits a relevant relationship with an active common good charter, the omission should be treated as a relevant information failure and may trigger observation, fiscalization, reputational damage, pause, guarantee consequences, or revocation depending on severity.

## Approval rule

Approval should not depend on reaching a funding target.

The program is approved or rejected through voting after analysis and debate, using the threshold defined in the governance charter.

## Modification versus derogation

Changing an approved common good charter creates a serious problem: existing projects may have been designed, funded, and approved under the previous charter.

If the charter changes while those projects are in progress, they may suddenly become incompatible with the new version despite having acted under the old approved rules.

For this reason, the core design should avoid direct modification of active charters.

Instead, the system should prefer:

```text
derogate the active charter for future use
→ preserve the existing charter historically
→ prevent new projects from being created under the derogated charter
→ allow projects already approved under the prior charter to continue under their original obligations
→ propose and vote on a new charter if a new governance framework is needed
```

## Derogation quorum

A common good governance charter can only be derogated using the same approval threshold that was required to approve it.

If the charter required simple majority to be approved, derogation requires simple majority.

If the charter required a qualified majority, derogation requires that same qualified majority.

If the derogation vote does not reach the required threshold, the charter remains active.

## Derogation rule

A derogated common good governance program stops being available as a basis for new projects, but its historical version remains visible and binding for projects that were already approved under it.

Projects already approved under the derogated charter may continue under the regime of the charter version that was active when they were approved.

New projects must use the new active charter if one has been approved.

Old projects may optionally migrate to the new charter only through their own approved reformulation or compatibility process. Migration should not be automatic.

## Visibility of derogated charters

Derogated charters should not disappear, but they should not remain in the main active view.

They should be accessible through the active charter or the common good history.

Example:

```text
Common good: Lake X
Active charter: Version 2
History:
  Version 1 — derogated
```

This preserves traceability without confusing new project proponents.

## Principle

> A project is funded. A common good governance program is approved. A common good charter should not be casually modified after approval; if its framework no longer works, it should be derogated for future use using the same quorum that approved it, while existing projects remain under the charter version that governed their approval.

## Remaining design questions

Extension v1+ governance-entity hypothesis aligned with C022. Needs further design around registry mechanics, detection of project/common-good intersections, relationship with existing projects, possible subordinate charters, charter derogation, and relationship with formal legal authority.
