# Independent Audit: Cleanliness, Order & Readability

**Date:** 2026-07-10

## Executive summary

The repository is not reviewer-ready as a navigable research artifact: current results, historical states, and generated outputs are interleaved, while the documents labeled “live” do not describe the current model. The most serious defect is not cosmetic: the canonical evaluator uses net value, but the category/decomposition path still uses gross social value, and the pre-registration places their outputs in one apparent decomposition table. The paper has a viable top-level outline, but its evidence section, finding labels, notation, and correction history impose unnecessary reconstruction work on the reader. Cleanup should stop propagation until the estimand mismatch is resolved, then establish one generated corpus manifest and one current-state page for the E4/E5-SP apparatus.

## Scope and verification

- Read-only inventory found 52 files directly under `research/`, 114 numbered Markdown files under `docs/` (113 distinct numeric prefixes; `05` absent; `03` duplicated by the live roadmap and its history), and a 1,440-line, approximately 13,700-word English master paper.
- I ran `node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1`, the same command with `--cats`, and `npm run check-anchors`. The main run reproduced the stated frontier; the category run exposed the mixed-estimand problem below. The checker reported zero dead paths, but its implementation does not check bare `research/` paths (`scripts/check-anchors.mjs:120-128,152-155`).
- The worktree was clean before this report. This audit process created or modified only this required audit file; other audit outputs appeared concurrently and were not touched.

## Critical findings

### C1. The displayed “decomposition” combines outputs from different estimands

**What / where.** The canonical evaluator explicitly constructs `net = S - h*cost`, gates the oracle and distributed arms on `net <= 0`, and delivers `net` (`scripts/simulation/e5-sp-model.mjs:112-125`). The category evaluator instead funds and delivers raw `S` in all six two-/three-layer arms; it never constructs `net`, applies the hurdle, or applies the net-value gate (`scripts/simulation/e5-sp-model.mjs:137-152`). The comment introducing that path calls it a three-layer decomposition without disclosing the metric change (`scripts/simulation/e5-sp-model.mjs:132-136`). Whether this difference is intentional is **unverified**.

The pre-registration then places the net-value `ratio` beside gross-category `macro`, `alloc`, and `delivery` factors in one table (`research/e5-sp-preregistration.md:93-100`) and says “Allocation is the selection layer” (`research/e5-sp-preregistration.md:109-110`). In the engine, `macro × alloc × delivery` is defined to equal the category mode’s **three-layer** ratio, not the canonical main ratio (`scripts/simulation/e5-sp-model.mjs:219-224`), but that three-layer ratio is omitted from the pre-registration table. At input rho 0.4, the net headline implies selection `1.93 / 1.30 ≈ 1.48`, while the row displays the gross-category allocation factor `1.58` (`research/e5-sp-preregistration.md:98`); at rho 0.2, the corresponding values are about `1.76` and `1.94` (`research/e5-sp-preregistration.md:99`). The row therefore mixes a net headline with factors belonging to an unshown gross-value result, and its displayed `alloc` values do not represent the header’s current net selection band of `1.5–1.8 ×` (`research/e5-sp-preregistration.md:12-13`).

**Why it matters.** A reviewer cannot reconstruct the headline’s factorization from the table or source without discovering that two evaluators optimize different quantities. This defeats readability and undermines trust in the claimed decomposition.

**Suggested fix.** Stop paper propagation until this is resolved. Route `evalWorld` and `evalCat` through shared `computeNetValue`, gating, portfolio-selection, and delivery functions; regenerate the table from one machine-readable result object; and add assertions that the reported two-layer ratio equals `selection × delivery` and the three-layer ratio equals `macro × selection × delivery` within tolerance. If gross-value category analysis is intentional, label it “legacy gross-value diagnostic,” remove its factors from the faithful-split table, and state that it is not a decomposition of the net-value headline.

## Major findings

### M1. The “live” roadmap and cleanup status are false at current HEAD

