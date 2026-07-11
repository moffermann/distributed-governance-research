# Critique 4b — code-grounded symmetry-gate and E4 reproduction

## Verdict

**Not viable as written; formalizable only after a metric reset and an explicit new-model gate.** The sketch mixes two different estimands, calls both `Δ`, and then applies the decision threshold of one to the other. The controlling gate computes the oracle-normalized difference `(D-C)/O`, whose parity point is **0**. E4-v4 computes the ratio `D/C`, whose parity point is **1**. Thus the sketch's “`Δ ≤ 1 (central wins)`” and “`Δ ... 2.2×`” statements are false under its own definition of `Δ` ([DESIGN_SKETCH.md:32](./DESIGN_SKETCH.md#L32), [DESIGN_SKETCH.md:69](./DESIGN_SKETCH.md#L69), [DESIGN_SKETCH.md:82](./DESIGN_SKETCH.md#L82)).

The existing calculations also reject any unconditional positive floor over a region that admits a competent central estimator and materially adverse distributed voice bias. E4's result is a parity frontier with a substantial central-winning side, not a distributed-advantage floor. That is the honest mechanism result.

## Reproduction record

I ran the production scripts without modifying them:

```text
node scripts/simulation/e5-sp-symmetry-gate.mjs
node scripts/simulation/e4-v4-symmetric-frontier.mjs
node scripts/simulation/e4-analytical-backbone.mjs
```

Captured stdout is in `canonical-symmetry-gate-rerun.txt`, `canonical-e4-v4-frontier-rerun.txt`, and `canonical-e4-analytical-rerun.txt` in this audit directory.

