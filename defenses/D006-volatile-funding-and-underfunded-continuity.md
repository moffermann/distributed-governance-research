# D006 - Defense Against A006: Volatile Funding and Underfunded Continuity

## Attack reference

- Attack file: `attacks/A006-volatile-funding-and-underfunded-continuity.md`
- Attack title: `A006 - Volatile Funding and Underfunded Continuity`
- Roadmap source: Phase 3 priority objection, volatile funding.

## Attack summary

The attack argues that project funding may be too volatile for services requiring continuity, staffing, maintenance, beneficiary protection, or long-term commitments. In the Macul example, courts may be built but maintenance, bathrooms, lighting, safety, and public access operations may later fail because no stable maintenance funding closes.

## Objective evaluation

- Classification: founded for recurring and continuity-critical services.
- Why it is founded: monthly or project-based allocation can produce attention volatility, short-termism, and stranded services.
- Why it is not fatal to the architecture: the system already separates one-time funding, phased funding, retained funds, financial assurance, non-assignable reserves, disbursement controls, and the common pool. It can classify continuity risk without abandoning project accountability.
- Difference of judgment: medium. How much continuity is protected by non-assignable pools, reserve rules, or multi-period commitments is a country implementation and protocol design question.
- Editorial distortion risk: medium. The attack would distort the project if it concludes that all ongoing services must be centrally operated. The stronger distinction is one-time project, recurring project, continuity-critical service, and public guarantee layer.

## Response

The defense is that continuity risk should be explicit before funding, not discovered after beneficiaries are dependent.

The architecture works best for bounded projects, but it can support continuity services if the project declares minimum funding duration, service-interruption risk, wind-down rules, beneficiary protection, staffing assumptions, maintenance obligations, retained future-service funds, and applicable non-assignable reserve or guarantee support.

For Macul, construction funding and maintenance funding should not be hidden inside one vague promise. The project sheet should say whether maintenance is included, separately funded, recurring, assigned to an operator, protected by reserve, or outside the current project scope.

## Project-document basis

- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:11` defines disbursement as conditional release based on milestones, fulfillment evidence, fiscalization, and absence of blockers.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:13` states that phased project funds may be collected in advance but cannot be released until prerequisite phase deliverables are accepted.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:41` states that citizen funding does not immediately release money to the executor.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:59` through `docs/31_PROJECT_DISBURSEMENT_FLOW.md:79` define execution-ready checks and state that execution-ready does not mean automatic full release.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:412` allows partial release only with separable components, accepted evidence, explicit retention, and clear release conditions.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:416` through `docs/31_PROJECT_DISBURSEMENT_FLOW.md:427` define universal financial assurance beyond construction and prohibit self-selected lower assurance.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:447` identifies monthly release, retained future service funds, and guarantee materialization as continuity protections for care services.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:173` allows `FundingCommitment` to reserve funds for project, phase, control, complaint review, or mitigation.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:176` defines `FinancialAssuranceProfile` as applicable before affected funds release and beyond construction.

## Bibliographic basis

- Aaron Wildavsky, `The Politics of the Budgetary Process` (1964): stable commitments and incremental budgeting help institutions manage uncertainty.
- Richard Musgrave, `The Theory of Public Finance` (1959): stabilization and long-term obligations differ from discretionary allocation.
- Wallace Oates, `Fiscal Federalism` (1972): decentralization needs coordination where spillovers or redistribution exist.
- Mancur Olson, `The Logic of Collective Action` (1965): diffuse long-term goods may be underfunded.
- Brian Wampler, `Participatory Budgeting in Brazil` (2007): participatory funding needs institutional design to remain accountable and durable.

## Proposed improvements

Add continuity-risk fields:

- project type: one-time, phased, recurring, continuity-critical, emergency, or maintenance-dependent;
- minimum funded service period;
- beneficiary protection and wind-down rule;
- maintenance or staffing plan;
- future funding dependency warning;
- reserve, retention, guarantee, or non-assignable-pool reference where applicable;
- citizen-facing label: "funds only initial period" or "maintenance not funded" where true.

## Applies to

- funding commitments;
- budget lines;
- phase lanes;
- recurring service projects;
- care, health, education, maintenance, and emergency support;
- disbursement and retention rules;
- financial assurance.

## Defense strength and residual risk

Defense strength: moderate. The architecture can represent the problem, but Core v0 has not yet fully defined continuity-project governance.

Residual risk: implementers or proposers may frame continuity-dependent projects as one-time outputs to make them easier to fund. That should become a material information claim and possible responsibility event if misleading.

## Decision

The attack is founded. It does not defeat distributed allocation, but it requires a continuity-risk classification and funding-stability fields before the model is mature for recurring or care-sensitive services.
