# Distributed Governance Research

Research project for developing a functional architecture of distributed governance.

The objective of this repository is not to defend a conclusion, but to build a theory through recursive critique: ideas become hypotheses, hypotheses are attacked, surviving hypotheses are refined, and only then are they promoted into the knowledge base.

## Working principle

> The goal is not to prove that an idea is correct. The goal is to try to destroy it systematically. If it survives, it may deserve to become theory.

## Repository map

```text
docs/                 Architecture corpus: method, blueprint, citizen flows, diagrams,
                      and the accepted resolution documents (docs/39-113)
knowledge/            Hypotheses (H001-H059), principles (P001-P007), concepts,
                      open questions, and the canonical index (_index.md)
attacks/              Adversarial attack briefs A001-A043 (all resolved)
defenses/             Paired defense briefs D001-D043
contradictions/       Consistency-audit record (C026-C045, all resolved)
drafts/               The working paper (drafts/paper.md, English authoritative;
                      Spanish translation drafts/paper.es.md)
research/             Formal models, simulation results and design, literature map
external-review/      Reviewer packets by profile, English and Spanish
scripts/              Reference checker, Obsidian converter, PDF renderer, and the
                      reproducible allocation simulation
```

## Current status

Working paper v1.14 (working draft; latest deposited version v1.12, DOI 10.5281/zenodo.21252911) with formal mechanism-design propositions and a reproducible 10,000-agent simulation of eight experiments (six with pre-registered designs — the one genuinely *confirmatory* pre-registered test is the later symmetry gate below). NOTE (2026-07-14): a later pre-registered, selection-only symmetric stress test — comparing coverage against a **competent, harm-aware central value reader** at delivery parity — returned NO-GO and **retires the earlier compound value-per-budget multiplier as a calibrated effect**. This is a scoped calibration decision under that comparator, **not** a verdict on the architecture: the distributed contrast was positive in all 18 primary cells but the pooled median ~0.025 did not clear the pre-set 0.05 research-program rebuild bar (not a policy-materiality threshold; a post-hoc ratio-of-sums estimate was ~0.026 [0.023, 0.029]). The four-scenario robustness map is exploratory. The earlier agent-based figures are kept only as conditional apparatus outputs. The controlling specification is `research/claim-and-estimand-contract.md`. A complete adversarial record: forty-three attack briefs across five rounds (including a five-profile review of the manuscript itself and a final ablation round), each with a paired defense and an accepted resolution — propagated through the corpus, except the manuscript-review round's D037–D040, whose propagation is tracked. Current phase: post-manuscript consolidation (publication-readiness remediation; see `audits/2026-07-10/remediation-roadmap.md`). The project's origin distillation is preserved in `knowledge/00_SESSION_2026-06-25_DISTILLATION.md`.

The satellite computational-experiments program (adversarial architecture ABM, behavioral adoption ABM, planning-vector construction, LLM behavioral calibration — conceived as a second paper) lives in its own repository with full history: [moffermann/distributed-governance-experiments](https://github.com/moffermann/distributed-governance-experiments). It was extracted from this repository's `experiments/` workspace on 2026-07-06; the E8 bridge inputs it generates are committed here as `research/e8-behavioral-inputs.json`.

## License and citation

Archived and citable: DOI [10.5281/zenodo.21252911](https://doi.org/10.5281/zenodo.21252911) (v1.12, latest deposited version, verified live 2026-07-10) · [10.5281/zenodo.21193846](https://doi.org/10.5281/zenodo.21193846) (concept DOI — always resolves to the latest deposited version). Licensed CC BY 4.0 (all text + research content, including the manuscript) / MIT (code); attribution required. (The live v1.12 record's title string still reads "v1.8"; this can be edited directly in the Zenodo record metadata at any time without a new version/DOI — pending author.)

Licensed **CC BY 4.0** for all text and research content (including the working paper, publishable model, and reviewer packets) and **MIT** for code. CC BY attribution is required for the text; the MIT notice must be retained for the code. See `LICENSE.md`. To cite this work, see `CITATION.cff`.
