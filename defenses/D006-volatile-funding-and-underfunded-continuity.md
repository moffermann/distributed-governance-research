# D006 - Defense Against A006: Volatile Funding and Underfunded Continuity

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A006-volatile-funding-and-underfunded-continuity.md`
- Attack title: `A006 - Volatile Funding and Underfunded Continuity`
- Roadmap source: Phase 3 priority objection, volatile funding.

## Attack summary

The attack argues that project funding may be too volatile for services requiring continuity, staffing, maintenance, beneficiary protection, or long-term commitments. In the Macul example, courts may be built but maintenance, bathrooms, lighting, safety, and public access operations may later fail because no stable maintenance funding closes.

The stronger version also compares the model against current public budgeting. Today, continuity projects often request renewed financing near the end of a period and may be reduced, delayed, or cancelled by political priority changes without public visibility, result-based continuity evidence, mitigation planning, or beneficiary-centered warning.

## Objective evaluation

- Classification: founded for recurring and continuity-critical services.
- Why it is founded: monthly or project-based allocation can produce attention volatility, short-termism, and stranded services.
- Why it is not fatal to the architecture: the system already separates one-time funding, phased funding, retained funds, financial assurance, non-assignable reserves, disbursement controls, and the common pool. It can classify continuity risk without abandoning project accountability.
- Difference of judgment: medium. How much continuity is protected by non-assignable pools, reserve rules, or multi-period commitments is a country implementation and protocol design question.
- Editorial distortion risk: medium. The attack would distort the project if it concludes that all ongoing services must be centrally operated. The stronger distinction is one-time project, recurring project, continuity-critical service, and public guarantee layer.

## Response

The defense is that continuity risk should be explicit before funding and visible again before expiration, not discovered after beneficiaries are dependent.

The architecture works best for bounded projects, but it can support continuity services if the project declares minimum funding duration, service-interruption risk, wind-down rules, beneficiary protection, staffing assumptions, maintenance obligations, retained future-service funds, and applicable non-assignable reserve or guarantee support.

For recurring, continuity-critical, or maintenance-dependent projects, the system should also open a visible continuity renewal window before the financed period ends. The renewal signal should normally become or update an Idea, so beneficiaries, citizens, affected parties, fiscalizers, and evidence producers can support the continuity need, attach contextual evidence, and inspect current-period results. The current executor may propose a follow-on project, but so may alternative eligible executors; there is no automatic renewal or incumbent privilege.

For Macul, construction funding and maintenance funding should not be hidden inside one vague promise. The project sheet should say whether maintenance is included, separately funded, recurring, assigned to an operator, protected by reserve, or outside the current project scope.

For older-adult care, a six-month care project should expose before expiration whether continuity funding is missing, what fulfillment/control evidence supports continuation, what beneficiaries or representatives report, what fiscalizers observed, and what wind-down rule applies if no follow-on project closes financing.

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
- renewal alert date or trigger;
- continuity-need Idea generation or update rule;
- continuity evidence inputs from beneficiaries, affected parties, fiscalizers, current-period fulfillment/control evidence, and closure/accountability records where available;
- eligibility rule for current and alternative executors;
- reserve, retention, guarantee, or non-assignable-pool reference where applicable;
- citizen-facing label: "funds only initial period", "maintenance not funded", "renewal window open", or "continuity idea open" where true.

## Applies to

- funding commitments;
- budget lines;
- phase lanes;
- recurring service projects;
- care, health, education, maintenance, and emergency support;
- disbursement and retention rules;
- financial assurance.
- continuity renewal Ideas and project-creation pathways.

## Defense strength and residual risk

Defense strength: moderate to strong after refinement. The architecture can represent continuity risk, expose renewal needs before interruption, and route follow-on demand into Ideas and ordinary project competition. Core v0 still does not guarantee that future funding will close.

Residual risk: implementers or proposers may frame continuity-dependent projects as one-time outputs to make them easier to fund. That should become a material information claim and possible responsibility event if misleading. Current executors may also try to convert renewal visibility into incumbent protection; the rule should keep renewal public but competitively open.

## Decision

The attack is founded. It does not defeat distributed allocation, but it requires a continuity-risk classification, funding-stability fields, and a visible continuity-renewal path before the model is mature for recurring or care-sensitive services.
