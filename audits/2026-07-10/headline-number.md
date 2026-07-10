# Independent audit of the E5-SP headline number

Date: 2026-07-10

The canonical commands reproduce the recorded sparse frontier, including 8.1% `S<0`, 35.9% below the hurdle, and ratios 1.91x/2.36x at the two grid rows used for the claimed band. The headline nevertheless fails re-derivation: when `corr(S,P)` is computed over all simulated worlds and the frontier is evaluated at the actual 0.10 and 0.30 endpoints, the exact configuration gives 2.28x and 1.75x, respectively, with a midpoint near 2.0x—not ~2.1x with a 1.9–2.4x band. The literature does not identify the chosen correlation interval, `h=2.5`, or the 1.30x differential delivery factor; each is a model assumption or fitted transformation. **Verdict: do not propagate the proposed headline as a literature-calibrated result.**

## Verdict

**Not defensible for propagation as written.** There are three distinct statements, only one of which is supported:

1. **Reproducible sparse-grid output:** supported. The canonical 20-seed run prints 1.91x at displayed correlation 0.25 and 2.36x at 0.10; the held-out seed base prints 1.93x at 0.26 and 2.29x at 0.13. Raw output is in Appendix A.
2. **Ratio over `corr(S,P) in [0.1,0.3]`:** refuted. The corrected 100-seed/all-world frontier is **1.75–2.28x**, honestly rounded to **~1.8–2.3x**, with a midpoint near **~2.0x**. Removing the imposed 1.30x delivery ratio gives selection **~1.35–1.75x**, not 1.5–1.8x.
3. **Literature-calibrated empirical headline:** unverified. The Gilens–Page coefficient is not `corr(S,P)`; the hurdle has no mapping from a 10% EIRR to `h=2.5`; the 35% implemented-project anchor is applied to the candidate universe; and the 1.30x delivery ratio is imposed from incompatible quantities.

The narrowest honest statement available now is:

> Under the exact base-case assumptions—`w=0`, budget share 1/3, a central ranking `P/cost`, candidate-universe prevalence fitted by `mean=0.27` and `h=2.5`, and fixed delivery factors 0.75/0.975—the simulation gives about **2.0x**, with **~1.8–2.3x** over measured `corr(S,P) in [0.1,0.3]`.

That is a **conditional scenario range**, not an empirical confidence interval or literature-grounded forecast. Applying only the engine's own stated delivery range expands it to about **1.7–2.4x**; settings already contemplated by this project (`w=0.3`, budget share 0.2–0.5, or pure-P central ranking) produce an observed one-at-a-time envelope of at least **1.40–2.85x**. Because those structural choices are not calibrated, no empirically honest point estimate currently exists.

## Critical findings

### Critical 1 — The claimed 1.9–2.4x interval is not the frontier over the stated correlations

The engine sweeps a latent `rho`, not Pearson `corr(S,P)`: `cLat=rho*a+sqrt(1-rho^2)*g()` and then `P=exp(sigP*cLat)` (`scripts/simulation/e5-sp-model.mjs:63-74`). Nonlinear reach, quality, sampling, and exponentiation change the realized correlation, despite the output saying `"rho=corr(S,P)"` (`scripts/simulation/e5-sp-model.mjs:228-232`).

The reported correlation is also calculated from only the first four worlds:

> `for(let i=0;i<Math.min(4,R.length);i++)` (`scripts/simulation/e5-sp-model.mjs:238`)

while the ratio aggregates all worlds (`scripts/simulation/e5-sp-model.mjs:233-237`). The coarse grid contains only latent values 1.0, 0.8, 0.6, 0.4, 0.2, and 0.0 (`scripts/simulation/e5-sp-model.mjs:55,233`). The project treated the 0.25-correlation row as the 0.30 endpoint and the 0.10 row as the 0.10 endpoint (`research/e5-sp-preregistration.md:93-108`).

I reran the same engine read-only, replacing only the displayed-correlation aggregation with all 100 worlds and using a denser latent grid:

```powershell
$code=Get-Content -Raw -LiteralPath 'scripts/simulation/e5-sp-model.mjs'; $code=$code.Replace('i<Math.min(4,R.length)','i<R.length'); $code=$code.Replace('RHOS: [1.0, 0.8, 0.6, 0.4, 0.2, 0.0]', 'RHOS: [0.2, 0.4, 0.5, 0.6]'); $code | node --input-type=module - --concentrate=1 --byValue=1 --seedBase=100000 --seeds=100
```

Raw result:

```text
rho  corr(S,P)  harm%  belowH%  cen netNeg%  cen%oracle  dis%oracle  ratio
0.2     0.10     8.4     36.3       25.9          55          97      2.28x
0.4     0.23     8.4     36.3       22.0          67          97      1.89x
0.5     0.30     8.4     36.3       19.9          72          97      1.75x
0.6     0.38     8.4     36.3       17.6          78          97      1.63x
```

Therefore the exact-config band over the claimed measured-correlation interval is **1.75–2.28x**, not 1.9–2.4x. Interpolating the correlation midpoint near 0.20 between the 0.23 and 0.10 rows gives approximately 2.0x; the printed ~2.1x point is latent `rho=0.3`, whose realized correlation is about 0.15–0.16, not the interval midpoint. Dividing 1.75–2.28 by the hard-coded 1.30 delivery ratio gives selection **1.35–1.75x**.

This directly contradicts the proposed `"~2.1x (band ~1.9–2.4x over corr(S,P) in [0.1,0.3])"` (`research/e4e5-value-model-v2.md:140-143`; `research/e5-sp-paper-propagation.md:3-10`).

### Critical 2 — Gilens–Page does not calibrate `corr(S,P) in [0.1,0.3]`

The entire preferred interval is derived in one unsupported step:

> average-citizen independent influence `~0.03`; raw mass-policy congruence `~0.3`; therefore `corr(S,P) in [0.1,0.3]` (`research/e5-sp-preregistration.md:61-64`).

