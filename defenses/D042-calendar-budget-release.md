# D042 - Defense Against A042: The Unregulated Release Valve

## Integration status

Paired review completed. Accepted resolution: [[112_BUDGET_RELEASE_RULE_AND_A042_RESOLUTION|docs/112_BUDGET_RELEASE_RULE_AND_A042_RESOLUTION.md]] (author verdict 2026-07-07). Corpus propagation done with the resolution.

## Attack reference

- Attack file: [[A042-calendar-budget-release|attacks/A042-calendar-budget-release.md]]
- Attack title: `A042 - The Unregulated Release Valve: Calendar Budget Release Freezes the Machinery`
- Source: satellite Experiment E-1a (longitudinal engine), doi:10.5281/zenodo.21246089.

## Attack summary

The corpus regulated every downstream act but not *when* the authority releases budget into the machinery; measured, day-zero release freezes months of budget in escrow and saturates verification, calendar release maximizes project mortality, and under scarce verification capacity no release policy recovers delivered value.

## Objective evaluation

- Classification: founded.
- Why it is founded: the release rate is a real operational variable no corpus object addressed, and its two natural defaults are exactly the two that freeze the pipeline; the satellite quantified the loss and the dependency on verification capacity.
- Why it is not fatal to the architecture: the remedy is a policy field on an existing object (the operating-mode configuration) plus a sizing discipline — no new mechanism, no new entity. P007 bounded integration.
- Difference of judgment: low. The Little's-Law argument and the measurement agree.
- Editorial distortion risk: low. The rule reads as ordinary good public-finance practice.

## Response

The defense is to name the variable and give it a rule that follows the measurement: meter release against a work-in-progress ceiling *W* calibrated to the pipeline's binding resource — verification capacity when scarce, execution duration when abundant — conditioned on the outstanding-commitment stock rather than recent approval flow. Bind it to a carryforward instrument (the semi-open envelope is one) so it can span the year; under strict annuality it degenerates to within-year metering at no measured cost, because a pull-metered treasury stays near-drained and lapses nothing. Make verification capacity an explicit sizing decision, since it is the ceiling: a deployment that under-funds fiscalization cannot buy delivered value back with any schedule.

## Project-document basis

- [[104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION|docs/104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION.md]] — the expiry valve the rule interacts with.
- [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]] — the carryforward vehicle.
- [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] — the capacity-declaration precedent.

## Bibliographic basis

- Little (1961); Spearman, Woodruff & Hopp (1990) — the WIP identity and the pull-dominates-push result.

## Proposed improvements

- add a release-policy field to the operating-mode configuration (pull, ceiling *W*);
- state the verification-capacity sizing dependency;
- bind to a carryforward instrument; degrade to within-year metering under annuality.

## Applies to

- scope operating-mode configuration;
- control-capacity declarations (docs/103);
- semi-open envelope operation (docs/110).

## Defense strength and residual risk

Defense strength: strong — a published policy over existing values, following an accepted corpus pattern.

Residual risk: a deployment can mis-estimate throughput and set *W* wrong (the frozen-capital and queue metrics surface it); a no-carryforward jurisdiction is limited to within-year metering.

## Decision

Founded; accepted as docs/112 — the budget-release rule as a P007 bounded integration.
