# H010 — Primary Responsibility Anchor

## Hypothesis

Every financeable project in a distributed planning and resource allocation system should declare exactly one `Primary Responsibility Anchor`.

The anchor is the main roadmap goal, public function, or public-value outcome against which the project is primarily classified, compared, funded, evaluated, fiscalized, and held accountable.

A project may declare secondary contributions, but those contributions must not dilute the primary responsibility anchor.

## Rationale

The earlier version of this hypothesis used the phrase "one primary goal." That phrase captured the correct accountability intuition, but it can be misleading in the current v0 architecture.

Core v0 now distinguishes:

- value thesis;
- value icons;
- value floors;
- antivalue ceilings;
- Project Evidential Contract;
- project phases;
- milestones;
- contextualized fulfillment/control evidence;
- role-specific reputation.

A project may legitimately create several forms of value. For example, a free sports school may contribute to sport, childhood, health, community, and prevention. The system should not force such a project to pretend it has only one value.

The failure mode is different: a project should not use many values, goals, or benefits to avoid a clear accountability question.

The system needs to know:

```text
What is this project primarily responsible for delivering?
```

## Rule

A financeable project must declare:

- one Primary Responsibility Anchor;
- the roadmap goal, public function, or territory/scope level it primarily attaches to;
- secondary contributions, if any;
- which secondary contributions are formal commitments and which are merely expected incidental benefits;
- the value thesis and value floors that express the anchor;
- the fulfillment/control evidence needs that verify the anchor;
- the consequences of failing the anchor;
- the split, phase, or subproject rationale where multiple outcomes appear equally primary.

## Boundary with value thesis

The Primary Responsibility Anchor is not the whole value thesis.

The value thesis may contain several values, beneficiaries, metrics, value floors, antivalue ceilings, and evidence obligations.

The anchor identifies the primary accountability center inside that broader thesis.

Example:

```text
Project:
Free sports school for children in Maipu.

Primary Responsibility Anchor:
Deliver sustained free sports activity for a defined group of children.

Formal secondary contributions:
Health and community participation, if measured and evidenced.

Incidental benefits:
Possible neighborhood cohesion or crime prevention, unless the project formally promises and verifies those outcomes.
```

## Secondary contributions

Secondary contributions may be declared when they are real and relevant.

However:

- a secondary contribution that is only expected should be described as such;
- a secondary contribution shown as a formal value promise should have proportional metrics or qualitative commitments;
- formal secondary contributions should connect to fulfillment/control evidence where relevant;
- secondary contributions should not replace the accountability attached to the anchor;
- reputation and closure should distinguish anchor failure from weaker or unverified incidental benefits.

Rule:

> Secondary contributions may enrich the project, but they cannot hide what the project was primarily funded to deliver.

## Splitting rule

If a project has two or more outcomes that are each independently primary, the project should normally be split, phased, or represented as a composite structure depending on the relationship among the outcomes.

Use a separate project when each outcome has:

- a separable public-value result;
- a separable budget;
- a separable executor responsibility;
- a separable beneficiary or affected scope;
- distinct fulfillment/control evidence;
- distinct disbursement or closure logic;
- distinct reputation consequences.

Use project phases when the work is sequential and serves the same parent anchor.

Use a composite program only when several child projects are genuinely interdependent and the program layer is needed to coordinate them.

## Project phases

Project phases do not replace the Primary Responsibility Anchor.

A design-and-execution project can be one parent project when both phases serve the same anchor.

Example:

```text
Project:
Design and Construction of Multi-court Facility in Macul.

Primary Responsibility Anchor:
Create usable public sports infrastructure in Macul.

Phase 1:
Design package.

Phase 2:
Construction.
```

If the same proposal also promises to operate an annual sports school, maintain a scholarship program, and provide health services, those may require separate projects or child projects because they create separate responsibilities, evidence needs, budgets, and closure rules.

## Examples

### Sports school

```text
Anchor:
Deliver 48 free sports sessions to 80 children.

Secondary contributions:
Health, community, child development.

Evidence:
attendance, session records, beneficiary confirmation, fiscalizer review.
```

The project is not split merely because it creates several kinds of value.

### Multi-court facility

```text
Anchor:
Deliver usable public-access sports infrastructure.

Secondary contributions:
Sports, health, public space, community use.

Evidence:
accepted design, dimensions, construction milestones, public-access conditions,
completion evidence, fiscalizer review.
```

The project may have design and construction phases, but still one parent anchor.

### Infrastructure plus operation

```text
Project package:
Build a sports facility and operate a two-year sports school.
```

This should be challenged. Construction and operation may require different budgets, executors, evidence, risks, and reputation consequences. They may need separate projects or a parent/child structure rather than one overbroad project.

## Citizen-facing simplification

Ordinary citizens should not need to see the full technical distinction.

Citizen-facing layers can show:

```text
Main responsibility:
Usable public sports infrastructure.

Also contributes to:
Sports, childhood, community, health.

How this will be verified:
design gate, construction milestones, public-access evidence, fiscalizer review.
```

Layer 5 preserves the full relationship among anchor, value thesis, value floors, secondary contributions, evidence, phases, disbursement, closure, and reputation.

## Failure modes prevented

The Primary Responsibility Anchor reduces:

- vague projects that promise too much;
- marketing-style value inflation;
- difficulty comparing similar projects;
- unclear KPI selection;
- weak fiscalization scope;
- hidden material reformulation;
- reputation effects detached from role responsibility;
- combining unrelated budgets into one confusing project.

## Residual risks

- Some projects will have genuinely intertwined public-value outcomes.
- The boundary between formal secondary contribution and incidental benefit may be contested.
- Splitting projects too aggressively could create bureaucracy.
- Keeping projects too broad could hide failure.

The v0 rule should therefore be applied through proportional validation and review, not by automatic AI splitting.

## Status

Aligned Core v0 accountability hypothesis. H010 defines the Primary Responsibility Anchor as the project-level accountability center that connects roadmap attachment, value thesis, Project Evidential Contract, phase structure, disbursement, closure, and role-specific reputation.
