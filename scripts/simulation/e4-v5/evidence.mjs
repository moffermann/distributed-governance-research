// E4 v1.14 — the exclusive evidence path (`npm run e4:evidence`). v7: the GLOBAL "report everything" object is a
// uniform Monte-Carlo over the ANCHORED scenario envelope (per knob = [min,max] of the three anchored scenarios in
// research/e4-plausible-anchors.md) — a DEFENSIBLE box, not the arbitrary raw D_F (uniform over a too-wide D_F would
// distort the sign fraction). It reports: the PROBABLE headline point m ± 95% CI, and across the plausible envelope
// the DISTRIBUTION of m (p5/p50/p95) and the VOLUME fraction where each institution wins (with binomial SE). Sign is
// classified from those volume fractions. Every output byte is routed through the sole embargo adapter.
import { fileURLToPath } from 'node:url';
import { THETA, NUM, CLASSIFY, EVIDENCE, baseConfig, resolvedHash, contractHash, inRalpha, CONTRACT_VERSION } from './contract.mjs';
import { estimand, makeRng } from './engine.mjs';
import { PRO_CENTRAL, PROBABLE, PRO_DIST, SCENARIO_WORLD as WORLD } from './scenario-configs.mjs';
import { renderReport, assertNoEmbargoedTokens } from './adapter.mjs';
import { validateOutput } from './schema.mjs';

const SEED = NUM.seed.value;
const SWEPT = Object.keys(PROBABLE);   // the knobs varied by the anchored scenarios
const ENV = Object.fromEntries(SWEPT.map((k) => {
  const vals = [PRO_CENTRAL[k], PROBABLE[k], PRO_DIST[k]].filter((v) => v !== undefined);
  return [k, [Math.min(...vals), Math.max(...vals)]];
}));

const MANIFEST = {
  contract_version: CONTRACT_VERSION, contract_hash: contractHash(), world: WORLD, seed: SEED,
  probable_nw: EVIDENCE.probable_nw, sweep_nw: EVIDENCE.sweep_nw, n_env: EVIDENCE.n_env,
  swept: SWEPT, envelope: ENV, fixed: EVIDENCE.fixed,
  o_min_frac: CLASSIFY.o_min_frac.value, delta: CLASSIFY.delta.value, zero_tol: CLASSIFY.zero_tol.value,
  estimand: 'ratio-of-sums Sum(D-C)/Sum(O) over kept worlds; headline = PROBABLE scenario m+-CI; global = uniform MC over the anchored envelope -> sign VOLUME fractions (with SE) + m distribution p5/p50/p95',
};
const THETA_ID = 'e4v7+' + resolvedHash(MANIFEST);

const pctl = (arr, q) => { if (!arr.length) return NaN; const a = [...arr].sort((x, y) => x - y); const i = Math.min(a.length - 1, Math.max(0, Math.round(q * (a.length - 1)))); return a[i]; };

// uniform Monte-Carlo over the anchored envelope: fraction of samples where each arm wins (volume, with SE) + m dist.
function envelopeSweep(nWorlds, n) {
  const base = { ...baseConfig(), ...WORLD };
  const rng = makeRng((SEED ^ 0x5bd1e995) >>> 0);
  const ms = []; let pos = 0, neg = 0, par = 0, resolved = 0;
  const zt = CLASSIFY.zero_tol.value;
  for (let i = 0; i < n; i++) {
    const cfg = { ...base, ...PROBABLE };
    for (const k of SWEPT) cfg[k] = ENV[k][0] + (ENV[k][1] - ENV[k][0]) * rng.u();
    const r = estimand(cfg, { nWorlds, seed: SEED });
    if (!r.enough || !Number.isFinite(r.m_hat)) continue;
    resolved++; ms.push(r.m_hat);
    if (r.m_hat > zt) pos++; else if (r.m_hat < -zt) neg++; else par++;
  }
  const share = (c) => (resolved ? c / resolved : NaN);
  const se = (p) => (resolved ? Math.sqrt(Math.max(0, p * (1 - p)) / resolved) : NaN);
  return { resolved, n, distShare: share(pos), centShare: share(neg), parShare: share(par),
    distShareSE: se(share(pos)), p5: pctl(ms, 0.05), p50: pctl(ms, 0.50), p95: pctl(ms, 0.95),
    enough: resolved >= EVIDENCE.n_env * 0.5 };
}

