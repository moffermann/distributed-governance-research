# Consistency and Contradictions Audit

Date: 2026-07-10

The current E5-SP engine reproducibly yields approximately 2.1x over the declared operating band, but the corpus does not support propagating that result as calibrated. The model matches the 35% net-negative anchor in the candidate-project universe, while the corpus explicitly says the anchor applies to the central funded/implemented portfolio; that portfolio is only 22-26% net-negative in the stated band. Current notes also misreport the central's oracle share, mix exploration and held-out outputs, and leave the live roadmap in the superseded 2.8x era. Separately, the paper deposit's machine-readable CC BY 4.0 license contradicts the manuscript's CC BY-NC-ND 4.0 license.

## Ground truth reproduced

The canonical read-only run

```text
node scripts/simulation/e5-sp-model.mjs --concentrate=1 --byValue=1
```

returned 1.91x at corr(S,P)=0.25 and 2.36x at corr(S,P)=0.10. The held-out run with `--seedBase=5000` returned 1.93x at corr=0.26 and 2.29x at corr=0.13, matching the main frontier in `research/e5-sp-preregistration.md:93-108`. Delivery printed 0.75/0.975 = 1.30x, consistent with the current defaults at `scripts/simulation/e5-sp-model.mjs:50-54`. The `--w=1` held-out run returned 97% of oracle and 1.30x in every row, confirming that harm-blindness is nearly inert under the faithful split.

The reproducible current numerical statement is therefore approximately 2.1x, band approximately 1.9-2.4x over corr(S,P) in [0.1,0.3], with selection approximately 1.5-1.8x times delivery 1.30x (`research/e5-sp-preregistration.md:106-108`; `research/e5-sp-paper-propagation.md:3-14`). Reproducibility does not cure the calibration contradiction in Critical finding 1.

## Critical findings

### C1. The model misses its own implemented-project calibration target

The empirical anchor is explicitly an implemented-project share: "the probability that an implemented public project produces positive net social value" is 0.65 (`drafts/positive-net-social-value-calibration.md:5-11,278-280`). The live roadmap correctly translates that into an output target: calibrate the model so the central's "funded portfolio is ~65% net-positive" (`docs/03_ROADMAP.md:41-44`). The preregistration likewise calls `cen netNeg%` the central realized-portfolio "Doc-1 validation target" (`research/e5-sp-preregistration.md:88-91`).

The held-out table fails that target. At the declared realistic band it reports central net-negative shares of 22.1% and 25.8%, and even its lowest-correlation row reaches only 29.7% (`research/e5-sp-preregistration.md:98-100`). The engine instead sets 35.9% below the hurdle across the candidate universe (`research/e5-sp-preregistration.md:86-89`) and then claims that universe total "matches Pohl-Mihaljek" (`research/e4e5-value-model-v2.md:133-138`). Those are different populations.

Correct current output: approximately 22-26% of the central funded portfolio is net-negative, or approximately 74-78% net-positive, over the shown realistic rows. Correct calibration target under the corpus's stated interpretation: approximately 35% central funded/implemented net-negative, or 65% positive. The headline after satisfying that target is **unverified**; the current 2.1x must not be described as empirically calibrated to p_U+=0.65 until this mismatch is resolved.

### C2. The deposited paper's machine-readable license contradicts its file license

The paper headers specify CC BY-NC-ND 4.0 (`drafts/paper.md:5`; `drafts/paper.es.md:7`), and the repository license says the manuscript may not be modified or used commercially (`LICENSE.md:13-17`). In contrast, `CITATION.cff:11` declares `CC-BY-4.0` and `.zenodo.json:11` declares `cc-by-4.0`; their prose caveats (`CITATION.cff:12`; `.zenodo.json:23`) do not remove the machine-readable conflict.

A read-only query to `https://zenodo.org/api/records/21252911` returned four files, all manuscript artifacts (EN/ES PDF and HTML), with license `cc-by-4.0`. The deposit therefore declares a more permissive license for the exact artifacts whose headers prohibit commercial use and derivatives.

Correct value for the paper-only deposit: CC BY-NC-ND 4.0, unless the author deliberately relicenses the manuscript. If the record is intended to cover mixed-license repository content, it needs separated records or per-artifact licensing rather than a single contradictory license.

