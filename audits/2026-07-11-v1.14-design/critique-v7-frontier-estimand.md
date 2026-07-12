# E4 v1.14 (v7 state) — adversarial frontier, estimand, and theorem critique

## Scope and frozen baseline

This review is against the clean audit worktree at commit
`3b41007e71c9e8c1d7494fce1fde271438263dc4`, not against concurrently modified files in the main worktree. I ran:

```text
npm run e4:frontier   -> exit 0; reported combined root t≈1.13
npm run e4:scenarios  -> exit 0; +6.1%, +46.6%, +199.8%
npm run e4:theorem    -> exit 0; identity error 0.17 MC SE
npm run e4:test       -> exit 0; ALL TESTS PASSED
```

I then ran direct `node --input-type=module` probes importing `baseConfig`, `THETA`, `estimand`, `runWorld`,
`makeRng`, and the three scenario objects. All probe results below use the production engine, seed `20260711` unless
otherwise stated, `N=1500`, `K=150`, and no source edits.

## Verdict

**BLOCKER / NOT PREREGISTRATION-READY.** The ratio-of-sums implementation and its `D/O - C/O` decomposition are
arithmetically sound. The reported `t≈1.13` is also numerically stable **for the exact coded interpolation path**.
But the substantive interpretation of that root is invalid: the executable `PRO_CENTRAL` is not the pro-central
scenario in the document it claims as its source. Running the documented master-table pro-central point changes
`m` from `+6.1%` to `-29.5%` and moves the path root from `t≈1.13` to `t≈0.57`. Therefore the headline “the central
wins only if better than the fully competent plausible central” is contradicted by the repository's own declared
central-favourable scenario.

## Severity-ranked findings

### 1. CRITICAL — the coded PRO-CENTRAL is not the anchored master-table PRO-CENTRAL, and the difference reverses the winner

`scenario-configs.mjs:1-2` calls the anchor table its source, while `e4-plausible-anchors.md:26-53` says each named
scenario is a full configuration across all knobs. In fact, `scenario-configs.mjs:6-7` constructs `PRO_CENTRAL` by
spreading `PROBABLE` and changing only eight central-side coordinates. It consequently disagrees with the documented
pro-central row on 12 coordinates:

| knob | coded | master table |
|---|---:|---:|
| `a_V` | 0.5 | 1.0 |
| `b_V` | 3.5 | 1.5 |
| `p` | 0.15 | 0.05 |
| `a_r` | 1.5 | 0.8 |
| `b_r` | 8 | 14 |
| `pi_opp` | 0.15 | 0.03 |
| `mu_opp` | 3.0 | 1.5 |
| `b_H_C` | 1.3 | 1.2 |
| `beta` | 0.35 | 0.8 |
| `gamma` | 0.5 | 0.3 |
| `sigma_e` | 0.5 | 1.2 |
| `sigma_C` | 0.35 | 0.2 |

The omitted changes are not nuisances. They deliberately make citizen information sparse/noisy, make opposition
rarer and less intense, flatten the visibility tail, and improve central precision. Directly applying the values in
`e4-plausible-anchors.md:34-53` gives:

| executable point, 800 worlds | `m` | `D/O` | `C/O` | 95% inner MC CI |
|---|---:|---:|---:|---:|
| coded `PRO_CENTRAL` | +6.07% | 91.22% | 85.16% | [5.76%, 6.43%] |
| documented master-table pro-central | **-29.54%** | 68.11% | 97.65% | [-29.92%, -29.07%] |

This is not a marginal disagreement. The declared pro-central point makes the central arm win decisively. The same
problem exists on the pro-distributed side: the code values in `scenario-configs.mjs:9-11` are moderated versions of
the table values rather than the table itself. The two alleged sources of truth have already forked.

**Required correction:** generate the scenario objects mechanically from one frozen table/manifest and add an exact
equality regression between the prose table and executable values. Until then, none of “best plausible case,”
“anchored scenario,” or a frontier measured relative to that endpoint is auditable.

### 2. CRITICAL — `t≈1.13` is robust as arithmetic but false as a substantive “beyond realistic” boundary

