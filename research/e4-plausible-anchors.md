# E4 — plausible-value anchors (the "probable case", justified per variable) — LIVING DOC

> Author framing (2026-07-11): report EVERYTHING (space-filling sweep), then LOCATE the frontier ceteris-paribus and
> state, per axis: where the frontier is, the possible estimated values, the central's declared favourable endpoint, and the PROBABLE
> case (XX ± CI). The "probable case" for each variable must be JUSTIFIED — by a theoretical argument or an empirical
> measurement — not chosen by the analyst. We fix variables ONE AT A TIME here; each entry records the anchor and its
> strength. Anchor types: E=empirical measurement · T=theoretical argument · P=proxy-informed (transport gap) ·
> A=declared scale assumption.

## Status legend
🔲 not yet fixed · 🔎 evidence being gathered · ✅ fixed (anchor recorded)

## Variable ledger (D_F = physically possible; R_α = probable/expectable, justified)
| Variable | Type | D_F | R_α (probable) | Anchor / source | Strength | Status |
|---|---|---|---|---|---|---|
| `a_V,b_V` visibility tail shape | E | contract | probable `a_V∈[0.3,0.8], b_V∈[2,5]` | heavy-tailed public procurement (Skuhrovec arXiv:1309.0218; Zipf/Pareto) | strong (dir.), stylized (mag.) | ✅ CONFIRMED |
| `p` participation | E | contract | TBD | participatory-budgeting turnout | — | 🔎 (var #2, in progress) |
| `pi_opp` opposition prevalence | E | contract | TBD | NIMBY/opposition & referendum rates | — | 🔲 |
| `s_exp,b_H_C` harm myopia | T | contract | TBD | agenda-setting / salience (oversight reaches only the visible) | — | 🔲 |
| `w` projection | P | contract | TBD | Gagnon-Bartsch / Dias-Lucas-Sheffer (transport gap) | — | 🔲 |
| `a,b` bias / responsiveness | P | contract | TBD | Broockman-Skovron (transport gap) | — | 🔲 |
| `a_r,b_r` reach | E/T | contract | TBD | local-project interest share | — | 🔲 |
| `beta` voice suppression | T | contract | TBD | spiral of silence; weak empirics | — | 🔲 |
| `phi` budget share, noises, scales | A | contract | contract | declared model scale | n/a | 🔲 |

## KNOB ANCHOR TABLE (anchors + direction only — EXACT VALUES LIVE IN CODE)
> **AUTHORITATIVE scenario values = `scripts/simulation/e4-v5/scenario-configs.mjs` (single source).** This table
> gives each knob's anchor TYPE and the qualitative DIRECTION from central-favourable → distributed-favourable; it
> deliberately does NOT duplicate the numeric points (that duplication forked once — Codex v7). A regression test
> (`npm run e4:test`) pins the scenario sign ordering so code and this narrative cannot silently diverge.
> Anchor: E empirical · T theory · P proxy-informed (transport gap) · A declared scale.

| knob | anchor | direction: central-favourable → distributed-favourable | justification |
|---|---|---|---|
| `a_V,b_V` | E | flatter tail (more visible) → heavier tail (more low-visibility) | procurement heavy tail (Skuhrovec arXiv:1309.0218) |
| `p` | E | low → high participation | PB turnout ×reach ≈1–3% (Brennan/SignalCleveland) |
| `a_r,b_r` | E/joint | low → high reach | joint constraint `reach×p ≈ turnout` |
| `pi_opp,mu_opp` | T/E | little/mild opposition → prevalent/intense | opposition/NIMBY prevalence & intensity |
| `s_exp` | T | concave/flat gate (central sees harm) → convex (myopic on tail) | agenda-setting/salience |
| `b_H_C` | T | high harm-detection → low | central competence at reading harm |
| `w,a,b` | P | low projection/bias, faithful slope → high projection/bias | Broockman-Skovron / Gagnon-Bartsch (transport gap) |
| `beta` | T | opponents silenced → free voice | spiral of silence |
| `lambda` | T | no credit pressure → high | clientelism / credit-claiming |
| `zeta,gamma` | A/T | good category proxy → poor | proxy quality |
| `sigma_e,sigma_C` | A | noisy citizen reports + precise central → clean reports + noisy central | measurement-noise scale |
| `sigma,sigma_v,v_p0,phi,h,m_q,s_q,c_lo,c_hi,N,K` | A | held at contract defaults (not scenario-varied) | value/cost/computational scale |

**Frontier axes (ceteris-paribus, from PROBABLE):** `s_exp, b_H_C, p, beta` (+ `a_V`) — locate where m crosses 0.

### RESULTS — anchored scenarios (`npm run e4:scenarios`, N=1500,K=150, 800 worlds)
> **CORRECTION:** `PRO_CENTRAL` is the central's declared full-favourable endpoint, and the central wins there.
> `NO_MYOPIA` is the separate harm-aware and otherwise-competent continuity bundle at +6.1%, **not a myopia
> isolation**; `MYOPIA_OFF` is the two-harm-coordinate diagnostic contrast at +30.4%. Authoritative configs live in
> `scenario-configs.mjs`; the regression pins executable outcome ORDERING only, not exact configs, magnitudes,
> labels, or prose.

| scenario | m (gap) | 95% CI | Core v0 delivers | central delivers | winner |
|---|---|---|---|---|---|
| PRO-CENTRAL (central's declared full-favourable endpoint) | **−29.5%** | [−29.9, −29.1] | 68% of oracle | 98% | **central** |
| NO-MYOPIA (harm-aware and otherwise-competent continuity bundle) | **+6.1%** | [5.8, 6.4] | 91% | 85% | ≈ parity |
| PROBABLE (source-motivated reference) | **+46.6%** | [46.0, 47.4] | 91% | 45% | Core v0 |
| PRO-DISTRIBUTED (favourable, moderate) | **+199.8%** | [197, 202] | 96% | −104% (destroys value) | Core v0 |

- **Level field (both ways):** the central has a genuine winning region — under its declared full-favourable endpoint (low
  participation + competent, harm-aware central) it wins ~30% and delivers 98% of the oracle. Core v0 wins under the
  probable reference. The story from D/O: Core v0 is fairly robust (68–96%); the central swings 45%→85%→98% (or −104%
  when myopic + harmful) — it depends on whether it sees the anti-value AND on citizen participation.
- **Continuity / reconciliation with the NO-GO:** in this sequential, path-dependent decomposition, `MYOPIA_OFF`
  changes only `s_exp,b_H_C` and reduces the gap `+46.6% → +30.4%`, or 16.2 of the 40.5-point decline to `NO_MYOPIA`
  (~40%). The further move to the harm-aware and otherwise-competent `NO_MYOPIA` bundle reduces it by 24.3 points
  (~60%). `NO_MYOPIA` is the continuity anchor to the symmetry-gate near-parity regime; this is a qualitative
  reconciliation hypothesis across different DGPs, not a reproduced limit.

### RESULTS — ceteris-paribus frontiers (`npm run e4:frontier`)
- **Robustness over five plotted slices (NOT all parameters):** across the five prespecified one-factor slices
  (`s_exp, b_H_C, p, beta, a_V`), none crosses the parity frontier from the PROBABLE scenario within its plotted
  range — Core v0 wins throughout (+25% to +54%). This is a limited robustness statement over those five slices;
  reaching parity requires COMBINING central-favourable conditions (and other coordinates can flip the sign — e.g.
  the targeted PRO_CENTRAL-region probe in `e4:evidence`).
- **Combined scenario-path frontier (CORRECTED, Codex v7):** interpolating PROBABLE → the central's FULL best
  plausible case (`PRO_CENTRAL`), m falls +47% → −30%; the **frontier (m=0) is at t ≈ 0.57** — i.e. conditions ~57%
  of the way from probable toward the central's full best case flip the winner to the central. That is a PLAUSIBLE
  segment, NOT beyond-realistic (the earlier "t≈1.13 / beyond realistic" claim was wrong — it used a partial 8-knob
  path). Honest headline: *which side a real setting falls on depends on where a measured target configuration would
  lie between the declared scenarios; none of the five plotted slices decides it alone.* `t` is an illustrative
  linear mix, not a calibrated competence scale.

## Fixed variables (details)
_(populated as we fix each, one at a time)_

## Anchored scenarios (author framing 2026-07-11) — level the field both ways
Five named scenarios (values in `scenario-configs.mjs`), each a full config → `m ± 95% CI` (inner MC only):
- **PRO-CENTRAL** — the central's declared full-favourable endpoint (every knob central-favourable). The central WINS
  (≈ −30%, delivers 98% of the benchmark). This is the honest "central's favourable region", NOT near-parity.
- **MYOPIA-OFF** — PROBABLE with ONLY the two harm-gate coordinates changed. The genuine myopia-isolation contrast
  (≈ +30%): a diagnostic contrast attributing the harm channel ALONE — a sequential ~40% of the decline (16.2 of
  40.5 pts); the further step to the NO-MYOPIA bundle is the remaining ~60%.
- **NO-MYOPIA** — a harm-aware AND otherwise-competent central bundle (≈ +6%). The continuity anchor to the
  symmetry-gate ~0.025 near-parity (that gate equips the central with competent harm-aware appraisal). NOT a myopia
  isolation — it also improves projection/bias/noise/credit.
- **PROBABLE** — source-motivated declared reference (≈ +46.6%), with the why/conditions.
- **PRO-DISTRIBUTED** — favourable for distributed (≈ +200%; central destroys value).
Per axis we also give: D_F range, ceteris-paribus frontier location, evidence for the probable value, result ± CI.

### var #2 — `p` (participation) — ✅ CONFIRMED (author, 2026-07-11)
- **Anchor type: E (empirical), with a mapping caveat.** Participatory-budgeting turnout (whole population) is low
  single digits: San Francisco District 7 ~2,100/84,000 ≈ **2.5%** (Brennan Center); a ~280k city ~0.4–1.4%
  (Signal Cleveland; PB Project). **Caveat:** in the model `p` is the reporting rate among the INTERESTED; reach `r`
  already selects the interested subset, so PB turnout ≈ **reach × p**. With reach mean ≈0.13, a 1–3% turnout ⇒
  `p ≈ 0.08–0.25`. → When reach (`a_r,b_r`) is anchored later, JOINTLY verify `reach × p ≈ 1–3%` (one observable
  constrains two knobs).
- **Direction (rationale; authoritative values in `scenario-configs.mjs`):** central-favourable = LOW participation
  (sparse citizen signal); PROBABLE ≈ `p∈[0.08,0.25]` (the source-motivated band); distributed-favourable = HIGH.
- **Decision:** PENDING author confirmation.

### var #1 — `a_V, b_V` (visibility tail shape) — ✅ CONFIRMED (author, 2026-07-11)
- **Anchor type: E (empirical).** Public procurement value is heavy-tailed / power-law. Skuhrovec et al.,
  *Exponential and power laws in public procurement markets* (arXiv:1309.0218): >40,000 Czech procurements 2006-2011,
  power laws in revenues/spendings, top spenders follow Zipf (Pareto-like, heavy-tailed); reported exponent α≈1–1.24
  (not verbatim-verified from abstract). Corroborated by IT-project cost power-law (arXiv:2210.01573). ⇒ a few large,
  highly visible projects + a long tail of many small, low-visibility ones ⇒ `a_V < 1` (mass near low visibility) is
  the PROBABLE case, reflecting real spending — not a convenient assumption. The Beta is a bounded stylized
  approximation of the power law (do not overclaim an exponent fit).
- **Direction (rationale; authoritative values in `scenario-configs.mjs`):** central-favourable = FLATTER tail
  (more projects visible → oversight reaches them); PROBABLE ≈ `a_V∈[0.3,0.8], b_V∈[2,5]` (heavy tail);
  distributed-favourable = HEAVIER tail.
- **Caveat:** procurement VALUE proxies the size dimension of visibility, not visibility per se (controversy/media
  also drive it); one-country study. Could add US/Chile corroboration later.
- **Decision:** PENDING author confirmation of the bands.
