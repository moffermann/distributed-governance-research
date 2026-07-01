# Concept — Distributed Planning Architecture

## Definition

Distributed Planning Architecture is the planning layer of the distributed governance model. In Core v0, it is limited to `Planning Scope Alignment`: financeable projects must attach to an active public-function, pilot, operating-mode, roadmap, or authorized planning line.

The broader question of how a society constructs, votes, revises, and legitimizes the roadmap itself remains open.

## Core claim

Planning scope should be visible and binding for project eligibility, but the system should not pretend that full roadmap-construction governance is solved in Core v0.

A society needs long-term direction, but that direction should not be hidden inside discretionary authority or assumed to be democratically solved by the platform.

## Core v0 architecture

Core v0 uses active planning scopes:

```text
public function / operating mode / pilot / authorized planning line
  -> Planning Scope
    -> Primary Responsibility Anchor
      -> Project
```

## Planning Scope

A Planning Scope is a public, versioned scope that defines what kinds of projects are eligible for distributed financing under a public function, operating mode, pilot, protocol, territorial rule, or authorized planning line.

It should define:

- public function or pilot;
- operating mode;
- source: authority, protocol, approved roadmap, country implementation, or future distributed mechanism;
- eligible project types;
- excluded or out-of-scope project types where relevant;
- territorial level;
- effective date;
- review or expiration date where applicable;
- responsible authority or process;
- citizen-facing explanation;
- audit trail.

## Tutored mode

In tutored mode, the planning scope may be defined by the central authority or authorized implementation administrator.

This is compatible with C020 if the scope and each material scope decision are public, versioned, reasoned, and auditable.

Example:

```text
Public function:
Sports.

Operating mode:
Tutored.

Planning Scope:
Local sports infrastructure, child sports programs, club equipment renewal.
```

## Project attachment

Projects should not float independently. They must attach to an active Planning Scope.

Each project declares:

- one Primary Responsibility Anchor;
- optional secondary contributions;
- Planning Scope reference;
- expected contribution;
- KPIs;
- budget;
- timeline.

The Primary Responsibility Anchor is the project's main accountability center. It identifies the planning scope, public function, or public-value outcome against which the project is primarily classified, compared, funded, evaluated, fiscalized, and held accountable.

Secondary contributions are allowed, but they do not replace the anchor. If a secondary contribution is presented as a formal promise, it should have proportional metrics, fulfillment/control evidence, and review consequences.

If several outcomes are each independently primary, the proposal should be challenged as either:

- separate projects;
- project phases under one parent anchor where the work is sequential and serves the same result;
- a composite program where several child projects are genuinely interdependent.

## Living roadmap

The broader living-roadmap model remains a future design question.

A future architecture may allow universities, companies, foundations, citizens, communities, institutions, or delegated citizen groups to propose additions or modifications.

However, Core v0 does not define the full mechanism by which these proposals become binding planning lines.

## Future distributed roadmap construction

One possible future architecture, preserved as an open question, is:

```text
Planning Area
-> Roadmap Goal Proposal
-> deliberation
-> support / voting / delegated participation
-> review and conflict analysis
-> approved planning line
-> financeable project scope
```

This is likely Extension v1+ / country implementation work.

## Planning conflicts

Conflicts between planning scopes or future roadmap goals should be made visible rather than hidden inside political discretion.

Example:

- reduce CO2 emissions;
- expand lithium mining.

Future planning governance should expose the conflict and invite projects that reduce the tradeoff, such as cleaner mining, electrification, carbon capture, or compensation mechanisms.

## Key insight

Not all contradictions need to be solved from above. Some should be made visible so society can deliberate and innovate around them.

## Relation to current systems

Current political systems also face conflicting priorities, but they often resolve them through opaque political discretion, budget negotiations, lobbying, or executive preference.

A distributed planning architecture should be judged comparatively: can it handle planning boundaries and conflicts at least as well as the current model, with more transparency and better feedback?

## Status

Core v0 uses planning-scope alignment. Full distributed roadmap construction remains an open question.
