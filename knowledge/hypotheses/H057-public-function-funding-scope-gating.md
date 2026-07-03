# H057 — Tutored Transition Moderation as an Operating Mode

## Hypothesis

During a partial transition pilot, the public function opened by an implementing institution can operate under a tutored operating mode before becoming fully distributed.

In this tutored operating mode, projects associated with that public function pass through institutional moderation before publication.

This moderation is administered by the implementing public authority or its designated administrators.

H009 now frames this as `Planning Scope Alignment`: the authority may define or interpret the active Planning Scope in tutored mode, but the scope and material scope decisions must be public, versioned, and auditable. ^re803d690

H057 is aligned with [[../../docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|A020]]: a tutored authority's power to define or interpret the active scope is the agenda-setting power A020 bounds, so scope narrowing or reclassification must surface as a versioned Governance Resolution with a timeout and leave an inspectable trace rather than silently excluding whole classes of demand.

Integrated C007/C020 correction:

```text
The public authority remains external, not an internal project actor.
The authority may perform external tutored-scope moderation when the operating mode grants it review authority.
The authority may not use tutored-scope power to privilege its own controlled operator inside the same scope.
Material tutored decisions must become public Governance Resolution objects.
Review silence must become a public Review Timeout Resolution under the configured timeout policy.
Core v0 preserves minimum data for later moderation-pattern audit, while formal abuse dashboards and advanced comparability analytics remain Extension v1+.
```

This is an exception to the fully distributed philosophy, justified by the fact that transition pilots operate inside an existing state structure, with existing budgets, legal mandates, institutional responsibilities, and parallel traditional programs.

## Rationale

In a transition pilot, a country may allocate only a fraction of a public function's budget to the distributed platform.

Example:

```text
Public function:
  Sports

Distributed pilot:
  5% of sports budget

Traditional institutional allocation:
  remaining 95% of sports budget
```

A purely automatic classification or scope-gating mechanism is not enough because:

- the platform may not have visibility into the institution's traditional 95% portfolio;
- a project may appear sports-related but not be eligible under the ministry's legal or administrative mandate;
- some activities may be socially perceived as sports but officially belong to culture, education, recreation, or another function;
- a project may duplicate, conflict with, or compete against a traditional program already funded outside the platform;
- there may be no clear automatic rule to decide whether the project belongs inside or outside the pilot scope.

## No separate funding-source concept in the core model

The core project model does not need a separate "funding source" concept for this issue.

Projects are created under a public function or project classification, such as:

```text
sports
culture
education
health
infrastructure
```

During transition, if a public function is operating in tutored mode, projects associated with that function must pass the relevant external tutored-scope review before publication.

## Example

A traditional spinning-top competition may be socially recognized by some citizens as sport or recreation.

However, if the sports institution does not officially recognize it as eligible under the sports public function, the project may need to be reclassified as culture, heritage, education, or community recreation.

The platform should not decide that boundary automatically if the implementing institution is legally or administratively responsible for that public function during transition.

## Tutored operating mode

During transition, the implementing institution may act as an **external tutored-scope review authority** for the public function it has chosen to open.

This means it can approve, reject, request reformulation, or suggest reclassification when a project associated with that public function is submitted under the tutored operating mode.

The decision is not a general judgment about whether the project has value. It is a scope, eligibility, duplication, or compatibility decision inside the tutored operating mode.

```text
Project rejected by external sports authority:
  Not approved for publication as a sports project.

Possible next action:
  Reformulate, reclassify, or submit under another public function such as culture.
```

This is moderation in practical terms, but it is not an internal platform actor role. The public authority remains external to the project actor set and must publish material decisions as Governance Resolutions.

## Example: duplicate public project

```text
Public function:
  Sports

Distributed pilot:
  5% of the Ministry of Sports budget

Traditional institutional portfolio:
  remaining 95% of the ministry budget

Submitted project:
  Multi-court sports complex in Macul on Street X

Existing traditional project:
  The ministry already approved the same multi-court complex in Macul on Street X
```

If the authority does not reject or request reformulation, the platform may duplicate public spending and distort the evaluation of the distributed pilot.

Accepted treatment:

```text
Governance Resolution:
  rejected for duplicate existing public project.

Responsible authority:
  Ministry of Sports / authorized tutored-review office.

Reason:
  same facility, same location, already approved under the traditional portfolio.

Suggested next path:
  change location, complement the existing project, reclassify, or reformulate.
```

Citizens may comment, support, object, and follow the resolution. Aggregate metrics should show whether duplication rejections become a genuine boundary control or a bottleneck against distributed proposals.

