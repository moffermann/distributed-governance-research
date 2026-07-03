# Public Authority and State-Owned Operator Boundary and C007 Resolution v0

## Purpose

This document resolves and refines contradiction C007 from the v0 contradiction checklist.

C007 was originally framed as a tension between public institutions participating as ordinary actors and public institutions acting as transition moderators. The first accepted resolution excluded public institutions from internal v0 participation.

That rule was too broad because it merged two different concepts:

```text
Public authority exercising approval, admissibility, regulatory, fiscal, or tutored powers.
State-owned or publicly owned operator providing a service under ordinary accountability rules.
```

The refined v0 rule is not based only on the public/private label. It is based on function, operating mode, and control relationship.

## Status

Accepted as the refined v0 resolution for C007.

The filename is retained for link stability, but the operative rule is now the public-authority and state-owned-operator boundary.

## Core rule

> A public authority may not be judge and party inside the same distributed-governance scope. A state-owned or publicly owned operator may participate only when it acts as an ordinary accountable operator under equal rules and does not carry approval, admissibility, regulatory, fiscal, funding, or tutored-control power over the same scope. ^ree650ebd

In short:

```text
Authority power creates the exclusion.
Public ownership alone does not always create the exclusion.
```

## Why this refinement is necessary

The system distributes public resources toward projects and services that may be executed by many types of organizations.

The public/private distinction becomes less useful because:

- private companies may provide public services with public funding;
- nonprofit and community organizations may execute public-value projects;
- concessionaires may operate services that are public in function but private in ownership;
- state-owned companies may operate like service providers rather than like regulators;
- public resources may flow through accountable projects instead of traditional institutional budgets.

The relevant distinction is therefore functional:

```text
Who has authority over admission, scope, regulation, budget, review, or enforcement?
Who is merely offering to execute, operate, evidence, or support a project under the same rules as others?
```

## Concept boundary

### Public Authority

A public authority is a ministry, municipality, regulator, agency, public office, treasury body, court, police body, administrative authority, or equivalent body when it exercises legal, budgetary, tutored, regulatory, fiscal, adjudicative, coercive, eligibility, admissibility, or scope-setting power.

Public authorities are external to the internal actor model for the scope they control. ^r28013fb6

They may act externally as:

- legal framework setters;
- budget allocators or budget removers;
- external auditors;
- general-law enforcers;
- permit or registry authorities;
- public authorities issuing Governance Resolutions in tutored mode;
- external tutored-scope reviewers for eligibility, duplication, scope, or compatibility;
- providers of country-specific infrastructure such as identity, treasury, custody, or legal registries.

They may not use that authority position to become internal project competitors in the same scope.

### State-Owned Operator / Public Enterprise

A state-owned operator, public enterprise, municipally owned company, public utility, or publicly controlled service company is a collective organization owned or controlled by a public body but acting as a service provider, operator, concessionaire, supplier, or executor.

It is not automatically the same thing as a public authority.

It may be represented as an `Organization` in the internal actor model only when the active rules classify it as eligible and the C007 conflict checks are satisfied.

## Operating-mode rule

### Tutored mode

In tutored mode, the responsible public authority may define or interpret the active Planning Scope, review eligibility, reject duplicates, request reformulation, or issue Governance Resolutions under C020.

Because that authority has approval or admissibility power, it should not also compete through itself or through a controlled operator inside the same tutored scope.

Default Core v0 rule:

> In tutored mode, a state-owned or publicly controlled operator is excluded from internal project competition when it is controlled by, directed by, materially privileged by, or materially dependent on the same authority that defines scope, reviews admissibility, approves publication, controls relevant budget, or regulates the same distributed-financing scope. ^rcaf1ef8c

Example not allowed:

```text
The Ministry of Sports opens a tutored sports pilot.
The ministry also controls a public sports corporation.
The ministry reviews project admissibility and the public corporation competes as executor.
```

The conflict is not public ownership in the abstract. The conflict is that the same authority family can approve, reject, delay, or shape the field while its own operator competes.

### Non-tutored or open mode

In non-tutored or open mode, the state-owned-operator problem changes.

If no public authority controls project admissibility, publication, scope approval, fiscalization, disbursement, or selection in favor of its own operator, a state-owned operator may compete as an ordinary eligible organization.

Default Core v0 rule:

> In non-tutored or open mode, a state-owned operator may participate as an internal organization if it has no privileged approval path, no regulatory immunity, no hidden subsidy or treasury backstop unavailable to others, no control over fiscalization or evidence review, no discretion over disbursement, and no authority relationship that lets it bias project selection.

Example allowed:

```text
A state-owned sanitary company competes to execute a water-service project
in an open distributed-financing scope.

It must declare ownership and control relationships.
It must accept the same value floors, antivalue ceilings, guarantees,
fiscalization, fulfillment/control evidence, disbursement rules,
complaint paths, revocation rules, and role-specific reputation effects
as private concessionaires or civic operators.
```

## Relation to institutional monopolies

C007 now aligns with H004.

The system is not anti-public and not pro-private by label. It is anti-opaque, non-contestable, weakly accountable monopoly.

Some functions may require a single operator in a territory because parallel infrastructure is inefficient or impossible. Utilities are the clearest example. The relevant question is whether that monopoly is accountable, contestable for the market, reviewable, and replaceable under explicit conditions.

Allowed pattern:

