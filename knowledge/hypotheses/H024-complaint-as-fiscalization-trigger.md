# H024 — Complaint as Fiscalization Trigger

## Hypothesis

Complaints should be treated as formal, identity-linked, complaint-evidence-seeking processes that can trigger fiscalization when the complaint reaches a configured support threshold, receives a fiscalizer quote, gathers enough reserved review funding, and then passes fiscalizer or competent-reviewer admission.

## Rationale

Any open system can be abused by false accusations, personal conflicts, malicious complaints, ideological attacks, or sabotage. This already happens in existing legal systems.

The solution is not to prevent complaints, but to require identity, complaint evidence or initial supporting material, thresholds, and process before a complaint produces formal consequences.

## C024 alignment

Earlier versions left open whether whistleblower information could enter the system without verified identity if later validated by verified actors.

C024 resolves this direction for Core v0:

```text
No anonymous formal complaints.
Sensitive complaints may use protected identity when submitted by verified actors.
```

Protected identity means the public display can hide the complainant's legal identity when exposure creates a retaliation, safety, privacy, or beneficiary-protection risk. It does not mean the system loses accountability. Authorized reviewers, fiscalizers, or auditors may verify restricted identity under role, purpose, and access-log rules.

## Basic structure

A complaint process should follow this ordinary sequence:

```text
verified actor files complaint, with protected identity if justified
→ complaint evidence or claim is stated
→ system validates minimum structure
→ complaint is immediately sent to the primary fiscalizer for quote
→ support window opens
→ citizens may support the complaint
→ citizens may reserve conditional review funding
→ fiscalizer submits a quote without seeing reserved funding totals
→ complaint reaches required support count within the support window
→ reserved funding reaches the quoted review cost
→ fiscalizer evaluates admissibility
→ complaint is admitted, rejected, or escalated
→ possible review, referral, correction, mitigation, sanction, or legal/authority action
```

## Complaint Review Policy

The administrator should not define open-ended complaint formulas.

Core v0 uses a simple configurable policy:

```text
required_support_count = N
support_window_days = X
quote_deadline_days = Y
```

The complaint must gather at least `N` active supports within `X` days to become eligible for funded review.

If the complaint does not reach the support threshold within the configured window, it does not disappear and is not judged false. It closes as:

```text
Closed - support threshold not reached
```

The complaint remains in the audit trail. Reserved review contributions are released back to the citizen's available balance or handled by the applicable funding-return/default-allocation rule. Any quote associated with the complaint expires unless the active policy explicitly allows reopening.

Complaint objections must not be part of the numeric admissibility trigger. They are civic counter-signals and counter-evidence inputs, not veto power. A complaint with many objections may be marked as contested, but objections do not reduce support count, cancel reserved funding, or prevent review if the configured support, quote, funding, and admission requirements are met.

## Complaint funding

A complaint may require resources because someone must evaluate complaint evidence, inspect facts, or conduct fiscalization.

Supporters may fund the complaint process. Funding does not buy truth, voting power, or blocking effect; it funds the cost of verification.

The default cost policy is:

```text
Fiscalizer-Quoted Review Cost
```

The primary fiscalizer should receive the complaint immediately after minimum structural validation and should quote the review cost while the complaint is still gathering support.

The quote must include:

- scope of work;
- method;
- deliverables;
- quoted cost;
- timeline;
- conflict declaration;
- quote expiration;
- whether expert support or referral preparation is needed.

The fiscalizer must not see reserved review funding totals before submitting the quote. This reduces the incentive to inflate the quote based on how much funding has already been reserved.

Citizens may reserve conditional review contributions before the quote is published. Before quote publication, the citizen-facing message should say:

```text
Your support and reserved contribution have been recorded.
They will activate only if the fiscalizer publishes a review quote,
the complaint reaches the required support threshold,
and the review funding target is reached.
Until then, no review is started and no project effect is triggered.
```

If the fiscalizer does not quote within `Y` days, the policy should apply a configured fallback such as:

- notify the secondary fiscalizer;
- request a quote from an eligible reviewer pool;
- keep the complaint pending quote;
- close the complaint as quote not received after the support window expires.

## Fiscalizer role

A fiscalizer or specialized reviewer may determine whether the complaint has enough complaint evidence to proceed.

The fiscalizer does not necessarily decide final revocation. It evaluates whether the claim is credible, relevant, and supported enough to trigger the next stage.

For legally regulated projects, such as mining, energy, infrastructure, water, environmental permits, health, safety, or territorial/legal disputes, the platform does not replace courts, regulators, or competent authorities.

In those cases, a fiscalizer report may create a review report, complaint evidence index, or referral package, but it must not stop construction, revoke a permit, impose legal sanction, or suspend a regulated operation by itself. Operational suspension requires a court order, regulator order, or competent authority resolution.

## False complaints

False or malicious complaints should create reputational and possibly financial consequences for those who file or support them in bad faith.

## Principle

> Anyone with verified identity can raise an alert, but formal consequences require complaint evidence or initial supporting material, support, resources, and fiscalization. Protected identity may limit public exposure; it does not create anonymous formal power.

## Example

A parent in a sports project for children reports that the executor threatened to remove children from the program if their families complain.

The parent should file as a verified actor and request protected identity. The public complaint page may show a contextual protected complainant, the complaint evidence, the affected scope, the support window, the fiscalizer quote status, reserved funding after quote publication, review status, and the resolution. The authorized reviewer may verify the complainant's identity under restricted access.

Example policy:

```text
required_support_count: 100
support_window_days: 30
quote_deadline_days: 7
```

Example flow:

```text
Day 0:
Complaint submitted and sent to primary fiscalizer for quote.

Day 1-7:
Fiscalizer quotes review cost without seeing reserved funding totals.

Day 1-30:
Citizens support the complaint and may reserve conditional review funding.

If 100 supports and quoted review funding are reached:
Fiscalizer starts admissibility review.

If 100 supports are not reached by day 30:
Complaint closes as support threshold not reached.
Reserved contributions return or follow the applicable default funding rule.
```

## Mining or regulated-project example

A mining project has environmental studies, citizen consultation records, baseline studies, permits, and mitigation commitments published in the platform.

An environmental group files a complaint alleging unauthorized noise, dust, or environmental impact.

The platform should not automatically decide:

```text
the decibel level was illegal
the audio was recorded in the project area
the noise came from a specific machine
the dust exceeded the permitted standard
the health effect was caused by the project
```

Those are expert or legal determinations.

The platform should:

```text
receive the structured complaint
route it to the fiscalizer for quote
allow support and reserved review funding
fund review if support and quoted cost thresholds are reached
produce a fiscalizer review report or referral package if admissible
keep the project effect as non-blocking unless a competent authority orders otherwise
```

## Open questions

- How are frivolous or malicious complaints sanctioned?
- What restricted-access and audit-log rules should protect verified whistleblowers while preserving accountability?
- How are complaint supporters protected from retaliation?
- What exact authority or court integration should each country implementation use for regulated project referrals?

## Status

Core hypothesis for incident governance and complaint handling. Aligned with C004, C024, and the simplified Complaint Review Policy model.
