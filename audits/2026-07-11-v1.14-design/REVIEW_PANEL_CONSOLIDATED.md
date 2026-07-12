# E4 v6 — consolidated findings (5-agent panel + Codex v5) — 2026-07-11

Five adversarial reviewers (stats, engine, repro, econ, paper) + Codex v5. Core model/mechanism verified CORRECT
(rev-engine, empirically); the closed output schema is a genuine barrier. The **evidence layer is under-certified
and partly gerrymandered**, **provenance (theta_id) is broken**, there is a **latent crash**, and the **paper draft
over-reaches and contradicts the prior NO-GO**. Verdicts: econ MAJOR, paper MAJOR, repro CONDITIONAL, stats
NEEDS-CHANGES, engine CORRECT-with-1-bug.

## TIER 1 — CRITICAL (correctness + integrity; do first)
- **C1. Latent crash on the fail-closed path.** `evidence.mjs:100` dereferences `NUM.min_kept_worlds` (renamed to
  `min_kept_floor/frac`) → TypeError exactly when the base-point-insufficient abort should print. [engine#1, stats#8]
  Fix: use the real fields.
- **C2. `theta_id` does not identify the run (provable).** Manifest omits resolved THETA values, swept D_F/R_α
  bounds, and NUM/CLASSIFY; `contractHash()` is dead code. Mutating `b_H_C.value`, `p.df`, `bootstrap_reps` leaves
  `theta_id` byte-identical. [repro#1] Fix: `theta_id = hash(resolved contract THETA+NUM+CLASSIFY+EVIDENCE + config)`;
  emit `contract_hash` too; fold in `contractHash()`.
- **C3. Undisclosed change of estimand.** Engine computes ratio-of-sums `Σ(D−C)/ΣO` (`engine.mjs:156-161`) but
  `DESIGN_SKETCH_v5:54`, `e4-parity-theorem.md:27`, and the `engine.mjs:131` comment still say per-world mean
  `E[(D−C)/O]`. They agree at base (0.464 vs 0.471) but diverge at heterogeneous-O corners that set the envelope.
  [stats#1] Fix: reconcile all three, log the post-hoc revision, add a both-estimands sign-agreement line.
- **C4. Gerrymandered sweep (the honesty defect).** The thesis levers — visibility tail shape `a_V,b_V` and the
  convex gate `s_exp` (headline band `[1,4]` never concave) — plus `phi,a_r,b_r,c_lo,c_hi,sigma_v,m_q,s_q` are FROZEN
  at base, yet `evidence.mjs`/paper call it "the full physically-possible set." Probes: ros swings 0.37–0.49 across
  `a_V,b_V`. So "distributed wins the long tail" ≈ "we assumed blindness on the long tail" — violates the
  don't-gerrymander guardrail. [econ#1, stats#4] Fix: move `a_V,b_V,phi,a_r,b_r` into `EVIDENCE.uncertain`, let
  `s_exp<1` at widest α, space-filling design (not corner enumeration), re-derive, RELABEL honestly.
- **C5. Paper contradicts its own pre-registered NO-GO.** The draft's 46%/78% headline sits in the same §6 as the
  symmetry-gate `Δ=0.026 < 0.05` NO-GO (`paper.md:546-566`) with no reconciliation → reads as result-shopping.
  Root cause (verified): the gate switches OFF harm-myopia; control C4 shows a harm-aware planner collapses m
  46%→11% (~76% of the effect is the harm-visibility assumption). [paper#1] Fix: continuity paragraph — different
  conditional question; the gate deliberately excludes this mechanism; sign-map ≠ magnitude claim.

## TIER 2 — HIGH (evidence honesty + hardening)
- **H1. Sign-shares (78/21) are a sampling artifact** — 66% of 193 points are measure-zero corners; not a
  probability/volume. [stats#2] Fix: drop the percentages (keep `sign_status`) or replace with a uniform-volume MC
  share + SE.
- **H2. R_α envelope uncertified yet stamped `numerical:resolved`** — endpoints are single 110-world estimates, no
  error bars; 64 pts in 7-D under-cover. [stats#3] Fix: MC-enclose endpoints, label as inner bound "≥ this wide",
  gate `resolved` on envelope error (not base-CI width).
- **H3. Legacy guard covers 2 of ~19 retired engines** — `e4-v3-headline.mjs` ("1.98x","10.97x"), `e5-sp-model.mjs`
  ("1.36x") run unguarded; test checks only e4-v4. [repro#2] Fix: universal guard on all retired multiplier engines
  + a test that greps the sim dir for unguarded `x`/`D/C` emitters.
- **H4. Paper hides numbers** — the Result paragraph reports none while the engine emits 78/21, m̂=46.4%, three R_α
  intervals. [paper#2] Fix: report with interpretation (>100% = losing arm destroys value).
- **H5. Missing inactivation controls** — β=0 sign-invariance, b_H_C=0/s=0 harm-inert, λ=0 P-inert (declared in
  DESIGN §5-iii, only C1-C4 built; C2 tests magnitude not direction). [engine#2] Fix: add the three + regressions.

## TIER 3 — MEDIUM
- **M1. Theorem over-billed.** It is a textbook selection identity on NET-S with NO harm gate; engine uses `S⁺` +
  gate; theorem-check never checks engine→lemma. [paper, engine#3, stats#7] Fix: demote to "validation of the
  no-myopia Gaussian limit", not "the parity boundary".
- **M2. Text embargo is a token blocklist** — Cyrillic `х`, `✕`, "2.2-fold", "2.2 times" pass; `\b` misses `×`.
  [repro#3] Fix: broaden (normalize confusables, block "N-fold"/"N times"); note the closed schema is the real barrier.
- **M3. `V ⊥ r` by fiat** — distributed keeps noise-free harm voice exactly where central is blinded. [econ#2]
  Fix: add `corr(V, r)` as a swept dependence.
- **M4. Single-signed β** — no organized/NIMBY mobilization (β<0); its omission favors the distributed arm (can't
  express minority-veto downside). [econ#3] Fix: signed voice parameter (also in ANTIVALUE-MODELING backlog).
- **M5. π_deg self-referential** (relative o_min) + degeneracy fail-close unreachable. [stats#5] Fix: absolute or
  base-anchored o_min for π_deg; make degenerate reachable.
- **M6. validateDomain forces `zeta≥0`** (contra dm `[-1,1]`); `validateConfig` accepts ±Infinity; `atlas.mjs`
  bypasses the sole adapter. [repro#4] Fix: correct zeta bound, finiteness in validateConfig, route/label atlas.
- **M7. admin-leg `m_total` multiplies matched-budget m by a budget factor — spurious separability** (selection
  interacts with phi). [econ#4] Fix: note the interaction; don't multiply — re-run selection under the reduced budget.
- **M8. Residual transport overclaims** in companions (`foundation:4-5` vs `:55`; `anchors:18,24`). [econ#5, paper]

## TIER 4 — LOW
prior-art deltas missing from section body; single greedy-rule confound → reframe as a strength (identical
interface); base-CI oversells precision [stats#6]; `exponential()` ~1e-12 negative edge; oracle greedy≠optimal
knapsack (footnote); no CI / `npm test`; "roughly half" → cite exact control (m 46→11, ~76%).

## Cross-cutting read
The model is honest and correct; the **headline over-claims what the evidence certifies**. The two moves that most
raise credibility: **(C4) de-gerrymander the sweep** and **(C5) reconcile with the NO-GO** — together they reframe
the whole result as "here is how much the winner depends on each assumption", which is stronger than any single
number. Expect the 78/21 to move toward more indeterminacy after C4 — that is the honest outcome.
