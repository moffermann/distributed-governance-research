// E4 v1.14 — MACHINE-READABLE MODEL CONTRACT (single source of truth)
// Codex's single sharpest improvement: one versioned, outcome-blind contract that is the ONLY path to evidence.
// It enumerates theta_all, numerical constants, joint D_F / R_alpha sets, o_min/delta, classification thresholds,
// and the closed output schema. `validate()` throws on unknown or unused fields. Nothing in the engine may use a
// literal that is not registered here.
//
// Param `kind`:
//   physical    — a real quantity with a hard physical domain; D_M\D_F is genuine impossibility (prob in [0,1], sd>=0)
//   directional — a theory-backed sign assumption (w,b,b_H_C,gamma >= 0). NOT a physical law: base case keeps the
//                 sign, but a sign-reversal RIVAL model is reported as sensitivity (author decision 2026-07-11).
//   structural  — a shape/location parameter (means, spreads, counts)
//   numerical   — a solver/Monte-Carlo constant
//   normative   — a declared normative choice (aggregation A); never randomized

export const CONTRACT_VERSION = 'e4-v5.0.0';

// Each entry: { value, kind, dm:[lo,hi], df:[lo,hi], ralpha:[lo,hi], note }
// dm = mathematical domain; df = physically-possible (sign backbone); ralpha = expectable band (magnitude headline).
export const THETA = {
  // ---- population & projects (structural) ----
  N:      { value: 4000, kind: 'structural', dm: [1, Infinity],   df: [100, 100000], ralpha: [1000, 20000], note: 'population size' },
  K:      { value: 200,  kind: 'structural', dm: [2, Infinity],   df: [20, 5000],    ralpha: [80, 800],     note: 'candidate projects' },
  m_q:    { value: 0.4,  kind: 'structural', dm: [-Infinity, Infinity], df: [-5, 5],  ralpha: [0.0, 1.0],    note: 'mean project quality (mean scale)' },
  s_q:    { value: 1.0,  kind: 'physical',   dm: [0, Infinity],   df: [0, 10],       ralpha: [0.5, 2.0],    note: 'sd of project quality' },
  a_V:    { value: 0.5,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [0.3, 1.0],    note: 'visibility Beta a (a<1 => heavy tail toward 0)' },
  b_V:    { value: 3.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [1.5, 6.0],    note: 'visibility Beta b (mass on low-visibility long tail)' },
  zeta:   { value: 0.6,  kind: 'physical',   dm: [-1, 1],         df: [0, 1],        ralpha: [0.3, 0.85],   note: 'corr(category signal g, quality q)' },
  c_lo:   { value: 1.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.01, 1e6],   ralpha: [0.5, 2.0],    note: 'min cost' },
  c_hi:   { value: 5.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.01, 1e6],   ralpha: [3.0, 10.0],   note: 'max cost' },
  a_r:    { value: 1.2,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [0.8, 3.0],    note: 'reach Beta a' },
  b_r:    { value: 8.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [4.0, 20.0],   note: 'reach Beta b (most projects reach a minority)' },
  phi:    { value: 0.35, kind: 'physical',   dm: [0, 1],          df: [0.01, 0.99],  ralpha: [0.2, 0.6],    note: 'budget share of total cost' },

  // ---- individual value & ANTI-VALUE (opposition != indifference) ----
  sigma:   { value: 1.0,  kind: 'physical', dm: [0, Infinity], df: [0, 10],   ralpha: [0.5, 2.0],  note: 'sd of idiosyncratic taste eps' },
  pi_opp:  { value: 0.15, kind: 'physical', dm: [0, 1],        df: [0, 1],    ralpha: [0.03, 0.35], note: 'prevalence of intense opponents' },
  mu_opp:  { value: 3.0,  kind: 'physical', dm: [0, Infinity], df: [0, 50],   ralpha: [1.0, 6.0],  note: 'mean opposition intensity (Exponential)' },

  // ---- distributed arm (coverage) ----
  p:       { value: 0.25, kind: 'physical', dm: [0, 1], df: [1e-3, 1], ralpha: [0.05, 0.6], note: 'participation prob (report if support)' },
  beta:    { value: 0.40, kind: 'physical', dm: [0, 1], df: [0, 1],    ralpha: [0.1, 0.7],  note: 'adverse-voice suppression of opponents' },
  sigma_e: { value: 0.5,  kind: 'physical', dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of report noise' },

  // ---- central arm (salience-gated harm myopia) ----
  v_p0:    { value: 0.6,  kind: 'structural',  dm: [-Infinity, Infinity], df: [-5, 5], ralpha: [-0.5, 1.5], note: "planner's own baseline position" },
  gamma:   { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 5],  ralpha: [0.2, 1.2],  note: 'loading of planner projection on category signal g' },
  sigma_v: { value: 0.5,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of projection idiosyncrasy' },
  a:       { value: 0.2,  kind: 'structural',  dm: [-Infinity, Infinity], df: [-5, 5], ralpha: [-0.3, 0.8], note: 'central intercept / systematic level bias' },
  b:       { value: 0.9,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.6, 1.1],  note: 'central responsiveness to SUPPORT S+' },
  w:       { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.2, 1.0],  note: 'directional projection weight' },
  b_H_C:   { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.1, 1.0],  note: 'central harm-detection coefficient (myopia; salience-gated)' },
  s_exp:   { value: 2.0,  kind: 'physical',    dm: [0, Infinity], df: [0.2, 10], ralpha: [1.0, 4.0], note: 'harm-gate exponent: s(V)=V^s_exp (>1 => near-blind on long tail)' },
  sigma_C: { value: 0.5,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of central estimation noise eta' },

  // ---- selection ----
  h:       { value: 0.0,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0, 1.0], note: 'opportunity-cost hurdle (shared across arms)' },
  lambda:  { value: 0.15, kind: 'physical',    dm: [0, 1], df: [0, 1], ralpha: [0, 0.4], note: 'central credit-pressure weight (credit salience P = visibility V; a linear scale on P would cancel under z-scoring, so none is registered)' },
};

