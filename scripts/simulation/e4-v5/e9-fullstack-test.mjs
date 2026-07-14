// E9 full-stack tests — invariants for PLANNING × SELECTION × DELIVERY (persistent sectors, Shapley attribution).
// Run: npm run e9:fullstack:test
import { fullStack, validatePlanning, PLANNING } from './e9-fullstack.mjs';
import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
import { baseConfig } from './contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';

let pass = 0, fail = 0;
const approx = (a, b, tol) => Math.abs(a - b) <= tol;
function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }

const cfg = { ...baseConfig(), ...W, ...PROBABLE };
const NW = 700;
// ONE primary planning object (Adversarial R2 #1): recycle residual is the primary reporting/test mode (no utilization
// confound). Strict is used ONLY where it is the point of the test — the nSec=1→E5 structural reduction (block 1) and
// the labelled strict-vs-recycle diagnostic (block 5).
const PRIMARY = { ...PLANNING, residualMode: 'recycle' };

// 1) REDUCES TO E5: one sector ⇒ zero value tilt ⇒ planning is a no-op ⇒ the stack collapses to E5 selection×delivery.
//    STRICT residual on purpose: with a single category there is no cross-category residual, and E5 does no recycling,
//    so strict is the exact structural match (recycle would fund the E5-unfunded knapsack residual and diverge).
{
  const e9 = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, nSec: 1, agendaCapture: 0, residualMode: 'strict' } });
  const e5 = delivered2x2(cfg, { nWorlds: NW });
  check('nSec=1: status-quo cell == E5 S cell', approx(e9.cells.c_c_op, e5.cells.S, 1e-9), `${e9.cells.c_c_op} vs ${e5.cells.S}`);
  check('nSec=1: Core-v0 cell == E5 A2 cell', approx(e9.cells.d_d_ve, e5.cells.A2, 1e-9), `${e9.cells.d_d_ve} vs ${e5.cells.A2}`);
  check('nSec=1: planning Shapley ~ 0 (one sector ⇒ no-op)', approx(e9.attribution.planning, 0, 1e-9), `got ${e9.attribution.planning}`);
}

// 2) SHAPLEY attribution is exact: the three layer values sum to the full-stack gain.
{
  const r = fullStack(cfg, { nWorlds: NW, planning: PRIMARY });
  const sum = r.attribution.planning + r.attribution.selection + r.attribution.delivery;
  check('Shapley attribution sums exactly to the full-stack gain', approx(sum, r.fullStackGain, 1e-9), `sum ${sum} vs gain ${r.fullStackGain}`);
}

// 3) PLANNING is a genuine, honest, CONTEXT-DEPENDENT layer:
//    (a) the realistic association (high-need = low-visibility) gives a larger planning contribution than the
//        anti-realistic one; (b) the conditional simple effect flips sign between central and distributed selection.
{
  const real = fullStack(cfg, { nWorlds: NW, planning: { ...PRIMARY, assoc: -1.0 } });
  const anti = fullStack(cfg, { nWorlds: NW, planning: { ...PRIMARY, assoc: +1.0 } });
  check('planning Shapley is larger under the realistic (assoc<0) association', real.attribution.planning > anti.attribution.planning, `real ${real.attribution.planning} anti ${anti.attribution.planning}`);
  check('realistic association gives a positive planning Shapley', real.attribution.planning > 0, `got ${real.attribution.planning}`);
  check('planning simple effect flips: central-sel > distributed-sel', real.planningUnderCentralSel > real.planningUnderDistributedSel, `${real.planningUnderCentralSel} vs ${real.planningUnderDistributedSel}`);
}

// 3b) AGENDA CAPTURE (second face of power): the central keeping sectors off the menu raises the planning
//     contribution monotonically and removes the sign flip (planning becomes positive under distributed selection).
{
  const soft = fullStack(cfg, { nWorlds: NW, planning: { ...PRIMARY, agendaCapture: 0 } });
  const cap1 = fullStack(cfg, { nWorlds: NW, planning: { ...PRIMARY, agendaCapture: 1 } });
  const cap3 = fullStack(cfg, { nWorlds: NW, planning: { ...PRIMARY, agendaCapture: 3 } });
  check('agenda capture raises the planning Shapley vs soft distortion', cap1.attribution.planning > soft.attribution.planning);
  check('more agenda capture raises planning further', cap3.attribution.planning > cap1.attribution.planning);
  // more capture monotonically raises the planning contribution under distributed selection (it turns positive under
  // heavier capture; at the small ANCHORED default params, modest capture alone does not flip it — an honest result).
  check('more agenda capture raises the distributed-selection planning effect', cap3.planningUnderDistributedSel > soft.planningUnderDistributedSel);
  check('validatePlanning rejects agendaCapture >= nSec', (() => { try { validatePlanning({ ...PLANNING, agendaCapture: 10 }); return false; } catch { return true; } })());
}

// 4) ORDERING (Core v0 beats the status quo). The oracle is a greedy REFERENCE, NOT an upper bound, so cells are NOT
//    required to stay ≤ 100% — that would be a false invariant (this is a scenario regression, not a math invariant).
{
  const r = fullStack(cfg, { nWorlds: NW, planning: PRIMARY });
  check('Core v0 full beats the status quo', r.coreV0 > r.statusQuo);
  check('full-stack gain is materially positive', r.fullStackGain > 0.2, `got ${r.fullStackGain}`);
  check('every reported quantity carries a 95% CI', Array.isArray(r.attributionCI.planning) && Array.isArray(r.planningCI.distributed) && Array.isArray(r.fullStackCI));
}

// 5) RESIDUAL RECYCLING removes the utilization confound: recycle drives utilization to ~100% and does not lower the gain.
{
  const strict = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, residualMode: 'strict' } });
  const recycle = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, residualMode: 'recycle' } });
  check('strict residual leaves some budget unspent (utilization < 100%)', strict.utilization.d_d_ve < 0.999, `util ${strict.utilization.d_d_ve}`);
  check('recycling raises utilization toward ~100%', recycle.utilization.d_d_ve > strict.utilization.d_d_ve + 0.02);
  check('recycling does not lower the full-stack gain', recycle.fullStackGain >= strict.fullStackGain - 1e-6);
}

// 6) VALIDATION: fail-closed on bad planning + reused delivery validation.
{
  const throwsP = (p) => { try { validatePlanning(p); return false; } catch { return true; } };
  check('validatePlanning accepts the default', validatePlanning(PLANNING) === true);
  check('validatePlanning rejects nSec < 1', throwsP({ ...PLANNING, nSec: 0 }));
  check('validatePlanning rejects assoc out of [-1,1]', throwsP({ ...PLANNING, assoc: 2 }));
  check('validatePlanning rejects NaN creditCoef', throwsP({ ...PLANNING, creditCoef: NaN }));
  check('validatePlanning rejects negative secValSpread', throwsP({ ...PLANNING, secValSpread: -0.1 }));
  check('validatePlanning rejects fractional nKeep', throwsP({ ...PLANNING, nKeep: 2.5 }));
  check('validatePlanning rejects nKeep > nSec when excluding', throwsP({ ...PLANNING, hardExclude: 1, nKeep: 99 }));
  check('validatePlanning rejects a bad residualMode', throwsP({ ...PLANNING, residualMode: 'nope' }));
  check('fullStack rejects an invalid delivery config (missing rep)', (() => { try { fullStack(cfg, { nWorlds: 10, delivery: { ...DELIVERY, verified: { p_det: 0.75, a: 0.2, r: 0.5, gamma: 0.1 } } }); return false; } catch { return true; } })());
}

console.log(`\nE9 full stack: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
