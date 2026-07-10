# E4/E5 — Citizen preference polarization: literature and (counter-intuitive) findings

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Question (author)
Citizen valuations were modelled as Normal i.i.d. — but preferences are ideologically
biased and, under polarization, plausibly bimodal (some sectors valued by one camp,
disvalued by the other). Does polarization change the result?

## Literature (verified)
- **Fiorina, Abrams & Pope (2005), *Culture War?*** and **DiMaggio, Evans & Bryson
  (1996), *AJS* 102:690-755**: the mass public is mostly **centrist/unimodal**;
  bimodal polarization is **concentrated on a few issues** (abortion) and is mainly an
  *elite* phenomenon.
- **Abramowitz & Saunders (2008), *JOP* 70(2)**: counter — mass ideological polarization
  **has risen** (share highly-polarized 24%→33%) via partisan sorting.
→ Polarization is **sector-specific and contested**: a swept parameter, not a fixed
assumption; the modal reality is modest and concentrated.

## Model
Citizen valuation `v = consensual_base + polar·camp·sector_position + idiosyncratic`.
`polar=0` recovers Normal. For an ideological sector the in-group values it, the
out-group is harmed → bimodal valuations. `harmMult>1` makes the out-group harm exceed
the in-group benefit (asymmetric; Olson's diffuse costs at the ideological scale).

## Findings (counter-intuitive, honest)
1. **Symmetric polarization does NOT amplify the distributed advantage — it slightly
   REDUCES it** (realistic 3-layer 2.20× at polar=0 → 1.79× at polar=3). Reason: with
   balanced camps and symmetric intensity, the in-group benefit and out-group harm
   **cancel in net value** — a divisive project is net-*neutral*, so the central's
   blindness to the harm is offset by the real in-group benefit and costs nothing; and
   polarization adds camp-imbalance *noise* to true value, which erodes the distributed's
   true-value signal. **The advantage rests on NET harm (harm exceeding benefit), not on
   polarization per se.**
2. **Asymmetric net harm (harmMult>1) makes the compound COLLAPSE below 1** (0.48× at
   1.5, 0.03× at 2.5) — but this is a pathological corner, not "the central wins":
   divisive projects go strongly net-negative; the platform's voice bias β under-counts
   the harm 30%, so the distributed funds some net-negative projects it mis-reads as
   positive, and its **superior delivery (0.86 vs 0.60) then delivers the harm more
   efficiently**. A genuine failure mode — when the world is harm-dominated AND the
   harmed are under-represented — but the d/c ratio is uninterpretable there (would need
   an oracle-normalized or absolute-harm metric).

## Takeaway
The core result is robust to *symmetric* polarization (it does not depend on preferences
being Normal). The mechanism that drives the distributed advantage is **net harm the
central cannot see** — which requires asymmetry (concentrated benefit, diffuse/larger
cost), the Olson/Bastiat structure, not polarization by itself. Pushing to strong
asymmetric harm exits the regime where a simple d/c multiplier is meaningful. This marks
the point of diminishing returns for adding world-heterogeneity to the pipeline model.
