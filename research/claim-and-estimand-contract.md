# Claim & estimand contract (governs the paper's quantitative claims)

**Date:** 2026-07-10 · **Superseded 2026-07-15 for v1.15.** · **Status:** the controlling specification for what
the simulation may and may not claim. Written after the independent audit (`audits/2026-07-10/`) and the
pre-registered **symmetry gate**, then **corrected for v1.15**: the pre-registered symmetric gate is a *narrow,
central-idealizing robustness check* — **not** the primary estimand — because forcing symmetry idealizes the
central comparator (giving it unbiased, uncorrupted, harm-aware value-reading) and thereby biases the test against
the architecture. The **primary estimand is the literature-anchored asymmetric contrast.** Every quantitative
statement in `drafts/paper.md` / `paper.es.md` must conform to this contract.

## 1. Primary estimand — the fair, literature-anchored asymmetric contrast
For a **fixed candidate-project pool** and a **fixed total budget**, the primary contrast is the expected
**aggregate realized net public value** of *distributed* vs *centralized* **selection**, where the central arm is
modelled with its **documented, literature-anchored** structural properties — **directions grounded in the
literature, magnitudes not fitted**: near-blindness to diffuse harm on the low-visibility long tail, projection of
priors and overvaluation of visible/appraisable benefits, and claimable-credit pressure (Hayek 1945; Scott 1998;
Olson 1965; Mayhew 1974; Arnold 1990; Flyvbjerg et al. 2003; Broockman–Skovron 2018).

> **Δ = ( E[ value(portfolio_D) ] − E[ value(portfolio_C) ] ) / O**, reported as a **directional contrast**.

"Net public value" of a funded project = aggregate affected-party value minus an opportunity-cost hurdle
(`net = S − h·cost`). The **reference benchmark O** is a full-information greedy value/cost selector on true `net`
(renamed from "oracle"); a computational **reference/normalizer**, not guaranteed optimal nor an upper bound. In
the **PROBABLE** declared scenario the distributed arm recovers **≈98%** of O versus the central's **≈44%**
(**≈2.2×; a ≈54-point directional contrast**). A **Δ_total** additionally crossing selection with **verified
delivery** (E5) is reported as a directional contrast (**≈+58.6 points**), **not** as an independent multiplier
and **not** as a calibrated field effect.

## 2. The symmetric gate — a narrow, central-idealizing robustness check (NOT the primary estimand)
The pre-registered symmetry gate is a **conservative, selection-only robustness check**. It **idealizes the
central arm** — an unbiased, competent, **uncorrupted, harm-aware** value-reader, with appraisal budget matched in
expectation and delivery held at parity — while the distributed arm bears endogenous coverage and adverse voice
bias. Because it grants the central *superior* harm perception and integrity, excludes agenda construction, and
holds delivery equal, **its central-favouring idealization is exactly why its result cannot bound Core v0's
architecture-wide value.** Its pre-registered pooled **median Δ ≈ 0.025** falls below the **0.05 research-program
rebuild gate** (a go/no-go rule for whether to pursue a quantitative rebuild on this uncalibrated scale — **not a
policy-materiality threshold**), yielding the frozen-rule **NO-GO** for *that narrow idealized-selection question
only*. The post-hoc pooled ratio-of-sums was Δ = 0.026, interval [0.023, 0.029] (a Monte-Carlo interval
conditional on the simulated DGP). The gate neither shows Core v0 failed nor bounds its architecture-wide value.

## 3. The gate's symmetry conditions (its scope, not the architecture's)
Under the gate both arms face: the **same candidate pool, the same true project values and costs, an
appraisal/information budget matched in expectation** (equal up to per-project rounding of the central arm's even
bandwidth), **the same appraisal-error (report-noise) process, the same eligibility logic** (each acts on its OWN
noisy estimate — no arm sees ground-truth net), **the same greedy budget rule, and the same delivery resources.**
No arm receives oracle access, asymmetric cost knowledge, or different eligibility rules. These are the gate's
enforced idealizations; the primary asymmetric estimand (§1) deliberately does **not** impose them.

