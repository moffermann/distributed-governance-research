# Agent-Based Simulation: Attention-Constrained Allocation

## Status

Computational companion to Model 3 of `research/formal-models.md`. Code:
`scripts/simulation/allocation-sim.mjs` (dependency-free Node, deterministic
under seed). Reproduce with:

```text
node scripts/simulation/allocation-sim.mjs --runs 20 --seed 1
```

All tables report mean ± sd over 20 seeded runs per condition.

## Method

10,000 citizens allocate one unit per monthly cycle over 24 cycles across a
standing pool of 40 projects. Each project has quality θ ~ U(0,1), salience
s (measured corr(θ, s) ≈ 0.24: viral is mostly not valuable), a planning
need-weight w constructed as a mixture w = λθ + (1−λ)u with mixing weight
λ ∈ {0.4, 0.8} — **measured Pearson corr(θ, w) ≈ 0.55 and ≈ 0.97
respectively** (λ is a mixing weight, not a correlation; the simulation
prints the measured correlations at startup), and a funding target; the
standing pool's targets absorb three
times the budget flowing during a project lifetime (6 cycles), so only a
minority of projects can complete and allocation is a genuine selection
problem. Unfunded projects expire (Expired Unfunded, doc 85).

Citizens act in three modes:

- **Evaluators** (share α ∈ {2%, 5%, 10%}): inspect a random sample of 8
  projects and fund the highest-θ with remaining room. Rational-ignorance
  levels follow participatory-budgeting experience of low single-digit
  active engagement.
- **Salience followers**: see only a 6-slot discovery surface ranked by
  salience amplified by visible funding progress (cumulative-advantage
  social proof, the A027 mechanism), and fund within it.
- **Default followers**: the system default rule (H033) concentrates their
  budget on the highest planning-priority projects, filling targets in
  priority order. Defaults never overfund.

The funding-target closure rule (H035) can be toggled: caps ON refuses
contributions beyond target and spills them to the contributor's next
choice; caps OFF lets visible leaders keep absorbing.

Selection metrics: `sel(θ)` and `sel(s)` are point-biserial correlations
between full-funding and quality/salience; `quality gap` is mean θ of
funded minus unfunded projects; `funded rate` is the share of projects
reaching their target.

## E1 — Funding caps: anti-concentration, not quality selection

Salience-driven mix (20% defaults, ~75% salience followers, α = 5%),
λ = 0.4 (r ≈ 0.55):

| condition | sel(θ) | sel(s) | quality gap | Gini | top-5%-salience share | funded rate |
|---|---|---|---|---|---|---|
| caps ON  | 0.392±0.063 | 0.546±0.060 | 0.260±0.043 | 0.732±0.006 | 0.168±0.016 | 0.253±0.013 |
| caps OFF | 0.410±0.066 | 0.478±0.042 | 0.286±0.048 | 0.759±0.008 | 0.196±0.027 | 0.219±0.012 |

**Reading (P1 partially confirmed, and sharpened).** Closure truncates the
cascade exactly as designed: concentration falls (Gini 0.732 vs 0.759), the
most salient 5% of projects absorb less (16.8% vs 19.6%), and 15% more
projects complete (0.253 vs 0.219). But quality selection does **not**
improve — the truncated surplus spills to the *next most visible* project,
not the next best one. The funding cap is an anti-concentration and
breadth device; it is not, by itself, a quality device. Quality must come
from somewhere else — which E2 identifies.

## E2 — The default anchor, not citizen attention, carries allocation quality

Caps ON throughout:

| condition | sel(θ) | sel(s) | quality gap | funded rate |
|---|---|---|---|---|
| default-anchored (d=80%), λ=0.8 (r≈0.97), α=2%  | 0.708±0.022 | 0.185±0.067 | 0.473±0.015 | 0.246±0.012 |
| default-anchored (d=80%), λ=0.4 (r≈0.55), α=2%  | 0.418±0.048 | 0.119±0.063 | 0.282±0.027 | 0.248±0.012 |
| salience-driven (d=20%), λ=0.4 (r≈0.55), α=2%   | 0.350±0.081 | 0.553±0.043 | 0.229±0.053 | 0.264±0.011 |
| default-anchored (d=80%), λ=0.8 (r≈0.97), α=5%  | 0.707±0.030 | 0.179±0.089 | 0.474±0.032 | 0.245±0.008 |
| default-anchored (d=80%), λ=0.4 (r≈0.55), α=5%  | 0.425±0.040 | 0.126±0.073 | 0.288±0.027 | 0.237±0.011 |
| salience-driven (d=20%), λ=0.4 (r≈0.55), α=5%   | 0.392±0.063 | 0.546±0.060 | 0.260±0.043 | 0.253±0.013 |
| default-anchored (d=80%), λ=0.8 (r≈0.97), α=10% | 0.702±0.025 | 0.194±0.082 | 0.465±0.023 | 0.240±0.011 |
| default-anchored (d=80%), λ=0.4 (r≈0.55), α=10% | 0.426±0.065 | 0.132±0.086 | 0.295±0.049 | 0.230±0.015 |
| salience-driven (d=20%), λ=0.4 (r≈0.55), α=10%  | 0.429±0.077 | 0.520±0.039 | 0.284±0.054 | 0.253±0.015 |

**Reading (P2 strongly confirmed).** Three orderings are stable across all
attention levels:

