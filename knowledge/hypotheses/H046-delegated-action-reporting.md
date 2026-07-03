# H046 — Delegated Action Reporting

## Status

Core v0 delegation-accountability hypothesis aligned with [[../../docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|C011]], [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]], [[../../docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|A010]], [[H047-immediate-delegation-revocation|H047]], [[H048-delegation-request-and-acceptance|H048]], and [[H049-delegate-resignation-and-notification|H049]].

Delegated-action reporting should be simple for citizens and low-bureaucracy for delegates. The Core v0 baseline should be generated primarily by the system from traceable delegated actions. Delegates may add explanations, but the system should not depend on heavy manual reports to make revocation meaningful.

## Hypothesis

A delegator should receive periodic or event-based summaries of actions performed on their behalf, using notification channels and frequency configured by the delegator.

## Rationale

Delegation creates practical participation, but it also creates information asymmetry. If a citizen delegates budget allocation, voting, complaints, fiscalization support, or project evaluation to another actor, the citizen should be able to understand how that delegated authority was used.

This preserves trust and allows delegators to revoke or adjust delegation if the delegate no longer acts according to their expectations.

If reporting depends only on manually written delegate reports, the system creates unnecessary bureaucracy and weak accountability. A delegate could fail to report, report late, or report formally without exposing enough substance. Since delegated actions should already be traceable in the audit trail, the platform can generate the baseline report directly from recorded actions.

## Reporting rule

The system should generate delegated-action reports from the audit trail. The delegate may add optional explanations, criteria, or context, but the baseline report should not depend on the delegate writing a manual report.

Reports may include:

- projects supported;
- projects rejected or ignored;
- votes cast;
- comments or evaluations submitted;
- complaints supported;
- fiscalization actions supported;
- protocol-change votes;
- budget allocated;
- represented weight used;
- delegation concentration signal at the time of action;
- A010 stress-warning status, where applicable;
- report-sufficiency status for high-concentration delegation, where applicable;
- cap effect, where a configured public cap applies;
- material related-delegate, support-provider, or related-project warnings;
- conflicts of interest declared;
- abstentions;
- base allocation profile inactivity while delegation is active, where relevant;
- reasons or criteria used;
- outcomes of past delegated decisions.

The report should link each summarized action to its underlying public or permissioned audit record.

## Delegate explanation

Delegates may add a short explanation to a report or to an individual delegated action.

Example:

```text
Delegate explanation:
I supported this sports project because it matched the delegated scope,
had a closed control package, and served the commune where most delegators live.
```

This explanation is useful, but it should not be required for every ordinary action before the action can be reported. Core v0 should avoid turning delegation into an administrative report-writing job.

## Reporting frequency

The frequency should be configurable by the delegator, but common options may include:

```text
monthly summary;
quarterly summary;
event-based alerts;
app-only report;
minimal critical alerts.
```

## Reporting channels

The delegator should be able to configure how delegated-action reports are delivered.

Possible channels:

- in-app notification;
- email;
- SMS;
- WhatsApp or equivalent messaging channel where available;
- push notification;
- app-only report with no external interruption.

The system should not force one communication channel for everyone. Accessibility, age, digital literacy, and personal preference differ across users.

## User experience

Reporting should not overwhelm delegators. The default report should be simple, with detail available on demand.

A delegator should be able to see:

```text
This month your delegate allocated X to these projects,
voted on Y protocol items,
and supported Z fiscalization actions.
```

More complete example:

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

Concentration signal:
High concentration in local sports allocation

Your base profile is inactive while this delegation remains active.

[View detail]
[Revoke delegation]
[Edit report preferences]
```

## Transparency

Delegated actions should be traceable. A delegator should be able to inspect how their delegated authority was used without needing to understand the full audit model.

The simple report should show the summary. Detail views should expose:

- the delegated action;
- the scope used;
- represented weight;
- budget amount, where applicable;
- linked project or governance object;
- stress-warning, report-sufficiency, and cap-effect status where applicable;
- material support-provider, related-delegate, or related-project relationships;
- conflicts, abstentions, or related-party warnings;
- delegate explanation, if provided;
- audit event reference;
- resulting status or outcome when available.

## Revocability

Reports should make revocation meaningful. A citizen cannot effectively revoke delegation if they cannot see what the delegate is doing.

Reports should therefore include a clear path to revoke future authority. For budget delegation, the report should also remind the citizen which base allocation profile or fallback rule would resume after revocation.

Example:

```text
If you revoke this delegation, future sports allocation will return to:
Public system default profile.
Past delegated funding remains governed by the ordinary funding commitment rules.
```

## Remaining risks

- Citizens may ignore reports.
- Too many event alerts may create fatigue.
- Delegates may provide optional explanations that are formally correct but not very meaningful.
- Some delegated actions may involve restricted visibility because of privacy, beneficiary protection, legal safety, or protocol rules.
- High-concentration delegates may still influence many citizens even with clear reporting.
- Stress indicators may become too complex if every relationship check is forced into the ordinary citizen summary.

## Principle

> Delegation requires periodic accountability from delegate to delegator, but Core v0 should make the baseline report system-generated, traceable, simple, and configurable. High-concentration delegation should expose stress-warning and report-sufficiency status without making ordinary reports a heavy manual bureaucracy.

## Research note

Extension of H042, H043, and H045. Superseded where necessary by C011, C023, A010, H047, H048, and H049.
