// E4 v1.14 — acceptance fixtures (capability criterion) + embargo self-tests. Run: npm run e4:test
// Proves the pipeline SURFACES a strong distributed win, a strong central win, and a null when each is the ground
// truth — i.e. results are surfaced, not selected-in or washed out. Plus: the closed schema + embargo reject
// forbidden multiplier/ratio notation.
import { baseConfig, validateConfig } from './contract.mjs';
import { estimand } from './engine.mjs';
import { assertNoEmbargoedTokens } from './adapter.mjs';
import { validateOutput } from './schema.mjs';

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
// BOUNDARY: partial myopia + moderate voice => small-magnitude, pipeline must run & stay finite.
{
  const val = m({ s_exp: 1, b_H_C: 0.5, beta: 0.4, lambda: 0.1 });
  check('FIX boundary => finite & modest', Number.isFinite(val) && Math.abs(val) < 0.5, `m=${val.toFixed(3)}`);
}

// ---- Embargo: reject multiplier/ratio notation in rendered text ----
const rejects = (txt) => { try { assertNoEmbargoedTokens(txt); return false; } catch { return true; } };
check('EMBARGO rejects "2.2x"', rejects('gain of 2.2x'));
check('EMBARGO rejects Unicode "2.2×"', rejects('gain of 2.2×'));
check('EMBARGO rejects "D/C"', rejects('ratio D/C = 1.4'));
check('EMBARGO allows clean percent text', !rejects('m̂ is 45.7% of the oracle, parity at 0'));

// ---- Closed schema: reject an extra field / missing required ----
const CLEAN = { contract_version: 'x', theta_id: 't', pi_deg: 0, m_hat: 0.1, ci: [0.05, 0.15], df_dist_share: 0.7, df_cent_share: 0.3, sign_status: 'indeterminate', materiality_status: 'material', degeneracy_status: 'ok', numerical_status: 'resolved' };
check('SCHEMA rejects extra field (ratio smuggling)', validateOutput({ ...CLEAN, ratio_D_over_C: 2.2 }).length > 0);
check('SCHEMA rejects non-finite m_hat', validateOutput({ ...CLEAN, m_hat: Infinity }).length > 0);
check('SCHEMA accepts a clean output', validateOutput(CLEAN).length === 0);

// ---- Fail-closed config: unknown parameter throws ----
{
  let threw = false;
  try { validateConfig({ ...baseConfig(), bogus_param: 1 }); } catch { threw = true; }
  check('CONTRACT fail-closed on unknown parameter', threw);
}

console.log(`\n${ok ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);
process.exit(ok ? 0 : 1);
