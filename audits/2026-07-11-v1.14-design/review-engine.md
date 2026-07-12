# E4 v5 engine — adversarial simulation / code-correctness review (2026-07-11)

Reviewer scope: mean-scale DGP correctness of `scripts/simulation/e4-v5/{engine,contract,controls,test}.mjs`
against `DESIGN_SKETCH_v5.md` + `ANTIVALUE-MODELING.md`, plus faithfulness of `research/e4-paper-section-draft.md`.
Ran `npm run e4:controls`, `npm run e4:test`, `node .../evidence.mjs`, `node .../theorem-check.mjs`, and targeted
Monte-Carlo probes. All shipped suites pass.

## Overall verdict

The core DGP is **correct and faithful**. The anti-value decomposition, the MNAR behavioral estimator, and the
salience-gated central signal all match the spec, and I verified the load-bearing algebra empirically. The estimand
is honest and the embargo/schema machinery is sound. There is **one demonstrable bug** (a crash on a fail-closed
abort path), a **partially-implemented control battery** relative to the spec it cites, and a **theorem-vs-engine
signal mismatch** the paper should name. None of these inflate the headline result; the engine is trustworthy for
the evidence run once the crash guard is fixed.

### What I verified as CORRECT (not rubber-stamping — these were checked, several empirically)

- **Anti-value decomposition** (`engine.mjs:64-73`): `u = q + σ·N − 1{U<π_opp}·Exp(μ_opp)`; `S⁺=mean(max(u,0))`,
  `H=mean(max(−u,0))`, `S=S⁺−H=mean(u)`. Faithful, no scale bug. Means are over the `n_j` interested people.
- **MNAR estimator algebra** (`engine.mjs:68-74`): I drew 4000 report realizations over a fixed population and got
  `E[M_D] = 0.1656` vs predicted `S⁺−(1−β)H = 0.1653` (diff 3e-4, MC noise). The `/p` (not `/p(1−β)`) division is the
  deliberate behavioral bias, and it is **labeled honestly** as a "behavioral coverage estimator", not an unbiased
  Horvitz-Thompson estimator. Correct.
- **Central signal identification** (`engine.mjs:76-78`): `M_C = a + (b−w)·S⁺ + w·v_{p,j} − b_H^C·s(V)·H + η`. `w` is
  identified because `v_{p,j}` is genuinely project-varying (`v_p0 + γ·g_j + ξ_j`, `σ_v>0`, `ζ<1`) and therefore not
  collinear with `S⁺`. **No collinearity re-introduced** — this is the real fix over v4's project-invariant `v_p`.
  Control C3 (`w=0 ⇒ v_p inert`, `max|dC|=0`) confirms the pathway.
- **`s(V)=V^{s_exp}` gate** with `V∈Beta(a_V,b_V)` heavy-tailed toward 0 → aggregate near-blindness on the long tail.
  Matches `ANTIVALUE-MODELING.md`. `s_exp=0 ⇒ gate≡1` used correctly by controls.
- **Estimand** `m = Σ(D−C)/ΣO` over kept worlds: ratio-of-sums (O-weighted), documented, robust to tiny-O divergence.
  Parity at 0. No div-by-zero (kept ⇒ O>o_min ⇒ den>0; empty den guarded to NaN + `enough=false`).
- **"Oracle" is a genuine upper bound in practice**: over 1500 worlds, `D>O` and `C>O` occurred **0 times each** —
  greedy-by-true-density dominates greedy-by-noisy-density every world. (Caveat under Issue 6.)
- **No dead θ params**: all 30 registered parameters are read by the engine. **No hidden *model* literal**: the only
  unregistered constants are RNG/seed-derivation magic numbers (see Issue 4).
- **Numerical edges**: `exp`, `gamma`, `beta`, `binomialApprox` guarded; empty-world path returns early; `p>0`,
  `c_hi>c_lo`, `φ∈(0,1)` enforced by `validateDomain`. `K=2` degenerate cell resolves to `enough=false` (not a crash).

---

## Ranked issues

### 1. [HIGH — demonstrated crash] Fail-closed abort dereferences a non-existent contract key
`evidence.mjs:100`
```js
if (!pt.enough) throw new Error(`... only ${pt.n_kept} kept worlds (< ${NUM.min_kept_worlds.value}) — aborting ...`);
```
`NUM` has **no** `min_kept_worlds` (keys: `n_worlds, seed, bootstrap_reps, ci_level, z_fallback_sd, min_kept_frac,
min_kept_floor`). Demonstrated:
```
CRASH on abort path: TypeError - Cannot read properties of undefined (reading 'value')
```
The one guard meant to *gracefully* abort the evidence run when the base point is under-resolved instead throws an
opaque `TypeError`, burying the real diagnostic (`n_kept`, the actual floor). It is dormant only because the base
config currently keeps enough worlds; any parameter/world change that trips insufficiency turns a clear fail-closed
message into a confusing stack trace.
**Fix:** reference the real floor, e.g. `>= ${NUM.min_kept_floor.value} kept and >= ${NUM.min_kept_frac.value} of
simulated`, or register `min_kept_worlds` in the contract. Add a control that forces `!pt.enough` and asserts the
message renders.

### 2. [MEDIUM] Control battery is a subset of the spec it cites — inactivation controls (iii) incomplete
`controls.mjs` implements C1 (signal recovery + exact joint symmetry), C2 (credit active), C3 (`w=0` inert),
C4 (harm active). But `DESIGN_SKETCH_v5.md §5` control (iii) declares **four** inactivation checks; three are absent:
- `β=0 ⇒ report sign-invariant` (opponents report at the same rate `p` as supporters) — not tested.
- `b_H^C=0` (or `s=0`) `⇒ harm term inert` as an *inactivation* equality — only the *activation* direction (C4) is
  tested.
