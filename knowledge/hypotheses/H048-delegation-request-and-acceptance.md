# H048 — Delegation Request and Acceptance

## Hypothesis

Delegation should require a request from the delegator and explicit acceptance by the proposed delegate before it becomes active.

## Rationale

Delegation creates responsibility for the delegate. A person or organization should not become responsible for representing another citizen merely because that citizen selected them.

The delegate must have the right to accept or reject the delegation.

## Rule

Delegation follows a request-and-acceptance flow:

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

## Active delegation

A delegation is active only after acceptance.

Before acceptance, the proposed delegate has no authority to act on behalf of the citizen.

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

> Delegation is a mutual trust relationship: the citizen chooses whom to trust, and the delegate chooses whether to accept responsibility.

## Status

Extension of H042 — Layered Delegation Architecture.
