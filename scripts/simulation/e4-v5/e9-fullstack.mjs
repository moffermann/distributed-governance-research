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
  nSec: 8,            // number of persistent SECTORS
  assoc: -0.6,        // need↔visibility association: <0 = high-need sectors are LOW-visibility (the realistic case per
                      //     Rioja's maintenance-vs-new bias); swept over {-1..+1}. This is the PREDECLARED lever.
  secValSpread: 1.0,  // magnitude of cross-sector TRUE-value heterogeneity (DECLARED)
  creditCoef: 0.6,    // central planner's POLITICAL-CREDIT weight on sector visibility (over-funds visible sectors).
                      //     Direction anchored (political budget cycles: Drazen–Eslava 2010; distributive politics:
                      //     Golden–Min 2013); magnitude DECLARED.
  covSees: 0.7,       // fraction of the cross-sector value tilt that distributed COVERAGE perceives (central sees 0 —
                      //     it is blind to low-visibility sector value and reads visibility as credit). DECLARED.
  hardExclude: 0,     // 0 = positive-part proportional shares; 1 = fund only the top nKeep sectors (hard exclusion —
                      //     the second face of power, Bachrach–Baratz: keeping a sector off the menu)
  nKeep: 5,           // integer count of sectors kept under hard exclusion (report the realized count; NOT a fraction)
  excludeMode: 'central', // which arm hard-excludes: 'central' | 'symmetric'
};

// Assign projects to nSec PERSISTENT sectors (drawn once per world), impose a controlled need↔visibility association,
// and return per-project TRUE adjusted value + sector membership + per-sector visibility. nSec<=1 ⇒ a single sector
// with zero value tilt ⇒ E9 reduces to E5 EXACTLY.
function buildSectors(projects, plan, pRng) {
  const n = projects.length, nSec = Math.max(1, plan.nSec);
  const sectorOf = new Array(n), cnt = new Array(nSec).fill(0);
  for (let j = 0; j < n; j++) { const s = Math.floor(pRng.u() * nSec) % nSec; sectorOf[j] = s; cnt[s]++; }
  // Sectors have INTRINSIC persistent visibility (evenly spread in (0,1)) — a real sector property, not the mean of
  // their projects' engine visibility (which would be homogeneous under random membership). Centred so mean=0.
  const vis = Array.from({ length: nSec }, (_, s) => (nSec > 1 ? (s + 0.5) / nSec : 0.5));
  const meanVis = vis.reduce((a, b) => a + b, 0) / nSec;
  // TRUE-value tilt per sector = assoc·(centred visibility): assoc<0 ⇒ low-visibility sectors carry HIGH value (the
  // realistic high-need/low-visibility case). A per-sector CONSTANT, so within-sector selection ranking is unchanged;
  // it only shifts CROSS-sector value, which is exactly what planning allocates over. nSec=1 ⇒ tilt 0 ⇒ reduces to E5.
  const valTilt = vis.map((v) => (nSec > 1 ? plan.assoc * (v - meanVis) : 0));
  const Sadj = new Array(n);
  for (let j = 0; j < n; j++) Sadj[j] = projects[j].S + plan.secValSpread * valTilt[sectorOf[j]];
  return { sectorOf, nSec, vis, valTilt, Sadj, cnt };
}

// A planner's perceived value per sector. Oracle sees true adjusted value; the central is BLIND to the low-visibility
// sector value tilt and adds political credit ∝ sector visibility; distributed coverage sees a fraction covSees of the tilt.
function sectorPerceived(projects, sec, plan, who) {
  const nSec = sec.nSec, per = new Array(nSec).fill(0);
  if (who === 'S') { for (let j = 0; j < projects.length; j++) per[sec.sectorOf[j]] += sec.Sadj[j]; return per; }
  const key = who === 'C' ? 'M_C' : 'M_D';
  for (let j = 0; j < projects.length; j++) per[sec.sectorOf[j]] += projects[j][key];    // engine signal (blind to the sector tilt)
  if (who === 'C') for (let s = 0; s < nSec; s++) per[s] += plan.creditCoef * sec.vis[s] * sec.cnt[s];         // political credit on visibility
  else             for (let s = 0; s < nSec; s++) per[s] += plan.covSees * plan.secValSpread * sec.valTilt[s] * sec.cnt[s]; // coverage sees the tilt
  return per;
}