The symmetry rerun reproduces the frozen numerical verdict: 18/18 primary cells positive, pooled median `(D-C)/O = 0.025`, bootstrap lower bound `0.025`, matched-budget low-information stress median `0.092`, and **NO-GO** because the median missed `0.05` ([canonical-symmetry-gate-rerun.txt:82](./canonical-symmetry-gate-rerun.txt#L82)-[90](./canonical-symmetry-gate-rerun.txt#L90)). A `git diff --no-index` against `audits/2026-07-10/symmetry-gate-results.txt` found only later human-readable label/verdict clarifications (`corrSP(8w diag)`, renaming “adversarial” to “matched-budget low-info stress,” and the more precise NO-GO prose), not numerical changes. This matches the code's explicit note that computation and decision rules were unchanged ([e5-sp-symmetry-gate.mjs:134](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L134)-[136](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L136)).

The analytical rerun reproduces `D/C = 1` on `γ + β = 1`, with central-winning ratios below the anti-diagonal: for example `(γ,β)=(0.5,0.75)` gives `0.87`, and `(1,1)` gives `0.36` ([canonical-e4-analytical-rerun.txt:6](./canonical-e4-analytical-rerun.txt#L6)-[14](./canonical-e4-analytical-rerun.txt#L14)). The stochastic E4-v4 frontier likewise reports `(1,0)=0.89` and `(1,1)=0.50` ([e4-v4-symmetric-frontier-results.txt:8](../../research/e4-v4-symmetric-frontier-results.txt#L8)-[14](../../research/e4-v4-symmetric-frontier-results.txt#L14)). More decisively, at `(γ,β)=(1,1)` distributed wins **0/54** box points; central is reported at median 80% of the oracle reference versus distributed at 46% ([e4-v4-symmetric-frontier-results.txt:41](../../research/e4-v4-symmetric-frontier-results.txt#L41)-[45](../../research/e4-v4-symmetric-frontier-results.txt#L45)).

## Severity-ranked, quotable issues

### 1. Critical — the proposed surface has two incompatible zero points

> “The sketch defines `Δ=(D-C)/O` but interprets `Δ` as though it were `D/C`. Under the declared estimand, parity is `Δ=0` and central wins iff `Δ<0`; under the old E4 ratio, parity is `D/C=1` and central wins iff `D/C<1`. A statement such as `Δ≤1 (central wins)` is not a conservative approximation—it is a category error.”

The gate computes `Delta.push((D-C)/O)` ([e5-sp-symmetry-gate.mjs:104](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L104)-[113](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L113)). E4-v4 instead stores `r.d/r.c` and explicitly prints “advantage>1” ([e4-v4-symmetric-frontier.mjs:59](../../scripts/simulation/e4-v4-symmetric-frontier.mjs#L59)-[64](../../scripts/simulation/e4-v4-symmetric-frontier.mjs#L64), [82](../../scripts/simulation/e4-v4-symmetric-frontier.mjs#L82)). The sketch defines the former at lines 32–34, then uses the latter's threshold at lines 69–70 and 82–83.

This also makes “state X → 2.2×” mathematically impossible as a label for the stated `Δ`. “2.2×” denotes `D/C=2.2`. It does **not** denote `(D-C)/O=2.2`; the conversion is

```text
(D-C)/O = (D/C - 1) * (C/O),
```

so it additionally depends on `C/O`. The old ratio can explode as `C` approaches zero, which is exactly why E4-v4 added the metric-honest `% of oracle` view ([e4-v4-symmetric-frontier.mjs:87](../../scripts/simulation/e4-v4-symmetric-frontier.mjs#L87)-[92](../../scripts/simulation/e4-v4-symmetric-frontier.mjs#L92)).

**Concrete fix:** reserve `Δ_O=(D-C)/O` for the primary surface and use the words “percentage points of the full-information reference,” with parity 0. If `R=D/C` is retained at all, label it a secondary diagnostic, never call it `Δ`, always co-report `D/O` and `C/O`, and prohibit `×` wording in profiles. Rewrite the open question as “Can `Δ_O<0` inside the admissible region?”

### 2. Critical — existing computation demonstrates a central-winning region; a positive floor can only be range-engineered

> “The inherited mechanism does not imply a distributed floor above parity. It implies a parity locus and two regions. Any claimed positive floor follows from excluding the central-winning side of that locus through the plausibility support.”

The analytic code defines central harm weight `θ_C=γ`, distributed harm weight `θ_D=1-β`, and derives distributed dominance iff `β<1-γ` ([e4-analytical-backbone.mjs:6](../../scripts/simulation/e4-analytical-backbone.mjs#L6)-[13](../../scripts/simulation/e4-analytical-backbone.mjs#L13)). The reproduced grid contains many central-winning cells. The stochastic frontier contains box locations where distributed wins 0/54 ([e4-v4-symmetric-frontier-results.txt:30](../../research/e4-v4-symmetric-frontier-results.txt#L30), [35](../../research/e4-v4-symmetric-frontier-results.txt#L35), [38](../../research/e4-v4-symmetric-frontier-results.txt#L38)-[45](../../research/e4-v4-symmetric-frontier-results.txt#L45)).

The sketch cites this old locus as `β=1−η` ([DESIGN_SKETCH.md:84](./DESIGN_SKETCH.md#L84)-[85](./DESIGN_SKETCH.md#L85)). That notation is legitimate: the repository explicitly says the paper renames E4 code's `γ` to `η` ([e4-analytical-backbone.md:36](../../research/e4-analytical-backbone.md#L36)-[39](../../research/e4-analytical-backbone.md#L39)). The real defect is that neither `η` nor `γ` appears in the proposed new `θ`, and no equation maps the new `ρ_proxy`/`b` mechanism to the old harm-weight coefficient. Separately, `eta:0.1` appears in the symmetry gate's frozen parameter object but is never read by that gate calculation ([e5-sp-symmetry-gate.mjs:29](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L29)-[30](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L30)); it cannot supply the missing bridge.

**Concrete fix:** lead with a signed parity/frontier claim: identify the support where `Δ_O>0`, `=0`, and `<0`; report `Pr(Δ_O<0)` under any stated joint plausibility distribution; and state plainly that “sometimes the status quo wins.” Before any floor is allowed, show that every excluded central-winning configuration is empirically—not rhetorically—implausible. Keep the paper's declared `η` notation if desired, but define and prove a mapping from the new mechanism rather than borrowing the old formula without a corresponding parameter.

### 3. High — the sketch's θ is not the gate's mechanism, so the gate cannot validate the new surface

> “The proposed `ρ_proxy`, `b`, `τ_C`, and `τ_D` surface is not a re-expression of the symmetry gate. It is a new data-generating process with no code-to-contract mapping and no inherited validation.”

In the gate:

- `rho` correlates a reach latent `a` with a **credit** latent `cLat`, after which `P=exp(sigP*cLat)` ([e5-sp-symmetry-gate.mjs:33](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L33)-[49](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L49)). It is not the sketch's “share of structural cross-project value the proxy tracks” ([DESIGN_SKETCH.md:43](./DESIGN_SKETCH.md#L43)).
- Central bias is the bounded ranking mixture `λ` between standardized estimated net value/cost and credit/cost ([e5-sp-symmetry-gate.mjs:79](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L79)-[90](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L90)). There is no implemented planner projection parameter `b`.
- Both arms use the same `tau` noise, in accord with the contract's shared appraisal-error process ([e5-sp-symmetry-gate.mjs:60](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L60)-[74](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L74), [79](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L79)-[85](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L85); [claim-and-estimand-contract.md:24](../../research/claim-and-estimand-contract.md#L24)-[30](../../research/claim-and-estimand-contract.md#L30)). Splitting it into freely ranged `τ_C` and `τ_D` reintroduces an arm asymmetry unless a common measurement model identifies the difference.
- The gate ranks **net** value `S-h·cost` ([e5-sp-symmetry-gate.mjs:63](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L63)-[65](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L65)), while the sketch says D and C are delivered aggregate `S` and omits `h` from θ ([DESIGN_SKETCH.md:32](./DESIGN_SKETCH.md#L32)-[34](./DESIGN_SKETCH.md#L34)). That conflicts with the controlling outcome contract ([claim-and-estimand-contract.md:16](../../research/claim-and-estimand-contract.md#L16)-[19](../../research/claim-and-estimand-contract.md#L19)).

**Concrete fix:** publish a parameter crosswalk before preregistration: theoretical construct → code symbol → generating equation → admissible support → data source. Either (a) keep the frozen gate constructs (`λ`, latent credit correlation, shared `τ`, `h`, matched budget) and extend them minimally, or (b) call v1.14 a new exploratory model and subject it to a fresh symmetry review and negative controls. It cannot inherit the old gate's credibility by citation.

### 4. High — `p` and `β` are coupled to central information in the actual gate, invalidating naive one-parameter interpretations

> “In the canonical gate, participation does not perturb only the distributed arm. `p` and `β` determine the distributed expected report count, which then determines the central arm's appraisal bandwidth. A sensitivity index labelled ‘coverage effect’ would therefore be a compound matched-budget effect.”

The distributed loop accumulates `expReports` using `p` and `p(1-β)` ([e5-sp-symmetry-gate.mjs:68](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L68)-[74](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L74)); central samples `mC=round(expReports/K)` observations per project ([e5-sp-symmetry-gate.mjs:77](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L77)-[85](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L85)). This explains why the contract warns that the 0.092 stress result reflects scarce **shared** bandwidth, not resilience to participation decay ([claim-and-estimand-contract.md:84](../../research/claim-and-estimand-contract.md#L84)-[92](../../research/claim-and-estimand-contract.md#L92)).

The sketch's θ table instead labels `p,τ_D` as distributed coverage/report noise and `τ_C` as central error without specifying the matched-budget equation ([DESIGN_SKETCH.md:45](./DESIGN_SKETCH.md#L45)-[48](./DESIGN_SKETCH.md#L48)). If the new model holds central bandwidth fixed when `p` changes, it abandons the gate's symmetry. If it preserves matching, a first-order Sobol index for `p` cannot be read as the distributed channel alone.

**Concrete fix:** make total appraisal resources a primitive `B_info`; derive both arms' sampling allocations from it. Hold `B_info` fixed for mechanism comparisons, and treat endogenous participation as routing within that budget. Report paired controlled contrasts for routing, voice bias, noise, and credit separately. Use dependent-input Shapley effects or explicit scenarios when the empirical joint distribution couples participation, noise, and proxy quality; do not give independent-input Sobol indices causal names.

### 5. High — “min (or 5th percentile)” is not one floor, and the existing gate does not estimate either proposed object

> “A support minimum and a prior-weighted fifth percentile answer different questions. Calling either one ‘the floor’ lets the analyst switch estimands after seeing an inconvenient tail.”

The sketch leaves this choice open ([DESIGN_SKETCH.md:56](./DESIGN_SKETCH.md#L56)-[59](./DESIGN_SKETCH.md#L59)). A minimum is a property of the declared support and is dominated by range boundaries; a fifth percentile is a property of the chosen probability measure and can be raised simply by assigning little mass to central-favouring states. Neither is the symmetry gate's pooled median decision quantity ([e5-sp-symmetry-gate.mjs:146](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L146)-[165](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L165)). Moreover, `O` is expressly not guaranteed optimal or an upper bound ([claim-and-estimand-contract.md:16](../../research/claim-and-estimand-contract.md#L16)-[19](../../research/claim-and-estimand-contract.md#L19)), so “percent of optimum” and intuitive `[−1,1]` bounds are unavailable.

**Concrete fix:** choose before running: (1) the signed infimum over a closed, empirically justified support, reported as a robustness bound; and separately (2) named quantiles under a fully specified joint plausibility distribution, reported as distribution-dependent summaries. Pre-register how near-zero or negative `O` is handled and always co-report `D/O`, `C/O`, and `D-C` in native model units.

### 6. Medium — the interval code and the point summary are different functionals

> “The gate's displayed median is the median of per-world normalized differences, but its bootstrap interval is built from a ratio of resampled sums. Reusing the label ‘95% Monte-Carlo interval for Δ’ without naming the functional will manufacture ambiguity.”

`bootDelta` calculates `(ΣD−ΣC)/ΣO` in every resample ([e5-sp-symmetry-gate.mjs:21](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L21)-[23](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L23)); the cell point summaries separately calculate mean and median of per-world `(D-C)/O` ([e5-sp-symmetry-gate.mjs:104](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L104)-[113](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L113)). At the pooled gate, values from repeated seeds across 18 cells are flattened before bootstrapping ([e5-sp-symmetry-gate.mjs:140](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L140)-[147](../../scripts/simulation/e5-sp-symmetry-gate.mjs#L147)); that is not a cluster bootstrap by common world seed across θ cells.

**Concrete fix:** define each profile estimand exactly—median per-world `Δ_O`, expectation of `Δ_O`, or ratio of expectations—and bootstrap that same functional. For summaries spanning θ cells evaluated on common seeds, resample world IDs as clusters and retain all θ evaluations for a selected world. Keep Monte-Carlo error separate from parameter-distribution uncertainty and empirical sampling uncertainty.

## Required implementation changes before preregistration

1. Freeze one primary estimand: `Δ_O=(D-C)/O`, parity 0, central wins below 0. Ban `×` syntax for it.
2. Replace the “floor” headline with a parity/frontier headline unless empirical support excludes the central-winning region. Report central-winning states, not just favourable quantiles.
3. Provide the complete theory-to-code parameter crosswalk; restore `h`, matched information budgets, bounded `λ`, and the shared-noise symmetry unless separately identified evidence warrants a change.
4. State the documented `γ`-in-code/`η`-in-paper notation crosswalk; never cite the old closed form for the new `ρ_proxy/b` model without a new derivation and corresponding parameter.
5. Separate a support infimum from prior quantiles, and pre-register the joint input distribution plus dependent-input sensitivity method.
6. Re-run an adversarial symmetry gate for the actual v1.14 DGP, including negative controls and explicit central-winning profiles. The old gate is evidence about the old mechanism, not a validation certificate for the proposed one.

## Bottom line

The code supports a publishable qualitative statement of the form: **comparative advantage changes sign across an interpretable mechanism frontier**. It does not support “the distributed architecture has a positive plausible floor,” and it emphatically does not support putting `2.2×` inside an oracle-normalized-difference surface. Keeping the latter would resurrect the retired multiplier through a notation error and range selection.
