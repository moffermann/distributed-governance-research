# v2 → paper: propagation plan (staged for author review; live master NOT edited)

> **UPDATED 2026-07-10 (MAJOR CORRECTION).** Headline is now **~3.0× (band ~2.6–3.6×)**, not ~2.0×,
> after two author literature calibrations: net-negative share **~35%** (Pohl-Mihaljek p_U+≈0.65, net of
> the opportunity cost of capital — the old <1% was a gross error) and production efficiency loss
> **λ_PI≈0.25** (IMF; delivery ~1.30× with the distributed 10× more capture-resistant, E4-v5). Decompose
> as **selection ~2.5× × delivery ~1.30×**. NOTE: the "bounded / best-vs-mediocre" claim is retracted, and
> harm-blindness revives as a co-mechanism (both operate; agenda-capture stays the more defensible frame).
> ADD `drafts/positive-net-social-value-calibration.md` and `drafts/public-investment-efficiency-loss-
> calibration.md` as the calibration anchors. Update every ~2.0× / "bounded" mention below to the ~3.0×
> corrected framing before applying.

## Why this is staged, not applied
v2 (`e4e5-value-model-v2.md`, `e5-sp-model.mjs`, pre-registered 7/7) **reframes the mechanism** of the
paper's Finding 4 — from *harm-blindness* to *agenda-capture*. That is a core-argument change to the
master, which is **bilingual (EN↔ES mirror) and Zenodo-paused**. Per standing discipline it needs the
author's sign-off on the actual prose and a deliberate Zenodo moment. This note holds the concrete,
ready-to-apply changes so the author can review and apply them in one pass.

## The reframing in one paragraph
The distributed's *selection* advantage was framed as the central being **blind to harm**. v2 showed
(and pre-registered) that harm-blindness is **nearly inert when net-harm is rare** (a harm-blind
central still delivers ~99% of oracle at <1% net-neg). The real, load-bearing mechanism is
**agenda-capture**: the central maximizes **political capital P** (credit-claiming = visibility ×
traceability × concentration — Mayhew 1974, Arnold 1990, WSJ 1981, Olson, Bastiat), which is
structurally misaligned with **social value S** at `corr(S,P) < 1` (Gilens-Page 2014 / Achen-Bartels
2016; refutes Downs). The distributed reads S through **dispersed coverage** (Hayek 1945). This is
**more defensible** (canonical, transversal public choice — not "politicians are bad" or partisan)
and **more honest** (it names why the advantage is bounded, not catastrophic).

## What changes, section by section (current → new)

**Abstract / headline.** Current: "social prioritization delivers +53-54%; selection and delivery
multiply (~2.2×)". New: keep the ~2× compound but reground and honestly bound it.
> Ready text: *"At a literature-anchored operating point, the compound is **≈2.0× (band 1.8-2.4×)**,
> decomposing as **selection ×1.37 × delivery ×1.43** — two roughly equal, independent layers. The
> selection layer is **agenda-capture**: a central planner maximizing political credit-claiming rather
> than social value (Gilens-Page 2014; Mayhew 1974), an incentive misalignment that is transversal,
> not partisan. The band's width is the uncertainty in that misalignment (Gilens-Page), not in
> delivery. The advantage is **best-vs-mediocre, not good-vs-catastrophic**: even a value-blind
> central delivers ~half the attainable value, because most public projects are net-positive."*

**Finding 4 (was: "aggregated dispersed signals outperform fixed-bandwidth construction").** The
TITLE survives (dispersed coverage vs a fixed narrow agenda IS the v2 story). Rewrite the mechanism
prose: replace the harm-blindness η frontier (β*=1−η) as the *primary* driver with the corr(S,P)
agenda-capture frontier; **demote harm-blindness to a secondary, named special case** (the rare
divisive/net-harmful minority). Add: the two-layer decomposition, the macro-layer-is-inert result
(the coarse category gate rescues the credit-driven central), and the bounded-advantage reason.

**Finding 5 (selection × delivery).** Keep — it is exactly the two-layer decomposition. Reground the
selection factor in agenda-capture; delivery (1.43×) unchanged (Reinikka-Svensson / Olken).

**Mechanism / calibration prose + the calibration table (paper.md:1342 lists η).** Replace the η row
with a **corr(S,P)** row calibrated to Gilens-Page; keep β (voice), delivery, capture rows. Add the
Core-v0 note: earmarked vouchers + the 90-day return-and-reallocate rule make the lumpiness threshold
a non-issue (coordination built into the mechanism, not a fragile add-on).

**Bibliography.** ADD (all real, verified): Gilens & Page (2014) *Perspectives on Politics* 12(3);
Achen & Bartels (2016) *Democracy for Realists*; Mayhew (1974) *Congress: The Electoral Connection*;
Arnold (1990) *The Logic of Congressional Action*; Hayek (1945) *AER* "The Use of Knowledge in
Society"; Kunda (1990) / Taber-Lodge (2006) if the motivated-reasoning nuance is used. Weingast-
Shepsle-Johnsen (1981), Olson (1965), Bastiat (1850) already present or easy to add. KEEP the E4
harm-blindness backbone as the *special case*, not the headline.

## Author decision points (before applying)
1. **Supersede vs augment:** does agenda-capture *replace* harm-blindness as Finding 4's headline
   mechanism, or sit *beside* it (modal = agenda-capture; rare-divisive = harm-blindness)? (Recommend:
   supersede as headline, keep harm-blindness as the named special case — cleaner and more honest.)
2. **Magnitude:** the honest calibrated number is **≈2.0× (1.8-2.4×)**, essentially the old ~2.2× but
   reground and bounded. Confirm the band framing replaces any bare multiplier.
3. **Scope of rewrite:** minimal (reground the mechanism sentence + calibration row + add the two-layer
   decomposition) vs full (rewrite Finding 4's derivation). Recommend minimal first.
4. **Timing / Zenodo:** apply at the next deliberate version bump; EN + ES together; PDFs/HTML ride
   along; Zenodo deposit is a separate author go.
5. **E4 standalone:** the same correction is owed to the E4 experiment scripts/notes (pending item 3).

## Mirror discipline reminder
When applied: every change lands in `drafts/paper.md` AND `drafts/paper.es.md` in the same commit;
no EN without ES. This note is the single source for both languages' text.
