# Evidence Producers and C003 Resolution v0

## Purpose

This document resolves contradiction C003 from the v0 contradiction checklist.

C003 was originally framed as the problem of fulfillment evidence being produced by interested actors. The final resolution is stronger: the system should not depend on the executor as the main source of fulfillment evidence. It should recognize a distinct role called `Evidence Producer`, and it should treat executor-submitted material as self-reported support unless corroborated.

## Status

Accepted as the v0 resolution for C003.

## Core principle

> The system should not depend on the executor as the primary source of fulfillment evidence.

The executor may submit material, but project verification, critical milestones, disbursements, and closure should rely on fulfillment evidence produced or corroborated by evidence producers, fiscalizers, technical records, verified beneficiaries, or other non-executor sources.

## The contradiction

A project needs fulfillment evidence to verify execution.

But if the executor produces the fulfillment evidence, the evidence is structurally weak because the executor has a direct interest in the outcome.

The executor wants:

- milestone approval;
- disbursement;
- positive reputation;
- project closure;
- avoidance of complaints;
- avoidance of sanctions.

This does not mean the executor is dishonest. It means executor-produced evidence is not independent.

## AI and manipulation risk

The risk is even stronger in an environment where artificial intelligence and digital editing can generate or modify photos, videos, documents, lists, and reports.

Therefore, executor-submitted material should not be treated as enough by itself for high-risk verification.

Rule:

> The more critical the milestone, disbursement, or closure decision, the less it should depend on executor self-reporting.

## Evidence Producer role

The system should include a role called `Evidence Producer`.

An evidence producer is an actor whose function is to document, record, observe, capture, or produce fulfillment evidence or control evidence about project execution.

The evidence producer is not necessarily the executor.

Possible evidence producers:

- independent person;
- organization hired or assigned to produce evidence;
- beneficiary or beneficiary representative;
- citizen observer;
- technical sensor or digital register;
- fiscalizer when performing evidence-capture work;
- third-party certifier;
- field observer;
- platform-assisted capture tool.

## Fiscalizer as evidence producer

The fiscalizer can produce evidence, but the function should be recorded separately from evaluation.

A fiscalizer may act in two modes:

```text
Evidence producer mode:
The fiscalizer visits, captures, records, observes, or documents facts.

Evaluator mode:
The fiscalizer reviews evidence and evaluates whether the project complied.
```

Both may be performed by the same actor in v0, but the system should record which function is being performed.

Example:

```text
Evidence E-301
Source: fiscalizer
Function: field observation
Object verified: milestone 2
Use: evidence capture

Later review:
Fiscalizer evaluation of milestone 2
```

## Executor-submitted material

The executor may submit:

- photos;
- videos;
- attendance lists;
- calendars;
- reports;
- invoices;
- delivery documents;
- explanations;
- correction responses.

But this material should be classified as:

```text
Executor self-report
```

It may be useful, but it is not strong independent evidence by itself.

## Rule for executor-submitted material

> Executor-submitted material is admissible as support, explanation, or self-report, but it is not sufficient by itself for critical milestones, relevant disbursements, or final closure.

## Evidence source metadata

Every contextualized evidence item should record:

- evidence context: complaint, fulfillment, control, contradiction, administrative observability, or research;
- source actor;
- source role;
- source relationship to project;
- whether the source is executor, beneficiary, fiscalizer, evidence producer, citizen observer, or external register;
- date and time;
- object verified;
- project milestone or complaint relation;
- capture method where available;
- whether it was captured through platform tooling;
- whether it was edited or anonymized;
- privacy classification;
- independence level;
- corroboration status.

## Independence levels

Recommended v0 labels:

```text
Executor self-report
Beneficiary confirmation
Citizen observation
Evidence-producer fulfillment/control evidence
Fiscalizer-produced evidence
Independent third-party evidence
Technical/system-generated record
External official or documentary record
```

These labels do not automatically decide truth, but they help determine evidentiary weight.

## Corroboration

Critical evidence should be corroborated when risk or money exposure is high.

Possible corroboration paths:

- evidence producer confirms activity;
- fiscalizer observes activity;
- beneficiary confirms receipt or attendance;
- citizen observations align;
- technical log supports timing/location;
- independent document matches claim;
- multiple contextualized evidence items converge.

## Project risk and fulfillment/control evidence requirements

