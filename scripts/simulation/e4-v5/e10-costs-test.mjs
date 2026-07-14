// E10 cost-layer tests — the switches (planning OFF/ON, costs OFF/ON) and the cost composition.
// Run: npm run e10:costs:test
import { e10, COSTS, validateCosts } from './e10-costs.mjs';
import { delivered2x2 } from './e5-delivery.mjs';
import { fullStack, PLANNING_PRIMARY } from './e9-fullstack.mjs';
import { baseConfig } from './contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE, PRO_DIST } from './scenario-configs.mjs';

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

// 3) PLANNING ON switches the value base to E9 (the full stack) — and uses the RECYCLED primary, not strict
//    (Adversarial R2 verify #2: E10 planning-on previously inherited the strict default silently).
{
  const r = e10(cfg, { nWorlds: NW, costs: { ...COSTS, planningOn: true } });
  const e9primary = fullStack(cfg, { nWorlds: NW, planning: PLANNING_PRIMARY });
  check('planning on switches the value base to E9', r.planningOn === true && r.via.startsWith('E9'));
  check('planning-on value base == E9 RECYCLED primary (statusQuo/coreV0), not strict', approx(r.valueOnly.statusQuo, e9primary.statusQuo, 1e-12) && approx(r.valueOnly.coreV0, e9primary.coreV0, 1e-12), `${r.valueOnly.coreV0} vs ${e9primary.coreV0}`);
}

// 4) SHARED-WORLD NET-BUDGET ESTIMAND (Adversarial R2 #2/#3): the with-cost arm value IS delivered2x2 at budgetScale=1−κ,
//    normalized by the SAME full-budget oracle (same seed ⇒ same retained worlds). Pin that exact identity, and pin that
//    the result STRICTLY exceeds the REJECTED value·(1−κ) haircut (which would give exact equality) — so the test cannot
//    pass the old haircut implementation.
{
  const r = e10(cfg, { nWorlds: NW });
  const full = delivered2x2(cfg, { nWorlds: NW });
  const runC = delivered2x2(cfg, { nWorlds: NW, budgetScale: 1 - r.kappa_C });   // arm C at net budget, over the FULL oracle
  const runD = delivered2x2(cfg, { nWorlds: NW, budgetScale: 1 - r.kappa_D });   // arm D at net budget, over the FULL oracle
  check('central with-cost value == shared-world net-budget cell (S at 1−κ_C, full oracle)', approx(r.withCosts.statusQuo, runC.cells.S, 1e-12), `${r.withCosts.statusQuo} vs ${runC.cells.S}`);
  check('Core v0 with-cost value == shared-world net-budget cell (A2 at 1−κ_D, full oracle)', approx(r.withCosts.coreV0, runD.cells.A2, 1e-12), `${r.withCosts.coreV0} vs ${runD.cells.A2}`);
  // SHARED RETENTION (Adversarial R2 verify #3): the scale=1 / 1−κ_C / 1−κ_D runs must retain the SAME worlds and share
  // the SAME full-budget oracle — a regression that made the oracle/retention depend on the scaled budget would break this.
  check('scaled runs retain the SAME number of worlds as the full-budget run', full.n === runC.n && full.n === runD.n, `full ${full.n} C ${runC.n} D ${runD.n}`);
  check('scaled runs share the SAME full-budget oracle sum (common normalizer)', approx(full.sumO, runC.sumO, 1e-6) && approx(full.sumO, runD.sumO, 1e-6), `full ${full.sumO} C ${runC.sumO} D ${runD.sumO}`);
  check('central net value STRICTLY exceeds the naive value·(1−κ) haircut (sub-proportional, NOT a haircut)', r.withCosts.statusQuo > r.valueOnly.statusQuo * (1 - r.kappa_C) + 1e-4, `${r.withCosts.statusQuo} vs haircut ${r.valueOnly.statusQuo * (1 - r.kappa_C)}`);
  check('Core v0 net value STRICTLY exceeds the naive value·(1−κ) haircut', r.withCosts.coreV0 > r.valueOnly.coreV0 * (1 - r.kappa_D) + 1e-4);
  check('in PROBABLE, costs reduce each arm below its full-budget value', r.withCosts.statusQuo < r.valueOnly.statusQuo && r.withCosts.coreV0 < r.valueOnly.coreV0);
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

// 6) PRO_DIST (Adversarial R2 #3): the signed net-budget estimand must stay finite and coherent in a distributed-
//    favourable world, and "costs reduce each arm" is a PROBABLE-only statement — under a harmful central portfolio,
//    trimming the central's budget need NOT reduce (can raise) its welfare, which the signed estimand handles.
{
  const cfgPD = { ...baseConfig(), ...W, ...PRO_DIST };
  const r = e10(cfgPD, { nWorlds: NW });
  // shared retention holds here too (the estimand is world-consistent in every scenario, not just PROBABLE).
  const fullPD = delivered2x2(cfgPD, { nWorlds: NW });
  const runCPD = delivered2x2(cfgPD, { nWorlds: NW, budgetScale: 1 - r.kappa_C });
  const runDPD = delivered2x2(cfgPD, { nWorlds: NW, budgetScale: 1 - r.kappa_D });
  check('PRO_DIST: signed net-budget estimand is finite and coherent', Number.isFinite(r.valueOnly.gain) && Number.isFinite(r.withCosts.gain) && Number.isFinite(r.adminCostContribution));
  check('PRO_DIST: value-only gain is strongly positive (distributed-favourable world)', r.valueOnly.gain > 0.5, `gain ${r.valueOnly.gain}`);
  check('PRO_DIST: shared retention holds for BOTH arms (same worlds/oracle at scale 1, 1−κ_C, 1−κ_D)', fullPD.n === runCPD.n && fullPD.n === runDPD.n && approx(fullPD.sumO, runCPD.sumO, 1e-6) && approx(fullPD.sumO, runDPD.sumO, 1e-6), `n ${fullPD.n}/${runCPD.n}/${runDPD.n}`);
  check('PRO_DIST: E10 central with-cost value == shared-world net cell (signed, over the full oracle)', approx(r.withCosts.statusQuo, runCPD.cells.S, 1e-12), `${r.withCosts.statusQuo} vs ${runCPD.cells.S}`);
  check('PRO_DIST: E10 Core v0 with-cost value == shared-world net cell (signed, over the full oracle)', approx(r.withCosts.coreV0, runDPD.cells.A2, 1e-12), `${r.withCosts.coreV0} vs ${runDPD.cells.A2}`);
}

// 7) VALIDATION (Adversarial R2 #5): fail-closed on invalid cost configs.
{
  const throwsC = (c) => { try { validateCosts(c); return false; } catch { return true; } };
  check('validateCosts accepts the default', validateCosts(COSTS) === true);
  check('validateCosts rejects negative κ (would ADD budget)', throwsC({ ...COSTS, kappa_C: -0.1 }));
  check('validateCosts rejects κ ≥ 1', throwsC({ ...COSTS, kappa_D: 1.0 }));
  check('validateCosts rejects NaN κ', throwsC({ ...COSTS, kappa_C: NaN }));
  check('validateCosts rejects non-boolean planningOn', throwsC({ ...COSTS, planningOn: 1 }));
  check('e10 validates its cost arg', (() => { try { e10(cfg, { nWorlds: 10, costs: { ...COSTS, kappa_C: -1 } }); return false; } catch { return true; } })());
}

console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
