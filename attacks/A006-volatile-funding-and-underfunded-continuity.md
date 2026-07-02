# A006 - Volatile Funding and Underfunded Continuity

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md`.

## Description

The architecture lets citizens, delegates, and allocation profiles fund projects. This attack asks whether funding becomes too volatile for services that require continuity, maintenance, staffing, or long-term commitments.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: volatile funding.
- `docs/21_CITIZEN_FUNDING_FLOW.md`.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md`.
- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`.
- `knowledge/hypotheses/H038-monthly-use-it-or-allocate-it-cycle.md`.
- `knowledge/functional-matrix-v0-addendum-missing-functions.md` sections on treasury, social security, and emergency management.

## Problem

Conditional project funding improves accountability, but volatile funding can interrupt services, strand partially funded work, encourage short-termism, or make actors overpromise to close budgets.

This is not unique to distributed funding. In current public systems, continuity projects often must request renewed financing near the end of a funded period, and that renewal can be reduced, delayed, or cancelled when political priorities change. The difference is often opacity: beneficiaries may not see the funding gap, the reasons for interruption, the results of the current period, or the mitigation plan before the service is affected.

Example:

```text
A community care project hires staff for older adults after one funding cycle.
The next cycle shifts attention to visible infrastructure, leaving care continuity unfunded.
The continuity need is not visible as an Idea, beneficiaries cannot easily support or evidence the need, and no competing follow-on provider can propose replacement before interruption.
```

## Recommended resolution path

- Distinguish one-time projects from continuity projects.
- Require continuity projects to declare minimum funding duration, exit rules, beneficiary protection, and service-interruption consequences.
- Preserve non-assignable or reserve pools for emergency and continuity obligations where needed.
- Show funding volatility risk before citizens fund.
- Add reformulation and wind-down rules for continuity projects that do not close future funding.
- Open a visible renewal window before a continuity period expires.
- Generate or update an Idea for the continuity need where follow-on financing may be required, so beneficiaries and citizens can support the need and attach contextual evidence.
- Allow the current executor and alternative eligible executors to propose follow-on continuity projects under the ordinary project rules, without automatic renewal or incumbent privilege.

## Theoretical base and citations

- Aaron Wildavsky, `The Politics of the Budgetary Process` (1964): stable commitments and incremental budgeting help institutions manage uncertainty.
- Richard Musgrave, `The Theory of Public Finance` (1959): stabilization and long-term obligations are distinct from discretionary allocation.
- Wallace Oates, `Fiscal Federalism` (1972): fiscal decentralization needs coordination where spillovers or redistribution exist.
- Mancur Olson, `The Logic of Collective Action` (1965): collective-action problems can underfund diffuse long-term goods.
- Brian Wampler, `Participatory Budgeting in Brazil` (2007): participatory funding can improve accountability but must be institutionally designed.

## Social reasons

Volatility hurts beneficiaries who rely on continuity: older adults, children, disabled people, patients, caregivers, and workers. A project system must not make public care behave like a trend cycle.

## Conflicts of interest

- Executors may hide continuity risk to secure initial funding.
- Delegates may move funds opportunistically across cycles.
- Authorities may underfund baseline obligations and rely on citizens to patch gaps.
- Providers may abandon difficult beneficiaries when funding becomes uncertain.

## Inconsistencies to test

- Funding is a commitment until closure, but future continuity funding may remain uncertain.
- Projectization works well for bounded outputs, but some public functions are ongoing services.
- Monthly allocation cycles create citizen control, but also attention volatility.

## Stress scenario

A Macul sports facility is built, but no stable maintenance project closes funding. Courts deteriorate, bathrooms close, and users blame the executor even though maintenance was not funded.

## Review checklist

- Is the project one-time, phased, recurring, or continuity-critical?
- Does the funding plan cover operation and maintenance when required?
- Are beneficiaries protected during wind-down?
- Are citizens warned when funding only covers a partial service period?
- Are non-assignable reserves available for protected continuity functions?
- Does an expiring continuity project open a public renewal window before service interruption?
- Can beneficiaries, affected parties, fiscalizers, and citizens support or evidence the continuity need through an Idea?
- Can the current executor and alternative eligible executors propose a follow-on project without automatic renewal?

## Expected resolution output

A Phase 3 resolution should define a continuity-risk classification, funding-stability fields, and a visible continuity renewal path for projects with ongoing obligations.
