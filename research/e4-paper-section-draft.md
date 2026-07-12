# E4 — draft paper section (EN; ES mirror on integration) — v2 anchored-scenario framing — DRAFT

> Rewritten to the author's anchored framing — four declared scenarios plus one diagnostic contrast. Resolves the
> rev-paper blockers: (1) reconciles with the paper's own symmetry-gate NO-GO (Δ≈0.025) instead of contradicting it;
> (2) reports the actual numbers.
> Source of numbers: `npm run e4:scenarios | e4:frontier | e4:evidence`; anchors in `research/e4-plausible-anchors.md`.
> Framed as a comparative-institutions robustness result with anchored scenarios + a benchmark theorem, NOT a multiplier.

## E4. When does coverage-routed selection beat central-proxy selection?

**Question.** At an equal budget and the same candidate projects, does coverage-routed distributed appraisal (Core
v0) deliver more true social value than a competent central-proxy appraisal — and under exactly what conditions does
each win? We answer with a mechanism model, a stylized benchmark theorem, and four **source-motivated declared scenarios** (plus one diagnostic contrast) that level
the field for both institutions.

**Mechanism.** True value splits into support and harm, `S = S⁺ − H` (mean scale). The central planner reads
visible/salient value but is **myopic to harm, salience-gated**: harm-detection `b_H^C·s(V)` rises with a project's
visibility `V`, so on the **low-visibility long tail** — the mass of public projects — it is nearly blind to
concentrated opposition (oversight, opposition, comptroller reach mainly the visible, contested few). The
distributed arm registers harm at weight `(1−β)` across the whole distribution. Under the declared salience-gating
proxy (agenda-setting/salience — the load-bearing and least-empirically-pinned assumption), the aggregate advantage
comes from the long tail: the projects that have no anti-value voice in the status quo.

**Model (matched budget; selection only).** `M^C = a + b·S⁺ + w·(v_{p,j}−S⁺) − b_H^C·s(V)·H + η` (project-varying
`v_{p,j}` identifies `w`; form informed by elite-misperception evidence with an explicit political-opinion→project-
value transport gap). The distributed estimate is a baseline-expanded, MNAR-biased mean of citizen reports. Both
arms fund greedily under a shared budget; delivered value is scored on true `S`. Administrative-cost savings and
corruption/leakage are separate, additive channels, deliberately excluded here.

**Stylized benchmark theorem.** Under joint normality and fixed-threshold selection, expected selected value per
candidate is `V_k = q·μ_S + φ(z_q)·Cov(S,X_k)/sd(X_k)`, so parity ⇔ `Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C)` (the
intercept `a` is absent). This is a **stylized Gaussian fixed-threshold benchmark** (verified against simulation
within ~0.2 Monte-Carlo SE); it nests the production harm-gated signal only under extra coefficient/gate
restrictions, so it is a sanity-check limit, **not** a proof about the full engine (eligibility, heterogeneous
costs, MNAR, credit) — which is the object.

**Four declared scenarios + one diagnostic contrast (level the field both ways).** The four substantive scenarios are
PRO-CENTRAL, NO-MYOPIA (bundle), PROBABLE, PRO-DISTRIBUTED; "Harm-myopia only" is a **diagnostic contrast**, not a
declared scenario. Each knob's reference value is motivated empirically (public-
procurement value is heavy-tailed — Skuhrovec et al. 2013, >40k Czech procurements, Zipf/Pareto — so most projects are
low-visibility; net-allocation participation is a facto — universal by Core v0 architecture, not a swept knob), theoretically
(agenda-setting/salience for harm myopia), or proxy-informed with a stated, **not-yet-propagated** transport gap
(projection/bias). We are explicit that most magnitudes are declared reference/stress points, not target-domain
calibrated bands (the CIs cover inner Monte-Carlo variability only). Reporting `m = D/O − C/O` (signed fraction of the
full-information greedy benchmark, parity at 0) and each arm's delivered level `D/O`, `C/O`:

| scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
|---|---|---|---|---|
| **Central's declared full-favourable endpoint** — competent, harm-aware, precise, credit-free central + little harm (some knobs sit outside the registered expectable bands) | **−1.4%** [−1.5, −1.3] | 96.3% | 97.7% | ≈ tie (central +1.4 pt) |
| **No-myopia bundle** — probable + harm sight + unbiased + precise + no credit (NOT a myopia isolation) | **+13.9%** [+13.6, +14.2] | 98.9% | 85.0% | Core v0 |
| **Harm-myopia only** (diagnostic contrast, not a scenario) — probable, changing ONLY the two harm-gate coordinates | **+38.4%** [+37.8, +39.0] | 98.9% | 60.5% | Core v0 |
| **Probable** — source-motivated reference | **+54.6%** [+53.8, +55.4] | 98.9% | 44.3% | Core v0 |
| **Distributed's favourable case** | **+205.7%** [+203.0, +208.7] | 98.9% | −106.8% | Core v0 |

The field is **not** level: coverage wins across essentially the whole space. **The central's best case is a bare
tie** — at its fully-idealized declared endpoint (competent, harm-aware, precise, credit-free, facing little harm) it
delivers 97.7% against the distributed arm's 96.3% (m ≈ −1.4%), and even 20% inward of that endpoint the coverage arm
wins every draw, so the central-winning set has collapsed to a measure-near-zero sliver. Net-allocation participation
is **universal by architecture** (a facto, p=1), not a lever. The `D/O`/`C/O` split shows the mechanism: the central's
delivered level swings 44%→85%→98% (and −107% when myopic on harmful projects), depending on whether it sees the
anti-value. The scenarios are declared reference/stress points, not a jointly-calibrated probability region.

**Reconciliation with the symmetry-gate NO-GO.** A pre-registered symmetry gate elsewhere reports a small pooled
advantage (Δ≈0.025, below its rebuild threshold). That test **deliberately equips the central with competent,
harm-aware appraisal**, but under a *conservative sampled-participation* regime. Attribution is a **sequential,
path-dependent** decomposition (the model is nonlinear): turning off harm-myopia **alone** (only the two harm-gate
coordinates) reduces the probable gap +54.6% → +38.4%, i.e. **16.3 of the 40.8-point decline to +13.9% (~40%)**; the
further step to the full no-myopia bundle (unbiasedness, precision, no credit distortion — which the gate also
assumes) reduces it **24.5 points (~60%)** yet still leaves coverage ahead. Under Core v0's universal participation a
competent central reaches parity only at the fully-idealized endpoint — **consistent in direction with** the gate's
near-parity, a **qualitative reconciliation** (different DGPs and participation regimes), not a reproduced limit.

**Where the frontier is.** Across four prespecified one-factor slices (`s_exp, b_H_C, beta, a_V`; participation `p` is
a facto, not swept), none flips the winner from the probable scenario within its plotted range (a limited robustness
statement over those four slices, not all parameters). Interpolating the full set of conditions from probable toward
the fully-idealized central endpoint, the parity frontier is at **t ≈ 0.94** — reached only near the extreme of the
declared interpolation segment. The field is not level: coverage wins across essentially the whole space; `t` is an
illustrative linear mix, not a calibrated competence scale.

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
