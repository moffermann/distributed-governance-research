# Project Creation and Publication Flow v0

## Purpose

This document freezes the first version of the project creation and publication flow.

The flow explains how a citizen or organization turns an idea into a public project that can be funded, reviewed, fiscalized, evidenced, and eventually executed.

An idea and a project are different objects. An idea can express civic demand and attract discussion or potential executors. A project is financeable only after it has accepted executor responsibility and the required validation package.

This is a v0 design and should be refined later.

## Core principle

> Creating a project means converting an idea into a public promise that is verifiable, financeable, fiscalizable, and traceable.

A project is not just a text proposal. It is a structured commitment with value, beneficiaries, responsible execution, budget, milestones, metrics, evidence, fiscalization, risks, and closure conditions.

## Main question

```text
How does an actor create, model, validate, publish, and manage a project before execution?
```

## Roles involved

The flow may involve several roles:

- proposer;
- modeler or designer;
- executor;
- fiscalizer, later;
- evidence producer, later;
- moderator, if operating mode requires it;
- community observers;
- funders.

These roles may overlap only where the protocol allows it.

Important distinction:

> An executorless public proposal is an Idea, not an open financeable project. A project draft may exist privately or internally during preparation, but it cannot be published for execution financing without an identified and accepted responsible executor.

## Flow overview

```text
1. Create idea
2. Define problem and solution
3. Declare promised value
4. Define beneficiaries
5. Define executor and related-party declarations
6. Build budget
7. Define milestones
8. Build the Project Evidential Contract
9. Define fiscalization required
10. Define threshold policy
11. Declare risks and antivalues
12. Assisted validation by rules and AI
13. Citizen preview
14. Publication as open project
15. Management of open project
```

## 1. Create idea

The actor starts with a simple entry point.

Visible button:

```text
[Crear proyecto]
```

The first screen should not be a large technical form.

Example:

```text
Crear proyecto

¿Qué quieres lograr?

[Describe tu idea]
```

Example idea:

```text
Quiero crear una escuela deportiva gratuita para niños de Maipú durante seis meses.
```

The system can offer AI assistance:

```text
Puedo ayudarte a convertir esta idea en un proyecto financiable, medible y fiscalizable.
```

If no executor is ready to accept responsibility, the idea may remain public as an Idea. It can collect followers, comments, structured objections, and associated project proposals, but it cannot receive execution funding.

## 2. Define problem and solution

The system helps structure the idea.

Questions:

```text
¿Qué problema quieres resolver?
¿Dónde ocurre?
¿A quién afecta?
¿Qué solución propones?
¿Por cuánto tiempo?
```

Example:

```text
Problema:
Niños de Maipú tienen pocas actividades deportivas gratuitas después del colegio.

Solución:
Entrenamientos gratuitos dos veces por semana durante seis meses.
```

This separates a vague idea from a project that can later be evaluated.

## 3. Declare promised value

The system asks:

```text
¿Qué valor público promete este proyecto?
```

The value icon searcher should first try to match the project to existing catalog values.

Example suggestions:

```text
👧 Infancia
⚽ Deporte
❤️ Salud
👥 Comunidad
```

The creator may accept, remove, or propose additional values.

Rule:

> A value icon is not marketing. Every accepted value creates metric and evidence obligations.

Example:

```text
⚽ Deporte
Requires sessions, participants, duration, and evidence of activity.

👧 Infancia
Requires age range, number of children, selection criteria, and beneficiary confirmation.
```

If no existing value fits, the AI value generator may propose a project-specific value with metrics and evidence requirements.

## 4. Define beneficiaries

The system forces a clear distinction among beneficiary types.

Required distinctions:

```text
Direct beneficiaries
Indirect beneficiaries
Estimated beneficiaries
Confirmed beneficiaries
```

Example:

```text
Direct beneficiaries:
80 children from Maipú aged 8 to 13.

Indirect beneficiaries:
Families and the local sports community.

Selection criteria:
Registration order, transparent places, and priority for nearby schools if the project defines that rule.
```

Weak phrases should trigger clarification.

Example weak phrase:

```text
Beneficia a toda la comunidad.
```

System response:

```text
How many people are directly benefited?
How will that be verified?
Who is only indirectly benefited?
```

## 5. Define executor

The creator chooses one of two paths.

```text
A. I or my organization will execute this project.
B. I am proposing the idea, but I need an executor.
```

### Path A — Responsible executor identified

The actor declares the executor.

Example:

```text
Executor:
Club Deportivo Los Cóndores

Type:
Organization

Responsible person:
Verified contact

I accept execution responsibility:
[Yes]
```

The executor must explicitly accept responsibility.

Executor responsibility includes:

- executing according to accepted design;
- meeting milestones;
- delivering evidence;
- responding to observations;
- declaring changes;
- accepting fiscalization;
- accepting reputation consequences.

### Path B — No executor yet

If no executor exists:

```text
Status:
Idea / call for executor.

This project cannot yet receive execution funding.
It may search for an executor, open a call, or remain as an idea until a responsible executor accepts a project design.
```

Rule:

> No responsible executor means no execution financing.

### Related-party and conflict declarations

Before publication, the project should declare relevant relationships among proposers, modelers, executors, fiscalizers, evidence producers, operators, owners, revenue recipients, funders, and beneficiaries.

This should be a structured part of project preparation, not a separate bureaucracy for ordinary users.

Example:

```text
Project:
Multi-court facility in Macul.

Declared relationship:
The proposing sports club will also use the facility during scheduled public-access hours.

Classification:
Declared low or indirect conflict.

Required safeguards:
Public access rules, beneficiary criteria, operating conditions, and independent control.
```

If the relationship is severe, the system may require reformulation, actor or supplier replacement, disbursement blocking, or rejection. If the relationship was hidden or misrepresented, it may trigger complaint review and a role-specific Responsibility Event.

## 6. Build budget

The budget should be guided and structured.

It should not be only a total amount.

Possible budget lines:

- labor or professional services;
- materials;
- equipment;
- rental or venue;
- transport;
- coordination;
- permits;
- fiscalization;
- evidence production;
- contingency;
- guarantees or retentions where applicable.

Example:

```text
Total budget:
$12.000.000

Budget lines:
- coaches
- field rental
- sports equipment
- coordination
- fiscalization and evidence
- contingency
```

The system should detect inconsistencies.

Examples:

```text
The project promises 48 sessions, but the budget includes only 12 field rentals.
```

```text
This project requires fiscalization, but the budget does not include control cost.
```

Rule:

> If a project requires financed control, the cost of control must be included and separated from executor-controlled spending.

Control work may be structured as a Control Subproject. Control selection must be protocolized, conflict-checked, risk-adjusted, and auditable; the executor cannot directly select the actor that validates its own performance.

## 7. Define milestones

The system turns the project into verifiable milestones.

Each milestone should define:

- what will happen;
- expected date or period;
- evidence required;
- responsible actor;
- reviewer or fiscalizer;
- whether the milestone triggers disbursement;
- what happens if milestone is delayed or rejected.

Milestones that affect payment should belong to a structured Disbursement Milestone plan with release amounts, partial-release rules, retentions, advance-payment protections where applicable, and evidence requirements.

Example:

```text
Milestone 1:
Beneficiary registration
Deadline: week 1
Evidence: registration list

Milestone 2:
Training starts
Deadline: week 2
Evidence: calendar, photos, attendance

Milestone 3:
Monthly execution
Deadline: months 1 to 6
Evidence: monthly attendance and activity records

Milestone 4:
Program closure
Deadline: month 6
Evidence: final report, total attendance, beneficiary confirmation
```

## 8. Build the Project Evidential Contract

For every promised value, the system requires a Project Evidential Contract.

