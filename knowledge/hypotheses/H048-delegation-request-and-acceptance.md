# H048 — Delegation Request and Acceptance

## Hypothesis

Delegation should require a request from the delegator and explicit acceptance by the proposed delegate before it becomes active.

## Rationale

Delegation creates responsibility for the delegate. A person or organization should not become responsible for representing another citizen merely because that citizen selected them.

The delegate must have the right to accept or reject the delegation.

## Rule

Delegation follows a request-and-acceptance flow:

```text
Citizen has selected a base allocation profile or fallback rule
→ citizen requests delegation
→ proposed delegate receives request
→ delegate accepts or rejects
→ if accepted, delegation becomes active
→ if rejected, no delegation is created and the base rule remains active
```

For non-budget delegation scopes, the exact fallback may differ. For budget allocation delegation, the base allocation profile or fallback rule is required before activation.

For non-budget scopes, the same request/acceptance core applies without a budget-allocation fallback:

```text
Citizen requests delegation
→ proposed delegate receives request
→ delegate accepts or rejects
→ if accepted, delegation becomes active
→ if rejected, no delegation is created
```

## Why acceptance matters

A delegate may reject a delegation because:

- they do not want the responsibility;
- the requested scope is too broad;
- they lack capacity;
- they have conflicts of interest;
- they do not serve that area or community;
- they do not want to accumulate more delegation concentration.

## First version

In the first version, the request-and-acceptance flow should remain simple.

The delegate receives a delegation request and accepts or rejects it manually.

The system should not initially require complex acceptance-condition configuration, because the goal is to validate the model without turning delegation into a control panel.

## Advanced version

In a later, more advanced version, delegates may configure general acceptance conditions.

Examples:

```text
Accept only education delegations.
Accept only delegations from my region or commune.
Accept at most N delegators.
Accept only delegations with a maximum duration.
Reject protocol-change voting delegations.
Accept fiscalization delegation, but not budget allocation delegation.
```

These conditions should be configurable, transparent, and visible to citizens before they request delegation.

## Active delegation

A delegation is active only after acceptance.

Before acceptance, the proposed delegate has no authority to act on behalf of the citizen.

If the request is rejected or expires, the citizen's base allocation profile or fallback rule continues to govern future allocation.

## Transparency

The system should show the status of a delegation request:

```text
Requested
Accepted
Rejected
Expired
Revoked
```

## Usability

The request and acceptance flow should remain simple. Delegation should not become a bureaucratic process.

## Principle

> Delegation is a mutual trust relationship: the citizen chooses whom to trust, the delegate chooses whether to accept responsibility, and budget delegation only activates when the citizen has a base allocation rule ready to resume if delegation fails or ends.

## Status

Extension of H042 — Layered Delegation Architecture.
