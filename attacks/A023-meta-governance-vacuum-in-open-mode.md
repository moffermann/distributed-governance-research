# A023 - Meta-Governance Vacuum in Open Mode

## Status

Proposed in second-round architecture attack. Pending paired Phase 3 review; no defense brief or resolution yet.

## Description

Protocol-change governance defines change types, versioning, transition rules, and non-surprise guarantees, but the actual decision mechanics for non-tutored, open-mode protocol changes are deliberately blank: who votes, with what weights, under what quorum, and how constitutional-level rules are protected differently from operational parameters are all left as future work. Rule-level capture is the highest-leverage attack surface in any governance system, because whoever controls the rules for changing rules controls everything downstream. Unlike A016, which targets external incumbents resisting the system, and A011, which targets tutored-mode moderation abuse, this attack targets internal constitutional capture in the system's mature, self-governing state — precisely the state the architecture claims to be evolving toward while leaving its constitution unwritten.

## Location in current project

- `docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md` non-tutored path where "the exact voting mechanics can remain future work."
- `knowledge/hypotheses/H017-meta-governance-protocol-evolution.md` non-tutored Protocol Change Proposal with approval mechanics left unspecified.
- `knowledge/hypotheses/H058-operating-modes-for-transition.md` open mode operating under the ordinary distributed protocol without pre-publication moderation.
- `docs/34_CORE_V0_SCOPE_FREEZE.md` full constitutional meta-governance placed in Extension v1+.
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md` blueprint dependence on protocol evolution.
- `docs/diagrams/v0-governance-resolution-sequence.md` resolution sequence built around tutored authority decisions, not open-mode voting.

## Problem

C019 and H017 do excellent work on the visible, procedural envelope of rule change: classification, reasons, effective dates, transition rules, rollback, and auditability. But they explicitly decline to specify how a non-tutored protocol change is actually decided. In tutored mode this is deferred to the implementing authority. In open mode there is no authority — control is supposed to come from the distributed protocol itself — yet the protocol never says who approves a change, how votes are weighted, what quorum binds, or whether a change to constitutional-level rules (identity, allocation, reputation, the amendment rule itself) requires more than a change to a guarantee percentage. A mature open-mode system with an unspecified amendment rule is not neutral; it is an invitation for whoever first proposes a concrete mechanism to entrench themselves.

Example:

```text
A public function reaches open mode after a successful transition.
A well-organized delegate bloc proposes a protocol change lowering the
approval threshold for future protocol changes and raising reputation
weight in voting.
Because Core v0 never fixed open-mode amendment mechanics, the bloc also
proposes the mechanism by which its own proposal is ratified.
Every step is versioned and auditable, and the constitution is rewritten
by whoever moved first.
```

## Recommended resolution path

- Define, as a Core v0 conceptual boundary, at least three protocol-rule tiers — operational, collective-choice, and constitutional — with escalating amendment requirements, following Ostrom's rule-level distinction.
- Require that open-mode protocol changes name their approval body, weighting rule, and quorum before a proposal can advance, so no proposal ever defines its own ratification mechanism.
- Fix a minimal default amendment rule for constitutional-level changes (higher quorum, supermajority, waiting period, no self-amendment of the amendment rule within one cycle) even if operational-change mechanics stay configurable.
- Protect a small set of entrenched rules — verified identity, allocation authorization, the amendment rule itself — behind the constitutional tier by default.
- Expose participation and concentration metrics on protocol-change votes, since low turnout is the classic capture vector.
- Keep full constitutional meta-governance as Extension v1+, but prevent Core v0 from shipping an open mode whose amendment rule is undefined.

## Theoretical base and citations

- James Buchanan and Gordon Tullock, `The Calculus of Consent` (1962): constitutional rules for making rules require a stricter, higher-consent standard than ordinary in-period decisions.
- Elinor Ostrom, `Governing the Commons` (1990): durable self-governance distinguishes operational, collective-choice, and constitutional levels of rules, each nested and amended differently.
- William Riker, `Liberalism Against Populism` (1982): without fixed structure, aggregation rules are manipulable and outcomes reflect whoever controls the procedure.
- Primavera De Filippi and Aaron Wright, `Blockchain and the Law` (2018): on-chain governance without robust constitutional constraints is routinely captured by concentrated token or voting power.
- Jon Elster, `Ulysses and the Sirens` (1979): constitutions bind future majorities precisely by making some rules costly to change, guarding against momentary or captured majorities.

## Social reasons

People will only trust a self-governing system with public money if the rules cannot be quietly rewritten against them by whoever is best organized at a given moment. An unwritten amendment rule offers no such assurance: it privileges the coordinated over the diffuse and rewards early movers. The citizens least able to monitor a protocol-change vote are the ones most exposed when the constitution is up for grabs.

## Conflicts of interest

- Organized delegate blocs and high-reputation actors benefit from weighting rules that amplify their voice in protocol votes.
- Whoever proposes the first concrete amendment mechanism can shape it to favor their own ratification.
- Platform operators may prefer low-friction amendment rules that ease their own desired changes.
- Actors seeking to weaken identity, allocation, or fiscalization safeguards benefit most from an undifferentiated amendment tier.

## Inconsistencies to test

- The protocol must be able to evolve, but open mode provides no rule for deciding who evolves it.
- C019 forbids silent rule changes, but an unspecified amendment rule can be filled in silently by the first mover.
- Tutored mode has a clear authority, but open mode — presented as the mature state — has none and no substitute.
- The model treats a guarantee-percentage edit and a reputation-weighting change as the same class of "protocol change," despite vastly different capture leverage.

## Stress scenario

A public function has operated in open mode for two years with broad trust. Turnout on protocol-change proposals is low because most citizens delegate or use default profiles. A coalition controlling a large block of represented weight submits a bundle of protocol changes: raise reputation weight in voting, lower the approval threshold, and shorten the review window. Because Core v0 never fixed open-mode amendment mechanics or a constitutional tier, the coalition proposes both the changes and the rule under which they pass. The audit trail records everything, but there is no entrenched rule the coalition had to overcome, and the system cannot tell a captured amendment from a legitimate one.

## Review checklist

- Does the protocol distinguish operational, collective-choice, and constitutional rule tiers with different amendment requirements?
- Must an open-mode proposal name its approval body, weighting, and quorum before advancing?
- Is a proposal barred from defining the mechanism by which it is itself ratified?
- Are identity, allocation authorization, and the amendment rule entrenched behind the constitutional tier by default?
- Are participation and concentration metrics exposed on protocol-change votes?
- Can the system distinguish a constitutional-level change from an operational parameter edit?

## Expected resolution output

A future Phase 3 review round should define tiered protocol-rule levels with a minimal default amendment rule and entrenched constitutional rules for open mode, without requiring Core v0 to implement full constitutional meta-governance.
