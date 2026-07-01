# Project Object Model v0

## Purpose

This document defines the project as the central operational object of the Core v0 architecture.

## Definition

A project is the basic operational and financeable unit of the system.

An `Idea` is a separate object. It may express civic demand, gather followers, comments, structured objections, and associated projects, but it is not financeable for execution.

It is a concrete proposal for public or social action that declares:

- what value it promises to generate;
- who benefits;
- what resources it requires;
- who is responsible for execution;
- how it will be executed;
- how progress will be measured;
- what evidential contract will verify fulfillment;
- what financial assurance protects execution funding;
- how it can be fiscalized;
- what risks, externalities, or antivalues may exist.

## Core distinction

```text
A project is funded.
A common-good charter is approved.
```

A project does not require a vote to exist or to be financed. It requires financing, evidence, responsibility, and accountability.

## Minimal definition

```text
Project:
  financeable operational unit;
  created by a citizen or organization;
  associated with a public function or project classification;
  declares a Primary Responsibility Anchor, value thesis, budget, phases where applicable, KPIs, milestones, evidential contract, financial assurance profile, responsible actors, risks, and fiscalization conditions.
```

## Required executor rule

A project draft may exist privately or internally while being prepared.

However, public executorless demand should be modeled as an `Idea`, not as an open financeable project. A project should not enter execution-financing unless it has an identified and accepted responsible executor.

Reason:

```text
No executor → no accountable party → no enforceable milestones → no evidence obligation → no reputational consequence.
```

Therefore:

> Every project published for execution financing must have a responsible executor identified and accepted.

A separate project may exist for design/modeling work. In that case, the executor is the actor responsible for delivering the design, not the future execution of the designed project.

A single parent project may also combine design and execution when the design work is represented as a project phase. In that case, execution-phase funding may be collected while the design phase is pending, but it remains reserved or conditional and cannot be released for execution until the design phase deliverables pass the applicable verification gate.

## Design, acceptance, and responsibility

The modeler/designer of a project must be identified, but the operational responsibility for an execution project belongs to the executor once the executor accepts the design and publishes or submits the project for execution financing.

The executor is responsible for reviewing the design before accepting it.

Acceptance means the executor has agreed that the design is sufficiently executable and is willing to be evaluated against it.

```text
design published
→ executors review and observe
→ executor accepts design
→ executor publishes / seeks execution financing
→ operational responsibility belongs to executor
```

The executor cannot later avoid responsibility by claiming that the accepted design contained errors, risks, or antivalues that were reasonably detectable during the review and acceptance phase.

If the same actor designs and executes the project, the actor holds both roles for traceability. That accumulation is allowed when declared, but self-acceptance of the design does not replace independent design-phase verification where the Threshold Policy, related-party safeguards, risk level, or project type requires it.

## Role attributes versus reputational responsibility

A project should store role attributes such as:

- modeler / designer;
- executor;
- fiscalizer;
- proposer;
- funders;
- beneficiaries;
- affected parties.

These attributes identify who performed which function in relation to the project.

However, role attributes do not mean that every listed actor shares the same reputational responsibility for the project outcome.

The execution project's primary reputational responsibility belongs to the executor after the executor accepts the design.

The modeler is reputationally evaluated for the quality of the design and for how that design is accepted, rejected, corrected, or later shown to be defective.

The fiscalizer is reputationally evaluated for the quality, independence, timeliness, and reliability of its fiscalization work.

```text
modeler attribute → design traceability and design reputation
executor attribute → execution responsibility and project-performance reputation
fiscalizer attribute → fiscalization traceability and fiscalizer reputation
```

For phased projects, reputation remains role-specific by phase. A defective design package can affect the modeler/designer role. Failure to execute accepted construction commitments can affect the executor role. Weak verification of the design gate can affect the fiscalizer or reviewer role.

## Modeler reputation versus executor reputation

The modeler's reputation is associated with the quality of the design and with the reception that design receives from potential executors.

