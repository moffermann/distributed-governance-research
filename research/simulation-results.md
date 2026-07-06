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
2. **The weight vector's informational quality is the binding
   constraint.** Degrading it from near-perfect to moderate
   (r ≈ 0.97 → 0.55) costs ≈ 0.29 of quality selection (0.71 → 0.42),
   while quintupling citizen attention (α 2% → 10%) moves sel(θ) by at
   most ≈ 0.08 in the salience-driven regime and essentially nothing
   (≤ 0.01) in default-anchored regimes. This quantifies why A020 — what
   constructs Planning Scopes and their weights — is the binding
   constraint: defaults are powerful, so a captured or ignorant weight
   vector poisons allocation quality at the root, whoever supplies it
   (E4 measures the institutional alternatives for supplying it).
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
construction — the informative content is *how much* the weight vector's informational quality
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

## E5 — Delivered social value: selection × delivery

Pre-registered in `research/e5-value-delivery-design.md` before any run; raw
output in `research/e5-raw-output.txt`. E5 answers the author's central
critique of E1-E4: they measured *selection* (whether funding reached
high-θ projects) and stopped where the thesis begins. States redistribute
to improve social welfare, and the question that matters is how much value
arrives — Okun's leaky bucket. E5 adds the execution stage: executors with
hidden types whose diversion decision follows Model 1's IC condition,
under two delivery regimes — opaque (a zero-control lower bound, per the
docs/105 relabeling: p = 0.10, large unprotected advances, no recovery,
no reputational memory; leakage priors anchored in Reinikka and Svensson
2004 and Olken 2007) and verified (the
architecture layer from the corpus's own Models 1-2: milestone gating,
retention, recovery, p = 0.75, reputational stake with exclusion) —
crossed with the two E4 selection regimes in a 2×2 whose main effects are
the author's two thought experiments verbatim. Portfolios are matched per
seed: S and A1 fund the identical project set. N_p = 200, 20 seeded runs.

| arm | V/budget | leak | visibility gap | sel(θ) |
|---|---|---|---|---|
| S — central / opaque (zero-control lower bound) | 0.393±0.053 | 0.316±0.079 | 0.286±0.072 | 0.138±0.071 |
| A1 — central / verified (same portfolio as S) | 0.561±0.036 | 0.000±0.000 | 0.000±0.000 | 0.138±0.071 |
| A3 — distributed / opaque | 0.606±0.053 | 0.294±0.057 | 0.266±0.048 | 0.764±0.023 |
| A2 — distributed / verified (full architecture) | 0.859±0.023 | 0.000±0.000 | 0.000±0.000 | 0.764±0.023 |

Paired contrasts on V (same seeds, mean [95% CI], n = 20): delivery effect
V(A1)−V(S) = 0.168 [0.143, 0.193] and V(A2)−V(A3) = 0.253 [0.231, 0.276];
selection effect V(A3)−V(S) = 0.213 [0.179, 0.248] and V(A2)−V(A1) = 0.299
[0.283, 0.314]; interaction +0.085 [0.053, 0.117].

**Findings against the pre-registered predictions:**

1. **Prediction 1 (delivery dominates selection) FAILED, with a declared
   scale caveat.** At N_p = 200 the selection effect exceeds the delivery
   effect at both margins. The caveat: E4 showed central selection at this
   scale is near-random (sel(θ) = 0.14), which inflates the selection
   margin; at small scales where central planning is competitive, the
   ordering plausibly reverses. The robust conclusion is not the ranking
   but the compound.
2. **Prediction 2 HELD: the layers multiply.** The interaction is positive
   and its CI excludes zero — verified delivery amplifies selection gains,
   because a well-chosen project that leaks loses its advantage. The full
   architecture delivers 2.19× the zero-control lower bound per unit
   budget (0.859 vs 0.393); the author's thought experiment 1 (identical projects,
   different control layer) is worth +43% by itself.
