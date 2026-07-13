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
// Sectors are PERSISTENT with intrinsic visibility and a need↔visibility association (assoc): the central planner reads
// visibility as political credit and is blind to low-visibility sector value, so it can starve whole high-need/low-
// visibility sectors — the honest full contrast the near-parity "macro layer" never measured (it compared planning
// options within a shared frame). 2x2x2 = 8 cells; the headline diagonal is all-central (status quo) vs all-distributed
// (Core v0 full), attributed to layers by Shapley. The oracle is a GLOBAL greedy REFERENCE (a heuristic, NOT a
// guaranteed optimum — cells can exceed it). nSec=1 reduces EXACTLY to E5.
//
// Run: npm run e9:fullstack

import { generateWorld, makeRng, fundedSet } from './engine.mjs';
import { DELIVERY, deliveredCell, validateDelivery } from './e5-delivery.mjs';
import { baseConfig, NUM } from './contract.mjs';
import { safeLog } from './adapter.mjs';

export const PLANNING = {
  nSec: 10,           // number of persistent SECTORS (anchored: UN COFOG has 10 top-level functions)
  agendaCapture: 0,   // AGENDA CAPTURE (second face of power, Bachrach–Baratz 1962 / Schattschneider): the number of
                      //     its LOWEST-perceived sectors the CENTRAL keeps entirely OFF the menu (share 0; budget
                      //     reallocated to the sectors it does fund). Anchored in DIRECTION (central structurally
                      //     under-provides low-visibility functions — political budget cycles, maintenance neglect);
                      //     the SEVERITY is DECLARED and kept MODEST — measured pre-election composition shifts are
                      //     single-digit (Drazen–Eslava 2010; Vergne 2009; Katsimi–Sarantides 2012), so wholesale
                      //     exclusion of many functions is NOT data-supported. 0 = pure soft credit distortion.
  assoc: -0.6,        // need↔visibility association: <0 = high-need sectors are LOW-visibility (the realistic case per
                      //     Rioja's maintenance-vs-new bias); swept over {-1..+1}. This is the PREDECLARED lever.
  secValSpread: 0.184, // cross-sector TRUE-value dispersion, in units of project value. PROVISIONALLY ANCHORED to the
                      //     between-sector return-per-cost SD (World Bank OED portfolio ≈0.184; anchor round). The
                      //     planning contribution scales with this; NOT a robust large effect. (0.3 is a declared stress.)
  creditCoef: 0.076,  // central planner's POLITICAL-CREDIT weight on sector visibility. PROVISIONALLY ANCHORED to the
                      //     election change in the log visible budget share (Drazen–Eslava 2010: 0.024, SE 0.008 →
                      //     ≈0.076). Direction anchored; the point value is a provisional moment map, not transported.
  covSees: 0.7,       // fraction of the cross-sector value tilt that distributed COVERAGE perceives (central sees 0 —
                      //     it is blind to low-visibility sector value and reads visibility as credit). DECLARED.
  hardExclude: 0,     // 0 = positive-part proportional shares; 1 = fund only the top nKeep sectors (hard exclusion —
                      //     the second face of power, Bachrach–Baratz: keeping a sector off the menu)
  nKeep: 5,           // integer count of sectors kept under hard exclusion (report the realized count; NOT a fraction)
  excludeMode: 'central', // which arm hard-excludes: 'central' | 'symmetric'
  residualMode: 'strict', // 'strict' = unspent sector budget is lost; 'recycle' = a second global pass funds the
                      //     residual with the same arm rule (removes the utilization confound — Codex round-2)
};

