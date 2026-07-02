# D017 - Defense Against A017: Disbursement Gaming

## Attack reference

- Attack file: `attacks/A017-disbursement-gaming.md`
- Attack title: `A017 - Disbursement Gaming`
- Roadmap source: Phase 3 priority objection, disbursement gaming.

## Attack summary

The attack argues that actors can design milestones, phase gates, evidence needs, guarantees, or partial-release rules to get money released before real value is delivered. In Macul, a 60 percent release for "site preparation and materials purchase" may be easy to document but weakly connected to usable courts or public value.

## Objective evaluation

- Classification: founded and high impact.
- Why it is founded: milestones become payment targets and can be gamed just like metrics.
- Why it is not fatal to the architecture: Core v0 already treats disbursement as conditional release, requires phase gates, reviewed evidence, fiscalization, blockers, financial assurance, retention, and financial orders.
- Difference of judgment: low. Payment under imperfect observation creates a classic moral-hazard problem.
- Editorial distortion risk: low to medium. The attack strengthens the model if it improves milestone design rather than abolishing project disbursement.

## Response

The defense is that funding, reservation, release, and custody execution are distinct states.

A funding commitment is not payment. Reserved execution funding is not release. Disbursement requires milestone or phase-gate review, fulfillment/control evidence, fiscalization, blocker checks, assurance materialization, and a valid financial order.

For Macul, buying materials may justify a limited protected release only if the milestone plan tied that release to a budget line, evidence need, recoverability rule, guarantee, retention, and value-relevant progress. Receipts alone should not prove usable courts.

## Project-document basis

- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:11` states that disbursement is conditional release of retained resources based on milestones, fulfillment evidence, fiscalization, and absence of blocking issues.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:13` states that later-phase funds may be collected in advance but cannot be released until prerequisite phase deliverables are accepted.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:85` requires disbursement milestone plans and phase-gate funding treatment to be coherent before execution funding commitments.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:91` blocks construction release while design is pending, rejected, or materially reformulated.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:239` treats executor material as self-report unless corroborated for critical milestones, disbursements, and closure.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:339` prohibits full release orders where required fulfillment/control evidence is inconclusive, insufficient, contradicted, or only contextual.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:412` allows partial release only with separable components, accepted evidence, explicit retained amount, clear release condition, fiscalizer explanation, and citizen-facing summary.
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md:427` requires guarantee materialization to be confirmed by an external lawful custodian, guarantor, insurer, treasury, bank, escrow provider, or equivalent.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:174` defines `Disbursement` as leading to financial order only after review and blockers clear.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:247` sets a schema gate: no disbursement without funding source, budget line, milestone/phase gate, review basis, and financial order path.

## Bibliographic basis

- Bengt Holmstrom, "Moral Hazard and Observability" (1979): payment under imperfect observation creates incentive problems.
- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agents can exploit control gaps.
- Charles Goodhart, "Problems of Monetary Management" (1975): milestones can become targets that distort behavior.
- Michael Power, `The Audit Society` (1997): auditability can become formal compliance when substantive risk is missed.
- Aaron Wildavsky, `The Politics of the Budgetary Process` (1964): budget processes create strategic behavior around commitments and releases.

## Proposed improvements

Add disbursement-gaming tests:

- milestone must link to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount;
- advance payment must have recoverability, retention, direct supplier payment, guarantee, or equivalent protection;
- weak milestone design should trigger designer/modeler responsibility review where it creates avoidable release risk;
- fiscalizer must state why the evidence supports release, partial release, retention, or rejection;
- citizen-facing summaries must separate funding, reservation, release, retained funds, and guarantee status.

## Applies to

- Disbursement Milestone Plan;
- Project Phase;
- BudgetLine;
- FundingCommitment;
- Disbursement;
- FinancialAssuranceProfile;
- GuaranteeMaterializationRecord;
- FiscalizationReport;
- EvaluationRecord.

## Defense strength and residual risk

Defense strength: strong as a control chain, moderate against sophisticated milestone design gaming.

Residual risk: actors may still design milestones that are formally reviewable but substantively weak. The milestone plan itself must become a reviewed responsibility object.

## Decision

The attack is founded. It does not defeat milestone-based disbursement, but Phase 3 should add disbursement-gaming tests for milestone design, partial release, advance payment, and phase-gate release.
