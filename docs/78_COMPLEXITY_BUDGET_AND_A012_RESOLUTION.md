# Complexity Budget and A012 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A012-scope-creep-and-excessive-complexity.md`
- Defense: `defenses/D012-scope-creep-and-excessive-complexity.md`

## Resolution decision

A012 is founded and does not distort the project when it improves proportionality rather than eliminating safeguards. The accepted resolution is a complexity budget and low-risk fast-path discipline.

## Rule added to Core v0

Every new required object, field, state, or procedural step should identify the material failure mode it controls. If the failure mode is low-risk or can be derived safely from existing records, the requirement should not become a universal Core v0 burden.

Minimum rules:

- every required step states the risk it controls;
- low-risk projects have an explicit minimum viable path;
- higher burdens are triggered by ThresholdPolicy, not universalized;
- citizen-facing screens remain simple and action-oriented;
- new v0 entities pass the "cannot be safely derived" test;
- Extension v1+ ideas do not enter Core v0 by default.

## Macul example

A school-supplies project should not inherit the full procedural depth of a design-and-construction project. It may need budget, supplier, delivery evidence, retained funds, and beneficiary/school confirmation, but not a full design phase unless risk requires it.

## Citizen simplicity

The ordinary citizen should see what is missing and what action is available. Expert and audit detail should remain expandable, not mandatory reading.

## Transparency and accountability effect

This prevents accountability safeguards from becoming expert capture or administrative gatekeeping.

## Residual risks

- Low-burden paths can be abused if thresholds are weak.
- Experts and vendors may still benefit from complexity.
- The future API/database design must preserve proportionality.

## Integration target

This resolution should inform ThresholdPolicy, ProceduralBurdenProfile, project creation, publication validation, citizen interface layers, formal entity design, and future implementation.
