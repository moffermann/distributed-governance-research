# Critique v3 — mechanical embargo and engine specification

## Verdict

**NOT CLEARED.** V3 states the right intended hierarchy, but blocker 6 was a demand for mechanical enforcement, and the repository still contains only a promise to build it. There is no replacement engine implementing this design, executable registry, output-schema validator, snapshot test, test command, CI workflow, or legacy guard. The two historical engines remain directly executable in the ordinary simulation directory. One still computes and leads with `D/C`, and emits numeric ASCII `x` suffixes in its default output. Thus the answers against the current tree are:

| Acceptance question | Answer in the current repository |
|---|---|
| Does an unregistered model-governing literal fail? | **NO** |
| Does an unused registered parameter fail? | **NO** |
| Can the relevant default executable output be shown never to print a numeric `x`/`×` suffix? | **NO** |
| Is `D/C` absent from default executable output? | **NO** |
| Are the old engines mechanically isolated as legacy? | **NO** |
| Are snapshot/schema/lint tests run in CI? | **NO** |
| **Multiplier-relapse risk?** | **YES** |

The prose-level design has improved: it makes `m_hat`, transport bounds, and class the intended lead fields, forbids `D/C` by default, and asks for snapshot/schema/lint tests (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-114`). It also applies the reporting ban to every institution-performance quantity, rather than only to `Delta_O` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:116-119`). Those are good acceptance criteria. They are not implemented controls.

## Ranked issues and fixes

### 1. Blocking — the “mechanical” layer does not exist

Section 8 is explicitly a specification for a **new** engine: it says that this future engine will reject literals and unused parameters, emit the new schema, and ship snapshot/schema/lint and negative-control tests (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-114`). No corresponding engine or test file exists in the tracked simulation tree. `package.json` exposes only anchor checking/fixing and has no `test`, v3 evidence, schema, lint, or CI command (`package.json:6-8`). The old E5 runner demonstrates both failures the missing enforcement was meant to catch: `WP.eta` is declared but unused, and the same object hard-codes the model constants (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-49`). E4-v4 likewise embeds model-governing constants for cost, reach, budget, organization, capture, grids, and the scenario box directly in executable code (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-28,36-49,55-64`). Nothing causes either run to fail.

This means “fails on any unregistered literal” is not currently a property that can be tested. Even as a spec it is underspecified: source code necessarily contains structural literals such as `0`, `1`, array indices, and seed-combiner constants. Without a machine-readable distinction between registered model inputs and allowlisted implementation constants, the phrase is neither sound nor complete. Similarly, a static “parameter was read” check can be defeated by a no-op read and does not show that the parameter affects its declared pathway.

**Fix:** implement the replacement before preregistration, with one machine-readable `theta_all` schema/config as the sole source of all model, sweep, transport, numerical, seed, and classification quantities. Add (a) an AST lint that rejects numeric/string model constants outside the config and a narrow reviewed structural-literal allowlist; (b) a runtime configuration proxy that records consumed keys and fails on unconsumed or unknown keys; and (c) behavior-based pathway tests showing that every parameter changes only its declared equation and that inactivation makes the pathway exactly irrelevant. Put all of these behind a failing `npm test`/CI job, not a documentation checklist.

### 2. Blocking — the Unicode-only wording leaves the live ASCII `x` path open

V3 says the new engine never emits an institution-performance `×` suffix, and describes E4-v4 as an engine that “prints `×`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-113`). The actual engine does **not** use that character. It concatenates the ASCII letter `x` after performance ratios in both crossover and capture output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its reproduced output contains `0.95x`, `0.94x`, `0.83x`, and `1.54x`/`1.46x`/`1.43x` (`audits/2026-07-11-v1.14-design/canonical-e4-v4-frontier-rerun.txt:47-57`). A lint that implements the prose literally by rejecting only U+00D7 would pass the current relapse path.

Suffix lint alone is also insufficient. The same default run's lead table contains bare multiplier values without any suffix; the header calls them median “advantage distributed/central,” and the reading rule assigns parity at one (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-85`). The ratio is explicitly computed as `r.d/r.c` before aggregation (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66`). Therefore a run can restore multiplier semantics while containing neither `x` nor `×`.

**Fix:** make the embargo semantic and artifact-wide. A strict result schema should use `additionalProperties: false`, require the primary fields (for example `delta_o_hat`, `m_lo`, `m_hi`, `class`, uncertainty fields, and excluded-`O` share), and reject `d_over_c`, `D/C`, `distributed/central`, ratio-parity-at-one, and generic `advantage` fields. Snapshot-lint stdout, JSON/CSV, tables, plots, captions, and generated Markdown/SVG for both numeric `[x×]` suffixes and the forbidden semantic field/header set. Test a malicious fixture with ASCII `1.54x`, Unicode `1.54×`, and a bare `D/C=1.54`; all three must fail.

