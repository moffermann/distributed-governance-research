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
| `p` net-allocation participation | facto | fixed | `p = 1.0` (universal) | Core v0 architecture (profiles + delegates cover the passive) — NOT PB turnout | facto (not a knob) | ✅ REVISED |
| `pi_opp` opposition prevalence | E | contract | TBD | NIMBY/opposition & referendum rates | — | 🔲 |
| `s_exp,b_H_C` harm myopia | T | contract | band `s_exp∈[1,2.5], b_H_C∈[0.5,1.3]` (stylized, not measured) | convex salience gate: agenda-setting/salience — oversight/opposition/audit concentrate on visible, contested projects (McCombs–Shaw; Bachrach–Baratz non-decision); EIA/audit/press catch harm as V→1 | direction anchored, magnitude stylized | 🔎 anchored-direction |
| `w` projection | P | contract | TBD | Gagnon-Bartsch / Dias-Lucas-Sheffer (transport gap) | — | 🔲 |
| `a,b` bias / responsiveness | P | contract | TBD | Broockman-Skovron (transport gap) | — | 🔲 |
| `a_r,b_r` reach | E/T | contract | TBD | local-project interest share | — | 🔲 |
| `beta` voice suppression | T | contract | TBD | spiral of silence; weak empirics | — | 🔲 |
| `phi` budget share, noises, scales | A | contract | contract | declared model scale | n/a | 🔲 |

> **Harm-gate (`s_exp,b_H_C`) — the load-bearing, least-empirically-pinned knob (now anchored-direction, magnitude
> stylized).** Direction: a CONVEX salience gate `s(V)=V^s_exp` (oversight/opposition/audit/press concentrate on
> visible, contested projects — agenda-setting; and catch harm as visibility V→1 via EIA/audit) is theory-anchored;
> the EXPONENT is a stylized parameter, NOT measured. It is reported across the anchored band, and the result is robust
> across it: on the probable world, `s_exp=1.0` (linear gate; central detects ~12% of harm on a median project) gives
> m≈+48%, `s_exp=1.5` ≈+51%, `s_exp=2.5` (strong tail-myopia; ~0.6% median detection) ≈+54%. The paper reports this
> sensitivity and the full competent-central range (fully harm-aware ≈+14% → best-competent-reader endpoint ≈−3%),
> so the headline does not rest on the exponent alone.

## KNOB ANCHOR TABLE (anchors + direction only — EXACT VALUES LIVE IN CODE)
> **AUTHORITATIVE scenario values = `scripts/simulation/e4-v5/scenario-configs.mjs` (single source).** This table
> gives each knob's anchor TYPE and the qualitative DIRECTION from central-favourable → distributed-favourable; it
> deliberately does NOT duplicate the numeric points (that duplication forked once — Codex v7). A regression test
> (`npm run e4:test`) pins the scenario sign ORDERING only — it does NOT enforce exact configs, magnitudes, labels,
> or prose, so it cannot by itself prevent code and this narrative from diverging.
> Anchor: E empirical · T theory · P proxy-informed (transport gap) · A declared scale.

| knob | anchor | direction: central-favourable → distributed-favourable | justification |
|---|---|---|---|
| `a_V,b_V` | E | flatter tail (more visible) → heavier tail (more low-visibility) | procurement heavy tail (Skuhrovec arXiv:1309.0218) |
| `p` | facto | fixed at universal (p=1) — NOT swept | Core v0 architecture (profiles/delegates cover the passive); not PB turnout |
| `a_r,b_r` | E | low → high reach (interested share per project) | procurement/PB interest rates |
| `pi_opp,mu_opp` | T/E | little/mild opposition → prevalent/intense | opposition/NIMBY prevalence & intensity |
| `s_exp` | T | concave/flat gate (central sees harm) → convex (myopic on tail) | agenda-setting/salience |
| `b_H_C` | T | high harm-detection → low | central competence at reading harm |
| `w,a,b` | P | low projection/bias, faithful slope → high projection/bias | Broockman-Skovron / Gagnon-Bartsch (transport gap) |
| `beta` | T | opponents silenced → free voice | spiral of silence |
| `lambda` | T | no credit pressure → high | clientelism / credit-claiming |
| `zeta,gamma` | A/T | good category proxy → poor | proxy quality |
| `sigma_e,sigma_C` | A | noisy citizen reports + precise central → clean reports + noisy central | measurement-noise scale |
| `sigma,sigma_v,v_p0,phi,h,m_q,s_q,c_lo,c_hi,N,K` | A | held at contract defaults (not scenario-varied) | value/cost/computational scale |

