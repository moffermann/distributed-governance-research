// E4 v1.14 — the exclusive evidence path (`npm run e4:evidence`). Produces the transport-robust partial-ID result:
// the SIGN backbone measure-free over the joint D_F, the MAGNITUDE over the joint R_alpha (coverage family), the
// point estimate m̂ with CI, the four orthogonal status fields, and a sign-reversal RIVAL sensitivity. Everything
// renders through the sole embargo adapter. Output conforms to the closed schema.
import { THETA, NUM, CLASSIFY, ALPHA_LEVELS, baseConfig, contractHash, CONTRACT_VERSION } from './contract.mjs';
import { estimand } from './engine.mjs';
import { renderReport } from './adapter.mjs';
import { validateOutput } from './schema.mjs';

// Evidence world + Monte-Carlo budget (all within D_M; smaller than contract defaults for tractable sweeps).
const WORLD = { N: 900, K: 120 };
const SWEEP_NW = 300, BASE_NW = 600, SEED = NUM.seed.value;

// Sign-critical parameters swept for the partial-ID (directional + behavioral). Joint box = independent by default
// (declared dependence: none); corners+center approximate the extrema (documented; refine with an optimizer later).
const SIGN_KEYS = ['w', 'b_H_C', 'beta', 's_exp'];

function boxPoints(box) {
  const keys = Object.keys(box), pts = [], n = 1 << keys.length;
  for (let m = 0; m < n; m++) { const p = {}; keys.forEach((k, bi) => { p[k] = (m >> bi & 1) ? box[k][1] : box[k][0]; }); pts.push(p); }
  const c = {}; keys.forEach((k) => { c[k] = 0.5 * (box[k][0] + box[k][1]); }); pts.push(c);
  return pts;
}
function mOverBox(base, box, nWorlds) {
  let lo = Infinity, hi = -Infinity;
  for (const p of boxPoints(box)) {
    const m = estimand({ ...base, ...p }, { nWorlds, seed: SEED }).m_hat;
    if (Number.isFinite(m)) { if (m < lo) lo = m; if (m > hi) hi = m; }
  }
  return { lo, hi };
}
const dfBox   = (keys) => Object.fromEntries(keys.map((k) => [k, [...THETA[k].df]]));
function scaleBand([lo, hi], factor, clip) {
  const c = 0.5 * (lo + hi), h = 0.5 * (hi - lo) * factor;
  return [Math.max(c - h, clip[0]), Math.min(c + h, clip[1])];
}
// coverage family: R_alpha (contract band) is the α=0.8 object; shrink for 0.5, widen for 0.95 (frozen rule).
const ALPHA_FACTOR = { 0.5: 0.6, 0.8: 1.0, 0.95: 1.3 };
const ralphaBox = (keys, alpha) => Object.fromEntries(keys.map((k) => [k, scaleBand(THETA[k].ralpha, ALPHA_FACTOR[alpha], THETA[k].df)]));

function classify(m_hat, ci, m_lo_DF, m_hi_DF, pi_deg) {
  const zt = CLASSIFY.zero_tol.value, d = CLASSIFY.delta.value;
  let sign_status;
  if (m_lo_DF > zt) sign_status = 'pos';
  else if (m_hi_DF < -zt) sign_status = 'neg';
  else if (m_lo_DF < -zt && m_hi_DF > zt) sign_status = 'indeterminate';
  else sign_status = 'zero-touching';
  let materiality_status;
  if (ci[0] > d || ci[1] < -d) materiality_status = 'material';
  else if (ci[0] > -d && ci[1] < d) materiality_status = 'negligible';
  else materiality_status = 'uncertain';
  const degeneracy_status = pi_deg >= 1 ? 'degenerate' : (pi_deg > CLASSIFY.pi_deg_warn.value ? 'high' : 'ok');
  const numerical_status = (ci[1] - ci[0]) < d ? 'resolved' : 'unresolved';
  return { sign_status, materiality_status, degeneracy_status, numerical_status };
}

export function buildEvidence() {
  const base = { ...baseConfig(), ...WORLD };
  const pt = estimand(base, { nWorlds: BASE_NW, seed: SEED });
  const df = mOverBox(base, dfBox(SIGN_KEYS), SWEEP_NW);
  const m_Ralpha = {};
  for (const al of ALPHA_LEVELS) { const b = mOverBox(base, ralphaBox(SIGN_KEYS, al), SWEEP_NW); m_Ralpha[String(al)] = [b.lo, b.hi]; }

  const st = classify(pt.m_hat, pt.ci, df.lo, df.hi, pt.pi_deg);
  const out = {
    contract_version: CONTRACT_VERSION,
    theta_id: 'base+' + contractHash(),
    pi_deg: pt.pi_deg,
    m_hat: pt.m_hat,
    ci: pt.ci,
    m_lo_DF: df.lo,
    m_hi_DF: df.hi,
    m_Ralpha,
    ...st,
  };
  const errs = validateOutput(out);
  if (errs.length) throw new Error('evidence output invalid: ' + errs.join('; '));

  // Sign-reversal RIVAL sensitivity (author decision: defend the direction as base case, report reversal, not exclude).
  const rivalBox = { ...dfBox(SIGN_KEYS), w: [-1.5, 3], gamma: [-2, 5] };
  const rival = mOverBox({ ...base, gamma: THETA.gamma.value }, rivalBox, SWEEP_NW);

  return { out, rival };
}

const { out, rival } = buildEvidence();
console.log(renderReport(out));
console.log(`\n  sign-reversal rival sensitivity (w,γ allowed <0): m ∈ [${(100 * rival.lo).toFixed(1)}%, ${(100 * rival.hi).toFixed(1)}%] of oracle`);
console.log(`  contract hash: ${contractHash()}`);