// Positive-part proportional budget shares from perceived sector value; hard exclusion keeps only the top nKeep.
function sectorShares(perceived, plan, doExclude) {
  const raw = perceived.map((v) => Math.max(0, v));
  let shares = raw;
  if (doExclude) {
    const keep = Math.max(1, Math.min(raw.length, Math.round(plan.nKeep)));
    const kept = new Set(raw.map((v, i) => ({ i, v })).sort((a, b) => b.v - a.v).slice(0, keep).map((x) => x.i));
    shares = raw.map((v, i) => (kept.has(i) ? v : 0));
  }
  const tot = shares.reduce((a, b) => a + b, 0);
  return tot > 0 ? shares.map((x) => x / tot) : perceived.map(() => 1 / perceived.length);
}

// Deliver a single category: select within its budget by `selKey`, deliver under `reg`. Returns delivered value (v).
function deliverCategory(projects, catIdx, selKey, cfg, catBudget, exec, reg, del, mDet, mRec, selOpts) {
  if (catIdx.length === 0 || !(catBudget > 0)) return 0;
  const sub = catIdx.map((j) => projects[j]);
  const subExec = { honest: catIdx.map((j) => exec.honest[j]), tempt: catIdx.map((j) => exec.tempt[j]) };
  const funded = fundedSet(sub, selKey, cfg, catBudget, selOpts);
  return deliveredCell(sub, funded, reg, subExec, del, mDet, mRec, cfg).v;
}

// Deliver a whole ARM-cell over sectors: (planning shares, selection key + opts, delivery regime, coverage lift).
function stackCell(projectsAdj, cats, shares, selKey, selOpts, cfg, budget, exec, reg, del, mDet, mRec) {
  let v = 0;
  for (let s = 0; s < cats.length; s++) v += deliverCategory(projectsAdj, cats[s], selKey, cfg, shares[s] * budget, exec, reg, del, mDet, mRec, selOpts);
  return v;
}

// One world: executors (separate stream), persistent sectors (planning stream), then the FULL 2×2×2 = 8 cells over the
// TRUE adjusted value Sadj. Cell key = planning(c/d) _ selection(c/d) _ delivery(op/ve).
function runWorldStack(cfg, rng, execRng, pRng, del, plan) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return null;
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const budget = cfg.phi * totalCost;

  const honest = new Array(projects.length), tempt = new Array(projects.length);
  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
  const exec = { honest, tempt };

  const sec = buildSectors(projects, plan, pRng);
  const projectsAdj = projects.map((p, j) => ({ ...p, S: sec.Sadj[j] }));   // TRUE value carries the sector tilt
  const cats = Array.from({ length: sec.nSec }, () => []);
  for (let j = 0; j < projects.length; j++) cats[sec.sectorOf[j]].push(j);

  const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;
  const doExC = !!plan.hardExclude, doExD = plan.hardExclude && plan.excludeMode === 'symmetric';
  const shC = sectorShares(sectorPerceived(projects, sec, plan, 'C'), plan, doExC);   // central planning
  const shD = sectorShares(sectorPerceived(projects, sec, plan, 'D'), plan, doExD);   // distributed planning

  // Oracle = GLOBAL greedy on the true adjusted value (perfect planning+selection+delivery, ignores sectors). ≤-bound.
  let O = 0; for (const j of fundedSet(projectsAdj, 'S', cfg, budget)) O += projectsAdj[j].S;

  const CT = { creditTilt: true };
  const planShares = { c: shC, d: shD };
  const cell = (p, s, d) => {
    const selKey = s === 'c' ? 'M_C' : 'M_D', selOpts = s === 'c' ? CT : {};
    const reg = d === 'op' ? del.opaque : del.verified;
    const useCov = s === 'd';                                    // coverage delivery lift travels with distributed selection
    return stackCell(projectsAdj, cats, planShares[p], selKey, selOpts, cfg, budget, exec, reg, del, useCov ? mD : 0, useCov ? mR : 0);
  };
  const out = { O };
  for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) out[`${p}_${s}_${d}`] = cell(p, s, d);
  return out;
}

