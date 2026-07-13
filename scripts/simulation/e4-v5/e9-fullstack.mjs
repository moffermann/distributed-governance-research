// E9 — the FULL STACK: PLANNING × SELECTION × DELIVERY. Built ON E5 (reuses its delivery machinery) + the E4 engine.
// E4 = selection only; E5 = selection × delivery; E9 adds the third Core-v0 layer, PLANNING (constructing the
// eligibility frame / per-category budget shares) BEFORE selection, so all three layers are compared central-vs-Core-v0.
//
// Planning constructs per-CATEGORY budget shares from a planner's PERCEIVED category value; selection funds projects
// within each category's share (E4 fundedSet); delivery applies the E5 regime (deliveredCell). Everything is normalized
// by the oracle (perfect planning + perfect selection + perfect delivery). No compound multiplier; percentages only.
//
//   Planning regime:   central (perceives category value through harm-myopia + projection + credit → can STARVE whole
//                       harm-heavy / low-visibility categories) | distributed (aggregated coverage category signal)
//   Selection & delivery regimes: exactly as E5.
//
// Categories are VISIBILITY strata (projects binned by P): categories then differ systematically in the dimension the
// central planner mis-sees, so central planning can destroy value across whole categories — the honest full contrast
// the ≈1.05× "macro layer" never measured (it compared planning options within a shared frame). 2×2×2 = 8 cells; the
// headline is the diagonal: all-central (status quo) vs all-distributed (Core v0 full). nCat=1 reduces EXACTLY to E5.
//
// Run: npm run e9:fullstack

import { generateWorld, makeRng, fundedSet } from './engine.mjs';
import { DELIVERY, deliveredCell, validateDelivery } from './e5-delivery.mjs';
import { baseConfig, NUM } from './contract.mjs';
import { safeLog } from './adapter.mjs';

export const PLANNING = {
  nCat: 8,            // number of categories (sectors)
  hardExclude: 0,     // 0 = proportional-to-perceived shares; 1 = fund only the top categories (hard exclusion — the
                      //     second face of power, Bachrach–Baratz: keeping something off the menu)
  keepFrac: 0.6,      // with hardExclude, the fraction of categories that receive any budget
};

// Bin projects into nCat VISIBILITY strata (by P). nCat<=1 keeps ORIGINAL order (so E9 reduces to E5 exactly).
function categorize(projects, nCat) {
  if (nCat <= 1) return [projects.map((_, j) => j)];
  const order = projects.map((p, j) => ({ j, P: p.P })).sort((a, b) => a.P - b.P);
  const cats = Array.from({ length: nCat }, () => []);
  for (let t = 0; t < order.length; t++) cats[Math.min(nCat - 1, Math.floor(t * nCat / order.length))].push(order[t].j);
  return cats.filter((c) => c.length > 0);
}

function catValue(projects, catIdx, key) { let v = 0; for (const j of catIdx) v += projects[j][key]; return v; }

// Per-category budget shares from a planner's perceived category value (negative-perceived categories get 0 share).
function categoryShares(projects, cats, key, plan) {
  const raw = cats.map((c) => Math.max(0, catValue(projects, c, key)));
  let shares = raw;
  if (plan.hardExclude) {
    const ranked = raw.map((v, i) => ({ i, v })).sort((a, b) => b.v - a.v);
    const keep = Math.max(1, Math.round(plan.keepFrac * cats.length));
    const keptSet = new Set(ranked.slice(0, keep).map((x) => x.i));
    shares = raw.map((v, i) => (keptSet.has(i) ? v : 0));
  }
  const tot = shares.reduce((a, b) => a + b, 0);
  return tot > 0 ? shares.map((x) => x / tot) : cats.map(() => 1 / cats.length);
}

// Deliver a single category: select within its budget by `selKey`, deliver under `reg`. Returns delivered value (v).
function deliverCategory(projects, catIdx, selKey, cfg, catBudget, exec, reg, del, mDet, mRec, selOpts) {
  if (catIdx.length === 0 || !(catBudget > 0)) return 0;
  const sub = catIdx.map((j) => projects[j]);
  const subExec = { honest: catIdx.map((j) => exec.honest[j]), tempt: catIdx.map((j) => exec.tempt[j]) };
  const funded = fundedSet(sub, selKey, cfg, catBudget, selOpts);
  return deliveredCell(sub, funded, reg, subExec, del, mDet, mRec, cfg).v;
}

