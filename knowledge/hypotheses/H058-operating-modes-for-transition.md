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

The public function is temporarily frozen because of serious issues such as fraud, lack of fiscalization capacity, operational overload, implementation failure, legal problems, or a decision of the implementing authority.

Suspension should be complete for the affected public function, not partial by actor, project type, or lifecycle stage. This keeps the rule simple and prevents ambiguity during a crisis.

In suspended mode:

```text
new projects cannot be published;
projects pending publication or moderation do not advance;
new financing activity is paused;
new disbursements are paused unless the suspension decision explicitly preserves critical payments;
existing projects remain historically visible;
no completed action is retroactively erased.
```

The implementing authority may later restore the function to another operating mode.

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

Suspended mode is the exception: it can pause forward activity for the affected public function, including pending publication, new financing, and new disbursement activity, while preserving the historical validity of actions already completed.

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
  pending projects do not advance;
  new publication, financing, and disbursement activity are paused for the affected public function;
  prior completed actions remain valid and visible.
```

## No retroactive punishment

A project should not be penalized merely because the public function changed operating mode after the project was created.

Mode transitions should preserve traceability and avoid retroactive instability.

Suspension pauses future activity but does not erase or punish prior valid activity by itself.

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

> The country decides the transition pace; the platform represents the operating mode and enforces the corresponding rules. Mode changes apply forward, while pending unpublished projects follow the new mode once it becomes effective. Suspension is complete for the affected public function and pauses future activity without erasing prior valid actions.

## Status

Transition-operation hypothesis. Extends H054, H055, and H057.
