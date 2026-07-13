   The pre-registration asks for mean and standard deviation over 20 seeded runs, while implementation reports a single seeded point estimate without uncertainty. [e5-value-delivery-design.md:43](/C:/devel/claude-projects/distributed-governance-research/research/e5-value-delivery-design.md:43), [e5-delivery.mjs:178](/C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:178).

   Use world-cluster bootstrap intervals plus 20 independent seeds for all four cells, main effects, interaction, and monitoring residual.

4. **[correction] Separate the world RNG from executor RNG.**  
   Executor draws advance the same RNG used for later worlds, so perfect-delivery E5 is only Monte-Carlo-close to the separately run E4 sample. The test comments acknowledge this. [e5-delivery.mjs:82](/C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:82), [e5-delivery-test.mjs:31](/C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:31).

   Use deterministic, separately seeded world and executor streams. Then perfect-delivery E5 can equal E4 seed-for-seed.

5. **[robustness] Test the bounded-cost assumption driving zero diversion.**  
   The verified result changes discontinuously at a deterrence of 1. Sweep the IC margin around zero and vary the delivery-cost distribution, for example uniform and low-/high-cost beta distributions. Report zero diversion as “conditional deterrence ex ante,” never as a calibrated field effect.

6. **[robustness] Allow execution risk to correlate with project characteristics.**  
   IID delivery risk makes zero-coupling separability structural. Add sensitivity in which delivery cost or ordinary loss increases with project size/complexity or correlates with social value. Rasul–Rogger’s strong completion heterogeneity makes this a material robustness exercise, not gratuitous complication.

7. **[correction] Reconcile the reimplementation’s value equation with the pre-registration.**  
   The original uses `θ · delivered_fraction · budget`; the implementation uses E4’s `S_j · delivered_fraction`. Retaining `S_j` is sensible for E4 comparability, but the design note should state the estimand change explicitly. [e5-value-delivery-design.md:17](/C:/devel/claude-projects/distributed-governance-research/research/e5-value-delivery-design.md:17), [engine.mjs:141](/C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:141), [E5-DELIVERY-DESIGN.md:43](/C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:43).

## Synthesis: highest-impact changes

1. **[correction]** Make diversion mean non-delivery; report protected/recovered funds separately.
2. **[correction]** Split `mon_coupling` into detection and recovery, with recovery zero for community-only monitoring.
3. **[correction]** Correct opaque diversion from “24% of executors” to 29.7% model-implied incidence; use Olken only for the missing-value moment.
4. **[correction]** Stop calling PIE-X and Ugandan transfer capture direct executor-leakage calibrators.
5. **[correction]** Rename the multiplicative output an accounting identity and estimate coupling through a percentage-of-oracle counterfactual residual.
6. **[anchor]** Report verified diversion as a conditional result with IC margin `+0.05`; it is defensible as ex-ante deterrence, not as an empirical zero-corruption estimate.
7. **[robustness]** Add budget leakage, diversion incidence, production loss, and funds preserved beside delivered social value.
8. **[robustness]** Replace the one-dimensional opaque sweep with a joint identified-set/global-sensitivity exercise.
9. **[robustness]** Add bootstrap intervals, 20-seed replication, and separate world/executor RNG streams.
10. **[correction]** Describe reputation as an exogenous continuation stake; pool-cycling omission has ambiguous direction outside the saturated verified point.
11. **[robustness]** Add delivery-parameter validation and analytical boundary/property tests.
12. **[robustness]** Include complexity/value-correlated delivery risk and alternative delivery-cost distributions.

## Calibration table

| Parameter | Defensible band / reference | Evidence status and anchor |
|---|---:|---|
| Opaque `p_det` | `.04–.15`; `.04` Olken-centered reference | `.04` is announced audit exposure in Olken, not an estimate of correct confirmation; upper end remains a weak-control scenario. |
| Opaque `a` | `.75–1.00`; reference `.80` | Exposure/severity lever; not separately identified by the cited leakage studies. |
| Opaque `r` | `.00–.10` | Short-horizon low-recovery sensitivity; PEFA and leakage studies do not identify a recovery probability. |
| `pi_hon` under current accounting | `.61–.85`; reference `.70` | Algebraic identified set reproducing broad 20–30% loss moments; not an observed honesty prevalence. |
| `pi_hon` under strict non-delivery | approximately `.76–.80`; reference `.78` | Reproduces an Olken-centered 24–27.7% total-loss moment with `loss_hon=.05`; still an identified-set choice. |
| `loss_hon` | `.00–.20`; reference `.05` | Ordinary execution loss. Rasul–Rogger supports a substantial upper tail but not the scalar `.05`. |
| Verified `p_det` | `.60–.90`; reference `.75` | Corpus design band; no cited field study identifies this exact correct-refusal probability. |
| Verified `a` | `.10–.20`; stress `.40` | World Bank standard documents commonly use 10% advances; urgent procurement guidance permits up to 40% with equivalent security. [World Bank standard document](https://thedocs.worldbank.org/en/doc/554751475182521259-0290022008/render/SupplyandInstallationofInformationSystemsSingleStageBiddingDecember2008.pdf), [urgent-procurement guidance](https://thedocs.worldbank.org/en/doc/975d0cb5b71e5ce28bd65312c8066815-0290012023/original/Bank-Guidance-Procurement-in-Situations-of-Urgent-need-of-Assistance-or-Capacity-Constraints.pdf). |
| Verified `r` | `.50–1.00`; reference `.50` | Advance-payment securities can cover the full advance contractually; realized recovery remains jurisdiction-dependent. |
| Guarantee `gamma` | `.05–.10`; reference `.10` if modeled | World Bank/ADB guidance normally caps bank-guarantee performance security around 10% of contract value. |
| Reputation `rep=R` | `.00–.50`; reference `.40` if `gamma=.10` | Strong directional support, but no field estimate in budget units. Always report `R=0` robustness. |
| `mon_detect` | `.00–.10`; reference `.05`; high `.20` | Olken and Molina support modest, heterogeneous, zero-inclusive grassroots effects. |
| `mon_recovery` | community-only `0`; formal linkage `.09–.36` | Recovery requires institutional follow-up; MGNREGA/CAG provides jurisdiction-specific upper scenarios. |
| Legacy bundled `mon_coupling` | `.00–.10`; reference `.05`; `.35` upper stress only | Retain only if splitting channels is temporarily infeasible. |
| Delivery-cost distribution | `U(0,1)` reference plus beta alternatives | A modeling normalization, not literature-calibrated. Results near the verified threshold must be reported as distribution-sensitive. |

A coherent post-correction illustrative reference, explicitly not a field calibration, is:

```js
pi_hon: 0.78,
loss_hon: 0.05,

opaque: {
  p_det: 0.04,
  a: 0.80,
  r: 0.00,
  gamma: 0.00,
  rep: 0.00
},

verified: {
  p_det: 0.75,
  a: 0.20,
  r: 0.50,
  gamma: 0.10,
  rep: 0.40
},

mon_detect: 0.05,
mon_recovery: 0.00
```

Both requested commands completed successfully: the headline run reproduced the documented 68.0% opaque and 95.0% verified fractions, and the invariant script passed 24/24. No files were edited.
