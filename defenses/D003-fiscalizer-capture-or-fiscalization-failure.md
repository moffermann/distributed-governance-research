# D003 - Defense Against A003: Fiscalizer Capture or Fiscalization Failure

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A003-fiscalizer-capture-or-fiscalization-failure.md`
- Attack title: `A003 - Fiscalizer Capture or Fiscalization Failure`
- Roadmap source: Phase 3 priority objections, fiscalization failure and fiscalizer capture.

## Attack summary

The attack argues that fiscalizers may be captured, underqualified, overloaded, dependent on repeat actors, or incentivized to perform weak review. In the Macul example, a fiscalizer could approve design or construction without measuring dimensions, accessibility, bathrooms, or public-access obligations, relying mainly on executor-supplied photos.

## Objective evaluation

- Classification: founded and central.
- Why it is founded: fiscalization is a trust-sensitive layer and can itself become a new monopoly, closed guild, or ritualized compliance process.
- Why it is not fatal to the architecture: the model already assumes hidden collusion and imperfect conflict detection, and therefore makes fiscalization protocol-selected, conflict-checked, auditable, replaceable, and role-reputational rather than executor-selected or popularity-selected.
- Difference of judgment: low. Capture and audit failure are well-established institutional risks.
- Editorial distortion risk: medium. The attack would distort the project if it demands a perfect fiscalizer before any distributed fiscalization can exist. The project does not need perfect fiscalizers; it needs a system where fiscalizer failure is harder, more visible, less sufficient, and reputationally consequential.

## Response

The defense is that fiscalization is distributed in supply but not arbitrary in responsible assignment.

Open participation can expand the pool of evidence producers, technical reviewers, observers, and possible fiscalizers. But the responsible fiscalizer for a formal effect must be selected through protocolized eligibility, conflict, independence, risk, budget, methodology, and auditability rules. The executor cannot choose, privately pay, remove, or control the fiscalizer who validates its own performance.

For Macul, a fiscalizer report that does not inspect dimensions, accessibility, bathrooms, public access, declared antivalues, or the accepted design baseline should be treated as weak or incomplete for the relevant formal effect. It may support no release, partial release, correction, replacement, secondary audit, or responsibility review depending on scope and risk.

## Project-document basis

- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:11` separates executor execution, evidence production, fiscalizer evaluation, and community complaint/contradiction.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:26` states that only protocol-selected, conflict-checked, eligible, auditable actors become responsible fiscalizers.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:80` treats executor-submitted material as self-report unless corroborated.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:256` rejects executor preference, ordinary popularity, first funding, or lowest price alone as responsible-fiscalizer selection bases.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:570` says the system should assume hidden collusion is possible.
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:582` through `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md:598` list anti-collusion safeguards: executor does not choose or directly pay, related-party status is declared, repeated relationships are visible, false evidence can have penalties, and supplemental control is capped.
- `knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md:286` defines the core principle: not a perfect fiscalizer, but a distributed, protocol-selected ecosystem.
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md:110` states that a fiscalizer cannot be selected by the executor, hide conflicts, create material/legal suspension by itself unless law grants authority, or treat unsupported evidence as fulfillment proof.

## Bibliographic basis

- Michael Power, `The Audit Society` (1997): audit systems can become ritualized and performative.
- Mark Bovens, "Analysing and Assessing Accountability" (2007): accountability requires answerability and consequences.
- Bengt Holmstrom, "Moral Hazard and Observability" (1979): observability shapes incentive-compatible control.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): oversight is vulnerable to capture and collusion.
- George Stigler, "The Theory of Economic Regulation" (1971): regulated actors can shape regulatory processes.

## Proposed improvements

Add fiscalizer quality and capture indicators:

- repeat relationship indicators by proposer, designer, executor, evidence producer, supplier, territory, and holding group;
- fiscalizer dependency concentration;
- minimum report sufficiency fields: scope, methodology, evidence considered, evidence rejected, limitations, conflicts, and formal effect;
- delayed-correction and later-confirmed-finding metrics;
- capped secondary fiscalization or fiscalization audit triggers for high-risk or suspicious patterns.

## Applies to

- FiscalizationAssignment;
- FiscalizationReport;
- ControlSubproject;
- Evidence Producer missions;
- disbursement review;
- phase gates;
- complaint admissibility/referral;
- role-specific reputation.

## Defense strength and residual risk

Defense strength: strong as an architectural anti-capture pattern, moderate as a guarantee against informal capture.

Residual risk: off-platform payments, friendships, future-work dependency, and professional networks cannot be perfectly detected. The system should make capture harder, more visible, less sufficient, and reputationally costly, not pretend it can eliminate all informal influence.

## Decision

The attack is founded but not fatal. The architecture already contains the correct direction. Phase 3 should formalize fiscalizer quality/capture indicators and report sufficiency requirements.
