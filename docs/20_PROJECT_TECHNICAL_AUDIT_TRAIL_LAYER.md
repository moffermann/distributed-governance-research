# Project Technical Audit Trail Layer v0

## Purpose

This document defines and freezes Layer 5: the technical audit trail of a project.

Layer 5 is the deepest transparency layer. It exists so that auditors, journalists, fiscalizers, researchers, institutions, and highly engaged citizens can verify what happened in a project beyond the citizen-readable summary.

Layer 5 is not the default citizen experience.

## Core principle

> Layer 5 should make the project fully auditable without forcing ordinary citizens to consume technical trace data.

## Main question

Layer 5 answers:

```text
Can everything relevant that happened in this project be technically audited?
```

## Relationship with previous layers

```text
Layer 2:
  Project dashboard.

Layer 3:
  Detail of one icon, signal, number, alert, or condition.

Layer 4:
  Full citizen-readable project sheet.

Layer 5:
  Full technical trace and audit trail.
```

Layer 5 should be reachable from Layer 4 through an explicit action such as:

```text
[View full audit trail]
```

## Audience

Layer 5 is mainly for:

- fiscalizers;
- auditors;
- journalists;
- researchers;
- public authorities and external public reviewers;
- civil society organizations;
- expert citizens;
- project reviewers;
- appeal or review bodies;
- system maintainers with appropriate permissions.

## Content areas

Layer 5 should include technical traceability for:

```text
1. Project versions
1a. Project variation and reformulation records
1b. Project phases and phase gates
2. Planning Scope, Primary Responsibility Anchor, and value thesis history
2a. Value-Antivalue Profile history
3. Metric history
4. Project evidential contract history
5. Budget history
6. Funding and custody trace
7. Milestone and disbursement trace
7a. Systemic pause records
8. Evidence archive and material information claim trace
8a. Project closure accountability trace
9. Fiscalization reports
10. Complaint and review trace
10a. Complaint admissibility / referral records
11. Civic support and justified objection trace
12. Conflict-of-interest declarations
13. Actor and role events
14. Moderation and mode decisions
15. System decisions and protocol references
16. Governance resolutions and review timeouts
17. Discovery visibility reasons
18. Data export and verification tools
```

## Audit event record minimum schema

Layer 5 should be backed by append-only `AuditEvent` records.

Every material system effect should be reconstructable as:

```text
actor or system process
role, delegation basis, authority context, or automatic-process basis
target object
affected scope
previous state or material value
new state or material value
transition label
source record
rule, threshold policy, operating mode, or protocol version applied
effect type and effect scope
visibility tier
privacy classification
timestamp
previous event or integrity reference where applicable
```

Conditional references should be attached where material:

```text
changed fields reference
rule-change object reference
implementation version
material AI assistance reference
contextualized evidence item and evidence context
material information claim
value-verification coverage status or coverage-gap reference
approval source, criterion source, approval scope, or conditional approval reference
fiscalizer eligibility and reputation profile reference
evidence producer qualification and method-fit reference
fiscalization report sufficiency reference
governance resolution or review timeout resolution
financial order, disbursement, retention, guarantee, or custody record
responsibility event, reputation input, or reputation update
protected identity request
discovery visibility reason
material warning visibility state
export snapshot
```

If an audit event is later corrected, reversed, narrowed, or superseded, the correction should create a new linked audit event. The original event should not be silently edited away.

## 1. Project versions

Show every meaningful project version.

For each version:

- version number;
- timestamp;
- actor who submitted or approved the change;
- changed fields;
- previous value;
- new value;
- reason for change;
- whether funders or participants were notified;
- whether the change required approval.

This allows the project history to be reconstructed.

## 1a. Project variation and reformulation records

Show every recorded project-change classification under H021.

For each variation record:

