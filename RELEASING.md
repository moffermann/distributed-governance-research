# Release flow (papers → GitHub release → Zenodo)

Codified 2026-07-07 after the v1.9 cycle, to keep DOIs from going stale inside deposited PDFs.

## The DOI rule

- **Paper headers cite the concept DOI** (10.5281/zenodo.21193846 for the working paper): it never changes and always resolves to the latest deposited version, so a PDF header can never be stale again.
- **Version DOIs** live where they are knowable: CITATION.cff, the GitHub release notes, and the Zenodo record itself.
- If an exact version DOI inside the PDF is ever wanted, use **pre-reservation**: create the Zenodo new-version *draft first*, read its pre-reserved DOI (`metadata.prereserve_doi`), render the PDFs citing it, upload, then publish. Order: draft → render → upload → publish.

## The version-string rule (anti-recurrence guard for C026)

Whenever the **draft** version changes (the `drafts/paper.md` header), **immediately** sync the version *strings* in `CITATION.cff` (`version`), `.zenodo.json` (`version` + title suffix), and `README.md` — even between deposits, with Zenodo paused. The metadata version string must never lag the draft. (DOIs are separate: headers cite the concept DOI; version DOIs are only swept on an actual deposit.) This drift recurred at v1.8→v1.12 (2026-07-10) exactly because the draft moved without a deposit.

## Dual-record deposit (from v1.13 — author decision 2026-07-10)

To keep the manuscript's **CC BY-NC-ND 4.0** license from being conflated with the corpus's **CC BY 4.0**,
v1.13 onward uses **two separate Zenodo records**:

1. **Corpus + code record** — metadata `.zenodo.json`, license `cc-by-4.0` (+ MIT for `scripts/`). Files:
   the research corpus (`docs/` except 101, `knowledge/`, `attacks/`, `defenses/`, `research/`) and code.
   Do **not** put the manuscript PDFs here. This is the continuation of the concept-DOI lineage
   (10.5281/zenodo.21193846; latest version 10.5281/zenodo.21252911 = v1.12).
2. **Manuscript record** — metadata `drafts/paper.zenodo.json`, license `cc-by-nc-nd-4.0`. Files: the
   rendered EN+ES manuscript PDFs/HTML (and, if desired, `docs/101`, the essay/explainer, reviewer packets
   — all NC-ND per `LICENSE.md`). This starts a **new concept DOI** at first deposit.

**Irrevocable-grant note:** the v1.12 record (21252911) bundled everything under CC BY 4.0 — a public,
**irrevocable** grant. The NC-ND separation only protects the manuscript **from v1.13 forward**; the v1.12
manuscript copy remains CC-BY.

When the draft version changes, also sync the version string in **`drafts/paper.zenodo.json`** (added to
the anti-recurrence list above).

## The cycle

1. Edit `drafts/paper.md` and mirror in `drafts/paper.es.md` (English is authoritative).
2. `npm run check-anchors` clean.
3. Render four outputs with `scripts/md-to-pdf.mjs` (`--lang en|es`, `--toc`, `--html` for the screen-reader edition); rasterize a few pages (PyMuPDF) and inspect them before shipping.
4. Commit, tag `vX.Y`, `gh release create` with the four renders attached.
5. Zenodo new version on the deposition in `_backups/zenodo-depid.txt` (token in `_backups/zenodo-token.txt`, never displayed): new-version draft → replace files → bump `version`/`publication_date` → publish → update the depid file.
6. Sweep the *version* DOI across CITATION.cff/README notes (headers stay on the concept DOI).
