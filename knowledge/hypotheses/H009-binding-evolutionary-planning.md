# H009 — Planning Scope Alignment

## Hypothesis

Core v0 should require every financeable project to align with an active `Planning Scope`, but it should not pretend to solve the full governance problem of how a national, regional, communal, or thematic roadmap is created, voted, modified, or legitimized.

The earlier framing of this hypothesis as "binding evolutionary planning" remains important as a long-term direction. However, it is too broad for Core v0 unless it is split into two distinct concepts:

1. `Planning Scope Alignment`: whether a project belongs to an active public-function, pilot, operating-mode, roadmap, or authorized planning line.
2. `Roadmap Construction Governance`: how those scopes, goals, areas, or planning lines are created, voted, revised, suspended, or eliminated.

Core v0 includes the first concept. The second remains an open question and likely Extension v1+ / country implementation work.

## Rationale

A project-based distributed governance system should not let projects float without any public-function or planning boundary. Citizens need to know which public function, pilot, territorial scope, or authorized line a project is trying to serve.

At the same time, requiring alignment with a "national roadmap" creates a serious unresolved problem: who builds that roadmap, by what authority, with what voting or deliberation mechanism, and under what relationship to tutored mode?

If Core v0 assumes a fully built distributed national planning system, it overclaims.

If Core v0 ignores planning scope entirely, it risks funding projects with no relationship to the public function, pilot budget, or operating mode that made distributed financing available.

The correct v0 move is narrower:

```text
Projects need active planning-scope alignment.
The roadmap-construction mechanism remains unresolved.
```

## Planning Scope

A `Planning Scope` is a public, versioned scope that defines what kinds of projects are eligible for distributed financing under a public function, operating mode, pilot, protocol, territorial rule, or authorized planning line. ^r96b47655

It may be created by different sources depending on the operating mode and country implementation:

- authority-defined scope in tutored mode;
- protocol-defined scope in non-tutored mode;
- approved roadmap goal where a roadmap mechanism exists;
- pilot program definition;
- territorial or public-function rule;
- future distributed roadmap-construction mechanism.

Minimum attributes:

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

This does not contradict the project model if the scope is public, versioned, reasoned, and auditable.

Example:

```text
Public function:
Sports.

Operating mode:
Tutored.

Authority-defined planning scope:
- local sports infrastructure;
- child sports programs;
- club equipment renewal.

Allowed distributed projects:
Only projects inside that declared scope.
```

If a citizen proposes a cultural music lab under the sports scope, the platform should not declare the idea worthless. It should say:

```text
This idea is outside the active sports planning scope.
It may remain as an Idea, be reclassified, or become a future scope proposal.
```

The authority decision should be represented through the C020 Governance Resolution path when it materially affects publication, eligibility, or scope.

## Semi-open and open modes

In semi-open or open modes, planning scope may be defined by protocol rules, approved roadmap goals, public-function rules, or future distributed planning governance.

Core v0 does not need to choose the final political mechanism.

It requires:

- visible scope source;
- versioned rules;
- public reason where scope changes materially;
- audit trail;
- no hidden eligibility boundaries;
- no silent removal of project categories from financing. ^r14adef1d

## Boundary with H010

H010 defines the `Primary Responsibility Anchor` of a project.

H009 defines whether that anchor belongs to an active planning scope.

Example:

```text
Project:
Design and Construction of Multi-court Facility in Macul.

Primary Responsibility Anchor:
Usable public-access sports infrastructure.

Planning Scope:
Tutored sports pilot allows local sports infrastructure.

Result:
Eligible for project validation, subject to ordinary requirements.
```

The anchor answers:

```text
What is this project primarily responsible for delivering?
```

The planning scope answers:

```text
Is that kind of project currently open to distributed financing under this public function or operating mode?
```

## Out-of-scope or misaligned ideas

An idea or draft outside the active planning scope should not disappear.

Possible treatments:

- remain as an `Idea`;
- be reclassified under a different active public function;
- request reformulation;
- wait for the relevant public function to open;
- become an input to a future roadmap or planning-scope proposal process.

Core v0 should not create execution financing for out-of-scope projects by default.

Rule:

> Outside-scope does not mean socially worthless. It means not currently eligible for execution financing under the active scope. ^r49239a17

## Future distributed roadmap construction

The user-proposed idea of a national roadmap divided by votable areas is important and should be preserved.

A future architecture might look like:

```text
Planning Area
-> Roadmap Goal Proposal
-> deliberation
-> support / voting / delegated participation
-> review and conflict analysis
-> approved planning line
-> financeable project scope
```

This could allow distributed creation of national, regional, communal, or thematic roadmaps.

However, this is not ready for Core v0 because it still needs answers to:

- who may create planning areas;
- how areas are divided;
- who can vote in each area;
- whether voting is territorial, thematic, citizen-wide, delegated, or hybrid;
- how conflicts among planning areas are handled;
- how tutored authorities interact with citizen-created planning lines;
- what quorum or support thresholds apply;
- how low-visibility but essential services are protected;
- how capture, popularity bias, and short-termism are mitigated;
- whether planning lines bind budgets, project eligibility, discovery visibility, or only recommendation.

This is recorded as a future open question, not discarded.

H009 is aligned with [[../../docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|A020]]: the unresolved Roadmap Construction Governance concept that H009 splits off from Planning Scope Alignment is exactly the agenda-setting power A020 formalizes as the architecture's principal open limitation. Core v0 makes scope construction observable — versioned scope definitions, scope changes and interpretations as Governance Resolutions with timeouts, and out-of-scope demand visible as Ideas with per-category volume — but it does not distribute who constructs the scopes, which remains the acknowledged constitutional gap gating open-mode deployment at scale.

## Examples

### Sports project inside scope

```text
Planning Scope:
Sports tutored pilot allows local sports workshops.

Project:
Free sports school for children in Maipu.

Result:
Eligible for publication if executor, evidence, fiscalization, budget,
thresholds, and other project requirements are satisfied.
```

### Sports infrastructure inside scope

```text
Planning Scope:
Sports tutored pilot allows local sports infrastructure.

Project:
Design and Construction of Multi-court Facility in Macul.

Result:
Eligible for validation, but still subject to design gates,
control package, assurance, related-party safeguards, and no duplication.
```

### Valuable idea outside active scope

```text
Planning Scope:
Sports only.

Idea:
Youth music laboratory in Macul.

Result:
Not execution-financeable under sports scope.
It remains an Idea, can be reclassified if a cultural scope exists,
or can inform a future planning-scope proposal.
```

## Failure modes prevented

This narrower H009 prevents:

- projects with no public-function or pilot boundary;
- hidden scope decisions by tutored authorities;
- pretending that Core v0 has solved national planning democracy;
- rejecting valuable ideas as worthless simply because they are outside scope;
- using "roadmap alignment" as a silent centralized veto;
- mixing project governance with unresolved constitutional-scale planning governance.

## Status

Aligned Core v0 planning hypothesis.

Core v0 includes Planning Scope Alignment for financeable projects. Full distributed roadmap construction, including national roadmaps divided by votable areas, remains a preserved open question and likely Extension v1+ / country implementation work.
