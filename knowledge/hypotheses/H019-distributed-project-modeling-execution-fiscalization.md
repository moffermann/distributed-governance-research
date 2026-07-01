# H019 — Distributed Project Modeling, Execution, and Fiscalization

## Hypothesis

A distributed governance ecosystem should separate the functions of project modeling, project execution, and project fiscalization. These functions can be performed by different specialized actors with separate reputations and responsibilities.

When a project combines design and execution in a single parent project, Core v0 should represent the sequence through `Project Phases`. A phase is an internal project segment with its own funding lane, deliverables, verification gate, fiscalization or review rule, and disbursement boundary where needed.

## Rationale

Today, public institutions often concentrate many functions: diagnosis, design, financing, execution, supervision, and evaluation. This creates conflicts of interest, weak accountability, and limited competition.

A distributed architecture can separate these roles without forcing artificial fragmentation. A company may legitimately design and execute the same project, including through related companies in a holding, if the relationship is declared and the control layer remains independent.

The failure mode is not role accumulation by itself. The failure mode is allowing citizens to fund or release execution money for a design that was not yet inspectable, auditable, or checked against the value promise.

Example:

```text
Project:
  Design and Construction of Multi-court Facility in Macul

Risk:
  Citizens fund the whole project believing it includes complete, public-access courts,
  but the later design produces incomplete courts, wrong dimensions, no bathrooms,
  or weaker public-access commitments.
```

Without a phase gate, citizens would have no meaningful chance to know whether the execution budget still corresponds to the project they supported.

## Roles

### 1. Project modeler / structurer

Turns a need, roadmap goal, or social value thesis into an executable project design.

The modeler should produce a minimum design package proportional to the project. Deliverables may include:

- value thesis;
- primary goal;
- secondary goals;
- KPIs or value metrics;
- budget;
- timeline;
- project phases where relevant;
- minimum public-value baseline;
- risks;
- declared antivalue;
- assurance-relevant facts or recommended safeguards;
- execution requirements;
- fiscalization criteria;
- Project Evidential Contract inputs;
- phase gate requirements where the project is staged.

### 2. Project executor

Accepts a design and assumes responsibility for implementation.

The executor reviews the design, identifies errors, observes risks, and decides whether to accept execution.

If the same actor designs and executes, the actor still occupies both roles for traceability. Self-acceptance of the design is not enough when the project type, risk, budget, related-party structure, or threshold policy requires independent design-phase verification.

The modeler may identify facts relevant to H011 financial assurance, but does not define the binding guarantee percentage or assurance requirement. Those requirements come from the active Threshold Policy, administrator, protocol, operating mode, or lawful country implementation rule.

### 3. Fiscalizer

Measures whether the project fulfilled the accepted design, KPIs, guarantees, mitigation measures, phase deliverables, and relevant commitments.

The fiscalizer or competent reviewer may also verify design-phase deliverables when a later execution phase depends on them.

## Project Phase

A `Project Phase` is an internal segment of a parent project.

It is not a separate public-value project by default and it is not the same as a milestone.

```text
Project
  -> may have Project Phases
  -> each phase may have milestones
```

Phases are used when a project needs a meaningful gate between different kinds of work, funding, evidence, or risk.

Common examples:

- design;
- feasibility or pre-assessment;
- construction;
- delivery or service operation;
- pilot;
- scale-up;
- post-completion monitoring.

For small low-risk projects, a project may have only one implicit phase. Core v0 should not force ordinary workshops, cultural events, or simple services into heavy phase structures.

## Design and execution in one parent project

A single parent project may combine design and execution.

Accepted rule:

```text
Design and execution may be part of one project,
but execution funds cannot be released
and the execution phase cannot become execution-ready
until the required design phase deliverables are accepted.
```

This allows execution funding commitments to accumulate while design work is produced, without letting the executor spend execution money against an unaudited design.

Recommended structure:

```text
Parent project:
  Design and Construction of Multi-court Facility in Macul

Phase 1:
  Design
  Funding lane: design budget
  Deliverables: design package, public-value baseline, construction budget, risks, evidence plan
  Gate: design accepted / requires correction / rejected

Phase 2:
  Construction
  Funding lane: execution budget, possibly funded in parallel but reserved
  Start condition: design phase accepted
  Disbursement: construction milestones, evidence, fiscalization
```

## Funding treatment by phase

Project phases create phase-specific funding treatment.

Design funding may be released only against design deliverables.

Execution funding may be collected in parallel, but it remains reserved or conditionally committed while the required design gate is pending.

If the design phase is accepted, execution funding may continue toward construction readiness under the normal threshold and control rules.

If the design phase is rejected, materially weakens the promised value, or fails to satisfy the minimum public-value baseline, execution funds are not released to construction. The project must enter correction, reformulation, rejection, expiration, return, reassignment, or reconfirmation according to the active policy.

This is not ordinary free withdrawal by funders. It is a protocol-defined failure or reformulation outcome because the condition under which execution funding was committed was not met.

## Minimum public-value baseline

For integrated design-and-execution projects, the project should declare a minimum public-value baseline before execution funding is collected.

Example:

```text
Macul multi-court facility baseline:
  two usable multi-courts
  declared or regulation-compatible dimensions
  public access hours
  accessibility and bathroom commitments where promised or required
  construction budget ceiling or budget-change rule
  safety and durability commitments
  evidence and fiscalization requirements
```

The design phase is evaluated against this baseline.

If the final design removes bathrooms that were required, changes court dimensions materially, reduces public access, or weakens fulfillment evidence requirements, this is not a minor correction. It is a design failure or material reformulation under H021/C017.

## Open executor review phase

After a design is published, multiple potential executors may review it, make observations, detect errors, identify antivalue, or accept it.

Observations should be public and visible to all potential executors.

A potential executor may retract acceptance if later observations reveal problems.

After a defined review period, executors still in accepted status may publish or compete to execute the project.

For integrated design-and-execution projects, the open review may be replaced or supplemented by a design-phase verification gate when the executor and modeler are the same actor or related actors.

## Responsibility transfer

When an executor accepts a design after the open review phase, operational responsibility transfers to the executor.

The executor cannot later claim ignorance of errors, risks, or antivalue that were reasonably detectable during review.

If the executor also designed the project, it may carry both design responsibility and execution responsibility. The responsibility event should remain role-specific:

```text
bad design package -> modeler/designer responsibility
failure to execute accepted design -> executor responsibility
weak or conflicted verification -> fiscalizer or reviewer responsibility
```

## Related-party design and execution

The same company, a related company, or a holding-linked company may design and execute a project when the relationship is declared and classified under H028.

This does not automatically invalidate the project.

It may require:

- visible relationship declaration;
- independent design-phase verification;
- independent fiscalization;
- public-benefit safeguards;
- supplier or operator transparency;
- stronger evidence and disbursement gates;
- role-specific responsibility events if conflicts are hidden or misrepresented.

## Modeler reputation

The modeler is not responsible for every execution failure. However, its reputation should be affected if its designs are frequently unaccepted, unexecutable, poorly specified, associated with recurring failures, or rejected at design-phase gates.

## Executor responsibility

The executor is responsible for delivering against the base design it accepted and any accepted phase deliverables or approved variations.

## Principle

> The design is validated by informed acceptance or by the applicable design-phase verification gate. Execution responsibility begins when an executor knowingly accepts and proceeds under an accepted design.

> A design-and-execution project may be integrated, but execution money cannot be released against an unaudited design.

## Status

Aligned Core v0 hypothesis for the project-market architecture, project phases, role separation, and integrated design-and-execution projects.