Modeler reputation may be affected when designs are:

- frequently rejected by executors;
- repeatedly unaccepted;
- poorly specified;
- unexecutable;
- associated with recurring design failures;
- accepted only after substantial corrections.

Executor reputation is associated with the execution project once the executor has accepted the design.

The executor is evaluated against:

- the accepted base design;
- accepted phase deliverables where applicable;
- formally approved variation records;
- declared KPIs;
- milestones;
- evidential contract and fulfillment evidence obligations;
- guarantees;
- mitigation commitments;
- fiscalization outcomes.

Unapproved variations do not erase the accepted base design or the executor's responsibility under that design.

## Project variation control

A project may change during validation, funding, or execution, but changes must be classified before they are treated as ordinary updates.

Core v0 uses H021 as the project variation control layer:

```text
Minor variation or correction:
  record or correct without changing the project promise.

Operational variation / operational reformulation:
  implementation changes while preserving the value thesis and core metrics.

Material value reformulation:
  C017 Reformulation Proposal because the value thesis, core metrics, beneficiary scope, promised result, or public utility changes.

Substitutive reformulation:
  new project or failure/closure of the original project.
```

The active Reformulation Policy defines any maximum reformulations, minimum period between reformulations, deadline effects, approval authority, and exhaustion consequences. The application records and enforces the policy; it does not impose a universal value.

Example:

```text
Changing a sports-school schedule while preserving 80 children, workshop count, and fulfillment evidence obligations may be operational.

Changing the target from 80 children to 60 children changes the value promise and must use the material value reformulation path.
```

## Project phases

A project may include `Project Phases` when different parts of the project need separate funding, deliverables, verification, or disbursement gates.

A phase is not a separate public-value project by default. It is an internal segment of the parent project.

```text
Project
→ Project Phase
→ Milestones
```

Common phase types include:

- design;
- feasibility or pre-assessment;
- construction;
- delivery or service operation;
- pilot;
- scale-up;
- post-completion monitoring.

Small, low-risk projects may use one implicit phase. The phase object should be used only when it clarifies funding, responsibility, evidence, or control.

Each explicit phase should define:

- phase purpose;
- phase budget or funding lane;
- phase deliverables;
- responsible actor or role;
- evidence and review requirements;
- readiness gate;
- dependency on prior phases;
- disbursement rules;
- failure or reformulation treatment.

### Integrated design-and-execution projects

If a project is published as `Design and Construction of Multi-court Facility in Macul`, the parent project should define at least:

```text
Phase 1:
  Design
  Deliverables:
    design package, dimensions, public-access rules, budget refinement,
    permit or compatibility requirements, risks, evidence plan.
  Gate:
    accepted / requires correction / rejected.

Phase 2:
  Construction
  Funding:
    may receive execution commitments while design is pending.
  Start condition:
    design phase accepted.
  Disbursement:
    construction milestones, evidence, fiscalization, and blocking checks.
```

Before execution funding is collected for a later phase, the parent project should declare a minimum public-value baseline. For the Macul example, this may include two usable multi-courts, declared or regulation-compatible dimensions, public access hours, accessibility and bathroom commitments where promised or required, budget-change rules, and fulfillment evidence/fiscalization requirements.

If the design phase later produces incomplete courts, wrong dimensions, no bathrooms where required, weaker public-access rules, or a materially weaker evidence plan, the construction phase cannot become execution-ready. The project enters correction, material reformulation, rejection, expiration, return, reassignment, or reconfirmation according to the active policy.

## Main project sections

### 1. Project identity

- project id;
- name;
- short description;
- full description;
- Primary Responsibility Anchor;
- secondary contributions and whether they are formal commitments or expected incidental benefits;
- public function / classification;
- territory or location;
- current state;
- creation date;
- publication date;
- funding deadline;
- phase plan where applicable;
- reformulation policy or policy reference;
- variation control history.

