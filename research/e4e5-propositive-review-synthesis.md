# E4/E5 — Propositive-review synthesis + consolidation plan

## Status
Synthesis of a 5-reviewer *propositive* round (modeling methodologist, empirical
calibration, political-economy theorist, mechanism-design theorist, statistician) on
the unified E4/E5 pipeline. Goal: affirm loose theory, propose validations, and lock a
parsimonious main model + null-knob ablations. This is the consolidation roadmap.

## The prize — formalize the theory (converged highest value)
Three propositions turn the counter-intuitive findings and the whole pipeline into
*proven law*, demoting the simulation to confirmation (as `e4-analytical-backbone.md`
did for E4). Much is **already validated by the existing 1M data** (no new runs).

1. **Sign-Flip Proposition (political-economy).** The harm-blind central mis-selects a
   project iff it is truly net-harmful but perceived net-beneficial: **η·S⁻ < S⁺ < S⁻**
   (true T = S⁺−S⁻ < 0, perceived S⁺−η·S⁻ > 0). The distributed advantage is a monotone
   function of the **mass of such sign-flip projects** — hence of the benefit/harm
   *asymmetry*, NOT the *variance* of valuations. Symmetric polarization inflates S⁺ and
   S⁻ together (net ≈ 0) and leaves the sign-flip set unchanged → explains *why* the
   polarization and partisan sweeps were immaterial. This is **Bastiat (1850)** (the
   unseen S⁻), **Olson (1965)** (concentrated benefit organizes, diffuse cost doesn't),
   **Wilson (1980)** (the client-politics cell IS the sign-flip regime).
2. **Compound Parity Proposition (mechanism-design).** Delivered value = O-ring product
   `V_I = q_macro(θ_I)·q_alloc(θ_I)·f_I`, θ_C=η, θ_D=1−β. Per stage, distributed
   dominates iff **β < 1−η**; the planning-only product crosses unity **exactly on the
   anti-diagonal β*=1−η**; the **full pipeline** parity shifts to **β*_pipe(η)=1−η+δ(η)**
   with a delivery wedge δ>0 solving ∏ε_s(β)/ε_s(1−η)=f_C/f_D. *"Voice bias must exceed
   harm-blindness by the full delivery margin before the central wins."* **Validated in
   the 1M table:** 2.09 ≈ macro(1.19)×alloc(1.22)×delivery(1.43); β*_pipe(1.0)≈0.30>0.
3. **Non-circularity lemma (mechanism-design; cheap, high defensive value).** The
   distributed is *scored* on true T but *decides* on T̂^D = S⁺−(1−β)S⁻ (β-selected,
   capture-contestable). For any β>0 there exist harmful projects it strictly mis-funds
   (whenever β>1−S⁺/S⁻), so "reveal→decide→score" is NOT an identity — the advantage is
   empirical, never definitional. Pre-empts the fatal "scored on its own ruler" attack.

## Reground the macro stage + unify the two frictions (theory)
- **Law of 1/n (Weingast, Shepsle & Johnsen 1981, JPE 89:642-664):** replace *perceptual*
  macro myopia with a *structural* fiscal-commons externality — a sector's benefits are
  local, its costs shared across A areas, so each internalizes 1/A of the cost → net-harm
  is externalized, not merely unperceived. Strict upgrade of η. Pair with **Primo & Snyder
  (2008, JOP 70:477-486)** (effect weakens at large n → regime-dependent, matches the
  frontier). Perceptual micro-story: **Buchanan & Wagner (1977)** fiscal illusion + **Niskanen
  (1971)** budget-maximizing bureaus over-weight S⁺.
- **Common-Cause Proposition:** η and β are two faces of ONE Olson asymmetry — the diffuse
  harmed don't organize (central perceives via organized proxies → η low) AND don't
  self-select into voice (→ β high). β*=1−η is a race between two manifestations of one
  failure; the central's blindness is unbounded/irreparable, the distributed's β is
  bounded/repairable by the default-routing layer (Hirschman voice-substitute). Grounding:
  Hirschman 1970 + Verba-Schlozman-Brady 1995 + Olson; **β is partly the shadow of Hurwicz**
  (decentralized message-bounded mechanism can't be both informationally efficient and IC).
- **Impossibilities-we-own box:** Green-Laffont 1979 (VCG infeasible), Gibbard-Satterthwaite
  (claim capture-resistance not strategy-proofness), Hurwicz (β), **Arrow 1951 escaped via a
  cardinal Samuelson sum** (flag with the Sen caveat), Myerson-Satterthwaite.
- **CITATION FIX (in the paper):** lead the multiplication with **Kremer O-ring (1993)**
  (serial complementary loss); **Farrell (1957) is a one-unit efficiency *decomposition*,
  not a serial chain** — keep only as a secondary analogy or a production referee flags it.

## Fix the metric + uncertainty (statistician + methodologist, converged)
- **Primary metric → oracle-normalized additive contrast Δ = (d−c)/o** (bounded, finite in
  every corner incl. harm-dominated, sign-meaningful). Report D̃=d/o, C̃=c/o alongside.
  This kills the zero-denominator explosion (the 0.03× pathology). The compound ratio d/c
  stays only as a headline-friendly secondary, INSIDE a pre-registered validity gate
  (central-delivered CI entirely > ε) with a **Fieller** interval (self-diagnoses instability).
- **"1M is false precision":** the distributed uses its analytic large-sample mean and the
  central is near-deterministic → within-arm sampling ≈ 0; effective n = **40 worlds**, not
  1M citizens. Report TWO distinct uncertainty objects: a **narrow Monte-Carlo CI** (over
  world seeds, labeled as MC error) AND a **wide parametric/structural band** (the frontier +
  tornado). Headline = **conditional interval + floor, never a bare multiplier.**
- Interval type: percentile bootstrap is transform-invariant (the "log-scale CI" wording
  buys nothing); use **BCa or delta-method on log R** for the ratio; keep the paired/CRN
  bootstrap (correct). Variance-decomposition study to prove seed-variance = world-variance.
- **Hygiene bugs:** (i) worker `overrides` is a curated subset → pass the FULL override set
  (this bug already bit the partisan sweep); (ii) pre-reg says macro splits ∝ perceived value
  but the code does a hard top-k gate — align the prose to the code; (iii) named flags, JSON
  sidecar (params+git SHA), assertions (O≥0, C,D>0 in the main regime).

## Calibrate + validate (empirical)
- **Calibrate net-harm (projSpread) to an OBSERVABLE, validate on %oracle:** tune projSpread
  (and the negative tail) so the **share of ex-post net-negative projects ≈ 27%** (World Bank
  IEG "moderately unsatisfactory+" ~25-35%), then confirm central %oracle lands ~55% (band
  50-65%). Calibrate on one observable, validate on the other. Overlay against Pohl-Mihaljek
  (1992, WBER, realized/appraised ERR), IEG, Flyvbjerg benefit-shortfalls.
- **HONEST pre-registered prediction:** closing the "too much harm" gap DEFLATES the headline
  — the calibrated realistic 3-layer compound lands **~1.5-1.8×** (above the 1.43× delivery
  floor, below the current 2.09×). Commit to that number before running.
- Anchor β to PB participation microdata (Decidim/Consul; Verba-Schlozman-Brady → β≈0.3-0.5);
  report the delivery ratio as a band **1.3-1.7×** (Reinikka-Svensson, Olken, Gauthier PETS)
  not a point; sector heterogeneity from COFOG + IEG sector-disaggregated ratings. Field
  evidence (Goncalves 2014) for DIRECTION only; Olken 2007 as our own condition made empirical.

## Global sensitivity (both methodologist + statistician)
**Global Sobol / Saltelli variance decomposition** over ALL knobs (η, β, delivery, projSpread,
sectorTilt, kSectors, + the nulls δ_partisan, polar, harmMult) → ONE figure proving (a) η and
β dominate (the quantitative backing for the parity law) and (b) all null knobs have S_T≈0.
Run at N=50k-100k (scale-invariant), confirm top indices at 1M. Report S_T with CIs. Plus a
tornado ranked by headline swing, flagging which perturbations push the central through zero.

## Parsimony consolidation (validates the author's plan)
- **Main model = strip the nulls** (polar=0, harmMult=1, δ_partisan=0): three multiplicative
  stages, harm-blindness η, voice bias β, delivery f_weak/f_ver. Report Δ (oracle-normalized)
  + gated d/c + parity locus β*_pipe(η).
- **Ablation experiments (clone + one knob + TOST equivalence, shared seeds, modest ranges):**
  (1) partisan δ (Potrafke-modest 0-1) → equivalence within a pre-declared margin; (2) symmetric
  polarization polar (Fiorina-modest 0-1, up to ~3 contested via Abramowitz) → equivalence /
  bounded slight decrease; (3) **asymmetric net harm harmMult (modest 1-1.3; flag >1.5 as the
  pathological corner) — NOT a null but a named SCOPE CONDITION** ("efficient delivery of a
  net-harmful allocation" = Lipsey-Lancaster second-best), reported with Δ, never d/c.
- State scope conditions: agenda/choice set exogenous = generous to central = the gap is a
  **lower bound**; additive separability (Samuelson) flagged.

## Recommended execution order
1. **Theory formalization (Tier 1)** — Sign-Flip + Compound Parity + Non-circularity + law of
   1/n + Common-Cause + impossibilities box + Farrell→Kremer fix. Highest value; mostly writing;
   the parity decomposition is already validated in-hand. (Feeds new research notes + the paper.)
2. **Metric + uncertainty + bug fixes (Tier 2)** — Δ oracle-normalized primary, gated Fieller
   ratio, two-uncertainty reporting, worker-override + pre-reg/code fixes.
3. **Calibrate projSpread + pre-register the honest ~1.5-1.8× deflation; Sobol/tornado.**
4. **Parsimony consolidation** — strip nulls, ablation experiments with TOST, packaging.