- project id;
- base project version;
- proposed or resulting project version where applicable;
- variation class: minor correction, operational variation, material value reformulation, or substitutive reformulation;
- actor who proposed the change;
- actor, authority, community mechanism, or protocol rule that approved or rejected it where applicable;
- reason for the change;
- original and proposed Planning Scope alignment where affected;
- original and proposed value thesis comparison;
- original and proposed Primary Responsibility Anchor comparison where affected;
- original and proposed core metric comparison;
- beneficiary, budget, milestone, disbursement, evidential contract, fiscalization, risk, antivalue, and related-party-safeguard effects;
- phase effects where applicable;
- active Reformulation Policy or policy reference;
- whether a C017 Reformulation Proposal was required;
- approval result or current review status;
- citizen-facing summary;
- notifications sent;
- linked complaint, pause, revocation, Responsibility Event, or financial order where applicable.

Examples:

```text
Operational variation:
same sports school, same 80 children, different weekly schedule.

Material value reformulation:
80 children -> 60 children because the new venue is smaller.

Evidence weakening:
attendance records and beneficiary confirmations -> executor photos only.
```

Layer 5 should make clear whether a project merely changed implementation or attempted to change the value promise that citizens funded.

## 1b. Project phases and phase gates

Track every explicit project phase.

For each phase:

- phase type and order;
- phase purpose;
- responsible actor or role;
- phase budget or funding lane;
- phase deliverables;
- minimum public-value baseline where relevant;
- prerequisite and successor phases;
- evidence and review requirements;
- phase gate decision;
- accepted, rejected, correction-required, or reformulation status;
- related milestones and disbursements;
- related funding commitments;
- citizen-facing phase summary;
- audit events and reviewer references.

Example:

```text
Project:
Design and Construction of Multi-court Facility in Macul.

Design phase:
submitted for review.

Construction phase:
funding reserved; release blocked until design accepted.
```

Layer 5 should make it impossible to hide that construction funding was reserved before the design was approved, or to release later-phase funds without the prerequisite phase gate.

## 2. Planning Scope, Primary Responsibility Anchor, and value thesis history

Track changes to the project's planning eligibility, primary accountability center, and declared values.

Examples:

- Planning Scope reference changed;
- project declared outside active scope;
- reclassification suggested;
- essential service protection status changed;
- protected floor, service-provision lane, planning-continuity target, or funding-lane treatment changed;
- underfunded protected scope indicator changed;
- Primary Responsibility Anchor edited;
- value icons added or removed;
- value thesis edited;
- beneficiary scope changed;
- promised outcome changed;
- metrics changed;
- fulfillment evidence obligations changed.

Layer 5 should make clear whether a project changed what it promised after receiving support.

For tutored or semi-open modes, Layer 5 should show the scope source and any Governance Resolution or review trace used to decide that a project is inside scope, outside scope, duplicate, or in need of reclassification.

For essential or continuity-sensitive scopes, Layer 5 should also preserve the protected floor, distributed service lane, continuity target, planning period, interruption tolerance where applicable, funding-lane treatment, underfunding indicator, and any Governance Resolution, Administrative Rule Change, or equivalent record that revised the target.

## 2a. Value-Antivalue Profile history

Track the project's accepted value floors and antivalue ceilings.

For each floor or ceiling, show:

- project version;
- floor or ceiling type;
- value commitment or negative effect controlled;
- affected beneficiaries, affected parties, zones, assets, or common goods;
- threshold: minimum for value floors, maximum for antivalue ceilings;
- measurement or review method;
- timing and frequency;
- required fulfillment/control evidence;
- evidence source roles;
- fiscalizer or reviewer method;
- mitigation, correction, compensation, reformulation, or closure path where applicable;
- disbursement, retention, responsibility, reputation, pause, or revocation consequence where applicable;
- complaint reference only where a complaint was explicitly filed;
- final evaluation status.

Layer 5 should make clear that failing a value floor or exceeding an antivalue ceiling is not automatically a complaint. It is a reviewed fulfillment/control issue that may later support a complaint if one is explicitly filed.

## 3. Metric history

Track project metrics over time.

For each metric:

- original metric;
- metric changes;
- reason for change;
- validator results;
- A004 evidence-coverage status;
- unmeasured value dimensions or metric-gaming risks identified before acceptance;
- accepted alternative metrics;
- measurement method;
- fulfillment evidence needs;
- expected source roles or corroboration paths;
- final status.

This is especially important for preventing vague or moving targets.

## 4. Project evidential contract history