```text
One territorial utility operator.
Strict value floors and antivalue ceilings.
Independent fulfillment/control evidence.
Fiscalization.
Transparent performance history.
Fines, correction, revocation, or replacement when serious failure is proven.
```

Rejected pattern:

```text
Opaque monopoly.
Guaranteed budget or tariff flow.
Weak public evidence.
No meaningful consequence for poor service.
Political capture or fiscal losses absorbed by the public for years.
```

## Required declarations

Any state-owned operator or public-enterprise participant must declare:

- public ownership percentage or control basis;
- controlling public authority or ownership chain;
- board appointment or management control relationships;
- budget, subsidy, guarantee, treasury, or debt-backstop relationships;
- regulatory privileges, exclusive rights, concession rights, or permit advantages;
- relationship to any authority that defines Planning Scope, eligibility, admissibility, fiscalization, disbursement, or sanctions for the same scope;
- related-party relationships with proposers, modelers, executors, fiscalizers, evidence producers, funders, beneficiaries, operators, owners, revenue recipients, or suppliers.

These declarations are handled through the related-party and conflict-review architecture. Disclosure does not automatically invalidate participation, but hidden or misrepresented control relationships may trigger reformulation, exclusion, disbursement blocking, rejection, complaint review, responsibility review, or reputation effects. ^r79baceec

## Internal role eligibility after C007

Core v0 internal actor types remain simple:

```text
Citizen
Organization
```

`Organization` may include private, nonprofit, cooperative, community, academic, concessionaire, public-enterprise, or state-owned operators when eligible under the active rules.

But public authorities in authority capacity remain external. They should not act internally as:

- project proposer;
- project modeler;
- project executor;
- fiscalizer;
- evidence producer;
- ordinary delegate;
- internal moderator of competing projects;
- recipient of distributed project financing;
- discretionary project payment authority;
- actor deciding its own admissibility, evidence sufficiency, disbursement, complaint outcome, or reputation effect.

## External authority remains allowed

C007 does not prohibit external tutored-scope moderation.

When a country voluntarily opens a bounded share of a public function budget to the distributed platform, the responsible public authority may review whether a submitted project fits the scope of that tutored allocation.

Examples of valid external tutored-scope review:

- project is outside the public function opened to the platform;
- project duplicates an already approved traditional public project;
- project requests funding from the distributed pilot for a location, facility, or service already covered by the authority's ordinary portfolio;
- project lacks eligibility required by the legal or administrative mandate of the tutored pilot;
- project should be reclassified under another public function.

The decision must create a public Governance Resolution under C020 when material.

## Examples

### Tutored sports pilot

```text
The Ministry of Sports opens 5% of its budget in tutored mode.
A public sports corporation controlled by the ministry proposes projects.
The ministry decides admissibility and scope.
```

Default result:

```text
Not allowed in Core v0.
```

The authority family would be judge and party.

### Open utility project

```text
A state-owned sanitary company competes with private concessionaires
in an open mode where project selection, fiscalization, disbursement,
and reputation are controlled by protocolized independent rules.
```

Default result:

```text
Potentially allowed if all ownership, subsidy, concession, and authority
relationships are declared and no privileged approval or review path exists.
```

### Municipal company in a municipal tutored scope

```text
A municipality controls project admissibility for a local tutored pilot.
A municipal company seeks to execute a project in that same pilot.
```

Default result:

```text
Not allowed unless a future implementation creates an explicit,
independent, and auditable separation strong enough to remove the
judge-and-party conflict. Core v0 defaults to exclusion.
```

## C007 final resolution

C007 is resolved as follows:

```text
Public authorities remain external to the internal actor model for any
scope in which they exercise authority. State-owned or publicly owned
operators are not automatically excluded by ownership label alone, but
they may participate internally only when they act as ordinary eligible
organizations under equal rules, declare control relationships, and do
not benefit from approval, admissibility, regulatory, fiscal, funding,
or tutored-control power over the same scope.
```

Final rule:

> The system does not ask only whether an actor is public or private. It asks whether the actor is exercising authority, competing as an operator, receiving privileges, or connected by control to the authority that governs the same scope.

## Documents that should reflect this resolution

This resolution should inform:

- Core v0 scope freeze;
- consolidated entity/object/state map;
- system blueprint;
- operating modes model;
- fiscalization and control model;
- related-party conflict model;
- delegation and allocation boundary;
- scope classification matrix;
- contradiction checklist;
- future implementable object schema.

## Remaining risks

- A public authority may use formally separate operators as proxies.
- A state-owned operator may receive hidden subsidies, guarantees, data access, or regulatory advantages.
- A public authority may use tutored review to protect its own traditional portfolio.
- A nominally non-tutored mode may still be captured by informal authority influence.
- Public/private labels may hide real control chains.
- Strict exclusion in tutored mode may reduce useful operator supply in some sectors.

## Mitigations

- require ownership and control declarations;
- expose public-sector funding, subsidy, guarantee, or backstop relationships;
- classify authority-linked entities through related-party conflict review;
- separate external authority review from internal project execution;
- require independent fiscalization, fulfillment/control evidence, and disbursement rules;
- require material tutored decisions to become Governance Resolutions;
- preserve duplicate-project rejections, outside-scope rejections, review delays, timeout resolutions, and known authority-linked operator context for basic observability and later pattern audit;
- preserve role-specific reputation and revocation/replacement paths for all operators, including public enterprises.

## Design rule

> Public/private status is not the primary governance boundary. Authority, control, privilege, contestability, accountability, and operating mode are the boundary. ^rb1a52f8e
