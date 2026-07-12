// E4 v1.14 — acceptance fixtures (capability criterion) + embargo self-tests. Run: npm run e4:test
// Proves the pipeline SURFACES a strong distributed win, a strong central win, and a null when each is the ground
// truth — i.e. results are surfaced, not selected-in or washed out. Plus: the closed schema + embargo reject
// forbidden multiplier/ratio notation.
import { execSync } from 'node:child_process';
import { baseConfig, validateConfig, CLASSIFY } from './contract.mjs';
import { estimand } from './engine.mjs';
import { assertNoEmbargoedTokens } from './adapter.mjs';
import { validateOutput } from './schema.mjs';
import { classify } from './evidence.mjs';

const WORLD = { N: 900, K: 120 };
const NW = 500;
let ok = true;
const check = (name, cond, detail) => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); ok = ok && cond; };
const m = (over) => estimand({ ...baseConfig(), ...WORLD, ...over }, { nWorlds: NW }).m_hat;

// ---- Acceptance fixtures: ground truth known by construction ----
// STRONG DISTRIBUTED: central near-blind on the long tail (s_exp high), modest voice suppression => distributed wins big.
{
  const val = m({ s_exp: 4, b_H_C: 0.3, beta: 0.3, lambda: 0.15 });
  check('FIX strong-distributed => m materially > 0', val > 0.10, `m=${val.toFixed(3)}`);
}
// STRONG CENTRAL: central competent (gate=1, sees harm, low noise, no credit tilt), distributed crippled
// (opponents silenced, low participation, noisy) => central wins.
{
  const val = m({ s_exp: 0, b_H_C: 1, a: 0, w: 0, b: 1, sigma_C: 0.05, lambda: 0, beta: 0.9, p: 0.05, sigma_e: 1.5 });
  check('FIX strong-central => m < 0 (central wins)', val < -0.03, `m=${val.toFixed(3)}`);
}
// NULL: both arms near the oracle => negligible gap.
{
  const val = m({ s_exp: 0, b_H_C: 1, a: 0, w: 0, b: 1, sigma_C: 0.02, lambda: 0, beta: 0, p: 1, sigma_e: 0 });
  check('FIX null => |m| negligible', Math.abs(val) < 0.03, `m=${val.toFixed(4)}`);
}
// BOUNDARY: a genuine near-parity case. Under Core-v0-faithful universal participation the fully-idealized central
// endpoint (PRO_CENTRAL) is the near-parity/tie point (~ −1.4%), not NO_MYOPIA (which is ~+14%).
{
  const { PRO_CENTRAL } = await import('./scenario-configs.mjs');
  const val = m(PRO_CENTRAL);
  check('FIX boundary (near-parity at idealized central endpoint) => |m| small', Number.isFinite(val) && Math.abs(val) < 0.10, `m=${val.toFixed(3)}`);
}

// ---- Attribution: the distributed advantage must be driven by harm myopia ----
// Removing opposition (pi_opp=0 => no harm to be blind to) should SHRINK the distributed advantage.
{
  const withHarm = m({ s_exp: 4, b_H_C: 0.3, beta: 0.3, pi_opp: 0.25 });
  const noHarm  = m({ s_exp: 4, b_H_C: 0.3, beta: 0.3, pi_opp: 0.0 });
  check('ATTRIB harm channel drives the advantage (m falls when pi_opp->0)', withHarm > noHarm + 0.02, `m(pi_opp=.25)=${withHarm.toFixed(3)} > m(pi_opp=0)=${noHarm.toFixed(3)}`);
}

// ---- State machine (classify) tested DIRECTLY, not bypassed ----
const pt = (ci) => ({ ci });
check('CLASSIFY both-sign corners => indeterminate', classify({ point: pt([0.4, 0.5]), dfEnv: { distShare: 0.6, centShare: 0.3 }, ralphaHeadline: [0.1, 0.2], pi_deg: 0, enough: true }).sign_status === 'indeterminate');
check('CLASSIFY all-distributed corners => pos', classify({ point: pt([0.4, 0.5]), dfEnv: { distShare: 1, centShare: 0 }, ralphaHeadline: [0.1, 0.2], pi_deg: 0, enough: true }).sign_status === 'pos');
check('CLASSIFY R_alpha within band => negligible', classify({ point: pt([-0.01, 0.01]), dfEnv: { distShare: 0.5, centShare: 0.5 }, ralphaHeadline: [-0.01, 0.02], pi_deg: 0, enough: true }).materiality_status === 'negligible');
check('CLASSIFY R_alpha straddling delta => uncertain', classify({ point: pt([0, 0.2]), dfEnv: { distShare: 1, centShare: 0 }, ralphaHeadline: [0.01, 0.2], pi_deg: 0, enough: true }).materiality_status === 'uncertain');
check('CLASSIFY pi_deg=1 => degenerate', classify({ point: pt([0, 0]), dfEnv: { distShare: 1, centShare: 0 }, ralphaHeadline: [0.1, 0.2], pi_deg: 1, enough: false }).degeneracy_status === 'degenerate');
check('CLASSIFY insufficient => numerical unresolved', classify({ point: pt([0.4, 0.5]), dfEnv: { distShare: 1, centShare: 0, enough: false }, ralphaHeadline: [0.1, 0.2], pi_deg: 0, enough: false }).numerical_status === 'unresolved');

