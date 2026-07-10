# Distributed Governance Research

Research project for developing a functional architecture of distributed governance.

The objective of this repository is not to defend a conclusion, but to build a theory through recursive critique: ideas become hypotheses, hypotheses are attacked, surviving hypotheses are refined, and only then are they promoted into the knowledge base.

## Working principle

> The goal is not to prove that an idea is correct. The goal is to try to destroy it systematically. If it survives, it may deserve to become theory.

## Repository map

```text
docs/                 Architecture corpus: method, blueprint, citizen flows, diagrams,
                      and the accepted resolution documents (docs/39-109)
knowledge/            Hypotheses (H001-H059), principles (P001-P007), concepts,
                      open questions, and the canonical index (_index.md)
attacks/              Adversarial attack briefs A001-A040 (all resolved)
defenses/             Paired defense briefs D001-D040
contradictions/       Consistency-audit record (C026-C045, all resolved)
drafts/               The working paper (drafts/paper.md, English authoritative;
                      Spanish translation paper.es.md), the essay edition, and the plain-language explainer
research/             Formal models, simulation results and design, literature map
external-review/      Reviewer packets by profile, English and Spanish
scripts/              Reference checker, Obsidian converter, PDF renderer, and the
                      reproducible allocation simulation
```

## Current status

Working paper v1.12 (draft; latest deposited version v1.8, DOIs below — new-version deposit paused) with formal mechanism-design propositions and a reproducible 10,000-agent simulation — eight experiments, six pre-registered, the seventh recalibrating the headline against a status-quo baseline built from published audit-institution findings across nine jurisdictions and the eighth confirming it under behaviorally generated participation — and a complete adversarial record: forty attack briefs across four rounds, the last five from a five-profile review of the published manuscript itself, each with a paired defense and an accepted resolution propagated through the corpus. Current phase: post-manuscript validation — external expert review using the prepared packets, simulation calibration against participatory-budgeting data, and a bounded tutored pilot. The project's origin distillation is preserved in `knowledge/00_SESSION_2026-06-25_DISTILLATION.md`.

The satellite computational-experiments program (adversarial architecture ABM, behavioral adoption ABM, planning-vector construction, LLM behavioral calibration — conceived as a second paper) lives in its own repository with full history: [moffermann/distributed-governance-experiments](https://github.com/moffermann/distributed-governance-experiments). It was extracted from this repository's `experiments/` workspace on 2026-07-06; the E8 bridge inputs it generates are committed here as `research/e8-behavioral-inputs.json`.

## License and citation

Archived and citable: DOI [10.5281/zenodo.21228492](https://doi.org/10.5281/zenodo.21228492) (v1.8, last deposited version) · [10.5281/zenodo.21193846](https://doi.org/10.5281/zenodo.21193846) (concept DOI — always resolves to the latest deposited version).

Dual-licensed: research corpus CC BY 4.0; manuscript, publishable model, and reviewer packets CC BY-NC-ND 4.0 (pending venue selection); code MIT. See `LICENSE.md`. To cite this work, see `CITATION.cff`.
