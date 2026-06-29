# H049 — Delegate Resignation and Notification

## Status

Core v0 delegation-continuity hypothesis aligned with [[../../docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|C011]], [[H033-system-defined-default-allocation-rule|H033]], [[H038-monthly-use-it-or-allocate-it-cycle|H038]], and [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]].

Delegation can end without freezing civic allocation because a citizen should have a base allocation profile or fallback rule before budget delegation becomes active. The system default profile may be that selected base rule, but it must be public and either accepted by the citizen during onboarding/pre-delegation or applied by protocol only for citizens who never onboard.

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

When a delegate resigns, the system should reactivate the delegator's previously selected base allocation profile or fallback rule.

Budget delegation should not become active unless the citizen has a base allocation profile or fallback rule selected first.

The base rule may be:

- the public system default profile accepted by the citizen;
- an official allocation profile selected by the citizen;
- a custom automatic allocation profile;
- a protocol-allowed manual-hold or available-balance rule;
- another explicit fallback rule allowed by the protocol.

If the citizen has never onboarded and therefore never selected a base rule, the protocol-defined system default may apply under H033/H038. That is different from delegate resignation, because delegation cannot exist without prior citizen action and delegate acceptance.

```text
Delegate resigns
→ delegation becomes inactive for future actions
→ delegator is notified
→ previously selected base profile/fallback rule resumes
→ delegator may later choose a new delegate or edit the base rule
```

This prevents the citizen's civic allocation from becoming frozen or unmanaged after delegate resignation without allowing the system to improvise a hidden allocation rule.

Example:

```text
First session:
  Ana accepts the public system default profile as her base rule.

Later:
  Ana delegates sports allocation to a local sports association.

Delegate resignation:
  The association resigns because it reached capacity.

Result:
  The sports delegation becomes inactive for future actions.
  Past delegated funding remains valid.
  Ana is notified.
  Ana's accepted base profile resumes from the next applicable cycle.
  Ana can choose a new delegate, edit her profile, or fund manually.
```

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
- view or edit the active base allocation profile;
- switch to the public system default profile;
- switch to an official allocation profile;
- resume direct control.

## Historical actions

Actions already completed before resignation remain valid and immutable if the delegate had authority at the time.

Resignation affects only future authority.

## Principle

> Delegation is voluntary on both sides. The delegator can revoke, and the delegate can resign, but both actions affect only future authority and must be communicated clearly. Delegation should only become active after the citizen has a selected base allocation profile or fallback rule; if delegation ends, that previously selected rule resumes.

## Research note

Extension of H042, H046, H047, and H048. Needs future implementation detail around onboarding, notification reliability, offline citizens, and whether any country implementation allows a manual-hold fallback without undermining monthly allocation flow.
