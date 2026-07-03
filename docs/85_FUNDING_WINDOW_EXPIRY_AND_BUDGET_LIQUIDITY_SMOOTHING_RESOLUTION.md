# Funding Window Expiry and Budget Liquidity Smoothing Resolution v0

## Purpose

This document records an accepted intermediate resolution before A007 propagation.

The issue is that large amounts of civic funding capacity may remain committed or reserved in projects that never reach financing closure. If projects can wait indefinitely, the system may immobilize public-purpose resources without producing value.

The resolution separates:

1. a Core v0 funding-window expiry rule; and
2. an optional Budget Liquidity Smoothing capability for future implementation or country-specific fiscal design.

## Status

Accepted as a v0 lifecycle and funding-custody resolution.

## Problem

Funding in Core v0 is intentionally stable. Under C005, a citizen who finances a project makes a serious commitment and cannot freely withdraw because of rumor, regret, ordinary delay, or ordinary modification.

That rule protects valid projects from sabotage and volatility.

However, a stable funding commitment should not become an indefinite lock. If a project never reaches its funding target or never completes the required open-stage conditions within its configured window, the system should not hold civic funding capacity forever.

Example:

```text
Project:
Design and Construction of Multi-Courts in Macul

Funding target:
120,000,000

Funding window:
90 days

Outcome:
After 90 days the project has 28,000,000 committed, weak support growth, and missing readiness conditions.
```

The project should not remain open indefinitely. It should expire unfunded, return or reassign eligible commitments, and preserve the attempt history.

## Core v0 resolution

Every financeable project or phase funding lane must have a visible funding window. ^rf903e965

The project must record:

- funding window start;
- funding window end;
- target amount;
- target lane: design, execution, control, complaint review, mitigation, continuity, or other eligible lane;
- active Funding Attempt number;
- deadline-extension rule or policy reference;
- maximum extensions or exhaustion rule where configured;
- expiration outcome;
- fund-treatment rule;
- republication or clone linkage where applicable;
- audit trail.

## Funding Attempt

Core v0 should represent the funding window through a lightweight `FundingAttempt` record rather than an informal label.

The object records one attempt to finance a project, project version, project phase, or funding lane.

Minimum fields:

- attempt id;
- project or phase reference;
- project version reference;
- target lane;
- attempt number;
- funding target;
- window start;
- window end;
- extension policy reference;
- extension count;
- maximum extension count where configured;
- support count and funding progress snapshot;
- readiness/blocker snapshot where relevant;
- outcome;
- fund-treatment result;
- source attempt or cloned-from reference where applicable;
- audit references.

Possible outcomes:

```text
Funding open
Funding target reached
Extended
Expired unfunded
Reformulation required
Republished
Cloned into new project
Closed
```

## Expired unfunded outcome

If the funding window expires without reaching the required financing and closure conditions, the project or funding lane becomes `Expired Unfunded` unless the active policy allows a bounded extension or routes the project into reformulation.

`Expired Unfunded` is not ordinary funder withdrawal.

It is a project/protocol outcome. Eligible unreleased and unused commitments follow the configured treatment: ^r7a8e9ff1

- return to citizen available balance;
- reassign under the citizen's automatic allocation profile;
- reassign under active delegation where valid;
- route to a protocol-defined public-purpose fallback;
- remain available for a confirmed reformulated attempt only where the active policy and citizen default allow it.

Released funds, if any, remain governed by ordinary disbursement, evidence, fiscalization, recovery, guarantee, responsibility, and reputation rules.

## Extension rule

Funding windows may be extended only through objective, visible, capped rules.

The extension rule may consider:

- percentage of target reached;
- funding velocity;
- active support growth;
- proximity to completion;
- continuity risk where A006 applies;
- essential-service lane where A005 applies;
- absence of material blockers;
- readiness evidence status;
- fiscalization or control package status;
- prior attempt history.

The extension rule must expose:

- reason for extension;
- new deadline;
- extension count;
- remaining extension capacity;
- policy source;
- affected funding lane;
- fund-treatment effect if the extension later fails.

The system should not allow zombie projects to lock resources indefinitely. Maximum extension count, maximum total open period, or exhaustion treatment should be visible where configured by protocol, operating mode, tutored authority, or country implementation.

## Republication and cloning

An expired project may be republished or cloned, but history must not be erased.

Republication means the same project or project version is opened for a new funding attempt under the allowed policy. The prior attempt remains visible.

Cloning means a new project or materially changed project version is created from the prior one. The new object should reference the source project and source attempt.

The citizen surface should show simple labels such as:

```text
Second funding attempt
Previously expired unfunded
Reformulated after funding attempt failed
Cloned from prior proposal
```

Failed funding is not automatically a negative reputation event. It may reflect lack of demand, weak timing, poor communication, insufficient budget design, or an overly ambitious project. It may become relevant to reputation only when reviewed patterns show misleading design, spam, repeated abusive republication, hidden material changes, or avoidable failure by a role.

## Budget liquidity smoothing

The user-proposed liquidity idea is accepted as a future-capable design, but not as a necessary Core v0 mechanism.

