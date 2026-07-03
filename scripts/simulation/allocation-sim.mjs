#!/usr/bin/env node
// Agent-based simulation of attention-constrained citizen allocation.
// Implements Model 3 of research/formal-models.md and tests predictions
// P1 (funding caps tame salience cascades), P2 (need-weighted defaults
// anchor allocation quality at low attention), and P3 (participation decay
// degrades gracefully only when the released share flows to defaults).
//
// Design: N citizens allocate one unit per cycle across a persistent pool
// of projects with independent-ish quality theta, salience s, and planning
// need-weights w. Citizens act as evaluators (sample projects, pick best
// theta), salience followers (choose proportional to salience plus social
// proof), or default followers (planning weights). Funding-target closure
// optionally refuses contributions beyond a project's target, re-routing
// them to the contributor's next choice.
//
// No dependencies; deterministic under --seed. Usage:
//   node scripts/simulation/allocation-sim.mjs [--runs 20] [--seed 1]

const args = Object.fromEntries(
  process.argv.slice(2).map((a, i, arr) => (a.startsWith("--") ? [a.slice(2), arr[i + 1]] : null)).filter(Boolean),
);
const RUNS = parseInt(args.runs ?? "20", 10);
const BASE_SEED = parseInt(args.seed ?? "1", 10);

// --- deterministic PRNG (mulberry32) ---------------------------------------
const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// --- helpers ----------------------------------------------------------------
const pearson = (xs, ys) => {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
    syy += (ys[i] - my) ** 2;
  }
  return sxy / Math.sqrt(sxx * syy || 1);
};

const gini = (values) => {
  const v = [...values].sort((a, b) => a - b);
  const n = v.length;
  const total = v.reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  let cum = 0, lorenz = 0;
  for (let i = 0; i < n; i++) {
    cum += v[i];
    lorenz += cum;
  }
  return 1 + 1 / n - (2 * lorenz) / (n * total);
};

const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
const sd = (xs) => {
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, x) => a + (x - m) ** 2, 0) / (xs.length - 1 || 1));
};

// --- simulation core ---------------------------------------------------------
const CONFIG = {
  N: 10000,          // citizens
  CYCLES: 24,        // monthly cycles
  POOL: 40,          // active projects at any time
  LIFETIME: 6,       // funding-window length in cycles
  SAMPLE: 8,         // projects an evaluator inspects
  ETA: 3.0,          // social-proof weight on visible funding progress
  SCARCITY: 3.0,     // standing targets ~ SCARCITY x budget over a lifetime
};

const makeProject = (rng, id, corrThetaW) => {
  const theta = rng();
  // salience mostly orthogonal to quality (viral != valuable)
  const s = Math.max(0.01, 0.2 * theta + 0.8 * rng());
  // planning weight correlated with quality at strength corrThetaW
  const w = Math.max(0.01, corrThetaW * theta + (1 - corrThetaW) * rng());
  return { id, theta, s, w, target: 0, funded: 0, born: 0 };
};

