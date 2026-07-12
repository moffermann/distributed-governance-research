// E4 v1.14 — the anchored scenario configs. SINGLE SOURCE OF TRUTH for the scenario points (the docs reference these,
// they do NOT duplicate the values — this reduces the doc↔code fork risk Codex v7 caught; the sign-ordering test
// pins executable outcome ordering ONLY, not exact configs/labels/prose). Anchors + justification per
// knob: research/e4-plausible-anchors.md.
//
// PARTICIPATION IS A FACTO, NOT A KNOB: in Core v0 net-allocation participation is ~100% by architecture (profiles
// + delegates cover the passive), so p = 1.0 in EVERY scenario — it is NOT anchored to (low) participatory-budgeting
// turnout (that conflation understated the distributed arm). See research/e4-plausible-anchors.md.
// FOUR substantive declared scenarios + ONE diagnostic contrast (do not conflate):
//   PRO_CENTRAL   = a declared central-favourable ENDPOINT (every knob central-favourable; some sit outside the
//                   registered expectable bands). Under faithful universal participation this fully-idealized
//                   endpoint is AT MOST A BARE TIE (~-1.4%), not a win — even 20% inward, coverage wins.
//   NO_MYOPIA     = a harm-aware AND otherwise-competent central BUNDLE (harm sight + unbiased + precise + no credit).
//                   NOT a myopia isolation. A competent harm-aware central still trails coverage under faithful
//                   participation (~+14%); it reconciles in DIRECTION with the frozen symmetry-gate near-parity
//                   (that gate equips the central with harm-aware appraisal under a conservative participation regime).
//   PROBABLE      = the source-motivated declared reference point (~+54.6%).
//   PRO_DIST      = the distributed arm's favourable case (~+206%).
//   MYOPIA_OFF    = a DIAGNOSTIC CONTRAST (not a scenario): PROBABLE with ONLY the two harm-gate coords changed
//                   (s_exp, b_H_C). Sequential, path-dependent attribution: harm-myopia ALONE moves +54.6% → +38.4%
//                   (16.2 of the 40.7-pt decline to +13.9%, ~40%); the further step to the NO_MYOPIA bundle is ~60%.
// Signal-quality composition of Core v0's universal coverage (a facto split, not a knob to gerrymander):
//   ~5% ACTIVE direct participation (full fidelity; the 3–5% "turnout" figure in the paper is THIS share, not total),
//   ~35% MICRODELEGATION (individual signal + bounded revocable noise), ~60% PROFILE rules (category-aligned, high
//   alignment but coarser on project-specific harm). Same across every scenario (Core v0 architecture).
export const COMPOSITION = { f_active: 0.05, f_deleg: 0.35, k_deleg: 1.5, phi_prof: 0.85, d_bias: 0.1 };
export const PROBABLE = { ...COMPOSITION, a_V: 0.5, b_V: 3.5, p: 1.0, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
  s_exp: 2.5, b_H_C: 0.5, w: 0.5, a: 0.2, b: 0.9, beta: 0.35, lambda: 0.15, zeta: 0.6, gamma: 0.5,
  sigma_e: 0.5, sigma_C: 0.5 };
// Declared central-favourable endpoint (every knob central-favourable). Under faithful universal participation:
// at most a bare tie (~ −1.4%), NOT a win.
export const PRO_CENTRAL = { ...COMPOSITION, a_V: 1.0, b_V: 1.5, p: 1.0, a_r: 0.8, b_r: 14, pi_opp: 0.03, mu_opp: 1.5,
  s_exp: 0.5, b_H_C: 1.2, w: 0.1, a: 0.0, b: 1.0, beta: 0.8, lambda: 0.0, zeta: 0.85, gamma: 0.3,
  sigma_e: 1.2, sigma_C: 0.2 };
// GENUINE myopia-only contrast: PROBABLE with ONLY the two harm-gate coordinates changed. Winner: Core v0 (~ +38%).
export const MYOPIA_OFF = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3 };
// Harm-aware AND competent central bundle (NOT myopia-isolation): PROBABLE + harm sight + unbiased + precise + no
// credit. Winner: Core v0 (~ +14%); reconciles in DIRECTION with the frozen symmetry-gate near-parity.
export const NO_MYOPIA = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
// Distributed arm's favourable case (not stacked to catastrophe).
export const PRO_DIST = { ...COMPOSITION, a_V: 0.25, b_V: 4.5, p: 1.0, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
  s_exp: 4.0, b_H_C: 0.25, w: 1.1, a: 0.4, b: 0.75, beta: 0.12, lambda: 0.30, zeta: 0.4, gamma: 0.8,
  sigma_e: 0.25, sigma_C: 0.7 };
export const SCENARIO_WORLD = { N: 1500, K: 150 };
