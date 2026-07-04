# Consistency Audit Contradiction Queue (C026+)

## Purpose

This folder holds open contradictions found by the repository-wide consistency audit ordered after the simulation-framing correction (one-hundred-fifteenth residual cleanup). It continues the C-series: C001-C025 were resolved in `docs/39` through `docs/63` and are preserved as blocks in [[38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST|docs/38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST.md]].

Unlike C001-C025, the entries here are **pending author review**: each file documents one contradiction with both sides quoted verbatim and a proposed treatment, and nothing is changed in the corpus until the author accepts, amends, or rejects the proposal. Where the audit already knows which side reflects author intent, the proposal says so; where both sides are defensible, the entry says that too.

## Audit method

Eight parallel read-only audit passes over disjoint slices, plus a manual sweep: (1) counts, ranges, versions, and status claims; (2) the manuscript against the corpus and its own companions; (3) core architecture docs against resolution rules; (4) the knowledge layer; (5) external-facing documents; (6) citizen flows, diagrams, and lifecycle states; (7) the 35 attack-defense-resolution triads; (8) first-generation C-resolutions against later A-resolutions. Dated history (roadmap cleanup paragraphs, the dated evaluation report) was excluded by rule: history is corrected forward, not rewritten.

## File format

Each `C0NN-slug.md` contains: Status / Contradiction (side A and side B, quoted with file references) / Why they cannot both be true / Which side current author intent supports, if known / Proposed treatment / Severity.

## Index

| ID | Title | Severity | Status |
|---|---|---|---|
| [[C026-citation-metadata-frozen-at-v12\|C026]] | Citation metadata frozen at v1.2 while the manuscript is v1.4 | High | Accepted (116th) |
| [[C027-readme-resolution-range-ends-at-84\|C027]] | Both queue READMEs assert resolutions end at docs/84 | Medium | Accepted (116th) |
| [[C028-queue-intros-assert-pending-review\|C028]] | Second-round queue intros and rows assert present-tense pending review | Medium | Accepted (116th) |
| [[C029-publishable-model-adversarial-record-stale\|C029]] | Publishable model carries a stale adversarial record (33 briefs, docs/67-100, A034/A035 open) | High | Accepted (116th) |
| [[C030-manuscript-two-vs-three-rounds\|C030]] | Manuscript conclusion says two review rounds; its method section says three (EN+ES) | High | Accepted (116th) |
| [[C031-orphan-references\|C031]] | Twenty reference entries are never cited in the manuscript body (EN+ES) | Medium | Accepted (116th) |
| [[C032-knowledge-index-missing-entries\|C032]] | Knowledge index missing H031, H032, H050, and docs/101 | Medium | Accepted (116th) |
| [[C033-h054-missing-a025-a035-joins\|C033]] | H054 never updated though A025 and A035 join its metric set | Medium | Accepted (116th) |
| [[C034-h058-open-mode-lacks-a023-gate\|C034]] | H058 presents open mode without the A023 deployment gate | High | Accepted (116th) |
| [[C035-algorithm-as-coordinator-framing\|C035]] | Algorithm-as-coordinator card vs the qualified allocation framing | Low | Accepted (116th) |
| [[C036-repo-readme-stale-landing\|C036]] | Repository README describes an early-stage project with a partial map | High | Accepted (116th) |
| [[C037-agents-md-stale-phase\|C037]] | OPERATIONS.md declares Phase 1 and pre-manuscript priorities | Medium | Accepted (116th) |
| [[C038-project-recap-stale-phase\|C038]] | Current Project Recap declares Phase 1 despite its title | Low-Medium | Accepted (116th) |
| [[C039-dual-project-state-diagrams\|C039]] | Two project state diagrams define incompatible parent machines, both listed as current | Medium | Accepted (116th) |
| [[C040-expiry-state-drift\|C040]] | Expiry-state drift: undefined "Expired" vs "Expired Unfunded" across enumerations | Low | Accepted (116th) |
| [[C041-citizen-language-rule-violated\|C041]] | C009's citizen-language rule violated by the citizen-facing status maps | Medium | Accepted (116th) |
| [[C042-voter-role-in-early-entity-map\|C042]] | Early entity map carries a "voter" role the consolidated map dropped | Low | Accepted (116th) |
| [[C043-observed-as-project-state\|C043]] | docs/12 promotes "Observed" to a project-level exceptional state | Low | Accepted (116th) |
| [[C044-ai-red-gate-vs-c008-boundary\|C044]] | C016's AI Red gate vs C008's assist-not-decide boundary | Medium | Accepted (116th) |
| [[C045-a030-delegation-citation-slip\|C045]] | A030 resolution misattributes the Delegate role to C019 | Low | Accepted (116th) |

## Audit completion

All eight slices delivered and consolidated (2026-07-03). Twenty open contradictions (C026-C045); every finding verified against the cited files before entry; auditor line numbers corrected where they had drifted. The substantive layers — the 35 triads, the core-vs-resolutions normative seams, the C-vs-A rule seams, formal claims, simulation numbers, reviewer packets, and EN/ES meaning equivalence — audited clean; the contradictions concentrate in state-describing documents (indexes, READMEs, the companion's record section, metadata, early flow docs) that lagged recent progress, plus one genuine normative conflict (C041), one boundary tension between accepted rules (C044), and one framing tension (C035).

## Clean slices and non-contradiction notes

Audited clean (0 findings): all 35 attack-defense-resolution triads (including the out-of-sequence numbering seams); the core-docs-vs-resolutions normative layer (all eight known-risk seams, including the A034 pilot default vs the complaint path, field-list identity across five surfaces per record, the canonical four-item timeout menu, and docs/64-vs-66 entity discipline); the manuscript's formal claims, simulation numbers, and EN/ES meaning equivalence; all ten reviewer packets; docs/07; the Reviewers README; the funding/disbursement, delegation, evidence/complaint, and audit-event diagrams; and the docs/36 index itself.

Coverage note (not a contradiction): the governance-resolution sequence diagram predates A035 and is silent on capacity-calibrated timeouts — consistent, but a candidate for a one-line update when next touched.
