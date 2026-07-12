# Adversarial statistics / causal-inference review — E4 v1.14 (v6 engine)

Reviewer stance: hostile referee. Every claim checked against the code; every issue carries a concrete fix.
Commands run 2026-07-11 from repo root: `npm run e4:theorem` (PASS, |Δ|=0.17 MC SE) and `npm run e4:evidence`
(m̂=46.4%, CI=[45.4%,47.4%], D_F shares 78/21/2, R_.5/.8/.95 = [25.8,120.6]/[2.5,191.5]/[-73.2,267.2]%,
sign=indeterminate, materiality=uncertain, numerical=resolved). I also ran a direct estimand/parameter probe
(see Issue 1 and Issue 4 for the numbers).

## Overall verdict

**NEEDS CHANGES — DO NOT PRE-REGISTER YET.** The architecture is honest in intent and much of the machinery is
statistically sound: the estimand is signed and parity-at-zero, the sign object is separated from the magnitude
object, the four status fields are orthogonal, the analytic lemma is *correct*, and the honest-limits paragraph in
the paper draft names most of the real weaknesses. But three things a hostile referee will not let pass:

1. The **actually-computed estimand (ratio-of-sums) is not the estimand frozen in the design-of-record and the
   theorem doc (per-world-ratio mean)**, and the code comment contradicts the code in the same file. That is a
   pre-registration-integrity defect, not a cosmetic one — the whole selling point is "one contract, one estimand."
2. The **headline identification objects are uncertified**: the D_F "sign shares" (78%/21%) are a sampling-design
   artifact, and the R_α magnitude interval is an uncertified, known-to-under-cover sampled envelope whose endpoints
   carry no Monte-Carlo error yet are stamped `numerical:resolved`.
3. **Load-bearing thesis parameters (the visibility shape a_V, b_V) are frozen out of the sweep entirely**, so the
   "advantage comes from the long tail" claim is not stress-tested on the very parameters that define the long tail.

None of these is fatal to the design; all are fixable before pre-registration. But as shipped, the executable
evidence still overstates what is identified — the same verdict the external v5 critique reached, now narrowed to a
smaller, sharper set.

## Ranked issues

### 1. Estimand was silently switched (per-world-ratio mean → ratio-of-sums); the "single source of truth" now contradicts itself — CHANGE OF ESTIMAND
- **Where.** Frozen definition in `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:54` and
  `research/e4-parity-theorem.md:27` (setup) both state `m(θ)=E_W[(D−C)/O | O>o_min]` — the **mean of per-world
  ratios**. The engine computes `Σ(D−C)/ΣO` — the **ratio of sums** (`scripts/simulation/e4-v5/engine.mjs:156-161`).
  Worse, the section header on `engine.mjs:131` still reads `m(theta) = E[(D-C)/O | O>o_min]` — the comment
  contradicts the code *four lines below it*. `contract.mjs:112` and the paper draft were updated to ratio-of-sums,
  so the chain is now internally inconsistent about its own primary quantity.
- **Why it matters.** Ratio-of-sums is O-weighted (each world enters with weight O_W); the per-world mean is
  equal-weighted. These are **different estimands** and are **not sign-equivalent in general**: they diverge exactly
  when sign(D−C) is correlated with O, i.e. at the heterogeneous-O corners that set the D_F envelope and the R_α
  endpoints. At the base config they nearly coincide (I measured **ros=0.4643 vs per-world-mean=0.4712**), which is
  *reassuring for the headline but irrelevant for the envelope* — the switch was justified precisely by divergent
  corners, so the corners are where it can move the reported extrema and even a sign. Switching the pre-registered
  estimand after seeing behavior, without recording it as a deviation, is the textbook analyst-degree-of-freedom a
  referee looks for.
- **Fix.** (a) Update `DESIGN_SKETCH_v5.md:54`, `e4-parity-theorem.md:27`, and the `engine.mjs:131` comment to the
  ratio-of-sums definition, and log it explicitly as a post-hoc estimand revision with its (good) rationale — the
  Codex `(1,1)/(−1,100)` divergence — so the record is honest. (b) Add one cheap robustness line to the evidence:
  report both estimands at the base point and confirm sign agreement across the D_F corners (it is essentially free —
  the per-world mean is one extra reduction over `kept`).

