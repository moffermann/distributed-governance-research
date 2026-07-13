// E9 full-stack tests — the invariants that keep PLANNING × SELECTION × DELIVERY honest and E5-consistent.
// Run: npm run e9:fullstack:test
import { fullStack, PLANNING } from './e9-fullstack.mjs';
import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
import { baseConfig } from './contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';

let pass = 0, fail = 0;
const approx = (a, b, tol) => Math.abs(a - b) <= tol;
function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }

const cfg = { ...baseConfig(), ...W, ...PROBABLE };
const NW = 800;

// 1) REDUCES TO E5: with a single category, planning is a no-op and the stack collapses to E5's selection×delivery.
{
  const e9 = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, nCat: 1 } });
  const e5 = delivered2x2(cfg, { nWorlds: NW });
  check('nCat=1: status-quo cell == E5 S cell (central sel + opaque)', approx(e9.cells.ccc_op, e5.cells.S, 1e-9), `${e9.cells.ccc_op} vs ${e5.cells.S}`);
  check('nCat=1: Core-v0 cell == E5 A2 cell (distributed sel + verified)', approx(e9.cells.ddd_ve, e5.cells.A2, 1e-9), `${e9.cells.ddd_ve} vs ${e5.cells.A2}`);
  check('nCat=1: planning effect ~ 0 (one category ⇒ planning is a no-op)', approx(e9.planningEffect, 0, 1e-9), `got ${e9.planningEffect}`);
}

// 2) PLANNING is a genuine layer: with several categories, distributed planning beats central (which starves
//    harm-heavy / low-visibility categories); hard exclusion widens the contrast.
{
  const prop = fullStack(cfg, { nWorlds: NW, planning: { nCat: 8, hardExclude: 0, keepFrac: 1.0 } });
  const hard = fullStack(cfg, { nWorlds: NW, planning: { nCat: 8, hardExclude: 1, keepFrac: 0.6 } });
  check('planning effect is positive (distributed planning > central)', prop.planningEffect > 0, `got ${prop.planningEffect}`);
  check('hard exclusion widens the planning contrast', hard.planningEffect > prop.planningEffect, `prop ${prop.planningEffect} hard ${hard.planningEffect}`);
}

// 3) ORDERING + BOUNDS: Core v0 beats the status quo; no cell exceeds the oracle; all three layer effects are positive.
{
  const r = fullStack(cfg, { nWorlds: NW });
  check('Core v0 full beats the status quo', r.coreV0 > r.statusQuo);
  check('full-stack gain is materially positive', r.fullStackGain > 0.2, `got ${r.fullStackGain}`);
  check('no cell exceeds the oracle (all ≤ ~100%)', Object.values(r.cells).every((x) => x <= 1.0 + 1e-6), JSON.stringify(r.cells));
  check('all three layer effects are positive', r.planningEffect > 0 && r.selectionEffect > 0 && r.deliveryEffect > 0);
  check('selection is the dominant layer here (small categories degrade central selection most)', r.selectionEffect > r.planningEffect && r.selectionEffect > r.deliveryEffect);
}

// 4) VALIDATION: the stack reuses E5's fail-closed delivery validation.
{
  const throws = (() => { try { fullStack(cfg, { nWorlds: 10, delivery: { ...DELIVERY, verified: { p_det: 0.75, a: 0.2, r: 0.5, gamma: 0.1 } } }); return false; } catch { return true; } })();
  check('full stack rejects an invalid delivery config (missing rep)', throws);
}

console.log(`\nE9 full stack: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
