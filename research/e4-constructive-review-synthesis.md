# E4 — Synthesis of the 6-reviewer constructive round

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Status
Consolidation of a supportive-reviewer pool (6 agents) convened to strengthen the
E4 line (v4 symmetric-frontier + v5 capture) and its presentation before
propagating to the paper. Roles: statistical/mathematical modeler, mechanism-design
theorist, simulation methodologist, science communicator, empirical-calibration
specialist, publication strategist. Feeds the Tier 1/2/3 improvement plan.

## The standout (verified): an analytical backbone the simulation already obeys
Both the statistical modeler and the mechanism-design theorist independently derived
— and the statistical modeler numerically verified against our own tables — that the
whole E4 line is governed by three closed forms:
1. **Parity law β\* = 1 − γ.** Both institutions estimate the same Samuelson value
   `T = S⁺ − S⁻`, ranking by `T̂ = S⁺ − θ·S⁻`. Central keeps θ_C = γ of perceived
   harm; distributed reveals θ_D = 1 − β (global participation p cancels in the
   ranking). True weight is 1, so distributed dominates iff |1−θ_D| < |1−θ_C|, i.e.
   **β < 1 − γ**; parity on the anti-diagonal. Matches the frontier cells exactly
   (γ+β=1 → ~1.0). The one "anomaly" (γ=1,β=0 → 0.89) is the **variance** tie-breaker
   (central proxy noise vs distributed's zero revelation noise) — the bias–variance
   decomposition predicts it.
2. **Capture threshold ρ(C) = (k_d·C + p_d·F)/(k_c + p_c·F)** ≈ 6–10×, rising in
   project cost; the distributed threshold is **floored by k_d** (equal-wallet
   acquisition scaling) while the central's → 0 as its detection shrinks.
3. **Detection-floor theorem: m·q ≥ −ln(1−p).** Reproduces the floor table
   (0.11, 0.69, 2.30, 4.61) to the decimal; only the product m·q matters.
Effect: converts "simulation seeking a headline" into "theorem confirmed by
simulation." Highest-value, low-effort. → Tier 1.

## Key convergences across reviewers
- **Reframe the softening as an UPGRADE** (communicator, strategist, methodologist):
  a frontier + a threshold are harder to attack than a multiplier — they contain
  their own attack. "We stress-tested our own headline and it became a regime map."
- **Promote capture-resistance to a named pillar / the unifying spine** (communicator,
  strategist): most PoliSci-legible, the "objection became the argument" jiu-jitsu,
  and it is the interaction that ties allocation (1) and delivery (2) together.
- **Effects (1) and (2) are NOT independent — do not multiply to 2.2×** (statistical
  modeler): capture shows the allocation gain collapses if detection fails, so the
  integrity layer is the **precondition** that keeps allocation from being reversed,
  not a second multiplier. Reframe as dependency.
- **Name the shared shape "conditional frontier"** once (strategist): γ, β, m·q are
  one methodological signature, not three caveats.
- **Fix the metric**: report **%oracle + box-IQR + fraction-favoring**; the D/C ratio
  explodes (→6.21×) when central→0 — a metric artifact. Unify v4 with v5 (statistical
  modeler, methodologist).

## Per-reviewer highest-value recommendations
- **Statistical modeler:** publish the three closed forms; state the bias–variance
  decomposition; switch to %oracle gap; add invariance propositions (scale, turnout,
  CLT-shape); separate seed vs parameter uncertainty.
- **Mechanism-design theorist:** derive β\*=1−γ as a proposition; **VCG as infeasible
  first-best → both are second-best (Lipsey–Lancaster)**; **Ostrom 1990 Principle 4 =
  the m·q floor** (highest-ROI citation, left-legible); **Wittman 1989 steelman** +
  Caplan/Achen-Bartels/Gilens-Page; **Condorcet Jury Theorem independence = the v4↔v5
  bridge** (capture defends independence); equal wallet in the quadratic-voting family;
  Gibbard–Satterthwaite → claim capture-resistance not strategy-proofness; Hirschman
  for β; **Sen aggregation caveat** (Sen for the numerator's nature, Samuelson for the
  sum); Grossman-Helpman / Laffont-Tirole / Shleifer-Vishny for capture.
- **Simulation methodologist:** global sensitivity screen (Morris → Sobol) as a
  tornado; sweep the silent constants (interested-set size, budget ratio 1/3, cost
  distribution); alternative participation model (intensity-weighted); make the
  held-out confirmatory runnable; factor a shared kernel; machine-readable outputs +
  one-command repro; four figures (frontier heatmap w/ β=1−γ, tornado, threshold
  curves, detection surface).
- **Science communicator:** three-pillar abstract; capture-resistance its own beat;
  burden-of-proof inversion as a sentence; demote ~2× to a labeled representative
  point; drafted abstract blocks provided.
- **Empirical calibration:** calibrate central %oracle (46–68%) vs **World Bank IEG /
  Flyvbjerg-Oxford megaproject DB** (an output we already compute — highest ROI);
  anchor β to PB representation (NYC/Paris/Porto Alegre/Decidim/Consul; Verba-Schlozman-
  Brady); q,m to complaint/whistleblowing base rates (TARP ~4%, FTC, NYC 311, SEC) +
  **Olken 2007** (audits vs community monitoring — our honest condition made empirical);
  capture params to procurement corruption (Olken; Bandiera-Prat-Valletti; WB Enterprise
  Surveys bribe depth); **field evidence for Finding 1: Gonçalves 2014** (PB → lower
  infant mortality), Touchton-Wampler; a **calibration-targets appendix table**.
- **Publication strategist:** make capture the spine; frame the rework as strength;
  master carries the claim, companion carries the machinery; preempt the 3 known
  critiques by mapping them onto the frontier (β IS the participation-bias critique);
  one-sentence contribution; venue = interdisciplinary governance (split master+companion).

## Tier plan (execution order)
- **Tier 1 (before propagating):** analytical backbone (3 propositions, verified) +
  abstract reframe to three pillars w/ the dependency correction + metric fix (%oracle
  + IQR + fraction-favoring).
- **Tier 2:** keystone citations into the design docs; empirical-calibration note +
  calibration-targets table; global sensitivity (Morris) + silent-constant sweeps;
  figures.
- **Tier 3:** reproducibility packaging (shared kernel, machine-readable, one command,
  runnable held-out); master/companion split decision.
