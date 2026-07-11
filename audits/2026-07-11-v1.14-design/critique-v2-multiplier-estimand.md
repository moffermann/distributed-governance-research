# Dimension 1 — multiplier embargo and estimand

## Verdict

**PARTIAL: the prose-level defect is fixed, but the executable estimand and reporting embargo are not yet preregistration-ready.** v2 now defines `Δ_O=(D-C)/O` as a per-world signed normalized difference, assigns parity to 0, and explicitly gives the negative side to the central arm (`DESIGN_SKETCH_v2.md:6-14`). It also says that `D/C` is secondary, must be accompanied by `D/O` and `C/O`, and may not restore the `2.2×` presentation (`DESIGN_SKETCH_v2.md:10-11,81-84`). That clears the literal contradiction in v1, which had combined the additive estimand with ratio notation (`CRITIQUE_SUMMARY.md:18-22`). The companion foundation is also directionally consistent: its proposed boundary is `E[Δ_O|θ]=0` and it rejects a multiplier as the object (`research/e4-value-estimation-foundation.md:58-63,71-76`).

But there is still a **material multiplier-relapse risk: YES**. One named, shipped engine still leads with `D/C`, calls it “advantage,” and prints `x`; the supposedly compliant gate mixes three different population/sample functionals under the name `Delta`. Until those paths are removed or made mechanically subordinate to one frozen estimand, a report can reproduce either the old visual hierarchy or a parity result whose sign depends on an unstated aggregation choice.

## What v2 genuinely cleared

1. **The sign and units are now correct in the design.** `Δ_O` has parity at 0 and is described as a signed fraction or percentage points of `O`, never an `×` quantity (`DESIGN_SKETCH_v2.md:7-9`). This directly implements the first prior must-fix (`CRITIQUE_SUMMARY.md:18-22`).
2. **Central wins are not encoded as `Δ≤1`.** v2 explicitly defines central wins by `Δ_O<0` and distributed wins by `Δ_O>0` (`DESIGN_SKETCH_v2.md:7-14`).
3. **The exact `2.2×` output pattern is prohibited.** It is banned from examples, placeholders, profiles, titles, and figures (`DESIGN_SKETCH_v2.md:10-11`) and again excluded by the binding reporting section (`DESIGN_SKETCH_v2.md:81-84`). Neither named engine contains a literal `2.2×` output.
4. **`D/C` is at least conceptually demoted.** The design calls it a separate secondary diagnostic and requires `D/O` and `C/O` beside it (`DESIGN_SKETCH_v2.md:10-11`). That is the correct hierarchy on paper.

## Remaining issues and concrete fixes

### 1. Blocking — the gate does not implement one frozen estimand

The design says `Δ_O=(D-C)/O` **per world** (`DESIGN_SKETCH_v2.md:7-9`), while the foundation defines the parity surface using the conditional mean `E[Δ_O|θ]=0` (`research/e4-value-estimation-foundation.md:58-63`). The current gate does calculate each world's `Δ_w=(D_w-C_w)/O_w` (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-109`) and stores both its mean and median (`scripts/simulation/e5-sp-symmetry-gate.mjs:111-113`). However, its confidence routine resamples worlds and computes

`(ΣD_w-ΣC_w)/ΣO_w`,

not the bootstrap mean of `(D_w-C_w)/O_w` (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23`). The displayed row therefore places a confidence interval for a ratio of sums next to the mean and median of per-world ratios, without disclosing that it targets a different functional (`scripts/simulation/e5-sp-symmetry-gate.mjs:124-129`). The pooled decision then mixes cellwise mean signs, a pooled median of per-world `Δ`, and the lower bound for the ratio of sums (`scripts/simulation/e5-sp-symmetry-gate.mjs:140-155`).

This is not harmless when the object is a sign boundary. With two admissible worlds,

- world 1: `(D-C,O)=(+1,1)`, so `Δ_1=+1`;
- world 2: `(D-C,O)=(-2,100)`, so `Δ_2=-0.02`.

Then `mean(Δ_w)=+0.49` says “distributed wins,” while `(ΣD-ΣC)/ΣO=-1/101≈-0.0099` says “central wins.” `E[(D-C)/O]`, `E[D-C]/E[O]`, and `median((D-C)/O)` are different estimands, not interchangeable summaries.

**Fix:** Freeze one primary functional in mathematical notation. The existing foundation points to

`T(θ)=E_W[(D_W-C_W)/O_W | θ]`, with boundary `T(θ)=0`.

Make cell estimates and the world-cluster bootstrap target the sample mean of the stored per-world `Delta` values. Label medians and `E[D-C]/E[O]` as secondary robustness diagnostics if retained. Do not combine tests of different functionals into one parity decision. Rename the table columns from the misleading `mean D` / `med D` to `mean Δ_O` / `median Δ_O` (`scripts/simulation/e5-sp-symmetry-gate.mjs:124-129`). Add a unit test using the two-world counterexample above so a ratio-of-sums implementation cannot silently return.

### 2. Blocking — a named shipped engine still makes the retired ratio its lead output

The E4-v4 engine says its score is “distributed / central” (`scripts/simulation/e4-v4-symmetric-frontier.mjs:21-22`), constructs `r.d/r.c`, and takes its median across the box (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66`). Its first report is explicitly “median advantage distributed/central” (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-82`). Only afterward does it show `C/O` and `D/O` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:87-93`), reversing v2's promised hierarchy. Its crossover and capture sections still print values with an `x` suffix (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). This is an executable path from “run the shipped frontier” straight back to multiplier-shaped output.

