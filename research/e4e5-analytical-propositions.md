# E4/E5 — Analytical propositions for the unified pipeline

## Status
Tier-1 theory formalization from the propositive-review round
(`e4e5-propositive-review-synthesis.md`). This note extends the allocation-only
backbone (`e4-analytical-backbone.md`, Propositions 1–3) to the **unified three-stage
pipeline** — macro sector-planning × allocation × delivery — and formalizes three
results the 1M simulation instantiates. As with the backbone, the point is to demote
the simulation to *confirmation of a proven form*: the counter-intuitive findings
(symmetric polarization and partisan tilt come back **null**; the compound is a clean
**product**) are consequences of the algebra, not lucky parameter settings.

**Symbol convention.** This note uses **η** for the central's harm-perception
coefficient (0 = harm-blind, 1 = fully accountable), matching the paper. The backbone
writes the same quantity as γ; read backbone-γ ≡ η here. β is the distributed's
**voice bias** — the rate at which the harmed under-participate. The parity law of
Proposition 1 (planning only) is the special case δ = 0 of Proposition B below.

---

## Proposition A — the Sign-Flip Proposition (the advantage is *asymmetry*, not *variance*)

**Setup.** For a project let `S⁺` = sum of positive true valuations, `S⁻` = sum of the
absolute values of the negative ones; true social value `T = S⁺ − S⁻` (Samuelson
aggregate, can be negative = net harm). A harm-blind planner ranks on the
harm-discounted estimate `T̂ = S⁺ − η·S⁻`.

**Definition (sign-flip project).** A project is *sign-flipped* for a planner with
harm-coefficient η when it is **truly net-harmful but perceived net-beneficial**:

> **η·S⁻ < S⁺ < S⁻**   ⇔   T = S⁺ − S⁻ < 0  and  T̂ = S⁺ − η·S⁻ > 0.

**Proposition A.** The distributed advantage (delivered true value, distributed minus
central) is a monotone increasing function of the **mass of sign-flip projects** and
is *invariant to any mean-preserving spread of valuations that does not move projects
across the sign-flip boundary*. Equivalently: the advantage is driven by the
**benefit/harm asymmetry** of the project distribution — the share and depth of
projects whose diffuse harm exceeds their concentrated benefit — and **not** by the
*variance* (polarization) of citizen valuations.

**Proof sketch.** Only projects that the two arms *rank differently across the funding
gate* contribute to the advantage. The distributed arm reads T (mis-ranking only by
the voice-bias term βS⁻); the central reads T̂. For a project with T > 0 both fund it
and the delivered-value difference is second-order (the delivery wedge, Prop B). The
first-order gap comes exactly from projects where T < 0 ≤ T̂ — the sign-flip set — which
the central funds and the distributed (for β < 1 − S⁺/S⁻) does not. A mean-preserving
spread that inflates S⁺ and S⁻ in equal proportion leaves T̂ = S⁺ − η·S⁻ and T = S⁺ − S⁻
scaled by the same factor, so no project crosses the sign-flip boundary and the mass is
unchanged. ∎

**What it explains (the two null sweeps).** *Symmetric polarization* raises S⁺ and S⁻
together (a divisive project is net-neutral: in-group benefit ≈ out-group harm), so by
Proposition A it cannot move the advantage — matching the measured slight *decrease*
(2.20× → 1.79× as polar 0 → 3, the residual being added camp-imbalance noise eroding the
true-value signal, `e4e5-polarization-note.md`). *Partisan tilt* rotates the central's
sector ranking without changing any project's S⁺/S⁻ decomposition, so it too leaves the
sign-flip mass intact — matching the measured inertness at literature-modest δ
(`e4e5-partisan-bias-note.md`). **The knobs are null because they perturb the variance,
and the mechanism lives in the asymmetry.**

**Grounding.** Bastiat 1850 (the *unseen* S⁻ — the harm that never enters the planner's
ledger); Olson 1965 (concentrated benefit organizes, diffuse cost does not → S⁻
systematically under-weighted upstream); Wilson 1980 (client politics *is* the sign-flip
regime — concentrated beneficiaries, diffuse losers). Proposition A is the
value-theoretic statement of why those classics predict misallocation.

