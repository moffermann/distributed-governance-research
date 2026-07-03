# Tutored Moderation Abuse Boundary and A011 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A011-moderation-abuse-in-transition-pilots|attacks/A011-moderation-abuse-in-transition-pilots.md]]
- Defense: [[D011-moderation-abuse-in-transition-pilots|defenses/D011-moderation-abuse-in-transition-pilots.md]]

## Resolution decision

A011 is founded and does not distort the project when it targets opaque tutored discretion. The project rejects both distorted extremes: banning all tutored modes or accepting hidden tutored gatekeeping.

The accepted resolution is a Core v0 boundary plus Extension v1+ analytics. Core v0 must preserve the data needed to audit tutored-moderation patterns, but it does not require a formal moderation-abuse finding, citizen-facing pattern dashboard, automatic abuse score, or platform-level reversal mechanism.

## Rule added to Core v0

Tutored decisions and tutored silence are already public civic objects under C020. A011 adds that Core v0 should preserve enough structured data for later audit of moderation patterns.

Minimum Core v0 data:

- decision type and decision result; ^r0150e5d2
- standardized rejection reason category where practical;
- public function, Planning Scope, operating mode, and rule/version applied;
- responsible authority or authorized process; ^ra01bc110
- submission date, review deadline, decision date, review time, and timeout status;
- suggested next path;
- authority-controlled, privileged, or authority-linked operator flag where the relationship is known or declared;
- AuditEvent reference.

Extension v1+ / country or administrator observability:

- formal tutored-moderation abuse test;
- citizen-facing moderation pattern dashboard;
- rejection-rate comparison by reason, scope, actor type, or operator relationship;
- duplicate or outside-scope reason comparability analytics;
- operator concentration analytics inside tutored scopes;
- automatic possible-abuse warnings or scoring.

## Macul example

If a municipal authority rejects an independent multi-court project in Macul as a duplicate, Core v0 should preserve the reason, rule, scope, authority, dates, timeout status, and any authority-linked operator relationship. If the authority repeatedly rejects independent sports projects as duplicates while approving similar projects by a controlled operator, a V1+ or administrator observability layer can expose that pattern without treating the platform as the legal reversal authority.

## Citizen simplicity

Citizens should see simple case-level indicators such as `review delayed`, `rejection reason`, `timeout recorded`, or `authority-linked operator present` where material. A broader `moderation pattern available` dashboard is useful, but it is not required in Core v0.

## Transparency and accountability effect

This preserves the minimum trace needed to prevent tutored pilots from becoming opaque case-by-case gatekeeping. Advanced pattern detection can later show whether the pilot is becoming symbolic participation with institutional control.

## Residual risks

- Visibility may not legally overturn a valid authority decision.
- Authorities may choose weak timeout policies.
- Some scope exclusions may be legitimate and should not be treated as abuse by default.
- Pattern analytics can mislead if they ignore lawful scope differences, project quality differences, or legitimate duplication.
- Moving the full dashboard to V1+ means some aggregate abuse may remain harder for ordinary citizens to see in early pilots.

## Integration target

This resolution should inform OperatingMode, PlanningScope, GovernanceResolution, ReviewTimeoutResolution, state-owned operator eligibility, AuditEvents, basic administrative observability, and future Extension v1+ moderation-pattern analytics.
