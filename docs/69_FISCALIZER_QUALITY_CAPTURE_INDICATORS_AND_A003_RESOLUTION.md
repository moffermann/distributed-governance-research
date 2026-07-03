# Fiscalizer Quality and Capture Indicators and A003 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A003-fiscalizer-capture-or-fiscalization-failure|attacks/A003-fiscalizer-capture-or-fiscalization-failure.md]]
- Defense: [[D003-fiscalizer-capture-or-fiscalization-failure|defenses/D003-fiscalizer-capture-or-fiscalization-failure.md]]

## Resolution decision

A003 is founded and does not distort the project. The project rejects the distorted conclusion that distributed fiscalization is invalid unless a perfect fiscalizer exists. The accepted resolution is to make fiscalizer quality, dependency, and capture indicators visible and formally relevant.

## Rule added to Core v0

Responsible fiscalization remains distributed in available supply but protocol-selected in assignment. Fiscalization reports and assignments should include quality and capture indicators.

Each responsible fiscalizer assignment should expose a project-specific `Fiscalizer Eligibility and Reputation Profile` or equivalent derived surface. This is not a generic CV, universal score, or automatic selection engine. It is a contextual read model that shows why the fiscalizer is eligible for this project, which assignment criteria were applied, what relevant role-performance history exists for comparable project types, and what relationship or capture warnings apply.

Minimum indicators:

- project-specific eligibility criteria: required expertise, credentials or competence basis, territory/logistics capacity, availability, current workload, methodology fit, budget fit, and policy threshold;
- contextual fiscalizer reputation: reviewed performance in comparable project types, report completeness, timeliness, later-confirmed findings, corrected or overturned findings, and insufficient-report history;
- repeat relationships by proposer, designer, executor, evidence producer, supplier, territory, and holding group;
- fiscalizer dependency concentration;
- report sufficiency fields: scope, methodology, evidence considered, evidence rejected, limitations, conflicts, and formal effect;
- delayed correction and later-confirmed finding metrics;
- capped secondary fiscalization or fiscalization-audit triggers for high-risk or suspicious patterns.

## Macul example

If a fiscalizer repeatedly approves projects by firms linked to the same holding and produces short reports without measuring dimensions, accessibility, bathrooms, or public-access commitments, the issue should be visible as a quality and capture concern. The project may require correction, replacement, secondary audit, or responsibility review depending on scope.

The Macul fiscalizer profile may show:

```text
Eligibility for this project:
eligible for sports-infrastructure review;
accessibility expertise requires reinforcement;
methodology includes field measurement and document review;
available within the required phase-gate window.

Contextual reputation:
12 comparable sports-infrastructure reviews;
9 complete reports;
2 corrected reports;
1 report later found insufficient for fund release.

Relationship/capture warnings:
6 prior reviews involving companies in the executor's holding group.
```

This profile may lead to `eligible with warning`, `eligible with secondary audit`, `requires conflict review`, or `not eligible` depending on the active policy and review outcome.

## Citizen simplicity

The ordinary citizen sees simple indicators such as `eligible for this project`, `eligibility warning`, `fiscalizer report complete`, `limitations declared`, `repeat relationship visible`, or `secondary audit triggered`. The full methodology, eligibility criteria, contextual reputation source records, and conflict history remain in Layer 5.

## Transparency and accountability effect

The system does not need a perfect fiscalizer. It needs fiscalizers whose selection, conflicts, methods, limitations, and repeated patterns are public, reviewable, and reputationally consequential.

## Residual risks

- Off-platform influence and informal relationships may remain hidden.
- Repeated relationship indicators can produce false suspicion if not contextualized.
- Small markets may have limited qualified fiscalizers.

## Integration target

This resolution should inform FiscalizerEligibilityReputationProfile, FiscalizationAssignment, FiscalizationReport, ControlSubproject, EvaluationRecord, PerformanceHistorySurface, secondary fiscalization, and fiscalizer role reputation.
