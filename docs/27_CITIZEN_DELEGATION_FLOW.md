# Citizen Delegation Flow v0

## Purpose

This document freezes the citizen delegation flow.

Delegation allows a citizen to authorize another actor to act within a defined scope. In Core v0, delegation should be simple, explicit, accepted by the delegate, and immediately revocable for future actions.

## Core principle

> Delegation is scoped authorization, not transfer of citizenship, identity, money ownership, or unlimited power.

Delegation has priority over automatic allocation within the delegated scope.

For budget allocation delegation, the citizen must have a selected base allocation profile or fallback rule before delegation becomes active. The public system default profile may be selected or accepted as that base rule.

If delegation later ends, the system resumes that previously selected base rule for future allocation.

## Main question

```text
How can a citizen let another trusted actor allocate or act for them within a limited scope?
```

## Entry points

The delegation flow can start from:

- home layer;
- bottom navigation tab;
- profile;
- funding flow;
- automatic profile configuration;
- project category;
- prompt shown when the citizen does not want to decide manually.

Visible buttons:

```text
[Delegar]
[Delegar asignación]
[Elegir delegado]
```

## Delegation types for Core v0

Core v0 should keep delegation simple.

Recommended initial delegation scopes:

```text
Funding allocation by value area
Funding allocation by territory
Specific project category
Project following and alerts
Protocol participation, if enabled
```

More complex delegation, subdelegation, time-bound delegation, paid delegation, and multi-delegate portfolios can be future extensions.

## Flow steps

```text
1. Citizen starts delegation
2. System explains what delegation means
3. System verifies or requests a base allocation profile/fallback rule
4. Citizen chooses scope
5. Citizen chooses delegate
6. System shows delegate profile and concentration signal
7. Citizen confirms request
8. Delegate accepts or rejects
9. Delegation becomes active after acceptance
10. Citizen can monitor and revoke
```

## 1. Explanation

Example:

```text
Delegation allows another person or organization to act for you within a defined scope.

You can revoke delegation for future actions.

Actions already performed while delegation was active are not erased.
```

## 2. Scope selection

For budget allocation delegation, the system should first verify that the citizen has a base allocation profile or fallback rule.

If not, the flow should ask the citizen to choose one:

```text
Before delegating, choose what should happen if delegation ends.

[Use public system default]
[Choose an official profile]
[Create my own profile]
[Use manual available-balance fallback, if allowed]
```

This avoids a hidden allocation decision if the delegate later resigns, rejects a renewal, loses eligibility, or is revoked.

The citizen chooses what they are delegating.

Example:

```text
What do you want to delegate?

[Full monthly allocation]
[Only child-related projects]
[Only projects in my commune]
[Only sports projects]
[Participation in protocol changes]
```

Each scope should be understandable and visible later.

## 3. Delegate selection

The citizen may search for a delegate.

Delegate profile should show:

- name;
- actor type: citizen or organization;
- areas of activity;
- role-based reputation;
- previous allocations if public;
- declared interests;
- concentration signal;
- whether the delegate accepts new delegations;
- communication/reporting frequency;
- separate participation-support funding, if any.

## 4. Concentration signal

Before confirming, the system should show if the delegate already concentrates significant delegated power.

Example:

```text
This delegate currently represents:
2,430 citizens

Delegated influence:
28% of delegated sports allocation in this commune

Main areas:
Children, sports, education

Concentration:
High within sports projects in this commune.

Recent delegated actions:
funded 14 sports projects
supported 3 fiscalization actions

Separate participation-support funding:
Community Sports Help Desk, if funded as an ordinary project
```

The system should not hide concentration. It should make it visible.

Core v0 does not impose a universal hard cap on delegation concentration. If citizens voluntarily concentrate delegated authority in a trusted actor, that is a legitimate civic choice. The system must show concentration before delegation, during delegated action, in delegate reports, and in administrative observability.

A010 adds stress signals as a short warning and detail-on-demand layer. When concentration is high, the interface may show represented-weight warning status, the affected scope or action type, report-sufficiency status, related-delegate or support-provider relationships, delegate funding to related projects, and any configured cap effect. These signals should come from existing delegation, report, disclosure, and audit records rather than a new citizen-facing bureaucracy.

Core v0 also does not pay delegates automatically for accumulated delegations. Participation-support projects may exist separately, but they must be ordinary transparent projects rather than hidden delegation commissions.

Under A009, delegation and participation support should be treated as ways to reduce participation cost compared with current low-attendance practices, not as proof that all affected voices are represented. A delegate's represented weight and any linked participation-support funding should be visible, while low participation or missing voices become blockers only when the active Threshold Policy requires the relevant affected-party mapping, consultation, observation, or readiness evidence.

## 5. Confirmation request

Example:

```text
Delegation request

You delegate:
Child-related projects

To:
Neighbors for Children Foundation

What this delegate may do:
Allocate your available amount within this scope.

What this delegate may not do:
Act outside the delegated scope.
Withdraw money already released.
Use your identity as their own.
Receive an automatic commission because you delegated.

[Send request]
```

