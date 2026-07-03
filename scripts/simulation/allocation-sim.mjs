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
const KEYS = ["selTheta", "selSalience", "qualityGap", "corrTheta", "gini", "topShare", "fundedRate", "earlyCorr", "lateCorr"];

const runManyRaw = (params) => {
  const acc = Object.fromEntries(KEYS.map((k) => [k, []]));
  for (let r = 0; r < RUNS; r++) {
    const out = simulate({ seed: BASE_SEED + r * 7919, ...params });
    for (const k of KEYS) acc[k].push(out[k]);
  }
  return acc;
};

const runMany = (params) => {
  const acc = runManyRaw(params);
  return Object.fromEntries(KEYS.map((k) => [k, { mean: mean(acc[k]), sd: sd(acc[k]) }]));
};

// Paired difference (same seeds across both conditions): mean diff with a
// 95% CI using t(0.975, df=19)=2.093 for the default 20 runs.
const pairedDiff = (a, b) => {
  const diffs = a.map((x, i) => x - b[i]);
  const m = mean(diffs);
  const se = sd(diffs) / Math.sqrt(diffs.length);
  const t = 2.093;
  return `${m.toFixed(3)} [${(m - t * se).toFixed(3)}, ${(m + t * se).toFixed(3)}]`;
};

const fmt = (m) => `${m.mean.toFixed(3)}±${m.sd.toFixed(3)}`;
const row = (label, r) =>
  `| ${label} | ${fmt(r.selTheta)} | ${fmt(r.selSalience)} | ${fmt(r.qualityGap)} | ${fmt(r.gini)} | ${fmt(r.topShare)} | ${fmt(r.fundedRate)} |`;
const header = () => {
  console.log("| condition | sel(theta) | sel(salience) | quality gap | Gini | top-5%-salience share | funded rate |");
  console.log("|---|---|---|---|---|---|---|");
};

console.log(`runs per condition: ${RUNS}, base seed: ${BASE_SEED}, N=${CONFIG.N}, cycles=${CONFIG.CYCLES}, scarcity=${CONFIG.SCARCITY}x`);

