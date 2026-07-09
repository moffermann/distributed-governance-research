# E4 — Analytical Backbone: three closed forms the simulations obey

## Status
The constructive-review round (see `e4-constructive-review-synthesis.md`) found that
the entire E4 line (v4 frontier + v5 capture) is governed by three closed-form
results that the simulations merely instantiate. Making them explicit converts the
contribution from "a seeded simulation whose magnitudes are model-internal" into
"an analytical result confirmed by simulation, with the simulation quantifying the
degradation the algebra cannot." Verified in `e4-analytical-backbone.mjs`
(results: `e4-analytical-backbone-results.txt`). The simulation is demoted to
illustration + degradation-quantification.

## Proposition 1 — the parity law β\* = 1 − γ (with a bias–variance reading)

**Setup.** For a project, let `S⁺` = sum of the positive true valuations and `S⁻` =
sum of the absolute values of the negative valuations. Its true social value is
`T = S⁺ − S⁻` (Samuelson aggregate; can be negative = net harm). Each institution
ranks projects by a **harm-discounted estimate**

> **T̂ = S⁺ − θ · S⁻**  (+ second-order noise),  with harm-coefficient **θ**.

- **Central** perceives benefit fully but keeps only γ of perceived harm ⇒ **θ_C = γ**.
- **Distributed** reads true valuations, but the harmed participate only at rate
  (1 − β); the global participation rate p multiplies every score equally and so
  **cancels from the ranking** ⇒ **θ_D = 1 − β**.

**Proposition 1.** The true harm-weight is 1. The institution whose θ is closer to 1
ranks projects closer to the truth and delivers more true value. Since
|1 − θ_C| = 1 − γ and |1 − θ_D| = β,

> **distributed dominates ⇔ β < 1 − γ**,  with the **parity locus β\* = 1 − γ**
> (the anti-diagonal of the γ×β frontier).

**Verification.** The noise-free, sample-free analytical estimators give advantage
**exactly 1.00 on every anti-diagonal cell** (γ+β=1): (0,1), (.25,.75), (.5,.5),
(.75,.25), (1,0) → 1.00. The full simulation reproduces this to within seed noise,
with one informative deviation:

**Bias–variance reading (predicts the one "anomaly").** Decompose each estimator's
error into bias and variance:
- **Bias:** central overstates harm-laden projects by (1−γ)·S⁻; distributed by β·S⁻.
  The mean advantage is driven by the bias gap — this is Proposition 1.
- **Variance:** central carries irreducible **proxy noise** (∝ noise²·n_interested);
  distributed carries **sampling variance** (∝ p(1−p)·Σv²) but **zero revelation
  noise** — the funder knows her own value.

On the parity line the bias cancels, so the **lower-variance** estimator wins. Because
the central's proxy noise generically exceeds the distributed's (which is zero on
revelation), the *measured* parity line sits slightly on the distributed's side —
exactly the simulation's **(γ=1, β=0) → 0.89** cell, which a reader would otherwise
call an anomaly. This is the textbook **biased-census vs unbiased-subsample** tradeoff:
subsampling beats bias exactly when the harm-discount (1−γ) exceeds the participation
bias β.

## Proposition 2 — the capture threshold ρ(C)

From the Becker capture condition `rent > acquisition + P(detect)·penalty` with
rent = λ·C (λ = rent as a fraction of project cost C):

> **λ\*_central = (k_c + p_c·F) / C**   (fixed acquisition k_c, low detection p_c)
> **λ\*_distributed = k_d + p_d·F / C**  (acquisition scales with C; viral detection p_d≈1)
> **resistance ratio ρ(C) = (k_d·C + p_d·F) / (k_c + p_c·F)**

**Verification** (k_c=0.3, p_c=0.1, k_d=0.3, p_d≈0.97, F=3, matching e4-v5):
λ\*_central ≈ 0.06–0.20 (matches the sim's net-harmful onset ≈0.10); λ\*_distributed
≈ 0.59–1.27; **ρ = 6.3× (C=3) → 7.6× (C=5.5) → 9.8× (C=10)** — rising in project cost.

**The structural content the prose only gestured at:** the central threshold **→ 0**
as its detection/fixed cost shrinks relative to C (a cheap-to-capture institution has
essentially no floor), whereas the distributed threshold has an **irreducible floor
k_d** — the equal-wallet acquisition scaling — that **no rent can erode**, because
money cannot buy equal wallets, only persuade their holders. The ~10× is ρ evaluated
at representative cost, not a simulation artifact.

## Proposition 3 — the detection-floor theorem

Under snowball detection (a captured project is exposed if at least one of m affected
citizens reports, each independently with probability q):

> **P(detection) = 1 − (1 − q)^m ⇒ m·q = −ln(1 − P).**

**Proposition 3.** Distributed detection exceeds a fixed central rate p_c iff the
**expected reporter count** satisfies **m·q > −ln(1 − p_c)**; a general detection level
p requires **m·q ≥ −ln(1 − p)**. Only the **product** m·q matters — the floor is
invariant to how reporters split between few-but-motivated (high q) and
many-but-informed (high m).

**Verification** (reproduces the floor table to the decimal): beat the central
(p_c=0.10) → m·q ≈ **0.11**; p=0.50 → 0.69; strong p=0.90 → **2.30**; near-viral
p=0.99 → **4.61**. The floor is logarithmically cheap: beating the status quo needs an
expected **~0.1 reporters** per captured project. This makes the burden-of-proof
inversion **rigorous, not rhetorical**: to defeat the distributed arm a skeptic must
assert m·q < 0.1 — near-total civic apathy among people cheated of a benefit they were
owed.

## Invariance propositions (pre-empt the "arbitrary magnitudes" attack)
- **Scale-invariance.** The advantage is a ratio of delivered true values; under
  N_i → c·N_i (c>0) every S⁺, S⁻ and estimator scales by c, rankings are unchanged ⇒
  the frontier's shape and the parity line are invariant to the units of value. The
  "magnitudes are arbitrary" objection cannot touch the frontier's structure.
- **Turnout-invariance.** The distributed participation rate p is a global multiplier
  on all scores ⇒ it does not change the ranking, only the zero-gate position. The
  result depends on the **bias** β in who participates, **not** on how many do.
- **Shape-invariance (CLT).** T_j = Σ_i N_i sums over tens–hundreds of interested
  citizens; by the CLT its distribution is ≈ normal regardless of the per-citizen
  valuation shape, and only S⁺, S⁻ (first moments of the positive/negative parts)
  enter the estimators ⇒ the Gaussian draw is a convenience, not a load-bearing
  assumption.

## What this changes
The paper should carry a short **"Analytical results"** statement of Propositions 1–3
and the three invariances, with the simulations explicitly demoted to (a) confirming
the closed forms and (b) quantifying the delivered-value degradation as parameters
move off the clean cases. Every downstream claim — the frontier, the capture
threshold, the abstract — then inherits the credibility of a proven law rather than a
fitted table.