The correct framing is not uncontrolled leverage or citizen-level virtual money. The stronger framing is `Budget Liquidity Smoothing`: a public, rule-bound way to manage commitment capacity across funding cycles against an authorized annual or period budget.

This capability may be useful because:

- civic allocation is cyclical;
- projects have bounded funding windows;
- disbursement is milestone-based;
- committed funds are not paid immediately;
- real cash execution may be lower than nominal commitments in some periods;
- returned or expired commitments can flow back into the allocation cycle.

Example:

```text
Annual authorized distributed budget:
1,200,000,000

Monthly base allocation:
100,000,000

March actual executed payments:
40,000,000

Possible smoothing policy:
Allow a limited additional completion buffer for near-funded eligible projects, then reduce future cycle capacity if commitment pressure rises.
```

This may improve project completion without exceeding the annual authorized budget, but only if controlled by public fiscal rules.

## Scope classification

Core v0:

- funding windows;
- Funding Attempt history;
- capped extension rules;
- Expired Unfunded outcome;
- return or reassignment of eligible unused commitments;
- republication and cloning traceability.

Extension v1+ / country implementation:

- Budget Liquidity Smoothing;
- completion buffers;
- temporary acceleration of citizen allocation capacity;
- commitment-to-budget stress tests;
- fiscal guardrails based on annual public budget rules;
- treasury or custodian integration beyond ordinary balance reporting and financial-order execution.

Out of scope for Core v0:

- unsecured money creation;
- hidden discretionary treasury boosting;
- project-priority selection by Treasury;
- automatic expansion of citizen balances without public formula, authorization, stress testing, and audit trail.

## Guardrails for Budget Liquidity Smoothing

Any future implementation should require:

- explicit legal or protocol authority;
- annual or period budget cap;
- maximum open commitment ratio;
- stress test assuming many near-funded projects close at once;
- conservative reserve or coverage rule;
- public formula;
- no discretionary selection by Treasury;
- no hidden expansion of citizen balances;
- eligibility filters excluding low-readiness, materially blocked, or suspicious projects;
- adjustment rule for later cycles;
- audit trail showing base allocation, smoothing amount, reason, and later compensation;
- clear distinction between authorized allocation capacity and actual payment execution.

Treasury may provide balance, budget, cash-execution, or authorized smoothing inputs where lawful, but it still does not decide civic value, project priority, fiscalizer selection, evidence quality, complaint outcome, or discretionary disbursement. ^r9bfae111

## Relationship to C005

This resolution does not reopen ordinary withdrawal.

Funding remains a commitment until closure or protocol-defined outcome. Funding-window expiry is one such outcome. The citizen does not choose to withdraw merely because they changed their mind; the project failed to reach financing closure under the visible rule.

## Relationship to C006

Treasury remains external financial infrastructure.

Budget Liquidity Smoothing, if implemented later, must be a public rule or lawful country implementation, not a hidden treasury preference. Treasury may execute or report the authorized smoothing policy, but it must not choose projects or alter civic priorities by discretion.

## Relationship to H038

Monthly or cyclical allocation reduces idle balances. This resolution adds the complementary rule: committed funds in failed or expired attempts should not remain locked forever. They return, reassign, or follow the citizen's selected/default allocation rule.

Automatic profiles may include a transparent preference for near-funded eligible projects. That is different from hidden treasury leverage. The citizen or protocol-defined profile rule creates the preference; the custodian only executes valid financial orders.

## Current-system comparison

Current public systems already use related mechanisms:

- tenders can be declared deserted;
- budget commitments may lapse;
- funds may return to a public budget line;
- a project may be re-tendered, reformulated, or cancelled;
- fiscal execution is often managed across annual and monthly cash schedules.

Core v0 makes these events visible, citizen-facing, and auditable. It also preserves project attempt history so failure to fund is not silently erased.

## Remaining risks

- Short funding windows may unfairly kill valuable low-visibility projects.
- Long or repeatedly extended windows may lock funds in stale projects.
- Extension rules may be gamed through artificial support or concentrated small commitments.
- Repeated republication may clutter discovery and hide weak demand.
- Liquidity smoothing may become fiscal illusion if poorly capped.
- Treasury or administrators may use smoothing parameters as hidden political steering. ^rc469ba02

## Mitigations

- visible funding window;
- bounded extension policy;
- automatic expiry outcome;
- return or reassignment of eligible commitments;
- attempt history visible on project surfaces;
- spam/republication abuse review;
- automatic allocation fallback rules;
- near-funded routing only through visible citizen/profile/protocol rules;
- Budget Liquidity Smoothing classified as future/country implementation with stress tests and public formulas.

## Final rule

> A project may not hold civic funding capacity indefinitely while waiting for financing closure. Each financeable lane must have a visible funding window and a traceable Funding Attempt. If the window expires without valid closure, eligible unreleased commitments return, reassign, or follow the configured default rule. Future budget liquidity smoothing may accelerate completion only through public, capped, stress-tested fiscal rules, not hidden virtual money or treasury discretion.
