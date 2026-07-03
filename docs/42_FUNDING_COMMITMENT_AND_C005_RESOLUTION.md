# Funding Commitment and C005 Resolution v0

## Purpose

This document resolves contradiction C005 from the v0 contradiction checklist.

C005 was originally framed as a tension among funder withdrawal, fund locking, project reformulation, and default rules when funders do not respond. The resolution simplifies the model: financing a project is a serious commitment until project closure, not a reversible like or temporary reservation. ^r00dec5ee

## Status

Accepted as the v0 resolution for C005.

## Core principle

> Financing a project means committing resources until the project closes. The funder does not freely withdraw because of rumors, comments, ordinary changes, or later regret.

## Why this matters

If funders can freely withdraw while a project is open or after rumors, then a false comment or reputational attack can destroy a valid project.

Example:

```text
Rumor:
The executor is stealing money.

Effect if withdrawal is easy:
Many funders withdraw.
The project loses funding.
The project collapses.
Later the rumor is shown to be false.
```

A system that allows that becomes unstable and vulnerable to sabotage.

## Real-world analogy

In ordinary public contracting, the state does not withdraw funding every time a project has a modification, rumor, delay, or ordinary adjustment.

If the contractor abandons or breaches the contract, guarantees, retentions, penalties, recovery, and reputation consequences apply.

The state may still lose part of the money already spent. The important point is that the system has controls, not that risk disappears.

Core v0 follows that logic.

## Funding is not a like

Funding is different from:

```text
supporting an idea
following a project
commenting
voting
expressing interest
```

Funding means committing a portion of civic allocation to a specific project and accepting that execution has risk.

## Funder confirmation rule

Before financing, the citizen should see a clear confirmation:

```text
You are financing this project until closure.
Your contribution cannot be freely withdrawn later.
You will be able to follow progress, review evidence, file complaints, and receive returned or recovered balances if the project fails or closes with unused funds.
```

## No ordinary withdrawal after funding

Once the citizen finances a project, ordinary voluntary withdrawal is not part of v0.

Funding should not be withdrawn because of:

- rumor;
- comments;
- ordinary delay;
- ordinary modification;
- disagreement after funding;
- change of personal preference;
- campaign against the executor;
- project controversy without admitted complaint or protocol decision.

## What can happen to funded resources

Funded resources may move through states such as:

```text
Committed
Reserved
Retained
Pending review
Approved for release
Released partially
Released totally
Paused
Blocked
Returned
Reassigned
In recovery
```

But these are project/protocol states, not free withdrawal by the funder.

For phased projects, a failed prerequisite phase gate is also a project/protocol state. If a citizen reserved funds for construction while the design phase was pending, those funds do not become freely withdrawable by personal regret. They follow the active phase failure, reformulation, return, reassignment, or reconfirmation rule.

Funding-window expiry is also a project/protocol state. If the project or funding lane does not reach financing closure within its visible funding window, the active `FundingAttempt` may expire unfunded. Eligible unreleased and unused commitments then return, reassign, or follow the citizen's selected/default rule according to the active policy. This does not create ordinary voluntary withdrawal. ^r12952ee4

## Ordinary project modification

Ordinary project modifications do not reopen withdrawal rights.

Examples:

- minor schedule adjustment;
- supplier change;
- small budget line adjustment within protocol;
- milestone date correction;
- ordinary implementation change;
- clarification of scope;
- non-material reformulation.

These changes should be:

- recorded;
- visible;
- auditable;
- reviewable if abusive;
- available for complaint if they violate project commitments.

But they do not automatically release funders from the commitment.

## Material failure or abandonment

If a project fails, is abandoned, is revoked, or triggers guarantees, the system should:

- stop or pause relevant execution;
- block unreleased funds;
- review released funds;
- execute guarantees or retentions where applicable;
- recover what can be recovered;
- return or reassign unused or recovered funds according to protocol and citizen configuration;
- affect executor reputation;
- record the loss and responsibility.

