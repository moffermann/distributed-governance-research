6. **[correction] Selection dominance is inherited from E4, not created by small categories.** The test attributes dominance to degraded central selection in small pools ([e9-fullstack-test.mjs:40](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:40)). Yet the conditional selection effect is already about 51 points when `nCat=1` and about 50 points at eight categories. Partitioning slightly reduces it.

   **Suggested verbatim:**  
   > Selection dominates under the declared E4 probable world. The dominance is inherited from the E4 signal gap; category fragmentation lowers both arms and slightly reduces the conditional selection contrast.

7. **[idea — correct] The E5 reduction and delivery indexing are sound.** Original ordering is preserved at one category, executor indices remain aligned, and the same delivery routine and random streams are reused ([e9-fullstack.mjs:32](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:32), [e9-fullstack.mjs:58](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:58), [e9-fullstack-test.mjs:15](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:15)). This is a strong invariant.

## 3. Calibration methodologist

1. **[correction] `nCat=8` is DECLARED and strongly outcome-relevant.** It is outside the contract ([e9-fullstack.mjs:25](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:25)). In a paired 400-world sweep, the currently defined conditional planning effect increased from about 0.4 points at two categories, to 3.3 at eight, 5.2 at ten, and 9.2 at sixteen. Eight categories mean only 18–19 candidate projects per pool under `K=150` ([scenario-configs.mjs:49](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:49)).

