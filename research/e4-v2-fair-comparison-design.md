# E4-v2 Design — A Fair Central-vs-Distributed Comparison

## Status
Pre-registered design (written before implementation; predictions committed in
advance as an honesty device, per the corpus's adversarial discipline). Corrects
the tilt in E4 (`e4-institutional-knowledge-design.md`) flagged by the 2nd
reviewer round: (a) the central planner had **fixed bandwidth** (30 inspections
at any N) → it collapsed to random by construction; (b) citizen signals were
**unbiased by construction** → aggregation reached a near-perfect vector by
construction. Both idealizations pushed the result toward "distributed wins at
every scale." E4-v2 gives **each institution its real strength AND its real
weakness**, normalizes by cost, and sweeps the space to report a **frontier**,
not a headline. Value primitives follow `value-model-core-v0.md`.

## The question
Holding the true social value `N_j = Σ_i N_ij` of each project fixed, which
institution steers a fixed budget toward high-N projects better — a **scalable
but costly** central planner that sees only proxies of aggregate value, or the
**distributed revelation** of citizens' own subjective valuations — and how does
the answer depend on **scale (N)** and on **citizen capture (β)**?

## World (common to all regimes)
- Projects: N_p ∈ {40, 200, 1000} (scale sweep). Scarcity fixed at 3× (budget
  funds ~1/3), as in E4, to isolate the knowledge/steering effect.
- People and value: a population of citizens, each with a **type** (e.g., which
  project kinds they use). For each project j and person i, a **subjective
  valuation N_ij** drawn from the project's context: most people ≈ 0 (not
  affected), a set of **beneficiaries** with N_ij > 0 whose size/intensity
  depends on local fit, and some **dis-valuers** with N_ij < 0 (the chess-kid
  case). **True project value N_j = Σ_i N_ij.** This replaces the single θ.
- Salience s_j (visibility), corr(s, N) modest and *imperfect* — visibility is
  correlated with value but not equal to it (so proxies are useful but fallible).

## The central planner (fair — scalable, costly, proxy-bound, Hayek-capped)
1. **Scalable capacity at a budget cost.** Inspects m projects deeply (low-noise
   estimate of N_j on those), where **m is bought from the same budget**
   (each inspection has cost κ_ins → money spent evaluating is money not
   delivered). m is a decision variable (or set per condition), not fixed at 30.
2. **Triage.** Cheap proxy pre-screen on **all N** — `g(head-count,
   demographics, existing supply)` — to shortlist, then deep-inspect the top-m.
   The planner is never blind on the un-inspected tail; it has a coarse estimate
   there. (Kills the artificial collapse.)
3. **Proxy vision, not valuation.** Even a deep inspection observes aggregate
   proxies of `Σ N_ij` (how many, who), **never the individual N_ij** — so the
   planner is structurally blind to *intensity*, *local fit*, and *sign* (it
   counts the chess kid as a beneficiary).
4. **Hayekian ceiling (agency/transmission loss).** As capacity m scales (bigger
   evaluating bureaucracy), per-evaluator fidelity degrades — noise σ_p rises
   with m, or a fixed transmission loss per hierarchical layer (Hayek 1945: local
   knowledge does not aggregate up without loss). This is *why* the planner
   cannot simply buy its way to omniscience; it is the theoretical ceiling, and
   its **rate is a pre-registered parameter, swept** (not chosen to win).
5. **Lobby/salience bias (Olson 1965).** Organized-interest projects get an
   inflated planner estimate: `+ λ_lobby · organized(j)`.

## The distributed institution (fair — reveals N, but partial and capturable)
1. **Revelation.** Each citizen reveals their own N_ij for projects they
   **perceive** (near / affected) by allocating their **equal** wallet share
   (positive) or objecting (negative). Aggregate steering = precision-weighted
   sum of revealed N_ij + default routing for non-participants.
2. **Perception is local and noisy.** A citizen perceives k_c projects sampled by
   proximity/affectedness (salience-weighted), with noise σ_c on distant ones.
