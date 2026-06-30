# Citizen Evidence Production Flow v0

## Purpose

This document freezes the flow for a citizen or organization offering to produce evidence for a project.

Evidence production is different from fiscalization. Evidence producers collect or submit verifiable material. They do not by themselves validate project fulfillment.

## Core principle

> Evidence producers help create verifiable information. Fiscalizers evaluate that information against the project commitments. Executor self-report is useful context, not final proof for critical decisions.

## Main question

```text
How can a citizen or organization help produce evidence for a project?
```

## Entry points

The flow can start from:

- projects that need evidence;
- compact project list;
- project dashboard;
- evidence detail panel;
- full project sheet;
- notification asking for evidence;
- project execution milestone.

Visible buttons:

```text
[Aportar evidencia]
[Ofrecerme como productor de evidencia]
[Subir evidencia]
```

## Types of evidence participation

There are two broad forms:

```text
1. Evidence commitment before execution
2. Evidence submission during or after execution
```

### Evidence commitment

The citizen says they are willing to provide evidence later.

Examples:

- attend a field visit;
- confirm beneficiary participation;
- take geolocated photos;
- upload attendance support;
- answer a survey;
- verify local conditions.

### Evidence submission

The citizen submits concrete evidence now.

Examples:

- photo;
- video;
- document;
- field observation;
- beneficiary confirmation;
- attendance record;
- testimony;
- location-based verification.

## Flow steps

```text
1. Citizen clicks evidence action
2. System explains evidence role
3. Citizen chooses commitment or submission
4. Eligibility and relationship questions
5. Evidence form or commitment form
6. Review and privacy notice
7. Submission confirmation
8. Evidence status tracking
```

## 1. Role explanation

Example:

```text
Aportar evidencia ayuda a verificar este proyecto.

Tu evidencia puede ser revisada por fiscalizadores y observada por la comunidad.

Aportar evidencia no significa aprobar el proyecto ni validar su cumplimiento por sí solo.
```

## 2. Commitment form

For future evidence commitments:

```text
¿Qué tipo de evidencia puedes aportar?

[Foto o video]
[Confirmación de beneficiario]
[Visita en terreno]
[Registro de asistencia]
[Observación local]
[Otro]

¿Cuándo podrías hacerlo?

¿Tienes relación con el ejecutor?
```

The system should record:

- actor;
- project;
- evidence type;
- value commitment, metric, material claim, milestone, phase, risk, or antivalue addressed;
- related evidential contract requirement where known;
- related evidence need where known;
- expected timing;
- location or scope;
- relationship declarations;
- whether it is voluntary or paid;
- whether the actor accepts evidence standards.

For critical milestones, disbursements, and closures, the system should require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

## 3. Evidence submission form

For actual evidence submission:

```text
Subir evidencia

Tipo de evidencia:
Foto / video / documento / observación / confirmación

Relacionado con:
Hito 2 — Inicio de entrenamientos

Descripción:
[texto]

Archivo o registro:
[subir]

Confirmo que esta evidencia es verdadera según mi conocimiento.
```

The form should collect:

- evidence type;
- value commitment, metric, material claim, milestone, phase, risk, or antivalue addressed;
- associated milestone;
- associated metric;
- material claim supported or contradicted, where known;
- related evidential contract requirement where known;
- related evidence need where known;
- description;
- date/time;
- location where applicable;
- file or record;
- producer role;
- relationship declaration;
- privacy classification;
- consent or authority to share if required.

## 4. Paid evidence missions

Some evidence production may be paid from a project control budget.

Paid evidence missions are not ordinary public-value projects. They are control tasks attached to a project, control package, fiscalization process, or Control Subproject.

Rules:

- payment is for producing evidence that meets standards;
- payment must not depend on evidence being favorable to the executor;
- executor should not directly appoint or pay evidence producers;
- assignment should follow eligibility, availability, proximity, reputation, rotation, redundancy, or protocol rules.

Evidence-producer offers may be submitted in parallel with execution funding. The offer is lightweight and unpaid by default. Payment begins only when the actor is selected or assigned to accepted control work under the protocol.

After the minimum control package is accepted, supplemental evidence funding may support additional producers only when the proposed evidence is distinct or complementary to evidence already accepted or planned.

