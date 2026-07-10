# E4/E5 — 5-reviewer engineering code-review synthesis (bug hunt)

## Status
Synthesis of a 5-engineer adversarial code review of `scripts/simulation/e4e5-pipeline.mjs`,
commissioned because the author's intuition said the MACRO stage's small contribution (~5-11%)
"doesn't add up" — a harm/ideology-distorted central *should* mis-select whole net-positive
categories. Lenses: (R1) macro/sector-scoring, (R2) world/RNG/value-matrix, (R3)
metrics/statistics, (R4) allocation/delivery/E4-fidelity, (R5) property/known-answer tests.
All probes ran in a scratchpad; the repo was not modified.

## Verdict: NO BUG. The engine is correct; the small macro effect is honest.
All five converge. RNG unbiased and deterministic (R2: χ², moments, stream separation all
pass); value matrix, harm-blind split, and divisive-project net-neutrality verified (R2, z=−0.56);
alloc/deliver correct on 7 hand-checked worlds, p-cancellation exact across p∈{0.01…1000},
f-ratio identity to 1e-9 (R4); Fieller/bootstrap/degeneracy all correct to machine precision
(R3); scale-invariance, turnout-invariance, monotonicity, sign-flip/Prop-A, degeneracy all
PASS (R5). The macro top-k gate has no off-by-one/mis-binning and **explodes on demand**: a
known-answer world with sign-flip sectors (`--harmMult=2 --polar=2`) collapses central-oracle
overlap to 1.1/10 while the distributed holds 9.9/10 (R1). The gate works; it just has little
to bite on at the default symmetric calibration.

## The decisive finding (R5 A1) — the macro gate is FORGIVING; it RESCUES the blind central
Direct per-arm instrumentation of the gate's value effect (c3/c2, d3/d2, o3/o2):
- Default sectorTilt=0.01: gate ≈ proportional on all arms → macro factor 1.06-1.11 (near no-op).
- **sectorTilt=0.1 (the "structural sectors" lever the author + I proposed to grow macro):**
  c3/c2 = **3.3**, d3/d2 = 1.46, o3/o2 = 0.99 → **macro factor collapses to 0.43 (below 1)**,
  scale-stable across N.

**Mechanism:** the harm-blind central's 2-layer arm sprays budget across all 20 sectors and
funds net-harm everywhere (c2 ≈ 11% of oracle). Gating to the top-10 *by perceived positive
mass* concentrates that spray into structurally-better sectors — because big sectors are good
sectors, top-k-by-perceived-mass overlaps heavily with top-k-by-true-value. So the coarse gate
**rescues the blind central more than the already-well-selecting sighted distributed**. The
overlap-count edge (central 5.3→8.5/10 as sectorTilt rises) is real but **does not convert to a
value advantage**. → The author's suspicion that a bug hides a large macro effect is
**falsified**; a harm-blind top-k planner is nearly as good as a sighted one at the *coarse*
sector level, and structural sector differentiation makes the macro factor *negative*, not
larger. This **corrects** the propositions-note claim that raising sectorTilt "grows the
distributed's sector-selection edge" — it grows the overlap metric but not delivered value.

**Where the advantage really lives:** ALLOCATION (project-level harm-blindness, ~1.2×) +
DELIVERY (the f-ratio, ~1.43×). The macro stage is intrinsically weak — a parsimony candidate.

## The one real caveat (R5 A2) — perception-noise asymmetry inflates ratios at finite N
The central's percept carries per-citizen proxy noise (`noise=1.5`) the distributed's analytic
mean `p·(Sp−(1−β)Sm)` does not. Because the signal (projMean ≈ 0.01·n) is tiny beside the noise
(≈√n·1.5), this is a large, η/β-independent handicap on the central that inflates EVERY ratio at
finite N, decaying only as N→∞:
- delivery floor (η=1,β=0): **1.64 (N=8k) → 1.58 (20k) → 1.47 (200k) → 1.433 (noise=0 / N→∞)**;
- anti-diagonal parity: tilted **0.88-1.22** at default, **exactly ~1.00 at noise=0**.

So the documented invariants ("1.00 on the anti-diagonal", "1.43 delivery floor") are **N→∞
idealizations**; at the reported N they are inflated by the central's unmatched noise. FAIR-
COMPARISON DECISION for the author: (a) DEFEND — the central's proxies genuinely *are* noisier
than a citizen's self-knowledge (the "you know your own value" premise), so the asymmetry is a
feature; or (b) NEUTRALIZE — add matched sampling noise to the distributed, or shrink `noise` /
raise the signal (mean), and re-report. At the 1M reference the inflation is small (floor ≈1.44)
but non-zero. This is the finding that most warrants action.

## Actionable fixes (batch, none change the headline materially)
1. **`ptilt` scale mismatch (R1-3):** partisan tilt scaled to `sigTrue` (net-value std) but added
   to `sScore` on the gross-perceived-positive scale (~28× larger) → only ~3.7% effective; the
   partisan sweep was inert partly for this mundane reason. If kept additive, scale to
   `std(sScore)`. (Superseded if we move to the multiplicative confirmation-bias lens.)
2. **`r3/r2` decomposition factor is fragile (R1-4, R5 A1):** a ratio-of-ratios that prints
   nonsensical <1 "macro quality" when the central arm →0; do not read it as a stage quality —
   the primary oracle-normalized Δ is the robust object.
3. **Bootstrap CI depends on worker count (R2-3):** `all.push(...m)` collects in completion
   order; the fixed-seed bootstrap indexes it → CI shifts slightly with NW (points unchanged).
   Fix: sort `all` by seed before bootstrapping.
4. **Fieller t-quantile (R3-1):** uses 1.96, should use t₍ₙ₋₁₎≈2.02 at n=40 (~1pp undercoverage).
5. **Display (R3-2):** 99% CI prints identical to 95% under toFixed(2); print 3 decimals.
6. **Config guards (R2, R5 A3):** assert `K % A === 0` and `kSectors ≤ #non-empty sectors`
   (silent macro no-op when A<kSectors).

## Bearing on the confirmation-bias proposal (`e4e5-confirmation-bias-design.md`)
R5 A1 warns that the coarse gate rescues a *value-blind* central. But confirmation bias is a
DIFFERENT lever than sectorTilt: it distorts the central's *perceived sector ranking by
ideological alignment*, **decoupling its selection from the "big sector = good sector"
correlation that does the rescuing**. If aligned sectors are uncorrelated with true value, the
biased central gates to the wrong sectors and the rescue breaks — potentially producing the
macro loss the author expects. This is a genuine open question, NOT a foregone conclusion: it
must be TESTED with a pre-registered, honest prediction (it may still be partially rescued). The
multiplicative form also fixes fix #1 by construction (it scales with `sScore`).