## 4. Permitted mechanism (the source of any advantage)
The distributed arm's information is **endogenously routed** — citizens report on the projects they care about
(coverage), and diffusely-harmed minorities under-participate (adverse voice bias, a *cost* borne by the
distributed arm). The central arm carries its literature-anchored harm-myopia and a **bounded** credit-claiming
pressure `λ` on its ranking (never on eligibility — no knowingly value-destroying planner). Any advantage must
arise from this mechanism.

## 5. Outcome measure — honest limits
`value(·)` is a stylized **cardinal aggregate used as a model construct** (a utilitarian-style sum of cardinal
affected-party valuations); its outputs are interpreted **only as directional/ordinal contrasts** (Stevens 1946),
consistent with the architecture's ordinal, revealed treatment of subjective value (Menger 1871; Hayek 1945;
Samuelson 1938; Condorcet 1785; Prelec et al. 2017). **No cardinal interpersonal welfare, redistribution, or
equity claim is made.** **The value/cost units, the opportunity-cost hurdle `h`, and the project-generating
distribution are uncalibrated** — chosen for a stylized world, not estimated from data. The model is
**partial-equilibrium**. The domain is a **bounded public-investment slice**, most defensibly infrastructure-like
capital projects (where milestone-verifiable evidence is clearest) — **not** the whole budget or "the purpose of
the state"; broader project-shaped applicability is a **design claim, not yet empirically validated**. The
simulation is a **stylized model**, not a validated Core v0 implementation.

## 6. Interpretation clause (binding)
Until the project-value distribution, appraisal errors, the sponsor↔public-value relationship, and delivery
effects are **measured from relevant real data**, any Δ reported here is a **conditional, directional simulation
output, not an estimated real-world effect.** The **primary asymmetric contrast (≈2.2×; ≈+58.6 points)** is
directional and conditional; the **symmetric gate's ≈0.025** is a conservative bound on the *idealized-central
selection* question only and does not bound the architecture. No pilot has run.

## 7. What this contract RETIRES
- The **~2× / ~2.1× / ~2.8× multiplier as a CALIBRATED FIELD EFFECT** — withdrawn as a field effect size. The
  **directional ~2.2× model contrast** under the literature-anchored asymmetric scenario (§1) **is retained and
  reported as such**; what stays retired is any claim that it is a calibrated real-world magnitude.
- The **Gilens-Page → corr(S,P) ∈ [0.1,0.3] "calibration"** — posited, not measured; report the frontier.
- The **imposed 1.30× delivery multiplier** and any "selection × delivery" headline **product** (E5 composes only
  as an accounting identity, reported as a directional contrast).
- The **"converges on the original ~2.2×" corroboration** — non-independent.
- The **"pre-registered 7/7"** framing — the exercise is post-exploratory; the symmetric gate is the one
  genuinely pre-registered test (now scoped as a robustness check, §2).

## 8. Positive claim the paper MAY make
> A concrete architecture (Core v0) for distributed governance of a bounded public-resource domain, and a
> mechanism argument that **credit-pressured, harm-myopic central selection** mis-allocates relative to
> coverage-based distributed selection. Under the literature-anchored **asymmetric** PROBABLE scenario the
> distributed arm recovers **≈98%** of the full-information reference versus the central's **≈44%** (**≈2.2×; a
> ≈54-point directional contrast**), and the full selection-and-delivery architecture **≈+58.6 points** — all
> **directional, conditional outputs of a stylized comparative-institutions model, not calibrated field
> effects.** The pre-registered **symmetric gate**, which idealizes the central, returns a small conservative
> selection bound (median ≈0.025) that **cannot bound the architecture's value.** Offered as a mechanism
> demonstration, not a calibrated effect size; no pilot has run.
