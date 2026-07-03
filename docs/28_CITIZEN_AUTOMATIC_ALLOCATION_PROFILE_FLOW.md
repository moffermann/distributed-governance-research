# Citizen Automatic Allocation Profile Flow v0

## Purpose

This document freezes the flow for configuring an automatic allocation profile.

An automatic allocation profile lets a citizen participate without manually choosing projects every period.

It also provides the base allocation rule that resumes when budget delegation is revoked, rejected, expired, or resigned.

## Core principle

> Automatic allocation is a citizen-configured rule for distributing their civic allocation. It is not delegation to another actor and it is not a hidden system decision. ^r3b93d8e5

Automatic allocation can execute only inside the configured assignable public-purpose share and only toward eligible projects or protocol-authorized control, complaint-review, mitigation, planning, or fiscalization vehicles. It cannot allocate the non-assignable common pool, a protected essential floor marked as non-assignable, an excluded lane, bypass project eligibility, override phase gates, release funds, or treat profile output as proof of social legitimacy.

Where a Planning Scope exposes an underfunded protected target, an official or citizen-selected profile may route assignable funds toward the distributed service lane only if the lane, reason, and rule are visible. The profile should not silently convert a protected floor into ordinary popularity funding.

Where a continuity renewal window or continuity-need Idea is open under A006, a profile may route assignable funds only to eligible follow-on projects, maintenance projects, mitigation, wind-down work, or other protocol-authorized vehicles. It must not automatically renew the current executor, fund a non-assignable protected floor, or treat the existence of a renewal window as proof that the follow-on project is valid.

On first active use of the platform, the citizen should select or acknowledge a base allocation profile. The public system default may be selected as that profile.

Budget delegation should not become active until the citizen has a selected base allocation profile or fallback rule.

When a funding attempt expires unfunded, returned or releasable commitments may follow the citizen's automatic allocation profile or selected fallback rule. A profile may include a transparent preference for eligible projects close to funding completion, but it must not route funds into expired, materially blocked, non-assignable, or ineligible lanes.

## Main question

```text
How can a citizen define default rules so their available allocation is used even when they do not manually choose projects?
```

## Entry points

The flow can start from:

- home layer;
- bottom navigation tab;
- profile;
- funding confirmation;
- inactivity prompt;
- first-session onboarding;
- pre-delegation requirement;
- delegation screen;
- monthly allocation reminder.

Visible buttons:

```text
[Configurar perfil automático]
[Usar perfil automático]
[Editar preferencias]
```

## Difference from delegation

Delegation authorizes another actor.

Automatic allocation uses citizen-defined rules.

Example:

```text
Delegation:
Fundación X decides within my selected scope.

Automatic profile:
The system allocates according to my configured preferences.
```

Priority rule:

```text
Active delegation has priority within the delegated scope.
Automatic allocation rules execute only where no active delegation governs the same balance or scope.
```

If delegation is active, the system should show:

```text
Automatic rules are inactive while delegation is active in this scope.
```

## Flow steps

```text
1. Citizen starts automatic profile configuration
2. System explains what it does
3. Citizen chooses or acknowledges a base profile
4. Citizen chooses value preferences, if customizing
5. Citizen chooses territory preferences, if customizing
6. Citizen chooses project-state preferences, if customizing
7. Citizen chooses risk/control preferences, if customizing
8. Citizen chooses fallback rules
9. Citizen reviews simulation
10. Citizen confirms profile
11. Profile runs each period and reports allocations
```

## 1. Explanation

Example:

```text
Tu perfil automático distribuye tu asignación cívica según reglas que tú configuras.

Puedes cambiarlo cuando quieras.

No entrega dinero inmediatamente al ejecutor: los aportes siguen sujetos a condiciones, hitos, evidencia y fiscalización.
```

## Base profile selection

The first active session should not leave the citizen without a fallback rule.

Simple options:

```text
Use public system default
Choose official profile
Create custom profile
Hold available balance until manual decision, if the protocol allows it
```

Official profiles may include transparent options such as:

```text
Support underfunded protected scopes
Support continuity-sensitive services
Support open continuity renewal needs
Support eligible projects close to funding completion
Support low-visibility beneficiary groups
```

These options must show the active Planning Scope and whether the contribution funds an assignable service lane, not a non-assignable protected floor.

For open continuity renewal needs, the option should also show whether the profile funds the current service period, a follow-on project, maintenance, replacement, mitigation, or wind-down.

For close-to-completion routing, the option should show the active funding window, remaining gap, deadline, blocker status, and whether the project is eligible for funding-window extension or ordinary allocation. The profile should not keep funding commitments locked after a funding attempt expires.

