// E4 v1.14 — the THREE anchored scenarios (research/e4-plausible-anchors.md). Each scenario is a full config; we
// report m ± 95% CI. PRO-CENTRAL is the central's best plausible case AND the continuity anchor (should reproduce
// the earlier ~0.025 near-parity). PROBABLE is the evidence/theory-anchored expectable case. PRO-DISTRIBUTED is the
// distributed's favourable case. Run: node scripts/simulation/e4-v5/scenarios.mjs
import { baseConfig } from './contract.mjs';
import { estimand } from './engine.mjs';
import { PRO_CENTRAL, PROBABLE, PRO_DIST, SCENARIO_WORLD as WORLD } from './scenario-configs.mjs';

const NW = 800;
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