### 2. The D_F "sign shares" (78% / 21% / 2%) are a sampling-design artifact, not a well-defined quantity
- **Where.** `scripts/simulation/e4-v5/evidence.mjs:47-57` counts `nPos/nNeg/nPar` over `samplePoints`, and
  `adapter.mjs:32` prints "Core v0 wins 78% of sampled θ-points."
- **Why it matters.** `samplePoints` (`evidence.mjs:29-35`) emits `2^k` corners + 1 center + `N_RANDOM` interior. For
  the k=7 UNCERTAIN box that is **128 corners + 1 + 64 = 193 points, 66% of them corners**. Corners are a measure-zero,
  maximally-extreme set; weighting them 2:1 against the interior makes the "share" neither a volume fraction, nor a
  probability, nor a stable statistic — change `N_RANDOM` or drop one coordinate and the percentage moves. It is
  honestly *labelled* "a count, not a probability," but it is still **printed as a headline number** and a referee
  will ask "78% of what measure?" and get no answer. (The derived `sign_status=indeterminate` is fine — it uses only
  *whether both signs occur*, which is robust to weighting. It is the numbers that are the problem.)
- **Fix.** Either (a) drop the percentages and report only `sign_status` plus the raw counts with an explicit
  "corner-weighted grid, not a measure" caption; or (b) if a magnitude of "how often" is wanted, compute it over a
  **uniform-volume** Monte-Carlo sample of the box (exclude the corner enumeration from the share) and report it as a
  volume fraction **with a Monte-Carlo standard error**. Do not present a corner-dominated grid count as if it
  estimates region size.

### 3. The R_α magnitude envelope is an uncertified, under-covering sampled bound — but is printed as a hard interval and stamped `numerical:resolved`
- **Where.** `envelope()` `scripts/simulation/e4-v5/evidence.mjs:44-58`; each cell is `SWEEP_NW=110` worlds
  (`contract.mjs:88`); `numerical_status` `evidence.mjs:92` = `enough && dfEnv.enough && (base-CI width < δ)`.
- **Why it matters.** Three compounding problems. (i) **Coverage:** 64 interior points in a 7-D box is ≈1.9 points
  per axis — the interior is essentially unexplored (curse of dimensionality), and the DGP is non-monotone in these
  coordinates, so the true extrema are not guaranteed at corners. The external v5 critique already *found* interior
  points beating the corner maxima; this design's own comment concedes it "may still under-cover interior extrema."
  So the reported interval is an **inner** estimate of the range (too narrow), yet is printed as `[lo, hi]` with no
  "at least this wide" qualifier. (ii) **Endpoint noise:** each of lo/hi is a **single 110-world point estimate**
  with no error bar; R_.95=[−73.2%, 267.2%] is two noisy points, and `argLo/argHi` are selected by `min/max` over
  193 noisy draws — a maximization-over-noise bias that pushes the interval *outward* at the same time under-coverage
  pushes it *inward*. Neither bias is quantified. (iii) **`resolved` is misleading:** `numerical_status` inspects
  only the base-point CI width, never the envelope's own MC error, so a wildly noisy [−73%,267%] envelope still reads
  `resolved`.
- **Fix.** (a) Attach a simultaneous MC enclosure to every envelope endpoint (bootstrap or a per-cell CI) and report
  the endpoint **± its MC error**; widen the printed interval by that error and label it an **inner bound** on the
  identified range ("≥ this wide"). (b) Replace corners+64-uniform with a larger Latin-hypercube or adaptive search
  budget, or state the sampling budget and explicitly frame the result as a lower bound on the range. (c) Redefine
  `numerical_status=resolved` to require the envelope-endpoint MC error (not just base-CI width) below a frozen
  tolerance.

### 4. Thesis-defining parameters (visibility shape a_V, b_V) are neither swept nor flip-probed; the fixed×uncertain split assumes untested separability
- **Where.** `contract.mjs:95-96` — `uncertain=[p,beta,sigma_e,s_exp,b_H_C,w,pi_opp]`,
  `fixed_check=[sigma,mu_opp,sigma_C,gamma,h,lambda,a,b,zeta,v_p0]`. `a_V, b_V, sigma_v, phi, s_q, a_r, b_r, m_q,
  c_lo, c_hi` appear in **neither** list — frozen at defaults, not even one-at-a-time probed.