**What / where.** The roadmap leaves P2 “IN PROGRESS” and P3–P5 queued (`docs/03_ROADMAP.md:17-35`), while the cleanup record says P0–P5 are complete (`research/audit-2026-07-10.md:3-8`). More seriously, the roadmap describes the opportunity-cost hurdle as future work, expects the magnitude to remain about `2.8 ×`, and instructs the team to add and re-run it (`docs/03_ROADMAP.md:38-46`). The current note says the hurdle is implemented with canonical defaults and a corrected result near `2.1 ×` (`research/e4e5-value-model-v2.md:127-155`). Roadmap item 3 says the propagation note contains `~2.8 ×` (`docs/03_ROADMAP.md:48-52`), but that note now says `~2.1 ×` (`research/e5-sp-paper-propagation.md:3-14`). Even the cleanup record still names the hurdle as remaining work (`research/audit-2026-07-10.md:7-8`).

**Why it matters.** A new reader following the repository’s designated live control document is directed to a retracted model state. This is a state-management failure, not ordinary historical clutter.

**Suggested fix.** Replace the active stack with the actual current state: hurdle complete; decomposition repair pending; paper propagation blocked on that repair and author/version gating. Move finished P0–P5 work to a dated completion log. Add a release/check script that compares the roadmap headline and status tokens against the current E5-SP manifest before a commit or release.

### M2. The root landing page contradicts the corpus it is supposed to introduce

**What / where.** `README.md` says accepted resolution documents stop at `docs/109`, and that the attack and defense corpora stop at A040/D040 (`README.md:14-20`). Its status paragraph again says forty attacks in four rounds (`README.md:29-33`). The current index maps A001–A043 through `docs/113` and states that all 43 attacks are resolved (`docs/04_DOC_INDEX.md:36-46`). The paper repeats the stale forty-attack account in its abstract, contribution list, method, and conclusion (`drafts/paper.md:78-82,192-198,993-1044,1313-1317`); the propagation note itself records seven English locations requiring correction (`research/e5-sp-paper-propagation.md:80-88`).

**Why it matters.** The first page a reviewer sees is factually stale, and the authoritative paper repeats the same stale inventory. The repository’s own index therefore looks less authoritative than the landing page.

**Suggested fix.** Add a “Start here” block linking the English paper, Spanish mirror, live roadmap, docs index, current value-model specification, pre-registration/outcomes, and canonical command. Generate attack/defense/resolution counts and ranges from filenames instead of hand-editing prose. Update EN and ES paper counts in the same author-gated pass.

### M3. The contradiction registry is internally inconsistent and lacks C037

**What / where.** The registry says C026+ entries are “pending author review” (`contradictions/README.md:5-7`), every retained row is marked Accepted (`contradictions/README.md:21-39`), and the completion paragraph still calls them “Twenty open contradictions” (`contradictions/README.md:41-43`). Roadmap history instead says all twenty were resolved (`docs/03_ROADMAP_HISTORY.md:323`). The table jumps directly from C036 to C038 (`contradictions/README.md:31-32`); no C037 file or current-corpus tombstone exists. The reason for C037’s omission is **unverified** in the current corpus.

**Why it matters.** A numbered audit series cannot silently lose an identifier while claiming complete resolution. Reviewers cannot distinguish deletion, withdrawal, merge, or accidental loss.

**Suggested fix.** Retitle the registry as closed, replace pending/open prose, and state the exact retained-record count. Restore C037 or add an explicit tombstone giving its former title, disposition, date, and replacement location. Make `docs/04_DOC_INDEX.md` report that reconciled status rather than merely pointing to a “queue” (`docs/04_DOC_INDEX.md:29-31`).

### M4. `research/` has no canonical route, and the E4/E5 line is structurally ambiguous

