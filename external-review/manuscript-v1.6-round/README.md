# Manuscript v1.6 Review Round — Record

*Internal round record © 2026 Mauricio Offermann, CC BY-NC-ND 4.0 — see LICENSE.md at the repository root.*

## What this round was

Five-profile adversarial review of the published manuscript itself — [[paper|drafts/paper.md]] v1.6, DOI 10.5281/zenodo.21193847 — conducted 2026-07-04. The two earlier rounds of this method reviewed the companion publishable model ([[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]]) and produced A034/A035; this is the first round the manuscript faced as a manuscript. Each profile reviewed independently, was instructed to attack rather than validate, and was pointed past the already-resolved corpus answers (A034/A035) so objections would land beyond them. The systems-architect profile additionally ran `scripts/simulation/allocation-sim.mjs` and reproduced every headline figure to the third decimal.

Raw feedback is preserved verbatim below (in Spanish, as delivered), per the processing rule in [[README|external-review/Reviewers/README.md]].

```text
academic.md            political economy / mechanism design profile
public-law.md          constitutional and administrative law profile
systems-architect.md   govtech engineering profile (code audit included)
practitioner.md        public-sector budget/planning practitioner profile
non-expert-reader.md   educated general reader profile
```

## Scores summary

| Profile | Scores (/5) |
|---|---|
| Academic | Clarity 4 · Originality 3 · Theory 2 · Empirics 2 · Literature 3 · Journal-readiness 2 |
| Public law | Clarity 4.5 · Legal viability 2 · Boundary honesty 3 · Jurist-readiness 2.5 |
| Systems architect | Technical coherence 4 · Reproducibility 5 · Implementability 2 · Assumption honesty 4 |
| Practitioner | Administrative realism 2.5 · Political viability 2 · Pilot design 3 · Practical utility 3 |
| Non-expert reader | Non-specialist clarity 2.5 · Structure 3 · Honest persuasion 4.5 · Shareability 3 |

## Convergent core finding

Four of five profiles, by independent routes (literature, code audit, field experience, naive reading), converged on the same diagnosis of the headline: the 2.19× multiplier is measured against a zero-control caricature of the status quo, its verified arm's zero leak is an algebraic identity of the chosen parameters, the E4 central planner is bandwidth-mutilated, and the defensible core is the delivery-plus-metering contribution — with the +43% same-portfolio delivery effect and the visibility gap as the claims most likely to survive recalibration. What survived intact across all profiles: role separation, failed-prediction reporting (unanimously named the strongest trust-builder), full reproducibility, the Fiscal Commitment Profile, and the declared-limitations discipline.

## Classification outcome (per the internal processing rule)

- **New attacks:** [[A036-opaque-baseline-calibration-strawman|attacks/A036-opaque-baseline-calibration-strawman.md]] (baseline strawman — academic, architect, practitioner), [[A037-reserve-of-law-over-allocation-competence|attacks/A037-reserve-of-law-over-allocation-competence.md]] (reserve of law — public law, practitioner), [[A038-reputational-exclusion-as-unprocessed-sanction|attacks/A038-reputational-exclusion-as-unprocessed-sanction.md]] (exclusion without due process — public law), [[A039-allocation-traceability-versus-preference-secrecy|attacks/A039-allocation-traceability-versus-preference-secrecy.md]] (traceability vs preference secrecy — public law), [[A040-incumbent-adoption-paradox|attacks/A040-incumbent-adoption-paradox.md]] (adoption theory — practitioner).
- **Pre-registered experiment:** [[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]] — the empirical test of A036 plus the scale and signal-bias objections.
- **Framing / overclaiming queue (manuscript v1.7 candidates):** in-model qualifiers on every abstract/conclusion figure; paired CI for the headline multiplier; percentage headlines not juxtaposed with absolute-unit CIs; "adversarial validation" renamed toward structured self-critique; external timestamped pre-registration deposit before claiming pre-registration discipline in a journal; E6 "costly effort" wording corrected (cost never enters the model's value functions).
- **Literature gaps:** fiscal federalism (Oates 1972, Tiebout 1956, Besley and Coate 2003, Seabright 1996); Condorcet jury theorem and its failure conditions (Austen-Smith and Banks 1996, Ladha 1992); Landemore; Fung and Wright; Ferraz and Finan 2008; Holmström 1999 (career concerns, canonical for E6); Tirole 1986; Lukes 1974.
- **Clarity issues:** abstract length and structure; "weight vector" never glossed plainly; sel(θ) untranslated; Finding 2 overloaded; Section 6 notation introduced without a plain-language bridge.
- **Already resolved / pushed beyond:** A022 (thin markets — but the fiscalization market itself remains unpriced, folded into A036/E7 and the practitioner's pilot conditions), A035 (capacity — extended by A040's official-protection defaults), A020 (agenda-setting — restated by the non-expert reader as the residual doubt), E6's Core v0 boundary (restated by A038 as the sanction question).
- **Practical gifts recorded, not yet adopted:** the architect's five-phase MVP sequence; the practitioner's signable pilot conditions (3-5% of investment budget, overlay over procurement law, k=2 maximum corroboration, 72-hour milestone verification plus bridge financing for small providers, prospective visibility-gap framing, and three first deliverables: hours-per-resolution, control-cost-per-milestone, small-provider survival).

## Standing note

These reviews are simulated profiles, not external experts; they sharpen the corpus before the real reviewer packets go out, and nothing here substitutes for the external expert review that remains the validation program's next human step.
