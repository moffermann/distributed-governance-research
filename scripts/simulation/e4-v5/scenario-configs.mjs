// E4 v1.14 — the three anchored scenario configs (single source; used by scenarios.mjs and frontier.mjs).
// Anchors + justification: research/e4-plausible-anchors.md (MASTER SCENARIO TABLE).
export const PROBABLE = { a_V: 0.5, b_V: 3.5, p: 0.15, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
  s_exp: 2.5, b_H_C: 0.5, w: 0.5, a: 0.2, b: 0.9, beta: 0.35, lambda: 0.15, zeta: 0.6, gamma: 0.5,
  sigma_e: 0.5, sigma_C: 0.5 };
// CONTINUITY ANCHOR (central's realistic best case): PROBABLE but harm-myopia OFF + competent central.
export const PRO_CENTRAL = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
// PRO-DISTRIBUTED: favourable but not stacked to catastrophe.
export const PRO_DIST = { a_V: 0.25, b_V: 4.5, p: 0.40, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
  s_exp: 4.0, b_H_C: 0.25, w: 1.1, a: 0.4, b: 0.75, beta: 0.12, lambda: 0.30, zeta: 0.4, gamma: 0.8,
  sigma_e: 0.25, sigma_C: 0.7 };
export const SCENARIO_WORLD = { N: 1500, K: 150 };