// Aggregation A is NORMATIVE and declared, never randomized into a prior.
export const AGGREGATION = { primary: 'mean', alternatives: ['harm_weighted'], note: 'A=mean primary; harm-weighted is a SEPARATE declared estimand' };

// ---- numerical / Monte-Carlo constants (nu_all) ----
export const NUM = {
  n_worlds:       { value: 1500, note: 'Monte-Carlo worlds per theta' },
  seed:           { value: 20260711, note: 'base PRNG seed (Date.now/Math.random forbidden)' },
  bootstrap_reps: { value: 400,  note: 'world-cluster bootstrap replications (inner variability only)' },
  ci_level:       { value: 0.95, note: 'bootstrap CI level' },
  z_fallback_sd:  { value: 1.0,  note: 'z-score sd fallback when eligible-set sd=0' },
  min_kept_frac:  { value: 0.5,  note: 'a cell is sufficient only if kept/(simulated) worlds >= this' },
  min_kept_floor: { value: 40,   note: 'and kept worlds >= this absolute floor; else numerically-unresolved/degenerate' },
};

// ---- estimand thresholds (frozen, mean-value units; NOT the retired 0.05) ----
export const CLASSIFY = {
  o_min_frac:  { value: 0.05, note: 'o_min = o_min_frac * median(O_W); worlds with O<=o_min excluded from m, counted in pi_deg' },
  delta:       { value: 0.03, note: 'materiality band on m (fraction-of-oracle units); justified in delivered-value terms, NOT the 0.05 rebuild gate' },
  zero_tol:    { value: 0.005, note: 'sign_status=zero-touching when |m|<=zero_tol or CI straddles 0 within this' },
  pi_deg_warn: { value: 0.10, note: 'degeneracy_status=high above this share' },
};

// alpha coverage family for the magnitude (R_alpha) layer
export const ALPHA_LEVELS = [0.5, 0.8, 0.95];

