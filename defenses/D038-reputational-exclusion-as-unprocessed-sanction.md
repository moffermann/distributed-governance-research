# D038 - Defense Against A038: Reputational Exclusion as a Sanction Without Due Process

## Integration status

Manuscript-review round paired review completed. Accepted resolution: [[107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION|docs/107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION.md]]. Author review reclassified the attack as partially founded: the platform holds no reputational exclusion power over executors or proponents, so the tiered sanctionatory procedure this defense proposed was not adopted for funder-facing reputation — the resolution is a boundary clarification (informs, never excludes), a manuscript terminology correction, and a confirmation of the existing reviewed-finding guarantees at the control-role admission boundary. This brief is preserved as the pre-reclassification record. Corpus propagation tracked in the remediation roadmap (R2-22); resolution accepted, not on the publication critical path.

## Attack reference

- Attack file: [[A038-reputational-exclusion-as-unprocessed-sanction|attacks/A038-reputational-exclusion-as-unprocessed-sanction.md]]
- Attack title: `A038 - Reputational Exclusion as a Sanction Without Due Process`
- Source: manuscript v1.6 review round — public-law reviewer, triggered by the E5/E6 exclusion machinery.

## Attack summary

The attack argues that the deterrence the delivery layer depends on — reputational continuation value, exclusion of confirmed diverters, eligibility gating — is legally a sanction regime: exclusion from future public work is an inhability requiring prior legal basis, a procedure with hearing, proportionality, and recourse; and where eligibility follows from computed scores, it is additionally an automated decision with legal effects under modern data-protection statutes. The corpus's reputation machinery is an evidentiary chain with an undefined "appeal or review status" field — a pointer to a procedure that does not exist — and a court that agrees will freeze the architecture's deterrence layer wholesale.

## Objective evaluation

- Classification: founded as a procedural gap at the reputation-eligibility boundary.
- Why it is founded: no corpus document defines notice, hearing, deciding organ, deadlines, suspension effect, or standard of review for an eligibility-affecting reputation update; H014's appeal field is a placeholder; and the E6 scope boundary ("reputation informs funders' choices and eligibility") treats as one thing two acts of different legal nature — informing choices and gating eligibility.
- Why it is not fatal to the architecture: the corpus's substantive reputation discipline is already far stricter than both the status quo and the attack implies. Today, executors are excluded from public work by informal blacklisting with no trace, no reasons, and no appeal — a phone call, not a procedure. The architecture's chain (signal never updates directly; only reviewed inputs update; updates are role-specific, severity-weighted, time-decayed, recoverable, and fully audited) supplies exactly the evidentiary record a lawful sanction procedure needs and the current system lacks. The attack identifies a missing procedural shell around a substantive core that is already more protective than practiced reality; adding the shell strengthens deterrence rather than weakening it, because exclusions that survive process are credible.
- Difference of judgment: medium. Which consequences count as sanctions, and what process each tier requires, is jurisdiction-specific doctrine; the architecture can define its internal procedure but not the statutory basis the attack's strongest form demands.
- Editorial distortion risk: medium-high. The attack would distort the project if it collapsed all reputation into sanction — visible truthful records of verified performance are speech and accountability, not punishment — or if it demanded that informational visibility itself carry hearing rights, which would gut the transparency layer the architecture exists to provide.

## Response

The defense begins by accepting the attack's sharpest distinction and building on it. Informing and gating are different acts: a funder reading a reputation summary and declining to fund is private choice over public information; a protocol or scope policy making an executor ineligible is an exercise of public power over that executor. The corpus already sensed the line — C018 forbids closure labels from auto-updating reputation, the E6 boundary forbids automatic reputation-weighted assignment — but policed only the input side of automatism. The resolution this defense proposes completes the design with a tiered Reputational Consequence Procedure: informational visibility keeps the existing reviewed-input discipline; eligibility-affecting updates require notice, a hearing window before effect, a reasoned decision imputable to a named review role, a defined appeal with declared suspension effect, and deadlines; protocol-level exclusion is available only on grounds stated in advance in scope policy, mirroring the debarment statutes that are its legal genre. No eligibility effect follows from computation alone: a named role adopts the decision, and contestation runs against both the underlying finding and the computation.