Evidence offers that satisfy accepted Project Evidential Contract needs should receive higher eligibility priority. Evidence outside the accepted contract may still be useful, but it should normally depend on fiscalizer, reviewer, or protocol acceptance as equivalent, necessary, materially useful, or complementary within the available control budget.

The system should not fund unlimited evidence producers. It should reject or close supplemental evidence funding when:

- the evidence need is already satisfied;
- the proposed evidence duplicates existing accepted evidence;
- the project already has enough evidence for the relevant milestone, territory, beneficiary group, or risk;
- no admissible distinct evidence offer remains.

## 5. Review and status

After submission, evidence should have a clear status.

Possible states:

```text
Submitted
Pending review
Accepted as evidence
Observed
Rejected
Contradicted
Linked to milestone
Used in fiscalization report
Used in verified discovery
```

Example:

```text
Evidencia recibida

Estado:
Pendiente de revisión

Será visible según las reglas de privacidad del proyecto.
```

## 6. Privacy and safety

Evidence may contain personal or sensitive information.

The system should show a privacy notice before submission and use AI-assisted privacy review where possible.

Examples:

- faces of children;
- personal data of beneficiaries;
- exact home locations;
- medical or vulnerable-person information;
- documents with private identifiers.

The system should support redaction, restricted visibility, metadata removal, safer public versions, or publication as a summary if evidence is unsafe to publish directly.

Recommended assisted flow:

```text
1. User uploads evidence.
2. AI detects possible privacy risks.
3. System generates or suggests a safer public version.
4. User reviews the safer version and warning.
5. User decides whether to publish, edit, cancel, or keep the evidence restricted where supported.
6. Fiscalizer later evaluates evidentiary value.
```

Publishing evidence is separate from validating its evidentiary value.

## 7. Evidence contradiction

Other actors may challenge evidence.

Layer 3 and Layer 5 should show whether evidence was disputed or contradicted.

The citizen who submitted evidence may be notified and allowed to clarify.

Evidence may support, contradict, correct, or weaken a material project claim.

Examples:

```text
Claim:
80 children attended the sports program.

Evidence:
Attendance photo, beneficiary confirmation, or parent testimony.

Possible status:
Supports claim / contradicts claim / insufficient to evaluate.
```

The system should avoid asking ordinary citizens to classify technical validity. The citizen may describe what the evidence shows; the fiscalizer or reviewer evaluates evidentiary value.

Where possible, the interface may show the relevant evidential contract need in simple language.

Example:

```text
This project needs:
attendance confirmation for month 2.

Your evidence:
parent confirmation that the child attended sessions in month 2.
```

## 8. Reputation effects

Evidence production can affect reputation.

Positive effects:

- timely evidence;
- useful evidence;
- confirmed accuracy;
- repeated reliable participation.

Negative effects:

- false evidence;
- manipulated evidence;
- repeated low-quality submissions;
- undisclosed relevant relationship;
- refusal to clarify important issues.

## 9. Verified discovery

Some evidence may reveal a material information problem.

Examples:

- hidden conflict of interest;
- duplicate invoice;
- false beneficiary count;
- manipulated attendance record;
- undeclared externality;
- project evidence contradicted by independent source.

A verified discovery may generate:

- reputation credit as evidence producer, complainant, observer, or fiscalizer;
- compensation from a configured discovery reward, control budget, recovery rule, or other lawful reward source;
- a complaint, correction, disbursement control, or responsibility review where applicable.

Reward is not paid for accusation alone.

Recommended rule:

> A discovery becomes rewardable only after review confirms that it was relevant, material, and useful for correcting, preventing, or exposing a real information problem.

Citizen-facing example:

```text
Your evidence was accepted as relevant.
It helped correct a material project claim.
Verified discovery status: under review.
```

## What this flow should not do

The evidence production flow should not:

- treat evidence producer as fiscalizer;
- let executor fully control evidence assignment;
- pay only for favorable evidence;
- expose private information carelessly;
- trap ordinary evidence publication behind human pre-approval;
- accept vague material without context;
- hide evidence status;
- hide whether evidence was disputed;
- fund duplicate evidence merely because supplemental control money is available;
- reward accusations before review confirms material discovery;
- let AI labels replace fiscalizer or reviewer evaluation.

## Design rule

> Evidence production creates traceable material for review; it does not by itself certify that the project complied. Verified discovery can be rewarded only after review confirms materiality and usefulness.

## Status

Accepted as Citizen Evidence Production Flow v0.
