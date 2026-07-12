// E4 v1.14 — the exclusive evidence path (`npm run e4:evidence`). v6: replaces the 4-key corners slice with a
// declared fixed-vs-uncertain split, a joint envelope over the UNCERTAIN set (incl. the coordinates Codex showed
// flip the sign: p, sigma_e), endpoint Monte-Carlo uncertainty, a fixed-coordinate flip check, a resolved+hashed
// evidence manifest, and a repaired state machine (set-based materiality, degeneracy/sufficiency aborts). Every
// output byte is routed through the sole embargo adapter.
import { fileURLToPath } from 'node:url';
import { THETA, NUM, CLASSIFY, ALPHA_LEVELS, EVIDENCE, baseConfig, resolvedHash, inRalpha, CONTRACT_VERSION } from './contract.mjs';
import { estimand, makeRng } from './engine.mjs';
import { renderReport, assertNoEmbargoedTokens } from './adapter.mjs';
import { validateOutput } from './schema.mjs';

// All evidence-governing settings come from the contract's EVIDENCE block (single source of truth, hashed into theta_id).
const WORLD = EVIDENCE.world, SWEEP_NW = EVIDENCE.sweep_nw, BASE_NW = EVIDENCE.base_nw, N_RANDOM = EVIDENCE.n_random;
const SEED = NUM.seed.value;
const UNCERTAIN = EVIDENCE.uncertain, FIXED_CHECK = EVIDENCE.fixed_check;

const MANIFEST = {
  contract_version: CONTRACT_VERSION, world: WORLD, seed: SEED,
  base_nw: BASE_NW, sweep_nw: SWEEP_NW, n_random: N_RANDOM,
  uncertain: UNCERTAIN, fixed_check: FIXED_CHECK,
  o_min_frac: CLASSIFY.o_min_frac.value, delta: CLASSIFY.delta.value, zero_tol: CLASSIFY.zero_tol.value,
  alpha_levels: ALPHA_LEVELS, alpha_width: EVIDENCE.alpha_width, headline_alpha: EVIDENCE.headline_alpha,
  estimand: 'ratio-of-sums Sum(D-C)/Sum(O) over kept worlds (O>o_min); sign backbone = sign SHARES (count of resolved sample points, NOT a probability) over the joint D_F; magnitude = m over joint R_alpha sensitivity boxes',
  optimizer: 'joint corners + center + N_RANDOM uniform interior samples over the UNCERTAIN box; one-at-a-time FIXED_CHECK flip probe (a sampled envelope may still under-cover interior extrema)',
};
const THETA_ID = 'e4v6+' + resolvedHash(MANIFEST);

// sample points over a box: 2^k corners (k<=8) + center + N_RANDOM uniform interior points (seeded, reproducible).
function samplePoints(bx, nRandom) {
  const keys = Object.keys(bx), pts = [], n = 1 << keys.length;
  for (let m = 0; m < n; m++) { const p = {}; keys.forEach((k, bi) => { p[k] = (m >> bi & 1) ? bx[k][1] : bx[k][0]; }); pts.push(p); }
  const c = {}; keys.forEach((k) => { c[k] = 0.5 * (bx[k][0] + bx[k][1]); }); pts.push(c);
  const rng = makeRng((SEED ^ 0x5bd1e995) >>> 0);
  for (let i = 0; i < nRandom; i++) { const p = {}; keys.forEach((k) => { p[k] = bx[k][0] + (bx[k][1] - bx[k][0]) * rng.u(); }); pts.push(p); }
  return pts;
}
const boxOf = (keys, kind) => Object.fromEntries(keys.map((k) => [k, [...THETA[k][kind]]]));
function scaleBand([lo, hi], factor, clip) { const c = 0.5 * (lo + hi), h = 0.5 * (hi - lo) * factor; return [Math.max(c - h, clip[0]), Math.min(c + h, clip[1])]; }
const ralphaBoxOf = (keys, alpha) => Object.fromEntries(keys.map((k) => [k, scaleBand(THETA[k].ralpha, EVIDENCE.alpha_width[String(alpha)], THETA[k].df)]));

// envelope of m over a joint box (min/max across corners+center+random interior). Sample points with too few
// retained worlds (degenerate: O mostly below the relative floor) are SKIPPED and counted, so exploding ratios
// cannot set the envelope; if any point is skipped the envelope is flagged not-fully-resolved.
function envelope(base, bx, nWorlds, oMinAbs) {
  const zt = CLASSIFY.zero_tol.value;
  let lo = Infinity, hi = -Infinity, argLo = null, argHi = null, skipped = 0, total = 0, nPos = 0, nNeg = 0, nPar = 0;
  for (const p of samplePoints(bx, N_RANDOM)) {
    total++;
    const r = estimand({ ...base, ...p }, { nWorlds, seed: SEED, oMinAbs });
    if (!r.enough || !Number.isFinite(r.m_hat)) { skipped++; continue; }
    if (r.m_hat < lo) { lo = r.m_hat; argLo = { ...p }; }
    if (r.m_hat > hi) { hi = r.m_hat; argHi = { ...p }; }
    if (r.m_hat > zt) nPos++; else if (r.m_hat < -zt) nNeg++; else nPar++;
  }
  const resolved = total - skipped;
  return { lo, hi, argLo, argHi, skipped, total, enough: skipped === 0, resolvedCells: resolved,
    distShare: resolved ? nPos / resolved : NaN, centShare: resolved ? nNeg / resolved : NaN, parShare: resolved ? nPar / resolved : NaN };
}