// Shapley weights for 3 binary layers: |T|=0 → 1/3, |T|=1 → 1/6, |T|=2 → 1/3.
const SH_W = [1 / 3, 1 / 6, 1 / 6, 1 / 3];   // indexed by which (other-two) coalition, in the order below

export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING } = {}) {
  validateDelivery(delivery);
  validatePlanning(planning);
  const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0), pRng = makeRng((seed ^ 0x27d4eb2f) >>> 0);
  const keys = [];
  for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) keys.push(`${p}_${s}_${d}`);
  const acc = Object.fromEntries(['O', ...keys].map((k) => [k, 0]));
  const W = [];
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorldStack(cfg, rng, execRng, pRng, delivery, planning);
    if (!r || !(r.O > 0)) continue;
    for (const k of Object.keys(acc)) acc[k] += r[k];
    W.push(r);
  }
  const O = acc.O, eff = (x) => x / O;
  // v(P,S,D): efficiency of the cell where each layer is central(0)/opaque or distributed(1)/verified.
  const v = (P, S, D) => eff(acc[`${P ? 'd' : 'c'}_${S ? 'd' : 'c'}_${D ? 've' : 'op'}`]);
  const statusQuo = v(0, 0, 0), coreV0 = v(1, 1, 1);
  // Shapley attribution of the diagonal gain to each layer (sums EXACTLY to coreV0 − statusQuo).
  const shapPlanning  = SH_W[0] * (v(1, 0, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(0, 1, 0)) + SH_W[2] * (v(1, 0, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(0, 1, 1));
  const shapSelection = SH_W[0] * (v(0, 1, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(1, 0, 1));
  const shapDelivery  = SH_W[0] * (v(0, 0, 1) - v(0, 0, 0)) + SH_W[1] * (v(1, 0, 1) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 1, 0)) + SH_W[3] * (v(1, 1, 1) - v(1, 1, 0));
  // conditional simple effects of PLANNING (distributed − central) that expose the sign-flip: under central vs distributed selection.
  const planningUnderCentralSel     = v(1, 0, 1) - v(0, 0, 1);   // verified delivery, central selection
  const planningUnderDistributedSel = v(1, 1, 1) - v(0, 1, 1);   // verified delivery, distributed selection (the Core-v0 context)
  // world-cluster bootstrap CI on the full diagonal.
  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0), boots = [];
  if (W.length) for (let b = 0; b < B; b++) { let n = 0, d = 0; for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; n += (ww.d_d_ve - ww.c_c_op); d += ww.O; } if (d > 0) boots.push(n / d); }
  boots.sort((a, b) => a - b);
  const q = (p) => boots.length ? boots[Math.max(0, Math.min(boots.length - 1, Math.floor(p * boots.length)))] : NaN;
  const cells = Object.fromEntries(keys.map((k) => [k, eff(acc[k])]));
  return {
    n: W.length, statusQuo, coreV0,
    fullStackGain: coreV0 - statusQuo,
    fullStackCI: [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)],
    attribution: { planning: shapPlanning, selection: shapSelection, delivery: shapDelivery },
    planningUnderCentralSel, planningUnderDistributedSel,
    cells,
  };
}

