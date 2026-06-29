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
- associated milestone;
- associated metric;
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

## What this flow should not do

The evidence production flow should not:

- treat evidence producer as fiscalizer;
- let executor fully control evidence assignment;
- pay only for favorable evidence;
- expose private information carelessly;
- trap ordinary evidence publication behind human pre-approval;
- accept vague material without context;
- hide evidence status;
- hide whether evidence was disputed.

## Design rule

> Evidence production creates traceable material for review; it does not by itself certify that the project complied.

## Status

Accepted as Citizen Evidence Production Flow v0.