The contract defines how society will know whether the project fulfilled its promises.

It should connect:

- promised value;
- metric or qualitative commitment;
- material information claim;
- milestone or budget line where relevant;
- evidence type;
- expected evidence source role;
- whether executor self-report is enough or corroboration is required;
- timing of evidence;
- fiscalizer or reviewer role;
- contradiction, complaint, correction, disbursement, closure, or responsibility effect where applicable;
- privacy or protected-identity rule where relevant.

Example for sports:

```text
⚽ Sports

Minimum metrics:
- number of participants
- sessions delivered
- average attendance
- program duration
- evidence of activity
```

The creator may propose alternative metrics, but the metric validator must accept them.

Example rejection:

```text
Buying 100 balls does not measure sports value.
Measure actual activity: sessions, participation, attendance, and use.
```

Evidence examples:

- attendance lists;
- photos or videos;
- calendar;
- beneficiary confirmation;
- fiscalizer report;
- field observations;
- documents.

Rule:

> There is no promised value without a reasonable way to measure and verify it.

Value verification should use a package of metrics and evidence. Activity metrics alone are insufficient when they do not reasonably demonstrate the promised value.

Citizen-facing summary:

```text
How this will be verified:
attendance records + beneficiary confirmations + fiscalizer review.
```

The technical layer should preserve the full contract.

The contract should be proportional. A small sports workshop may need attendance, photos, and beneficiary confirmation. A water-intensive industrial project may need permits, baseline measurements, technical records, independent review, affected-party evidence channels, and competent-authority boundaries.

## 9. Define required fiscalization

The system proposes or requires fiscalization according to project characteristics.

Factors:

- amount;
- risk;
- type of project;
- territory;
- vulnerable beneficiaries;
- technical complexity;
- possible irreversibility;
- need for external evidence.

Example:

```text
This project requires:
1 responsible fiscalizer
4 evidence producers
3 fiscalization reports
```

The creator may see why this is required, but cannot arbitrarily remove required control.

Rule:

> The executor does not freely define who fiscalizes it and does not directly control payment to the fiscalizer.

Executor-produced material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

## 10. Define threshold policy

The system should determine and expose the project's applicable `Threshold Policy`.

The policy explains which conditions must be completed before publication, execution-ready status, disbursement, or closure.

Possible threshold dimensions:

- execution funding;
- beneficiary or attendance commitments;
- fiscalization and control package;
- evidence producer commitments;
- technical validation;
- permits or documents;
- common-good impact declaration;
- related-party safeguards;
- tutored-scope review where the operating mode requires it;
- absence or resolution of blocking complaints.

Example:

```text
Threshold policy:
Medium public sports infrastructure.

Source:
Current protocol + tutored sports operating mode.

Conditions:
Funding target.
Accepted executor.
Permit documentation.
Independent control package.
No unresolved blocking complaint.
Tutored duplication review if configured.
```

The creator may see why thresholds apply, but cannot silently remove mandatory thresholds. If a threshold is country-specific or operating-mode-specific, the policy should identify that source.

Rule:

> Thresholds must be proportional, visible, and auditable before citizens are asked to fund or follow the project.

## 11. Declare risks and antivalues

The system should explicitly ask:

```text
What could go wrong?
Who could be excluded?
What negative effects could occur?
What execution risks exist?
How will they be mitigated?
```

Example:

```text
Declared risks:
- low attendance
- difficulty securing sports field
- delay buying equipment

Mitigation:
- beneficiary waiting list
- preliminary agreement with venue
- alternative suppliers

Possible antivalues:
- exclusion of non-registered children
- benefit concentrated in one small group
- insufficient use of resources
```

Rule:

> A serious project declares not only value, but also risks, limits, and possible negative effects.

Where relevant, the project must declare common-good impact through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. If an active common-good charter exists, the project must declare its relationship to that charter. Full common-good charter governance remains Extension v1+.

## 12. Assisted validation by rules and AI