**What / where.** The root map describes `research/` only as “Formal models, simulation results and design, literature map” (`README.md:21-26`). The prior cleanup explicitly identified the need for a canonical/results/archive reorganization, an E5 name-collision fix, and a `research/README.md` (`research/audit-2026-07-10.md:67-80`); the live roadmap repeats those tasks (`docs/03_ROADMAP.md:28-30`). They remain undone.

The collision is substantive. The paper’s experiment table defines E5 as selection × delivery (`drafts/paper.md:568-576`), and its design file is titled “E5 Design — Delivered Social Value” (`research/e5-value-delivery-design.md:1-5`). The current engine calls itself “E5 v2 / corrected-E4” (`scripts/simulation/e5-sp-model.mjs:1-10`), its pre-registration is also “E5 v2” (`research/e5-sp-preregistration.md:1`), and its propagation note says it rewrites paper Finding 4 (`research/e5-sp-paper-propagation.md:16-20`). A new reader cannot tell whether E5-SP replaces E5, extends E4, or is a separate experiment.

The supersession pass helped but did not create a trustworthy canonical set. Representative historical notes now point forward clearly (`research/e4-v3-preregistration.md:3-6`), yet the analytical-backbone banner still says `<1%` net-negative and `~99%` of oracle (`research/e4-analytical-backbone.md:3-14`), both pre-faithful-split figures. Raw result files have no equivalent status metadata; two pipeline result files present different formats and values without a current/historical label (`research/e4e5-pipeline-results-1M.txt:1-5`; `research/e4e5-pipeline-results-corrected-1M.txt:1-4`).

**Why it matters.** Filename browsing is currently the only discovery mechanism, but the filenames encode conflicting experiment taxonomies and do not distinguish evidence, current specification, correction history, and obsolete output.

**Suggested fix.** First add `research/README.md` with one row per experiment/model: stable ID, paper finding, status, current design/specification, engine, exact command, result artifact, superseded predecessor, and archive location. Reserve “E5” for the paper’s E5; rename the current family to an unambiguous E4-SP/agenda-capture identifier, using redirect stubs or a mechanical link migration. Then separate `current/`, `experiments/`, `results/`, and `archive/` only after the manifest exists.

### M5. `docs/04_DOC_INDEX.md` is numerically complete but not actually navigable

**What / where.** Filesystem census confirms that the index’s 00–113 range is complete except the declared unused `05`, with duplicate `03` for the live/history pair. The index accurately explains the mixed attack-resolution/interstitial range (`docs/04_DOC_INDEX.md:36-43`) and correctly routes two explicitly superseded artifacts (`docs/04_DOC_INDEX.md:45-48`; `docs/06_CURRENT_PROJECT_RECAP.md:1-3`; `docs/36_DIAGRAM_INDEX_AND_FLOW_DIAGRAMS_V0.md:59`).

However, the file calls itself a “Navigable map” (`docs/04_DOC_INDEX.md:1-7`) while presenting numbers and titles as code spans, not links. It compresses 75 documents in `39–113` into range prose with no per-file status (`docs/04_DOC_INDEX.md:24-43`). It also calls `04` and `05` “intentional gaps” while acknowledging that `04` is the index itself (`docs/04_DOC_INDEX.md:9-12`).

**Why it matters.** Numerical coverage is not navigation. A reviewer must return to the directory listing, infer filenames, and inspect files individually to learn status.

**Suggested fix.** Generate a Markdown table with one row per numbered document: number, clickable filename, exact title, type, current/historical status, supersedes/superseded-by, and one-line role. Move roadmap history to an archive path or give it a nonnumeric archive name so `03` remains unique.

### M6. The paper’s hierarchy does not match its argumentative load

**What / where.** The paper’s ten-section top-level outline and contribution list are usable (`drafts/paper.md:86-209`), and the experiment map is concise (`drafts/paper.md:562-577`). The problem is below that level.

