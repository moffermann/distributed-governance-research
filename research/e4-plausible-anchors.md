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
| `a_V,b_V` visibility tail shape | E | contract | probable `a_V∈[0.3,0.8], b_V∈[2,5]` | heavy-tailed public procurement (Skuhrovec arXiv:1309.0218; Zipf/Pareto) | strong (dir.), stylized (mag.) | ✅ CONFIRMED |
| `p` participation | E | contract | TBD | participatory-budgeting turnout | — | 🔎 (var #2, in progress) |
| `pi_opp` opposition prevalence | E | contract | TBD | NIMBY/opposition & referendum rates | — | 🔲 |
| `s_exp,b_H_C` harm myopia | T | contract | TBD | agenda-setting / salience (oversight reaches only the visible) | — | 🔲 |
| `w` projection | P | contract | TBD | Gagnon-Bartsch / Dias-Lucas-Sheffer (transport gap) | — | 🔲 |
| `a,b` bias / responsiveness | P | contract | TBD | Broockman-Skovron (transport gap) | — | 🔲 |
| `a_r,b_r` reach | E/T | contract | TBD | local-project interest share | — | 🔲 |
| `beta` voice suppression | T | contract | TBD | spiral of silence; weak empirics | — | 🔲 |
| `phi` budget share, noises, scales | A | contract | contract | declared model scale | n/a | 🔲 |

## MASTER SCENARIO TABLE (all knobs; author delegated range definition 2026-07-11)
Three named point-scenarios across every knob (each scenario = a full config → run → m ± 95% CI). PRO-CENTRAL is the
central's best plausible case (and the continuity anchor to the earlier ~0.025 near-parity). PROBABLE is the
evidence/theory-anchored expectable case. PRO-DISTRIBUTED is the distributed's favourable case. Anchor: E empirical ·
T theory · P proxy-informed (transport gap) · A declared scale.

| knob | anchor | pro-central | PROBABLE | pro-distributed | justification |
|---|---|---|---|---|---|
| `a_V` | E | 1.0 | 0.5 | 0.2 | procurement heavy tail (Skuhrovec 1309.0218); proC=flatter (more visible) |
| `b_V` | E | 1.5 | 3.5 | 5.0 | " (mass on low-visibility long tail) |
| `p` | E | 0.05 | 0.15 | 0.45 | PB turnout ×reach ≈1–3% (Brennan/SignalCleveland) |
| `a_r` | E/joint | 0.8 | 1.5 | 3.0 | reach mean proC≈0.05, prob≈0.16, proD≈0.375; joint `reach×p≈turnout` |
| `b_r` | E/joint | 14 | 8 | 5 | " |
| `pi_opp` | T/E | 0.03 | 0.15 | 0.35 | opposition/NIMBY prevalence among affected; proC=little harm to miss |
| `mu_opp` | A | 1.5 | 3.0 | 5.0 | opposition intensity scale |
| `s_exp` | T | 0.5 | 2.5 | 5.0 | agenda-setting/salience — proC concave/flat (central sees harm on tail), prob convex (myopic on tail) |
| `b_H_C` | T | 1.2 | 0.5 | 0.2 | central harm-detection where it looks; proC=competent detector |
| `w` | P | 0.1 | 0.5 | 1.3 | projection (Gagnon-Bartsch/D-L-S, transport gap) |
| `a` | P | 0.0 | 0.2 | 0.6 | systematic bias intercept (Broockman-Skovron, transport gap) |
| `b` | P | 1.0 | 0.9 | 0.7 | responsiveness near-linear (B-S); proC=faithful |
| `beta` | T | 0.8 | 0.35 | 0.1 | adverse-voice suppression (spiral of silence); proC=opponents silenced |
| `lambda` | T | 0.0 | 0.15 | 0.35 | credit pressure / clientelism; proC=none |
| `zeta` | A/T | 0.85 | 0.6 | 0.35 | category-signal↔quality corr; proC=good proxy |
| `gamma` | tied w | 0.3 | 0.5 | 0.9 | projection loading on category signal |
| `sigma_e` | A | 1.2 | 0.5 | 0.2 | report noise; proC=noisy citizen reports |
| `sigma_C` | A | 0.2 | 0.5 | 0.8 | central estimation noise; proC=precise central |
| `sigma,sigma_v,v_p0,phi,h` | A | base | base | base | scale/structural (held at contract defaults) |
| `m_q,s_q,c_lo,c_hi,N,K` | A | base | base | base | value/cost/computational scale (held) |

**Frontier axes (ceteris-paribus, from PROBABLE):** `s_exp, b_H_C, p, beta` (+ `a_V`) — locate where m crosses 0.

### RESULTS — three anchored scenarios (`npm run e4:scenarios`, N=1500,K=150, 800 worlds)
| scenario | m (gap) | 95% CI | Core v0 delivers | central delivers |
|---|---|---|---|---|
| PRO-CENTRAL (myopia OFF, competent central) | **+6.1%** | [5.8, 6.4] | 91% of oracle | 85% |
| PROBABLE (evidence-anchored) | **+46.6%** | [46.0, 47.4] | 91% | 45% |
| PRO-DISTRIBUTED (favourable, moderate) | **+199.8%** | [197, 202] | 96% | −104% (destroys value) |

- **The story (from D/O vs C/O):** Core v0 is ROBUST — it delivers ~91–96% of the achievable value in all three;
  the central is FRAGILE — 85% → 45% → −104% depending entirely on whether it sees the anti-value.
- **Continuity / reconciliation with the NO-GO:** removing harm-myopia collapses the advantage +46.6% → +6.1%
  (same small regime as the symmetry-gate ~2.5%). The +46% IS the harm-myopia mechanism; remove it and you return
  to near-parity. The two results are the SAME phenomenon under opposite assumptions — not a contradiction.

### RESULTS — ceteris-paribus frontiers (`npm run e4:frontier`)
- **Single-knob robustness:** from the PROBABLE scenario, NO single axis (`s_exp, b_H_C, p, beta, a_V`) crosses the
  parity frontier within its plotted range — Core v0 wins throughout (+25% to +54%). The conclusion is robust to any
  ONE assumption; reaching parity requires COMBINING central-favourable conditions.
- **Combined central-competence frontier:** interpolating PROBABLE → fully-competent plausible central, m falls
  +47% → +6%; the **frontier (m=0) is at t ≈ 1.13** — i.e. the central wins ONLY if it is BETTER than the fully-
  competent plausible central (beyond realistic), and even then by only ~5%. Honest headline: *under any realistic
  central, Core v0 wins; the central needs better-than-plausible anti-value sight to tie, and it barely wins past that.*

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

### var #2 — `p` (participation) — ✅ CONFIRMED (author, 2026-07-11)
- **Anchor type: E (empirical), with a mapping caveat.** Participatory-budgeting turnout (whole population) is low
  single digits: San Francisco District 7 ~2,100/84,000 ≈ **2.5%** (Brennan Center); a ~280k city ~0.4–1.4%
  (Signal Cleveland; PB Project). **Caveat:** in the model `p` is the reporting rate among the INTERESTED; reach `r`
  already selects the interested subset, so PB turnout ≈ **reach × p**. With reach mean ≈0.13, a 1–3% turnout ⇒
  `p ≈ 0.08–0.25`. → When reach (`a_r,b_r`) is anchored later, JOINTLY verify `reach × p ≈ 1–3%` (one observable
  constrains two knobs).
- **Proposed bands:** PRO-CENTRAL `p≈0.05` (sparse citizen signal); PROBABLE `p∈[0.08,0.25]`; PRO-DISTRIBUTED `p≈0.45`.
- **Decision:** PENDING author confirmation.

### var #1 — `a_V, b_V` (visibility tail shape) — ✅ CONFIRMED (author, 2026-07-11)
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
