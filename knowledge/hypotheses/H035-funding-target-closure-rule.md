# H035 — Funding Target Closure Rule

## Hypothesis

A project should close each funding round once it reaches or exceeds the declared target for that specific budget lane. Once funded, financial commitments should not be freely withdrawable.

The system should distinguish execution funding, minimum control funding, and limited supplemental control funding. Closing the execution budget does not automatically make the project execution-ready if the minimum admissible control package is still incomplete.

## Resolution alignment

This hypothesis is qualified by:

- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`;
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`;
- `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`;
- `docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md`;
- `knowledge/hypotheses/H036-milestone-based-disbursement-and-guarantees.md`.

Where older wording suggested exceptional funder withdrawal, C005 is the controlling rule:

```text
No ordinary withdrawal after financing.
Funding is a commitment until project closure.
Complaints, reviews, reformulations, pauses, revocations, and failures may change project or fund state, but they do not create a unilateral funder withdrawal right.
```

## Rationale

Keeping the funding rule simple preserves traceability between:

```text
project scope → financing target → execution obligation → KPIs → evaluation
```

If a project continues receiving funds after reaching its target, the relationship between money received and value promised can become ambiguous.

If funders can freely withdraw after a project is funded, execution becomes unstable and executors cannot rely on the financing target being real.

If execution funding, control funding, and supplemental control funding are collapsed into one undifferentiated target, citizens may not understand whether they are funding execution, minimum auditability, or extra oversight. The executor may also appear to receive more resources than the approved execution budget allows.

## Rule

When a project reaches or exceeds its declared execution funding requirement, it closes the execution funding lane and moves to an execution-funded state.

```text
Execution funding open
→ Execution-funded / control pending
→ Minimum control package funded and accepted
→ Execution-ready
→ In execution
```

Execution-funded does not authorize execution by itself. Execution-ready requires all applicable closure conditions, including the minimum admissible control package where required.

## Funding lane closures

Core v0 should treat funding closure as lane-specific:

```text
1. Execution funding closure
   Fixed executor budget reaches target.

2. Minimum control funding closure
   Required fiscalization, evidence, or control package becomes admissible, funded, selected, and accepted.

3. Supplemental control funding closure
   Additional control-only funding remains limited by protocol and never expands the executor's budget.
```

The citizen-facing interface may show this simply:

```text
Execution budget: closed
Control package: pending
Status: not ready to execute yet
```

or:

```text
Execution budget: closed
Minimum control: closed
Supplemental control: funding secondary fiscalization
Status: execution-ready
```

## No automatic overfunding

The system should not allow indefinite overfunding by default.

If a project wants to expand scope, it should create a new project, new version, or separate expansion phase with its own scope, financing target, KPIs, and evidential contract.

This rule is qualified by the later limited supplemental control rule:

```text
Supplemental control funding is not execution overfunding.
```

After minimum control closure, additional control-only contributions may fund at most one secondary fiscalizer or fiscalization auditor and distinct non-duplicative evidence needs. They do not increase the executor's budget, expand project scope, or create unlimited fiscalization.

New contributions should be rejected once:

- the execution budget is closed;
- the minimum admissible control package is closed;
- the project already has the allowed primary and secondary fiscalization coverage;
- no distinct or complementary evidence need remains;
- the active protocol does not define another lawful destination for the contribution.

## Example

```text
Project:
Multi-court sports complex in Macul.

Execution target:
$100,000,000.

Result:
Citizens fund the full execution target.

Effect:
The executor's budget is closed. New ordinary contributions do not expand the construction scope or increase the executor's budget.

Control status:
The project still needs a primary fiscalizer and evidence producer before execution-ready.

Next contributions:
They fund the minimum control package, not more construction.

After minimum control closure:
Additional control-only contributions may fund one secondary fiscalizer or fiscalization auditor, or distinct non-duplicative evidence production.

Saturation:
If the project already has a primary fiscalizer, secondary fiscalization, and sufficient distinct evidence, new contributions are rejected or routed only if the active protocol defines a visible lawful destination.
```

## Withdrawal rule

Once a project is funded, contributors should not be able to withdraw support freely.

Protocol action over committed resources may occur only through defined project states or review outcomes, such as:

- an active complaint;
- formal fiscalization review;
- evidence of fraud;
- material misrepresentation;
- undisclosed antivalue;
- protocol-defined suspension event.

These events may pause, block, retain, return, reassign, recover, or review funds according to project rules. They are not ordinary voluntary withdrawal by the funder.

## Recovery caveat

Core v0 should not promise that all failed-project funds will be recovered.

Like current public projects, funds already released and spent may be partially or totally unrecoverable. The improvement is not zero risk. The improvement is:

- milestone-based release;
- retentions and guarantees where applicable;
- fiscalization;
- complaint review;
- traceability;
- recovery where possible;
- role-based reputation and responsibility events.

## Principle

> A project is funded for a defined commitment, not for an open-ended accumulation of resources or unstable post-funding withdrawal.

> Funding closure applies to a specific budget lane. Closing the execution lane does not erase the need to close the minimum control lane before execution.

## Status

Core project financing lifecycle rule. Superseded where necessary by C005 and qualified by C002, C013, H036, and the accepted parallel closure model.
