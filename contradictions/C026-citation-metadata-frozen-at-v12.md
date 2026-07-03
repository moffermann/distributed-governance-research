# C026 - Citation Metadata Frozen at v1.2 While the Manuscript Is v1.4

## Status

Open — pending author review.

## Contradiction

Side A — the manuscript's own version:

> **Working paper — v1.4 (July 2026).** (`drafts/paper.md:3`; same in `drafts/paper.es.md:3`)

Side B — every citation-metadata surface still says v1.2:

> `version: "v1.2"` (`CITATION.cff:7`)
> `notes: "Working paper v1.2, drafts/paper.md"` (`CITATION.cff:19`)
> `"title": "...(Working Paper v1.2)"` (`.zenodo.json:2`)
> `"version": "v1.2"` (`.zenodo.json:12`)
> `Offermann, M. (2026). ... Working paper v1.2.` (`LICENSE.md:51`)

## Why they cannot both be true

Anyone citing the work through the GitHub cite button, the Zenodo deposit metadata, or the LICENSE citation line would cite v1.2 — a version whose central simulation framing the author has since corrected (v1.3 E4, v1.4 rescoping). The metadata asserts a version the manuscript no longer is.

## Author-intent side

Side A. The v1.3/v1.4 revisions were ordered by the author; the metadata simply was not bumped alongside them.

## Proposed treatment

Update `CITATION.cff` (version, notes), `.zenodo.json` (title, version), and `LICENSE.md:51` to v1.4 — and add the version bump to the release checklist so the Zenodo deposit (still pending) is created with correct metadata. Mechanical fix; no judgment call.

## Severity

High — external-facing, and directly upstream of the pending DOI deposit.