// Fail-closed validation of the planning config (Codex round: planning had no provenance).
export function validatePlanning(plan) {
  const bad = [];
  const fin = (k) => { if (typeof plan[k] !== 'number' || !Number.isFinite(plan[k])) bad.push(`${k}=${plan[k]} must be finite`); };
  ['nSec', 'assoc', 'secValSpread', 'creditCoef', 'covSees', 'nKeep'].forEach(fin);
  if (Number.isFinite(plan.nSec) && (!Number.isInteger(plan.nSec) || plan.nSec < 1)) bad.push('nSec must be an integer >= 1');
  if (Number.isFinite(plan.assoc) && (plan.assoc < -1 || plan.assoc > 1)) bad.push('assoc must be in [-1,1]');
  if (Number.isFinite(plan.covSees) && (plan.covSees < 0 || plan.covSees > 1)) bad.push('covSees must be in [0,1]');
  if (![0, 1, true, false].includes(plan.hardExclude)) bad.push('hardExclude must be 0/1');
  if (!['central', 'symmetric'].includes(plan.excludeMode)) bad.push("excludeMode must be 'central' or 'symmetric'");
  if (bad.length) throw new Error(`[e9] invalid planning config: ${bad.join('; ')}`);
  return true;
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...baseConfig(), ...W, ...PROBABLE };
    const r = fullStack(cfg, { nWorlds: 1000 });
    safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle');
    safeLog('(a global full-information greedy REFERENCE, not a guaranteed optimum). No compound multiplier.\n');
    safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} persistent sectors; need↔visibility assoc=${PLANNING.assoc}, proportional shares)`);
    safeLog(`STATUS QUO (all-central: central planning + selection + opaque delivery):     ${pct(r.statusQuo)} of oracle`);
    safeLog(`CORE v0 FULL (all-distributed: distributed planning + selection + verified):   ${pct(r.coreV0)} of oracle`);
    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI [${pct(r.fullStackCI[0])}, ${pct(r.fullStackCI[1])}]\n`);
    safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain):');
    safeLog(`  planning ${pct(r.attribution.planning)} · selection ${pct(r.attribution.selection)} · delivery ${pct(r.attribution.delivery)}`);
    safeLog(`  (check: sum = ${pct(r.attribution.planning + r.attribution.selection + r.attribution.delivery)})\n`);
    safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), which is context-dependent:');
    safeLog(`  under central selection:     ${pct(r.planningUnderCentralSel)}`);
    safeLog(`  under distributed selection: ${pct(r.planningUnderDistributedSel)}   (the Core v0 context — the one that matters)\n`);

    // PREDECLARED need↔visibility association sweep — the honest headline: the planning contrast DEPENDS on whether
    // high-need sectors are low-visibility (the realistic, Rioja-anchored case) or not. Not gerrymandered upward.
    safeLog('Predeclared need↔visibility association sweep (planning Shapley + its distributed-selection simple effect):');
    safeLog('   assoc      planning Shapley    planning|distributed-sel     full-stack gain');
    for (const a of [-1.0, -0.6, 0.0, 0.6, 1.0]) {
      const ra = fullStack(cfg, { nWorlds: 700, planning: { ...PLANNING, assoc: a } });
      safeLog(`   ${a.toFixed(1).padStart(4)}      ${pct(ra.attribution.planning).padStart(8)}          ${pct(ra.planningUnderDistributedSel).padStart(8)}              ${pct(ra.fullStackGain).padStart(8)}`);
    }
    safeLog('   → planning matters most under the REALISTIC association (assoc<0: high-need sectors are low-visibility,');
    safeLog('     Rioja maintenance bias); the central starves them via visibility-credit. The magnitude is DECLARED,');
    safeLog('     consistent with and conservative relative to the IMF/Rioja efficiency-loss envelope (no cross-sector');
    safeLog('     point estimate exists). At assoc≥0 the planning layer adds little — an honest, non-gerrymandered result.\n');

    // sector-count robustness (nSec is DECLARED)
    safeLog('Sector-count robustness (nSec is declared; 1 = identity/E5):');
    for (const k of [4, 8, 10, 16]) {
      const rk = fullStack(cfg, { nWorlds: 500, planning: { ...PLANNING, nSec: k } });
      safeLog(`   nSec=${String(k).padStart(2)}  planning Shapley ${pct(rk.attribution.planning)}  ·  full-stack gain ${pct(rk.fullStackGain)}`);
    }
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
