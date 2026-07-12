// E4 v1.14 — parity ATLAS (visualization only; does not touch the model). Sweeps TWO axes and reports m(theta)
// at each cell, holding all other parameters at their registered defaults. This is an explicit 2-axis SLICE
// (honest by construction — it does not claim to be the full 30-parameter joint set). Output:
//   (1) an accessible numeric grid + ASCII heat map to the console (primary, screen-reader friendly), and
//   (2) a JSON grid written to atlas-data.json for a color heatmap artifact.
// Run: node scripts/simulation/e4-v5/atlas.mjs
import { writeFileSync } from 'node:fs';
import { baseConfig, THETA } from './contract.mjs';
import { estimand } from './engine.mjs';

const WORLD = { N: 1200, K: 130 };
const NW = 250;
const STEPS = 11;

// Two axes chosen to CROSS the parity frontier (so both colors appear), reflecting the thesis:
//   X = p      (citizen participation / distributed data density: low => distributed noisy & sparse => central wins)
//   Y = s_exp  (central harm myopia: 0 => central sees harm everywhere; high => blind on the long tail => distributed wins)
// All other parameters held at their registered defaults (b_H_C=0.5, beta=0.4, ...). Honest 2-axis slice.
const AX = { key: 'p',     from: 0.02, to: 0.6, label: 'p  citizen participation (→ denser distributed evidence)' };
const AY = { key: 's_exp', from: 0.0,  to: 6.0, label: 's_exp  central harm myopia (→ central blind on the long tail)' };
const HOLD = {};

const lin = (a, b, n, i) => a + (b - a) * (i / (n - 1));
const grid = [];       // grid[iy][ix] = m
const xs = [], ys = [];
for (let i = 0; i < STEPS; i++) { xs.push(lin(AX.from, AX.to, STEPS, i)); ys.push(lin(AY.from, AY.to, STEPS, i)); }

for (let iy = STEPS - 1; iy >= 0; iy--) {          // top row = highest Y
  const row = [];
  for (let ix = 0; ix < STEPS; ix++) {
    const cfg = { ...baseConfig(), ...WORLD, ...HOLD, [AX.key]: xs[ix], [AY.key]: ys[iy] };
    row.push(estimand(cfg, { nWorlds: NW }).m_hat);
  }
  grid.push(row);
}

// ---- ASCII heat map (accessible) ----
// glyph by sign & magnitude: distributed wins (+) as D/d, central wins (-) as C/c, parity as ·
const glyph = (m) => {
  if (m > 0.20) return 'D'; if (m > 0.05) return 'd';
  if (m < -0.20) return 'C'; if (m < -0.05) return 'c';
  return '·';
};
console.log('E4 parity atlas — m(θ) = (D − C)/O, signed fraction of the full-information oracle (parity at 0)');
console.log(`  X → ${AX.label}`);
console.log(`  Y ↑ ${AY.label}`);
console.log('  glyph: D=distributed wins strongly, d=mildly, ·=parity, c=central mildly, C=central strongly\n');
console.log('        ' + xs.map((x) => x.toFixed(2).padStart(6)).join(''));
for (let r = 0; r < STEPS; r++) {
  const yval = ys[STEPS - 1 - r].toFixed(2).padStart(5);
  const glyphs = grid[r].map((m) => glyph(m).padStart(6)).join('');
  console.log(`  ${yval} ${glyphs}`);
}
console.log('\n  numeric grid (%, top row = highest ' + AY.key + '):');
console.log('        ' + xs.map((x) => x.toFixed(2).padStart(7)).join(''));
for (let r = 0; r < STEPS; r++) {
  const yval = ys[STEPS - 1 - r].toFixed(2).padStart(5);
  console.log(`  ${yval} ` + grid[r].map((m) => (100 * m).toFixed(0).padStart(7)).join(''));
}

// region shares
let win = 0, lose = 0, par = 0;
for (const row of grid) for (const m of row) { if (m > 0.05) win++; else if (m < -0.05) lose++; else par++; }
const tot = STEPS * STEPS;
console.log(`\n  region shares over this slice: distributed-wins ${(100*win/tot).toFixed(0)}% · parity ${(100*par/tot).toFixed(0)}% · central-wins ${(100*lose/tot).toFixed(0)}%`);

writeFileSync(new URL('./atlas-data.json', import.meta.url), JSON.stringify({
  xKey: AX.key, yKey: AY.key, xLabel: AX.label, yLabel: AY.label, hold: HOLD, world: WORLD, nWorlds: NW,
  xs, ys: [...ys], grid, note: 'grid[0] = highest Y row; m = (D-C)/O signed fraction of oracle',
}, null, 2));
console.log('\n  wrote atlas-data.json');