3. **Prediction 3 FAILED in the informative direction: deterrence
   pre-empts exclusion.** Under the specified verified parameters the IC
   threshold (1.01) exceeds every opportunist's diversion gain (≤ 0.9), so
   no one ever diverts and the exclusion machinery never fires — Becker's
   ex-ante enforcement: the bucket does not leak because everyone knows it
   is metered. A labeled post-hoc sensitivity (verified-weak: p = 0.45,
   threshold 0.43) activates the second line of defense: diversion occurs,
   detection fires, and the executor pool improves endogenously
   (opportunist share 0.28 → 0.21 over 24 cycles) while V still beats the
   opaque regime and the visibility gap halves. Strong verification
   deters; weak verification cleanses; both lines are now measured.
4. **Prediction 4 HELD strongly: the visibility gap is the status quo's
   signature.** The opaque regime officially reports ~29 percentage points
   more delivery than reality (0.286); the verified regimes' gap is zero
   by construction. "Formally rich, practically thin" is now a number.
5. **Prediction 5 HELD: robustness to pessimistic participation.** V(A2)
   ranges 0.837 (α = 3%, participatory-budgeting floor) to 0.883
   (α = 40%, voting-anchored) — the architecture's value does not depend
   on optimistic engagement assumptions.

**E5b — default discovery categories as distributional policy levers.**
Under verified delivery, replacing the default constructor changes the
distributional signature dramatically while the scope planner touches
nothing: near-funding-closure V = 0.784 with sel(θ) = 0.63 (herding
transmits the active layer's quality signal, echoing E2s and E4-R5);
near-me concentrates 71% of budget in the top-density quintile; rural
inverts it (0.5%); uniform-random V = 0.501. The category default is a
configurable, visible distributional policy choice — not an inherent
planner bias.

**Result-determining assumptions, declared.** Executor type shares and
cost distributions are plausible, not calibrated; the opaque regime's
parameters sit inside the empirically documented leakage band (24-87%)
rather than at a measured point; θ remains an oracle (delivered value
assumes the funded promise had its latent value); and honest executors
never fail for capacity reasons — delivery failure is modeled as
opportunism only, so E5's leak is a lower bound on real-world loss under
both regimes.

## E6 — Endogenous execution quality under visibility and reputational competition

Pre-registered in `research/e6-reputational-competition-design.md`; raw
output in `research/e6-raw-output.txt`. E6 isolates the author's incentive
hypothesis — "if you know you can be excluded, you improve your quality to
stay competitive in a high-visibility environment" — from E5's deterrence:
the pool is all-honest and diversion does not exist, so any gain is
incentive, not enforcement. Executors have fixed ability and choose costly
effort each cycle under bounded rationality (imitation of visible success;
cost-minimizing decay in the dark). Three arms: B1 opaque (quality
unmeasured, random assignment), B2 mirror (reputation visible, assignment
still random), B3 architecture (visible reputation weighting assignment).

| arm | effort c1→c24 | quality c24 | V/budget | corr(ability, assign) | assign Gini |
|---|---|---|---|---|---|
| B1 opaque | 0.485 → 0.238 | 0.594±0.024 | 0.541±0.015 | −0.009 | 0.336 |
| B2 mirror | 0.500 → 0.524 | 0.683±0.027 | 0.585±0.017 | −0.006 | 0.354 |
| B3 architecture | 0.501 → 0.517 | 0.692±0.027 | 0.600±0.025 | +0.084±0.103 | 0.836 |

Paired contrasts on final V: B3−B1 = +0.059 [0.051, 0.067]; B2−B1 =
+0.045 [0.041, 0.049]; B3−B2 = +0.014 [0.006, 0.022].

**Findings against the pre-registered predictions:**

1. **Prediction 1 (the author's hypothesis) PARTIALLY HELD.** The
   visible-competitive regime delivers +11% over the opaque baseline with
   zero diversion in the model — a pure incentive gain, not explainable by
   deterrence — and effort/quality rise monotonically where they collapse
   in the dark. The magnitude of the *effort rise* is modest; the
   dominant effect is preventing the opaque regime's effort collapse.
2. **Prediction 2 FAILED informatively: the mirror carries most of the
   effect.** Visibility alone (B2) sustains effort near its starting level
   while opacity lets it decay toward cost-minimization; the competitive
   market adds only +0.014 on top. Mechanism honesty: the pre-registered
   behavioral rule ties imitation to visibility, so part of this is by
   construction — but the construction encodes a real claim: in an opaque
   system there is no visible standard to imitate, and professional norms
   erode; visibility creates a commons of standards before it creates a
   market.
3. **Prediction 3 WEAK/FAILED, and this is the design finding: naive
   reputation-weighted assignment concentrates work faster than it finds
   ability.** B3's assignment Gini explodes (0.836 vs ~0.34) while the
   ability-assignment correlation stays weak (+0.084, CI overlapping
   zero): early assignments build reputation, reputation wins assignments,
   and cumulative advantage locks in early luck — the A027 rich-get-richer
   dynamic reappearing in the executor market. A reputation-weighted
   market needs the same anti-lock-in machinery the corpus prescribes
   elsewhere: concentration visibility, floors for entrants, and
   reputation normalized by opportunities.
4. **Prediction 4 HELD strongly:** the meritocratic-concentration
   trade-off is real and larger than expected.

**Scope boundary, declared.** B3's automatic reputation-weighted
assignment is a stylization: in Core v0, executors are not
protocol-assigned — reputation informs funders' choices and never
excludes an actor from being chosen (docs/107), with concentration
visible. The lock-in warning therefore reads as design
guidance for any strong reputation weighting, human or algorithmic, and as
evidence for the corpus's existing concentration-observability machinery
rather than as a description of the architecture's mechanism.

## E7 — Headline sensitivity under a calibrated status quo

Pre-registered in `research/e7-calibrated-baseline-design.md` before
implementation, with a dated pre-run amendment governing parameter
sourcing; raw output in `research/e7-raw-output.txt`. E7 answers A036 by
running it: the E5 zero-control lower bound is joined by a **calibrated
institutional arm S′** whose parameters come from the audit-institution
evidence base (`research/audit-evidence-base.md`) per docs/105 — p = 0.35
(the Chile CEA-CGR works-observation floor, mid of the 0.30-0.50 design
band), a = 0.5 (payment-state retention practice), r = 0.3 (the ASF
Mexico recovery band, denominator caveat declared), R = 0 (reputational
memory is the instrument the status quo genuinely lacks), official
completion still credited on paper certification for undetected
diversion. The central planner's bandwidth scales as K = max(3,
round(0.15·N_p)); scales N_p ∈ {10, 20, 40, 200}; coordinated
common-mode signal bias β ∈ {0…0.40} on a favored set of 10% of
projects. 20 seeded runs, matched portfolios and execution streams.

| arm (N_p = 200, β = 0) | V/budget | leak | visibility gap | sel(θ) |
|---|---|---|---|---|
| S — central fixed-K / zero-control | 0.374±0.061 | 0.324±0.072 | 0.293±0.066 | 0.138±0.071 |
| S′ — central scaled-K / calibrated | 0.391±0.045 | 0.293±0.056 | 0.190±0.035 | 0.130±0.072 |
| A1′ — central scaled-K / verified | 0.558±0.032 | 0.000±0.000 | 0.000±0.000 | 0.130±0.072 |
| A3′ — distributed / calibrated | 0.608±0.068 | 0.293±0.079 | 0.190±0.051 | 0.764±0.023 |
| A2 — distributed / verified | 0.859±0.023 | 0.000±0.000 | 0.000±0.000 | 0.764±0.023 |

Headline ratio at scale: **V(A2)/V(S′) = 2.224 [2.103, 2.346]** per-seed
(ratio of means 2.197). At municipal scales under the post-hoc
full-coverage planner (E7s below): ratio of means **1.387 (N_p = 10),
1.510 (N_p = 20), 1.627 (N_p = 40)**.

**Findings against the pre-registered predictions:**

1. **Prediction 1 (multiplier falls below 1.5×) FAILED at scale, in the
   informative direction.** The multiplier survives recalibration nearly
   intact: 2.22 against the audit-calibrated baseline at N_p = 200. The
   committed withdrawal condition (ratio near 1) is not triggered. At
   municipal pilot scale, against the realistic full-coverage planner,
   the ratio compresses to 1.39-1.63 — the prediction's spirit holds
   there: at pilot scale the case rests on delivery and metering, not
   selection.
2. **Prediction 2 FAILED informatively — and this is the experiment's
   central finding: audit without memory deters nobody.** The calibrated
   regime's IC threshold (0.2275) lies below every opportunist's cost
   draw (c_eff ≥ 0.3), so no diversion is ever deterred: S′'s leak
   (0.293) is statistically indistinguishable from zero-control on
   matched portfolios, and the delivery effect measured against the
   calibrated baseline (+0.167 [0.149, 0.186]) equals E5's against
   zero-control (+0.168). What real-parameter detection buys is a
   smaller lie, not more delivery: the visibility gap drops from 0.293
   to 0.190. Sharpening rather than weakening the manuscript's claim:
   the calibrated arm's leak lands inside the audit-anchored works band
   (24-48%) — the model's leak mechanics, fed audit-anchored parameters,
   reproduce the empirically documented band.
3. **Prediction 3 (municipal selection wash) MIXED.** Under the
   committed 15%-bandwidth scaling the wash never occurs, because a
   planner inspecting 15% of candidates is near-random at every scale
   (sel(θ) 0.12-0.28) — a finding about that formalization, not about
   municipal planners. Under the post-hoc full-coverage planner (the
   realistic municipal comparator: K ≥ N_p) the wash holds exactly at
   N_p ≤ 20 (sel 0.729 vs 0.725; 0.748 vs 0.749) and distributed pulls
   ahead by N_p = 40 (0.624 vs 0.762).
4. **Prediction 4 (bias degrades linearly; crossover β\* in 0.25-0.35)
   HELD against the competent comparator.** Distributed sel(θ) declines
   near-linearly in β (0.764 → 0.558 at β = 40%); the favored set's
   budget share rises monotonically (12% → 34% for 10% of projects).
   Against the full-coverage municipal planner (sel 0.624 at N_p = 40),
   the crossover sits at β\* ≈ 0.30 — inside the predicted band; below
   β = 0.10 distributed selection remains superior everywhere. Against
   the 15%-bandwidth planner no crossover exists at any tested β.
5. **Prediction 5 (visibility gap survives at 8-15 points) HELD in
   direction, exceeded in size.** The calibrated status quo still
   overstates real delivery by ~19 points: with p = 0.35, two-thirds of
   diverted milestones remain officially recorded as complete. "Formally
   controlled, still misreported" is now a number too.

**E7s — post-hoc sensitivity, declared as such.** The full-coverage
municipal planner (S′fc: central fixed-K, which covers the whole pool at
N_p ≤ 40, with calibrated delivery) was added after seeing the committed
scaling's weakness; it is labeled post-hoc exactly as E5s was. Its
delivered value is identical to the zero-control arm's on matched
portfolios — because under both, every opportunist diverts — differing
only in the visibility gap (0.194-0.219 vs 0.259-0.292): the calibrated
controls change what is *reported*, not what is *delivered*.

**Result-determining assumptions, declared.** The calibrated arm
inherits E5's execution model: recovery r prices deterrence in the IC
threshold but detected-diversion funds are not restored in the
accounting (conservative for the status quo); the opportunist share
(0.3) and cost support U(0.3, 0.9) are unchanged from E5, so the
finding that p = 0.35 deters nobody is conditional on that support; the
executor pool is held at 120 across scales (thin municipal markets are
the A022 boundary, not modeled); and E7's zero-control arm is a
continuity arm — its world consumes additional RNG draws for the second
planner vector, so its values differ slightly from E5's table (0.374 vs
0.393) without changing any ordering.

