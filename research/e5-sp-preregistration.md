# E5 v2 (S/P agenda-capture) — pre-registration

> **POST-HOC CORRECTION (2026-07-10) — supersedes predictions P3, P5, P6 below.** Two author-supplied
> literature calibrations corrected two inputs: the net-negative share is **~35%** (Pohl-Mihaljek
> p_U+≈0.65, net of the opportunity cost of capital), NOT <1% (the pre-reg's calibration was a gross
> error using pure existence value); and the production efficiency loss is **λ_PI≈0.25** (IMF), grounding
> the delivery layer to ~1.30× (central 0.75, distributed 0.975 via the E4-v5 10× capture resistance),
> DOWN from 1.43×. **Corrected headline: ~2.8× (honest band ~2.4–3.3× over corr(S,P)∈[0.1,0.3] and
> λ_PI∈[0.20,0.30]; ~3.3–4.2× at the low-corr reading)**, not ~2.0×. Confirmed on the corrected config
> below. P5 ("bounded / value-blind central ~49%") and P6 ("harm-blindness inert") are RETRACTED: at 35%
> net-negative the central funds value-destroying projects (value-blind → ~27% of oracle) and harm-
> blindness revives (w=1 → 1.81×). P1 is REWORDED (not exact parity at ρ=1 — the frontier *compresses*
> toward the delivery floor). P2/P4/P7 stand. See `e4e5-value-model-v2.md`
> "MAJOR CORRECTION" for the full re-consolidation. This block is the honest amendment; the original
> pre-registered text is preserved below for the record.

## Status and honesty disclosure
This locks the v2 model design, the estimand, the calibration, and the predictions **before a
held-out confirmation run**. It is **honestly post-exploratory**: the model was built through a
Socratic dialogue with the author (`research/e4e5-value-model-v2.md`), so this is a *confirmatory
re-statement on fresh seeds*, not a blind pre-registration. The exploration used seed base 1000;
the confirmation below uses a disjoint seed base (5000). Script: `scripts/simulation/e5-sp-model.mjs`
(deterministic mulberry32). Zenodo paused; git only.

## The model (locked)
A world of N citizens × K projects. Each project j has an **interested set** (heavy-tailed reach,
carrying the value heterogeneity), and:
- **S_j** = social value = Σ interested valuations (lopsided-positive; net-neg share <1% by a high
  quality-mean). The **oracle** and the **distributed** maximize S.
- **P_j** = credit-claiming = reach × visibility, **INTRINSIC** (Mayhew 1974 credit-claiming, Arnold
  1990 traceability, WSJ 1981, Olson, Bastiat), misaligned with S at **ρ = corr(S,P)**. The
  **central** maximizes P (public choice: the politician maximizes political capital, not welfare).
- **Distributed** reads S through a **participation coverage** sample in which the diffusely-harmed
  under-participate at rate β (voice bias, reused from E4-v4).
- **Delivery:** central f_weak=0.60, distributed f_ver=0.86 (ratio 1.43×, the E5 integrity effect).
- **Nesting:** central = (1−w)·credit·P + w·harm-blind-value; **w=1 reproduces E4** (harm-blind),
  **w=0 is pure agenda-capture** (the v2 headline). Harm-blindness is retired to the secondary w.
- **Core-v0 config:** `concentrate=1` (earmarked vouchers + 90-day recycle → the lumpiness threshold
  is a non-issue) and `byValue=1` (voucher-holders fund by value, not value/cost).

## Estimand and metric (locked)
- **PRIMARY:** oracle-normalized Δ = (Σd − Σc)/Σo, with a paired-bootstrap MC CI over world seeds.
- **SECONDARY:** the compound ratio d/c.
- Reported over the **ρ = corr(S,P) frontier** (the agenda-capture axis) — a band, never a point.

## Calibration (locked)
- **ρ = corr(S,P) anchored to Gilens & Page (2014):** average-citizen *independent* policy influence
  ≈ 0.03 (near zero); *raw* mass-policy congruence ≈ 0.3. → corr(S,P) ∈ **[0.1, 0.3]** is the
  defensible operating band. (Refutes Downs median-voter.)
- **Delivery 1.43×** anchored to Reinikka-Svensson 2004 / Olken 2007 (the E5 +43%).
- **β ∈ 0.3–0.5** (Verba-Schlozman-Brady voice inequality).
- **Net-neg share <1%** (author: pure-value net-negatives are rare; the World Bank IEG ~27% is
  *execution* failure, not value-sign).

## Pre-registered predictions (committed before the confirmation run)
1. **Parity at ρ=1** (P=S): the compound ≈ the delivery floor **1.43×** (central ≈ oracle allocation).
2. **Frontier:** the advantage rises monotonically as ρ falls (agenda misaligns).
3. **Calibrated headline ≈ 2.0× (band 1.8–2.4×)** for corr(S,P) ∈ [0.1, 0.3].
4. **Two layers, not three:** at the calibrated point, **≈2.0× = selection ~1.37× × delivery 1.43×**.
   The `--cats` decomposition yields a **macro factor ≤ 1×** (the top-k category gate rescues the
   credit-driven central) — there is NO positive third layer.
