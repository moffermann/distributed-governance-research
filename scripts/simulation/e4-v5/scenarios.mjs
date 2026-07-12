// E4 v1.14 — the THREE anchored scenarios (research/e4-plausible-anchors.md). Each scenario is a full config; we
// report m ± 95% CI. PRO-CENTRAL is the central's best plausible case AND the continuity anchor (should reproduce
// the earlier ~0.025 near-parity). PROBABLE is the evidence/theory-anchored expectable case. PRO-DISTRIBUTED is the
// distributed's favourable case. Run: node scripts/simulation/e4-v5/scenarios.mjs
import { baseConfig } from './contract.mjs';
import { safeLog } from './adapter.mjs';
import { estimand } from './engine.mjs';
import { PRO_CENTRAL, NO_MYOPIA, MYOPIA_OFF, PROBABLE, PRO_DIST, SCENARIO_WORLD as WORLD } from './scenario-configs.mjs';

const NW = 800;
const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
function run(name, over) {
  const r = estimand({ ...baseConfig(), ...WORLD, ...over }, { nWorlds: NW });
  safeLog(`${name.padEnd(16)} m = ${pct(r.m_hat).padStart(8)}  95% CI [${pct(r.ci[0])}, ${pct(r.ci[1])}]   Core v0 delivers ${pct(r.dOverO)} of oracle · central ${pct(r.cOverO)}`);
  return r;
}

safeLog('E4 — anchored scenarios (m = D/O − C/O, signed fraction of full-information oracle, parity at 0)\n');
run('PRO-CENTRAL', PRO_CENTRAL);      // central's FULL best plausible case — central WINS
run('PROBABLE', PROBABLE);           // source-motivated declared reference
run('MYOPIA-OFF', MYOPIA_OFF);       // GENUINE myopia-only contrast (only s_exp,b_H_C change) — attributes the harm channel ALONE
run('NO-MYOPIA', NO_MYOPIA);         // harm-aware AND competent bundle — continuity anchor to the ~0.025 gate
run('PRO-DISTRIBUTED', PRO_DIST);
safeLog('\nPRO-CENTRAL = central\'s FULL best plausible case (every knob central-favourable) → the central wins.');
safeLog('Attribution (honest): harm-myopia ALONE (MYOPIA-OFF, only s_exp,b_H_C) moves PROBABLE +46.6% → ~+30% — most of the');
safeLog('advantage but not all. NO-MYOPIA (harm sight PLUS unbiased/precise/no-credit) reaches ~+6%, the ~0.025-gate regime;');
safeLog('the extra collapse is added central competence, NOT harm myopia alone. Read C/O < 0 as the central destroying value.');
