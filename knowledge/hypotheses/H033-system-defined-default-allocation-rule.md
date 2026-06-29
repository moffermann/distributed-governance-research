# H033 — System-Defined Default Allocation Rule

## Status

Core financing and participation hypothesis aligned with [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]] and [[48_AI_ASSISTANCE_AND_C008_RESOLUTION|C008]].

Delegation and automatic allocation must preserve the v0 actor boundary: public institutions are not internal delegates, and AI assistance is infrastructure rather than a delegate or civic actor.

## Hypothesis

If citizens do not actively allocate their civic budget or configure their own allocation rule, the system should apply a transparent, system-defined default allocation rule.

## Rationale

A distributed governance system cannot assume that every citizen will enter the platform, configure preferences, or actively participate.

Many people will remain inactive. If their assignable civic funds remain indefinitely unallocated, large amounts of public resources may become dormant. If citizens are forced to enter the platform, the system becomes coercive in a way that contradicts its usability goals.

Therefore, the system needs a default rule.

## Civic autopilot

The default rule functions as a civic autopilot.

A citizen can:

- allocate resources manually;
- delegate allocation to an eligible citizen or non-state organization;
- choose a published allocation profile or portfolio rule;
- use AI assistance to understand options or configure preferences;
- configure a personal automatic rule;
- do nothing, in which case the system default applies.

## Delegation boundary after C007 and C008

The civic autopilot must distinguish delegation, profiles, and AI assistance.

```text
Allowed in Core v0:
  Delegate allocation to a trusted citizen.
  Delegate allocation to an eligible non-state civic/private organization.
  Use a published allocation profile or portfolio rule.
  Ask AI assistance to explain tradeoffs or help configure preferences.

Not allowed in Core v0:
  Delegate allocation to a public institution as an internal actor.
  Delegate allocation to an AI guide as if it were a representative.
```

Public institutions may still act externally according to C007, and AI may still assist according to C008. Neither becomes the internal delegate that exercises civic allocation authority.

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

## Principle

> Inactivity should not freeze public resources indefinitely, and participation should not require constant attention.

## Remaining design questions

Core financing and participation hypothesis aligned with C007 and C008. Extends H025. Needs further design around default-rule governance, profile publication, monthly reporting, citizen override, and how AI assistance explains allocation options without becoming a delegate.
