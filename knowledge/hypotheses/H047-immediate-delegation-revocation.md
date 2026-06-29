# H047 — Immediate Delegation Revocation

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
```

## No actions in progress after revocation

From the moment of revocation, the delegate has no authority to act for the citizen.

## Immutability of prior delegated actions

Actions already completed before revocation remain valid and immutable in the historical record because the delegate had authority at the time they acted.

Revocation does not retroactively undo actions previously taken within the valid delegation scope.

This preserves traceability and prevents retroactive instability.

## Post-revocation expression

After revocation, the citizen may always act directly going forward.

For example, if a delegate previously supported a project on the citizen's behalf, the citizen may later:

- comment on the project;
- express disagreement;
- update their own evaluation;
- support a complaint or fiscalization if applicable;
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

## Transparency

After revocation, the system should show:

- when the delegation was revoked;
- which delegate lost authority;
- which delegated scopes were affected;
- what actions had already been performed before revocation.

## Principle

> Delegation is voluntary, revocable at any time, and non-retroactive. The citizen controls future authority, while past authorized actions remain immutable. The citizen may always add new direct expression, but cannot retroactively remove valid funding commitments except through project closure, failure, revocation, recovery, return, or reassignment rules.

## Status

Extension of H042, H045, and H046. Funding effects are superseded where necessary by C005 and C017.
