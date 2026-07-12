# E4 v1.14 (v8) — adversarial theorem, paper, anchors, and evidence-language review

## Scope and reproduction

Reviewed current `HEAD` `0537ef7ae27af99bf59dfbca979d02dcfd66ff6b`, not the commit frozen for v7. I read the
current paper section, theorem, anchor ledger, executable scenario registry, scenario/frontier/evidence drivers, engine,
and the relevant v7 reports only to distinguish fixed findings from live ones. I do **not** require target-domain data
that the draft explicitly disclaims.

Fresh runs at current `HEAD` all exited 0:

| command | reproduced result relevant to this review |
|---|---|
| `npm run e4:theorem` | analytic identity error `0.00029 = 0.17 MC SE`; PASS |
| `npm run e4:scenarios` | `PRO_CENTRAL −29.5%`, `NO_MYOPIA +6.1%`, `PROBABLE +46.6%`, `PRO_DIST +199.8%` |
| `npm run e4:frontier` | combined declared path crosses at `t≈0.57`; all five plotted one-factor slices stay positive |
| `npm run e4:evidence` | probable `+46.6%`; independent-uniform envelope sample reports 400/400 Core-v0 wins |

The scenario levels in the paper's results table match the executable output, and the winners are correct. The
frontier correction is also real: `frontier.mjs:51-67` now interpolates `PROBABLE → PRO_CENTRAL`, and the paper
correctly calls `t` an illustrative linear mix rather than a calibrated scale (`e4-paper-section-draft.md:59-63`).

## Verdict

**NEEDS CHANGES, but viable as a comparative-institutions robustness paper.** The substantive fork and wrong-frontier
blockers from v7 are fixed. The Gaussian selection identity is correct. The current artifacts are nevertheless **not
publication-ready yet** because several live labels make claims the code does not implement: the `NO_MYOPIA` row is a
multi-parameter competent-central bundle, the documentation still contains a second conflicting scenario table, and
the evidence report's explanation of its 100/0 volume split contradicts the located interior frontier. These can be
repaired without target-domain calibration.

## Ranked live findings

### 1. HIGH — `NO_MYOPIA` does not isolate myopia, so the paper's mechanism attribution is false as written

The production central signal is

`M_C = a + (b−w)Splus + w v_pj − b_H_C V^s_exp H + noise`

(`engine.mjs:71-78`). Starting from `PROBABLE`, the named `NO_MYOPIA` point changes **eight** fields, not just the harm
gate: `s_exp`, `b_H_C`, `w`, `a`, `b`, `lambda`, `zeta`, and `sigma_C`
(`scenario-configs.mjs:12-20`). Projection, intercept, responsiveness, credit pressure/signal quality, and central
noise are separate competence assumptions. Therefore the statements that this row “isolates the mechanism”
(`e4-paper-section-draft.md:44`, `scenario-configs.mjs:8-9`, `scenarios.mjs:19,23`) and that isolating harm myopia causes
the full `+46.6% → +6.1%` change (`e4-paper-section-draft.md:53-57`) are not supported by that contrast.

A focused production-engine probe at the same 800 worlds makes the distinction material:

| contrast | `m` | `D/O` | `C/O` |
|---|---:|---:|---:|
| `PROBABLE` | `+46.65%` | `91.22%` | `44.57%` |
| only set `s_exp=0` (remove salience variation) | `+24.80%` | `91.22%` | `66.42%` |
| set `s_exp=0`, `b_H_C=b−w` (central support/harm coefficients collapse to net `S`) | `+28.20%` | `91.22%` | `63.02%` |
| declared `NO_MYOPIA` eight-field bundle | `+6.07%` | `91.22%` | `85.16%` |

The row remains useful, but it must be renamed, for example **harm-aware competent-central bundle**. If the paper wants
an isolation claim, add a nested one- or two-parameter contrast and attribute only that contrast to the myopia gate.
The cross-DGP comparison to the symmetry gate may remain a qualitative reconciliation hypothesis, but `+6.1%` cannot
be described as the effect of removing myopia alone.

### 2. HIGH — scenario output is corrected, but the claimed single source of truth and four-scenario documentation are not

`scenario-configs.mjs:1-3` says the docs do not duplicate scenario values. They do: the “MASTER SCENARIO TABLE” at
`e4-plausible-anchors.md:26-53` duplicates three columns. Its pro-distributed column disagrees with executable
`PRO_DIST` on essentially every varying coordinate—for example `a_V=.2` versus `.25`, `p=.45` versus `.40`,
`pi_opp=.35` versus `.28`, `mu_opp=5` versus `3.5`, and `w=1.3` versus `1.1`
(`e4-plausible-anchors.md:34-51`; `scenario-configs.mjs:22-24`). The printed result table happens to match the code, but
the documented assumptions do not.