// ---- Legacy release guard: the retired engine must refuse to run without the reproduction flag ----
{
  let guarded = false;
  try { execSync('node scripts/simulation/e4-v4-symmetric-frontier.mjs', { stdio: 'pipe' }); }
  catch (e) { guarded = e.status === 2; }
  check('LEGACY guard blocks e4-v4 from running (would feed retired D/C)', guarded);
}
// ---- Universal legacy guard: EVERY retired top-level sim engine must carry the guard (rev-repro H3) ----
{
  const { readdirSync, readFileSync } = await import('node:fs');
  const dir = 'scripts/simulation';
  const unguarded = readdirSync(dir).filter((f) => f.endsWith('.mjs'))
    .filter((f) => !readFileSync(`${dir}/${f}`, 'utf8').includes('E4_ALLOW_LEGACY'));
  check('LEGACY all retired top-level engines are guarded', unguarded.length === 0, unguarded.length ? 'UNGUARDED: ' + unguarded.join(', ') : `${readdirSync(dir).filter((f) => f.endsWith('.mjs')).length} guarded`);
}

// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----
{
  const { PRO_CENTRAL, NO_MYOPIA, MYOPIA_OFF, PROBABLE, PRO_DIST } = await import('./scenario-configs.mjs');
  const sm = (over) => estimand({ ...baseConfig(), N: 800, K: 120, ...over }, { nWorlds: 300 }).m_hat;
  const mc = sm(PRO_CENTRAL), mn = sm(NO_MYOPIA), mo = sm(MYOPIA_OFF), mp = sm(PROBABLE), md = sm(PRO_DIST);
  check('SCENARIO ordering pinned (central ~parity < no-myopia < myopia-off < probable < distributed)',
    mc < 0.02 && mc > -0.15 && mc < mn && mn > 0.05 && mn < mo && mo < mp && mp > 0.40 && md > mp,
    `PRO_CENTRAL=${mc.toFixed(2)} NO_MYOPIA=${mn.toFixed(2)} MYOPIA_OFF=${mo.toFixed(2)} PROBABLE=${mp.toFixed(2)} PRO_DIST=${md.toFixed(2)}`);
}

// ---- Condition 1 (balanced degradation): the central's harm-myopia effect must DOMINATE the distributed arm's
//      signal-quality-composition effect. Both arms carry a modeled degradation; the central's must be >> the
//      distributed's, or the comparison is not honest. ----
{
  const { PROBABLE, MYOPIA_OFF } = await import('./scenario-configs.mjs');
  const sm = (over) => estimand({ ...baseConfig(), N: 800, K: 120, ...over }, { nWorlds: 300 }).m_hat;
  const mp = sm(PROBABLE);
  const mPure = sm({ ...PROBABLE, f_active: 1.0, f_deleg: 0.0, phi_prof: 1.0, k_deleg: 1.0, d_bias: 0.0 }); // no distributed degradation
  const mHarm = sm(MYOPIA_OFF);            // harm-gate ALONE (2 coords) — the genuine harm-myopia contrast, not the 8-coord bundle
  const noiseEff = mp - mPure;             // signed: the realistic composition should not swing m much
  const harmGateEff = mp - mHarm;          // signed: turning off harm-myopia should REDUCE the coverage advantage (>0)
  // signed/locality diagnostics (NOT a circular magnitude ratio): the harm-gate effect is positive & material, and the
  // distributed signal-noise effect stays inside the materiality band and below the harm-gate effect.
  check('CONDITION1 harm-gate effect positive & material; distributed noise effect small & smaller',
    harmGateEff > CLASSIFY.delta.value && Math.abs(noiseEff) < CLASSIFY.delta.value && harmGateEff > Math.abs(noiseEff),
    `noise=${(100 * noiseEff).toFixed(1)}pts harmGate=${(100 * harmGateEff).toFixed(1)}pts`);
}

