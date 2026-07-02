# Treasury, Citizen Balance, and C006 Resolution v0

## Purpose

This document resolves contradiction C006 from the v0 contradiction checklist.

C006 was originally framed as the problem of treating Treasury or the tax authority as infrastructure rather than as an internal civic actor. The discussion clarified that there are two separate financial problems:

1. how the system knows how much each citizen can finance;
2. how funds are retained, paid, returned, or recovered for projects.

The final resolution separates `Citizen Funding Account` from `Financial Execution`.

## Status

Accepted as the v0 resolution for C006.

## Core principle

> Treasury informs authorized funding capacity and executes valid financial movements, but it does not decide projects, priorities, fiscalizers, evidence, complaints, or disbursements by discretionary judgment.

## Key separation

C006 is resolved by separating two modules:

```text
1. Citizen Funding Account
2. Financial Execution / Custody
```

These two modules interact, but they do different jobs.

## Module A: Citizen Funding Account

The `Citizen Funding Account` records how much a citizen is allowed to allocate to projects during a defined period.

It is not necessarily a bank account.

It is a ledger of authorized civic funding capacity.

## What Treasury reports

Treasury or the relevant country financial authority should not expose the citizen's full tax data to the platform.

It should provide only the minimum information needed to operate the funding right.

Recommended fields:

- citizen identifier;
- period;
- program or budget scope;
- authorized funding amount;
- amount already committed;
- available balance;
- returned or recovered balance, if applicable;
- eligibility status;
- allocation formula version;
- explanation code where applicable;
- date of calculation;
- source of validation;
- issuer or provider identifier;
- digital signature or verifiable authorization.

Example:

```text
Citizen: C-001
Period: 2026
Program: Sports distributed allocation
Authorized funding amount: 350000
Already committed: 120000
Available balance: 230000
Eligibility status: eligible
Formula version: sports-2026-equal-v1
Date of calculation: 2026-04-01
Source: Treasury signed balance file/API
```

## Allocation formula and amount provider

The amount assigned to each citizen may be calculated by a configurable institutional formula.

Core v0 should allow at least these formula types:

```text
Equal for all eligible citizens
Proportional to declared taxes or validated contribution
Inversely proportional to declared taxes, vulnerability, or priority status
Hybrid formula
Externally calculated formula
```

`Equal for all eligible citizens` is the simplest option and should be available as an explicit first-class configuration. It is especially useful for pilots because it requires little sensitive data and is easy to explain.

If the formula depends on tax declarations, vulnerability records, territorial priority, or another external dataset, the platform should not calculate the amount from raw sensitive data. The competent authority should configure an `Allocation Amount Provider` from the administration interface.

The provider may expose an API or signed batch file. The platform may query it with only the minimum required data, such as citizen identifier, period, program scope, and formula version. The provider returns the authorized allocation amount, eligibility status, formula version, explanation code, issuer, timestamp, and signature or audit id.

Example:

```text
Provider:
Treasury allocation service

Query:
citizen_id = C-001
period = 2026-04
program = sports-distributed-budget
formula_version = sports-2026-equal-v1

Response:
authorized_allocation_amount = 42000
available_balance = 42000
eligibility_status = eligible
explanation_code = equal_for_all_eligible_citizens
signature = treasury-signature-001
```

## What Treasury should not report

The system does not need:

- salary;
- employer;
- full tax declaration;
- personal deductions;
- debts;
- detailed income history;
- family tax details;
- full fiscal profile;
- reasons behind the calculated amount unless legally required.

Rule:

> The platform needs the citizen's available funding capacity, not the citizen's private tax file.

## Citizen funding flow

Recommended v0 flow:

```text
Institution configures distributed budget, eligibility, formula, and provider
↓
Treasury calculates or validates authorized funding capacity
↓
Treasury sends signed balance to the system
↓
Citizen sees available balance
↓
Citizen finances projects
↓
System marks amount as committed
↓
When project conditions are met, system generates financial order
↓
Custodian/Treasury executes payment
```

If a funding attempt expires unfunded, the system may generate return, reassignment, or balance-adjustment records under the active rule. The citizen did not freely withdraw; the project or lane reached a protocol-defined outcome.

## Budget liquidity smoothing boundary

Some implementations may want to manage cyclical allocation capacity against an annual or period budget. This should be framed as `Budget Liquidity Smoothing`, not as uncontrolled leverage or hidden virtual citizen money.

Budget Liquidity Smoothing may become a country implementation or Extension v1+ capability where lawful public finance rules allow it.

It may use information such as:

- authorized annual or period budget;
- monthly or cycle allocation base;
- actual executed payments;
- open commitment ratio;
- near-funded eligible project amount;
- expired or returned commitments;
- stress test assuming many projects close financing at once.

It must require:

- explicit legal, protocol, or administrative authority;
- public formula;
- annual or period budget cap;
- maximum open commitment ratio;
- conservative reserve or coverage rule;
- adjustment rule for later cycles;
- full audit trail;
- no discretionary project selection by Treasury.

The smoothing policy may accelerate limited allocation capacity or completion-buffer capacity, but it must not hide fiscal risk, exceed authorized budget, or let Treasury choose civic priorities.

Rule:

> Budget Liquidity Smoothing is optional future fiscal infrastructure. Treasury or custody may report and execute a valid smoothing rule, but it must not decide project value, project priority, evidence, fiscalization, complaint outcome, or discretionary disbursement.

