# Adversarial critique of E4 v1.14 — the CODE (not prose) — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). v5 is now IMPLEMENTED. Read the code
in `scripts/simulation/e4-v5/` — `contract.mjs`, `engine.mjs`, `schema.mjs`, `adapter.mjs`, `evidence.mjs`,
`controls.mjs`, `test.mjs` — plus `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md`, `ANTIVALUE-MODELING.md`,
`THREE-TIER-VARIABLE-DOMAINS.md`, and your prior verdict `CRITIQUE_v4_SUMMARY.md` + `critique-v4-*.md`
(NEEDS CHANGES; 0 cleared / 6 partial / 1 not; multiplier-relapse MATERIAL; capability criterion NOT met).

**You can and should RUN the code** (`npm run e4:controls`, `npm run e4:test`, `npm run e4:evidence`) and inspect it.

Context: Codex's own single sharpest v4 fix was "ship one versioned, machine-readable, outcome-blind contract that is
the only path to evidence." v5 does this: `contract.mjs` is the single source of truth (θ_all with D_M/D_F/R_α per
param, numerical constants, o_min/δ, closed output schema, embargo tokens, content hash; `validateConfig` fails
closed on unknown/unused). `engine.mjs` is a mean-scale DGP with first-class anti-value `S=S⁺−H`, an MNAR behavioral
coverage estimator, and the central **salience-gated harm-myopia** model
`M^C = a + b·S⁺ + w·(v_{p,j}−S⁺) − b_H^C·s(V_j)·H + η` (the thesis: the status quo has no voice for anti-value; the
central is myopic to harm, near-blind on the low-visibility long tail). `evidence.mjs` produces the partial-ID:
sign backbone measure-free over joint `D_F`, magnitude over `R_α` coverage family, four orthogonal status fields,
sign-reversal rival sensitivity. All negative controls and acceptance fixtures currently PASS; baseline
`m̂≈45.7%`, sign INDETERMINATE over full `D_F [−6%,110%]` but robustly positive over `R_α` (α=0.95 lower bound +14.5%).

## IMPORTANT — use several parallel subagents (one per dimension). Do not go linear. Run the code.

## Task
For EACH of your seven v4 blockers, decide cleared / partial / not-cleared **now that there is running code**, and
attack the implementation. Dimensions (one subagent each):
1. **Contract & engine unit-consistency** — run `e4:controls`. Is the mean-scale DGP correct in code? Is the
   anti-value decomposition `S=S⁺−H` and the MNAR estimator's realized behavior consistent with the printed
   `E[M^D|u]=S⁺−(1−β)H`? Any literal used in the engine that is NOT registered in `contract.mjs` (grep for numeric
   literals)? Any dead/unused registered parameter?
2. **Identification in practice** — does project-varying `v_{p,j}` plus the three separately-varying regressors
   (`S⁺`, `v_p`, `H`) actually identify `(a,b,w,b_H^C)`? Is there residual collinearity or weak identification? Does
   the `evidence.mjs` sweep's **corners+center** box actually find the extrema, or does non-monotonicity break it?
3. **Estimand & state-machine code** — are `o_min`, `δ`, `zero_tol` frozen in the contract and used correctly? Are
   the four orthogonal status fields (`sign/materiality/degeneracy/numerical`) correct and non-overlapping? Is
   materiality wrongly tied to the base-point CI rather than the sets? Any misclassification?
4. **Analytic theorem** — this is still NOT proven or regression-tested in code (a real gap). Does the numerical
   engine agree with the joint-normal fixed-threshold identity `V_k=q·μ_S+φ(z_q)·Cov(S,X_k)/sd(X_k)` in the normal
   limit? Specify the missing proof + regression test.
5. **Joint D_F/R_α & capability** — is the box marginal or genuinely joint? Is the `ALPHA_FACTOR` coverage-family
   scaling defensible or arbitrary? Can `R_α` still be gerrymandered to a null OR a positive? Do the acceptance
   fixtures (strong-distributed / strong-central / null) actually PROVE the capability criterion, or is the
   `boundary` fixture (m≈0.42, mislabeled) a tell that they are under-calibrated?
6. **Embargo mechanics in code** — can `D/C`, a ratio-with-parity-1, or an `x`/`×` suffix still reach a v1.14
   artifact? Are the adapter regexes robust (false negatives/positives)? Is the legacy engine truly unable to feed
   v1.14 outputs? Explicit yes/no on multiplier-relapse risk.
7. **Anti-value/harm-myopia correctness + novelty/companions** — is `S=S⁺−H` + salience-gated `b_H^C·s(V)` + the
   `(1−β)` voice faithful and defensible? Is the heavy-tailed visibility (aggregate near-blindness) honest? Are
   `research/e4-value-estimation-foundation.md` and `E4-empirical-anchors.md` now aligned, or residual overclaim?

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-v5-<dimension>.md` (verdict + specific issues + fixes,
real file:line, and any command output). Then `audits/2026-07-11-v1.14-design/CRITIQUE_v5_SUMMARY.md`: overall
verdict (ready-to-preregister / needs-changes / not-viable), a per-blocker cleared/partial/not-cleared table (all 7),
remaining blockers ranked, the single sharpest improvement, an explicit yes/no on multiplier-relapse, an explicit
yes/no on whether the capability criterion is NOW met, and the shortest concrete path to preregisterable. Be candid;
RUN the code; do not rubber-stamp. If it is genuinely ready to pre-register, say so plainly.
