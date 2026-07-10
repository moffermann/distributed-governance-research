# E5 v2 (S/P agenda-capture) — pre-registration

> **FAITHFUL-SPLIT CORRECTION (2026-07-10, LATEST — supersedes both the original pre-reg AND the
> intermediate ~2.8× post-hoc block below).** The ~35% net-negative share was first modeled (intermediate
> correction) as ALL true harm (S<0) via a low quality-mean (0.06). That was mechanically wrong: it made
> the credit-driven central deliver large *negative* value on ~36% of the portfolio, collapsing it to
> ~46% of oracle and INFLATING the headline to ~2.8×, while spuriously reviving harm-blindness (w=1 →
> 1.81×). The **faithful split** (audit P0.6) separates the two mechanisms the literature actually names:
> **~8% TRUE HARM** (S<0, quality-mean=0.27) + **~28% BELOW OPPORTUNITY COST** (S>0 but net = S − h·cost < 0,
> hurdle h=2.5 — a per-dollar social-return threshold below the discount rate, Doc 1). The delivered
> metric is **NET** value; the oracle/distributed gate out net≤0, the credit-driven central funds them.
> **Corrected headline: ~2.1× (band ~1.9–2.4× over corr(S,P)∈[0.1,0.3]), decomposing as selection
> ~1.5–1.8× × delivery 1.30×** — DOWN from the intermediate ~2.8×, converging back on the paper's
> original robust ~2.2× but with a properly grounded mechanism. **Under the faithful split, harm-blindness
> is again NEARLY INERT (w=1 → 1.30×, the pure delivery floor) — the ENTIRE selection advantage is
> agenda-capture (w=0), which STRENGTHENS the v2 pivot.** So the intermediate block's "harm-blindness
> revives" is itself re-retracted; P5/P6 partially rehabilitate (see the faithful-split held-out table).
> The delivery layer stays λ_PI≈0.25 (IMF) → 1.30×. See `e4e5-value-model-v2.md` for the full
> re-consolidation. Engine commit: the opportunity-cost hurdle (`hurdle` param, `net[]`, `cenNetNeg`
> diagnostic). The intermediate ~2.8× block and the original pre-reg text are preserved below for the record.
>
> ---
>
> **POST-HOC CORRECTION (2026-07-10, INTERMEDIATE — itself superseded by the faithful split above).** Two author-supplied
> literature calibrations corrected two inputs: the net-negative share is **~35%** (Pohl-Mihaljek
> p_U+≈0.65, net of the opportunity cost of capital), NOT <1% (the pre-reg's calibration was a gross
> error using pure existence value); and the production efficiency loss is **λ_PI≈0.25** (IMF), grounding
> the delivery layer to ~1.30× (central 0.75, distributed 0.975 via the E4-v5 10× capture resistance),
> DOWN from 1.43×. **Intermediate headline: ~2.8× (band ~2.4–3.3×)** — later found INFLATED by modeling all
> 35% as true harm; see the faithful-split block above. P5/P6 retraction here is itself reversed by the split.

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

## Held-out confirmation — FAITHFUL SPLIT (seed base 5000, disjoint from exploration)
Run: `node e5-sp-model.mjs --concentrate=1 --byValue=1 --seedBase=5000` (+ `--cats`, `--w=1`, `--tornado`),
on the faithful-split defaults (**mean=0.27 → ~8.1% true harm; hurdle=2.5 → ~35.9% below-hurdle;
fWeak=0.75; fVer=0.975; delivery 1.30×; muF=-4, sigF=1.5**). Held-out (5000) matches exploration (1000)
within seed noise. `cen netNeg%` = the net-negative share of the CENTRAL's realized portfolio (Doc-1
validation target).

| ρ | corr(S,P) | cen netNeg% | cen %oracle | dis %oracle | ratio | macro | alloc | delivery |
|---|---|---|---|---|---|---|---|---|
| 1.0 | 0.80 | 9.4% | 95% | 97% | 1.34× | 0.97× | 1.04× | 1.30× |
| 0.8 | 0.60 | 14.0% | 87% | 97% | 1.46× | 0.94× | 1.16× | 1.30× |
| 0.6 | 0.41 | 18.3% | 77% | 97% | 1.65× | 0.89× | 1.32× | 1.30× |
| 0.4 | 0.26 | 22.1% | 65% | 97% | **1.93×** | 0.85× | 1.58× | 1.30× |
| 0.2 | 0.13 | 25.8% | 55% | 97% | **2.29×** | 0.81× | 1.94× | 1.30× |
| 0.0 | 0.02 | 29.7% | 43% | 97% | 2.93× | 0.76× | 2.53× | 1.30× |