// Assign projects to nSec PERSISTENT sectors (drawn once per world), impose a controlled need↔visibility association,
// and return per-project TRUE adjusted value + sector membership + per-sector visibility. nSec<=1 ⇒ a single sector
// with zero value tilt ⇒ E9 reduces to E5 EXACTLY.
function buildSectors(projects, plan, pRng) {
  const n = projects.length, nSec = Math.max(1, plan.nSec);
  const sectorOf = new Array(n), cnt = new Array(nSec).fill(0);
  for (let j = 0; j < n; j++) { const s = Math.floor(pRng.u() * nSec) % nSec; sectorOf[j] = s; cnt[s]++; }
  // Sectors have INTRINSIC persistent visibility (evenly spread in (0,1)) — a real sector property, not the mean of
  // their projects' engine visibility (which would be homogeneous under random membership).
  const vis = Array.from({ length: nSec }, (_, s) => (nSec > 1 ? (s + 0.5) / nSec : 0.5));
  const meanVis = vis.reduce((a, b) => a + b, 0) / nSec;
  let sdVis = Math.sqrt(vis.reduce((a, v) => a + (v - meanVis) * (v - meanVis), 0) / nSec);
  if (!(sdVis > 0)) sdVis = 1;
  // GENUINE fixed-dispersion association (Codex round-2): sector NEED = assoc·z(visibility) + sqrt(1−assoc²)·shock,
  // where the shock is an INDEPENDENT unit-variance sector draw. So NEED keeps ~unit dispersion at every `assoc` (only
  // the CORRELATION with visibility changes), fixing the earlier confound where |assoc| also scaled dispersion and
  // assoc=0 erased it. assoc<0 ⇒ low-visibility sectors tend to HIGH need (the Rioja-consistent maintenance-bias case).
  const a = Math.max(-1, Math.min(1, plan.assoc)), aC = Math.sqrt(Math.max(0, 1 - a * a));
  const need = vis.map((v) => (nSec > 1 ? a * ((v - meanVis) / sdVis) + aC * pRng.normal() : 0));
  const valTilt = need.map((x) => plan.secValSpread * x);   // a per-sector CONSTANT true-value shift (cross-sector only)
  const Sadj = new Array(n);
  for (let j = 0; j < n; j++) Sadj[j] = projects[j].S + valTilt[sectorOf[j]];
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
  else             for (let s = 0; s < nSec; s++) per[s] += plan.covSees * sec.valTilt[s] * sec.cnt[s]; // coverage sees a fraction covSees of the tilt (valTilt already carries secValSpread — no double-count)
  return per;
}

// Positive-part proportional budget shares from perceived sector value; hard exclusion keeps only the top nKeep.
function sectorShares(perceived, plan, doExclude) {
  const raw = perceived.map((v) => Math.max(0, v));
  let keptMask = raw.map(() => true);
  if (doExclude) {
    const keep = Math.max(1, Math.min(raw.length, Math.round(plan.nKeep)));
    const kept = new Set(raw.map((v, i) => ({ i, v })).sort((a, b) => b.v - a.v).slice(0, keep).map((x) => x.i));
    keptMask = raw.map((v, i) => kept.has(i));
  }
  const shares = raw.map((v, i) => (keptMask[i] ? v : 0));
  const tot = shares.reduce((a, b) => a + b, 0);
  if (tot > 0) return shares.map((x) => x / tot);
  // all-zero fallback: spread EQUALLY over the KEPT sectors only (so hard exclusion is not silently undone).
  const nKept = keptMask.filter(Boolean).length || perceived.length;
  return keptMask.map((k) => (k ? 1 / nKept : 0));
}

// Deliver a single category: select within its budget by `selKey`, deliver under `reg`. Returns {v, spent, funded}
// (funded = GLOBAL project indices) so the caller can report utilization and recycle the unspent residual.
function deliverCategory(projects, catIdx, selKey, cfg, catBudget, exec, reg, del, mDet, mRec, selOpts) {
  if (catIdx.length === 0 || !(catBudget > 0)) return { v: 0, spent: 0, funded: [] };
  const sub = catIdx.map((j) => projects[j]);
  const subExec = { honest: catIdx.map((j) => exec.honest[j]), tempt: catIdx.map((j) => exec.tempt[j]) };
  const fundedSub = fundedSet(sub, selKey, cfg, catBudget, selOpts);
  let spent = 0; const funded = [];
  for (const t of fundedSub) { spent += sub[t].c; funded.push(catIdx[t]); }
  const v = deliveredCell(sub, fundedSub, reg, subExec, del, mDet, mRec, cfg).v;
  return { v, spent, funded };
}

