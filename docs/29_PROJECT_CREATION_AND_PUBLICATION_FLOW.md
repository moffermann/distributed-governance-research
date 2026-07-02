# Project Creation and Publication Flow v0

## Purpose

This document freezes the first version of the project creation and publication flow.

The flow explains how a citizen or organization turns an idea into a public project that can be funded, reviewed, fiscalized, evidenced, and eventually executed.

An idea and a project are different objects. An idea can express civic demand and attract discussion or potential executors. A project is financeable only after it has accepted executor responsibility and the required validation package.

This is a v0 design and should be refined later.

## Core principle

> Creating a project means converting an idea into a public promise that is verifiable, financeable, fiscalizable, and traceable.

A project is not just a text proposal. It is a structured commitment with value, beneficiaries, responsible execution, budget, milestones, metrics, evidence, fiscalization, risks, and closure conditions.

Where a project includes meaningfully different segments of work, such as design and construction, it should also define `Project Phases`. Phases create visible funding lanes, deliverables, verification gates, and disbursement boundaries inside one parent project.

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
3. Declare primary responsibility anchor and promised value
4. Check planning scope alignment
5. Define beneficiaries
6. Define executor and related-party declarations
7. Build budget
8. Define phases where relevant
9. Define milestones
10. Build the Project Evidential Contract
11. Define fiscalization required
12. Define threshold policy
13. Declare risks and antivalues
14. Assisted validation by rules and AI
15. Citizen preview
16. Publication as open project
17. Management of open project
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

## 3. Declare primary responsibility anchor and promised value

The project first needs one main accountability center:

```text
What is this project primarily responsible for delivering?
```

This is the project's Primary Responsibility Anchor. It may be a roadmap goal, public function, or public-value outcome.

Examples:

```text
Free sports school:
Primary responsibility: sustained sports activity for a defined child group.

Multi-court facility:
Primary responsibility: usable public-access sports infrastructure.
```

The system should then ask which other values the project contributes to, without letting them dilute the anchor.

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

Secondary contributions should be marked as formal commitments only when the project accepts proportional metrics, fulfillment/control evidence, and review consequences for them. Otherwise they should remain expected benefits, not verified promises.

Rule:

> A value icon is not marketing. Every accepted value creates metric, fulfillment evidence, and producer/method standard obligations where formal proof is required.

The creator should not only select a value icon. The creator should also accept the value commitments, metrics, fulfillment evidence needs, and qualification/method standards attached to that value where relevant. The fulfillment evidence needs later guide independent evidence-producer offers and fiscalizer review.

Example:

```text
⚽ Deporte
Requires sessions, participants, duration, and evidence of activity.

👧 Infancia
Requires age range, number of children, selection criteria, and beneficiary confirmation.
```

If no existing value fits, the AI value generator may propose a project-specific value with metrics and fulfillment evidence requirements.

## 4. Check planning scope alignment

Before a project can become financeable, it should reference an active Planning Scope.

The Planning Scope defines what kinds of projects are currently open to distributed financing under the relevant public function, operating mode, pilot, protocol, approved roadmap line, or country implementation rule.

Example:

```text
Public function:
Sports.

Operating mode:
Tutored.

Active Planning Scope:
Local sports infrastructure, child sports programs, club equipment renewal.
```

If the proposed project fits the active scope, it may continue through ordinary validation.

If it does not fit, the system should not treat the idea as worthless. It should show the next available path:

```text
This idea is outside the active sports planning scope.

Possible next steps:
- keep it as an Idea;
- reclassify under another active public function;
- reformulate the project;
- use it as input for a future planning-scope proposal.
```

In tutored mode, the competent authority may define or review planning scope. Material scope decisions should create a Governance Resolution or review trace under C020.

## 5. Define beneficiaries

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

## 6. Define executor

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

## 7. Build budget

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
- guarantees or retentions where applicable;
- Financial Assurance Profile.

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

The system should also calculate the applicable financial assurance requirement from the active H011 rule. For Core v0, this means applying the configured global guarantee percentage to the eligible execution budget or phase budget.

The proposer, designer, or executor may explain budget facts and advance-payment needs, but should not choose the guarantee percentage, risk class, or procedural burden profile that lowers its own obligations.

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

## 8. Define phases where relevant

Most small projects can proceed with one implicit phase.

Explicit `Project Phases` should be used when the project has distinct segments with different deliverables, funding, verification, or disbursement gates.

Examples:

- design then construction;
- feasibility then execution;
- pilot then scale-up;
- delivery then post-completion monitoring.

Each explicit phase should define:

- purpose;
- budget or funding lane;
- deliverables;
- responsible actor or role;
- evidence and review requirements;
- readiness gate;
- dependency on prior phases;
- failure or reformulation treatment.

