# Adversarial critique summary — E4 design sketch v3

## Overall verdict

**NEEDS CHANGES — viable direction, not ready to preregister.** V3 is not a cosmetic rewrite. It makes five
important corrections: it commits to one population functional, explicitly separates source from target,
admits null and adverse transport, retires the false `beta=1-eta` extension, and makes a measure-free conditional
map primary (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:16-35,66-90,100-106`). It also treats central-win
and unidentified-sign regions as legitimate results (`DESIGN_SKETCH_v3.md:8-14`). Those changes make the research
program viable.

They do not yet make the package executable or preregistrable. The document calls §3 a complete DGP even though
the distributed signal is a sum and the declared target is a mean, the reported “Horvitz–Thompson” correction is
not HT under sign-dependent inclusion, the reach and information-allocation processes are missing, and the
central coefficients remain algebraically confounded (`DESIGN_SKETCH_v3.md:44-64`; `critique-v3-complete-dgp.md`).
The transport set `T`, source coefficient vector, scale map, and full extremization domain are still placeholders
(`DESIGN_SKETCH_v3.md:66-81`; `critique-v3-transport-partial-id.md`). The “theorem-backed” label precedes the proof,
and the claimed mechanical embargo is not implemented (`DESIGN_SKETCH_v3.md:83-90,108-125`).

The current tree confirms the implementation gap. There is no replacement engine implementing this design, closed output schema, snapshot/lint
suite, CI workflow, or legacy guard. The named E4 engine still computes and leads with `D/C` and emits ASCII `x`
suffixes (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66,73-85,95-104`). The E5 gate still bootstraps a
ratio of sums while reporting a mean and median of per-world ratios, and retains an unused `WP.eta`
(`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,29-49,102-113,140-155`). `package.json` exposes only anchor
checking and no test/evidence command (`package.json:6-8`).

**Do not preregister v3 unchanged.** The direction is worth repairing; it is not non-viable.

## Seven-blocker clearance table

| # | V2 blocker | Status | V3 assessment |
|---:|---|---|---|
| 1 | Target model not identified / transport not bounded | **PARTIAL** | Source and target are finally separated, and null/adverse transport is required in principle (`DESIGN_SKETCH_v3.md:66-81`). But no numeric joint `T`, source extraction, scale/link map, amplification rule, or full uncertainty set exists. Target `a,w` are also both transport outputs and proposed surface axes, while fixed `v_p` and the natural `Sbar_j=S_j` reading leave only composite intercept/slope parameters identified (`DESIGN_SKETCH_v3.md:53-57,70-78,92-98`; `critique-v3-transport-partial-id.md`). |
| 2 | No complete executable v2 DGP | **NOT CLEARED** | V3 supplies an inventory and several equations, but not one coherent runnable model. `S_j` is a mean while `M_D` is an expanded sum; the MNAR estimator is mislabeled HT; `N`, reach membership, matched information, credit dependence, complete score/gate/oracle equations, format regime, and numerical conventions are missing. The proposed zero controls do not create symmetry (`DESIGN_SKETCH_v3.md:44-64,92-98`; `critique-v3-complete-dgp.md`). |
| 3 | Parity estimand not frozen; functional choice can flip sign | **PARTIAL** | One functional is genuinely chosen in prose: `E[(D-C)/O]`, estimated by the mean of per-world ratios (`DESIGN_SKETCH_v3.md:16-30`). But the displayed formula averages all worlds while the next rule conditions away `O<=o_min`; neither `o_min` nor `delta` is fixed or justified; sign, materiality, transport, and Monte Carlo states are conflated; and the only shipped gate still mixes three functionals (`DESIGN_SKETCH_v3.md:26-35,74-81`; `critique-v3-frozen-estimand.md`). |
| 4 | Invalid claim that the new model extends `beta=1-eta` | **CLEARED (narrowly)** | V3 explicitly retires the claim and correctly separates a limiting analytic benchmark from the numerical full frontier (`DESIGN_SKETCH_v3.md:83-90`). The replacement theorem is not ready: `a` cancels under fixed quota/no gate, the covariance ratio reaches the frozen ratio estimand only under a large-`K`, positive-oracle concentration argument, and the MNAR `beta` mapping is not elliptical in finite samples (`critique-v3-analytic-benchmark.md`). The old false claim is cleared; the new benchmark remains unfinished. |
| 5 | A joint law can choose every headline | **PARTIAL** | Making the full-parameter conditional frontier and set extrema primary removes probability-law weighting from the pointwise sign (`DESIGN_SKETCH_v3.md:100-106`). But the lower-dimensional `theta_surface` has no fixed-slice versus robust-projection rule, so an outer law could leak back through omitted coordinates. A bare admissible set cannot produce region mass, and the Shapley game, sampler, law family, and nested estimator are still unspecified (`DESIGN_SKETCH_v3.md:74-78,92-106`; `critique-v3-measure-free-sensitivity.md`). |
| 6 | Multiplier quarantine not mechanically enforceable | **NOT CLEARED** | Section 8 is a future engine specification, not a control in the repository (`DESIGN_SKETCH_v3.md:108-119`). The old engines remain directly runnable outside any legacy guard; E4 emits `D/C` and ASCII `x`; no schema/lint/snapshot/CI command exists. “Forbidden by default” also leaves a possible opt-in ratio path (`DESIGN_SKETCH_v3.md:31-36,108-113`; `critique-v3-mechanical-embargo.md`). |
| 7 | Novelty claim premature | **PARTIAL** | V3's conditional positioning is much more honest (`DESIGN_SKETCH_v3.md:121-125`), and no exact prior match was found for its full transport-set + signed-MNAR + proxy/credit combination. But budgeted noisy expert-versus-crowd portfolio selection, epistemic PB, noisy-PB robustness, and uncertainty-set project portfolios are already published. “Theorem-backed” and “pre-registered atlas” are not present-tense contributions while the proof, engine, `T`, and bridge data do not exist (`critique-v3-novelty-positioning.md`). |

