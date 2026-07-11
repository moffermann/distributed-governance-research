# Adversarial critique of E4 design sketch v4 — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). Read
`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md` (the NEW design), `CRITIQUE_v3_SUMMARY.md` + the seven
`critique-v3-*.md` (your prior verdict: NEEDS CHANGES; 1 cleared, 4 partial, 2 not cleared; multiplier-relapse
risk MATERIAL), plus `audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md`,
`research/e4-value-estimation-foundation.md`, `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md`, and the
engines `scripts/simulation/e5-sp-symmetry-gate.mjs`, `scripts/simulation/e4-v4-symmetric-frontier.mjs`.

Context: Path B; multiplier retired. v4 is a rewrite as ONE unit-consistent model contract on the **mean value
scale**, meant to close your v3 blockers: (1) scale fixed (distributed = baseline-expanded MNAR-biased MEAN, cond.
expectation printed); (2) identification fixed via **project-varying planner projection `v_{p,j}`** (the stadium
example) with a stated rank condition; (3) frozen estimand `m=E[(D-C)/O | O>o_min]` + `π_deg` + a full state
machine (incl. robust-negligible, sign-robust-immaterial, numerically-unresolved); (4) the joint-normal
fixed-threshold **theorem** stated with the large-K corollary, `a` removed from the benchmark, β as a CLT
approximation; (5) three-tier domains `R_α ⊆ D_F ⊆ D_M` (sign measure-free over `D_F`, magnitude over `R_α`,
`D_M\D_F` excluded); (6) closed output schema + ASCII/Unicode embargo + legacy runtime guard + fail-closed config;
(7) honest present-tense positioning + prior-art citations. A NEW **capability criterion** demands the design be
able to surface a strong result if the mechanism is real — NOT gerrymandered to a null NOR to a positive.

## IMPORTANT — use several parallel subagents (one per dimension). Do not go linear.

## Task
For EACH of the seven v3 blockers, decide cleared / partial / not-cleared and say precisely why, then attack what
remains. Dimensions (one subagent each):
1. **Unit consistency & the model contract** — is §B truly one runnable, mean-scale model across truth, both
   signals, delivery, oracle? Is the MNAR conditional expectation correct? Any hidden constant/law still outside
   `θ_all`? Any dead parameter?
2. **Identification** — does project-varying `v_{p,j}` with Cov(S,v_p)<1 actually identify `(a,b,w)`, or is there a
   residual collapse / weak-identification / selection-induced bias? Is the rank condition right? Is the bridge-data
   requirement honestly stated?
3. **Frozen estimand & state machine** — is `m` + `π_deg` genuinely one functional now? Are `o_min, δ` honestly
   fixed (not recycling 0.05)? Is the state machine complete and are any intervals mis-routed (esp. to
   `transport-indeterminate`)? Is the large-K link handled?
4. **Analytic theorem** — is the joint-normal fixed-threshold statement + `Q_C` (eq for distinct `Z`) + large-K
   corollary correct? Is removing `a` right? Is the β-moment CLT labeling honest? Sketch the proof or find the hole.
5. **Three-tier domains & capability criterion** — is `D_F` (sign, measure-free) vs `R_α` (magnitude, measured)
   coherent and un-gerrymanderable in BOTH directions? Is excluding `D_M\D_F` (sign-reversal) defensible, or does it
   smuggle the answer? Does the capability criterion hold?
6. **Mechanical embargo & engine spec** — is the closed schema + adapter + legacy guard + fail-closed config
   actually enforceable as specified? Any relapse path (ASCII/Unicode/opt-in ratio/legacy feed) left? Explicit
   yes/no on multiplier-relapse risk.
7. **Novelty & positioning + companion-doc alignment** — is the present-tense contribution honest now? Are the
   prior-art differentiations correct? Do `e4-value-estimation-foundation.md` / `E4-empirical-anchors.md` still
   contain any overclaim (proxy-anchored, novel force, extends β=1-η)?

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-v4-<dimension>.md` (verdict + specific issues + fixes,
real file:line). Then `audits/2026-07-11-v1.14-design/CRITIQUE_v4_SUMMARY.md`: overall verdict
(ready-to-preregister / needs-changes / not-viable), a per-blocker cleared/partial/not-cleared table (all 7),
remaining blockers ranked, the single sharpest improvement, an explicit yes/no on multiplier-relapse, and an
explicit yes/no on whether the capability criterion is met (can it surface a strong result if the mechanism is
real). Be candid; reproduce/inspect where useful; do not rubber-stamp. If v4 is genuinely ready to pre-register,
say so plainly.
