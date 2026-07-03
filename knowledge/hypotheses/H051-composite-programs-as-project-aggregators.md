# H051 — Composite Programs as Project Aggregators

## Status

Extension v1+ coordination-pattern hypothesis aligned with [[../../docs/60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION|C022]] and [[H050-common-good-governance-program|H050]].

Composite programs are useful grouping and dependency containers, not a Core v0 requirement, not a full common-good governance program, and not a replacement for project-level accountability. ^r9ab52738

## Hypothesis

In an advanced implementation, some public goals may require a composite program that aggregates multiple interdependent projects. A composite program is not a separate governance architecture; it is a coordination container that groups projects whose value depends on being executed together. ^rf8fdc534

## Rationale

Some goals cannot be achieved by a single isolated project. They require several projects that are technically, financially, geographically, or operationally dependent on each other.

If these projects are funded independently without coordination, the system may finance incomplete value.

Example:

```text
Goal:
  Build a regional logistics corridor.

Required projects:
  bridge;
  access roads;
  signage;
  fiber optic connection;
  logistics center;
  emergency plan;
  maintenance program.
```

If the bridge is funded but the access roads are not, the overall value may fail.

## Core distinction

```text
Simple project:
  one defined execution commitment.

Composite program:
  parent container that coordinates multiple projects required for a larger result.
```

## Boundary with common-good governance

A composite program is different from a common-good governance program.

```text
Composite program:
  coordinates dependencies among execution projects.

Common-good governance program:
  defines a long-term governance charter for a shared asset,
  public space, ecosystem, infrastructure system, or other common good.
```

A composite program should not introduce:

- full common-good registry mechanics;
- governance charter voting;
- charter derogation;
- subordinate charters;
- complete compatibility rule engines;
- formal legal authority relationships;
- hidden authority over which projects are legitimate.

Those remain Extension v1+ under H050 or country implementation work. Core v0 only requires the C022 lightweight common-good impact declaration when a project materially affects a common good.

Example:

```text
Composite program:
  Recover an urban park.

Child projects:
  lighting;
  walking paths;
  playground repair;
  irrigation;
  maintenance equipment;
  accessibility upgrades.

Program role:
  show dependencies, phases, aggregate progress, and shared risks.

Child-project responsibility:
  each child project keeps its own executor, budget, evidence,
  fiscalizer, KPI set, complaints, and reputation effects.

C022 rule:
  because the park is a public space, each relevant child project
  declares common-good impact through ordinary project fields.
```

## Program structure

A composite program may include:

- program-level thesis of value;
- program-level goal;
- required child projects;
- optional child projects;
- dependencies among projects;
- funding condition logic;
- shared KPIs;
- project-level KPIs;
- aggregate evidence;
- aggregate fiscalization view;
- program-level status.

## Approval and financing logic

The program itself coordinates. The child projects are still funded, executed, and evaluated as projects.

A composite program may define conditions such as:

```text
Program becomes executable only if all critical child projects are funded.
```

or:

```text
Program phase 1 becomes executable when projects A, B, and C are funded.
```

The program should not hide funding conditions from citizens. If a project is valuable only when other projects are funded, that dependency should be visible before citizens fund it. ^rf76c7bb4

H051 is aligned with [[../../docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|A029]]: because each child project still lives or dies by its own funding attempt, A029 makes cross-project dependencies declarable and program-level funding coherence visible before citizens fund — a component can state that it requires another (X requires Y), the program surface warns with a stranded-complement warning when a prerequisite funds and its dependents do not, and a dependent component's funding window can reference its prerequisite's state rather than expiring blindly against it. Core v0 keeps components' funding attempts independent rather than adopting all-or-nothing program funding, so complementarities can still strand when a prerequisite funds and its dependents do not, and conditional or escrowed bundle funding with automatic return remains Extension v1+.

The program should also avoid pooling responsibility into an abstract parent. Failure of a child project should remain attributable to the responsible project actors, while the program view records how that failure affects the larger goal.

## Relationship with child projects

Child projects remain normal projects:

- they seek funding;
- they declare their own value thesis;
- they define their own KPIs;
- they have their own executor;
- they have their own fiscalization;
- they declare relevant common-good impacts under C022 where applicable;
- they preserve their own evidence, complaint, pause, reformulation, and revocation paths;
- they affect reputation individually.

The program adds coordination, dependency tracking, and aggregate visibility.

It may show aggregate evidence and aggregate fiscalization views, but those views should drill down to project-level records.

Example:

```text
Program:
  Regional logistics corridor.

Child project failure:
  Access-road project misses milestones.

Program consequence:
  The corridor view shows blocked value and dependency risk.

Project consequence:
  The access-road executor still receives the responsibility event,
  and its project evidence, fiscalization, complaints, and reputation
  remain traceable at the child-project level.
```

## Avoiding complexity

Composite programs should be introduced only where project interdependence is real. They should not become a default wrapper for every project.

Core v0 can operate without composite programs. Ordinary projects should not be forced into program containers merely to look more strategic, receive more visibility, or bundle unrelated funding demands.

Composite programs should remain optional Extension v1+ until the system has enough project-level maturity to handle dependency logic without confusing ordinary citizen participation.

## Principle

> A composite program coordinates interdependent projects; it does not replace project-level accountability, create a common-good charter, or hide child-project responsibility.

## Research note

Coordination-pattern hypothesis. Complements H050 but is different from a common-good governance program. It should be treated as Extension v1+ unless a future implementation proves that dependency aggregation is required for a specific domain.
