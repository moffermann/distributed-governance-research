// E5 v1.14 — the MULTI-LAYER value experiment. E4 measures SELECTION quality at matched project budget; E5 composes
// the full delivered-value stack across ALL layers, with the DELIVERY/BUDGET channels (admin cost kappa, leakage
// leak) as PARAMETRIC, DEFAULT-OFF knobs. With the channels off (kappa=leak=0) the central is granted zero admin
// cost and zero leakage — every benefit of the doubt — and E5 reduces EXACTLY to the E4 selection result. The
// cost+corruption extension turns them on, anchored to real public-budget/corruption data. Run: npm run e5:layers
//
// Delivered value per arm, as a fraction of the full-information oracle O (parity at 0, NO x/D-C notation):
//   V_arm/O = (selection_arm/O) · (1 - kappa_arm) · (1 - leak_arm)      [kappa=admin cost share, leak=diversion frac]
//   m5 = V_D/O - V_C/O                                                  [total layered gap; ratio of sums]
// The three channels are reported SEPARATELY (no conflation, no double-counting): selection, admin cost, leakage.
import { baseConfig } from './contract.mjs';
import { estimand } from './engine.mjs';
import { safeLog } from './adapter.mjs';

// Compose the delivery/budget layers on top of the E4 selection efficiencies (dOverO=ΣD/ΣO, cOverO=ΣC/ΣO).
// kappa/leak are per-arm constants, so the composition is exact on the ratio-of-sums (no re-simulation needed).
export function layeredEstimand(cfg, opts = {}) {
  const r = estimand(cfg, opts);
  const dO = r.dOverO, cO = r.cOverO;                       // selection efficiency of each arm vs the oracle
  const kC = cfg.kappa_C, kD = cfg.kappa_D, lC = cfg.leak_C, lD = cfg.leak_D;
  const vD = (1 - kD) * (1 - lD) * dO;                       // distributed delivered value / oracle
  const vC = (1 - kC) * (1 - lC) * cO;                       // central delivered value / oracle
  const m_selection = dO - cO;                              // selection-only gap (= E4 m_hat), layers OFF
  const m5 = vD - vC;                                       // total layered gap
  // transparent channel decomposition (each = the gap-change from turning ONLY that channel on; interaction shown):
  const costOnly = ((1 - kD) * dO - (1 - kC) * cO) - m_selection;
  const leakOnly = ((1 - lD) * dO - (1 - lC) * cO) - m_selection;
  const interaction = m5 - m_selection - costOnly - leakOnly;
  return { m5, m_selection, m_admin: costOnly, m_leak: leakOnly, interaction, vD, vC, dOverO: dO, cOverO: cO,
    layersOff: (kC === 0 && kD === 0 && lC === 0 && lD === 0), ci: r.ci, pi_deg: r.pi_deg };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  safeLog('E5 — multi-layer delivered value (m5 = V_D/O − V_C/O, parity at 0). Delivery/budget channels PARAMETRIC.\n');
  const scen = ['PRO_CENTRAL', 'PROBABLE', 'MYOPIA_OFF', 'NO_MYOPIA', 'PRO_DIST'];
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, ...S }) => {
    let allReduce = true;
    for (const name of scen) {
      const cfg = { ...baseConfig(), ...W, ...S[name] };     // layers default OFF via baseConfig (kappa=leak=0)
      const r = layeredEstimand(cfg, { nWorlds: 800 });
      const reduces = Math.abs(r.m5 - r.m_selection) < 1e-12;
      allReduce = allReduce && reduces;
      safeLog(`${name.padEnd(13)} m5 = ${pct(r.m5).padStart(8)}   selection ${pct(r.m_selection)} · admin ${pct(r.m_admin)} · leak ${pct(r.m_leak)}   [layers ${r.layersOff ? 'OFF' : 'ON'}]`);
    }
    safeLog(`\nLayers are OFF by default: the central is granted ZERO admin cost and ZERO leakage, so E5 reduces` +
      ` EXACTLY to the E4 selection result (${allReduce ? 'verified: m5 == selection in every scenario' : 'MISMATCH!'}).`);
    safeLog('The cost+corruption extension turns kappa_C>kappa_D and leak_C>leak_D on, anchored to real budget/');
    safeLog('corruption data (ADMIN-COST-LEG.md, LEAKAGE-CORRUPTION-LEG.md), with an honest floor on Core v0 (leak_D>0).');
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
