# Fiscalizer Quality and Capture Indicators and A003 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A003-fiscalizer-capture-or-fiscalization-failure.md`
- Defense: `defenses/D003-fiscalizer-capture-or-fiscalization-failure.md`

## Resolution decision

A003 is founded and does not distort the project. The project rejects the distorted conclusion that distributed fiscalization is invalid unless a perfect fiscalizer exists. The accepted resolution is to make fiscalizer quality, dependency, and capture indicators visible and formally relevant.

## Rule added to Core v0

Responsible fiscalization remains distributed in available supply but protocol-selected in assignment. Fiscalization reports and assignments should include quality and capture indicators.

Minimum indicators:

- repeat relationships by proposer, designer, executor, evidence producer, supplier, territory, and holding group;
- fiscalizer dependency concentration;
- report sufficiency fields: scope, methodology, evidence considered, evidence rejected, limitations, conflicts, and formal effect;
- delayed correction and later-confirmed finding metrics;
- capped secondary fiscalization or fiscalization-audit triggers for high-risk or suspicious patterns.

## Macul example

If a fiscalizer repeatedly approves projects by firms linked to the same holding and produces short reports without measuring dimensions, accessibility, bathrooms, or public-access commitments, the issue should be visible as a quality and capture concern. The project may require correction, replacement, secondary audit, or responsibility review depending on scope.

## Citizen simplicity

The ordinary citizen sees simple indicators such as `fiscalizer report complete`, `limitations declared`, `repeat relationship visible`, or `secondary audit triggered`. The full methodology and conflict history remain in Layer 5.

## Transparency and accountability effect

The system does not need a perfect fiscalizer. It needs fiscalizers whose selection, conflicts, methods, limitations, and repeated patterns are public, reviewable, and reputationally consequential.

## Residual risks

- Off-platform influence and informal relationships may remain hidden.
- Repeated relationship indicators can produce false suspicion if not contextualized.
- Small markets may have limited qualified fiscalizers.

## Integration target

This resolution should inform FiscalizationAssignment, FiscalizationReport, ControlSubproject, EvaluationRecord, secondary fiscalization, and fiscalizer role reputation.
