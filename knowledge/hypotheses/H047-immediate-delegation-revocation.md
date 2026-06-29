# H047 — Immediate Delegation Revocation

## Status

Core v0 delegation-control hypothesis aligned with [[../../docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|C011]], [[H033-system-defined-default-allocation-rule|H033]], [[H034-configurable-allocation-profiles|H034]], [[H038-monthly-use-it-or-allocate-it-cycle|H038]], [[H048-delegation-request-and-acceptance|H048]], and [[H049-delegate-resignation-and-notification|H049]].

Revocation remains immediate and non-retroactive. For budget delegation, revocation also reactivates the citizen's previously selected base allocation profile or fallback rule for future allocation.

## Hypothesis

A citizen should be able to revoke a delegation immediately and at any time. Once revoked, the delegate can no longer act on that citizen's behalf from that moment forward.

## Rationale

Delegation is based on trust. If trust is lost, the citizen must be able to remove delegated authority easily and without waiting for a cycle boundary.

Delayed revocation would weaken citizen control and could allow a delegate to continue acting against the delegator's wishes.

## Rule

Delegation revocation should be immediate.

```text
Citizen revokes delegation
→ delegation becomes inactive immediately
→ delegate can no longer act on behalf of that citizen
→ future actions exclude that delegator's weight
→ previously selected base profile/fallback rule resumes, for budget delegation
```

## No actions in progress after revocation

From the moment of revocation, the delegate has no authority to act for the citizen.

## Post-revocation allocation continuity

When a citizen revokes budget delegation, the system should reactivate the citizen's previously selected base allocation profile or fallback rule.

Budget delegation should not become active unless that base rule has already been selected or acknowledged by the citizen.

The base rule may be:

- the public system default profile accepted by the citizen;
- an official allocation profile selected by the citizen;
- a custom automatic allocation profile;
- a protocol-allowed manual-hold or available-balance fallback;
- another explicit fallback rule allowed by the protocol.

```text
Citizen revokes delegation
→ delegation becomes inactive for future actions
→ delegate loses future authority
→ past delegated actions remain valid
→ previously selected base profile/fallback rule resumes
→ citizen may choose a new delegate, edit the base rule, or fund manually
```

This preserves citizen control without freezing civic allocation and without allowing the system to invent a hidden post-revocation rule.

Example:

```text
First session:
  Ana accepts the public system default profile as her base rule.

Later:
  Ana delegates sports allocation to a local sports association.

Revocation:
  Ana loses trust and revokes the delegation.

Result:
  The sports association cannot act for Ana in future sports allocation.
  Past delegated funding remains valid.
  Ana's accepted base profile resumes from the next applicable cycle.
  Ana can later choose a new delegate, edit her profile, or fund manually.
```

## Immutability of prior delegated actions

Actions already completed before revocation remain valid and immutable in the historical record because the delegate had authority at the time they acted.

Revocation does not retroactively undo actions previously taken within the valid delegation scope.

This preserves traceability and prevents retroactive instability.

## Post-revocation expression

After revocation, the citizen may always act directly going forward or change the active base allocation rule.

For example, if a delegate previously supported a project on the citizen's behalf, the citizen may later:

- comment on the project;
- express disagreement;
- update their own evaluation;
- support a complaint or fiscalization if applicable;
- edit the base allocation profile that resumed after revocation;
- participate directly in future actions.

However, the citizen cannot withdraw funding already committed through a valid delegated action merely because delegation was revoked.

Funding effects follow C005 and C017. A delegated funding action remains a funding commitment until project closure or protocol-defined project outcome. Reformulation does not create default individual withdrawal; eligible unreleased, unused, retained, guaranteed, or recovered funds may return or reassign only through the project outcome and citizen configuration.

## User experience

Revocation should be extremely simple.

The home screen or delegation management area should include a clear and visible control such as:

```text
Revoke delegation
```

The citizen should not need to navigate complex menus or wait for approval.

After confirmation, the citizen should see what became active:

```text
Delegation revoked.

This delegate can no longer act for you in this scope.

Your base profile is active again:
Public system default.

[Choose new delegate]
[Edit base profile]
[Fund manually]
```

## Transparency

After revocation, the system should show:

- when the delegation was revoked;
- which delegate lost authority;
- which delegated scopes were affected;
- what actions had already been performed before revocation;
- which base allocation profile or fallback rule resumed;
- when the next allocation cycle or future allocation action will apply that base rule.

## Principle

> Delegation is voluntary, revocable at any time, and non-retroactive. The citizen controls future authority, while past authorized actions remain immutable. Budget delegation only becomes active after the citizen has selected or acknowledged a base allocation profile or fallback rule; if the citizen revokes delegation, that previously selected rule resumes. The citizen may always add new direct expression, but cannot retroactively remove valid funding commitments except through project closure, failure, revocation, recovery, return, or reassignment rules.

## Research note

Extension of H042, H045, and H046. Funding effects are superseded where necessary by C005 and C017. Delegation-continuity effects are aligned with H033, H038, H048, and H049.