## E8 — The headline under behaviorally generated participation

Pre-registered in
[[e8-behavioral-participation-design|research/e8-behavioral-participation-design.md]]
(predictions committed before implementation; author-approved mapping,
including the delegation→informed fold). E7's distributed arms assumed
participation: d = 0.8 of the population on the default rule and an
informed share of 0.3, constant over time. E8 replaces those constants
with participation *generated* by the Core v0-conformant behavioral
adoption experiment (`experiments/behavioral-adoption-abm`) — adoption
trajectories over a 104-week launch, resampled to the 24 allocation
cycles, per behavioral seed — for three populations: LLM-calibrated
priors (primary), synthetic priors, and a high-friction launch. The
executor side stays audit-anchored (docs/105) and untouched; a control
cell running E8 with E7's constants reproduces E7's Np=200 table
exactly, so the bridge provably touches only what it declares.

The behavioral populations bracket E7's operating point from the active
side: plateau default shares 0.54–0.80 (E7 assumed 0.8) with informed
shares among actives of 0.74–0.80 under the fold (E7 assumed 0.3) —
and, independently, the plateau informed-population share of the
LLM-calibrated population lands at 0.309, on top of the 0.30 E4/E5/E7
had imposed.

Headline, per-pair V(A2)/V(S′) over 10 behavioral × 20 paper seeds:

