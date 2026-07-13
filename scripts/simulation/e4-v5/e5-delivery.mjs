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
// opportunistic and DIVERT iff temptation t~U(0,1) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
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
//           ante, so no opportunistic executor diverts (matches the corpus finding: deterrence pre-empts punishment).
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
// verified regime's near-zero diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
// 2018; Becker 1968), not an empirical zero. Community coverage lifts DETECTION only (mon_detect, small/fragile:
// Björkman-Svensson 2009 QJE with failed replications; Molina et al. 2016); RECOVERY needs institutional follow-up, so
// mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
export const DELIVERY = {
  pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
  loss_hon: 0.05,   // ordinary execution loss (Rasul–Rogger supports a substantial upper tail; the scalar is DECLARED)
  //                p_det  a(advance) r(recovery) gamma(guarantee) rep(reputation)
  opaque:   { p_det: 0.04, a: 0.80, r: 0.00, gamma: 0.00, rep: 0.00, note: 'weak control: announced-audit-level exposure, unprotected advances, no recovery/guarantee/reputation' },
  verified: { p_det: 0.75, a: 0.20, r: 0.50, gamma: 0.10, rep: 0.40, note: 'architecture: 10% advance + 10% guarantee + recovery + reputational stake (magnitudes DECLARED)' },
  // MONITORING COUPLING (step 2), SPLIT into two channels (Codex + agent): Core v0's distributed coverage observes
  // delivery, but community coverage credibly lifts only DETECTION (deterrence), not RECOVERY (clawback needs
  // institutional follow-up). p_det_eff = p_det + mon_detect·(1−p_det); r_eff = r + mon_recovery·(1−r).
  mon_detect:   0.0,   // coverage-only detection lift; anchored band 0.0–0.10 (ref 0.05); small + fragile
  mon_recovery: 0.0,   // coverage-only recovery lift; 0 for community-only (formal linkage 0.09–0.36 = the verified regime)
};

function deterrent(reg) { return reg.p_det * ((1 - reg.a * (1 - reg.r)) + (reg.gamma || 0) + reg.rep); }

// The selecting arm's effective delivery regime: distributed coverage lifts detection (and, only with institutional
// linkage, recovery). mDet/mRec are the coverage lifts (0 for the central arm).
function coupledRegime(reg, mDet, mRec) {
  if (!mDet && !mRec) return reg;
  return { ...reg, p_det: reg.p_det + mDet * (1 - reg.p_det), r: reg.r + mRec * (1 - reg.r) };
}

// Per-project delivered fraction + diversion flag under an (already arm-adjusted) regime.
function deliveredFraction(reg, honest, tempt, del) {
  if (honest) return { f: 1 - del.loss_hon, diverts: false };
  const diverts = tempt > deterrent(reg);            // opportunistic: divert iff temptation beats the deterrent
  if (!diverts) return { f: 1 - del.loss_hon, diverts: false };
  const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance (recovery r may be monitoring-lifted)
  return { f: f < 0 ? 0 : f, diverts: true };
}

// Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
// across all four cells — the design's matched seeds). mDet/mRec = the selecting arm's monitoring lifts.
function deliveredCell(projects, funded, reg, exec, del, mDet, mRec) {
  const eff = coupledRegime(reg, mDet, mRec);
  let v = 0, lost = 0, nDiv = 0;
  for (const j of funded) {
    const { f, diverts } = deliveredFraction(eff, exec.honest[j], exec.tempt[j], del);
    v += projects[j].S * f;
    lost += projects[j].S * (1 - f);                 // value not delivered (diversion + ordinary loss)
    if (diverts) nDiv++;
  }
  return { v, lost, nDiv, nFund: funded.length };
}

