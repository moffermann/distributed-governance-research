# 07 — Core Objects, Fiscalization, Evidence, and Simplicity

## Context

This session refined the Core v0 architecture by slowing down and separating actors, roles, project attributes, fiscalization, evidence production, and citizen-facing simplicity.

The main concern that emerged was that the architecture was becoming powerful but potentially too complex for ordinary citizens. This led to the adoption of a new principle: layered complexity and citizen simplicity.

## Post-C001-C025 alignment note

This session is retained as a historical architecture distillation. Several terms were later refined by accepted contradiction resolutions C001-C025.

Current controlling rules:

- C001 separates `Idea` from `Project`: public executorless demand is an Idea, not an open financeable project.
- C002/C013 model fiscalization and evidence work through control packages and Control Subprojects, with execution funding and control-cost discovery moving in parallel.
- C007 excludes public institutions from internal Core v0 participation.
- C020 allows external tutored-scope moderation by public authorities where configured, but material decisions must become Governance Resolutions or Review Timeout Resolutions.

If this session conflicts with a C### resolution, the accepted C### resolution controls.

## 1. Actors versus roles

The project corrected an earlier conceptual mistake: actor types had been mixed with roles.

Accepted rule:

```text
Actor = who participates.
Role = what function the actor performs.
Infrastructure = technical or external component that enables the system.
```

## 2. Core actor types

Core v0 now uses only two base actor types:

```text
Citizen
Organization
```

### Citizen

The term citizen was preferred over natural person because the system is civic in nature. A natural person is not necessarily eligible to participate: for example, a minor or a foreigner without the required national identifier may be a natural person but not a citizen for this system.

### Organization

Organization was preferred as the neutral category for collective actors.

Organizations may include:

- private organizations / companies;
- nonprofit organizations / foundations;
- universities;
- clubs;
- associations;
- cooperatives;
- unions;
- community organizations;
- NGOs;
- local groups;
- other collective actors.

The type of organization is an attribute, not a separate base actor class.

Alignment note:

```text
C007 later narrowed this list for Core v0 by removing state entities from
internal participation.
```

Core v0 internal organizations are non-state actors. Public institutions remain external legal, budgetary, auditing, regulatory, infrastructure, or tutored-scope review authorities where configured.

## 3. Treasury / revenue authority

Treasury, tax authorities, or revenue authorities are not core civic actors inside the system.

They are external or infrastructural integrations unless an implementing country chooses otherwise.

Possible external functions include:

- informing assignable balances;
- receiving or transmitting tax/budget data;
- supporting custody or disbursement;
- enabling financial traceability.

They do not decide project value, approve ordinary projects, fiscalize outcomes, or participate in governance by default.

## 4. Roles

The accepted role list includes:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- funder;
- voter;
- delegator;
- delegate;
- protocol-defined moderator where applicable;
- administrator where authorized by protocol or country implementation;
- complainant / denunciante;
- evaluator;
- commenter;
- beneficiary;
- affected party;
- technical assistant;
- evidence producer.

## 5. Role accumulation

Roles are accumulable by default.

A citizen or organization may hold multiple roles across different projects or processes.

However, role accumulation is limited where there is conflict of interest or a control relationship.

Minimum incompatibilities:

- executor should not fiscalize its own project;
- fiscalizer should not fiscalize a project where it has direct economic interest;
- a public authority performing external tutored-scope review should not become an internal project proposer, executor, fiscalizer, ordinary moderator, or competitor;
- technical administrator should not alter substantive rules without proper authorization;
- delegate must act within accepted delegation scope;
- proposer, modeler, and executor may coincide, but this must be transparent.

## 6. Project object

The project is the central operational object.

Accepted definition:

> A project is the basic operational and financeable unit of the system. It is a concrete proposal for public or social action that declares value, beneficiaries, required resources, responsible execution, execution plan, measurement, evidence, fiscalization, risks, externalities, and antivalues.

Core distinction:

```text
A project is funded.
A common-good charter is approved.
```

## 7. Executor requirement

A project draft may exist privately or internally while being prepared.

However, public executorless demand should be modeled as an `Idea`, not as an open financeable project. A project may not be published for execution financing without an identified and accepted responsible executor.

Reason:

```text
No executor → no accountable party → no enforceable milestones → no evidence obligation → no reputational consequence.
```

Example:

```text
Public demand:
  More sports opportunities for children in Maipú.

Current object:
  Idea.

Financeable project:
  Basketball program for 80 children in Maipú, accepted by a responsible executor with budget, milestones, evidence, fiscalization, and disbursement plan.
```

## 8. Modeler, executor, and fiscalizer as project attributes

Modeler, executor, and fiscalizer are project role attributes for traceability.

They do not automatically share the same reputational responsibility for the project outcome.

Accepted distinction:

```text
Modeler:
  reputation associated with design quality.

Executor:
  reputation associated with execution performance after accepting the design.

Fiscalizer:
  reputation associated with quality, independence, and timeliness of fiscalization.
```

The executor is responsible for reviewing and accepting the design before seeking execution financing.

Once the executor accepts the design, execution responsibility belongs to the executor.

## 9. Fiscalization funding

Fiscalization should be financed as part of the project's total control cost, but the executor should not control that money.

Possible budget separation:

```text
execution budget
responsible fiscalization budget
evidence mission budget
contingency / extraordinary review budget
guarantees or retentions
```

The executor should not directly hire, appoint, or pay the actor responsible for validating its own performance.

## 10. Fiscalization offers

For projects that require financed fiscalization, the system may open fiscalization offers, evidence-producer offers, and control-cost discovery in parallel with execution funding.

