# E4 — draft paper section (EN; ES mirror on integration) — DRAFT, pending Codex v6 confirmation

> A ready-to-integrate draft of the E4 section for `drafts/paper.md` (+ `.es.md`). Written from the v6
> implementation (`scripts/simulation/e4-v5/`) and the parity theorem (`research/e4-parity-theorem.md`). Framed as a
> **transport-robust partial-identification atlas + a benchmark theorem + a measurement plan** — NOT a multiplier.

## E4. When does coverage-routed selection beat central proxy selection?

**Question.** Given the same budget and the same set of candidate projects, does a coverage-routed distributed
appraisal (Core v0) deliver more true social value than a competent central-proxy appraisal — and under what
conditions does each win? We answer with a mechanism model, an analytic benchmark, and a pre-registered
partial-identification sweep, reporting *where the winner is sign-robust* and *where the evidence cannot decide*.

**Mechanism (the thesis).** True project value decomposes into support and harm, `S = S⁺ − H` (mean scale over the
affected population). The central planner reads visible/salient value but is **myopic to harm, salience-gated**: its
harm-detection is `b_H^C · s(V)` with `s(·)` increasing in project visibility `V`, so on the **low-visibility long
tail** — the great mass of projects — the planner is nearly blind to concentrated opposition (opposition/comptroller
oversight reaches only the visible, disputed few). The distributed arm registers harm at weight `(1−β)` (attenuated
by adverse-voice suppression `β`), *across the whole distribution*. Coverage beats the proxy on harm wherever
`(1−β) > b_H^C·s(V)` — which, if the planner is near-blind on the tail, holds for any `β<1`. **The aggregate
advantage comes from the long tail: the mass of projects that have no anti-value voice in the status quo.**

**Model (matched budget; selection only).** Central estimate
`M^C = a + b·S⁺ + w·(v_{p,j} − S⁺) − b_H^C·s(V)·H + η` (project-varying projection `v_{p,j}` identifies `w`;
literature-informed form after Broockman–Skovron, Gagnon-Bartsch, Dias–Lucas–Sheffer, with an explicit political-
opinion→project-value transport gap). Distributed estimate is a baseline-expanded MNAR-biased mean of citizen
reports. Both arms fund greedily under a shared budget; delivered value is scored on true `S`. This experiment
holds the budget matched and measures **selection quality only** — administrative-cost savings and corruption/
leakage are separate legs, deliberately excluded here.

**Estimand and identification.** The primary quantity is the robust ratio of sums `m = Σ(D−C)/ΣO` over
non-degenerate worlds (fraction of the full-information oracle value; parity at 0). Because the literature gives
source-domain coefficients on different scales, the behavioral/central parameters are **proxy-informed, not
identified**; we therefore report a **partial identification**: (i) the **sign** over the joint physically-possible
set `D_F` (measure-free — the share of sampled θ-points each institution wins), and (ii) the **magnitude** over the
declared expectable sensitivity boxes `R_α`. Sign-reversal of directional parameters is not excluded by fiat; it is
reported as a labeled rival sensitivity.

**Benchmark theorem.** Under joint normality and fixed-threshold selection, expected selected value per candidate is
`V_k = q·μ_S + φ(z_q)·Cov(S,X_k)/sd(X_k)`, so the parity boundary is the equality of the covariance-to-noise ratios
`Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C)` (the intercept `a` is absent); a large-`K` corollary links this to `m`.
The full numerical frontier (eligibility gates, heterogeneous costs, MNAR reports, credit) is the object; the
theorem is the checked limiting case (regression within ~0.2 Monte-Carlo SE).

**Result (illustrative defaults).** The winner is **not sign-robust across the full physically-possible set** — the
central proxy wins in a minority of the sampled region (very low participation *and* a non-myopic planner), the
distributed arm in the majority. Over the **expectable** region the distributed advantage is robustly positive at
the 50–80% sensitivity boxes and becomes central-possible only at the widest 95% box. An attribution check confirms
the harm channel drives roughly half the advantage (it shrinks materially when opposition is removed). **We do not
headline a single multiplier**; the honest object is this map of where each institution wins and where the sign is
unidentified.

**Honest limits.** (1) The magnitudes are proxy-informed, not target-identified: the political-opinion→project-value
transport is an assumption, not a measurement, and only target-domain **bridge data** (planner forecasts, citizen
value distributions, category signals — elicitable by a "rate + guess others" instrument) could shrink it.
(2) `R_α` boxes are **declared sensitivity widths, not verified probability coverage**. (3) The `D_F` envelope is a
sampled bound (corners + interior), which may under-cover interior extrema. (4) Administrative-cost and leakage/
corruption channels are separate, additive legs not included here. Accordingly E4 is positioned as a
**comparative-institutions robustness atlas + a benchmark theorem + a measurement plan**, not an impact estimate.

## Integration checklist (when Codex v6 confirms)
- Insert as the E4 subsection in `drafts/paper.md`; mirror verbatim-equivalent in `drafts/paper.es.md` (keep 13/13
  section parity).
- Add citations already in the bibliography (Broockman–Skovron 2018; Gagnon-Bartsch; Dias–Lucas–Sheffer 2025;
  Prelec et al. 2017) + the prior-art differentiators (Böttcher–Klingebiel 2024; Rey–Endriss 2024; Boehmer et al.
  2023; Liesiö et al. 2007; Mollick–Nanda 2016).
- Point the reproducibility appendix at `npm run e4:controls | e4:test | e4:theorem | e4:evidence` and the contract
  hash in the artifact.
- Keep the reporting embargo: no `×`, no `D/C`, parity at 0, sign+magnitude separated.
