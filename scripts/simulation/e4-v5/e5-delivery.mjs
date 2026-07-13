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
export const DELIVERY = {
  pi_hon:   0.70,   // intrinsically-honest share of executors (structural prior; the rest face the incentive condition)
  loss_hon: 0.05,   // honest/deterred production loss (delivered = 1 − loss_hon)
  opaque:   { p_det: 0.10, a: 0.90, r: 0.00, rep: 0.00, note: 'weak control: low detection, unprotected advances, no recovery/reputation' },
  verified: { p_det: 0.75, a: 0.20, r: 0.50, rep: 0.50, note: 'architecture: milestone-gated advances, recovery, reputational stake' },
};

function deterrent(reg) { return reg.p_det * ((1 - reg.a * (1 - reg.r)) + reg.rep); }

// Per-project delivered fraction under a regime, given the executor's honest flag and temptation draw.
function deliveredFraction(reg, honest, tempt, del) {
  if (honest) return 1 - del.loss_hon;
  const diverts = tempt > deterrent(reg);            // opportunistic: divert iff temptation beats the deterrent
  if (!diverts) return 1 - del.loss_hon;
  const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance
  return f < 0 ? 0 : f;
}

// Delivered value of a funded set under a regime, reusing per-project executor draws (shared across all four cells so
// the comparison is on identical executors/temptations — the design's "matched seeds").
function deliveredValue(projects, funded, reg, exec, del) {
  let v = 0;
  for (const j of funded) v += projects[j].S * deliveredFraction(reg, exec.honest[j], exec.tempt[j], del);
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

  return {
    O,
    selC, selD,                                            // selection value at perfect delivery (= the E4 arms)
    vS:  deliveredValue(projects, setC, del.opaque,   exec, del),
    vA1: deliveredValue(projects, setC, del.verified, exec, del),
    vA3: deliveredValue(projects, setD, del.opaque,   exec, del),
    vA2: deliveredValue(projects, setD, del.verified, exec, del),
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
  // implied delivery efficiencies (delivered value / selection value) per regime
  const dOpaque   = acc.selC !== 0 ? acc.vS  / acc.selC : NaN;   // ≈ portfolio-mean delivered fraction, opaque
  const dVerified = acc.selD !== 0 ? acc.vA2 / acc.selD : NaN;   // ≈ portfolio-mean delivered fraction, verified
  return {
    n: acc.n,
    selection: { central: sC, distributed: sD },
    delivery:  { opaque: dOpaque, verified: dVerified },
    cells: { S, A1, A3, A2 },
    // MAIN EFFECTS (percentage points of the oracle reference), read separately:
    deliveryEffect:  { atCentral: A1 - S,  atDistributed: A2 - A3 },
    selectionEffect: { atOpaque:  A3 - S,  atVerified:    A2 - A1 },
    interaction: (A2 - A1 - A3 + S),                         // >0 ⇒ verified delivery AMPLIFIES the selection gain
    full: A2 - S,                                            // full architecture vs status quo (pp of oracle)
    // composition test: does the joint cell equal the product of the two efficiencies? (multiplicative) vs the sum of
    // the two main effects (additive)? The gap between them IS the interaction.
    multiplicativePredictionA2: sD * dVerified,
    additivePredictionA2: S + (A1 - S) + (A3 - S),
  };
}

function main() {
  const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  const cfgBase = baseConfig();
  // Use the PROBABLE anchored scenario (realistic coverage composition + anchored central handicaps) as the world,
  // so the selection layer matches the E4 headline; delivery is the new layer on top.
  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
    const cfg = { ...cfgBase, ...W, ...PROBABLE };
    const r = delivered2x2(cfg, { nWorlds: 1200 });
    safeLog('E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).');
    safeLog('Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.\n');
    safeLog(`worlds kept: ${r.n}`);
    safeLog(`SELECTION efficiency (perfect delivery, = E4):  central ${pct(r.selection.central)} · distributed ${pct(r.selection.distributed)}`);
    safeLog(`DELIVERY efficiency (delivered/selected):        opaque ${pct(r.delivery.opaque)} · verified ${pct(r.delivery.verified)}\n`);
    safeLog('Four-cell delivered value as a fraction of the oracle reference:');
    safeLog(`                       opaque delivery     verified delivery`);
    safeLog(`  central selection    S  ${pct(r.cells.S).padStart(7)}          A1 ${pct(r.cells.A1).padStart(7)}`);
    safeLog(`  distributed sel.     A3 ${pct(r.cells.A3).padStart(7)}          A2 ${pct(r.cells.A2).padStart(7)}\n`);
    safeLog('Main effects (percentage points of the oracle reference), read SEPARATELY:');
    safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)}`);
    safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)}`);
    safeLog(`  INTERACTION:       ${pct(r.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}\n`);
    safeLog('Composition — additive vs multiplicative (the experiment decides):');
    safeLog(`  actual A2 = ${pct(r.cells.A2)}`);
    safeLog(`  additive prediction (sum of main effects)      = ${pct(r.additivePredictionA2)}`);
    safeLog(`  multiplicative prediction (σ_D · δ_verified)   = ${pct(r.multiplicativePredictionA2)}`);
    const multGap = Math.abs(r.cells.A2 - r.multiplicativePredictionA2);
    const addGap  = Math.abs(r.cells.A2 - r.additivePredictionA2);
    safeLog(`  → the ${multGap < addGap ? 'MULTIPLICATIVE' : 'ADDITIVE'} model fits better (|gap| ${pct(multGap)} vs ${pct(addGap)}).`);
    safeLog(`     The positive interaction is the signature of multiplicative composition: value = selection · delivery.`);
  });
}
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
