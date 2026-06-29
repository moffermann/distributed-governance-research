# H042 — Layered Delegation Architecture

## Status

Core delegation architecture hypothesis aligned with [[../../docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]], [[../../docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION|C008]], [[../../docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|C011]], [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]], [[H033-system-defined-default-allocation-rule|H033]], [[H034-configurable-allocation-profiles|H034]], [[H038-monthly-use-it-or-allocate-it-cycle|H038]], and [[H043-transparent-delegation-concentration|H043]] through [[H049-delegate-resignation-and-notification|H049]].

Core v0 delegation may be assigned to eligible citizens or non-state organizations, with explicit scope, delegate acceptance, visible concentration, represented-weight disclosure, system-generated reports, no automatic compensation, and immediate revocation for future authority. Public institutions are not internal delegates, and AI assistance is not a delegate or civic actor.

For budget delegation, the citizen must have selected or acknowledged a base allocation profile or fallback rule before delegation becomes active. If delegation is revoked, rejected, expired, or resigned, that previously selected base rule resumes for future allocation.

## Hypothesis

Delegation of civic participation should be flexible but layered, so citizens can delegate easily without turning the interface into a complex control panel.

## Rationale

Not every citizen will want to review projects, configure allocation rules, evaluate evidence, or participate directly in every governance decision.

Delegation makes the system viable by allowing citizens to participate through trusted eligible citizens or non-state organizations. Automatic allocation profiles and configured allocation rules also support low-friction participation, but they are not delegates or civic actors.

However, excessive delegation options can make the system difficult to use. The interface should therefore provide simple defaults and deeper configuration only when requested.

The goal is to validate a first version of the model, not to build the most granular delegation system imaginable.

## First-version simplicity

The first version should avoid unnecessary complexity.

As a default design rule:

- one delegate per area or action scope;
- no subdelegation;
- no temporary pause mechanism;
- no automatic delegate compensation;
- simple delegation available as a quick action;
- revocation available immediately and easily;
- system-generated reporting by default;
- detailed configuration available only in advanced settings.

The system can become more granular later if real use shows that it is needed.

## Core v0 baseline

Core v0 should support simple scoped delegation with the following baseline:

```text
Citizen selects or acknowledges base allocation profile/fallback rule
→ citizen chooses delegation scope
→ citizen chooses eligible delegate
→ system shows delegate profile and concentration signal
→ citizen sends request
→ delegate accepts or rejects
→ active delegation has priority within scope
→ delegated actions show represented weight
→ reports are generated from the audit trail
→ citizen may revoke future authority at any time
→ if delegation ends, the selected base rule resumes
```

This keeps the ordinary citizen flow simple while making the underlying authority traceable.

Example:

```text
Ana accepts the public system default profile as her base rule.
Ana delegates sports allocation in Macul to Macul Sports Association.

Before confirmation:
  the system shows that the association represents 2,430 citizens
  and 28% of delegated sports allocation in Macul.

When the association funds Project A:
  represented weight is visible;
  the action appears in Ana's delegated-action report;
  no automatic commission is paid to the association.

If Ana revokes:
  future delegated authority ends immediately;
  past valid funding remains governed by funding commitment rules;
  Ana's base allocation profile resumes.
```

## Delegate eligibility boundary

Core v0 delegation must preserve the actor boundaries defined by C007 and C008.

Allowed:

```text
Delegate my sports allocation to a trusted citizen.
Delegate my education allocation to a non-state civic organization.
Ask AI assistance to explain the options before deciding.
Use an allocation profile for local youth sports as an automatic rule, not as a delegate.
```

Not allowed in Core v0:

```text
Delegate my allocation to the Ministry of Sports as an internal delegate.
Delegate my funding decisions to an AI guide as if it were a representative.
```

Public institutions may have external implementation roles under C007, and AI may assist under C008. Neither becomes the internal actor exercising delegated civic authority.

Allocation profiles are also not civic actors. They are citizen-configured rules that may operate when no active delegation governs the same balance or scope, and they provide continuity when budget delegation ends.

## Layered delegation

### 1. Simple delegation

The citizen can delegate a broad budget allocation scope to a trusted eligible citizen or non-state organization.

Example:

```text
Delegate my civic allocation to Non-State Organization X.
```

This should be available as a quick action, but budget delegation should not become active until the citizen has a base allocation profile or fallback rule.

### 2. Area-based delegation

The citizen can delegate by domain.

Examples:

```text
Education → Education nonprofit A
Health → Foundation B
Fiscalization → Local watchdog group
Science → Research network profile
Local projects → Community organization
```

### 3. Action-based delegation

The citizen can delegate only certain actions.

Examples:

```text
Delegate project discovery, but not final funding.
Delegate fiscalization decisions.
Delegate complaint support.
Delegate profile configuration.
Delegate evaluation review.
Delegate protocol-change votes.
Delegate project comments or reviews.
```

### 4. Time-bounded delegation

Time-bounded delegation is useful but should not be required in the first version.

Example:

A citizen goes on vacation and delegates to a trusted family member for a temporary period, then later resumes direct control.

In the first version, this can be handled by ordinary delegation plus immediate revocation when the citizen wants to retake control.

In a more advanced version, the system may allow explicit time limits:

```text
Delegate for 3 months.
Delegate for 1 year.
Delegate until revoked.
```

### 5. Paid delegation markets

Paid delegation markets are not part of Core v0.

Delegates should not receive automatic commissions, fees, or percentages of delegated civic allocation merely because citizens delegate to them.

Participation-support projects may be funded separately, but they must be ordinary transparent projects with their own budget, evidence, fiscalization, and audit trail.

### 6. Custom delegation

Advanced users can create detailed delegation rules.

Custom delegation should be available in advanced versions or advanced settings, but not forced into the main interface.

## No temporary pause in the first version

A separate “pause delegation” state is unnecessary in the first version.

If a citizen wants to stop delegated authority, they can revoke immediately. If they later want to delegate again, they can create a new delegation request.

This keeps the delegation lifecycle simple:

```text
requested → accepted → active → revoked
requested → rejected
active → resigned
```

For budget delegation, revocation, rejection, expiration, or resignation resumes the citizen's previously selected base allocation profile or fallback rule.

## Delegated action scope

Delegation can apply beyond budget allocation. It may include voting, commenting, complaint support, fiscalization support, project evaluation, or protocol-change participation.

However, these capabilities should be configurable by layers rather than exposed all at once.

The basic interface should remain simple. Advanced controls can allow the citizen to decide which actions a delegate can perform on their behalf.

When a delegate acts inside an active delegated scope, the action represents the delegate and all delegators covered by that scope by default. The represented weight, scope, and any configured cap effect must be visible in the action record, delegated-action reports, concentration signals, and observability metrics.

Core v0 should not require per-delegator selection for ordinary in-scope actions.

## Concentration visibility

Delegation concentration is allowed by default when citizens choose it, but it must never be hidden.

At minimum, concentration visibility should include:

- active delegators;
- delegated allocation;
- scopes;
- territory;
- represented weight;
- trends;
- conflicts or related-party warnings;
- separate participation-support funding, if any;
- delegated-action reports;
- revocation and resignation signals;
- configured cap effects, if any.

The citizen-facing layer should show a short signal. Audit and administrative views can expose the full detail.

## Reporting and revocability

Delegated-action reports should be generated primarily from the audit trail. A delegate may add explanations, but reporting should not become a manual bureaucracy.

Reports should make revocation meaningful by showing what the delegate did, the represented weight used, and which base allocation profile or fallback rule would resume after revocation.

Revocation affects future authority only. Past delegated actions remain valid if the delegate had authority at the time.

## No subdelegation in the core design

Delegates should not be able to subdelegate by default.

Subdelegation adds complexity and may obscure who is actually exercising delegated authority.

If a citizen wants another actor to exercise authority, the citizen should delegate directly to that actor.

This keeps delegation transparent and understandable.

## Usability principle

The default interface should not expose every delegation option at once.

A citizen should first see simple options, with an advanced configuration path available for those who want more control.

## Requirements

Delegation should be:

- voluntary;
- revocable;
- transparent;
- auditable;
- visible in system-generated reports;
- accepted by the delegate before activation;
- scoped;
- non-compensated by default;
- traceable through represented weight;
- concentration-visible;
- role-specific when configured;
- action-specific when configured;
- compatible with profiles and default allocation rules;
- non-subdelegable by default;
- not pausable in the first version;
- not an identity transfer;
- not a money-ownership transfer;
- not an automatic allocation profile;
- not an AI actor;
- not an internal public-institution role;
- simple in the first version, with more detailed time-bound and custom controls left for later versions.

## Principle

> Delegation should be simple at the surface and accountable under the hood. Core v0 allows citizens to delegate scoped authority to eligible actors, but delegated authority must remain visible, accepted, revocable, non-subdelegable by default, non-compensated by default, reported from the audit trail, and backed by a base allocation rule for continuity.

## Remaining design questions

Participation and delegation hypothesis aligned with C007, C008, C011, C023, H033, H034, H038, and H043-H049. Extends H025, H034 and H041. Remaining design work belongs mostly to implementation detail and future extensions: delegate eligibility checks, organization verification, gray-zone public-institution boundary enforcement, allocation-profile governance, AI assistance boundaries, cap configuration, advanced scoped delegation, time-bound delegation, and paid delegation markets.
