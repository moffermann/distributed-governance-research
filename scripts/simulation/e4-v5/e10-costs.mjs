// E10 — the COST layer on top of the delivered-value stack. Adds ADMINISTRATIVE/MACHINERY COST (κ): the value-proxy
// market studies, allocation, prioritization, AI-fiscalization machinery, delivery management, licenses that the
// central runs and that Core v0 largely eliminates, MINUS Core v0's own operating cost (platform + AI). This is the
// cost dimension E5 (delivered value at equal budget) and E9 (the full stack) deliberately left out.
//
// TWO SWITCHES (author requirement):
//   • PLANNING is switchable OFF (default OFF). Its magnitude is deferred/qualitative (see e9-fullstack.mjs — agenda
//     capture is a proposed, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
//     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
//   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
//
//   Admin cost reduces the BUDGET (net-budget accounting): each arm funds at (1−κ_arm)·budget, and its delivered value
//   is taken as a fraction of the COMMON full-budget oracle. m10 = V_D − V_C. (Adversarial R1: an earlier version
//   applied κ as a haircut on delivered VALUE, which over-stated the effect — greedy funding cuts the marginal
//   low-value projects first, so the value loss is sub-proportional to κ.)
//
// κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5 delivery leakage and charged SYMMETRICALLY (Core
// v0's own control machinery is costed, not free). Magnitudes DECLARED (see COSTS). Run: npm run e10:costs

import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
import { fullStack, PLANNING_PRIMARY } from './e9-fullstack.mjs';   // planning-on uses the RECYCLED primary, not strict (Adversarial R2 verify #2)
import { baseConfig, NUM } from './contract.mjs';
import { safeLog } from './adapter.mjs';

export const COSTS = {
  // Adversarial-round-1 corrections: κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5's delivery
  // leakage (the IDB "16% of expenditure" waste bundles procurement/transfer LEAKAGE, which E5 already removes as
  // non-delivery — using it here double-counted). And costs are charged SYMMETRICALLY: Core v0's own control machinery
  // (the evidence/verification/recovery layer that earns E5's verified-delivery benefit) is costed, not free.
  kappa_C:    0.08,   // central allocation / prioritization / value-proxy-study / delivery-management machinery Core v0
                      //     replaces. Anchor: pure administrative OVERHEAD band 1–10% (CBPP; SSA <1%; CBO 0.3–2.8%),
                      //     upper part since κ_C is broadly scoped. NOT the IDB waste figure (that overlaps E5 leakage).
                      //     Magnitude DECLARED.
  kappa_D:    0.05,   // Core v0's OWN operating cost = digital platform + AI (low, e-GP run-costs <1% of spend — JBCA
                      //     2023, KONEPS, GeM, ProZorro) PLUS its verification/audit/recovery/reputation control
                      //     machinery (symmetric charge for the controls that produce the E5 verified benefit). base
                      //     κ_D < κ_C but the margin is MODEST under symmetric accounting. Magnitude DECLARED.
  planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
};

// A DECLARED ASYMMETRIC-COST scenario (declared, not measured). The LOW-SPREAD COSTS above are a deliberately CONSERVATIVE
// floor; they are NOT the only defensible case. In steady state (régime) the central's machinery — appraisal / value-proxy
// studies, prioritization and allocation bureaucracy, approvals, and the SALARIES that run them — is a large recurring
// overhead, while Core v0's operating cost is a digital platform + maintenance + AI-assisted and citizen-sourced
// fiscalization at NEAR-MARGINAL-ZERO cost. So the declared asymmetric-cost scenario has κ_C ≫ κ_D. DIRECTION anchored
// (central admin bureaucracy is large and recurring; e-GP run-costs <1% of spend; AI/citizen verification marginal ≈ 0);
// MAGNITUDE DECLARED, not calibrated. NOTE κ_C = 0.12 sits JUST ABOVE the 1–10% pure-overhead band, so read it as
// steady-state recurring OPERATING cost broadly (appraisal + prioritization + salaried bureaucracy), not pure overhead
// alone. Steady-state costs ONLY — one-time implementation CAPEX is EXCLUDED (not amortized), so it is not a régime cost.
export const COSTS_ASYMMETRIC = { kappa_C: 0.12, kappa_D: 0.02, planningOn: false };

// Fail-closed validation of the cost config (Adversarial R2 #5): κ must be a finite fraction in the SUPPORTED domain
// [0,1) — a negative κ would ADD budget, κ≥1 / NaN produce degenerate/NaN funding — and planningOn must be a strict boolean.
export function validateCosts(costs) {
  const bad = [];
  for (const k of ['kappa_C', 'kappa_D']) {
    const v = costs[k];
    if (typeof v !== 'number' || !Number.isFinite(v)) bad.push(`${k}=${v} must be a finite number`);
    else if (v < 0 || v >= 1) bad.push(`${k}=${v} must be in [0,1)`);
  }
  if (typeof costs.planningOn !== 'boolean') bad.push(`planningOn=${costs.planningOn} must be a boolean`);
  if (bad.length) throw new Error(`[e10-costs] invalid cost config: ${bad.join('; ')}`);
  return true;
}