In Gilens and Page, 0.03 is an unstandardized multivariate coefficient for average-citizen preferences; the standardized coefficient is 0.01. The dependent variable is binary policy adoption and the predictors are transformed survey support and interest-group alignment, not project social value and political credit. The primary paper describes the standardized coefficients and variables explicitly ([Gilens & Page 2014, Table 3 notes](https://www.cambridge.org/core/journals/perspectives-on-politics/article/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B)). The repository gives no statistical mapping from either coefficient to Pearson `corr(S,P)`; the asserted `~0.3` raw correlation is **unverified**.

The model constructs are different again: `S` is a sum of simulated interested-citizen valuations, whereas `P` is an exponentiated latent variable correlated with the reach latent (`scripts/simulation/e5-sp-model.mjs:58-75`). The code does not model the stated `visibility x traceability x beneficiary-concentration` components (`research/e4e5-value-model-v2.md:45-50`).

The design note itself identified the unresolved requirement:

> "`corr(S,P)` must be measured (Gilens-Page), not posited, or we assume the conclusion" (`research/e4e5-value-model-v2.md:108-116`).

That measurement was not done. Instead, the note says the selected interval `"RECOVERS the old ~2.2x magnitude"` (`research/e4e5-value-model-v2.md:205-210`), and the preregistration admits it is `"honestly post-exploratory"` (`research/e5-sp-preregistration.md:32-38`). This is outcome-aware scenario selection, not an exogenous calibration.

## Major findings

### Major 1 — `h=2.5` is a fitted scale parameter, not an opportunity-cost or social-discount-rate calibration

The literature anchor defines net social value as a discounted stream of benefits minus investment, operating, maintenance, externality, and opportunity costs (`drafts/positive-net-social-value-calibration.md:15-37`). Its EIRR equivalence depends on the time profile of cash flows and on the social discount rate (`drafts/positive-net-social-value-calibration.md:62-98`).

The engine instead draws cost uniformly from 1 to 10, sums arbitrary individual valuation units into `S`, and computes `net=S-h*cost` (`scripts/simulation/e5-sp-model.mjs:58-75,112-125`). A 10% discount rate does not imply multiplying a one-period random cost by 2.5. No duration, flow profile, benefit/cost unit mapping, or empirical return distribution derives `h=2.5`; the parameter is selected to reproduce an incidence.

The incidence is not scale-invariant. `S` grows with population and reach while cost does not (`scripts/simulation/e5-sp-model.mjs:58-75`). Read-only stress runs gave:

```text
N=1000:  harm=16.9%, belowH=71.3%; ratios 2.62x at corr=.28 and 3.62x at corr=.13
N=5000:  harm= 8.1%, belowH=35.9%; ratios 1.91x at corr=.25 and 2.36x at corr=.10
N=10000: harm= 6.3%, belowH=21.9%; ratios 1.92x at corr=.20 and 2.24x at corr=.07
```

Changing only the former reach settings to `muF=-1.5,sigF=1.2` with the same `mean=0.27,h=2.5` produced only 6.9% below the hurdle, not 35.9%:

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --muF=-1.5 --sigF=1.2
```

The current reach settings and hurdle appear together in the canonical parameter block (`scripts/simulation/e5-sp-model.mjs:28-46`), but the tornado varies `sigF` only, not `muF`, population, or the cost/value normalization (`scripts/simulation/e5-sp-model.mjs:176-188`). Calling `h=2.5` literature-calibrated is false; only its fitted candidate prevalence is reproducible.

### Major 2 — The 35% anchor is applied to the wrong population, and "8% true harm" overstates the source

The calibration note defines the target over **implemented public projects** (`drafts/positive-net-social-value-calibration.md:39-58`). The roadmap therefore required tuning the central's **funded portfolio** to about 65% net-positive (`docs/03_ROADMAP.md:38-45`; the archived specification is even more explicit at `docs/03_ROADMAP_HISTORY.md:718-727`).

The engine instead reports `belowHurdle=belowH/K` over all 500 candidate projects (`scripts/simulation/e5-sp-model.mjs:126-129`). At the claimed operating rows, the central's realized portfolio is only 21.3–25.6% net-negative in exploration and 22.1–25.8% held-out; even the held-out low-correlation edge is 29.7%, not 35% (canonical and held-out output in Appendix A; `research/e5-sp-preregistration.md:93-113`). The statement that 35% is the low-correlation central-portfolio edge (`research/e4e5-value-model-v2.md:148-150`) is contradicted by the engine.

The source supports approximately 25% below a 10% completion EIRR, 14% below 5%, and 8% with zero or negative EIRR (`drafts/positive-net-social-value-calibration.md:117-152`). It does not establish that the entire last group has negative gross social value `S<0`. Pohl and Mihaljek state that many recorded negative IRRs economically mean zero output, while active negative returns require the narrower case of variable costs exceeding benefits ([Pohl & Mihaljek 1992, pp. 260 and 272](https://documents1.worldbank.org/curated/en/415211468782167392/pdf/Project-evaluation-and-uncertainty-in-practice-a-statistical-analysis-of-rate-of-return-divergences-of-1-015-World-Bank-projects.pdf)). The engine's label `"~8% actively net-harmful"` (`scripts/simulation/e5-sp-model.mjs:28-34`) is therefore **unverified**.

Finally, 65% itself is not directly estimated: the note subtracts an author-chosen ten percentage points from the 75% benchmark and says the adjustment is not estimated (`drafts/positive-net-social-value-calibration.md:212-264`). It requires sensitivity over 50–75% (`drafts/positive-net-social-value-calibration.md:276-296`).

### Major 3 — The central funding rule does not match the written mechanism, and the choice is material

`fund(...,false)` sorts by `score/cost` (`scripts/simulation/e5-sp-model.mjs:80-85`). The main central hard-codes `false`, so it ranks `P/cost`; the canonical distributed hard-codes `byValue=1`, so it ranks pure sampled value (`scripts/simulation/e5-sp-model.mjs:48,123-124`). This contradicts the design statement that the politician ranks by `P` exactly as a citizen ranks by `S` (`research/e4e5-value-model-v2.md:45-48,84-91`).

I changed only the central call from cost-adjusted P to pure P in memory. No repository file was written:

```powershell
$code=Get-Content -Raw -LiteralPath 'scripts/simulation/e5-sp-model.mjs'; $code=$code.Replace('i<Math.min(4,R.length)','i<R.length'); $code=$code.Replace('RHOS: [1.0, 0.8, 0.6, 0.4, 0.2, 0.0]', 'RHOS: [0.2, 0.4, 0.5, 0.6]'); $code=$code.Replace('fund(cen,cost,K,budget,null,false)','fund(cen,cost,K,budget,null,true)'); $code | node --input-type=module - --concentrate=1 --byValue=1 --seedBase=100000 --seeds=100
```

```text
corr(S,P)       0.10   0.23   0.30
P/cost central  2.28x  1.89x  1.75x
pure-P central  2.83x  2.18x  1.95x
```

The choice shifts the target endpoints by 11–24%. The headline is a specification output, not a mechanism-invariant estimate.

The distributed also receives an oracle hurdle gate: it observes sampled valuations in `dis` (`scripts/simulation/e5-sp-model.mjs:95-97`), but the gate is built from full-population true `net` (`scripts/simulation/e5-sp-model.mjs:114-117`) and is then applied only to the distributed arm (`scripts/simulation/e5-sp-model.mjs:123-124`). This information asymmetry was numerically small at N=5000 in a sampled-net audit variant, but it is structurally favorable to the distributed arm and must be disclosed or removed.

### Major 4 — The 1.30x delivery layer is imposed from incompatible quantities and overlaps selection

The 1.30x factor is algebraic: the engine sets `fWeak=0.75,fVer=0.975` (`scripts/simulation/e5-sp-model.mjs:50-54`) and multiplies the two selected net-value sums by those constants (`scripts/simulation/e5-sp-model.mjs:88,121-125`). Selection times delivery therefore multiplies by construction.

The IMF PIE-X anchor does not identify this comparison:

- Its measured efficiency gap includes lower-value sector/project selection, distorted appraisal, procurement, delays, overruns, maintenance, and corruption (`drafts/public-investment-efficiency-loss-calibration.md:85-100`). Applying the full gap after separately imposing agenda-driven selection duplicates at least the selection component.
- The note expressly says infrastructure-output efficiency is not social-value loss without an additional welfare model (`drafts/public-investment-efficiency-loss-calibration.md:139-151`). The engine nevertheless scales net welfare directly.
- Pohl completion EIRRs already reflect construction costs, delays, and initial operating performance (`drafts/positive-net-social-value-calibration.md:184-208`), so calibrating project signs to that completion distribution and applying a second full delivery loss has unresolved empirical overlap.
- The distributed `0.975` is obtained by dividing a broad 25% PIE-X gap by an E4-v5 `~10x capture-resistant` result (`research/e4e5-value-model-v2.md:165-170`). E4-v5 defines that 10x object as a rent threshold, calls its magnitude model-internal (`research/e4-v5-capture-design.md:14-19,67-80`), and says the honest output is a conditional threshold, `"not a multiplier"` (`research/e4-v5-capture-design.md:144-153`). A threshold ratio does not imply one-tenth the total public-investment efficiency loss.

Thus `fWeak=0.75` is at best a broad scenario, `fVer=0.975` is **unverified**, and delivery 1.30x is not literature-estimated. Without a separately identified production-only welfare factor, only the conditional selection result—about 1.35–1.75x in the corrected exact configuration—can be reported.

### Major 5 — The tornado does not bracket uncertainty and its conclusion contradicts its own output

The tornado is one-at-a-time at fixed latent `rho=0.3` (`scripts/simulation/e5-sp-model.mjs:168-188`), whose measured correlation is about 0.15–0.16, not the claimed midpoint 0.2. It omits `muF`, population, cost scale, budget share, `sigP`, `projSpread`, participation rate, central ranking, and joint uncertainty. It varies `fVer` while holding the IMF-linked `fWeak` fixed (`scripts/simulation/e5-sp-model.mjs:180`), so its 1.20–1.32 delivery ratios do not cover the stated 1.23–1.39 band (`scripts/simulation/e5-sp-model.mjs:50-54`; the calibration note requires central loss 20%, 25%, and 30% at `drafts/public-investment-efficiency-loss-calibration.md:286-300`).

Its own `w` row moves the ratio from 2.08x to 1.40x, yet it concludes that other knobs move the result `"modestly -> robust"` (`scripts/simulation/e5-sp-model.mjs:182,189`). That conclusion is false.

Omitted budget scarcity is material even in simple one-at-a-time runs:

```text
budgetFrac=0.2: 2.26x at corr=.25; 2.85x at corr=.10
budgetFrac=1/3: 1.91x at corr=.25; 2.36x at corr=.10
budgetFrac=0.5: 1.70x at corr=.25; 1.91x at corr=.10
```

The engine's documented delivery endpoints, applied to the corrected selection endpoints, already imply approximately **1.66–2.43x**. Across `w=0.3` and budget shares 0.2–0.5, the observed one-at-a-time structural envelope is at least **1.40–2.85x** before joint uncertainty. The proposed 1.9–2.4x band is not an uncertainty interval.

Seed noise is not the problem. A 100-world disjoint run produced 1.33, 1.46, 1.65, 1.92, 2.34, and 2.94 across the coarse frontier, close to the 20-world exploration and held-out runs. Structural calibration dominates Monte Carlo error.

### Major 6 — `--cats` is not a decomposition of the hurdle headline

`evalCat` ranks and delivers gross `S`; it never constructs `net=S-h*cost` and never gates below-hurdle projects (`scripts/simulation/e5-sp-model.mjs:137-151`). It also applies the common `byValue` setting to central, distributed, and oracle (`scripts/simulation/e5-sp-model.mjs:147-151`), unlike the main path's P/cost central and pure-value distributed (`scripts/simulation/e5-sp-model.mjs:123-124`). Its macro/allocation factors therefore do not decompose the current net-value headline.

The held-out note also mixes seed bases. It says seed 5000 was used with `--cats` and `--tornado` (`research/e5-sp-preregistration.md:86-90`), but the reported macro/allocation and tornado numbers (`research/e5-sp-preregistration.md:93-100,124-129`) reproduce seed 1000. Actual seed-5000 outputs are tornado baseline 2.12 rather than 2.08 and, at latent `rho=0.2`, macro/allocation 0.79/2.00 rather than 0.81/1.94.

### Major 7 — Agreement with the old ~2.2x ABM is not corroboration

The paper's original 2.22x comes from a different 40-project salience/quality apparatus (`drafts/paper.md:580-595`), a delivery experiment with hidden executor types and audit controls (`drafts/paper.md:865-890`), and an E7 audit-calibrated baseline (`drafts/paper.md:941-970`). The current engine instead uses 5,000 citizens, 500 projects, reach-correlated credit, a static hurdle, and fixed delivery fractions (`scripts/simulation/e5-sp-model.mjs:26-56,58-125`). The estimands and baselines are not matched.

More importantly, the old number was known during calibration: the new design says its chosen band `"RECOVERS the old ~2.2x magnitude"` (`research/e4e5-value-model-v2.md:205-210`), and the new work is explicitly post-exploratory (`research/e5-sp-preregistration.md:32-38`). Numerical agreement after outcome-aware model revisions is not independent replication. It is, at most, face-validity coincidence; corroboration is **unverified**.

## Minor findings

### Minor 1 — Guards catch an empty oracle but not invalid headline states

The only substantive assertion is `oracle NET delivered value must be >0` (`scripts/simulation/e5-sp-model.mjs:121-122`). CLI values are otherwise accepted without domain or finite-output checks (`scripts/simulation/e5-sp-model.mjs:161-163`). `--fWeak=0` exits successfully and prints `Infinityx` plus `NaN%`; negative delivery factors and negative central values are also unguarded. The tornado checks `PARAMS.rho` (`scripts/simulation/e5-sp-model.mjs:170`), but `rho` is absent from `PARAMS`, so `--rho=...` is silently ignored by the parser.

`--concentrate=1` is inert in the canonical frontier: `concentrate` is read only when `lumpiness>0` (`scripts/simulation/e5-sp-model.mjs:101-111`), while the normal frontier calls `evalWorld` with its default `lumpiness=0` (`scripts/simulation/e5-sp-model.mjs:90,233-234`).

### Minor 2 — The ratio has no sampling interval

The paired bootstrap covers only `Delta=(d-c)/o` (`scripts/simulation/e5-sp-model.mjs:157-159,236-241`). The compound ratio `d/c` has no confidence interval. The claimed 1.9–2.4x band is a selected parameter range, not a statistical interval.

## Required changes before any paper propagation

1. Compute `corr(S,P)` over every world used for each ratio, use a dense or inverted latent grid, and change the base-case report to **~2.0x, conditional ~1.8–2.3x** unless later calibration changes it.
2. Remove the Gilens–Page coefficient-to-correlation conversion. Either estimate the project-level `corr(S,P)` construct from relevant data or report the full frontier without a preferred empirical interval.
3. Replace `S-h*cost` with a dimensionally coherent benefit/cost or discounted-cash-flow model. Calibrate the **funded/implemented portfolio**, not all candidates, and stop calling all nonpositive EIRR projects active harm.
4. Make central and distributed ranking/information rules match the written mechanism; preregister and report P, P/cost, mixed `w`, and sampled-net variants.
5. Separate selection from a production-only welfare conversion. Do not map the full PIE-X gap or a capture-threshold ratio directly into 0.75/0.975 delivery fractions.
6. Run joint/global sensitivity over correlation, `w`, budget share, population/reach/value-cost scale, hurdle/prevalence, delivery factors, cost distribution, and ranking/gating choices. Report ratio uncertainty and failed/degenerate regions.
7. Rebuild `--cats` on the same net metric and funding rules as the headline. Regenerate all held-out tables from the stated seed base.
8. Describe any similarity to 2.22x as non-independent and exploratory, not convergence or corroboration.

## Appendix A — Exact required commands and raw output

All commands were run from `C:\devel\claude-projects\distributed-governance-research`. No command wrote a repository file.

### A1. Canonical exploration run

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1
```

```text
E5 v2 / corrected-E4 — central max P (credit), distributed max S via participation coverage (beta=0.3), oracle max S.
  N=5000, K=500, seeds=20, mean=0.27, sd=1, projSpread=0.15, w(value weight)=0, delivery 0.75/0.975 (1.30x)
  rho=corr(S,P) agenda<->value misalignment. w=0 -> agenda-capture (primary); w=1 -> E4 (harm-blind central). At ~35% net-neg the frontier COMPRESSES toward the delivery floor as rho->1 (not exact parity).

  hurdle h=2.5 -> NET value = S - h*cost (h>0: below-hurdle projects are agenda-capture bait for the central)

  rho  | corr(S,P) | harm% | belowH% | cen netNeg% | cen %oracle | dis %oracle |  Delta=(d-c)/o [95% CI]  | ratio d/c
  1.0  |    0.83   |  8.1% |  35.9%  |     8.8%   |     95%     |     97%     |  +0.24 [0.23,0.24]      |  1.34x
  0.8  |    0.65   |  8.1% |  35.9%  |    12.9%   |     86%     |     97%     |  +0.30 [0.29,0.31]      |  1.46x
  0.6  |    0.44   |  8.1% |  35.9%  |    17.4%   |     76%     |     97%     |  +0.38 [0.36,0.39]      |  1.66x
  0.4  |    0.25   |  8.1% |  35.9%  |    21.3%   |     66%     |     97%     |  +0.45 [0.44,0.47]      |  1.91x
  0.2  |    0.10   |  8.1% |  35.9%  |    25.6%   |     54%     |     97%     |  +0.55 [0.53,0.56]      |  2.36x
  0.0  |   -0.01   |  8.1% |  35.9%  |    30.0%   |     43%     |     97%     |  +0.62 [0.60,0.64]      |  2.91x

(1.4s)  dis %oracle<100 now reflects REAL coverage friction (beta=0.3): the swarm no longer = oracle.
```

This confirms 8.1% `S<0`, 35.9% total below hurdle, and therefore 27.8 percentage points with `S>=0` but `net<0`. It also confirms that the central portfolio is only 21.3–25.6% net-negative at the two rows used for the claimed operating band.

### A2. Category decomposition

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --cats
```

```text
3-LAYER DECOMPOSITION (A=20 categories, top-10 gate; byValue=1, concentrate n/a here)

  rho  | cen%oracle 2L | cen%oracle 3L |  macro   | allocation | delivery | 3-layer ratio
  1.0  |      95%      |      98%      |  0.97x  |   1.04x   |  1.30x  |  1.31x
  0.8  |      85%      |      91%      |  0.94x  |   1.16x   |  1.30x  |  1.41x
  0.6  |      74%      |      84%      |  0.89x  |   1.32x   |  1.30x  |  1.53x
  0.4  |      62%      |      73%      |  0.85x  |   1.58x   |  1.30x  |  1.76x
  0.2  |      51%      |      63%      |  0.81x  |   1.94x   |  1.30x  |  2.04x
  0.0  |      39%      |      51%      |  0.76x  |   2.53x   |  1.30x  |  2.51x

(2.0s)  3-layer ratio = macro x allocation x delivery. macro = (3L ratio)/(2L ratio) = the category-exclusion contribution.
```

The output reproduces, but `evalCat` is a gross-S model and is not a decomposition of A1.

### A3. Tornado

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --tornado
```

```text
TORNADO — headline ratio d/c robustness at fixed rho=0.3 (Core-v0 config), one knob at a time:
  baseline ratio = 2.08x

  knob                | low -> ratio | high -> ratio | grounding
  beta (voice bias)   |  0.3 -> 2.08x  |  0.5 -> 2.08x  | Verba-Schlozman-Brady
  mean (true-harm share)| 0.24 -> 2.12x  | 0.33 -> 2.02x  | harm band: 0.24~11% harm .. 0.33~4% harm (S<0)
  hurdle (below-hurdle)|  1.5 -> 2.04x  |    4 -> 2.15x  | p_U+ band: h=1.5~27% .. h=4.0~46% below opportunity cost (Doc 1)
  fVer (delivery, /0.75)|  0.9 -> 1.92x  | 0.99 -> 2.11x  | central loss 25% (IMF); dist 10x-resistant (E4-v5)
  sigF (reach heavy-tail)|  1.2 -> 2.08x  |  1.8 -> 2.07x  | coverage/value spread
  w (harm-blind 2ndary)|    0 -> 2.08x  |  0.3 -> 1.40x  | 0=pure agenda .. 0.3=some value-caring

(3.0s)  The headline is DOMINATED by corr(S,P) (the frontier axis, Gilens-Page). At fixed rho, the other knobs move it modestly -> robust.
```

The last sentence is contradicted by the 0.68x movement in the `w` row.

### A4. Harm-blind nesting run

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --w=1
```

```text
E5 v2 / corrected-E4 — central max P (credit), distributed max S via participation coverage (beta=0.3), oracle max S.
  N=5000, K=500, seeds=20, mean=0.27, sd=1, projSpread=0.15, w(value weight)=1, delivery 0.75/0.975 (1.30x)
  rho=corr(S,P) agenda<->value misalignment. w=0 -> agenda-capture (primary); w=1 -> E4 (harm-blind central). At ~35% net-neg the frontier COMPRESSES toward the delivery floor as rho->1 (not exact parity).

  hurdle h=2.5 -> NET value = S - h*cost (h>0: below-hurdle projects are agenda-capture bait for the central)

  rho  | corr(S,P) | harm% | belowH% | cen netNeg% | cen %oracle | dis %oracle |  Delta=(d-c)/o [95% CI]  | ratio d/c
  1.0  |    0.83   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x
  0.8  |    0.65   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x
  0.6  |    0.44   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x
  0.4  |    0.25   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x
  0.2  |    0.10   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x
  0.0  |   -0.01   |  8.1% |  35.9%  |     5.1%   |     97%     |     97%     |  +0.22 [0.22,0.22]      |  1.30x

(1.7s)  dis %oracle<100 now reflects REAL coverage friction (beta=0.3): the swarm no longer = oracle.
```

This confirms the code's `w=1` delivery-floor result. It does not validate the `w=0` agenda-capture calibration.

### A5. Held-out seed base

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --seedBase=5000
```

```text
E5 v2 / corrected-E4 — central max P (credit), distributed max S via participation coverage (beta=0.3), oracle max S.
  N=5000, K=500, seeds=20, mean=0.27, sd=1, projSpread=0.15, w(value weight)=0, delivery 0.75/0.975 (1.30x)
  rho=corr(S,P) agenda<->value misalignment. w=0 -> agenda-capture (primary); w=1 -> E4 (harm-blind central). At ~35% net-neg the frontier COMPRESSES toward the delivery floor as rho->1 (not exact parity).

  hurdle h=2.5 -> NET value = S - h*cost (h>0: below-hurdle projects are agenda-capture bait for the central)

  rho  | corr(S,P) | harm% | belowH% | cen netNeg% | cen %oracle | dis %oracle |  Delta=(d-c)/o [95% CI]  | ratio d/c
  1.0  |    0.80   |  8.1% |  35.9%  |     9.4%   |     95%     |     97%     |  +0.24 [0.23,0.24]      |  1.34x
  0.8  |    0.60   |  8.1% |  35.9%  |    14.0%   |     87%     |     97%     |  +0.30 [0.29,0.31]      |  1.46x
  0.6  |    0.41   |  8.1% |  35.9%  |    18.3%   |     77%     |     97%     |  +0.37 [0.36,0.39]      |  1.65x
  0.4  |    0.26   |  8.1% |  35.9%  |    22.1%   |     65%     |     97%     |  +0.46 [0.45,0.47]      |  1.93x
  0.2  |    0.13   |  8.1% |  35.9%  |    25.8%   |     55%     |     97%     |  +0.53 [0.52,0.55]      |  2.29x
  0.0  |    0.02   |  8.1% |  35.9%  |    29.7%   |     43%     |     97%     |  +0.62 [0.60,0.64]      |  2.93x

(1.8s)  dis %oracle<100 now reflects REAL coverage friction (beta=0.3): the swarm no longer = oracle.
```

This confirms seed stability of the ratios and the calibration shares. It does not constitute held-out validation of parameters that were selected after exploratory output was known (`research/e5-sp-preregistration.md:32-38`).

### A6. Held-out auxiliary modes

These commands were also run because the preregistration says the held-out exercise includes them (`research/e5-sp-preregistration.md:86-90`):

```powershell
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --seedBase=5000 --cats
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --seedBase=5000 --tornado
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --seedBase=5000 --w=1
```

Relevant raw differences from the preregistration:

```text
--cats, rho=.2: macro 0.79x, allocation 2.00x, delivery 1.30x, 3-layer ratio 2.06x
--tornado: baseline 2.12x; hurdle 1.5->2.07x, 4->2.20x; w .0->2.12x, .3->1.40x
--w=1: every row ratio 1.30x; central net-negative 5.3%
```

The document reports the seed-1000 macro/allocation 0.81/1.94 and tornado baseline 2.08 (`research/e5-sp-preregistration.md:93-100,124-129`), not these held-out results.

## Appendix B — Additional stress commands and key output

```powershell
node scripts/simulation/e5-sp-model.mjs 1000 500 20 --concentrate=1 --byValue=1
node scripts/simulation/e5-sp-model.mjs 2000 500 20 --concentrate=1 --byValue=1
node scripts/simulation/e5-sp-model.mjs 10000 500 20 --concentrate=1 --byValue=1
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --muF=-1.5 --sigF=1.2
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --budgetFrac=0.2
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --budgetFrac=0.5
node scripts/simulation/e5-sp-model.mjs 5000 500 100 --concentrate=1 --byValue=1 --seedBase=9000
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --rho=0.9 --tornado
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1 --fWeak=0 --seedBase=5000
```

Key outputs are quoted in the findings above. The attempted `--rho=0.9` tornado still printed `fixed rho=0.3`, confirming that the unknown flag was ignored. The `--fWeak=0` run exited 0 and printed `delivery 0/0.975 (Infinityx)`, `cen %oracle NaN%`, and `ratio Infinityx`.
