# Citizen Fiscalizer Offer Flow v0

## Purpose

This document freezes the flow for a citizen or organization offering to become a fiscalizer for a project.

Fiscalization is a responsibility role. It is not the same as commenting, observing, supporting, or funding.

## Core principle

> Offering to fiscalize is an accountable role request. The executor must not privately appoint the actor that reviews its own performance.

## Main question

```text
How can an eligible actor offer to review and validate a project's execution?
```

## Entry points

The flow can start from:

- projects that need fiscalizer;
- compact project list;
- project dashboard;
- fiscalizer detail panel;
- full project sheet.

Visible button:

```text
[Ofrecerme como fiscalizador]
```

Where the project already has a primary fiscalizer and protocol permits supplemental control:

```text
[Offer as secondary fiscalizer]
[Offer fiscalization audit]
```

For organizations:

```text
[Ofrecer a mi organización como fiscalizadora]
```

## Flow steps

```text
1. Actor clicks Offer as fiscalizer
2. System explains role and responsibility
3. Eligibility and relationship check
4. Offer form
5. Offer record is shown in the project
6. Selection or acceptance process
7. Confirmation and role activation
8. Reporting and reputation consequences
```

## 1. Role explanation

Before accepting the offer, the system should explain the role clearly.

Example:

```text
Fiscalizar este proyecto significa asumir responsabilidad por revisar hitos, evidencias y cumplimiento.

No es sólo opinar.
No es apoyar al ejecutor.
No es validar sin revisar.
```

## 2. Eligibility and relationship check

The system should check whether the actor is eligible.

Possible checks:

- verified identity;
- actor type: citizen or organization;
- minimum reputation or credentials if required;
- declared relationship with executor;
- availability for required dates;
- territory or travel feasibility;
- required expertise for project type;
- current ability to accept this role.

The system should ask direct questions:

```text
¿Tienes relación personal, laboral, comercial o familiar con el ejecutor?
¿Recibirás algún beneficio directo del proyecto?
¿Tienes capacidad de revisar evidencia y emitir informes en los plazos requeridos?
```

## 3. Offer form

The offer should include:

- actor offering;
- project;
- role requested;
- scope to review;
- availability;
- methodology summary;
- required budget, if paid;
- travel or logistics needs;
- qualifications or experience;
- relationships declared;
- evidence/report deliverables;
- acceptance of responsibility and reputation effects.

Example:

```text
Oferta de fiscalización

Actor:
Fundación Control Ciudadano

Rol:
Fiscalizador responsable

Qué revisará:
- cumplimiento de hitos
- evidencia de actividades
- asistencia declarada
- uso de recursos

Informes comprometidos:
3 informes

Relación con ejecutor:
Sin relación declarada

Presupuesto requerido:
$800.000
```

## 4. Visibility

The offer should be visible enough for community observation.

Visible fields should include:

- who offers;
- role requested;
- scope;
- cost, if any;
- relationships declared;
- qualifications summary;
- methodology summary;
- status.

Private data may be redacted according to privacy rules.

## 5. Selection or acceptance

Selection depends on project rules.

Low-risk projects may allow simpler acceptance.

Medium, large, remote, or technically complex projects may require:

- offer window;
- multiple offers;
- eligibility checks;
- relationship review;
- reputation weighting;
- independent selection rule;
- random or semi-random assignment among eligible offers;
- approval by the protocol-defined mechanism.

Rule:

> The executor should not directly control the actor responsible for validating its own performance.

After the primary fiscalizer is accepted, Core v0 may allow at most one secondary fiscalizer or fiscalization auditor if supplemental control funding and an admissible offer exist. This secondary role reviews, contrasts, or audits the primary fiscalization. It does not replace the primary fiscalizer and does not block execution automatically.

## 6. Confirmation

When accepted:

```text
Fiscalizador confirmado

Rol:
Fiscalizador responsable

Proyecto:
Escuela deportiva infantil en Maipú

Responsabilidades:
- revisar evidencia
- emitir informes
- alertar incumplimientos
- validar o rechazar hitos según reglas
```

The project is automatically added to Following.

## 7. Rejection or pending status

If the offer is rejected or pending, the actor should see why.

Examples:

- relationship issue;
- eligibility not met;
- project already has fiscalizer;
- project already has both primary and secondary fiscalization;
- offer window still open;
- missing information;
- another eligible fiscalizer was selected;
- budget does not fit the control budget;
- required expertise not met.

## 8. Responsibility and reputation

Accepted fiscalizers gain role-based responsibility.

Reputation may be affected by:

- timely reports;
- evidence review quality;
- independence;
- incorrect validation;
- ignored contradictions;
- late reports;
- undisclosed relationship;
- community review of fiscalization quality.

## What this flow should not do

This flow should not:

- let the executor privately appoint its own reviewer;
- confuse fiscalization with comments;
- hide declared relationships;
- hide fiscalization cost;
- hide methodology and deliverables;
- activate responsibility without explicit acceptance;
- rely only on first-come-first-served selection for complex projects.
- create unlimited secondary fiscalizers or fiscalization auditors.

## Design rule

> Fiscalization is an accountable control role. The offer flow must balance openness, eligibility, independence, transparency, and resistance to capture.

## Status

Accepted as Citizen Fiscalizer Offer Flow v0.
