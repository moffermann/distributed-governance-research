// E5 delivery tests — the invariants that keep the SELECTION × DELIVERY experiment honest and E4-consistent.
// Run: npm run e5:delivery:test
import { delivered2x2, sweepOpaque, replicateSeeds, jointSweep, validateDelivery, DELIVERY } from './e5-delivery.mjs';
import { baseConfig } from './contract.mjs';
import { estimand } from './engine.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';

let pass = 0, fail = 0;
const approx = (a, b, tol) => Math.abs(a - b) <= tol;
function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }

const cfg = { ...baseConfig(), ...W, ...PROBABLE };
const NW = 1200;

// 1) PERFECT DELIVERY reduces E5 to E4 selection: both regimes deliver 1.0 (pi_hon=1, loss=0) => every cell equals its
//    selection efficiency, delivery effects and interaction vanish, and the cells match the E4 engine's own D/O, C/O.
{
  const perfect = { pi_hon: 1, loss_hon: 0, tempt_tail: 0,   // tempt_tail is now REQUIRED — state "no tail" explicitly
    opaque:   { p_det: 0, a: 0, r: 0, rep: 0 },
    verified: { p_det: 0, a: 0, r: 0, rep: 0 } };
  const r = delivered2x2(cfg, { nWorlds: NW, delivery: perfect });
  const e4 = estimand(cfg, { nWorlds: NW });
  check('perfect delivery: opaque efficiency == 1', approx(r.delivery.centralOpaque, 1, 1e-9), `got ${r.delivery.centralOpaque}`);
  check('perfect delivery: verified efficiency == 1', approx(r.delivery.centralVerified, 1, 1e-9), `got ${r.delivery.centralVerified}`);
  check('perfect delivery: delivery effect ~ 0 (central)', approx(r.deliveryEffect.atCentral, 0, 1e-9));
  check('perfect delivery: delivery effect ~ 0 (distributed)', approx(r.deliveryEffect.atDistributed, 0, 1e-9));
  check('perfect delivery: interaction ~ 0', approx(r.interaction, 0, 1e-9), `got ${r.interaction}`);
  // EXACT (same run): every cell equals its own selection efficiency when delivery is perfect.
  check('perfect delivery: distributed cell == its selection efficiency', approx(r.cells.A2, r.selection.distributed, 1e-9), `${r.cells.A2} vs ${r.selection.distributed}`);
  check('perfect delivery: central cell == its selection efficiency', approx(r.cells.S, r.selection.central, 1e-9), `${r.cells.S} vs ${r.selection.central}`);
  // EXACT cross-check: with executors on a SEPARATE PRNG stream, E5's world stream is identical to the E4 estimand's,
  // so the selection efficiencies match the E4 engine's D/O and C/O to full precision (the RNG-separation invariant).
  check('perfect delivery: selection efficiencies == E4 D/O, C/O (exact)', approx(r.selection.distributed, e4.dOverO, 1e-9) && approx(r.selection.central, e4.cOverO, 1e-9), `D ${r.selection.distributed} vs ${e4.dOverO}; C ${r.selection.central} vs ${e4.cOverO}`);
}

// 2) DEFAULT regimes: leakage bands are literature-plausible, and the joint cell is EXACTLY multiplicative
//    (delivery fraction is selection-independent by construction => value = selection · delivery, to MC precision).
{
  const r = delivered2x2(cfg, { nWorlds: NW });
  check('opaque delivery in a plausible leaky band [0.5, 0.85]', r.delivery.centralOpaque > 0.5 && r.delivery.centralOpaque < 0.85, `got ${r.delivery.centralOpaque}`);
  check('verified delivery near-complete [0.90, 0.99]', r.delivery.centralVerified > 0.90 && r.delivery.centralVerified < 0.99, `got ${r.delivery.centralVerified}`);
  check('verified delivery > opaque delivery', r.delivery.centralVerified > r.delivery.centralOpaque);
  check('multiplicative identity: A2 == sigma_D * delta_verified', approx(r.cells.A2, r.multiplicativeIdentityA2, 1e-9), `${r.cells.A2} vs ${r.multiplicativeIdentityA2}`);
  check('multiplicative fits better than additive', Math.abs(r.cells.A2 - r.multiplicativeIdentityA2) < Math.abs(r.cells.A2 - r.additivePredictionA2));
  check('positive interaction (verified amplifies selection)', r.interaction > 0, `got ${r.interaction}`);
  // ordering: full architecture is the best cell, status quo the worst
  const { S, A1, A3, A2 } = r.cells;
  check('A2 is the best cell and S the worst', A2 > A1 && A2 > A3 && S < A1 && S < A3, `S=${S} A1=${A1} A3=${A3} A2=${A2}`);
  check('both main effects strictly positive', r.deliveryEffect.atCentral > 0 && r.selectionEffect.atOpaque > 0);
  // with coupling OFF, delivery is selection-independent: distributed and central delivered fractions match.
  check('coupling OFF ⇒ no monitoring dividend', approx(r.monitoringDividend.opaque, 0, 5e-3) && approx(r.monitoringDividend.verified, 0, 5e-3), `op ${r.monitoringDividend.opaque} vr ${r.monitoringDividend.verified}`);
}

