# Dimension 2 — parity objective versus floor

## Verdict

**PARTIAL: the positive-floor objective is cleared in prose, but the parity objective is not yet operationally specified.** v2 makes the right substantive reversal: it declares the sign/parity map primary, explicitly permits a central-win headline, makes the boundary rather than the advantage magnitude the object, and prohibits a positive-floor headline over assumed supports (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:6-14,81-84`). That directly answers prior must-fix 2, whose requirement was a three-region sign map and no floor unless empirically justified support excluded every central-winning state (`audits/2026-07-11-v1.14-design/CRITIQUE_SUMMARY.md:24-36`).

But this is not ready to preregister. The draft does not bind the stochastic functional that gets a sign, does not define or justify `delta`, conflates exact parity with practical equivalence, has no unresolved classification for Monte Carlo uncertainty, and leaves a support-weighted “region size” objective in the companion foundation. The only shipped implementations still privilege magnitude summaries or a positive threshold. Until a fresh engine and output schema implement the new objective, the fix is rhetorical rather than auditable.

## Specific issues

### 1. The object whose sign defines a region is not fixed in the design

The design defines `Delta_O=(D-C)/O` **per world**, then immediately writes regions such as `{theta: central wins}` without saying which functional of the world distribution is signed (`DESIGN_SKETCH_v2.md:7-14`). The companion foundation later writes `E[Delta_O | theta]=0` (`research/e4-value-estimation-foundation.md:58-63`), but that choice is not carried into the binding estimand/reporting section. It also leaves unresolved whether the target is

`E_W[(D-C)/O | theta]`, `(E_W[D]-E_W[C])/E_W[O]`, `median_W((D-C)/O)`, or a probability such as `Pr_W(D>C)`.

These are not interchangeable. The shipped gate demonstrates the problem in code: a cell's displayed `meanDelta` is the mean of world-level ratios (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-113`); its bootstrap interval is instead a ratio of resampled sums, hence approximately a ratio of expectations (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23`); and one gate criterion uses the median of world-level ratios (`scripts/simulation/e5-sp-symmetry-gate.mjs:146-155`). A “boundary” can move merely by switching among those three implementations.

**Fix:** Put one binding definition in section 0, for example

`m(theta) = E_W[(D_W-C_W)/O_W | theta]`, with exact parity frontier `B_0={theta:m(theta)=0}`.

State why this risk functional is the decision-relevant one, and label the ratio of expectations, median, and win probability as preregistered robustness outputs only. Unit-test the engine against that definition; the estimator and its interval must estimate the same functional.

### 2. The “practical-equivalence” band is presently an unmeasured magnitude threshold

v2 promises `[−delta,+delta]` but supplies neither a value nor a justification (`DESIGN_SKETCH_v2.md:7-9`); it only says the value will be preregistered later (`DESIGN_SKETCH_v2.md:70-72`). On a synthetic aggregation score that explicitly disclaims cardinal welfare (`DESIGN_SKETCH_v2.md:16-23`), calling the band **practical** overstates what is known. `delta=0.05`, for example, has no demonstrated policy meaning merely because the historical gate used 0.05. That historical number was a *rebuild go/no-go criterion*, not an equivalence margin: the code tests a pooled median against 0.05 and describes failure as not clearing the rebuild gate (`scripts/simulation/e5-sp-symmetry-gate.mjs:151-165`). The reproduced gate's 0.025 median failed that criterion despite all 18 selected cells being positive (`audits/2026-07-11-v1.14-design/canonical-symmetry-gate-rerun.txt:82-90`). Importing 0.05 would resurrect a magnitude hurdle under a new name.

There is also a categorical inconsistency. With `delta>0`, “central wins if below zero,” “approximately parity if within the band,” and “distributed wins if above zero” overlap. A band creates two decision boundaries, `m=-delta` and `m=+delta`, around the exact parity frontier `m=0`; it does not create one boundary.

**Fix:** Keep `B_0` as the scientific parity frontier. Separately define a non-overlapping decision partition: central-material if `m<-delta`, model-score-equivalent if `|m|<=delta`, and distributed-material if `m>delta`. Until an external loss/decision analysis validates `delta`, call it a **model-score tolerance** or **resolution band**, not practical equivalence. Justify it outcome-blind from a declared decision loss, measurement resolution, or simulation-resolution target, and show the map for several preregistered `delta` values including zero. Explicitly prohibit borrowing the gate's 0.05.

### 3. A three-color map will falsely turn numerical uncertainty into wins or equivalence

The draft separates inner from outer uncertainty (`DESIGN_SKETCH_v2.md:63-72`) but gives the primary map only three labels (`DESIGN_SKETCH_v2.md:12-14`). It never says whether a point estimate in the band is enough for “approximately parity,” whether failure to reject zero becomes parity, or how cells whose Monte Carlo interval crosses a decision boundary are shown. Those rules can make a favorable sign map by simulation budget or by treating “not significant” as equivalence.

The existing gate's cell label illustrates the danger: `pass` is just `meanDelta>0`, and every such point prints `D>C`, independently of interval width or any equivalence margin (`scripts/simulation/e5-sp-symmetry-gate.mjs:111-129`). That behavior is unsuitable for the proposed map.

**Fix:** Add an **unresolved** display state. For an interval `[L,U]` estimating `m(theta)`, certify central-material only if `U<-delta`, equivalent only if `[L,U]` lies wholly inside `[-delta,+delta]`, and distributed-material only if `L>delta`; otherwise mark unresolved. If the intervals quantify Monte Carlo error only, say so prominently and increase simulation until a preregistered numerical precision rule is met. Do not interpret a world-cluster interval as transport or parameter uncertainty, consistent with the draft's own warning (`DESIGN_SKETCH_v2.md:70-71`).

### 4. “How large each region is” smuggles the assumed support and measure back into the headline

The foundation calls the honest headline both “which side reality falls on” **and “how large each region is”** (`research/e4-value-estimation-foundation.md:58-63`). Region volume is not intrinsic to a parity surface. It depends on parameterization, bounds, grid density, and the probability measure placed on `theta`. Equal volume in `(a,w,b,beta,...)` changes under a monotone reparameterization; a percentage of cells is only a statistic of the analyst's grid. It can therefore recreate the old floor logic: choose an assumption box or density that makes the central-win region small, then present most of the “plausible” space as distributed-winning.

The old engine already does exactly the dangerous summary: it computes `fav/n` over a 54-point analyst-chosen box (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64`) and prints “fraction of box favoring distributed” (`scripts/simulation/e4-v4-symmetric-frontier.mjs:87-93`). The stored result ranges from `54/54` to `0/54` as the chosen `(gamma,beta)` cell changes (`research/e4-v4-symmetric-frontier-results.txt:19-45`). Those fractions are conditional grid counts, not evidence that one institution wins more often in reality.

