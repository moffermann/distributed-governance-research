# Delegation Priority and C011 Resolution v0

## Purpose

This document resolves contradiction C011 from the v0 contradiction checklist.

C011 was originally framed as a possible conflict between automatic allocation rules and delegation. The final resolution is that this is not a real contradiction in v0 because delegation has explicit priority over automatic rules.

## Status

Accepted as the v0 resolution for C011.

## Core principle

> Active delegation has priority over automatic allocation rules.

In v0, delegation is global. When a citizen delegates, the citizen delegates all financing decisions to the delegate.

Therefore, automatic allocation rules configured by the citizen do not compete with the delegate while delegation is active.

## Why this is not a v0 contradiction

The possible contradiction was:

```text
The citizen has automatic rules.
The citizen also delegates.
Both could try to allocate the same funds.
```

But in v0, the answer is already defined:

```text
If delegation is active, the delegate decides.
If delegation is not active, citizen manual choices or automatic rules can operate.
```

There is no unresolved conflict.

## v0 priority rule

Recommended v0 priority:

```text
1. Active delegation
2. Citizen manual decision, if no active delegation applies
3. Automatic allocation rules, if no active delegation applies
4. Unallocated available balance
```

The important point is that automatic rules do not override an active delegate.

## Effect of delegation

When delegation is active:

- the delegate chooses projects according to the delegation mandate;
- the citizen's previous automatic rules are suspended or bypassed for the delegated balance;
- the citizen may still see what the delegate does through delegated-action history and system-generated reports;
- the citizen may revoke delegation for future decisions according to the delegation rules;
- past commitments already made by the delegate remain governed by the funding commitment rules.

## Automatic rules under active delegation

Automatic rules may remain stored in the citizen profile, but they should not execute while global delegation is active.

The system may show:

```text
Automatic rules are inactive while delegation is active.
```

This avoids hidden conflicts.

## Future versions with category delegation

If future versions allow delegation by category, territory, value icon, project type, or budget share, the same rule applies inside the delegated scope.

Example:

```text
Deporte: delegated
Educación: automatic rules
Salud: manual
```

In that future model:

```text
Delegated category → delegate has priority.
Non-delegated category → citizen manual rules or automatic rules may operate.
```

The rule remains simple:

> Delegation has priority within the delegated scope.

## Citizen-facing explanation

The interface should not present delegation and automatic rules as equal competing mechanisms.

If the citizen activates delegation, the UI should clearly say:

```text
Your delegate will make financing decisions for you while delegation is active.
Your automatic rules will not execute during active delegation.
```

If future category delegation exists, the UI should say:

```text
Your delegate decides inside this delegated category. Automatic rules apply only outside delegated categories.
```

## Relationship with funding commitment

Delegation affects who decides future financing, not whether committed funds can be freely withdrawn.

Once the delegate finances a project, that funding follows the same commitment rules as ordinary citizen funding.

## C011 final resolution

C011 is resolved as follows:

```text
No unresolved v0 contradiction exists. Delegation has priority over automatic allocation.
```

Final rule:

> In v0, if a citizen has an active delegate, the delegate governs financing decisions and automatic allocation rules do not execute. In future scoped delegation, the delegate has priority within the delegated scope.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen delegation flow;
- citizen automatic allocation profile flow;
- citizen funding flow;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Citizens may forget they delegated.
- Citizens may expect automatic rules to continue while delegation is active.
- Delegates may make decisions the citizen dislikes.
- Future category delegation may create configuration complexity.

## Mitigations

- clear active delegation banner;
- delegation activity history and system-generated delegated-action reports;
- simple revocation path for future decisions;
- explicit UI message that automatic rules are inactive under delegation;
- avoid scoped delegation in v0.

## Design rule

> Delegation is not another automatic rule. It is a transfer of decision priority to another actor.