- **Why it matters.** The paper's thesis is "the aggregate advantage comes from the low-visibility long tail." The
  **visibility distribution `Beta(a_V,b_V)` is exactly what sets how much mass lives in that long tail**, yet it is
  held fixed. My one-at-a-time probe over plausible values shows the estimand moves materially:
  `a_V=3,b_V=1.5 → ros=0.367` vs `a_V=0.1,b_V=8 → ros=0.491` — a ~12-point swing on the headline, entirely outside
  the reported R_α. It does not flip sign *marginally from base*, but jointly with low `p` (which the external
  critique showed drives m negative on its own) it is untested. Separately, the fixed-flip probe
  (`evidence.mjs:62-74`) moves each held coordinate to its endpoint **one at a time at the base of the uncertain
  box**, so it structurally cannot detect a sign flip that needs a held coord *and* an uncertain coord to move
  together (e.g. high `gamma` × low `p`). The split silently assumes separability that is never checked.
- **Fix.** Move `a_V, b_V` (and arguably `sigma_v`) into UNCERTAIN, or at minimum add them to `fixed_check`. Add a
  handful of **joint** fixed×uncertain probes (e.g. each fixed endpoint crossed with the uncertain-box corners that
  already flip sign), or state and defend the separability assumption explicitly.

### 5. The relative o_min floor makes π_deg self-referential and the conditioning event non-comparable across the sweep; fail-closed degeneracy is unreachable
- **Where.** `engine.mjs:152` `o_min = 0.05*median(O)` per cell; evidence runs with `oMinAbs=null`
  (`evidence.mjs:103`), so **every cell uses its own median**. Degeneracy fail-close fires only at `pi_deg>=1`
  (`evidence.mjs:91`).
- **Why it matters.** Because the floor scales with the cell's own median, a genuinely degenerate low-value regime
  (all O tiny) has a tiny median, a tiny o_min, and therefore **excludes almost nothing** → `pi_deg≈0`,
  `degeneracy=ok`. π_deg cannot detect the failure it exists to detect, and `pi_deg=1` (the fail-closed trigger) is
  essentially unreachable under a relative floor. Second, each envelope cell then conditions m on a **different event**
  `{O > o_min(cell)}`, so the values being min/max'd across the sweep are not the same conditional estimand — a subtle
  non-comparability that the "scale-robust" comment on `evidence.mjs:101-103` does not address (it defends against
  ratio explosion, which is a different concern than comparability of the conditioning set).
- **Fix.** Anchor o_min to a **shared absolute scale** across the sweep — the `oMinAbs` path already exists; pass the
  base-cell `0.05*median(O)` into every envelope cell so degeneracy is comparable and detectable. Separately, raise a
  distinct `low_value_regime` flag when a cell's own `median(O)` falls below an absolute oracle-scale floor, so a
  uniformly-tiny-O cell is not silently reported as healthy.

### 6. The base-point CI advertises a precision that is not the identified object, and the bootstrap freezes the estimated o_min
- **Where.** `engine.mjs:163-176`. CI is the first and most prominent report line (`adapter.mjs:31`).
- **Why it matters.** The bootstrap resamples `kept` worlds only — it is **inner Monte-Carlo variability at one
  arbitrary θ (the defaults)**, and it does **not** recompute o_min or the retained set inside each resample, so it
  ignores threshold-selection uncertainty. Reporting `46.4% CI=[45.4%,47.4%]` as the headline invites a referee to
  read ±1 point as "the answer," when the identified set the same run reports is R_.95=[−73%, 267%]. The tight CI is
  a statement about simulation noise, not about identification.
- **Fix.** Recompute o_min and the kept set inside each bootstrap replicate. Relabel the m̂/CI line as "illustrative
  point (registered defaults); interval = inner Monte-Carlo precision only, NOT the identified range," and make the
  R_α set at least as visually prominent as m̂.