**Clearance count: 1 cleared narrowly, 4 partial, 2 not cleared.**

## Remaining blockers, ranked

### 1. The observation model is not unit-consistent, and the central parameters are not identified

The primary truth is `S_j=mean_i(u_ij)`, but the distributed score is `sum(reports)/p`
(`DESIGN_SKETCH_v3.md:47-50`). Even with `beta=0`, its conditional expectation is approximately `n_j S_j`, so
heterogeneous reach changes the distributed ranking while the central arm estimates a mean. With negative reports
included at probability `p(1-beta)`, dividing all reports by `p` intentionally leaves adverse-voice attenuation;
it is not a Horvitz–Thompson estimator of the true total or mean.

The central model has a separate exact problem. If `Sbar_j` is the project-population mean already denoted by
`S_j`, then

```text
M_Cj = (a + w v_p) + (b - w) S_j + eta_j.
```

With `v_p` fixed per run, infinitely many `(a,b,w)` triples generate identical signals. Eligibility, z-scoring,
and nonlinear selection cannot identify coefficients that are already observationally equivalent at the signal
level (`DESIGN_SKETCH_v3.md:51-57`; `critique-v3-complete-dgp.md`).

**Required fix:** choose mean or total value and put truth, both signals, delivery, and the oracle on that same
scale. Define project-specific planner own values `v_pj` and a distinct citizen target `mu_j`, with direct bridge
observations and rank conditions, or reparameterize to the identified composites and stop interpreting `a,b,w`
separately. Then specify reach, matched information, score, gate, hurdle, oracle, and format equations completely.

### 2. The transport “identified set” is still an analyst-supplied placeholder

V3 requires a committed `T`, but supplies no endpoints, joint restrictions, coordinatewise nulls, amplification
treatment, provenance, or extracted source coefficient/covariance object (`DESIGN_SKETCH_v3.md:66-78`). The source
numbers are different estimands on different scales, and the diagonal multiplicative bridge is itself an
unjustified restriction (`E4-empirical-anchors.md:18-26,39-52,66-71`). A narrow and a very wide set can both include
zero and a sign reversal while producing opposite robust-sign maps.

**Required fix:** freeze one machine-readable object
`S_source x R_scale x T x N_admissible`, including exact source estimands, sampling covariance, scale/link maps,
joint transport bounds, amplification/adverse cases, nuisance sets, and nested sensitivity sets. Project that set
through `m` without also treating transport-generated target coefficients as free axes. If the bounds are based on
assumption rather than target observables, call them **transport-sensitivity bounds conditional on `T`**, not an
empirically identified region.

### 3. The mechanical embargo and replacement engine do not exist

The repository does not implement any of §8's controls. The ASCII/Unicode distinction is a concrete bypass: v3
says `×`, while the live E4 output uses `x` and also presents bare ratio values with parity at one
(`DESIGN_SKETCH_v3.md:108-119`; `scripts/simulation/e4-v4-symmetric-frontier.mjs:73-104`). Moving a file alone would
not be enough if it remains directly executable or importable by the evidence path.

**Required fix:** ship one evidence-only v3 command backed by a closed schema (`additionalProperties:false`) that
cannot contain `D/C` or ratio-parity semantics; render every official artifact through one tested adapter; reject
ASCII `x`, Unicode `×`, and bare `D/C`; and isolate old runners behind an explicit legacy-only runtime guard and
separate CI artifacts. Make unknown, unused, and non-allowlisted model literals fail.

### 4. The estimand's domain and state machine are not frozen

The exclusion rule changes the displayed estimand to a conditional one, but the formula does not say so
(`DESIGN_SKETCH_v3.md:22-30`). The transport classifier sends every interval that is not wholly material-central or
material-distributed to `transport-indeterminate`, including intervals wholly inside the negligible band and
intervals with an identified positive sign but uncertain materiality (`DESIGN_SKETCH_v3.md:31-35,74-81`). There is
also no `numerically-unresolved` state for Monte Carlo or optimization uncertainty.

