# H044 — Non-Compensated Delegation by Default

## Status

Core v0 delegation-incentive boundary aligned with [[H042-layered-delegation-architecture|H042]], [[H043-transparent-delegation-concentration|H043]], [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]], [[H045-delegated-action-weight|H045]], and [[H046-delegated-action-reporting|H046]].

The rule is that delegation may create influence and responsibility, but it does not create automatic compensation, commission, or a paid asset-management relationship. Paid delegation markets remain Extension v1+ and require a separate future design if ever introduced.

## Hypothesis

Delegation should be non-compensated by default. A delegate should not normally require direct economic incentives to administer another person's civic allocation or participation preferences.

## Rationale

Delegation is based on trust. A citizen or community delegates because they trust an eligible person, eligible organization, eligible university or expert group, foundation, or local group to act according to their values.

If delegation becomes directly remunerated, it may create a new market for capturing civic preferences and managing citizen allocations for profit.

## Core rule

Delegates should not receive automatic payment simply because people delegate to them.

Delegation may create influence and responsibility, but not an automatic income stream.

This means:

- no per-delegator commission;
- no automatic percentage of delegated civic allocation;
- no automatic fee for managing delegated authority;
- no hidden monetization of represented weight;
- no payment triggered only by receiving or keeping delegations.

Example:

```text
Macul Sports Association receives 2,430 sports-allocation delegations.

Allowed:
  The association may act inside the accepted delegation scope.
  Its represented weight is visible and reported.

Not allowed in Core v0:
  The association automatically receives a commission
  for each delegator or for each amount allocated.
```

## Why this matters

Paying delegates directly could create perverse incentives:

- actors competing to accumulate delegations for revenue;
- marketing-driven capture of delegation flows;
- conflicts between delegate income and citizen interest;
- delegation becoming an industry of preference management;
- concentration of influence around actors with better acquisition capacity.

## Assistance is different from delegation payment

This does not prevent assistance projects from existing.

A community may still support or fund projects such as:

- digital literacy assistance;
- community participation support;
- project translation;
- evidence-production support;
- local civic education;
- help desks or participation offices.

These are projects that provide participation capacity. They are not automatic commissions paid to delegates for controlling another person's allocation.

Example:

```text
Allowed as an ordinary project:
Community Sports Participation Help Desk

Purpose:
Help older adults understand sports projects and use the platform.

Controls:
public budget, executor, evidence, fiscalization, milestones, and audit trail.

Boundary:
The help desk may support participation, but it does not receive
automatic payment because citizens delegate to it.
```

## Relationship with concentration

Delegation concentration is allowed when citizens choose it, but concentration should not become a revenue-maximization business model by default.

Without this boundary, a popular delegate could have a financial incentive to accumulate delegations for income rather than to represent citizen preferences responsibly.

Core v0 therefore combines:

- freedom to delegate;
- concentration visibility;
- represented-weight disclosure;
- system-generated delegated-action reporting;
- immediate revocation;
- no automatic compensation for holding delegations.

## Future extension boundary

Paid delegation markets are not part of Core v0.

If a future version ever allows compensated delegation, it should be treated as a separate Extension v1+ design with explicit rules for:

- fee disclosure;
- conflicts of interest;
- acquisition and marketing limits;
- concentration effects;
- revocation rights;
- reporting obligations;
- auditability;
- separation from ordinary participation-support projects.

Until such a design exists, the Core v0 rule is non-compensated delegation by default.

## What Core v0 should avoid

Core v0 should not:

- pay delegates automatically for accumulated delegations;
- let delegates take a percentage of delegated civic allocation;
- hide separate funding received by a delegate for participation support;
- confuse trust-based delegation with a paid management contract;
- require citizens to evaluate fee structures when delegating;
- create an incentive to capture delegators for revenue.

## Principle

> Delegation is a trust mechanism, not a paid asset-management business by default. Participation support may be funded as ordinary transparent projects, but delegation itself does not create automatic compensation.

## Research note

Extension of H042 and H043. Superseded where necessary by C023, H045, and H046. Needs further review only if the system later introduces paid delegation markets or automatic delegate-compensation mechanisms.
