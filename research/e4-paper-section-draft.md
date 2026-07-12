# E4 — draft paper section (EN; ES mirror on integration) — v2 anchored-scenario framing — DRAFT

> Rewritten to the author's anchored three-scenario framing. Resolves the rev-paper blockers: (1) reconciles with
> the paper's own symmetry-gate NO-GO (Δ≈0.025) instead of contradicting it; (2) reports the actual numbers.
> Source of numbers: `npm run e4:scenarios | e4:frontier | e4:evidence`; anchors in `research/e4-plausible-anchors.md`.
> Framed as a comparative-institutions robustness result with anchored scenarios + a benchmark theorem, NOT a multiplier.

## E4. When does coverage-routed selection beat central-proxy selection?

**Question.** At an equal budget and the same candidate projects, does coverage-routed distributed appraisal (Core
v0) deliver more true social value than a competent central-proxy appraisal — and under exactly what conditions does
each win? We answer with a mechanism model, a benchmark theorem, and three **evidence-anchored scenarios** that level
the field for both institutions.

**Mechanism.** True value splits into support and harm, `S = S⁺ − H` (mean scale). The central planner reads
visible/salient value but is **myopic to harm, salience-gated**: harm-detection `b_H^C·s(V)` rises with a project's
visibility `V`, so on the **low-visibility long tail** — the mass of public projects — it is nearly blind to
concentrated opposition (oversight, opposition, comptroller reach mainly the visible, contested few). The
distributed arm registers harm at weight `(1−β)` across the whole distribution. The aggregate advantage comes from
the long tail: the projects that have no anti-value voice in the status quo.

**Model (matched budget; selection only).** `M^C = a + b·S⁺ + w·(v_{p,j}−S⁺) − b_H^C·s(V)·H + η` (project-varying
`v_{p,j}` identifies `w`; form informed by elite-misperception evidence with an explicit political-opinion→project-
value transport gap). The distributed estimate is a baseline-expanded, MNAR-biased mean of citizen reports. Both
arms fund greedily under a shared budget; delivered value is scored on true `S`. Administrative-cost savings and
corruption/leakage are separate, additive channels, deliberately excluded here.

**Benchmark theorem.** Under joint normality and fixed-threshold selection, expected selected value per candidate is
`V_k = q·μ_S + φ(z_q)·Cov(S,X_k)/sd(X_k)`, so parity ⇔ `Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C)` (the intercept `a`
is absent). This is the no-myopia Gaussian limiting case (verified against simulation within ~0.2 Monte-Carlo SE);
the numerical frontier (eligibility, heterogeneous costs, MNAR, credit) is the object.

**Three anchored scenarios.** Each knob's value is justified empirically (public-procurement value is heavy-tailed —
Skuhrovec et al. 2013, >40k Czech procurements, Zipf/Pareto — so most projects are low-visibility; participatory-
budgeting turnout ≈1–3% anchors participation), theoretically (agenda-setting/salience for harm myopia), or
proxy-informed with a stated transport gap (projection/bias). Reporting `m = D/O − C/O` (signed fraction of the
full-information oracle, parity at 0) and each arm's efficiency `D/O`, `C/O`:

| scenario (assumptions) | m ± 95% CI | Core v0 delivers | central delivers |
|---|---|---|---|
| **Central's best case** — competent central that sees anti-value (no myopia, unbiased, precise) | **+6.1%** [5.8, 6.4] | 91% of oracle | 85% |
| **Probable** — evidence-anchored | **+46.6%** [46.0, 47.4] | 91% | 45% |
| **Distributed's favourable case** | **+199.8%** [197, 202] | 96% | −104% (destroys value) |

The decomposition is the finding: **Core v0 is robust — ~91–96% of achievable value in all three; the central is
fragile — 85% → 45% → −104%, depending entirely on whether it sees the anti-value.**

**Reconciliation with the symmetry-gate NO-GO.** A pre-registered symmetry gate elsewhere reports a small pooled
advantage (Δ≈0.025, below its rebuild threshold). That test **deliberately equips the central with competent,
harm-aware appraisal** — i.e. it is the "central's best case" row above. Removing harm-myopia in this model collapses
the advantage +46.6% → +6.1%, the same near-parity regime. **The two results are the same phenomenon under opposite
assumptions, not a contradiction:** the distributed advantage IS the harm-myopia mechanism; assume it away and you
return to near-parity.

**Where the frontier is.** From the probable scenario, no single knob flips the winner within its plausible range
(the conclusion is robust to any one assumption; Core v0 wins +25% to +54% across each single-knob sweep). The parity
frontier lives on the combined "central competence" axis and sits at **t ≈ 1.13** — the central wins only if it is
*better* at seeing anti-value than a fully-competent plausible central (beyond realistic), and even then by ~5%.
Across a uniform sweep of the anchored plausible envelope, Core v0 wins in 100% of random parameter mixtures; parity
requires the specific, coordinated all-central-favourable corner.

**Honest limits.** (1) Central magnitudes are proxy-informed, not target-identified: the political-opinion→project-
value transport is an assumption; only target-domain bridge data (planner forecasts, citizen value distributions)
could shrink it. (2) The harm-myopia strength (`s_exp, b_H^C`) is theory-anchored (agenda-setting), the least
empirically pinned knob and the crux. (3) `m>100%`/negative reflect legitimate value destruction (the losing arm
funds net-harmful projects), read via `D/O`, `C/O`. (4) Cost and leakage channels are separate legs. E4 is a
comparative-institutions robustness result with anchored scenarios + a benchmark theorem + a measurement plan —
not an impact estimate.

## Integration checklist (EN + ES, keep 13/13 parity)
- Replace the E4 subsection of `drafts/paper.md`; mirror in `drafts/paper.es.md`.
- Add citations: Skuhrovec et al. 2013 (arXiv:1309.0218); PB turnout (Brennan Center); Broockman–Skovron 2018;
  Gagnon-Bartsch; Dias–Lucas–Sheffer 2025; Prelec et al. 2017; prior-art (Böttcher–Klingebiel 2024; Rey–Endriss 2024;
  Boehmer et al. 2023; Liesiö et al. 2007; Mollick–Nanda 2016).
- Reproducibility appendix: `npm run e4:controls | e4:test | e4:theorem | e4:scenarios | e4:frontier | e4:evidence`
  + the contract hash.
- Keep the embargo: no `×`, no `D/C`, parity at 0, sign + magnitude separated, D/O·C/O for interpretation.