// One world: worlds are drawn from `rng` (identical to the E4 estimand's stream), executors from a SEPARATE `execRng`
// so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
function runWorld2x2(cfg, rng, execRng, del) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return null;
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const budget = cfg.phi * totalCost;

  const honest = new Array(projects.length), tempt = new Array(projects.length);
  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
  const exec = { honest, tempt };

  const setC = fundedSet(projects, 'M_C', cfg, budget, { creditTilt: true });
  const setD = fundedSet(projects, 'M_D', cfg, budget);
  const setO = fundedSet(projects, 'S',   cfg, budget);

  let O = 0; for (const j of setO) O += projects[j].S;      // oracle at PERFECT delivery = the E4 reference
  const selC = (() => { let s = 0; for (const j of setC) s += projects[j].S; return s; })();
  const selD = (() => { let s = 0; for (const j of setD) s += projects[j].S; return s; })();

  const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;   // distributed arm's monitoring lifts
  return {
    O, selC, selD,
    S:  deliveredCell(projects, setC, del.opaque,   exec, del, 0,  0),    // central: no coverage lift
    A1: deliveredCell(projects, setC, del.verified, exec, del, 0,  0),
    A3: deliveredCell(projects, setD, del.opaque,   exec, del, mD, mR),   // distributed: coverage lifts detection (+recovery if linked)
    A2: deliveredCell(projects, setD, del.verified, exec, del, mD, mR),
  };
}

// Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
// executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
// returns diversion incidence, leakage, and a world-cluster bootstrap CI on the full-architecture gain.
export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
  const rng = makeRng(seed);
  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
  const W = [];
  const t = { O: 0, selC: 0, selD: 0 };
  for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] = 0; t[c + 'lost'] = 0; t[c + 'div'] = 0; t[c + 'fund'] = 0; }
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorld2x2(cfg, rng, execRng, delivery);
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
  // world-cluster bootstrap CI on the full-architecture gain Σ(A2−S)/ΣO (inner MC variability only).
  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0), boots = [];
  if (W.length) for (let b = 0; b < B; b++) { let n = 0, d = 0; for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; n += (ww.A2v - ww.Sv); d += ww.O; } if (d > 0) boots.push(n / d); }
  boots.sort((x, y) => x - y);
  const quant = (p) => boots.length ? boots[Math.max(0, Math.min(boots.length - 1, Math.floor(p * boots.length)))] : NaN;
  const fullCI = [quant((1 - NUM.ci_level.value) / 2), quant((1 + NUM.ci_level.value) / 2)];
  return {
    n: W.length,
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
    { p_det: 0.03, pi_hon: 0.35 },   // severe
    { p_det: 0.01, pi_hon: 0.20 },   // Uganda-extreme (~85%+ loss)
  ];
  const rows = [];
  for (const g of grid) {
    const del = { ...DELIVERY, pi_hon: g.pi_hon, opaque: { ...DELIVERY.opaque, p_det: g.p_det } };
    const r = delivered2x2(cfg, { nWorlds, delivery: del });
    rows.push({ leak: 1 - r.delivery.centralOpaque, deliveryEffectAtDistributed: r.deliveryEffect.atDistributed, full: r.full, A3: r.cells.A3 });
  }
  return rows;
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
    safeLog(`diversion incidence (funded projects whose executor diverts):  opaque ${pct(r.diversionIncidence.S)} · verified ${pct(r.diversionIncidence.A1)}`);
    safeLog(`value leakage (selected value not delivered):                  opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
    safeLog('Main effects (percentage points of the oracle reference), read SEPARATELY:');
    safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)}`);
    safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)}`);
    safeLog(`  INTERACTION:       ${pct(r.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% CI [${pct(r.fullCI[0])}, ${pct(r.fullCI[1])}]\n`);
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

    // (iii) Step 1 — opaque-band sensitivity, coupling OFF so the delivery effect is read cleanly.
    safeLog('Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):');
    safeLog('   leak(opaque)   delivery-effect@distributed   full (A2−S)');
    for (const row of sweepOpaque(cfg, { nWorlds: 800 })) {
      safeLog(`     ${pct(row.leak).padStart(6)}          ${pct(row.deliveryEffectAtDistributed).padStart(7)}                 ${pct(row.full).padStart(7)}`);
    }
    safeLog('   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.');
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
