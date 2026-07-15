# drafts/chapters/ — the paper, split into chapters

The working paper is authored here as **one file per chapter** (EN + ES) plus a **YAML scope file**,
then reassembled into `drafts/paper.md` / `drafts/paper.es.md`. This improves indexing, lets the
summarization work be distributed across editors chapter-by-chapter, and makes each chapter's scope
explicit. `drafts/paper.md` remains the built artifact of record.

## Files per chapter

- `NN-slug.en.md` — the chapter, English (authoritative).
- `NN-slug.es.md` — the chapter, Spanish mirror (keep in parity).
- `NN-slug.yaml` — shared scope metadata: `scope_in` / `scope_out` (what belongs here and what does
  not), `target_reduction`, `summarize`, `status`, and `notes` (chapter-specific v1.15 instructions).

`manifest.json` fixes the chapter order used to reassemble.

## Tools

```bash
node drafts/chapters/split.mjs          # (re)derive chapters FROM drafts/paper.md + .es.md  [overwrites chapter files]
node drafts/chapters/build.mjs --check  # verify the chapters reassemble to the current papers, byte-for-byte
node drafts/chapters/build.mjs          # write drafts/paper.md + .es.md FROM the chapters
node drafts/chapters/build.mjs --out=DIR# dry-run the assembly into DIR instead
```

Round-trip is guaranteed: chapters are verbatim slices at the title and each `## ` heading, so an
unedited `split` → `build` reproduces the papers exactly (`--check` proves it).

## Editing workflow

1. Edit `NN-slug.en.md` (then mirror into `.es.md`), staying inside that chapter's `scope_*`.
2. `node drafts/chapters/build.mjs` to regenerate the papers; commit both the chapters and the built
   paper together.
3. Never hand-edit `drafts/paper.md` directly once chapters exist — edit the chapter, then rebuild.
