# Agent-Based Simulation: Attention-Constrained Allocation

## Status

Computational companion to Model 3 of [[formal-models|research/formal-models.md]]. Code:
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
and the dominance of the weight vector's informational quality over
attention, not the point values; and the default-follower rule is a deterministic θ-correlated
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

## E4 — Institutional knowledge aggregation under a common world

Pre-registered in `research/e4-institutional-knowledge-design.md` before any
run; raw output in `research/e4-raw-output.txt`. E4 corrects a framing
limitation of E2 identified in author review: E2's "planner" was an
exogenous oracle-correlated weight vector while citizens carried social
proof but no knowledge, so E2 could not compare knowledge-aggregation
institutions. In E4, knowledge is modeled symmetrically — a
bandwidth-constrained planner (30 deep inspections, noise 0.10, prior 0.5
elsewhere; its corr(θ, w) is now measured output, not a dial) and dispersed
citizen signals (30% of citizens hold 4 noisy local signals each,
σ = 0.35, coverage salience-biased) — and five regimes differ only in the
aggregation institution, over N_p ∈ {40, 200, 1000} projects with scarcity
held at 3×.

| scale | R1 pure central | R2 tutored mix | R3 uncoordinated | R4 open construction | R5 open + social proof |
|---|---|---|---|---|---|
| N=40, sel(θ) | 0.624±0.100 | 0.605±0.093 | 0.456±0.074 | **0.762±0.064** | 0.741±0.075 |
| N=200, sel(θ) | 0.138±0.071 | 0.165±0.066 | 0.239±0.020 | **0.764±0.023** | 0.762±0.023 |
| N=1000, sel(θ) | 0.036±0.036 | 0.036±0.030 | 0.106±0.012 | **0.727±0.017** | 0.730±0.016 |
| planner corr(θ,w) | 0.805±0.059 | → | 0.371±0.030 | → | 0.166±0.012 |
| open corr(θ,w) | 0.997±0.001 | → | 0.988±0.002 | → | 0.938±0.004 |

(The corr rows read across scales: planner correlation collapses
0.81 → 0.37 → 0.17 as the world outgrows fixed bandwidth; the open vector's
correlation stays 0.94–0.997, degrading only as √(signals per project).)

**Findings against the pre-registered predictions:**

1. **Prediction 1 (scale crossover) FAILED in the informative direction:
   there is no crossover — open construction wins at every tested scale,
   including N=40 where the planner inspects 75% of the world.** Twelve
   thousand individually poor signals (σ = 0.35) average into a
   near-perfect weight vector; thirty good inspections cannot compete even
   locally. The scale effect appears as degree, not as a crossing: fixed
   central bandwidth decays toward randomness (sel(θ) 0.04 at N=1000) while
   aggregation is nearly scale-invariant.
2. **Prediction 4 HELD strongly: dispersed knowledge without an aggregation
   institution is wasted.** R3 — the same signals, no aggregation — funds
   0.6–15% of projects (uncoordinated contributions spread too thin to
   close targets) with sel(θ) 0.11–0.46. The Hayekian result is precisely
   institutional: it vindicates aggregation mechanisms, not the absence of
   mechanism. Core v0's default-plus-caps layer is such a mechanism; E4
   says what to feed it.
3. **Prediction 2 (independence binding) held only weakly.** Social-proof
   contamination at mixing 0.5 (R5) degrades the open vector's correlation
   (0.997→0.911 at N=40; 0.938→0.871 at N=1000) but barely moves sel(θ),
   because the herd term — visible funding progress — is itself
   quality-correlated in a system whose weights are already good: the
   cascade partially transmits information, echoing E2s. The honest caveat
   is that only *endogenous* contamination was tested; a common-mode bias
   uncorrelated with quality (misinformation, identity-driven allocation
   per A031) would not average out, and is untested.
4. **Prediction 3 (institution-independent neglected tail) FAILED:** under
   the tested mild coverage bias (∝ 1+s), citizen signals cover ~100% of
   the bottom-salience quartile at all scales while planner tail coverage
   collapses (0.70 → 0.02). Tail neglect is institution-dependent, and
   favors aggregation. A stronger participation clustering could reverse
   this; the sensitivity run (uniform vs salience-biased coverage at
   N=200) showed no measurable difference at this bias strength.

**Reading.** The binding variable is not who holds the pen but how much
dispersed information the scope-construction institution ingests. R2 versus
R1 confirms E2's attention finding in the corrected frame: a 20% active
layer cannot compensate weak weights. R4 versus R2 — identical institutions
except the origin of the weight vector — is the experiment's core
comparison, and it favors open construction wherever unbiased dispersed
signals exist and an aggregation mechanism collects them.

**Result-determining assumptions, declared.** Citizen signals are unbiased
(θ plus noise): aggregation defeats noise by averaging, but would not
defeat systematic bias, and real citizen beliefs can be biased, not merely
noisy. Signal elicitation is non-strategic: nobody misreports to steer
funds — in a deployed system the A004/A030 gaming and clientelism surfaces
apply to signal reporting, and elicitation mechanics in open mode remain
gated by A023. The informed share (30%) and signal noise are plausible, not
calibrated. These assumptions bound the claim: E4 shows open scope
construction is viable and scale-robust *given honest, unbiased, collected
signals* — designing the collection mechanism that keeps them honest is
the open problem the corpus already names.

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
4. E4 sharpens point 3 into a constructive direction: the quality of the
   weight vector is the binding constraint *whatever institution constructs
   it*, fixed-bandwidth central construction does not scale, and aggregated
   dispersed signals do — provided an aggregation institution exists (R3)
   and signals are honest and unbiased (declared assumption). Open scope
   construction moves from assumed impossibility to measured viability
   with named preconditions; its elicitation mechanics remain gated by
   A023.

## Limitations

θ is exogenous and observable to evaluators without error; no strategic
project creation, no collusion, no delegation dynamics; salience is static
apart from social proof; parameter choices (pool size, slots, η, scarcity)
are plausible rather than calibrated to a specific PB dataset — directions
and orderings, not point values, are the findings. Replication across
seeds is deterministic.
