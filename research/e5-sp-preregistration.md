# E5 v2 (S/P agenda-capture) — pre-registration

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
`--w=1`, `--sweepL`). Held-out (5000) matches exploration (1000) to within seed noise.

| ρ | corr(S,P) | cen %oracle | dis %oracle | ratio | macro | alloc | delivery |
|---|---|---|---|---|---|---|---|
| 1.0 | 0.86 | 98% | 97% | **1.43×** | 0.99× | 1.01× | 1.43× |
| 0.6 | 0.44 | 80% | 97% | 1.74× | 0.92× | 1.29× | 1.43× |
| 0.4 | 0.28 | 70% | 97% | **2.00×** | 0.86× | 1.55× | 1.43× |
| 0.2 | 0.14 | 60% | 97% | 2.33× | 0.80× | 1.96× | 1.43× |
| 0.0 | 0.03 | **49%** | 97% | 2.87× | 0.75× | 2.59× | 1.43× |

- **P1 parity at ρ=1:** 1.43× ✓ · **P2 monotone frontier:** 1.43→2.87× ✓ · **P3 calibrated ~2.0×
  (band 1.8-2.4×):** corr 0.28→2.00×, corr 0.14→2.33× ✓ · **P4 two layers / macro ≤1×:** macro
  0.75-0.99× ✓ · **P5 value-blind central ~49%:** 49% at ρ=0 ✓ · **P6 harm-blind (w=1) ≈99%:** cen
  99% ✓ · **P7 lumpiness non-issue in Core v0:** holds 1.77× even at L=16 ✓.
- **Verdict: 7/7 confirmed on held-out seeds.** The v2 model is validated as pre-registered.

## Scope conditions / honest boundaries
- The distributed is modeled as funding pure S (no self-benefit motive — deliberately not modeled;
  the author notes individual portfolios aren't extrapolable). This is *generous to the distributed*.
- The central's P-misalignment must be *measured* (Gilens-Page), not posited — hence the calibration.
- The advantage is comparative (vs a status quo that still delivers ~half), not an efficiency claim.
- The reach/coverage density and the exact ρ are the load-bearing calibration choices; the frontier
  reports the sensitivity to both.