// One world: draw executors (separate stream), categorize, then evaluate the oracle and the 8 planning×selection×delivery cells.
function runWorldStack(cfg, rng, execRng, del, plan) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return null;
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const budget = cfg.phi * totalCost;

  const honest = new Array(projects.length), tempt = new Array(projects.length);
  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
  const exec = { honest, tempt };

  const cats = categorize(projects, plan.nCat);
  const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;
  const shC = categoryShares(projects, cats, 'M_C', plan);   // central planning (harm-myopic, projecting)
  const shD = categoryShares(projects, cats, 'M_D', plan);   // distributed planning (coverage)

  // Oracle = the GLOBAL full-information benchmark (perfect knowledge ignores category boundaries and funds the best
  // projects globally at perfect delivery) — the same reference as E4/E5, so every category-constrained cell is ≤ O and
  // E9 reduces to E5 at nCat=1.
  let O = 0; for (const j of fundedSet(projects, 'S', cfg, budget)) O += projects[j].S;

  // a stack cell = (planning shares, selection key + credit tilt for central, delivery regime + coverage lift for distributed)
  const cell = (planShares, selKey, selOpts, reg, useCoverage) => {
    let v = 0;
    for (let c = 0; c < cats.length; c++) v += deliverCategory(projects, cats[c], selKey, cfg, planShares[c] * budget, exec, reg,
      del, useCoverage ? mD : 0, useCoverage ? mR : 0, selOpts);
    return v;
  };
  const CT = { creditTilt: true };
  return {
    O,
    // 8 cells: [planning][selection][delivery]. c=central, d=distributed; op=opaque, ve=verified.
    ccc_op: cell(shC, 'M_C', CT, del.opaque,   false),  // all-central, opaque  (status quo)
    ccc_ve: cell(shC, 'M_C', CT, del.verified, false),
    ddd_op: cell(shD, 'M_D', {}, del.opaque,   true),
    ddd_ve: cell(shD, 'M_D', {}, del.verified, true),   // all-distributed, verified (Core v0 full)
    // mixed cells needed for the three main effects (vary ONE layer from the all-central status quo):
    dcc_ve: cell(shD, 'M_C', CT, del.verified, false),  // distributed PLANNING only (else central sel+ver delivery)
    cdc_ve: cell(shC, 'M_D', {}, del.verified, true),   // distributed SELECTION only
    // NOTE: delivery main effect is ccc_op→ccc_ve (central plan+sel, opaque→verified).
  };
}

export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING } = {}) {
  validateDelivery(delivery);
  const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);
  const acc = { O: 0, ccc_op: 0, ccc_ve: 0, ddd_op: 0, ddd_ve: 0, dcc_ve: 0, cdc_ve: 0 };
  const W = [];
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorldStack(cfg, rng, execRng, delivery, planning);
    if (!r || !(r.O > 0)) continue;
    for (const k of Object.keys(acc)) acc[k] += r[k];
    W.push(r);
  }
  const O = acc.O, eff = (x) => x / O;
  const statusQuo = eff(acc.ccc_op), coreV0 = eff(acc.ddd_ve);
  // three layer main effects from the status quo (each varies ONE layer, holding the others at their status-quo/verified ref):
  const planningEffect  = eff(acc.dcc_ve - acc.ccc_ve);   // distributed − central PLANNING (central sel, verified delivery)
  const selectionEffect = eff(acc.cdc_ve - acc.ccc_ve);   // distributed − central SELECTION (central plan, verified delivery)
  const deliveryEffect  = eff(acc.ccc_ve - acc.ccc_op);   // verified − opaque DELIVERY (central plan+sel)
  // world-cluster bootstrap CI on the full diagonal (Core v0 − status quo).
  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0), boots = [];
  if (W.length) for (let b = 0; b < B; b++) { let n = 0, d = 0; for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; n += (ww.ddd_ve - ww.ccc_op); d += ww.O; } if (d > 0) boots.push(n / d); }
  boots.sort((a, b) => a - b);
  const q = (p) => boots.length ? boots[Math.max(0, Math.min(boots.length - 1, Math.floor(p * boots.length)))] : NaN;
  return {
    n: W.length,
    statusQuo, coreV0,
    fullStackGain: coreV0 - statusQuo,
    fullStackCI: [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)],
    planningEffect, selectionEffect, deliveryEffect,
    cells: { ccc_op: eff(acc.ccc_op), ccc_ve: eff(acc.ccc_ve), ddd_op: eff(acc.ddd_op), ddd_ve: eff(acc.ddd_ve) },
  };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...baseConfig(), ...W, ...PROBABLE };
    const r = fullStack(cfg, { nWorlds: 1000 });
    safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle');
    safeLog('(perfect planning + selection + delivery). No compound multiplier; layers reported separately.\n');
    safeLog(`worlds kept: ${r.n}   (categories = ${PLANNING.nCat} visibility strata, proportional shares)`);
    safeLog(`STATUS QUO (all-central: central planning + selection + opaque delivery):     ${pct(r.statusQuo)} of oracle`);
    safeLog(`CORE v0 FULL (all-distributed: distributed planning + selection + verified):   ${pct(r.coreV0)} of oracle`);
    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI [${pct(r.fullStackCI[0])}, ${pct(r.fullStackCI[1])}]\n`);
    safeLog('Layer main effects (percentage points of the oracle), each varying ONE layer:');
    safeLog(`  PLANNING effect (distributed − central planning):   ${pct(r.planningEffect)}`);
    safeLog(`  SELECTION effect (distributed − central selection): ${pct(r.selectionEffect)}`);
    safeLog(`  DELIVERY effect (verified − opaque delivery):       ${pct(r.deliveryEffect)}`);
    safeLog(`  → the planning layer is a genuine value contrast (central planning starves harm-heavy/low-visibility`);
    safeLog(`    categories), not the near-parity value the retired macro factor mis-measured.\n`);

    // Hard-exclusion variant: the central planner keeps whole categories OFF the menu (the second face of power,
    // Bachrach–Baratz) — the sharpest planning contrast.
    const rh = fullStack(cfg, { nWorlds: 1000, planning: { nCat: 8, hardExclude: 1, keepFrac: 0.6 } });
    safeLog(`Hard-exclusion planning (central funds only its top 60% of categories, starving the rest):`);
    safeLog(`  PLANNING effect rises to ${pct(rh.planningEffect)}; full-stack gain ${pct(rh.fullStackGain)} 95% CI [${pct(rh.fullStackCI[0])}, ${pct(rh.fullStackCI[1])}].`);
    safeLog(`  → keeping harm-heavy / low-visibility categories off the menu is where central planning destroys the most value.`);
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
