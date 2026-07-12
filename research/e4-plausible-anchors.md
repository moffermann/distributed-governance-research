# E4 — plausible-value anchors (the "probable case", justified per variable) — LIVING DOC

> Author framing (2026-07-11): report EVERYTHING (space-filling sweep), then LOCATE the frontier ceteris-paribus and
> state, per axis: where the frontier is, the possible estimated values, the central's BEST case, and the PROBABLE
> case (XX ± CI). The "probable case" for each variable must be JUSTIFIED — by a theoretical argument or an empirical
> measurement — not chosen by the analyst. We fix variables ONE AT A TIME here; each entry records the anchor and its
> strength. Anchor types: E=empirical measurement · T=theoretical argument · P=proxy-informed (transport gap) ·
> A=declared scale assumption.

## Status legend
🔲 not yet fixed · 🔎 evidence being gathered · ✅ fixed (anchor recorded)

## Variable ledger (D_F = physically possible; R_α = probable/expectable, justified)
| Variable | Type | D_F | R_α (probable) | Anchor / source | Strength | Status |
|---|---|---|---|---|---|---|
| `a_V,b_V` visibility tail shape | E | contract | TBD | heavy-tailed public-spending/procurement size dist. (Pareto/log-normal) — verify w/ real data | — | 🔎 (var #1, in progress) |
| `p` participation | E | contract | TBD | participatory-budgeting turnout | — | 🔲 |
| `pi_opp` opposition prevalence | E | contract | TBD | NIMBY/opposition & referendum rates | — | 🔲 |
| `s_exp,b_H_C` harm myopia | T | contract | TBD | agenda-setting / salience (oversight reaches only the visible) | — | 🔲 |
| `w` projection | P | contract | TBD | Gagnon-Bartsch / Dias-Lucas-Sheffer (transport gap) | — | 🔲 |
| `a,b` bias / responsiveness | P | contract | TBD | Broockman-Skovron (transport gap) | — | 🔲 |
| `a_r,b_r` reach | E/T | contract | TBD | local-project interest share | — | 🔲 |
| `beta` voice suppression | T | contract | TBD | spiral of silence; weak empirics | — | 🔲 |
| `phi` budget share, noises, scales | A | contract | contract | declared model scale | n/a | 🔲 |

## Fixed variables (details)
_(populated as we fix each, one at a time)_

## Three anchored scenarios (author framing 2026-07-11) — level the field both ways
Across ALL knobs, report three named scenarios, each with stated assumptions:
- **PRO-CENTRAL** — forced to favour the central, ANCHORED to reproduce the earlier ~0.025 near-parity
  (the symmetry-gate NO-GO) under explicit assumptions (competent central that SEES anti-value: low myopia, high
  `b_H_C` / low `s_exp`, light visibility tail). Central's best case AND a continuity check reconciling with the
  prior result — NOT a contradiction. (Verify: engine under no-myopia settings ≈ near-parity.)
- **PROBABLE** — evidence-anchored expectable values → `m ± 95% CI`, with the why/conditions.
- **PRO-DISTRIBUTED** — favourable/expectable for distributed → `m ± 95% CI`.
Per knob we also give: D_F range, frontier location, evidence for the probable value, result ± CI.

### var #1 — `a_V, b_V` (visibility tail shape) — ✅ EVIDENCE FOUND (pending author confirm)
- **Anchor type: E (empirical).** Public procurement value is heavy-tailed / power-law. Skuhrovec et al.,
  *Exponential and power laws in public procurement markets* (arXiv:1309.0218): >40,000 Czech procurements 2006-2011,
  power laws in revenues/spendings, top spenders follow Zipf (Pareto-like, heavy-tailed); reported exponent α≈1–1.24
  (not verbatim-verified from abstract). Corroborated by IT-project cost power-law (arXiv:2210.01573). ⇒ a few large,
  highly visible projects + a long tail of many small, low-visibility ones ⇒ `a_V < 1` (mass near low visibility) is
  the PROBABLE case, reflecting real spending — not a convenient assumption. The Beta is a bounded stylized
  approximation of the power law (do not overclaim an exponent fit).
- **Proposed bands:** PRO-CENTRAL `a_V≈1.0` (lighter tail, more projects visible → oversight reaches them);
  PROBABLE `a_V∈[0.3,0.8], b_V∈[2,5]` (heavy tail); PRO-DISTRIBUTED `a_V≈0.2` (very heavy tail).
- **Caveat:** procurement VALUE proxies the size dimension of visibility, not visibility per se (controversy/media
  also drive it); one-country study. Could add US/Chile corroboration later.
- **Decision:** PENDING author confirmation of the bands.