- The abstract is approximately 735 words and calls three result families “findings” (`drafts/paper.md:29-76`), while Section 6 defines Findings 1–7 with different numbering (`drafts/paper.md:598,607,674,693,865,910,941`). Abstract Finding 1 corresponds mainly to Section 6 Finding 4, and abstract Finding 3 corresponds to Section 6 Finding 5.
- Section 6 runs from `drafts/paper.md:562-992`—about 4,100 words—with no `###` headings. Its findings are bold paragraph leads, so they do not appear in a Markdown outline. Finding 4 alone spans the first experiment, symmetric re-examination, capture, analytical backbone, positioning, and calibration (`drafts/paper.md:693-863`).
- Related-work categories and architecture components are also bold leads rather than headings (`drafts/paper.md:252-335,379-450`). The first limitation occupies 46 lines and mixes boundary, mitigation, comparison, and future work (`drafts/paper.md:1058-1103`). Implementation moves through pilot design, regime transition, budget release, machine verification, and collusion without subheadings (`drafts/paper.md:1187-1262`).
- Notation is too compressed: `theta`, `s`, `w`, `lambda`, and `u` appear together, but `u` is not defined (`drafts/paper.md:579-587`); `sel(theta)` then appears without an operational definition (`drafts/paper.md:598-614`). The 587-character version-history sentence front-loads undefined companion terminology (`drafts/paper.md:3`). Other overloaded sentences and punctuation failures occur at `drafts/paper.md:157-159,225-226,387-397`.

**Why it matters.** Length is not the primary problem; distribution and hierarchy are. The core evidence cannot be skimmed, linked, or revisited by finding, and the paper uses two incompatible finding-number systems.

**Suggested fix.** Rename the abstract items “result families” or align them to the Section 6 finding numbers. Add `6.1 Methods`, `6.2 E1` through `6.9 E8`; make the E4 first pass, re-examination, capture, backbone, positioning, and calibration fourth-level subsections. Put one current-results table and a notation/glossary table before the prose; move experiment evolution to an appendix. Promote architecture, related-work, limitation, and implementation leads to real headings. Reduce the abstract to question, mechanism, one headline/band, evidence boundary, and contribution.

### M7. The three key E5-SP notes preserve history by interleaving contradictory current states

**What / where.** The v2 note opens with “Not yet implemented” (`research/e4e5-value-model-v2.md:3-10`), gives the old `<1%` world under unqualified Parts 1 and 8 (`research/e4e5-value-model-v2.md:19-32,118-125`), then presents the latest correction (`research/e4e5-value-model-v2.md:127-155`), a superseded intermediate correction (`research/e4e5-value-model-v2.md:157-183`), and superseded build results (`research/e4e5-value-model-v2.md:185-244`). Its “Next” section still says to pre-register and propagate (`research/e4e5-value-model-v2.md:246-253`).

The pre-registration begins with 28 lines of reverse-chronological corrections (`research/e5-sp-preregistration.md:3-30`), then labels obsolete `<1%`, `1.43 ×`, and `~2.0 ×` statements as “locked” (`research/e5-sp-preregistration.md:40-80`), before the current confirmation reverses them (`research/e5-sp-preregistration.md:86-122`). Its candid “post-exploratory” status is useful but buried after both banners (`research/e5-sp-preregistration.md:32-38`).

The propagation note says author sign-off is required (`research/e5-sp-paper-propagation.md:16-21`), later records that the author decided to propagate (`research/e5-sp-paper-propagation.md:91-95`), and still defers application to a later version bump (`research/e5-sp-paper-propagation.md:101-105`). “Approved but not applied” is inferable, not stated cleanly.

**Why it matters.** Preservation has been implemented as textual accretion. A reader must perform version control mentally and can easily quote a retracted number from an unqualified section.

**Suggested fix.** Make the v2 note a current specification: status, equations, calibrated defaults, command, current results, limitations. Move original and intermediate states into a chronological appendix or archive. Preserve the original pre-registration as an immutable snapshot, and put amendments/outcomes in a separate table with columns for original prediction, amendment, reason, held-out result, and current interpretation. Give the propagation note explicit fields: `Decision: approved`, `Application: pending`, `Target version`, `Blockers`, and `Owner`; archive it after application.

