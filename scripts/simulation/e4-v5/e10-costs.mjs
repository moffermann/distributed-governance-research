// E10 — the COST layer on top of the delivered-value stack. Adds ADMINISTRATIVE/MACHINERY COST (κ): the value-proxy
// market studies, allocation, prioritization, AI-fiscalization machinery, delivery management, licenses that the
// central runs and that Core v0 largely eliminates, MINUS Core v0's own operating cost (platform + AI). This is the
// cost dimension E5 (delivered value at equal budget) and E9 (the full stack) deliberately left out.
//
// TWO SWITCHES (author requirement):
//   • PLANNING is switchable OFF (default OFF). Its magnitude is deferred/qualitative (see e9-fullstack.mjs — agenda
//     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
//     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
//   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
//
//   V_arm / O = (delivered value_arm / O) · (1 − κ_arm)      [κ = admin/machinery cost share; base κ_D < κ_C]
//   m10 = V_D/O − V_C/O
//
// κ_C, κ_D are DECLARED placeholders here — to be ANCHORED to published data (IDB *Better Spending for Better Lives*
// 2018; country procurement/administration-cost figures) in E10's own friendly round. Run: npm run e10:costs

import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
import { fullStack, PLANNING } from './e9-fullstack.mjs';
import { baseConfig, NUM } from './contract.mjs';
import { safeLog } from './adapter.mjs';

export const COSTS = {
  kappa_C:    0.20,   // central admin/machinery cost share (DECLARED placeholder — anchor to IDB / procurement figures)
  kappa_D:    0.05,   // Core v0's OWN operating cost share (platform + AI). base: κ_D < κ_C (DECLARED placeholder)
  planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
};

// The delivered-value base: E5 (selection × delivery) with planning OFF, or E9 (the full stack) with planning ON.
// Status quo = central selection × opaque delivery; Core v0 = distributed selection × verified delivery.
function valueBase(cfg, opts, costs, delivery, planning) {
  if (costs.planningOn) {
    const v = fullStack(cfg, { ...opts, delivery, planning });
    return { statusQuo: v.statusQuo, coreV0: v.coreV0, via: 'E9 (planning ON)' };
  }
  const v = delivered2x2(cfg, { ...opts, delivery });
  return { statusQuo: v.cells.S, coreV0: v.cells.A2, via: 'E5 (planning OFF)' };
}

export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
  const base = valueBase(cfg, { nWorlds, seed }, costs, delivery, planning);
  const kC = costs.kappa_C, kD = costs.kappa_D;
  const V_C = base.statusQuo * (1 - kC), V_D = base.coreV0 * (1 - kD);
  const valueGain = base.coreV0 - base.statusQuo;
  const costGain = V_D - V_C;
  return {
    planningOn: costs.planningOn, via: base.via, kappa_C: kC, kappa_D: kD,
    valueOnly: { statusQuo: base.statusQuo, coreV0: base.coreV0, gain: valueGain },
    withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
    adminCostContribution: costGain - valueGain,   // how much the admin-cost layer adds to the Core-v0 − status-quo gap
  };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...baseConfig(), ...W, ...PROBABLE };
    const r = e10(cfg, { nWorlds: 1200 });
    safeLog('E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.');
    safeLog('PLANNING is OFF by default (its magnitude is deferred); COSTS are administrative/machinery (κ).\n');
    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central machinery) · κ_D=${r.kappa_D} (Core v0 platform)  [DECLARED — to be anchored]`);
    safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
    safeLog(`WITH ADMIN COSTS:         status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
    safeLog(`  the admin-cost layer adds ${pct(r.adminCostContribution)} to the gap (the central's heavier machinery costs more).\n`);

    // costs OFF reduces E10 to the value stack; planning ON uses E9 (folds in the deferred planning layer — NOT the headline).
    const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
    safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);

    // κ sensitivity (DECLARED until anchored): how the gap responds to the central's machinery cost.
    safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — DECLARED pending anchoring to IDB/procurement data):');
    safeLog('   κ_C     with-costs gain     admin-cost contribution');
    for (const kc of [0.10, 0.20, 0.30, 0.40]) {
      const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.withCosts.gain).padStart(7)}              ${pct(rk.adminCostContribution).padStart(7)}`);
    }
    safeLog('   → the central runs the value-proxy / allocation / prioritization / AI-fiscalization machinery Core v0');
    safeLog('     eliminates, so κ_C > κ_D widens the gap. Magnitudes DECLARED until anchored (IDB Better Spending 2018).');
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