// one-at-a-time flip probe over the held FIXED_CHECK coordinates: does any single held coord, moved to a D_F
// endpoint, flip the base sign? (Codex: omitted coordinates reverse sign.)
function fixedFlipProbe(base, oMinAbs) {
  const flips = [];
  const zt = CLASSIFY.zero_tol.value;
  const m0 = estimand(base, { nWorlds: SWEEP_NW, seed: SEED, oMinAbs }).m_hat;
  const s0 = Math.sign(m0);
  for (const k of FIXED_CHECK) {
    for (const end of THETA[k].df) {
      const r = estimand({ ...base, [k]: end }, { nWorlds: SWEEP_NW, seed: SEED, oMinAbs });
      if (r.enough && Number.isFinite(r.m_hat) && Math.abs(r.m_hat) > zt && Math.sign(r.m_hat) !== s0) flips.push(`${k}=${end}→${(100 * r.m_hat).toFixed(0)}%`);
    }
  }
  return flips;
}

export function classify({ point, dfEnv, ralphaHeadline, pi_deg, enough }) {
  const d = CLASSIFY.delta.value;
  // sign backbone over D_F from the SIGN SHARES of resolved corners (magnitude over D_F is not meaningful —
  // an arm can deliver large negative value, so (D−C)/O is unbounded there; only the sign pattern is reported).
  let sign_status;
  if (dfEnv.distShare > 0 && dfEnv.centShare > 0) sign_status = 'indeterminate';
  else if (dfEnv.distShare > 0 && dfEnv.centShare === 0) sign_status = 'pos';
  else if (dfEnv.centShare > 0 && dfEnv.distShare === 0) sign_status = 'neg';
  else sign_status = 'zero-touching';
  // set-based materiality over the headline R_alpha interval (NOT the base-point CI)
  const [rl, rh] = ralphaHeadline;
  let materiality_status;
  if (rl > d || rh < -d) materiality_status = 'material';
  else if (rl > -d && rh < d) materiality_status = 'negligible';
  else materiality_status = 'uncertain';
  const degeneracy_status = pi_deg >= 1 ? 'degenerate' : (pi_deg > CLASSIFY.pi_deg_warn.value ? 'high' : 'ok');
  const numerical_status = (enough && dfEnv.enough && (point.ci[1] - point.ci[0]) < d) ? 'resolved' : 'unresolved';
  return { sign_status, materiality_status, degeneracy_status, numerical_status };
}

export function buildEvidence() {
  const base = { ...baseConfig(), ...WORLD };
  if (!inRalpha({ ...base }, ['N', 'K'])) throw new Error('[evidence] world N/K outside declared R_alpha');
  const pt = estimand(base, { nWorlds: BASE_NW, seed: SEED });
  if (!pt.enough) throw new Error(`[evidence] base point insufficient: only ${pt.n_kept} kept worlds (< ${NUM.min_kept_worlds.value}) — aborting fail-closed`);
  // per-corner relative o_min (each cell drops its own O≈0 worlds); the ratio-of-sums estimand is scale-robust, so a
  // single shared floor is unnecessary and would over-exclude naturally low-value corners.
  const oMinAbs = null;

  const dfEnv = envelope(base, boxOf(UNCERTAIN, 'df'), SWEEP_NW, oMinAbs);
  if (dfEnv.resolvedCells === 0) throw new Error('[evidence] D_F envelope has no resolved cells — aborting fail-closed');

  const m_Ralpha = {};
  for (const al of ALPHA_LEVELS) { const e = envelope(base, ralphaBoxOf(UNCERTAIN, al), SWEEP_NW, oMinAbs); m_Ralpha[String(al)] = [e.lo, e.hi]; }
  const ralphaHeadline = m_Ralpha[String(MANIFEST.headline_alpha)];

  const flips = fixedFlipProbe(base, oMinAbs);
  const st = classify({ point: pt, dfEnv, ralphaHeadline, pi_deg: pt.pi_deg, enough: pt.enough });

  const out = {
    contract_version: CONTRACT_VERSION, theta_id: THETA_ID, pi_deg: pt.pi_deg,
    m_hat: pt.m_hat, ci: pt.ci,
    df_dist_share: dfEnv.distShare, df_cent_share: dfEnv.centShare, df_par_share: dfEnv.parShare,
    m_Ralpha, ...st,
  };
  const errs = validateOutput(out);
  if (errs.length) throw new Error('[evidence] output invalid: ' + errs.join('; '));
  return { out, dfEnv, flips, manifest: MANIFEST };
}

// ---- render everything through the sole embargo adapter (no bypassing lines) ----
function main() {
  const { out, dfEnv, flips } = buildEvidence();
  const notRobust = out.df_dist_share > 0 && out.df_cent_share > 0;
  const extra = [
    '',
    `  D_F sign backbone over UNCERTAIN {${MANIFEST.uncertain.join(', ')}}:`,
    `    resolved corners: ${dfEnv.resolvedCells}/${dfEnv.total} (${dfEnv.skipped} skipped as degenerate)`,
    `    → the winner is ${notRobust ? 'NOT sign-robust across the full physically-possible set (both institutions win in some corners)' : 'sign-robust across the resolved corners'}`,
    `  fixed-coordinate flip probe over {${MANIFEST.fixed_check.join(', ')}}: ${flips.length ? 'SIGN FLIPS: ' + flips.join(', ') : 'no held coordinate flips the base sign'}`,
    `  manifest hash: ${out.theta_id}`,
  ];
  const full = renderReport(out) + '\n' + extra.join('\n');
  assertNoEmbargoedTokens(full);          // the WHOLE artifact, not just the core report
  console.log(full);
}
// run the (slow) sweep only when executed directly, so importing classify/buildEvidence for tests does not trigger it.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
