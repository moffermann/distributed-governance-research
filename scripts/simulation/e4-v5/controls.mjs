// E4 v1.14 — negative controls. These MUST pass or the model is not trustworthy (DESIGN_SKETCH_v5 §5).
// Run: node scripts/simulation/e4-v5/controls.mjs
import { baseConfig } from './contract.mjs';
import { makeRng, runWorld, estimand } from './engine.mjs';

const SMALL = { N: 900, K: 120 };            // smaller world for fast, still-meaningful controls (both within D_M)
const NW = 300, SEED = 20260711;

// run NW worlds, return per-world {D,C,O} arrays (common random numbers => aligned across configs)
function runWorlds(cfg) {
  const rng = makeRng(SEED);
  const out = [];
  for (let i = 0; i < NW; i++) { const r = runWorld(cfg, rng); if (!r.empty) out.push(r); }
  return out;
}
const maxAbsDiff = (a, b, key) => Math.max(...a.map((x, i) => Math.abs(x[key] - b[i][key])));
const pass = (name, ok, detail) => console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);

let allOk = true;
const check = (name, ok, detail) => { pass(name, ok, detail); allOk = allOk && ok; };

// ---- Control 1: signal recovery + exact joint symmetry ----
// a=w=0, b=1, sigma_C=0, b_H_C=1, s_exp=0 (gate=1 everywhere) => M_C = S+ - H = S.
// p=1, beta=0, sigma_e=0 => everyone reports truthfully => M_D = S. All three arms == oracle => D=C=O => m=0.
{
  const cfg = { ...baseConfig(), ...SMALL,
    a: 0, w: 0, b: 1, sigma_C: 0, b_H_C: 1, s_exp: 0, lambda: 0,
    p: 1, beta: 0, sigma_e: 0 };
  const worlds = runWorlds(cfg);
  const maxDC = Math.max(...worlds.map((x) => Math.abs(x.D - x.C)));
  const maxDO = Math.max(...worlds.map((x) => Math.abs(x.D - x.O)));
  const { m_hat } = estimand(cfg, { nWorlds: NW });
  check('C1 signal recovery: M_C=M_D=S => D=C=O', maxDC < 1e-9 && maxDO < 1e-9, `max|D-C|=${maxDC.toExponential(2)}, max|D-O|=${maxDO.toExponential(2)}`);
  check('C1 estimand m == 0', Math.abs(m_hat) < 1e-9, `m=${m_hat.toExponential(2)}`);
}

// ---- Control 2: pathway inactivation — credit (lambda=0) ----
// At lambda=0, the credit salience P must not affect central selection: varying rho_P leaves C unchanged world-by-world.
{
  const base = { ...baseConfig(), ...SMALL, lambda: 0 };
  const A = runWorlds({ ...base, rho_P: 1 });
  const Bb = runWorlds({ ...base, rho_P: 5 });
  check('C2 lambda=0 => credit P inert', maxAbsDiff(A, Bb, 'C') < 1e-9, `max|dC|=${maxAbsDiff(A, Bb, 'C').toExponential(2)}`);
}

// ---- Control 3: pathway inactivation — projection (w=0) ----
// At w=0, the planner position v_p must not affect M_C: varying v_p0 leaves C unchanged world-by-world.
{
  const base = { ...baseConfig(), ...SMALL, w: 0 };
  const A = runWorlds({ ...base, v_p0: 0.6 });
  const Bb = runWorlds({ ...base, v_p0: 3.0 });
  check('C3 w=0 => planner position inert', maxAbsDiff(A, Bb, 'C') < 1e-9, `max|dC|=${maxAbsDiff(A, Bb, 'C').toExponential(2)}`);
}

// ---- Control 4: harm channel is ACTIVE and directional ----
// At s_exp=0 (gate=1 everywhere), raising central harm-detection b_H_C from 0 -> 1 should move central toward the
// oracle (it stops overvaluing harmful projects). Expect m(theta)=E[(D-C)/O] to DECREASE (central improves).
{
  const base = { ...baseConfig(), ...SMALL, s_exp: 0 };
  const blind = estimand({ ...base, b_H_C: 0 }, { nWorlds: NW }).m_hat;
  const sighted = estimand({ ...base, b_H_C: 1 }, { nWorlds: NW }).m_hat;
  check('C4 harm channel active (m falls as central sees harm)', sighted < blind - 1e-4, `m(b_H_C=0)=${blind.toFixed(4)} -> m(b_H_C=1)=${sighted.toFixed(4)}`);
}

// ---- Baseline descriptive run (not a pass/fail) ----
{
  const cfg = { ...baseConfig(), ...SMALL };
  const r = estimand(cfg, { nWorlds: NW });
  console.log(`\nBaseline (defaults, SMALL world): m_hat=${r.m_hat.toFixed(4)}  CI=[${r.ci[0].toFixed(4)}, ${r.ci[1].toFixed(4)}]  pi_deg=${r.pi_deg.toFixed(3)}  kept=${r.n_kept}/${r.n_worlds}`);
}

console.log(`\n${allOk ? 'ALL CONTROLS PASSED' : 'SOME CONTROLS FAILED'}`);
process.exit(allOk ? 0 : 1);