Before publication, the system validates the project.

Validation dimensions:

- completeness;
- coherence;
- beneficiary clarity;
- value metrics;
- evidence adequacy;
- Project Evidential Contract completeness;
- budget consistency;
- milestone consistency;
- fiscalization adequacy;
- risk and antivalue declaration;
- role responsibility;
- disbursement milestone plan;
- common-good impact declaration where relevant;
- threshold policy completeness;
- duplicate or overlapping project detection;
- operating mode rules.

Possible results:

```text
Approved to publish
Requires adjustments
Weak or not verifiable
Not publishable in this state
```

Example result:

```text
Requires adjustments:

1. Beneficiaries are too vague.
2. The Project Evidential Contract lacks evidence for attendance.
3. Budget does not include fiscalization.
4. The Health value needs a metric or should be removed.
```

AI helps identify issues, but protocol rules define mandatory requirements.

Projects with unresolved critical failures in their disbursement milestone plan or threshold policy cannot be published for execution funding.

## 13. Citizen preview

Before publication, the creator sees how the project will appear to citizens.

Preview should include:

- compact card;
- project dashboard;
- value detail;
- full citizen project sheet.

Example:

```text
This is how citizens will see your project:

Escuela deportiva infantil en Maipú

👧 Infancia · ⚽ Deporte · ❤️ Salud

$0 of $12.000.000

Needs:
🛡 1 fiscalizer
📎 4 evidence producers

Threshold policy:
Medium public sports project
```

This forces the creator to see the project from the citizen perspective.

## 14. Publication as open project

Once minimum requirements are complete, the project can be published as:

```text
Open project
```

Publication does not mean execution.

Publication as an open project requires accepted executor responsibility. Executorless ideas remain Ideas or calls for executor.

Publication means the project can receive:

- funding commitments;
- fiscalizer offers;
- evidence producer commitments;
- comments;
- complaints;
- beneficiary confirmations where applicable;
- community observation.

Rule:

> Publishing opens the project for closure conditions. It does not authorize execution by itself.

## 15. Management of open project

After publication, the executor or responsible project actor sees an open project management panel.

Example:

```text
Status:
Open project

Missing:
- $4.440.000 funding
- 1 fiscalizer
- 2 evidence producers
- 4 comments pending response
- 0 blocking complaints
```

Possible actions:

- respond to questions;
- clarify information;
- upload documents;
- declare changes;
- view missing conditions;
- prepare execution;
- request reformulation when necessary;
- monitor offers from fiscalizers and evidence producers.

Limits:

- cannot erase history;
- cannot hide complaints;
- cannot freely choose the responsible fiscalizer;
- cannot change core promises without visible reformulation;
- cannot receive execution disbursement before conditions are met;
- cannot receive execution funding if the disbursement milestone plan has unresolved critical validation failures.

## Creator-side project states

Recommended states:

```text
Draft
In validation
Requires adjustments
Ready to publish
Open project
Execution-ready
In execution
Closed
Requires reformulation
Paused
Revoked
```

## Summary flow

```text
Idea
→ problem and solution
→ promised values
→ beneficiaries
→ executor
→ budget
→ milestones
→ Project Evidential Contract
→ fiscalization
→ risks and antivalues
→ validation
→ citizen preview
→ publication as open project
→ parallel closure of conditions
→ execution
```

## What this flow should not do

This flow should not:

- publish vague promises as financeable projects;
- treat an idea as a financeable project;
- allow execution funding without responsible executor;
- allow value icons without metrics;
- allow metrics without evidence;
- publish a project with a weak or missing evidential contract;
- hide control costs;
- let the executor control its own fiscalization;
- hide risks and antivalues;
- skip citizen preview;
- treat publication as execution authorization.

## Design rule

> The creation flow should make project modeling easy, but it must not let a weak promise become a financeable public project.

## Status

Accepted as Project Creation and Publication Flow v0.
