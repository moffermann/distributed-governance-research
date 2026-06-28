# Citizen Complaint Flow v0

## Purpose

This document freezes the flow for filing a formal complaint about a project.

A complaint is different from a comment. It is a structured claim that something may be false, incomplete, conflicted, non-compliant, harmful, or otherwise relevant to project validity, execution, fiscalization, evidence, or funding release.

## Core principle

> A complaint is a formal review trigger. It must be easy to submit, structured enough to evaluate, and traceable enough to prevent arbitrary decisions.

## Main question

```text
How can a citizen formally alert the system that something may be wrong with a project?
```

## Entry points

The complaint flow can start from:

- project dashboard;
- complaint signal detail;
- full citizen project sheet;
- evidence panel;
- fiscalization panel;
- comment escalation;
- milestone update;
- audit trail.

Visible buttons:

```text
[Presentar denuncia]
[Denunciar problema]
[Reportar información falsa]
```

## Complaint categories

The system should help the citizen classify the complaint.

Recommended categories:

```text
Información falsa o incompleta
Conflicto de interés no declarado
Beneficiarios inexistentes o mal declarados
Evidencia dudosa
Incumplimiento de hito
Mal uso de recursos
Riesgo o antivalue no declarado
Fiscalización deficiente
Otro
```

The category helps routing, but the citizen should not need legal or technical expertise.

## Flow steps

```text
1. Citizen starts complaint
2. System explains difference from comment
3. Citizen selects category
4. Citizen writes claim and attaches evidence if available
5. System asks project area affected
6. Citizen reviews possible consequences
7. Complaint is submitted
8. System assigns status and review path
9. Project actors may respond
10. Resolution is published and traceable
```

## 1. Explanation

Example:

```text
Una denuncia activa revisión formal.

Úsala si crees que hay información falsa, conflicto no declarado, evidencia dudosa, incumplimiento o riesgo relevante.

Si sólo quieres preguntar o comentar, usa comentarios.
```

## 2. Complaint form

Example:

```text
Presentar denuncia

Categoría:
[Información falsa] [Conflicto de interés] [Evidencia dudosa] [Incumplimiento] [Otro]

¿Qué problema detectaste?
[texto]

¿A qué parte del proyecto afecta?
[Beneficiarios] [Presupuesto] [Evidencia] [Fiscalización] [Ejecución] [Valor prometido]

¿Tienes evidencia?
[Subir archivo] [Agregar enlace] [Describir observación]

[Continuar]
```

## 3. Consequence notice

Before submission, the system should explain what may happen.

Example:

```text
Tu denuncia puede:
- quedar registrada como observación formal;
- pedir respuesta al ejecutor;
- pedir revisión al fiscalizador;
- bloquear temporalmente avance o desembolso si es grave;
- ser rechazada si no tiene fundamento suficiente;
- afectar reputación si se demuestra mala fe reiterada.
```

## 4. Statuses

Possible complaint statuses:

```text
Submitted
Pending initial review
Needs more information
Sent to executor response
Sent to fiscalizer review
Open
Blocking
Resolved
Rejected
Withdrawn
Reopened
Appealed
```

Citizen-facing language can be simpler:

```text
Recibida
En revisión
Necesita más información
Abierta
Bloqueante
Resuelta
Rechazada
Reabierta
```

## 5. Blocking complaints

Some complaints may block execution, funding release, milestone approval, or project closure.

Blocking should be rule-based and visible.

Examples of potentially blocking issues:

- alleged false beneficiaries;
- serious evidence dispute;
- undeclared relation affecting fiscalization;
- suspected non-compliance with a milestone;
- budget change not declared;
- relevant risk or antivalue omitted.

Rule:

> Not every complaint blocks a project. Blocking status must be explicit, justified, and reviewable.

## 6. Actor response

Relevant actors may be asked to respond.

Possible responders:

- executor;
- fiscalizer;
- evidence producer;
- proposer;
- moderator, if in tutored or semi-open mode;
- complainant;
- beneficiary or affected party where appropriate.

Responses should be visible according to privacy rules.

## 7. Resolution

A resolution should include:

- complaint summary;
- category;
- evidence considered;
- actor responses;
- conclusion;
- effect on project;
- required correction if any;
- sanctions or reputation effects if any;
- whether appeal or reopening is possible.

## 8. Automatic following

Filing a complaint automatically adds the project to Following.

The complainant should receive updates about status changes.

## 9. Complaint traceability

Layer 3 should show complaint status in citizen language.

Layer 4 should summarize relevant complaints.

Layer 5 should contain the full complaint and review trace, subject to privacy and safety rules.

## 10. Protection against misuse

The system must allow complaints, including critical ones, without making them impossible for ordinary citizens.

At the same time, repeated bad-faith complaints can have consequences.

Possible safeguards:

- structured categories;
- evidence prompts;
- request for clarification;
- review stages;
- visibility of status;
- reputation effects for repeated abuse;
- protection for good-faith complainants.

## What this flow should not do

The complaint flow should not:

- confuse complaints with comments;
- require legal expertise;
- hide complaint effects;
- block projects automatically without rule-based justification;
- expose sensitive complainant information without rules;
- allow unresolved blocking complaints to disappear silently;
- punish good-faith complaints just because they are rejected.

## Design rule

> Complaints must be easy to file, hard to ignore, and structured enough to review fairly.

## Status

Accepted as Citizen Complaint Flow v0.
