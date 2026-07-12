# Adversarial critique summary — E4 v5 implementation

## Overall verdict

**NEEDS CHANGES — viable, substantially implemented, and much stronger than v4, but not ready to preregister.**

V5 clears the threshold question that dominated v4: there is now a running mean-scale DGP, a versioned parameter
registry, a conditional signed estimand, a canonical evidence command, a closed-field renderer, and executable
controls. The core algebra is real. `S=Splus-H` is computed exactly; the interior-domain MNAR process has
`E[M_D|u]=Splus-(1-beta)H`; the default latent central regression is full rank; all three official commands exit 0;
and the canonical output uses a parity-zero fraction rather than a parity-one institutional ratio
(`scripts/simulation/e4-v5/engine.mjs:63-81,97-170`; `scripts/simulation/e4-v5/contract.mjs:15-149`;
`scripts/simulation/e4-v5/adapter.mjs:21-38`).

The advertised evidence claims are nevertheless stronger than the code warrants. Most decisively, the reported
`D_F` and `R_alpha` intervals are not extrema over the contract's joint domains. The evidence script varies only
four of 30 registered parameters, uses corners plus one center, and labels arbitrary coordinate-width scaling as
joint alpha coverage (`scripts/simulation/e4-v5/evidence.mjs:10-39,57-64`). Focused executable attacks found values
outside both published upper endpoints and found negative, near-null, and strong-positive results inside the
declared per-parameter `R_.8` product. The canonical `N=900` evidence world is itself outside `N`'s registered
`R_alpha=[1000,20000]` (`scripts/simulation/e4-v5/contract.mjs:21`; `scripts/simulation/e4-v5/evidence.mjs:10-12`).

The “single source of truth” is also incomplete. Evidence-critical world sizes, Monte Carlo budgets, swept keys,
coverage factors, rival ranges, and the sweep algorithm live outside the contract and outside its hash, although
the artifact is labeled `base+contractHash()` (`scripts/simulation/e4-v5/contract.mjs:140-149`;
`scripts/simulation/e4-v5/evidence.mjs:10-16,37-39,65-81`). Validation checks names and independent scalar bounds,
not the executable domain, finiteness, cross-field constraints, parameter liveness, region membership, or actual
consumption (`scripts/simulation/e4-v5/contract.mjs:112-130`). The state machine then classifies materiality from
the base-point CI rather than the identified magnitude set and can serialize or misclassify non-finite/degenerate
results (`scripts/simulation/e4-v5/evidence.mjs:24-30,41-64`; `scripts/simulation/e4-v5/schema.mjs:6-27`).

**Do not preregister v5 unchanged.** It is now an auditable implementation rather than a design skeleton, but its
headline partial-identification and capability claims are not yet delivered by the executable evidence path.

## Reproduction result

The required commands were run from the repository root on 2026-07-11:

```text
npm run e4:controls  -> exit 0, ALL CONTROLS PASSED
  baseline m_hat=0.4540, CI=[0.4388,0.4699], pi_deg=0.000

npm run e4:test      -> exit 0, ALL TESTS PASSED
  strong-distributed=0.462; strong-central=-0.420; null=0.0002; boundary=0.417

npm run e4:evidence  -> exit 0
  m_hat=45.7%, CI=[44.5%,46.8%]
  D_F=[-6.1%,110.0%]
  R_.95=[14.5%,74.7%]
  sign=indeterminate, materiality=material, degeneracy=ok, numerical=resolved
```

These happy-path results are reproducible. The critique files record the focused counterprobes and exact outputs.

## Seven-blocker clearance table

