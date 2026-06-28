# H051 — Composite Programs as Project Aggregators

## Hypothesis

Some public goals require a composite program that aggregates multiple interdependent projects. A composite program is not a separate governance architecture; it is a coordination container that groups projects whose value depends on being executed together.

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

## Relationship with child projects

Child projects remain normal projects:

- they seek funding;
- they declare their own value thesis;
- they define their own KPIs;
- they have their own executor;
- they have their own fiscalization;
- they affect reputation individually.

The program adds coordination, dependency tracking, and aggregate visibility.

## Avoiding complexity

Composite programs should be introduced only where project interdependence is real. They should not become a default wrapper for every project.

## Principle

> A composite program coordinates interdependent projects; it does not replace project-level accountability.

## Status

Coordination-pattern hypothesis. Complements H050 but is different from a common good governance program.