Track the accepted Project Evidential Contract and every material change.

Include:

- contract version;
- value promises covered;
- metrics or qualitative commitments covered;
- material information claims covered;
- evidence-coverage matrix for value floors, formal secondary values, antivalue ceilings, material claims, and relevant metrics;
- coverage gaps, weak coverage, metric gaps, or corrections;
- fulfillment evidence needs;
- fulfillment/control evidence source roles;
- producer qualification standards where formal technical proof is required;
- method, instrument, calibration, validation, metadata, chain-of-custody, and report requirements where relevant;
- corroboration requirements;
- evidence-producer offers or commitments linked to each need where applicable;
- priority treatment for contract-matched, equivalent, unexpected, or supplemental evidence;
- fiscalizer or reviewer role;
- privacy or protected-identity rules where relevant;
- disbursement, closure, complaint, correction, or responsibility effects;
- reason for change;
- whether the change weakens, strengthens, or clarifies the previous contract;
- who proposed and approved the change;
- whether funders, beneficiaries, affected parties, or fiscalizers were notified.

Example:

```text
Original contract:
80 children verified by monthly attendance records and beneficiary confirmations.

Proposed change:
attendance photos only.

Audit concern:
material weakening of beneficiary verification; reformulation or review required.
```

Layer 5 should make it impossible to silently change how project fulfillment will be proven after citizens have funded or supported the project.

## 4a. Required evidence package history

Track the Required Evidence Package separately from the Project Evidential Contract.

Include:

- package version;
- target object: idea draft, project, project version, project phase, design package, budget line, common-good asset, affected scope, or authority route;
- source policy: Threshold Policy, phase gate, public-function rule, common-good exposure, affected-party exposure, legal/technical condition, operating mode, protocol version, or country implementation;
- RequiredEvidenceNeeds;
- expected evidence context, especially Readiness Evidence for pre-execution or pre-effect conditions;
- submitted ContextualizedEvidenceItems;
- reviewer, fiscalizer, evidence producer, authority, or corroboration path;
- completeness and sufficiency status;
- missing-condition labels shown to citizens;
- effect blocked or allowed;
- audit references.

Rule:

> Readiness Evidence can gate publication, phase acceptance, execution-ready status, disbursement, or other effects without proving final value fulfillment.

## 5. Budget history

Track budget changes and budget structure.

Include:

- original budget;
- revised budget;
- budget lines;
- changes by line;
- justification;
- approvals;
- relation to milestones;
- relation to phases where applicable;
- control cost;
- fiscalization cost;
- evidence production cost;
- guarantees or retentions;
- Financial Assurance Profile reference;
- Guarantee Materialization Record where applicable.

Layer 5 should allow reviewers to understand how the budget evolved.

## 6. Funding and custody trace

Track money status without exposing unnecessary private information.

Include:

- funding target;
- commitments;
- phase-specific funding lane where applicable;
- releases;
- returned or reassigned amounts;
- custody status;
- financial assurance status;
- guarantee materialization status where applicable;
- disbursement rules;
- release dates;
- milestone relation;
- phase-gate relation where applicable;
- public aggregate funding data;
- direct versus delegated allocation where relevant.

Privacy-protected individual funding details should follow the system's identity and privacy rules.

For design-and-execution projects, Layer 5 should distinguish:

```text
design funding released against design deliverables
construction funding reserved pending design gate
construction funding released after design acceptance
funds returned, reassigned, or reconfirmed after failed design gate
```

Layer 5 should also distinguish assurance for non-construction projects. For example, elderly care, school-supply delivery, workshops, or food support may have service-period retentions, direct supplier payment, guarantees, insurance, or equivalent instruments even though no construction occurs.

## 7. Milestone and disbursement trace

For each milestone, show:

- phase reference where applicable;
- milestone definition;
- expected date;
- actual date;
- required evidence;
- evidential contract reference;
- evidence submitted;
- fiscalizer review;
- approval or rejection;
- disbursement decision;
- prerequisite phase-gate check where applicable;
- amount released;
- comments or observations;
- delays;
- corrective actions.

Layer 5 should explain why money was or was not released.

## 7a. Systemic pause records

For each systemic pause, show:

- project;
- affected scope: whole project, phase, milestone, disbursement, budget line, contextualized evidence item, actor relationship, legal/safety condition, or closure;
- trigger: complaint admissibility/referral record, fiscalization finding, phase gate failure, contradictory evidence, authority notice, safety/legal condition, operating-mode suspension, or protocol rule;
- funding boundary: execution funding blocked, complaint review funding allowed, control funding allowed, correction funding allowed, mitigation funding allowed, referral funding allowed, or unaffected scope allowed;
- disbursement, milestone, phase gate, closure, evidence-use, or actor-scope effect;
- actor or rule that triggered it;
- reviewer/fiscalizer decision;
- rule for lifting, narrowing, maintaining, escalating, or converting it into final resolution;
- material/legal suspension reference where applicable;
- reputation status.

Layer 5 should make clear that systemic pause is a platform effect, not physical/legal suspension by itself.

## 8. Evidence archive

Layer 5 should contain the full evidence archive, subject to privacy and safety rules.

For each contextualized evidence item:

- evidence type;
- who produced it;
- role of producer;
- producer qualification basis where formal proof is claimed;
- method, protocol, instrument, tool, calibration, validation, or chain-of-custody reference where relevant;
- timestamp;
- location metadata where applicable;
- associated milestone;
- associated metric;
- associated fulfillment evidence need where applicable;
- evidential contract requirement;
- qualification/method fit status where relevant;
- review status;
- objections or contradictions;
- integrity information;
- privacy classification;
- access level.

Contextualized evidence may include documents, photos, videos, field reports, attendance records, beneficiary confirmations, fiscalizer reports, technical measurements, lab reports, survey outputs, sensor records, or other accepted evidence types.

Executor-submitted material should be distinguishable from corroborated non-executor evidence. Contextualized evidence records should show whether AI-assisted privacy review, redaction, metadata removal, or safer-publication tools were applied.

For paid or critical fulfillment/control evidence, Layer 5 should also show why the producer was eligible for the specific evidence need. The audit trail should preserve credential or accreditation references, professional or institutional competence basis, method used, instrument/tool limitations, calibration or validation references where applicable, and the producer's report limitations. This prevents a casual observation from being silently treated as formal KPI proof.

Layer 5 should also preserve material information claim traceability.

For each material claim, include where applicable:

- claim text or structured value;
- actor responsible for the claim;
- actor role at the time;
- affected project object: Planning Scope, Primary Responsibility Anchor, value thesis, metric, fulfillment evidence need, beneficiary group, budget line, milestone, contextualized evidence item, complaint, fiscalization report, risk, antivalue, or relationship declaration;
- supporting contextualized evidence;
- contradiction evidence, complaint evidence, objection, or verified-discovery reference;
- review status;
- correction history;
- AI anomaly or assistance reference, clearly labeled as assistance;
- Responsibility Event or role-specific reputation effect where review creates one.

Examples:

```text
Claim:
80 children attended.

Status:
self-reported -> disputed -> corrected.

Trace:
executor claim, parent confirmations, evidence-producer record, fiscalizer review, correction event.
```

Verified discoveries should also be traceable. The audit trail should show the discovery, the actor and protected-identity status where relevant, the claim or omission discovered, evidence used, review result, materiality finding, reward or reputation effect, and any complaint, disbursement, correction, or responsibility event that followed.

## 8a. Project closure accountability trace

Layer 5 should show the `Project Closure Accountability Record`.

For each closure record, include:

- project and project version;
- project phase where applicable;
- Planning Scope and Primary Responsibility Anchor;
- accepted Value-Antivalue Profile;
- Project Evidential Contract version;
- Required Evidence Package status where applicable;
- Project Legitimacy Profile status where required;
- value floors and antivalue ceilings evaluated;
- expected fulfillment/control evidence;
- submitted fulfillment/control evidence;
- evidence accepted, rejected, contradicted, insufficient, or accepted only as contextual material;
- EvaluationRecords by dimension;
- FiscalizationReport final reference;
- technical, financial, beneficiary, affected-party, or authority reviews where applicable;
- affected-party mapping, consultation, or observation Readiness Evidence considered where applicable;
- unresolved observations, complaints, contradictions, systemic pauses, or limitation statements;
- released, retained, returned, reassigned, recovered, or guarantee-executed funds;
- closure outcome;
- Responsibility Events;
- Reputation Inputs or no-reputation-effect findings;
- citizen-facing closure summary.

