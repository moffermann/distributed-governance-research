# E4 v1.14 (v7 state) — adversarial code and contract review

## Verdict

**NOT READY TO PREREGISTER.** The core engine runs, the ratio-of-sums arithmetic is coherent, and the advertised
Tier-1 contract fixes are real. The new anchored-scenario and frontier claims, however, are not the objects encoded
by the cited anchor table. Most seriously, `scenario-configs.mjs` says its values come from the master table but does
not implement that table. The shipped `PRO_CENTRAL` leaves most distributed-adverse and central-favourable scenario
coordinates at `PROBABLE`; when the documented master-table values are actually run, the central wins by 29.5% of
the oracle rather than losing by 6.1%. Therefore `PRO_CENTRAL` is not the documented "central's best plausible
case," and the `t≈1.13` frontier built from that endpoint cannot support "better than plausible" language.

The canonical `e4:evidence` path is also still the older v6 seven-coordinate corners-plus-random sweep around
contract defaults. It does not import the three anchored scenarios, does not use `PROBABLE` as its headline, and
explicitly admits that its `R_alpha` widths are not verified coverage. The universal legacy guard and text-embargo
confusable work remain open. Multiplier-relapse risk is **YES (material at the process/release level)**. The
capability criterion is **NO** because its fixtures still bypass the evidence builder and renderer, and its alleged
boundary fixture is `m=+0.410`, not a boundary.

## Audit baseline and reproduction

All source reads, reruns, and probes below use the isolated worktree at commit
`3b41007e71c9e8c1d7494fce1fde271438263dc4`:

```text
C:\devel\claude-projects\distributed-governance-research-v7-audit
```

This matters because the shared main worktree changed during the audit. An initial run there observed a transient
`e4:evidence` `boxOf(...): keys.map` crash while `contract.mjs` and `evidence.mjs` were being changed concurrently.
That mixed-version observation is **not attributable to the frozen commit** and is not counted as a finding. The
committed snapshot's evidence command exits successfully, and its forced-insufficiency path was separately probed.

### Required commands, exact outcomes

