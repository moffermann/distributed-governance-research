# Round-3 publication-readiness summary

## Overall verdict

**NOT READY.** Five of seven audit dimensions fail publication readiness, including one Critical external-surface defect and multiple Major claim-provenance, scope, completeness, and release-control defects. The authoritative EN/ES manuscripts are substantively aligned and the shipped symmetry-gate outputs themselves remain reproducible, but the repository and its live public metadata do not yet tell one coherent, contract-compliant Path-B story.

| Dimension | Verdict | Decisive issue |
|---|---|---|
| Correctness & errors | **No** | The selection-only gate is credited with a delivery interaction, universal public-finance claims exceed the bounded estimand, and three mathematical/model statements are inaccurate. |
| Internal consistency & contradictions | **No** | High-visibility summaries attribute the post-hoc 0.026 ratio-of-sums to the pre-registered gate, and roadmap state is mutually inconsistent. |
| Honesty & overclaiming | **No** | The paper claims total-architecture and real-world audit conclusions that its contract expressly leaves unidentified. |
| Completeness & gaps | **No** | The confirmatory gate is not self-contained in the manuscript; the mechanism literature/novelty review and E7 source verification remain incomplete. |
| External-facing surfaces | **No** | A shipped Spanish PDF republishes the retired multiplier, while live Zenodo metadata and reviewer/citation surfaces remain stale. |
| Clarity, order & readability | **Minor-only** | The argument is intelligible, but Section 6 hides the governing gate inside a long, flat exploratory apparatus. |
| EN/ES parity | **Minor-only** | Claims and numbers match; five Spanish companion-resource links are non-clickable and use wrong relative path text. |

## Must-fix blockers, ranked

### 1. Stop current public surfaces from publishing the withdrawn result

The unbannered `drafts/paper-resumen-ejecutivo.es.pdf` still says the architecture delivers 2–3×/2–5× and works better with low participation (pp. 1–3). The canonical live Zenodo record also retains the E7/E8 headline-confirmation story, 40 attacks/four rounds, stale license notes, an old companion relation, and conflicting title/version metadata. Regenerate or remove the PDF and correct the live record before any further dissemination. This is the only Critical finding.

### 2. Restore the pre-registered/post-hoc boundary everywhere

The manuscript introduction and conclusion (`drafts/paper.md:120-124,1277-1282`) and the public companion (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:5-12,783-794`) present pooled ~0.026 as the pre-registered gate result. The controlling result is: **pre-registered pooled median Δ = 0.025, below the 0.05 research-program rebuild threshold; NO-GO**. The **post-hoc** ratio-of-sums is **Δ = 0.026 [0.023, 0.029]** and must be a separate sentence. Replace bare “materiality gate/bar” language on README, companion, contract, and paper summaries with the rebuild-only, uncalibrated interpretation.

### 3. Remove claims outside the selection-only, bounded estimand

Delete or sharply narrow the claims that states do not tax to redistribute and that delivered value is the criterion for “any allocation institution” (`drafts/paper.md:30-37,1262-1265`). Remove the statement that the paper has answered whether the architecture improves outcomes “and by how much” (`drafts/paper.md:1184-1189`). Recast E7's “real-world detection ... never more delivery” and “status quo lacks at any audit intensity” language (`drafts/paper.md:948-956,1283-1288`) as conditional outputs of its stipulated apparatus. Do not connect the selection-only symmetry gate to a selection×delivery interaction (`drafts/paper.md:292-296`). Mirror all wording changes in Spanish.

### 4. Make the load-bearing evidence reviewable inside the paper

Add a self-contained symmetry-gate methods/results subsection defining the estimand, coverage and credit estimators, frozen grid, information matching, eligibility, negative control, low-information stress, decision rule, and the distinct median versus ratio-of-sums outputs (`drafts/paper.md:391,537`; `audits/2026-07-10/symmetry-gate-preregistration.md:26-45`). Complete the credit-claiming/source-to-construct bridge and the systematic prior-art review before retaining novelty language (`drafts/paper.md:13,270`; `research/literature-map.md:3,33`). Clear the mandatory E7 primary-source verification queue or relabel it throughout as partially verified and scenario-based (`research/e7-calibrated-baseline-design.md:52`; `research/audit-evidence-base.md:81-88`).

### 5. Correct the remaining mathematical and model-description errors

Qualify the E4 turnout and valuation-shape “invariances” as expectation/large-set approximations rather than implemented finite-sample properties (`drafts/paper.md:791-797`; `scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`). Label the detection-floor `m q` threshold as a small-`q` Poisson approximation and give the exact Bernoulli expression (`drafts/paper.md:786-790`). Restore the missing recoverable-advance term in the formal collusion mapping, changing `G` to `1 - a(1-r) + γ + R` (`research/formal-models.md:58-78,142-144`).

### 6. Rebuild the release-control package from one frozen state

Reconcile `docs/03_ROADMAP.md:3-39` with the controlling remediation roadmap so it cannot simultaneously say blocked, remediation in progress, tiers complete, and only mechanical redeposit remaining. Replace all v1.8 reviewer packets with a Path-B v1.13 packet and cover. Synchronize the final title, version DOI, mixed CC-BY/MIT machine metadata, attack/round counts, and companion relationship across Zenodo, `CITATION.cff`, `LICENSE.md`, README, outreach, and review packets. Fix the five broken Spanish companion links identified in the parity report.

## Gate assessment

1. **Evidence-bounded claims:** fail — several claims exceed the selection-only and distributionally bounded contract.
2. **No internal contradiction:** fail — statistic provenance and roadmap state conflict.
3. **Fresh external metadata:** fail — live Zenodo and multiple release/citation surfaces are stale.
4. **References and load-bearing citation support:** fail — novelty/mechanism grounding and E7 primary-source verification are unfinished; one companion cross-reference is wrong.
5. **EN/ES exact mirror:** minor-only — substantive parity passes; five links need mechanical repair.
6. **Simulation reproduces the text:** mixed — the archived gate outputs and governing Section 6 numbers reproduce, but several summaries mislabel the post-hoc statistic and the paper overstates what E4/E7 and the selection-only gate establish.

## Single highest-value next move

**Immediately quarantine and correct the external release surface: remove/regenerate the stale Spanish PDF and add a prominent Path-B correction to the live Zenodo record before any further sharing.** This prevents the withdrawn multiplier from continuing to circulate while the manuscript-level blockers are repaired.