## Major findings

### M1. The held-out block mixes seed bases and contains non-reproducible decomposition values

The preregistration says the held-out confirmation uses seed base 5000 and lists `--cats`, `--w=1`, and `--tornado` as additions to that run (`research/e5-sp-preregistration.md:86-89`). The main frontier and `--w=1` reproduce. The macro/allocation columns and tornado paragraph do not.

With the stated held-out command plus `--cats`, the read-only run returned, for rho 0.2, macro 0.79x and allocation 2.00x; the table reports 0.81x and 1.94x (`research/e5-sp-preregistration.md:99`). At rho 0.0 the run returned 0.75x and 2.65x; the table reports 0.76x and 2.53x (`:100`). With `--seedBase=5000 --tornado`, baseline was 2.12x; the note reports 2.08x (`:124-130`). The reported tornado numbers reproduce only when seed base is omitted, which invokes exploration seed 1000 (`scripts/simulation/e5-sp-model.mjs:27`).

Correct action: either label the macro/tornado results as exploration-seed diagnostics and separate them from the held-out block, or replace them with the actual seed-5000 outputs. The main 2.1x frontier remains reproducible, but the claim that the whole displayed block is held out is false.

### M2. Two current source notes give the wrong central %-oracle range

The v2 design note says the central delivers 66-77% of oracle at realistic correlation (`research/e4e5-value-model-v2.md:148-150`); the paper propagation plan repeats that range (`research/e5-sp-paper-propagation.md:53-60`). Their declared realistic band is corr(S,P) in [0.1,0.3], mapped to rho approximately 0.2-0.4 (`research/e5-sp-preregistration.md:106-108`). The held-out table gives 55% at corr 0.13 and 65% at corr 0.26 (`:98-99`).

Correct value: approximately 55-65% of oracle in the declared band. The stated 66-77% range corresponds roughly to corr 0.26-0.41, outside much of that band. This also weakens the notes' "best-vs-mediocre" characterization at the operating point.

### M3. The live roadmap is still in the superseded 2.8x era and contradicts itself

The live roadmap calls the opportunity-cost hurdle future work, calls approximately 2.8x current, predicts the result will remain approximately 2.8x, and calls harm-blindness a smaller co-mechanism (`docs/03_ROADMAP.md:38-46`). It then says the propagation note contains approximately 2.8x (`:48-51`). The same file later says the v2 correction is built and reconciled (`:82`).

Correct state: the hurdle is implemented; the current reproducible headline is approximately 2.1x with a 1.9-2.4x band; harm-blindness is near-inert; agenda capture is the sole modeled selection driver (`research/e5-sp-preregistration.md:86-122`). The roadmap's item 2 should be complete, not future work.

### M4. The current v2 design note is half-consolidated and self-contradictory

Unqualified front matter says "Not yet implemented" (`research/e4e5-value-model-v2.md:3-8`), while the same file names the implemented engine and canonical defaults (`:153-155`). Parts 1 and 8 say approximately 95% are net-positive and fewer than 1% net-negative (`:19-32,118-121`), and Part 6 says harm-blindness "REVIVED as a co-mechanism" (`:98-105`). The latest block instead says approximately 8% true harm plus approximately 28% additional below-hurdle projects and calls harm-blindness "NEARLY INERT," with the entire selection advantage assigned to agenda capture (`:127-150`).

The banner above the old build section is itself stale: it says the replacement state is approximately 2.8x and harm-blindness revives (`:185-191`), rather than pointing to the faithful-split block. The `Next` section still calls preregistration open (`:246-253`). Correct controlling state is `research/e4e5-value-model-v2.md:127-155`; the rest needs either consolidation or explicit local historical labels.

### M5. The analytical-backbone correction banner is calibrated to a retracted era

The banner says the real world has fewer than 1% net-negative projects and that a harm-blind central delivers approximately 99% of oracle (`research/e4-analytical-backbone.md:3-8`). Current faithful results are approximately 8% true harm, 35.9% total below hurdle, and 97% of oracle/1.30x under `w=1` (`research/e5-sp-preregistration.md:86-100,115-118`).

