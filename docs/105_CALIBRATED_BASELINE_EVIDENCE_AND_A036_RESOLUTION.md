# Simulation Reporting Rule, Audit-Anchored Baseline Evidence, and A036 Resolution v0

> **⚠️ CONTROLLING UPDATE (2026-07-10).** This resolution named the **E7** experiment as the headline's
> arbiter. E7 is now **superseded**: a later pre-registered **symmetry gate (NO-GO)** is the current arbiter
> — it retired the calibrated multiplier (the distributed selection advantage is small, ~0.026 of a
> full-information benchmark, below its 0.05 gate). The reporting rule below still stands; the "E7 sets the
> headline" framing does not. Controlling spec: `research/claim-and-estimand-contract.md`.

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A036-opaque-baseline-calibration-strawman|attacks/A036-opaque-baseline-calibration-strawman.md]]
- Defense: [[D036-opaque-baseline-calibration-strawman|defenses/D036-opaque-baseline-calibration-strawman.md]]

## Resolution decision

A036 is founded in presentation and calibration and partially founded in substance. The author's review sharpened the attack's core beyond the defense's framing: the real complaint is that the opaque arm's numbers were produced from the research effort's own sleeve — literature-informed, but chosen — and the answer to that complaint is not argument but *sourcing*. The accepted resolution therefore has three parts: a binding simulation-reporting rule effective immediately; an **audit-anchored baseline evidence program** that grounds the status-quo arm in the published findings of supreme audit institutions and program-evaluation bodies across multiple countries and political orientations; and the pre-registered E7 experiment ([[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]]) as the headline's arbiter, with its committed withdrawal condition unchanged.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this integrates as method — a reporting rule and an evidence base — and bounds the substantive question by delegating it to a pre-registered test rather than to editorial judgment. [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]] is recorded as binding symmetrically: the corpus's self-comparisons face the same real-practice standard its critics face.

## Rules adopted

**Simulation reporting rule (effective immediately, all surfaces):**

- no simulation figure appears in any abstract, conclusion, or derivative document without an in-model qualifier and its named baseline;
- the E5 zero-control arm is renamed **zero-control lower bound** everywhere; "status quo" is reserved for the audit-anchored calibrated baseline;
- headline multipliers carry propagated paired confidence intervals; percentage headlines are never juxtaposed with absolute-unit intervals;
- the methods section records the P001 symmetry clause.

**Audit-anchored baseline evidence rule (precondition for running E7):**

- the calibrated baseline's parameters (detection, recovery, retention practice, execution deficiency rates, reported-versus-real completion) must be justified from a documented evidence base of **published audit-institution and program-evaluation findings**, not from the research effort's judgment;
- the evidence base must span **several countries and different political orientations** — candidate sources include Chile (Contraloría General de la República audit reports; DIPRES ex-post program evaluations), Brazil (Tribunal de Contas da União), Mexico (Auditoría Superior de la Federación), Peru and Colombia (Contralorías Generales), Argentina (Auditoría General de la Nación), the United States (GAO improper-payment and program-audit series), the United Kingdom (National Audit Office value-for-money studies), and the European Court of Auditors — so that no single administration, region, or political color drives the band;
- each evidence item is cited with institution, report, year, program type, and the measured deficiency it contributes; the resulting band and the chosen operating point inside it are declared in the E7 write-up;
- category matching is mandatory: construction and infrastructure findings calibrate construction arms; cash-transfer findings calibrate transfer arms; the two are never blended into one anchor.

**Arbiter clause:** E7's pre-registered predictions and its committed withdrawal condition stand unchanged; its results, whatever they are, set the manuscript's v1.7 headline.

## Macul example

After this resolution, the Macul multi-court example's delivered-value claim reads: "in the model, against a baseline calibrated to published comptroller findings on municipal works execution, the verified regime delivers X% more per peso" — with the comptroller reports cited where the parameters are declared. A skeptical Macul councilman who asks "says who?" is pointed to his own country's audit institution, and to four others of different political color saying the same thing.

## Citizen simplicity

Derivative documents (the essay and the plain-language explainer) state every figure with "in the model" and one plain sentence naming the comparison: "compared against how audited programs actually performed, according to the comptroller reports of several countries." No methodology on the citizen surface; the full evidence base lives with the E7 design.

## Transparency and accountability effect

The corpus now holds itself to the standard it imposes on projects: a claim is only as good as its declared evidence need and the independent source that satisfies it. The status-quo characterization stops being the author's assertion and becomes a cited synthesis of what audit institutions — the incumbent system's own control organs, across governments of different colors — have already published about program execution. The strongest possible answer to "strawman" is the incumbent's own auditor.

## Scope boundary and limitation

Core v0's mechanisms are untouched; this resolution governs the research method. The corpus does not claim to have measured any specific administration: the audit-anchored band is a synthesis of published findings, subject to the detection biases of audit itself, and calibration against a specific participatory-budgeting or procurement dataset remains the declared next phase. E7's predictions were committed before this resolution and are not revised by it; the evidence program feeds the arm's parameterization, recorded as a dated pre-run amendment in the design document.

Limitation statement: audit reports measure *detected* deficiencies — they may understate leakage that audit never finds, and overstate typical performance by sampling programs already suspected of failure; the evidence base declares this bias in both directions rather than pretending the band is neutral.

## Residual risks

- The audit-report evidence base may prove heterogeneous enough that the band remains wide, and the chosen operating point will still involve judgment — now documented judgment inside a cited band, but judgment.
- The headline multiplier may not survive E7 against the audit-anchored baseline; the withdrawal condition makes that outcome publishable rather than fatal, but the v1.6 headline stands in public until v1.7.
- Multi-country sourcing invites the inverse objection — that no single jurisdiction matches the blended band; the category-matching and per-item citation rules are the mitigation.

## Integration target

This resolution should inform the manuscript's abstract, Finding 5, and conclusion (reporting rule); research/simulation-results.md and the E5/E7 design documents (relabeling, evidence base, pre-run amendment); the publishable model's tested-so-far section; the essay and plain-language derivatives; and the literature map, which gains an audit-institution sources section when the evidence base is assembled.
