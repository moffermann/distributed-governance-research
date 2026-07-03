# Continuity Risk Classification and A006 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A006-volatile-funding-and-underfunded-continuity|attacks/A006-volatile-funding-and-underfunded-continuity.md]]
- Defense: [[D006-volatile-funding-and-underfunded-continuity|defenses/D006-volatile-funding-and-underfunded-continuity.md]]

## Resolution decision

A006 is founded and does not distort the project. The project rejects the distorted conclusion that all ongoing services must be centrally operated. The accepted resolution is to classify continuity risk before funding, require funding-stability fields where relevant, and create a visible renewal path before continuity funding expires.

The comparison baseline is not an ideal stable state budget. In current public systems, continuity projects often must request new funding near the end of a financed period. That funding can be reduced, delayed, or cancelled even under the same government when priorities change. This creates discretion without visibility, traceability, mitigation, result evaluation, or beneficiary-centered continuity planning. ^r22e546c9

## Rule added to Core v0

Projects should declare whether they are one-time, phased, recurring, continuity-critical, emergency, or maintenance-dependent. Continuity-critical, recurring, or maintenance-dependent projects require explicit funding-stability, beneficiary-protection, and renewal-visibility fields. ^r2eba1d3e

Minimum fields:

- minimum funded service period;
- maintenance or staffing obligation;
- future funding dependency warning;
- beneficiary protection and wind-down rule;
- reserve, retention, guarantee, or non-assignable-pool reference where applicable;
- renewal alert date or trigger;
- continuity need Idea generation rule where the service may need follow-on financing;
- continuity evidence inputs, including beneficiary support, beneficiary observations, current-period fulfillment/control evidence, fiscalizer observations, and outcome summaries where relevant;
- eligibility rule for the current executor and alternative executors to propose a continuity project;
- citizen-facing label when funding covers only an initial period.

## Continuity renewal window

When a recurring, continuity-critical, or maintenance-dependent project approaches the end of its funded period, the system should open a visible `Continuity Renewal Window`. ^r275c757d

The window does not renew the project automatically and does not give the current executor a privileged right to continue. It exposes:

- when the current financed period ends;
- which service, maintenance obligation, or beneficiary support would be interrupted;
- which beneficiaries or affected parties may be harmed by discontinuity, subject to privacy rules;
- what evidence exists about the current period's results, limitations, complaints, fiscalization, and value fulfillment;
- what funding is needed to continue, replace, wind down, or mitigate the service;
- whether the continuity need belongs to a protected A005 floor, an assignable distributed service lane, or another funding lane;
- whether the current executor, replacement executors, or multiple eligible providers may present continuity proposals.

The default public vehicle for this renewal signal is an `Idea`, not an automatic project extension: ^r4346cafb

```text
Idea:
Continuity need for older-adult home care in Macul 2027

Source:
Expiring continuity-critical project

Inputs:
beneficiary support, beneficiary observations, current-period fulfillment/control evidence,
fiscalizer observations, funding gap, and wind-down risk.
```

That Idea may collect support, comments, justified objections, contextual evidence, and associated project proposals. It may then become one or more financeable continuity projects through the ordinary project creation, threshold, evidence, funding, fiscalization, and execution-ready rules.

## Macul example

Building courts is not the same as maintaining courts. A Macul sports project should state whether bathrooms, lighting, cleaning, safety, scheduling, repairs, and access management are funded, recurring, assigned to an operator, or outside the current project.

If the construction project funds only initial infrastructure and not maintenance, the citizen surface should say `maintenance not funded`. If a maintenance contract expires after twelve months, the system should expose a renewal window and may create an Idea such as `Continue maintenance and access management for Macul multi-courts 2027`, connected to current maintenance evidence, user observations, repair history, complaints, and funding gap.

For older-adult home care, a project may fund six months of visits. Before month six, the system should expose the service-ending risk, generate or update a continuity-need Idea where applicable, let beneficiaries or representatives support continuity and contribute contextual evidence, and allow the current provider or alternative eligible providers to propose a follow-on project. If no follow-on project closes funding, the declared wind-down and beneficiary-protection rule applies.

## Citizen simplicity

Citizens should see plain labels such as `one-time project`, `maintenance not funded`, `funds first six months`, `continuity protected`, `renewal window open`, `continuity idea open`, or `wind-down rule declared`.

## Transparency and accountability effect

This stops projectization from hiding ongoing obligations and prevents continuity-dependent services from behaving like short-term trend cycles. It also makes continuity needs visible before interruption, allowing beneficiaries, citizens, fiscalizers, and eligible executors to support, evidence, finance, replace, or wind down the service through traceable objects rather than opaque political discretion.

## Residual risks

- Future funding may still fail after the declared period.
- Authorities may use civic allocation to patch baseline service gaps.
- Continuity classifications require objective thresholds in later implementation.
- Current executors may try to use renewal visibility as incumbent protection.
- Beneficiary support may be hard to collect where beneficiaries are vulnerable, private, digitally excluded, or represented by guardians.
- Continuity Ideas may be overproduced if renewal windows are not filtered by materiality and proportionality.

## Integration target

This resolution should inform Idea, Project, ProjectPhase, BudgetLine, FundingCommitment, Disbursement, FinancialAssuranceProfile, RequiredEvidencePackage, ProjectClosureAccountabilityRecord, maintenance projects, care projects, and continuity-sensitive service delivery.