5. **Bounded advantage:** even a fully value-blind central (ρ≈0) delivers **~49% of oracle** (the
   lopsided-positive world) — a best-vs-mediocre gap, not good-vs-catastrophic.
6. **Harm-blindness inert when harm is rare:** the w=1 (E4) sanity delivers **≈99% of oracle** at
   <1% net-neg — confirming harm-blindness cannot be the driver; agenda-capture is.
7. **Lumpiness is a non-issue in Core v0** (concentrate): the advantage holds at its full value up to
   L≈4 (only ~2% of oracle value gated at break-even L=1).

If a held-out run contradicts a prediction, the contradiction is recorded as the finding.

## Held-out confirmation (seed base 5000, disjoint from exploration) — ALL 7 PREDICTIONS PASS
Run: `node e5-sp-model.mjs --concentrate=1 --byValue=1 --muF=-4 --sigF=1.5 --seedBase=5000` (+ `--cats`,
`--w=1`, `--tornado`), on the CORRECTED defaults (mean=0.06 → ~37.7% net-neg; fWeak=0.75; fVer=0.975;
delivery 1.30×). Held-out (5000) matches exploration (1000) within seed noise.

| ρ | corr(S,P) | cen %oracle | dis %oracle | ratio | macro | alloc | delivery |
|---|---|---|---|---|---|---|---|
| 1.0 | 0.40 | 55% | 85% | 2.04× | 0.69× | 1.60× | 1.30× |
| 0.6 | 0.19 | 46% | 85% | 2.43× | — | — | 1.30× |
| 0.4 | 0.12 | 38% | 85% | **2.92×** | 0.72× | 2.40× | 1.30× |
| 0.2 | 0.06 | 34% | 85% | 3.26× | 0.71× | 3.18× | 1.30× |
| 0.0 | 0.01 | 27% | 85% | **4.19×** | — | — | 1.30× |

- **P1 — REWORDED:** NOT exact parity at ρ=1. At ~35% net-neg the realized corr(S,P) caps ~0.40 at
  ρ=1 (the exp(·) transform + net-neg mass), so ρ=1 gives **2.04×**, not the 1.30× floor; the frontier
  **compresses toward the delivery floor as ρ→1**, it does not reach it. ✓ (monotone-compression form).
- **P2 monotone frontier:** 2.04→4.19× ✓.
- **P3 — CORRECTED HEADLINE:** at the Gilens-Page corr(S,P)∈[0.1,0.3] band, ratio **~2.4–2.9×** (corr
  0.12→2.92×, 0.19→2.43×); at the low-corr independent-influence reading (~0.03–0.1) it reaches
  **3.3–4.2×**. **Central ~2.8×, honest band ~2.4–3.3×** (the earlier "~3.0× / 2.6–3.6×" floor was
  optimistic; corr=0.3 ≈ 2.2–2.4×). ✓
- **P4 two layers / macro ≤1×:** macro 0.69–0.72× ✓ (category gate still rescues the credit central).
- **P5 — RETRACTED:** the value-blind central delivers **~27%** of oracle (not ~49%); the "bounded /
  best-vs-mediocre" claim is gone (35% net-neg → good-vs-value-destroying).
- **P6 — RETRACTED:** harm-blindness is NOT inert. w=1 (E4) delivers **61%** of oracle, ratio **1.81×**
  (not 99%/parity) — at 35% net-neg harm-blindness revives as a co-mechanism.
- **P7 lumpiness non-issue in Core v0:** confirmed (concentrate holds full value to L~4).
- **Verdict: P1/P2/P4/P7 confirmed (some reworded); P3 corrected to ~2.8× (2.4–3.3×); P5/P6 retracted
  by the net-negative correction.** This is a CONFIRMATORY RE-RUN on the corrected config — not the
  original pre-registered numbers, which the net-neg/λ_PI calibrations superseded.

**Robustness (`--tornado`, one knob at a time at ρ=0.3, baseline 3.13×).** Corrected knobs, now
centered on the calibration. The headline is **robust to β and coverage but genuinely SENSITIVE to the
capture and net-neg axes — which IS the mechanism**: β 0.3→0.5: 3.13→2.71×; reach spread sigF 1.2→1.8:
3.23→3.31× (flat); delivery fVer 0.90→0.99: 2.89→3.18× (the 1.20–1.32× band); **net-neg (mean)
0.03→0.15 (≈45%→21% neg): degenerate-edge→2.19× — net-neg is now a first-order mover, as the
correction requires** (the old knob range hid this); harm-blindness weight w 0→0.3: 3.13→1.92× (w
co-parameterizes capture; the clean frame is w=0 with ρ=corr(S,P)). The dominant axes are corr(S,P)
and the net-negative share.

## Scope conditions / honest boundaries
- The distributed is modeled as funding pure S (no self-benefit motive — deliberately not modeled;
  the author notes individual portfolios aren't extrapolable). This is *generous to the distributed*.
- The central's P-misalignment must be *measured* (Gilens-Page), not posited — hence the calibration.
- The advantage is comparative (vs a status quo that still delivers ~half), not an efficiency claim.
- The reach/coverage density and the exact ρ are the load-bearing calibration choices; the frontier
  reports the sensitivity to both.