// 3) MONITORING COUPLING (step 2), SPLIT into detection + recovery: community detection alone gives only a small
//    opaque dividend; adding institutional recovery linkage makes it larger. Never lowers a distributed cell.
{
  const off  = delivered2x2(cfg, { nWorlds: NW });
  const det  = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
  const both = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
  check('detection-only coupling lifts A3 (small)', det.cells.A3 > off.cells.A3 - 1e-9);
  check('recovery linkage gives a larger opaque dividend than detection alone', both.monitoringDividend.opaque > det.monitoringDividend.opaque + 1e-6, `det ${det.monitoringDividend.opaque} both ${both.monitoringDividend.opaque}`);
  check('coupling does not lower the full-architecture cell A2', both.cells.A2 >= off.cells.A2 - 1e-6);
  check('dividend largest where control is weakest (opaque ≥ verified)', both.monitoringDividend.opaque >= both.monitoringDividend.verified - 1e-9);
}

// 4) MONOTONE: strengthening the verified deterrent (more recovery) never lowers verified delivery.
{
  const stronger = { ...DELIVERY, verified: { ...DELIVERY.verified, r: 0.9 } };
  const base = delivered2x2(cfg, { nWorlds: NW });
  const strong = delivered2x2(cfg, { nWorlds: NW, delivery: stronger });
  check('more recovery does not reduce verified delivery', strong.delivery.centralVerified >= base.delivery.centralVerified - 1e-9);
}

// 5) SWEEP: a worse opaque status quo widens the delivery effect and the full-architecture gain (monotone).
{
  const rows = sweepOpaque(cfg, { nWorlds: 600 });
  let mono = true;
  for (let i = 1; i < rows.length; i++) if (rows[i].full < rows[i - 1].full - 1e-3) mono = false;
  check('sweep: full-architecture gain grows monotonically as opaque leak worsens', mono);
  check('sweep: coverage wins (full > 0) across the whole opaque band', rows.every((x) => x.full > 0));
}

// 6) VALIDATION: fail-closed on out-of-domain delivery params (Codex robustness item).
{
  const throws = (del) => { try { validateDelivery(del); return false; } catch { return true; } };
  check('validateDelivery accepts the default config', validateDelivery(DELIVERY) === true);
  check('validateDelivery rejects pi_hon > 1', throws({ ...DELIVERY, pi_hon: 1.4 }));
  check('validateDelivery rejects negative val_risk', throws({ ...DELIVERY, val_risk: -0.1 }));
  check('validateDelivery rejects NaN val_risk', throws({ ...DELIVERY, val_risk: NaN }));
  check('validateDelivery rejects NaN gamma in a regime', throws({ ...DELIVERY, verified: { ...DELIVERY.verified, gamma: NaN } }));
  check('validateDelivery rejects a MISSING rep (would make the deterrent NaN)', throws({ ...DELIVERY, verified: { p_det: 0.75, a: 0.2, r: 0.5, gamma: 0.1 } }));
  check('validateDelivery rejects a missing regime', throws({ ...DELIVERY, opaque: undefined }));
  check('delivered2x2 validates its delivery arg', (() => { try { delivered2x2(cfg, { nWorlds: 10, delivery: { ...DELIVERY, mon_detect: 2 } }); return false; } catch { return true; } })());
  // Adversarial R2 #4: the grand-corruption tail is part of the validated contract — negative/oversized/NaN AND a
  // MISSING tail are rejected (a config that omits it silently ran the old zero-tail DGP).
  check('validateDelivery rejects negative tempt_tail', throws({ ...DELIVERY, tempt_tail: -0.1 }));
  check('validateDelivery rejects tempt_tail > 1', throws({ ...DELIVERY, tempt_tail: 1.5 }));
  check('validateDelivery rejects NaN tempt_tail', throws({ ...DELIVERY, tempt_tail: NaN }));
  check('validateDelivery rejects a MISSING tempt_tail (would silently run the zero-tail DGP)', throws({ ...DELIVERY, tempt_tail: undefined }));
  // Adversarial R2 verify #3: budgetScale is a validated primitive in [0,1].
  check('delivered2x2 rejects budgetScale > 1 (overfunding)', (() => { try { delivered2x2(cfg, { nWorlds: 10, budgetScale: 1.2 }); return false; } catch { return true; } })());
  check('delivered2x2 rejects negative budgetScale', (() => { try { delivered2x2(cfg, { nWorlds: 10, budgetScale: -0.1 }); return false; } catch { return true; } })());
  check('delivered2x2 rejects NaN budgetScale', (() => { try { delivered2x2(cfg, { nWorlds: 10, budgetScale: NaN }); return false; } catch { return true; } })());
}

