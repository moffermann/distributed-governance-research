// E5 delivery tests — the invariants that keep the SELECTION × DELIVERY experiment honest and E4-consistent.
// Run: npm run e5:delivery:test
import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
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
  check('perfect delivery: opaque efficiency == 1', approx(r.delivery.opaque, 1, 1e-9), `got ${r.delivery.opaque}`);
  check('perfect delivery: verified efficiency == 1', approx(r.delivery.verified, 1, 1e-9), `got ${r.delivery.verified}`);
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
  check('opaque delivery in a plausible leaky band [0.5, 0.85]', r.delivery.opaque > 0.5 && r.delivery.opaque < 0.85, `got ${r.delivery.opaque}`);
  check('verified delivery near-complete [0.90, 0.99]', r.delivery.verified > 0.90 && r.delivery.verified < 0.99, `got ${r.delivery.verified}`);
  check('verified delivery > opaque delivery', r.delivery.verified > r.delivery.opaque);
  check('multiplicative identity: A2 == sigma_D * delta_verified', approx(r.cells.A2, r.multiplicativePredictionA2, 1e-9), `${r.cells.A2} vs ${r.multiplicativePredictionA2}`);
  check('multiplicative fits better than additive', Math.abs(r.cells.A2 - r.multiplicativePredictionA2) < Math.abs(r.cells.A2 - r.additivePredictionA2));
  check('positive interaction (verified amplifies selection)', r.interaction > 0, `got ${r.interaction}`);
  // ordering: full architecture is the best cell, status quo the worst
  const { S, A1, A3, A2 } = r.cells;
  check('A2 is the best cell and S the worst', A2 > A1 && A2 > A3 && S < A1 && S < A3, `S=${S} A1=${A1} A3=${A3} A2=${A2}`);
  check('both main effects strictly positive', r.deliveryEffect.atCentral > 0 && r.selectionEffect.atOpaque > 0);
}

// 3) MONOTONE: strengthening the verified deterrent (more recovery) never lowers verified delivery.
{
  const stronger = { ...DELIVERY, verified: { ...DELIVERY.verified, r: 0.9 } };
  const base = delivered2x2(cfg, { nWorlds: NW });
  const strong = delivered2x2(cfg, { nWorlds: NW, delivery: stronger });
  check('more recovery does not reduce verified delivery', strong.delivery.verified >= base.delivery.verified - 1e-9);
}

console.log(`\nE5 delivery: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
