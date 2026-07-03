# H036 — Milestone-Based Disbursement and Guarantees

## Hypothesis

Once a project is funded, resources should generally remain retained and be released only through validated disbursement milestones, evidence, fiscalization where required, blocking-condition checks, guarantee or retention rules, and protocol-valid financial orders.

Funding completion gives the project the right to proceed under controlled execution conditions. It does not create an immediate right to receive the full budget.

## Resolution alignment

This hypothesis is aligned with:

- [[31_PROJECT_DISBURSEMENT_FLOW|docs/31_PROJECT_DISBURSEMENT_FLOW.md]];
- [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]];
- [[54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION|docs/54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION.md]];
- [[55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION|docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md]];
- [[H037-public-revenue-custody-and-disbursement|knowledge/hypotheses/H037-public-revenue-custody-and-disbursement.md]].

H036 should be read as the financing-control rule that connects funding commitment, milestone validation, evidence, fiscalization, guarantees, retentions, and custody execution.

H036 is also aligned with [[../../docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|A017]]: the disbursement-gaming tests are linkage and justification checks over the milestone, assurance, and release objects this hypothesis defines, not new payment machinery. Every milestone must link to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; advance payment must carry recoverability, retention, direct supplier payment, guarantee, or equivalent protection; avoidably weak milestone design can trigger designer/modeler responsibility review; the fiscalizer must state why the evidence supports release, partial release, retention, or rejection; and citizen-facing summaries must separate funding, reservation, release, retained funds, and guarantee status. Per-project actuarial guarantee calibration and automated milestone-design scoring remain Extension v1+ or country implementation; milestone quality rests on human review backed by designer responsibility and retention.

H011 now defines the upstream financial assurance requirement: every execution-financeable project should have a Financial Assurance Profile, and Core v0 should use a global guarantee percentage configured by the active administrator, protocol, operating mode, or lawful country implementation rule. H036 governs how funds are released, retained, returned, reassigned, recovered, or subject to guarantee execution after that assurance profile exists.

## Rationale

A funded project should not automatically receive all resources upfront. Immediate full transfer increases the risk of abandonment, misuse, poor execution, or fraud.

Milestone-based disbursement preserves execution discipline and links funding release to evidence of progress.

This rule also keeps citizen participation simple. Citizens do not need to understand every technical control before funding a project. They need a clear confirmation that their contribution is committed until closure, and a simple status explaining whether funds are committed, retained, released, paused, returned, reassigned, or in recovery.

## Rule

After a project reaches its funding target:

```text
Funded
→ funds retained / escrowed
→ validated milestone execution
→ evidence submitted
→ fiscalization if required
→ blockers checked
→ disbursement decision
→ Financial Order generated where money movement is required
→ custodian executes release, retention, return, reassignment, recovery, or guarantee execution
→ next milestone or closure
```

The amount released at each stage depends on the validated disbursement milestone plan, evidence, fiscalization result, blocking-condition status, and guarantee or retention structure.

No partial release should occur unless the milestone plan already defines a valid partial-release rule.

## Relationship with guarantees

The project design should define:

- payment milestones;
- evidence required for each milestone;
- Financial Assurance Profile reference;
- retention percentage;
- guarantees or performance bonds;
- guarantee materialization requirement where applicable;
- conditions for pausing disbursement;
- conditions for executing guarantees;
- conditions for final release;
- conditions for returning, reassigning, recovering, or retaining unused or non-compliant funds.

Guarantees and retentions reduce risk. They do not eliminate risk. Funds already released and spent may be partially or totally unrecoverable, as in ordinary public projects. Core v0 improves traceability, responsibility assignment, and recovery where possible; it does not promise zero loss.

## Relationship with financial orders

The platform or protocol decides whether a disbursement, retention, return, reassignment, recovery, guarantee execution, or balance closure is valid under the project rules.

The custodian, treasury integration, escrow service, bank, or country-specific financial execution mechanism executes the resulting `Financial Order`.

The custodian may reject or suspend execution only for closed technical or legal causes, such as invalid signature, duplicated order, insufficient real funds, invalid destination account, legal freeze, required compliance block, malformed order, or ledger mismatch.

It should not reject because it disagrees with the project's civic value, priority, executor, or community allocation.

## Reformulation and failure treatment

If a project requires reformulation, pause, or revocation, disbursement follows the accepted C005 and C017 rules:

- funding remains a commitment until project closure or protocol-defined outcome;
- ordinary funder withdrawal does not reopen by default;
- unreleased, unused, retained, guaranteed, or recovered funds may return or reassign according to the active rule;
- released funds are reviewed as justified, disputed, or non-compliant;
- material value reformulation cannot rewrite the original value promise without the required approval;
- guarantees, retentions, recovery, sanctions, and reputation effects may apply where rules allow.

## Example

```text
Project:
Multi-court sports complex in Macul.

Funding result:
The project reaches its financing target.

Milestone plan:
Milestone 1 releases 20% after permit, contractor acceptance, and site-preparation evidence.
Milestone 2 releases 40% after verified construction progress.
Final retention remains until fiscalizer closure and evidence of usable facilities.

Normal case:
Milestone 1 evidence is accepted, the fiscalizer approves, no blocker exists, and the system generates a Financial Order for the first release.

Problem case:
Milestone 2 evidence is incomplete and an admitted complaint creates a scoped systemic pause for the affected disbursement. The affected amount remains retained. The citizen sees that disbursement is paused, not a complex treasury workflow.

Failure case:
If the project is later revoked, unreleased funds return or reassign by rule, retentions or guarantees may activate, and already released funds are reviewed as justified, disputed, or non-compliant.
```

## Proportionality

Small, low-risk projects may receive simpler or faster disbursement.

Large, risky, complex, or high-antivalue projects should have stronger staged release, independent fiscalization, retained funds, and additional lawful assurance instruments only where the active policy defines objective conditions. The executor should not be able to reduce guarantee obligations by self-declaring a lower project category.

Protected advance payments may exist when a project cannot begin without early purchases, permits, materials, deposits, or supplier reservations. They should be treated as protected advances, not as ordinary completed-progress milestones, and should require appropriate safeguards such as supplier identification, direct supplier payment, escrow, guarantee, retention, invoice path, or later verification.

## Audit requirements

Each milestone-related money movement should preserve:

- project and milestone reference;
- validated milestone rule;
- fulfillment evidence considered;
- fiscalization decision where required;
- blocking-condition status;
- released amount;
- retained amount;
- guarantee or retention rule applied;
- Financial Order ID where applicable;
- custodian execution status where applicable;
- treatment of unused, unreleased, recovered, or non-compliant funds;
- citizen notification record;
- timestamp and responsible actor or system component.

## Principle

> Funding completion does not mean full transfer. It means the project has secured the right to execute under the validated disbursement, evidence, fiscalization, guarantee, retention, and financial-order conditions defined in its design.

> The citizen funds a project to completion, but the executor receives money only through controlled, auditable releases.

## Status

Core project financing lifecycle rule. Extends H011 and H035, and is qualified by C005, C016, C017, H037, and the accepted project disbursement flow.