function simulate({ seed, alpha0, alphaEnd, defaultShare, fallback, caps, corrThetaW }) {
  const rng = mulberry32(seed);
  const { N, CYCLES, POOL, LIFETIME, SAMPLE, ETA, SCARCITY } = CONFIG;
  const cycleBudget = N; // one unit per citizen
  let nextId = 0;
  const projects = [];
  const ledger = []; // finished or expired projects with final funding

  const spawn = (t) => {
    while (projects.length < POOL) {
      const p = makeProject(rng, nextId++, corrThetaW);
      p.born = t;
      // Scarcity: the standing pool's targets absorb SCARCITY times the
      // budget that flows during one project lifetime, so only ~1/SCARCITY
      // of projects can be fully funded and allocation is a real selection.
      p.target = ((0.5 + rng()) * (SCARCITY * cycleBudget * LIFETIME)) / POOL;
      projects.push(p);
    }
  };

  const weightedPick = (items, weightFn) => {
    let total = 0;
    const ws = items.map((p) => {
      const w = weightFn(p);
      total += w;
      return w;
    });
    let roll = rng() * total;
    for (let i = 0; i < items.length; i++) {
      roll -= ws[i];
      if (roll <= 0) return items[i];
    }
    return items[items.length - 1];
  };

  const contribute = (p, amount) => {
    const room = caps ? Math.max(0, p.target - p.funded) : Infinity;
    const paid = Math.min(amount, room);
    p.funded += paid;
    return amount - paid; // remainder to re-route
  };

  const perCycleCorr = [];

  for (let t = 0; t < CYCLES; t++) {
    spawn(t);
    // participation decay: alpha falls geometrically from alpha0 to alphaEnd
    const progress = CYCLES === 1 ? 1 : t / (CYCLES - 1);
    const alpha = alpha0 * Math.pow(alphaEnd / alpha0, progress);
    const released = alpha0 - alpha; // attention share lost to decay
    // Structural mix: non-evaluating citizens split defaultShare vs salience.
    // The decayed share joins the regime named by `fallback`.
    let dShare = (1 - alpha0) * defaultShare + (fallback === "default" ? released : 0);
    let sShare = 1 - alpha - dShare;
    if (sShare < 0) {
      dShare += sShare;
      sShare = 0;
    }
    const shares = { evaluate: alpha, default: dShare, salience: sShare };

    const counts = {
      evaluate: Math.round(N * shares.evaluate),
      salience: Math.round(N * shares.salience),
    };
    counts.default = N - counts.evaluate - counts.salience;

    // evaluators: sample, pick best theta with room
    for (let i = 0; i < counts.evaluate; i++) {
      const sample = [];
      for (let k = 0; k < SAMPLE; k++) sample.push(projects[Math.floor(rng() * projects.length)]);
      sample.sort((a, b) => b.theta - a.theta);
      let amount = 1;
      for (const p of sample) {
        amount = contribute(p, amount);
        if (amount <= 0) break;
      }
    }
    // salience followers: cumulative-advantage social proof through a
    // limited discovery surface — citizens only see the top-SLOTS projects
    // ranked by visibility (salience amplified by funding progress), and
    // pick within that slice (docs/15 Home surface). With caps ON a
    // saturated leader stops absorbing and spills to the next slots; with
    // caps OFF the leader keeps compounding (the A027 cascade).
    const SLOTS = 6;
    for (let i = 0; i < counts.salience; i++) {
      let amount = 1;
      const maxFunded = Math.max(1, ...projects.map((q) => q.funded));
      const visibility = (q) => q.s * (1 + ETA * (q.funded / maxFunded));
      const top = [...projects].sort((a, b) => visibility(b) - visibility(a)).slice(0, SLOTS);
      for (let attempts = 0; attempts < 4 && amount > 0; attempts++) {
        const p = weightedPick(top, visibility);
        amount = contribute(p, amount);
      }
    }
    // default followers: the system default rule concentrates dormant budget
    // on the highest planning-priority projects, filling targets in priority
    // order (H033 as an institutional allocator, not a thin spread).
    {
      let budget = counts.default;
      const byPriority = [...projects].sort((a, b) => b.w - a.w);
      for (const p of byPriority) {
        if (budget <= 0) break;
        const room = Math.max(0, p.target - p.funded); // defaults never overfund
        const paid = Math.min(budget, room);
        p.funded += paid;
        budget -= paid;
      }
    }

    perCycleCorr.push(pearson(projects.map((p) => p.funded / p.target), projects.map((p) => p.theta)));

    // retire funded/expired projects
    for (let i = projects.length - 1; i >= 0; i--) {
      const p = projects[i];
      if (p.funded >= p.target || t - p.born >= LIFETIME) {
        ledger.push(p);
        projects.splice(i, 1);
      }
    }
  }
  ledger.push(...projects);

  const funding = ledger.map((p) => p.funded);
  const fundedFlag = ledger.map((p) => (p.funded >= p.target ? 1 : 0));
  const fundedSet = ledger.filter((p) => p.funded >= p.target);
  const unfundedSet = ledger.filter((p) => p.funded < p.target);
  const meanTheta = (set) => (set.length ? mean(set.map((p) => p.theta)) : 0);
  return {
    // Selection quality: does the mechanism fund the right projects?
    selTheta: pearson(fundedFlag, ledger.map((p) => p.theta)),
    selSalience: pearson(fundedFlag, ledger.map((p) => p.s)),
    qualityGap: meanTheta(fundedSet) - meanTheta(unfundedSet),
    corrTheta: pearson(funding, ledger.map((p) => p.theta)),
    gini: gini(funding),
    topShare: (() => {
      const sorted = [...ledger].sort((a, b) => b.s - a.s);
      const top = sorted.slice(0, Math.ceil(sorted.length * 0.05));
      const total = funding.reduce((a, b) => a + b, 0);
      return top.reduce((a, p) => a + p.funded, 0) / total;
    })(),
    fundedRate: fundedSet.length / ledger.length,
    earlyCorr: mean(perCycleCorr.slice(0, 6)),
    lateCorr: mean(perCycleCorr.slice(-6)),
  };
}

// --- experiments --------------------------------------------------------------
const runMany = (params) => {
  const keys = ["selTheta", "selSalience", "qualityGap", "corrTheta", "gini", "topShare", "fundedRate", "earlyCorr", "lateCorr"];
  const acc = Object.fromEntries(keys.map((k) => [k, []]));
  for (let r = 0; r < RUNS; r++) {
    const out = simulate({ seed: BASE_SEED + r * 7919, ...params });
    for (const k of keys) acc[k].push(out[k]);
  }
  return Object.fromEntries(keys.map((k) => [k, { mean: mean(acc[k]), sd: sd(acc[k]) }]));
};

