
2. Independently appraised sector return vector or actual-versus-constrained-optimal value gap.

3. Election-induced change in a preregistered visible-category share.

4. Out-of-sample slope or correlation between the distributed signal and independent sector value.

The return and visibility vectors jointly determine dispersion and association. That removes the need to fit a free `assoc`. Observed zeros determine whether an exclusion scenario is even admissible.

## Calibration-upgrade table

| Parameter | Current status | Proposed anchored moment | Source | Result if known |
|---|---|---|---|---|
| `nSec` | 8 in requested snapshot; declared | 10 COFOG functions, or 9 nondefence functions | [UN](https://unstats.un.org/unsd/classifications/cofog/revision), [IMF](https://www.imf.org/external/np/pp/eng/2015/061115.pdf) | Changing only 8→10: planning `+3.78%`→`+4.90%` of reference |
| Sector membership | Uniform random | Actual pipeline labels/counts/costs; fallback COFOG capital distribution | [BOOST](https://documents.worldbank.org/curated/en/394341501487463505/pdf/117796-WP-PUBLIC-28-7-2017-14-51-18-boostguidancenote.pdf), [Eurostat](https://ec.europa.eu/eurostat/cache/metadata/en/gov_10a_exp_esms.htm) | Unknown; could move either direction |
| `secValSpread` | `0.3`, additive and declared | Between-sector return-per-cost SD | [World Bank OED](https://documents1.worldbank.org/curated/en/699061468313797781/pdf/Annual-review-of-evaluation-results-1988.pdf) | Provisional `≈0.184`; spread-only planning `+0.6%` strict, `+2.1%` recycle |
| `creditCoef` | `0.6`, permanent and declared | Election change in log visible budget share: `0.024`, SE `0.008` | [Drazen–Eslava](https://econweb.umd.edu/~drazen/Working_Papers/voter_friendly.pdf) | Provisional `≈0.076`; credit-only planning `+1.36%` strict, `+2.96%` recycle |
| `assoc` | `-0.6`, declared | Correlation from independent need/return and visibility vectors | No universal published moment | Must remain scenario; preferably remove via empirical vectors |
| `covSees` | `0.7`, declared; effectively `0.21` at spread `0.3` | Cross-validated attenuation slope against independent value | No universal published moment | Unknown |
| Visibility | Even grid | Survey/media/attribution/maintenance-new index, standardized | Political-economy sources anchor ordering only | Unknown |
| `hardExclude` / `nKeep` | Hard exclusion off; `nKeep=5` latent | Count of zero-funded sectors with viable appraised opportunities | BOOST, PEFA, appraisal pipeline | Baseline should remain off |
| `agendaCapture` | Concurrently added as `1`; implemented | Same evidentiary hurdle as exclusion | No cited evidence for a universal whole-function exclusion | Keep `0` for any anchored headline |
| Allocative loss | Not reported as calibration moment | Actual versus constrained-optimal value loss | Country PER/appraisal/outcome data | No universal estimate |

## Ranked model modifications

1. Fix the two calibration blockers.

   - Remove the extra `secValSpread` multiplication in distributed perception.
   - Construct realized need with exact mean, SD, and correlation.
   - Keep `agendaCapture=0` unless a target dataset establishes exclusion.

2. Expose calibration moments in output.

   Report central, distributed, baseline, and reference sector shares; visible-share exposure; share total-variation distance; realized sector return SD; realized need–visibility correlation; and a planning-only welfare loss.

3. Replace additive value tilt with return-per-cost tilt.

   Use `Sadj = S + cost * sectorReturnTilt`. This makes the parameter commensurate with economic returns and prevents cost-dependent distortion of the sector effect.

4. Replace synthetic sectors with a data input table.

   Each sector should carry COFOG code, candidate count, cost distribution, baseline capital share, return distribution, visibility, need, and maintenance share.

5. Separate baseline allocation from flexible political reallocation.

   A useful form is:

   \[
   b_s^C=(1-f)b_s^0+
   f\operatorname{softmax}\!\left(
     \log b_s^0+\theta_V v_s+\theta_C I_{\text{election}}v_s+\widehat\tau_s^C
   \right).
   \]

   This distinguishes inherited budget structure, the flexible budget fraction, permanent credit, and an election shock. It also makes the credit term a share semi-elasticity rather than an additive coefficient tied to the arbitrary scale of `M_C`.

6. Model maintenance versus expansion explicitly.

   This is far more directly supported by Rioja than a generic Gaussian negative sector association.

7. Add a country-specific inverse-calibration harness.

   Root-solve the four moments above, reserve held-out moments for validation, and propagate empirical-moment uncertainty. Existing bootstrap intervals describe simulated-world variation only.

8. Introduce a genuine value-maximizing comparator.

   If E9 is to match an actual-versus-optimal allocation gap, replace or supplement the greedy reference with an exact or bounded optimization and sector response curves with diminishing marginal returns.

9. Treat exclusion as a hurdle model.

   First model whether viable projects exist; only then model whether central planning assigns zero budget. This separates structural absence from agenda suppression.

## Honest magnitude read

Anchoring is more likely to shrink the planning layer than enlarge it.

A deliberately cautious joint diagnostic—`secValSpread≈0.184`, `creditCoef≈0.07`, `agendaCapture=0`, corrected `covSees`, `assoc=-0.6` retained as a scenario—gives:

- Eight sectors, recycled residual: `+2.19%` of reference, CI `[+1.90%, +2.50%]`.
- Ten sectors, recycled residual: `+3.16%`, CI `[+2.89%, +3.42%]`.
- Under strict residual treatment, results range from slightly negative to approximately `+0.6%`, because sector envelopes again mix planning with unused budget.

Those numbers combine an old international World Bank return portfolio with a Colombian election moment. They therefore must not be presented as one transported empirical calibration. They show only that plausible downward re-anchoring leaves planning modest and can leave it positive once the utilization confound is removed.

The defensible publication statement today is:

> Published evidence anchors the sector taxonomy, the existence and direction of cross-sector return heterogeneity, and an election-period shift toward targeted visible spending. It does not yet identify a universal need–visibility correlation, distributed signal fidelity, or pure cross-sector allocative-loss fraction. Preliminary moment mappings place E9’s planning contribution in the low single digits of the reference and below the current declared result, but a fully anchored magnitude requires a coherent country/domain-specific dataset.

So: planning probably shrinks but remains potentially positive; a provisional `0–3%` data-assisted range is reasonable for development work, while no fully anchored band should yet be claimed.