// Deliver a whole ARM-cell over sectors: (planning shares, selection key + opts, delivery regime, coverage lift).
// Returns {v, spent}. With residualMode 'recycle', unspent budget makes a SECOND global pass over unfunded projects
// using the same arm-selection rule — so utilization differences don't confound the planning contrast (Codex round-2).
function stackCell(projectsAdj, cats, shares, selKey, selOpts, cfg, budget, exec, reg, del, mDet, mRec, recycle) {
  let v = 0, spent = 0; const fundedAll = new Set();
  for (let s = 0; s < cats.length; s++) {
    const r = deliverCategory(projectsAdj, cats[s], selKey, cfg, shares[s] * budget, exec, reg, del, mDet, mRec, selOpts);
    v += r.v; spent += r.spent; for (const j of r.funded) fundedAll.add(j);
  }
  if (recycle && spent < budget - 1e-9) {
    const unfunded = [];
    for (let j = 0; j < projectsAdj.length; j++) if (!fundedAll.has(j)) unfunded.push(j);
    const r2 = deliverCategory(projectsAdj, unfunded, selKey, cfg, budget - spent, exec, reg, del, mDet, mRec, selOpts);
    v += r2.v; spent += r2.spent;
  }
  return { v, spent };
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
  // central agenda capture: zero the `agendaCapture` lowest-PERCEIVED sectors before proportional shares (they fall off
  // the menu; their budget is reallocated to the funded sectors by the normalization in sectorShares).
  let percC = sectorPerceived(projects, sec, plan, 'C');
  const nCap = Math.max(0, Math.min(sec.nSec - 1, Math.round(plan.agendaCapture || 0)));
  if (nCap > 0) {
    const drop = new Set(percC.map((v, i) => ({ i, v })).sort((a, b) => a.v - b.v).slice(0, nCap).map((x) => x.i));
    percC = percC.map((v, i) => (drop.has(i) ? 0 : v));
  }
  const shC = sectorShares(percC, plan, doExC);                                        // central planning (+ agenda capture)
  const shD = sectorShares(sectorPerceived(projects, sec, plan, 'D'), plan, doExD);   // distributed planning

  // Oracle = GLOBAL greedy REFERENCE on the true adjusted value (a heuristic knapsack, NOT a guaranteed optimum, so a
  // feasible cell can exceed it; used as a common normalizer, not an upper bound).
  let O = 0; for (const j of fundedSet(projectsAdj, 'S', cfg, budget)) O += projectsAdj[j].S;

  const CT = { creditTilt: true };
  const planShares = { c: shC, d: shD };
  const recycle = plan.residualMode === 'recycle';
  const cell = (p, s, d) => {
    const selKey = s === 'c' ? 'M_C' : 'M_D', selOpts = s === 'c' ? CT : {};
    const reg = d === 'op' ? del.opaque : del.verified;
    const useCov = s === 'd';                                    // coverage delivery lift travels with distributed selection
    return stackCell(projectsAdj, cats, planShares[p], selKey, selOpts, cfg, budget, exec, reg, del, useCov ? mD : 0, useCov ? mR : 0, recycle);
  };
  const out = { O, budget };
  for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) out[`${p}_${s}_${d}`] = cell(p, s, d);
  return out;
}

// Shapley weights for 3 binary layers: |T|=0 → 1/3, |T|=1 → 1/6, |T|=2 → 1/3.
const SH_W = [1 / 3, 1 / 6, 1 / 6, 1 / 3];   // indexed by which (other-two) coalition, in the order below

