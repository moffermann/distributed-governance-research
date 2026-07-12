# Critique v4 — mechanical embargo and engine specification

## Verdict

**NOT CLEARED.** V4 closes two prose loopholes from v3: it names both ASCII `x` and Unicode `×`, and it no longer permits an opt-in `D/C` mode (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:154-162`). But blocker 6 asked for a mechanical embargo. The repository still contains a design promise, not the replacement engine, schema, adapter, config enforcement, legacy guard, tests, or release boundary. The two named legacy runners remain ordinary, directly executable files; one still computes `D/C`, leads with multiplier semantics, and prints ASCII `x`.

| Acceptance question | Current answer |
|---|---|
| Is `npm run e4:evidence` present? | **NO** — `package.json` has only anchor check/fix scripts (`package.json:6-8`). |
| Is there an executable closed schema and sole artifact adapter? | **NO** — only prose exists (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:154-159`). |
| Do unknown literals and unused config fields fail? | **NO** — the old runners hard-code model inputs, and `WP.eta` remains unused (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-49`). |
| Are the old runners mechanically isolated? | **NO** — both execute unconditionally from `scripts/simulation/` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-104`; `scripts/simulation/e5-sp-symmetry-gate.mjs:119-166`). |
| Can current executable output emit multiplier semantics or suffixes? | **YES** (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64,73-85,95-104`). |
| **Multiplier-relapse risk?** | **YES — MATERIAL in the current tree.** |

## Specific issues

### 1. Blocking — none of the claimed controls exists

Section F uses present-tense control language (“backed by,” “rejects,” “throws”) for unshipped machinery (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:154-170`). There is no package command for it (`package.json:6-8`). Consequently there is no executable evidence that unknown fields, hidden constants, unused parameters, bad output fields, or embargoed renderings fail. The three test families are good behavioral requirements, but currently are prose only.

This is not cured by calling v4 “NOT pre-registered” at `DESIGN_SKETCH_v4.md:8`: it is honest status, not enforcement. Blocker 6 remains open until the controls run and fail adversarial fixtures.

### 2. Blocking — legacy execution is live and reproduces the forbidden frame

The promised move and runtime guard (`DESIGN_SKETCH_v4.md:160-162`) have not happened. E4 computes `r.d/r.c` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64`), labels its lead table “advantage distributed/central,” declares parity at one (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-85`), and emits ASCII suffixes such as `a.toFixed(2)+"x"` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its comment claiming “no headline multiplier” is therefore contradicted by its default report (`scripts/simulation/e4-v4-symmetric-frontier.mjs:2-6,73-85`). E5 also runs without a legacy gate and retains the retired `0.05` program gate (`scripts/simulation/e5-sp-symmetry-gate.mjs:151-166`). Nothing prevents either stdout stream or its canonical rerun from being reused as v1.14 evidence.

### 3. Major — the proposed schema is closed only by assertion

The field list at `DESIGN_SKETCH_v4.md:155-157` is better than v3, but it is not a schema definition. It does not freeze a schema version, types, required fields, nested closure of `theta`, finite-number rules, `ci` shape/order, state enum, provenance/config hash, or `legacy:false`. Top-level `additionalProperties:false` does not close an unconstrained nested `theta`. Nor does a result-object schema govern captions, tables, plots, Markdown, SVG, CSV, stdout, or release manifests; those require a second publishable-artifact contract and a testable release collector.

### 4. Major — the adapter blacklist misses suffix-free multiplier semantics

The adapter promises rejection of `x`, `×`, and bare `D/C` “in institution-performance context” (`DESIGN_SKETCH_v4.md:158-159`), but neither that context nor the token grammar is defined. The live E4 lead header uses `advantage distributed/central` and bare parity-one numbers (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-85`), so a literal implementation of the listed blacklist could pass multiplier semantics with no `D/C`, `x`, or `×`. “Every official artifact” is also circular until officialness is defined by an exclusive build/release path.

### 5. Major — fail-closed config is underspecified

“Any unregistered literal” (`DESIGN_SKETCH_v4.md:163-164`) cannot be implemented soundly without separating model-governing literals from structural literals (`0`, indices, algorithm constants, PRNG constants). A mere read-tracker is also defeatable by a no-op read. The old E4 runner illustrates the scope: reach/cost, organization/capture, budget, grids, and sweep values are embedded in code (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-28,36-49,55-64`). V4 needs an explicit allowlist policy plus behavioral pathway tests, not just key consumption.

## Prioritized fixes

1. Ship the new engine, versioned nested-closed result schema, publishable-artifact schema, sole adapter, `npm run e4:evidence`, adversarial tests, and CI/release job. Require finite ordered intervals, the frozen state enum, config/schema/code hashes, and `legacy:false`.
2. Move both runners and frozen outputs under `legacy/`; refuse execution absent an explicit regression-only guard; emit an unavoidable `LEGACY — NOT V1.14 EVIDENCE` marker; prohibit legacy imports and keep legacy artifacts outside the evidence namespace.
3. Make the embargo semantic: reject numeric `[x×]`, `D/C`, `distributed/central`, distributed-over-central aliases, “advantage” with parity one, and any renderer-derived arm ratio across stdout/JSON/CSV/Markdown/SVG/plots/captions. Test malicious ASCII, Unicode, bare-ratio, and suffix-free fixtures.
4. Define model-literal versus structural-literal policy; combine AST lint, unknown-key rejection, runtime consumed-key accounting, and effect/inactivation tests for every registered pathway.

**Explicit multiplier-relapse answer: YES.** V4 materially improves the intended specification, but the current repository can still regenerate and republish the retired multiplier with one direct Node invocation. The risk becomes **NO** only after the exclusive evidence path and adversarial fixtures are implemented and passing.