| population / variant | Np=20 | Np=40 | Np=200 |
|---|---|---|---|
| LLM-calibrated, steady | 2.851 [2.530, 3.171] | 2.450 [2.359, 2.540] | **2.264 [2.227, 2.301]** |
| LLM-calibrated, launch trajectory | 2.796 [2.480, 3.112] | 2.416 [2.326, 2.506] | 2.226 [2.190, 2.262] |
| synthetic baseline, steady | 2.915 [2.567, 3.262] | 2.429 [2.334, 2.525] | 2.234 [2.201, 2.268] |
| high-friction launch, trajectory | 2.863 [2.436, 3.290] | 2.370 [2.283, 2.457] | 2.177 [2.144, 2.209] |

**Prediction accounting.** P1 held: the scale headline lands at 2.264
[2.227, 2.301], inside the declared [1.9, 2.8] band and marginally above
E7's imposed-participation 2.224 — richer informed participation
improves distributed selection while the calibrated status quo gains
nothing. P2 held strongly: running the actual launch trajectory (adoption
starting near zero) costs 1.7% of the steady-state ratio at scale
(predicted tolerance: 25%) — the default layer anchors the early thin
cycles by construction, which is docs/101's design claim expressed as a
number. P3 held: the most passive population (high friction, 80%
default) keeps the ratio above 2.1 at every scale. P4 (audit) exact.

