# E4 validation round — defender's verdict (Core v0)

**Date:** 2026-07-12. **Scope:** E4 implementation + results (paper prose deferred). **HEAD:** 2b60ab9.
Adversaries: Codex 7-role panel + Claude adv-cent (central) + Claude adv-dist (distributed). My role: review each,
accept honest fixes, rebut unfair degradations, keep the result honest but not forced-ugly.

## Adversary findings and my rulings

| Source | Finding | Severity | Ruling | Commit |
|---|---|---|---|---|
| Codex-7 | Profile fallback used latent true `q`; delegation washed out | major | **ACCEPT** (removes flattery) — profile→observable `qCat`; delegation `d_bias` | eb3fe98 |
| Codex-7 / adv-cent | PRO_CENTRAL not the best competent central; harm-gate unanchored | blocker | **ACCEPT** — report best-competent-central (~−3%, material win); anchor harm-gate (band, salience/EIA) | a4c68ba, 8b007eb |
| Codex-7 | Low-O gate biases the ratio-of-sums; bare "95% CI" | major | **REBUT+SHOW** — gate INERT (π_deg 0%, gated==all-world); label CI(MC) | a4c68ba |
| Codex-7 | "41-pt myopia effect" is the 8-coord bundle; 10× test circular | blocker | **ACCEPT** — use MYOPIA_OFF (2-coord, ~16.5 pts); signed/locality test | a4c68ba |
| Codex-7 | p=1 conflates coverage with observation | blocker | **ACCEPT** — separate architectural COVERAGE (facto) from per-channel OBSERVATION | 8b007eb + composition |
| Codex-7 | Envelope box promoted as global/plausible evidence | blocker | **ACCEPT** — relabel EXPLORATORY; rule-of-three, not "measure-zero" | a4c68ba |
| Codex-7 | Schema not fail-closed; id omits inputs | blocker | **ACCEPT** — schema guards (+6 tests); resolved-manifest hash | 8135955, 2b60ab9 |
| adv-cent | "symmetric harm handling (~65%) => +21%" | — | **REBUT** — violates the epistemic asymmetry (the central never receives individual project preference; a head-count/profiling/survey ≠ individual-on-this-project). Full-harm-sight (~+14%) is the FLOOR, not the fair central. |
| adv-dist | Independence of errors: IID error averages out; real profiles share a platform, delegation concentrates | major | **ACCEPT** — model common-mode `sigma_cm` (per-project shared error on profile+delegation); report the sensitivity | 5331d71 |

## Defense linchpins (evidence, not assertion)
- **Machinery is FAIR:** a perfect central (M_C≡S) delivers 100.0% of oracle. It loses on knob VALUES, not structure.
- **Central is NOT a strawman:** strengthen it knob-by-knob on the probable world → still loses (precise +43%, no-projection +41%, not-myopic +47%, ALL jointly +12%). It ties/wins only where the WORLD carries little harm.
- **Distributed is NOT flattered:** harsher signal barely moves it (φ_prof=0.3 +54%, k_deleg=4 +54%, φ_prof=0 +54%).
- **The one binding sensitivity is common-mode error** (the only place coverage was structurally advantaged): magnitude +54%→+26% at strong correlation, sign robust to ~2.1.

## The honest result (balanced, both arms have a winning region)
- PROBABLE (independent-error reference): m=+54.0% (Core v0 98.2% vs central 44.2%).
- Competent-central range: fully harm-aware ~+14% → best-competent-reader endpoint ~−3% (a small MATERIAL central win on a near-harmless world).
- Common-mode robustness: +54% (independent) → +44% (modest) → +26% (strong); parity only at a large sigma_cm≈2.1.
- Harm-myopia (anchored, stylized): the load-bearing knob; the headline does not rest on it alone (competent-central range + common-mode both reported).
- Attribution: harm-gate ALONE (MYOPIA_OFF) ~16.5 pts; full competent-central bundle ~40 pts.

## Verdict (defender)
E4's **implementation and results are publication-ready.** The model is honest and balanced: fair machinery, a
non-strawman central with a genuine small winning region, an un-flattered distributed arm, every decisive knob
anchored or swept, the one structural advantage (error independence) modeled and right-sized, and full contract/
schema/provenance discipline. No fix was accepted that unfairly degraded either arm; no over-correction was let
through that would forced-ugly the result. Robust in SIGN across the whole defensible space; magnitude honestly
bracketed (+14% to +54%, common-mode floor into the +20s). Pending: the paper-prose propagation (separate phase).
