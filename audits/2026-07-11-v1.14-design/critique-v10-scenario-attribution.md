# E4 v1.14 (v10) — scenario attribution and single-source review

## Scope and reproduction

I reviewed `HEAD` `601263a0e5be484bf6dcbbe74bcbd0a4a4c53fd9` (the v10 prompt commit, immediately after `5a85d27`) against the limited comparative-institutions robustness bar. I inspected the executable registry and runner, the regression suite, the anchor document, the paper draft, and the v8 findings. I did not require target-domain calibration that the draft disclaims.

Fresh runs both exited 0:

| command | relevant result |
|---|---|
| `npm run e4:test` | full executable ordering passes: `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST` (`-0.39 < 0.02 < 0.28 < 0.44 < 1.95` in the smaller regression fixture) |
| `npm run e4:scenarios` | `PRO_CENTRAL -29.5%`, `NO_MYOPIA +6.1%`, `MYOPIA_OFF +30.4%`, `PROBABLE +46.6%`, `PRO_DIST +199.8%`; stdout reports the sequential 40/60 split |

I also compared object keys directly. `PROBABLE -> MYOPIA_OFF` changes only `s_exp,b_H_C`; `MYOPIA_OFF -> NO_MYOPIA` changes only `w,a,b,lambda,zeta,sigma_C`; and `PROBABLE -> NO_MYOPIA` changes those eight fields together.

## Verdict for the assigned changes

| v10 change | verdict | evidence |
|---|---|---|
| **#1 — genuine myopia-only contrast and honest bundle attribution** | **FAILED repository-wide (executable and main draft verified; canonical anchor prose failed)** | The registry implements the requested nesting and labels `NO_MYOPIA` as a bundle (`scenario-configs.mjs:24-28`). The runner and paper give the path-dependent 16.2/40.5 (~40%) harm-gate step and 24.3/40.5 (~60%) competence step (`scenarios.mjs:25-27`; `e4-paper-section-draft.md:60-68`). But the anchor document still calls the bundled `NO_MYOPIA` point “myopia isolated,” attributes `+46% -> +6.1%` to the harm-myopia mechanism, and calls the results “the SAME phenomenon” (`e4-plausible-anchors.md:51-72`). Its later section again says the myopia-only contrast explains “most” (`:94-95`). The registry header also retains “the harm channel explains most” (`scenario-configs.mjs:8-10`). Those are the exact superseded attribution claims, so the publication package does not consistently implement the correction. |
| **#3 — exact config source, ordering guard, and corrected scenario taxonomy/count** | **FAILED overall (exact-config single source and ordering verified; stale wording/count failed)** | The qualitative knob table no longer duplicates named endpoint configs and explicitly sends authoritative values to `scenario-configs.mjs` (`e4-plausible-anchors.md:26-46`). The executable test really pins the full five-result ordering, not exact config equality (`test.mjs:75-82`), and the anchor correction properly calls this only a partial guard at `e4-plausible-anchors.md:54-56`. However, stale taxonomy survives: the paper header still says “three-scenario framing” (`e4-paper-section-draft.md:3`); the scenario runner source says “THREE anchored scenarios” and incorrectly calls `PRO_CENTRAL` the continuity anchor (`scenarios.mjs:1-4`); the anchor calls all five points “named scenarios” rather than four substantive scenarios plus one diagnostic contrast (`e4-plausible-anchors.md:90-100`); and the registry says “Four named scenarios” immediately before enumerating five entries, including `MYOPIA_OFF` (`scenario-configs.mjs:5-16`). |

## What is genuinely fixed

The substantive numerical design is no longer forked. `MYOPIA_OFF = {...PROBABLE, s_exp: 0.5, b_H_C: 1.3}` is a properly nested two-coordinate diagnostic, while `NO_MYOPIA` is explicitly a harm-aware/competent bundle in executable code (`scenario-configs.mjs:24-28`). The main paper table also distinguishes four substantive scenarios from the diagnostic contrast and does not claim that the full `46.6 -> 6.1` movement is myopia alone (`e4-paper-section-draft.md:36-52,60-68`). The arithmetic is correct and honestly described as sequential and path-dependent.

The exact named endpoint parameter values now have one authoritative executable location. The anchor's knob table supplies types and directions, not a second named endpoint manifest (`e4-plausible-anchors.md:26-46`). It still includes empirical bands and published outcome rows; those are not the old conflicting endpoint-config duplication.

## Remaining must-fixes, ranked

### 1. HIGH — remove the live superseded causal attribution from the anchor and registry header

The anchor remains a publication-facing methodological source, not an archived v7 audit. Its lines 53-54 and 69-72 say the eight-field `NO_MYOPIA` bundle isolates myopia and makes the whole `40.5`-point movement a harm-myopia effect. Lines 94-95 and the registry header repeat “most,” contradicting the now-correct ~40% result. Replace these with the same sequential, path-dependent 40/60 statement already present in the paper and stdout. This is a must-fix dishonest attribution, not a request for new data.

### 2. HIGH — make the scenario taxonomy/count consistent everywhere

Use one formulation throughout: **four substantive declared scenarios plus one diagnostic contrast**. Remove the paper's “three-scenario framing,” the runner's “THREE” header and stale `PRO_CENTRAL` continuity claim, the anchor's “Five named scenarios,” and the registry's internally inconsistent “Four named scenarios” enumeration. These contradictions are exactly the stale scenario-count defect the v10 premise says was fixed.

### 3. MEDIUM — narrow the ordering-guard wording to what the test proves

`e4-plausible-anchors.md:29-30` says an ordering test means “code and this narrative cannot silently diverge,” and `test.mjs:75` similarly says signs prevent drift from the doc. The repository itself demonstrates otherwise: narrative attribution and taxonomy have diverged while the test passes. Retain the accurate qualification at anchor lines 54-56: the regression guards executable outcome ordering only; it does not bind exact configs, result magnitudes, labels, or prose.

### 4. MEDIUM — purge the remaining stronger evidentiary label in this anchor

`e4-plausible-anchors.md:111` still calls the participation range “the evidence-anchored band,” despite the requested label purge and the immediately following pending-decision status. “Source-motivated declared band” would match the limited claim. This is cross-cutting with v10 change #4 but is visible in the assigned canonical anchor review.

## Decisive answer for this dimension

The executable scenario design and the main body of the draft now support the intended limited result. **But changes #1 and #3 do not yet hold repository-wide, and this dimension is not publication-ready as checked.** The remaining blockers are compact wording/consistency repairs only; no substantive redesign or target-domain data is needed.
