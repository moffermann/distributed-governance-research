# Public Institution Exclusion and C007 Resolution v0

## Purpose

This document resolves contradiction C007 from the v0 contradiction checklist.

C007 was originally framed as a tension between public institutions participating as ordinary actors and public institutions acting as transition moderators. The final resolution is stronger and simpler: public institutions do not participate as internal actors in the system v0.

## Status

Accepted as the v0 resolution for C007.

## Core rule

> Public institutions do not participate as internal actors of the Distributed Governance System v0.

This means public institutions cannot act inside the system as:

- proposers;
- executors;
- fiscalizers;
- control subproject executors;
- competing organizations;
- moderators of ordinary project publication;
- beneficiaries of project financing;
- delegates;
- applicants for distributed project funds.

## Why this rule is necessary

The system is designed to distribute public resources toward projects executed by non-state actors such as private organizations, foundations, clubs, associations, cooperatives, NGOs, community organizations, and other civic/private actors.

It is not designed for ministries, municipalities, public agencies, or state-owned entities to compete for the same distributed funds.

Public institutions already have their own channels:

- direct public budgets;
- public procurement;
- public programs;
- administrative execution;
- legal mandates;
- subsidies;
- intergovernmental transfers;
- ordinary state planning.

If the state wants to execute a public project, it can do so through those channels. It should not enter this system as a competing actor.

## Problem solved

This rule eliminates the conflict where a public institution could be both:

```text
competitor inside the system
and
authority over the system
```

It also avoids the weaker solution of separating institutional units, which would still allow the public sector to compete, influence, moderate, or fiscalize the same domain.

## Public institutions as executors

Public institutions cannot execute projects financed through the platform.

Example not allowed:

```text
Project:
Municipal sports school.

Executor:
Municipality.

Funding source:
Distributed citizen project financing.
```

If the municipality wants to run a municipal sports school, it should do so through its ordinary budget or public procurement system, not through the distributed project system.

## Public institutions as fiscalizers

Public institutions also cannot act as internal fiscalizers of platform projects.

This is important because fiscalization is not neutral. A fiscalizer can affect:

- milestone approval;
- disbursement;
- evidence acceptance;
- complaint admission;
- project pause;
- project closure;
- reputation effects.

If a public institution acts as internal fiscalizer, it re-enters the system as operational authority even if it is not executing projects.

Rule:

> Public institutions may not validate project milestones, approve disbursements, resolve ordinary project complaints, or affect internal project reputation as fiscalizers inside the system.

## Public institutions as moderators

Public institutions should not moderate ordinary project publication inside the system.

The earlier tutored-mode concept should be reinterpreted.

In v0, tutored or semi-open implementation may exist as a country-level rollout condition, but the institution should not act as an ordinary internal project moderator competing with or controlling private/civic actors.

If an implementing country requires external public review, it should be treated as an external legal or implementation constraint, not as an internal actor role.

## What public institutions may do externally

Public institutions may still act outside the system in country implementation roles.

Allowed external roles may include:

- defining legal framework;
- deciding how much budget is allocated to the system;
- reducing or increasing the system's budget in future periods;
- setting pilot boundaries;
- providing legal custody or treasury integration where law requires it;
- auditing the system externally;
- enforcing general law;
- issuing permits required by external law;
- receiving reports;
- evaluating whether the pilot continues;
- defining country-specific sanctions or recovery mechanisms.

These are implementation or external oversight functions, not internal project roles.

## External audit vs internal fiscalization

The distinction is essential.

### External audit

Allowed.

A public authority may review the system, produce external reports, audit legality, or assess whether the implementation complies with law.

### Internal fiscalization

Not allowed for public institutions in v0.

A public institution should not be the actor that approves a project milestone, validates project evidence, or decides ordinary disbursement inside the platform.

## Public permissions and legal requirements

Projects may still need permits, approvals, or compliance with external law.

Example:

```text
A construction-related project may need a municipal permit.
```

That does not make the municipality an internal fiscalizer. It remains an external legal authority.

## Actor model after C007

Internal actor types should be read as:

```text
Citizen
Private / civic organization
```

Organizations may include:

- company;
- nonprofit;
- foundation;
- NGO;
- club;
- association;
- cooperative;
- union;
- community organization;
- private university or non-state academic institution where allowed;
- other non-state civic/private entities.

Public institutions are excluded from internal participation.

## State-owned companies

For v0, state-owned companies or entities controlled by the state should be treated as public-sector actors and excluded from internal participation unless a future country implementation creates a very explicit exception.

Default rule:

> Public-sector ownership or control excludes the organization from competing as an internal actor in v0.

## C007 final resolution

C007 is resolved as follows:

```text
Public institutions are external to the system, not internal participants.
```

Final rule:

> Public institutions cannot propose, execute, fiscalize, moderate, or compete for distributed project financing inside the system v0. They may define the legal framework, allocate or remove budget, audit externally, enforce general law, and provide country-specific infrastructure such as custody or treasury integration where required.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- Core v0 scope freeze;
- consolidated entity/object/state map;
- system blueprint;
- operating modes model;
- fiscalization and control model;
- scope classification matrix;
- contradiction checklist;
- future implementable object schema.

## Remaining risks

- A public institution may try to participate through a proxy organization.
- A state-funded organization may blur the boundary.
- External legal review may become de facto internal control.
- Country implementation may pressure the model to include public actors.

## Mitigations

- require ownership/control declarations;
- expose public-sector funding or control relationships;
- classify gray-zone actors by country implementation rules;
- keep external audit separate from internal fiscalization;
- prohibit state-controlled entities by default;
- record exceptions explicitly if a future implementation creates them.

## Design rule

> The system distributes execution and internal control among non-state civic/private actors. The state remains outside as funder, legal framework, external auditor, custodian, or regulator, not as internal competitor or fiscalizer.
