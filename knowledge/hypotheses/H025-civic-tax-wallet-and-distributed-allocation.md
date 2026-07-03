# H025 — Civic Tax Wallet and Distributed Allocation

## Hypothesis

A distributed governance system may preserve mandatory taxation while distributing the allocation of a significant part of public resources through individual civic tax wallets.

## Rationale

The current state combines two functions:

1. collecting mandatory taxes;
2. centrally deciding how those resources are allocated.

These functions can be separated.

A person may still pay taxes as today, but a configured portion of public-purpose resources can become assignable by the person to eligible projects, control packages, complaint-review costs, fiscalization processes, mitigation efforts, planning initiatives, or other protocol-authorized public-value vehicles inside active scopes.

## Core model

```text
tax declaration / payment
→ non-assignable common pool
→ assignable civic wallet
→ distributed project allocation
→ project execution
→ evidence, fiscalization, reputation
```

## Non-assignable pool

Some functions may require common funding that is not individually assigned:

- defense;
- core security;
- justice guarantees;
- macro fiscal obligations;
- debt service;
- emergency reserves;
- minimal common infrastructure of the system.

## Assignable pool

A portion of public resources can be assigned by citizens through eligible project, control, complaint-review, mitigation, fiscalization, planning, or public-value vehicles for areas such as:

- education projects;
- health projects;
- social programs;
- cultural projects;
- fiscalization;
- mitigation;
- planning proposals;
- science;
- care services;
- regional or local goals.

## Important distinction

The assignable wallet is personal in the sense that it corresponds to the citizen's own civic allocation capacity. The citizen can decide where that assignable portion goes.

However, it is not private disposable income. The citizen cannot withdraw it, spend it on private consumption, transfer it freely, or convert it into cash.

It is better understood as a **personal, non-withdrawable public allocation right**.

## Why this matters

Calling it purely public money hides the citizen's sense of ownership and responsibility. Calling it purely private money is also wrong, because it is locked to public-value uses.

The correct framing is:

```text
personal allocation authority over non-withdrawable public-purpose funds
```

## Individual allocation amount

If a public authority, institutional administrator, or protocol assigns a percentage of a public budget to distributed allocation, the system must still define how much of that assignable pool corresponds to each eligible citizen.

Core v0 should not impose one universal formula. The formula should be configured by the competent authority, institutional administrator, protocol, or country implementation, and should be public, versioned, auditable, and explainable to citizens. ^rab1ecb9e

H025 is aligned with [[../../docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|A019]]: configuring this formula now presupposes a recorded Allocation Mandate on the active Planning Scope naming the mandate source and the legal instrument that authorized both the budget migration and the formula, distinct from the procedural Administrative Rule Change machinery. A contribution-weighted or otherwise non-equal variant is a higher-authorization decision that must name the authority that chose it, so it cannot be presented as neutral configuration; the platform records that external authorization but never creates it.

Recommended formula options:

```text
Equal for all eligible citizens
Proportional to declared taxes or validated contribution
Inversely proportional to declared taxes, vulnerability, or priority status
Hybrid formula
Externally calculated formula
```

### Equal for all eligible citizens

This is the simplest option. ^rcdc0167c

Each eligible citizen receives the same civic allocation amount for the relevant period, program, territory, or public function. ^r2e7340e8

Example:

```text
Sports Ministry distributed budget:
$1,200,000,000

Eligible citizens:
100,000

Formula:
Equal for all eligible citizens

Monthly allocation amount:
$1,000 per eligible citizen per month
```

This option is easy to explain, minimizes sensitive data needs, and works well for pilots where the institution wants a clear one-person-equal-allocation rule.

### Contribution-weighted formula

A formula may assign larger amounts to citizens who declared or paid more taxes, if the competent authority chooses that rule.

This can be defended as contribution-weighted allocation, but it increases the relative allocation power of higher-income citizens and should be visible as such. ^ra8ce5b11

### Redistributive or inverse formula

A formula may assign larger amounts to citizens with lower declared tax contribution, higher vulnerability, lower access, or higher territorial priority. ^rcf4f1501

This can be defended as a redistributive or priority-sensitive rule, but it must not require the platform to receive the citizen's full tax, income, or social file.

### Hybrid formula

A formula may combine a simple equal base with a weighted component.

Example:

```text
70% equal for all eligible citizens
30% weighted by territorial priority or social vulnerability
```

This preserves a simple universal base while allowing a competent public authority or protocol to express a legitimate policy priority.

## Allocation Amount Provider

When the allocation formula depends on sensitive external data, the platform should not calculate the amount from raw tax declarations, income records, vulnerability files, or other private datasets.

Instead, the administration interface should allow the institution to configure an `Allocation Amount Provider`.

The provider may be:

- treasury;
- tax authority;
- social registry;
- lawful custodian;
- ministry system;
- signed batch file emitted by the competent authority;
- another country-specific authorized service.

The platform may send only the minimum required query data, such as:

```text
citizen identifier, such as RUT where legally applicable
period
program or budget scope
formula version
```

The provider should return only the minimum operational result:

```text
citizen identifier
period
program or budget scope
authorized allocation amount
available balance where applicable
eligibility status
formula version
explanation code
issuer
signature or audit id
calculation timestamp
```

The platform should not receive the full tax declaration, income details, deductions, employer data, debt profile, family tax details, or the raw sensitive dataset used to calculate the amount.

## Administration configuration

For each distributed budget program, the institutional administration surface should expose:

```text
Distributed budget amount or percentage
Eligible population rule
Allocation formula
Allocation Amount Provider, if external calculation is used
Update cycle
Fallback rule if the provider is unavailable
Formula version
Citizen-facing explanation
Audit reference
```

The fallback should be explicit. For example, the institution may decide that provider failure leaves amounts pending, uses the last signed amount, or applies an equal-allocation fallback only if that fallback was publicly configured.

## Citizen-facing simplicity

The citizen should not need to understand tax formulas to use the system.

The ordinary interface should show:

```text
Available to allocate this month:
$8,400

Why:
Calculated by the Sports Ministry allocation rule.

Formula:
Equal base plus territorial priority adjustment.

Formula version:
2026-07-sports-v3
```

If the formula is equal for all eligible citizens, the explanation can be even simpler:

```text
Available to allocate this month:
$1,000

Why:
This program assigns the same amount to every eligible citizen.
```

## Voluntary alternative

A fully voluntary system is conceptually possible, but may reduce participation incentives and create free-rider problems at national scale. The civic tax wallet model is a bridge between the current tax system and distributed allocation.

## Sanctions

If a person abuses formal mechanisms, such as filing malicious complaints, the system may restrict that person's ability to activate certain processes, such as complaints or fiscalization requests. Basic participation should be restricted only with proportional safeguards.

## Status

Core financing hypothesis. Aligned with the v0 funding, custody, allocation-profile, and citizen-balance model. The assignable/non-assignable percentage, citizen eligibility, amount formula, and legal provider integration remain country implementation or institutional configuration decisions.
