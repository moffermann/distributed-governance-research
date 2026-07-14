// E5 v1.14 — the DELIVERED-VALUE experiment: SELECTION × DELIVERY, rebuilt on the clean E4 engine.
//
// E4 measures SELECTION quality at matched budget assuming perfect delivery (every funded project delivers its full
// value). E5 adds the DELIVERY layer as an INDEPENDENT regime (opaque status-quo vs verified/architecture), so the two
// layers can be read SEPARATELY and jointly on the SAME funded portfolios — a clean 2×2, not the legacy engine that
// tied delivery to the selection arm. No compound multiplier is reported; each layer is a percentage of the oracle
// reference, and the composition (additive vs multiplicative) is READ OFF the experiment, not assumed.
//
//   Selection regime:  central (M_C + credit tilt)   |   distributed (M_D coverage)
//   Delivery regime:   opaque (weak control)         |   verified (milestone-gated + reputation)
//
//   Arm S  = central   × opaque    (status quo)
//   Arm A1 = central   × verified  (delivery effect, selection held central)
//   Arm A3 = distributed × opaque  (selection effect, delivery held weak)
//   Arm A2 = distributed × verified (the full architecture)
//
// Delivery model (micro-founded, one-shot, Okun's leaky bucket; Model-1 incentive condition, deterrence ex ante):
// each funded project draws an executor. A share pi_hon are intrinsically honest (deliver 1−loss). The rest are
// opportunistic and DIVERT iff temptation (mostly U(0,1), plus a grand-corruption tail) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
// where a=up-front advance exposure, r=recovery, rep=reputational stake. A diverting executor loses a·(1−r) of the
// budget (the unrecovered advance) → delivers 1 − a(1−r) − loss; an honest/deterred one delivers 1 − loss.
// Delivered value V = Σ_{j∈funded} S_j · f_j. Leakage bands are literature-anchored (see DELIVERY notes).
//
// Run: npm run e5:delivery

import { generateWorld, makeRng, fundedSet } from './engine.mjs';
import { baseConfig, NUM } from './contract.mjs';
import { safeLog } from './adapter.mjs';