### 7. The analytic theorem drops the paper's central mechanism, and the regression checks only the single-selector lemma on a signal that is normal by construction
- **Where.** `research/e4-parity-theorem.md:40-45` writes the central signal as `X_C = a + (b−w)S + w·v_p + η` with a
  single `S`; the engine's actual signal (`engine.mjs:78`) is on **support S⁺** plus a separate **salience-gated harm
  term −b_H^C·s(V)·H** — the harm-myopia channel, i.e. the thesis, is **absent from the theorem's parity condition**.
  `theorem-check.mjs` tests only `V` (a single selector), not the parity equality, not the large-K corollary, and on
  an `X` that is *made* jointly normal (`theorem-check.mjs:28`).
- **Why it matters.** The lemma and its regression are **correct and honestly scoped in the doc** (the "Honest scope"
  section is good). But the paper draft (`e4-paper-section-draft.md:40-41`) states "the parity boundary is the
  equality of the covariance-to-noise ratios" as though it is E4's boundary — it is the boundary of a
  **linear-Gaussian selection benchmark with no harm channel**, which is not the mechanism being estimated. A referee
  will note the benchmark validates the *selection algebra*, not the *model*.
- **Fix.** In the paper, qualify: "the parity boundary **of the linear-Gaussian selection benchmark** (harm channel
  excluded) is …". Optionally add a regression that measures how far the engine's actual M^C/M^D depart from joint
  normality (a Mardia or simple skew/kurtosis check on simulated signals), so the "moment-matched reduced-form
  approximation" caveat is backed by a number rather than asserted.

### 8. Latent bug: the fail-closed abort references a contract field that does not exist
- **Where.** `evidence.mjs:100` interpolates `NUM.min_kept_worlds.value`; `contract.mjs:64-72` registers only
  `min_kept_frac` and `min_kept_floor`. There is no `min_kept_worlds`.
- **Why it matters.** On the *exact* insufficiency path this guard exists to handle, `NUM.min_kept_worlds` is
  `undefined` and `.value` throws a `TypeError` — so instead of the intended clear fail-closed message the run dies
  with an opaque property error. The safety valve is broken. (It is masked today only because the base point is never
  insufficient.)
- **Fix.** Reference the real threshold, e.g. `NUM.min_kept_floor.value` (or interpolate the computed
  `Math.max(min_kept_floor, min_kept_frac*n)`), and add a unit test that forces `pt.enough=false`.

### 9. Minor: δ=0.03 and zero_tol=0.005 are asserted in "delivered-value terms," not calibrated
- `contract.mjs:77-78`. The materiality band and zero-touch tolerance are frozen (good) but justified only by
  prose. A referee will ask what delivered-value quantity 3% of the oracle corresponds to. Fix: give the one-line
  anchoring computation, or label them explicitly as declared analyst thresholds subject to the reported R_α being
  wide relative to them (which it is — so materiality is correctly `uncertain`).

## What fails a hostile referee, specifically

- **"You changed your primary estimand and your own spec still disagrees with your code."** (Issue 1) — the single
  most damaging line, because the project's whole credibility pitch is the outcome-blind contract.
- **"78% of what probability measure?"** (Issue 2) — the number has no sampling-theory meaning.
- **"Your `resolved` flag certifies a [−73%, 267%] interval built from 64 interior points in seven dimensions with no
  error bars."** (Issue 3) — the identification claim is not certified to the standard its own status field implies.
- **"The parameters that define your 'long tail' are the ones you froze."** (Issue 4).

Everything else (relative floor, base-CI framing, theorem scope) is defensible with wording and modest code changes;
the four above need real fixes before the word "pre-registered" is used.

## Single highest-value recommendation

**Certify the identified objects, and stop reporting uncertified numbers as if certified.** Concretely: (a) attach a
Monte-Carlo enclosure to each R_α envelope endpoint and report the magnitude as an **inner bound with error bars**
("the identified range is *at least* this wide"), gating `numerical:resolved` on that error; and (b) demote the
corner-weighted D_F percentages to `sign_status` + raw counts, or replace them with a uniform-volume MC share with an
SE. This is the smallest change that makes the two headline identification claims — the sign object and the magnitude
object — say only what the code can actually support, which is exactly where a hostile referee will attack. Pair it
with the near-free estimand-reconciliation in Issue 1 (update the two spec docs + the stale comment, log the
deviation, add the both-estimands sign-agreement line) and the artifact becomes defensible.
