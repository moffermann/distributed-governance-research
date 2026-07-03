# Idea Entity, Navigation, and C001 Resolution v0

## Purpose

This document resolves contradiction C001 from the v0 contradiction checklist.

C001 was originally framed as a tension between allowing public proposals without an executor and preventing financeable projects without responsible execution. The resolution is not to create a new intermediate project state. The resolution is to create a separate entity: `Idea`.

## Status

Accepted as the v0 resolution for C001.

## Core distinction

```text
Idea ≠ Project
```

An idea is not a project in an early state. It is a separate civic entity.

A project is a financeable and executable commitment. It requires an executor, budget, milestones, evidence, fiscalization, and responsibility.

An idea is a civic demand or proposal. It can express value, beneficiaries, territory, and support, but it does not execute anything and cannot receive project funding. ^rbf4e6afb

## Definition of Idea

An `Idea` is a citizen-generated civic proposal that expresses a possible public value or social demand before it becomes one or more projects.

An idea may include:

- title;
- problem or need;
- proposed direction;
- territory;
- expected value;
- suggested value icons;
- possible beneficiaries;
- suggested metrics;
- comments;
- supports;
- objections;
- followers;
- related ideas;
- associated projects.

An idea does not include:

- responsible executor;
- execution budget;
- enforceable milestones;
- fulfillment evidence obligations;
- fiscalization of execution;
- disbursement;
- project-level complaint process;
- execution reputation effects.

## Definition of Project

A `Project` is a concrete public promise with an accepted responsible executor, budget, milestones, evidence, fiscalization, and lifecycle controls.

A project may respond to one or more ideas.

A project can be funded, fiscalized, executed, corrected, paused, reformulated, revoked, and closed.

## Relationship between Idea and Project

The relationship is many-to-many.

```text
One Idea may inspire many Projects.
One Project may respond to many Ideas.
```

Example:

```text
Idea:
More free sports opportunities for children in Maipú.

Associated Projects:
- Football school for 80 children in Maipú.
- Basketball program for girls in Maipú.
- Sports workshops in municipal schools.
- Neighborhood children's league.
```

The idea aggregates civic demand. The projects execute concrete responses.

## Idea actions

A citizen may:

- create an idea;
- support an idea;
- object to an idea;
- follow an idea;
- comment on an idea;
- suggest improvements;
- mark similar ideas;
- link or propose a related project;
- see projects associated with the idea.

A citizen may not:

- fund an idea;
- request disbursement for an idea;
- file a project-level execution complaint against an idea;
- fiscalize execution of an idea;
- treat support for an idea as project approval.

## Support vs objection

The primary positive signal of an idea is support.

```text
Support = I think this idea is worth attention or project development.
```

The primary negative or critical signal is not a simple dislike. It is a structured objection.

```text
Objection = I see a problem with this idea, and I classify why.
```

Objection reasons may include:

- not a priority;
- already exists or already covered;
- beneficiaries unclear;
- too narrow or benefits too few;
- possible negative effects;
- weak value thesis;
- weak metrics;
- wrong territory;
- duplicate or similar idea;
- missing information;
- other.

Rule:

> Ideas should not use a simple dislike. They should use structured objections that produce useful civic information.

## Idea quick card

The quick card for an idea should show:

```text
Title
Suggested value icons
Territory
Support count
Objection count
Follower count
Comment count
Associated project count
Active associated projects
Completed associated projects
Status
Primary actions: Support / Object / Follow
```

Example:

```text
More free sports opportunities for children in Maipú

👧 Childhood · ⚽ Sports · 👥 Community

1,240 supports · 310 objections
380 followers · 72 comments
5 associated projects · 3 active · 1 completed

Status: Needs project

[Support] [Object] [Follow]
```

## Idea detail page

The detail page for an idea should include:

1. idea header;
2. support and objection actions;
3. support, objection, follower, comment, and associated project metrics;
4. citizen summary;
5. expected value;
6. possible beneficiaries;
7. suggested metrics;
8. territory;
9. idea status;
10. associated projects;
11. interested executors, if any;
12. comments and discussion;
13. similar or duplicate ideas;
14. change history.

## Idea states

Recommended v0 states:

```text
Draft
Published
Under moderation
Needs project
Has associated projects
Partially addressed
Addressed
Archived
Merged
Duplicate
```

Ideas do not have project execution states such as:

```text
Execution-ready
In execution
Disbursement pending
Fiscalized
Revoked
```

Those belong to projects.

## Associated project metrics

Ideas should show whether they are being converted into action.

Recommended metrics:

```text
Associated projects
Active projects
Completed projects
Projects in creation or validation
Interested executors
```

This matters because an idea may be highly valuable not only because it has many votes, but because many concrete projects have emerged from it.

## Interested executors

An executor may express interest in an idea.

But interest is not responsibility.

Rule:

> An interested executor becomes responsible only when it creates or accepts a formal project with budget, milestones, evidence, fiscalization, and accepted execution responsibility.

## Navigation decision

Ideas and projects must have separate navigation entries.

Bottom navigation v0:

```text
Inicio
Proyectos
Ideas
Siguiendo
Financiar
```

The account/profile area should not occupy a bottom navigation slot.

Top right:

```text
Avatar / account menu
```

Avatar menu:

```text
Mi perfil
Ajustes
Mis reglas de financiamiento
Delegaciones
Notificaciones
Privacidad
Cerrar sesión
```

## Financing terminology

The bottom action should be called `Financiar`, not `Asignar`, when the user is acting on projects with civic resources.

`Financiar` is more direct and more citizen-readable.

Configuration remains separate:

```text
Financiar = operational action.
Mis reglas de financiamiento = configuration.
```

## Idea tab filters

The Ideas tab may use top filters such as:

```text
Populares
Nuevas
Necesitan proyecto
Con proyectos
Atendidas
```

`Necesitan proyecto` means the idea has not yet produced an associated project or still lacks a sufficient project response.

## Project tab filters

The Projects tab may use top filters such as:

```text
Todos
Casi listos
En ejecución
Necesitan algo
Cerrados
```

## Following tab filters

The Following tab may include:

```text
Todo
Proyectos
Ideas
Alertas
```

## Financing tab filters

The Financing tab may include:

```text
Manual
Automático
Delegado
Historial
```

## C001 final resolution

C001 is resolved as follows:

```text
Do not model executorless public proposals as project states.
Model them as a separate entity: Idea.
```

Final rule:

> An idea expresses civic demand. Its main signals are support, structured objections, comments, followers, and associated projects. A project expresses an executable public promise. Its main signals are funding, executor responsibility, milestones, evidence, fiscalization, disbursement, and closure.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- Core v0 scope freeze;
- consolidated entity/object/state map;
- diagram index;
- citizen interface model;
- home/discovery layer;
- project creation flow;
- contradiction checklist.

## Remaining risk

Ideas may still create popularity dynamics, duplication, or low-quality civic noise.

Mitigations:

- structured objection reasons;
- similar idea detection;
- duplicate merging;
- idea moderation for spam and abuse;
- associated project metrics;
- separate idea and project navigation.

## Design rule

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.