2. **[correction] `keepFrac=0.6` is a DECLARED severity stress, not an anchor.** Replace it with integer `nKeep`, or always report the realized count. Agenda-setting theory supports the possibility of exclusion, not a universal exclusion fraction. [Bachrach and Baratz](https://doi.org/10.2307/1952796).

3. **[correction] “Proportional” already allows hard zeros.** Nonpositive category totals receive zero share ([e9-fullstack.mjs:43](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:43)). In the diagnostic, no central category total was nonpositive, while about 10.8% of distributed totals were. Call the rule “positive-part proportional” and report zero-share frequency by arm.

4. **[robustness] Predeclare the category program before rerunning headlines.**

   - Visibility quantiles.
   - Fixed visibility cutpoints.
   - Random categories as a placebo.
   - Persistent ex ante sector types.
   - Categories based on observable noisy need proxies.
   - True-value or true-harm categories only as diagnostic bounds.
   - Cross category count with `K` so projects per category can be held constant.
   - Cross strict sector envelopes with residual recycling and minimum-share floors.
   - Repeat across existing central-favorable, harm-aware, probable, and distributed-favorable worlds.

   Report the full grid or a stratified global-sensitivity summary: median, range, share positive, worst case, zero-category frequency, unused budget, and projects funded per category. This is preferable to one-at-a-time headline selection when interactions are material. [Pianosi et al.](https://doi.org/10.1016/j.envsoft.2016.02.008).

5. **[correction] Planning parameters need fail-closed provenance.** `fullStack` validates delivery but not planning ([e9-fullstack.mjs:109](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:109)). Register or hash the resolved planning manifest and validate category count, typing, exclusion mode, retained count, share elasticity, floors, and residual handling.

6. **[correction] The bootstrap is mechanically sound but incomplete.** It resamples matched worlds and recomputes numerator and denominator together ([e9-fullstack.mjs:126](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:126)). It covers only the diagonal, however. E5 already shows the appropriate pattern of intervals for every reported effect ([e5-delivery.mjs:161](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:161)).

   **Suggested verbatim:**  
   > The interval reflects finite-simulation uncertainty conditional on the declared world, category construction, and planning rule; it does not include empirical or model-form uncertainty.

7. **[correction] Several “invariants” are scenario regression expectations.** Exact E5 reduction is a true invariant. Positive planning, a gain threshold, and selection dominance ([e9-fullstack-test.mjs:24](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:24), [e9-fullstack-test.mjs:37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:37)) should be labeled probable-scenario regression checks; defensible alternative sector models may legitimately reverse them.

8. **[idea] Runtime reporting is embargo-clean.** It reports percentages of oracle and percentage-point contrasts. For clarity, levels should omit the leading plus sign—“30.1% of oracle”—and reserve signs for changes. Historical retired notation remains in design/inventory documents, so repository-wide cleanliness depends on whether the embargo covers internal provenance text.

## Synthesis: highest-impact actions

1. **[correction] Separate the two central-planning failures.** Hidden-harm myopia causes over-allocation; political credit can cause low-visibility/high-need starvation. Only the first currently enters category shares.

2. **[correction] Compute and report all eight cells.** Rename the current planning and selection numbers as conditional simple effects. Report status-quo flips, interactions, and either factorial averages or a predeclared Shapley attribution.

3. **[correction] Withdraw the standalone positive planning claim for the current build.** Under distributed selection, the implemented distributed planner lowers value by 6–8 points of oracle.

4. **[correction] Fix or relabel hard exclusion.** Decide whether exclusion is central-only, distributed-only, or symmetric; represent severity by retained category count.

5. **[correction] Use persistent sector types for the sectoral headline.** Keep visibility quantiles as a mechanism robustness arm. Do not use latent harm/true-value sorting as the primary construction.

6. **[correction] Repair the share mechanism.** Add costs, category capacity or marginal returns, minimum floors, and residual-budget treatment. Report budget utilization.

7. **[correction] Stop calling the greedy reference a guaranteed oracle.** Either change the label or replace the benchmark consistently across E4/E5/E9.

8. **[robustness] Predeclare the joint category/sector sensitivity program.** Cross count, pool size, typing, exclusion count, share response, need–visibility association, residual recycling, and E4 worlds.

9. **[robustness] Add intervals for every cell, effect, interaction, and attribution; register and validate the planning manifest.**

10. **[anchor] Treat external evidence as mechanism and target-moment evidence.** It supports visibility bias, political targeting, sectoral heterogeneity, and observed budget-share shifts—but not a calibrated planning-welfare band.

## Planning calibration table

| Planning object | Status / defensible band | Calibration treatment |
|---|---|---|
| `nCat=8` | **DECLARED** | Sweep 4, 8, and 10 as substantive scales; 1 as identity and 16 as fragmentation stress. COFOG has ten top-level functions, but that anchors only order of granularity for real sectors. [UN COFOG](https://unstats.un.org/unsd/classifications/cofog/revision) |
| Visibility-quantile typing | **DECLARED, theory-motivated** | Retain as robustness, not literal sectors. Visibility direction anchored by Mani–Mukand and Huet-Vaughn |
| Persistent sector typing | **DECLARED model form** | Preferred headline construction; calibrate sector sizes and opportunity sets from target-domain expenditure/project data |
| Need–visibility association | **DECLARED** | Predeclare negative, zero, and positive scenarios; current model effectively imposes independence |
| Category-level political credit | Direction anchored; magnitude **DECLARED and currently absent** | Add a separate planning coefficient; do not silently reuse the selection tilt as an empirical calibration |
| Summed `M_C`/`M_D` | E4 signals inherited; category lift **DECLARED** | Validate category-total reliability separately; avoid using the same noisy signal twice without robustness |
| Positive-part proportional shares | **DECLARED** | Sweep concentration elasticity or temperature; report zero shares |
| Minimum category share | **DECLARED policy constraint** | Report zero floor and plausible statutory/service-continuity floors |
| Residual budget recycling | **DECLARED institutional rule** | Report strict non-transferability and recyclable-residual cases |
| Hard exclusion | Possibility qualitatively anchored; implementation **DECLARED** | Separate central-only and symmetric cases |
| Retaining five of eight categories | **DECLARED stress** | Sweep every feasible retained count; do not call it exactly 60% |
| Participatory share shift | Context anchor: about 2–3 budget-share points | Use as an external target moment in a Brazil-like municipal scenario, not as a universal welfare band |
| Planning effect magnitude | **Not empirically calibrated** | Report conditional simulation output plus model-form and parameter sensitivity |

## Readiness read

The full-stack architecture is sound enough to continue, and its E5 reduction, matched randomization, delivery reuse, and ratio-of-sums bookkeeping are strong. The planning implementation and interpretation are **not yet publication-ready**.

Before retaining any planning headline, E9 should:

- align category-level credit and harm mechanisms with the prose;
- complete the eight-cell factorial and correct the estimands;
- resolve symmetric exclusion;
- introduce genuine sector structure or relabel visibility bins;
- test residual recycling and alternative share rules;
- correct the oracle claim;
- publish the predeclared planning sensitivity program and effect-specific intervals.

The existing diagonal gain is reproducible, but the 3.2- and 7.1-point planning numbers should not be carried forward as positive standalone contributions. They are conditional results from a mechanism whose relevant full-stack interaction currently runs in the opposite direction.