### 2. Actors and roles

The project references actors who hold roles.

Possible project roles:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- funder;
- beneficiary;
- affected party;
- complainant / denunciante;
- evaluator;
- commenter;
- evidence producer.

Roles are accumulable unless an incompatibility or conflict of interest applies.

The project should record which actor designed the project, which executor accepted responsibility for the execution project, and which actor is responsible for fiscalization.

These fields are role attributes for traceability. They do not override the responsibility rule: execution responsibility is assumed by the executor once the executor accepts the design.

The project should also record related-party and conflict declarations among relevant actors, including proposers, modelers, executors, fiscalizers, evidence producers, operators, owners, revenue recipients, funders, and beneficiaries.

Conflict handling is proportional:

```text
Declared low or indirect conflict:
  visible warning and traceability.

Relevant conflict:
  public-benefit safeguards and independent control.

Severe conflict:
  reformulation, actor exclusion, disbursement blocking, or rejection.

Hidden or misrepresented conflict:
  review trigger and possible Responsibility Event.
```

Example:

```text
A Macul multi-court project may be legitimate even if the proposing local club will also use the facility, provided public access rules, operating conditions, and independent control are declared.

If the executor secretly uses a related construction supplier, the issue becomes a hidden related-party conflict and may block disbursement or trigger responsibility review.
```

### 2a. Primary Responsibility Anchor

Each financeable project should declare exactly one `Primary Responsibility Anchor`.

The anchor is the main roadmap goal, public function, or public-value outcome against which the project is primarily classified, compared, funded, evaluated, fiscalized, and held accountable.

It is not the same as the full value thesis. A project may have several values, value icons, value floors, antivalue ceilings, metrics, and evidence needs. The anchor identifies the project's primary accountability center.

Examples:

```text
Sports school:
  anchor = sustained free sports activity for a defined child beneficiary group.
  secondary contributions = health, community, prevention, child development where measured.

Macul multi-court facility:
  anchor = usable public-access sports infrastructure.
  secondary contributions = sports, health, public space, community use.
```

Secondary contributions may be declared, but they must be classified as either formal commitments or expected incidental benefits. Formal secondary contributions require proportional metrics, fulfillment/control evidence, and consequence rules. Incidental benefits should not be shown as verified project promises.

If two outcomes are both independently primary, the proposal should be challenged as separate projects, project phases under one parent anchor, or a composite structure. Phases do not replace the anchor; they segment work that serves the same parent responsibility.

### 3. Value thesis

The value thesis declares the public-value promise that citizens, beneficiaries, funders, and reviewers rely on.

It should define:

- value promised;
- problem addressed;
- intended beneficiaries;
- why the project matters;
- core value commitments or metrics as value floors;
- antivalue constraints as ceilings where relevant;
- fulfillment evidence needs for each core commitment;
- fulfillment/control evidence needs for each antivalue ceiling;
- relevant source roles for fulfillment/control evidence production or corroboration;
- review method or actor where applicable;
- disbursement, closure, reformulation, complaint, or reputation consequence where applicable;
- what happens if the project is not performed;
- relevant risks or tradeoffs.

The value thesis is not merely descriptive. It is the project identity anchor for C017 reformulation, C018 value fulfillment, H022 evidence design, C010 value verification, and H012 value-antivalue governance.

The Primary Responsibility Anchor identifies the main accountability center inside the value thesis. A material change to the anchor is stronger than an ordinary metric adjustment and should normally require reformulation, renewed review, or new project classification.

### 4. KPIs

A project defines its own KPIs.

Each KPI should include:

- name;
- description;
- target;
- whether it is a value floor or antivalue ceiling;
- measurement method;
- evidence required;
- reporting frequency;
- reporting actor;
- fiscalization actor or method where applicable.

KPIs are not sufficient by themselves. Each promised value should be verified through a Value Verification Package that combines metrics, evidence, qualitative context where relevant, beneficiary signals, fiscalizer judgment, and complaint/contradiction channels.

