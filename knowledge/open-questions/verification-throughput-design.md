# Verification Throughput Design

## Question

How does Core v0 raise and regulate the throughput of milestone verification — the resource Experiment E-1a identified as the ceiling of the entire delivery pipeline — without corrupting verification's anti-fraud function?

## Origin

The satellite Experiment E-1a (longitudinal engine v0.6, 2026-07-06) found that verification capacity is the pipeline's ceiling before it is the anti-fraud instrument: with scarce fiscalizer capacity no budget-release policy recovers delivered value, and over-release actively destroys it (queue, then less delivery). The author responded with two improvement proposals, extended in a recorded brainstorm to a six-instrument package. This note preserves the design direction; the quantified evaluation is pre-registered as satellite Experiment E-1c, and the package travels to the corpus through the attack → defense → resolution pipeline with evidence attached (the A041 pattern), at the author's verdict.

## Author design direction (recorded 2026-07-06)

**Instrument 1 — verification windows (author's proposal, corrected in discussion).** Fiscalization is the only pipeline actor without a clock (docs/58 gives the authority declared windows with silence consequences; [[104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION|docs/104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION.md]] expires closure deadlines) — an asymmetry E-1a made visible. Design rules fixed in the discussion:

- Fines apply **only to contracted fiscalizers** paid from the control budget (docs/40, docs/52) — a contractual SLA. Fining volunteers would collapse the already-thin control market (A022).
- **Volunteers get timeout → automatic reassignment** of the milestone plus a reputational record of the timeout ([[107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION|docs/107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION.md]]: informs, never excludes).
- **The rubber-stamp counterweight is mandatory**: deadline pressure with no accuracy consequence produces fast wrong approvals — corrupting the anti-fraud instrument to save latency. Every window regime ships with random re-verification sampling and symmetric consequences: lateness costs, negligence costs more.
- Queueing honesty: timeouts bound the *tail* (stragglers), they do not add servers. Capacity instruments raise the mean.

**Instrument 2 — AI fiscalizer as triage, not replacement (author's proposal, architecture fixed in discussion).** Evidence contracts already require evidence that is measured and quantifiable against the value thesis, so a large class of verification is machine-checkable by construction (geolocation, timestamps, document completeness, invoice-price cross-checks, computer vision on physical progress, signed sensor data). The AI tutor already lowered the citizen side's participation cost; this is the same thesis move on the control side. Three lanes:

1. **Auto-release**: the AI verifies every milestone instantly; high-confidence results in *protocolizable evidence classes* release the tranche automatically — the same demarcation rule as [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]]: what can be protocolized enters the automatic lane; what cannot stays human.
2. **Referral with dossier**: unresolved or anomalous cases route to a human fiscalizer with the AI's analysis attached — multiplying human productivity per verification, not merely offloading.
3. **Unconditional human sampling**: a random share of AI-approved milestones is always re-verified by humans — measuring the AI's error rate continuously, catching drift and gaming, and keeping every approval contestable.

Guardrails carried from the corpus: the verifier model is **published, versioned, and contestable** — a model change is a material rule change under the docs/57 discipline; the AI's operator must not be judge and party ([[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]]); and the declared boundary: an AI verifier is a **new attack surface** (adversarial evidence, staged imagery) — lane 3 and evidence-producer diversity mitigate, never eliminate.

**Instruments 3–6 (from the brainstorm).**

3. *Published, release-coupled verification capacity*: each scope publishes its capacity and current queue (the docs/111 pattern applied to throughput), and the E-1a pull release rule couples to it mechanically — freezing becomes visible before it happens.
4. *Verification demand smoothing*: the platform staggers milestone due dates across projects to flatten the fiscalization demand curve — pure scheduling, near-zero cost.
5. *Dynamic verification pricing and cross-scope pools*: queue growth raises the per-verification fee (paid from the control budget), pulling in elastic supply; remote evidence lets fiscalizers verify across scope boundaries, federating a thin market.
6. *Self-verifying evidence at the source*: evidence contracts privilege machine-verifiable formats (signed, geotagged, structured); unstructurable evidence pays a higher control budget — lowering cost per milestone at the source.

**Package logic**: instruments 2 and 6 raise the ceiling (multiply capacity); 1 and 4 fix the queue (variance and peaks); 3 and 5 make the system self-regulating (visibility and elasticity).

## Scope classification

Deployment-layer and control-market design over existing objects (evidence contracts, control budgets, fiscalizer roles, operating configuration). No new powers, no exclusion mechanisms, no change to who may verify. The AI verifier's certification authority is bounded by the protocolizability demarcation and lane 3's sampling.

## The verifier-displacement problem and the second-instance design (author, recorded 2026-07-06)

After E-1c/E-1b confirmed the AI triage design, the author identified its institutional side effect: **an AI verifier is a powerful competitor to human fiscalizers — it collapses both the cost of fiscalization and the incentive to fiscalize**, and that breaks several Core v0 assumptions at once: the distributed fiscalization ecosystem (H016) assumes a living human control market; the fiscalizer offer flow (docs/23) assumes the role is worth offering into; the thin-control-market analysis (A022) assumed scarcity, not displacement; control-budget pricing (docs/40, docs/52) assumed human fees as the price signal; the distributed accountability loop (H008) treats citizens-watching as *constitutive*, not merely instrumental; and — the sharpest edge, from E-1c's own finding — lane 3's human sampling is the **epistemic instrument that measures the AI**: if the human profession exits, the system loses the only tool that knows the machine's real error rate. The auditors of the AI must exist for the AI to be auditable.

**Author's solution direction:** human fiscalization always enters as a **second instance** — auditor of the AI and of the verification system — rather than as a first-pass competitor.

**Recorded design (proposed in discussion, pending quantified evaluation and pipeline formalization):**

1. **Role reframe.** The human fiscalizer's job becomes second-instance auditing: re-verifying sampled AI verdicts, investigating flags and anomalies, handling complaint-triggered reviews (docs/26, docs/79), and calibrating the verifier — a profession whose object is the verification *system*, not the milestone queue.
2. **The incentive fix is a budget rule, not a price.** The displacement collapses incentives only if human fiscalization competes with the machine's near-zero price. It must not: the control budget carries a **published floor share for second-instance human auditing** — AI savings re-allocate toward the human audit layer, never below the floor. Human audit demand becomes a mandated institutional complement, not a substitutable service. This is the complements-not-substitutes discipline of [[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]] promoted to the control labor market.
3. **The frontier: universal exposure, selective inspection.** The author's open question — must the human second instance cover every project? — resolves the way audit institutions already resolve it: deterrence requires universal *exposure*, not universal *inspection*. Every disbursement faces a nonzero, published probability of human second-instance review (the random floor `s_min`); the **mandatory set** (probability 1) is defined by: (a) non-protocolizable evidence classes (the docs/110 demarcation — already human-first); (b) stakes above a scope-published threshold; (c) executors with thin or absent track record; (d) AI-flagged anomalies; (e) complaint-triggered reviews — any formal complaint forces a human instance; (f) **post-model-change windows** — after any verifier model update (a material rule change under the docs/57 discipline), elevated sampling until recalibration. The sampling plan is a published object in the scope configuration, the docs/111 pattern applied to audit coverage.
4. **The floor is set by epistemics, not by leak-plugging.** E-1c measured that deterrence held at a 5% sample under an intact stack; the binding constraint on `s_min` is **drift-detection latency** — time-to-detect a degrading or gamed AI scales inversely with (sample rate × audited exposure), so the floor is chosen for how fast the deployment must notice a bad verifier, not for how much leak it catches.
5. **Citizen voluntary fiscalization is not displaced — it is upgraded.** It never competed on price (it was never paid); with AI dossiers attached, the cost of citizen watching falls (the AI-tutor move on the control side), and the citizen's role sharpens into auditing the auditors. The offer flow (docs/23) stays open.

Declared consequence for the E-1c finding: the AI lane's lax accuracy requirement was already conditional on an intact deterrence stack (E-1b: verification is downstream of deterrence); this section adds the second condition — **an intact human audit layer**, which is what keeps the accuracy measured at all.

## Status note

Recorded direction, not resolved design. Quantified evaluation pre-registered as satellite Experiment E-1c (AI-triage dominance threshold, timeout-reassignment value, package interactions) — executed 2026-07-06 with E-1b; the verifier-displacement design above awaits its own evaluation (candidate: supply-exit dynamics with an endogenous fiscalizer market) and pipeline formalization, at the author's verdict.
