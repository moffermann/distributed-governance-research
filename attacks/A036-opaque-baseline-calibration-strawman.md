# A036 - The Opaque Baseline Is a Strawman: The Status Quo Already Contains a Control Regime

## Status

Manuscript-review round brief. Pending paired review; no accepted resolution yet.

## Description

The manuscript's headline results — the 2.19× delivered-value multiplier, the +43% delivery effect, and the 29-point visibility gap — are measured against an opaque baseline parameterized as near-zero control: detection p ≈ 0.10, unprotected advances, no recovery, no reputational memory. But no functioning public administration operates at zero control. The real status quo already contains a contractual control regime — supreme audit institutions, ex-ante legality review, personal administrative liability for account rendering, payment-state retentions, performance bonds, technical inspection of works, and transactional public-procurement platforms. Three independent reviewers of the v1.6 manuscript (academic, systems-architect, and public-sector-practitioner profiles) converged on the same diagnosis: the multiplier measures the distance between an architecture of control and an absence of control, and almost nobody lives at the absence.

## Location in current project

- [[e5-value-delivery-design|research/e5-value-delivery-design.md]] declares the opaque regime's parameters (p ∈ 0.05-0.15, a ≈ 0.7-1.0, r ≈ 0, R = 0) as the status-quo layer.
- [[simulation-results|research/simulation-results.md]] anchors the leakage priors in Reinikka and Svensson (2004) and Olken (2007) and reports the headline arm contrasts built on them.
- [[paper|drafts/paper.md]] carries the 2.19×, +43%, and 29-point figures in the abstract, Finding 5, and the conclusion.
- [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]] is the corpus's own standard: every critique is evaluated against how the current institutional system actually solves the same problem — not against an ideal, and, this attack adds, not against a caricature.

## Problem

The attack has three prongs, each independently sufficient to force a correction.

First, the calibration is asymmetric across categories. The opaque band's dramatic anchor — 87% leakage — comes from Uganda's education capitation grants, cash transfers that are the most divertible category of public spending. The manuscript's own second anchor, Olken's Indonesian road projects, measured ~24% missing expenditures for construction — the category closest to the Macul running example — yet the modeled opaque arm behaves much nearer the capitation end. The choice of a point inside a 24-87% band is not a detail; it *is* the headline.

Second, the verified regime's core mechanisms — milestone gating, retention, recovery, guarantees — are presented as the architecture's contribution, but in public-works contracting they approximate the regime that already exists on paper: payment states with retention, performance bonds, technical inspection, account rendering with personal liability. What the status quo demonstrably lacks is not the control instruments but their observability, independence of the verifier from the verified, and reputational memory. Measuring the architecture against an opaque arm that lacks the instruments themselves inflates the delivery effect by attributing to the architecture what the contract law of the comparison jurisdiction already provides.

Third, the corpus violates its own P001 standard in the one place it matters most. P001 was built to prevent critics from comparing the architecture against an ideal; the same rule, applied symmetrically, prevents the architecture from comparing itself against a strawman. Demsetz named the one-sided version of this error the nirvana fallacy; its mirror image — a calibrated proposal against a caricatured incumbent — is the same fallacy with the signs flipped.

Example:

```text
A reviewer reconstructs the E5 baseline for a functioning municipality:
detection from audit institutions and inspection ~0.3-0.5, retention ~10%,
performance bonds giving partial recovery, leakage anchored at the
construction-category 24% rather than the capitation 87%. Against that
baseline the delivery effect shrinks from +43% to a fraction of it, and
the 2.19× compound — already inflated by the bandwidth-mutilated central
planner of E4 — loses its headline status. Nothing in the corpus reports
what survives.
```

## Recommended resolution path

