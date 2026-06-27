# H049 — Delegate Resignation and Notification

## Hypothesis

A delegate should be able to resign from an accepted delegation unilaterally. No person or organization should be forced to continue representing another citizen if they no longer want or are no longer able to do so.

## Rationale

Delegation is a mutual trust relationship. Just as the delegator can revoke delegation, the delegate must be able to resign.

A delegate may need to resign because:

- they no longer want the responsibility;
- they lack capacity;
- they face a conflict of interest;
- they no longer agree with the delegator's expectations;
- they are leaving the platform;
- their role or organization changed;
- continuing would create reputational or operational risk.

## Rule

Delegate resignation should be allowed at any time.

```text
Delegate resigns
→ delegation becomes inactive
→ delegator is notified
→ delegate can no longer act on behalf of that citizen
→ future actions exclude that delegator's weight
```

## Fallback after resignation

When a delegate resigns, the system should apply the delegator's currently configured profile or allocation rule.

If the delegator has no configured profile or rule, the system should apply the system default profile until the delegator chooses a new delegate or configures a new rule.

```text
Delegate resigns
→ use delegator's configured profile/rule
→ if none exists, use system default profile
→ delegator may later choose a new delegate
```

This prevents the citizen's civic allocation from becoming frozen or unmanaged after delegate resignation.

## Notification requirement

The delegator must be notified adequately when a delegate resigns.

Notification should be delivered through the citizen's configured channels, such as:

- in-app notification;
- email;
- SMS;
- WhatsApp or equivalent messaging channel where available;
- push notification;
- app-only report if the citizen selected that mode.

## User experience

When a delegate resigns, the delegator should see a clear status change:

```text
Delegation inactive: delegate resigned.
```

The system should provide simple next actions:

- choose a new delegate;
- switch to a default allocation rule;
- switch to an official allocation profile;
- resume direct control.

## Historical actions

Actions already completed before resignation remain valid and immutable if the delegate had authority at the time.

Resignation affects only future authority.

## Principle

> Delegation is voluntary on both sides. The delegator can revoke, and the delegate can resign, but both actions affect only future authority and must be communicated clearly. If delegation ends, the citizen's configured profile applies; if none exists, the system default applies.

## Status

Extension of H042, H046, H047, and H048.