Correct banner: true harm is rare at approximately 8%, not fewer than 1% total net-negative; `w=1` gives approximately 97% of oracle and the 1.30x delivery floor. Its "pre-registered 7/7" wording at line 5 is also inaccurate; see Minor finding 1.

### M6. The prior audit presents obsolete status as current

`research/audit-2026-07-10.md:3-8` says the hurdle remains deferred. It says the faithful split still "needs the hurdle" and that approximately 3x is robust (`:42-44`), and describes the pending paper pass as approximately 2.2x to approximately 3.0x (`:89-91`). The file is not archive-bannered.

Correct state: hurdle implemented; approximately 2.1x current; paper propagation is approximately 2.2x in the old apparatus to approximately 2.1x in E5-SP. The earlier audit findings at `:18-40` are valid history of the 3.0x-to-2.8x correction, but its execution-status and remaining-work statements are stale.

### M7. Paper versus research is an intended staged gap, but it is now an unresolved public contradiction

The authoritative paper still uses harm-blindness and the beta < 1-eta frontier as the primary selection mechanism (`drafts/paper.md:33-43,743-758,796-807`) and retains eta in the calibration table (`:1339-1343`). Its headline remains approximately 2.2x (`:67-72`). The current research plan says agenda capture replaces harm-blindness as the selection mechanism and gives approximately 2.1x, selection approximately 1.5-1.8x times delivery 1.30x (`research/e5-sp-paper-propagation.md:23-35,41-65`).

This is not an accidental one-language edit: the propagation file says "live master NOT edited" (`research/e5-sp-paper-propagation.md:1`) and explains the bilingual, author-gated staging (`:16-21`). However, the same file records the author's decision to propagate (`:92-95`) and requires EN and ES to move together (`:107-109`). Until applied, the authoritative public paper contradicts the engine the corpus calls current.

The paper also treats `research/e4-analytical-backbone.md` as its primary mechanism source (`drafts/paper.md:753,797`), although that note demotes itself to a rare special case (`research/e4-analytical-backbone.md:3-15`). Its appendix cites `research/e4-calibration-targets.md` as operative (`drafts/paper.md:1329-1344`), while that note labels its eta framing historical (`research/e4-calibration-targets.md:3-5`). These are semantic stale references even though the paths resolve.

The original E5/E7/E8 magnitudes are not arithmetic errors. The paper explicitly attributes 2.19x, 2.22x, 2.26x, +43%, and +53-54% to that distinct ABM apparatus (`drafts/paper.md:593-595,878-890,957-961`; Spanish mirror `drafts/paper.es.md:645-648,948-960,1033-1036`). They become misleading only when presented as the current E5-SP mechanism.

### M8. The paper contradicts itself on whether selection and delivery multiply

The abstract calls delivery "not a second multiplier" and says allocation and delivery are "not two independent effects to be multiplied" (`drafts/paper.md:58-65`). Finding 5 says the +53-54% selection and +43% delivery layers have a positive interaction, "multiply," and yield 2.19x (`:878-890`). Spanish mirrors the same contradiction (`drafts/paper.es.md:64-72,948-960`).

Correct current v2 framing is explicitly two layers, selection times delivery (`research/e5-sp-paper-propagation.md:41-51,62-65`). If the paper means only that the engineering safeguards are causally shared, it must say that without denying the multiplicative estimand it later reports.

### M9. README and deposited metadata give false version/deposit status

`README.md:31` says v1.8 is the latest deposited version and that a new-version deposit is paused; `README.md:37` calls DOI 10.5281/zenodo.21228492 the last deposit. `CITATION.cff:20-21` instead identifies v1.12 as DOI 10.5281/zenodo.21252911.

Read-only Zenodo API checks confirmed that record 21252911 is version 1.12, published 2026-07-07, and that concept DOI 21193846 resolves to it. Correct deposited version DOI: v1.12, 10.5281/zenodo.21252911. The live record title still says "Working Paper v1.8" even though its version field is 1.12; local `.zenodo.json:2,12` has the corrected v1.12 title/version, so the local correction was not propagated to the deposit.

Other unmarked version drift follows from this error. `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:9` calls the linked current manuscript "published as v1.7"; `LICENSE.md:47-51` gives only the v1.8 citation. Both should point to v1.12/21252911 if they intend the current version.