### Integrated design-and-execution project

A single parent project may combine design and execution.

Example:

```text
Project:
Design and Construction of Multi-court Facility in Macul.

Phase 1:
Design.

Phase 2:
Construction.
```

The construction phase may receive funding commitments while the design phase is still pending, but those funds remain reserved. They cannot be released for construction until the design package is accepted.

The project should declare a minimum public-value baseline before construction funding is collected.

Example baseline:

```text
Macul multi-court facility:
- two usable multi-courts;
- declared or regulation-compatible dimensions;
- public access hours;
- accessibility and bathroom commitments where promised or required;
- budget-change rule;
- construction milestones;
- evidence and fiscalization requirements.
```

If the design phase later produces incomplete courts, wrong dimensions, no bathrooms where required, weaker public access, or a weaker evidence plan, the construction phase cannot become execution-ready. The project must enter correction, material reformulation, rejection, expiration, return, reassignment, or reconfirmation according to the active policy.

Rule:

> A design-and-execution project may be one parent project, but execution money cannot be released against an unaudited design.

## 9. Define milestones

The system turns the project into verifiable milestones.

Each milestone should define:

- what will happen;
- expected date or period;
- evidence required;
- responsible actor;
- reviewer or fiscalizer;
- whether the milestone triggers disbursement;
- what happens if milestone is delayed or rejected.

Milestones that affect payment should belong to a structured Disbursement Milestone plan with release amounts, partial-release rules, retentions, advance-payment protections where applicable, and fulfillment evidence requirements.

Where a milestone depends on a hard KPI, the plan should also identify the required evidence producer qualification and method standard before funding begins.

Example:

```text
Milestone 1:
Beneficiary registration
Deadline: week 1
Fulfillment evidence: registration list

Milestone 2:
Training starts
Deadline: week 2
Fulfillment evidence: calendar, photos, attendance

Milestone 3:
Monthly execution
Deadline: months 1 to 6
Fulfillment evidence: monthly attendance and activity records

Milestone 4:
Program closure
Deadline: month 6
Fulfillment evidence: final report, total attendance, beneficiary confirmation
```

## 10. Build the Project Evidential Contract

For every promised value, the system requires a Project Evidential Contract.

The contract defines how society will know whether the project fulfilled its promises.

It should connect:

- promised value;
- metric or qualitative commitment;
- material information claim;
- milestone or budget line where relevant;
- fulfillment evidence need;
- expected fulfillment/control evidence source role or corroboration path;
- required producer qualification, method, instrument/tool, metadata, chain-of-custody, and report standards where formal proof is required;
- whether executor self-report is enough or corroboration is required;
- timing of evidence;
- fiscalizer or reviewer role;
- contradiction, complaint, correction, disbursement, closure, or responsibility effect where applicable;
- privacy or protected-identity rule where relevant.

The contract defines fulfillment evidence needs, not preselected evidence producers. The creator, modeler, or executor should not control who later produces independent fulfillment evidence for its own claims. For hard KPIs, the contract should define the kind of qualified producer and method required, such as technical measurement, certified inspection, laboratory report, valid survey method, or professional review.

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

Evidence producers may later submit offers or commitments that identify which value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue their evidence will address.

Where formal proof is claimed, offers should also identify the producer's qualification basis, proposed method, instruments or tools, calibration or validation basis where applicable, required metadata, chain-of-custody treatment where applicable, and report deliverables.

Eligibility priority:

```text
Contract-matched fulfillment evidence need:
  high priority when the offer also satisfies the required qualification and method standard.

Equivalent or materially useful unexpected evidence:
  medium priority, if accepted by fiscalizer, reviewer, or protocol rule.

Supplemental evidence outside the contract:
  lower priority and dependent on available control budget.
```

Rule:

> There is no promised value without a reasonable way to measure and verify it.

H012 adds the corresponding negative-side rule:

> There is no declared antivalue ceiling without a reasonable way to observe, measure, or review whether the project stays below it.

Value verification should use a package of metrics and evidence. Activity metrics alone are insufficient when they do not reasonably demonstrate the promised value.

Citizen-facing summary:

```text
How this will be verified:
attendance records + beneficiary confirmations + fiscalizer review.
```

The technical layer should preserve the full contract.

The contract should be proportional. A small sports workshop may need attendance, photos, and beneficiary confirmation. A water-intensive industrial project may need permits, baseline measurements, technical records, independent review, affected-party evidence channels, and competent-authority boundaries.

For phased projects, the contract should identify which evidence applies to each phase.