// ---- EVIDENCE configuration (single source of truth for the evidence run; hashed into theta_id) ----
// NOTE (2026-07-11): a v6.1 redesign is planned — report EVERYTHING via a space-filling sweep over the WHOLE
// uncertain set (incl. thesis levers a_V,b_V,s_exp; NO frozen favourable lever) + ceteris-paribus frontier locators
// (per axis: frontier location, possible values, the declared central-favourable endpoint, probable case ± CI). That rewrite is GATED on
// first anchoring each variable's probable (R_alpha) value to theory/empirics — see research/e4-plausible-anchors.md.
// Current block is the working v6 config; do not treat the swept set below as the final "everything" sweep.
export const EVIDENCE = {
  world:        { N: 1500, K: 150 },   // inside R_alpha for N,K
  probable_nw:  800,                    // worlds for the PROBABLE headline point (with CI)
  sweep_nw:     90,                     // worlds per envelope sample point
  n_env:        400,                    // uniform samples over the ANCHORED scenario envelope (defensible box, not
                                        //   arbitrary raw D_F — sampling uniform over a too-wide D_F would distort the
                                        //   sign fraction). The envelope per knob = [min,max] of the 3 anchored scenarios.
  // Held at base (not varied by the anchored scenarios): computational/cost/value-scale nuisances.
  fixed:        ['N', 'K', 'c_lo', 'c_hi', 'm_q', 's_q', 'sigma', 'sigma_v', 'v_p0', 'phi', 'h'],
};

// ---- CLOSED output schema (embargo-critical): additionalProperties:false; cannot express D/C or ratio-parity-1 ----
export const OUTPUT_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: ['contract_version', 'theta_id', 'pi_deg', 'm_hat', 'ci', 'df_dist_share', 'df_cent_share', 'sign_status', 'materiality_status', 'degeneracy_status', 'numerical_status'],
  properties: {
    contract_version:   { type: 'string' },
    theta_id:           { type: 'string' },
    pi_deg:             { type: 'number', minimum: 0, maximum: 1 },
    m_hat:              { type: 'number' },                 // Σ(D-C)/ΣO over kept worlds, a signed fraction of oracle
    ci:                 { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2 },
    df_dist_share:      { type: 'number', minimum: 0, maximum: 1 },  // SIGN over D_F: uniform-VOLUME fraction (space-filling
    df_cent_share:      { type: 'number', minimum: 0, maximum: 1 },  //   MC) where each institution wins — a real volume
    df_par_share:       { type: 'number', minimum: 0, maximum: 1 },  //   fraction, not a corner count
    df_dist_share_se:   { type: 'number', minimum: 0, maximum: 1 },  // Monte-Carlo SE of df_dist_share (binomial)
    m_Ralpha:           { type: 'object' },                 // magnitude by alpha level (measured over joint R_alpha)
    sign_status:        { enum: ['pos', 'neg', 'zero-touching', 'indeterminate'] },
    materiality_status: { enum: ['material', 'negligible', 'uncertain'] },
    degeneracy_status:  { enum: ['ok', 'high', 'degenerate'] },
    numerical_status:   { enum: ['resolved', 'unresolved'] },
  },
  // NOTE: there is deliberately NO field able to carry D/C, a ratio with parity 1, or an institution-performance
  // multiplier. The render adapter additionally rejects the tokens 'x'/'×'/'D/C' in performance context.
};

// Tokens the sole render adapter must reject in institution-performance context (ASCII x, Unicode multiplication, ratio).
export const EMBARGO_TOKENS = ['×', 'D/C', 'C/D'];

// ---------- validation: fail-closed on unknown / unused ----------
export function knownThetaKeys() { return new Set(Object.keys(THETA)); }

// Throw if a config carries any key not registered in THETA (unknown), or (optionally) if a registered key is
// missing (unused-required). Engines call this before running.
export function validateConfig(cfg, { requireAll = true } = {}) {
  const known = knownThetaKeys();
  const bad = Object.keys(cfg).filter((k) => !known.has(k));
  if (bad.length) throw new Error(`[contract] unknown parameter(s) not in THETA: ${bad.join(', ')}`);
  if (requireAll) {
    const missing = [...known].filter((k) => !(k in cfg));
    if (missing.length) throw new Error(`[contract] missing required parameter(s): ${missing.join(', ')}`);
  }
  for (const [k, v] of Object.entries(cfg)) {
    if (typeof v !== 'number' || !Number.isFinite(v)) throw new Error(`[contract] ${k} must be a finite number, got ${v}`);
    const { dm } = THETA[k];
    if (v < dm[0] || v > dm[1]) throw new Error(`[contract] ${k}=${v} outside mathematical domain [${dm[0]}, ${dm[1]}]`);
  }
  return true;
}