Stale three-scenario and old-continuity text also remains in:

- `e4-paper-section-draft.md:3,12` (“three evidence-anchored scenarios”), despite the four-row table at lines 33-46;
- `scenarios.mjs:1-4`, which still calls `PRO_CENTRAL` the continuity anchor;
- `e4-plausible-anchors.md:27-30,93-100`, which calls the design three-scenario, makes `PRO_CENTRAL` the continuity
  point, omits `NO_MYOPIA`, and calls `PROBABLE` evidence-anchored.

The sign regression at `test.mjs:75-84` pins executable signs; it does not compare prose or parameter tables, so the
claim at `e4-plausible-anchors.md:58-61` that code and table “cannot fork again” is too strong. Generate the parameter
table from the registry, or delete the duplicated values and stale section.

### 3. HIGH — the global-evidence caveat is not an honest interpretation of the independent-uniform sweep

The implementation is accurately described at the code level: it samples each of 18 coordinates independently and
uniformly between endpoint minima and maxima (`evidence.mjs:15-19,32-45`). This is a declared product-volume measure,
not an empirically estimated distribution over institutions. The report does disclose independent sampling, but then
says `PRO-CENTRAL` is “≈parity,” has “~zero measure,” is “essentially never drawn,” and that “reaching parity needs that
corner” (`evidence.mjs:101-102`). Three parts are wrong or misleading:

1. `PRO_CENTRAL` is not approximately parity; it is the clear central win `m=−29.5%`.
2. Every exact continuous point has zero measure. What matters is the measure of the central-winning **region**.
3. The same repository locates parity at the interior point `t≈0.57`, not only at the endpoint corner
   (`frontier.mjs:58-67`; `e4-paper-section-draft.md:59-63`).

Independent sampling in 18 dimensions makes coordinated central-favourable mixtures rare by construction. Thus
“Core v0 wins 100% of the plausible envelope” (`evidence.mjs:98-102`) is only 400/400 draws under that chosen product
measure, not evidence that the declared box has no central-winning region. The plug-in binomial SE is also reported as
zero at 400/400 (`evidence.mjs:46-49`), although sampling uncertainty is not zero at a boundary.

Shortest repair: call this a **uniform independent sensitivity measure over the declared endpoint box**, replace the
corner explanation with the dependence-design caveat, report a Wilson/exact interval for the share, and include a
stratified/correlated path sample (at minimum the already-declared `t` path) before using the result as global evidence.

### 4. MEDIUM — softened anchor and uncertainty labels are only partially propagated

The paper now contains the essential honest qualification: most magnitudes are declared reference/stress points,
the political-opinion transport gap is not yet propagated, and the CIs cover inner Monte Carlo variability only
(`e4-paper-section-draft.md:33-39,65-71`). This is a real improvement and is acceptable under the requested bar.

However, contradictory stronger labels survive in user-facing paths:

- “three **evidence-anchored** scenarios” (`e4-paper-section-draft.md:12`);
- “PROBABLE scenario (evidence-anchored)” (`evidence.mjs:97`);
- “evidence-anchored expectable values” (`e4-plausible-anchors.md:99`), even though the ledger immediately above
  marks most load-bearing values `TBD`, in progress, or unfixed (`e4-plausible-anchors.md:13-24`), and the two detailed
  anchor decisions remain pending (`e4-plausible-anchors.md:103-125`).

“Plausible envelope,” “best plausible,” and “where reality sits” also suggest joint empirical support that has not
been established (`e4-paper-section-draft.md:43,61-63`; `evidence.mjs:98-102`). No new data are needed to fix this:
use **source-motivated declared reference**, **declared central-favourable endpoint**, **declared endpoint box**, and
**within the declared interpolation segment** consistently.

### 5. MEDIUM — “robust to any ONE assumption” exceeds the five one-factor slices actually run

The frontier driver sweeps only `s_exp`, `b_H_C`, `p`, `beta`, and `a_V` (`frontier.mjs:12-19`). Yet its closing claim
and the paper generalize this to “robust to any ONE assumption” (`frontier.mjs:69-70`; `e4-paper-section-draft.md:59-60`),
while the model has many other varying scenario coordinates. The correct, useful claim is narrower: **none of the five
prespecified one-factor slices crosses parity over its declared plotted range**. This is a wording correction, not a
request for target-domain data.

### 6. MEDIUM — the theorem is mathematically correct, but the engine-to-“no-myopia limit” bridge is still overstated

The lemma and parity algebra at `e4-parity-theorem.md:16-45` are correct. The large-`K` ratio-of-sums qualification is
also appropriately stated at lines 47-54, and the document correctly says the numerical DGP remains the object at
lines 56-60. The synthetic regression reproduces its one-signal identity at 0.17 MC SE.

