# E4-v3 — Specification and Pre-registered Confirmatory Predictions

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Status and honesty disclosure
This **supersedes E4** (`e4-institutional-knowledge-design.md`) and its first
correction E4-v2 (`e4-v2-fair-comparison-design.md`); it is the confirmatory
rebuild behind **Finding 4** and the paper's "distributed choice delivers more
value" effect (the **+53%/1.5×**, `drafts/paper.md:29-34` — NOT the +43%
incentive layer). Value primitives follow `value-model-core-v0.md`; the decisive
parameter γ is defended in `e4-v3-gamma-literature.md`.

**Not a literal pre-registration.** Exploratory sweeps were already run on seeds
2000–4000 (`e4-v3-value-matrix.mjs`, `-sensitivity.mjs`, `-variance.mjs`,
`-scenarios.mjs`); those results informed this design. What is honest and still
scientifically useful: this document **locks** the design, the parameter box, and
a set of **directional predictions**, which are then re-tested on **held-out seeds
(base 5000+)** that played no role in the design. If the predictions hold on fresh
seeds, the pattern is not a seed artifact. Magnitudes remain model-internal
(parameterized); the confirmatory test is of **direction and regime**, not of any
exact multiplier.

## The question
Holding each project's true social value `N_j = Σ_i N_ij` fixed, which institution
steers a fixed budget toward high-N projects better — a **scalable central**
institution that perceives only a noisy, demand-biased proxy of aggregate value
and attenuates the harm it perceives (γ), or the **distributed revelation** of a
participating sample of citizens' own subjective valuations — and how does the
answer depend on the central's harm-perception (γ), the heterogeneity of
valuations (σ_V), the average sentiment (cell mean), and participation (p)?

## World (locked)
- **N = 3000 people, K = 300 projects.** Sparse value matrix. Each project j has
  an **interested set** I_j — a random subset of the N people, size varying
  (each person joins with prob ∈ [0.1, 0.7] drawn per project). For i ∈ I_j,
  **V_ij ~ Normal(mean, σ_V)**; for i ∉ I_j, V_ij = 0 (indifferent — the project
  neither helps nor harms them). **Value has no objective component** and can be
  negative (the chess-kid). True project value = column sum `Σ_i V_ij`, which can
  be net negative.
- **Shape justification (from the CLT result):** at ~1200 interested per project,
  the *shape* of the individual distribution washes out; only cell **mean** and
  **variance** survive aggregation. Normal is therefore WLOG; the shape is a
  confirmatory prediction (P3), not an assumption to defend.
- **Costs** C_j ~ Uniform(1,10), always > 0. **Budget P = (1/3)·ΣC**, identical
  for both institutions (scarcity fixed at 3×, isolating the steering effect).

## The central institution (status quo) — locked
Perceives each interested cell through a noisy, demand-biased proxy:
> `perceived_ij = V_ij + Normal(0, σ_proxy)`; if `perceived_ij < 0` then
> `perceived_ij ×= γ`.
- **γ ∈ [0,1] = harm-perception** (0 = fully demand-blind, sees only demand not
  harm; 1 = perceives harm fully). **The decisive parameter.** γ≈0 is the modal
  case — the harm of ordinary projects is diffuse/unseen (Bastiat 1850),
  unorganized (Olson 1965; Wilson 1973 client politics), illegible to the centre
  (Scott 1998; Hayek 1945; Samuelson 1954), under-reported (Latané & Darley 1968);
  the centre also overstates benefit (Flyvbjerg optimism bias) and funds
  net-negative projects on purpose (Robinson & Torvik 2005). See the γ note.
- Perceived project value = Σ over I_j. **Central advantage:** sees *all* the
  interested (full coverage). **Central weakness:** proxy noise + harm-blindness.
- Funds greedily by perceived value / cost, skipping perceived ≤ 0, until P.

## The distributed institution (Core v0) — locked
For each project, a **participation-p random sample** of the interested set reveal
their **TRUE** V_ij (no revelation noise — a citizen who funds/objects knows their
own value; the funder is the source of value). Distributed signal = Σ over the
sample.
- **Distributed advantage:** reads true value, including the negatives (immune to
  harm-blindness and proxy noise). **Distributed weakness:** only a *sample*
  participates (sampling error); p is the second knob.
- Funds greedily by sampled value / cost, skipping net-negative (sample ≤ 0), until P.

## Scoring (locked)
For each institution's funded set, sum the **TRUE** column value delivered.
**Oracle** = fund greedily by true value / cost (best achievable) → normalizer.
Metric = true value delivered as a fraction of oracle, and the ratio
distributed / central.

## Parameter box (locked; swept, not point-picked)
world mean ∈ {0.0, 0.01, 0.02} (neutral to mildly-positive; the negative-loading
regime is explored separately) · heterogeneity σ_V ∈ {1.0, 2.0} · proxy noise ∈
{1.0, 1.5, 2.0} · participation p ∈ {0.2, 0.35, 0.5} · γ by scenario: A Normal
politics {0.0, 0.1}, B Contested {0.25, 0.5}, C Evident-harm {0.75, 1.0}.

## Pre-registered confirmatory predictions (committed; tested on held-out seeds 5000+)
1. **Distributed ≥ central across the box**, and the central's shortfall **grows
   as γ→0 and as σ_V rises** (harm-blindness, amplified by heterogeneity).
2. **Negative-mean regime:** where the typical citizen is net-harmed (cell mean
   < 0), the demand-blind central delivers **net-negative** true value (active
   harm) while the distributed stays ≥ 0 (it refrains).
3. **Shape invariance (CLT):** Normal and Beta (any skew) give the same result to
   within seed noise; only cell mean + variance matter.
4. **Scale invariance:** rescaling {mean, σ_V, σ_proxy} by a common factor leaves
   every ratio-to-oracle unchanged.
5. **Scenario ladder:** median advantage largest in A (Normal politics, γ≈0),
   smaller in B, ≈ parity in C (evident harm). Direction, on held-out seeds.
6. **Participation monotonicity:** distributed rises monotonically in p, → oracle
   as p → 1.

If a held-out run contradicts a prediction, the contradiction is recorded as the
finding (per corpus discipline).

## What E4-v3 changes in the paper
E4's "aggregated dispersed signals beat fixed-bandwidth central at every scale"
(the corner-inflated +53%) becomes a **scenario-anchored, disclosed regime map**:
distributed allocation delivers on the order of **~1.7× in the normal-politics
regime** (harm diffuse/unseen), degrading to parity only where institutional harm
becomes evident — with the whole result pivoting on γ, the parameter the
literature best supports at ≈0. Honest, degrades gracefully, and every ingredient
is cited and swept.
