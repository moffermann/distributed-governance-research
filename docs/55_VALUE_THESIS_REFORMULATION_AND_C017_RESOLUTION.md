# Value Thesis Reformulation and C017 Resolution v0

## Purpose

This document resolves contradiction C017 from the v0 contradiction checklist.

C017 was originally framed as the risk that project reformulation may preserve value when circumstances change, but may also become a way for executors to escape failure by reframing non-compliance as a new project version.

The final v0 resolution is that the value thesis and its core metrics are the identity anchor of the project. Reformulation is acceptable when it preserves the promised value. If it changes, reduces, or replaces the promised value, it must become a separate Reformulation Proposal and be approved by the relevant community before the project can continue under the new terms.

## Status

Accepted as the v0 resolution for C017.

## Core principle

> Reformulation may change implementation, but it must not unilaterally rewrite the value promise that funders and beneficiaries relied on.

A project may adapt execution details.

It may not silently reduce, replace, or redefine its value thesis after funding or execution problems appear.

## The contradiction

The system needs reformulation because reality changes.

Examples:

- a venue becomes unavailable;
- a supplier fails;
- a location must move slightly;
- a regulation changes;
- weather or external events affect timing;
- a better implementation path becomes available;
- the original execution plan becomes impossible but the value can still be delivered.

But reformulation can also be abused.

An executor may fail to deliver the promised value and then attempt to rewrite the project so the failure appears to be success.

Example:

```text
Original promise:
Serve 100 beneficiaries.

Original metric:
100 beneficiaries served.

Actual result:
Only 50 beneficiaries can be served.

Abusive reformulation:
Change the target to 50 and declare the project fulfilled.
```

This would convert failure into apparent success by changing the measuring rule after the fact.

The contradiction is:

```text
The system must allow adaptation,
but it must not allow reformulation to erase the original value promise.
```

## Value thesis as project identity

The project is not identified only by its title, executor, budget, or text description.

Its identity is anchored by:

```text
value thesis
core beneficiaries
core metrics
promised result
public or social utility
```

A reformulation that changes implementation but preserves this anchor is fundamentally different from a reformulation that changes the promised value.

## Reformulation types

C017 distinguishes three types of reformulation.

## 1. Operational reformulation

An operational reformulation changes how the project is implemented without changing the value thesis or core metrics.

Examples:

```text
same facility, slightly different location
same beneficiaries, different schedule
same service, different provider
same deliverable, different technical method
same value, revised milestone order
```

Example:

```text
Original promise:
Build a sports field with accessible bathrooms.

Issue:
Bathrooms cannot be physically built directly beside the field.

Reformulation:
Build the bathrooms 30 meters away inside the same facility with equivalent access and functionality.
```

If the value thesis and metrics remain substantially equivalent, this is not a major value problem.

It requires:

```text
traceable change summary
reason
updated implementation plan
AI validation if milestones or disbursement rules change
fiscalization update if applicable
notification where appropriate
```

It does not require heavy community approval by default.

## 2. Material value reformulation

A material value reformulation reduces, alters, or replaces the value thesis or core metrics.

Examples:

```text
100 beneficiaries → 50 beneficiaries
10 workshops → 5 workshops
sports field + bathrooms → sports field only
6 months of service → 3 months of service
permanent infrastructure → temporary activity
```

This is not merely an implementation adjustment.

It changes what funders financed and what beneficiaries expected.

Therefore, it must become a separate entity:

```text
Reformulation Proposal
```

## 3. Substitutive reformulation

A substitutive reformulation proposes a substantially different project.

Examples:

```text
community sports infrastructure → temporary sports workshops
health clinic equipment → public information campaign
water access improvement → unrelated community event
```

This should generally be treated as a new project or as failure/closure of the original project followed by a separate proposal.

The original project should not be redefined into something else merely because the new proposal may still have some value.

## Reformulation Proposal entity

A material value reformulation must be represented as a separate entity linked to the original project.

Minimum fields:

```text
reformulation proposal id
project id
original project version
proposed project version
reason for reformulation
triggering event
original value thesis
proposed value thesis
original core metrics
proposed core metrics
beneficiary impact
budget impact
milestone impact
evidence impact
fiscalization impact
funding impact
unreleased funds affected
released funds affected
guarantees or bonds affected
executor explanation
AI validation result, if structure changes
fiscalizer observation, if applicable
community approval requirement
approval result
consequence if rejected
citizen-facing summary
```

This entity prevents reformulation from becoming silent editing.

The old version remains visible.

The new version is evaluated as a proposed change, not as if it had always been the original project.

## Community approval rule

If a reformulation changes, reduces, or replaces the value thesis or core metrics, it must be submitted to the relevant community for approval before continuation.

The relevant community may include, according to protocol:

```text
funders
beneficiaries
affected parties
recognized community representatives
protocol-defined approval body or mechanism
```