What has not been shown is that the production engine “reduces to” this benchmark merely by taking a no-myopia limit
(`e4-parity-theorem.md:3-6`). The displayed benchmark central signal
`X_C=a+(b−w)S+w v_p+η` (`e4-parity-theorem.md:40-45`) equals the production support/harm signal only under an additional
restriction such as a constant harm gate with `b_H_C·s(V)=b−w`. The production DGP's `S`, central signal, and
thresholded/MNAR distributed signal are not jointly Gaussian, and `theorem-check.mjs:22-43` tests only synthetic
`X=alpha+bS+noise`, not a neutralized production-engine limit. The honest label is **stylized no-myopia Gaussian
benchmark** or **sanity-check identity**; if “limit” is retained, state the nesting restrictions and test that nested
engine configuration. This does not invalidate the theorem or the numerical results.

### 7. MEDIUM — the mechanism prose converts a declared proxy assumption into an empirical fact

The paper says the low-visibility long tail is “the mass of public projects” and that these projects “have no
anti-value voice in the status quo” (`e4-paper-section-draft.md:15-20`). It further reasons from heavy-tailed public-
procurement value to “most projects are low-visibility” (`e4-paper-section-draft.md:33-35`). The anchor note itself is
more careful: procurement value is only a size proxy for visibility, the bounded Beta model is stylized, and the source
is one-country evidence (`e4-plausible-anchors.md:113-124`). The paper should preserve that conditionality: the
mechanism operates **under the declared low-visibility-tail and voice assumptions**; the cited procurement evidence
supports direction, not the visibility distribution or absence of anti-value voice.

### 8. LOW — the draft claims a measurement plan but currently supplies only a measurement agenda

The paper names needed bridge data—planner forecasts and citizen value distributions (`e4-paper-section-draft.md:65-67`)
—then calls the artifact a “measurement plan” (`e4-paper-section-draft.md:70`). The anchor ledger is explicitly living,
with most mappings still TBD and decisions pending (`e4-plausible-anchors.md:13-24,103-125`). For publication, either
call this a **measurement agenda** or add a compact operational plan specifying samples, observables, parameter
mappings, dependence estimation, and how outer/transport uncertainty will be propagated. This is a planning/document
requirement, not a demand that the target data already exist.

## Direct answers under the requested bar

- **Is the four-scenario presentation genuinely balanced?** **Yes in the limited comparative sense** that it declares
  a central steelman that actually wins, a harm-aware/competent bundle near parity, a reference point, and a
  distributed-favourable stress point. **No as a symmetric or probabilistic design**; the central row stacks all
  central-favourable coordinates, the distributed row is explicitly moderated, and neither joint likelihood is known.
  The paper does not need symmetry, but should say “levels the field by exhibiting winning regions for both arms,” not
  imply equally likely or equally extreme cases.
- **Is the theorem correctly scoped?** **The identity is correct and mostly scoped honestly as a stylized Gaussian,
  fixed-threshold benchmark.** “Production no-myopia limit” is not yet established; rename it or state/test the extra
  nesting restrictions.
- **Are the CI and transport labels honest?** **Yes in the main limitations paragraph; no repository-wide.** The paper
  correctly says inner MC only and not-yet-propagated transport, but stronger `evidence-anchored` labels remain.
- **Multiplier relapse in the reviewed paper/theorem language?** **No.** The paper uses the signed benchmark-normalized
  gap `m` and reports `D/O` and `C/O`; it expressly says the result is not a multiplier or impact estimate
  (`e4-paper-section-draft.md:6,38-39,69-71`). Values above 100% are explained as differences with value destruction,
  not arm-to-arm folds.
- **Publication-ready as a comparative-institutions robustness result?** **NO — needs changes.** It is close and viable;
  the remaining defects are labeling, contrast definition, and evidence-design interpretation, not missing target data.

## Shortest path to publication-ready

1. Rename the current `NO_MYOPIA` row as the competent/harm-aware central bundle, or add a genuinely nested myopia-only
   row; stop attributing `+46.6% → +6.1%` to myopia alone.
2. Remove/generated-sync the duplicated scenario table and purge every stale “three scenario,” old continuity-anchor,
   and `evidence-anchored` label. Make the four scenario assumptions—not only their signs—testably traceable.
3. Rewrite the global-evidence interpretation: declared independent product measure, nonzero uncertainty at 400/400,
   and no “corner required” claim; incorporate the already-found correlated path or stratification.
4. Narrow “any one assumption” to the five plotted axes, and condition the long-tail/voice mechanism prose on its
   declared proxy assumptions.
5. Label the theorem a stylized Gaussian benchmark (or add the explicit nesting restrictions/test), and call the current
   empirical follow-up a measurement agenda unless an operational measurement plan is added.

After those five compact changes and rerunning the existing checks, I would judge E4 ready under the user's stated
robustness-paper bar, without waiting for target-domain calibration.
