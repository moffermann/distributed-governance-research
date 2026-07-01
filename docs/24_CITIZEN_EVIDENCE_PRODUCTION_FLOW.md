# Citizen Fulfillment Evidence Production Flow v0

## Purpose

This document freezes the flow for a citizen or organization offering to produce fulfillment evidence or control evidence for a project.

Fulfillment evidence production is different from fiscalization. Evidence producers collect or submit verifiable material. They do not by themselves validate project fulfillment.

This flow is not the complaint filing flow. Evidence attached to a complaint is `Complaint Evidence` and follows `docs/26_CITIZEN_COMPLAINT_FLOW.md`. Material produced through this flow is primarily `Fulfillment Evidence` or `Control Evidence`.

## Core principle

> Evidence producers help create verifiable information for fulfillment or control. Fiscalizers evaluate that information against the project commitments. Executor self-report is useful context, not final proof for critical decisions.

## Main question

```text
How can a citizen or organization help produce fulfillment evidence for a project?
```

## Entry points

The flow can start from:

- projects that need fulfillment evidence;
- compact project list;
- project dashboard;
- fulfillment evidence detail panel;
- full project sheet;
- notification asking for fulfillment evidence;
- project execution milestone.

Visible buttons:

```text
[Aportar evidencia de cumplimiento]
[Ofrecerme como productor de evidencia]
[Subir evidencia]
```

## Types of fulfillment evidence participation

There are two broad forms:

```text
1. Fulfillment evidence commitment before execution
2. Fulfillment evidence submission during or after execution
```

### Fulfillment evidence commitment

The citizen says they are willing to provide fulfillment evidence later.

Examples:

- attend a field visit;
- confirm beneficiary participation;
- take geolocated photos;
- upload attendance support;
- answer a survey;
- verify local conditions.

### Fulfillment evidence submission

The citizen submits concrete fulfillment evidence now.

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
1. Citizen clicks fulfillment evidence action
2. System explains evidence producer role
3. Citizen chooses commitment or submission
4. Eligibility and relationship questions
5. Fulfillment evidence form or commitment form
6. Review and privacy notice
7. Submission confirmation
8. Fulfillment evidence status tracking
```

## 1. Role explanation

Example:

```text
Aportar evidencia de cumplimiento ayuda a verificar este proyecto.

Tu evidencia puede ser revisada por fiscalizadores y observada por la comunidad.

Aportar evidencia no significa aprobar el proyecto ni validar su cumplimiento por sí solo.
```

## 2. Commitment form

For future fulfillment evidence commitments:

```text
¿Qué tipo de evidencia de cumplimiento puedes aportar?

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
- fulfillment evidence type;
- value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue addressed;
- related evidential contract requirement where known;
- related fulfillment evidence need where known;
- expected timing;
- location or scope;
- relationship declarations;
- whether it is voluntary or paid;
- whether the actor accepts fulfillment evidence standards.

For critical milestones, disbursements, and closures, the system should require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

## 3. Fulfillment evidence submission form

For actual fulfillment evidence submission:

```text
Subir evidencia de cumplimiento

Tipo de evidencia de cumplimiento:
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

- fulfillment evidence type;
- value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue addressed;
- associated milestone;
- associated metric;
- material claim supported or contradicted, where known;
- related evidential contract requirement where known;
- related fulfillment evidence need where known;
- description;
- date/time;
- location where applicable;
- file or record;
- producer role;
- relationship declaration;
- privacy classification;
- consent or authority to share if required.

## 4. Paid fulfillment evidence missions

Some fulfillment evidence production may be paid from a project control budget.

Paid fulfillment evidence missions are not ordinary public-value projects. They are control tasks attached to a project, control package, fiscalization process, or Control Subproject.

Rules:

- payment is for producing fulfillment evidence that meets standards;
- payment must not depend on fulfillment evidence being favorable to the executor;
- executor should not directly appoint or pay evidence producers;
- assignment should follow eligibility, availability, proximity, reputation, rotation, redundancy, or protocol rules.

Evidence-producer offers may be submitted in parallel with execution funding. The offer is lightweight and unpaid by default. Payment begins only when the actor is selected or assigned to accepted control work under the protocol.

After the minimum control package is accepted, supplemental fulfillment evidence funding may support additional producers only when the proposed fulfillment evidence is distinct or complementary to fulfillment evidence already accepted or planned.

Evidence offers that satisfy accepted Project Evidential Contract needs should receive higher eligibility priority. Fulfillment evidence outside the accepted contract may still be useful, but it should normally depend on fiscalizer, reviewer, or protocol acceptance as equivalent, necessary, materially useful, or complementary within the available control budget.

The system should not fund unlimited evidence producers. It should reject or close supplemental evidence funding when:

- the fulfillment evidence need is already satisfied;
- the proposed fulfillment evidence duplicates existing accepted fulfillment evidence;
- the project already has enough fulfillment evidence for the relevant milestone, territory, beneficiary group, or risk;
- no admissible distinct fulfillment evidence offer remains.

## 5. Review and status

After submission, fulfillment evidence should have a clear status.

The submission status is not the same as formal project evaluation. If the material is later used for disbursement, milestone closure, value fulfillment, complaint review, or reputation effects, the fiscalizer or reviewer should create a separate EvaluationRecord that identifies the evaluated dimension, actor role, observability basis, evidence used, evaluation type, formal effect, and review status.

Possible states:

```text
Submitted
Pending review
Accepted as evidence
Accepted only as contextual material
Insufficient for fulfillment effect
Needs corroboration
Observed
Rejected
Contradicted
Linked to milestone
Used in fiscalization report
Used in verified discovery
```

Submitted material may be visible and still be insufficient for the formal effect claimed. For example, a dark photo without reliable time, location, milestone link, or useful description may remain contextual material, require corroboration, or be rejected for fulfillment effect.

Example:

```text
Evidencia recibida