### M10. Public metadata and both papers stop the adversarial record at 40 attacks/four rounds

README ends the map at `docs/109`, A040, and D040 (`README.md:15,18-19`) and says "forty attack briefs across four rounds" (`:31`). `.zenodo.json:5` repeats forty/four and says all were propagated. The correct record is 43 paired attacks/defenses through `docs/113`, including the ablation round A041-A043 (`attacks/README.md:11,100-108`; `defenses/README.md:110-116`). Counting the headings in `attacks/README.md:56,79,88,100` plus the first round gives five rounds.

The same stale record appears at every following paper location:

- English: `drafts/paper.md:79,129,193,1002,1040,1316,1439`.
- Spanish: `drafts/paper.es.md:87,139,210,1077,1115,1393,1516`.

The paper propagation plan already identifies this defect (`research/e5-sp-paper-propagation.md:80-88`), so the bilingual paper gap is known and intentionally deferred. README and `.zenodo.json` are unmarked stale public metadata, not staged prose.

## Minor findings

### m1. "Pre-registered 7/7" is not an honest current label

`research/e4-analytical-backbone.md:5` and `research/e5-sp-paper-propagation.md:17` say "pre-registered 7/7." The latest preregistration records P1 as reworded, P3 as corrected, and says so in its verdict (`research/e5-sp-preregistration.md:102-108,120-122`).

Correct wording: faithful-split held-out rerun with P1 reworded and P3 corrected, not seven unchanged preregistered predictions passing.

### m2. The current engine header still describes the old metric and delivery ratio

The engine header says "All scored on delivered TRUE S" and gives delivery as 1.43x (`scripts/simulation/e5-sp-model.mjs:15-18`). The implemented metric is net value and the delivery ratio is approximately 1.30x (`:43-46,50-54`). Runtime output is correct; the stale comment is not.

### m3. Same-version release dates conflict

`CITATION.cff:8` gives `date-released: 2026-07-10`, while Zenodo record 21252911 gives publication date 2026-07-07. Because `CITATION.cff:20-21` attaches the citation to that exact version DOI, the supported deposit date is 2026-07-07 unless `date-released` is explicitly defined as a later repository-state date.

### m4. A broken code-formatted paper path escapes the anchor checker

Both papers cite nonexistent `research/e4-v4-symmetric-frontier.md` (`drafts/paper.md:743-748`; `drafts/paper.es.md:804-809`). The existing artifacts are `scripts/simulation/e4-v4-symmetric-frontier.mjs` and `research/e4-v4-symmetric-frontier-results.txt`; `research/e4-v5-capture-design.md:3-6` also identifies the script basename.

This matters because the official anchor check still passes: it does not validate this code-formatted path.

## Mechanism-era map

| Era | Headline and mechanism | Scope/status |
|---|---|---|
| Original E4/E5/E7/E8 | Approximately 2.2x; harm-blindness beta*=1-eta; +53-54% selection and +43% delivery | Still in the paper; distinct ABM apparatus; staged for replacement |
| Pre-correction E5-SP | Approximately 2.0x; fewer than 1% net-negative; harm-blindness inert; best-vs-mediocre | Explicitly superseded by `research/e5-sp-preregistration.md:3-20` |
| Intermediate E5-SP | Approximately 2.8x; all 35% modeled as true harm; harm-blindness revives; value-destroying central | Explicitly superseded at `research/e4e5-value-model-v2.md:157-183` and `research/e5-sp-preregistration.md:24-30`; leaked into live files listed above |
| Faithful-split E5-SP | Approximately 2.1x; 8% true harm plus 28% additional below opportunity cost; harm-blindness near-inert; agenda capture sole selection driver | Current numerical engine/note state, but Critical finding 1 leaves its claimed empirical calibration unverified |

The apparent "harm-blindness inert -> revives -> inert again" sequence is coherent only when read as this chronology. It becomes contradictory where intermediate or pre-correction claims remain unmarked in current-status text: `docs/03_ROADMAP.md:38-51`, `research/audit-2026-07-10.md:3-8,42-44,89-91`, `research/e4e5-value-model-v2.md:3-8,19-32,98-105,118-121,185-191`, and `research/e4-analytical-backbone.md:3-8`.

