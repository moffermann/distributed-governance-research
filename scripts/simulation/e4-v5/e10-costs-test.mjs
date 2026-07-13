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

// 4) NET-BUDGET accounting: the value loss from admin cost is SUB-proportional to κ (greedy cuts marginal low-value
//    projects first), so the arm's value at net budget is ABOVE the naive value·(1−κ) haircut.
{
  const r = e10(cfg, { nWorlds: NW });
  check('central net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.statusQuo >= r.valueOnly.statusQuo * (1 - r.kappa_C) - 1e-9, `${r.withCosts.statusQuo} vs ${r.valueOnly.statusQuo * (1 - r.kappa_C)}`);
  check('Core v0 net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.coreV0 >= r.valueOnly.coreV0 * (1 - r.kappa_D) - 1e-9);
  check('costs reduce each arm below its full-budget value', r.withCosts.statusQuo < r.valueOnly.statusQuo && r.withCosts.coreV0 < r.valueOnly.coreV0);
}

// 5) COST DIRECTION under net-budget accounting: the admin-cost effect on the gap is SMALL at the anchored κ and grows
//    (turns clearly positive) only at large κ_C. Monotone in κ_C.
{
  const base  = e10(cfg, { nWorlds: NW });
  const large = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30 } });
  check('admin-cost effect is small at the anchored κ (|·| < 3pp)', Math.abs(base.adminCostContribution) < 0.03, `contrib ${base.adminCostContribution}`);
  check('a much larger κ_C makes the admin-cost effect more positive', large.adminCostContribution > base.adminCostContribution);
  check('the core value advantage survives the cost layer (with-costs gain > 0.4)', base.withCosts.gain > 0.4, `gain ${base.withCosts.gain}`);
}

console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
