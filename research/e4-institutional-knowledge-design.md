# E4 Design — Institutional Knowledge Aggregation Under a Common World

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Status

Pre-registered experiment design. Written before implementation and before any
run; the Predictions section is committed in advance as an honesty device, per
the corpus's adversarial discipline. Motivated by an author critique of E2:
the "planner" was an exogenous oracle-correlated signal while citizens carried
social proof but no knowledge, so E2 could not — and should not be read to —
compare central versus distributed knowledge aggregation. E4 models knowledge
symmetrically and lets institutions differ only in how they aggregate it.

## The question

Holding the world and the total dispersed knowledge in it fixed, which
institutional arrangement produces better allocation quality: a
bandwidth-constrained central planner, a tutored mix, or open scope
construction that aggregates citizen signals — and how does the answer change
with scale?

## World (common to all regimes)

- Projects: N_p ∈ {40, 200, 1000}. Latent quality θ_j ~ U(0,1); salience s_j
  as in E1-E3 (measured corr(θ, s) ≈ 0.24). Funding targets scaled so the
  aggregate target always absorbs 3× the budget flowing in a project lifetime
  (scarcity held constant across scales to isolate the knowledge effect;
  disclosed simplification — real larger scopes may hold larger, not more,
  projects).
- Citizens: 10,000, budget as in E1-E3, funding-target closure caps ON.

## Knowledge endowments (identical across regimes)

- **Citizen signals (dispersed knowledge).** Each citizen is informed with
  probability π = 0.3. An informed citizen draws a personal neighborhood of
  k_c = 4 projects, sampled with probability proportional to (1 + s_j) —
  coverage is salience-biased by design, because real local knowledge
  clusters around visible projects; this is a result-determining assumption
  and is varied in sensitivity runs (uniform coverage as comparison).
  Signal: ŝ_ij = θ_j + Normal(0, σ_c), σ_c = 0.35 — individually poor
  knowledge.
- **Planner knowledge (endogenous, bandwidth-constrained).** The planner
  inspects K = 30 projects (fixed across scales — the bandwidth assumption),
  selected with probability proportional to (1 + s_j) (triage by
  visibility, symmetric with citizen coverage bias). Inspected projects:
  signal noise σ_p = 0.10 (deep inspection beats any single citizen).
  Non-inspected projects: no signal; estimate falls back to the prior mean
  0.5. The planner's weight vector w_planner is its per-project estimate.
  **The previously dialed r is now measured output**: corr(θ, w_planner) is
  printed per condition.

## Regimes (institutions differ; world and signals do not)

- **R1 — Pure central (status-quo analog).** d = 100%: all budget follows
  defaults on w_planner. No citizen input. This is the endogenous-knowledge
  version of the missing baseline identified in review.
- **R2 — Tutored mix (E2 structure, endogenous planner).** d = 80% defaults
  on w_planner; the remaining 20% of citizens act on their own signals if
  informed, or on the salience discovery surface if not.
- **R3 — Distributed uncoordinated.** No defaults. Informed citizens fund
  their best private-signal project (caps apply); uninformed citizens follow
  the salience discovery surface as in E1.
- **R4 — Open scope construction (the Hayek arm).** The weight vector is
  built from the dispersed signals themselves: w_open_j = precision-weighted
  mean of all citizen signals on project j (prior 0.5 where no signal
  exists); corr(θ, w_open) printed. Defaults d = 80% follow w_open;
  the active 20% behave as in R2. Institutions identical to R2 except who
  constructs the weights.
- **R5 — Open construction under social proof.** R4, but reported signals
  and active-citizen funding are contaminated by visible funding progress
  (herd term mixed into the signal at weight η_h = 0.5): tests how much
  cascade contamination degrades emergent weights — the independence
  precondition of collective wisdom, made measurable.

## Metrics

Per condition, mean ± sd over 20 seeded runs: sel(θ), quality gap, funded
rate, Gini, corr(θ, w_planner), corr(θ, w_open), and tail coverage (share of
bottom-salience-quartile projects carrying at least 3 signals / planner
inspection).

## Pre-registered predictions (committed before first run)

1. **Scale crossover.** At N_p = 40, R1/R2 (central knowledge) match or beat
   R4 — the planner's bandwidth covers most of the world. At N_p = 1000,
   R4 beats R1/R2 — 30 inspections cannot compete with ~12,000 dispersed
   signals, even individually noisy ones. The crossover between 40 and 1000
   is the experiment's headline number.
2. **Independence is the binding precondition.** R5 degrades materially
   relative to R4 at every scale; if the degradation swamps the scale
   advantage, the honest conclusion is that open construction requires
   independence-preserving elicitation, not that it fails.
3. **The neglected tail is institution-independent.** Both w_planner and
   w_open will be weakest on low-salience projects (coverage bias is
   symmetric), reproducing A024's pathology in both regimes — protected
   floors remain necessary under either institution.
4. **R3 underperforms both anchored regimes** at all scales: dispersed
   knowledge without an aggregation mechanism is wasted — the Hayek argument
   is about aggregation institutions, not about the absence of institutions.

If the runs contradict these predictions, the predictions stay recorded and
the contradiction is reported as a finding.

## What E4 replaces in the paper

E4 subsumes the E2 reframing: §6 stops speaking of "planner knowledge" as a
dialed constant and reports institutional comparison under a common world;
the A020 reading becomes "scope-construction quality is the binding
constraint, and whether open construction can supply it is now measured, not
assumed." The abstract's negative phrasing about citizen attention is scoped
to what E1-E3 actually tested (attention and social proof, not dispersed
knowledge).