const fmt = (m) => `${m.mean.toFixed(3)}±${m.sd.toFixed(3)}`;
const row = (label, r) =>
  `| ${label} | ${fmt(r.selTheta)} | ${fmt(r.selSalience)} | ${fmt(r.qualityGap)} | ${fmt(r.gini)} | ${fmt(r.topShare)} | ${fmt(r.fundedRate)} |`;
const header = () => {
  console.log("| condition | sel(theta) | sel(salience) | quality gap | Gini | top-5%-salience share | funded rate |");
  console.log("|---|---|---|---|---|---|---|");
};

console.log(`runs per condition: ${RUNS}, base seed: ${BASE_SEED}, N=${CONFIG.N}, cycles=${CONFIG.CYCLES}, scarcity=${CONFIG.SCARCITY}x`);

// lambda is a mixing weight (w = lambda*theta + (1-lambda)*u), not a Pearson
// correlation. Report the measured correlation so results are labeled
// honestly (referee issue M2).
{
  const rng = mulberry32(999);
  for (const lambda of [0.4, 0.8]) {
    const th = [], ws = [];
    for (let i = 0; i < 200000; i++) {
      const t = rng();
      th.push(t);
      ws.push(Math.max(0.01, lambda * t + (1 - lambda) * rng()));
    }
    console.log(`planner-knowledge mixing weight lambda=${lambda}: measured corr(theta,w)=${pearson(th, ws).toFixed(3)}`);
  }
  console.log("");
}

console.log("## E1 — P1: funding-target closure vs unbounded funding\n(salience-driven mix: 20% default / ~75% salience, alpha=5%, lambda=0.4)\n");
header();
console.log(row("caps ON ", runMany({ alpha0: 0.05, alphaEnd: 0.05, defaultShare: 0.2, fallback: "salience", caps: true, corrThetaW: 0.4 })));
console.log(row("caps OFF", runMany({ alpha0: 0.05, alphaEnd: 0.05, defaultShare: 0.2, fallback: "salience", caps: false, corrThetaW: 0.4 })));

console.log("\n## E2 — P2: structural mix and planner knowledge (caps ON)\n");
header();
for (const alpha of [0.02, 0.05, 0.1]) {
  console.log(row(`default-anchored (d=80%), lambda=0.8, alpha=${alpha}`, runMany({ alpha0: alpha, alphaEnd: alpha, defaultShare: 0.8, fallback: "default", caps: true, corrThetaW: 0.8 })));
  console.log(row(`default-anchored (d=80%), lambda=0.4, alpha=${alpha}`, runMany({ alpha0: alpha, alphaEnd: alpha, defaultShare: 0.8, fallback: "default", caps: true, corrThetaW: 0.4 })));
  console.log(row(`salience-driven  (d=20%), lambda=0.4, alpha=${alpha}`, runMany({ alpha0: alpha, alphaEnd: alpha, defaultShare: 0.2, fallback: "salience", caps: true, corrThetaW: 0.4 })));
}

console.log("\n## E2s — sensitivity: regime ordering under varied sample size and social-proof strength (caps ON, lambda=0.4, alpha=5%)\n");
console.log("| variation | default-anchored sel(theta) | salience-driven sel(theta) |");
console.log("|---|---|---|");
for (const [sample, eta] of [[4, 3.0], [16, 3.0], [8, 1.0], [8, 6.0]]) {
  const saved = { SAMPLE: CONFIG.SAMPLE, ETA: CONFIG.ETA };
  CONFIG.SAMPLE = sample;
  CONFIG.ETA = eta;
  const da = runMany({ alpha0: 0.05, alphaEnd: 0.05, defaultShare: 0.8, fallback: "default", caps: true, corrThetaW: 0.4 });
  const sd2 = runMany({ alpha0: 0.05, alphaEnd: 0.05, defaultShare: 0.2, fallback: "salience", caps: true, corrThetaW: 0.4 });
  console.log(`| SAMPLE=${sample}, eta=${eta} | ${fmt(da.selTheta)} | ${fmt(sd2.selTheta)} |`);
  CONFIG.SAMPLE = saved.SAMPLE;
  CONFIG.ETA = saved.ETA;
}

console.log("\n## E3 — P3: participation decay 10%→2% over 24 cycles (caps ON, lambda=0.4)\n");
console.log("| condition | sel(theta) | quality gap | early-cycles corr | late-cycles corr |");
console.log("|---|---|---|---|---|");
for (const d of [0.5, 0.2]) {
  for (const fb of ["default", "salience"]) {
    const r = runMany({ alpha0: 0.1, alphaEnd: 0.02, defaultShare: d, fallback: fb, caps: true, corrThetaW: 0.4 });
    console.log(`| d=${Math.round(d * 100)}%, decay→${fb} | ${fmt(r.selTheta)} | ${fmt(r.qualityGap)} | ${fmt(r.earlyCorr)} | ${fmt(r.lateCorr)} |`);
  }
}
