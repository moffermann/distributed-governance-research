# Adversarial critique of the v1.14 design sketch — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master).

Read `audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md`. It proposes reframing the retired-multiplier work (E4)
as a **mechanism-governed surface Δ(θ)** — global sensitivity analysis of a distributed-vs-central delivered-value
advantage — reporting a floor, a sensitivity structure, and conditional intervals, instead of a fixed multiplier.

## IMPORTANT — use several subagents / fan out in parallel
Spawn multiple parallel subagents, one per critique dimension below. Do NOT do this in one linear pass. Each
subagent writes its own critique file; then synthesize.

## Context you must respect (settled)
The project is on Path B: the calibrated multiplier (~2×/2.2×) is RETIRED because it was indefensible — it
depended on posited, unmeasured asymmetries (see `research/claim-and-estimand-contract.md`, the symmetry gate
NO-GO at `scripts/simulation/e5-sp-symmetry-gate.mjs`, and `audits/2026-07-10-round*/`). v1.14 must NOT resurrect
that failure mode in disguise. English `drafts/paper.md` is authoritative. The theoretical primitives (F = latent
random utility; G = planner's biased belief) and their references (Stevens 1946, Bollen 2002, McFadden 1974,
Stiglitz 2017, Charité–Fisman–Kuziemko 2015, Ross et al. 1977) are given in the sketch.

## Critique dimensions — one subagent each
1. **Theory & primitives.** Are F, G, the aggregation A, and the "no guarantee G=F" claim rigorously and honestly
   stated? Missing steps (interpersonal comparability / Robbins–Arrow; scale type / Stevens implications for
   summation)? Are the cited references used correctly and sufficient?
2. **Parameterization & identifiability.** Does the θ vector honestly capture the F↔G relationship, or does it
   smuggle the conclusion in through modeling choices? Are the parameters identifiable/separable, or confounded?
   Is anything load-bearing missing (e.g. correlation between b and ρ_proxy; endogeneity of participation)?
3. **Range provenance & the "invented range" trap.** For each θ_i tagged MEASURED, is that defensible *before any
   pilot/new data*, or aspirational? Which are truly measurable now vs assumed? Does the **floor** claim rest on
   measured ranges or on assumed ones? Can an adversary set plausible ranges that make the floor meaningless?
4. **Sensitivity method & the floor.** Is variance-based Sobol appropriate given likely correlations among θ_i
   (Sobol assumes independent inputs)? Better alternatives (Shapley effects, scenario analysis, the analytic
   parity-locus β=1−η from E4-v4)? Can Δ ≤ 1 (central wins) inside the plausible region — and if so, is the honest
   headline "sometimes the status quo wins", not a floor > 1?
4b. Reproduce/inspect the existing gate + E4 code to ground the critique in what the engine actually computes.
5. **Honesty guardrails / retired-multiplier relapse.** Does the conditional "state X → 2.2× [CI]" framing reopen
   the retired failure mode? Are the MC-interval and model-internal caveats sufficient? Where could a reader be
   misled into reading a real-world magnitude?
6. **Novelty & publishability.** Is this more than "we ran global sensitivity analysis on a stylized model"?
   What is the genuine contribution, and against what prior art (uncertainty quantification of mechanism-design
   simulations, robustness-of-comparative-institutional-advantage)? What would make it a real contribution vs a
   methods exercise?

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-<dimension>.md` (verdict + specific, quotable issues
ranked by severity + concrete fixes). Then write `audits/2026-07-11-v1.14-design/CRITIQUE_SUMMARY.md`:
- overall verdict: is the reframe **honest and formalizable as-is / with changes / not viable**?
- the must-fix issues before pre-registration, ranked;
- the single sharpest improvement to the framing;
- an explicit yes/no on whether it risks resurrecting the retired multiplier.
Be adversarial and specific; cite real file:line where relevant. A short list of true problems beats a long list
of nits. Do not rubber-stamp it.
