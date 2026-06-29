# H056 — Existing Institution as Equal Actor

## Status

Superseded for Core v0 by [[../../docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]] and clarified by [[../../docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|C020]].

This hypothesis is retained as historical reasoning and as a possible country-specific departure from the Core v0 baseline. It should not guide Core v0 unless the user explicitly reopens C007.

## Superseding rule

Core v0 excludes public institutions from internal project participation.

Public institutions cannot propose, execute, fiscalize, act as ordinary internal platform moderators, or compete for distributed project financing inside the system v0.

They may define the legal framework, allocate or remove budget, audit externally, enforce general law, provide country-specific infrastructure such as custody or treasury integration where required, and perform institutional tutored moderation where a configured operating mode grants that authority.

## Institutional tutored moderation

Under tutored mode, the public authority does moderate projects in practical terms.

The distinction is not whether the authority moderates. The distinction is how and from which position it moderates.

Not allowed:

```text
The ministry enters the platform as an ordinary internal moderator,
silently approves or rejects projects, competes for the same funds,
or uses moderation while also acting as proposer, executor, or fiscalizer.
```

Allowed under a configured tutored operating mode:

```text
The ministry reviews eligibility, scope, duplication, or compatibility
with the public function budget opened to the platform.

If it rejects, requests reformulation, or declares a project outside scope,
the decision creates a public Governance Resolution.

If it does not decide within the configured review window,
the system creates a public Review Timeout Resolution under C020.
```

Example:

```text
The Ministry of Sports opens 5% of its budget under tutored mode.
A civic organization proposes a multi-court complex in Macul.
The ministry already has an approved traditional project
for the same facility in the same location.

The ministry may reject the platform project for duplication,
but the rejection must be a public Governance Resolution
with responsible authority, reason, applied scope rule,
review date, affected project, and suggested next path.
```

This is moderation, but it is institutional tutored moderation. It does not make the ministry an internal project actor, ordinary moderator, executor, fiscalizer, or competitor.

## Historical rejected hypothesis

Earlier version allowed the incumbent public institution to participate internally under equal rules.

This is no longer the Core v0 position.

## Historical rationale

The earlier version tried to solve institutional privilege by equal treatment: if an incumbent institution entered the system, it would have to follow the same transparency, funding, evidence, fiscalization, reputation, conflict-disclosure, complaint, and revocation rules as everyone else.

C007 rejects that approach for Core v0 because equal formal rules do not remove the deeper conflict: a public institution may still hold external authority, legal mandate, budgetary power, administrative influence, or tutored-mode control while competing inside the same platform.

The current Core v0 solution is exclusion from internal project participation, not equalized internal participation. Tutored moderation is treated separately as an institutional authority function that must be public, time-bounded, reasoned, and auditable.

## Measurement caveat retained for country departures

If a country deliberately departs from Core v0 and allows institutional internal participation, that participation should be highly visible in observability metrics so evaluators can distinguish public-institution execution from non-institutional execution.

Such a departure should also preserve independent fiscalization and should not allow the institution to fiscalize itself.

Any country-specific departure that allows internal public-institution participation should be explicit, justified, and distinguishable from Core v0. It should not be confused with allowed institutional tutored moderation.

## Personnel transition is out of core scope

What happens to existing public employees during a transition is implementation-dependent and should not be defined by the core architecture.

The implementing state decides, according to its laws, labor rules, public administration structure, and political choices, whether officials:

- remain in their current roles;
- move into support, training, or assistance functions;
- move into country-defined institutional roles outside the Core v0 internal actor baseline;
- move into oversight roles where appropriate;
- transition to other functions;
- remain outside the pilot.

The model can provide transparency and metrics, but it should not prescribe personnel policy.

## Current principle

> Core v0 keeps public institutions outside internal project participation. In tutored mode, a public authority may moderate eligibility, scope, duplication, or compatibility as an institutional tutored authority, but every material decision or timeout must be public, traceable, and auditable. Personnel transition belongs to the implementing state, not the core architecture.

## Historical status

Transition-design hypothesis. Superseded as a Core v0 rule by C007.
