# Value Fulfillment Reputation and C018 Resolution v0

## Purpose

This document resolves contradiction C018 from the v0 contradiction checklist.

C018 was originally framed as the problem that project closure categories need a stronger link to reputation. Closure can be fulfilled, partially fulfilled, unfulfilled, revoked, expired, or reformulated, but reputation effects were not yet precise enough.

The final v0 resolution is that closure category is descriptive, not the primary reputation input. Reputation should be communicated numerically and updated from the verified fulfillment of the project's value thesis and core metrics, adjusted by founded complaints, contextualized evidence corrections, and role-specific responsibility events.

## Status

Accepted as the v0 resolution for C018.

## Core principle

> Reputation should measure verified value fulfillment, not merely the administrative label used to close a project.

A project may be administratively closed as partially executed while still fulfilling nearly all of its value thesis.

A project may also be administratively closed as completed while later contextualized evidence or founded complaints show that the promised value was not actually delivered.

Therefore, the closure label is context.

The value fulfillment score is the reputational core.

## The contradiction

The system needs closure categories because projects must end in a clear state.

Possible closure categories include:

```text
fulfilled
partially fulfilled
unfulfilled
revoked
expired
reformulated
```

But if reputation is driven directly by these labels, the system can become misleading.

Example:

```text
Closure category:
partially fulfilled

Verified value thesis fulfillment:
99%
```

This should not damage the executor as if the project were a major failure.

The opposite can also occur:

```text
Closure category:
fulfilled

Later founded complaint:
20% of beneficiaries were false.

Corrected value fulfillment:
80%
```

The contradiction is:

```text
Closure must be consequential,
but reputation should not be calculated from closure labels alone.
```

## Resolution

C018 is resolved by separating three concepts:

```text
1. Closure category
2. Project value fulfillment score
3. Role-specific reputation update
```

## 1. Closure category

Closure category describes the administrative state of the project.

It answers:

```text
How did this project end procedurally?
```

Examples:

```text
fulfilled
partially fulfilled
unfulfilled
revoked
expired
reformulated
closed with disputed evidence
closed after correction
```

The closure category is visible and important.

But it does not by itself determine reputation.

## 2. Project value fulfillment score

The project value fulfillment score answers:

```text
How much of the promised value thesis was verified as delivered?
```

It should be numeric and citizen-facing.

Recommended range:

```text
0 to 100
```

It should be calculated from:

```text
original value thesis
core metrics
predefined metric weights
accepted fulfillment evidence
fiscalizer evaluation
validated milestone results
founded complaints and corrections
confirmed non-compliance
accepted reformulations, if applicable
```

The metric weights must be defined before funding begins, not after execution.

Example:

```text
Value thesis:
Serve 100 beneficiaries with a six-month sports program.

Metric A:
100 beneficiaries registered and eligible — 30%

Metric B:
minimum attendance and delivery of sessions — 50%

Metric C:
beneficiary satisfaction and final confirmation — 20%
```

If the verified results are:

```text
Metric A: 100%
Metric B: 90%
Metric C: 80%
```

Then the value fulfillment score is:

```text
(100 * 0.30) + (90 * 0.50) + (80 * 0.20) = 91
```

Closure may say "partially fulfilled," but the reputation input is 91, not the label.

## 3. Role-specific reputation update

The executor's visible reputation should be numeric.

The system should communicate it simply to future funders and citizens.

Example:

```text
Executor reputation: 84.8 / 100
Recent project value fulfillment: 91 / 100
Founded infractions: none
```

The executor's reputation is updated from verified project evaluations over time.

A bad evaluation should be visible in future projects.

But it should not be eternal if the executor later demonstrates strong performance.

Recommended v0 approach:

```text
weighted moving average
exponential moving average
or equivalent decay mechanism
```

Illustrative formula:

```text
new reputation = previous reputation * historical weight + new evaluation * recent weight
```

Example:

```text
Previous executor reputation: 82
New verified project score: 96
Recent weight: 20%
Historical weight: 80%

New reputation:
82 * 0.80 + 96 * 0.20 = 84.8
```

The exact weights may be protocol-configurable.

The v0 rule is that reputation is numeric, visible, and decays or is diluted by later verified performance.

## Relationship with founded complaints

Complaints do not automatically damage reputation.

A complaint becomes reputationally relevant when it is founded, evidence-supported, and linked to an actor's role obligation.

Complaints can affect reputation in two ways.

## 1. Metric correction

A founded complaint may correct the value fulfillment score.

Example:

```text
Executor reported:
100 beneficiaries served.

Complaint:
20 beneficiaries were false.

Review result:
complaint founded.

Corrected metric:
80 valid beneficiaries.
```

The project score is calculated from 80 valid beneficiaries, not from the original reported 100.

## 2. Responsibility event penalty

A founded complaint may also generate a responsibility event.

Example:

```text
Responsibility Event:
Actor: executor
Role: executor
Obligation: truthful beneficiary declaration
Review basis: founded complaint + fiscalizer review
Severity: high
Effect: negative executor reputation adjustment
```

This is separate from the metric correction.

A project can have both:

```text
lower value fulfillment score
+ additional penalty for misconduct, false contextualized evidence, or avoidable breach
```

## Relationship with fiscalizer evaluation

The fiscalizer does not create reputation alone.

The fiscalizer verifies evidence, reviews milestone completion, and reports fulfillment against the predeclared value thesis and metrics.

The reputation input comes from:

```text
metrics + fulfillment evidence + fiscalizer evaluation + founded complaint corrections + responsibility events
```

