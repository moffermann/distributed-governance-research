// E4 v1.14 — regression test for the analytic BENCHMARK (joint-normal fixed-threshold selection lemma).
// Lemma: for (S, X) jointly normal and top-fraction-q selection by X at population threshold t = μ_X + σ_X·z_q,
//   V := E[S·1{X>t}] = q·μ_S + φ(z_q)·Cov(S,X)/sd(X).
// Parity of two selectors X_C, X_D ⇔ Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C).
// This checks the analytic identity that underpins the numerical frontier (the full engine adds eligibility, costs,
// credit — the theorem is the limiting case). Run: node scripts/simulation/e4-v5/theorem-check.mjs
import { makeRng } from './engine.mjs';

const PHI = (z) => Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
// inverse normal CDF (Acklam) for z_q = Phi^{-1}(1-q)
function invNorm(p) {
  const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
  const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
  const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
  const pl = 0.02425, ph = 1 - pl; let q, r;
  if (p < pl) { q = Math.sqrt(-2 * Math.log(p)); return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
  if (p <= ph) { q = p - 0.5; r = q * q; return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1); }
  q = Math.sqrt(-2 * Math.log(1 - p)); return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
}

const rng = makeRng(4242);
const N = 400000, q = 0.3;
const muS = 1.2, sigS = 1.0;
// X = alpha + b*S + noise  => Cov(S,X)=b*sigS^2, Var(X)=b^2 sigS^2 + sigN^2
const alpha = 0.5, b = 0.8, sigN = 0.6;
const S = new Float64Array(N), X = new Float64Array(N);
for (let i = 0; i < N; i++) { const s = muS + sigS * rng.normal(); S[i] = s; X[i] = alpha + b * s + sigN * rng.normal(); }

const covSX = b * sigS * sigS, sdX = Math.sqrt(b * b * sigS * sigS + sigN * sigN);
const muX = alpha + b * muS;
const zq = invNorm(1 - q), t = muX + sdX * zq;
const analyticV = q * muS + PHI(zq) * covSX / sdX;

// empirical V = mean over ALL candidates of S*1{X>t}
let sumSel = 0, nSel = 0;
for (let i = 0; i < N; i++) if (X[i] > t) { sumSel += S[i]; nSel++; }
const empiricalV = sumSel / N;

// Monte-Carlo SE of empirical V
let v2 = 0; for (let i = 0; i < N; i++) { const g = X[i] > t ? S[i] : 0; v2 += (g - empiricalV) * (g - empiricalV); }
const se = Math.sqrt(v2 / N / N);
const zscore = Math.abs(empiricalV - analyticV) / se;

console.log('E4 analytic benchmark — joint-normal fixed-threshold lemma');
console.log(`  Cov(S,X)/sd(X) = ${(covSX / sdX).toFixed(4)}   z_q=${zq.toFixed(3)}   selected share=${(nSel / N).toFixed(3)} (target q=${q})`);
console.log(`  analytic  V = ${analyticV.toFixed(5)}`);
console.log(`  empirical V = ${empiricalV.toFixed(5)}  (MC SE=${se.toFixed(5)})`);
console.log(`  |Δ| = ${Math.abs(empiricalV - analyticV).toFixed(5)}  = ${zscore.toFixed(2)} SE`);

const ok = zscore < 3;
console.log(`\n${ok ? 'PASS' : 'FAIL'}  analytic identity matches simulation within 3 MC SE`);
process.exit(ok ? 0 : 1);
