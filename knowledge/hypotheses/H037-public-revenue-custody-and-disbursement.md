# H037 — Public Revenue Custody and Disbursement

## Hypothesis

In a distributed allocation system with mandatory taxation, a public revenue authority, treasury-like institution, or lawful custodian should collect, custody, account for, and disburse funds according to protocol-valid financial orders.

The custodian executes financial infrastructure. It does not decide civic value, select projects, approve milestones by discretion, fiscalize execution, or compete as an internal platform actor.

## Resolution alignment

This hypothesis is aligned with:

- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md`;
- `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md`;
- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`;
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md`.

H037 should be read as a Core v0 infrastructure boundary plus country implementation dependency. The abstract boundary is Core v0: custody and disbursement must be separated from civic decision-making. The specific legal custodian, treasury API, escrow structure, tax integration, and enforceability mechanics depend on the implementing country.

## Rationale

Citizens should not need to use ordinary payment platforms every time they support a project. Their assignable civic budget already comes from taxes or public revenue contributions.

The platform should therefore operate more like a public ledger of assignable tax balances than like a private payment app. The citizen's action is an allocation decision within a civic funding account, not a retail payment to an executor.

## Core distinction

The revenue authority should not decide which projects deserve funding.

Its role is administrative and fiduciary:

- collect taxes or public contributions;
- maintain assignable balances;
- report signed authorized allocation amounts where configured;
- record allocations;
- retain funds until conditions are met;
- execute protocol-valid financial orders;
- disburse funds by milestone when the protocol authorizes release;
- execute guarantees or retentions when required;
- maintain public accounting and traceability.

The platform, protocol rules, project lifecycle, fiscalization, evidence, complaints, and disbursement validation determine whether a financial order is valid. The custodian executes or reports closed technical/legal rejection causes.

Where H025 requires a citizen-level amount formula, the custodian, treasury, tax authority, social registry, ministry system, or other lawful provider may act as an `Allocation Amount Provider`. This role reports the authorized allocation amount, eligibility status, formula version, explanation code, and audit reference. It should not expose raw tax declarations, income files, vulnerability records, or other sensitive source datasets to the platform.

## Conceptual flow

```text
tax declaration / payment
→ public revenue authority / treasury custody
→ civic assignable balance
→ citizen allocation to projects
→ project reaches funding target
→ funds retained / escrowed
→ milestone evidence
→ fiscalization if required
→ system generates Financial Order
→ custodian executes payment, retention, return, reassignment, or recovery
```

## User experience

The citizen should not need to make separate payments for each project. Supporting a project is an allocation decision within their civic account.

Example:

```text
Pilot:
Sports budget in Macul

Citizen action:
The citizen funds a multi-court project from their assignable civic balance.

Financial effect:
The amount becomes committed and later retained for the project.

Disbursement:
The custodian pays the executor only after a valid Financial Order states that the milestone, evidence, fiscalization, and blocking-condition checks allow release.
```

## Separation of roles

The revenue authority is not the project selector, evaluator, fiscalizer, or political decision-maker. It is the custody and settlement layer of the system.

If the same public authority has a tutored-scope review role in a pilot, that role must be separated from its financial custody role. A tutored Governance Resolution may approve, reject, or request reformulation under C020/C007. The treasury or custodian then executes only the resulting valid financial order. It should not reuse custody power to make a second discretionary project decision.

## Closed rejection causes

The custodian may reject or suspend a financial order only for closed technical or legal causes such as:

- invalid signature;
- malformed order;
- duplicated order;
- insufficient real funds;
- invalid destination account;
- mismatch with ledger state;
- legal or judicial freeze;
- required anti-fraud or compliance block;
- technical execution failure.

It should not reject because:

```text
The custodian dislikes the project.
The custodian prefers another priority.
The custodian disagrees with the community's allocation choice.
The custodian wants to protect an incumbent public project from competition.
```

## Audit requirements

Each financial movement should record:

- Financial Order ID;
- project;
- amount;
- action: commit, retain, release, return, reassign, recover, execute guarantee, or close;
- rule applied;
- milestone, evidence, fiscalization, complaint, or closure reference where relevant;
- custodian execution status;
- rejection cause if any;
- timestamp;
- signature or authorization trace.

## Principle

> Public money remains public money until released under the project’s approved conditions. Citizens allocate direction; the revenue authority executes custody and disbursement.

> The protocol generates valid financial orders; the custodian executes them without becoming a civic decision-maker.

## Status

Core financing infrastructure hypothesis. Extends H025, H035, H036, C005, C006, and C007. Country-specific custody implementation remains jurisdiction-dependent.