Layer 5 should make clear why a project was closed as fulfilled, partially fulfilled, unfulfilled, revoked, expired, or reformulated into a new version.

An evidence item that is dark, unlinked, missing required metadata, produced by a non-idoneous actor for the claimed hard KPI, or otherwise insufficient may remain in the archive, but the closure trace should show that it was not used as proof of fulfillment unless adequate corroboration or review accepted it for that formal effect.

## 8b. Performance history source trace

Layer 5 should show which reviewed records feed any Performance History Surface shown to citizens.

For each actor-role summary, include source references to:

- Project Closure Accountability Records;
- EvaluationRecords;
- FiscalizationReports;
- Responsibility Events;
- Reputation Summaries;
- financial closure outcomes;
- final or procedurally classified complaint outcomes;
- reviewed fulfillment/control evidence sufficiency, producer-qualification, and method-fit findings.

The trace should preserve the generic category used on the citizen-facing surface and the source records behind it.

Example:

```text
Executor evidence sufficiency pattern: usually sufficient
Sources:
- Project A closure record: sufficient
- Project B closure record: insufficient, later corrected
- Project C closure record: accepted only as contextual material
```

Layer 5 should also show comparison limits, such as small sample size, incomparable project domains, different operating modes, or materially different risk levels.

The Performance History Surface should not create formal effects by itself. Formal effects must still come from the underlying EvaluationRecords, Responsibility Events, Reputation Inputs, financial orders, complaint outcomes, or other reviewed source objects.

## 8c. Assisted deliberation context trace

Layer 5 should show which sources fed an Assisted Deliberation Context.

For each material deliberative item, include:

- context type: funding, support, justified objection, delegation, complaint review funding, reformulation review, control offer, or other material action;
- citizen-facing item text;
- source category;
- source record references;
- status: claimed, self-reported, corroborated, reviewed, disputed, contradicted, insufficient, corrected, unresolved, or AI-generated where applicable;
- AI assistance trace where material;
- correction, contradiction, or supersession history;
- final citizen-facing version.

Example:

```text
Deliberative item:
Design gate pending.

Source:
Project phase rule + Project Evidential Contract.

Status:
Reviewed project condition.

AI assistance:
AI summarized the condition from the contract. User-facing text accepted with minor wording correction.
```

The assisted context should not create formal effects by itself. Formal effects must still come from the underlying protocol rule, citizen action, EvaluationRecord, FiscalizationReport, complaint process, financial order, governance resolution, or lawful authority path.

## 9. Fiscalization reports

Include complete fiscalization records:

- fiscalization requirement and risk tier;
- fiscalizer offers submitted;
- eligibility, conflict, and admissibility results;
- fiscalizer eligibility and reputation profile for the specific assignment;
- project-specific eligibility criteria and source rule;
- comparable-project performance basis;
- current workload or availability status where material;
- repeat-relationship and dependency-concentration indicators;
- selection rule used;
- selection reason and non-selection reasons where material;
- responsible fiscalizer;
- secondary fiscalizer or fiscalization auditor where permitted;
- evidence producers;
- methodology;
- scope;
- evidence considered;
- evidence rejected or excluded;
- evidential contract reviewed;
- report sufficiency status;
- reports;
- observations;
- objections;
- conflict declarations;
- late reports;
- rejected reports;
- resignation, replacement, suspension, or removal events;
- final evaluation;
- reputation effects.

Layer 5 should make fiscalization itself auditable.

## 10. Complaint and review trace

Include the complete trace of complaints and reviews:

- complaint submitted;
- complainant role;
- issue type;
- complaint evidence attached;
- complaint review policy and version;
- required support count;
- support window start and end;
- support threshold result;
- fiscalizer quote and review-funding status;
- admissibility result;
- affected scope;
- systemic pause effect where applicable;
- external authority, court, or regulator referral where applicable;
- authority or court order where material/legal effect occurs;
- final resolution;
- reputation status: procedural signal, reviewed input, or no reputation effect.

