# Distributed Roadmap Construction Governance

## Question

How could a distributed governance system construct, revise, and legitimize a national, regional, communal, or thematic roadmap without recreating a centralized planning monopoly or collapsing into unstructured popularity voting?

## Origin

This question was raised during the H009 consolidation.

Core v0 now requires `Planning Scope Alignment`: projects must attach to an active public-function, pilot, operating-mode, roadmap, or authorized planning line before receiving execution financing.

However, Core v0 does not yet define how the planning scope or national roadmap itself is built. ^r188eeca1

The user proposed a possible future direction:

```text
A national roadmap divided by areas that can be voted on.
```

This idea should be preserved for later design rather than silently dropped or prematurely absorbed into Core v0.

## Possible future architecture

One possible model:

```text
Planning Area
-> Roadmap Goal Proposal
-> deliberation
-> support / voting / delegated participation
-> review and conflict analysis
-> approved planning line
-> financeable project scope
```

Planning areas could be:

- public-function areas: sports, culture, education, health, care, infrastructure;
- territorial areas: national, regional, communal, neighborhood;
- value areas: childhood, older adults, health, environment, culture;
- problem areas: school desertion, chronic disease, water scarcity, public-space deficit;
- hybrid areas combining function, territory, and value.

## Relationship with tutored mode

This future model must account for tutored mode.

In tutored mode, a central authority or authorized implementation administrator may define the planning scope opened to distributed financing.

Example:

```text
Public function:
Sports.

Tutored authority-defined scope:
Local sports infrastructure, child sports programs, club equipment renewal.
```

The future distributed roadmap-construction model must decide whether citizen-created planning areas can:

- only propose future scopes;
- trigger authority review;
- become advisory signals;
- become binding after thresholds;
- coexist with authority-defined tutored scopes;
- override authority-defined scope only in non-tutored modes.

## Design questions

- Who may create a planning area?
- Who may propose a roadmap goal?
- Who may vote or support a planning area?
- Is voting national, territorial, thematic, beneficiary-based, delegated, or hybrid?
- How are territorial conflicts handled?
- How are conflicts between planning areas exposed?
- Can a planning area bind budget, or only project eligibility?
- Can a roadmap goal expire or become inactive?
- How are low-visibility but essential services protected from popularity bias?
- How are expert constraints, legal mandates, and public-function boundaries represented?
- How does the system prevent capture by organized interests?
- How does the system avoid constant roadmap churn?
- What minimum evidence or diagnosis is required before a planning goal becomes financeable?
- How does this interact with H010 Primary Responsibility Anchor and H009 Planning Scope Alignment?
- How does this interact with C020 tutored governance and H058 operating modes?

## Scope classification

Current classification:

```text
Extension v1+ / Country implementation / open question.
```

It is not Core v0 because the first coherent project-based model can operate with authority-defined, protocol-defined, or pilot-defined planning scopes.

It becomes necessary later if the theory wants to explain how planning itself can become distributed rather than merely project execution and resource allocation.

## Working principle

> Core v0 should not pretend that roadmap construction is solved. It should keep projects aligned to visible active scopes while preserving the future possibility of distributed, votable planning areas. ^r35e31a17