- `λ=0 ⇒ P inert` — C2 only tests that raising `λ` *changes* C; the `λ=0` inertness is asserted by the comment, not a
  check (it is trivially true by construction, but the spec asks for it).

The **symmetry proof itself (C1) is strong** — `D=C=O` world-by-world to `<1e-9` genuinely exercises the shared
selection interface with identical signals, and it does not pass trivially (it would fail if any arm-specific branch
leaked). But the battery header claims "These MUST pass or the model is not trustworthy" while covering less than the
design's control set. Two further gaps worth noting:
- **C2 tests magnitude, not direction**: it asserts `C` changes with `λ`, not that credit tilt moves `C` *away from
  the oracle*. A sign-agnostic change would pass. Strengthen to a directional assertion.
- Controls call `runWorld`/`estimand` where `runWorld`/`generateWorld` are exported and run **without**
  `validateConfig` — see Issue 4.

**Fix:** add the three missing inactivation controls (all cheap world-by-world equality checks) and make C2
directional. This makes the "must pass" battery actually match the spec.

### 3. [MEDIUM] Analytic benchmark models a *different* central than the engine (net `S` vs support `S⁺`; no harm gate)
`research/e4-parity-theorem.md:40` and `DESIGN_SKETCH_v5.md §4` write the central signal as
`X_C = a + (b−w)·S + w·v_p + η` — **net value `S`, and no salience-gated harm term**. The engine
(`engine.mjs:78`) uses **support `S⁺`** and adds `− b_H^C·s(V)·H`. So the benchmark's central is *harm-aware*
(reads net `S`), whereas the engine's central is the harm-*myopic* one that is the entire thesis. Moreover
`theorem-check.mjs` validates the joint-normal **identity in isolation** on synthetic Gaussian `(S,X)` — it never
runs the engine DGP — so nothing demonstrates the engine reduces to the lemma. The paper draft's
"the theorem is the checked limiting case (regression within ~0.2 Monte-Carlo SE)" (line 43) is therefore slightly
generous: the check confirms the *lemma's algebra*, not engine→lemma convergence, and the lemma's central signal
abstracts away both `S→S⁺` and the harm gate.
**Fix:** in the theorem note and paper, state explicitly that the analytic benchmark is the **no-myopia Gaussian
limit** (`s≡0`/`H` neutralized, `S⁺≈S`), and that `theorem-check` verifies the selection identity, not engine
convergence. Optionally add a regression that runs the engine in the neutralized regime and checks it approaches
`V_k`.

### 4. [LOW] Two invariant claims are overstated vs the code
- `contract.mjs:4-5` / header: "Nothing in the engine may use a literal that is not registered here." The engine uses
  unregistered constants: seed-derivation `0x9e3779b9` (`engine.mjs:165`) and `0x5bd1e995` (`evidence.mjs:33`), plus
  RNG algorithm constants and `1e-12` guards. These are algorithmic, not model parameters, so benign — but the
  absolute claim is false as written. Soften to "no unregistered *model/θ* literal", or register the seed-derivation
  salts.
- `engine.mjs:4`: "validateConfig() is called before any run (fail-closed)." True for `estimand()`, but
  `runWorld`/`generateWorld` are exported and invoked **un-validated** by `controls.mjs`. Fine for trusted callers,
  but the comment implies universal enforcement. Either validate in `runWorld` or reword.

### 5. [LOW] `exponential(mean)` can return a tiny negative value
`engine.mjs:26`: `-mean * Math.log(1 - u() + 1e-12)`. When `u()≈0`, the argument `1-u+1e-12 > 1`, so `log>0` and the
draw is **negative** (magnitude ~`1e-12·μ_opp`). An opposition intensity must be `≥0`. Empirically it never fired
(min over 2,000,000 draws = `4.09e-7`, 0 negatives) because mulberry32 rarely hits exactly 0, so this is cosmetic —
but it is a latent sign violation in a quantity the model treats as strictly non-negative.
**Fix:** `-mean * Math.log(Math.max(1e-12, 1 - u()))` (clamp the argument into `(0,1]`).

### 6. [LOW — good news, minor label] "Oracle" is greedy-by-true-density, not optimal knapsack
`fundedValue(..., 'S', ...)` funds greedily by true value density `(S−h·c)/c`, so `O` is the *same-procedure
full-information* benchmark, not the optimal selection. Empirically `D>O`/`C>O` never occur (0/1500 each), so `O` is
a valid upper bound and `m` is well-defined; a world's `m` exceeding 100% comes from `C<0` (losing arm destroys
value), which the adapter already explains (`adapter.mjs:33`). Just add a one-line footnote that the oracle is the
full-information *greedy* benchmark, not the optimum, so "fraction of the oracle" is not misread as "fraction of the
theoretical maximum."

---

## Highest-value recommendation

**Fix the `evidence.mjs:100` crash (Issue 1) and complete the declared control battery (Issue 2) together.** The
crash silently converts the headline number's own safety guard into a stack trace, and the control set that the
project advertises as its trust anchor is missing three of the four inactivation checks it cites. Both are small,
mechanical fixes that directly protect the credibility of the evidence run — and both should have their own
regression test (force `!pt.enough`; assert each inactivation equality) so they cannot silently regress again.
