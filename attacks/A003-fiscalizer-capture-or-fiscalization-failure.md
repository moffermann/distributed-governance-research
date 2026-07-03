# A003 - Fiscalizer Capture or Fiscalization Failure

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]].

## Description

The model relies on fiscalizers for responsible review. This attack asks whether fiscalizers can be captured, underqualified, overloaded, inconsistent, or quietly dependent on repeat project actors.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objections: fiscalization failure and fiscalizer capture.
- [[10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL|docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md]].
- [[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]].
- [[52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION|docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md]].
- [[H016-distributed-fiscalization-ecosystem|knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md]].
- [[65_RESPONSIBILITY_MATRIX_BY_ROLE_V0|docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md]].

## Problem

Fiscalization is distributed in available actors but protocol-selected in responsible assignment. The failure mode is that selection rules, low pay, repeat relationships, weak standards, or scarce expertise may still produce captured or low-quality review.

Example:

```text
A fiscalizer repeatedly reviews projects designed by firms linked to the same holding.
No direct conflict is declared, but the review pattern is unusually favorable and fast.
```

## Recommended resolution path

- Add repeat-relationship and dependency indicators to fiscalizer observability.
- Require fiscalization reports to expose methodology, evidence considered, limitations, and formal effect.
- Distinguish field evidence capture from evaluation responsibility.
- Allow replacement or secondary audit under capped and risk-adjusted rules.
- Use role-specific reputation for fiscalizer timeliness, completeness, correction record, and later-confirmed findings.

## Theoretical base and citations

- Michael Power, `The Audit Society` (1997): audit systems can become ritualized and may create performative compliance.
- Mark Bovens, "Analysing and Assessing Accountability" (2007): accountability requires explainable answerability and consequence.
- Bengt Holmstrom, "Moral Hazard and Observability" (1979): observability shapes incentives and contractual control.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): regulated decision processes are vulnerable to capture and collusion.
- George Stigler, "The Theory of Economic Regulation" (1971): oversight can be shaped by the regulated actors.

## Social reasons

If fiscalizers become a new closed guild, the model replaces institutional monopoly with audit monopoly. Citizens need independent review, but the review layer must itself be accountable.

## Conflicts of interest

- Fiscalizers may depend on future work from repeat proposers.
- Evidence producers and fiscalizers may collaborate to validate weak evidence.
- Public authorities may favor fiscalizers that approve preferred portfolios.
- Lowest-price fiscalizers may cut corners.

## Inconsistencies to test

- Open fiscalizer offers increase participation, but responsible assignment cannot be popularity-only or executor-controlled.
- Secondary fiscalization improves review, but unlimited secondary fiscalization can harass projects or waste control funding.
- Fiscalizer reputation depends on reviewed outcomes, but those outcomes may be delayed.

## Stress scenario

Macul project passes design gate after a brief fiscalizer report that does not measure court dimensions, does not inspect accessibility, and relies mainly on executor-supplied photos.

## Review checklist

- Does fiscalizer selection record eligibility, conflicts, methodology, and selection reason?
- Are repeated relationships visible?
- Can fiscalizer conclusions be challenged without creating unlimited review loops?
- Does fiscalizer failure create role-specific responsibility?
- Are low-risk projects protected from excessive fiscalization cost?

## Expected resolution output

A Phase 3 resolution should define fiscalizer quality and capture indicators, including repeat-relationship observability and minimum report sufficiency fields.