export function classify({ point, dfEnv, ralphaHeadline, pi_deg, enough }) {
  const d = CLASSIFY.delta.value;
  let sign_status;
  if (dfEnv.distShare > 0 && dfEnv.centShare > 0) sign_status = 'indeterminate';
  else if (dfEnv.distShare > 0 && dfEnv.centShare === 0) sign_status = 'pos';
  else if (dfEnv.centShare > 0 && dfEnv.distShare === 0) sign_status = 'neg';
  else sign_status = 'zero-touching';
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
  if (!inRalpha(base, ['N', 'K'])) throw new Error('[evidence] world N/K outside declared R_alpha');
  const pt = estimand({ ...base, ...PROBABLE }, { nWorlds: EVIDENCE.probable_nw, seed: SEED });   // PROBABLE headline
  if (!pt.enough) throw new Error(`[evidence] probable point insufficient: ${pt.n_kept} kept — aborting fail-closed`);

  const env = envelopeSweep(EVIDENCE.sweep_nw, EVIDENCE.n_env);
  if (env.resolved === 0) throw new Error('[evidence] envelope sweep has no resolved samples — aborting fail-closed');

  const st = classify({ point: pt, dfEnv: env, ralphaHeadline: pt.ci, pi_deg: pt.pi_deg, enough: pt.enough });
  const out = {
    contract_version: CONTRACT_VERSION, theta_id: THETA_ID, pi_deg: pt.pi_deg,
    m_hat: pt.m_hat, ci: pt.ci,
    df_dist_share: env.distShare, df_cent_share: env.centShare, df_par_share: env.parShare, df_dist_share_se: env.distShareSE,
    ...st,
  };
  const errs = validateOutput(out);
  if (errs.length) throw new Error('[evidence] output invalid: ' + errs.join('; '));
  return { out, env, pt, manifest: MANIFEST };
}

function main() {
  const { out, env, pt } = buildEvidence();
  const P = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  const sh = (x) => (100 * x).toFixed(0) + '%';
  const text = [
    `E4 evidence — contract ${out.contract_version} — θ:${out.theta_id}`,
    `  PROBABLE scenario (evidence-anchored) headline: m = ${P(out.m_hat)}  95% CI [${P(out.ci[0])}, ${P(out.ci[1])}]   Core v0 ${P(pt.dOverO)} of oracle · central ${P(pt.cOverO)}`,
    `  across the anchored plausible envelope (${env.resolved}/${env.n} resolved):`,
    `    m distribution: p5 ${P(env.p5)} · median ${P(env.p50)} · p95 ${P(env.p95)}`,
    `    Core v0 wins ${sh(env.distShare)} of the plausible envelope (± ${sh(env.distShareSE)} SE) · central ${sh(env.centShare)} · parity ${sh(env.parShare)}`,
    `    (knobs sampled independently, so the coordinated all-central-favourable corner — PRO-CENTRAL, ≈parity — has`,
    `     ~zero measure and is essentially never drawn: random plausible mixtures favour Core v0; reaching parity needs that corner)`,
    `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
    `  π_deg: ${sh(out.pi_deg)}   contract hash: ${MANIFEST.contract_hash}`,
    `  (three named scenarios & frontiers: npm run e4:scenarios / e4:frontier — see research/e4-plausible-anchors.md)`,
  ].join('\n');
  assertNoEmbargoedTokens(text);
  console.log(text);
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
