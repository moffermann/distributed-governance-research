# v2 → paper: propagation plan (staged for author review; live master NOT edited)

> **🛑 CANCELLED / SUPERSEDED (2026-07-10, LATEST).** This propagation plan is **void**: its ~2.1×
> multiplier was **retired** after the independent audit (`audits/2026-07-10/`) and the pre-registered
> **symmetry gate (NO-GO)** showed the distributed selection advantage is real but small (pre-registered
> pooled median ~0.025 of a full-information benchmark, below its 0.05 research-program rebuild gate; post-hoc
> ratio-of-sums 0.026). **Do NOT apply any multiplier from this
> note to the paper.** The controlling document is now `research/claim-and-estimand-contract.md`; the paper
> was reframed on Path B (architecture + qualitative mechanism, multiplier retired). Everything below is
> retained only as history. See `audits/2026-07-10/remediation-roadmap.md`.
>
> ---
>
> **UPDATED 2026-07-10 (FAITHFUL-SPLIT CORRECTION; supersedes the ~2.8× intermediate below).** Headline is
> now **~2.1× (band ~1.9–2.4× over corr(S,P)∈[0.1,0.3])**, = **selection ~1.5–1.8× × delivery 1.30×**. Two
> author literature calibrations set the inputs: net-negative share **~35%** (Pohl-Mihaljek p_U+≈0.65, net
> of the opportunity cost of capital) and production efficiency loss **λ_PI≈0.25** (IMF; delivery ~1.30×,
> distributed 10× more capture-resistant, E4-v5). The **faithful split** models that 35% as **~8% true harm
> (S<0) + ~28% below opportunity cost** (S>0 but net = S − h·cost < 0), NOT as all-harm — which lands the
> headline at ~2.1× (the intermediate ~2.8× over-attributed the 35% to harm, inflating it). This **converges
> on the paper's original ~2.2×** with a better-grounded mechanism. KEY: under the faithful split
> **harm-blindness is again nearly inert (w=1 → 1.30×); agenda-capture is the SOLE selection driver** — this
> STRENGTHENS the v2 pivot (no "co-mechanism" hedge needed). ADD `drafts/positive-net-social-value-
> calibration.md` and `drafts/public-investment-efficiency-loss-calibration.md` as the calibration anchors.
> Body ready-text below reconciled to ~2.1× — safe to apply as the single bilingual source.

## Why this is staged, not applied
v2 (`e4e5-value-model-v2.md`, `e5-sp-model.mjs`, pre-registered 7/7) **reframes the mechanism** of the
paper's Finding 4 — from *harm-blindness* to *agenda-capture*. That is a core-argument change to the
master, which is **bilingual (EN↔ES mirror) and Zenodo-paused**. Per standing discipline it needs the
author's sign-off on the actual prose and a deliberate Zenodo moment. This note holds the concrete,
ready-to-apply changes so the author can review and apply them in one pass.

## The reframing in one paragraph
The distributed's *selection* advantage was framed as the central being **blind to harm**. v2 showed
(and the faithful-split pre-registration confirmed) that harm-blindness is **nearly inert when true harm
is rare** (a harm-blind central delivers ~97% of oracle at ~8% true harm → w=1 ratio 1.30×, the pure
delivery floor). The real, load-bearing mechanism is **agenda-capture**: the central maximizes **political
capital P** (credit-claiming = visibility × traceability × concentration — Mayhew 1974, Arnold 1990, WSJ
1981, Olson, Bastiat), which is structurally misaligned with **social value S** at `corr(S,P) < 1`
(Gilens-Page 2014 / Achen-Bartels 2016; refutes Downs). Concretely, a credit-driven central funds two
kinds of misallocation the value-reading arms avoid: the ~8% actively harmful (S<0) AND the ~28%
**below opportunity cost** (S>0 but net = S − h·cost < 0 — a per-dollar social return below the discount
rate). The distributed reads S through **dispersed coverage** (Hayek 1945) and gates both out. This is
**more defensible** (canonical, transversal public choice — not "politicians are bad" or partisan) and
**more honest** (agenda-capture is the sole selection driver; harm-blindness is a named, near-inert special case).

## What changes, section by section (current → new)

**Abstract / headline.** Current: "social prioritization delivers +53-54%; selection and delivery
multiply (~2.2×)". New: reground on agenda-capture, correct the magnitude, and honestly state the axes.
> Ready text: *"At a literature-anchored operating point, the compound is **≈2.1× (band ~1.9–2.4×)**,
> decomposing as **selection ×1.5–1.8 × delivery ×1.30** — two independent layers. The selection layer
> is **agenda-capture**: a central planner maximizing political credit-claiming rather than social value
> (Gilens-Page 2014; Mayhew 1974), a transversal (not partisan) incentive misalignment. About 35% of
> implemented projects fall below positive net social value — modeled faithfully as ~8% actively harmful
> plus ~28% below the opportunity cost of capital (Pohl-Mihaljek 1992) — so a value-misaligned central
> funds projects the value-reading arms decline. The delivery layer regrounds the public-investment
> efficiency loss (~25%, IMF PIE-X 2015) against the distributed's ~10× capture resistance. The band's
> width is the uncertainty in the agenda↔value misalignment (Gilens-Page); harm-blindness is a named,
> near-inert special case (a purely harm-blind central sits at the delivery floor), so agenda-capture
> carries the selection layer alone."*

