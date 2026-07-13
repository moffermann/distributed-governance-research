
- **Blocker:** `assoc` is not presently an association/correlation parameter. The tilt is simply `assoc × centeredVisibility`, so `|assoc|` simultaneously changes sector-value dispersion, while `assoc=0` eliminates that heterogeneity. Only `assoc × secValSpread` determines the systematic tilt. [e9-fullstack.mjs:52](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:52)
- “The realistic case” is too broad. Use “predeclared Rioja-consistent maintenance-bias scenario” or “plausible negative-association scenario.” [e9-fullstack.mjs:27](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:27)
- The claimed +1.9 to +6.2 pp applies to the two printed negative grid points, not every `assoc<0`. Additional checks turn slightly negative around `assoc=-0.3`.
- “Conservative relative to the IMF/Rioja envelope” is not established: IMF’s broad process-efficiency gap and Rioja’s modeled GDP effect are not commensurate with Shapley percentage points of this reference. Say: **“DECLARED and numerically modest; not in obvious tension with broader, non-commensurate evidence.”** [E9-FULLSTACK-DESIGN.md:114](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:114), [IMF 2015](https://www.imf.org/en/publications/policy-papers/issues/2016/12/31/making-public-investment-more-efficient-pp4959)

## Mechanism-design modeler

Verified:

- Sectors are persistent within each simulated world, randomly populated, and have intrinsic evenly spaced visibility—not project-`P` bins. [e9-fullstack.mjs:41](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:41)
- All eight cells are evaluated and returned. [e9-fullstack.mjs:129](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:129)
- The three-player Shapley weights and marginal-effect indexing are exactly correct: \(1/3,1/6,1/6,1/3\). They algebraically sum to the diagonal gain. [e9-fullstack.mjs:140](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:140)
- `nSec=1` genuinely collapses all eight E9 cells onto the corresponding four E5 cells, not merely the two tested corners. [e9-fullstack-test.mjs:15](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:15)
- The conditional effects reproduce: +8.9 pp with central selection and −3.9 pp with distributed selection, holding verified delivery fixed.

Flags:

- **Blocker:** strict sector envelopes leave materially different amounts unspent. At defaults over 1,000 worlds, utilization was:

  - central plan/central selection: 95.7%
  - central plan/distributed selection: 94.1%
  - distributed plan/central selection: 94.1%
  - distributed plan/distributed selection: 88.9%

  The −3.9 pp sign flip therefore mixes planning quality with roughly 5.2 pp more unspent budget. Residual recycling/reporting from round one remains unresolved. [e9-fullstack.mjs:95](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:95), [round-one verdict:53](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/CODEX-E9-FRIENDLY-VERDICT.md:53)
- **The global greedy reference is not a valid ≤ upper bound.** `fundedSet` is a greedy 0–1 knapsack heuristic, so another feasible portfolio can beat it. Runtime correctly says “REFERENCE, not a guaranteed optimum”; the `≤-bound` comment, old design claim, and “no cell exceeds oracle” test are not invariants. [e9-fullstack.mjs:124](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:124), [e9-fullstack-test.mjs:42](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:42)
- The sector constant leaves implemented `M_C/M_D` rankings and raw-`S` ordering unchanged, but not true ROI ordering: \((S+k)/c=S/c+k/c\). With heterogeneous costs, the `Sadj` reference can reorder projects within a sector. [e9-fullstack.mjs:55](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:55)
- `validatePlanning` accepts fractional, negative, and excessive `nKeep`, plus negative `creditCoef` and `secValSpread`; `sectorShares` silently rounds/clamps. [e9-fullstack.mjs:78](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:78), [e9-fullstack.mjs:184](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:184)
- If all positive-part scores are zero, hard exclusion is undone by the equal-share fallback across every sector. [e9-fullstack.mjs:73](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:73)

## Calibration methodologist

Verified:

- The displayed sweep is transparent and includes negative, zero, and positive cases; this is substantially more honest than a one-at-a-time positive headline. [e9-fullstack.mjs:216](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:216)
- The runtime is embargo-clean in substance: percentage levels and percentage-point contrasts, with no D/C ratio or compound multiplier.
- `npm run e9:fullstack:test` passes all 15 checks, including Shapley adding-up and exact E5 reduction.

Flags:

- **Headline mismatch:** current deterministic execution gives status quo 28.1%, Core 79.2%, and a **+51.1 pp gain, CI [+50.5,+51.7]**, not ~+49 pp [48.3,+49.6]. The documented Shapley components—2.1 + 38.3 + 10.8—already sum to about 51.2. [E9-FULLSTACK-DESIGN.md:149](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:149)
- The suite contains 15 checks, but not 15 mathematical invariants: positivity, the 0.2 gain threshold, and current scenario ordering are regression checks. [e9-fullstack-test.mjs:31](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:31)
- Only the diagonal gain has a bootstrap interval; Shapley values and conditional effects do not. [e9-fullstack.mjs:168](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:168)
- Runtime is clean, but repository-wide embargo cleanliness is not: retired multiplier notation remains in the source header/design history. [e9-fullstack.mjs:13](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:13)

## Synthesis

### Publication-ready verdict

**NOT YET.** The factorial/Shapley redesign is correct and publication-worthy in architecture. The current planning interpretation is not yet publication-ready because the declared association sweep changes dispersion, the final-context sign flip is materially confounded by unspent budget, and the greedy reference is still inconsistently described as an upper bound.

### Must-fix items

1. **Implement a genuine fixed-dispersion association.** Standardize visibility and an independent orthogonal sector-need shock, then use  
   `need = assoc*zVisibility + sqrt(1-assoc²)*zShock`.  
   This holds need dispersion fixed as correlation changes. If literal ROI-rank invariance is intended, make the project tilt cost-proportional and cost-weight its sector aggregate.

2. **Declare residual treatment.** Add `strict` versus `recycle` modes, report utilization for every cell, and show Shapley plus both planning simple effects under both rules. A concrete recycler is a second global pass over eligible unfunded projects using the same arm-selection rule.

3. **Resolve the reference claim.** Either consistently rename it `globalGreedyReference`, allow results above 100%, and downgrade the test to a scenario regression; or introduce a genuine exact/fractional upper bound.

4. **Complete fail-closed validation.** Require integer `1 ≤ nKeep ≤ nSec`, `secValSpread ≥ 0`, and `creditCoef ≥ 0`; preserve the kept mask in the all-zero fallback. Add tests for these cases and central/symmetric exclusion.

5. **Rerun and pin results after those fixes.** Record code hash, seed, worlds, all eight cells, utilization, Shapley/simple-effect intervals, and corrected headline numbers.

6. **Correct framing:** “Rioja-consistent plausible scenario,” “DECLARED and non-commensurate with IMF/Rioja benchmarks,” and “small/non-positive at the reported nonnegative grid points.” Update the stale visibility-bin header and spell Rioja’s journal as *Journal of Public Economics*.

### Declared versus anchored

- **Anchored in direction/context:** political targeting and composition bias; visibility of new infrastructure versus maintenance neglect; inherited harm-myopia and coverage directions; broader public-investment inefficiency.
- **Still DECLARED:** `assoc`, `secValSpread`, `creditCoef` magnitude, `covSees`, `nSec`, `nKeep`, hard-exclusion activation/mode, random sector membership, evenly spaced visibility, share rule/floor, residual rule, and every planning-welfare magnitude.
- **Conditional simulation outputs, not empirical calibrations:** planning Shapley, conditional simple effects, and the full-stack gain.

The single best robustness output would be one **predeclared joint planning-sensitivity table** over all declared planning parameters and residual modes, stratified by association sign, reporting Shapley median/5–95%/minimum/share-positive, the distributed-selection simple effect, budget utilization, and full-stack gain.