// ---- delivery regimes (module-local; NOT E4 THETA, so the frozen E4 contract/hash is untouched) ----
// Directions anchored to the corpus Models 1–2 and the delivery literature; magnitudes declared, not fitted:
//   opaque  central case ~25% loss (IMF PIE-X public-investment inefficiency 0.20–0.30) with ~24% of executors
//           diverting (Olken 2007 Indonesian roads: 24% missing); pessimistic end reaches the Uganda 87% (Reinikka &
//           Svensson 2004) extreme by raising temptation / lowering pi_hon.
//   verified ~2.5% loss: milestone-gating + retention + recovery + a reputational stake make the deterrent bind ex
//           ante, so few opportunistic executors divert; a grand-corruption tail leaves a small RESIDUAL (not a mechanical zero).
// Calibration (friendly round, 2026-07-12; anchors in audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md).
// ANCHORED: opaque central divert ~24% (Olken 2007 JPE 115(2), Indonesia roads); ex-ante deterrence ⇒ verified ~0
//   diversion (Olken 2007; Avis-Ferraz-Finan 2018 JPE 126(5); Becker 1968). DECLARED (mechanism sound, no citable
//   magnitude): milestone-gating effectiveness, the reputational stake `rep`. Transport rules for the paper: IMF ~30%
//   (Making Public Investment More Efficient 2015) is PROCESS inefficiency, not theft; Reinikka & Svensson 2004 QJE
//   119(2) ~87% is a TAIL, not the central case; monitoring effect sizes are from service-delivery RCTs, not fund
//   tracing (out-of-domain lift).
// Calibration is an IDENTIFIED-SET reference, NOT a field estimate (friendly round convergent view, Codex + agent):
// the opaque case reproduces an Olken-2007-centered ~24–28% VALUE-loss moment (not a claim about executor incidence);
// verified advances/guarantees follow World Bank standard procurement (10% advance, ~10% performance guarantee); the
// verified regime's LOW-but-nonzero residual diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
// 2018; Becker 1968), not an empirical zero. Community coverage lifts DETECTION only (mon_detect, small/fragile:
// Björkman-Svensson 2009 QJE with failed replications; Molina et al. 2016); RECOVERY needs institutional follow-up, so
// mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
export const DELIVERY = {
  pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
  loss_hon: 0.05,   // ordinary execution loss (Rasul–Rogger supports a substantial upper tail; the scalar is DECLARED)
  tempt_tail: 0.10, // GRAND-CORRUPTION TAIL (Adversarial R1 #8): a fraction of opportunistic executors face temptation
                    //     ABOVE any feasible deterrent, so even the strong verified regime keeps a RESIDUAL diversion —
                    //     it is NOT a mechanical zero. Olken 2007: audits cut missing expenditure ~8pp but did not
                    //     eliminate it. With this tail, verified diversion incidence is small but nonzero (~a few %).
  //                p_det  a(advance) r(recovery) gamma(guarantee) rep(reputation)
  opaque:   { p_det: 0.04, a: 0.80, r: 0.00, gamma: 0.00, rep: 0.00, note: 'weak control: announced-audit-level exposure, unprotected advances, no recovery/guarantee/reputation' },
  verified: { p_det: 0.75, a: 0.20, r: 0.50, gamma: 0.10, rep: 0.40, note: 'architecture: 20% advance exposure (DECLARED reference; World Bank normal advance ~10%) + ~10% performance guarantee + recovery + reputational stake (magnitudes DECLARED)' },
  // MONITORING COUPLING (step 2), SPLIT into two channels (Codex + agent): Core v0's distributed coverage observes
  // delivery, but community coverage credibly lifts only DETECTION (deterrence), not RECOVERY (clawback needs
  // institutional follow-up). p_det_eff = p_det + mon_detect·(1−p_det); r_eff = r + mon_recovery·(1−r).
  mon_detect:   0.0,   // coverage-only detection lift; anchored band 0.0–0.10 (ref 0.05); small + fragile
  mon_recovery: 0.0,   // coverage-only recovery lift; 0 for community-only (formal linkage 0.09–0.36 = the verified regime)
  // VALUE/COMPLEXITY-CORRELATED DELIVERY RISK (robustness, breaks delivery↔value independence): bigger/more complex
  // projects are harder to monitor, so effective detection falls with the project's cost percentile:
  //   p_det_proj = p_det · (1 − val_risk · costPct). Default 0 = delivery independent of project size (the base model).
  //   >0 makes the delivered fraction depend on WHICH projects are funded, so the cross-arm delivery efficiencies can
  //   diverge (a genuine, non-identity interaction between selection and delivery).
  val_risk: 0.0,
};

function deterrent(reg, pDet) { return pDet * ((1 - reg.a * (1 - reg.r)) + (reg.gamma || 0) + reg.rep); }

// Temptation draw: mostly U(0,1), plus a grand-corruption TAIL in [1,2] with probability tempt_tail — so a strong
// (deterrent>1) verified regime still leaves a residual diversion instead of a mechanical zero (Adversarial R1 #8).
export function sampleTempt(rng, del) { return rng.u() < (del.tempt_tail || 0) ? 1 + rng.u() : rng.u(); }

// The selecting arm's effective delivery regime: distributed coverage lifts detection (and, only with institutional
// linkage, recovery). mDet/mRec are the coverage lifts (0 for the central arm).
function coupledRegime(reg, mDet, mRec) {
  if (!mDet && !mRec) return reg;
  return { ...reg, p_det: reg.p_det + mDet * (1 - reg.p_det), r: reg.r + mRec * (1 - reg.r) };
}

// Per-project delivered fraction + diversion flag. detMult scales this project's detection (value/complexity risk).
function deliveredFraction(reg, honest, tempt, del, detMult) {
  if (honest) return { f: 1 - del.loss_hon, diverts: false };
  const diverts = tempt > deterrent(reg, reg.p_det * detMult);   // opportunistic: divert iff temptation beats the deterrent
  if (!diverts) return { f: 1 - del.loss_hon, diverts: false };
  const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance (recovery r may be monitoring-lifted)
  return { f: f < 0 ? 0 : f, diverts: true };
}

// Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
// across all four cells — the design's matched seeds). mDet/mRec = monitoring lifts; cfg gives the cost range for the
// value/complexity risk (bigger projects harder to monitor). Exported so E9 (the full stack) reuses the SAME delivery
// machinery on top of a planning layer — E9 = planning × E5.
export function deliveredCell(projects, funded, reg, exec, del, mDet, mRec, cfg) {
  const eff = coupledRegime(reg, mDet, mRec);
  const vr = del.val_risk || 0, span = cfg.c_hi - cfg.c_lo;
  let v = 0, lost = 0, nDiv = 0;
  for (const j of funded) {
    const costPct = span > 0 ? (projects[j].c - cfg.c_lo) / span : 0;     // 0..1 complexity proxy
    const detMult = 1 - vr * costPct;                                     // harder to monitor when bigger
    const { f, diverts } = deliveredFraction(eff, exec.honest[j], exec.tempt[j], del, detMult);
    v += projects[j].S * f;
    lost += projects[j].S * (1 - f);                 // value not delivered (diversion + ordinary loss)
    if (diverts) nDiv++;
  }
  return { v, lost, nDiv, nFund: funded.length };
}

// One world: worlds are drawn from `rng` (identical to the E4 estimand's stream), executors from a SEPARATE `execRng`
// so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
// budgetScale (default 1) scales the ARM funding budget only (E10 net-budget accounting); the ORACLE and the
// world-retention decision ALWAYS use the FULL budget, so scaled runs retain the SAME worlds and share the SAME
// full-budget normalizer (Adversarial R2 #2 — no per-arm retained-world drift).
function runWorld2x2(cfg, rng, execRng, del, budgetScale = 1) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return null;
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const fullBudget = cfg.phi * totalCost;
  const armBudget = fullBudget * budgetScale;

  const honest = new Array(projects.length), tempt = new Array(projects.length);
  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = sampleTempt(execRng, del); }
  const exec = { honest, tempt };

  const setC = fundedSet(projects, 'M_C', cfg, armBudget, { creditTilt: true });
  const setD = fundedSet(projects, 'M_D', cfg, armBudget);
  const setO = fundedSet(projects, 'S',   cfg, fullBudget);   // oracle ALWAYS at the full budget (common normalizer)

  let O = 0; for (const j of setO) O += projects[j].S;      // oracle at PERFECT delivery, FULL budget = the E4 reference
  const selC = (() => { let s = 0; for (const j of setC) s += projects[j].S; return s; })();
  const selD = (() => { let s = 0; for (const j of setD) s += projects[j].S; return s; })();

  const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;   // distributed arm's monitoring lifts
  return {
    O, selC, selD,
    S:  deliveredCell(projects, setC, del.opaque,   exec, del, 0,  0,  cfg),   // central: no coverage lift
    A1: deliveredCell(projects, setC, del.verified, exec, del, 0,  0,  cfg),
    A3: deliveredCell(projects, setD, del.opaque,   exec, del, mD, mR, cfg),   // distributed: coverage lifts detection (+recovery if linked)
    A2: deliveredCell(projects, setD, del.verified, exec, del, mD, mR, cfg),
  };
}

// Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
// executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
// returns diversion incidence, leakage, and a world-cluster bootstrap CI on the full-architecture gain.
export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, budgetScale = 1 } = {}) {
  validateDelivery(delivery);
  const rng = makeRng(seed);
  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
  const W = [];
  const t = { O: 0, selC: 0, selD: 0 };
  for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] = 0; t[c + 'lost'] = 0; t[c + 'div'] = 0; t[c + 'fund'] = 0; }
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorld2x2(cfg, rng, execRng, delivery, budgetScale);   // budgetScale scales ARM funding only; O/retention stay full-budget
    if (!r || !(r.O > 0)) continue;
    W.push({ O: r.O, Sv: r.S.v, A1v: r.A1.v, A3v: r.A3.v, A2v: r.A2.v });
    t.O += r.O; t.selC += r.selC; t.selD += r.selD;
    for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] += r[c].v; t[c + 'lost'] += r[c].lost; t[c + 'div'] += r[c].nDiv; t[c + 'fund'] += r[c].nFund; }
  }
  const O = t.O, eff = (x) => x / O;
  const sC = eff(t.selC), sD = eff(t.selD);                 // SELECTION efficiencies (perfect delivery) = the E4 numbers
  const S = eff(t.Sv), A1 = eff(t.A1v), A3 = eff(t.A3v), A2 = eff(t.A2v);
  const dCol = t.selC ? t.Sv / t.selC : NaN, dCvr = t.selC ? t.A1v / t.selC : NaN;   // per-arm delivered fractions
  const dDop = t.selD ? t.A3v / t.selD : NaN, dDvr = t.selD ? t.A2v / t.selD : NaN;
  const inc = (c) => t[c + 'fund'] ? t[c + 'div'] / t[c + 'fund'] : NaN;             // diversion incidence per cell
  const lk  = (c) => (t[c + 'v'] + t[c + 'lost']) > 0 ? t[c + 'lost'] / (t[c + 'v'] + t[c + 'lost']) : NaN;  // value leakage
  // world-cluster bootstrap CIs (inner MC variability only) for the reported cells AND effects, not just the full gain.
  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
  const bs = { S: [], A1: [], A3: [], A2: [], full: [], dEffC: [], dEffD: [], sEffO: [], sEffV: [], inter: [] };
  if (W.length) for (let b = 0; b < B; b++) {
    let o = 0, s = 0, a1 = 0, a3 = 0, a2 = 0;
    for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; o += ww.O; s += ww.Sv; a1 += ww.A1v; a3 += ww.A3v; a2 += ww.A2v; }
    if (o <= 0) continue;
    const bS = s / o, bA1 = a1 / o, bA3 = a3 / o, bA2 = a2 / o;
    bs.S.push(bS); bs.A1.push(bA1); bs.A3.push(bA3); bs.A2.push(bA2);
    bs.full.push(bA2 - bS); bs.dEffC.push(bA1 - bS); bs.dEffD.push(bA2 - bA3);
    bs.sEffO.push(bA3 - bS); bs.sEffV.push(bA2 - bA1); bs.inter.push(bA2 - bA1 - bA3 + bS);
  }
  const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
  const fullCI = ci(bs.full);
  return {
    n: W.length,
    sumO: O,                                                  // raw oracle sum (for E10 net-budget accounting vs a common full-budget oracle)
    selection: { central: sC, distributed: sD },
    delivery:  { centralOpaque: dCol, centralVerified: dCvr, distributedOpaque: dDop, distributedVerified: dDvr },
    monitoringDividend: { verified: dDvr - dCvr, opaque: dDop - dCol },
    cells: { S, A1, A3, A2 },
    diversionIncidence: { S: inc('S'), A1: inc('A1'), A3: inc('A3'), A2: inc('A2') },
    leakage:            { S: lk('S'),  A1: lk('A1'),  A3: lk('A3'),  A2: lk('A2') },
    deliveryEffect:  { atCentral: A1 - S,  atDistributed: A2 - A3 },
    selectionEffect: { atOpaque:  A3 - S,  atVerified:    A2 - A1 },
    interaction: (A2 - A1 - A3 + S),                         // >0 ⇒ verified delivery AMPLIFIES the selection gain
    full: A2 - S, fullCI,                                    // full architecture vs status quo (pp of oracle) + bootstrap CI
    ci: {                                                    // 95% bootstrap CIs for every reported quantity
      cells: { S: ci(bs.S), A1: ci(bs.A1), A3: ci(bs.A3), A2: ci(bs.A2) },
      deliveryEffect:  { atCentral: ci(bs.dEffC), atDistributed: ci(bs.dEffD) },
      selectionEffect: { atOpaque: ci(bs.sEffO),  atVerified: ci(bs.sEffV) },
      interaction: ci(bs.inter),
    },
    // composition: each cell equals its own selection efficiency times its own delivered fraction (an accounting
    // identity, EXACT by construction — delivery is applied per project). The additive prediction misses by the interaction.
    multiplicativeIdentityA2: sD * dDvr,
    additivePredictionA2: S + (A1 - S) + (A3 - S),
  };
}

