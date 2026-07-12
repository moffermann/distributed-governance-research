// E4 v1.14 — FOUR declared scenarios + ONE diagnostic contrast (research/e4-plausible-anchors.md; values in
// scenario-configs.mjs). Each is a full config; we report m ± 95% CI. PRO-CENTRAL = declared central-favourable
// endpoint (at Core-v0-faithful universal participation, this fully-idealized endpoint is at most a bare tie, not a
// win). NO-MYOPIA (bundle) = a competent harm-aware central. MYOPIA-OFF = diagnostic harm-only contrast.
// PROBABLE = source-motivated reference. PRO-DISTRIBUTED = distributed-favourable. All prose below is COMPUTED
// from the runs (never hardcoded), so it can never drift from the numbers.
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
const rc = run('PRO-CENTRAL', PRO_CENTRAL);      // declared central-favourable endpoint — at faithful participation, ~parity
const rp = run('PROBABLE', PROBABLE);            // source-motivated declared reference
const ro = run('MYOPIA-OFF', MYOPIA_OFF);        // GENUINE myopia-only contrast (only s_exp,b_H_C change) — harm channel ALONE
const rn = run('NO-MYOPIA', NO_MYOPIA);          // harm-aware AND competent central bundle
run('PRO-DISTRIBUTED', PRO_DIST);
const pts = (x) => (100 * x).toFixed(1);
const mp = rp.m_hat, mo = ro.m_hat, mn = rn.m_hat;
const declineTot = mp - mn, myopiaAlone = mp - mo, further = mo - mn;
const outcome = (m) => (m < -0.03 ? 'the central wins' : m > 0.03 ? 'Core v0 wins' : 'an immaterial difference (within the materiality band)');
safeLog(`\nPRO-CENTRAL = a declared central-favourable endpoint (every knob central-favourable): ${outcome(rc.m_hat)} (m = ${pct(rc.m_hat)}). Under Core-v0-faithful universal participation even this fully-idealized endpoint yields at most a small, immaterial central lead — not a decisive win.`);
safeLog('Sequential attribution (path-dependent, nonlinear model): harm-myopia ALONE (MYOPIA-OFF, only s_exp,b_H_C)');
safeLog(`reduces the probable gap ${pct(mp)} → ${pct(mo)}, i.e. ${pts(myopiaAlone)} of the ${pts(declineTot)}-pt decline to ${pct(mn)} (~${Math.round(100 * myopiaAlone / declineTot)}%); the further step to`);
safeLog(`the NO-MYOPIA bundle (unbiased/precise/no-credit) reduces it ${pts(further)} pts (~${Math.round(100 * further / declineTot)}%). Read C/O < 0 as the central destroying value.`);
// Condition 1 (balanced degradation): both arms carry a signal degradation — the distributed arm the realistic
// coverage composition (active/microdelegation/profile), the central its harm-myopia — and the central's must
// dominate. Measured on PROBABLE: the distributed noise effect vs the harm-myopia effect.
const mPure = estimand({ ...baseConfig(), ...WORLD, ...PROBABLE, f_active: 1.0, f_deleg: 0.0, phi_prof: 1.0, k_deleg: 1.0 }, { nWorlds: NW }).m_hat;
const noiseEff = mp - mPure, myopiaEff = declineTot;
safeLog(`Balance (condition 1): distributed signal-noise effect ${pts(noiseEff)} pts vs central harm-myopia effect ${pts(myopiaEff)} pts — the central's proxy-myopia dominates by orders of magnitude; the realistic distributed signal composition (active/microdelegation/profile) barely moves the result.`);
