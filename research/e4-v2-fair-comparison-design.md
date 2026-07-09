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
- **Value has NO objective component.** A physically perfect pitch (lighting,
  bathrooms, K people around, many kids) is worth **zero** if the only nearby
  kids play chess. Physical facts and head-counts are **attributes** the
  politician observes and mistakes for value; they are not value. Value is
  entirely subjective: **N_j = Σ_i N_ij** over all people.
- **Value decomposition (the core primitive).** For each project j and person i:
  > **N_ij = μ(a_ij) + ε_ij**
  where `a_ij` are i's **observable attributes** w.r.t. j (proximity,
  demographics, physical facts), `μ(·)` is the **true attribute-conditional
  mean valuation** — the best any outside observer could infer from attributes —
  and `ε_ij` is the **idiosyncratic private component** (mean 0 given attributes,
  variance σ²_idio): the part that lives only in i and is unobservable from
  outside. The chess kid is a large **negative** ε; the football-crazy
  neighborhood is a large **positive** aggregate ε; the distant citizen who
  values a rural pitch he'll never use is an ε on a project where his attributes
  say "unaffected." μ carries what attributes can predict; ε carries what they
  structurally cannot.
- Salience s_j (visibility), corr(s, N) modest and *imperfect*.

## The central planner (MAXIMALLY advantaged — its only blindness is structural)
We deliberately stack the deck **for** the central planner (the honest inverse of
E4's sin): give it every capacity advantage, and let it lose only on the one
thing that, by the value theory, no outside observer can ever have — the
subjective valuation itself.

- **Infinite, free capacity and perfect attribute observation.** The planner
  sees *all* attributes of *all* people perfectly and for free: proximity,
  demographics, physical facts, head-counts, existing supply. **No bandwidth
  limit, no scale ceiling, no Hayekian agency loss** — those are dropped; they
  were contestable parameter fights. The planner is as good as an outside
  observer can possibly be.
- **But it can only estimate value from attributes.** Its estimate assigns each
  person an assumed per-capita valuation and sums over an attribute-defined
  beneficiary set: **N̂_j = Σ_{i∈B̂_j} v̂(a_ij).** By the value theory it can
  **never** observe N_ij — subjective value is not a physical fact to inspect
  harder. Its error has three structural sources, none of which shrinks with
  capacity:
  - **(set)** B̂_j ≠ the true valuers — it misses distant valuers and includes
    nominal non-valuers.
  - **(bias)** v̂(a) ≠ μ(a) — its assumed per-capita differs from the true
    attribute-conditional mean (e.g., a flat per-capita, or an optimistic one).
  - **(variance)** it uses v̂(a), **never the person-level ε_ij**, so it is blind
    to the idiosyncratic dispersion — the sign-flips (the chess kid) and the
    intensity.
- **Maximally-fair corner.** Set B̂ = affected population and **v̂ = μ** (give the
  planner the *true* attribute-conditional mean, its best possible estimate), so
  set-error and bias → 0 and its ONLY error is the idiosyncratic variance
  **Σ ε_j**. Even here, distributed (which reveals N_ij directly) beats it by
  exactly the aggregate idiosyncratic component per project — the private,
  structurally-unobservable share of value. This corner is the headline stress
  test: *we gave the planner everything an outside observer could have, and it
  still misses Σ ε.*
- **Lobby/salience bias (Olson 1965)** enters only as an *optional* de-idealizing
  axis (`v̂ += λ_lobby · organized(j)`), to move from the maximally-fair corner
  toward a realistic central — never needed to make distributed win.

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
- **Idiosyncratic share σ²_idio** — how much of value is private/unobservable
  from attributes (the *decisive* axis; the central's only structural error at
  the maximally-fair corner). Sweep from ~0 (attributes predict everything →
  central ≈ distributed) to high (value is mostly idiosyncratic → distributed
  dominates).
- **Scale:** N_p ∈ {40, 200, 1000} (kept, but scale is no longer the planner's
  handicap — its blindness is now σ²_idio, present at every scale).
- **Citizen capture:** β ∈ {0, 0.1, 0.3, 0.5}.
- **Central de-idealization (optional):** bias `v̂ ≠ μ` and lobby `λ_lobby` — to
  move from the maximally-fair corner toward a realistic central.
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
- The **distribution of the idiosyncratic component ε** — mean 0 by construction,
  but its **variance σ²_idio** and shape (how fat the negative tail / how often
  a chess-kid or a football-crazy neighborhood occurs) is now the single most
  result-determining knob. Sweep it; never hand-pick.
- Whether to give the planner the **true attribute-mean μ** (maximally-fair
  corner, only-variance error) or a crude/biased v̂ (adds set + bias error).
- The **capture model** for β (who organizes, on which projects, how visibly).
- Note: the μ itself (the true attribute-conditional mean) should be **positive
  and informative** where attributes genuinely predict preference — NOT forced to
  zero, which would over-stack *against* the central (the inverse of E4's sin).