### M8. The reference checker gives a false clean bill for `research/` paths

**What / where.** The paper cites `research/e4-v4-symmetric-frontier.md` as a rebuilt-model source (`drafts/paper.md:743-753`), but that file does not exist; only an engine and result text exist. This missing path was already flagged but left unresolved (`research/audit-2026-07-10.md:79-81`). Nevertheless, `check-anchors` reports zero dead paths because its bare-path regex accepts only `docs|knowledge|attacks|defenses`, excluding `research`, `drafts`, and other declared corpus directories (`scripts/check-anchors.mjs:128-155`).

**Why it matters.** The project advertises cross-reference cleanliness while the central evidence section contains a dead supporting reference. The checker’s output is broader than its actual coverage.

**Suggested fix.** Validate every repository-relative path found in code spans and Markdown links across every directory in `CORPUS_DIRS`; report excluded patterns explicitly. Point the paper to the actual engine/results or create the missing design note. Add this known path as a regression test.

### M9. The engine is well commented at the conceptual level but not auditable as a stable interface

**What / where.** The source separates world construction, funding, evaluation, category analysis, bootstrap, and run modes (`scripts/simulation/e5-sp-model.mjs:58-159,168-243`). That structure is the readable part. Its reviewer-facing contract is stale and incomplete:

- The header says all arms are scored on true `S` and delivery is `1.43 ×` (`scripts/simulation/e5-sp-model.mjs:15-20`), while current parameters and the main evaluator use net value and `1.30 ×` (`scripts/simulation/e5-sp-model.mjs:43-54,112-125`). The final output banner again says oracle/distributed maximize `S` (`scripts/simulation/e5-sp-model.mjs:228-231`). The project-quality comment still says `<1%` net-negative (`scripts/simulation/e5-sp-model.mjs:66-75`).
- Input `rho` is described as `corr(S,P)` (`scripts/simulation/e5-sp-model.mjs:7-10`), but it is a latent Gaussian correlation before exponentiation (`scripts/simulation/e5-sp-model.mjs:63-75`); the output separately measures the realized correlation (`scripts/simulation/e5-sp-model.mjs:238-241`).
- Defaults are `concentrate=0`, `byValue=0` (`scripts/simulation/e5-sp-model.mjs:47-48`), while the declared canonical run requires both to be `1` (`research/e4e5-value-model-v2.md:153-155`). Normal output does not print them (`scripts/simulation/e5-sp-model.mjs:228-232`).
- The usage line omits the canonical flags and all run modes (`scripts/simulation/e5-sp-model.mjs:20`). Parsing silently ignores unknown/unsupported options (`scripts/simulation/e5-sp-model.mjs:161-163`). Tornado and lumpiness read `PARAMS.rho` (`scripts/simulation/e5-sp-model.mjs:168-170,193-195`), but `rho` is absent from `PARAMS` (`scripts/simulation/e5-sp-model.mjs:26-56`), so a CLI `--rho=` cannot set it through this parser.
- Dense one-line helpers and loops obscure review of RNG, sampling, gating, scaling, and diagnostics (`scripts/simulation/e5-sp-model.mjs:22-24,71-72,83-85,114-129,155-163`).

**Why it matters.** The comments are detailed but unreliable, and the executable interface makes noncanonical runs easy to mistake for canonical ones. A reviewer must reverse-engineer both configuration and semantics.

**Suggested fix.** Add an explicit option schema, `--help`, unknown-option rejection, and `--profile=core-v0`; either make that profile the default or print a prominent noncanonical warning. Print every effective parameter plus seed base and model version. Rename input `rho` to `latentRho` and output to `corrSP`. Extract named pure functions (`computeNetValue`, `sampleParticipationScores`, `selectPortfolio`, `evaluatePortfolio`) and replace abbreviated result fields with descriptive names.

