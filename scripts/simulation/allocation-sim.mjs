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

// --- E5: delivered social value under a common world (selection x delivery) --
// Pre-registered in research/e5-value-delivery-design.md. E1-E4 measured
// selection quality (did funding reach high-theta projects); E5 adds an
// EXECUTION stage and measures delivered value V = sum theta_j * delivered_j *
// budget_j, the leak, and the visibility gap. A 2x2 factorial crosses selection
// regime (central planner / distributed open vector, reusing E4 machinery) with
// delivery regime (opaque status-quo / verified architecture, parameterizing
// Model 1's incentive-compatibility terms). Fully deterministic: seeded RNG
// only, no Date.now()/Math.random().
if (args.exp === "e5") {
  const { N, CYCLES, ETA, SCARCITY } = CONFIG;
  const NP = 200;          // single scale (E4 established scale effects)
  const PI_BASE = 0.3;     // baseline informed share (E4's PI_INFORMED)
  const KC = 4;            // projects an informed citizen knows
  const SIGMA_C = 0.35;    // citizen signal noise
  const K_PLAN = 30;       // planner bandwidth (fixed inspections)
  const SIGMA_P = 0.10;    // planner inspection noise
  const SLOTS = 6;         // uninformed discovery-surface size
  const POOL = 120;        // standing executor pool
  const L = 6;             // monthly milestones per funded project

  // Seeded Box-Muller normal (as in E4).
  const makeNormal = (rng) => (mu, sigma) => {
    let u1 = rng();
    if (u1 < 1e-12) u1 = 1e-12;
    const u2 = rng();
    return mu + sigma * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };
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

  // Shared world + knowledge endowment for one run. piInformed governs both the
  // fraction of citizens holding signals and (in allocate) the active-informed
  // share, matching E4's PI_INFORMED coupling. Population-density zones (Zipf)
  // are appended for the E5b constructors and the urban-share metric.
  const makeWorld = (seed, piInformed) => {
    const rng = mulberry32(seed);
    const theta = new Float64Array(NP), s = new Float64Array(NP), target = new Float64Array(NP);
    const targetScale = (SCARCITY * N * CYCLES) / NP;
    for (let j = 0; j < NP; j++) {
      theta[j] = rng();
      s[j] = Math.max(0.01, 0.2 * theta[j] + 0.8 * rng());
      target[j] = (0.5 + rng()) * targetScale;
    }
    const normal = makeNormal(rng);
    const salienceW = new Float64Array(NP);
    for (let j = 0; j < NP; j++) salienceW[j] = 1 + s[j];
    const pickCov = buildSampler(salienceW);
    const sigSum = new Float64Array(NP), sigCount = new Int32Array(NP);
    const informedProjs = [], informedSigs = [];
    const seen = new Set();
    for (let i = 0; i < N; i++) {
      if (rng() < piInformed) {
        const projs = sampleDistinct(pickCov, rng, KC, seen);
        const sigs = new Float64Array(projs.length);
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          const sig = theta[j] + normal(0, SIGMA_C);
          sigs[m] = sig; sigSum[j] += sig; sigCount[j]++;
        }
        informedProjs.push(projs); informedSigs.push(sigs);
      }
    }
    const pickPlan = buildSampler(salienceW);
    const inspected = sampleDistinct(pickPlan, rng, K_PLAN, seen);
    const wPlanner = new Float64Array(NP).fill(0.5);
    for (const j of inspected) wPlanner[j] = theta[j] + normal(0, SIGMA_P);
    const wOpenRaw = new Float64Array(NP);
    for (let j = 0; j < NP; j++) wOpenRaw[j] = sigCount[j] > 0 ? sigSum[j] / sigCount[j] : 0.5;
    // Population density: Zipf 1/rank over a random assignment of ranks.
    const density = new Float64Array(NP);
    const ranks = Array.from({ length: NP }, (_, j) => j);
    for (let i = NP - 1; i > 0; i--) { const k = Math.floor(rng() * (i + 1)); const tmp = ranks[i]; ranks[i] = ranks[k]; ranks[k] = tmp; }
    for (let j = 0; j < NP; j++) density[j] = 1 / (ranks[j] + 1);
    return { theta, s, target, informedProjs, informedSigs, sigSum, sigCount, wPlanner, wOpenRaw, density };
  };

  // Selection stage. Returns the funded set (portfolio) with the cycle each
  // project closed, plus sel(theta). Central = E4-R1 (planner weights, d=1.0);
  // distributed = E4-R4 (open vector, d, active layer). `constructor` swaps the
  // default weight vector for E5b. Allocation RNG is forked per (seed, salt).
  const allocateSelection = (world, cfg, seed, salt) => {
    const rng = mulberry32((seed ^ ((salt + 1) * 0x9e3779b9)) >>> 0);
    const { theta, s, target, informedProjs, informedSigs, wOpenRaw, wPlanner, density } = world;
    const { d, pi, constructor } = cfg;
    const funded = new Float64Array(NP);
    const closeCycle = new Int32Array(NP).fill(-1);
    const nInformed = informedProjs.length;
    const defaultCount = Math.round(N * d);
    const activeCount = N - defaultCount;
    const activeInformed = Math.round(activeCount * pi);
    const activeUninformed = activeCount - activeInformed;

    let staticW = null;
    if (constructor === "planner") staticW = wPlanner;
    else if (constructor === "openStatic" || constructor === "near-me" || constructor === "rural" || constructor === "uniform") {
      if (constructor === "openStatic") staticW = wOpenRaw;
      else {
        staticW = new Float64Array(NP);
        if (constructor === "near-me") for (let j = 0; j < NP; j++) staticW[j] = density[j];
        else if (constructor === "rural") for (let j = 0; j < NP; j++) staticW[j] = 1 / density[j];
        else for (let j = 0; j < NP; j++) staticW[j] = rng();
      }
    }
    const isDynamic = constructor === "closure";
    let staticOrder = null;
    if (staticW && defaultCount > 0) staticOrder = Array.from({ length: NP }, (_, j) => j).sort((a, b) => staticW[b] - staticW[a]);
    const dynOrder = isDynamic ? Array.from({ length: NP }, (_, j) => j) : null;
    const dynW = isDynamic ? new Float64Array(NP) : null;

    for (let t = 0; t < CYCLES; t++) {
      let order = staticOrder;
      if (isDynamic) {
        for (let j = 0; j < NP; j++) dynW[j] = target[j] > 0 ? Math.min(1, funded[j] / target[j]) : 0;
        dynOrder.sort((a, b) => dynW[b] - dynW[a]);
        order = dynOrder;
      }
      // Active informed: fund the best private-signal project with room.
      for (let c = 0; c < activeInformed && nInformed > 0; c++) {
        const ci = Math.floor(rng() * nInformed);
        const projs = informedProjs[ci], sigs = informedSigs[ci];
        let bestIdx = -1, bestVal = -Infinity;
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          if (funded[j] >= target[j]) continue;
          if (sigs[m] > bestVal) { bestVal = sigs[m]; bestIdx = j; }
        }
        if (bestIdx >= 0) funded[bestIdx] += Math.min(1, target[bestIdx] - funded[bestIdx]);
      }
      // Active uninformed: 6-slot salience + social-proof discovery surface.
      if (activeUninformed > 0) {
        let maxFunded = 1;
        for (let j = 0; j < NP; j++) if (funded[j] > maxFunded) maxFunded = funded[j];
        const topIdx = [], topVis = [];
        for (let j = 0; j < NP; j++) {
          const vis = s[j] * (1 + ETA * (funded[j] / maxFunded));
          if (topIdx.length < SLOTS) { topIdx.push(j); topVis.push(vis); }
          else {
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
            funded[pick] += paid; amount -= paid;
          }
        }
      }
      // Defaults: priority-fill on the constructor's weights, never overfunding.
      if (defaultCount > 0 && order) {
        let budget = defaultCount;
        for (let oi = 0; oi < order.length; oi++) {
          if (budget <= 0) break;
          const j = order[oi];
          const room = target[j] - funded[j];
          if (room <= 0) continue;
          const paid = Math.min(budget, room);
          funded[j] += paid; budget -= paid;
        }
      }
      for (let j = 0; j < NP; j++) if (closeCycle[j] < 0 && funded[j] >= target[j]) closeCycle[j] = t;
    }

    const flag = new Array(NP);
    for (let j = 0; j < NP; j++) flag[j] = funded[j] >= target[j] ? 1 : 0;
    const jobs = [];
    for (let j = 0; j < NP; j++) if (flag[j]) jobs.push({ j, cycle: closeCycle[j], budget: target[j] });
    jobs.sort((a, b) => (a.cycle - b.cycle) || (a.j - b.j));
    return { funded, flag, jobs, selTheta: pearson(flag, Array.from(theta)) };
  };

  // Delivery regimes parameterize Model 1's IC condition. Opportunists divert a
  // milestone when c_eff > p*((1-a*(1-r)) + gamma + R). Opaque: no exclusion,
  // undetected diversion recorded as delivered (the visibility gap). Verified:
  // milestone-gated, detected diversion excludes the executor for the run.
  const OPAQUE = { name: "opaque", p: 0.10, a: 0.85, r: 0.0, gamma: 0.0, R: 0.0, exclude: false };
  const VERIFIED = { name: "verified", p: 0.75, a: 0.2, r: 0.5, gamma: 0.15, R: 0.3, exclude: true };
  const threshold = (reg) => reg.p * ((1 - reg.a * (1 - reg.r)) + reg.gamma + reg.R);

  // Execution stage. Separate RNG streams (pool build, executor assignment,
  // opportunist cost draws) are shared across delivery regimes on the same
  // portfolio, so S vs A1 (and A3 vs A2) differ ONLY by the delivery regime,
  // isolating the delivery effect. Detection/exclusion draws are their own
  // streams and do not desync assignment.
  const execute = (world, port, reg, execSeed) => {
    const { theta } = world;
    const poolRng = mulberry32((execSeed ^ 0xa1) >>> 0);
    const assignRng = mulberry32((execSeed ^ 0xb2) >>> 0);
    const costRng = mulberry32((execSeed ^ 0xc3) >>> 0);
    const detectRng = mulberry32((execSeed ^ 0xd4) >>> 0);
    const replaceRng = mulberry32((execSeed ^ 0xe5) >>> 0);
    const thr = threshold(reg);
    // pool: 0 honest (share 0.7), 1 opportunistic (share 0.3)
    const pool = new Array(POOL);
    for (let i = 0; i < POOL; i++) pool[i] = poolRng() < 0.7 ? 0 : 1;
    const oppShare = () => { let c = 0; for (let i = 0; i < POOL; i++) if (pool[i] === 1) c++; return c / POOL; };

    const jobs = port.jobs;
    let totalBudget = 0, deliveredBudget = 0, officialBudget = 0, value = 0;
    let ptr = 0;
    let snap6 = null, snap12 = null, snap24 = null;
    for (let cyc = 0; cyc < CYCLES; cyc++) {
      while (ptr < jobs.length && jobs[ptr].cycle === cyc) {
        const job = jobs[ptr++];
        const th = theta[job.j], budget = job.budget;
        const ei = Math.floor(assignRng() * POOL);
        const type = pool[ei];
        let delivered = 0, official = 0, caught = false;
        for (let m = 0; m < L; m++) {
          if (type === 0) { delivered++; official++; continue; } // honest always delivers
          const ceff = 0.3 + 0.6 * costRng();
          if (ceff > thr) { // divert
            const detected = detectRng() < reg.p;
            if (detected) caught = true;            // milestone failed (lost)
            else official++;                        // undetected: recorded delivered, funds lost
          } else { delivered++; official++; }       // deterred: delivers
        }
        deliveredBudget += (delivered / L) * budget;
        officialBudget += (official / L) * budget;
        value += th * (delivered / L) * budget;
        totalBudget += budget;
        if (reg.exclude && caught) pool[ei] = replaceRng() < 0.7 ? 0 : 1; // exclude + fresh draw
      }
      if (cyc + 1 === 6) snap6 = oppShare();
      if (cyc + 1 === 12) snap12 = oppShare();
      if (cyc + 1 === 24) snap24 = oppShare();
    }
    return {
      V: totalBudget ? value / totalBudget : 0,
      leak: totalBudget ? 1 - deliveredBudget / totalBudget : 0,
      visGap: totalBudget ? (officialBudget - deliveredBudget) / totalBudget : 0,
      poolOpp6: snap6, poolOpp12: snap12, poolOpp24: snap24,
      selTheta: port.selTheta,
    };
  };

  const urbanShare = (world, port) => {
    // Share of spent budget flowing to the top-density quintile of projects.
    const { density } = world;
    const order = Array.from({ length: NP }, (_, j) => j).sort((a, b) => density[b] - density[a]);
    const topSet = new Set(order.slice(0, Math.max(1, Math.round(NP * 0.2))));
    let top = 0, tot = 0;
    for (const job of port.jobs) { tot += job.budget; if (topSet.has(job.j)) top += job.budget; }
    return tot ? top / tot : 0;
  };

  const fmtMS = (arr) => `${mean(arr).toFixed(3)}±${sd(arr).toFixed(3)}`;

  console.log(`\n# E5 - delivered social value (selection x delivery) (runs=${RUNS}, seeds ${BASE_SEED}..${BASE_SEED + RUNS - 1}, N=${N}, N_p=${NP}, cycles=${CYCLES}, scarcity=${SCARCITY}x, caps ON)`);
  console.log(`opaque threshold p*((1-a(1-r))+g+R)=${threshold(OPAQUE).toFixed(4)}, verified threshold=${threshold(VERIFIED).toFixed(4)}, opportunist c_eff~U(0.3,0.9)`);

  // --- main 2x2 (requirement 5): matched portfolios per seed ------------------
  const ARMS = ["S", "A1", "A3", "A2"];
  const acc = Object.fromEntries(ARMS.map((n) => [n, { V: [], leak: [], visGap: [], p6: [], p12: [], p24: [], sel: [] }]));
  for (let r = 0; r < RUNS; r++) {
    const seed = BASE_SEED + r;
    const world = makeWorld(seed, PI_BASE);
    const portCentral = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "planner" }, seed, 0);
    const portDist = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
    const execC = (seed * 2 + 1) >>> 0, execD = (seed * 2 + 2) >>> 0;
    const out = {
      S: execute(world, portCentral, OPAQUE, execC),
      A1: execute(world, portCentral, VERIFIED, execC),
      A3: execute(world, portDist, OPAQUE, execD),
      A2: execute(world, portDist, VERIFIED, execD),
    };
    for (const n of ARMS) {
      acc[n].V.push(out[n].V); acc[n].leak.push(out[n].leak); acc[n].visGap.push(out[n].visGap);
      acc[n].p6.push(out[n].poolOpp6); acc[n].p12.push(out[n].poolOpp12); acc[n].p24.push(out[n].poolOpp24);
      acc[n].sel.push(out[n].selTheta);
    }
  }
  const ARMLABEL = { S: "S  central/opaque (status quo)", A1: "A1 central/verified", A3: "A3 distributed/opaque", A2: "A2 distributed/verified (full arch)" };
  console.log("\n## E5 main 2x2 (matched portfolios per seed)\n");
  console.log("| arm | V/budget | leak | visibility gap | pool-opp@6 | @12 | @24 | sel(theta) |");
  console.log("|---|---|---|---|---|---|---|---|");
  for (const n of ARMS) {
    const a = acc[n];
    console.log(`| ${ARMLABEL[n]} | ${fmtMS(a.V)} | ${fmtMS(a.leak)} | ${fmtMS(a.visGap)} | ${fmtMS(a.p6)} | ${fmtMS(a.p12)} | ${fmtMS(a.p24)} | ${fmtMS(a.sel)} |`);
  }
  console.log("\nPaired contrasts on V (same seeds, mean [95% CI], n=" + RUNS + "):");
  console.log(`  delivery effect  V(A1)-V(S)  = ${pairedDiff(acc.A1.V, acc.S.V)}`);
  console.log(`  delivery effect  V(A2)-V(A3) = ${pairedDiff(acc.A2.V, acc.A3.V)}`);
  console.log(`  selection effect V(A3)-V(S)  = ${pairedDiff(acc.A3.V, acc.S.V)}`);
  console.log(`  selection effect V(A2)-V(A1) = ${pairedDiff(acc.A2.V, acc.A1.V)}`);
  console.log(`  interaction (dlv|dist)-(dlv|cent) = ${pairedDiff(acc.A2.V.map((x, i) => x - acc.A3.V[i]), acc.A1.V.map((x, i) => x - acc.S.V[i]))}`);

  // --- participation sweep (requirement 6) ------------------------------------
  // alpha = direct-participation (active) share => distributed d = 1-alpha;
  // informed share pi = min(0.9, alpha*6). Central arms (S,A1) are alpha-
  // invariant. A2 reported across the band; full 2x2 anchored at alpha=5%.
  console.log("\n## E5 participation sweep (distributed arms; pi=min(0.9, alpha*6))\n");
  console.log("| alpha | pi | d | V(A3 opaque) | V(A2 verified) | leak(A2) | visGap(A2) | sel(theta) |");
  console.log("|---|---|---|---|---|---|---|---|");
  const sweepAlphas = [0.03, 0.05, 0.10, 0.20, 0.40];
  for (const alpha of sweepAlphas) {
    const pi = Math.min(0.9, alpha * 6);
    const d = 1 - alpha;
    const a3 = { V: [], sel: [] }, a2 = { V: [], leak: [], visGap: [], sel: [] };
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const world = makeWorld(seed, pi);
      const port = allocateSelection(world, { d, pi, constructor: "openStatic" }, seed, 3);
      const execD = (seed * 2 + 2) >>> 0;
      const oA3 = execute(world, port, OPAQUE, execD);
      const oA2 = execute(world, port, VERIFIED, execD);
      a3.V.push(oA3.V); a2.V.push(oA2.V); a2.leak.push(oA2.leak); a2.visGap.push(oA2.visGap); a2.sel.push(oA2.selTheta);
    }
    console.log(`| ${(alpha * 100).toFixed(0)}% | ${pi.toFixed(2)} | ${d.toFixed(2)} | ${fmtMS(a3.V)} | ${fmtMS(a2.V)} | ${fmtMS(a2.leak)} | ${fmtMS(a2.visGap)} | ${fmtMS(a2.sel)} |`);
  }
  console.log(`(central baseline, alpha-invariant: V(S)=${fmtMS(acc.S.V)}, V(A1)=${fmtMS(acc.A1.V)})`);

  // --- E5b: default constructors under verified delivery (requirement 7) ------
  console.log("\n## E5b default constructors (distributed d=0.8, verified delivery)\n");
  console.log("| constructor | V/budget | Gini | urban-share (top-density quintile) | sel(theta) |");
  console.log("|---|---|---|---|---|");
  const constructors = [
    ["near-funding-closure", "closure"],
    ["near-me (density)", "near-me"],
    ["rural (inverse density)", "rural"],
    ["uniform-random", "uniform"],
  ];
  for (const [label, ctor] of constructors) {
    const b = { V: [], gini: [], urban: [], sel: [] };
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const world = makeWorld(seed, PI_BASE);
      const port = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: ctor }, seed, 3);
      const execD = (seed * 2 + 2) >>> 0;
      const o = execute(world, port, VERIFIED, execD);
      b.V.push(o.V); b.gini.push(gini(Array.from(port.funded))); b.urban.push(urbanShare(world, port)); b.sel.push(o.selTheta);
    }
    console.log(`| ${label} | ${fmtMS(b.V)} | ${fmtMS(b.gini)} | ${fmtMS(b.urban)} | ${fmtMS(b.sel)} |`);
  }

  // --- E5s POST-HOC sensitivity: verified-weak (exclusion channel active) -----
  // NOT pre-registered. The main verified regime (threshold 1.0125 > max c_eff
  // 0.9) fully deters diversion, so the exclusion/pool machinery never fires.
  // This block relaxes the Model 1 terms so the IC leaves slack for opportunist
  // c_eff in (~0.43, 0.9]: some divert, detection fires at p=0.45, and confirmed
  // diverters are excluded and replaced -> the executor pool should evolve. Arms
  // mirror the main table's verified arms exactly (identical portfolios, seeds
  // and execution streams), swapping only delivery to verified-weak: A1w on S's
  // central portfolio (d=1.0), A2w on the distributed portfolio (d=0.8, pi=0.3).
  const VERIFIED_WEAK = { name: "verified-weak", p: 0.45, a: 0.35, r: 0.3, gamma: 0.05, R: 0.15, exclude: true };
  const accW = { A1w: { V: [], leak: [], visGap: [], p6: [], p12: [], p24: [], sel: [] }, A2w: { V: [], leak: [], visGap: [], p6: [], p12: [], p24: [], sel: [] } };
  for (let r = 0; r < RUNS; r++) {
    const seed = BASE_SEED + r;
    const world = makeWorld(seed, PI_BASE);
    const portCentral = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "planner" }, seed, 0);
    const portDist = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
    const execC = (seed * 2 + 1) >>> 0, execD = (seed * 2 + 2) >>> 0;
    const oA1w = execute(world, portCentral, VERIFIED_WEAK, execC);
    const oA2w = execute(world, portDist, VERIFIED_WEAK, execD);
    for (const [k, o] of [["A1w", oA1w], ["A2w", oA2w]]) {
      accW[k].V.push(o.V); accW[k].leak.push(o.leak); accW[k].visGap.push(o.visGap);
      accW[k].p6.push(o.poolOpp6); accW[k].p12.push(o.poolOpp12); accW[k].p24.push(o.poolOpp24); accW[k].sel.push(o.selTheta);
    }
  }
  console.log(`\n## E5s POST-HOC sensitivity - verified-weak (exclusion channel active)\n`);
  console.log(`verified-weak threshold p*((1-a(1-r))+g+R)=${threshold(VERIFIED_WEAK).toFixed(4)} (IC slack for c_eff>${threshold(VERIFIED_WEAK).toFixed(2)}); p_detect=0.45, exclusion ON`);
  console.log("| arm | V/budget | leak | visibility gap | pool-opp@6 | @12 | @24 | sel(theta) |");
  console.log("|---|---|---|---|---|---|---|---|");
  const WLABEL = { A1w: "A1w central/verified-weak", A2w: "A2w distributed/verified-weak" };
  for (const k of ["A1w", "A2w"]) {
    const a = accW[k];
    console.log(`| ${WLABEL[k]} | ${fmtMS(a.V)} | ${fmtMS(a.leak)} | ${fmtMS(a.visGap)} | ${fmtMS(a.p6)} | ${fmtMS(a.p12)} | ${fmtMS(a.p24)} | ${fmtMS(a.sel)} |`);
  }

  process.exit(0);
}