---

## Proposition B — the Compound Parity Proposition (O-ring product; delivery wedge)

**Setup.** Delivered true value from an arm I is the **O-ring product** of its
stage-qualities (Kremer 1993 — serial, complementary tasks whose failures multiply):

> **V_I = q_macro(θ_I) · q_alloc(θ_I) · f_I**,   with  θ_C = η,  θ_D = 1 − β,

where q_macro, q_alloc ∈ (0,1] are the fraction of attainable true value each planning
stage preserves (both governed by the same harm-coefficient θ, per Prop 1) and f_I is
the delivery-integrity factor (f_D > f_C: the distributed arm delivers a larger share
of what it funds — Reinikka-Svensson, Olken).

**Proposition B (per-stage and compound parity).**
1. *Per stage*, distributed dominates iff **β < 1 − η** (Proposition 1 applied to each
   planning stage — the harm-coefficient nearer the true weight 1 preserves more value).
2. The **planning-only** product (macro × alloc, f_C = f_D) crosses unity **exactly on
   the anti-diagonal β\* = 1 − η** — the two harm-discounts are equidistant from 1.
3. With **delivery** (f_D > f_C) the pipeline parity locus shifts *in the distributed's
   favour* to

   > **β\*_pipe(η) = 1 − η + δ(η)**,   δ(η) > 0 solving  q_macro q_alloc(β) / q_macro q_alloc(1−η) = f_C / f_D.

   *Interpretation:* **voice bias must exceed harm-blindness by the full delivery margin
   δ before the central arm wins** — superior delivery buys the distributed arm a strip
   of the frontier beyond the planning anti-diagonal.

**Validation (already in the 1M table — no new run).** The realistic compound
decomposes as a clean product of three stage-factors each > 1:

> **2.09 ≈ macro (1.19) × alloc (1.22) × delivery (1.43)**

read directly off the nested compounds — delivery = f_ver/f_weak = 0.86/0.60 = 1.43;
alloc = (2-layer 1.75)/1.43 = 1.22; macro = (3-layer 2.09)/(2-layer 1.75) = 1.19. That
the measured compound equals the product of the marginal stage-gains (with only a small
+0.085 interaction, Finding 5) is the empirical content of the O-ring form: **the stages
multiply because they are serial and complementary — no stage is redundant, none
dominates.** And β\*_pipe(η=1) ≈ 0.30 > 0 in the table: even a *fully accountable*
central (η = 1) is beaten up to a 30-point voice bias, the width of the delivery wedge δ.

**Citation note.** Lead this with **Kremer (1993) O-ring** (serial complementary
production, losses multiply). **Farrell (1957)** is a *one-unit efficiency
decomposition* (technical × allocative efficiency of a single producer), **not** a
serial multi-stage chain — it is at best a secondary analogy and should not headline the
multiplication. (See the paper fix, below.)

---

## Lemma C — Non-circularity (the advantage is empirical, not definitional)

A recurring fatal-sounding attack: *"the distributed arm is scored on true value using
the very valuations it collected, so of course it wins — it's graded on its own ruler."*

**Lemma C.** The distributed arm is **scored** on the true aggregate T = S⁺ − S⁻ but
**decides** on a *different*, β-selected estimate T̂^D = S⁺ − (1 − β)·S⁻ (the harmed
under-participate at rate β; capture can further distort it, backbone Prop 2). Scoring
and deciding use different functionals, so "reveal → decide → score" is **not** an
identity: for any β > 0 there exist projects the distributed arm strictly **mis-funds** —
precisely those with 1 − S⁺/S⁻ < β (net-harmful, but the surviving voices read them
positive). Its advantage is therefore a contingent empirical fact about the *size* of β
relative to the central's 1 − η (Proposition B), not a definitional artefact of the
scoring rule. ∎

*Corollary.* Set β = 1 − η and the advantage vanishes to parity (backbone verification:
1.00 on every anti-diagonal cell). A definitional win could not be tuned to zero by a
parameter; this one can. That is the operational proof of non-circularity.

---

## Regrounding the macro stage + unifying the two frictions

