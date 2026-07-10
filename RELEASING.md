# Release flow (papers → GitHub release → Zenodo)

Codified 2026-07-07 after the v1.9 cycle, to keep DOIs from going stale inside deposited PDFs.

## The DOI rule

- **Paper headers cite the concept DOI** (`10.5281/zenodo.21193846`): it never changes and always resolves
  to the latest deposited version, so a PDF header can never be stale again. (Single record — the whole
  deposit, corpus + manuscript + code, is CC BY 4.0 / MIT.)
- **Version DOIs** live where they are knowable: CITATION.cff, the GitHub release notes, and the Zenodo record.
- If an exact version DOI inside the PDF is ever wanted, use **pre-reservation**: create the Zenodo new-version *draft first*, read its pre-reserved DOI (`metadata.prereserve_doi`), render the PDFs citing it, upload, then publish. Order: draft → render → upload → publish.

## The version-string rule (anti-recurrence guard for C026)

Whenever the **draft** version changes (the `drafts/paper.md` header), **immediately** sync the version *strings* in `CITATION.cff` (`version`), `.zenodo.json` (`version` + title suffix), and `README.md` — even between deposits, with Zenodo paused. The metadata version string must never lag the draft. (DOIs are separate: headers cite the concept DOI; version DOIs are only swept on an actual deposit.) This drift recurred at v1.8→v1.12 (2026-07-10) exactly because the draft moved without a deposit.

## License note (author decision, 2026-07-10)

The whole deposit is **CC BY 4.0** for all text and research content (corpus + manuscript) and **MIT** for
code — a single record, one concept-DOI lineage (`10.5281/zenodo.21193846`; latest version
`10.5281/zenodo.21252911` = v1.12). Attribution is required for everything. (An earlier plan to protect the
manuscript under CC BY-NC-ND with a separate record was dropped: the code/corpus are already public, so a
protected manuscript would not have protected the implementation, and the author chose full openness.)

## The cycle

1. Edit `drafts/paper.md` and mirror in `drafts/paper.es.md` (English is authoritative).
2. `npm run check-anchors` clean.
3. Render four outputs with `scripts/md-to-pdf.mjs` (`--lang en|es`, `--toc`, `--html` for the screen-reader edition); rasterize a few pages (PyMuPDF) and inspect them before shipping.
4. Commit, tag `vX.Y`, `gh release create` with the four renders attached.
5. Zenodo new version on the deposition in `_backups/zenodo-depid.txt` (token in `_backups/zenodo-token.txt`, never displayed): new-version draft → replace files (corpus + manuscript renders + code) → bump `version`/`publication_date` → publish → update the depid file.
6. Sweep the *version* DOI across CITATION.cff/README notes (headers stay on the concept DOI).
