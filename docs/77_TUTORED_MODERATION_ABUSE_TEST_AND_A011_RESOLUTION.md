# Tutored Moderation Abuse Test and A011 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A011-moderation-abuse-in-transition-pilots.md`
- Defense: `defenses/D011-moderation-abuse-in-transition-pilots.md`

## Resolution decision

A011 is founded and does not distort the project when it targets opaque tutored discretion. The project rejects both distorted extremes: banning all tutored modes or accepting hidden tutored gatekeeping. The accepted resolution is a tutored-moderation abuse test.

## Rule added to Core v0

Tutored decisions and tutored silence are already public civic objects. The system should also expose aggregate patterns that indicate possible moderation abuse.

Minimum metrics:

- rejection rate by reason, scope, actor type, and authority-linked operator;
- review delay and timeout rate;
- duplicate or outside-scope reason comparability;
- operator concentration inside tutored scopes;
- authority-controlled or privileged operator flag;
- citizen-facing moderation pattern dashboard.

## Macul example

If a municipal authority repeatedly rejects independent sports projects as duplicates while approving similar projects by a controlled operator, the pattern should be visible even if each individual rejection has a Governance Resolution.

## Citizen simplicity

Citizens should see simple indicators such as `review delayed`, `rejection reason`, `timeout recorded`, `authority-linked operator present`, or `moderation pattern available`.

## Transparency and accountability effect

This prevents a tutored pilot from becoming symbolic participation with opaque institutional control.

## Residual risks

- Visibility may not legally overturn a valid authority decision.
- Authorities may choose weak timeout policies.
- Some scope exclusions may be legitimate and should not be treated as abuse by default.

## Integration target

This resolution should inform OperatingMode, PlanningScope, GovernanceResolution, ReviewTimeoutResolution, state-owned operator eligibility, and administrative observability.