The issue matters because v2 invokes this engine's frontier as the law to extend (`DESIGN_SKETCH_v2.md:74-78`); it is not an unrelated historical file. Calling it “no headline multiplier” in a comment (`scripts/simulation/e4-v4-symmetric-frontier.mjs:2-6`) does not quarantine an output whose lead table is a multiplier and whose trailing rows literally print `x`.

**Fix:** Do one of the following before preregistration:

- preferred: replace the lead grid with `T(θ)=mean_W((D-C)/O)` and a three-state sign/band classification; put `D/O` and `C/O` immediately beside it and delete `D/C` from the standard run;
- acceptable for reproducibility: move/freeze this engine as explicitly legacy, add a first-line runtime warning, and ensure the v2 runner never imports its reporting functions or consumes its ratio fields.

If `R=D/C` survives anywhere, print it as `R=1.54`, not `1.54x`, and put it in a separately titled diagnostic appendix after `D/O` and `C/O`. Add a CI/report lint that fails new v2 artifacts containing multiplier suffixes or `advantage distributed/central` outside a designated legacy directory.

### 3. Major — the secondary `D/C` diagnostic lacks a denominator/domain contract

v2 permits `R=D/C` but does not state what happens when `C=0`, `C<0`, or `C/O` is near zero (`DESIGN_SKETCH_v2.md:10-11`). The old engine already demonstrates the problem: it only includes a ratio when `C>0.05O` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64,68-71`). That outcome-dependent filter is not mentioned in v2, and a median after silently removing weak-central worlds is not the unconditional secondary diagnostic readers will infer. The engine itself acknowledges that `D/C` explodes as central delivery approaches zero (`scripts/simulation/e4-v4-symmetric-frontier.mjs:87-88`).

**Fix:** Prefer deleting `R`. If retained, preregister: (a) `R` is undefined and displayed as such when `C≤0`; (b) no filtered median of `R`; (c) the count/share of undefined and denominator-warning worlds; (d) a fixed warning threshold for small `|C/O|`; and (e) no use of `R` for boundary classification, intervals, titles, profiles, or prose conclusions. Never silently condition on `C/O>0.05`.

### 4. Major — `Δ_O` itself has no zero-reference policy

The typed primitives allow project scores to be negative, and nothing in v2 guarantees that a world contains a positive-value eligible portfolio (`DESIGN_SKETCH_v2.md:16-23`). In the gate, the full-information reference admits only projects with positive net value (`scripts/simulation/e5-sp-symmetry-gate.mjs:92-98`), so a world with none has `O=0`; the subsequent per-world division is unconditional (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-109`). Such a world yields `0/0`, `Infinity`, or `NaN` depending on arm portfolios and can contaminate or disappear from summaries without an explicit policy.

**Fix:** Define the estimand's population as worlds with `O>0`, or define a separate no-positive-opportunity outcome. Pre-register and report the frequency of `O=0`; do not silently drop those worlds. Add assertions that `O` is finite and positive before forming `Δ_O`, with a deterministic, documented branch for failures. Also report the distribution of `O`, because per-world normalization gives low-`O` worlds high leverage in `E[Δ_O]`.

### 5. Major — “secondary” is a prose promise, not an enforceable output contract

The reporting embargo forbids `×` specifically “for `Δ_O`” (`DESIGN_SKETCH_v2.md:81-82`), while the earlier section expressly retains `R=D/C` (`DESIGN_SKETCH_v2.md:10-11`). That leaves a formally compliant path to a figure, appendix table, or copied engine output headed by `R` and rendered as `1.54x`. The shipped E4-v4 output is exactly that path (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-82,95-104`). The exact `2.2×` string is banned, but nearby multiplier values can reconstruct the same hierarchy.

**Fix:** Strengthen the embargo from a notation rule to an output-precedence rule:

1. No `×`/`x` suffix for any institution-performance ratio in v2 outputs.
2. No `D/C` in the abstract, title, executive summary, scenario labels, filenames, lead tables, or figures.
3. Every allowed `R` cell must be preceded in the same row by `D/O` and `C/O` and carry “secondary, scale-unstable diagnostic.”
4. The primary result object and serialized schema should expose `delta_o`, `d_over_o`, `c_over_o`, and the parity class first; make `d_over_c` optional or omit it entirely.
5. Add snapshot tests for standard engine output and a repository check over newly generated v2 artifacts.

## Minimum acceptance test for this dimension

This dimension is cleared only when all of the following are true:

- one preregistered functional—not a mixture of mean, median, and ratio-of-sums—determines the parity surface;
- its bootstrap/interval code targets that same functional;
- `O=0` and small/negative `C` behavior are explicit and tested;
- the default v2 run cannot print `D/C` or an institution-performance `x` suffix;
- the legacy E4-v4 runner is either converted to `Δ_O`-first output or mechanically isolated from v2;
- a snapshot demonstrates that every primary table/figure leads with central/parity/distributed sign classes and `Δ_O`, with `D/O` and `C/O` before any optional ratio diagnostic.

Until then, the prose has retired the multiplier, but the computational/reporting surface has not.