## Minor findings

### m1. Generated and retired outputs remain in reader-facing locations

The legacy pipeline always overwrites a fixed sidecar under `research/` (`scripts/simulation/e4e5-pipeline.mjs:296-301`). The file is ignored (`.gitignore:5`) but is present and currently records `deltaPartisan: 100` (`research/e4e5-pipeline-run.json:2-6,18`), far from the engine’s `0.3` default (`scripts/simulation/e4e5-pipeline.mjs:35-37`). The tracked corrected 1M output uses a different, already-flagged retired format (`research/e4e5-pipeline-results-corrected-1M.txt:1-4`; `research/audit-2026-07-10.md:77-80`).

**Why it matters.** An ignored, fixed-name file still appears to a local reader, can be mistaken for current evidence, and loses the prior run whenever the legacy engine executes.

**Suggested fix.** Require `--out` or write to an ignored `tmp/results/` directory outside `research/`. Archive tracked outputs under per-engine result directories with a small manifest containing status, exact command, seed range, git commit, schema version, and superseded-by.

### m2. Draft and render history is insufficiently separated from current deliverables

`drafts/paper-outline.md` still presents an “Abstract placeholder” and an early outline without a historical banner (`drafts/paper-outline.md:1-18`). By contrast, the applied v1.9 queue is clearly marked and preserves its superseded original purpose (`drafts/paper-v1.9-queue.md:1-7`). The release workflow says each release produces four render artifacts and attaches them to a release (`RELEASING.md:15-21`), while `renders/` retains EN/ES HTML/PDF sets for v1.9–v1.12 without a manifest.

**Why it matters.** Reviewers cannot tell which draft/render is current from the directory itself, and generated historical binaries obscure the source artifacts that carry authority.

**Suggested fix.** Banner or archive the outline. Keep only current renders in the working tree, or add `renders/README.md` with version, source commit, generator command, deposit/release status, and checksum; move historical binaries to GitHub/Zenodo release assets.

### m3. Link syntax is not portable

The paper uses Obsidian wiki links in its central evidence and companion-material sections (`drafts/paper.md:455,590,1262,1433-1437`), while `docs/04_DOC_INDEX.md` uses non-linking code spans (`docs/04_DOC_INDEX.md:9-43`).

**Why it matters.** Public GitHub/standard-Markdown readers either see inert text or cannot navigate the cited evidence.

**Suggested fix.** Use standard relative Markdown links in public-facing artifacts. If Obsidian syntax remains an internal authoring format, generate and verify a GitHub-portable public view.

## Nits

- The English v2 note contains the mixed-language heading “Honest open cabos” (`research/e4e5-value-model-v2.md:108`), which reads as unfinished editorial residue. Replace it with “Open issues.”
- `.gitignore` contains the unexplained pattern `./` (`.gitignore:4`), obscuring what the ignore policy is intended to cover. Remove it or document its intended effect.
- The defense index labels its last section singular “Ablation round defense (D041)” but lists D041–D043 (`defenses/README.md:110-116`), understating the final round at the heading level. Rename the heading.

## Prioritized cleanup order

1. Repair or explicitly retire the gross-`S` category/decomposition path; regenerate and assert the faithful-split tables.
2. Rewrite the live roadmap and current E5-SP status/specification; block propagation on a single explicit status field.
3. Add generated root/research/docs manifests and reconcile README, attack/defense, and contradiction counts, including a C037 tombstone.
4. Resolve the E5 naming collision and archive/label historical notes and result formats without breaking provenance.
5. Restructure the paper’s Section 6, notation, finding labels, limitations, and implementation hierarchy; apply EN/ES together.
6. Harden the engine CLI, comments, naming, and shared evaluation functions; extend reference checking to all corpus paths.
7. Move generated sidecars and historical render/output artifacts out of reader-facing current directories.
