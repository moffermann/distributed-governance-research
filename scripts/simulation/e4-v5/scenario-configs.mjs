// E4 v1.14 — the anchored scenario configs. SINGLE SOURCE OF TRUTH for the scenario points (the docs reference these,
// they do NOT duplicate the values — this prevents the doc↔code fork Codex v7 caught). Anchors + justification per
// knob: research/e4-plausible-anchors.md.
//
// Four named scenarios, distinct questions (do not conflate — the earlier code conflated PRO_CENTRAL with NO_MYOPIA):
//   PRO_CENTRAL   = the central's FULL best plausible case (every knob at its central-favourable anchored value).
//                   → the central GENUINELY WINS here; this is the honest "level the field for the central" case.
//   MYOPIA_OFF    = PROBABLE with ONLY the two harm-gate coordinates changed (s_exp, b_H_C). This is the GENUINE
//                   myopia-isolation contrast: it attributes the harm-myopia mechanism ALONE (m ≈ +30% — the harm
//                   channel explains most, not all, of the PROBABLE advantage).
//   NO_MYOPIA     = a harm-aware AND otherwise-competent central bundle (myopia off + unbiased + precise + no credit
//                   distortion). NOT a myopia isolation — it also improves projection/bias/noise/credit. It is the
//                   continuity anchor to the earlier symmetry-gate ~0.025 near-parity (that gate equips the central
//                   with competent harm-aware appraisal), reached at ~+6%.
//   PROBABLE      = the evidence/theory-motivated (mostly-assumed) reference point.
//   PRO_DIST      = the distributed arm's favourable case.
export const PROBABLE = { a_V: 0.5, b_V: 3.5, p: 0.15, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
  s_exp: 2.5, b_H_C: 0.5, w: 0.5, a: 0.2, b: 0.9, beta: 0.35, lambda: 0.15, zeta: 0.6, gamma: 0.5,
  sigma_e: 0.5, sigma_C: 0.5 };
// Central's full best plausible case (every knob central-favourable). Winner: central (~ −30%).
export const PRO_CENTRAL = { a_V: 1.0, b_V: 1.5, p: 0.05, a_r: 0.8, b_r: 14, pi_opp: 0.03, mu_opp: 1.5,
  s_exp: 0.5, b_H_C: 1.2, w: 0.1, a: 0.0, b: 1.0, beta: 0.8, lambda: 0.0, zeta: 0.85, gamma: 0.3,
  sigma_e: 1.2, sigma_C: 0.2 };
// GENUINE myopia-only contrast: PROBABLE with ONLY the two harm-gate coordinates changed. Winner: Core v0 (~ +30%).
export const MYOPIA_OFF = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3 };
// Harm-aware AND competent central bundle (NOT myopia-isolation): PROBABLE + harm sight + unbiased + precise + no
// credit. Continuity anchor to the symmetry-gate ~0.025 near-parity. Winner: near-parity (~ +6%).
export const NO_MYOPIA = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
// Distributed arm's favourable case (not stacked to catastrophe).
export const PRO_DIST = { a_V: 0.25, b_V: 4.5, p: 0.40, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
  s_exp: 4.0, b_H_C: 0.25, w: 1.1, a: 0.4, b: 0.75, beta: 0.12, lambda: 0.30, zeta: 0.4, gamma: 0.8,
  sigma_e: 0.25, sigma_C: 0.7 };
export const SCENARIO_WORLD = { N: 1500, K: 150 };