## 6. Delegate acceptance

Delegation is not active until the delegate accepts.

The delegate should see:

- delegator;
- scope;
- responsibilities;
- reporting expectations;
- whether they accept.

Possible statuses:

```text
Requested
Accepted
Rejected
Active
Revoked
Resigned
Expired, if future extension supports time limits
```

## 7. Active delegation

Once active, the citizen should see:

```text
Active delegation

Delegate:
Neighbors for Children Foundation

Scope:
Child-related projects

Recent actions:
- allocated $8,000 to Project X
- allocated $12,000 to Project Y

[View report]
[Revoke delegation]
```

## 8. Delegated action weight

When a delegate acts inside the active delegation scope, the action represents the delegate and all delegators covered by that scope by default.

Example:

```text
Delegate action:
Macul Sports Association funded Project A.

Represented weight:
1 own action + 2,430 delegated citizens

Scope:
Sports allocation in Macul
```

This must be visible in the action detail, delegated-action report, concentration signals, and audit trail. Core v0 should not require per-delegator selection for ordinary in-scope actions.

If a configured cap limits represented weight for a specific action type, the cap and its effect must be visible.

## 9. Reporting

The citizen should receive delegated-action reports.

The Core v0 baseline should be generated primarily by the system from the delegated-action audit trail. The delegate may add short explanations, but the citizen should not depend on manually written delegate reports to know what happened.

Reports may include:

- projects funded;
- reasons for allocation;
- amounts assigned;
- represented weight used;
- concentration signal at the time of action;
- stress-warning status, where applicable;
- report-sufficiency status for high-concentration delegates, where applicable;
- cap effect, where configured;
- related-delegate, support-provider, or related-project warning, where material;
- projects followed;
- alerts;
- conflicts or abstentions;
- results of funded projects.

Example:

```text
Monthly delegated-action summary

Delegate:
Macul Sports Association

Scope:
Sports allocation in Macul

Actions:
- funded 3 projects
- allocated $42,000 total
- supported 1 fiscalization action
- declared 0 conflicts

Represented weight:
1 own action + 2,430 delegated citizens

Your base profile is inactive while this delegation remains active.

[View detail]
[Revoke delegation]
[Edit report preferences]
```

The detailed view should link each action to its audit record and show any delegate explanation when one exists.

The citizen may configure report channel and frequency, including app-only or silent external notifications. However, delegated-action reports, delegate resignation, delegation revocation, rejected delegation, and fallback activation should remain visible in-app so delegation does not become hidden allocation.

## 10. Revocation

Revocation should be immediate for future actions.

For budget delegation, revocation should also reactivate the citizen's previously selected base allocation profile or fallback rule. This is the same base rule required before delegation becomes active.

Example:

```text
Revoke delegation

From now on, this delegate will not be able to act for you in this scope.

Actions performed while the delegation was active remain part of the history.

Your base profile will become active again:
Public system default.

[Confirm revocation]
```

Revocation affects future delegated decisions only. Funding commitments already made by the delegate remain governed by the ordinary funding commitment and project failure rules.

After revocation, the citizen may choose a new delegate, edit the base profile, or fund manually. The system should not improvise a hidden fallback after revocation.

## 11. Delegate resignation

The delegate may resign.

If a delegate resigns:

- citizen is notified;
- no future actions are authorized;
- previous actions remain valid;
- the citizen's previously selected base allocation profile or fallback rule resumes.

The system should not improvise a new fallback after resignation.

Example:

```text
Delegation inactive: delegate resigned.

Your base profile is active again:
Public system default.

[Choose new delegate]
[Edit base profile]
[Fund manually]
```

## What this flow should not do

The delegation flow should not:

- activate without delegate acceptance;
- activate budget delegation without a selected base allocation profile or fallback rule;
- hide scope;
- hide concentration;
- hide represented weight when a delegate acts;
- hide concentration stress-warning, report-sufficiency, or cap-effect status where applicable;
- hide material related-delegate, support-provider, or related-project relationships;
- hide separate participation-support funding received by a delegate;
- create automatic delegation commissions;
- hide the fallback that resumes if delegation ends;
- make delegated-action reporting depend only on voluntary manual reports;
- make revocation difficult;
- erase past delegated actions after revocation;
- hide which base allocation profile or fallback rule resumes after revocation;
- allow delegate to act outside scope;
- confuse delegation with automatic allocation profile;
- require every citizen to delegate;
- hide that automatic allocation rules are inactive within the delegated scope.

## Design rule

> Delegation should be easy to create, easy to understand, transparent in concentration, reportable through system-generated summaries, and immediately revocable for future actions. For budget delegation, revocation resumes the citizen's previously selected base allocation profile or fallback rule.

## Status

Accepted as Citizen Delegation Flow v0.
