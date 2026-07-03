# Tutored Mode Governance Resolutions and C020 Resolution v0

## Purpose

This document resolves contradiction C020 from the v0 contradiction checklist.

C020 was originally framed as the risk that tutored or semi-open operating modes could become permanent discretionary control. The accepted resolution reframes the problem: permanence is not itself the contradiction. A country may validly decide to keep a public function in tutored mode, use the system only under tutored conditions, never adopt the system, or abandon it later.

The system does not hold sovereignty over that decision.

The real v0 problem is opaque tutored governance: rejected projects, delayed reviews, unexplained eligibility decisions, hidden responsible authorities, and silence without public auditability. ^r2bd91f8a

## Status

Accepted as the v0 resolution for C020.

## Core principle

> The system does not force a country to abandon tutored mode. It prevents tutored mode from becoming opaque governance.

Tutored mode may be temporary, indefinite, or permanent depending on the implementing country or authorized governance process.

But every tutored governance decision must be traceable, explainable, and open to citizen audit. ^r63e1af13

## The corrected contradiction

Rejected framing:

```text
Tutored mode is contradictory because it may become permanent.
```

Accepted framing:

```text
Tutored mode is acceptable as an external implementation decision.
Tutored opacity is the contradiction.
```

The platform should not pretend to decide when a country must move from tutored mode to semi-open or open mode. That decision belongs to the competent political, legal, administrative, or governance authority. ^r4325fc0d

However, if the authority uses the platform in tutored mode, the platform must not hide the authority's decisions from public scrutiny.

## Example: sports pilot

A country opens a sports function in tutored mode.

Project:

```text
Local sports league for neighborhood clubs.
```

The authority rejects the project because it believes the proposal belongs to recreation or culture rather than the official sports pilot.

This rejection may be legitimate. The problem is not that the authority made a decision.

The problem would be:

```text
The project is rejected without a public resolution,
without an identified responsible authority,
without reasons,
without a suggested next path,
and without a public space where citizens can observe or object.
```

The accepted v0 rule is that the rejection must create a public governance-resolution object. ^r3762dc61

Under H009, these eligibility and scope boundaries are represented as Planning Scope decisions. The authority may define or interpret the active scope in tutored mode, but it must not hide that scope or its material application.

## Example: duplicate public project

A country opens 5% of the Ministry of Sports budget to the distributed platform while the ministry continues executing the remaining 95% through its traditional portfolio.

A citizen submits:

```text
Project:
Multi-court sports complex in Macul on Street X.
```

The ministry already has an approved traditional project for the same multi-court complex in the same location.

The authority may reject or request reformulation because the proposal would duplicate public spending and distort the pilot scope.

This is allowed as external tutored-scope moderation. It is not allowed as ordinary internal project moderation by a competing public authority or by an authority that privileges its own controlled operator.

The decision should create a Governance Resolution:

```text
Decision:
Rejected for duplicate existing public project.

Reason:
Same facility and location already approved under the traditional ministry portfolio.

Suggested next action:
Change location, complement the existing project, reclassify, or reformulate.
```

## Governance Resolution

Every material tutored governance decision should create a public object: ^r777f8758

```text
Governance Resolution
```

This object records the authority decision and makes it auditable.

Governance resolutions may include:

- approval of a project for publication;
- rejection of a project;
- request for reformulation;
- request for reclassification;
- eligibility decision;
- planning-scope interpretation or change; ^r73238832
- confirmation that the project is outside the tutored public-function scope;
- special condition imposed before publication;
- reversal or correction of a prior tutored decision.

## Governance Resolution fields

Minimum fields:

```text
resolution id
related project
public function
operating mode
decision type
decision result
responsible authority or authorized process
responsible official or role, where legally publishable
decision date
rule or eligibility criterion applied
plain-language reason
suggested next action
appeal or correction path, if configured
citizen-facing summary
audit trail reference
```

Possible decision results:

```text
approved for publication
rejected
reformulation requested
reclassification suggested
additional information required
outside scope
timeout
escalated
overridden by configured timeout policy
automatically approved by configured timeout policy
```