Comparatively, per P001, the attack's baseline is generous to the incumbent system. The formal debarment regimes it cites are rarely used precisely because their process is heavy; practiced exclusion happens through informal channels with no record at all, and the small providers the attack worries about have no recourse against a whispered blacklist today. The architecture's audit trail is the first design in this space under which a wrongly excluded executor possesses, by construction, the complete evidentiary package a challenge requires: the input, the reviewer, the reasons, the prior score, the rule applied. The procedural shell this resolution adds makes that package operative before effect instead of after litigation.

On the automated-decision objection, the defense concedes the doctrine's applicability and answers with design: the corpus's own architecture never wanted automated exclusion — E6's Prediction 3 failure is the corpus documenting *against itself* that naive reputation-weighted assignment concentrates before it selects. The attack and the simulation point the same direction, which is why the human-adoption rule and opportunity-normalized reputation belong in the resolution as confirmations of existing design intent, not retrofits. What remains genuinely external is statutory: where a jurisdiction requires that inhabilities rest on legislated grounds, the platform's exclusion tier maps onto the jurisdiction's debarment regime through country implementation, and the mapping is recorded so the two cannot silently diverge.

## Project-document basis

- [[H014-reputation-architecture|knowledge/hypotheses/H014-reputation-architecture.md]] defines the signal-to-update chain, severity weighting, recovery, and the appeal-status field this defense converts from placeholder to procedure.
- [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]] restricts negative responsibility to reviewed, role-specific findings — the substantive discipline the procedural tiers ride on.
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]] already polices automatism on the input side; the resolution extends the same principle to the output side.
- [[simulation-results|research/simulation-results.md]] documents, in E6's own findings, why automatic reputation-weighted assignment is rejected — the corpus's internal evidence aligned with the attack.
- [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] supplies the existing contestation-surface pattern the new procedure generalizes to reputational consequences.

## Bibliographic basis

- Alejandro Nieto, `Derecho Administrativo Sancionador` (2005): punitive effect, not the instrument's name, triggers sanction doctrine — accepted as the test that separates the tiers.
- Danielle Citron, "Technological Due Process" (2008): contestation must be designed into automated systems from the start — the resolution's human-adoption and dual-contestation rules.
- Jerry Mashaw, `Bureaucratic Justice` (1983): well-designed internal process delivers more effective rights than formal adjudication — the case for the platform-level procedure rather than litigation-by-default.
- Steven Kelman, `Procurement and Public Management` (1990): debarment's legal genre and its practical rarity — the comparative baseline of informal exclusion.
- Frank Pasquale, `The Black Box Society` (2015): unexplained scoring shifts power to the scorer; the audit trail plus stated computation rules is the counter-design.

## Proposed improvements

Define the missing procedural shell on the existing reputation machinery:

- a tiered Reputational Consequence Procedure: reviewed-input discipline for informational visibility; notice, pre-effect hearing window, named deciding role, reasoned decision, appeal with declared suspension effect, and deadlines for eligibility-affecting updates; advance-stated grounds for protocol-level exclusion;
- a no-computation-alone rule: every eligibility effect is adopted by a named human role, with contestation available against the finding and the computation;
- interim-measure handling: urgent suspensions allowed under their own proportionality test with immediate post-effect hearing;
- an executor-facing disclosure surface stating grounds, procedure, and recourse before first participation;
- a country-implementation mapping between platform exclusion tiers and the jurisdiction's debarment regime, recorded in scope policy.

## Applies to

- reputation input chain and Reputation Update records;
- eligibility rules in Planning Scope and Threshold Policy;
- executor-facing disclosure surfaces;
- the A011 contestation surface, generalized;
- audit trail requirements;
- country implementation.

## Defense strength and residual risk

Defense strength: strong comparatively (practiced exclusion today is traceless informal blacklisting; the architecture's record is the first that makes lawful challenge possible by construction) and strong on design alignment (E6's own findings reject the automatism the attack fears). Moderate on the statutory core: an internal procedure satisfies due-process substance but cannot itself supply the legislated grounds strict reserve-of-law doctrine demands for formal inhabilities.

Residual risk: process is cost — hearing windows delay consequences, and sophisticated bad actors will exploit every procedural stage, weakening the deterrence parameter the delivery results price as R; and until a court reviews the first contested exclusion, the mapping between platform tiers and debarment doctrine remains untested in every jurisdiction.

## Decision

The attack is founded and integrates as a tiered Reputational Consequence Procedure with a no-computation-alone rule on the existing reputation machinery, plus a recorded mapping to the jurisdiction's debarment regime; statutory grounds remain external law. The declared limitation is the deterrence-process trade-off: lawful exclusion is slower exclusion, and the delivery models' R operates net of that delay.
