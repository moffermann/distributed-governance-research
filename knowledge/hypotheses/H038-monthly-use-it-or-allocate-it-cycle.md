# H038 — Monthly Use-It-or-Allocate-It Cycle

## Hypothesis

Assignable civic funds should be allocated monthly rather than accumulated indefinitely, in order to prevent projects from remaining stalled due to dormant balances.

## Rationale

If citizens can accumulate their assignable civic budget indefinitely, large amounts of public-purpose resources may remain inactive while projects wait for financing.

The system is intended to coordinate social value creation, not to create idle civic savings accounts.

## Rule

Each citizen's assignable civic budget is divided into monthly allocation cycles.

At the end of each cycle, funds are assigned according to one of the following:

- direct citizen allocation;
- citizen-selected allocation profile;
- custom allocation rule;
- delegation rule;
- system-defined default rule.

For onboarded citizens, the system-defined default should be either the selected base profile or the fallback rule the citizen accepted. For citizens who never onboard, the public protocol default may apply directly.

## No indefinite accumulation

Unassigned monthly funds should not simply accumulate forever.

If the citizen does not act, the system applies the configured, selected, or protocol-defined default allocation rule. ^r5cecbdca

If delegation ends because of revocation, rejection, expiration, or delegate resignation, the next applicable monthly cycle should use the citizen's previously selected base allocation profile or fallback rule.

## Configurable fallback behavior

When a profile category has no available projects that satisfy its criteria during a monthly cycle, the fallback behavior should be configurable.

Example:

```text
Profile rule:
30% → local projects

Problem:
No local projects are currently active, eligible, or fundable.
```

The citizen should be able to choose a fallback rule, such as:

- reassign proportionally to the rest of the profile;
- apply the system default rule for that portion;
- redirect to strategic projects;
- redirect to projects close to funding completion;
- redirect to fiscalization or mitigation;
- hold only until the next monthly cycle, not indefinitely.

Returned funds from expired funding attempts should re-enter this same logic unless the active policy or citizen default routes them elsewhere. A project that did not reach financing closure should not keep committed balances idle after the funding window expires.

## Default fallback

If the citizen does not configure fallback behavior, the system should apply a simple default fallback defined by the protocol.

The fallback must be:

- public;
- simple;
- auditable;
- explainable;
- modifiable by the citizen.

## Reason

Monthly automatic allocation creates a continuous flow of resources into the project ecosystem and reduces financing bottlenecks.

## Continuity-sensitive projects

Monthly allocation can help continuity needs receive steady attention, but it should not hide that a project funds only a bounded period. Where a project is recurring, continuity-critical, emergency, or maintenance-dependent, the funding surface should preserve the A006 continuity label, renewal trigger, and wind-down rule. ^r1769ff15

If a funded continuity period is approaching its end, the system may route eligible profile or fallback allocations toward follow-on projects, maintenance, mitigation, wind-down, or a continuity project generated from a public Idea. The automatic cycle should not automatically renew the current executor and should not treat a renewal window as proof that a follow-on project is valid.

## Relationship to project funding

Projects still close when they reach their funding target. Monthly allocation helps projects reach targets without waiting for annual or sporadic citizen participation.

H040 and the Funding Window Expiry resolution add the complementary rule: each financeable lane has a visible funding window. If the lane expires unfunded, eligible unused commitments return, reassign, or follow the citizen's selected/default allocation rule.

Automatic profiles may include a visible preference for eligible projects that are close to funding completion. This is ordinary citizen/profile allocation logic, not hidden treasury leverage.

## Budget liquidity smoothing boundary

Future implementations may use a public `Budget Liquidity Smoothing` policy to manage cyclical allocation capacity against an authorized annual or period budget. That policy is not required for Core v0 and should not be treated as uncontrolled virtual money.

Any such policy belongs to Extension v1+ or country implementation and requires public formula, budget cap, open-commitment stress test, reserve/coverage rule, cycle adjustment, and audit trail.

## Principle

> Civic funds exist to be assigned to public-value projects, not to remain dormant indefinitely. If a chosen category has no eligible projects, or if delegation authority ends, the system should apply a transparent selected fallback rather than freeze resources.

## Status

Financing-cycle hypothesis. Extends H025, H033, and H034.