## Citizen audit actions

A governance resolution should be a visible civic object, not merely an internal administrative record.

Citizens should be able to:

- comment;
- support;
- object;
- follow;
- request clarification, where configured;
- view the rule or reason applied;
- see aggregate patterns over time.

These actions do not automatically overturn the authority decision unless the operating mode's configured rules allow a specific override mechanism.

The goal is civic auditability, not a mandatory appeal bureaucracy for every rejected project.

## Review window for tutored project submissions

Submitting a project for tutored review must not create an indefinite waiting state. ^rd27eade9

Each tutored operating mode should declare a maximum review window.

Example default:

```text
maximum review window: 30 days
```

The exact duration is a configuration decision of the implementing authority or super administrator. It may vary by public function, risk level, project type, budget, or legal setting.

The v0 requirement is not that every country use 30 days. The v0 requirement is that the review window be declared before projects are submitted under that mode.

## Review Timeout Resolution

If the authority does not issue a governance resolution within the configured review window, the system should automatically create: ^rd5ed4814

```text
Review Timeout Resolution
```

This object records that the authority did not decide within the declared time.

Minimum fields:

```text
timeout resolution id
related project
public function
operating mode
submission date
review deadline
days elapsed
responsible authority or process
configured timeout policy
automatic consequence, if any
citizen-facing summary
audit trail reference
```

Example:

```text
Project:
Community sports field repair.

Submitted for tutored review:
1 March.

Review deadline:
31 March.

No authority decision emitted.

System action:
Review Timeout Resolution created automatically.
```

## Timeout policies

Every tutored operating mode should declare a timeout policy before projects are submitted.

Possible policies:

```text
1. Visibility only
   Timeout creates a public resolution, but the project does not open automatically.

2. Escalation
   Timeout creates a public resolution and sends the case to a configured authority or review process.

3. Community override trigger
   Timeout creates a public resolution and allows citizens to support opening financing under predefined rules.

4. Automatic approval
   Timeout opens publication or financing automatically if the project satisfies all non-discretionary requirements.
```

The platform should represent these policies technically. It should not choose the political default.

## No improvised timeout consequence

Timeout consequences must be configured at the operating-mode level before the project is submitted.

Rejected pattern:

```text
After the authority misses the deadline, the administrator decides case by case whether timeout means nothing, escalation, community override, or automatic approval.
```

Accepted pattern:

```text
Sports tutored mode has a public timeout policy.
Every project submitted under that mode knows the review window and the consequence of silence before submission.
```

This avoids discretionary improvisation after the authority has already failed to decide.

## Super administrator configuration

The super administrator or authorized implementation administrator may configure:

- review window duration;
- timeout policy;
- eligible public-function scope;
- required eligibility fields;
- escalation route;
- whether community override is available;
- threshold or conditions for community override, if enabled;
- whether automatic approval is available;
- non-discretionary requirements that must still be satisfied before automatic approval.

These configurations must be public, versioned, and traceable under the C019 rule-change discipline.

## Community override trigger

If enabled by the timeout policy, citizens may support opening financing after review timeout.

This should not be a universal default. It is a configured option.

Example:

```text
Timeout policy:
Community override trigger.

Rule:
If the authority fails to decide within 30 days, citizens may support publication.

Threshold:
X verified citizens or Y support weight within Z days.

Effect:
The project opens for financing if it also satisfies non-discretionary publication requirements.
```

This preserves citizen pressure without turning every tutored review into automatic conflict.

## Automatic approval after timeout

Automatic approval, or positive silence, may be configured by the implementing country.

It should not be the default v0 rule because some tutored reviews exist precisely to verify legal mandate, eligibility, public-function scope, duplication risk, or external compliance.

However, if a country chooses positive administrative silence for a specific tutored mode, the platform should be able to represent it.

Rule:

```text
Automatic approval after timeout is valid only if it is configured before submission and if the project satisfies all non-discretionary publication requirements.
```

## Relationship with C007