## 10a. Complaint admissibility / referral records

For each admitted, rejected, escalated, or referred complaint, preserve the `Complaint Admissibility / Referral Record`.

Include:

- complaint reference;
- reviewer or fiscalizer;
- admissibility result;
- affected scope;
- non-blocking, blocking, or systemic-pause classification;
- execution funding, disbursement, milestone, phase gate, closure, evidence-use, or actor-scope effect;
- complaint evidence index;
- actor responses considered;
- referral package reference;
- requested material or legal measure, if any;
- rule for lifting, narrowing, maintaining, or escalating the system effect;
- authority, regulator, or court order where material/legal effect occurs;
- reputation status and final resolution reference.

Layer 5 should make clear that admissibility can create a scoped system effect, but final responsibility and material/legal suspension require the applicable reviewed basis or external competent authority.
- quote requested timestamp;
- quote deadline;
- fiscalizer or reviewer quote, scope, deliverables, cost, and conflict declaration;
- reserved review funding visibility rule;
- reserved funding activation or release;
- project effect;
- whether it was blocking;
- responses;
- review steps;
- external authority or court referral where applicable;
- resolution;
- sanctions or corrections if applicable;
- reopening or appeal history.

Layer 5 should show not only the result, but how the result was reached.

## 11. Civic support and justified objection trace

Track support and justified objection signals separately from funding and complaints.

Layer 5 should preserve:

- actor;
- signal type: support or justified objection;
- project or project version;
- objection reason where applicable;
- active, withdrawn, superseded, or converted status;
- creation timestamp;
- withdrawal timestamp where applicable;
- whether the signal affected threshold policy, visibility, review priority, or governance-resolution discussion;
- audit references.

Rules:

- active counts should exclude withdrawn signals;
- historical withdrawals remain auditable;
- support withdrawal does not withdraw committed funding;
- objection withdrawal does not erase a formal complaint or review already opened.

## 12. Conflict-of-interest declarations

Track declared and detected relationships among relevant actors.

Examples:

- executor and fiscalizer;
- fiscalizer and evidence producer;
- proposer and executor;
- funder and executor where relevant;
- moderator and project actor;
- operator, owner, revenue recipient, or beneficiary and any funded project role;
- repeated relationships across projects.

Layer 5 should show declarations, updates, proportional classification, safeguards, objections, and unresolved conflict alerts.

Classification should distinguish:

- declared low or indirect conflict;
- relevant conflict requiring public-benefit safeguards or independent control;
- severe conflict requiring reformulation, actor exclusion, disbursement blocking, or rejection;
- hidden or misrepresented conflict that may trigger complaint review and a role-specific Responsibility Event.

## 13. Actor and role events

Track role assignments and role changes.

Examples:

- proposer;
- modeler;
- executor;
- fiscalizer;
- evidence producer;
- funder;
- moderator;
- complainant;
- evaluator;
- beneficiary confirmation actor.

For each role event:

- actor;
- role;
- date;
- acceptance status;
- resignation or replacement if any;
- scope;
- conflict declarations;
- reputation-relevant outcomes.

## 14. Moderation and mode decisions

If the project is in a tutored, semi-open, suspended, or otherwise special operating mode, Layer 5 should show:

- mode at project publication;
- moderation decisions;
- reasons;
- parameters applied;
- requests for reformulation;
- classification decisions;
- approvals or rejections;
- mode changes over time.

This preserves traceability without making moderation the first citizen experience.

If a comment, complaint, contextualized evidence item, testimony, beneficiary confirmation, affected-party report, or other formal action is published or submitted under protected identity, Layer 5 should record the existence of the protected identity request, the AI-assisted or restricted-review process result where applicable, the contextual protected display identity, and any legal/safety/privacy gate action, without exposing protected personal identity to unauthorized viewers.

## 15. System decisions and protocol references

Layer 5 should show important system decisions and the rules used.

Examples:

- why project was marked open;
- why project became execution-ready;
- which threshold policy applied;
- why a threshold condition applied or did not apply;
- why a condition blocked execution;
- why a funding deadline triggered reformulation;
- why evidence was accepted or rejected;
- why an alert appeared;
- which protocol version applied.

Each important decision should reference the applicable rule or protocol version.

For material rule or implementation changes, Layer 5 should preserve:

- change type: Administrative Rule Change, System Implementation Change, or Protocol Change Proposal;
- operating mode;
- proposing actor or authority;
- rule or component affected;
- old value or behavior;
- new value or behavior;
- public reason;
- scope;
- affected project states, roles, future projects, and existing projects where applicable;
- publication date;
- effective date;
- adaptation period;
- transition rule;
- emergency justification where applicable;
- test, sandbox, simulation, migration, monitoring, or release reference where applicable;
- rollback rule or rollback version where applicable;
- citizen-facing summary;
- implementation version where applicable.

For threshold policy decisions, Layer 5 should preserve:

- project type or classification used;
- public function;
- operating mode;
- risk or complexity basis;
- procedural burden profile;
- protocol, authority, or country-implementation source;
- threshold values applied;
- required-document checklist where applicable;
- requirement discovery source, including AI assistance where material;
- document completeness status;
- document acceptability reviewer or authority where applicable;
- admissibility review status where applicable;
- affected-party mapping or consultation requirements where applicable;
- essential-service protection treatment where applicable;
- protected floor, service lane, planning-continuity target, reserve/default/non-assignable treatment, and underfunding indicator where applicable;
- Required Evidence Package requirement and status where applicable;
- Project Legitimacy Profile requirement and status where applicable;
- citizen-facing explanation;
- changes to the threshold policy after publication, if any.

## 16. Governance resolutions and review timeouts

For tutored or semi-open operating modes, Layer 5 should include public governance objects:

- Governance Resolution;
- Review Timeout Resolution;
- Administrative Rule Change where the tutored authority changes configured rules within its mandate;
- authority or responsible office;
- declared review window;
- configured timeout policy;
- decision, non-decision, or automatic effect;
- public reason;
- comments, support, objections, and follow status;
- affected project, rule, or operating mode;
- audit trail.

Tutored decisions and tutored silence should be auditable civic objects, not hidden administrative events.

## 17. Discovery visibility reasons

Layer 5 should preserve material discovery and visibility traces where they may affect funding or legitimacy.

Examples:

- urgent-slot reason;
- recommendation reason;
- list ordering mode;
- nearby-project or followed-scope reason;
- affected-party consultation-window notification;
- legitimacy-condition update visibility reason;
- material warning shown or suppressed state;
- approval label source, criterion source, scope, date or version, and unresolved conditions where material;
- AI-generated summary source categories and limitations;
- filters applied;
- protocol rule for rotation;
- whether the user customized Home categories;
- aggregate funding from search, category navigation, urgent highlights, recommendations, delegation, and automatic profiles.

The ordinary citizen does not need to see every technical ranking detail, approval file, tender base, permit, or appendix, but reviewers should be able to reconstruct whether discovery acted as a hidden allocator or whether a favorable citizen-facing label hid a material condition.

## 18. Data export and verification tools

Layer 5 should support external review.

Possible tools:

- export project data;
- export evidence index;
- export financial trace summary;
- export metric fulfillment data;
- compare versions;
- download public reports;
- cite permanent project snapshots;
- verify integrity of archived evidence where applicable.

## Privacy and access control

Layer 5 is deep transparency, but not unlimited exposure.

Some data may need redaction or tiered access.

Examples:

- personal data of beneficiaries;
- sensitive location data;
- private identity details;
- documents containing private information;
- protected complainant information;
- safety-sensitive evidence.

The system should preserve auditability while respecting privacy and safety rules.

## What Layer 5 should not do

Layer 5 should not:

- replace the citizen project sheet;
- be the default project view;
- hide behind inaccessible technical formats only;
- expose private data without rules;
- allow project actors to alter history silently;
- present raw records without timestamps, actors, or context.

## Design rule

> Layer 5 is the complete technical memory of the project: versioned, traceable, exportable, and constrained by privacy rules.

## Status

Accepted as Project Technical Audit Trail Layer v0.