// Executable-domain validation (fail closed): the printed DGP is only defined on a subset of the scalar box.
// validateConfig checks names + scalar bounds; validateDomain checks the constraints that keep the DGP meaningful.
export function validateDomain(cfg) {
  const bad = [];
  const finite = (k) => { if (!Number.isFinite(cfg[k])) bad.push(`${k} not finite`); };
  for (const k of Object.keys(THETA)) finite(k);
  const intPos = (k, min) => { if (!Number.isInteger(cfg[k]) || cfg[k] < min) bad.push(`${k} must be integer >= ${min}`); };
  intPos('N', 1); intPos('K', 2);
  const pos = (k) => { if (!(cfg[k] > 0)) bad.push(`${k} must be > 0`); };
  pos('a_V'); pos('b_V'); pos('a_r'); pos('b_r');           // Beta shapes must be positive
  pos('p');                                                 // engine divides by p
  if (!(cfg.c_lo > 0)) bad.push('c_lo must be > 0');
  if (!(cfg.c_hi > cfg.c_lo)) bad.push('c_hi must be > c_lo');
  if (!(cfg.phi > 0 && cfg.phi < 1)) bad.push('phi must be in (0,1)');
  const unit = (k) => { if (cfg[k] < 0 || cfg[k] > 1) bad.push(`${k} must be in [0,1]`); };
  unit('p'); unit('beta'); unit('pi_opp'); unit('lambda');
  if (cfg.zeta < -1 || cfg.zeta > 1) bad.push('zeta must be in [-1,1]');   // zeta is a correlation, NOT a unit interval
  const nonneg = (k) => { if (cfg[k] < 0) bad.push(`${k} must be >= 0`); };
  ['s_q', 'sigma', 'mu_opp', 'sigma_e', 'sigma_v', 'sigma_C', 's_exp', 'h'].forEach(nonneg);
  if (bad.length) throw new Error(`[contract] executable-domain violation: ${bad.join('; ')}`);
  return true;
}

// Is cfg[k] within its declared expectable band R_alpha? (region membership, for manifests/labels — not fatal)
export function inRalpha(cfg, keys = Object.keys(THETA)) {
  return keys.every((k) => cfg[k] >= THETA[k].ralpha[0] && cfg[k] <= THETA[k].ralpha[1]);
}

// FNV-1a hash of an arbitrary JSON-able manifest (no Date/Math.random).
export function resolvedHash(manifest) {
  const s = JSON.stringify(manifest);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return 'fnv1a-' + h.toString(16).padStart(8, '0');
}

// Base config = registered default values.
export function baseConfig() {
  const cfg = {};
  for (const [k, spec] of Object.entries(THETA)) cfg[k] = spec.value;
  return cfg;
}

// Deterministic content hash of the frozen sets (so the joint D_F/R_alpha objects and thresholds are pinned before
// any production run). Simple FNV-1a over a canonical JSON — no Date/Math.random.
export function contractHash() {
  const canonical = JSON.stringify({ v: CONTRACT_VERSION, THETA, NUM, CLASSIFY, ALPHA_LEVELS, AGGREGATION, EVIDENCE });
  let h = 0x811c9dc5;
  for (let i = 0; i < canonical.length; i++) {
    h ^= canonical.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return 'fnv1a-' + h.toString(16).padStart(8, '0');
}

export const directionalKeys = () => Object.entries(THETA).filter(([, s]) => s.kind === 'directional').map(([k]) => k);
export const physicalKeys    = () => Object.entries(THETA).filter(([, s]) => s.kind === 'physical').map(([k]) => k);
