# Machine-Assisted Verification, the Human Second Instance, and A043 Resolution v0

## Status

Accepted resolution:

- Attack: [[A043-verification-displacement-and-collusion|attacks/A043-verification-displacement-and-collusion.md]]
- Defense: [[D043-verification-displacement-and-collusion|defenses/D043-verification-displacement-and-collusion.md]]

Author verdict (2026-07-07): accepted with the collusion scope made explicit. Sourced from the satellite Experiments E-1c/E-1d, F (five-family panel), and G (collusive adversary), doi:10.5281/zenodo.21246089. P007 bounded integration on existing objects (evidence contracts, control budget, fiscalizer roles, complaint path).

## The problem A043 named

Machine verification of protocolizable evidence is near-free and multiplies fiscalization capacity — which creates three risks the corpus had not resolved: (a) it **displaces** the human fiscalizer market whose sampling is the machine's only audit; (b) an imperfect machine verifier could pass fraud; (c) a **colluding ring** could bypass the whole verification layer. The satellite measured all three.

## Rules added to Core v0

**1. Machine verification is triage; humans are the permanent second instance.** Machine verifiers process every milestone; protocolizable evidence classes with high machine confidence auto-release, everything else routes to humans with the machine's analysis attached. The human layer never competes with the machine on price — it audits the machine. Its cost is carried by a **published control-budget floor** (machine savings re-allocate to the human audit layer; the floor is a mandated complement, set and enforced by a party other than the audited authority).

**2. The lax machine-accuracy requirement is conditional on an intact deterrence stack.** The panel found that even a verifier passing ~22% of judgment-requiring fraud produces leakage indistinguishable from pure-human verification *when the docs/111 deterrence margin is positive* — because the cascade removes the diversion *attempts* upstream. A positive published margin (docs/111) is therefore a precondition of the automatic-approval lane. The binding machine-design problem is specificity, not fraud detection: operating points are steerable, and evidence contracts should include objective comparison references (market benchmarks, duration bands, thresholds) so verifiers judge rather than guess — **judgeable by construction**.

**3. Coverage: universal exposure, selective inspection, with the selection unpredictable.** Every disbursement faces a nonzero *published probability rate* of human second-instance review; the *selection* is held unpredictable and unpublished (procedural surprise is part of the deterrent). The mandatory (probability-one) set: non-protocolizable evidence classes, stakes above a scope threshold, executors with thin track records, machine-flagged anomalies, complaint-triggered reviews, post-model-change windows, and **the flaw classes where model families fail together** (the panel's shared blind spot). Coverage is set on a *value-weighted* basis, not project count.

**4. The epistemic instrument is seeded positive controls, conditional on their indistinguishability.** Because a healthy system's outcome audit is blind (near-zero true positives), drift and capture are detected by known-answer probes injected at rate *q* (latency ∝ 1/(q·π)) — but only if the probes are indistinguishable from real cases, which the public project registry makes hard; seeds must therefore be real projects with planted violations, the seed manifold secret and rotated, and the seeding party organizationally separate from the verifier-operator.

**5. Contraposed citizen evidence is a control instrument — bounded by contributor independence.** Independent evidence producers with interests opposed to the executor, validated at ingestion, collapse fraud by anticipated contradiction. But this holds **only against a non-colluding adversary**: Experiment G showed a colluding ring that captures or silences the contributor layer produces no contradiction, halving the rescue. Contraposition's power equals the *independence* of the contributor layer, so that independence must be established (Sybil-resistance, opposed-interest attestation), confirmation must be non-suppressive (agreement never lowers the sampling floor), and contradiction-filing is bonded against griefing.

**6. Cross-layer collusion resistance is first-class.** Experiment G found collusion the only attack to move leakage by an order of magnitude, because it bypasses the per-milestone deterrence inequality (the ring diverts, its verifiers clear, its contributors stay silent — protection becomes the minimum, not the product). Verified beneficial ownership / identity prevents shell-cycling; the assigner, seeder, and floor-setter are decentralized and adversarially reviewed (capturing the *root* routes fraud to a captured reviewer); and the docs/111 margin and the human floor are sized against a *collusion* threat model, not only a rational single actor.

## Macul example

A plaza milestone's photo-and-invoice bundle is machine-checked instantly: geotag, timestamp, permit, price-vs-benchmark all pass with high confidence → the tranche auto-releases, no human touched. A community-center-roof milestone with a novel evidence class routes to a human with the machine dossier. A neighbor uploads a photo contradicting the declared completion → a human instance is summoned. A known-answer sting (a real project with a planted violation) tests whether the verifier catches it → drift measured. And a high-value award to a thin-history contractor whose beneficial owner cannot be verified sits in the mandatory human set regardless of what the evidence shows.

## Citizen simplicity

Citizens gain a channel (contribute evidence on projects they follow) and lose nothing. The verifier's error rate, the coverage rate, and the control-budget floor are public; the selection of who gets inspected is not.

## Scope boundary and limitation

P007 bounded integration over existing objects. It does not certify any real AI model (accuracy is a measured requirement per deployment, established against the seeded controls); it does not claim coverage over fraud absent from the evidence (physical quality-below-spec, pre-contract collusion, quantity fraud remain fully human and are out of the machine layer's reach); and "court-grade" means tamper-evident and provenance-attested at capture — admissibility and weight still require chain of custody, contradiction, and expert testimony.

## Residual risks

- Seeded-control indistinguishability against a captured operator who reads the public registry — mitigated by real-project stings, not eliminated.
- Contributor-layer capture under collusion — mitigated by Sybil-resistance and non-suppressive confirmation, bounded by how independent the layer really is.
- Root capture of the assigner/seeder/floor-setter — mitigated by decentralization and adversarial review; the single biggest residual, and the reason the human corps must be sized as a *security* parameter, not only an efficiency one.

## Integration target

- docs/110 (semi-open) and docs/111 (margin) are referenced as preconditions — done.
- The manuscript's implementation pathway (Section 9) carries the machine-verification / second-instance / contraposition material — applied in v1.9; the collusion scope is added at the next version (v1.10 queue).
- The verification-throughput open-question note records the full design direction; the satellite traceability matrix gains the anchor.
