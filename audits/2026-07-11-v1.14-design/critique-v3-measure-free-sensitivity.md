# Dimension 5 — measure-free primary sensitivity

## Verdict

**PARTIAL — the joint-law headline objection is conceptually closed, but the sensitivity design is not yet
preregisterable.** At a fixed full parameter vector and a fixed transport set, neither the conditional estimand
nor its transport extrema requires a probability law over parameters. V3 now makes that pointwise partial-ID map
the lead result, explicitly makes region mass and Shapley secondary, and keeps the normative aggregation rule
`A` out of probabilistic sensitivity (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:8-14,74-81,100-106`).
That prevents a copula from turning a pointwise central-win cell into a distributed-win cell.

“Measure-free” does not mean choice-free: the identified interval and class remain conditional on the
analyst-declared `T`. Whether `T` is evidentially defensible is the transport review's question; this review only
finds that, once `T` is fixed and fully disclosed, no probability weighting over `T` is needed for its extrema.

It does **not** yet prevent analyst choice from determining a lower-dimensional displayed map or every secondary
headline. The default `theta_surface` omits many coordinates, but v3 does not say whether those coordinates are
fixed, bounded over, or integrated out; “holding ... at their stated laws” is ambiguous
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:74-78,92-98`). Nor does v3 provide any admissible set, outer law,
conditional sampler, Shapley game, nested estimator, or outcome-blind audit artifact. “Both ... are frozen before
running” is still a promise to specify the analysis later (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:100-106`).

**V2 blocker 5 status: PARTIAL.** The primary/secondary hierarchy is cleared in principle. Its executable and
confirmatory safeguards are not cleared.

## What v3 genuinely fixes

1. **A joint law no longer chooses the pointwise sign headline.** The primary estimand is conditional on `theta`,
   and the primary classification uses extrema over `T`, not probability mass under a chosen copula
   (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:24-35,74-81,100-101`). For a declared full `theta` and `T`,
   changing an outer law can reweight cells but cannot change `[m_lo,m_hi]` in a cell.
2. **Weighted summaries are demoted.** Region mass and dependence-aware Shapley are expressly secondary and
   require external justification (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:102-104`). That is the right
   answer to v2's construction in which identical marginals produced 99% or 1% distributed-win mass, or 100% mass
   on parity, solely through the copula
   (`audits/2026-07-11-v1.14-design/critique-v2-dependence-sensitivity.md:21-31`).
3. **Normative aggregation is not made stochastic.** V3 says alternative `A` choices are separate normative
   estimands and explicitly forbids randomizing `A` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:38-42,102-106`).
4. **Uncertainty types are at least named.** The cell bootstrap is limited to inner simulation variability, and
   simulation, source-estimate, model-form, and transport uncertainty are declared distinct
   (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:26-30,104-106`).

Those are substantive corrections, not wording changes. They are insufficient for preregistration for the reasons
below.

## Remaining issues, ranked

### 1. The advertised lower-dimensional primary map has no measure-free projection rule

The mathematical object `m(theta)` is measure-free at a **full** `theta`. The plotted object is instead declared at
`theta_surface`, whose default axes are only `w, a, beta, sigma`, while `theta_all` contains many additional fixed,
varied, and numerical quantities (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:92-98`). Section 4 then says
the bounds are computed at each `theta_surface` point while other parameters are held at “stated laws”
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:74-78`). This leaves three non-equivalent implementations:

- a conditional slice with all omitted coordinates fixed at named constants;
- a robust projection taking extrema over a declared admissible set for omitted coordinates; or
- an average over an outer probability law.

Only the first two are measure-free. The third silently returns the joint law to the primary map. Even the first can
choose an attractive picture by selecting a favorable slice after inspecting results. The phrase “stated laws” is
also legitimate for world-generating randomness inside `W`; v3 must distinguish those DGP laws, which belong
inside `m(theta)`, from an outer epistemic or jurisdictional law over `theta`.

**Required fix:** define the display operator. Either preregister every slice as
`I(theta_s; c) = [inf_(g in T) m(theta_s,c,g), sup_(g in T) m(theta_s,c,g)]` with every omitted coordinate `c`
listed, or use a set projection
`I*(theta_s) = [inf_(c in H(theta_s),g in T) m(theta_s,c,g), sup_(c in H(theta_s),g in T) m(theta_s,c,g)]`.
Do not integrate over an outer law in the primary layer. Freeze the plotted envelope, all slices, axes, transforms,
and admissibility constraints before production output; show all frozen slices and label the result conditional on
`T` and, where applicable, `H`.

### 2. “Admissible set (for bounds) or law (for weighted mass)” remains mathematically under-specified

V3 correctly signals that a set and a law play different roles, but “region-mass ... admissible set (for bounds)”
is still ambiguous (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:102-104`). A bare set supports robust sign
subsets; it supplies neither mass nor a unique bound on mass. Geometric volume requires a coordinate system and a
base measure. A probability bound requires a declared family of laws. This was the exact unresolved distinction in
v2 (`audits/2026-07-11-v1.14-design/critique-v2-dependence-sensitivity.md:35-46`).

