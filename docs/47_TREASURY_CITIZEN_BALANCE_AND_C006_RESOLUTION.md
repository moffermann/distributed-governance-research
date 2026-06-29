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
- authorized funding amount;
- amount already committed;
- available balance;
- returned or recovered balance, if applicable;
- date of calculation;
- source of validation;
- digital signature or verifiable authorization.

Example:

```text
Citizen: C-001
Period: 2026
Authorized funding amount: 350000
Already committed: 120000
Available balance: 230000
Date of calculation: 2026-04-01
Source: Treasury signed balance file/API
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

## Module B: Financial Execution / Custody

The financial execution module handles the movement and state of money after the citizen commits funds to projects.

This includes:

- custody;
- commitment;
- retention;
- disbursement;
- return of unused funds;
- recovery;
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
Cause: milestone approved + evidence sufficient + no blocking complaint
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

## Relation to public institution exclusion

This resolution is consistent with C007.

Public institutions do not participate as internal actors. Treasury may appear only as external infrastructure or country implementation mechanism.

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
- public institution exclusion model;
- future implementable schema.

## Remaining risks

- Treasury or custodian may demand more data than needed.
- Financial infrastructure may become a political control point.
- Citizen balance calculation may be opaque.
- Balance update delays may cause stale funding capacity.
- Custodian legal blocks may interrupt project execution.

## Mitigations

- minimize data shared with platform;
- require signed balance messages;
- expose balance calculation period and update date;
- separate financial execution from civic decision-making;
- use closed rejection causes;
- audit every financial order;
- show citizen available/committed/returned balances clearly.

## Design rule

> Treasury reports balances and moves money; citizens choose projects; the protocol generates orders; fiscalizers verify milestones; the custodian executes without governing.