C007 excludes public authorities from acting as ordinary internal actors in any scope they control in v0.

Therefore, tutored governance is not an ordinary internal project role. It is an external implementation condition represented by the platform.

The authority may perform external tutored-scope moderation according to the tutored operating mode, including eligibility, duplication, scope, and compatibility review. But the system must expose the resolution, the responsible authority or process, the reason, and the timeout record.

This preserves the C007 boundary: the public authority does not become a project proposer, executor, fiscalizer, internal ordinary moderator, delegate, or competitor for distributed project financing in the same controlled scope. A state-owned or publicly owned operator controlled by that authority is also excluded by default inside that tutored scope, because the authority family would be judge and party.

## Relationship with C019

C019 requires material rule changes to be public, versioned, justified, non-surprising, and traceable.

C020 applies the same discipline to tutored governance decisions and timeout policies.

A tutored mode may be permanent. Its rules and decisions may not be hidden.

## Relationship with openness

The system should not require a mandatory path from tutored mode to open mode.

If the implementing authority declares a transition path toward greater openness, the system should publish the criteria and progress.

If no transition path exists, the system should state that the mode is indefinite or permanent instead of implying distributed openness.

This avoids false legitimacy.

## Citizen-facing explanation

For a rejected project:

```text
This project was rejected under tutored review.
Reason:
The authority classified it as outside the sports pilot scope.

Suggested next action:
Reclassify as culture or reformulate eligibility evidence.

Citizens may comment, support, object, or follow this resolution.
```

For a timeout:

```text
The authority did not issue a decision within the configured review window.
The system created a timeout resolution.

Configured consequence:
Community override trigger is now open.
```

For a permanent tutored mode:

```text
This public function is configured as tutored with no declared transition path to open mode.
The system records and publishes governance resolutions, timeout resolutions, and aggregate review metrics.
```

A011 boundary:

```text
Core v0 preserves the minimum structured data needed to audit tutored moderation patterns later.
Formal moderation-abuse tests, automatic possible-abuse findings, citizen-facing pattern dashboards, rejection-rate comparability, and operator-concentration analytics remain Extension v1+ or country/administrator observability.
```

## C020 final resolution

C020 is resolved as follows:

```text
The system does not force a country to leave tutored mode, nor does it treat permanent tutored mode as a conceptual contradiction. The contradiction is opaque tutored governance. Every material tutored decision must create a public Governance Resolution that citizens can comment on, support, object to, and follow. Every tutored review must have a declared review window and timeout policy. If the authority does not decide within the configured period, the system automatically creates a Review Timeout Resolution. Timeout consequences may range from visibility only to escalation, community override, or automatic approval, but must be configured publicly at the operating-mode level before project submission.
```

Final rule:

> Tutored mode may remain tutored, but tutored decisions and tutored silence must become public civic objects.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- contradiction checklist;
- operating modes model;
- tutored transition moderation model;
- protocol change governance model;
- project creation and publication flow;
- project lifecycle flow;
- citizen comment and question flow;
- complaint flow;
- technical audit trail layer;
- observability metrics;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Authorities may choose a weak timeout policy such as visibility only.
- Community override thresholds may be captured or manipulated.
- Automatic approval may publish projects that deserved substantive review.
- Public resolution spaces may become noisy or politically performative.
- Responsible official disclosure may be limited by law or safety.
- Permanent tutored mode may still reduce distributed governance in practice.

## Mitigations

- require timeout policy to be configured before project submission;
- make timeout policy public at the operating-mode level;
- preserve aggregate metrics for approvals, rejections, reasons, timeouts, and delays;
- make governance resolutions followable and commentable without requiring a formal appeal process;
- require non-discretionary publication checks before any automatic approval;
- keep super administrator configuration versioned and traceable under C019;
- distinguish citizen audit from automatic legal reversal;
- state clearly when a mode is indefinite or permanent.

## Design rule

> The platform cannot force distributed governance onto a country, but it can prevent tutored governance from hiding behind the platform. ^r0a7c9421
