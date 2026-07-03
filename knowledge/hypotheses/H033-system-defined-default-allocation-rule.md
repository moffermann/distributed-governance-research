# H033 — System-Defined Default Allocation Rule

## Status

Core financing and participation hypothesis aligned with [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]], [[48_AI_ASSISTANCE_AND_C008_RESOLUTION|C008]], and [[H049-delegate-resignation-and-notification|H049]].

Delegation and automatic allocation must preserve the v0 actor boundary: public authorities are not internal delegates in scopes they control, and AI assistance is infrastructure rather than a delegate or civic actor.

## Hypothesis

If citizens do not actively allocate their civic budget or configure their own allocation rule, the system should apply a transparent, system-defined default allocation rule.

Once a citizen enters the platform for the first time, the system should require the citizen to select or acknowledge a base allocation profile. The public system default may be one of the selectable options.

## Rationale

A distributed governance system cannot assume that every citizen will enter the platform, configure preferences, or actively participate.

Many people will remain inactive. If their assignable civic funds remain indefinitely unallocated, large amounts of public resources may become dormant. If citizens are forced to enter the platform, the system becomes coercive in a way that contradicts its usability goals.

Therefore, the system needs a default rule.

The default rule should solve inactivity without becoming a hidden decision. A citizen who never onboards may be governed by the public protocol default. A citizen who onboards should explicitly accept that default or choose another base profile. ^r08bcd5be

H033 is aligned with [[../../docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|A019]]: the system-defined default rule that governs inactive citizens' shares operates under the active Planning Scope's recorded Allocation Mandate, so routing dormant public funds rests on named external authorization rather than protocol configuration alone.

## Civic autopilot

The default rule functions as a civic autopilot.

A citizen can:

- allocate resources manually;
- delegate allocation to an eligible citizen or eligible organization;
- choose a published allocation profile or portfolio rule;
- use AI assistance to understand options or configure preferences;
- configure a personal automatic rule;
- accept the public system default profile as their base rule.

If the citizen never enters the platform, the protocol-defined default still applies so public-purpose funds do not remain dormant indefinitely.

If the citizen wants to delegate budget allocation, the citizen must already have a base allocation profile or fallback rule. Delegation has priority while active, but the base rule resumes if the delegate resigns, the delegation is revoked, or the delegation otherwise becomes inactive for future actions.

## Delegation boundary after C007 and C008

The civic autopilot must distinguish delegation, profiles, and AI assistance.

```text
Allowed in Core v0:
  Delegate allocation to a trusted citizen.
  Delegate allocation to an eligible civic/private or operator organization where the C007 boundary allows it.
  Use a published allocation profile or portfolio rule.
  Ask AI assistance to explain tradeoffs or help configure preferences.

Not allowed in Core v0:
  Delegate allocation to a public authority as an internal actor in a scope it controls.
  Delegate allocation to an AI guide as if it were a representative.
```

Public authorities may still act externally according to C007, and AI may still assist according to C008. Neither becomes the internal delegate that exercises civic allocation authority.

## Monthly allocation

Rather than allocating once per year, the civic budget can be divided into monthly portions and assigned automatically each month.

This creates continuous funding flow and reduces the risk of large dormant balances.

## Example default rule

A possible default allocation rule might be:

```text
20% → strategic projects aligned with the roadmap
30% → projects close to funding completion
30% → regional or local projects
10% → fiscalization / mitigation / complaints
10% → new or exploratory projects
```

This is only an example. The actual default rule would be part of the protocol and subject to meta-governance.

## Requirements

The default rule must be:

- public;
- simple;
- auditable;
- modifiable by the citizen;
- modifiable through meta-governance;
- explainable in plain language;
- visible in each citizen's monthly allocation report.

## User override

The citizen can change the default rule at any time by configuring their own allocation preferences or delegations.

When changing to delegation, the previously selected base rule remains stored as the fallback for future loss of delegation authority.

## Principle

> Inactivity should not freeze public resources indefinitely, and participation should not require constant attention. First-use onboarding and pre-delegation flows should ensure each active citizen has a selected base allocation rule before another actor can exercise delegated allocation authority.

## Remaining design questions

Core financing and participation hypothesis aligned with C007 and C008. Extends H025. Needs further design around default-rule governance, profile publication, monthly reporting, citizen override, and how AI assistance explains allocation options without becoming a delegate.
