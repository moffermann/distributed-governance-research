# D007 - Defense Against A007: Conflicting Reviews and Evaluation Fragmentation

## Integration status

Phase 3 paired review completed. Accepted resolution: [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]]. Propagated into the core corpus.

## Attack reference

- Attack file: [[A007-conflicting-reviews-and-evaluation-fragmentation|attacks/A007-conflicting-reviews-and-evaluation-fragmentation.md]]
- Attack title: `A007 - Conflicting Reviews and Evaluation Fragmentation`
- Roadmap source: Phase 3 priority objection, conflicting reviews.

## Attack summary

The attack argues that the model may produce multiple valid but conflicting conclusions: technical review, fiscalizer review, complaint findings, beneficiary experience, affected-party observations, fulfillment evaluation, reputation inputs, and soft citizen signals. In the Macul example, a construction milestone may pass while a noise antivalue fails or a complaint shows misleading public-access rules.

## Objective evaluation

- Classification: founded as a communication and formal-effect risk.
- Why it is founded: distributed review creates plural conclusions, and citizens may confuse one scoped finding with total project success or failure.
- Why it is not fatal to the architecture: Core v0 already defines evaluation as dimension-scoped and effect-scoped, and the implementable schema includes `EvaluationRecord` with context, dimension, evidence basis, authority basis, effect type, effect scope, and review status.
- Difference of judgment: low. The risk is a structural consequence of distributed evaluation.
- Editorial distortion risk: medium. The attack would distort the project if it demands one central reviewer to resolve all dimensions. The project should instead preserve scoped disagreement and define effect-specific precedence.

## Response

The defense is that conflicting reviews should not be collapsed into one global verdict.

A fiscalizer may approve a disbursement milestone while a complaint reviewer finds misleading access rules and an affected-party review shows an antivalue ceiling breach. These are not necessarily contradictions unless they claim the same effect over the same dimension and scope.

For Macul, the correct citizen-facing summary might be:

```text
Construction milestone: accepted for partial release.
Noise antivalue: under contradiction review.
Public-access claim: complaint admitted for review.
Overall closure: not available until open evaluation conflicts are resolved or scoped.
```

## Project-document basis

- [[34_CORE_V0_SCOPE_FREEZE#^rb7d40b09|docs/34_CORE_V0_SCOPE_FREEZE.md]] states that formal evaluation is dimension-scoped and effect-scoped.
- [[34_CORE_V0_SCOPE_FREEZE#^r10f159f2|docs/34_CORE_V0_SCOPE_FREEZE.md]] separates soft citizen input from formal fulfillment, disbursement, closure, complaint, responsibility, or reputation review.
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION#^r16045dbf|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]] states that beneficiary feedback, affected-party experience, citizen observations, expert opinions, fiscalizer conclusions, complaint findings, and reputation inputs should not collapse into one undifferentiated score.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0#Value, Evidence, and Evaluation Schemas|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] defines `EvaluationRecord` with evaluation context, evaluated dimension, authority or qualification basis, evidence refs, effect type, effect scope, and review status.
- [[65_RESPONSIBILITY_MATRIX_BY_ROLE_V0#Project Delivery and Review Roles|docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md]] says an evaluator cannot mix evaluation contexts or create effects outside assigned authority.
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION#^ra6d710f4|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]] requires formal reputation updates to come from verified metrics, accepted fulfillment evidence, fiscalizer evaluation, or founded complaints connected to role obligations.

## Bibliographic basis

- Mark Bovens, "Analysing and Assessing Accountability" (2007): accountability depends on forums, actors, standards, and consequences.
- Michael Power, `The Audit Society` (1997): audit conclusions can create legitimacy beyond their actual scope.
- Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993): expert evidence must be relevant and reliable for the specific issue.
- National Research Council, `Strengthening Forensic Science in the United States` (2009): technical claims require standards, validation, and limits.
- ISO/IEC 17025: competence depends on validated methods and quality systems.

## Proposed improvements

Define conflict-of-review handling:

- every formal evaluation must state dimension, effect, scope, authority basis, evidence basis, and limitations;
- citizen-facing labels must show scoped conflict, not only global pass/fail;
- precedence should be effect-specific: disbursement, closure, complaint, reputation, legal referral, and mitigation have different rules;
- unresolved conflicts should block only the affected scope unless the rule or review basis declares broader effect;
- later accepted findings should correct or qualify earlier records rather than erase them.

## Applies to

- EvaluationRecord;
- FiscalizationReport;
- complaint admissibility and final complaint outcome;
- ValueVerificationPackage;
- Project Closure Accountability Record;
- disbursement decisions;
- reputation inputs.

## Defense strength and residual risk

Defense strength: strong conceptually, moderate in citizen communication.

Residual risk: compact project views may still over-simplify. A single green or red label could hide scoped contradictions unless the interface explicitly supports "passed for X, unresolved for Y."

## Decision

The attack is founded but not fatal. It requires a formal conflict-of-review rule and citizen-facing labels for scoped contradictory findings.
