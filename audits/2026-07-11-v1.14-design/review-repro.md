# E4 v1.14 — Reproducibility / Release-Integrity Review

**Auditor role:** adversarial reproducibility & release-integrity.
**Scope:** `scripts/simulation/e4-v5/{contract,schema,adapter,evidence,engine,test,controls,atlas,theorem-check}.mjs`, the two legacy engines, `research/e4-paper-section-draft.md`, `package.json`.
**Date:** 2026-07-11. **Ran:** `npm run e4:test` (all pass), `npm run e4:evidence` (renders clean), `node e5-sp-model.mjs` / `e4-v3-headline.mjs` (unguarded, exit 0), plus a hash-sensitivity probe.

---

## Overall verdict: CONDITIONAL — do not rely on the current provenance/embargo story for release

The **object-level** embargo is genuinely strong: the closed schema (`additionalProperties:false`) has no field able to carry a `D/C`, a parity-1 ratio, or an `x` multiplier, and `validateOutput` rejects extra/non-finite fields (proven by tests at `test.mjs:75-77`). A *schema-valid v1.14 evidence object cannot carry a multiplier.* That part holds.

But the surrounding **provenance and process** guarantees do not hold as advertised:

1. `theta_id` does **not** identify the run — result-governing values are outside the hash (empirically proven identical after mutating them).
2. The legacy runtime guard is applied to **2 of ~19** pre-v1.14 engines; the rest (including the literal `e4-v3-headline.mjs` and `e5-sp-model.mjs`) still run unguarded and print the retired `1.98x` / `ratio d/c` framing.
3. The text embargo is a token blocklist, bypassable by Unicode confusables and spelled-out multipliers.
4. There is **no CI and no `npm test`**, so none of the above is enforced on change.

Residual multiplier-relapse risk: **YES at the process level, NO at the schema-object level** (details at the end).

---

## Ranked issues (file:line · why · concrete fix)

### R1 — CRITICAL: `theta_id` does not identify the run (provenance is broken)
`evidence.mjs:17-26` builds `MANIFEST` from a *subset* of settings and hashes only that (`resolvedHash(MANIFEST)`, `evidence.mjs:26`). The manifest omits everything that actually governs the numbers:
- the resolved **base parameter values** (`baseConfig()` / `THETA[k].value`),
- the **swept bounds** `THETA[k].df` and `THETA[k].ralpha` that define the D_F / R_α envelopes,
- the numerical constants `NUM.bootstrap_reps / ci_level / min_kept_frac / min_kept_floor / z_fallback_sd` and `CLASSIFY.pi_deg_warn`.

`contractHash()` (`contract.mjs:196-204`) *does* cover `THETA/NUM/CLASSIFY/ALPHA_LEVELS/AGGREGATION`, but it is **dead code** — grep shows it is never called or emitted anywhere. So the one function that would pin the contract is unused.