No actual **secondary** admissible set or law is supplied. Missing items include marginals or structural equations, copula/dependence
constraints, deterministic relations, support, provenance, scenario weights, treatment of model-form uncertainty,
and executable conditional-sampling code. The source materials cannot fill that gap: they explicitly say that
political-opinion magnitudes do not transport to public-project value
(`research/e4-value-estimation-foundation.md:71-76`; `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:66-70`).

**Required fix:** use three distinct secondary contracts:

- for a pure admissible set, report only robust-central, robust-distributed, negligible, and indeterminate subsets;
  do not call set volume prevalence or region mass;
- for a preregistered family of probability laws `Pset`, report bounds such as
  `[inf_(P in Pset) P(class=k), sup_(P in Pset) P(class=k)]` for every class;
- for one empirically or elicitation-justified law `P`, report `P(class=k)` and label it law-specific.

For every `H`, `Pset`, or `P`, publish support, dependence equations/copula, constraints, provenance, weights,
transport treatment, model-form treatment, and code for drawing and validating conditionals. Never assign a
uniform law merely because only a range is known.

### 3. Shapley is quarantined rhetorically but has no estimand

“The exact Shapley value function” will be frozen later, but v3 does not say what scalar response is decomposed,
which dependent-input game is used, how deterministic coordinates are grouped, or whether transport ignorance is
being assigned a probability law (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:102-106`). These choices can
reverse importance rankings. In particular, the primary output is set-valued `[m_lo,m_hi]` plus a class; there is no
canonical Shapley effect of that object. Using raw per-world `(D-C)/O` would also mix inner world noise into the
outer attribution, while sampling `g` uniformly over `T` would convert an ignorance set into invented probability.

**Required fix:** either omit Shapley or preregister, for each named law `P`, a scalar target and game. A defensible
default for a scalar conditional mean is

`v_P(S) = Var_P(E_P[m(theta) | theta_S]) / Var_P(m(theta))`.

If transport bounds are the target, analyze `m_lo(theta_s)` and `m_hi(theta_s)` separately rather than silently
using their midpoint or class code. State the conditioning convention, conditional sampler and diagnostics,
permutation estimator, stopping/error rule, grouping of deterministically linked primitives, and handling of
reparameterization. Report each law separately; do not average over `A`, model forms, or transport sets. Give `g`
a probability law only if external evidence identifies one.

### 4. “Frozen before running” is not an outcome-blind firewall after exploratory exposure

V3 itself properly says it is not yet preregistered (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:3-6`).
But the project has already seen outcome-bearing response surfaces. The old E4 engine evaluates an equally weighted
54-point Cartesian box and reports its favorable-cell fraction
(`scripts/simulation/e4-v4-symmetric-frontier.mjs:55-64,87-93`). E5 fixes two hand-built regimes, reuses selected
axes, and pools selected cells with equal implicit weight (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117,141-149`).
Those engines implement different models, so they do not determine v3's result, but they reveal directions and make
post-exposure support, copula, slice, and scenario choices non-blind. Freezing immediately before a nominal final
run permits arbitrary exploratory runs first.

**Required fix:** label all existing work exploratory. Before the **first outcome-bearing run of the replacement
engine**, freeze an immutable source-to-support artifact containing all candidate sets/laws, exclusions, transforms,
slice constants, dependence structures, weights, Shapley games, code hash, seeds, stopping rules, and reporting
rules. Prefer external or output-insulated review. During implementation, test against synthetic/null fixtures
rather than expose production cells. If production outputs have already been viewed, disclose that fact, freeze all
still-defensible variants, and report every frozen variant rather than selecting one post hoc.

The repository also retains an old foundation headline that asks “how large each region is” and calls ranges
anchored (`research/e4-value-estimation-foundation.md:58-63`), while v3 makes weighted mass secondary and target
coefficients proxy-informed. Mark that passage superseded before preregistration; otherwise it remains a live route
back to a measure-dependent headline.

### 5. Inner and outer uncertainty are named but not operationally separated

The inner estimator is now fixed as a mean of per-world ratios with a world bootstrap
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:24-30`). That is an improvement. It is not enough for a frontier
or extrema over `T`. V3 supplies no replication/stopping rule, common-random-number coupling, simultaneous band,
frontier-location uncertainty, extremum-search tolerance, or emulator/discretization validation. Minimizing noisy
cell estimates over `T` can bias `m_lo` downward and maximizing can bias `m_hi` upward; pointwise cell intervals do
not automatically cover the identified interval or its class.

