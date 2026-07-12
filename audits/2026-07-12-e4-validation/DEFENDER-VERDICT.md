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

## CORRECTION (author, 2026-07-12): the "genuine central winning region" framing was itself the asymmetric-idealization bias
Codex's central-strawman role pushed me to report the best-competent-central corner (~−3%) as "a genuine winning
region", and I accepted it. The author correctly flagged this as the very asymmetry we had agreed to avoid: that
corner idealizes ONLY the central and requires ABANDONING the two anchored central handicaps — harm-myopia (vs the
salience/agenda-setting literature) and projection (vs Broockman–Skovron) — PLUS a near-harmless "Narnia" world
(pi_opp≈0.03). Reporting it without the SYMMETRIC idealized-distributed corner privileges the central. Symmetric fact:
the idealized-distributed corner (perfect signal, harm-rich world, central kept at its ANCHORED myopia) wins m≈+118%.
So idealization is wildly asymmetric — the central must contradict the literature to eke out −3%, the distributed's
symmetric idealization wins by a landslide. The honest statement is NOT "both arms have a winning region"; it is that
WITHIN THE EMPIRICALLY-ANCHORED SPACE coverage wins decisively, and the central "wins" only in an anti-empirical corner.

## The honest result (anchored space; idealized corners reported symmetrically, neither empirically grounded)
- PROBABLE (anchored: central myopic per lit + distributed realistic composition): m=+54.0% (Core v0 98.2% vs central 44.2%).
- Anchored competent-central range: fully harm-aware ~+14% → probable ~+54%. Even a fully-competent-BUT-STILL-ANCHORED central loses.
- Idealized corners (symmetric, both anti-empirical): central's best ~−3% (abandons myopia + projection, Narnia world) vs distributed's best ~+118% (anchored-myopic central).
- Common-mode robustness: +54% (independent) → +44% (modest) → +26% (strong); parity only at a large sigma_cm≈2.1.
- Harm-myopia (anchored, stylized): the load-bearing knob; the headline does not rest on it alone (competent-central range + common-mode both reported).
- Attribution: harm-gate ALONE (MYOPIA_OFF) ~16.5 pts; full competent-central bundle ~40 pts.

## Verdict (defender, corrected)
E4's **implementation and results are publication-ready.** The model is honest: fair machinery (a perfect central
delivers 100% of the oracle — the structure is not rigged), an un-flattered distributed arm, every decisive knob
anchored or swept, the one structural distributed advantage (error independence) modeled and right-sized, and full
contract/schema/provenance discipline. Idealized corners are reported SYMMETRICALLY (central ~−3% only by contradicting
the anchored literature + a Narnia world; distributed ~+118% at the symmetric idealization) — neither is empirically
grounded, and the central's is not privileged. Within the empirically-anchored space the result is **one-sided for
coverage** (probable +54%; even a fully-competent-but-anchored central loses at ~+14%); the only sensitivity that
materially moves the magnitude (not the sign) is correlated/common-mode error. No over-correction was let through:
the earlier "genuine central winning region" framing was itself the asymmetric-idealization bias and has been fixed.
Pending: the paper-prose propagation (separate phase).