**Required fix:** define and co-report
`pi_deg(theta)=Pr(O<=o_min|theta)` and
`m_cond(theta)=E[(D-C)/O|theta,O>o_min]`; freeze exact, scale-aware `o_min` and `delta`; report sign status at zero
separately from materiality at `+/-delta`; add robust-negligible and numerical-certification fields; and distinguish
the family of fixed-transport frontiers from the projected parity-compatible set.

### 5. The analytic benchmark and sensitivity/display contracts remain promises

The covariance-ratio lemma is valid under a common normal fixed-threshold model: expected selected value per
candidate is

```text
q*E[S] + phi(z_q) * Cov(S,X_k)/sd(X_k).
```

Parity therefore equates the two covariance ratios. But an exact top-`qK` portfolio is finite-sample order-statistic
selection, `a` cancels under no gate/fixed quota, and the frozen oracle-normalized mean requires `O_K/K` to
converge to a positive constant plus appropriate integrability (`critique-v3-analytic-benchmark.md`). The actual
MNAR signal has value- and `beta`-dependent sampling variance, not an exact elliptical law. Likewise, a plotted
`theta_surface` needs an explicit fixed-slice or worst-case projection operator before it is truly measure-free
(`critique-v3-measure-free-sensitivity.md`).

**Required fix:** state and prove a joint-normal fixed-threshold theorem plus a large-`K` positive-oracle limiting
corollary; derive the actual `beta` moments or label them a CLT approximation; remove `a` from the benchmark surface;
and freeze the display operator, all secondary law families, and any Shapley game before production output.

## Prior-art result and positioning

The sharper search materially narrows the contribution:

- [Böttcher and Klingebiel, “Organizational Selection of Innovation”](https://doi.org/10.1287/orsc.2023.17357)
  already model budget-constrained true-quality portfolio selection under noisy expertise and compare expert
  delegation with collective aggregation, with either able to win.
- [Rey and Endriss, “Epistemic Selection of Costly Alternatives”](https://doi.org/10.1007/s10458-024-09677-2)
  already treat citizen ballots as noisy signals of the ground-truth set of costly projects to fund.
- [Boehmer et al., “Robustness of Participatory Budgeting Outcomes”](https://arxiv.org/pdf/2305.08125) already
  simulate heterogeneous-cost PB robustness to noisy votes and show rule/completion choices are load-bearing.
- [Liesiö, Mild, and Salo, “Preference Programming for Robust Portfolio Modeling and Project Selection”](https://doi.org/10.1016/j.ejor.2005.12.041)
  and successors already identify robust project/portfolio conclusions over uncertainty sets.
- [Mollick and Nanda, “Wisdom or Madness?”](https://doi.org/10.1287/mnsc.2015.2207) already compare crowd and expert
  funding judgments on the same project proposals and examine downstream outcomes.

No exact match was found in this targeted, non-exhaustive scan for the full combination of a source-to-target
transport set, signed MNAR coverage, proxy/credit separation, and oracle-normalized institutional parity bounds.
That narrow synthesis may be useful. The honest present contribution is therefore a **proposed analytic benchmark +
transport-sensitivity atlas + bridge measurement protocol**. It becomes a standalone theory contribution only
with a nonstandard E4-specific theorem, and an empirical contribution only with target-domain bridge data.
“Noisy expert versus crowd budgeted selection,” “sometimes the central wins,” and “robustness atlas” are not
themselves novel.

The companion documents must also be aligned before preregistration. The foundation still calls systematic bias
the “novel force,” labels target ranges proxy-anchored, and says the new boundary extends the retired law
(`research/e4-value-estimation-foundation.md:18-35,48-63`). The empirical-anchor file likewise calls target `a,w`
proxy-anchored despite conceding unverified transport (`E4-empirical-anchors.md:57-71`). Those are live overclaim
paths even if v3 itself is worded carefully.

## Single sharpest improvement

**Replace the prose-only §3/§4/§8 stack with one unit-consistent, machine-readable model contract that generates
the registry, engine configuration, transport set, result schema, and tests.** Before generating it, choose mean
or total value and either identify `v_pj,mu_j,a,b,w` from distinct project-level bridge variables or use only the
identified composites. This one contract would expose every hidden law and literal, prevent the mean/sum error,
make exact symmetry testable, define the object optimized over `T`, and give the output embargo something real to
enforce.

## Multiplier-relapse risk

**YES — material.** The prose is substantially safer, but the repository reality is unchanged: the named E4
runner still leads with `D/C`, uses parity at one, and emits ASCII `x`; the old gate mixes estimands; the runners are
not behind a legacy guard; and there is no v3 schema/lint/snapshot/CI path (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66,73-104`;
`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113,140-155`; `package.json:6-8`). The risk becomes **NO** only
when a closed evidence schema prohibits ratio semantics, all official renderers consume only that schema, both
ASCII and Unicode suffixes are tested, and legacy execution cannot feed v1.14 artifacts.

## Dimension files

- `critique-v3-frozen-estimand.md`
- `critique-v3-transport-partial-id.md`
- `critique-v3-complete-dgp.md`
- `critique-v3-analytic-benchmark.md`
- `critique-v3-measure-free-sensitivity.md`
- `critique-v3-mechanical-embargo.md`
- `critique-v3-novelty-positioning.md`