// Step 1 — SENSITIVITY: sweep the opaque regime from the IMF/Olken central band toward the Uganda 87% pessimistic
// extreme (by lowering detection and the honest share), reporting how the delivery effect and the full-architecture
// gain respond. Returns rows {leak, deliveryEffectAtDistributed, full}.
export function sweepOpaque(cfg, { nWorlds = 800, points = null } = {}) {
  const grid = points || [
    { p_det: 0.12, pi_hon: 0.75 },   // mild  (~IMF PIE-X 20-25% loss)
    { p_det: 0.10, pi_hon: 0.70 },   // base  (~30% loss; Olken 24% divert)
    { p_det: 0.06, pi_hon: 0.55 },   // heavy (~50% loss)
    { p_det: 0.03, pi_hon: 0.35 },   // severe declared stress
    { p_det: 0.01, pi_hon: 0.20 },   // very severe declared stress (~69% loss; the Uganda ~87% capture is contextual, not this row)
  ];
  const rows = [];
  for (const g of grid) {
    const del = { ...DELIVERY, pi_hon: g.pi_hon, opaque: { ...DELIVERY.opaque, p_det: g.p_det } };
    const r = delivered2x2(cfg, { nWorlds, delivery: del });
    rows.push({ leak: 1 - r.delivery.centralOpaque, deliveryEffectAtDistributed: r.deliveryEffect.atDistributed, full: r.full, A3: r.cells.A3 });
  }
  return rows;
}

// Genuinely fail-closed validation of a delivery config (Codex round-2: NaN/Infinity and a MISSING `rep` previously
// slipped through, and a missing rep silently makes the deterrent NaN — classifying every opportunist as deterred).
export function validateDelivery(del) {
  const bad = [];
  const fin  = (k, v) => { if (typeof v !== 'number' || !Number.isFinite(v)) { bad.push(`${k}=${v} must be a finite number`); return false; } return true; };
  const unit = (k, v) => { if (fin(k, v) && (v < 0 || v > 1)) bad.push(`${k}=${v} must be in [0,1]`); };
  unit('pi_hon', del.pi_hon); unit('loss_hon', del.loss_hon);
  unit('mon_detect', del.mon_detect ?? 0); unit('mon_recovery', del.mon_recovery ?? 0); unit('val_risk', del.val_risk ?? 0);
  unit('tempt_tail', del.tempt_tail ?? 0);   // grand-corruption tail is part of the contract (Adversarial R2 #4): finite ∈ [0,1], never missing/NaN
  for (const name of ['opaque', 'verified']) {
    const reg = del[name];
    if (!reg || typeof reg !== 'object') { bad.push(`${name} regime missing`); continue; }
    for (const k of ['p_det', 'a', 'r', 'rep']) unit(`${name}.${k}`, reg[k]);   // rep is REQUIRED + finite (deterrent uses it)
    if (fin(`${name}.gamma`, reg.gamma ?? 0) && (reg.gamma ?? 0) < 0) bad.push(`${name}.gamma must be >= 0`);
  }
  if (bad.length) throw new Error(`[e5-delivery] invalid delivery config: ${bad.join('; ')}`);
  return true;
}

// 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
// the inner bootstrap CI with between-seed variability).
export function replicateSeeds(cfg, { nSeeds = 20, nWorlds = 400, delivery = DELIVERY } = {}) {
  const vals = [];
  for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
  vals.sort((a, b) => a - b);
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / vals.length);
  return { mean, sd, min: vals[0], max: vals[vals.length - 1] };
}

