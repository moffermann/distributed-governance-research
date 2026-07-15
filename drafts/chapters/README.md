# drafts/chapters/ — the paper, split into chapters

The working paper is authored here as **one file per chapter** (EN + ES) plus a **YAML scope file**,
then reassembled into `drafts/paper.md` / `drafts/paper.es.md`. This improves indexing, lets the
summarization work be distributed across editors chapter-by-chapter, and makes each chapter's scope
explicit. `drafts/paper.md` remains the built artifact of record.

## Files per chapter

- `NN-slug.en.md` / `NN-slug.es.md` — the **working** chapter (edit these in place; EN authoritative,
  ES mirror in parity).
- `originals/NN-slug.en.md` / `.es.md` — the **frozen** pristine chapter (never edit; the safety
  reference and the round-trip check).
- `NN-slug.yaml` — scope metadata:
  - `status` — **`summary`** (needs summarizing) or **`ready`** (approved — editors leave it alone).
  - `max_words` — hard length cap · `en_words_original` — starting length.
  - `must_preserve` — items that must survive the summarization.
  - `observations` — **author feedback**, passed to Codex on the next pass (overrides defaults).
  - `scope_in` / `scope_out` / `target_reduction` / `notes` — scope + v1.15 instructions.

`manifest.json` fixes the chapter order used to reassemble.

## Tools

```bash
node drafts/chapters/split.mjs          # init: freeze originals/ + manifest; create working md+yaml IF MISSING (never clobbers edits)
node drafts/chapters/split.mjs --reset  # also overwrite working md+yaml from pristine (discards edits)
node drafts/chapters/build.mjs --check  # verify the FROZEN originals/ reassemble to the papers, byte-for-byte
node drafts/chapters/build.mjs          # write drafts/paper.md + .es.md FROM the WORKING chapters
node drafts/chapters/build.mjs --out=DIR# dry-run the working assembly into DIR instead
```

Round-trip is guaranteed on the frozen `originals/`: they are verbatim slices at the title and each
`## ` heading, so they reassemble to the papers exactly (`--check` proves it). A trailing
`EDITOR-NOTE:` / `NOTA DEL EDITOR:` line in a working chapter is stripped on build.

## Editing workflow

1. Editors (Codex, see `EDITOR-BRIEF.md`) rewrite `NN-slug.en.md` in place, honoring the chapter's
   `.yaml` (`max_words`, `must_preserve`, `observations`), only for chapters with `status: summary`.
2. Mirror the change into `NN-slug.es.md` (parity).
3. `node drafts/chapters/build.mjs` regenerates the papers; commit chapters + built paper together.
4. Never hand-edit `drafts/paper.md` directly — edit the chapter, then rebuild. `originals/` stays
   frozen as the reference.