## Module B: Financial Execution / Custody

The financial execution module handles the movement and state of money after the citizen commits funds to projects.

This includes:

- custody;
- commitment;
- retention;
- disbursement;
- return of unused funds;
- recovery;
- guarantee materialization confirmation where the custodian or guarantor role applies;
- guarantee execution;
- financial audit trail.

## Financial Order entity

The system should generate a `Financial Order` whenever a financial movement is required.

A financial order may instruct:

- commit funds;
- reserve funds;
- retain funds;
- release payment;
- return unused funds;
- reassign funds;
- execute guarantee;
- record recovery;
- close balance.

## Financial Order contents

A financial order should include:

- order ID;
- project ID;
- citizen funding account or funding source;
- amount;
- destination;
- financial action;
- cause;
- rule applied;
- Financial Assurance Profile or Guarantee Materialization Record reference where relevant;
- evidence or milestone reference;
- fiscalizer or protocol condition, where applicable;
- complaint/blocking status;
- timestamp;
- signature or protocol authorization;
- execution status.

Example:

```text
Financial Order: OF-001
Project: P-100
Milestone: M-2
Action: release payment
Amount: 3000000
Destination: Executor account
Cause: milestone approved + evidence sufficient + no admitted blocking complaint or scoped systemic pause
Rule: disbursement schedule v0
Status: ready for execution
```

## Custodian role

The custodian may be Treasury, a fiduciary account, an escrow service, a bank, a payment infrastructure, or another country-specific mechanism.

The custodian is not an internal civic actor.

It cannot:

- propose projects;
- execute projects;
- fiscalize projects;
- choose fiscalizers;
- resolve complaints;
- prioritize values;
- approve projects by preference;
- reject projects by political or policy judgment;
- modify citizen choices;
- decide which projects should live or die.

## What the custodian can do

The custodian can:

- receive valid financial orders;
- execute payments;
- retain funds;
- confirm guarantee materialization where it holds, validates, or reports the applicable instrument;
- return funds;
- record balances;
- reject an order only for closed technical or legal causes;
- report execution status;
- provide financial audit trail.

## Closed rejection causes

A custodian may reject or suspend a financial order only for closed causes such as:

- invalid account;
- insufficient real funds;
- duplicated order;
- invalid signature;
- malformed order;
- legal/judicial freeze;
- anti-fraud or compliance block required by law;
- technical failure;
- mismatch between order and ledger.

The custodian should not reject for subjective reasons such as:

```text
I do not like this project.
I disagree with this priority.
I prefer another executor.
This value is not politically convenient.
```

## Ledger model

The system may maintain logical balances without needing a separate bank account for every project.

Example ledger by project:

```text
Project A:
Committed: 20000000
Retained: 8000000
Released: 12000000
Returned: 0
Recovered: 0

Project B:
Committed: 5000000
Retained: 5000000
Released: 0
Returned: 0
Recovered: 0
```

## Financial states

Recommended financial states:

```text
Authorized
Available
Committed
Reserved
Retained
Pending review
Approved for release
Released partially
Released totally
Paused
Blocked
Returned
Reassigned
In recovery
Recovered
Closed
```

## Relation to funding commitment

This resolution is consistent with C005.

Once a citizen funds a project, the amount is committed until project closure. The citizen does not freely withdraw the amount.

If the project fails or closes with unused/recovered funds, the system may return or reassign available balances according to protocol and citizen configuration.

## Relation to public authority boundary

This resolution is consistent with C007.

Treasury, revenue authorities, custodians, and equivalent public financial bodies act as external infrastructure or country implementation mechanisms. They do not become internal civic actors merely because they move money, report allocation amounts, or execute valid financial orders.

It is not a project actor, fiscalizer, proposer, executor, or moderator.

## C006 final resolution

C006 is resolved as follows:

```text
Separate citizen funding capacity from project payment execution.
Treasury may report signed citizen funding balances and execute valid financial orders, but it does not govern projects.
```

Final rule:

> Treasury informs how much each citizen may finance and executes protocol-valid financial orders. The system records citizen balances, commitments, project ledgers, disbursements, returns, and recoveries. Treasury or any custodian moves money and validates technical/legal execution, but does not decide civic value, project priority, fiscalization, evidence, complaints, or discretionary disbursement.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen funding flow;
- project disbursement flow;
- project lifecycle after publication;
- consolidated entity/object/state map;
- funding commitment model;
- public authority / state-owned operator boundary;
- future implementable schema.

## Remaining risks

- Treasury or custodian may demand more data than needed.
- Financial infrastructure may become a political control point.
- Citizen balance calculation may be opaque.
- Allocation formulas may hide political choices if not published.
- External amount providers may be unavailable or delayed.
- Balance update delays may cause stale funding capacity.
- Custodian legal blocks may interrupt project execution.

## Mitigations

- minimize data shared with platform;
- require signed balance messages;
- publish the active allocation formula and version;
- keep equal-for-all allocation available as a simple explicit option;
- use external amount providers only for the final authorized amount, not raw tax or social data;
- expose balance calculation period and update date;
- separate financial execution from civic decision-making;
- use closed rejection causes;
- audit every financial order;
- show citizen available/committed/returned balances clearly.

## Design rule

> Treasury reports balances and moves money; citizens choose projects; the protocol generates orders; fiscalizers verify milestones; the custodian executes without governing.
