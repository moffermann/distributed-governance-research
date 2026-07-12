// E4 v1.14 — fresh mean-scale engine, driven ONLY by the contract.
// Implements DESIGN_SKETCH_v5 §1-§2: anti-value (S = S+ - H), the behavioral coverage estimator (MNAR mean), and
// the central salience-gated harm-myopia model. All value quantities are per-interested-person means. Every literal
// the engine uses comes from the contract; validateConfig() is called before any run (fail-closed).

import { THETA, NUM, CLASSIFY, validateConfig } from './contract.mjs';

// ---------------- seeded PRNG (Date.now / Math.random forbidden for reproducibility) ----------------
export function makeRng(seed) {
  let s = seed >>> 0;
  const u = () => { // mulberry32
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  let spare = null;
  const normal = () => { // Box-Muller with cached spare
    if (spare !== null) { const v = spare; spare = null; return v; }
    let a = u(); if (a < 1e-12) a = 1e-12;
    const b = u();
    const r = Math.sqrt(-2 * Math.log(a)), th = 2 * Math.PI * b;
    spare = r * Math.sin(th);
    return r * Math.cos(th);
  };
  const exponential = (mean) => -mean * Math.log(1 - u() + 1e-12);
  const gamma = (k) => { // Marsaglia-Tsang
    if (k < 1) return gamma(k + 1) * Math.pow(u() + 1e-12, 1 / k);
    const d = k - 1 / 3, c = 1 / Math.sqrt(9 * d);
    for (;;) {
      let x, v;
      do { x = normal(); v = 1 + c * x; } while (v <= 0);
      v = v * v * v;
      const uu = u();
      if (uu < 1 - 0.0331 * x * x * x * x) return d * v;
      if (Math.log(uu + 1e-12) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
    }
  };
  const beta = (a, b) => { const ga = gamma(a), gb = gamma(b); return ga / (ga + gb); };
  const binomialApprox = (n, prob) => {
    if (n <= 0 || prob <= 0) return 0;
    if (prob >= 1) return n;
    const m = n * prob, sd = Math.sqrt(n * prob * (1 - prob));
    return Math.max(0, Math.min(n, Math.round(m + sd * normal())));
  };
  return { u, normal, exponential, gamma, beta, binomialApprox };
}

// ---------------- world generation (one economy of projects) ----------------
// Returns an array of admissible projects, each with true net value S, cost c, and the three arms' signals.
export function generateWorld(cfg, rng) {
  const projects = [];
  for (let j = 0; j < cfg.K; j++) {
    const q = cfg.m_q + cfg.s_q * rng.normal();
    const V = rng.beta(cfg.a_V, cfg.b_V);                       // visibility in [0,1], heavy-tailed toward 0
    const qStd = cfg.s_q > 0 ? (q - cfg.m_q) / cfg.s_q : 0;
    const g = cfg.zeta * qStd + Math.sqrt(Math.max(0, 1 - cfg.zeta * cfg.zeta)) * rng.normal();
    const c = cfg.c_lo + (cfg.c_hi - cfg.c_lo) * rng.u();
    const r = rng.beta(cfg.a_r, cfg.b_r);
    const n = rng.binomialApprox(cfg.N, r);
    if (n === 0) continue;                                      // inadmissible in ALL arms (dropped, counted below)

    let sumPos = 0, sumNeg = 0, sumReport = 0;
    for (let i = 0; i < n; i++) {
      let u = q + cfg.sigma * rng.normal();
      if (rng.u() < cfg.pi_opp) u -= rng.exponential(cfg.mu_opp);   // intense-minority opposition
      if (u >= 0) sumPos += u; else sumNeg += -u;
      const reportProb = u >= 0 ? cfg.p : cfg.p * (1 - cfg.beta);
      if (rng.u() < reportProb) sumReport += (u + cfg.sigma_e * rng.normal()) / cfg.p;
    }
    const Splus = sumPos / n;                                   // support (mean of positive parts)
    const H = sumNeg / n;                                       // harm (mean opposition intensity)
    const S = Splus - H;                                        // true net value (mean scale)
    const M_D = sumReport / n;                                  // behavioral coverage estimator; E[M_D|u]=S+ -(1-beta)H

    const v_pj = cfg.v_p0 + cfg.gamma * g + cfg.sigma_v * rng.normal();
    const sV = Math.pow(Math.max(0, Math.min(1, V)), cfg.s_exp);// harm gate: ~0 on long tail, ~1 when salient
    const M_C = cfg.a + cfg.b * Splus + cfg.w * (v_pj - Splus) - cfg.b_H_C * sV * H + cfg.sigma_C * rng.normal();

    const P = cfg.rho_P * V;                                    // visible salience -> credit
    projects.push({ S, c, M_C, M_D, P });
  }
  return projects;
}

// ---------------- selection: one common interface for all three arms ----------------
function zscore(vals, fallbackSd) {
  const n = vals.length;
  if (n === 0) return [];
  const mean = vals.reduce((s, x) => s + x, 0) / n;
  let v = 0; for (const x of vals) v += (x - mean) * (x - mean);
  let sd = Math.sqrt(v / n);
  if (!(sd > 0)) sd = fallbackSd;
  return vals.map((x) => (x - mean) / sd);
}

// Fund greedily by rank score among the arm's own eligible set, under budget, exact residual fill, tie-break lower j.
function fundedValue(projects, signalKey, cfg, budget, opts = {}) {
  const idx = [];
  for (let j = 0; j < projects.length; j++) {
    const x = projects[j][signalKey];
    if (x - cfg.h * projects[j].c > 0) idx.push(j);            // own-estimate eligibility gate
  }
  if (idx.length === 0) return 0;
  const rawVal = idx.map((j) => (projects[j][signalKey] - cfg.h * projects[j].c) / projects[j].c);
  let score = zscore(rawVal, NUM.z_fallback_sd.value);
  if (opts.creditTilt) {                                        // central credit tilt
    const zP = zscore(idx.map((j) => projects[j].P / projects[j].c), NUM.z_fallback_sd.value);
    score = score.map((s, t) => (1 - cfg.lambda) * s + cfg.lambda * zP[t]);
  }
  const order = idx.map((j, t) => ({ j, s: score[t] }))
    .sort((A, B) => (B.s - A.s) || (A.j - B.j));               // desc score, tie-break lower index
  let spent = 0, delivered = 0;
  for (const { j } of order) {
    if (spent + projects[j].c <= budget) { spent += projects[j].c; delivered += projects[j].S; }
  }
  return delivered;
}

export function runWorld(cfg, rng) {
  const projects = generateWorld(cfg, rng);
  if (projects.length === 0) return { D: 0, C: 0, O: 0, empty: true };
  let totalCost = 0; for (const pr of projects) totalCost += pr.c;
  const budget = cfg.phi * totalCost;
  const O = fundedValue(projects, 'S',   cfg, budget);
  const C = fundedValue(projects, 'M_C', cfg, budget, { creditTilt: true });
  const D = fundedValue(projects, 'M_D', cfg, budget);
  return { D, C, O, empty: false };
}

// ---------------- estimand m(theta) = E[(D-C)/O | O>o_min], plus pi_deg ----------------
function median(arr) {
  if (arr.length === 0) return 0;
  const a = [...arr].sort((x, y) => x - y);
  const mid = a.length >> 1;
  return a.length % 2 ? a[mid] : 0.5 * (a[mid - 1] + a[mid]);
}

export function estimand(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value } = {}) {
  validateConfig(cfg);
  const rng = makeRng(seed);
  const worlds = [];
  for (let wI = 0; wI < nWorlds; wI++) {
    const { D, C, O, empty } = runWorld(cfg, rng);
    if (!empty) worlds.push({ D, C, O });
  }
  const Os = worlds.map((x) => x.O);
  const o_min = CLASSIFY.o_min_frac.value * median(Os);
  const kept = worlds.filter((x) => x.O > o_min);
  const degCount = worlds.length - kept.length;
  const pi_deg = worlds.length ? degCount / worlds.length : 1;
  const ratios = kept.map((x) => (x.D - x.C) / x.O);
  const m_hat = ratios.length ? ratios.reduce((s, r) => s + r, 0) / ratios.length : NaN;

  // world-cluster bootstrap CI (inner simulation variability only)
  const B = NUM.bootstrap_reps.value;
  const bootRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
  const boots = [];
  if (ratios.length) {
    for (let bI = 0; bI < B; bI++) {
      let acc = 0;
      for (let t = 0; t < ratios.length; t++) acc += ratios[Math.floor(bootRng.u() * ratios.length)];
      boots.push(acc / ratios.length);
    }
    boots.sort((a, b) => a - b);
  }
  const lo = boots.length ? boots[Math.floor((1 - NUM.ci_level.value) / 2 * boots.length)] : NaN;
  const hi = boots.length ? boots[Math.floor((1 + NUM.ci_level.value) / 2 * boots.length) - 1] : NaN;

  return { m_hat, ci: [lo, hi], pi_deg, n_kept: kept.length, n_worlds: worlds.length, o_min };
}
