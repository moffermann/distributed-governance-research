// E5 delivery tests — the invariants that keep the SELECTION × DELIVERY experiment honest and E4-consistent.
// Run: npm run e5:delivery:test
import { delivered2x2, sweepOpaque, DELIVERY } from './e5-delivery.mjs';
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
  const perfect = { pi_hon: 1, loss_hon: 0,
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
  // SANITY (separate run: RNG stream diverges by the extra executor draws, so only MC-close): selection efficiencies
  // reproduce the E4 headline (~98.2% distributed / ~44.2% central) within Monte-Carlo tolerance.
  check('perfect delivery: selection efficiencies ~ E4 headline (MC tol)', approx(r.selection.distributed, e4.dOverO, 5e-3) && approx(r.selection.central, e4.cOverO, 5e-3), `D ${r.selection.distributed} vs ${e4.dOverO}; C ${r.selection.central} vs ${e4.cOverO}`);
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

// 3) MONITORING COUPLING (step 2): turning it on gives the distributed arm a genuine delivery dividend, largest in the
//    weak-control (opaque) regime; it lifts A3 and never lowers any distributed cell.
{
  const off = delivered2x2(cfg, { nWorlds: NW });
  const on  = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_coupling: 0.35 } });
  check('coupling ON ⇒ positive opaque monitoring dividend', on.monitoringDividend.opaque > 0.02, `got ${on.monitoringDividend.opaque}`);
  check('coupling lifts the weak-control cell A3', on.cells.A3 > off.cells.A3 + 1e-6, `${off.cells.A3} -> ${on.cells.A3}`);
  check('coupling does not lower the full-architecture cell A2', on.cells.A2 >= off.cells.A2 - 1e-6);
  check('dividend largest where control is weakest (opaque > verified)', on.monitoringDividend.opaque >= on.monitoringDividend.verified - 1e-9);
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

console.log(`\nE5 delivery: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