**Fix:** Delete “how large each region is” from the headline. Lead with the frontier location and central-win side on named, interpretable slices. If region mass is retained, make it secondary, call it `mu(B)` under an explicitly named measure `mu`, report sensitivity to admissible supports/dependence/parameterizations, and never translate it into “probability reality is on this side” without an empirically identified distribution over `theta`.

### 5. No shipped engine makes the new sign map primary or central-led

The design promises a fresh adversarial gate (`DESIGN_SKETCH_v2.md:41-46`), so neither legacy engine can validate implementation of the new objective. The E4-v4 engine opens with “median advantage distributed/central,” prints the `D/C` magnitude table first, and only later prints oracle-normalized levels and box-favoring fractions (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66,73-93`). Its crossover and capture blocks return to advantage magnitudes (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its stored output does contain real central-win cells—11 of the 25 leading cells are below parity (`research/e4-v4-symmetric-frontier-results.txt:8-14`)—but the layout is distributed-first and magnitude-first, not the promised central-led categorical map.

The E5 gate uses the correct normalized per-world quantity, but it is a thresholded rebuild test, not the proposed anchored-central-arm parity surface (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-117,140-166`). Reusing either output template would undo the stated objective.

**Fix:** Before preregistration, ship the new engine with a machine-readable primary table containing `theta`, `m_hat`, numerical interval, classification, and boundary-distance diagnostic. Its first human-readable output and first figure must be the categorical map, legend ordered **central / equivalent / distributed / unresolved**, with central-winning slices displayed even when inconvenient. Raw magnitudes, `D/O`, `C/O`, and any box-mass statistic belong in later diagnostics. Add snapshot tests that fail if a magnitude table appears before the map or if known central-win fixtures disappear.

### 6. `O` needs a positivity/domain rule before one fixed band can be honest

The design calls `O` a full-information greedy reference but gives no rule for worlds with `O=0` or near zero (`DESIGN_SKETCH_v2.md:7-9,21-23`). A world-level normalized effect weights a fixed absolute difference by `1/O`; near-zero-reference worlds can dominate `m(theta)`, and a fixed `delta` corresponds to very different absolute score differences as `O` changes. The current gate avoids some pathologies by scoring true net value and making oracle eligibility require positive net (`scripts/simulation/e5-sp-symmetry-gate.mjs:92-99`), but the broader DGP is not yet bound to a positive lower reference.

**Fix:** Predefine the analysis domain (`O_W>epsilon`), the value and unit of `epsilon`, and the treatment/reporting of excluded or degenerate worlds. Report their frequency by `theta`. Stress-test the parity frontier under the selected normalization and the ratio-of-expectations alternative. If a common policy loss scale cannot justify one `delta` across world sizes and budgets, define the tolerance on a fixed ex ante reference or stratify it by declared scale rather than silently allowing `O_W` to set the practical threshold.

## Required preregistration edits

1. Bind `m(theta)` and its estimator; do not mix mean-of-ratios, ratio-of-means, and medians.
2. Separate exact parity `m=0` from the two `±delta` materiality boundaries; justify `delta` without borrowing 0.05.
3. Use a four-state certified display with unresolved cells and make clear which uncertainty each interval covers.
4. Remove region volume from the headline; any region-mass statistic must name its measure and show support/dependence sensitivity.
5. Implement and snapshot-test a central-led categorical output before calling must-fix 2 cleared.
6. Specify `O`'s positivity/domain rule and near-zero sensitivity.

With those changes, the design can honestly say “sometimes the central wins” without replacing the retired multiplier with a hidden magnitude threshold or an analyst-chosen favorable volume of parameter space.