// Delivered value of one arm's cell at a NET budget, via the SHARED-WORLD net-budget estimand: budgetScale=1−κ scales
// ONLY the arm funding, while the oracle and world-retention stay at the FULL budget (Adversarial R2 #2). So the scale=1,
// scale=1−κ_C and scale=1−κ_D runs (same seed) retain the SAME worlds and are all normalized by the SAME full-budget
// oracle — even when a net-budget arm funds nothing (that world is still retained, contributing 0 for the arm). Admin cost
// reduces the BUDGET (fewer projects funded), not delivered value directly; greedy funding cuts the MARGINAL (lowest-value)
// projects first, so the value loss is SUB-proportional to κ (Adversarial R1 #1/#13). The returned cell is ALREADY
// normalized by the common full-budget ΣO.
function armValueNet(cfg, opts, costs, delivery, planning, arm, kappa) {
  const budgetScale = 1 - kappa;
  if (costs.planningOn) {
    const v = fullStack(cfg, { ...opts, delivery, planning, budgetScale });
    return arm === 'C' ? v.statusQuo : v.coreV0;   // normalized by the COMMON full-budget oracle
  }
  const v = delivered2x2(cfg, { ...opts, delivery, budgetScale });
  return arm === 'C' ? v.cells.S : v.cells.A2;      // normalized by the COMMON full-budget oracle
}

export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING_PRIMARY, costs = COSTS } = {}) {
  validateCosts(costs);
  const kC = costs.kappa_C, kD = costs.kappa_D;
  const via = costs.planningOn ? 'E9 (planning ON)' : 'E5 (planning OFF)';
  // full-budget value base (both arms, for value-only) — same seed/worlds as the net-budget arms (shared retention).
  const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
  const sq = costs.planningOn ? full.statusQuo : full.cells.S;
  const cv = costs.planningOn ? full.coreV0 : full.cells.A2;
  // NET-budget delivered value of each arm, ALREADY normalized by the COMMON full-budget oracle (shared retained worlds).
  const V_C = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'C', kC);
  const V_D = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'D', kD);
  const valueGain = cv - sq;
  const costGain = V_D - V_C;
  return {
    planningOn: costs.planningOn, via, kappa_C: kC, kappa_D: kD,
    valueOnly: { statusQuo: sq, coreV0: cv, gain: valueGain },
    withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
    adminCostContribution: costGain - valueGain,   // net-budget admin-cost effect on the Core-v0 − status-quo gap
  };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...baseConfig(), ...W, ...PROBABLE };
    const r = e10(cfg, { nWorlds: 1200 });
    safeLog('E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the');
    safeLog('full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget');
    safeLog('accounting). Reported under two DECLARED cost scenarios: a conservative low-spread floor and a declared asymmetric-cost scenario.\n');
    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central allocation/prioritization/study machinery) · κ_D=${r.kappa_D} (Core v0 platform + its control machinery)  [magnitude DECLARED]`);
    safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
    safeLog(`WITH ADMIN COSTS (net budget): status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
    safeLog(`  admin-cost effect on the gap: ${pct(r.adminCostContribution)} (points of the reference).\n`);
    safeLog('  → Under the deliberately CONSERVATIVE low-spread assumption the admin-cost layer is roughly NEUTRAL (greedy');
    safeLog('    funding cuts marginal low-value projects first, so the value loss is sub-proportional). But that low spread');
    safeLog('    is a conservative FLOOR, not the only defensible case: the central\'s steady-state appraisal / prioritization /');
    safeLog('    salaried machinery is a large recurring overhead, while Core v0 runs on a platform + AI/citizen fiscalization');
    safeLog('    at near-marginal-zero cost — so the DIRECTION favors Core v0 (κ_C ≫ κ_D). See the scenarios below.\n');

    const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
    safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);

    safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):');
    safeLog('   κ_C     admin-cost effect on the gap (points of reference)');
    for (const kc of [0.05, 0.08, 0.15, 0.30]) {
      const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.adminCostContribution).padStart(7)}`);
    }
    safeLog('   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,');
    safeLog('     direction only (central allocation machinery cost > platform cost — public-administration cost accounts / low e-government platform costs).');

    // TWO DECLARED SCENARIOS (régime costs only; implementation CAPEX excluded): the conservative LOW-SPREAD FLOOR vs the
    // declared ASYMMETRIC-COST scenario. Direction anchored, magnitude declared — NOT a calibrated figure (Adversarial R2 authors' pass).
    safeLog('\nDeclared cost scenarios over identical perimeters (régime costs only — one-time implementation CAPEX excluded, not amortized):');
    const lowSpread = e10(cfg, { nWorlds: 1200, costs: COSTS });
    const asym = e10(cfg, { nWorlds: 1200, costs: COSTS_ASYMMETRIC });
    safeLog(`  conservative LOW-SPREAD floor (κ_C=${COSTS.kappa_C}, κ_D=${COSTS.kappa_D}):   admin-cost effect ${pct(lowSpread.adminCostContribution)}   → roughly neutral`);
    safeLog(`  declared ASYMMETRIC-cost scenario (κ_C=${COSTS_ASYMMETRIC.kappa_C} central appraisal+prioritization+salaried bureaucracy ·`);
    safeLog(`                        κ_D=${COSTS_ASYMMETRIC.kappa_D} platform + AI/citizen fiscalization ≈ marginal-zero):   admin-cost effect ${pct(asym.adminCostContribution)}   → a declared Core v0 advantage`);
    const freed = COSTS_ASYMMETRIC.kappa_C - COSTS_ASYMMETRIC.kappa_D;
    safeLog(`  → TWO distinct statements: (i) ASSUMED net-budget difference — the declared κ_C−κ_D ≈ ${(100 * freed).toFixed(0)}% of the budget is a`);
    safeLog('    declared scenario input, not a measured saving (κ_C=0.12 = recurring operating cost broadly, not pure overhead); (ii) its DELIVERED-VALUE effect');
    safeLog(`    is smaller (${pct(asym.adminCostContribution)} on the reference gap) because the freed budget funds marginal, low-value projects`);
    safeLog('    (net-budget sub-proportionality). "Roughly neutral" describes only (ii) under the conservative low-spread floor;');
    safeLog('    the declared asymmetric-cost scenario is a declared cost advantage for Core v0 — direction anchored, magnitude declared, not calibrated.');
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
