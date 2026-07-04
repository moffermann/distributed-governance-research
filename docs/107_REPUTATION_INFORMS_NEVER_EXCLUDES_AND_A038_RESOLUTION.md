# Reputation Informs, Never Excludes: Boundary Clarification and A038 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A038-reputational-exclusion-as-unprocessed-sanction|attacks/A038-reputational-exclusion-as-unprocessed-sanction.md]]
- Defense: [[D038-reputational-exclusion-as-unprocessed-sanction|defenses/D038-reputational-exclusion-as-unprocessed-sanction.md]]

## Resolution decision

A038 is **partially founded, and the author's review reclassified it**: the attack targets a sanction power the design never contained. An author-intent audit of the corpus confirmed that no document grants the platform authority to exclude an executor or proponent for low reputation — eligibility before funders is the funder's sovereign choice; a low-reputation actor becomes *less attractive*, never inadmissible. Reputation is the visible face of results evaluation, built exclusively on reviewed records, and the freedom to evaluate and publish reviewed evaluations is the design's protected core, not a sanction regime. What the attack did find is real but narrower: loose exclusion language in the manuscript and simulation surfaces, and a genuine due-process boundary at the *control roles* — the one place where the protocol, not a funder, admits actors to power.

The full sanctionatory procedure proposed in D038 is therefore **not adopted** for executor-facing reputation: adopting it would institutionalize in the corpus exactly the exclusion power the design does not have. The accepted resolution is a boundary clarification, a terminology correction, and a narrow due-process confirmation at the control-role admission boundary.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this bounds the attack with an explicit design principle and integrates only a terminology fix and a confirmation of existing review guarantees; no new procedure object enters Core v0.

## Rule added to Core v0

**The informs-never-excludes principle.** Formal reputation informs decisions; it never excludes an actor from being chosen.

Minimum elements:

- **Funder sovereignty:** no protocol rule, threshold, or score bars a funder from allocating to any admissible project or from a project's declared executor on reputational grounds; reputation summaries, histories, and warnings are decision information, always visible, never gates;
- **Evaluation as protected expression:** reputation records are reviewed evaluations of verified performance ([[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]], [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]]); the system defends the right to evaluate and to read evaluations — consequences flow through choices and through law, not through score-triggered platform acts;
- **The model-to-design mapping, stated:** where the manuscript's models and experiments speak of "exclusion after confirmed diversion", the operational meaning in Core v0 is that the confirmed-diversion record is visible and funders stop choosing the actor — pool exit by lost preference, not by platform power; confirmed violations additionally carry their own consequences through guarantees, recovery, responsibility events, and external law, none of which is reputation;
- **The control-role carve-out, named honestly:** responsible fiscalizers and formal evidence producers are not chosen by ordinary funder preference — they are admitted to payment-gating power under protocolized eligibility rules (independence, conflicts, competence, contextual reputation: [[H016-distributed-fiscalization-ecosystem|knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md]]), and Model 2's collusion-proofness requires that a colluding fiscalizer's stake be credibly forfeitable. At this boundary, and only here, disqualification is a consequential decision — and it already requires a reviewed finding under C012 and A013, contestable through the [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] surface; this resolution confirms those guarantees as the control-role due process and adds nothing new.

## Macul example

A Macul funder opens the multi-court project and sees its declared executor's summary: two failed milestones on a previous project, reputation 2.9, details inspectable. Nothing stops her from funding it anyway — the screen informs her; it does not decide for her. If that executor had a *confirmed diversion* on record, the record would be equally visible, recovery would have run against its guarantees, and most funders would walk away — but the walking away is theirs. Meanwhile, the fiscalizer who will gate the project's payments did pass protocolized admission (no conflicts, required competence), and if it were ever disqualified, that would happen through a reviewed, contestable finding — because it wields public power, and the executor's reputation does not.

## Citizen simplicity

The citizen surface needs no new text: summaries stay simple, details stay inspectable, and no citizen ever encounters a "banned by reputation" state, because none exists.

## Transparency and accountability effect

The design's answer to bad performance is more information and freer choice, not administrative punishment: actors are accountable to everyone who can now see their verified record, which is a stronger and legally safer discipline than a platform sanction — and it is the discipline E6 actually measured, where visibility alone carried most of the quality effect. Per [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]], the comparator is today's informal blacklisting: traceless, unappealable, and invisible; the architecture replaces it with visible records and sovereign choices.

## Scope boundary and limitation

Core v0 gains no sanction procedure because it has no sanction power. The legal characterization of reviewed evaluations (opinion, honest-information protection, defamation boundaries) and of confirmed-violation consequences (guarantees, recovery, debarment registries) remains country implementation and external law.

Limitation statement: the informs-never-excludes principle governs the platform; it cannot stop external actors — a procurement registry, a court, a scope authority acting under its own law — from attaching their own exclusionary consequences to visible records, and jurisdictions that do so bring their own due-process obligations with them.

## Residual risks

- Very strong funder herding on reputation summaries can produce de facto exclusion dynamics without any rule; the E6 lock-in warning and the A027 concentration observability are the standing mitigations.
- The manuscript's exclusion wording, until corrected in v1.7, remains quotable against the design.
- Defamation-style challenges to reviewed evaluations remain possible in some jurisdictions even for accurate records; the reviewed-input chain is the defense file.

## Integration target

This resolution should inform: the manuscript's v1.7 revision (the "reputational stake with exclusion" and "reputation excludes diverters" phrasings restated as visible-record-and-funder-choice, with the model-to-design mapping in the E5 findings text); the E6 scope boundary in research/simulation-results.md (the phrase "and eligibility" removed — corrected with this resolution); H014's and the glossary's reading of summaries as navigation; and the A038/D038 briefs' status blocks. The E5 pre-registered design document is a dated research artifact and is not edited; this resolution supplies its interpretation.
