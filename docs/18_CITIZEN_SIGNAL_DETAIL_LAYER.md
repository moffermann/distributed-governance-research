# Citizen Signal Detail Layer v0

## Purpose

This document freezes Layer 3: the detail layer opened when a citizen clicks an icon, number, alert, condition, or signal in a project card or dashboard.

Layer 3 is not a full project sheet. It is a contextual explanation layer.

## Core principle

> Every visible icon, number, condition, or alert should be clickable and explain its meaning in citizen language.

Layer 3 should explain one thing at a time.

It should not turn every click into a full technical file.

## Main question

Layer 3 answers:

```text
What does this specific signal mean, why does it matter, what is its current status, and what can I do?
```

## Standard panel structure

Each Layer 3 panel should follow a reusable structure:

```text
Title
What it means
Current status
Why it matters
How it is verified
What I can do
See more
```

Not every panel needs every section, but this should be the default template.

## Panel behavior

Layer 3 may appear as:

- a secondary screen;
- a slide-up panel on mobile;
- a side panel on desktop;
- a focused detail page when the content is larger.

The citizen should be able to return easily to the project dashboard.

## Types of Layer 3 detail

Layer 3 includes reusable panels for:

- value promised;
- beneficiaries;
- funding;
- support;
- justified objections;
- fiscalizers;
- evidence;
- comments;
- complaints;
- missing conditions;
- alerts.

## 1. Value promised detail

Opened when the citizen clicks a value icon.

Example: clicking `⚽ Deporte`.

The panel should show:

- value name;
- what the project promises;
- who benefits;
- committed scope;
- mandatory metrics;
- project-specific targets;
- evidence required;
- current fulfillment status.

Example:

```text
⚽ Deporte

Qué promete este proyecto:
Entrenamientos gratuitos para 80 niños durante 6 meses.

A quién beneficia:
Niños entre 8 y 13 años de Maipú.

Metas comprometidas:
- 2 entrenamientos por semana
- duración total: 6 meses
- mínimo 80 niños inscritos
- asistencia promedio mínima: 70%

Cómo se comprobará:
- listas de asistencia
- calendario de actividades
- fotos o videos
- confirmación de beneficiarios
- revisión del fiscalizador

Estado:
Todavía no ejecutado.

[Ver métricas completas]
```

### Rule

> A value icon is not decorative. It is the visible entry point to a measurable value promise.

## 2. Beneficiary detail

Opened when the citizen clicks a beneficiary number.

Example: `Beneficiarios: 80`.

The panel should distinguish:

- direct beneficiaries;
- indirect beneficiaries;
- estimated beneficiaries;
- confirmed beneficiaries.

Example:

```text
Beneficiarios

Este proyecto declara beneficiar directamente a:
80 niños de Maipú.

Tipo:
Beneficiarios directos.

Criterio de selección:
Niños entre 8 y 13 años inscritos en el programa.

Confirmación:
0 de 80 confirmados todavía.

Durante la ejecución se pedirá:
- registro de inscripción
- asistencia
- confirmación de participación
- evidencia de actividad
```

## 3. Funding detail

Opened when the citizen clicks funding progress or funding count.

The panel should show:

- total target;
- amount committed;
- missing amount;
- number of funders;
- funding status;
- whether funds are committed, reserved, released, or returned;
- release conditions.

Example:

```text
Financiamiento

Meta:
$12.000.000

Reunido:
$7.560.000

Falta:
$4.440.000

Financiadores:
1.240 personas

Estado del dinero:
Comprometido, no liberado al ejecutor.

Cuándo se libera:
Sólo si el proyecto completa sus condiciones de cierre y luego según hitos aprobados.
```

### Rule

> Funding a project does not mean immediate release of money to the executor.

Layer 3 should make this clear.

## 4. Support detail

Opened when the citizen clicks support.

The panel should show:

- active supporters;
- withdrawn support where useful as historical context;
- supporter diversity where appropriate;
- whether support is part of the applicable threshold policy;
- the citizen's current support state.

Example:

```text
Support

Active support:
1,180 citizens

Withdrawn support:
87 historical withdrawals

Your current signal:
Supporting

Meaning:
You think this project deserves attention or execution.

Important:
Support is not funding. You can withdraw support at any time.

[Withdraw support]
```

If the citizen has not supported the project:

```text
[Support project]
```

### Rule

> Support is a reversible civic signal. It does not commit money and does not replace funding, evidence, fiscalization, or formal approval where required.

## 5. Justified objection detail

Opened when the citizen clicks justified objections.

The panel should show:

- active objections;
- withdrawn objections where useful as historical context;
- objection categories;
- project responses;
- whether any objection has been converted into a formal complaint;
- the citizen's current objection state.

Example:

```text
Justified objections

Active objections:
18

Main reasons:
- possible duplication with an existing public project
- beneficiary access unclear
- missing permit document

Withdrawn objections:
7 historical withdrawals

Your current signal:
You objected: possible duplication.

Important:
This is not a formal complaint by default. If you want review, file a complaint.

[Withdraw objection]
[File complaint]
```

If the citizen has not objected:

```text
[Object with reason]
```

### Rule

> A justified objection is a reversible structured civic signal, not a simple dislike and not a formal complaint by default.

## 6. Fiscalizer detail

Opened when the citizen clicks fiscalizers or a missing fiscalizer condition.

If there is no confirmed fiscalizer:

```text
Fiscalización

Este proyecto requiere:
1 fiscalizador responsable.

Estado:
Todavía no hay fiscalizador confirmado.

Qué hará el fiscalizador:
- revisar cumplimiento de hitos
- revisar evidencias
- validar avances
- emitir reportes
- alertar incumplimientos

Importante:
El ejecutor no elige libremente a quien lo fiscaliza.

[Ofrecerme como fiscalizador]
[Ver requisitos]
```

If there is a confirmed fiscalizer:

```text
Fiscalizador:
Fundación Control Ciudadano

Rol:
Fiscalizador responsable

Revisa:
Cumplimiento de actividades, asistencia, evidencias y uso de recursos.

Relación declarada con el ejecutor:
Sin relación declarada.

Informes:
0 entregados / 3 esperados
```

## 7. Evidence detail

Opened when the citizen clicks evidence.

The panel should show:

- committed evidence;
- delivered evidence;
- pending evidence;
- reviewed evidence;
- disputed evidence;
- source of evidence;
- evidence type.

Example:

```text
Evidencias

Comprometidas:
18

Entregadas:
12

Pendientes:
6

Tipos de evidencia:
- fotos
- videos
- listas de asistencia
- confirmaciones de beneficiarios
- informe de fiscalización

Origen:
- ejecutor
- beneficiarios
- financiadores
- productores de evidencia
- fiscalizador

Estado:
10 revisadas
2 pendientes de revisión
0 observadas
```

### Rule

> Evidence is not blind trust. It is material that can be reviewed, contradicted, and traced.

## 8. Comments detail

Opened when the citizen clicks comments.

The panel should organize civic discussion without turning it into a social media feed.

Example:

```text
Comentarios

35 comentarios

Pendientes de respuesta:
4

Respondidos por el ejecutor:
18

Observaciones destacadas:
- dudas sobre selección de beneficiarios
- consulta sobre uso del recinto
- pregunta sobre continuidad del programa

[Ver conversación]
[Comentar]
```

## 9. Complaint detail

Opened when the citizen clicks complaints.

If there are no complaints:

```text
Denuncias

No hay denuncias registradas para este proyecto.

Puedes denunciar:
- información falsa
- conflicto de interés no declarado
- beneficiarios inexistentes
- evidencia dudosa
- incumplimiento
- mal uso de fondos
```

If there are complaints:

```text
Complaints

Open:
2

Resolved:
1

Blocking:
1

Pending quote:
1

Support window:
100 supports required within 30 days

Reserved review funding:
Activates after fiscalizer quote and support threshold

Project status:
Observed until the admitted blocking complaint or scoped systemic pause is resolved.

[View complaints]
[File complaint]
```

Complaint detail should show the applicable complaint policy, support window, quote status, reserved review funding status, affected scope, any scoped systemic pause, and whether any material/legal effect requires referral to a court, regulator, or competent authority.

## 10. Missing condition detail

Opened when the citizen clicks a condition required for the project to become execution-ready.

Example:

```text
Falta 1 fiscalizador

Este proyecto todavía no puede pasar a ejecución porque le falta un fiscalizador responsable.

Por qué importa:
Sin fiscalizador no hay una parte independiente encargada de revisar cumplimiento, evidencias e hitos.

Qué puede pasar ahora:
- alguien elegible puede ofrecerse
- el proyecto puede esperar
- el plazo puede vencer
- el proyecto puede reformularse
```

## 11. Alert detail

Opened when the citizen clicks an alert.

Alerts should explain:

- what happened;
- whether it blocks the project;
- what is being reviewed;
- who can respond;
- what happens next.

Alerts should be concise on the dashboard, but clear in Layer 3.

## What Layer 3 should not do

Layer 3 should not:

- show the entire project sheet;
- expose raw audit trails by default;
- mix all signals into one large page;
- require technical knowledge;
- hide the action available to the citizen;
- force the citizen into expert mode.

## Relationship with other layers

Layer 2 shows the project dashboard.

Layer 3 explains a specific clicked signal.

Layer 4 shows the full citizen project sheet.

Layer 5 shows the audit trail.

## Design rule

> Layer 3 explains one signal at a time: meaning, status, importance, verification, and action.

## Status

Accepted as Citizen Signal Detail Layer v0.