// --- E4: institutional knowledge aggregation under a common world -----------
// Pre-registered in research/e4-institutional-knowledge-design.md. Knowledge is
// modeled symmetrically (dispersed citizen signals + a bandwidth-constrained
// planner) and generated ONCE per run; the five regimes R1-R5 share that same
// world and endowment and differ only in how they aggregate it. Everything
// flows from the seeded RNG — no Date.now()/Math.random(), fully deterministic.
if (args.exp === "e4") {
  const PI_INFORMED = 0.3; // share of citizens carrying private signals
  const KC = 4;            // projects an informed citizen knows
  const SIGMA_C = 0.35;    // citizen signal noise (individually poor)
  const K_PLAN = 30;       // projects the planner inspects (fixed bandwidth)
  const SIGMA_P = 0.10;    // planner inspection noise (deep but narrow)
  const SLOTS = 6;         // discovery-surface size for uninformed citizens
  const { N, CYCLES, ETA, SCARCITY } = CONFIG;

  // Seeded Box-Muller normal drawing from a supplied uniform stream.
  const makeNormal = (rng) => (mu, sigma) => {
    let u1 = rng();
    if (u1 < 1e-12) u1 = 1e-12;
    const u2 = rng();
    return mu + sigma * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };

  // Prefix-sum + binary-search sampler for weighted draws over indices.
  const buildSampler = (weights) => {
    const cum = new Float64Array(weights.length);
    let acc = 0;
    for (let i = 0; i < weights.length; i++) { acc += weights[i]; cum[i] = acc; }
    return (rng) => {
      const roll = rng() * acc;
      let lo = 0, hi = cum.length - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (cum[mid] < roll) lo = mid + 1; else hi = mid; }
      return lo;
    };
  };

  // k distinct indices via weighted draws, rejecting repeats.
  const sampleDistinct = (pick, rng, k, seen) => {
    seen.clear();
    const out = [];
    let guard = 0;
    while (out.length < k && guard < k * 100) {
      const j = pick(rng);
      if (!seen.has(j)) { seen.add(j); out.push(j); }
      guard++;
    }
    return out;
  };

  // Build the shared world + knowledge endowments for one run at one scale.
  // uniformCoverage varies only the citizen neighborhood sampler (sensitivity).
  const makeWorld = (seed, Np, uniformCoverage) => {
    const rng = mulberry32(seed);
    const theta = new Float64Array(Np);
    const s = new Float64Array(Np);
    const target = new Float64Array(Np);
    // Aggregate target = SCARCITY x total budget (N citizens x CYCLES units),
    // held at 3x for every scale to isolate the knowledge effect.
    const targetScale = (SCARCITY * N * CYCLES) / Np;
    for (let j = 0; j < Np; j++) {
      theta[j] = rng();
      s[j] = Math.max(0.01, 0.2 * theta[j] + 0.8 * rng());
      target[j] = (0.5 + rng()) * targetScale;
    }
    const normal = makeNormal(rng);
    const salienceW = new Float64Array(Np);
    for (let j = 0; j < Np; j++) salienceW[j] = 1 + s[j];
    const covW = uniformCoverage ? new Float64Array(Np).fill(1) : salienceW;
    const pickCov = buildSampler(covW);
    // Dispersed citizen signals: informed citizens draw KC salience-biased
    // (or uniform) projects and report noisy estimates of theta.
    const sigSum = new Float64Array(Np);
    const sigCount = new Int32Array(Np);
    const informedProjs = [];
    const informedSigs = [];
    const seen = new Set();
    for (let i = 0; i < N; i++) {
      if (rng() < PI_INFORMED) {
        const projs = sampleDistinct(pickCov, rng, KC, seen);
        const sigs = new Float64Array(projs.length);
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          const sig = theta[j] + normal(0, SIGMA_C);
          sigs[m] = sig;
          sigSum[j] += sig;
          sigCount[j]++;
        }
        informedProjs.push(projs);
        informedSigs.push(sigs);
      }
    }
    // Planner: K salience-triaged deep inspections; prior 0.5 elsewhere.
    const pickPlan = buildSampler(salienceW);
    const inspected = sampleDistinct(pickPlan, rng, K_PLAN, seen);
    const inspectedSet = new Set(inspected);
    const wPlanner = new Float64Array(Np).fill(0.5);
    for (const j of inspected) wPlanner[j] = theta[j] + normal(0, SIGMA_P);
    // Static open weights (R4): plain mean of signals (equal precision), prior
    // 0.5 where no signal exists.
    const wOpenRaw = new Float64Array(Np);
    for (let j = 0; j < Np; j++) wOpenRaw[j] = sigCount[j] > 0 ? sigSum[j] / sigCount[j] : 0.5;
    // Tail coverage: bottom salience quartile.
    const order = Array.from({ length: Np }, (_, j) => j).sort((a, b) => s[a] - s[b]);
    const q = Math.max(1, Math.round(Np * 0.25));
    let tailSig = 0, tailPlan = 0;
    for (let t = 0; t < q; t++) {
      const j = order[t];
      if (sigCount[j] >= 3) tailSig++;
      if (inspectedSet.has(j)) tailPlan++;
    }
    const thetaArr = Array.from(theta);
    return {
      Np, theta, s, target, informedProjs, informedSigs, sigSum, sigCount,
      wPlanner, wOpenRaw,
      corrWplanner: pearson(thetaArr, Array.from(wPlanner)),
      tailSignal: tailSig / q,
      tailPlanner: tailPlan / q,
    };
  };

  const REGIMES = [
    { name: "R1", d: 1.0, wSource: "planner", contaminated: false },
    { name: "R2", d: 0.8, wSource: "planner", contaminated: false },
    { name: "R3", d: 0.0, wSource: "none", contaminated: false },
    { name: "R4", d: 0.8, wSource: "openStatic", contaminated: false },
    { name: "R5", d: 0.8, wSource: "openDynamic", contaminated: true },
  ];

  // Run one regime over the shared world. Allocation RNG is forked
  // deterministically per regime so every regime sees the identical world but
  // its own stochastic-choice stream.
  const allocate = (world, regime, ri, seed) => {
    const rng = mulberry32((seed ^ ((ri + 1) * 0x9e3779b9)) >>> 0);
    const { Np, theta, s, target, informedProjs, informedSigs, sigSum, sigCount, wPlanner, wOpenRaw } = world;
    const funded = new Float64Array(Np);
    const nInformed = informedProjs.length;
    const defaultCount = Math.round(N * regime.d);
    const activeCount = N - defaultCount;
    const activeInformed = Math.round(activeCount * PI_INFORMED);
    const activeUninformed = activeCount - activeInformed;

    // Static default priority order (planner / static open weights).
    const staticW = regime.wSource === "planner" ? wPlanner : regime.wSource === "openStatic" ? wOpenRaw : null;
    let staticOrder = null;
    if (staticW && defaultCount > 0) {
      staticOrder = Array.from({ length: Np }, (_, j) => j).sort((a, b) => staticW[b] - staticW[a]);
    }
    const dynOrder = regime.wSource === "openDynamic" ? Array.from({ length: Np }, (_, j) => j) : null;
    const dynW = regime.wSource === "openDynamic" ? new Float64Array(Np) : null;

    for (let t = 0; t < CYCLES; t++) {
      let order = staticOrder;
      // R5: rebuild contaminated open weights from this cycle's funding
      // progress (herd term), so w_open is dynamic; R4's is static from cycle 1.
      if (regime.wSource === "openDynamic") {
        for (let j = 0; j < Np; j++) {
          const herd = target[j] > 0 ? Math.min(1, funded[j] / target[j]) : 0;
          dynW[j] = sigCount[j] > 0 ? 0.5 * (sigSum[j] / sigCount[j]) + 0.5 * herd : 0.5;
        }
        dynOrder.sort((a, b) => dynW[b] - dynW[a]);
        order = dynOrder;
      }

      // Active informed: fund the best private-signal project with room.
      if (nInformed > 0) {
        for (let c = 0; c < activeInformed; c++) {
          const ci = Math.floor(rng() * nInformed);
          const projs = informedProjs[ci], sigs = informedSigs[ci];
          let bestIdx = -1, bestVal = -Infinity;
          for (let m = 0; m < projs.length; m++) {
            const j = projs[m];
            if (funded[j] >= target[j]) continue;
            let val = sigs[m];
            if (regime.contaminated) {
              const herd = target[j] > 0 ? Math.min(1, funded[j] / target[j]) : 0;
              val = 0.5 * sigs[m] + 0.5 * herd;
            }
            if (val > bestVal) { bestVal = val; bestIdx = j; }
          }
          if (bestIdx >= 0) funded[bestIdx] += Math.min(1, target[bestIdx] - funded[bestIdx]);
        }
      }

      // Active uninformed: 6-slot salience + social-proof discovery surface,
      // built once per cycle (visibility = salience amplified by funding
      // progress), with cap-driven spill to the next visible slot.
      if (activeUninformed > 0) {
        let maxFunded = 1;
        for (let j = 0; j < Np; j++) if (funded[j] > maxFunded) maxFunded = funded[j];
        const topIdx = [], topVis = [];
        for (let j = 0; j < Np; j++) {
          const vis = s[j] * (1 + ETA * (funded[j] / maxFunded));
          if (topIdx.length < SLOTS) {
            topIdx.push(j);
            topVis.push(vis);
          } else {
            let mn = 0;
            for (let a = 1; a < topIdx.length; a++) if (topVis[a] < topVis[mn]) mn = a;
            if (vis > topVis[mn]) { topIdx[mn] = j; topVis[mn] = vis; }
          }
        }
        let visTotal = 0;
        for (let a = 0; a < topVis.length; a++) visTotal += topVis[a];
        for (let c = 0; c < activeUninformed; c++) {
          let amount = 1;
          for (let att = 0; att < 4 && amount > 0; att++) {
            let roll = rng() * visTotal, pick = topIdx[topIdx.length - 1];
            for (let a = 0; a < topIdx.length; a++) { roll -= topVis[a]; if (roll <= 0) { pick = topIdx[a]; break; } }
            const room = target[pick] - funded[pick];
            if (room <= 0) continue;
            const paid = Math.min(amount, room);
            funded[pick] += paid;
            amount -= paid;
          }
        }
      }

      // Defaults: priority-fill on w, never overfunding (fill remaining room).
      if (defaultCount > 0 && order) {
        let budget = defaultCount;
        for (let oi = 0; oi < order.length; oi++) {
          if (budget <= 0) break;
          const j = order[oi];
          const room = target[j] - funded[j];
          if (room <= 0) continue;
          const paid = Math.min(budget, room);
          funded[j] += paid;
          budget -= paid;
        }
      }
    }

    // Metrics.
    const thetaArr = Array.from(theta);
    const fundedArr = Array.from(funded);
    const flag = new Array(Np);
    let metCount = 0, sumMet = 0, sumUnmet = 0, nMet = 0, nUnmet = 0;
    for (let j = 0; j < Np; j++) {
      const met = funded[j] >= target[j] ? 1 : 0;
      flag[j] = met;
      if (met) { metCount++; sumMet += theta[j]; nMet++; } else { sumUnmet += theta[j]; nUnmet++; }
    }
    let corrWopen = null;
    if (regime.wSource === "openStatic") {
      corrWopen = pearson(thetaArr, Array.from(wOpenRaw));
    } else if (regime.wSource === "openDynamic") {
      // Report the emergent weight vector at end-state contamination.
      const finalW = new Float64Array(Np);
      for (let j = 0; j < Np; j++) {
        const herd = target[j] > 0 ? Math.min(1, funded[j] / target[j]) : 0;
        finalW[j] = sigCount[j] > 0 ? 0.5 * (sigSum[j] / sigCount[j]) + 0.5 * herd : 0.5;
      }
      corrWopen = pearson(thetaArr, Array.from(finalW));
    }
    return {
      selTheta: pearson(flag, thetaArr),
      qualityGap: (nMet ? sumMet / nMet : 0) - (nUnmet ? sumUnmet / nUnmet : 0),
      fundedRate: metCount / Np,
      gini: gini(fundedArr),
      corrWplanner: world.corrWplanner,
      corrWopen,
      tailSignal: world.tailSignal,
      tailPlanner: world.tailPlanner,
    };
  };

  const META = [
    ["selTheta", "sel(theta)"], ["qualityGap", "quality gap"], ["fundedRate", "funded rate"],
    ["gini", "Gini"], ["corrWplanner", "corr(theta,w_planner)"], ["corrWopen", "corr(theta,w_open)"],
    ["tailSignal", "tail signal cov"], ["tailPlanner", "tail planner cov"],
  ];
  const cell = (vals) => {
    const nn = vals.filter((v) => v !== null && v !== undefined && !Number.isNaN(v));
    if (nn.length === 0) return "—";
    return `${mean(nn).toFixed(3)}±${sd(nn).toFixed(3)}`;
  };
  const printTable = (title, rows) => {
    console.log(`\n## ${title}\n`);
    console.log(`| regime | ${META.map((m) => m[1]).join(" | ")} |`);
    console.log(`|${"---|".repeat(META.length + 1)}`);
    for (const rowObj of rows) {
      console.log(`| ${rowObj.name} | ${META.map((m) => cell(rowObj.metrics[m[0]])).join(" | ")} |`);
    }
  };

  console.log(`\n# E4 - institutional knowledge aggregation (runs=${RUNS}, seeds ${BASE_SEED}..${BASE_SEED + RUNS - 1}, N=${N}, cycles=${CYCLES}, scarcity=${SCARCITY}x)`);

  for (const Np of [40, 200, 1000]) {
    const rows = REGIMES.map((rg) => ({ name: rg.name, metrics: Object.fromEntries(META.map((m) => [m[0], []])) }));
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const world = makeWorld(seed, Np, false);
      for (let ri = 0; ri < REGIMES.length; ri++) {
        const out = allocate(world, REGIMES[ri], ri, seed);
        for (const m of META) rows[ri].metrics[m[0]].push(out[m[0]]);
      }
    }
    printTable(`E4 N_p=${Np}`, rows);
  }

  // Sensitivity: uniform citizen coverage vs salience-biased, R4 at N_p=200.
  {
    const Np = 200, r4 = REGIMES[3];
    const bias = { name: "R4 salience-biased coverage", metrics: Object.fromEntries(META.map((m) => [m[0], []])) };
    const unif = { name: "R4 uniform coverage       ", metrics: Object.fromEntries(META.map((m) => [m[0], []])) };
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const oB = allocate(makeWorld(seed, Np, false), r4, 3, seed);
      const oU = allocate(makeWorld(seed, Np, true), r4, 3, seed);
      for (const m of META) { bias.metrics[m[0]].push(oB[m[0]]); unif.metrics[m[0]].push(oU[m[0]]); }
    }
    printTable("E4 N_p=200 sensitivity - citizen coverage (R4)", [bias, unif]);
  }

  process.exit(0);
}

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
const e3raw = {};
for (const d of [0.5, 0.2]) {
  for (const fb of ["default", "salience"]) {
    const raw = runManyRaw({ alpha0: 0.1, alphaEnd: 0.02, defaultShare: d, fallback: fb, caps: true, corrThetaW: 0.4 });
    e3raw[`${d}-${fb}`] = raw;
    const r = Object.fromEntries(KEYS.map((k) => [k, { mean: mean(raw[k]), sd: sd(raw[k]) }]));
    console.log(`| d=${Math.round(d * 100)}%, decay→${fb} | ${fmt(r.selTheta)} | ${fmt(r.qualityGap)} | ${fmt(r.earlyCorr)} | ${fmt(r.lateCorr)} |`);
  }
}
console.log("\nPaired differences (default minus salience destination, same seeds, mean [95% CI]):");
for (const d of [0.5, 0.2]) {
  const a = e3raw[`${d}-default`], b = e3raw[`${d}-salience`];
  console.log(`  d=${Math.round(d * 100)}%: sel(theta) ${pairedDiff(a.selTheta, b.selTheta)}; late-cycles corr ${pairedDiff(a.lateCorr, b.lateCorr)}`);
}