// --- E6: endogenous execution quality under reputational competition --------
// Pre-registered in research/e6-reputational-competition-design.md. E5's
// executors have fixed types; E6 removes diversion entirely (all honest) and
// tests the career-concerns channel: does visible, measured reputation with
// reputation-weighted assignment make executors invest EFFORT (endogenous
// quality) beyond anything deterrence explains? Selection is held fixed (the
// E4 open-vector portfolio, d=0.8). Three arms differ only in the institution:
// B1 opaque (quality invisible, random work), B2 mirror-without-market
// (reputation visible, random work), B3 architecture (reputation-weighted
// assignment). Fully deterministic: seeded RNG only.
if (args.exp === "e6") {
  const { N, CYCLES, ETA, SCARCITY } = CONFIG;
  const NP = 200, PI_BASE = 0.3, KC = 4, SIGMA_C = 0.35, K_PLAN = 30, SIGMA_P = 0.10, SLOTS = 6;
  const POOL = 120, L = 6;
  // E6 execution parameters.
  const ABIL_LO = 0.3, ABIL_HI = 0.9;      // fixed ability a_i ~ U(0.3,0.9)
  const E0 = 0.5;                          // initial effort
  const IMITATE_PROB = 0.3, IMITATE_STEP = 0.2, DECAY_STEP = 0.1, NOISE = 0.05;
  const TOP_DECILE = Math.max(1, Math.round(POOL * 0.1)); // reference pool size
  const WINDOW = 6;                        // cycles of assignment history (B3)
  const REP_FLOOR = 0.1;                   // assignment-weight floor for newcomers
  const REPORT = [1, 6, 12, 24];

  // --- world + selection machinery reused verbatim from E5 --------------------
  const makeNormal = (rng) => (mu, sigma) => {
    let u1 = rng();
    if (u1 < 1e-12) u1 = 1e-12;
    const u2 = rng();
    return mu + sigma * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };
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
  const makeWorld = (seed, piInformed) => {
    const rng = mulberry32(seed);
    const theta = new Float64Array(NP), s = new Float64Array(NP), target = new Float64Array(NP);
    const targetScale = (SCARCITY * N * CYCLES) / NP;
    for (let j = 0; j < NP; j++) {
      theta[j] = rng();
      s[j] = Math.max(0.01, 0.2 * theta[j] + 0.8 * rng());
      target[j] = (0.5 + rng()) * targetScale;
    }
    const normal = makeNormal(rng);
    const salienceW = new Float64Array(NP);
    for (let j = 0; j < NP; j++) salienceW[j] = 1 + s[j];
    const pickCov = buildSampler(salienceW);
    const sigSum = new Float64Array(NP), sigCount = new Int32Array(NP);
    const informedProjs = [], informedSigs = [];
    const seen = new Set();
    for (let i = 0; i < N; i++) {
      if (rng() < piInformed) {
        const projs = sampleDistinct(pickCov, rng, KC, seen);
        const sigs = new Float64Array(projs.length);
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          const sig = theta[j] + normal(0, SIGMA_C);
          sigs[m] = sig; sigSum[j] += sig; sigCount[j]++;
        }
        informedProjs.push(projs); informedSigs.push(sigs);
      }
    }
    const pickPlan = buildSampler(salienceW);
    const inspected = sampleDistinct(pickPlan, rng, K_PLAN, seen);
    const wPlanner = new Float64Array(NP).fill(0.5);
    for (const j of inspected) wPlanner[j] = theta[j] + normal(0, SIGMA_P);
    const wOpenRaw = new Float64Array(NP);
    for (let j = 0; j < NP; j++) wOpenRaw[j] = sigCount[j] > 0 ? sigSum[j] / sigCount[j] : 0.5;
    const density = new Float64Array(NP);
    const ranks = Array.from({ length: NP }, (_, j) => j);
    for (let i = NP - 1; i > 0; i--) { const k = Math.floor(rng() * (i + 1)); const tmp = ranks[i]; ranks[i] = ranks[k]; ranks[k] = tmp; }
    for (let j = 0; j < NP; j++) density[j] = 1 / (ranks[j] + 1);
    return { theta, s, target, informedProjs, informedSigs, sigSum, sigCount, wPlanner, wOpenRaw, density };
  };
  const allocateSelection = (world, cfg, seed, salt) => {
    const rng = mulberry32((seed ^ ((salt + 1) * 0x9e3779b9)) >>> 0);
    const { theta, s, target, informedProjs, informedSigs, wOpenRaw, wPlanner, density } = world;
    const { d, pi, constructor } = cfg;
    const funded = new Float64Array(NP);
    const closeCycle = new Int32Array(NP).fill(-1);
    const nInformed = informedProjs.length;
    const defaultCount = Math.round(N * d);
    const activeCount = N - defaultCount;
    const activeInformed = Math.round(activeCount * pi);
    const activeUninformed = activeCount - activeInformed;
    let staticW = null;
    if (constructor === "planner") staticW = wPlanner;
    else if (constructor === "openStatic" || constructor === "near-me" || constructor === "rural" || constructor === "uniform") {
      if (constructor === "openStatic") staticW = wOpenRaw;
      else {
        staticW = new Float64Array(NP);
        if (constructor === "near-me") for (let j = 0; j < NP; j++) staticW[j] = density[j];
        else if (constructor === "rural") for (let j = 0; j < NP; j++) staticW[j] = 1 / density[j];
        else for (let j = 0; j < NP; j++) staticW[j] = rng();
      }
    }
    const isDynamic = constructor === "closure";
    let staticOrder = null;
    if (staticW && defaultCount > 0) staticOrder = Array.from({ length: NP }, (_, j) => j).sort((a, b) => staticW[b] - staticW[a]);
    const dynOrder = isDynamic ? Array.from({ length: NP }, (_, j) => j) : null;
    const dynW = isDynamic ? new Float64Array(NP) : null;
    for (let t = 0; t < CYCLES; t++) {
      let order = staticOrder;
      if (isDynamic) {
        for (let j = 0; j < NP; j++) dynW[j] = target[j] > 0 ? Math.min(1, funded[j] / target[j]) : 0;
        dynOrder.sort((a, b) => dynW[b] - dynW[a]);
        order = dynOrder;
      }
      for (let c = 0; c < activeInformed && nInformed > 0; c++) {
        const ci = Math.floor(rng() * nInformed);
        const projs = informedProjs[ci], sigs = informedSigs[ci];
        let bestIdx = -1, bestVal = -Infinity;
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          if (funded[j] >= target[j]) continue;
          if (sigs[m] > bestVal) { bestVal = sigs[m]; bestIdx = j; }
        }
        if (bestIdx >= 0) funded[bestIdx] += Math.min(1, target[bestIdx] - funded[bestIdx]);
      }
      if (activeUninformed > 0) {
        let maxFunded = 1;
        for (let j = 0; j < NP; j++) if (funded[j] > maxFunded) maxFunded = funded[j];
        const topIdx = [], topVis = [];
        for (let j = 0; j < NP; j++) {
          const vis = s[j] * (1 + ETA * (funded[j] / maxFunded));
          if (topIdx.length < SLOTS) { topIdx.push(j); topVis.push(vis); }
          else {
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
            funded[pick] += paid; amount -= paid;
          }
        }
      }
      if (defaultCount > 0 && order) {
        let budget = defaultCount;
        for (let oi = 0; oi < order.length; oi++) {
          if (budget <= 0) break;
          const j = order[oi];
          const room = target[j] - funded[j];
          if (room <= 0) continue;
          const paid = Math.min(budget, room);
          funded[j] += paid; budget -= paid;
        }
      }
      for (let j = 0; j < NP; j++) if (closeCycle[j] < 0 && funded[j] >= target[j]) closeCycle[j] = t;
    }
    const jobs = [];
    for (let j = 0; j < NP; j++) if (funded[j] >= target[j]) jobs.push({ j, cycle: closeCycle[j], budget: target[j] });
    jobs.sort((a, b) => (a.cycle - b.cycle) || (a.j - b.j));
    return { jobs };
  };

  // --- reputational-competition execution -------------------------------------
  // One arm over a fixed portfolio and a fixed pool of abilities. Each cycle:
  // (1) every executor updates effort (imitation of a visible top performer in
  // B2/B3, or cost-minimizing decay in B1, each w.p. 0.3; then +-0.05 noise);
  // (2) that cycle's due milestones (project close-cycle + monthly index) are
  // assigned to executors and delivered at quality q = 0.25+0.45a+0.30e;
  // reputation (running mean quality) is recorded in B2/B3. Milestone quality
  // uses the effort in force that cycle, so effort dynamics feed delivered value.
  const SALT = { B1: 0x111, B2: 0x222, B3: 0x333 };
  const runArm = (world, jobs, ability, arm, seed) => {
    const rng = mulberry32((seed ^ SALT[arm]) >>> 0);
    const effort = new Float64Array(POOL).fill(E0);
    const repSum = new Float64Array(POOL), repCount = new Int32Array(POOL);
    const totalAssign = new Int32Array(POOL);
    const assignByCycle = new Array(CYCLES);
    // Schedule L monthly milestones per funded project from its close cycle;
    // milestones due past the horizon are dropped (identical across arms).
    const due = Array.from({ length: CYCLES }, () => []);
    for (const job of jobs) {
      const mBudget = job.budget / L, th = world.theta[job.j];
      for (let m = 0; m < L; m++) { const dc = job.cycle + m; if (dc < CYCLES) due[dc].push({ th, mBudget }); }
    }
    const effTraj = {}, qTraj = {};
    let vNum = 0, vDen = 0;
    for (let t = 0; t < CYCLES; t++) {
      // reference pool for imitation (B2 by reputation, B3 by recent assignments)
      let topDecile = null;
      if (arm !== "B1") {
        const metric = new Float64Array(POOL);
        if (arm === "B3") {
          for (let tt = Math.max(0, t - WINDOW); tt < t; tt++) {
            const ac = assignByCycle[tt];
            if (ac) for (let i = 0; i < POOL; i++) metric[i] += ac[i];
          }
        } else {
          for (let i = 0; i < POOL; i++) metric[i] = repCount[i] > 0 ? repSum[i] / repCount[i] : 0;
        }
        const idx = Array.from({ length: POOL }, (_, i) => i).sort((a, b) => metric[b] - metric[a]);
        topDecile = idx.slice(0, TOP_DECILE);
      }
      // (1) effort update
      for (let i = 0; i < POOL; i++) {
        if (rng() < IMITATE_PROB) {
          if (arm === "B1") effort[i] += DECAY_STEP * (0 - effort[i]);
          else { const ref = topDecile[Math.floor(rng() * topDecile.length)]; effort[i] += IMITATE_STEP * (effort[ref] - effort[i]); }
        }
        effort[i] += rng() * 2 * NOISE - NOISE;
        if (effort[i] < 0) effort[i] = 0; else if (effort[i] > 1) effort[i] = 1;
      }
      // (2) assign + deliver this cycle's milestones
      const cyc = new Int32Array(POOL);
      let qSum = 0, qCnt = 0;
      for (const ms of due[t]) {
        let ei;
        if (arm === "B3") {
          let acc = 0; const w = new Float64Array(POOL);
          for (let i = 0; i < POOL; i++) { const R = repCount[i] > 0 ? repSum[i] / repCount[i] : 0; const wi = (REP_FLOOR + R) * (REP_FLOOR + R); w[i] = wi; acc += wi; }
          let roll = rng() * acc; ei = POOL - 1;
          for (let i = 0; i < POOL; i++) { roll -= w[i]; if (roll <= 0) { ei = i; break; } }
        } else ei = Math.floor(rng() * POOL);
        let q = 0.25 + 0.45 * ability[ei] + 0.30 * effort[ei];
        if (q < 0) q = 0; else if (q > 1) q = 1;
        cyc[ei]++; totalAssign[ei]++;
        if (arm !== "B1") { repSum[ei] += q; repCount[ei]++; }
        vNum += ms.th * q * ms.mBudget; vDen += ms.mBudget;
        qSum += q; qCnt++;
      }
      assignByCycle[t] = cyc;
      const cnum = t + 1;
      if (REPORT.includes(cnum)) {
        let es = 0; for (let i = 0; i < POOL; i++) es += effort[i];
        effTraj[cnum] = es / POOL;
        qTraj[cnum] = qCnt > 0 ? qSum / qCnt : NaN;
      }
    }
    return {
      effTraj, qTraj,
      V: vDen > 0 ? vNum / vDen : 0,
      corrAssign: pearson(Array.from(ability), Array.from(totalAssign)),
      gAssign: gini(Array.from(totalAssign)),
    };
  };

  const ARMS = ["B1", "B2", "B3"];
  const acc = Object.fromEntries(ARMS.map((n) => [n, {
    e1: [], e6: [], e12: [], e24: [], q1: [], q6: [], q12: [], q24: [], V: [], corr: [], gini: [],
  }]));
  for (let r = 0; r < RUNS; r++) {
    const seed = BASE_SEED + r;
    const world = makeWorld(seed, PI_BASE);
    const { jobs } = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
    const abilRng = mulberry32((seed ^ 0xab11) >>> 0);
    const ability = new Float64Array(POOL);
    for (let i = 0; i < POOL; i++) ability[i] = ABIL_LO + (ABIL_HI - ABIL_LO) * abilRng();
    for (const arm of ARMS) {
      const o = runArm(world, jobs, ability, arm, seed);
      const a = acc[arm];
      a.e1.push(o.effTraj[1]); a.e6.push(o.effTraj[6]); a.e12.push(o.effTraj[12]); a.e24.push(o.effTraj[24]);
      a.q1.push(o.qTraj[1]); a.q6.push(o.qTraj[6]); a.q12.push(o.qTraj[12]); a.q24.push(o.qTraj[24]);
      a.V.push(o.V); a.corr.push(o.corrAssign); a.gini.push(o.gAssign);
    }
  }
  const aggMS = (arr) => { const v = arr.filter((x) => !Number.isNaN(x)); return v.length ? `${mean(v).toFixed(3)}±${sd(v).toFixed(3)}` : "—"; };

  console.log(`\n# E6 - endogenous quality under reputational competition (runs=${RUNS}, seeds ${BASE_SEED}..${BASE_SEED + RUNS - 1}, N_p=${NP}, pool=${POOL}, cycles=${CYCLES}, scarcity=${SCARCITY}x, all-honest)`);
  console.log(`q = clamp01(0.25 + 0.45*a + 0.30*e), a~U(${ABIL_LO},${ABIL_HI}); imitate p=${IMITATE_PROB} step=${IMITATE_STEP}, decay=${DECAY_STEP}, noise=±${NOISE}; B3 assign weight (${REP_FLOOR}+R)^2`);
  const LABEL = { B1: "B1 opaque (invisible/random)", B2: "B2 mirror (visible/random)", B3: "B3 architecture (visible/rep-weighted)" };
  console.log("\n| arm | effort c1 | c6 | c12 | c24 | quality c1 | c6 | c12 | c24 | V/budget | corr(ability,assign) | assign Gini |");
  console.log("|---|---|---|---|---|---|---|---|---|---|---|---|");
  for (const n of ARMS) {
    const a = acc[n];
    console.log(`| ${LABEL[n]} | ${aggMS(a.e1)} | ${aggMS(a.e6)} | ${aggMS(a.e12)} | ${aggMS(a.e24)} | ${aggMS(a.q1)} | ${aggMS(a.q6)} | ${aggMS(a.q12)} | ${aggMS(a.q24)} | ${aggMS(a.V)} | ${aggMS(a.corr)} | ${aggMS(a.gini)} |`);
  }
  console.log("\nPaired contrasts on final V (same seeds, mean [95% CI], n=" + RUNS + "):");
  console.log(`  B3 - B1 = ${pairedDiff(acc.B3.V, acc.B1.V)}`);
  console.log(`  B3 - B2 = ${pairedDiff(acc.B3.V, acc.B2.V)}`);
  console.log(`  B2 - B1 = ${pairedDiff(acc.B2.V, acc.B1.V)}`);

  process.exit(0);
}

