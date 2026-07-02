# A018 - Collusion Among Project Roles

## Status

Prepared for Phase 3 review. Not resolved.

## Description

The architecture separates proposer, modeler/designer, executor, fiscalizer, evidence producer, funder, delegate, custodian, evaluator, complainant, and affected party roles. This attack asks whether several roles can coordinate to satisfy formal rules while defeating accountability.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: collusion among project roles.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`.
- `knowledge/07_SESSION_CORE_OBJECTS_FISCALIZATION_AND_SIMPLICITY.md`.
- `knowledge/hypotheses/H003-distributed-trust.md`.
- `knowledge/hypotheses/H008-distributed-accountability.md`.
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md`.

## Problem

The model assumes no perfect conflict detection. Collusion can be direct, indirect, repeated, or hidden through holdings, professional networks, future work, delegated influence, or reciprocal approvals.

Example:

```text
A proposer, designer, executor, evidence producer, and fiscalizer are formally separate.
They coordinate informally to define easy evidence, approve weak milestones, suppress contradictions, and release funds.
```

## Recommended resolution path

- Treat collusion as a system-level attack, not just individual conflict.
- Add relationship, repeat-interaction, timing, and outcome-pattern observability.
- Require independent corroboration for critical milestones.
- Allow verified discoveries to expose hidden coordination.
- Make collusion insufficient by itself: even coordinated actors must still pass evidence quality, fiscalization sufficiency, audit, and contradiction channels.

## Theoretical base and citations

- George Stigler, "The Theory of Economic Regulation" (1971): capture often operates through aligned interests rather than explicit illegality.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): collusion and information control are central regulatory risks.
- Bengt Holmstrom, "Moral Hazard and Observability" (1979): hidden action requires incentive-compatible monitoring.
- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agency costs arise where agents control information and action.
- Robert Michels, `Political Parties` (1911): organized actors can consolidate power inside formal democratic structures.
- Michael Power, `The Audit Society` (1997): formal compliance can hide substantive failure.

## Social reasons

Distributed governance only works if distribution creates independent checks. If role separation becomes formal theater, citizens are worse off because the system appears accountable while being captured.

## Conflicts of interest

- Future work dependencies among project actors.
- Related companies splitting roles.
- Delegates funding allied executors.
- Fiscalizers accepting evidence from friendly producers.
- Authorities protecting preferred operators.

## Inconsistencies to test

- Roles are distinct, but actors can accumulate roles unless conflict rules block them.
- Related-party status is allowed with safeguards, but collusion can exist without formal ownership.
- Audit trail records actions, but may not reveal informal coordination.

## Stress scenario

All formal records exist for Macul: project phase, evidence, fiscalizer report, evaluation, and disbursement. Later, a verified discovery shows the evidence producer and fiscalizer coordinated their reports with the executor before submission.

## Review checklist

- Are repeated actor clusters visible?
- Are timing anomalies detected?
- Are independent corroboration requirements risk-adjusted?
- Can verified discovery reopen effects?
- Does collusion create role-specific and cross-role responsibility events?

## Expected resolution output

A Phase 3 resolution should define collusion observability and response paths across role clusters, not only individual conflicts.
