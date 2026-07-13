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
export const DELIVERY = {
  pi_hon:   0.76,   // intrinsically-honest share (tuned so the opaque central case lands at the Olken ~24% divert band)
  loss_hon: 0.05,   // honest/deterred production loss (delivered = 1 − loss_hon)
  opaque:   { p_det: 0.10, a: 0.90, r: 0.00, rep: 0.00, note: 'weak control: low detection, unprotected advances, no recovery/reputation' },
  verified: { p_det: 0.75, a: 0.20, r: 0.50, rep: 0.50, note: 'architecture: milestone-gated advances, recovery, reputational stake (magnitude DECLARED, not anchored)' },
  // MONITORING COUPLING (step 2): Core v0's distributed coverage is not only a SELECTION signal — the same citizens who
  // routed the budget also observe delivery, so distributed selection raises BOTH the effective detection of diversion
  // (deters it) AND the effective recovery of diverted funds (clawback once flagged):
  //   p_det_eff = p_det + mon_coupling·(1 − p_det);   r_eff = r + mon_coupling·(1 − r).
  // This couples delivery to selection, breaking the structural multiplicativity: with mon_coupling>0 the distributed
  // arm delivers a HIGHER fraction than the central arm under the SAME control regime — a genuine super-multiplicative
  // dividend, largest in the OPAQUE regime (where distributed coverage partially SUBSTITUTES for a missing formal
  // control layer). Default 0 = independent (pure multiplicative baseline). Magnitude to be anchored (community-
  // monitoring / social-audit detection-and-recovery lift). ANCHORED band for coverage-only monitoring is ~0.0–0.20
  // (Björkman-Svensson 2009 QJE — health, with FAILED replications; Molina et al. 2016 Campbell — small/heterogeneous;
  // Afridi-Iversen 2014 MGNREGA — supports the recovery channel). The stronger ~1/3 audit effect (Olken 2007) is the
  // VERIFIED regime's own detection, NOT this coverage coupling. Headline uses 0.15; swept across the band.
  mon_coupling: 0.0,
};

function deterrent(reg) { return reg.p_det * ((1 - reg.a * (1 - reg.r)) + reg.rep); }

// The selecting arm's effective delivery regime: the distributed arm's coverage lifts detection AND recovery.
function coupledRegime(reg, mc) {
  if (!mc) return reg;
  return { ...reg, p_det: reg.p_det + mc * (1 - reg.p_det), r: reg.r + mc * (1 - reg.r) };
}

// Per-project delivered fraction under an (already arm-adjusted) regime, given the executor's honest flag and temptation.
function deliveredFraction(reg, honest, tempt, del) {
  if (honest) return 1 - del.loss_hon;
  const diverts = tempt > deterrent(reg);            // opportunistic: divert iff temptation beats the deterrent
  if (!diverts) return 1 - del.loss_hon;
  const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance (recovery r may be monitoring-lifted)
  return f < 0 ? 0 : f;
}

// Delivered value of a funded set under a regime, reusing per-project executor draws (shared across all four cells so
// the comparison is on identical executors/temptations — the design's "matched seeds"). mc = the selecting arm's
// monitoring coupling (0 for central, del.mon_coupling for distributed).
function deliveredValue(projects, funded, reg, exec, del, mc = 0) {
  const eff = coupledRegime(reg, mc);
  let v = 0;
  for (const j of funded) v += projects[j].S * deliveredFraction(eff, exec.honest[j], exec.tempt[j], del);
  return v;
}

// One world: draw executors once, then evaluate the oracle (perfect delivery) and the four selection-by-delivery cells.
function runWorld2x2(cfg, rng, del) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return null;
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const budget = cfg.phi * totalCost;

  // executor draws, one per project, shared across cells
  const honest = new Array(projects.length), tempt = new Array(projects.length);
  for (let j = 0; j < projects.length; j++) { honest[j] = rng.u() < del.pi_hon; tempt[j] = rng.u(); }
  const exec = { honest, tempt };

  const setC = fundedSet(projects, 'M_C', cfg, budget, { creditTilt: true });
  const setD = fundedSet(projects, 'M_D', cfg, budget);
  const setO = fundedSet(projects, 'S',   cfg, budget);

  let O = 0; for (const j of setO) O += projects[j].S;      // oracle at PERFECT delivery = the E4 reference
  const selC = (() => { let s = 0; for (const j of setC) s += projects[j].S; return s; })(); // perfect-delivery selection
  const selD = (() => { let s = 0; for (const j of setD) s += projects[j].S; return s; })();

  const mc = del.mon_coupling || 0;                        // distributed arm's monitoring lift on detection
  return {
    O,
    selC, selD,                                            // selection value at perfect delivery (= the E4 arms)
    vS:  deliveredValue(projects, setC, del.opaque,   exec, del, 0),   // central: no distributed-monitoring lift
    vA1: deliveredValue(projects, setC, del.verified, exec, del, 0),
    vA3: deliveredValue(projects, setD, del.opaque,   exec, del, mc),  // distributed: coverage also monitors delivery
    vA2: deliveredValue(projects, setD, del.verified, exec, del, mc),
  };
}

// Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO.
export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
  const rng = makeRng(seed);
  const acc = { O: 0, selC: 0, selD: 0, vS: 0, vA1: 0, vA3: 0, vA2: 0, n: 0 };
  for (let w = 0; w < nWorlds; w++) {
    const r = runWorld2x2(cfg, rng, delivery);
    if (!r || !(r.O > 0)) continue;
    for (const k of ['O', 'selC', 'selD', 'vS', 'vA1', 'vA3', 'vA2']) acc[k] += r[k];
    acc.n++;
  }
  const O = acc.O;
  const eff = (x) => x / O;                                 // efficiency vs the perfect-delivery oracle (parity refs at value)
  const sC = eff(acc.selC), sD = eff(acc.selD);             // SELECTION efficiencies (perfect delivery) = the E4 numbers
  const S = eff(acc.vS), A1 = eff(acc.vA1), A3 = eff(acc.vA3), A2 = eff(acc.vA2);
  // delivery efficiencies (delivered value / that arm's selection value) — reported PER ARM so the monitoring coupling
  // is visible: with mon_coupling>0 the distributed arm delivers a higher fraction than the central arm.
  const dCol = acc.selC !== 0 ? acc.vS  / acc.selC : NaN;   // central   × opaque   delivered fraction
  const dCvr = acc.selC !== 0 ? acc.vA1 / acc.selC : NaN;   // central   × verified
  const dDop = acc.selD !== 0 ? acc.vA3 / acc.selD : NaN;   // distributed × opaque
  const dDvr = acc.selD !== 0 ? acc.vA2 / acc.selD : NaN;   // distributed × verified
  return {
    n: acc.n,
    selection: { central: sC, distributed: sD },
    delivery:  { centralOpaque: dCol, centralVerified: dCvr, distributedOpaque: dDop, distributedVerified: dDvr },
    monitoringDividend: { verified: dDvr - dCvr, opaque: dDop - dCol },   // distributed − central delivered fraction
    cells: { S, A1, A3, A2 },
    // MAIN EFFECTS (percentage points of the oracle reference), read separately:
    deliveryEffect:  { atCentral: A1 - S,  atDistributed: A2 - A3 },
    selectionEffect: { atOpaque:  A3 - S,  atVerified:    A2 - A1 },
    interaction: (A2 - A1 - A3 + S),                         // >0 ⇒ verified delivery AMPLIFIES the selection gain
    full: A2 - S,                                            // full architecture vs status quo (pp of oracle)
    // composition: each cell equals its own selection efficiency times its own delivered fraction (multiplicative,
    // EXACT by construction — delivery is applied per project). The additive prediction misses by the interaction.
    multiplicativeIdentityA2: sD * dDvr,                     // == A2 to MC precision (definitional identity)
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
    safeLog('Main effects (percentage points of the oracle reference), read SEPARATELY:');
    safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)}`);
    safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)}`);
    safeLog(`  INTERACTION:       ${pct(r.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}\n`);
    safeLog('Composition — the two layers compose MULTIPLICATIVELY (exact, delivery applied per project):');
    safeLog(`  actual A2 = ${pct(r.cells.A2)}  ·  multiplicative identity (selection · delivery) = ${pct(r.multiplicativeIdentityA2)}`);
    safeLog(`  additive prediction (sum of main effects) = ${pct(r.additivePredictionA2)}  → short by the interaction.`);
    safeLog(`  The positive interaction is the level-effect signature of multiplicative composition.\n`);

    // (ii) monitoring coupling ON (step 2): distributed coverage also monitors delivery (detection + clawback).
    // Anchored coverage-only band 0.0–0.20 (fragile evidence); headline 0.15.
    const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_coupling: 0.15 } });
    safeLog('Monitoring coupling (step 2) — distributed coverage also fiscalizes delivery (mon_coupling=0.15, anchored band 0.0–0.20):');
    safeLog(`  delivered fraction, distributed − central:  opaque ${pct(rc.monitoringDividend.opaque)} · verified ${pct(rc.monitoringDividend.verified)} (saturated)`);
    safeLog(`  weak-control cell A3 (distributed selection, opaque delivery) rises ${pct(r.cells.A3)} → ${pct(rc.cells.A3)} as coverage substitutes for the missing control layer.`);
    safeLog(`  coupling sweep across the anchored band (opaque monitoring dividend):`);
    for (const c of [0.0, 0.05, 0.10, 0.15, 0.20]) {
      const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_coupling: c } });
      safeLog(`     mon_coupling ${c.toFixed(2)}  →  dividend(opaque) ${pct(rr.monitoringDividend.opaque)}  ·  A3 ${pct(rr.cells.A3)}`);
    }
    safeLog(`  → the dividend is a GENUINE (non-structural) super-multiplicativity, largest where formal control is weakest.\n`);

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
