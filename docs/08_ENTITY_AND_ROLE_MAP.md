# Entity and Role Map v0

## Purpose

This document separates actors, roles, objects, and infrastructure in the Core v0 architecture.

The key rule is:

> Actor = who exists in the system. Role = what function that actor performs in a specific context.

This avoids confusing organizations or citizens with roles such as executor, fiscalizer, delegate, or moderator.

## Core actor types

Core v0 uses two primary actor types.

### 1. Citizen

A citizen is an individual person authorized to participate in the system.

The term "citizen" is preferred over "natural person" because the system is civic by nature. Not every natural person is necessarily eligible to participate. For example, foreigners without the required national identifier, minors, or other non-eligible persons may be natural persons but not citizens for purposes of this system.

Citizens are not anonymous. Identity verification is a baseline requirement of the system, so "verified" does not need to be part of the actor name.

Possible citizen roles include:

- funder;
- voter;
- delegator;
- delegate;
- commenter;
- evaluator;
- complainant / denunciante;
- fiscalizer;
- modeler;
- executor where allowed;
- beneficiary;
- affected party.

### 2. Organization

An organization is a collective actor authorized to participate in the system.

The term "organization" is preferred because it is neutral and can include different legal or social forms.

Examples:

- private organization / company;
- nonprofit organization / foundation;
- university;
- club;
- association;
- cooperative;
- union;
- community organization;
- NGO;
- local group;
- other legally or socially recognized collective actor.

Organization type should be treated as an attribute, not as a separate actor class unless implementation requires it.

Possible organization roles include:

- proposer;
- modeler;
- executor;
- fiscalizer;
- delegate;
- complainant / denunciante;
- beneficiary;
- affected party;
- project sponsor;
- technical assistant;
- evidence producer.

Core v0 excludes public institutions from this internal organization set. Public institutions remain external legal, budgetary, regulatory, auditing, or infrastructure actors unless a later country implementation deliberately changes the model.

## Identity and verification

There are no anonymous actors in the system.

Verification is a system requirement, not a separate actor label.

Therefore, the actor names are simply:

```text
Citizen
Organization
```

not:

```text
Verified citizen
Verified organization
```

## Roles

Roles are contextual. The same actor can play different roles in different projects or governance processes.

Example:

```text
University X
  Role in Project A: modeler
  Role in Project B: fiscalizer
  Role in Project C: executor
  Role in Education Delegation: delegate
```

Example:

```text
Citizen A
  Role in Project X: funder
  Role in Project Y: complainant / denunciante
  Role in Project Z: fiscalizer
  Role in Delegation: delegator
```

## Core roles

The following are roles, not actor types:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- funder;
- voter;
- delegator;
- delegate;
- moderator;
- administrator;
- complainant / denunciante;
- evaluator;
- commenter;
- beneficiary;
- affected party;
- technical assistant;
- evidence producer.

## Role accumulation rule

Roles are accumulable by default.

A citizen or organization may hold multiple roles across different projects, programs, delegations, or governance processes.

Example:

```text
Club A
  Project 1: proposer and executor
  Project 2: beneficiary
  Project 3: complainant / denunciante
```

The system should not force artificial separation of roles when it is unnecessary, especially in small projects.

## Minimum role incompatibilities

Role accumulation is limited when there is a conflict of interest or when one role must control another.

Minimum Core v0 incompatibilities:

1. The executor should not be the fiscalizer of the same project.
2. A fiscalizer should not fiscalize a project where they have a direct economic interest.
3. A public institution should not participate as an internal project actor while also exercising tutored or external authority over the same system.
4. A technical administrator should not alter substantive rules unless authorized by the applicable Administrative Rule Change, System Implementation Change, Protocol Change Proposal, or tutored operating-mode authority, with public versioning and audit trace where material.
5. A delegate must act only within the scope of the delegation they accepted.
6. A proposer, modeler, and executor may be the same actor, but that accumulation must be transparent.

Related-party relationships among proposers, modelers, executors, fiscalizers, evidence producers, operators, owners, revenue recipients, funders, and beneficiaries must be declared and classified. Declaration does not automatically invalidate a project. Low or indirect conflicts may be handled with public warnings; relevant conflicts may require independent control and public-return safeguards; severe or hidden conflicts may require reformulation, actor exclusion, disbursement blocking, rejection, or a role-specific responsibility review.

When a project combines design and execution, the same actor or related actors may occupy both roles if declared. This does not allow self-validation of the design phase where the Threshold Policy requires independent review. Execution-phase funds may remain reserved while the design phase is pending, but they cannot be released until the relevant phase gate is accepted.

## Public institutions

Public institutions are external to the internal Core v0 actor model.

They are not ordinary organizations competing inside the distributed project system.

In Core v0, public institutions should not act inside the system as:

- project proposer;
- project modeler;
- project executor;
- fiscalizer;
- evidence producer;
- ordinary delegate;
- internal moderator of competing projects;
- recipient of distributed project financing.

Public institutions may still act externally as:

- legal framework setter;
- budget allocator or budget remover;
- external auditor;
- general-law enforcer;
- public authority issuing governance resolutions in a tutored operating mode;
- external tutored-scope reviewer for eligibility, duplication, scope, or compatibility where the operating mode grants that authority;
- provider of country-specific infrastructure such as identity, treasury, custody, or legal registries.

If a country chooses a tutored mode, institutional decisions that affect project publication, rejection, timeout, review, operating mode, or rule configuration should be represented as public governance-resolution objects, not hidden internal moderation.

## Treasury / revenue authority

Treasury, revenue authority, tax authority, or similar state financial bodies are not core actors in the civic interaction model.

They are external or infrastructural integrations unless the implementing country decides to represent them inside the platform.

Their possible external functions include:

- informing assignable civic balances;
- reporting signed authorized allocation amounts for a citizen, period, and program;
- receiving tax or budget data;
- transferring or custodying public resources;
- enabling disbursement;
- supporting financial traceability.

However, they do not decide project value, approve ordinary projects, fiscalize results, or participate in internal governance under Core v0. If an implementing country grants a public institution broader internal powers, that is a country-specific departure from the Core v0 baseline and should be documented as such.

If a citizen-level amount formula depends on tax, vulnerability, territorial-priority, or other sensitive external data, the platform should receive only the authorized amount, eligibility status, formula version, explanation code, and audit reference from the competent provider. It should not receive the citizen's raw tax declaration or sensitive registry file.

For Core v0, they are best described as:

```text
external financial infrastructure / integration
```

not as a primary actor.

## Platform / system

The platform is not an actor with civic agency.

It is infrastructure that executes protocol rules, records events, applies modes, computes metrics, displays information, and supports workflows.

It should be modeled separately from actors.

## Principle

> The system has two internal base actor types: citizens and non-state organizations. Public institutions remain external legal, budgetary, auditing, or infrastructure actors in Core v0. Everything else is a role, attribute, or infrastructure unless a later implementation requires additional actor classes. Roles are accumulable by default, except where conflict of interest or control relationships require explicit incompatibility.

## Status

Accepted as Entity and Role Map v0 foundation.