The phrase “outer (theta / transport) uncertainty” also joins non-interchangeable objects
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:104-106`). Variation under a defensible outer law is
probabilistic. Transport and model-form ignorance may be set-valued sensitivity and should not be presented as a
confidence interval. Source-estimate uncertainty can be frequentist, Bayesian, or set-valued, but the choice must
be stated.

**Required fix:** preregister the nested algorithm: inner worlds per full cell; common-random-number scheme;
seed-cluster resampling that keeps one seed's outcomes together across all compared `theta` and `g`; stopping rule;
simultaneous inference for `m`, `m_lo`, and `m_hi`; frontier root-finding and grid/emulator tolerances; and class
rules when confidence bands overlap `+/-delta`. Report separate artifacts for (i) simulation error, (ii) source
estimation uncertainty, (iii) variation under each named outer law, (iv) model-form envelopes, and (v) transport
envelopes. Increasing world count may shrink only (i).

The shipped E5 bootstrap is specifically not the replacement protocol: it resamples stored observations within a
pooled ratio-of-sums calculation (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23`), reuses the same world seeds
across cells (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-113`), and concatenates selected cell outcomes before
pooling (`scripts/simulation/e5-sp-symmetry-gate.mjs:141-149`). Treat it only as legacy exploratory evidence.

## Clearance test

This dimension is cleared when the preregistration contains, in executable form:

1. a full-`theta` primary identified interval and an explicit fixed-slice or robust-projection rule for every
   lower-dimensional figure;
2. exact, externally justified `H`, `Pset`, and/or `P` objects, with no mass reported from a bare set;
3. either no Shapley analysis or a named scalar target, exact cooperative game, grouping, conditional sampler,
   diagnostics, and uncertainty estimator for every reported law;
4. an immutable pre-output freeze with prior exploratory exposure disclosed and all frozen variants reported; and
5. a nested uncertainty protocol that keeps simulation, source, probabilistic outer, model-form, and transport
   uncertainty as different inferential objects.

## Single sharpest improvement

Make the **display operator part of the estimand**: preregister whether every `theta_surface` panel is a fixed full-
parameter slice or a worst-case projection over a named set, and categorically forbid outer-law averaging in the
primary layer. That closes the only route by which a hidden joint law can still shape what is presented as the
measure-free map; all law-weighted mass and Shapley results can then remain visibly secondary and law-specific.
