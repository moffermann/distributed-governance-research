// E10 cost-layer tests — the switches (planning OFF/ON, costs OFF/ON) and the cost composition.
// Run: npm run e10:costs:test
import { e10, COSTS } from './e10-costs.mjs';
import { delivered2x2 } from './e5-delivery.mjs';
import { baseConfig } from './contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';

let pass = 0, fail = 0;
const approx = (a, b, tol) => Math.abs(a - b) <= tol;
function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }

const cfg = { ...baseConfig(), ...W, ...PROBABLE };
const NW = 800;

// 1) COSTS OFF (κ=0) reduces E10 to the value stack.
{
  const r = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
  check('costs off: with-costs gain == value-only gain', approx(r.withCosts.gain, r.valueOnly.gain, 1e-12), `${r.withCosts.gain} vs ${r.valueOnly.gain}`);
  check('costs off: admin-cost contribution == 0', approx(r.adminCostContribution, 0, 1e-12));
}

// 2) PLANNING OFF (default) uses the E5 value base exactly (status quo = S cell, Core v0 = A2 cell).
{
  const r = e10(cfg, { nWorlds: NW });
  const e5 = delivered2x2(cfg, { nWorlds: NW });
  check('planning off by default (via E5)', r.planningOn === false && r.via.startsWith('E5'));
  check('planning-off value base == E5 S/A2 exactly', approx(r.valueOnly.statusQuo, e5.cells.S, 1e-12) && approx(r.valueOnly.coreV0, e5.cells.A2, 1e-12), `${r.valueOnly.statusQuo} vs ${e5.cells.S}`);
}

// 3) PLANNING ON switches the value base to E9 (the full stack).
{
  const r = e10(cfg, { nWorlds: NW, costs: { ...COSTS, planningOn: true } });
  check('planning on switches the value base to E9', r.planningOn === true && r.via.startsWith('E9'));
}

// 4) The κ haircut is applied per arm exactly: V_arm = valueOnly_arm · (1 − κ_arm).
{
  const r = e10(cfg, { nWorlds: NW });
  check('central value haircut = (1 − κ_C)', approx(r.withCosts.statusQuo, r.valueOnly.statusQuo * (1 - r.kappa_C), 1e-12));
  check('Core v0 value haircut = (1 − κ_D)', approx(r.withCosts.coreV0, r.valueOnly.coreV0 * (1 - r.kappa_D), 1e-12));
}

// 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
//    (an honest subtlety — Core v0 delivers more, so a proportional cost removes more absolute value from its base).
{
  const valueRatio = (() => { const v = e10(cfg, { nWorlds: NW }).valueOnly; return v.coreV0 / v.statusQuo; })();
  const wide = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30, kappa_D: 0.05 } }); // ratio 6 > valueRatio
  const narrow = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.06, kappa_D: 0.05 } }); // ratio ~1.2 < valueRatio
  check('high κ_C/κ_D ratio widens the gap', wide.adminCostContribution > 0, `contrib ${wide.adminCostContribution}`);
  check('low κ_C/κ_D ratio narrows the gap', narrow.adminCostContribution < 0, `contrib ${narrow.adminCostContribution}`);
  check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
}

console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
