# Citizen Automatic Allocation Profile Flow v0

## Purpose

This document freezes the flow for configuring an automatic allocation profile.

An automatic allocation profile lets a citizen participate without manually choosing projects every period.

It also provides the base allocation rule that resumes when budget delegation is revoked, rejected, expired, or resigned.

## Core principle

> Automatic allocation is a citizen-configured rule for distributing their civic allocation. It is not delegation to another actor and it is not a hidden system decision.

On first active use of the platform, the citizen should select or acknowledge a base allocation profile. The public system default may be selected as that profile.

Budget delegation should not become active until the citizen has a selected base allocation profile or fallback rule.

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
- hide why a project was selected;
- trap the citizen in a profile they cannot change;
- accumulate unused allocation indefinitely unless the protocol explicitly allows it.

## Design rule

> Automatic allocation should reduce friction without removing citizen agency, visibility, or control.

## Status

Accepted as Citizen Automatic Allocation Profile Flow v0.