Where the active Threshold Policy requires affected-party legitimacy conditions, the project or phase should include a `Required Evidence Package` with `Readiness Evidence` needs for affected-party mapping and consultation. This may include plan presentation, field visit records, meeting minutes, asynchronous project-page observations, survey results, neighborhood-organization evidence, unresolved objections, and independent corroboration by an eligible evidence producer, fiscalizer, reviewer, or competent authority.

This evidence is not a popularity vote and does not automatically prove final fulfillment. It can be required before execution-ready status, and later affected-party observations may become fulfillment/control evidence for declared values or antivalues such as access, noise, safety, service availability, or public-use commitments.

Example:

```text
Design phase:
design package, dimensions, public-access conditions, budget refinement, affected-party map, readiness consultation evidence, permit or compatibility requirements, and reviewer acceptance.

Construction phase:
georeferenced construction evidence, fiscalizer visits, budget-line evidence, completion proof, public-use evidence, and beneficiary or community observations.
```

## 11. Define required fiscalization

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

> The executor does not freely define who fiscalizes it and does not directly control payment to the fiscalizer or evidence producer.

Executor-produced material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources. Hard KPI evidence requires qualified producers and adequate methods where the accepted evidence need requires it.

## 12. Define threshold policy

The system should determine and expose the project's applicable `Threshold Policy`.

The policy explains which conditions must be completed before publication, execution-ready status, disbursement, or closure.

The policy should also expose the project's `Procedural Burden Profile` under H020. This defines how deep the required documents, evidence, guarantees, fiscalization, admissibility review, and technical checks must be.

Under H011, the Threshold Policy should also expose the project's Financial Assurance Profile or assurance requirement. Required guarantees or equivalent instruments must be confirmed through a Guarantee Materialization Record before the affected project or phase becomes execution-ready.

Possible threshold dimensions:

- execution funding;
- planning scope alignment;
- required evidence package completeness;
- phase gate acceptance where applicable;
- affected-party mapping or consultation evidence where applicable;
- beneficiary or attendance commitments;
- fiscalization and control package;
- evidence producer commitments;
- evidence producer qualification and method standards where formal proof is required;
- technical validation;
- permits or documents;
- procedural burden profile;
- financial assurance and guarantee materialization;
- admissibility review where required;
- common-good impact declaration;
- related-party safeguards;
- tutored-scope review where the operating mode requires it;
- absence or resolution of admitted blocking complaints or scoped systemic pauses.

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
Procedural burden profile: Reinforced.
No unresolved admitted blocking complaint or scoped systemic pause.
Tutored duplication review if configured.
```

The creator may see why thresholds apply, but cannot silently remove mandatory thresholds. If a threshold is country-specific or operating-mode-specific, the policy should identify that source.

Rule:

> Thresholds must be proportional, visible, and auditable before citizens are asked to fund or follow the project.

For phased projects, the threshold policy should show phase dependencies.

Example:

```text
Construction phase cannot become execution-ready until:
- design package accepted;
- execution funding reserved or complete;
- control package accepted;
- construction disbursement milestone plan valid;
- no admitted blocking complaint or scoped systemic pause affects the design or construction baseline.
```

### Requirement discovery and admissibility review

Before publication, the system may use rules and AI to discover required documents or review needs.

Examples:

```text
Small workshop:
expected attendance, simple budget, basic evidence plan.

Macul multi-court facility:
land-use document, permit or municipal compatibility where applicable, public-access commitment, affected-party map, plan-presentation or community-consultation evidence where required, control package, tutored duplication review if configured.

Water-intensive data center:
technical documents, water-use information, environmental documents where applicable, affected-party channels, competent-authority boundary.
```

The system may validate completeness:

```text
required document uploaded
required field completed
format accepted
issuer declared
date or expiration present
project reference declared
```

But document acceptability follows the active Threshold Policy.

In tutored mode, the competent authority may review eligibility, duplication, scope, compatibility, or required documents and should publish a Governance Resolution or review trace under C020 where the decision is material.

In non-tutored or open mode, required expert or certifying review may be handled as:

```text
Control Subproject: Project Admissibility Review
```

This review is linked to the parent project, scoped, budgeted, conflict-checked, and selected under C002/C013 control rules. The executor should not privately choose or pay the reviewer that determines admissibility.

## 13. Declare risks and antivalues

The system should explicitly ask:

```text
What could go wrong?
Who could be excluded?
What negative effects could occur?
What execution risks exist?
What negative effect must the project not exceed?
Who or what zone could be affected?
How will that ceiling be measured or reviewed?
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

Antivalue ceiling:
- nighttime noise must remain below the declared dB ceiling at defined measurement points