// ---- E5 multi-layer: with the delivery/budget channels OFF (default), E5 reduces EXACTLY to the E4 selection
//      result (the central is granted zero admin cost + zero leakage). Turning the central's cost/leakage ON grows
//      the coverage gap, sign preserved; the channel decomposition is exact (no hidden conflation). ----
{
  const { layeredEstimand } = await import('./e5-layers.mjs');
  const { PROBABLE } = await import('./scenario-configs.mjs');
  const base = { ...baseConfig(), N: 800, K: 120, ...PROBABLE };
  const off = layeredEstimand(base, { nWorlds: 300 });
  check('E5 layers OFF => m5 == selection (reduces to E4)', Math.abs(off.m5 - off.m_selection) < 1e-12 && off.layersOff,
    `m5=${off.m5.toFixed(4)} sel=${off.m_selection.toFixed(4)}`);
  const withCost = layeredEstimand({ ...base, kappa_C: 0.4, kappa_D: 0.1 }, { nWorlds: 300 });
  check('E5 admin cost ON (kappa_C>kappa_D) grows the coverage gap (sign preserved)', withCost.m5 > off.m5 && withCost.m_admin > 0,
    `m5 ${off.m5.toFixed(3)} -> ${withCost.m5.toFixed(3)}`);
  const w = layeredEstimand({ ...base, kappa_C: 0.4, kappa_D: 0.1, leak_C: 0.3, leak_D: 0.1 }, { nWorlds: 300 });
  check('E5 channel decomposition is exact (no hidden conflation)',
    Math.abs(w.m5 - (w.m_selection + w.m_admin + w.m_leak + w.interaction)) < 1e-12,
    `resid=${(w.m5 - (w.m_selection + w.m_admin + w.m_leak + w.interaction)).toExponential(1)}`);
}

// ---- Embargo: reject multiplier/ratio notation in rendered text ----
const rejects = (txt) => { try { assertNoEmbargoedTokens(txt); return false; } catch { return true; } };
check('EMBARGO rejects "2.2x"', rejects('gain of 2.2x'));
check('EMBARGO rejects Unicode "2.2×"', rejects('gain of 2.2×'));
check('EMBARGO rejects Cyrillic "2.2х"', rejects('gain of 2.2х'));
check('EMBARGO rejects "✕" cross', rejects('gain of 2.2✕'));
check('EMBARGO rejects "2.2-fold"', rejects('a 2.2-fold gain'));
check('EMBARGO rejects "2.2 times"', rejects('2.2 times more value'));
check('EMBARGO rejects word "two-fold"', rejects('a two-fold advantage'));
check('EMBARGO rejects "twice"', rejects('twice as much value'));
check('EMBARGO rejects "double"', rejects('double the delivered value'));
check('EMBARGO rejects lowercase "d/c"', rejects('the d/c ratio'));
check('EMBARGO rejects zero-width-split "2.2​x"', rejects('gain of 2.2​x'));
check('EMBARGO rejects "fourfold"', rejects('a fourfold increase'));
check('EMBARGO rejects "two times"', rejects('two times more value'));
check('EMBARGO rejects HTML "&times;"', rejects('gain of 2.2&times;'));
check('EMBARGO rejects word-joiner-split "2.2⁠x"', rejects('gain of 2.2⁠x'));
check('EMBARGO rejects "D/C"', rejects('ratio D/C = 1.4'));
check('EMBARGO allows clean percent text', !rejects('m̂ is 45.7% of the oracle, parity at 0'));

// ---- Closed schema: reject an extra field / missing required ----
const CLEAN = { contract_version: 'x', theta_id: 't', pi_deg: 0, m_hat: 0.1, ci: [0.05, 0.15], df_dist_share: 0.7, df_cent_share: 0.3, df_par_share: 0.0, sign_status: 'indeterminate', materiality_status: 'material', degeneracy_status: 'ok', numerical_status: 'resolved' };
check('SCHEMA rejects extra field (ratio smuggling)', validateOutput({ ...CLEAN, ratio_D_over_C: 2.2 }).length > 0);
check('SCHEMA rejects non-finite m_hat', validateOutput({ ...CLEAN, m_hat: Infinity }).length > 0);
const { df_par_share: _dropPar, ...NO_PAR } = CLEAN;
check('SCHEMA rejects missing df_par_share (renderer field)', validateOutput(NO_PAR).length > 0);
check('SCHEMA rejects inverted ci [lo>hi]', validateOutput({ ...CLEAN, ci: [0.2, 0.1] }).length > 0);
check('SCHEMA rejects win-shares summing > 1', validateOutput({ ...CLEAN, df_dist_share: 0.8, df_cent_share: 0.8 }).length > 0);
check('SCHEMA rejects scalar m_Ralpha (must be object)', validateOutput({ ...CLEAN, m_Ralpha: 5 }).length > 0);
check('SCHEMA accepts a clean output', validateOutput(CLEAN).length === 0);

// ---- Fail-closed config: unknown parameter throws ----
{
  let threw = false;
  try { validateConfig({ ...baseConfig(), bogus_param: 1 }); } catch { threw = true; }
  check('CONTRACT fail-closed on unknown parameter', threw);
}

console.log(`\n${ok ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);
process.exit(ok ? 0 : 1);
