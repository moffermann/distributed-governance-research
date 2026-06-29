# H040 — Funding Deadline and Reformulation Rule

## Hypothesis

Every project should define a funding deadline. If the project does not reach its funding target by that deadline, it should either close or enter a reformulation process.

## Resolution alignment

This hypothesis is qualified by:

- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`;
- `docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md`.

Where older wording suggested an individualized funder withdrawal window during reformulation, C005 and C017 are the controlling rules.

```text
Reformulation does not create a default unilateral withdrawal window.
Funding remains a commitment until project closure or protocol-defined project outcome.
Material reformulation is handled through a Reformulation Proposal, not silent editing and not ordinary funder withdrawal.
```

## Rationale

Projects should not remain open indefinitely. An indefinite funding period creates stale projects, clutters the platform, and keeps committed civic funds locked without execution.

A defined deadline creates clarity for funders, executors, and the project ecosystem.

## Rule

Each project should declare:

- funding target;
- funding deadline;
- closure conditions;
- whether reformulation is allowed;
- notification rules for funders.

## Deadline outcome

When the deadline arrives and the project has not reached its funding target, the project enters one of two paths:

```text
1. Closure
2. Reformulation
```

## Closure

If the project closes:

- committed funds are released back to the funders' civic allocation cycle or wallet rules;
- the project becomes inactive;
- the project history remains visible;
- the modeler or proposer may later create a new project if desired.

## Reformulation

If the project is reformulated:

- funders are notified;
- the new version must explain what changed;
- the project must distinguish operational reformulation from material value reformulation;
- funding effects follow C005 and C017;
- funders can comment, object, support complaints, follow the reformulation, and change their evaluation of the project.

## Reformulation decision path

Reformulation should not open a default individualized withdrawal window.

Instead:

```text
Operational reformulation:
  visible change, notification where appropriate, validation, audit trail, no default funder withdrawal.

Material value reformulation:
  Reformulation Proposal, preserved original version, community or protocol-defined approval, funding effects by approval outcome.

Rejected or expired material reformulation:
  project fails, closes, or is revoked under the original terms; unreleased, unused, retained, guaranteed, or recovered funds return or reassign according to protocol and citizen configuration.
```

The relevant response period is for review, comment, objection, complaint, approval, or protocol-defined decision, not for ordinary voluntary withdrawal.

## Reformulation frequency

A project should not have a hard limit on the total number of reformulations.

However, to avoid notification fatigue and constant instability, a project should be reformulated at most once per month.

This allows projects to improve over time without overwhelming funders or making the project's identity unstable.

## Reformulated visibility label

A reformulated project should not appear as a new project.

It should keep its identity and history, but be clearly labeled as reformulated.

Possible label:

```text
Reformulated recently
```

This helps funders who missed the reformulation notification understand that the project they originally supported has changed and should be reviewed again.

Funders who do not respond remain governed by the project outcome and their configured return/reassignment rules where those rules apply.

## History and reputation

A reformulated project should preserve its history.

Reformulation is not necessarily a negative event. It may indicate that the project team is improving design, scope, KPIs, cost structure, communication, or feasibility.

The project should not reset reputation by reformulating. Its prior attempt, changes, support history, and funder reactions remain visible.

## Default continuity rule

When a project is reformulated, existing funding remains committed unless the project reaches a protocol-defined outcome that returns or reassigns unreleased, unused, retained, guaranteed, or recovered funds.

This prevents reformulation from automatically destroying partial support while still preserving citizen protection through traceability, complaints, fiscalization, retentions, guarantees, recovery where possible, and return/reassignment of eligible balances.

## Recovery caveat

Core v0 should not promise full recovery after failure or reformulation.

If funds were legitimately or illegitimately released and spent, they may not be fully recoverable, just as current public projects do not always recover spent funds when a contractor fails. The system improves the situation by making losses visible, slowing release through milestones, preserving evidence, activating guarantees or recovery where possible, and assigning responsibility.

## Principle

> A project that fails to reach funding by its deadline must either close and release eligible committed funds according to protocol, or reformulate transparently while preserving history. Reformulation does not create default individual withdrawal; funding effects follow project outcome, C005, and C017.

## Status

Project funding lifecycle rule. Extends H035. Superseded where necessary by C005 and C017.