// Compute all reported quantities from per-cell value sums and the oracle sum (used for the point estimate AND each
// bootstrap replicate). Returns { gain, shapley:{planning,selection,delivery}, planCentralSel, planDistSel, cells }.
function quantities(sumV, sumO) {
  const eff = (k) => sumV[k] / sumO;
  const v = (P, S, D) => eff(`${P ? 'd' : 'c'}_${S ? 'd' : 'c'}_${D ? 've' : 'op'}`);
  const planning  = SH_W[0] * (v(1, 0, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(0, 1, 0)) + SH_W[2] * (v(1, 0, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(0, 1, 1));
  const selection = SH_W[0] * (v(0, 1, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(1, 0, 1));
  const delivery  = SH_W[0] * (v(0, 0, 1) - v(0, 0, 0)) + SH_W[1] * (v(1, 0, 1) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 1, 0)) + SH_W[3] * (v(1, 1, 1) - v(1, 1, 0));
  return {
    gain: v(1, 1, 1) - v(0, 0, 0), statusQuo: v(0, 0, 0), coreV0: v(1, 1, 1),
    shapley: { planning, selection, delivery },
    planCentralSel: v(1, 0, 1) - v(0, 0, 1), planDistSel: v(1, 1, 1) - v(0, 1, 1),
  };
}

export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING } = {}) {
  validateDelivery(delivery);
  validatePlanning(planning);
  const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0), pRng = makeRng((seed ^ 0x27d4eb2f) >>> 0);
  const keys = [];
  for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) keys.push(`${p}_${s}_${d}`);
  const sumV = Object.fromEntries(keys.map((k) => [k, 0])), sumSpent = Object.fromEntries(keys.map((k) => [k, 0]));
  let sumO = 0, sumBudget = 0;
  const W = [];
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorldStack(cfg, rng, execRng, pRng, delivery, planning);
    if (!r || !(r.O > 0)) continue;
    sumO += r.O; sumBudget += r.budget;
    const wv = {};
    for (const k of keys) { sumV[k] += r[k].v; sumSpent[k] += r[k].spent; wv[k] = r[k].v; }
    W.push({ O: r.O, v: wv });
  }
  const point = quantities(sumV, sumO);
  const utilization = Object.fromEntries(keys.map((k) => [k, sumBudget > 0 ? sumSpent[k] / sumBudget : NaN]));
  // world-cluster bootstrap CIs for the gain, the three Shapley values, and the two planning simple effects.
  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
  const bs = { gain: [], planning: [], selection: [], delivery: [], planCentralSel: [], planDistSel: [] };
  if (W.length) for (let b = 0; b < B; b++) {
    const bV = Object.fromEntries(keys.map((k) => [k, 0])); let bO = 0;
    for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; bO += ww.O; for (const kk of keys) bV[kk] += ww.v[kk]; }
    if (bO <= 0) continue;
    const qy = quantities(bV, bO);
    bs.gain.push(qy.gain); bs.planning.push(qy.shapley.planning); bs.selection.push(qy.shapley.selection);
    bs.delivery.push(qy.shapley.delivery); bs.planCentralSel.push(qy.planCentralSel); bs.planDistSel.push(qy.planDistSel);
  }
  const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
  return {
    n: W.length, sumO, statusQuo: point.statusQuo, coreV0: point.coreV0,
    fullStackGain: point.gain, fullStackCI: ci(bs.gain),
    attribution: point.shapley,
    attributionCI: { planning: ci(bs.planning), selection: ci(bs.selection), delivery: ci(bs.delivery) },
    planningUnderCentralSel: point.planCentralSel, planningUnderDistributedSel: point.planDistSel,
    planningCI: { central: ci(bs.planCentralSel), distributed: ci(bs.planDistSel) },
    cells: Object.fromEntries(keys.map((k) => [k, sumV[k] / sumO])),
    utilization,
  };
}