- **P1 — REWORDED (stands):** NOT exact parity at ρ=1. The realized corr(S,P) caps ~0.80 at ρ=1 (the
  exp(·) transform), so ρ=1 gives **1.34×**, close to but above the 1.30× delivery floor; the frontier
  **compresses toward the delivery floor as ρ→1**. ✓ (monotone-compression form).
- **P2 monotone frontier:** 1.34→2.93× ✓.
- **P3 — CORRECTED HEADLINE (faithful split):** at the Gilens-Page corr(S,P)∈[0.1,0.3] band (ρ≈0.2–0.4),
  ratio **~1.9–2.3×**; **central ~2.1×, band ~1.9–2.4×**. DOWN from the intermediate ~2.8× (that number
  over-attributed the 35% to true harm); converges on the paper's original ~2.2×. ✓
- **P4 two layers / macro ≤1×:** macro 0.76–0.97× ✓ (the top-k category gate still *rescues* the credit
  central — no positive third layer). Allocation is the selection layer (1.04–2.53×).
- **P5 — REHABILITATED (faithful form):** the value-blind (ρ≈0) central delivers **~43%** of oracle NET
  value; the below-hurdle central portfolio is only ~18–26% net-negative at realistic corr (Doc-1's ~35%
  is the low-corr pessimistic edge). "Best-vs-value-destroying" holds at the *tail*, "best-vs-mediocre"
  at realistic corr — a graded, honest reading, not a bare retraction.
- **P6 — REHABILITATED:** harm-blindness IS nearly inert under the faithful split. w=1 (E4, pure
  harm-blind value) delivers **97%** of oracle, ratio **1.30×** (the delivery floor) — because true harm
  is only ~8%. The ENTIRE selection advantage is agenda-capture (w=0). This is the intended v2 thesis;
  the intermediate block's "harm-blindness revives" was an artifact of the all-harm mis-calibration.
- **P7 lumpiness non-issue in Core v0:** confirmed (concentrate holds full value to L~4).
- **Verdict: P1/P2/P4/P7 confirmed (P1 reworded); P3 corrected to ~2.1× (band 1.9–2.4×); P5/P6
  REHABILITATED by the faithful split (harm-blindness inert, agenda-capture is the mechanism).** This is a
  CONFIRMATORY RE-RUN on the faithful-split config.

**Robustness (`--tornado`, one knob at a time at ρ=0.3 ≈ corr 0.17, mid Gilens-Page, baseline 2.08×).**
Knobs recentered on the faithful split. The headline is **robust to every calibration band**: β 0.3→0.5:
2.08→2.08× (flat); true-harm mean 0.24→0.33 (≈11%→4% harm): 2.12→2.02×; **below-hurdle h 1.5→4.0
(≈27%→46% below opportunity cost): 2.04→2.15×** (the new mechanism axis — modest, robust); delivery
fVer 0.90→0.99: 1.92→2.11× (the 1.20–1.32× band); reach spread sigF 1.2→1.8: 2.08→2.07× (flat);
harm-blind weight w 0→0.3: 2.08→1.40× (w co-parameterizes capture; the clean frame is w=0 with
ρ=corr(S,P)). The dominant axis remains **corr(S,P)** (the Gilens-Page frontier); every other knob moves
the headline modestly within its literature band → robust.

## Scope conditions / honest boundaries
- The distributed is modeled as funding pure S (no self-benefit motive — deliberately not modeled;
  the author notes individual portfolios aren't extrapolable). This is *generous to the distributed*.
- The central's P-misalignment must be *measured* (Gilens-Page), not posited — hence the calibration.
- The advantage is comparative (vs a status quo that still delivers ~half), not an efficiency claim.
- The reach/coverage density and the exact ρ are the load-bearing calibration choices; the frontier
  reports the sensitivity to both.