The fiscalizer's work is therefore a key verification source, but not the only possible source of reputational information.

Citizens, beneficiaries, funders, and affected parties may submit evaluations or complaints.

Their evaluations may generate soft public signals.

Their complaints may become formal inputs if reviewed and founded.

## Citizen evaluations versus formal reputation

C018 distinguishes:

```text
citizen evaluation
complaint
founded complaint
responsibility event
numeric reputation update
```

Citizen evaluations may express satisfaction, dissatisfaction, perceived quality, communication quality, or usefulness.

These signals may be shown publicly, aggregated, or used as soft context.

They should not automatically create formal sanctions.

Formal reputation updates require verified project metrics, accepted fulfillment evidence, fiscalizer evaluation, or founded complaints connected to role obligations.

H015 adds the evaluation-context boundary:

```text
soft public signal -> visible context, no direct reputation effect
experiential evaluation -> may inform value verification if relevant and reviewed
complaint review finding -> may correct metrics or trigger responsibility review
fulfillment evaluation -> may update value fulfillment score
responsibility event -> may update role-specific reputation
```

The Reputation Input and Reputation Update should preserve the evaluation context and formal effect instead of treating all evaluations as equivalent.

## Closure category as context

Closure categories remain visible because citizens need procedural context.

Example display:

```text
Closure category: Partially fulfilled
Value fulfillment: 99 / 100
Executor reputation impact: positive
Reason: one minor administrative deliverable incomplete, but core value thesis fulfilled.
```

Another example:

```text
Closure category: Fulfilled
Value fulfillment: 80 / 100 after founded complaint
Executor reputation impact: negative adjustment
Reason: beneficiary count corrected after false beneficiary complaint.
```

The closure category helps explain the case.

It does not mechanically define the reputation result.

## Role-specific reputation

The executor's reputation is based primarily on value fulfillment and execution responsibility.

Other roles may have their own numeric or structured reputation tracks.

Examples:

```text
Fiscalizer reputation:
accuracy, timeliness, independence, quality of review.

Evidence producer reputation:
reliability, completeness, accuracy, privacy compliance.

Modeler reputation:
design quality, feasibility, metric clarity, repeated acceptance or failure.

Complainant reputation:
good-faith, founded complaints, repeated abuse if applicable.
```

The same project closure may produce different role updates.

Example:

```text
Project value fulfillment: 95 / 100
Executor: positive update.
Fiscalizer: negative event if it missed serious evidence manipulation later proven by complaint.
Evidence producer: negative event if it submitted manipulated evidence.
```

This preserves C012's rule: reputation is affected by demonstrated responsibility in a specific role, not by mere proximity to a failed project.

## Reputation update object

The system should represent formal reputation updates as explicit objects.

H014 frames this as a four-step chain:

```text
Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary
```

The value fulfillment score, founded complaint correction, EvaluationRecord, Responsibility Event, verified discovery, or reviewer finding is the Reputation Input. The score change is the Reputation Update. The citizen-facing display is the Reputation Summary.

Possible object:

```text
Reputation Update
```

Minimum fields:

```text
update id
actor id
role affected
project id
project closure category
value fulfillment score
metric breakdown
fiscalizer evaluation reference
accepted fulfillment evidence references
founded complaint references
responsibility event references
base score adjustment
infraction adjustment, if any
previous reputation
new reputation
weight used
decay rule or moving-average method
citizen-facing explanation
timestamp
appeal or review status, if applicable
```

## No automatic closure-label scoring

Rejected rule:

```text
Closed fulfilled = automatic positive score.
Closed partially fulfilled = automatic negative score.
Revoked = automatic fixed penalty for everyone involved.
```

Accepted rule:

```text
Closure category describes procedure.
Value fulfillment score measures delivered promise.
Founded complaints and responsibility events adjust by role.
Numeric reputation updates communicate performance over time.
```

## C018 final resolution

C018 is resolved as follows:

```text
Do not calculate reputation directly from project closure labels. Use closure category as procedural context, but calculate the executor's numeric reputation update primarily from verified fulfillment of the project's value thesis and predeclared metrics, adjusted by founded complaints, contextualized evidence corrections, and role-specific responsibility events. Reputation should be visible to future funders, use a weighted moving average or decay mechanism, and remain role-specific.
```

Final rule:

> What matters reputationally is not merely how the project closed, but how much of the promised value was verified, what evidence supports that result, and what founded infractions or responsibility events were established by role.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- role and reputation model;
- project closure flow;
- project object model;
- value verification model;
- complaint flow;
- project disbursement flow;
- citizen project sheet;
- project dashboard;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Numeric scores may create false precision.
- Metric weights can be gamed if poorly defined.
- Fiscalizer evaluations may be inconsistent.
- Citizen expectations may differ from formal value metrics.
- Soft public signals may be confused with formal reputation inputs.
- Founded complaints may arrive after reputation has already been updated.
- A moving-average score can hide severe recent misconduct if not separately displayed.

## Mitigations

- show metric breakdown behind the numeric score;
- show recent project evaluations separately from aggregate reputation;
- label soft public signals, experiential evaluations, fulfillment evaluations, complaint findings, and reputation inputs separately;
- keep severe responsibility events visible even if aggregate score later improves;
- require metric weights before funding;
- correct historical project scores when founded complaints change contextualized evidence;
- keep role-specific reputation tracks;
- show closure category as context, not as the score itself;
- include appeal or review status where reputation updates are disputed.

## Design rule

> Closure labels explain the ending; value fulfillment scores explain performance; responsibility events explain blame.