### 3. Blocking — legacy isolation is asserted, not present

The promised move “behind a `legacy/` guard” has not happened (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:112-113`). Both historical scripts remain at top level under `scripts/simulation/` and are normal direct Node executables (`scripts/simulation/e4-v4-symmetric-frontier.mjs:1-2`; `scripts/simulation/e5-sp-symmetry-gate.mjs:1-3`). E4-v4 executes its multiplier-first report unconditionally (`scripts/simulation/e4-v4-symmetric-frontier.mjs:73-104`). The old gate likewise executes its historical report unconditionally and still uses the retired `0.05` go/no-go criterion (`scripts/simulation/e5-sp-symmetry-gate.mjs:119-166`). A comment saying an output is historical or “no headline multiplier” does not prevent it from being copied into v1.14 evidence; indeed, E4-v4's own comment says no headline multiplier while its lead output is `D/C` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:2-6,21-22,73-82`).

Moving files into a folder would still be only weak isolation if direct execution and imports remain unrestricted.

**Fix:** move the historical scripts and their frozen snapshots under a clearly named legacy tree; add a runtime refusal unless an explicit `--legacy-regression-only` guard is present; print an unavoidable first-line `LEGACY — NOT V1.14 EVIDENCE` marker; prohibit imports from legacy into the v3 package; make the v1.14 evidence command consume only schema-valid v3 result objects; and run legacy regression in a separate CI job whose artifacts cannot be published by the evidence job. Add a repository test that fails if a non-legacy path references the old runners or their ratio fields.

### 4. Major — “forbidden by default” retains an authorized relapse switch

V3 says `D/O` and `C/O` may be secondary diagnostics but makes `R=D/C` only “forbidden by default” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:31-36`). Section 8 repeats the default qualifier for both `D/C` and multiplier suffixes (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-111`). Section 9 is absolute only about `×`; it does not prohibit an opt-in bare `R=1.54` or a lead ratio table without a suffix (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:116-119`). That is a formal route to revive the same multiplicative object while claiming compliance.

The qualifier is especially unnecessary under the settled decision that the calibrated multiplier is retired. `D/O` and `C/O` already communicate arm levels on a stable common scale; their quotient adds the unstable denominator and old visual frame. The prior critique required that the **default** run be unable to print it (`audits/2026-07-11-v1.14-design/critique-v2-multiplier-estimand.md:76-85`), but v3 now claims a binding mechanical embargo and should close the remaining optional evidence path as well.

**Fix:** prohibit `D/C` in every v1.14 evidence mode, not merely the default. Do not add an `--include-dc` flag to the new engine. If historical reproducibility requires it, permit it only inside the separately guarded legacy regression described above. State explicitly that `D/O` and `C/O` are the only optional institution-level performance diagnostics exposed by the v3 schema.

### 5. Major — the proposed output schema is not defined tightly enough to enforce precedence or completeness

The only schema description is the parenthetical “per-cell `m_hat`, `[m_lo,m_hi]`, class” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-111`). It does not define a serialization format, required key names, allowed extra fields, ordering/lead rules, class enum, finite-number rules, interval ordering, treatment of excluded worlds, provenance/config hashes, or whether diagnostics and plot layers are validated. It also says `Delta_O`-first, but a JSON object schema does not by itself enforce which table, figure, or prose claim is first. A producer could pass a permissive schema and then lead with a derived multiplier in a renderer.

**Fix:** freeze versioned schemas for (1) computational cell results and (2) publishable evidence artifacts. Reject extra keys. Require `m_lo <= m_hi`, finite values, frozen and non-overlapping structural-sign and materiality enums, a separate numerical-certification status, the `o_min` exclusion share/count, inner simulation uncertainty, a `theta`/registry hash, code revision, and an explicit `legacy=false`. Render all official tables/plots only through one tested adapter whose first layer is the partial-ID class/map. Golden snapshots must cover central-win, robust-negligible, transport-indeterminate, and numerically unresolved cells, not only favorable cells. Run schema validation both before writing an artifact and over every artifact collected for release.

## Bottom line on blocker 6

V3 **conceptually recognizes** the required controls but does **not close** the v2 blocker in repository reality. The sharpest single improvement is to ship one evidence-only v3 command whose closed result schema cannot contain `D/C`, whose renderer is the only route to release artifacts, and whose CI simultaneously rejects ASCII/Unicode multiplier forms and refuses all legacy imports/runs. Until that exists and its adversarial fixtures pass, **multiplier-relapse risk is YES**.
