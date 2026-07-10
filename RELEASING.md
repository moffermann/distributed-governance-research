# Release flow (papers → GitHub release → Zenodo)

Codified 2026-07-07 after the v1.9 cycle, to keep DOIs from going stale inside deposited PDFs.

## The DOI rule

- **Two concept DOIs (from v1.13, dual records).** `10.5281/zenodo.21193846` is the **corpus/code** record's
  concept DOI. The **manuscript** record gets its **own** concept DOI, which Zenodo **mints at the first
  publish** of that record (you cannot pre-reserve the *concept* DOI — `metadata.prereserve_doi` is the
  *version* DOI). **Paper headers should cite the MANUSCRIPT concept DOI** (stable, resolves to the latest
  manuscript version) — but since it does not exist until the first manuscript deposit, either (a) do a
  throwaway first deposit to learn the concept DOI, then re-render headers and replace the file; or (b) cite
  the pre-reserved first *version* DOI in the header. Until then the header states the DOI is pending
  (current state). Do NOT put 21193846 in the paper header as if it were the manuscript's DOI.
- **Version DOIs** live where they are knowable: CITATION.cff, the GitHub release notes, and each Zenodo record.
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
5. **Zenodo — TWO records (from v1.13).**
   a. **Corpus/code record** (existing lineage, depid in `_backups/zenodo-depid.txt`, `.zenodo.json` metadata,
      CC BY 4.0): new-version draft → replace files (corpus + code only, **no manuscript**) → bump
      `version`/`publication_date` → publish → update the depid file.
   b. **Manuscript record** (`drafts/paper.zenodo.json` metadata, CC BY-NC-ND 4.0): the first publish MINTS
      this record's own **concept DOI** (stable thereafter). To cite a DOI in the header on this very first
      version, either pre-reserve the first **version** DOI (`metadata.prereserve_doi`) and render with it,
      or do a throwaway first publish to read the concept DOI and then re-render + replace. Upload EN+ES
      manuscript renders (and, if desired, docs/101 + essay/explainer + reviewer packets) → publish. Record
      its depid in a second backup file (e.g. `_backups/zenodo-depid-manuscript.txt`).
6. Sweep the *version* DOIs: corpus version DOI → CITATION.cff/README/.zenodo notes; **manuscript** concept +
   version DOI → the paper headers (EN+ES), CITATION.cff `preferred-citation`, LICENSE.md citation, README.