| # | V4 blocker | V5 status | Implementation assessment |
|---:|---|---|---|
| 1 | Contract and engine unit consistency | **PARTIAL** | The mean-scale arithmetic, `S=Splus-H`, and interior MNAR expectation are correct. But the evidence run overrides hashed defaults, result-governing rules and literals remain outside the contract, validation admits undefined/invalid configurations, the claimed Binomial is a clamped normal approximation, `NUM.common_random` is unused, and positive `rho_P` magnitude cancels under z-scoring (`critique-v5-unit-contract.md`). |
| 2 | Identification in practice | **PARTIAL** | The default latent design is full rank and recovers `(a,b,w,b_H_C)`, removing v4's exact coefficient collapse. The actual regressor is `s(V)H`; the engine discards the latent bridge variables; allowed endpoints can be singular or weak; and corners+center demonstrably misses `D_F` and `R_.95` extrema. Published upper endpoints 1.1000 and .7471 were exceeded by interior-face values 1.1142 and .7690 (`critique-v5-identification.md`). |
| 3 | Estimand and state machine | **PARTIAL** | `o_min_frac`, `delta`, and `zero_tol` are registered and four fields are emitted. Materiality ignores `R_alpha` and uses only the base CI; `numerical_status` is only `CI width<delta`; `pi_deg=1` does not fail closed; non-finite and malformed nested values pass the schema; empty worlds are omitted from degeneracy; and the `o_min` bootstrap fixes its estimated threshold and retained membership (`critique-v5-estimand-state-machine.md`). |
| 4 | Analytic theorem | **PARTIAL** | The narrow fixed-population-threshold identity is correct and an independent normal-limit fixture matched it within 1.35 Monte Carlo SE. No proof or regression test ships despite the design's claim. The production support/harm signal, eligibility gate, costs, credit tilt, and budget selector are outside the theorem; intercept invariance can fail under the production gate (`critique-v5-analytic-theorem.md`). |
| 5 | Joint `D_F/R_alpha` and capability | **PARTIAL** | Endpoint tables and deterministic point fixtures now exist. The sweep is a four-dimensional slice, not the declared 30-parameter joint set; `ALPHA_FACTOR` has no law or verified coverage and is unhashed; omitted parameters reverse sign; and the fixtures bypass the evidence builder/state machine. The “boundary” at .417 is not a boundary. **Capability criterion: NO** (`critique-v5-domains-capability.md`). |
| 6 | Mechanical embargo | **PARTIAL** | The canonical report is clean and exact `2.2x`, literal `×`, and uppercase `D/C` are rejected. Equivalent semantics, case/Unicode/confusable variants, forged provenance, and parity-one values can pass; two evidence lines bypass the adapter; and legacy multiplier engines remain directly runnable behind comments rather than guards. **Multiplier-relapse risk: YES — MATERIAL** (`critique-v5-mechanical-embargo.md`). |
| 7 | Anti-value, novelty, and companion alignment | **PARTIAL** | The anti-value decomposition, attenuated adverse voice, and `V^s_exp` harm gate are implemented; default central harm loading is genuinely small. The long-tail attribution is not isolated, thesis-defining visibility/opposition parameters are omitted from evidence, `V` is independent of harm/disputedness, suppression is the only adverse-voice regime, and the companions retain the old equation and anchoring/Prelec overclaims (`critique-v5-antivalue-novelty-alignment.md`). |

**Clearance count: 0 cleared, 7 partial, 0 not-cleared.** This is genuine progress from v4's 0/6/1: the former
not-cleared embargo row now has a functioning canonical path, and every row has at least one implemented component.
It is not a preregistration pass. “Partial” means the old defect was materially narrowed, not that the remaining
claim is safe to publish.

## Remaining blockers, ranked

### 1. The reported partial-identification sets are not the registered joint sets or certified bounds

`SIGN_KEYS=['w','b_H_C','beta','s_exp']` freezes 26 registered coordinates at defaults
(`scripts/simulation/e4-v5/evidence.mjs:14-16,57-63`). Omitted one-factor probes already reverse sign: for example,
`p=.001` gives about `m=-.376` and `sigma_e=10` gives about `m=-.064`, while both are admitted by `D_F`. Within the
full declared per-coordinate `R_.8` product, focused points give approximately `-.335`, `.005`, and `+.852`.
Separately, interior-face searches exceed the four-key corners+center maxima. The serialized intervals are therefore
neither full-domain envelopes nor numerical bounds.

**Required fix:** define which coordinates are fixed versus uncertain; freeze a genuinely joint `D_F` and a measured
joint law from which nested `R_alpha` sets have verified coverage; use stable random substreams and a certified
global/face optimizer with simultaneous Monte Carlo endpoint enclosures; fail closed when certification fails.

### 2. The artifact hash does not identify the evidence procedure actually run

The contract hash excludes the resolved `N/K` overrides, base/sweep world counts, swept-key list, `ALPHA_FACTOR`,
optimizer rule, rival ranges, and output/embargo procedure (`scripts/simulation/e4-v5/contract.mjs:140-149`;
`scripts/simulation/e4-v5/evidence.mjs:10-16,37-39,79-81`). The artifact's `base+hash` label is false in the ordinary
sense because the production run does not use base `N`, base `K`, or base `n_worlds`. The validator accepts zero
Beta shapes, fractional/infinite counts, reversed/zero costs, `p=0`, and other configurations on which the printed
DGP is undefined or changes meaning (`scripts/simulation/e4-v5/contract.mjs:21-42,117-130`).

**Required fix:** hash a resolved production manifest containing the actual configuration and every evidence-
governing rule; validate finiteness, integrality, positive shapes/costs, ordered bounds, cross-field constraints,
region membership, and registered-parameter liveness. Register or explicitly allowlist result-governing numerical
constants and implement the stated count law.

### 3. Classification fails open and does not classify the identified magnitude object