1. **The default anchor dominates.** A default-anchored mix with a
   well-informed planner (λ = 0.8 (r ≈ 0.97)) reaches sel(θ) ≈ 0.71 —
   roughly double any salience-driven configuration.
2. **Planner knowledge is the binding constraint.** Degrading planner
   knowledge from near-perfect to moderate (r ≈ 0.97 → 0.55) costs
   ≈ 0.29 of quality selection (0.71 → 0.42), while quintupling citizen
   attention (α 2% → 10%) moves sel(θ) by at most ≈ 0.08 in the
   salience-driven regime and essentially nothing (≤ 0.01) in
   default-anchored regimes. This quantifies why A020 — who constructs
   Planning Scopes and their weights — is the architecture's binding
   constraint: defaults are powerful, so a captured or ignorant scope
   poisons allocation quality at the root.
3. **Salience-driven regimes fund salience.** With d = 20%, funding tracks
   salience (sel(s) ≈ 0.52–0.55) far more than quality — the A024/A027
   pathology reproduced quantitatively.

### E2s — Sensitivity of the regime ordering

The default-anchored vs salience-driven ordering at λ = 0.4 (r ≈ 0.55),
α = 5%, under varied evaluator sample size and social-proof strength:

| variation | default-anchored sel(θ) | salience-driven sel(θ) |
|---|---|---|
| SAMPLE=4, η=3  | 0.409±0.058 | 0.386±0.062 |
| SAMPLE=16, η=3 | 0.403±0.056 | 0.370±0.062 |
| SAMPLE=8, η=1  | 0.406±0.054 | 0.355±0.063 |
| SAMPLE=8, η=6  | 0.435±0.049 | 0.457±0.055 |

The ordering is robust to evaluator sample size and to weak social proof.
At very strong social proof (η = 6) the two regimes converge within noise
(overlapping ±1 sd): strong amplification propagates whatever signal exists,
including the evaluators' quality-directed seeding — an information cascade
that transmits information. Two honest caveats follow: the headline
magnitudes of E2 (in particular the ≈ 2× gap at r ≈ 0.97) are
parameter-dependent and uncalibrated — the robust finding is the ordering
and the dominance of planner knowledge over attention, not the point
values; and the default-follower rule is a deterministic θ-correlated
allocator holding most of the budget, so its dominance is partly by
construction — the informative content is *how much* planner knowledge
conditions it and how little citizen attention compensates for it.

## E3 — Participation decay is survivable exactly when the anchor is strong

α decays 10% → 2% over 24 cycles; the released share flows to defaults or
to salience. Caps ON, λ = 0.4 (r ≈ 0.55):

| condition | sel(θ) | quality gap | early-cycles corr | late-cycles corr |
|---|---|---|---|---|
| d=50%, decay→default  | 0.444±0.052 | 0.296±0.041 | 0.483±0.082 | 0.294±0.076 |
| d=50%, decay→salience | 0.443±0.064 | 0.297±0.046 | 0.485±0.083 | 0.343±0.089 |
| d=20%, decay→default  | 0.409±0.081 | 0.268±0.053 | 0.456±0.095 | 0.321±0.092 |
| d=20%, decay→salience | 0.388±0.073 | 0.252±0.051 | 0.456±0.092 | 0.273±0.075 |

Because the same seeds are used across conditions, paired differences
(default minus salience destination, mean [95% CI over 20 paired runs])
are far more powerful than the marginal columns:

| anchor | Δ sel(θ) | Δ late-cycles corr |
|---|---|---|
| d = 50% | 0.001 [−0.031, 0.033] | −0.048 [−0.092, −0.004] |
| d = 20% | 0.021 [−0.028, 0.071] | 0.048 [−0.008, 0.105] |

**Reading (P3 not supported — a cleaner negative result).** The paired
analysis rejects prediction P3 as stated: the destination of decayed
attention has no reliable effect on overall selection at either anchor
strength, and the only interval excluding zero is small and
*opposite-signed* (at d = 50%, the salience destination preserves
late-cycle alignment slightly better, plausibly because amplified social
proof also propagates evaluator seeding, as in E2s). What actually governs
robustness to decay is the **level** of the default anchor — the
structural result of E2 — not where the decayed share flows. Participation
decay (A025) is buffered by the institutional layer; within-cycle quality
alignment still declines in later cycles under all conditions
(≈ 0.48 → 0.27–0.34), so decay is not free — but re-routing the leavers
is not the lever, the anchor is.

## Implications for the architecture

1. The funding-target closure rule earns its place as an
   anti-concentration device (A027), but claims that it protects allocation
   *quality* should not be made — the corpus does not make them, and the
   simulation says it should not start.
2. The system-defined default rule (H033) and automatic allocation
   profiles are not conveniences for disengaged citizens; they are the
   principal carrier of allocation quality under realistic attention. The
   architecture's honest position in D025 — designed, visible intermediation
   — is quantitatively vindicated.
3. Because defaults are powerful, whoever sets Planning Scope weights holds
   the quality of the whole allocation in their hands. The simulation puts a
   number on the A020 agenda-setting limitation: it is worth more than any
   feasible increase in citizen attention.

## Limitations

θ is exogenous and observable to evaluators without error; no strategic
project creation, no collusion, no delegation dynamics; salience is static
apart from social proof; parameter choices (pool size, slots, η, scarcity)
are plausible rather than calibrated to a specific PB dataset — directions
and orderings, not point values, are the findings. Replication across
seeds is deterministic.