Fulfillment/control evidence requirements should scale with risk.

Low-risk or low-value milestones may accept lighter evidence.

Higher-risk milestones should require stronger non-executor corroboration.

Examples:

```text
Low risk:
Executor report + simple photo + citizen comments may be enough.

Medium risk:
Executor report + evidence producer record + beneficiary confirmation.

High risk:
Evidence producer record + fiscalizer observation + documentary/technical corroboration.
```

## Relationship with assisted evidence publication

Evidence can be published by users using the assisted privacy flow defined in C015.

Publication does not equal validation.

A user may publish evidence, but the system later classifies its source, independence, relevance, and weight.

## Relationship with complaints

Complaint Evidence can come from citizens, complainants, beneficiaries, evidence producers, fiscalizers, or third parties.

The key rule still applies:

```text
Who produced this evidence?
What is their role?
What interest do they have?
Is it corroborated?
```

## Relationship with information incentives

Evidence is part of the system's incentive architecture for reliable information.

Each contextualized evidence item should be able to support, contradict, weaken, or correct a material project claim.

Examples:

```text
Claim:
The project served 80 children.

Possible fulfillment/control evidence:
Attendance record, beneficiary confirmation, fiscalizer observation, or parent testimony.

Review status:
supports / contradicts / insufficient / used in report.
```

If fulfillment evidence reveals a verified material omission, falsehood, hidden conflict, or manipulation, the result may trigger correction, complaint review, disbursement control, responsibility event, reputation effect, or verified-discovery reward where the protocol allows.

Reward should attach only to verified, material, review-confirmed discovery, not to accusations or raw submissions.

## Relationship with the Project Evidential Contract

Evidence producers should work against the accepted Project Evidential Contract where one exists.

The contract tells evidence producers:

- which project promise, metric, milestone, claim, risk, or antivalue needs fulfillment evidence;
- what fulfillment evidence type is expected;
- when it should be produced;
- what privacy or protected-identity rules apply;
- whether independent or corroborating evidence is required;
- how the fiscalizer or reviewer will use the evidence.

The contract defines fulfillment evidence needs, not preselected producers. Evidence producers should submit offers or commitments identifying the specific metric, material claim, milestone, phase, risk, or antivalue their fulfillment/control evidence will address.

Example:

```text
Contract requirement:
Monthly attendance must be corroborated by beneficiary or parent confirmation.

Evidence producer task:
Collect structured parent confirmations for month 2.

Review:
Fiscalizer compares the confirmations with attendance records and executor reports.
```

Evidence producers may still submit useful unexpected fulfillment evidence, but paid or assigned fulfillment/control evidence work should be tied to defined fulfillment evidence needs so control funding does not become open-ended or duplicative.

Fulfillment evidence that satisfies an accepted contract need should have higher eligibility priority. Unexpected fulfillment/control evidence may be considered when it is equivalent, necessary, materially useful, or complementary within the available control budget, but it should not automatically replace the minimum fulfillment evidence needs defined before funding.

## C003 final resolution

C003 is resolved as follows:

```text
Create and use the Evidence Producer role. Do not treat executor-submitted material as primary proof for critical decisions.
```

Final rule:

> Fulfillment evidence should not depend on the executor. The executor may submit self-reported material, but critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources. The fiscalizer may produce evidence, but evidence-production must be recorded separately from evaluation. Evidence items should connect to material claims, carry an explicit evidence context, and may create responsibility or verified-discovery effects only after review.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- fiscalization, evidence, and control model;
- citizen evidence production flow;
- project disbursement flow;
- project lifecycle and closure model;
- complaint entity model;
- value verification model;
- consolidated entity/object/state map;
- project object model;
- future implementable schema.

## Remaining risks

- Evidence producer may become costly.
- Evidence producer may be captured by executor.
- Fiscalizer may over-rely on own evidence.
- AI-generated evidence may still bypass controls.
- Low-risk projects may become overburdened by evidence rules.

## Mitigations

- scale fulfillment/control evidence requirements by risk;
- require relationship and conflict declarations;
- distinguish evidence production from evaluation;
- record source and role metadata;
- require corroboration for critical milestones;
- allow lightweight evidence for low-risk projects;
- use technical capture methods where feasible.

## Design rule

> Executor self-report is useful context, not final proof. The system must create credible distance between execution and verification.