## Rejection is not public punishment, but it is publicly reviewable

A moderation rejection should not:

- invalidate the project forever;
- destroy the draft;
- create reputational damage for the proponent;
- be treated as misconduct;
- hide the fact that a governance decision occurred.

It is a tutored governance decision.

The creator may revise, reformulate, reclassify, and resubmit.

If an authority rejects publication, the system should create a public Governance Resolution that citizens can comment on, support, object to, and follow. The resolution should explain the reason, the responsible authority, the affected project or idea, the review window, and the next available options.

## Administration panel

For transition pilots, an administration panel is useful and legitimate if it is limited to the tutored operating mode and public-function scope.

The external tutored-scope reviewer may:

- approve projects before publication;
- reject projects before publication;
- request reformulation;
- suggest reclassification;
- classify projects;
- flag duplication risks;
- apply pilot parameters authorized by the implementing state;
- monitor pilot operation;
- document internal reasons for approval or rejection.

Configuration of pilot parameters remains a country implementation or authorized administration function. Material configuration changes should remain public, versioned, and traceable under C019 and C020.

## Human responsibility

Eligibility decisions that depend on institutional mandate, existing programs, official recognition, or legal interpretation should remain under human responsibility.

The platform can assist with structured fields, checklists, classification, and traceability, but it should not pretend to solve all ambiguous eligibility boundaries algorithmically.

## Visibility and traceability of moderation

Because this is an exception to the fully distributed architecture, moderation must be traceable inside the administration system.

Material moderation outcomes should be public civic objects by default, subject to privacy and safety redaction where necessary.

The system should record:

- who approved or rejected the project;
- under what external authority or authorized tutored-review role;
- for which public function or operating mode;
- when the decision was made;
- what reason was given;
- whether reformulation or reclassification was suggested;
- whether the project was later resubmitted;
- whether the decision was appealed or challenged, if appeals exist.

Public reporting should include both individual Governance Resolutions for material decisions and aggregate observability metrics.

Examples of aggregate transparency:

```text
number of projects approved;
number of projects rejected before publication;
common rejection reasons;
average moderation time;
number of reformulations requested;
number of projects reclassified.
```

A011 boundary:

```text
Core v0 should preserve structured case-level fields for later pattern audit:
decision result, reason category where practical, Planning Scope, rule/version,
responsible authority or process, review window, decision date, review time,
timeout status, suggested next path, AuditEvent reference, and known
authority-linked operator relationships.

Formal moderation-abuse tests, citizen-facing pattern dashboards,
automatic possible-abuse warnings, selective-duplicate analytics,
and operator-concentration analytics remain Extension v1+ or
country/administrator observability.
```

## Parameter configuration

The implementing institution may configure pilot parameters if the pilot design grants it that authority.

Examples:

- eligible public-function classifications;
- publication requirements;
- moderation queues;
- project templates;
- emergency marking rules;
- review windows;
- additional documentation requirements;
- fiscalization requirements.

This is similar to the earlier distinction between protocol, meta-governance, and administration system, but applied to a tutored transition pilot.

In a mature fully distributed regime, these powers should be reduced, transferred, or constrained by the ordinary distributed protocol.

## Not a permanent central authority

This external tutored-scope review authority should be understood as transitional or implementation-specific.

It exists because the country is not yet operating under a fully distributed architecture and because the institution remains legally and administratively responsible for the public function it is opening.

The goal is not to recreate permanent ministerial control inside the platform, but to allow a controlled transition before broader autonomy.

## Relationship to observability metrics

The platform should measure how this moderation regime behaves:

- number of projects approved;
- number of projects rejected before publication;
- rejection reasons;
- time to moderation decision;
- reformulations requested;
- reclassifications suggested;
- appeals or observations if available;
- concentration of moderation decisions;
- share of projects blocked before publication.

This allows the country and society to observe whether the tutored operating mode is enabling transition or becoming a bottleneck, without turning each rejected draft into a public reputational event. In Core v0, the emphasis is preserving comparable source data and basic administrative observability. Advanced pattern dashboards and formal abuse tests can be added later.

Every tutored review window should have a configured timeout policy. If the authority does not decide within that period, the system should automatically create a Review Timeout Resolution.

## Principle

> In a transition pilot, the external public authority may perform tutored-scope moderation for publication inside a tutored operating mode, but that moderation must be limited, publicly resolvable, aggregately observable, time-bounded, and non-punitive for rejected drafts.

## Status

Transition-implementation boundary hypothesis. Replaces the weaker automatic scope-gating idea with a tutored moderation model for public functions during transition.
