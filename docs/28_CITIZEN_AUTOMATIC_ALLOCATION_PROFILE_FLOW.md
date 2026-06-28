# Citizen Automatic Allocation Profile Flow v0

## Purpose

This document freezes the flow for configuring an automatic allocation profile.

An automatic allocation profile lets a citizen participate without manually choosing projects every period.

## Core principle

> Automatic allocation is a citizen-configured rule for distributing their civic allocation. It is not delegation to another actor and it is not a hidden system decision.

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

## Flow steps

```text
1. Citizen starts automatic profile configuration
2. System explains what it does
3. Citizen chooses value preferences
4. Citizen chooses territory preferences
5. Citizen chooses project-state preferences
6. Citizen chooses risk/control preferences
7. Citizen chooses fallback rules
8. Citizen reviews simulation
9. Citizen confirms profile
10. Profile runs each period and reports allocations
```

## 1. Explanation

Example:

```text
Tu perfil automático distribuye tu asignación cívica según reglas que tú configuras.

Puedes cambiarlo cuando quieras.

No entrega dinero inmediatamente al ejecutor: los aportes siguen sujetos a condiciones, hitos, evidencia y fiscalización.
```

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
- ignore project control conditions;
- allocate to projects with blocking issues if rules forbid it;
- hide why a project was selected;
- trap the citizen in a profile they cannot change;
- accumulate unused allocation indefinitely unless the protocol explicitly allows it.

## Design rule

> Automatic allocation should reduce friction without removing citizen agency, visibility, or control.

## Status

Accepted as Citizen Automatic Allocation Profile Flow v0.