- Pre-register and run a calibrated-baseline experiment (E7): an institutional status-quo arm with documented real-world controls (moderate detection, retention, recovery through guarantees), leakage anchored to the construction-comparable Olken figure, planner bandwidth scaling with scope, and sensitivity of every headline figure to the baseline choice.
- Re-state the headline claims against the calibrated baseline; keep the zero-control arm as an explicit lower bound labeled as such, not as "the status quo".
- Reframe the architecture's delivery contribution around what the calibrated comparison actually isolates: verifier independence, observability, and reputational memory — not the invention of retention and guarantees.
- Apply P001 symmetrically in the methods section: the comparative-critique rule binds the architecture's self-evaluation exactly as it binds its critics.

## Theoretical base and citations

- Harold Demsetz, "Information and Efficiency: Another Viewpoint" (1969): the nirvana fallacy — institutional comparison is only valid between real alternatives; an idealized proposal against a caricatured incumbent is the same error mirrored.
- Ritva Reinikka and Jakob Svensson, "Local Capture: Evidence from a Central Government Transfer Program in Uganda" (2004): the 87% figure is category-specific to capitation cash transfers, not a general property of public spending.
- Benjamin Olken, "Monitoring Corruption: Evidence from a Field Experiment in Indonesia" (2007): ~24% missing expenditures in road construction — the category-appropriate anchor for infrastructure baselines.
- Nicola Dimitri, Gustavo Piga, and Giancarlo Spagnolo (eds.), `Handbook of Procurement` (2006): the existing contractual control toolkit — retention, bonds, supervision, remedies — that a fair baseline must include.
- INTOSAI, `Lima Declaration of Guidelines on Auditing Precepts` (1977): supreme audit institutions as a standing external-control layer of the status quo, absent from the opaque arm.

## Social reasons

If the architecture's case rests on a multiplier measured against an administration that does not exist, the first hostile expert who reconstructs a fair baseline discredits not just the number but the method — and the method (honest adversarial self-critique) is the project's most valuable asset. Conversely, an architecture that beats a *calibrated* baseline on verifier independence, metering, and memory has a claim that survives scrutiny and travels into real budget debates.

## Conflicts of interest

- The research effort itself benefits from the larger multiplier: 2.19× is more quotable than a calibrated residual.
- Reform advocates may prefer the dramatic figure for political mobilization even after its fragility is documented.
- Incumbent administrations have the mirrored incentive: to overstate the effectiveness of existing paper controls that are weakly enforced in practice.
- Any future pilot evaluator inherits pressure to compare against the flattering baseline already in print.

## Inconsistencies to test

- P001 demands comparison against the real institutional system, while E5's status-quo arm models a system with no working controls; the corpus's own standard and its headline experiment are in tension.
- The manuscript declares parameters "plausible, not calibrated" in its limitations, yet the abstract and conclusion state 2.19×, +43%, and 29 points without the in-model qualifier the declaration requires.
- The verified arm's leak and visibility gap are zero by construction (deterrence threshold exceeds every diversion gain), so the arm contrast is partly an identity; the manuscript acknowledges the mechanism but retains the contrast as a finding.
- E5's own sensitivity instrument (the verified-weak run) demonstrates the machinery for exactly this test and was not pointed at the baseline side.

## Stress scenario

The manuscript reaches a hostile referee and a finance-ministry analyst in the same month. Each independently re-parameterizes the opaque arm with the jurisdiction's actual control regime and the construction-category leakage anchor. The multiplier collapses to a modest residual; the referee writes that the headline was an artifact of baseline choice, and the analyst circulates the collapse as evidence the whole corpus is advocacy. The 29-point visibility gap — the claim that would have survived, because metering is genuinely absent from the status quo — goes down with the ship because it was packaged with the inflated multiplier.

## Review checklist

- Does every headline figure in the abstract and conclusion carry its in-model qualifier and its baseline definition?
- Has a calibrated institutional baseline been pre-registered, run, and reported with the same prominence as the zero-control contrast?
- Is the leakage anchor category-matched to the project types being modeled?
- Are the control instruments the architecture shares with existing contract law distinguished from the ones it uniquely adds?
- Does the methods section state that P001 binds the architecture's self-comparisons symmetrically?

## Resolution output

None yet. Pending paired defense and review; the pre-registered E7 experiment ([[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]]) is this attack's empirical test.