`frontier.mjs:51-68` interpolates only the keys that differ between the **coded** `PROBABLE` and coded
`PRO_CENTRAL`. A 10-step bisection probe using exactly the same interpolation and D_F clamping found:

| path | worlds per evaluation | estimated root |
|---|---:|---:|
| coded endpoint | 200 | 1.1272 |
| coded endpoint | 400 | 1.1272 |
| coded endpoint | 800 | 1.1257 |
| master-table endpoint | 200 | **0.5676** |
| master-table endpoint | 400 | **0.5662** |
| master-table endpoint | 800 | **0.5676** |

For the coded path, 300-world roots across seeds `1`, `42`, `20260711`, and `987654321` were respectively `1.1243`,
`1.1331`, `1.1272`, and `1.1287`. Thus Monte Carlo error is not the problem. Endpoint definition is: substituting
the repository's declared full pro-central endpoint moves parity well **inside** the path, at about 57% of the way
from PROBABLE to pro-central. The sentence at `frontier.mjs:68` and headline at
`e4-plausible-anchors.md:74-77` are therefore false under the document's own scenario definition.

Even after fixing that mismatch, `t` is an analyst-defined path coordinate, not a measured competence scale. It
linearly moves heterogeneous quantities (`s_exp`, `b_H_C`, `w`, `a`, `b`, `lambda`, `zeta`, `sigma_C`) with equal
normalized progress and no empirical joint covariance. Beyond `t=1`, coordinates hit D_F clamps at different times;
other coordinates are extrapolated past their anchor. Lower `w` and lower `a`, for example, are not universally
monotone measures of “better” once projection can contain quality signal and the intercept affects eligibility.
Calling every `t>1` point “better-than-realistic” is a semantic assertion the path does not establish.

**Required correction:** describe this as one named correlated sensitivity path, report its exact vector at the root,
and add multiple predeclared paths (full documented pro-central, harm-only, signal-quality-only, and empirically
estimated joint paths). Do not attach realism to `t` without a joint anchor.

### 3. HIGH — the continuity claim attributes a multi-parameter contrast to harm-myopia and does not reproduce the ~0.025 regime

`scenarios.mjs:21` and `e4-plausible-anchors.md:66-68` say “removing harm-myopia” collapses `+46.6%` to `+6.1%` and
that the `+46%` is the harm-myopia mechanism. But coded PRO-CENTRAL simultaneously changes six other central
parameters. Holding everything else at PROBABLE, the executable decomposition along the coded path was:

| path at `t=1`, 400 worlds | `m` |
|---|---:|
| change only `s_exp,b_H_C` | **+30.42%** |
| change only `w,a,b,lambda,zeta,sigma_C` | +14.04% |
| change all eight coded keys | +6.04% |

So removing the coded harm-myopia settings alone does **not** recover near parity; most of the collapse to 6% also
requires changing projection, bias/responsiveness, credit, category correlation, and central noise. Interactions
matter too. Moreover, `6.1%` is more than twice the earlier `~2.5%`, with no demonstrated equality of DGP,
population, selector, or estimand. It is acceptable to call these results qualitatively continuous, but not to call
6.1% a reproduction or to say the entire 46% is the harm-myopia mechanism.

**Required correction:** add a proper nested inactivation sequence and an attribution method (at minimum both
orders; preferably Shapley/path-averaged contributions), and label the prior `~0.025` result as a different design
unless an engine-to-engine bridge reproduces it under identical assumptions.

### 4. HIGH — “no single knob flips” is only a local five-slice statement; the output overstates it as robustness to any one assumption

The method of holding all other coordinates at PROBABLE is valid for answering a **conditional ceteris-paribus**
question. Starting at PROBABLE does not mathematically bias that conditional curve. It does, however, determine the
curve being asked about, and it cannot establish a global or joint frontier.

The implementation makes this limitation sharper:

- `frontier.mjs:13-18` selects only five axes out of the model.
- The ranges are explicitly clipped “to a legible span” (`frontier.mjs:12`), despite the opening comment describing
  them as physically possible. In particular, `p` is plotted only down to `0.02`, while its D_F lower bound is
  `0.001`; `sigma_e` is not plotted at all.