Estado:
Pendiente de revisión

Será visible según las reglas de privacidad del proyecto.
```

## 6. Privacy and safety

Fulfillment evidence may contain personal or sensitive information.

The system should show a privacy notice before submission and use AI-assisted privacy review where possible.

Examples:

- faces of children;
- personal data of beneficiaries;
- exact home locations;
- medical or vulnerable-person information;
- documents with private identifiers.

The system should support redaction, restricted visibility, metadata removal, safer public versions, or publication as a summary if fulfillment evidence is unsafe to publish directly.

Recommended assisted flow:

```text
1. User uploads fulfillment evidence.
2. AI detects possible privacy risks.
3. System generates or suggests a safer public version.
4. User reviews the safer version and warning.
5. User decides whether to publish, edit, cancel, or keep the fulfillment evidence restricted where supported.
6. Fiscalizer later evaluates fulfillment-evidence value.
```

Publishing fulfillment evidence is separate from validating its fulfillment-evidence value.

## 7. Fulfillment evidence contradiction

Other actors may challenge fulfillment evidence.

Layer 3 and Layer 5 should show whether fulfillment evidence was disputed or contradicted.

The citizen who submitted fulfillment evidence may be notified and allowed to clarify.

Fulfillment evidence may support, contradict, correct, or weaken a material project claim.

Examples:

```text
Claim:
80 children attended the sports program.

Fulfillment evidence:
Attendance photo, beneficiary confirmation, or parent testimony.

Possible status:
Supports claim / contradicts claim / insufficient to evaluate.
```

The system should avoid asking ordinary citizens to classify technical validity. The citizen may describe what the fulfillment evidence shows; the fiscalizer or reviewer evaluates evidentiary value within the relevant evaluation context.

Where possible, the interface may show the relevant evidential contract need in simple language.

Example:

```text
This project needs:
attendance confirmation for month 2.

Your fulfillment evidence:
parent confirmation that the child attended sessions in month 2.
```

## 8. Reputation effects

Fulfillment evidence production can affect reputation.

Positive effects:

- timely fulfillment evidence;
- useful fulfillment evidence;
- confirmed accuracy;
- repeated reliable participation.

Negative effects:

- false fulfillment evidence;
- manipulated fulfillment evidence;
- repeated low-quality submissions;
- undisclosed relevant relationship;
- refusal to clarify important issues.

## 9. Verified discovery

Some fulfillment evidence may reveal a material information problem.

Examples:

- hidden conflict of interest;
- duplicate invoice;
- false beneficiary count;
- manipulated attendance record;
- undeclared externality;
- fulfillment evidence contradicted by independent source.

A verified discovery may generate:

- reputation credit as evidence producer, complainant, observer, or fiscalizer;
- compensation from a configured discovery reward, control budget, recovery rule, or other lawful reward source;
- a complaint, correction, disbursement control, or responsibility review where applicable.

Reward is not paid for accusation alone.

Recommended rule:

> A discovery becomes rewardable only after review confirms that it was relevant, material, and useful for correcting, preventing, or exposing a real information problem.

Citizen-facing example:

```text
Your fulfillment evidence was accepted as relevant.
It helped correct a material project claim.
Verified discovery status: under review.
```

## What this flow should not do

The fulfillment evidence production flow should not:

- treat evidence producer as fiscalizer;
- let executor fully control fulfillment evidence assignment;
- pay only for favorable fulfillment evidence;
- expose private information carelessly;
- trap ordinary fulfillment evidence publication behind human pre-approval;
- accept vague material without context;
- hide fulfillment evidence status;
- hide whether fulfillment evidence was disputed;
- fund duplicate fulfillment evidence merely because supplemental control money is available;
- reward accusations before review confirms material discovery;
- let AI labels replace fiscalizer or reviewer evaluation.

## Design rule

> Fulfillment evidence production creates traceable material for review; it does not by itself certify that the project complied. Verified discovery can be rewarded only after review confirms materiality and usefulness.

## Status

Accepted as Citizen Fulfillment Evidence Production Flow v0.
