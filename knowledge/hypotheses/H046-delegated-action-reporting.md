# H046 — Delegated Action Reporting

## Hypothesis

A delegate should periodically report to delegators the actions performed on their behalf.

## Rationale

Delegation creates practical participation, but it also creates information asymmetry. If a citizen delegates budget allocation, voting, complaints, fiscalization support, or project evaluation to another actor, the citizen should be able to understand how that delegated authority was used.

This preserves trust and allows delegators to revoke or adjust delegation if the delegate no longer acts according to their expectations.

## Reporting rule

Delegates should provide periodic summaries of actions performed within the delegated scope.

Reports may include:

- projects supported;
- projects rejected or ignored;
- votes cast;
- comments or evaluations submitted;
- complaints supported;
- fiscalization actions supported;
- protocol-change votes;
- budget allocated;
- reasons or criteria used;
- outcomes of past delegated decisions.

## Reporting frequency

The frequency should be configurable, but common options may include:

```text
monthly summary;
quarterly summary;
event-based alerts;
app-only report;
minimal critical alerts.
```

## User experience

Reporting should not overwhelm delegators. The default report should be simple, with detail available on demand.

A delegator should be able to see:

```text
This month your delegate allocated X to these projects,
voted on Y protocol items,
and supported Z fiscalization actions.
```

## Transparency

Delegated actions should be traceable. A delegator should be able to inspect how their delegated authority was used.

## Revocability

Reports should make revocation meaningful. A citizen cannot effectively revoke delegation if they cannot see what the delegate is doing.

## Principle

> Delegation requires periodic accountability from delegate to delegator.

## Status

Extension of H042, H043, and H045.