// Joint Latin-hypercube sweep over the delivery params, reporting the RANGE of the full gain and the coverage-wins
// share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
export function jointSweep(cfg, { nSamples = 64, nWorlds = 300 } = {}) {
  const ranges = {
    pi_hon: [0.61, 0.85], loss_hon: [0.0, 0.15], op_pdet: [0.02, 0.15], op_a: [0.75, 1.0],
    ve_pdet: [0.60, 0.90], ve_a: [0.10, 0.40], ve_r: [0.30, 1.0], ve_rep: [0.0, 0.5],
    mon_detect: [0.0, 0.10], mon_recovery: [0.0, 0.36], val_risk: [0.0, 0.6],
    tempt_tail: [0.0, 0.20],   // Adversarial R2 #4: SWEEP the grand-corruption tail too, so the robustness result is NOT the pre-fix zero-tail DGP
  };
  const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
  for (const k of keys) {                                     // stratified + shuffled column per key (LHS)
    const col = []; for (let i = 0; i < nSamples; i++) col.push((i + rng.u()) / nSamples);
    for (let i = col.length - 1; i > 0; i--) { const j = Math.floor(rng.u() * (i + 1)); [col[i], col[j]] = [col[j], col[i]]; }
    cols[k] = col;
  }
  const lerp = (r, u) => r[0] + (r[1] - r[0]) * u, fulls = [], selEff = [];
  for (let i = 0; i < nSamples; i++) {
    const s = {}; for (const k of keys) s[k] = lerp(ranges[k], cols[k][i]);
    const del = {
      pi_hon: s.pi_hon, loss_hon: s.loss_hon, tempt_tail: s.tempt_tail,   // carry the swept grand-corruption tail (Adversarial R2 #4)
      opaque:   { p_det: s.op_pdet, a: s.op_a, r: 0.0, gamma: 0.0, rep: 0.0 },
      verified: { p_det: s.ve_pdet, a: s.ve_a, r: s.ve_r, gamma: 0.10, rep: s.ve_rep },
      mon_detect: s.mon_detect, mon_recovery: s.mon_recovery, val_risk: s.val_risk,
    };
    const rr = delivered2x2(cfg, { nWorlds, delivery: del });
    fulls.push(rr.full);                       // A2 − S : the FULL architecture vs the status quo
    selEff.push(rr.selectionEffect.atOpaque);  // A3 − S : the COVERAGE (selection) effect alone, at opaque delivery
  }
  fulls.sort((a, b) => a - b);
  // NOTE: shares are over these 64 LHS draws across the DECLARED ranges (gamma and opaque recovery held fixed; the
  // grand-corruption temptation tail IS swept — Adversarial R2 #4), NOT a global identified-set guarantee.
  // shareArchitectureWins = A2−S>0 (full stack); shareCoverageWins = A3−S>0.
  return { n: fulls.length, min: fulls[0], max: fulls[fulls.length - 1], median: fulls[fulls.length >> 1],
    shareArchitectureWins: fulls.filter((x) => x > 0).length / fulls.length,
    shareCoverageWins: selEff.filter((x) => x > 0).length / selEff.length };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  const cfgBase = baseConfig();
  // Use the PROBABLE anchored scenario (realistic coverage composition + anchored central handicaps) as the world,
  // so the selection layer matches the E4 headline; delivery is the new layer on top.
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...cfgBase, ...W, ...PROBABLE };
    // (i) the pure four-cell design with the monitoring coupling OFF — the two layers read cleanly.
    const r = delivered2x2(cfg, { nWorlds: 1200 });
    safeLog('E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).');
    safeLog('Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.\n');
    safeLog(`worlds kept: ${r.n}`);
    safeLog(`SELECTION efficiency (perfect delivery, = E4):  central ${pct(r.selection.central)} · distributed ${pct(r.selection.distributed)}`);
    safeLog(`DELIVERY efficiency (delivered/selected):        opaque ${pct(r.delivery.centralOpaque)} · verified ${pct(r.delivery.centralVerified)}\n`);
    safeLog('Four-cell delivered value as a fraction of the oracle reference:');
    safeLog(`                       opaque delivery     verified delivery`);
    safeLog(`  central selection    S  ${pct(r.cells.S).padStart(7)}          A1 ${pct(r.cells.A1).padStart(7)}`);
    safeLog(`  distributed sel.     A3 ${pct(r.cells.A3).padStart(7)}          A2 ${pct(r.cells.A2).padStart(7)}\n`);
    // diversion INCIDENCE = unweighted share of funded projects whose executor diverts; value LEAKAGE = S-weighted
    // undelivered social value. Olken 2007 measured missing EXPENDITURE (closest to value leakage), not executor prevalence.
    safeLog(`diversion incidence (unweighted share of funded projects):     opaque ${pct(r.diversionIncidence.S)} · verified ${pct(r.diversionIncidence.A1)}`);
    safeLog(`value leakage (S-weighted undelivered value; MOMENT-MATCHED to Olken's expenditure loss, NOT identified as welfare):   opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
    const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
    safeLog('Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation');
    safeLog('variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:');
    safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} ${civ(r.ci.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)} ${civ(r.ci.deliveryEffect.atDistributed)}`);
    safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} ${civ(r.ci.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)} ${civ(r.ci.selectionEffect.atVerified)}`);
    safeLog(`  INTERACTION:       ${pct(r.interaction)} ${civ(r.ci.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% conditional-MC CI ${civ(r.fullCI)}\n`);
    safeLog('Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):');
    safeLog(`  actual A2 = ${pct(r.cells.A2)}  ·  identity (selection · delivery) = ${pct(r.multiplicativeIdentityA2)}`);
    safeLog(`  additive prediction (sum of main effects) = ${pct(r.additivePredictionA2)}  → short by the interaction.`);
    safeLog(`  The positive interaction is the level-effect signature of multiplicative composition.\n`);

    // (ii) monitoring coupling ON (step 2): distributed coverage lifts DETECTION only (community-only recovery=0).
    // Anchored coverage-only detection band 0.0–0.10 (fragile evidence); headline 0.05.
    const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
    safeLog('Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):');
    safeLog(`  delivered fraction, distributed − central:  opaque ${pct(rc.monitoringDividend.opaque)} · verified ${pct(rc.monitoringDividend.verified)} (saturated)`);
    safeLog(`  weak-control cell A3 rises ${pct(r.cells.A3)} → ${pct(rc.cells.A3)} — SMALL: community detection without institutional recovery barely helps a weak-control regime.`);
    safeLog(`  detection-band sweep (opaque monitoring dividend):`);
    for (const c of [0.0, 0.05, 0.10]) {
      const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: c, mon_recovery: 0.0 } });
      safeLog(`     mon_detect ${c.toFixed(2)}  →  dividend(opaque) ${pct(rr.monitoringDividend.opaque)}  ·  A3 ${pct(rr.cells.A3)}`);
    }
    // with institutional recovery linkage (Core v0's evidence layer), the dividend is larger — reported as a scenario, not the community-only default.
    const rr2 = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
    safeLog(`  with institutional recovery linkage (mon_recovery=0.20): opaque dividend ${pct(rr2.monitoringDividend.opaque)} — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.\n`);

    // Favorable R=0 robustness (Codex): drop the reputational stake entirely — the verified regime then admits SOME
    // diversion, and the full gain still holds. This is the honest less-favorable-to-Core-v0 disclosure.
    const r0 = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
    safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);

    // (iii) Step 1 — opaque-band sensitivity, coupling OFF so the delivery effect is read cleanly.
    safeLog('Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):');
    safeLog('   leak(opaque)   delivery-effect@distributed   full (A2−S)');
    for (const row of sweepOpaque(cfg, { nWorlds: 800 })) {
      safeLog(`     ${pct(row.leak).padStart(6)}          ${pct(row.deliveryEffectAtDistributed).padStart(7)}                 ${pct(row.full).padStart(7)}`);
    }
    safeLog('   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.\n');

    // (iv) COST/COMPLEXITY-correlated delivery risk (robustness). NOTE: the risk is tied to project COST, and cost is
    // drawn INDEPENDENTLY of true value S in the engine (c ⟂ S), so this bounds cost/size risk, not a value↔delivery
    // correlation. Does it break the per-arm delivery equality (a real selection↔delivery interaction)?
    safeLog('Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):');
    for (const vr of [0.0, 0.3, 0.6]) {
      const rv = delivered2x2(cfg, { nWorlds: 800, delivery: { ...DELIVERY, val_risk: vr } });
      const armGap = rv.delivery.distributedOpaque - rv.delivery.centralOpaque;   // delivery efficiency difference by arm
      safeLog(`   val_risk ${vr.toFixed(1)}  →  opaque delivery central ${pct(rv.delivery.centralOpaque)} · distributed ${pct(rv.delivery.distributedOpaque)} (arm gap ${pct(armGap)})  ·  full ${pct(rv.full)}`);
    }
    safeLog('   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.\n');

    // (v) 20-seed replication + a joint Latin-hypercube sweep over the DECLARED ranges (a sampled-space statement, not a
    // global identified-set guarantee: gamma, opaque recovery and uniform temptation are held fixed).
    const rep = replicateSeeds(cfg, { nSeeds: 20, nWorlds: 400 });
    safeLog(`20-seed replication of the full gain: mean ${pct(rep.mean)} · sd ${pct(rep.sd)} · range [${pct(rep.min)}, ${pct(rep.max)}].`);
    const js = jointSweep(cfg, { nSamples: 64, nWorlds: 300 });
    safeLog(`Joint LHS sweep (${js.n} draws, CONDITIONAL on the PROBABLE world; non-overlapping regime ranges): full gain median ${pct(js.median)}, range [${pct(js.min)}, ${pct(js.max)}];`);
    safeLog(`   full architecture wins in ${(100 * js.shareArchitectureWins).toFixed(0)}% and the coverage/selection effect (A3−S) is positive in ${(100 * js.shareCoverageWins).toFixed(0)}% of the sampled draws.`);
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