Each core metric should map to an evidence need. The project may define the type, timing, source role, corroboration need, and consequence of missing evidence, but it should not preselect the independent evidence producers who will later verify the project.

### 4a. Project Evidential Contract

A project should define a `Project Evidential Contract`.

The evidential contract connects:

- promised value;
- Value-Antivalue Profile;
- value floors;
- antivalue ceilings;
- metrics and qualitative commitments;
- material information claims;
- milestones;
- budget lines where relevant;
- risk and antivalue declarations;
- fulfillment/control evidence types;
- fulfillment evidence needs per value commitment;
- fulfillment/control evidence needs per antivalue ceiling;
- fulfillment/control evidence source roles;
- corroboration requirements;
- fiscalizer or reviewer responsibility;
- disbursement, closure, complaint, and responsibility effects.

The contract is not a universal centralized evidence code. It is project-specific, but constrained by value-catalog requirements, protocol minimums, threshold policies, operating mode, risk, and competent-authority boundaries where applicable.

The contract defines fulfillment/control evidence needs, not preselected evidence producers. Evidence producers may later offer or commit to produce specific fulfillment/control evidence tied to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue.

Fulfillment evidence that satisfies a contract need has higher eligibility priority. Fulfillment/control evidence outside the accepted contract may still be considered when a fiscalizer, reviewer, or protocol rule treats it as equivalent, necessary, materially useful, or complementary within the available control budget.

Example:

```text
Sports school:
attendance records, beneficiary confirmations, activity photos, evidence-producer observations, and fiscalizer review.

Water-intensive infrastructure:
baseline documents, technical measurements, permit documents, expert review, affected-party channels, and competent authority boundaries.
```

Citizen-facing views should summarize the contract as "how this project will be verified." Layer 5 should preserve the full versioned contract and its changes.

### 5. Budget and financing

A project declares:

- required amount;
- phase budget or funding lane where applicable;
- currency;
- funding deadline;
- reformulation policy or policy reference;
- threshold policy or policy reference;
- amount currently financed;
- number of funders;
- funding status;
- funding closure rules.

The project should also expose social support and justified objection signals separately from funding.

Recommended signal fields:

- active support count;
- active justified objection count;
- withdrawn support count as historical context;
- withdrawn objection count as historical context;
- main objection reasons;
- whether any objection has been converted into a formal complaint.

Rules:

```text
Support:
  reversible civic signal.

Justified objection:
  reversible structured civic signal.

Funding:
  financial commitment governed by funding rules.

Complaint:
  formal review object governed by complaint rules.
```

Core funding rules:

```text
If the project reaches or exceeds its declared funding target → funding closes.
No automatic overfunding by default.
Limited supplemental control funding may exist only as designated control funding, not execution overfunding.
If the project does not reach funding by deadline → close or enter policy-governed reformulation.
After funding → no ordinary free withdrawal.
```

Funding is a commitment until project closure. If a project fails, citizen protection comes through traceability, fiscalization, complaints, guarantees, recovery, returned balances, reassignment rules, and reputation consequences.

Every execution-financeable project should declare or reference a Financial Assurance Profile. This profile is not construction-specific. It applies to care services, supply purchases, workshops, infrastructure, and any other project that receives execution funding.

For Core v0, the guarantee requirement should follow a global percentage configured by the active administrator, protocol, operating mode, or lawful country implementation rule. The proposer, designer, or executor may describe project facts, but may not choose a lower guarantee percentage, risk class, or procedural burden profile for itself.

For phased projects, funding may be phase-specific:

```text
Design funding:
  funds design deliverables only.

Execution-phase funding:
  may be committed while design is pending,
  but remains reserved until the design gate is accepted.

Control funding:
  remains separated from executor-controlled spending.
```

