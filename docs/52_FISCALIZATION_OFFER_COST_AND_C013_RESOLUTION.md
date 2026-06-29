# Fiscalization Offer Cost and C013 Resolution v0

## Purpose

This document resolves contradiction C013 from the v0 contradiction checklist.

C013 was originally framed as the tension between fiscalization cost being part of project control cost, while fiscalizer and evidence-producer offers may need to exist before the project is fully ready for execution.

The final v0 resolution is not to serialize the process. Execution funding, fiscalization offers, evidence-producer offers, and control-cost discovery should proceed in parallel. However, execution readiness requires two distinct closures: execution budget closure and control package closure.

## Status

Accepted as the v0 resolution for C013.

## Core principle

> Project funding, fiscalizer offers, and evidence-producer offers should move in parallel, but the project cannot execute until both the execution budget and the minimum control package are closed.

Fiscalization is a control cost, but not every offer to fiscalize is itself a payable control activity.

## Description

The architecture already separates execution from control.

A project may include:

```text
execution budget
responsible fiscalization budget
evidence mission budget
contingency / extraordinary review budget
guarantees or retentions
```

The executor should not directly control the fiscalization budget, evidence mission budget, or appointment of actors responsible for validating its own performance.

At the same time, the project should not wait for every fiscalizer and evidence-producer selection before receiving citizen funding. That would make the process too slow and would recreate serial procurement logic.

This creates the C013 question:

```text
How can a project receive funding while the final control package is still being discovered?
```

## Explanation

There are four different processes that should not be collapsed into one serial step:

```text
1. Execution funding
2. Fiscalizer offer preparation
3. Evidence-producer offer preparation
4. Accepted control work
```

Execution funding covers the executor's fixed execution budget.

Fiscalizer and evidence-producer offers declare availability, methodology, estimated cost, qualifications, scope, and conflicts.

Accepted control work is the actual responsibility-bearing fiscalization and evidence production performed after selection and before/during execution.

The first three can proceed in parallel.

The fourth is paid from the project's separated control budget once selected and funded.

## Why this is a contradiction

If fiscalization and paid evidence production are mandatory control work, they must be funded.

But if the project cannot receive execution funding until the complete control package is selected, the system delays financing and may prevent projects from reaching closure quickly.

That would create several contradictions:

```text
The model wants fast citizen-driven project financing,
but serial control selection would delay project funding.
```

```text
The model separates execution from control,
but a single undifferentiated project total could hide whether citizens are funding execution or control.
```

```text
The model prevents uncontrolled money movement,
but execution cannot start merely because the execution budget was funded if the control package is still missing.
```

```text
The model protects citizen simplicity,
but citizens must still know whether their contribution goes to execution or control.
```

The contradiction is therefore not only when fiscalization becomes payable.

The contradiction is how to discover and fund control costs without slowing down execution funding or hiding what citizens are funding.

## Example

A project proposes to repair a rural bridge.

The executor requests:

```text
Execution budget: $100,000,000
```

The project also requires technical fiscalization because the work is physical, remote, and safety-relevant.

While citizens fund the execution budget, several fiscalizers and evidence producers may offer:

```text
Fiscalizer A:
  Methodology: two site visits + photo evidence + technical report
  Required budget: $1,200,000
  Travel: required
  Conflict: none declared

Fiscalizer B:
  Methodology: remote document review only
  Required budget: $250,000
  Travel: none
  Conflict: former subcontractor of executor

Fiscalizer C:
  Methodology: one site visit + beneficiary confirmation + final report
  Required budget: $850,000
  Travel: required
  Conflict: none declared

Evidence Producer 1:
  Scope: georeferenced photos and short video
  Required budget: $300,000

Evidence Producer 2:
  Scope: beneficiary confirmation and site visit
  Required budget: $350,000
```

The system should not pay all actors just for submitting offers.

The system also should not wait for the final control package before allowing execution funding to begin.

Instead:

```text
1. The execution budget receives funding.
2. Fiscalizer and evidence-producer offers arrive in parallel.
3. The system filters admissible offers.
4. When execution funding closes, new contributions fund the control budget.
5. After each control contribution, the system checks whether an admissible control package can be selected and funded.
6. When execution and control are both closed, the project becomes execution-ready.
```

## Proposed resolution

C013 is resolved by separating the funding process into parallel flows and two closures.

## Parallel flows

A published financeable project may simultaneously have:

```text
execution funding flow
fiscalizer offer flow
evidence-producer offer flow
control funding flow, once execution funding is complete or once protocol allows designated control contributions
```

The project remains transparent about which flows are open and which one a citizen contribution affects.

## Closure 1 — Execution budget closure

The execution budget is fixed by the executor before publication as a financeable project.

Example:

```text
Execution budget: $100,000,000
```

Citizen contributions first fund this execution budget unless the protocol or citizen explicitly supports a control-designated contribution.

When the execution budget reaches its target, the project enters:

```text
Execution-funded / control pending
```

This does not authorize execution.

It only means the executor's budget has been funded.

## Closure 2 — Control package closure

After the execution budget is funded, new ordinary contributions go to the separated control budget.