**Proof (hash-sensitivity probe):** rebuilding the manifest exactly as `evidence.mjs` does, then setting `THETA.b_H_C.value=5.0`, `THETA.p.df=[1e-3,0.99]`, `NUM.bootstrap_reps.value=999` (all result-governing) yields the **same** id:
```
theta_id BEFORE: e4v6+fnv1a-fb1a3ac9
theta_id AFTER : e4v6+fnv1a-fb1a3ac9   IDENTICAL: true
```
Two materially different runs share one `theta_id`. The "θ_id is a hash of a resolved evidence manifest" claim (and the paper's "contract hash in the artifact") is unmet.

**Fix:** fold the resolved contract into the manifest and *print it*. Minimum: add `contract_hash: contractHash()` to `MANIFEST`. Better: hash the **resolved config actually run** — `resolvedHash({ ...MANIFEST, base: baseConfig(), sweptDf: pick(THETA,'df',[...UNCERTAIN,...FIXED_CHECK]), sweptRalpha: pick(THETA,'ralpha',UNCERTAIN), num: NUM, classify: CLASSIFY })`. Then emit both `contract_hash` and `theta_id` in the rendered artifact.

### R2 — CRITICAL: legacy guard covers only 2 of ~19 retired engines
`e4-v4-symmetric-frontier.mjs:30-34` and `e5-sp-symmetry-gate.mjs:21-25` carry the `E4_ALLOW_LEGACY` guard. **No other engine does.** `grep -L E4_ALLOW_LEGACY scripts/simulation/*.mjs` lists 17 unguarded files, including the ones that produce the retired headline:
```
e4-v3-headline.mjs   → prints "1.98x (+98%)", "0.98x to 10.97x; median 1.63x"   (exit 0, no flag)
e5-sp-model.mjs      → prints "1.36x", "ratio d/c", uses Date.now()             (exit 0, no flag)
e4-v5-capture.mjs, e4-v5-detection-floor.mjs, e4-v3-*, e4-v4-morris/robustness  (all unguarded)
```
The design intent ("legacy multiplier engines must not be able to feed v1.14 artifacts") is enforced only on the two files an auditor is told to open; the actual multiplier generator (`e4-v3-headline.mjs`) is wide open. `test.mjs:59-64` only checks `e4-v4-symmetric-frontier.mjs`, giving false confidence.

**Fix:** put the guard in one shared module (`legacy-guard.mjs` exporting a `requireLegacyFlag()` called at top of file) and import it in *every* pre-v1.14 engine; or physically move all retired engines to `scripts/simulation/legacy/` and guard at a directory-level entry. Extend `test.mjs` to assert the guard on the whole `legacy/` set, not one file.

### R3 — HIGH: text embargo is a bypassable blocklist (confusables + spelled-out)
`adapter.mjs:9` `MULT_SUFFIX=/\d\s*[xX×]\b/` and `contract.mjs:128` `EMBARGO_TOKENS=['×','D/C','C/D']` only cover ASCII `x/X` and one Unicode `×`. All of these pass untouched:
- Cyrillic `х` (U+0445), fullwidth `ｘ`, `✕` (U+2715), `⨯` (U+2A2F): e.g. `"2.2х"`, `"2.2✕"`.
- Spelled-out equivalents: `"2.2-fold"`, `"2.2 times"`, `"twice the value"`, `"98% more"`.
- Note the `\b` in `MULT_SUFFIX` means `"2.2×"` is **not** matched by the regex at all — it is caught only incidentally by `EMBARGO_TOKENS.includes('×')` (`adapter.mjs:16`); drop `×` from the token list and the regex would silently miss it.

**Fix:** normalize before matching — NFKC + a confusable fold — then match `number + {x, ×, fold, times, -fold}` and word forms (`twice`, `two-fold`). But state plainly in-code that a blocklist can never be complete: the **schema is the primary barrier; the text check is defense-in-depth only.** Do not let the paper claim the text embargo *prevents* relapse.

### R4 — MEDIUM: `atlas.mjs` bypasses the sole adapter and emits a figure-data artifact
`atlas.mjs` `console.log`s the glyph legend `D=…, C=…` and `"m(θ) = (D − C)/O"` (`atlas.mjs:44-65`) and `writeFileSync('atlas-data.json', …)` (`atlas.mjs:67-70`) — none routed through `assertNoEmbargoedTokens`. The design says "every official artifact must render through here." `atlas-data.json` is a heatmap **figure source**; if it is cited in the paper it is an un-embargoed artifact. (It is currently *not* git-tracked, which limits blast radius, but the generator ships.)

**Fix:** route the atlas summary string and the JSON `note` through `assertNoEmbargoedTokens` before write; and add an in-file banner that atlas is visualization-only and its JSON is not an evidence artifact. Ideally have atlas import `renderReport`-style checking rather than free `console.log`.

### R5 — MEDIUM: run-governing constants outside the hash (subsumed by R1)
Even the values *inside* `CLASSIFY` that reach the manifest (`o_min_frac`, `delta`, `zero_tol`) are hand-copied (`evidence.mjs:21`), so the manifest and the contract can silently diverge. `NUM.bootstrap_reps/ci_level` (govern `ci` → `numerical_status`) and `NUM.min_kept_frac/floor` (govern `enough` → `degeneracy`/`numerical`) never reach it.
**Fix:** stop hand-copying; hash the whole `NUM`/`CLASSIFY` objects (folded into the R1 fix) so the manifest cannot drift from the contract.

### R6 — LOW/MEDIUM: two executable-domain defects in `contract.mjs`
- `validateDomain` `unit('zeta')` (`contract.mjs:166`) forces `zeta∈[0,1]`, contradicting its own declared `dm:[-1,1]` (`contract.mjs:27`) and the very next line's `[-1,1]` check (`contract.mjs:167`). A legitimate negative-`zeta` sensitivity run would be **rejected**. The executable domain is silently narrower than declared.
- `validateConfig` (`contract.mjs:144`) rejects `NaN` but **accepts `±Infinity`** (`Infinity > Infinity` is false, so `N:Infinity` passes). It is only caught downstream by `validateDomain`'s `finite()` — fine inside `estimand`, but `validateConfig` is exported and used standalone (`test.mjs:82`), so on its own it is not fail-closed.
**Fix:** delete the erroneous `unit('zeta')`; add `|| !Number.isFinite(v)` to the `validateConfig` number guard.

### R7 — LOW: no CI, no `npm test` (nothing is enforced)
No `.github/workflows/` exists in the repo; `package.json` has no `test` script, so `npm test` fails and Task #10's "CI" is not real. The four reproducibility commands the paper points to (`e4:controls|test|theorem|evidence`) are never run automatically.
**Fix:** add `"test": "node …/controls.mjs && node …/test.mjs && node …/theorem-check.mjs"` and a CI workflow that runs those plus `e4:evidence` and greps the rendered output to assert it *contains* `parity at 0` and *does not* match a multiplier pattern.

### R8 — LOW: provenance/naming traps
`CONTRACT_VERSION='e4-v5.0.0'` (`contract.mjs:15`) but the id prefix is hardcoded `'e4v6+'` (`evidence.mjs:26`), the dir is `e4-v5/`, and the paper calls it "v1.14"/"v6" — four names for one thing. Worse, **top-level** `e4-v5-capture.mjs` / `e4-v5-detection-floor.mjs` are legacy files unrelated to the v1.14 `e4-v5/` package — a directory/name collision that invites citing the wrong artifact.
**Fix:** derive the id prefix from `CONTRACT_VERSION`; rename or namespace the legacy `e4-v5-*.mjs` files under `legacy/`.

### R9 — LOW: paper reproducibility claim currently false
`e4-paper-section-draft.md:67-68` promises "the contract hash in the artifact." No contract hash is emitted (R1); `theta_id` doesn't pin the contract. The draft is hedged ("DRAFT, pending Codex v6 confirmation"), but this line must not survive integration until R1 lands.
**Fix:** after R1, print both `contract_hash` and `theta_id`; update the appendix to name them.

---

## Residual multiplier-relapse risk: **YES (process), NO (schema object)**

- **NO** at the object level: a v1.14 evidence object physically cannot carry a `D/C` / parity-1 ratio / `x` field — the closed schema has no such property and `validateOutput` rejects extras and non-finite values (`schema.mjs:9-11,27`; proven `test.mjs:75-76`). A forged schema-valid object cannot smuggle a multiplier field.
- **YES** at the process level, two concrete live bypasses:
  1. **R2** — `node scripts/simulation/e4-v3-headline.mjs` runs today with no flag and prints `"distributed … -> 1.98x (+98%)"` and `"0.98x to 10.97x; median 1.63x"`. Nothing stops that text being pasted into a v1.14 deliverable; the adapter only guards strings *it* is asked to render.
  2. **R3** — a rendered line reading `"distributed delivers 2.2✕"` or `"2.2-fold the central arm"` passes `assertNoEmbargoedTokens` unchanged.

So the mechanical barrier that actually works is the **closed schema**, not the guard or the token filter. The embargo should be re-described accordingly.

---

## Single highest-value recommendation

**Make `theta_id` a hash of the resolved contract + config, and emit both `contract_hash` and `theta_id` in every artifact (R1).** It is the foundation the entire "contract is the single source of truth" claim rests on; it is currently broken in a way that is invisible (the id looks precise while being blind to the numbers that matter), and it is proven above with a 3-line mutation that leaves the id unchanged. Fixing it also subsumes R5 and unblocks the paper's reproducibility claim (R9). Fold in the dead `contractHash()` rather than writing new hashing.
