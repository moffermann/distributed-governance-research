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

### var #1 — `a_V, b_V` (visibility tail shape) — IN PROGRESS
- **Claim:** public spending / procurement is heavy-tailed in project visibility/size — a few large, highly visible
  projects and a long tail of many small, low-visibility local projects. This makes `a_V < 1` (mass near 0 =
  low visibility) the probable case, reflecting how real public spending is distributed — not a convenient assumption.
- **To verify:** a concrete measurement of the contract/project-size distribution (e.g. OCDS / ChileCompra
  Mercado Público), ideally a tail exponent, to set the R_α band on `a_V, b_V`.
- **Decision:** PENDING author input (search for a real source vs. proceed on the stylized fact).
