# Financial Assurance Profile v0

## Purpose

The Financial Assurance Profile records how a project is financially protected when execution fails, value floors are not reached, antivalue ceilings are exceeded, funds are misused, or the project must be corrected, mitigated, revoked, closed, returned, reassigned, or recovered.

It is not a construction-only concept. It applies to every execution-financeable project: care services, school-supply purchases, workshops, food delivery, health support, culture, sports, infrastructure, environmental work, and other social projects.

## Core v0 rule

Core v0 uses a simple global guarantee rule:

```text
required_guarantee_amount =
eligible_execution_budget_or_phase_budget * global_guarantee_percentage
```

The global percentage is defined by the administrator, active protocol, operating mode, or lawful country implementation rule.

The proposer, designer, or executor does not choose the guarantee percentage, risk class, procedural burden profile, or assurance requirement that applies to its own project.

## Minimum contents

A Financial Assurance Profile should record:

- project and phase reference where applicable;
- policy and protocol-version reference;
- eligible budget basis;
- global guarantee percentage applied;
- required guarantee amount;
- retention rule;
- protected advance-payment rule where applicable;
- financial instrument type;
- responsible actor;
- custodian or guarantor;
- materialization status;
- execution conditions;
- release conditions;
- failure treatment;
- citizen-facing summary;
- audit trail.

## Guarantee Materialization Record

A guarantee is materialized only after confirmation by a lawful custodian, guarantor, insurer, treasury, escrow provider, bank, or equivalent country-specific mechanism.

The system should not treat an executor-uploaded document as sufficient by itself.

Minimum statuses:

```text
Pending
Materialized
Insufficient
Expired
Executed
Released
```

## Lifecycle position

The Financial Assurance Profile should be defined or referenced before financeable publication.

Required guarantees or equivalent instruments must be materialized before the affected project or phase becomes execution-ready and before the corresponding funds are released. ^r64c5aef5

For phased projects, an execution phase may receive reserved funding while a prior design or preparation phase is pending, but release remains blocked until phase-gate, control-package, and guarantee-materialization conditions are satisfied.

## Examples

Elderly care:

```text
Guarantee may protect continuity replacement, compensation, or recovery if the executor abandons care visits.
```

School supplies:

```text
Guarantee, retention, direct supplier payment, invoice path, or later receipt verification may protect against incomplete delivery.
```

Workshops:

```text
Service-period release and retention may protect against inflated attendance or missing sessions.
```

Infrastructure:

```text
Construction funds remain reserved until design gate, control package, guarantee materialization, and milestone rules are satisfied.
```

## Boundary

Financial assurance reduces loss and preserves leverage. It does not promise zero risk, full recovery of spent funds, or replacement of courts, regulators, lawful custodians, insurers, or competent authorities. ^r94bd9c38

Under [[../../docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|A033]], the Financial Assurance Profile extends beyond delivery-failure protection to third-party liability coverage proportionate to physical risk where Threshold Policy requires it, so a project that names a Duty-of-Care Anchor also provisions materialized coverage sized against physical and safety harm to third parties. The profile records and provisions this coverage; it does not adjudicate who is liable or in what proportion, which remains external law.

## Status

Core v0 concept aligned with H011.