- A direct one-at-a-time D_F endpoint probe from PROBABLE found `m=-30.9%` at `p=0.001` and `m=-1.9%` at
  `sigma_e=10` (180 worlds). Thus `frontier.mjs:70` and `e4-plausible-anchors.md:72-73` are false if “single knob” or
  “any ONE assumption” means the registered D_F. The narrower statement “none of these five axes crosses within its
  plotted interval” is reproduced and should be the only claim.
- Across all scenario knobs' individual **R_alpha endpoints**, my 250-world probe found no sign flip. That is useful
  local evidence, but a combination at the documented pro-central point flips strongly, so it is not joint
  robustness.

The 15-point grid and linear interpolation (`frontier.mjs:9,26-35`) also report no root uncertainty and would miss
multiple crossings between grid points. On the coded combined path the function happened to be smooth and the
bisection check supports the printed value; that empirical success does not validate the locator generally.

**Required correction:** scope every statement to its base point and plotted interval, sweep the full registered
range when saying D_F, use bracket refinement rather than a single linear interpolation, report root MC uncertainty,
and separate one-factor slices from the missing joint/global object.

### 5. MEDIUM — the `D/O, C/O` decomposition is an honest identity; >100% and negative values are real within this construct, with two labeling caveats

For every retained set,

```text
Σ(D-C)/ΣO = ΣD/ΣO - ΣC/ΣO.
```

The code computes exactly this identity (`engine.mjs:156-178`), and my recomputation matched to displayed precision:

| scenario, 800 worlds | kept | `ΣO` | ratio-of-sums | mean of per-world ratios | negative-`C` worlds |
|---|---:|---:|---:|---:|---:|
| PRO-CENTRAL | 800 | 43,366.7 | 0.060660 | 0.062377 | 0 |
| PROBABLE | 800 | 43,366.7 | 0.466497 | 0.472131 | 1 |
| PRO-DISTRIBUTED | 800 | 21,596.4 | 1.997599 | 2.052439 | 800 |

At PRO-DISTRIBUTED, `ΣD=20,679.3` and `ΣC=-22,461.7`; all 800 worlds were retained and `pi_deg=0`. Therefore the
`+199.8%` gap is not a tiny-denominator explosion or decomposition trick. It says the central selector funds a
portfolio with negative realized `S` in this simulated DGP. Negative `C/O` and gaps above 100% are mathematically
and semantically legitimate for a signed net-value outcome.

Two caveats remain:

1. “Efficiency” is too strong. `O` is the value from the same greedy-by-true-density heuristic
   (`engine.mjs:98-129`), not an exact knapsack optimum or a welfare maximum. A different portfolio can in principle
   beat a greedy portfolio because of residual-budget packing, so `D/O` and `C/O` are relative delivered-value
   levels, not quantities guaranteed to lie in `[0,1]`. In these three probes `D>O` and `C>O` occurred in zero worlds,
   but that is empirical, not guaranteed by the algorithm.
2. The construct sums project-level **per-interested-person means** without weighting by interested population `n`.
   The result is honest relative to the declared mean-scale aggregation, but “destroys value” should not be read as a
   population-total welfare statement.

### 6. MEDIUM — the ratio-of-sums revision is improved but the frozen record is still inconsistent

The theorem document now supplies the correct large-K ratio-of-sums link (`e4-parity-theorem.md:47-54`), and the
code's use of an O-weighted ratio is defensible. But the design of record still defines
`E[(D-C)/O | O>o_min]` (`DESIGN_SKETCH_v5.md:54`), and the engine section header still repeats that old estimand
(`engine.mjs:131`). No explicit post-hoc estimand-revision log or both-estimands sign check was found. The table above
shows that even at named scenarios the two values differ; at heterogeneous-O corners the difference can be more
important.

**V5 blocker 3 (estimand/state machine): PARTIAL, not cleared.** The production arithmetic and decomposition are
fixed; the frozen specification and robustness record are not.

### 7. MEDIUM — the analytic identity is correct, but it still does not validate the production parity frontier

