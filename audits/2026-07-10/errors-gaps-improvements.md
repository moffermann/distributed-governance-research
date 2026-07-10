# Independent audit: errors, gaps, and improvements

**Date: 2026-07-10**

The canonical E5-SP runs are deterministic and reproduce the reported coarse-grid values, but the proposed headline is not empirically calibrated or prospectively confirmed. Its two load-bearing calibrations misuse their sources: Gilens and Page do not estimate `corr(S,P)`, and IMF PIE-X is neither a pure delivery loss nor evidence that Core v0 reduces that loss tenfold. The engine also has consequential accounting and scaling errors: it discounts opportunity cost by delivery efficiency, and the calibrated negative-project share changes from 71% to 22% when only `N` changes. The paper should not propagate “≈2.1× (1.9–2.4×), selection 1.5–1.8× × delivery 1.30×” as a literature-anchored result without correcting the model and replacing the posited parameters with comparable evidence.

## Confirmed errors

### Critical

#### C1. Gilens–Page does not calibrate `corr(S,P)`; the headline's main axis is posited

The pre-registration converts an independent-influence coefficient and alleged “raw congruence” into a Pearson-correlation band: “average-citizen *independent* policy influence ≈ 0.03; *raw* mass-policy congruence ≈ 0.3. → `corr(S,P) ∈ [0.1,0.3]`” (`research/e5-sp-preregistration.md:61-64`). The design note nevertheless says the correlation “must be measured ... not posited” (`research/e4e5-value-model-v2.md:108-116`).