**Law of 1/n (structural, not perceptual).** The macro coefficient η need not be assumed
as *myopia*. Under **Weingast, Shepsle & Johnsen (1981, JPE 89:642–664)** a sector's
benefits are locally concentrated while its costs are shared across the A areas of the
fiscal commons, so each area internalizes only 1/A of the cost: net-harm is
**externalized, not merely unperceived.** This is a strict upgrade of η — it derives
harm-blindness from the structure of shared financing rather than positing it. Pair with
**Primo & Snyder (2008, JOP 70:477–486)**: the 1/n distortion *weakens as n grows*,
making η **regime-dependent** — exactly the shape of our η-frontier rather than a single
point. The perceptual micro-story remains available as a complement: **Buchanan & Wagner
(1977)** fiscal illusion (voters under-perceive the deferred/diffuse cost) and
**Niskanen (1971)** budget-maximizing bureaus that over-weight visible S⁺.

**Common-Cause Proposition.** η and β are **two faces of one Olson asymmetry**, not
independent frictions. The diffuse harmed (i) fail to organize, so the central perceives
value through *organized* proxies and under-counts their harm → η low; and (ii) fail to
self-select into voice, so they are missing from the participating sample → β high. The
parity race β\* = 1 − η is thus a contest between two *manifestations of the same
failure*. The asymmetry is that the central's blindness is **structural and
irreparable** (money and organization, not headcount, set its ledger), whereas the
distributed's β is **bounded and repairable** by the default-routing / delegation layer —
a Hirschman (1970) voice-substitute for those who would otherwise stay silent. Grounding:
Olson 1965, Hirschman 1970, Verba-Schlozman-Brady 1995; β is in part the shadow of
**Hurwicz** (a decentralized, message-bounded mechanism cannot be simultaneously
informationally efficient and incentive-compatible).

---

## Impossibilities we own (claim the right theorem, not the wrong one)

The architecture should *cite the impossibility it lives inside* rather than be ambushed
by it:
- **Green & Laffont (1979):** no dominant-strategy mechanism is efficient, budget-balanced
  and individually rational at once — so we do **not** claim VCG-style efficiency; the
  contribution is *comparative* value-preservation under realistic frictions.
- **Gibbard–Satterthwaite:** any non-dictatorial rule is manipulable — so we claim
  **capture-resistance** (backbone Prop 2–3: the cost/detection floor), **not**
  strategy-proofness.
- **Hurwicz:** the informational-efficiency / incentive-compatibility tension **is** the
  voice-bias β — named, bounded, and partly repairable, not wished away.
- **Arrow (1951)** is **escaped**, not violated: aggregation is a **cardinal Samuelson
  sum**, not an ordinal social-welfare function, so the independence/transitivity
  impossibility does not bind (flag the normative cost with the Sen 1979 caveat on
  interpersonal cardinal comparison).
- **Myerson–Satterthwaite:** efficient bilateral trade under private values is impossible
  — bounds what any allocation stage, ours included, can achieve; another reason the claim
  is comparative.

---

## Scope conditions (state them; they make the gap a *lower bound*)
- **Exogenous agenda.** The choice set / project agenda is taken as given and identical
  across arms. This is *generous to the central* (it ignores the distributed arm's
  agenda-setting advantage), so the measured gap is a **lower bound** on the full-system
  difference.
- **Additive separability.** Value aggregates additively across projects (Samuelson); no
  cross-project complementarities beyond those declared in composite programs. Flagged,
  not assumed away.
- **Symmetric frictions.** Both arms carry a first-order friction (central η, distributed
  β) and the capture model is symmetric (backbone Prop 2) — the frontier is a *fair*
  comparison, not a tilted one.

## What this changes for the paper
Finding 4/5 should carry a compact **"Analytical propositions"** box stating A
(sign-flip / asymmetry-not-variance), B (compound parity β\*_pipe = 1 − η + δ, O-ring
via Kremer), and C (non-circularity), with the macro stage regrounded on the law of 1/n
and the impossibilities owned explicitly. The 1M pipeline is then **confirmation of a
proven form** — the multiplication is the O-ring theorem, the null knobs are corollaries
of Proposition A, and the "scored on its own ruler" attack is closed by Lemma C.