**Frontier axes (ceteris-paribus, from PROBABLE):** `s_exp, b_H_C, beta` (+ `a_V`) — locate where m crosses 0.
Participation `p` is NOT a frontier axis: in Core v0 net-allocation participation is universal by architecture (a
facto, p=1), not a ceteris-paribus knob.

### RESULTS — anchored scenarios (`npm run e4:scenarios`, N=1500,K=150, 800 worlds)
> **PARTICIPATION IS A FACTO (not a knob):** Core v0 net-allocation participation is universal by architecture
> (profiles + delegates cover the passive), so `p = 1.0` in every scenario — NOT anchored to (low) PB turnout (that
> conflation understated coverage). Under faithful participation the central's declared full-favourable endpoint
> (`PRO_CENTRAL`) is **at most a bare tie (~−1.4%), not a win** — even 20% inward, coverage wins every draw.
> `NO_MYOPIA` (harm-aware + otherwise-competent bundle) is +13.9% (still Core v0), `MYOPIA_OFF` (two-harm-coordinate
> diagnostic) +38.4%. Authoritative configs live in `scenario-configs.mjs`; the regression pins executable outcome
> ORDERING only, not exact configs, magnitudes, labels, or prose.

| scenario | m (gap) | 95% CI | Core v0 delivers | central delivers | winner |
|---|---|---|---|---|---|
| PRO-CENTRAL (central's declared full-favourable endpoint) | **−1.4%** | [−1.5, −1.3] | 96.3% of oracle | 97.7% | ≈ tie (central +1.4 pt) |
| NO-MYOPIA (harm-aware and otherwise-competent bundle) | **+13.9%** | [+13.6, +14.2] | 98.9% | 85.0% | Core v0 |
| PROBABLE (source-motivated reference) | **+54.6%** | [+53.8, +55.4] | 98.9% | 44.3% | Core v0 |
| PRO-DISTRIBUTED (favourable, moderate) | **+205.7%** | [+203.0, +208.7] | 98.9% | −106.8% (destroys value) | Core v0 |

- **Where each stands (faithful participation):** coverage wins across essentially the whole space. The central's
  best case — its fully-idealized declared endpoint (competent, harm-aware, precise, credit-free + little harm) — is
  at most a bare tie (~−1.4%; even 20% inward, coverage wins every draw). The story from D/O: Core v0 is robust
  (96–99%); the central swings 44%→85%→98% (or −107% when myopic + harmful) — it depends on whether it sees the
  anti-value. Net-allocation participation is NOT a lever here (universal by architecture, p=1).
- **Continuity / reconciliation with the NO-GO:** in this sequential, path-dependent decomposition, `MYOPIA_OFF`
  changes only `s_exp,b_H_C` and reduces the gap `+54.6% → +38.4%`, or 16.3 of the 40.8-point decline to `NO_MYOPIA`
  (~40%). The further move to the harm-aware and otherwise-competent `NO_MYOPIA` bundle reduces it by 24.5 points
  (~60%) yet still leaves coverage ahead (+13.9%). This is consistent in DIRECTION with the frozen symmetry-gate
  near-parity (that gate used a conservative sampled-participation regime); under Core v0's universal participation a
  competent central reaches parity only at the fully-idealized endpoint. Qualitative reconciliation across DGPs, not
  a reproduced limit.

### RESULTS — ceteris-paribus frontiers (`npm run e4:frontier`)
- **Robustness over four plotted slices (NOT all parameters):** across the four prespecified one-factor slices
  (`s_exp, b_H_C, beta, a_V`; participation `p` is NOT swept — it is a facto, universal in Core v0), none crosses the
  parity frontier from the PROBABLE scenario within its plotted range — Core v0 wins throughout. This is a limited
  robustness statement over those four slices; reaching parity requires COMBINING central-favourable conditions.
- **Combined scenario-path frontier:** interpolating PROBABLE → the declared central-favourable endpoint
  (`PRO_CENTRAL`), m falls +55% → −1% at the endpoint; the **frontier (m=0) is at t ≈ 0.94** — i.e. conditions ~94%
  of the way from probable toward the fully-idealized central endpoint are needed to flip the winner. The field is
  **NOT level**: coverage wins across essentially the whole space, and the central reaches at most a tie only at the
  extreme idealized corner. `t` is an illustrative linear mix, not a calibrated competence scale.

## Fixed variables (details)
_(populated as we fix each, one at a time)_

## Anchored scenarios (author framing 2026-07-11) — level the field both ways
Four substantive declared scenarios + one diagnostic contrast (values in `scenario-configs.mjs`), each a full config → `m ± 95% CI` (inner MC only):
- **PRO-CENTRAL** — the central's declared full-favourable endpoint (every knob central-favourable). Under faithful
  universal participation this fully-idealized endpoint is **at most a bare tie (≈ −1.4%; even 20% inward, coverage
  wins every draw)**, NOT a win.
- **MYOPIA-OFF** — PROBABLE with ONLY the two harm-gate coordinates changed. The genuine myopia-isolation contrast
  (≈ +38%): a diagnostic contrast attributing the harm channel ALONE — a sequential ~40% of the decline (16.3 of
  40.8 pts); the further step to the NO-MYOPIA bundle is the remaining ~60%.
- **NO-MYOPIA** — a harm-aware AND otherwise-competent central bundle (≈ +14%; still Core v0 ahead). Consistent in
  DIRECTION with the frozen symmetry-gate near-parity (that gate used a conservative sampled-participation regime).
  NOT a myopia isolation — it also improves projection/bias/noise/credit.
- **PROBABLE** — source-motivated declared reference (≈ +54.6%), with the why/conditions.
- **PRO-DISTRIBUTED** — favourable for distributed (≈ +206%; central destroys value).
Per axis we also give: D_F range, ceteris-paribus frontier location, evidence for the probable value, result ± CI.

### var #2 — `p` (net-allocation participation) — ✅ REVISED (author, 2026-07-12): a FACTO, not a turnout knob
- **Not an empirical turnout anchor.** An earlier version anchored `p` to participatory-budgeting turnout (single
  digits: SF District 7 ≈2.5%, Brennan Center; a ~280k city ≈0.4–1.4%, Signal Cleveland/PB Project) and treated it
  as a low, central-favourable knob. That was a **category error**: Core v0 is not voluntary PB. By architecture,
  net-allocation participation is **universal (~100%)** — profiles and delegates allocate every citizen's share on
  behalf of the passive — so `p = 1.0` is a *fact*, not a lever. (The signal QUALITY of the profile/delegate-covered
  share may be coarser, but that is a different, separately-labeled question; and modeling it symmetrically would
  make the CENTRAL — a bounded sampler that cannot aggregate the whole population — look worse, not the distributed
  arm.)
- **Effect of the correction (`e4:scenarios`/`e4:evidence`):** setting `p=1` (from the old 0.05–0.40) collapses the
  central's declared full-favourable endpoint from a ~30-point win to a **bare tie (~−1.4%)**, and raises PROBABLE
  from +46.6% to **+54.6%**. Low participation was a lever that ONLY handicapped the distributed arm (the central's
  even-spread appraisal is robust to it), which is exactly why anchoring it to PB turnout was unfair.
- **Decision:** CONFIRMED (author, 2026-07-12): participation is a facto; `p = 1.0` in every scenario.

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