The proof in `e4-parity-theorem.md:16-35` is correct, and `theorem-check.mjs` reproduces its single-selector
joint-normal identity within 0.17 MC SE. This clears the old absence-of-proof/test defect. It does not test either
institutional parity, the large-K corollary, or engine convergence to the lemma. The benchmark central signal at
`e4-parity-theorem.md:40-45` is linear in net `S` and lacks the production `Splus` plus
`-b_H_C*V^s_exp*H` mechanism. The three setup assumptions at lines 11-14 do not state the additional neutralization
needed to turn that production signal into the displayed benchmark.

Calling the production frontier “numerical” at lines 56-59 is appropriately cautious. Calling the lemma “the
limiting-case theorem behind the numerical frontier” remains too strong until a no-myopia/neutralized-engine limit
is defined and tested.

**V5 blocker 4 (analytic theorem): PARTIAL, not cleared.** The theorem and isolated regression now exist; the
engine-to-theorem bridge and production-mechanism scope do not.

### 8. HIGH — neither scenario points nor local frontiers repair the missing global sweep or give R_alpha coverage

The frozen contract explicitly says the “report EVERYTHING” rewrite is planned and the current block is not final
(`contract.mjs:85-100`). The working evidence path sweeps only seven uncertain coordinates, uses corners plus 64
random points, and checks ten other coordinates only one at a time (`evidence.mjs:12-73`). The contract correctly
admits that `alpha_width` values are declared sensitivity widths, **not verified probability coverage**
(`contract.mjs:99-100`). The anchor ledger itself still marks most variables TBD/in progress/unfixed
(`e4-plausible-anchors.md:13-24`), while later prose calls the scenarios evidence/theory anchored.

Accordingly:

- A point called PROBABLE is a locator, not a joint `R_alpha` distribution.
- Ceteris-paribus plots do not establish coverage, global extrema, volume, or joint robustness.
- The combined path is one analyst-chosen dependence structure, not evidence about correlated reality.
- The master-table/code mismatch demonstrates why the global manifest cannot safely be assembled from duplicated
  prose and JavaScript literals.

**V5 blocker 5 (joint D_F/R_alpha and capability): PARTIAL, not cleared.** Point capability and local sensitivity
exist, but the registered global object, verified coverage, and certified search do not.

## Reproducible focused-probe recipes

The central mismatch probe used the documented object directly:

```js
const tableC = {a_V:1,b_V:1.5,p:.05,a_r:.8,b_r:14,pi_opp:.03,mu_opp:1.5,
  s_exp:.5,b_H_C:1.2,w:.1,a:0,b:1,beta:.8,lambda:0,zeta:.85,gamma:.3,
  sigma_e:1.2,sigma_C:.2};
estimand({...baseConfig(), ...SCENARIO_WORLD, ...tableC}, {nWorlds:800});
```

The root probe linearly interpolated every key differing from PROBABLE, applied the same clamp
`max(THETA[k].df[0], min(THETA[k].df[1], value))` as `frontier.mjs:57-58`, bracketed `[0,1.5]`, and performed ten
bisection iterations. Replacing `tableC` with the coded `PRO_CENTRAL` reproduces `t≈1.13`; using `tableC` gives
`t≈0.57`.

The decomposition probe generated 800 worlds with `runWorld(cfg, makeRng(20260711))`, recomputed the production
median-based `o_min`, retained `O>o_min`, and reduced `ΣD`, `ΣC`, and `ΣO`. This independently reproduced
`estimand().m_hat` and the identity in Finding 5.

## Preregistration implications and shortest correction

The shortest defensible correction is **one executable anchored-scenario manifest** from which the research table,
scenario objects, frontier endpoints, and evidence sweep are generated. Freeze the distinction between:

1. a one-factor ceteris-paribus curve conditional on PROBABLE;
2. one or more explicitly named correlated paths with no realism claim attached to arbitrary `t`;
3. a measured joint `R_alpha` law with verified coverage; and
4. a global D_F search with numerical/root uncertainty.

Then rerun the full master-table pro-central scenario and report the actual sign reversal. Add nested mechanism
inactivation/attribution, correct the ratio-of-sums design record, relabel `O` as the full-information greedy
benchmark, and demote the Gaussian result to a selection-identity check until an engine-limit regression exists.

**Plain answer: the frontier/scenario framing is not ready.** The sharpest improvement is not more Monte Carlo; it
is eliminating the code/table fork that currently changes the winner and invalidates the `t≈1.13` realism claim.
