# H045 — Delegated Action Weight

## Status

Core v0 delegation-weight hypothesis aligned with [[H042-layered-delegation-architecture|H042]], [[H043-transparent-delegation-concentration|H043]], [[../../docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|C011]], [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]], and [[H046-delegated-action-reporting|H046]].

The original rule is preserved: when a delegate acts inside an active delegation scope, the action represents the delegate and all delegators covered by that scope by default. The clarification is that represented weight must be visible, traceable, and included in delegated-action reports without requiring per-delegator selection in Core v0.

## Hypothesis

When a delegate acts within the scope of an active delegation, the action should count on behalf of the delegate and the citizens who delegated that action to them.

## Rationale

Delegation represents trust. If two people delegate a certain action to a delegate, and the delegate also acts for themselves, the delegate is effectively exercising three aligned participations within that delegated scope.

The system should not over-granularize this in the first version. If the delegation scope includes the action, the delegate's action applies to the delegators by default.

## Example

If a delegate manages two other citizens' participation and votes on a project or protocol item within the delegated scope:

```text
Delegate's own vote: 1
Delegated votes: 2
Total represented votes: 3
```

Applied to a larger civic allocation case:

```text
Delegate:
Macul Sports Association

Action:
Funded Project A inside the sports allocation scope.

Represented weight:
1 own action + 2,430 delegated citizens.

Scope:
Sports allocation in Macul.

Audit effect:
The action is recorded as delegated action, not as a personal-only action.
The represented weight appears in the action record and in delegated-action reports.
```

## Configurable scope

Advanced configuration may allow a delegate to specify which delegations are being used for a given action.

Example:

```text
This vote counts for:
- me;
- Delegator A;
- not Delegator B.
```

Or:

```text
This comment represents:
- me;
- Delegator C.
```

However, this should be an advanced feature, not the default user experience.

## Default rule

The default should be simple:

> If the action is inside the delegation scope, the delegate acts for themselves and all delegators covered by that scope.

This default avoids forcing delegates or citizens to manage a per-action, per-delegator checklist in the first version.

## Caps and explicit exceptions

If a protocol, pilot, public function, territory, action type, or country implementation defines a cap, the cap may limit the represented weight used by a delegated action. That cap must be visible before delegation and in the action record.

Example:

```text
Protocol-change vote:
Configured cap: maximum 5% represented voting weight.

Delegated support:
Delegate has 8% delegated weight.

Action record:
5% represented weight used.
3% excess delegated weight visible but not counted for this action type.
```

This does not change the default rule. It only makes configured exceptions explicit and auditable.

## Transparency

Whenever a delegate acts, the system must show the represented weight, scope, and whether the action used full or capped delegated weight.

Example:

```text
This vote represents 3 verified participants.
Scope: education allocation.
```

The represented-weight record should feed:

- the delegated-action audit trail;
- system-generated delegated-action reports;
- concentration warnings and observability metrics;
- future revocation decisions by citizens;
- cap-compliance checks where caps exist.

## What Core v0 should avoid

Core v0 should not:

- require ordinary citizens to understand every represented-weight calculation;
- require delegates to manually select each delegator for ordinary in-scope actions;
- hide represented weight behind a personal-only action label;
- silently cap represented weight without showing the rule;
- treat delegated action weight as a private internal metric unavailable to the delegator.

## Principle

> Delegated participation should be counted clearly and transparently. If the action is inside the delegated scope, the represented weight applies by default, appears in the audit trail, and feeds delegated-action reports, without forcing unnecessary per-delegator granularity in Core v0.

## Research note

Extension of H042 and H043. Superseded where necessary by C011, C023, and H046.
