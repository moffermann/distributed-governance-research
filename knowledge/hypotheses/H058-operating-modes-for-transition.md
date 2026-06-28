# H058 — Operating Modes for Transition

## Hypothesis

The platform should support distinct operating modes for public functions during transition. These modes are not policy decisions made by the platform; they are technical states that allow the implementing country to configure how open or tutored a public function is at a given moment.

## Rationale

A country may begin with a controlled transition and later move toward broader distributed operation. The platform should be able to represent those different states without deciding the political pace of transition.

The correct concept is **operating mode**, not category.

A public function such as sports, culture, education, health, infrastructure, or local development may operate under different modes depending on the country's implementation decision.

## Possible operating modes

### 1. Closed mode

The public function is not open to project publication or distributed allocation inside the platform.

```text
Example:
Health is not yet part of the platform.
```

### 2. Tutored mode

Projects associated with the public function require institutional moderation before publication.

```text
Example:
Sports is open, but projects must be approved by the sports institution before publication.
```

This is useful during early transition when the institution remains legally or administratively responsible for the function.

### 3. Semi-open mode

Most projects can be published under general rules, but some require prior review because of risk, amount, scope, ambiguity, or special public-function rules.

```text
Example:
Small local sports projects publish directly, but high-budget infrastructure projects require review.
```

### 4. Open mode

Projects operate under the ordinary distributed protocol without institutional pre-publication moderation.

Control happens through transparency, fiscalization, reputation, complaints, guarantees, and observability.

### 5. Suspended mode

The public function is temporarily frozen or restricted because of serious issues such as fraud, lack of fiscalization capacity, operational overload, implementation failure, or a decision of the implementing authority.

## Platform role

The platform supports these modes technically. It does not decide when a public function should move from one mode to another.

The implementing country or authorized governance process decides the mode.

## Mode change registration

When a public function changes operating mode, the platform should register:

- public function affected;
- previous mode;
- new mode;
- effective date and time;
- authorized actor or process that made the change;
- justification if provided;
- parameters modified;
- treatment of pending projects;
- affected project counts;
- public history of the mode change.

## Effect on existing projects

As a default principle, mode changes should not retroactively alter obligations of projects already published, funded, or executing under a prior mode.

Published and funded projects continue under the rules that applied when they entered their current state, unless the implementing authority defines an exceptional transition rule.

## Effect on pending moderation

Projects pending moderation should be treated according to the new operating mode once the mode change becomes effective.

Example:

```text
Sports mode changes:
Tutored → Open

Projects pending moderation:
No longer require institutional approval.
If they satisfy the ordinary publication requirements, they should proceed to publication.
```

For other mode changes:

```text
Tutored → Semi-open:
  pending projects that no longer require review proceed under ordinary rules;
  pending projects that meet semi-open review criteria remain under review.

Open → Tutored:
  new drafts and unpublished projects become subject to moderation;
  projects already published are not retroactively unpublished.

Any mode → Suspended:
  new publication and/or funding activity may pause according to the suspension rule;
  already funded or executing projects require explicit treatment in the suspension decision.
```

## No retroactive punishment

A project should not be penalized merely because the public function changed operating mode after the project was created.

Mode transitions should preserve traceability and avoid retroactive instability.

## Relationship with H057

H057 defines the tutored moderation regime used when a public function is in tutored mode.

H058 defines the broader set of possible operating modes.

## Observability

The platform should report which mode each public function is operating under and should track mode changes over time.

Potential metrics:

- public functions by operating mode;
- projects blocked by closed mode;
- projects moderated under tutored mode;
- moderation time;
- mode changes over time;
- projects affected by suspension;
- projects released from pending moderation after a mode change;
- transition from tutored to semi-open or open mode.

## Principle

> The country decides the transition pace; the platform represents the operating mode and enforces the corresponding rules. Mode changes apply forward, while pending unpublished projects follow the new mode once it becomes effective.

## Status

Transition-operation hypothesis. Extends H054, H055, and H057.