// --- E7: headline sensitivity under a calibrated status quo -------------------
// Pre-registered in research/e7-calibrated-baseline-design.md (predictions
// committed before this implementation; pre-run amendment of 2026-07-04 governs
// parameter sourcing). Four interventions vs E5: (1) a calibrated institutional
// baseline S' whose parameters are audit-anchored per docs/105 and
// research/audit-evidence-base.md — p=0.35 (Chile CEA-CGR 34% MOP observation
// floor, mid of the 0.30-0.50 design band), a=0.5 (payment-state retention
// practice), r=0.3 (ASF Mexico recovery band, sensitivity-checked), R=0 (no
// reputational memory: the instrument the status quo genuinely lacks),
// official completion still credited on paper certification for undetected
// diversion; (2) scaled planner bandwidth K=max(3, round(0.15*Np)), coinciding
// with E4's fixed 30 at Np=200; (3) municipal scales Np in {10,20,40} plus 200;
// (4) adversarial common-mode signal bias: a beta share of informed citizens is
// coordinated on a favored project set (10% of projects), reporting near-max
// signals — the bias geometry E4 declared untested. Fully deterministic.
if (args.exp === "e7") {
  const { N, CYCLES, ETA, SCARCITY } = CONFIG;
  const PI_BASE = 0.3, KC = 4, SIGMA_C = 0.35, SIGMA_P = 0.10, SLOTS = 6;
  const K_FIXED = 30;          // E4/E5 continuity bandwidth (adversarial, labeled)
  const K_RATIO = 0.15;        // scaled planner bandwidth ratio
  const POOL = 120, L = 6;     // executor pool held constant across scales
  const SCALES = [10, 20, 40, 200];
  const BETAS = [0, 0.05, 0.10, 0.20, 0.30, 0.40];
  const FAV_SHARE = 0.10;      // favored-set size for coordinated signalers

  const kScaled = (Np) => Math.max(3, Math.round(K_RATIO * Np));

  const makeNormal = (rng) => (mu, sigma) => {
    let u1 = rng();
    if (u1 < 1e-12) u1 = 1e-12;
    const u2 = rng();
    return mu + sigma * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };
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
  const sampleDistinct = (pick, rng, k, seen) => {
    seen.clear();
    const out = [];
    let guard = 0;
    while (out.length < k && guard < k * 200) {
      const j = pick(rng);
      if (!seen.has(j)) { seen.add(j); out.push(j); }
      guard++;
    }
    return out;
  };

  // Base world is built identically for every beta at a given (seed, Np); the
  // coordinated bias is applied afterwards from its own RNG stream so that
  // beta sweeps compare the same world under different signal corruption.
  const makeWorld = (seed, Np, piInformed) => {
    const rng = mulberry32(seed);
    const theta = new Float64Array(Np), s = new Float64Array(Np), target = new Float64Array(Np);
    const targetScale = (SCARCITY * N * CYCLES) / Np;
    for (let j = 0; j < Np; j++) {
      theta[j] = rng();
      s[j] = Math.max(0.01, 0.2 * theta[j] + 0.8 * rng());
      target[j] = (0.5 + rng()) * targetScale;
    }
    const normal = makeNormal(rng);
    const salienceW = new Float64Array(Np);
    for (let j = 0; j < Np; j++) salienceW[j] = 1 + s[j];
    const pickCov = buildSampler(salienceW);
    const sigSum = new Float64Array(Np), sigCount = new Int32Array(Np);
    const informedProjs = [], informedSigs = [];
    const seen = new Set();
    const kc = Math.min(KC, Np);
    for (let i = 0; i < N; i++) {
      if (rng() < piInformed) {
        const projs = sampleDistinct(pickCov, rng, kc, seen);
        const sigs = new Float64Array(projs.length);
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          const sig = theta[j] + normal(0, SIGMA_C);
          sigs[m] = sig; sigSum[j] += sig; sigCount[j]++;
        }
        informedProjs.push(projs); informedSigs.push(sigs);
      }
    }
    const pickPlan = buildSampler(salienceW);
    const inspectedFixed = sampleDistinct(pickPlan, rng, Math.min(K_FIXED, Np), seen);
    const wPlannerFixed = new Float64Array(Np).fill(0.5);
    for (const j of inspectedFixed) wPlannerFixed[j] = theta[j] + normal(0, SIGMA_P);
    const inspectedScaled = sampleDistinct(pickPlan, rng, Math.min(kScaled(Np), Np), seen);
    const wPlannerScaled = new Float64Array(Np).fill(0.5);
    for (const j of inspectedScaled) wPlannerScaled[j] = theta[j] + normal(0, SIGMA_P);
    const wOpenRaw = new Float64Array(Np);
    for (let j = 0; j < Np; j++) wOpenRaw[j] = sigCount[j] > 0 ? sigSum[j] / sigCount[j] : 0.5;
    return { Np, theta, s, target, informedProjs, informedSigs, sigSum, sigCount, wPlannerFixed, wPlannerScaled, wOpenRaw };
  };

  // Coordinated common-mode bias: the first beta share of informed citizens is
  // redirected to a favored project set with near-max reported signals; the
  // open vector and their active behavior both inherit the corruption.
  const applyBias = (world, beta, seed) => {
    if (beta === 0) return { ...world, favSet: null };
    const rng = mulberry32((seed ^ 0xb1a5) >>> 0);
    const { Np } = world;
    const favCount = Math.max(1, Math.round(FAV_SHARE * Np));
    const fav = []; const seenF = new Set();
    while (fav.length < favCount) {
      const j = Math.floor(rng() * Np);
      if (!seenF.has(j)) { seenF.add(j); fav.push(j); }
    }
    const nInf = world.informedProjs.length;
    const nCoord = Math.round(beta * nInf);
    const informedProjs = world.informedProjs.slice();
    const informedSigs = world.informedSigs.slice();
    const kc = Math.min(Math.min(KC, Np), favCount);
    for (let c = 0; c < nCoord; c++) {
      const projs = []; const s2 = new Set();
      let guard = 0;
      while (projs.length < kc && guard < kc * 200) {
        const j = fav[Math.floor(rng() * favCount)];
        if (!s2.has(j)) { s2.add(j); projs.push(j); }
        guard++;
      }
      const sigs = new Float64Array(projs.length);
      for (let m = 0; m < projs.length; m++) sigs[m] = 0.9 + 0.1 * rng();
      informedProjs[c] = projs; informedSigs[c] = sigs;
    }
    const sigSum = new Float64Array(Np), sigCount = new Int32Array(Np);
    for (let c = 0; c < informedProjs.length; c++) {
      const projs = informedProjs[c], sigs = informedSigs[c];
      for (let m = 0; m < projs.length; m++) { sigSum[projs[m]] += sigs[m]; sigCount[projs[m]]++; }
    }
    const wOpenRaw = new Float64Array(Np);
    for (let j = 0; j < Np; j++) wOpenRaw[j] = sigCount[j] > 0 ? sigSum[j] / sigCount[j] : 0.5;
    return { ...world, informedProjs, informedSigs, sigSum, sigCount, wOpenRaw, favSet: new Set(fav) };
  };

  // Selection stage (E5 machinery, parameterized by scale and planner vector).
  const allocateSelection = (world, cfg, seed, salt) => {
    const rng = mulberry32((seed ^ ((salt + 1) * 0x9e3779b9)) >>> 0);
    const { Np, theta, s, target, informedProjs, informedSigs, wOpenRaw, wPlannerFixed, wPlannerScaled } = world;
    const { d, pi, constructor } = cfg;
    const funded = new Float64Array(Np);
    const closeCycle = new Int32Array(Np).fill(-1);
    const nInformed = informedProjs.length;
    const defaultCount = Math.round(N * d);
    const activeCount = N - defaultCount;
    const activeInformed = Math.round(activeCount * pi);
    const activeUninformed = activeCount - activeInformed;
    const staticW = constructor === "plannerFixed" ? wPlannerFixed
      : constructor === "plannerScaled" ? wPlannerScaled : wOpenRaw;
    let staticOrder = null;
    if (defaultCount > 0) staticOrder = Array.from({ length: Np }, (_, j) => j).sort((a, b) => staticW[b] - staticW[a]);
    for (let t = 0; t < CYCLES; t++) {
      for (let c = 0; c < activeInformed && nInformed > 0; c++) {
        const ci = Math.floor(rng() * nInformed);
        const projs = informedProjs[ci], sigs = informedSigs[ci];
        let bestIdx = -1, bestVal = -Infinity;
        for (let m = 0; m < projs.length; m++) {
          const j = projs[m];
          if (funded[j] >= target[j]) continue;
          if (sigs[m] > bestVal) { bestVal = sigs[m]; bestIdx = j; }
        }
        if (bestIdx >= 0) funded[bestIdx] += Math.min(1, target[bestIdx] - funded[bestIdx]);
      }
      if (activeUninformed > 0) {
        let maxFunded = 1;
        for (let j = 0; j < Np; j++) if (funded[j] > maxFunded) maxFunded = funded[j];
        const topIdx = [], topVis = [];
        for (let j = 0; j < Np; j++) {
          const vis = s[j] * (1 + ETA * (funded[j] / maxFunded));
          if (topIdx.length < SLOTS) { topIdx.push(j); topVis.push(vis); }
          else {
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
            funded[pick] += paid; amount -= paid;
          }
        }
      }
      if (defaultCount > 0 && staticOrder) {
        let budget = defaultCount;
        for (let oi = 0; oi < staticOrder.length; oi++) {
          if (budget <= 0) break;
          const j = staticOrder[oi];
          const room = target[j] - funded[j];
          if (room <= 0) continue;
          const paid = Math.min(budget, room);
          funded[j] += paid; budget -= paid;
        }
      }
      for (let j = 0; j < Np; j++) if (closeCycle[j] < 0 && funded[j] >= target[j]) closeCycle[j] = t;
    }
    const flag = new Array(Np);
    for (let j = 0; j < Np; j++) flag[j] = funded[j] >= target[j] ? 1 : 0;
    const jobs = [];
    for (let j = 0; j < Np; j++) if (flag[j]) jobs.push({ j, cycle: closeCycle[j], budget: target[j] });
    jobs.sort((a, b) => (a.cycle - b.cycle) || (a.j - b.j));
    let favBudget = 0, totBudget = 0;
    if (world.favSet) for (const job of jobs) { totBudget += job.budget; if (world.favSet.has(job.j)) favBudget += job.budget; }
    return { funded, flag, jobs, selTheta: pearson(flag, Array.from(theta)), favShare: world.favSet && totBudget ? favBudget / totBudget : null };
  };

  // Delivery regimes. OPAQUE and VERIFIED are E5's; CALIBRATED is the
  // audit-anchored institutional status quo (docs/105 evidence base).
  const OPAQUE = { name: "opaque", p: 0.10, a: 0.85, r: 0.0, gamma: 0.0, R: 0.0, exclude: false };
  const CALIBRATED = { name: "calibrated", p: 0.35, a: 0.5, r: 0.3, gamma: 0.0, R: 0.0, exclude: false };
  const VERIFIED = { name: "verified", p: 0.75, a: 0.2, r: 0.5, gamma: 0.15, R: 0.3, exclude: true };
  const threshold = (reg) => reg.p * ((1 - reg.a * (1 - reg.r)) + reg.gamma + reg.R);

  const execute = (world, port, reg, execSeed) => {
    const { theta } = world;
    const poolRng = mulberry32((execSeed ^ 0xa1) >>> 0);
    const assignRng = mulberry32((execSeed ^ 0xb2) >>> 0);
    const costRng = mulberry32((execSeed ^ 0xc3) >>> 0);
    const detectRng = mulberry32((execSeed ^ 0xd4) >>> 0);
    const replaceRng = mulberry32((execSeed ^ 0xe5) >>> 0);
    const thr = threshold(reg);
    const pool = new Array(POOL);
    for (let i = 0; i < POOL; i++) pool[i] = poolRng() < 0.7 ? 0 : 1;
    const jobs = port.jobs;
    let totalBudget = 0, deliveredBudget = 0, officialBudget = 0, value = 0;
    let ptr = 0;
    for (let cyc = 0; cyc < CYCLES; cyc++) {
      while (ptr < jobs.length && jobs[ptr].cycle === cyc) {
        const job = jobs[ptr++];
        const th = theta[job.j], budget = job.budget;
        const ei = Math.floor(assignRng() * POOL);
        const type = pool[ei];
        let delivered = 0, official = 0, caught = false;
        for (let m = 0; m < L; m++) {
          if (type === 0) { delivered++; official++; continue; }
          const ceff = 0.3 + 0.6 * costRng();
          if (ceff > thr) {
            const detected = detectRng() < reg.p;
            if (detected) caught = true;
            else official++;
          } else { delivered++; official++; }
        }
        deliveredBudget += (delivered / L) * budget;
        officialBudget += (official / L) * budget;
        value += th * (delivered / L) * budget;
        totalBudget += budget;
        if (reg.exclude && caught) pool[ei] = replaceRng() < 0.7 ? 0 : 1;
      }
    }
    return {
      V: totalBudget ? value / totalBudget : 0,
      leak: totalBudget ? 1 - deliveredBudget / totalBudget : 0,
      visGap: totalBudget ? (officialBudget - deliveredBudget) / totalBudget : 0,
      selTheta: port.selTheta,
    };
  };

  const fmtMS = (arr) => `${mean(arr).toFixed(3)}±${sd(arr).toFixed(3)}`;
  const meanCI = (arr) => {
    const m = mean(arr);
    const se = sd(arr) / Math.sqrt(arr.length);
    const t = 2.093;
    return `${m.toFixed(3)} [${(m - t * se).toFixed(3)}, ${(m + t * se).toFixed(3)}]`;
  };

  console.log(`\n# E7 - headline sensitivity under a calibrated status quo (runs=${RUNS}, seeds ${BASE_SEED}..${BASE_SEED + RUNS - 1}, N=${N}, cycles=${CYCLES}, scarcity=${SCARCITY}x)`);
  console.log(`regimes: opaque thr=${threshold(OPAQUE).toFixed(4)}, calibrated thr=${threshold(CALIBRATED).toFixed(4)} (p=0.35,a=0.5,r=0.3,R=0), verified thr=${threshold(VERIFIED).toFixed(4)}; opportunist c_eff~U(0.3,0.9); scaled planner K=max(3, round(0.15*Np))`);

  // --- main: arms across scales, beta=0 ---------------------------------------
  const ARMS = ["S", "Sp", "A1p", "A3p", "A2"];
  const LABEL = {
    S: "S   central-fixedK / zero-control (E5 continuity)",
    Sp: "S'  central-scaledK / calibrated (status quo)",
    A1p: "A1' central-scaledK / verified",
    A3p: "A3' distributed / calibrated",
    A2: "A2  distributed / verified (full architecture)",
  };
  for (const Np of SCALES) {
    const acc = Object.fromEntries(ARMS.map((n) => [n, { V: [], leak: [], visGap: [], sel: [] }]));
    const ratios = [], ratiosS = [];
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const world = makeWorld(seed, Np, PI_BASE);
      const portS = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "plannerFixed" }, seed, 0);
      const portSp = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "plannerScaled" }, seed, 1);
      const portD = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
      const execS = (seed * 4 + 1) >>> 0, execSp = (seed * 4 + 2) >>> 0, execD = (seed * 4 + 3) >>> 0;
      const out = {
        S: execute(world, portS, OPAQUE, execS),
        Sp: execute(world, portSp, CALIBRATED, execSp),
        A1p: execute(world, portSp, VERIFIED, execSp),
        A3p: execute(world, portD, CALIBRATED, execD),
        A2: execute(world, portD, VERIFIED, execD),
      };
      for (const n of ARMS) {
        acc[n].V.push(out[n].V); acc[n].leak.push(out[n].leak); acc[n].visGap.push(out[n].visGap); acc[n].sel.push(out[n].selTheta);
      }
      if (out.Sp.V > 1e-9) ratios.push(out.A2.V / out.Sp.V);
      if (out.S.V > 1e-9) ratiosS.push(out.A2.V / out.S.V);
    }
    console.log(`\n## E7 main arms, Np=${Np} (matched portfolios and execution streams per seed, beta=0)\n`);
    console.log("| arm | V/budget | leak | visibility gap | sel(theta) |");
    console.log("|---|---|---|---|---|");
    for (const n of ARMS) {
      const a = acc[n];
      console.log(`| ${LABEL[n]} | ${fmtMS(a.V)} | ${fmtMS(a.leak)} | ${fmtMS(a.visGap)} | ${fmtMS(a.sel)} |`);
    }
    const ratioNote = ratios.length < RUNS ? ` (${RUNS - ratios.length} seed(s) with V(S')=0 excluded)` : "";
    console.log(`\nheadline ratio V(A2)/V(S') per-seed = ${meanCI(ratios)}${ratioNote}   ratio of means = ${(mean(acc.A2.V) / mean(acc.Sp.V)).toFixed(3)}   (vs zero-control per-seed: ${meanCI(ratiosS)})`);
    console.log(`delivery effect vs calibrated  V(A1')-V(S') = ${pairedDiff(acc.A1p.V, acc.Sp.V)}`);
    console.log(`selection effect vs calibrated V(A3')-V(S') = ${pairedDiff(acc.A3p.V, acc.Sp.V)}`);
    console.log(`residual visibility gap of the calibrated status quo: visGap(S') = ${fmtMS(acc.Sp.visGap)}`);
    console.log(`selection at this scale: sel(central-scaledK) = ${fmtMS(acc.Sp.sel)}, sel(distributed) = ${fmtMS(acc.A2.sel)}, paired diff = ${pairedDiff(acc.A2.sel, acc.Sp.sel)}`);
  }

  // --- E7s POST-HOC sensitivity: municipal full-coverage planner --------------
  // NOT pre-registered. The committed 15%-bandwidth scaling turned out to make
  // central selection near-random at EVERY scale (a planner inspecting 15% of
  // candidates is blind to the rest). The realistic municipal comparator
  // inspects essentially all of its 10-40 candidates — which is the fixed-K
  // planner (K=min(30,Np) covers the whole pool at these scales). This block
  // reports the calibrated status quo under that full-coverage planner (S'fc)
  // so the headline at municipal scale is measured against the strongest
  // honest comparator, per A036's own logic.
  console.log(`\n## E7s POST-HOC - municipal full-coverage planner (S'fc = central fixed-K + calibrated delivery)\n`);
  console.log("| Np | V(S'fc) | leak(S'fc) | visGap(S'fc) | sel(S'fc) | V(A2) | ratio V(A2)/V(S'fc) per-seed | ratio of means |");
  console.log("|---|---|---|---|---|---|---|---|");
  for (const Np of [10, 20, 40]) {
    const fc = { V: [], leak: [], visGap: [], sel: [] }, a2 = { V: [] };
    const ratios = [];
    for (let r = 0; r < RUNS; r++) {
      const seed = BASE_SEED + r;
      const world = makeWorld(seed, Np, PI_BASE);
      const portS = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "plannerFixed" }, seed, 0);
      const portD = allocateSelection(world, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
      const execS = (seed * 4 + 1) >>> 0, execD = (seed * 4 + 3) >>> 0;
      const oFC = execute(world, portS, CALIBRATED, execS);
      const oA2 = execute(world, portD, VERIFIED, execD);
      fc.V.push(oFC.V); fc.leak.push(oFC.leak); fc.visGap.push(oFC.visGap); fc.sel.push(oFC.selTheta);
      a2.V.push(oA2.V);
      if (oFC.V > 1e-9) ratios.push(oA2.V / oFC.V);
    }
    const note = ratios.length < RUNS ? ` (${RUNS - ratios.length} excl.)` : "";
    console.log(`| ${Np} | ${fmtMS(fc.V)} | ${fmtMS(fc.leak)} | ${fmtMS(fc.visGap)} | ${fmtMS(fc.sel)} | ${fmtMS(a2.V)} | ${meanCI(ratios)}${note} | ${(mean(a2.V) / mean(fc.V)).toFixed(3)} |`);
  }

  // --- E7b: adversarial signal bias sweep --------------------------------------
  for (const Np of [40, 200]) {
    console.log(`\n## E7b coordinated signal bias sweep, Np=${Np} (distributed arms; favored set=10% of projects)\n`);
    console.log("| beta | sel(distributed) | sel(central-scaledK ref) | favored-set budget share | V(A3' calibrated) | V(A2 verified) |");
    console.log("|---|---|---|---|---|---|");
    for (const beta of BETAS) {
      const selD = [], selC = [], fav = [], vA3 = [], vA2 = [];
      for (let r = 0; r < RUNS; r++) {
        const seed = BASE_SEED + r;
        const world = makeWorld(seed, Np, PI_BASE);
        const biased = applyBias(world, beta, seed);
        const portSp = allocateSelection(world, { d: 1.0, pi: PI_BASE, constructor: "plannerScaled" }, seed, 1);
        const portD = allocateSelection(biased, { d: 0.8, pi: PI_BASE, constructor: "openStatic" }, seed, 3);
        const execD = (seed * 4 + 3) >>> 0;
        const oA3 = execute(world, portD, CALIBRATED, execD);
        const oA2 = execute(world, portD, VERIFIED, execD);
        selD.push(portD.selTheta); selC.push(portSp.selTheta);
        fav.push(portD.favShare === null ? NaN : portD.favShare);
        vA3.push(oA3.V); vA2.push(oA2.V);
      }
      const favStr = fav.some((x) => Number.isNaN(x)) ? "—" : fmtMS(fav);
      console.log(`| ${(beta * 100).toFixed(0)}% | ${fmtMS(selD)} | ${fmtMS(selC)} | ${favStr} | ${fmtMS(vA3)} | ${fmtMS(vA2)} |`);
    }
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
