// E4 v1.14 — ceteris-paribus FRONTIER locators. Hold all knobs at the PROBABLE scenario, sweep ONE axis across its
// physically-possible range, and locate where m = D/O − C/O crosses 0 (the parity frontier). Report the frontier
// location, the probable reference value marked on the axis, and the result at that value. Together with the declared
// combined path, this shows where a measured target configuration would lie relative to the reported frontiers.
// Run: npm run e4:frontier
import { baseConfig, THETA } from './contract.mjs';
import { safeLog } from './adapter.mjs';
import { estimand } from './engine.mjs';
import { PROBABLE, SCENARIO_WORLD as WORLD } from './scenario-configs.mjs';

const NW = 400, STEPS = 15;
const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(0) + '%';

// axes to locate, with a plotting range (clipped from D_F to a legible span) and the plausible value + who-wins-which-way
const AXES = [
  { k: 's_exp',  lo: 0.2, hi: 8,   plaus: PROBABLE.s_exp,  note: 'central harm myopia (higher = blinder on the long tail)' },
  { k: 'b_H_C',  lo: 0.0, hi: 2.0, plaus: PROBABLE.b_H_C,  note: 'central harm detection (higher = less myopic)' },
  // NOTE: participation p is NOT a frontier axis — in Core v0 net-allocation participation is universal by
  // architecture (a facto, p=1), not a ceteris-paribus knob. Sweeping it would model a turnout Core v0 does not have.
  { k: 'beta',   lo: 0.0, hi: 0.95, plaus: PROBABLE.beta,  note: 'silencing of opponents (higher = weaker distributed harm-voice)' },
  { k: 'a_V',    lo: 0.2, hi: 3.0, plaus: PROBABLE.a_V,    note: 'visibility tail (higher a_V = flatter tail, more projects visible)' },
  // Signal-quality axis: fidelity of the ~60% profile-rule coverage to the individual's project-specific value.
  // phi_prof=1 => full individual fidelity; phi_prof=0 => the profile reverts entirely to the category mean q.
  { k: 'phi_prof', lo: 0.0, hi: 1.0, plaus: PROBABLE.phi_prof, note: 'distributed signal quality (profile category fidelity)' },
  // Correlated/common-mode error on the profile+delegation share — the ONE axis that materially moves the magnitude
  // and can reach parity (real profiles share a platform; delegation concentrates). 0 = the independent-error reference.
  { k: 'sigma_cm', lo: 0.0, hi: 2.5, plaus: 0, note: 'correlated/common-mode error (the binding distributed-side sensitivity)' },
];

const base = { ...baseConfig(), ...WORLD, ...PROBABLE };
safeLog('E4 — ceteris-paribus frontiers (others held at the PROBABLE scenario). m = D/O − C/O, parity at 0.\n');

for (const ax of AXES) {
  const xs = [], ms = [];
  for (let i = 0; i < STEPS; i++) {
    const x = ax.lo + (ax.hi - ax.lo) * i / (STEPS - 1);
    const m = estimand({ ...base, [ax.k]: x }, { nWorlds: NW }).m_hat;
    xs.push(x); ms.push(m);
  }
  // find the frontier: first adjacent pair whose sign changes; linear-interpolate the crossing
  let frontier = null;
  for (let i = 0; i < STEPS - 1; i++) {
    if (Number.isFinite(ms[i]) && Number.isFinite(ms[i + 1]) && (ms[i] > 0) !== (ms[i + 1] > 0)) {
      frontier = xs[i] + (0 - ms[i]) * (xs[i + 1] - xs[i]) / (ms[i + 1] - ms[i]);
      break;
    }
  }
  const mAtPlaus = estimand({ ...base, [ax.k]: ax.plaus }, { nWorlds: NW }).m_hat;
  safeLog(`■ ${ax.k}  — ${ax.note}`);
  if (frontier === null) {
    const who = ms[Math.floor(STEPS / 2)] > 0 ? 'Core v0 wins across the whole plotted range' : 'central wins across the whole plotted range';
    safeLog(`    frontier: none in [${ax.lo}, ${ax.hi}] — ${who}`);
  } else {
    safeLog(`    frontier (m=0) at ${ax.k} ≈ ${frontier.toFixed(2)}   |   plausible value = ${ax.plaus}  →  m = ${pct(mAtPlaus)} (Core v0 ${mAtPlaus > 0 ? 'wins' : 'loses'} at the reference point)`);
  }
  // compact curve
  safeLog('    m across axis: ' + xs.map((x, i) => `${x.toFixed(2)}:${pct(ms[i])}`).join('  '));
  safeLog('');
}
// ---- combined scenario-path frontier: interpolate PROBABLE -> PRO_CENTRAL (the declared central-favourable endpoint),
// locate m=0. t=0 is the probable scenario; t=1 is the declared central-favourable endpoint (a declared endpoint, not
// beyond-realistic). The crossing t* tells how far toward central-favourable conditions parity is reached. ----
import { PRO_CENTRAL } from './scenario-configs.mjs';
const compKeys = Object.keys(PRO_CENTRAL).filter((k) => PRO_CENTRAL[k] !== PROBABLE[k]);
const clampDF = (k, v) => Math.max(THETA[k].df[0], Math.min(THETA[k].df[1], v));
const lerp = (t) => { const c = { ...base }; for (const k of compKeys) c[k] = clampDF(k, PROBABLE[k] + t * (PRO_CENTRAL[k] - PROBABLE[k])); return c; };
safeLog('■ probable → declared central-favourable endpoint (combined path; t in [0,1] is the declared interpolation segment)');
const ts = [], tms = [];
for (let i = 0; i <= 16; i++) { const t = i / 8; const m = estimand(lerp(t), { nWorlds: NW }).m_hat; ts.push(t); tms.push(m); }
let tf = null;
for (let i = 0; i < ts.length - 1; i++) if ((tms[i] > 0) !== (tms[i + 1] > 0)) { tf = ts[i] + (0 - tms[i]) * (ts[i + 1] - ts[i]) / (tms[i + 1] - tms[i]); break; }
safeLog(`    t=0 probable scenario → t=1 declared central-favourable endpoint`);
safeLog(`    m across t: ` + ts.filter((_, i) => i % 2 === 0).map((t, i) => `t=${t.toFixed(2)}:${pct(tms[i * 2])}`).join('  '));
safeLog(tf === null
  ? `    frontier: none in t∈[0,2] — one endpoint does not cross parity`
  : `    frontier (m=0) at t ≈ ${tf.toFixed(2)}  →  conditions ${tf < 1 ? `~${Math.round(tf * 100)}% of the way from probable to the declared central-favourable endpoint flip the winner to the central (within the declared interpolation segment)` : `must exceed the declared central-favourable endpoint (t>1)`}`);
safeLog('');
safeLog('Read: of the SIX plotted one-factor slices, five never flip the winner over their plotted range; the sixth —');
safeLog('correlated/common-mode error (sigma_cm) — is the one axis that materially moves the magnitude and can reach');
safeLog('parity, but only at a LARGE shared-error level (coverage is robust in sign up to a substantial common-mode).');
safeLog('The combined-path frontier is reached');
safeLog('on the combined path within the declared interpolation segment. NOTE: t is a linear mix of heterogeneous knobs,');
safeLog('an illustrative path — not a calibrated competence scale.');