| Command | Exit | Salient output |
|---|---:|---|
| `npm run e4:controls` | 0 | `ALL CONTROLS PASSED`; baseline `m_hat=0.4465`, CI `[0.4318,0.4617]`; C4 `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | `ALL TESTS PASSED`; strong distributed `+0.454`, strong central `-0.415`, null `0.0001`, alleged boundary `+0.410` |
| `npm run e4:theorem` | 0 | synthetic Gaussian identity differs by `0.00029 = 0.17 SE` |
| `npm run e4:scenarios` | 0 | code scenarios: `+6.1%`, `+46.6%`, `+199.8%` |
| `npm run e4:frontier` | 0 | no crossing on five one-factor plotted ranges; combined path reports `t≈1.13` |
| `npm run e4:evidence` | 0 | old v6 object: base `46.4%`; corner-weighted shares `78/21/2`; `R_.8=[2.5%,191.5%]`; `theta_id=e4v6+fnv1a-5834b8ed` |

The evidence run took 131 seconds and printed an internally candid description: the sign percentages are a count of
sampled points, not a probability. That honesty does not turn the statistic into a volume share or a global sweep.

## Severity-ranked findings

### 1. BLOCKER — the executable scenarios do not implement the cited master scenario table

`scenario-configs.mjs:1-11` claims `research/e4-plausible-anchors.md`'s **MASTER SCENARIO TABLE** is its source. The
claim is false at this commit.

For `PRO_CENTRAL`, the code starts with `{...PROBABLE}` and changes only
`s_exp,b_H_C,w,a,b,lambda,zeta,sigma_C`. It consequently leaves all of these at the probable values:
`a_V,b_V,p,a_r,b_r,pi_opp,mu_opp,beta,gamma,sigma_e`. The master table instead gives them central-favourable values.
Representative discrepancies are:

| Knob | Executable `PRO_CENTRAL` | Master table `pro-central` |
|---|---:|---:|
| `a_V,b_V` | `0.5,3.5` | `1.0,1.5` |
| `p` | `0.15` | `0.05` |
| `a_r,b_r` | `1.5,8` | `0.8,14` |
| `pi_opp,mu_opp` | `0.15,3.0` | `0.03,1.5` |
| `beta` | `0.35` | `0.8` |
| `gamma` | `0.5` | `0.3` |
| `sigma_e` | `0.5` | `1.2` |
| `b_H_C` | `1.3` | `1.2` |
| `sigma_C` | `0.35` | `0.2` |

An inline probe transcribed the documented table into a config and ran the same `estimand`, world size, seed, and
800 worlds:

```text
code PRO_CENTRAL:         m=+0.0607 CI=[+0.0576,+0.0643] D/O=0.9122 C/O=0.8516
master-table PRO_CENTRAL: m=-0.2954 CI=[-0.2992,-0.2907] D/O=0.6811 C/O=0.9765
```

This is a winner reversal, not rounding drift. The documented pro-central scenario gives the central the competent
signal and gives the distributed arm its documented sparse/noisy/suppressed participation environment; the code
gives the competent central only part of its documented advantage while leaving the distributed arm at probable
conditions. Calling the resulting `+6.1%` point the central's "best plausible case" is under-powered.

`PRO_DIST` also does not implement the master-table point (`p=.40` vs `.45`, `s_exp=4` vs `5`, `w=1.1` vs `1.3`,
and many more). Running the master-table point gives `m=+12.797`, `D/O=.845`, `C/O=-11.952`, versus the code's
`m=+1.998`. That extreme result is itself a warning that the named points need a frozen executable manifest and
plausibility audit, not informal synchronization between Markdown and JavaScript.

**Required correction:** choose one object. Either make `scenario-configs.mjs` exactly encode the master table and
accept the central-win result, or revise the table and stop calling the executable point a full/best-case scenario.
Add a test that parses or imports one machine-readable scenario manifest and asserts every coordinate. Scenario
results need their own resolved config hash; the canonical evidence `theta_id` does not cover this separate path.

### 2. BLOCKER — the canonical evidence path is not the new anchored design or a global sweep

The header calls `evidence.mjs` the "exclusive evidence path," but at this commit it:

- builds `base={...baseConfig(),...WORLD}` and never imports `scenario-configs.mjs` (`evidence.mjs:96-123`);
- takes its headline at contract defaults, not at anchored `PROBABLE`;
- jointly varies only seven of 29 theta coordinates (`p,beta,sigma_e,s_exp,b_H_C,w,pi_opp`);
- one-at-a-time probes ten more coordinates only at the base point;
- never varies ten substantive coordinates at all: `m_q,s_q,a_V,b_V,c_lo,c_hi,a_r,b_r,phi,sigma_v`;
- uses 128 corners + one center + 64 uniform interior samples, so 66% of its sign-share sample is measure-zero
  corners (`evidence.mjs:28-57`);
- labels `numerical_status` resolved using no envelope-endpoint error certificate (`evidence.mjs:76-93`).

This is especially damaging because `a_V,b_V` define the claimed long tail, while `a_r,b_r` govern distributed
reach. `contract.mjs:85-101` itself says the global "report everything" sweep is planned and the current block is a
working v6 config. The code is therefore candid internally but still emits a release-looking evidence artifact.

The `R_alpha` object is not coverage. `contract.mjs:99-100` explicitly calls `alpha_width` declared sensitivity
widths, **"NOT verified probability coverage."** `ralphaBoxOf()` merely rescales each marginal interval about its
midpoint and clips it to `D_F`; no joint law, dependence model, or empirical coverage calculation exists. Symbols
`0.5/0.8/0.95` must not be read as 50/80/95% regions.

**Required correction:** do not preregister until the global space-filling design, its joint measure, dependence,
coverage validation, endpoint uncertainty, and resolved-status rule are frozen in the hashed contract. Until then,
label the current command "development sensitivity sample," not canonical evidence.

### 3. HIGH — `t≈1.13` is numerically reproducible but its interpretation is not valid

The root is not obviously Monte-Carlo noise. Recomputing the combined path with 800 worlds on a 0.05 grid gave:

```text
seed 20260711 -> t=1.1257
seed 20260712 -> t=1.1316
seed 17       -> t=1.1366
```

So `≈1.13` is a stable locator **on the particular coded path**. What fails is the claim attached to it:

1. The path endpoint is the under-powered, master-table-inconsistent `PRO_CENTRAL` above.
2. Even under the contract's own `R_alpha`, the supposed "fully-competent plausible central" at `t=1` is outside
   the expectable band on three coordinates: `s_exp=.5` not in `[1,4]`, `b_H_C=1.3` not in `[.1,1]`, and `w=.1`
   not in `[.2,1]`.
3. `t>1` is not an identified competence scale. It linearly extrapolates eight heterogeneous coefficients and
   clips each to a different `D_F` boundary (`frontier.mjs:51-68`). At `t=1.13`, the actual coordinates are
   `s_exp=.240,b_H_C=1.404,w=.048,a=-.026,b=1.013,lambda=0,zeta=.882,sigma_C=.331`. There is no evidence that one
   unit of this mixture, or extrapolation beyond it, means "better" in a common empirical metric.
4. The script linearly interpolates the first sign change of noisy point estimates; it computes no confidence set
   for the root and no path/specification sensitivity.

Likewise, "no single knob flips it" is a correct local statement conditional on starting at `PROBABLE` and on five
hand-selected axes/ranges. It is not evidence of global robustness. The starting point is already +46.6%, so a
one-factor perturbation must erase a large multi-parameter advantage while all correlated favourable assumptions
remain fixed. That is exactly why multi-dimensional frontiers, not local ceteris-paribus plots, are needed.

**Required correction:** first make the endpoint match a frozen, defensible pro-central scenario. Then report the
frontier as path-conditional, provide a root interval across seeds/MC error and several substantively defensible
paths, and remove "beyond realistic" unless `t` is calibrated to observed competence.

### 4. HIGH — universal legacy quarantine and the text embargo remain open

Static inspection found `E4_ALLOW_LEGACY` in only:

```text
e4-v4-symmetric-frontier.mjs
e5-sp-symmetry-gate.mjs
```

Seventeen other top-level simulation files contain multiplier/ratio emitters without that guard. Direct execution
without a flag proves the release bypass is live:

```text
node scripts/simulation/e4-v3-headline.mjs -> exit 0
... (i.e. 0.98x to 10.97x; median 1.63x)
... distributed 65% ... status quo 33% -> 1.98x (+98%)
```

`test.mjs:58-64` checks only one guarded runner. H3 is **not cleared**.

The adapter also still admits the known M2 bypasses. Direct calls to `assertNoEmbargoedTokens()` produced:

```text
ALLOWED: 2.2х       (Cyrillic x)
ALLOWED: 2.2ｘ      (fullwidth x)
ALLOWED: 2.2✕
ALLOWED: 2.2-fold
ALLOWED: 2.2 times
ALLOWED: twice the value
REJECTED: 2.2×
```

The closed schema remains a useful object-level barrier, but the process-level embargo is not exclusive while old
runners execute and arbitrary prose can bypass the adapter. **Multiplier-relapse risk: YES — MATERIAL.**

### 5. MEDIUM — the theorem is a correct synthetic identity, not an engine parity theorem

The mathematical identity in `research/e4-parity-theorem.md` is correct for jointly normal `(S,X)`, equal costs,
fixed top-`q` selection, no eligibility gate, and no credit. `theorem-check.mjs` verifies that one-selector identity
on synthetic Gaussian data; it does not test two-selector parity, the large-`K` corollary, or convergence from the
production engine.

More sharply, the theorem's central signal is
`a+(b-w)S+w*v_p+eta`, while the engine uses
`a+(b-w)Splus+w*v_p-b_H_C*V^s_exp*H+eta` (`engine.mjs:76-78`). Reducing the engine to the written central signal
requires at least a no-myopia gate and a coefficient mapping (`b_H_C=b-w`) that the theorem does not state. The
MNAR distributed signal is also not jointly normal, as the note admits. M1 is therefore **partial, not cleared**.

Call it a "Gaussian fixed-threshold selection identity" or "no-myopia limiting benchmark." Do not call it the E4
parity boundary without an engine-to-limit proposition and regression test.

### 6. MEDIUM — the decomposition is arithmetically honest; the labels and schema still need hardening

The implementation uses the same retained worlds and denominator for all three quantities:

```text
m = Sum(D-C)/Sum(O) = Sum(D)/Sum(O) - Sum(C)/Sum(O)
```

Thus `m=dOverO-cOverO` exactly (`engine.mjs:156-181`). The `PRO_DIST` output
`0.9575-(-1.0401)=1.9976` shows why a gap above 100% is possible: the central-selected portfolio has negative true
delivered value. This is **not a ratio artifact**. A negative arm ratio is likewise an honest statement that its
selected projects destroy net value in aggregate.

Two cautions remain:

- `O` is the full-information **greedy density-rule** benchmark, not an optimal knapsack oracle. Calling `D/O` and
  `C/O` "efficiency" suggests a `[0,1]` bound the code does not formally guarantee; residual packing can in
  principle make another greedy ordering beat the true-density greedy ordering. Prefer "delivered value relative
  to the same-rule full-information benchmark."
- the engine section header still says `E[(D-C)/O | ...]` (`engine.mjs:131`) although the code computes a
  ratio-of-sums. That stale contract language should be removed. The bootstrap also fixes the estimated `o_min` and
  retained set rather than re-estimating them per replicate.

The output validator remains incomplete. `df_par_share`, `df_dist_share_se`, and `m_Ralpha` are optional although
the renderer assumes some of them; object type is not generally enforced; `m_Ralpha` need not contain all alpha
levels; and CI ordering is not checked (`contract.mjs:103-127`; `schema.mjs:6-37`). This does not alter the canonical
numbers but weakens the "closed schema" guarantee.

## Tier-1 and open-item verification matrix

| Claim / open item | Status now | Executable evidence |
|---|---|---|
| Latent fail-closed crash fixed | **CLEARED** | Forced `EVIDENCE.base_nw=1`; `buildEvidence()` throws the intended `Error: base point insufficient: only 1 kept worlds (< max(40, 0.5·worlds))`, not a `TypeError`. |
| `theta_id` folds resolved contract hash | **CLEARED, narrow** | Reconstructed manifest matches live id `e4v6+fnv1a-5834b8ed`; changing `THETA.b_H_C.value` by `.001` changes it to `e4v6+fnv1a-c67deb59`. Scenario/frontier runs still have no resolved run id. |
| `validateConfig` rejects `+/-Infinity` | **CLEARED** | `N=Infinity` and `m_q=-Infinity` both throw finite-number errors. |
| negative `zeta` executable | **CLEARED** | `validateConfig` + `validateDomain` accept `zeta=-0.5`. |
| dead `rho_P`, `common_random` removed | **CLEARED** | `rg "rho_P|common_random" scripts/simulation/e4-v5` returns no matches. |
| ratio-of-sums + `D/O,C/O` | **CLEARED arithmetically** | Same retained set/denominator; exact additive decomposition. Interpretation caveats above. |
| Anchored scenarios implement master table | **NOT CLEARED** | Executable configs materially disagree; documented pro-central point reverses the winner. |
| Frontier `t≈1.13` robust | **PARTIAL** | Numerically stable across three seeds on the coded path; endpoint/path interpretation is invalid and root uncertainty absent. |
| Universal legacy guard (H3) | **NOT CLEARED** | Only two guarded; direct old multiplier runner exits 0. |
| Text confusables/spelled multipliers (M2) | **NOT CLEARED** | Six concrete bypass strings accepted. |
| Global sweep | **NOT CLEARED** | Contract marks it planned; current evidence is a seven-dimensional, corner-dominated development sweep. |
| `R_alpha` coverage verified | **NOT CLEARED** | Contract explicitly says widths are not verified probability coverage. |
| Theorem scoped as no-myopia limit (M1) | **PARTIAL** | Honest limitations added, but title/framing and test still overstate engine linkage. |

## Re-check of the seven v5 blockers

The definitions below are the seven rows in `CRITIQUE_v5_SUMMARY.md`, not newly invented criteria.

| # | V5 blocker | V7 status | Assessment |
|---:|---|---|---|
| 1 | Contract and engine unit consistency | **PARTIAL** | Finiteness, executable `zeta`, dead parameters, resolved contract hash, and ratio-of-sums are repaired. The stale per-world estimand comment, approximate-binomial implementation, split/non-hashed scenario path, and scenario-table drift prevent clearance. |
| 2 | Identification in practice | **PARTIAL** | The latent central regression remains full-rank, but the new named points are analyst configurations, not identified coefficients; the global joint object and dependence structure remain absent. A local path locator does not identify where reality lies. |
| 3 | Estimand and state machine | **PARTIAL** | Ratio-of-sums and decomposition are coherent; set-based materiality is improved. Relative cell-specific `o_min`, frozen-threshold bootstrap, incomplete schema, and `numerical:resolved` without envelope/root certification remain. |
| 4 | Analytic theorem | **PARTIAL** | Proof and synthetic regression now ship, clearing a prior implementation gap. Production harm gating, MNAR, eligibility, costs, credit, and engine-to-limit convergence remain outside it. |
| 5 | Joint `D_F/R_alpha` and capability | **PARTIAL** | The seven-key slice is broader than v5, but it is explicitly not the planned global sweep; `R_alpha` is not coverage. Fixtures still bypass the release pipeline and the `+0.410` "boundary" is not a boundary. **Capability met: NO.** |
| 6 | Mechanical embargo | **PARTIAL** | Closed object schema and exact-token tests are useful. Universal guard, confusable normalization, spelled-out semantics, and an exclusive release boundary remain absent. **Multiplier-relapse: YES, material.** |
| 7 | Anti-value, novelty, companion alignment | **PARTIAL** | Anti-value arithmetic remains real, and named scenarios expose the mechanism. But code/document scenario drift, visibility-reach independence, single-signed opposition voice, and transport-unidentified coefficients keep the substantive claim conditional. |

**Clearance count: 0 cleared, 7 partial, 0 not-cleared at the blocker-row level.** Individual Tier-1 defects are
cleared, but no full v5 blocker is yet discharged.

## Shortest path to preregisterable

1. Replace the duplicated Markdown/JavaScript scenarios with one machine-readable, hashed manifest; make the code
   exactly match the master table, rerun, and report the central-win pro-central result unless the table is revised
   prospectively with evidence.
2. Complete and freeze the global joint sweep. Define its measure and dependence, validate actual `R_alpha`
   coverage or rename the sets, attach simultaneous MC/root uncertainty, and gate `numerical:resolved` on those
   errors.
3. Rebuild frontiers from the corrected scenarios; report them as path-conditional and show multiple empirically
   interpretable paths. Remove "better than realistic" from an uncalibrated interpolation parameter.
4. Put every retired runner behind one universal reproduction guard and test the entire legacy inventory. Normalize
   confusables and block spelled-out multiplier semantics, while retaining the closed schema as the primary barrier.
5. Make positive/negative/null/true-boundary fixtures traverse the full evidence-to-schema-to-render pipeline;
   harden required fields/types/order and give scenario/frontier artifacts resolved provenance.
6. Demote the theorem to its exact scope or prove/test the engine-to-no-myopia-Gaussian limit.

## Single sharpest improvement

**Make the master scenario table executable as the one hashed source of truth.** This immediately exposes that the
documented pro-central case wins (`m≈-29.5%`), repairs the strongest honesty defect, prevents future scenario/code
drift, and gives the frontier a defensible endpoint. Until that is done, the anchored framing is not merely
under-certified; it is testing different parameter values from the ones it tells the reader it tests.