`classify()` never receives `m_Ralpha`; materiality is a base-point CI label
(`scripts/simulation/e4-v5/evidence.mjs:41-64`). `numerical_status` does not inspect optimization or endpoint error.
When all worlds or sweep cells degenerate, `NaN`/infinities can pass the schema and inverted endpoints can produce a
positive sign. The bootstrap does not recompute the in-sample median threshold or retained set
(`scripts/simulation/e4-v5/engine.mjs:147-170`; `scripts/simulation/e4-v5/schema.mjs:13-26`).

**Required fix:** recursively require finite, ordered, complete output; abort on all-degenerate/insufficient cells;
classify materiality at a frozen headline alpha or per alpha from confidence-enclosed set endpoints; and define
numerical resolution as a certificate over simulation, optimization, and decision-boundary error.

### 4. The embargo is a clean formatter, not an exclusive release boundary

The exact test strings are rejected, but arbitrary caller-controlled strings and unauthenticated numbers can carry
equivalent parity-one semantics through the renderer. Rival sensitivity and the hash are appended outside it
(`scripts/simulation/e4-v5/evidence.mjs:86-89`). Legacy runners remain directly executable and still compute/print
ratios with `x`; their “cannot feed” claim is only a comment
(`scripts/simulation/e4-v4-symmetric-frontier.mjs:1-6,61-104`).

**Required fix:** authenticate schema/contract/engine/config hashes and estimand kind, constrain all rendered strings,
render and rescan the complete final artifact, isolate legacy runners under an explicit reproduction-only guard and
namespace, and make a legacy-feed attempt a failing release test.

### 5. Validation and attribution promises still exceed the shipped tests

The correct Gaussian lemma has no proof/test artifact. Capability fixtures invoke `estimand()` directly rather than
the production sweep/classifier/renderer (`scripts/simulation/e4-v5/test.mjs:10-37`). The strong-distributed fixture
does not isolate harm myopia and remains strongly positive when `pi_opp=0`; no test attributes portfolio advantage
to low visibility. The public companions still contradict v5's project-varying support/harm model and transport
caveats (`research/e4-value-estimation-foundation.md:18-37,50-83`;
`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:3-8,18-26,57-75`).

**Required fix:** ship the narrow proof and Gaussian benchmark tests; make positive/negative/null/boundary fixtures
exercise the complete release pipeline inside declared domains; add harm-channel/visibility-bin attribution and
mobilization/dependence rivals; align or supersede the companions before preregistration.

## Single sharpest improvement

**Replace the unhashed four-key corners+center slice with one hashed resolved-evidence manifest and a fail-closed,
certified joint-set evaluator.** The manifest must identify the actual world/configuration, fixed and uncertain
coordinates, joint `D_F`, measured nested `R_alpha`, random streams, optimizer, Monte Carlo budgets, endpoint error,
classifier, schema, and renderer. No sign or magnitude interval should serialize unless the evaluator certifies
domain membership, coverage construction, and extrema. This is the shortest change that simultaneously repairs the
headline result, capability claim, contract provenance, numerical status, and much of the gerrymandering risk.

## Explicit answers

- **Multiplier-relapse risk: YES — MATERIAL.** The canonical command is clean, but parity-one semantics can pass a
  forged schema-valid object, equivalent token variants pass, some official text bypasses the adapter, and legacy
  multiplier engines remain unguarded and executable.
- **Capability criterion now met: NO.** The fixtures prove that hand-chosen point configurations can produce three
  signs. They do not prove that the frozen evidence pipeline surfaces them: they bypass the sweep and classifier,
  use out-of-domain settings, and the boundary fixture is not near any declared boundary.
- **Ready to preregister: NO.** The model is viable; the current partial-identification artifact is not certified.

## Shortest concrete path to preregisterable

1. Freeze and hash the fully resolved production manifest; make validation fail closed on the real executable
   domain, region membership, non-finite values, dead parameters, and unregistered evidence rules.
2. Define defensible full joint `D_F` and measured nested `R_alpha` objects, including dependence and coverage;
   stabilize random streams and replace corners+center with certified optimization plus endpoint uncertainty.
3. Repair the state machine: finite recursive schema, all-degenerate abort, set-based materiality, retained-world
   minimum, whole-world bootstrap/recalibration of `o_min`, and genuine numerical certificates.
4. Run strong-positive, strong-negative, null, and true-boundary fixtures through the entire evidence-to-render path
   inside declared domains; add adversarial omitted-coordinate and optimizer fixtures.
5. Put every final byte through an authenticated sole adapter and mechanically quarantine legacy engines/artifacts.
6. Ship the narrow analytic proof/regression suite, add anti-value/visibility attribution and rival tests, and align
   or supersede the two contradictory companion documents.

Only after these steps should v5 be described as preregistration-ready.