3. **Real weakness — strategic capture (β).** A fraction β of allocation weight
   is **coordinated by organized groups** to inflate their own projects — a
   *systematic* bias that does **not** average out (the Condorcet failure mode,
   Austen-Smith & Banks 1996). β is the second sweep axis.
4. **Silent valuers** fall to the **default layer** (equal share + near-me
   routing under mandate). Two variants: with the default (Core v0) and without
   (to isolate its contribution).

## Cost normalization (the fair fight)
Both institutions operate under the **same total budget**. The central planner's
inspection overhead (κ_ins · m) and the distributed institution's civic
infrastructure cost are **both deducted from delivered value**. The metric is
**true N delivered per peso** — the mother metric — so an institution that
"knows more" but spends more to know it is not credited for free.

## Sweeps (report the map, not a point)
- **Scale:** N_p ∈ {40, 200, 1000}.
- **Citizen capture:** β ∈ {0, 0.1, 0.3, 0.5}.
- **Central Hayek-loss rate** and **inspection cost κ_ins**: {low, mid, high}.
Output = a **frontier map** of *true N delivered per peso* for each institution
across the grid — where each wins, and the crossover surface.

## Pre-registered predictions (committed before first run)
1. **No institution wins everywhere; there is a frontier.** Distributed dominates
   at large N and low capture (β low); central dominates at small N or high
   capture (β high). The crossover surface is the experiment's headline object,
   replacing "wins at every scale."
2. **Central's Hayek ceiling gives diminishing returns to inspection budget:**
   buying more m helps sub-linearly and eventually hurts (overhead + agency loss),
   so the planner cannot buy omniscience even with budget freedom.
3. **Distributed's advantage concentrates where subjective valuation diverges
   most from proxies** — highest for projects with heterogeneous or *negative*
   valuers (the chess-kid test): the distributed arm assigns the correct sign
   where the planner mis-counts a nominal beneficiary as positive.
4. **The default layer is load-bearing for the silent:** without it, distributed
   loses the silent beneficiaries' N (regime underperforms); with it, recovered —
   consistent with Finding 2.
5. **Under heavy capture (β high) the distributed arm degrades toward the
   planner's lobby-biased outcome** — both institutions are then capturable, and
   the honest conclusion is that capture-resistance (equal quota, visibility,
   identity) is the binding safeguard, not the aggregation mechanism itself.

If runs contradict these, the predictions stay recorded and the contradiction is
reported as a finding.

## Metrics
Per condition, mean ± sd over N_seed seeded runs: **true N delivered per peso**;
corr(institution ranking, true N); **sign-misclassification rate** (share of
negative-valuer projects funded as if positive); frontier / crossover location;
funded rate; Gini; tail coverage of low-salience high-N projects.

## What E4-v2 changes in the paper
E4's "aggregated dispersed signals beat fixed-bandwidth central construction at
every tested scale" becomes: **"distributed revelation dominates in a bounded
regime (large scope, low capture) and loses in another (small scope, high
capture); the frontier is measured, and both institutions are capturable, so the
binding safeguard is the equal-quota/visibility floor, not the aggregation
mechanism."** This is an honest regime finding that parallels the two-layer
robustness result, and it is defensible against the reviewer objections because
every ingredient is (a) grounded in the cited literature (Hayek, Condorcet /
Austen-Smith-Banks, Olson, Samuelson), (b) gives each side its real strength and
weakness, (c) normalized by cost, and (d) reported as a swept frontier, not a
headline.

## Open parameters to confirm before implementation
- The **Hayek-loss functional form and rate** (the single most result-determining
  knob — must be justified/swept, never hand-picked).
- The **inspection cost κ_ins** relative to project size (sets how much
  "knowing more" costs the central planner).
- The **capture model** for β (who organizes, on which projects, how visibly).
- Whether the **central planner also reveals nothing** vs. a weak own-preference
  (kept blind to its own N by design, since it spends others' money).
