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

Working paper v1.14 (latest deposited version, DOI 10.5281/zenodo.21311851) with formal mechanism-design propositions and a reproducible 10,000-agent simulation. In the model's declared reference scenario — with the central selector modelled as the evidence describes it, near-blind to diffuse harm on the low-visibility long tail — coverage-routed distributed selection recovers about 98% of the model's full-information reference against a central's ~44% (a 54-point conditional contrast). These are directional, conditional contrasts of a stylized comparative-institutions model — not calibrated real-world effects, and not a validated implementation; the earlier compound value-per-budget multiplier is retired as a calibrated effect. The controlling specification is `research/claim-and-estimand-contract.md`. A complete adversarial record: forty-three attack briefs across five rounds (including a five-profile review of the manuscript itself and a final ablation round), each with a paired defense and an accepted resolution — propagated through the corpus, except the manuscript-review round's D037–D040, whose propagation is tracked. Current phase: post-manuscript consolidation (publication-readiness remediation; see `audits/2026-07-10/remediation-roadmap.md`). The project's origin distillation is preserved in `knowledge/00_SESSION_2026-06-25_DISTILLATION.md`.

The satellite computational-experiments program (adversarial architecture ABM, behavioral adoption ABM, planning-vector construction, LLM behavioral calibration — conceived as a second paper) lives in its own repository with full history: [moffermann/distributed-governance-experiments](https://github.com/moffermann/distributed-governance-experiments). It was extracted from this repository's `experiments/` workspace on 2026-07-06; the E8 bridge inputs it generates are committed here as `research/e8-behavioral-inputs.json`.

## License and citation

Archived and citable: DOI [10.5281/zenodo.21311851](https://doi.org/10.5281/zenodo.21311851) (v1.14, latest deposited version, verified live 2026-07-14) · [10.5281/zenodo.21193846](https://doi.org/10.5281/zenodo.21193846) (concept DOI — always resolves to the latest deposited version). Licensed CC BY 4.0 (all text + research content, including the manuscript) / MIT (code); attribution required.

Licensed **CC BY 4.0** for all text and research content (including the working paper, publishable model, and reviewer packets) and **MIT** for code. CC BY attribution is required for the text; the MIT notice must be retained for the code. See `LICENSE.md`. To cite this work, see `CITATION.cff`.