For a design-and-execution project, a design phase that fails the declared public-value baseline can trigger this material-failure or reformulation path before construction money is released. Example: a Macul multi-court design that removes required bathrooms, changes court dimensions materially, or reduces promised public access blocks construction release and requires correction, reformulation, rejection, expiration, return, reassignment, or reconfirmation under the active policy.

## Released funds

Funds already released and spent are not simply withdrawn.

They are handled through:

- fiscalization;
- complaint;
- evidence review;
- guarantee execution;
- recovery;
- sanction;
- reputation consequences.

The system should not promise zero risk.

Rule:

> The citizen may lose part of the financed amount if a project fails after funds have been legitimately or illegitimately spent. The system must make the loss traceable and assign responsibility where possible.

## Unused, unreleased, or recovered funds

Funds may return or be reassigned when they are:

- not yet released;
- retained;
- unused at closure;
- attached to an expired unfunded Funding Attempt;
- recovered through guarantees;
- recovered through enforcement;
- returned after revocation;
- returned after expiration or failed closure.

These funds may go to:

- citizen available balance;
- automatic financing rules;
- delegated financing rules;
- another protocol-defined destination.

## Reformulation rule

For v0, reformulation does not create a complex individualized funder choice workflow.

Instead:

```text
Reformulation is recorded, visible, and auditable.
If abusive, it can trigger complaint, pause, review, guarantee, revocation, or reputation effects.
It does not automatically reopen ordinary withdrawal rights.
```

This keeps v0 stable and avoids excessive complexity.

## Funding attempt expiry

Core v0 should not let projects wait for funding forever.

Every financeable project, project phase, or funding lane should have a visible funding window represented by a traceable `FundingAttempt`.

If the window expires without financing closure, the outcome is `Expired Unfunded`, unless the active policy allows a bounded extension or routes the project into reformulation.

The attempt history remains visible:

- attempt number;
- funding target;
- window start and end;
- progress at expiry;
- support and readiness snapshot where relevant;
- extension count;
- fund-treatment outcome;
- republication or clone reference where applicable.

Republishing or cloning after expiry should not erase prior history. Failed funding is not automatically a negative reputation event, but repeated misleading, abusive, or spam-like attempts may become a reviewed responsibility or reputation input.

## Interface implication

The funding action should be called `Financiar`, not `Asignar`, when the citizen commits resources to projects.

The confirmation screen should make commitment clear.

Recommended confirmation message:

```text
By financing this project, your contribution is committed until the project closes.
You cannot freely withdraw it later.
If the project fails, unused, retained, or recovered funds may be returned or reassigned according to the rules.
```

## C005 final resolution

C005 is resolved as follows:

```text
No ordinary withdrawal after financing.
Funding is commitment until project closure.
Rumors, comments, ordinary changes, or regret do not release the funder.
Project failure or expired unfunded financing is handled through retentions, guarantees, recovery, reputation where reviewed, and return/reassignment of unused, unreleased, or recovered funds.
```

Final rule:

> The citizen funds a project to completion and assumes execution risk. If the project fails, the system protects the citizen through traceability, fiscalization, complaints, guarantees, recovery, returned balances, and reputation consequences, not through free withdrawal.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen funding flow;
- project disbursement flow;
- project reformulation/pause/revocation flow;
- project lifecycle after publication;
- consolidated entity/object/state map;
- contradiction checklist;
- financing tab/interface design.

## Remaining risks

- Citizens may feel trapped if they do not understand the commitment.
- Bad projects can still waste some funds before being stopped.
- Ordinary modifications may be perceived as bait-and-switch.
- Rumors may still affect reputation even if they do not trigger withdrawal.

## Mitigations

- strong pre-funding confirmation;
- clear project version history;
- visible reformulations;
- evidence and fiscalization visibility;
- complaint process;
- guarantees and retentions;
- role-based reputation;
- return/reassignment of unused, retained, or recovered funds.

## Design rule

> Financing must be stable enough for projects to execute and serious enough for citizens to treat it as a civic commitment, not as a reversible expression of preference.