The "best-vs-mediocre -> best-vs-value-destroying -> graded" sequence is similarly era-scoped in the latest preregistration (`research/e5-sp-preregistration.md:111-118`). The current prose is still numerically wrong where it attaches 66-77% oracle to the realistic band; the correct table range is 55-65% (Major finding 2).

## Number-drift classification

### Correct-current

- Approximately 2.1x, band approximately 1.9-2.4x; selection approximately 1.5-1.8x times delivery 1.30x: `research/e5-sp-preregistration.md:3-18,106-108` and `research/e5-sp-paper-propagation.md:3-14,41-65`.
- Approximately 8% true harm plus approximately 28% additional S>0-but-net<0; approximately 35.9% total below hurdle: `research/e5-sp-preregistration.md:3-11,86-100`.
- Harm-blindness near-inert at 97% oracle/1.30x: `research/e5-sp-preregistration.md:115-118`.
- Macro factor no greater than 1 remains directionally reproduced, although the displayed held-out macro values are not reproducible as labeled: `research/e5-sp-preregistration.md:109-110` and Major finding 1.

### Correctly marked superseded or apparatus-specific

- Every approximately 2.8x occurrence in the top/current preregistration and propagation blocks is explicitly labeled intermediate/superseded (`research/e5-sp-preregistration.md:3-30`; `research/e5-sp-paper-propagation.md:3-14,96-100`).
- The intermediate approximately 2.8x/harm-revival block is explicitly superseded in its heading (`research/e4e5-value-model-v2.md:157-183`).
- `docs/03_ROADMAP_HISTORY.md:1-6` banners its 2.09x, 1.83x, 2.2x, and 2.8x material as history.
- Legacy E4/E5 notes containing 2.09x, 1.83x, 2.0x, and 1.43x carry standardized historical banners; examples are `research/e4e5-analytical-propositions.md:3-6,116-134` and `research/e4-calibration-targets.md:3-6`.
- The paper's 2.19x/2.22x/2.26x, +43%, +53-54%, and 46-68%-oracle figures belong to the original ABM and are mirrored factually; they are not E5-SP outputs (`drafts/paper.md:593-595,851-852,878-890,957-961,1341-1342`).

### Stale or contradictory and unmarked

All identified instances are enumerated in Critical findings 1-2, Major findings 1-10, and Minor findings 1-4. No unmarked current 2.09x or 1.83x headline claim was found outside archive-bannered/historical material. Unbannered raw result files remain valid outputs of their named older apparatus; they were not treated as current headline claims.

## English-Spanish mirror

No numeric or factual mirror-only divergence was found. A token-sequence comparison found 569 English numeric tokens and 568 Spanish numeric tokens; the differences were formatting or translation equivalents, not changed claims: `10,000` versus `10.000` (`drafts/paper.md:178,579`; `drafts/paper.es.md:193,630`), prose "twofold/fivefold" versus numeric translation (`drafts/paper.md:640-641`; `drafts/paper.es.md:697`), the Spanish translation banner (`drafts/paper.es.md:5`), and a wikilink versus plain `docs/113` reference (`drafts/paper.md:1262`; `drafts/paper.es.md:1339`).

The mirrors are synchronized in their stale mechanism, multiplier, attack-count, and round-count claims. That is consistency between languages, not consistency with the current research state.

## Metadata summary

Local version strings are otherwise aligned at v1.12 (`drafts/paper.md:3`; `drafts/paper.es.md:3-5`; `CITATION.cff:7,20`; `.zenodo.json:2,12`). The concept DOI 10.5281/zenodo.21193846 and author Mauricio Offermann are consistent across the paper, CFF, README, and Zenodo metadata (`drafts/paper.md:5`; `CITATION.cff:4-10`; `.zenodo.json:6-9`; `README.md:37`). The material contradictions are the deposit-status, live-title, release-date, attack-count, and license findings above.

## Cross-reference check

`node scripts/check-anchors.mjs` exited 0:

```text
anchors: broken=0 drifted=0 fixed=0 (report mode; use --fix to apply)
corpus:  dead-paths=0 dead-wikilinks=0
```

This does not establish semantic currency. The paper points to historical mechanism notes as current (Major finding 7), and the nonexistent code-formatted E4-v4 path is not covered by the checker (Minor finding 4).
