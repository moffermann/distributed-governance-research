# Continuity Risk Classification and A006 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A006-volatile-funding-and-underfunded-continuity.md`
- Defense: `defenses/D006-volatile-funding-and-underfunded-continuity.md`

## Resolution decision

A006 is founded and does not distort the project. The project rejects the distorted conclusion that all ongoing services must be centrally operated. The accepted resolution is to classify continuity risk before funding and require funding-stability fields where relevant.

## Rule added to Core v0

Projects should declare whether they are one-time, phased, recurring, continuity-critical, emergency, or maintenance-dependent. Continuity-critical projects require explicit funding-stability and beneficiary-protection fields.

Minimum fields:

- minimum funded service period;
- maintenance or staffing obligation;
- future funding dependency warning;
- beneficiary protection and wind-down rule;
- reserve, retention, guarantee, or non-assignable-pool reference where applicable;
- citizen-facing label when funding covers only an initial period.

## Macul example

Building courts is not the same as maintaining courts. A Macul sports project should state whether bathrooms, lighting, cleaning, safety, scheduling, repairs, and access management are funded, recurring, assigned to an operator, or outside the current project.

## Citizen simplicity

Citizens should see plain labels such as `one-time project`, `maintenance not funded`, `funds first six months`, `continuity protected`, or `wind-down rule declared`.

## Transparency and accountability effect

This stops projectization from hiding ongoing obligations and prevents continuity-dependent services from behaving like short-term trend cycles.

## Residual risks

- Future funding may still fail after the declared period.
- Authorities may use civic allocation to patch baseline service gaps.
- Continuity classifications require objective thresholds in later implementation.

## Integration target

This resolution should inform Project, ProjectPhase, BudgetLine, FundingCommitment, Disbursement, FinancialAssuranceProfile, maintenance projects, care projects, and continuity-sensitive service delivery.