The control package may include:

```text
responsible fiscalizer
evidence producers
evidence missions
extraordinary review reserve
technical review, if required
```

After each new control contribution, the system checks whether the available control budget can fund an admissible package.

If yes, the system selects the package according to transparent rules.

If no, the project remains funded for execution but pending control closure.

## Supplemental control funding after minimum closure

Once the minimum admissible control package is funded, selected, and accepted, the project may accept additional control-only contributions under protocol limits.

This is not ordinary project overfunding.

Supplemental control funding:

- does not fund the executor;
- does not increase the execution budget;
- does not expand the project scope;
- does not automatically delay or block execution;
- must remain separate from execution funding;
- must follow the same independence, admissibility, conflict-check, and audit-trail rules as other control work.

Core v0 caps supplemental control:

```text
primary fiscalizer: maximum 1
secondary fiscalizer / fiscalization auditor: maximum 1
additional evidence producers: only for distinct or complementary evidence needs
```

The secondary fiscalizer or fiscalization auditor is a control actor that reviews, contrasts, or audits the primary fiscalization. It does not replace the primary fiscalizer and does not block execution by itself. If it detects a serious issue, the issue must enter the ordinary complaint, extraordinary review, pause, blocking, or disbursement-control path.

Additional evidence producers may be funded only when the proposed evidence is materially different from or complementary to already accepted evidence. The system should not fund repeated evidence production when it adds no meaningful verification value.

Recommended priority rule:

```text
If available supplemental funding can cover the secondary fiscalizer and an admissible secondary offer exists, it may fund that role.
If it cannot cover the secondary fiscalizer but can cover a distinct admissible evidence mission, it may fund that evidence mission.
If there is enough evidence and no distinct evidence offer is admissible, reserve the supplemental control balance toward the secondary fiscalizer.
If the project already has both primary and secondary fiscalization and no distinct evidence need remains, reject new supplemental control contributions.
```

## Admissible control package

The system should not choose the cheapest package automatically.

A control package is admissible only if it satisfies the minimum control requirements defined by protocol for the project.

Relevant criteria:

```text
project amount
risk
technical complexity
territory
vulnerable beneficiaries
irreversibility
need for independent evidence
required reports
conflict-of-interest rules
minimum evidence coverage
```

A cheap offer that does not meet the minimum control requirement is not admissible.

An expensive offer that exceeds what is reasonable may be rejected, require reformulation, or wait for additional control funding.

## Lightweight offers

Fiscalizer and evidence-producer offers are unpaid and standardized by default.

They should require enough information to evaluate admissibility, but not enough work to become a professional unpaid study.

Minimum fiscalizer offer fields:

```text
actor identity
role requested
scope of fiscalization
methodology summary
estimated fiscalization budget
travel/logistics estimate
availability
qualification summary
relationship/conflict declaration
acceptance of role responsibility if selected
```

Minimum evidence-producer offer fields:

```text
actor identity
evidence type
milestone or metric covered
location or scope
required budget, if paid
availability
relationship/conflict declaration
evidence standards accepted
```

## Accepted control work

Once selected, a fiscalizer or evidence producer becomes part of an accepted control package.

The accepted control package may include:

```text
final deliverables
review calendar
evidence requirements
reporting obligations
payment schedule
replacement condition
reputation consequences
```

Payment belongs here, not at the first offer stage.

## Exceptional paid pre-assessment

Paid pre-assessment should not be required in Core v0.

It may be allowed only as an explicit exception for projects that are:

- high-risk;
- technically complex;
- remote or logistically uncertain;
- materially unsafe if mis-scoped;
- above a protocol-defined amount threshold;
- dependent on feasibility questions that cannot be answered by a lightweight offer.

Even then, it must be governed as a separate protocol-visible object, not hidden inside fiscalizer or evidence selection.

Possible object:

```text
Pre-assessment mission
```

A pre-assessment mission should include:

```text
reason
scope
maximum payable amount
selection rule
deliverable
publication rule
conflict declaration
funding source
audit event
```

## v0 rule

Recommended v0 rule:

```text
Execution funding, fiscalizer offers, and evidence-producer offers proceed in parallel.
The executor's execution budget is funded first and remains separate from the control budget.
Once execution funding closes, new ordinary contributions fund the control budget.
After each control contribution, the system checks whether an admissible control package can be selected and funded.
The project becomes execution-ready only after both execution funding and minimum control package closure.
```

## Funding treatment

The citizen must know which budget their contribution is funding.

Example before execution budget closure:

```text
Your contribution funds execution.
Execution budget: $100,000,000
Funded so far:    $74,000,000
Control:          offers open, not yet closed
```

Example after execution budget closure:

```text
Execution budget: closed
New contributions fund control.
Control budget available: $1,200,000
Minimum admissible package not yet funded.
```

Example after control closure:

```text
Execution budget:              $100,000,000
Responsible fiscalization:        $900,000
Evidence missions:                $650,000
Extraordinary review reserve:     $250,000
Total funded:                 $101,800,000
Status: execution-ready
```

Example after supplemental control funding:

```text
Execution budget:              closed
Minimum control package:       closed
Supplemental control:          funding secondary fiscalization
Execution status:              execution-ready, not blocked by supplemental funding
```

The citizen should not see the fiscalization or evidence cost as an unrelated fee.

They should see it as part of the cost of making the project auditable.

## Relationship with execution-ready state

A project should not become execution-ready merely because execution funding closed.

The sequence should be:

```text
1. Project published with fixed execution budget.
2. Execution funding opens.
3. Fiscalizer and evidence-producer offers open in parallel.
4. Execution funding reaches target.
5. New ordinary contributions fund control.
6. After each control contribution, the system recalculates admissible packages.
7. An admissible control package is selected and funded.
8. Fiscalizer and evidence producers accept responsibility.
9. Project becomes execution-ready.
```

If execution funding closes but control funding does not close within a protocol-defined period, possible outcomes include:

```text
extend control funding window
seek additional control contributions
select a lower-cost admissible package
reduce scope and reformulate
replace fiscalizer/evidence offers
return or reassign committed funds according to funding rules
cancel or expire project
```

## Anti-spam protections

Because lightweight offers are unpaid, the system must prevent offer flooding.

Minimum safeguards:

- verified identity;
- eligibility threshold by project type;
- standardized form;
- required conflict declaration;
- maximum active offers per actor unless reputation permits more;
- offer withdrawal/expiry rules;
- public offer status;
- negative reputation for repeated bad-faith or misleading offers.

## Anti-capture protections

The executor must not solve C013 by privately paying or selecting its preferred fiscalizer or evidence producer.

Rejected rule:

```text
Executor pays a fiscalizer or evidence producer before funding and then the system accepts that actor.
```

Accepted rule:

```text
The protocol defines fiscalizer and evidence-producer admissibility and selection.
The control budget is separated from the execution budget.
The executor does not privately appoint the actors that validate its own performance.
```

## Citizen-facing explanation

The interface should keep this simple.

Before execution funding closes:

```text
This project is raising money for execution.
Fiscalizers and evidence producers may also offer to verify the project.
Execution cannot begin until the required control package is also funded and selected.
```

After execution funding closes:

```text
The execution budget is funded.
New contributions now fund the control package needed to verify execution.
The project will become ready to execute when an admissible fiscalization and evidence package is funded and accepted.
```

For complex projects:

```text
This project requires a paid pre-assessment before execution because the control cost cannot be estimated safely from the available information.

The pre-assessment has its own scope, cost limit, selection rule, and public report.
```

## C013 final resolution

C013 is resolved as follows:

```text
Do not serialize execution funding behind fiscalizer and evidence-producer selection. Allow execution funding, fiscalizer offers, and evidence-producer offers to proceed in parallel. Keep the executor's budget separate and fixed. Once execution funding closes, fund and select the minimum admissible control package. The project becomes execution-ready only when both execution and control are closed.
```

Final rule:

> A project may close execution funding before closing control funding, but it may not execute before the minimum admissible control package is selected, funded, and accepted.

Supplemental rule:

> After minimum control closure, supplemental control funding may finance at most one secondary fiscalizer or fiscalization auditor and distinct additional evidence needs. It never funds execution, never creates unlimited fiscalization, and never blocks execution automatically.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- fiscalization, evidence, and control model;
- citizen fiscalizer offer flow;
- citizen evidence production flow;
- citizen funding flow;
- project creation and publication flow;
- project lifecycle after publication flow;
- project disbursement flow;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Execution funding may close while control funding remains incomplete.
- Good fiscalizers may still consider unpaid lightweight offers unattractive.
- Cheap low-quality offers may still appear.
- Complex projects may need real pre-assessment earlier than v0 expects.
- Control budget estimates may change after execution funding closure.
- Paid pre-assessment exceptions may become a new gatekeeping layer.
- Citizens may misunderstand whether they are funding execution or control.
- Supplemental control may become harassment if unlimited.
- Wealthier groups may try to pressure projects through excessive review funding.
- Secondary fiscalization may produce conflicting conclusions that confuse citizens.
- Duplicate evidence missions may waste resources without improving verification.

## Mitigations

- show separate execution and control funding states;
- keep lightweight offers standardized and short;
- use eligibility and reputation filters;
- expose offer cost, methodology, and conflict declarations;
- recalculate admissible control packages after each control contribution;
- allow paid pre-assessment only with explicit protocol trigger, cap, scope, deliverable, and audit trail;
- prevent executor-controlled fiscalizer and evidence-producer payments;
- define expiry, extension, reformulation, return, or reassignment rules if control funding does not close;
- track bad-faith or misleading offers as responsibility events where appropriate.
- cap ordinary fiscalization at one primary and one secondary fiscalizer or fiscalization auditor;
- fund additional evidence only when it is distinct or complementary;
- reject new supplemental control contributions when fiscalization and admissible evidence needs are already saturated;
- ensure supplemental findings affect execution only through formal complaint, extraordinary review, pause, blocking, or disbursement-control rules.

## Design rule

> Funding should move fast, but execution should not move faster than control.
