# H045 — Delegated Action Weight

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

## Transparency

Whenever a delegate acts, the system should show the represented weight and scope.

Example:

```text
This vote represents 3 verified participants.
Scope: education allocation.
```

## Principle

> Delegated participation should be counted clearly and transparently, without forcing unnecessary granularity in the first version.

## Status

Extension of H042 and H043.
