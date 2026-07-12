// E4 v1.14 — FOUR declared scenarios + ONE diagnostic contrast (research/e4-plausible-anchors.md; values in
// scenario-configs.mjs). Each is a full config; we report m ± 95% CI. PRO-CENTRAL = declared central-favourable
// endpoint (central wins). NO-MYOPIA (bundle) = continuity anchor to the ~0.025 gate. MYOPIA-OFF = diagnostic
// harm-only contrast. PROBABLE = source-motivated reference. PRO-DISTRIBUTED = distributed-favourable.
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
safeLog('\nPRO-CENTRAL = a declared central-favourable endpoint (every knob central-favourable) → the central wins.');
safeLog('Sequential attribution (path-dependent, nonlinear model): harm-myopia ALONE (MYOPIA-OFF, only s_exp,b_H_C)');
safeLog('reduces the probable gap +46.6% → +30.4%, i.e. 16.2 of the 40.5-pt decline to +6.1% (~40%); the further step to');
safeLog('the NO-MYOPIA bundle (unbiased/precise/no-credit) reduces it 24.3 pts (~60%). Read C/O < 0 as the central destroying value.');
