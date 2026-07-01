# H056 — Existing Institution as Equal Actor

## Status

Refined for Core v0 by [[../../docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|C007]], [[../concepts/public-authority-operator-boundary-v0|Public Authority / State-Owned Operator Boundary v0]], and [[../../docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|C020]].

The original version is superseded as stated. It treated existing public institutions as possible equal internal actors. The refined Core v0 position separates public authorities from state-owned operators.

## Refined rule

Core v0 does not allow a public authority to compete internally in a scope where it exercises authority.

Public authorities cannot use legal, budgetary, regulatory, eligibility, admissibility, tutored, fiscal, adjudicative, coercive, or oversight power while also acting as internal project proposer, executor, fiscalizer, ordinary moderator, delegate, or beneficiary of distributed project financing in the same scope.

State-owned or publicly owned operators are different. They may participate as ordinary eligible organizations only where the active C007 boundary is satisfied.

## Public authority exclusion

Not allowed:

```text
The ministry enters the platform as an ordinary internal actor,
silently approves or rejects projects,
competes for the same funds,
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

This is moderation in practical terms, but it is external tutored-scope authority. It does not make the ministry an internal project actor, ordinary moderator, executor, fiscalizer, delegate, or competitor.

## State-owned operator eligibility

Earlier Core v0 language excluded state-owned entities by default. That was too broad.

A state-owned company, public enterprise, municipally owned company, public utility, or publicly controlled service company may be eligible as an ordinary operator when:

- it is not exercising public authority in the same scope;
- it is not controlled by the authority that decides admissibility or Planning Scope in a tutored mode;
- ownership, control, subsidy, guarantee, concession, and regulatory relationships are declared;
- it receives no privileged approval, fiscalization, disbursement, or review path;
- it accepts the same value floors, antivalue ceilings, guarantees, fulfillment/control evidence, fiscalization, complaint, revocation, and role-specific reputation rules as private or civic operators.

Example:

```text
A state-owned sanitary company competes in an open mode against private
concessionaires to operate a service project.
```

This may be allowed if the operator has no privileged authority path and the project is evaluated under the same accountability architecture.

Counterexample:

```text
A ministry controls a tutored sports pilot and its controlled public
sports corporation competes as executor inside that same pilot.
```

This is excluded by default because the authority family is judge and party.

## Historical rejected hypothesis

Earlier H056 allowed incumbent public institutions to participate internally under equal rules.

That broad claim remains rejected.

Equal formal rules do not remove the deeper conflict when the same authority family controls legal mandate, budget, Planning Scope, admissibility, review timing, regulatory pressure, or tutored-mode decisions.

The refined solution is not blanket public/private exclusion. It is functional separation:

```text
Public authority -> external authority role.
State-owned operator -> possible internal organization only if conflict checks pass.
```

## Measurement caveat retained for country departures

If a country deliberately departs from Core v0 and allows a public authority to participate internally in a scope it controls, that participation should be highly visible in observability metrics so evaluators can distinguish authority-linked execution from ordinary operator execution.

Such a departure should preserve independent fiscalization and should not allow the authority or its controlled operator to fiscalize itself.

Any country-specific departure should be explicit, justified, independently reviewed where possible, and distinguishable from Core v0. It should not be confused with allowed institutional tutored moderation or with eligible state-owned operator participation in non-conflicted scopes.

## Personnel transition is out of core scope

What happens to existing public employees during a transition is implementation-dependent and should not be defined by the core architecture.

The implementing state decides, according to its laws, labor rules, public administration structure, and political choices, whether officials:

- remain in their current roles;
- move into support, training, or assistance functions;
- move into country-defined institutional roles outside the Core v0 internal actor baseline;
- move into oversight roles where appropriate;
- transition to public enterprises or operators;
- transition to other functions;
- remain outside the pilot.

The model can provide transparency and metrics, but it should not prescribe personnel policy.

## Current principle

> Core v0 excludes public authorities from internal participation in scopes they control. It may allow state-owned operators as ordinary eligible organizations where ownership/control relationships are declared, no authority privilege exists, and the same accountability rules apply.

## Historical status

Transition-design hypothesis. Broad equal internal participation by public authorities remains superseded by C007. State-owned operator eligibility is now handled by the public-authority/operator boundary.
