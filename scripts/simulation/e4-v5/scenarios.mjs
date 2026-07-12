// E4 v1.14 — the THREE anchored scenarios (research/e4-plausible-anchors.md). Each scenario is a full config; we
// report m ± 95% CI. PRO-CENTRAL is the central's best plausible case AND the continuity anchor (should reproduce
// the earlier ~0.025 near-parity). PROBABLE is the evidence/theory-anchored expectable case. PRO-DISTRIBUTED is the
// distributed's favourable case. Run: node scripts/simulation/e4-v5/scenarios.mjs
import { baseConfig } from './contract.mjs';
import { estimand } from './engine.mjs';

const WORLD = { N: 1500, K: 150 };
const NW = 800;

const PROBABLE = { a_V: 0.5, b_V: 3.5, p: 0.15, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
  s_exp: 2.5, b_H_C: 0.5, w: 0.5, a: 0.2, b: 0.9, beta: 0.35, lambda: 0.15, zeta: 0.6, gamma: 0.5,
  sigma_e: 0.5, sigma_C: 0.5 };
// CONTINUITY ANCHOR (central's realistic best case): PROBABLE but with harm-myopia OFF and a competent central
// (sees harm broadly, low bias/projection, no credit distortion). Isolates the mechanism → should reproduce ~parity
// (the earlier symmetry-gate ~0.025 regime): "remove the myopia and the distributed advantage collapses".
const PRO_CENTRAL = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
// PRO-DISTRIBUTED: favourable but NOT stacked to catastrophe (moderate harm so C is not absurdly negative).
const PRO_DIST = { a_V: 0.25, b_V: 4.5, p: 0.40, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
  s_exp: 4.0, b_H_C: 0.25, w: 1.1, a: 0.4, b: 0.75, beta: 0.12, lambda: 0.30, zeta: 0.4, gamma: 0.8,
  sigma_e: 0.25, sigma_C: 0.7 };

const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
function run(name, over) {
  const r = estimand({ ...baseConfig(), ...WORLD, ...over }, { nWorlds: NW });
  console.log(`${name.padEnd(16)} m = ${pct(r.m_hat).padStart(8)}  95% CI [${pct(r.ci[0])}, ${pct(r.ci[1])}]   Core v0 delivers ${pct(r.dOverO)} of oracle · central ${pct(r.cOverO)}`);
  return r;
}

console.log('E4 — three anchored scenarios (m = D/O − C/O, signed fraction of full-information oracle, parity at 0)\n');
run('PRO-CENTRAL', PRO_CENTRAL);
run('PROBABLE', PROBABLE);
run('PRO-DISTRIBUTED', PRO_DIST);
console.log('\nContinuity: PRO-CENTRAL removes harm-myopia → should collapse toward parity (the ~0.025 regime).');
console.log('Read C/O < 0 as: under that scenario the central funds net-harmful projects (destroys value).');
