## Appendix E4: the symmetric gate and the four-scenario robustness map

The fair, literature-anchored asymmetric comparison is the primary directional finding; the pre-registered gate is a narrow selection robustness check.

### The symmetric credit-versus-coverage gate (full methods)

Each of 100 seeded worlds contains K = 500 projects and N = 5000 potential participants per project, with project-specific interest, so reach is endogenous and capped at N. Arms share the candidate pool, exact costs, true net[j] = S[j] − h·cost[j], delivery parity, report noise v + Normal(0, τ), a budget of one-third of total project cost, greedy selection, eligibility only when their own noisy net estimate is positive (no oracle), and ex-post scoring on true net.

Distributed appraisal self-routes: each interested citizen reports independently with probability p if v ≥ 0 and p(1 − β) if v < 0, imposing adverse voice bias; Ŝ_D = Σreports/p, and projects rank by estimated net/cost. Central appraisal receives the distributed arm's expected report budget, spread evenly as m_C = round(expected reports/K), hence matched in expectation up to rounding. Per project it samples m_C interested citizens, observes v + Normal(0, τ), and estimates Net_C = reach·mean(observed) − h·cost. It ranks (1 − λ)·z(Net_C/cost) + λ·z(P/cost), using its estimate, never true net. P is claimable political credit—the electoral traceability mechanism favouring visible, attributable over diffuse benefits (Mayhew 1974; Arnold 1990)—and λ is bounded, posited pressure requiring measurement. Credit changes ranking, not eligibility: the planner never knowingly funds estimated value-destroying projects. Thus only routed coverage with reduced negative voice versus even bandwidth with credit pressure differs.

The estimand is Δ = (D − C)/O, delivered true net relative to the full-information greedy reference O, neither optimum nor upper bound. The frozen grid crosses λ ∈ {0, .1, .2, .3} (0 is the negative control), latent ρ ∈ {0, .5, 1} (realized corr(S,P) ≈ .00, .30, .82), and h ∈ {1.5, 2.5, 4}. Baseline (p = .35, β = .30, τ = .5) and matched-budget low-information stress (p = .15, β = .60, τ = 1.0) regimes are run. The independent auditor's adversarial rule, frozen before execution, required at least 15/18 primary cells with mean Δ > 0, pooled median Δ ≥ .05, bootstrap lower bound > 0, stress median Δ ≥ 0, and a pause if the λ = 0 control exceeded .05.

The gate returned NO-GO for rebuilding the quantitative engine: all 18 cells were positive, but median Δ = .025 missed .05; λ = 0 was ≈ .016, within the pause guard, so no hidden asymmetry was flagged. The separate post-hoc world-cluster ratio-of-sums was Δ = .026 [.023, .029], a Monte-Carlo interval conditional on the simulated data-generating process. The advantage rises with λ and falls as credit aligns with value, supporting the mechanism direction, but is small for this estimand. The .05 rule is a research-program gate, not a calibrated policy-materiality threshold.

This test deliberately grants the central an otherwise unbiased, competent, corruption-free value reader with better harm information while handicapping distributed appraisal through adverse voice bias. It also fixes proposals and holds delivery equal. Exactly these idealizations make its selection contrast neither an upper nor lower bound on Core v0's architecture-wide value.

### The four-scenario robustness map (v1.14)

The fair asymmetric model instead represents the evidence-grounded institutional difference: central near-blindness to diffuse harm in the low-visibility long tail. Its bases are the knowledge problem (Hayek 1945), legibility (Scott 1998), political underweighting of diffuse costs (Olson 1965; Schattschneider 1960; Wilson 1973), passive waste—83% in Bandiera, Prat and Valletti's (2009) setting-specific Italian standardized-goods procurement—seen versus unseen (Bastiat 1850), and agenda control (Bachrach and Baratz 1962). It sets M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, with harm detection s(V) increasing in visibility; distributed appraisal registers harm throughout the distribution.

Core v0 has universal budget routing by architecture (p = 1): profiles and delegates act for passive citizens, not low-turnout direct participation or perfect information. Its declared, source-motivated signal mix is ≈5% direct reports, ≈35% revocable individual microdelegation (Kling et al. 2015), and ≈60% high-alignment profile defaults (Samuelson and Zeckhauser 1988). Scored on true value, four scenarios plus one diagnostic report signed fractions of the full-information greedy reference, with parity at zero (`npm run e4:scenarios`):

| scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
|---|---:|---:|---:|---|
| **Probable—declared reference:** central diffuse-harm myopia, projection, credit tilt; anchored distributed composition | **+54.0%** [+53.2, +54.8] | 98.2% | 44.2% | **Core v0 (decisive)** |
| **Only harm-myopia off** (`MYOPIA_OFF`; only two harm-gate coordinates change) | **+37.6%** [+37.0, +38.2] | 98.2% | 60.6% | Core v0 |
| **No-myopia bundle:** central gets harm-sight, unbiasedness, precision, no credit | **+13.8%** [+13.5, +14.1] | 98.6% | 84.8% | Core v0 |
| **Distributed's favourable case** | **+205.2%** [+202.9, +208.1] | 95.6% | −109.6% | Core v0 |
| **Central's declared favourable endpoint:** residually imperfect reader, near-harmless world | **−2.3%** [−2.5, −2.2] | 95.3% | 97.6% | central (narrow model-internal lead) |

The primary PROBABLE contrast recovers 98.2% of the reference versus 44.2%—≈2.2× and a 54-point difference. Separately, the full selection-and-delivery architecture exceeds the status quo by ≈58.6 points; delivery is not folded into this selection map. Across the anchored slices, coverage wins except at the declared central endpoint. Turning off myopia accounts for 16.4 of the 40.2-point fall from probable to full bundle (≈41%); even the full listed central idealization leaves +13.8. Within the declared map, central leads only in a source-disfavoured corner: no myopia (against Hayek/Scott/Olson/Bandiera), no projection (against Broockman and Skovron 2018), and near-zero harm. The symmetric distributed corner—perfect signal in a harm-rich world, with central myopia anchored—gives ≈+118%; tabled `PRO_DIST` reaches +205% because it also degrades central below its anchor. Neither mirror corner is empirically grounded.

Correlated profile/delegation error from a shared platform or recommender, or super-delegate concentration (Kling et al. 2015), is the distributed arm's structural sensitivity: it reduces ≈+54% to ≈+44% (modest) and ≈+26% (strong), crossing parity only near σ_cm ≈ 2.1. No plausible one-factor slice flips the winner; the declared path crosses near its central endpoint, at t ≈ .92. These six slices and one path are local curve evidence, not a global frontier; joint Sobol/Latin-hypercube exploration is deferred.

These are declared, source-motivated reference points from a stylized comparative-institutions model: conditional directional contrasts, not calibrated field effects. Four limits apply: (i) the harm gate's magnitude is stylized, though its direction is strongly anchored and s_exp ∈ [1, 2.5] gives ≈+48% to +54%; (ii) central inputs are proxy-informed, not calibrated, because elite–constituent perception evidence must traverse three unestimated links—opinion error → project score → portfolio → realized affected-party value; (iii) 95% conditional world-bootstrap intervals at fixed inputs capture finite-world uncertainty only, excluding parameter, transport, functional-form, and field-implementation uncertainty; distributed independent/common-mode error is its one structural sensitivity; and (iv) delivery and administration remain separate: E5 adds leakage at matched budget, while E10 deducts administrative cost from net budget before selection.

### E4 calibration targets

E4-v4/v5 magnitudes are model-internal. The datasets below could inform parameters and expose the empirical boundary; central percentage-of-benchmark is an output, but realized/appraised ratios are a different construct (§6), so validation requires an explicit bridge.

| Model quantity | Model value | Real-world proxy | Candidate dataset(s) | Status |
|---|---|---|---|---|
| central %-benchmark | 44–85% | realized ÷ appraised value | World Bank IEG ratings; Flyvbjerg megaproject DB | candidate target; explicit mapping needed |
| η (harm-blindness) | 0–0.5 | passive vs active waste | Bandiera–Prat–Valletti 2009 (83% passive; Italian standardized goods) | anchored-direction |
| β (voice inequality) | 0.2–0.5 | PB participation bias | NYC / Paris / Porto Alegre; Decidim / Consul | calibratable |
| q, m (detection) | q ≈ 0.5–1%; m in hundreds | complaint / whistleblowing rates | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibratable |
| λ threshold | central ≈ 0.10 | procurement rents / bribe depth | Olken 2007; WB Enterprise Surveys | calibratable |
| penalty f | equal both sides | legal sanction scale | held equal (conservative) | scope choice |

The visibility tail is motivated by heavy-tailed procurement (Skuhrovec et al. 2013), participation by participatory-budgeting turnout, and the harm gate by agenda/salience research. Per-knob anchor strengths, target details, reproducible scenarios/frontier, and theorem are in `research/e4-calibration-literature-anchors.md`, `research/e4-plausible-anchors.md`, `research/e4-calibration-targets.md`, `scripts/simulation/e4-v5/`, and `research/e4-parity-theorem.md`.