Fiscalizers submit offers describing:

- methodology;
- budget;
- travel/logistics costs;
- technical requirements;
- deliverables;
- timeline;
- declared conflicts;
- relevant reputation or qualifications.

This helps discover the real cost of fiscalization, especially for remote or extreme-zone projects.

However, a simple rule where the first funded fiscalizer wins is vulnerable to capture. C002 and C013 later refined this into a control package / Control Subproject model. Higher-risk projects require admissibility rules, competition windows, observations, conflict checks, and possibly reputation or eligibility requirements.

Alignment note:

```text
Execution funding may close before the control package is fully selected.
Execution cannot begin until both execution funding and the minimum control package are closed.
```

## 11. Open fiscalization versus responsible fiscalization

The architecture allows any citizen or organization to participate in fiscalization broadly, but this does not mean anyone can be the sole responsible fiscalizer of any project.

Accepted distinction:

```text
Open observation:
  anyone can observe, comment, denounce, or submit evidence.

Evidence production:
  actors can collect evidence but do not validate fulfillment.

Responsible fiscalization:
  actor accountable for evaluating compliance against accepted design, KPIs, milestones, evidence, and guarantees.

Technical or reinforced fiscalization:
  required for larger, risky, complex, or specialized projects.
```

## 12. Palos blancos and hidden conflict

Hidden collusion may be impossible to fully detect.

The system should not rely on perfect conflict-of-interest detection.

Instead, it should make collusion harder, more visible, riskier, and insufficient by itself.

Controls include:

- executor does not select or directly pay fiscalizers;
- executor does not assign evidence producers;
- evidence is public and contradictable;
- repeated relationships are visible;
- suspicious patterns are flagged;
- false evidence has reputational cost;
- multiple evidence sources may be required;
- later complaints and fraud review remain possible.

## 13. Evidence commitments by funders and beneficiaries

Funders and direct beneficiaries are naturally interested in project success.

When a citizen funds a project, the system may ask whether they are willing to provide evidence during execution or after completion.

Possible evidence commitments:

- photos;
- videos;
- field observations;
- beneficiary confirmation;
- local verification;
- surveys;
- attendance confirmation;
- contradiction of false or incomplete evidence.

This creates a distributed network of possible evidence producers around the project.

## 14. Evidence producers

Evidence producers may be voluntary or paid.

They can collect evidence but do not formally validate project fulfillment.

Accepted separation:

```text
Executor:
  executes and provides required evidence.

Evidence producer:
  collects independent evidence.

Fiscalizer:
  evaluates evidence and validates compliance.
```

## 15. Paid evidence missions

Paid evidence producers should not need to create ordinary public-value projects to finance their work.

Instead, they may take paid evidence missions associated with the project, control package, or Control Subproject.

A mission of evidence is a task, not a project.

Later refinement:

```text
Evidence missions may also be represented inside a Control Subproject when the control work needs budget, methodology, assignment, deliverables, evidence, reputation, and auditability.
```

Example mission:

```text
Visit site, take georeferenced photos, record short video, interview beneficiaries, and upload evidence.
```

The mission is paid if evidence satisfies the required standards, not if the evidence favors the executor.

## 16. Evidence mission capture risk

If evidence missions are defined and assigned by the executor, they can be captured by friends or straw participants.

Accepted correction:

> Evidence missions may be associated with the project, but should not be designed or assigned at the executor's discretion.

The executor declares commitments, milestones, and locations. The system, protocol, fiscalizer, and control rules define or activate evidence needs and assignment rules.

Possible assignment rules:

- eligibility;
- absence of known conflict;
- reputation;
- proximity;
- availability;
- specialization;
- random or semi-random selection;
- rotation;
- redundancy for risky projects.

## 17. Project lifecycle concern

A proposed lifecycle for medium projects became complex: draft, design observation, executor review, risk classification, control package, tutored moderation if applicable, funding, preparation, execution, evidence, fiscalization, objection windows, disbursement, and closure.

This raised a major concern: the architecture may become too complex for national-scale citizen adoption.

## 18. Layered complexity and citizen simplicity

Accepted principle:

> The architecture may be complex, but ordinary citizen participation must remain simple.

Short formulation:

```text
Simple to participate.
Deep to audit.
Complex only for those who assume complex roles.
```

Most citizens should only need to:

- assign funding;
- support;
- delegate;
- follow;
- provide optional evidence;
- evaluate;
- report a problem.

The system should progressively disclose more detail only when the user wants to audit or assumes advanced roles.

## 19. Citizen-facing project sheet

A basic citizen should see a simplified project sheet:

- what will be done;
- where;
- who executes;
- who benefits;
- how much it costs;
- risk level;
- fiscalization included: yes/no;
- evidence required: yes/no;
- executor reputation summary;
- current project status;
- simple actions: fund, support, delegate, follow, provide evidence, report problem.

Deep details remain available but should not dominate the default experience.

## 20. Current status

The following were saved as canonical documents:

- `docs/08_ENTITY_AND_ROLE_MAP.md`
- `docs/09_PROJECT_OBJECT_MODEL.md`
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`
- `knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md`

Later canonical resolution documents also supersede or refine parts of this session:

- `docs/39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION.md`
- `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`
- `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md`
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md`

## 21. Next recommended step

Before expanding the project lifecycle further, define a simplified citizen-facing lifecycle and a technical lifecycle separately.

Suggested split:

```text
Citizen lifecycle:
  discover → understand → fund/delegate → follow → optionally evidence/evaluate

Technical lifecycle:
  design → review → control setup → funding → execution → evidence → fiscalization → closure
```

This split protects usability while preserving the deeper control architecture.