If a design gate fails, reserved execution funds are not released. Their treatment follows the active failure, reformulation, return, reassignment, or reconfirmation policy. This is not ordinary free withdrawal; it is a protocol-defined outcome because the condition for execution funding was not satisfied.

### 5a. Threshold policy and execution readiness

A project should declare or reference the `Threshold Policy` that defines what it must complete to become execution-ready.

Thresholds may include:

- execution funding;
- phase gate acceptance where applicable;
- Financial Assurance Profile and guarantee materialization where required;
- beneficiary or attendance commitments;
- fiscalization and control package closure;
- evidence producer commitments;
- technical validation;
- permits or required documents;
- common-good impact declaration;
- related-party safeguards;
- tutored-scope review where the operating mode requires it;
- absence or resolution of admitted blocking complaints or scoped systemic pauses.

The concrete thresholds depend on project type, public function, risk, complexity, territory, operating mode, and protocol rules. They should not be one universal formula for every project. However, H011 uses a global guarantee percentage for Core v0 financial assurance unless a later visible policy adopts objective parameter-based differentiation.

Threshold selection should not depend on proposer-selected categories that reduce guarantees, fiscalization, evidence, or document obligations. The project actor may describe facts; the active policy determines the binding threshold.

Example:

```text
Small cultural workshop:
  funding + expected attendees + basic evidence plan.

Macul multi-court facility:
  funding + executor responsibility + permit documents + control package + related-party safeguards if applicable + tutored duplication review if configured.

Strategic defense asset:
  funding + competent defense compatibility + external institutional control.
```

Citizen-facing displays should show only the applicable conditions and what is missing. The technical layer should show the policy source and audit trail.

For phased projects, execution-ready may apply to the relevant phase. A parent project may be open and collecting execution-phase commitments while a design phase is still under review, but the construction or execution phase is not execution-ready until prerequisite phase gates, control package, fulfillment evidence requirements, and blocking checks are complete.

### 6. Milestones, disbursement, and financial assurance

A project may include:

- execution milestones;
- amount associated with each milestone;
- evidence required for each milestone;
- disbursement condition;
- Financial Assurance Profile reference;
- retention rules;
- guarantees or bonds;
- guarantee materialization requirement;
- conditions for executing guarantees.

The project should also include a structured Disbursement Milestone plan with release amounts, partial-release rules, retention rules, fulfillment evidence requirements, and advance-payment protections where applicable.

Funding completion does not imply full immediate transfer to the executor. Funds may be released by milestone according to the project design.

Projects with unresolved critical failures in their disbursement milestone plan should not receive execution funding commitments. A pending design gate is not a critical failure if the phase plan, minimum public-value baseline, reserved-fund rule, and failure-treatment rule are explicit.

Where phases are used, the disbursement milestone plan should identify which milestones and releases belong to each phase. Design funds may be released against accepted design deliverables. Construction or execution funds cannot be released until the prerequisite design phase gate is accepted.

A guarantee is not materialized by executor self-report alone. The required deposit, bond, insurance, escrow, retention, or equivalent instrument should have a Guarantee Materialization Record confirmed by a lawful custodian, guarantor, insurer, bank, treasury, escrow provider, or other country-specific mechanism.

Examples:

```text
Elderly care:
  service-period release, retention, and guarantee materialization protect against abandonment or false service delivery.

School supplies:
  direct supplier payment, invoice path, delivery evidence, and retained funds protect against incomplete kit delivery.

Workshops:
  release by verified session or attendance period protects against inflated attendance or missing sessions.

Infrastructure:
  construction release remains blocked until design gate, control package, assurance, and milestone conditions are satisfied.
```

### 7. Evidence and fiscalization

The project declares:

- evidence required;
- evidential contract or contract reference;
- evidence submitted;
- observations;
- fiscalization events;
- fiscalization results;
- unresolved issues;
- mitigation requirements.

The executor should not be the only source of evidence about its own performance.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