**Reading.** The manuscript's headline is not an artifact of assumed
participation: under three behaviorally generated populations — including
launch dynamics and an adoption-hostile regime — the full architecture
delivers 2.15–2.9× the calibrated status quo's verified value per unit
of budget, and the E7 value sits inside every behavioral band. Municipal
scales inherit E7's caveat unchanged: the per-pair ratios against the
scaled-K planner are inflated by its small-scale blindness, and the
honest municipal comparator remains E7s's full-coverage planner.
Participation quantities carry llm-elicited synthetic priors, not human
data; signal honesty remains assumed on both sides of the bridge
(docs/87).

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
5. E5 re-centers the whole evidence stack on the thesis: what the
   architecture ultimately buys is delivered social value per unit of
   budget. Selection and delivery compound multiplicatively, the full
   system delivers 2.19× the zero-control opaque baseline (a lower
   bound, per docs/105), the verification layer's
   value arrives ex ante as deterrence (with reputational cleansing as the
   measured second line), and the status quo's accountability deficit is
   quantified as a 29-point visibility gap between reported and real
   delivery. E1-E4 are the supporting layer of that conclusion, not the
   headline.
6. E7 recalibrates the headline against the audit-anchored status quo
   and it survives: 2.22× at scale, 1.4-1.6× at municipal pilot scale
   where the case rests on delivery and metering. The recalibration's
   own finding strengthens the thesis: detection at the empirically
   documented level, without reputational memory, deters no diversion in
   the model — it shrinks the reported gap (29 → 19 points), not the
   real one. The instrument that moves delivered value is the one the
   status quo lacks at any audit intensity: consequences that persist.
   And the bias sweep bounds the open-construction claim honestly:
   distributed selection survives coordinated capture up to roughly a
   30% coordinated share against a competent municipal planner, and
   degrades, not collapses, beyond it.

## Limitations

θ is exogenous and observable to evaluators without error; no strategic
project creation, no collusion, no delegation dynamics; salience is static
apart from social proof; parameter choices (pool size, slots, η, scarcity)
are plausible rather than calibrated to a specific PB dataset — directions
and orderings, not point values, are the findings. Replication across
seeds is deterministic.

Reporting of these results is governed by the docs/105 rule: in-model
qualifiers and named baselines on every headline figure, with the E5
opaque arm labeled a zero-control lower bound. The pre-registered E7
ran that test — audit-anchored institutional baseline, municipal scale,
scaled planner bandwidth, adversarial signal bias — and its committed
headline-withdrawal condition was not triggered (see the E7 section).