// 6b) TEMPTATION-TAIL CONTRACT (Adversarial R2 #4): the verified regime's diversion is LOW-but-NONZERO by construction —
//     the grand-corruption tail keeps a residual that strong control does not erase, and this must NOT silently return
//     to zero. Pin nonzero verified incidence at the DEFAULT and at the R=0 stress; pin that removing the tail zeroes it.
{
  const r  = delivered2x2(cfg, { nWorlds: NW });
  const r0 = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
  const noTail = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, tempt_tail: 0.0 } });
  check('default: verified diversion is nonzero but small (grand-corruption tail residual)', r.diversionIncidence.A1 > 0 && r.diversionIncidence.A1 < 0.10, `got ${r.diversionIncidence.A1}`);
  check('R=0 stress: verified diversion stays nonzero (deterrent weaker, tail still bites)', r0.diversionIncidence.A1 > r.diversionIncidence.A1, `r0 ${r0.diversionIncidence.A1} vs r ${r.diversionIncidence.A1}`);
  check('removing the tail (tempt_tail=0) collapses verified diversion to EXACTLY zero (det>1 ⇒ U(0,1) never diverts)', approx(noTail.diversionIncidence.A1, 0, 1e-12), `noTail ${noTail.diversionIncidence.A1}`);
  check('the full-architecture gain is robust to whether the tail is on', Math.abs(r.full - noTail.full) < 0.03);
}

// 7) VALUE-RISK robustness: value/complexity-correlated delivery risk does not systematically undo coverage — the
//    per-arm delivery gap stays small and the full gain stays clearly positive across the band.
{
  const base = delivered2x2(cfg, { nWorlds: NW });
  const vr   = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, val_risk: 0.6 } });
  check('value risk keeps the per-arm opaque delivery gap small', Math.abs(vr.delivery.distributedOpaque - vr.delivery.centralOpaque) < 0.03);
  check('value risk keeps the full gain clearly positive', vr.full > 0.4, `got ${vr.full}`);
  check('value risk barely moves the full gain vs base', Math.abs(vr.full - base.full) < 0.05);
}

// 8) GLOBAL robustness: 20-seed replication is tight; the joint LHS sweep has coverage winning across the space.
{
  const rep = replicateSeeds(cfg, { nSeeds: 8, nWorlds: 200 });
  check('multi-seed replication (8 seeds): between-seed sd is small', rep.sd < 0.03, `sd ${rep.sd}`);
  check('multi-seed replication: mean full gain is materially positive', rep.mean > 0.4, `mean ${rep.mean}`);
  const js = jointSweep(cfg, { nSamples: 24, nWorlds: 150 });
  check('joint LHS sweep: full architecture wins in the large majority of sampled draws', js.shareArchitectureWins > 0.9, `share ${js.shareArchitectureWins}`);
  check('joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority', js.shareCoverageWins > 0.9, `share ${js.shareCoverageWins}`);
  check('joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity', js.min > -0.1, `min ${js.min}`);
}

console.log(`\nE5 delivery: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
