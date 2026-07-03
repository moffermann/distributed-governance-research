# H058 — Operating Modes for Transition

## Status

Transition-operation hypothesis aligned with [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|C020]], [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]], and [[../../docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|A011]].

Operating modes are technical states that represent country implementation choices. The platform does not force a country to move toward open mode, but it must make tutored decisions, review windows, timeout policies, and tutored silence public, traceable, and auditable.

A011 clarifies that Core v0 should preserve the data needed to audit moderation patterns later, but full moderation-abuse dashboards, automatic possible-abuse findings, and advanced operator-concentration analytics remain Extension v1+ or country/administrator observability.

## Hypothesis

The platform should support distinct operating modes for public functions during transition. These modes are not policy decisions made by the platform; they are technical states that allow the implementing country to configure how open or tutored a public function is at a given moment.

## Rationale

A country may begin with a controlled transition and later move toward broader distributed operation. The platform should be able to represent those different states without deciding the political pace of transition.

The correct concept is **operating mode**, not category.

A public function such as sports, culture, education, health, infrastructure, or local development may operate under different modes depending on the country's implementation decision.

## C020 alignment

C020 clarifies that permanent tutored mode is not itself a contradiction. A country may keep a public function in tutored mode indefinitely, use the platform only under tutored conditions, never adopt the platform for that function, or abandon the system later.

The contradiction is opaque tutored governance.

When a public function operates in tutored mode:

- every material tutored decision should create a public Governance Resolution;
- every tutored submission should have a declared review window;
- every tutored operating mode should have a public timeout policy before projects are submitted;
- if the authority does not decide within the configured review window, the platform should create a Review Timeout Resolution automatically;
- timeout consequences may include visibility only, escalation, community override, or automatic approval, but they must be configured publicly before submission;
- external tutored-scope moderation remains compatible with C007 because the public authority does not become an internal project actor and does not privilege a controlled operator inside the same scope.

Example:

```text
Public function:
  Sports.

Operating mode:
  Tutored, with no declared transition path to open mode.

Project:
  Multi-court complex in Macul.

Authority decision:
  Rejected because the same facility and location already exist
  in the traditional ministry portfolio.

System record:
  Public Governance Resolution with responsible authority,
  applied scope rule, reason, suggested next path, and audit trail.
```

Timeout example:

```text
Review window:
  30 days.

Authority action:
  No decision issued within the configured window.

System action:
  Review Timeout Resolution created automatically.

Configured consequence:
  Community override trigger opens, if that policy was configured
  before submission.
```

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

Tutored mode may also be indefinite or permanent if the implementing country chooses that configuration. The platform should not imply a mandatory path toward open mode.

However, tutored mode must not become hidden discretionary governance. Each material decision should produce a public Governance Resolution, and each tutored mode should declare its review window and timeout policy before projects are submitted.

### 3. Semi-open mode

Most projects can be published under general rules, but some require prior review because of risk, amount, scope, ambiguity, or special public-function rules.

```text
Example:
Small local sports projects publish directly, but high-budget infrastructure projects require review.
```

### 4. Open mode

Projects operate under the ordinary distributed protocol without institutional pre-publication moderation.

Control happens through transparency, fiscalization, reputation, complaints, guarantees, and observability. ^r57196499

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

If no transition path exists, the platform should state that the mode is indefinite or permanent rather than implying distributed openness.

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
- declared transition path, if any;
- review window and timeout policy, if the new mode requires tutored review;
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

C020 supersedes any older interpretation that treated tutored-mode permanence as the contradiction. The required correction is public traceability: Governance Resolutions, Review Timeout Resolutions, configured timeout policies, and aggregate review metrics.

## Observability

The platform should report which mode each public function is operating under and should track mode changes over time.

Potential metrics:

- public functions by operating mode;
- projects blocked by closed mode;
- projects moderated under tutored mode;
- moderation time;
- governance resolutions issued;
- review timeout resolutions created;
- timeout policy distribution;
- timeout consequences activated;
- projects opened through community override or automatic approval, where configured;
- mode changes over time;
- projects affected by suspension;
- projects released from pending moderation after a mode change;
- transition from tutored to semi-open or open mode.
- public functions configured as indefinite or permanent tutored mode.
- minimum A011 moderation-audit fields for tutored decisions, including reason category where practical, rule/version, review time, timeout status, and known authority-linked operator context.

## Principle

> The country decides the transition pace; the platform represents the operating mode and enforces the corresponding rules. Tutored mode may be temporary, indefinite, or permanent, but tutored decisions and tutored silence must become public civic objects. Mode changes apply forward, while pending unpublished projects follow the new mode once it becomes effective. Suspension is complete for the affected public function and pauses future activity without erasing prior valid actions.

## Remaining design questions

Transition-operation hypothesis aligned with C020, C007, and A011. Extends H054, H055, and H057. Needs further design around mode-change authority, timeout-policy configuration, citizen audit actions on governance resolutions, community override thresholds, automatic-approval safeguards, suspension criteria, observability for permanent or indefinite tutored modes, and Extension v1+ moderation-pattern analytics.