**Finding 4 (was: "aggregated dispersed signals outperform fixed-bandwidth construction").** The
TITLE survives (dispersed coverage vs a fixed narrow agenda IS the v2 story). Rewrite the mechanism
prose: replace the harm-blindness η frontier (β*=1−η) as the *primary* driver with the corr(S,P)
agenda-capture frontier; **demote harm-blindness to a secondary, named special case** (the ~8% actively
harmful minority — nearly inert on its own: a purely harm-blind central sits at the delivery floor 1.30×).
Add: the two-layer decomposition, the macro-layer-is-inert result (the coarse category gate rescues the
credit-driven central), and the graded advantage reading — value-destroying at the low-corr tail,
best-vs-mediocre at the realistic corr operating point (central delivers ~66–77% of oracle net value).

**Finding 5 (selection × delivery).** Keep — it is exactly the two-layer decomposition. Reground the
selection factor in agenda-capture (**~1.5–1.8×** at the Gilens-Page corr operating point); reground
delivery to **~1.30×** (IMF PIE-X λ_PI≈0.25 + E4-v5 10× capture resistance), replacing the old 1.43×
leakage calibration. Compound **~2.1× (band ~1.9–2.4×)**.

**Mechanism / calibration prose + the calibration table (paper.md:1342 lists η).** Replace the η row
with a **corr(S,P)** row calibrated to Gilens-Page, and add an **opportunity-cost hurdle** row (the
~8%-harm + ~28%-below-hurdle split, Doc 1); keep β (voice), delivery, capture rows. Add the
Core-v0 note: earmarked vouchers + the 90-day return-and-reallocate rule make the lumpiness threshold
a non-issue (coordination built into the mechanism, not a fragile add-on).

**Bibliography.** ADD (all real, verified): Gilens & Page (2014) *Perspectives on Politics* 12(3);
Achen & Bartels (2016) *Democracy for Realists*; Mayhew (1974) *Congress: The Electoral Connection*;
Arnold (1990) *The Logic of Congressional Action*; Hayek (1945) *AER* "The Use of Knowledge in
Society"; Kunda (1990) / Taber-Lodge (2006) if the motivated-reasoning nuance is used. Weingast-
Shepsle-Johnsen (1981), Olson (1965), Bastiat (1850) already present or easy to add. KEEP the E4
harm-blindness backbone as the *special case*, not the headline.

## Paper hygiene fixes (independent of the mechanism reframe; do in the same EN+ES pass)
- **Stale attack count/round narrative (both languages, ~7 spots each):** the paper says "**forty**
  attacks / **four rounds** / resolutions **docs/67–109**" (paper.md:79,129,193,1002,1040,1316,1439;
  paper.es.md:87,139,210,1077,1115,1393,1516) but the corpus now has **43 attacks (A001–A043)**,
  resolutions **docs/67–113**, with a later ablation round (A041–A043, docs/111–113) beyond the
  original forty. Update the count (forty→forty-three), the round count, and the docs range in lockstep.
  (Left for the author pass because it is woven into the paper's self-description narrative and needs the
  round-structure decided; not hot-edited autonomously — the EN↔ES mirror-sync of the "aggregated
  allocation profiles, not a central plan" pass WAS applied 2026-07-10.)
- **CITATION.cff/.zenodo.json/README** version already bumped to v1.12 (audit P1); no paper-body change.

## Author decision points (before applying)
1. **Supersede vs augment:** does agenda-capture *replace* harm-blindness as Finding 4's headline
   mechanism, or sit *beside* it? Under the faithful split harm-blindness is nearly inert (w=1 → delivery
   floor), so **supersede** is now the clearly correct call: agenda-capture is the sole selection driver,
   harm-blindness is the named ~8% special case. (Author decision 2026-07-10: propagate the faithful split.)
2. **Magnitude:** the honest calibrated number is **≈2.1× (band ~1.9–2.4×)** over corr(S,P)∈[0.1,0.3]
   (ρ≈0.2–0.4) — essentially the paper's original ~2.2×, now mechanism-grounded. The intermediate ~2.8×
   was inflated by modeling all 35% as true harm; the faithful ~8%-harm + ~28%-below-hurdle split corrects
   it. Report the band, not a bare multiplier; note the low-corr tail reaches ~2.3–2.9× and ρ=1 compresses
   to ~1.3× (the delivery floor).
3. **Scope of rewrite:** minimal (reground the mechanism sentence + calibration row + add the two-layer
   decomposition) vs full (rewrite Finding 4's derivation). Recommend minimal first.
4. **Timing / Zenodo:** apply at the next deliberate version bump; EN + ES together; PDFs/HTML ride
   along; Zenodo deposit is a separate author go.
5. **E4 standalone:** the same correction is owed to the E4 experiment scripts/notes (pending item 3).

## Mirror discipline reminder
When applied: every change lands in `drafts/paper.md` AND `drafts/paper.es.md` in the same commit;
no EN without ES. This note is the single source for both languages' text.