Evidence:
- noise map by zone, measured at declared times and frequency
```

Rule:

> A serious project declares not only value floors, but also risks, limits, and antivalue ceilings where relevant.

Where relevant, the project must declare common-good impact through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. If an active common-good charter exists, the project must declare its relationship to that charter. Full common-good charter governance remains Extension v1+.

Antivalue ceilings are normally evaluated through fulfillment/control evidence and fiscalization. If a value floor is not reached or an antivalue ceiling is exceeded, the result may affect disbursement, correction, mitigation, closure, or role-specific reputation after review. It becomes a formal complaint only if an actor explicitly files a complaint under the complaint process.

## 14. Assisted validation by rules and AI

Before publication, the system validates the project.

Validation dimensions:

- completeness;
- coherence;
- Primary Responsibility Anchor clarity;
- Planning Scope alignment;
- Project Legitimacy Profile completeness where required;
- beneficiary clarity;
- value metrics;
- value floors and antivalue ceilings;
- evidence adequacy;
- producer qualification and method adequacy where formal proof is required;
- Project Evidential Contract completeness;
- budget consistency;
- milestone consistency;
- fiscalization adequacy;
- risk and antivalue declaration;
- role responsibility;
- phase plan and phase gate completeness where applicable;
- disbursement milestone plan;
- common-good impact declaration where relevant;
- threshold policy completeness;
- procedural burden profile;
- required-document completeness;
- material information claim and source-link completeness;
- approval scope, criterion source, and unresolved-condition visibility where applicable;
- admissibility-review requirement where applicable;
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
5. The construction phase has funding enabled, but the design baseline and failure-treatment rule are missing.
```

AI helps identify issues, but protocol rules define mandatory requirements.

AI may suggest documents, burden profile, review needs, and missing conditions. It should not certify that a permit, technical study, consultation process, environmental document, or legal authorization is substantively valid.

Where an existing approval, review, or criterion is used to support publication, the validation result should preserve its source, scope, date or version, and unresolved material conditions. The system should not let a creator publish a favorable citizen-facing label while burying a material limitation in a technical appendix.

Projects with unresolved critical failures in their disbursement milestone plan, phase plan, or threshold policy cannot be published for execution funding commitments. A pending design gate is not a critical failure if the phase plan, minimum public-value baseline, reserved-fund rule, and failure-treatment rule are explicit.

## 15. Citizen preview

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

Warnings:
consultation evidence pending
```

The preview should also show source-linked approval or review status where material.

Example:

```text
Design and Construction of Multi-court Facility in Macul

Approval status:
Design review accepted with conditions.

Still pending:
Bathroom/accessibility evidence and public-access rules.
```

For phased projects, the preview should show phase status without exposing unnecessary technical detail.

Example:

```text
Design and Construction of Multi-court Facility in Macul

Phases:
Design: funding open / deliverables pending.
Construction: funding can be reserved; release blocked until design accepted.

How this protects your contribution:
construction funds are not released if the design fails the public baseline.
```

This forces the creator to see the project from the citizen perspective.

## 16. Publication as open project

Once minimum requirements are complete, the project can be published as:

```text
Open project
```

Publication does not mean execution.

Publication as an open project requires accepted executor responsibility. Executorless ideas remain Ideas or calls for executor.

Publication means the project can receive:

- funding commitments;
- phase-specific funding commitments where applicable;
- fiscalizer offers;
- evidence producer commitments;
- comments;
- complaints;
- beneficiary confirmations where applicable;
- community observation.

Rule:

> Publishing opens the project for closure conditions. It does not authorize execution by itself.

## 17. Management of open project

After publication, the executor or responsible project actor sees an open project management panel.

Example:

```text
Status:
Open project

Missing:
- $4.440.000 funding
- design phase review, if applicable
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
- cannot receive execution disbursement before phase gates and conditions are met;
- cannot receive execution funding commitments if the disbursement milestone plan, phase plan, or fund-treatment rule has unresolved critical validation failures.

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
→ Primary Responsibility Anchor
→ Planning Scope alignment
→ promised values
→ beneficiaries
→ executor
→ budget
→ phases where relevant
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
- publish a project without one clear Primary Responsibility Anchor;
- publish a financeable project outside the active Planning Scope by default;
- let secondary contributions hide what the project is primarily funded to deliver;
- treat an idea as a financeable project;
- allow execution funding without responsible executor;
- allow value icons without metrics;
- allow metrics without evidence;
- allow hard KPI evidence without required producer qualification and method standards;
- publish a project with a weak or missing evidential contract;
- hide phase gates in design-and-execution projects;
- release construction funds against an unaudited design;
- hide control costs;
- let the executor control its own fiscalization;
- hide risks and antivalues;
- skip citizen preview;
- treat publication as execution authorization.

## Design rule

> The creation flow should make project modeling easy, but it must not let a weak promise become a financeable public project.

## Status

Accepted as Project Creation and Publication Flow v0.