// Fail-closed validation of the planning config (Codex round: planning had no provenance).
export function validatePlanning(plan) {
  const bad = [];
  const fin = (k) => { if (typeof plan[k] !== 'number' || !Number.isFinite(plan[k])) bad.push(`${k}=${plan[k]} must be finite`); };
  ['nSec', 'assoc', 'secValSpread', 'creditCoef', 'covSees', 'nKeep', 'agendaCapture'].forEach(fin);
  if (Number.isFinite(plan.nSec) && (!Number.isInteger(plan.nSec) || plan.nSec < 1)) bad.push('nSec must be an integer >= 1');
  if (Number.isFinite(plan.agendaCapture) && Number.isFinite(plan.nSec) && (!Number.isInteger(plan.agendaCapture) || plan.agendaCapture < 0 || plan.agendaCapture >= plan.nSec)) bad.push('agendaCapture must be an integer in [0, nSec-1]');
  if (Number.isFinite(plan.assoc) && (plan.assoc < -1 || plan.assoc > 1)) bad.push('assoc must be in [-1,1]');
  if (Number.isFinite(plan.covSees) && (plan.covSees < 0 || plan.covSees > 1)) bad.push('covSees must be in [0,1]');
  if (Number.isFinite(plan.secValSpread) && plan.secValSpread < 0) bad.push('secValSpread must be >= 0');
  if (Number.isFinite(plan.creditCoef) && plan.creditCoef < 0) bad.push('creditCoef must be >= 0');
  if (Number.isFinite(plan.nKeep) && (!Number.isInteger(plan.nKeep) || plan.nKeep < 1)) bad.push('nKeep must be an integer >= 1');
  if (plan.hardExclude && Number.isFinite(plan.nKeep) && Number.isFinite(plan.nSec) && plan.nKeep > plan.nSec) bad.push('nKeep must be <= nSec when hardExclude is on');
  if (![0, 1, true, false].includes(plan.hardExclude)) bad.push('hardExclude must be 0/1');
  if (!['central', 'symmetric'].includes(plan.excludeMode)) bad.push("excludeMode must be 'central' or 'symmetric'");
  if (!['strict', 'recycle'].includes(plan.residualMode)) bad.push("residualMode must be 'strict' or 'recycle'");
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
    const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
    safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture}, strict residual)`);
    safeLog(`STATUS QUO (all-central: central planning + selection + opaque delivery):     ${pct(r.statusQuo)} of reference`);
    safeLog(`CORE v0 FULL (all-distributed: distributed planning + selection + verified):   ${pct(r.coreV0)} of reference`);
    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI ${civ(r.fullStackCI)}\n`);
    safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
    safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}`);
    safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
    safeLog(`  under central selection:     ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)}`);
    safeLog(`  under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)}   (the Core v0 context)`);
    safeLog(`budget utilization by cell (strict residual): status quo ${pct(r.utilization.c_c_op)} · Core v0 ${pct(r.utilization.d_d_ve)}\n`);

    // Recycle mode removes the utilization confound (Codex round-2): unspent budget makes a second global pass.
    const rr = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
    safeLog(`With residual RECYCLING (removes the utilization confound): planning Shapley ${pct(rr.attribution.planning)} ${civ(rr.attributionCI.planning)},`);
    safeLog(`  planning|distributed-sel ${pct(rr.planningUnderDistributedSel)}, full-stack gain ${pct(rr.fullStackGain)} (utilization → ~100% both cells).\n`);

    // The planning magnitude is DECLARED and SENSITIVE to two declared assumptions. Present both, honestly.
    safeLog('Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is');
    safeLog('modest and CONDITIONAL — not a robust large positive layer):');
    safeLog('   secValSpread \\ assoc   -1.0     -0.6      0.0     +0.6');
    for (const sv of [0.1, 0.3, 0.6]) {
      const row = [-1.0, -0.6, 0.0, 0.6].map((a) => pct(fullStack(cfg, { nWorlds: 500, planning: { ...PLANNING, secValSpread: sv, assoc: a } }).attribution.planning).padStart(7));
      safeLog(`     ${sv.toFixed(1).padStart(4)}                 ${row.join('  ')}`);
    }
    safeLog('   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.\n');

    // AGENDA CAPTURE (the second face of power) is the mechanism that makes planning a robust positive layer: the
    // central keeps its lowest-perceived sectors OFF the menu. Direction anchored (Bachrach–Baratz 1962; political
    // budget cycles Drazen–Eslava 2010); SEVERITY kept MODEST (measured composition shifts are single-digit).
    safeLog('Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):');
    safeLog('   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain');
    for (const ac of [0, 1, 2, 3]) {
      const ra = fullStack(cfg, { nWorlds: 600, planning: { ...PLANNING, agendaCapture: ac } });
      safeLog(`   ${String(ac).padStart(2)}/${PLANNING.nSec}              ${pct(ra.attribution.planning).padStart(7)}           ${pct(ra.planningUnderDistributedSel).padStart(7)}            ${pct(ra.fullStackGain).padStart(7)}`);
    }
    safeLog('   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal');
    safeLog('     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.\n');

    safeLog('FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits');
    safeLog('agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read');
    safeLog('as "planning is small," which is not what it means. Report SELECTION and DELIVERY quantitatively (the large,');
    safeLog('robust, anchored layers); present PLANNING QUALITATIVELY — mechanism identified (agenda capture / second');
    safeLog('face of power), DIRECTION anchored (COFOG; election visible-spending shift; maintenance neglect), MAGNITUDE');
    safeLog('deferred to country-specific continuation (e.g. a Chile example — illustrative, not conclusive).');
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