The exact approval rule may be protocol-configurable.

But the v0 principle is mandatory:

```text
The executor cannot unilaterally change the value promise after funding.
```

## Approval outcomes

A Reformulation Proposal may result in:

```text
approved
rejected
expired without approval
requires revision
converted into new project proposal
```

## If approved

If the Reformulation Proposal is approved:

- a new project version is created;
- the previous version remains visible;
- funders are notified;
- beneficiary and metric changes are visible;
- disbursement milestones are revalidated if changed;
- evidence and fiscalization obligations are updated;
- reputation events may still be generated if the reformulation followed avoidable failure.

Approval allows the project to continue under new terms.

Approval does not automatically erase responsibility for why reformulation became necessary.

## If rejected

If the Reformulation Proposal is rejected, the project cannot be unilaterally redefined.

Possible outcomes:

```text
project fails under original terms
project is closed as unfulfilled or partially fulfilled
project is revoked if non-compliance is severe
guarantees or bonds activate where applicable
unreleased funds are returned or reassigned
released funds are reviewed as justified, disputed, or non-compliant
executor reputation events are generated according to cause
```

Rejected reformulation does not necessarily mean fraud.

But it means the original value promise was not successfully replaced by community consent.

## No retrospective success rule

A reformulation must never turn an unmet metric into a met metric by changing the metric after the fact.

Rejected pattern:

```text
Original metric: serve 100 people.
Actual result: 50 people served.
Reformulation: change target to 50.
Claim: project fulfilled.
```

Accepted treatment:

```text
Original project: not fulfilled as promised.
Reformulation proposal: may attempt to preserve partial value.
Reputation: evaluated according to cause.
Funders/community: decide whether to accept the reduced value.
```

## Relationship with guarantees and funds

If a value-changing reformulation is rejected and the project cannot satisfy the original promise:

```text
unreleased funds do not transfer to the executor
unused balances return or reassign according to citizen rules
guarantees, bonds, retentions, or recovery mechanisms may activate
released funds are reviewed based on actual justified use
```

The system should distinguish:

```text
justified released funds
disputed released funds
non-compliant released funds
unreleased funds
retentions
guarantees or bonds
```

## Reputation treatment

Reformulation does not automatically damage reputation.

Operational reformulations that preserve the value thesis and are caused by external or reasonable implementation constraints may have low or no reputational penalty.

Material value reformulations require cause analysis.

Possible cause classes:

```text
external impossibility
beneficiary-side change
force majeure or emergency
reasonable design correction
modeling/design failure
executor planning failure
executor delivery failure
false or misleading original promise
misuse or non-compliance
```

If the reformulation follows avoidable executor failure, misleading design, insufficient planning, or non-compliance, it should generate candidate reputation events even if the community approves a reduced or modified project.

## Citizen-facing explanation

Operational reformulation:

```text
This project changed its implementation plan, but the promised value and core metrics remain the same.
```

Material value reformulation:

```text
This project proposes to change the value originally promised.
The original version remains visible.
The community must decide whether to accept the new version.
```

Rejected reformulation:

```text
The proposed reformulation was not approved.
The project cannot continue under the changed promise.
Funds, guarantees, and reputation consequences will follow the failure or closure rules.
```

## C017 final resolution

C017 is resolved as follows:

```text
Use the value thesis and core metrics as the identity anchor of the project. Reformulations that preserve the value thesis are operational adjustments and require traceability, validation, and notification as needed. Reformulations that reduce, change, or replace the value thesis must become a separate Reformulation Proposal submitted to the relevant community for approval. If not approved, the project cannot redefine itself; it fails, closes, or is revoked under the original terms, with funds returned or reassigned, guarantees activated where applicable, and reputation consequences evaluated by cause.
```

Final rule:

> Reformulation may save value, but it may not rewrite the value thesis without community approval or convert original failure into retrospective success.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- project reformulation, pause, and revocation flow;
- project object model;
- project lifecycle after publication flow;
- project disbursement flow;
- citizen funding flow;
- role and reputation model;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Approval rules for the relevant community may be hard to define.
- Beneficiaries and funders may disagree about acceptable value reduction.
- Some operational reformulations may hide material value effects.
- Executors may attempt to frame value reduction as implementation adjustment.
- Excessive approval requirements may slow legitimate adaptation.

## Mitigations

- require explicit comparison between original and proposed value thesis;
- require comparison between original and proposed core metrics;
- keep original version visible;
- require AI validation when milestones, evidence, metrics, or disbursement rules change;
- require community approval only when value thesis or core metrics change materially;
- preserve funder options and return/reassignment rules;
- preserve guarantee and retention mechanisms;
- generate reputation events based on cause, not merely on the existence of reformulation.

## Design rule

> Changing how value is delivered is not the same as changing the value that was promised.