If the citizen later delegates budget allocation, the selected base profile remains stored but inactive within the delegated scope while delegation is active.

If delegation ends, the selected base profile resumes from the next applicable allocation cycle.

## 2. Value preferences

The citizen chooses values they care about.

Example:

```text
¿Qué temas quieres priorizar?

👧 Infancia
📚 Educación
❤️ Salud
🧓 Adulto mayor
🌳 Naturaleza
⚽ Deporte
🎭 Cultura
👥 Comunidad
```

The citizen may assign weights:

```text
Infancia: 40%
Educación: 30%
Naturaleza: 30%
```

Or use simple priority order:

```text
1. Infancia
2. Educación
3. Naturaleza
```

Core v0 should support a simple version first.

## 3. Territory preferences

The citizen can choose where to prioritize.

Examples:

```text
Mi comuna
Mi región
Todo el país
Zonas con menor financiamiento
Zonas con urgencia
```

The profile may combine value and territory:

```text
Infancia + mi comuna
Naturaleza + mi región
Educación + zonas con menor financiamiento
```

## 4. Project-state preferences

The citizen can choose what kinds of projects to favor.

Examples:

```text
Casi listos para ejecutar
Necesitan poco financiamiento para cerrar
Necesitan fiscalizador
Con mucha evidencia comprometida
Nuevos proyectos
Proyectos con baja concentración de financiamiento
Ámbitos protegidos subfinanciados, si existe un carril asignable
```

## 5. Control preferences

The citizen can choose how strict the profile should be.

Examples:

```text
Sólo proyectos con fiscalizador confirmado
Permitir proyectos abiertos que todavía buscan fiscalizador
No financiar proyectos con denuncia bloqueante
No financiar proyectos con información incompleta
Priorizar proyectos con evidencia fuerte
```

Default should be conservative enough for trust, but not so strict that no projects receive allocation.

## 6. Fallback rules

The citizen must choose what happens if the profile cannot find matching projects.

Possible rules:

```text
Return to available balance
Use system default allocation
Broaden criteria gradually
Hold until next period if allowed
Delegate fallback to selected delegate
Route to underfunded protected scopes only where the profile and lane are public
```

Core v0 should avoid indefinite accumulation unless the broader protocol allows it.

The selected fallback rule is also relevant when delegation ends. The system should not choose a new fallback silently after delegate resignation; it should resume the citizen's previously selected base profile or fallback rule.

## 7. Simulation before confirmation

Before activation, the system should show a simple simulation using current projects.

Example:

```text
If your profile ran today, it would allocate:

$12.000 to Escuela deportiva infantil en Maipú
$10.000 to Biblioteca comunitaria en Valparaíso
$8.000 to Reforestación barrial en Chillán

Criteria used:
Infancia, educación, naturaleza, my region, almost ready.
```

The citizen can adjust before confirming.

## 8. Confirmation

Example:

```text
Perfil automático activado

Prioridades:
Infancia, educación, naturaleza

Territorio:
Mi región

Control:
No financiar proyectos con denuncias bloqueantes

Frecuencia:
Mensual

[Editar perfil]
[Ver simulación]
```

## 9. Periodic report

After each run, the citizen should receive a report.

Example:

```text
Tu perfil automático asignó $42.000 este mes.

Proyectos:
- $12.000 a Escuela deportiva infantil en Maipú
- $10.000 a Biblioteca comunitaria
- $8.000 a Reforestación barrial
- $12.000 quedó disponible porque no hubo proyectos suficientes bajo tus reglas
```

Reports should explain why allocations happened.

Reports should also state whether any automatic rule was skipped because active delegation had priority.

The citizen may configure report channel and frequency, but each profile run should remain available in-app. App-only or silent notification mode must not hide allocation history, skipped-rule explanations, fallback activation, or the profile that resumed after delegation ended. ^r3ee67de6

## 10. Edit, pause, or deactivate

The citizen should be able to:

- edit values;
- edit territory;
- edit fallback rules;
- pause profile;
- deactivate profile;
- run a new simulation;
- review past automatic allocations.

## What this flow should not do

The automatic profile flow should not:

- make hidden decisions without citizen-configured rules;
- pretend to be delegation;
- compete silently with active delegation;
- allow budget delegation to activate with no base profile or fallback rule;
- ignore project control conditions;
- allocate to projects with blocking issues if rules forbid it;
- automatically renew an expiring continuity project or privilege the current executor;
- hide why a project was selected;
- trap the citizen in a profile they cannot change;
- accumulate unused allocation indefinitely unless the protocol explicitly allows it.

## Design rule

> Automatic allocation should reduce friction without removing citizen agency, visibility, or control.

## Status

Accepted as Citizen Automatic Allocation Profile Flow v0.