Evidence should be evaluated against the accepted evidential contract. If the contract is weak, incomplete, or materially changed after support or funding, the issue should be visible and may require correction, reformulation, complaint review, or responsibility review depending on severity.

### 8. Risks and antivalues

A project declares:

- risks;
- possible externalities;
- declared antivalues;
- antivalue ceilings where measurable or reviewable;
- affected parties, assets, or zones;
- measurement method, timing, and required fulfillment/control evidence where applicable;
- mitigation plans;
- detected undeclared antivalues if discovered later.

Where relevant, a project must declare common-good impacts through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. If an active common-good charter exists, the project must declare its relationship to that charter. Full common-good charter governance remains Extension v1+.

Declared antivalues are normally evaluated against their ceilings through fulfillment/control evidence and fiscalization. A formal complaint is not automatic; it must be explicitly filed and processed through the complaint model.

Undeclared antivalues may affect fiscalization, correction, mitigation, compensation, disbursement, closure, role-specific reputation, systemic pause, or revocation after reviewed basis.

### 9. Relationships with other objects

A project may be linked to:

- composite program;
- common-good governance program;
- common-good charter;
- operating mode;
- complaint;
- fiscalization process;
- reputation signals, reputation inputs, reputation updates, and reputation summaries;
- delegation-generated actions;
- evidence records;
- Financial Assurance Profile;
- Guarantee Materialization Records.

Public institutions are not ordinary internal project actors in Core v0. They may appear as external legal, budgetary, auditing, regulatory, permitting, or infrastructure references, but they do not propose, execute, fiscalize, moderate, or compete for distributed project financing inside the Core v0 baseline.

## Project states

### Primary lifecycle

```text
Draft
→ Pending moderation, if operating mode requires it
→ Published / Funding
→ Funded
→ Preparation
→ Execution
→ Completed
→ Evaluated / Closed
```

### Alternative or exceptional states

```text
Rejected in moderation
Reformulated
Expired without funding
Closed
Under complaint
Paused
Revoked
```

## State definitions

### Draft

Editable and not public for funding.

### Pending moderation

Waiting for approval under a tutored or semi-open operating mode.

### Published / Funding

Visible and eligible to receive funding/support according to its operating mode and project rules.

For execution projects, publication for funding requires an identified executor that has accepted the design.

For integrated design-and-execution projects, publication may allow phase-specific funding. Execution-phase commitments may be visible and accepted before design approval only when the phase gate, minimum baseline, and fund-treatment rule are public.

Executorless public proposals remain Ideas or calls for executor, not financeable projects.

### Funded

Reached or exceeded the declared funding target. Funding closes.

In phased projects, a phase may be funded while another phase remains pending. Parent-project funding labels should distinguish `design funded`, `execution funding reserved`, `control pending`, and `execution-ready` where applicable.

### Preparation

Post-funding setup before execution begins.

For design-and-execution projects, preparation for construction includes accepted design-phase deliverables. Preparation does not authorize construction disbursement when the design gate is pending or rejected.

### Execution

Milestones are being performed and evidence is being produced.

### Completed

Execution commitments are finished.

### Evaluated / Closed

Evidence, fiscalization, reputation, and results are recorded.

## Rejection in moderation

Moderation rejection before publication is not a public punishment and should not create reputational damage by itself.

The project creator may reformulate, reclassify, or resubmit.

## Principle

> A project is a defined commitment for value creation. It can be financed for execution only when its Primary Responsibility Anchor, responsibility, value thesis, Project Evidential Contract, verification package, phase plan where applicable, disbursement milestone plan, evidence, fiscalization, and execution accountability are sufficiently explicit. Modeler, executor, and fiscalizer are project role attributes for traceability; primary reputational responsibility for execution belongs to the executor after accepting the design and is updated by verified value fulfillment, founded complaints, evidence corrections, and role-specific responsibility events.

> A design-and-execution project may be one parent project, but execution funds cannot be released against an unaudited design.

## Status

Accepted as Project Object Model v0.