Gilens and Page estimate a binary policy-adoption model using expressed preferences and interest-group positions; their standardized Model 4 coefficient for average citizens is 0.01, not a correlation between social value and political credit. They explicitly state that they lack data on underlying interests or values. No `corr(S,P)`, project social value `S`, political credit `P`, or “raw mass-policy congruence ≈ 0.3” was located in the cited article. Thus the interval is **unverified**, and calling it “Gilens-Page calibrated” is false. Primary source: [Gilens & Page 2014, pp. 564–581, DOI 10.1017/S1537592714001595](https://www.cambridge.org/core/journals/perspectives-on-politics/article/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B).

Consequence: `corr(S,P)` dominates the result (`research/e5-sp-preregistration.md:124-131`), so the 1.9–2.4× band has no empirical anchor. Improvement: label it a scenario frontier until a project-level dataset measures social return and pre-decision credit-claimability on comparable units.

#### C2. The IMF efficiency gap is double-counted as pure delivery, and `fVer=0.975` has no empirical derivation

The calibration note says PIE-X includes “selection of lower-value sectors or projects” as well as appraisal, procurement, delays, management, and maintenance (`drafts/public-investment-efficiency-loss-calibration.md:85-100`). It also says PIE-X is not social-value loss without an additional welfare model (`drafts/public-investment-efficiency-loss-calibration.md:139-151`). The engine nevertheless maps an author-chosen 25% midpoint directly to `fWeak=0.75`, then assumes the distributed loss is one tenth as large because a different capture-threshold model was “~10× more capture-resistant” (`scripts/simulation/e5-sp-model.mjs:50-54`).

This commits two errors. First, selection is modeled once through `P` versus `S` and again inside a broad PIE-X gap. Second, a tenfold increase in a modeled rent threshold does not imply a tenfold reduction in all infrastructure-output inefficiency. IMF supports about 30% average distance from an empirical frontier across 134 countries; 25% is explicitly the author's midpoint (`drafts/public-investment-efficiency-loss-calibration.md:175-205`), and IMF does not estimate a Core-v0 counterfactual. Primary source: [IMF 2015, *Making Public Investment More Efficient*](https://www.imf.org/-/media/websites/imf/imported-full-text-pdf/external/np/pp/eng/2015/_061115.pdf).

Consequence: the fixed “delivery 1.30×” half of the headline is unsupported and not independent of selection. Improvement: estimate selection, physical production loss, leakage, and maintenance separately from comparable causal evidence; do not infer `fVer` from the capture threshold.

#### C3. Delivery efficiency is applied to costs with the wrong sign

The engine first defines `net[j]=S[j]-h*cost[j]` (`scripts/simulation/e5-sp-model.mjs:112-115`), then passes that net quantity to `deliver`, which multiplies the whole sum by `f` (`scripts/simulation/e5-sp-model.mjs:88,121-125`). Algebraically, it computes

`f·(S − h·cost) = fS − f·h·cost`.

PIE-X is an output shortfall at a fixed capital input (`drafts/public-investment-efficiency-loss-calibration.md:209-223`). Under that interpretation, the compatible expression is `fS − h·cost`: inefficient delivery reduces output, not the already-incurred opportunity cost. The current formula also makes a negative-net project *less negative* when delivery worsens.

A read-only in-memory stress run replacing the accounting with `fS − h·cost` changed the canonical ratios from 1.91× to 1.98× at latent `rho=0.4`, and from 2.36× to 2.47× at `rho=0.2`. This is not harmless rounding. Improvement: define benefit, resource cost, leakage, and delivery timing separately, then recompute the decomposition; a constant 1.30 multiplier will no longer follow mechanically.

#### C4. The hurdle calibration is dimensionally unstable with population size

Project value is a sum over `N` citizens (`scripts/simulation/e5-sp-model.mjs:70-74`), while project cost remains an `N`-independent uniform draw from 1 to 10 (`scripts/simulation/e5-sp-model.mjs:64-68`). The fixed hurdle then subtracts `2.5·cost` (`scripts/simulation/e5-sp-model.mjs:112-115`). Therefore benefits scale with `N`, costs do not, and the alleged empirical 35% is true only at the chosen `N=5000`.

Reproduction, holding `K=500`, seeds, and all substantive parameters fixed:

| Command | Below-hurdle share | Ratio at latent `rho=0.2` |
|---|---:|---:|
| `node .../e5-sp-model.mjs 1000 500 20 --concentrate=1 --byValue=1` | 71.3% | 3.62× |
| canonical `N=5000` | 35.9% | 2.36× |
| `node .../e5-sp-model.mjs 10000 500 20 --concentrate=1 --byValue=1` | 21.9% | 2.24× |

The true-harm share also moves from 16.9% to 6.3%. Improvement: put `S` and cost in stable monetary/NPV units, scale project costs with project scope where appropriate, and require invariance tests over `N` before making “at scale” claims.

### Major

#### M1. The “faithful split” is not what Pohl–Mihaljek measured

The calibration note accurately reports 25% below 10%, 14% below 5%, and 8% at zero or below (`drafts/positive-net-social-value-calibration.md:117-150`). It then subtracts an expressly unestimated ten percentage points to obtain 0.65 and warns that this adjustment must not be attributed to Pohl and Mihaljek (`drafts/positive-net-social-value-calibration.md:241-263`). The propagation text nevertheless attributes “~35%” and the “~8% true harm + ~28% below opportunity cost” split to that source (`research/e5-sp-paper-propagation.md:3-13,41-48`).

Pohl and Mihaljek report roughly 8% **zero or negative EIRR**, not 8% actively harmful projects with pre-cost `S<0`. They further explain that many recorded negative IRRs are economically zero; only a subset imply variable costs exceeding benefits. Their observed positive-but-below-10% portion is about 17%, not 28%. Primary source: [Pohl & Mihaljek 1992, pp. 255–277](https://documents1.worldbank.org/curated/en/415211468782167392/pdf/Project-evaluation-and-uncertainty-in-practice-a-statistical-analysis-of-rate-of-return-divergences-of-1-015-World-Bank-projects.pdf).

Consequence: “faithful” is incorrect. The engine's 8%/28% split is a tuned scenario consisting of a source statistic, a category error, and a 10-point author adjustment. State all three separately.

#### M2. The faithful-split run is neither pre-registered nor confirmatory

The file admits that the original design is post-exploratory (`research/e5-sp-preregistration.md:32-38`). More importantly, its locked model and predictions still specify `<1%` net-negative projects and delivery 1.43× (`research/e5-sp-preregistration.md:40-80`), while the later “held-out confirmation” changes the mean, adds a hurdle, and changes delivery to 1.30× (`research/e5-sp-preregistration.md:86-100`). Predictions are then “reworded,” “corrected,” or “rehabilitated” after the changed run (`research/e5-sp-preregistration.md:102-122`).

Git history removes any ambiguity: commit `722c153` first added the hurdle and already stated the ≈2.1× result; commit `db4ec28` nine minutes later added the new held-out table to the pre-registration file. Fresh pseudo-random seeds test Monte Carlo stability under the same data-generating process. They do not confirm a changed specification or provide out-of-sample empirical evidence.

Improvement: call this a deterministic replication/sensitivity run. Freeze a corrected model prospectively, publish its hash and untouched test protocol, and reserve genuinely unseen data or a simulation challenge set controlled outside the analysis workflow.

#### M3. The result assumes a pure-credit central planner; its own sensitivity rejects “robust to every knob”

The headline sets `w=0`, so the central objective is entirely political credit and gives zero weight to the modeled social-value signal (`scripts/simulation/e5-sp-model.mjs:41,118-124`). The tornado varies `w` only to 0.3 and moves the headline from 2.08× to 1.40× (`scripts/simulation/e5-sp-model.mjs:176-189`; reported at `research/e5-sp-preregistration.md:124-131`). That is a 33% fall and nearly removes the selection factor, yet the note calls every non-correlation movement “modest.”

Mayhew and Arnold support electoral incentives and credit claiming in the U.S. Congress; they do not estimate `w=0` for public planners across regimes or sectors. Improvement: treat `w` jointly with correlation as a primary uncertainty surface, not a nuisance knob, and remove “robust” until a mixed-objective range is empirically defended.

#### M4. The distributed arm receives an oracle net-value gate

The distributed score is only a participation sample of interested citizens (`scripts/simulation/e5-sp-model.mjs:94-97`), but the engine separately computes true latent net value for every project and excludes every `net<=0` project from the distributed portfolio (`scripts/simulation/e5-sp-model.mjs:112-124`). The pre-registration concedes that the distributed arm is modeled as pure `S` and that this is generous to it (`research/e5-sp-preregistration.md:133-139`). No observation, appraisal, voting, or error process supplies this perfect net-value classification.

A read-only stress run removing only this oracle gate reduced canonical ratios modestly (1.91→1.89 at latent `rho=0.4`; 2.36→2.34 at `rho=0.2`), so it is not the main source of the default headline. It remains an unfair and unimplemented informational privilege. Improvement: make both arms infer net value from observable estimates with comparable error, or report the distributed arm explicitly as an upper bound.

#### M5. The category “decomposition” does not run the faithful-split model

The main evaluator uses `net=S-h·cost`, the net gate, central cost-normalized funding, and canonical `byValue=1` only for the distributed arm (`scripts/simulation/e5-sp-model.mjs:112-125`). `evalCat`, by contrast, uses gross `S`, never constructs `net`, never applies the hurdle gate, and passes the same `byValue` flag to oracle, distributed, and central (`scripts/simulation/e5-sp-model.mjs:137-152`). With canonical `byValue=1`, its central ranks pure `P`; the main central ranks `P/cost`.

Therefore the reported macro and allocation factors in `research/e5-sp-preregistration.md:93-110` are not a decomposition of the current 2.1× headline. They also do not reproduce from the stated held-out `--cats --seedBase=5000 --byValue=1` command: for example, current output at latent `rho=0.2` is macro 0.79/allocation 2.00, versus 0.81/1.94 in the table. The claim that the macro layer remains ≤1 under the faithful split is untested. Improvement: make the category evaluator call the same portfolio and accounting functions as the main evaluator, then require `macro × selection × delivery` to reproduce the main ratio within numerical tolerance.

#### M6. The stated 1.9–2.4× / 1.5–1.8× band was not evaluated at its stated endpoints

The held-out table observes correlations 0.26 and 0.13 with ratios 1.93× and 2.29× (`research/e5-sp-preregistration.md:93-100`), then labels these a `[0.1,0.3]` band of 1.9–2.4× (`research/e5-sp-preregistration.md:106-108`). The engine's fixed grid is too coarse to evaluate 0.30 exactly (`scripts/simulation/e5-sp-model.mjs:55,233-241`).

A read-only all-world held-out run produced 1.75× at achieved correlation 0.293 and 2.29× at 0.097; the exploration seeds gave about 1.80× at 0.31 and 2.36× at 0.11. Under the engine's own constant 1.30 delivery factor, the held-out selection band is about 1.35–1.76×, not 1.5–1.8×. Improvement: report directly evaluated endpoints with seed dispersion; the fresh-seed evidence supports roughly 1.8–2.3×, not 1.9–2.4×.

#### M7. The prose describes variables the engine does not implement

The design defines `P` as “visibility × traceability × beneficiary-concentration” (`research/e4e5-value-model-v2.md:45-57`) and `S` as “reach × intensity × permanence” (`research/e4e5-value-model-v2.md:84-87`). The engine instead makes `P=exp(sigP*cLat)` from a latent Gaussian correlated with reach, while `S` is a sum of sampled valuations; it has no traceability, concentration, visibility, or permanence state (`scripts/simulation/e5-sp-model.mjs:64-75`).

This simulator can test consequences of an imposed correlation, not the cited credit-claiming mechanism or its components. Improvement: either implement and calibrate the components or describe `P` as an abstract correlated score.

#### M8. External validity is narrower than the proposed claim

The Pohl–Mihaljek note says its evidence applies most directly to capital/infrastructure projects with monetizable streams and not directly to transfers, regulation, defense, culture, or institutional reform (`drafts/positive-net-social-value-calibration.md:198-203`). PIE-X also applies to public investment and infrastructure output, not the whole budget (`drafts/public-investment-efficiency-loss-calibration.md:19-22,120-151`). Core v0 expressly includes public works, personal care, and education (`drafts/paper.md:140-144`).

The propagation text generalizes the 35% and delivery factor to “implemented projects” without that restriction (`research/e5-sp-paper-propagation.md:41-51`). Improvement: scope the quantitative headline to infrastructure-like capital projects or build sector-specific calibrations.

#### M9. Strategic behavior, project interactions, and general-equilibrium costs are absent

Projects are independent draws, citizens report sampled valuations honestly, and a greedy ranker chooses projects under a single static budget (`scripts/simulation/e5-sp-model.mjs:58-86`). There are no complementarities, substitutes, common shocks, endogenous proposals, campaigning, logrolling, delegation concentration, cost manipulation, lifecycle adaptation, tax incidence, or alternative uses of capital. The design itself lists unmeasured private capture, citizen allocation to invisible goods, and the need to measure `corr(S,P)` as open items (`research/e4e5-value-model-v2.md:108-125`).

Improvement: state that the result is a partial-equilibrium portfolio toy model. Prioritize proposal-generation/agenda manipulation, correlated signals, strategic allocation, project dependencies, and endogenous cost/appraisal before claiming institutional superiority.

#### M10. Citation support is overgeneralized even where metadata is correct

- **Bandiera–Prat–Valletti.** The paper turns an 83% estimate from standardized-goods procurement by Italian public bodies into “most measured procurement loss” and an `η` anchor (`drafts/paper.md:771-773,1342`). The source supports 83% of estimated waste in its own setting, not procurement generally. [AEA record and DOI 10.1257/aer.99.4.1278](https://www.aeaweb.org/articles?id=10.1257%2Faer.99.4.1278).
- **Olken.** The paper calls it an anchor for detection probabilities (`drafts/paper.md:321-324`), but the experiment randomized audit coverage from 4% to 100% and found an eight-point reduction in missing expenditure; it did not estimate the model's review-confirmation probability. It also found top-down audit stronger than grassroots monitoring on average. [Olken 2007](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf).
- **Reinikka–Svensson / Olken.** The old locked block says they anchor a 1.43× delivery treatment (`research/e5-sp-preregistration.md:65`), but they provide context-specific leakage levels, not an estimate of this architecture's `fVer/fWeak` treatment ratio. That block is superseded but remains inside the file without a clean archival separation.
- **Hayek.** The metadata and dispersed-knowledge premise are correct (`drafts/paper.md:113-117,1384`), but the claim that citizen budgeting aggregates the high-value tail (`research/e4e5-value-model-v2.md:76-82`) is a model assumption, not a result of Hayek's price-system argument.

### Minor

#### m1. “Oracle” is a greedy heuristic, not an optimizer

`fund` sorts by score/cost and accepts each fitting project (`scripts/simulation/e5-sp-model.mjs:80-86`); the “oracle” calls this routine (`scripts/simulation/e5-sp-model.mjs:121`). Greedy ratio is not generally optimal for a 0/1 knapsack. Rename it “full-information greedy benchmark” or solve the knapsack exactly/approximately with a documented bound.

#### m2. The bootstrap interval measures only Monte Carlo seed variability

The percentile bootstrap resamples 20 simulated worlds (`scripts/simulation/e5-sp-model.mjs:157-159,233-241`). The pairing and ratio-of-sums implementation are internally coherent; no off-by-one affecting the headline was found. The interval does not include calibration, specification, model, or external-sampling uncertainty. Label it “Monte Carlo interval,” not evidentiary confidence in the institutional effect.

#### m3. Reported correlation uses only four of twenty worlds

The engine concatenates `S` and `P` from `min(4,R.length)` worlds (`scripts/simulation/e5-sp-model.mjs:238-240`). Using all 20 changed some displayed correlations materially enough for endpoint mapping (for example 0.25→0.23 at latent `rho=0.4` in the exploration run), although not the ratios. Use all worlds and report seed-level dispersion.

#### m4. The lumpiness diagnostic is not “oracle value gated”

For gated projects the engine sums positive gross `S`, including projects the net oracle might never select (`scripts/simulation/e5-sp-model.mjs:101-111`), then divides by delivered net oracle value (`scripts/simulation/e5-sp-model.mjs:201-204`). Numerator and denominator are different quantities. Recompute lost optimal net value against a re-optimized constrained benchmark.

#### m5. Current documentation contradicts current HEAD

- The live roadmap still says the hurdle is future work and expects ≈2.8× (`docs/03_ROADMAP.md:38-52`), although the engine implements it and the propagation note says ≈2.1×.
- The v2 note says “Not yet implemented” (`research/e4e5-value-model-v2.md:3-10`), says harm-blindness is revived (`research/e4e5-value-model-v2.md:98-105`), and later says it is inert (`research/e4e5-value-model-v2.md:127-147`). Its supersession banner still points readers toward the intermediate ≈2.8× block (`research/e4e5-value-model-v2.md:185-191`).
- The propagation note calls the model “pre-registered 7/7” (`research/e5-sp-paper-propagation.md:16-18`), while the verdict says P1 was reworded, P3 corrected, and P5/P6 rehabilitated (`research/e5-sp-preregistration.md:120-122`).

These are current-document errors, not harmless archive history.

#### m6. The authoritative paper and bibliography do not yet contain the proposed mechanism

The paper still reports the earlier harm-blindness apparatus and ≈2.2× (`drafts/paper.md:743-794,941-975,1280-1299`). Its bibliography contains Hayek, Bandiera et al., Olken, and Reinikka–Svensson (`drafts/paper.md:1355,1384,1404,1411`) but no Gilens–Page, Mayhew, Arnold, Pohl–Mihaljek, IMF 2015, or Rajaram 2014. The propagation plan admits several additions are pending (`research/e5-sp-paper-propagation.md:73-78`). Do not describe ≈2.1× as the paper's current finding until both language masters, bibliography, calibration appendix, and rendered artifacts agree.

#### m7. Dangling files and stale corpus counts remain

`drafts/paper.md:743-748` references absent `research/e4-v4-symmetric-frontier.md`; the live roadmap references absent `D_LITE_PILOT_PROTOCOL.md` (`docs/03_ROADMAP.md:54-60`). The authoritative paper still says forty attacks/four rounds and `docs/67–109` (`drafts/paper.md:78-82,128-130,1316,1433-1440`), while the live roadmap records 43 attacks and `docs/67–113` (`docs/03_ROADMAP.md:9-11,76`). `node scripts/check-anchors.mjs` reports clean because these references are outside what it validates.

#### m8. No automated tests protect the headline

`package.json` defines only anchor checking; there is no E5-SP test target. Add tests for deterministic snapshots, scale/unit invariance, net accounting, exact band endpoints, main/category decomposition identity, and prospective configuration hashes.

#### m9. The documented `--rho` override is ineffective

The parser accepts only keys already present in `PARAMS` (`scripts/simulation/e5-sp-model.mjs:161-163`), but `PARAMS` has no `rho` key (`scripts/simulation/e5-sp-model.mjs:26-56`). Tornado and lumpiness modes attempt to read it (`scripts/simulation/e5-sp-model.mjs:169-170,194-195`), so `--tornado --rho=0.8` silently continues at 0.3. Add the parameter or reject unknown flags.

#### m10. `creditScale` is arithmetically coherent but gives `w` no stable empirical meaning

`sum(abs(S))/sum(abs(P))` correctly equals the ratio of mean absolute magnitudes because both arrays have length `K` (`scripts/simulation/e5-sp-model.mjs:118-120`); no normalization arithmetic bug was found. It is irrelevant when `w=0`. For intermediate `w`, however, it mixes a sample-dependent gross-value scale with `P` without matching variance, tails, or units, so `w=0.3` cannot be interpreted as an empirical 30% welfare weight. Report that sensitivity as a scoring convention, not a behavioral estimate.

## Citation spot-check: metadata verdict

No invented DOI was found among the named load-bearing works.

| Work | Metadata | Support verdict |
|---|---|---|
| Gilens & Page (2014), *Perspectives on Politics* 12(3), DOI `10.1017/S1537592714001595` | Correct | Does not estimate `corr(S,P)`; quantitative calibration unsupported. |
| Mayhew (1974), *Congress: The Electoral Connection*, Yale | Correct | Supports reelection/credit-claiming direction, not `w=0` or a cross-regime numeric objective. |
| Arnold (1990), *The Logic of Congressional Action*, Yale | Correct | Supports traceability/electoral mechanisms; the repository's “diffuse benefits earn no return” is stronger than verified. |
| Hayek (1945), “The Use of Knowledge in Society,” *AER* 35(4):519–530 | Correct | Supports dispersed knowledge, not the specific citizen-budget aggregation rule. |
| Pohl & Mihaljek (1992), *World Bank Economic Review* 6(2):255–277, DOI `10.1093/wber/6.2.255` | Correct | Statistics real; 35% and 8% “true harm” interpretation not supported. |
| IMF (2015), *Making Public Investment More Efficient* | Correct | 134 countries/~30% real; 25%, pure-delivery use, and Core-v0 counterfactual are not IMF estimates. |
| Reinikka & Svensson (2004), *QJE* 119(2):679–705, DOI `10.1162/0033553041382120` | Correct | Uganda 87% capture context is real; it does not estimate Core-v0 delivery gain. |
| Olken (2007), *JPE* 115(2):200–249, DOI `10.1086/517935` | Correct | ~24% missing-expenditure baseline and audit result real; model detection mapping unsupported. |
| Bandiera, Prat & Valletti (2009), *AER* 99(4):1278–1308, DOI `10.1257/aer.99.4.1278` | Correct | 83% is setting-specific and overgeneralized. |
| Rajaram, Le, Kaiser, Kim & Frank, eds. (2014), World Bank, DOI `10.1596/978-1-4648-0316-1` | Correct at `drafts/public-investment-efficiency-loss-calibration.md:324` | Supports PIM process design, not the engine's numeric delivery factor. |

## Suspected or unverified

1. **“Raw mass-policy congruence ≈0.3.”** Unverified. It was not found in Gilens–Page; provide a page/table or retract it.
2. **Arnold implies diffuse benefits “earn no return.”** Unverified at that strength. The verified book description also concerns passage of general-interest legislation; a page-specific citation is required.
3. **The ten-point Pohl adjustment is conservative.** Unverified. The direction and size are judgment calls; selection, supervision, sector mix, and incomplete ex-post observation do not identify a net 10-point correction.
4. **Core v0 reduces PIE-X loss to 2.5%.** Unverified. No causal or observational estimate for the proposed architecture was supplied.
5. **`corr(S,P)` transfers from 1981–2002 U.S. policy issues to public-project portfolios worldwide.** Unverified. No transportability argument or cross-country validation was supplied.

## Prioritized high-value improvements

1. **Stop the propagation.** Relabel ≈2.1× as an uncalibrated scenario result; remove “pre-registered,” “held-out confirmation,” “Gilens-Page calibrated,” and fixed 1.30× language.
2. **Repair the accounting and units.** Model benefit, fixed resource cost, leakage, delivery quality, timing, and discounting separately; use `fS−cost`, not `f(S−cost)`; require invariance over `N` and project scale.
3. **Rebuild the evidence mapping.** Measure project-level social return, credit-claimability, and central mixed objectives; estimate delivery effects from comparable interventions rather than converting PIE-X and a capture threshold.
4. **Make the comparison symmetric.** Remove the distributed oracle gate, use comparable appraisal error and cost treatment, and state whether each arm ranks value or value/cost.
5. **Unify the evaluators.** Make the category analysis reuse the faithful-split main model and verify the multiplicative identity; replace the greedy “oracle” or bound its error.
6. **Run a genuinely prospective validation.** Freeze code/configuration and hypotheses before any new output; reserve external data or independently controlled challenge worlds; report specification and calibration uncertainty, not only seed bootstrap intervals.
7. **Add regression tests and clean the record.** Test headline endpoints and scale sensitivity, split superseded material into an archive, correct the live roadmap/design note, add missing references/files, and synchronize EN/ES only after the corrected result survives review.
