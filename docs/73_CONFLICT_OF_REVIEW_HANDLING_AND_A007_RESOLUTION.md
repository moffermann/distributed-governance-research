# Conflict of Review Handling and A007 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A007-conflicting-reviews-and-evaluation-fragmentation.md`
- Defense: `defenses/D007-conflicting-reviews-and-evaluation-fragmentation.md`

## Resolution decision

A007 is founded and does not distort the project. The project rejects the distorted conclusion that one central reviewer should collapse all review contexts. The accepted resolution is conflict-of-review handling by dimension, effect, and scope.

After user review, A007 is further narrowed:

- before project closure, conflicting evidence or complaints are handled through the ordinary complaint, fiscalization, pause, correction, retention, mitigation, disbursement-blocking, and review paths;
- after project closure, the platform should not keep an ordinary internal complaint path open forever;
- post-closure complaints, contradictory evidence, hidden antivalues, or defects should be processed inside the platform only during a declared post-closure accountability window and only within the declared post-closure coverage scope;
- outside that window, the ordinary route should be external: court, regulator, comptroller, competent authority, contract enforcement, or other country-specific channel. The platform may later register a final external resolution or competent-authority finding where the active rule allows reputation, responsibility, or historical correction effects.

## Rule added to Core v0

Every formal evaluation must identify:

- evaluation context;
- evaluated dimension;
- evidence basis;
- authority or qualification basis;
- effect type;
- effect scope;
- limitations;
- review or appeal status.

Conflicting records should be reconciled by formal effect, not by generic reviewer hierarchy.

For post-closure conflicts, every execution-financeable project should also declare a `Post-Closure Coverage Profile`.

The profile must state whether post-closure accountability is covered by:

```text
1. Executor Direct Warranty
2. Equivalent Insurance / Bond / Coverage
```

The executor, proposer, or designer may not freely self-select a weaker coverage period or scope when doing so reduces obligations. Duration, minimum scope, required response path, and coverage basis should come from the Threshold Policy, project type, risk, contract, Financial Assurance Profile, operating mode, protocol, or country implementation.

This profile is related to, but distinct from, the Financial Assurance Profile. Financial assurance protects funds and execution risk. Post-closure coverage defines who pays for or performs covered post-closure review, correction, mitigation, replacement, or warranty response after the project has closed.

## Macul example

The construction milestone may be accepted for partial release, while a noise antivalue remains disputed and a complaint about public access is admitted. These are not the same conclusion. The system should show `accepted for construction milestone`, `noise under review`, and `access complaint active` rather than one global pass/fail label.

If the project has already closed, the same case is handled differently.

Example:

```text
Project:
Design and Construction of Multi-Courts in Macul

Closure:
Fiscalizer accepted construction and final disbursement was released.

Post-closure coverage:
Executor Direct Warranty, 180 days.

Day 60:
Residents submit complaint evidence that nighttime noise exceeds the declared antivalue ceiling.

Platform effect:
The complaint may be reviewed inside the platform because it is within the post-closure window and coverage scope.

Possible outcomes:
mitigation order, correction, retained/guaranteed/insured coverage execution, responsibility event, reputation input, fiscalizer review, or no-effect finding.

Day 900:
Residents submit the same issue after coverage expires.

Platform effect:
The platform does not process an ordinary post-closure complaint. The citizen is routed to external legal, regulatory, or competent-authority channels. A final external decision may later be recorded if the active rule permits.
```

## Citizen simplicity

Citizens should see scoped labels such as `passed for release`, `not closed`, `antivalue disputed`, `complaint pending`, or `conflict unresolved`.

After closure, citizens should see labels such as:

```text
post-closure warranty active
covered by executor warranty
covered by insurance / bond
post-closure review in progress
coverage expired - use external channel
external decision recorded
```

## Transparency and accountability effect

The rule prevents favorable narrow reviews from being used as total project validation and prevents partial complaints from being misrepresented as total project failure.

The post-closure coverage rule prevents two opposite failures:

- a closed project is not exposed to indefinite internal platform complaints forever;
- a closure decision does not immediately release the executor, fiscalizer, evidence producer, or coverage provider from covered post-closure defects, hidden antivalues, or contradictory evidence discovered during the declared window.

## Residual risks

- Citizen-facing labels may still oversimplify.
- Later findings may require corrections to earlier records.
- Some effects may need legal or external authority outside the platform.
- Some project types may require legally defined warranty, insurance, bond, escrow, retention, or statutory liability rules that Core v0 cannot define generically.
- Too short a post-closure window may leave real defects without platform remedy; too long a window may create indefinite liability and deter executors.

## Integration target

This resolution should inform EvaluationRecord, FiscalizationReport, complaint findings, ValueVerificationPackage, Project Closure Accountability Record, disbursement, and reputation inputs.

It should also inform ThresholdPolicy, FinancialAssuranceProfile, Post-Closure Coverage Profile, ComplaintReviewPolicy, ProjectLifecycle, citizen-facing project closure surfaces, and external-resolution recording.
