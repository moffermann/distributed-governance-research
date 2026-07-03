# D023 - Defense Against A023: Meta-Governance Vacuum in Open Mode

## Integration status

Second-round paired review completed. Accepted resolution: [[91_OPEN_MODE_GATING_AND_A023_RESOLUTION|docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md]]. Propagated into the core corpus.

## Attack reference

- Attack file: [[A023-meta-governance-vacuum-in-open-mode|attacks/A023-meta-governance-vacuum-in-open-mode.md]]
- Attack title: `A023 - Meta-Governance Vacuum in Open Mode`
- Source: second-round attack queue, open-mode constitutional capture.

## Attack summary

The attack argues that protocol-change governance defines change types, versioning, transition rules, and non-surprise guarantees, but the actual decision mechanics for non-tutored, open-mode protocol changes are deliberately blank: who votes, with what weights, under what quorum, and how constitutional-level rules are protected differently from operational parameters are all left as future work. Because whoever controls the rules for changing rules controls everything downstream, an open-mode system with an unspecified amendment rule is not neutral but an invitation for whoever first proposes a concrete mechanism to entrench themselves.

In the stress example, a public function reaches open mode and a well-organized delegate bloc proposes a bundle of protocol changes — lowering the approval threshold, raising reputation weight in voting, shortening the review window — and, because Core v0 never fixed open-mode amendment mechanics, also proposes the mechanism by which its own proposal is ratified. Every step is versioned and auditable, and the constitution is rewritten by whoever moved first.

## Objective evaluation

- Classification: founded as an admitted deferral.
- Why it is founded: C019 and H017 explicitly decline to specify how a non-tutored protocol change is decided, and Core v0 lists detailed non-tutored protocol voting mechanics and full constitutional meta-governance as Extension v1+. Open mode, presented as the mature state, has no authority and no substitute amendment rule, so the capture vector the attack names is real.
- Why it is not fatal to the architecture: C019 already defines change types, versioning, non-surprise, effective dates, transition rules, and rollback — the procedural shell exists; every current pilot runs in tutored or semi-open mode where decision mechanics do exist through an implementing authority, Governance Resolutions, and review timeouts; and the design defers open-mode voting explicitly rather than concealing it. Deploying open mode with an undefined amendment rule would itself violate the architecture's own non-surprise and no-silent-change principles.
- Difference of judgment: high. Whether Core v0 must define open-mode amendment mechanics before any pilot, or whether it is legitimate to ship a bounded system whose mature state is explicitly gated on later constitutional design, is a real disagreement about what "shippable" means.
- Editorial distortion risk: medium. The attack would distort the project if it treated a declared, documented deferral as hidden concealment; it strengthens the project if it is read as a gating condition on open-mode deployment.

## Response

The defense is that the open-mode amendment rule is a declared deferral with a working procedural shell around it, not a concealed vacuum, and that the architecture's own non-surprise principles forbid deploying open mode until the constitutional-level mechanics are resolved.

The procedural envelope the attack credits is substantial and load-bearing. C019's core principle is that the system may evolve but rule changes must be visible, versioned, justified, non-surprising, and governed by the operating mode in effect, and it states directly that non-tutored protocol change must not be an invisible administrator edit. H017 confirms that the exact approval mechanics may remain future work while Core v0 requires that protocol changes not be invisible administrator edits, and that the v0 job is to prevent silent rule changes, hidden authority, surprise retroactivity, and untraceable software changes. The deferral is therefore bounded: what is unspecified is the aggregation rule, not whether changes must be public, tiered by transition rule, or reversible. The attack's own stress scenario depends on a bloc proposing "the mechanism by which its own proposal is ratified" — but a system that requires every material change to be non-surprising and governed by the operating mode in effect cannot treat "invent the amendment rule and apply it in the same motion" as an ordinary, silent parameter edit. The missing piece is a fixed constitutional tier, not a blank check.

Second, no pilot deploys into the vacuum the attack describes. Core v0 does not force countries to exit tutored mode; it requires tutored decisions and tutored silence to become public civic objects through Governance Resolutions and Review Timeout Resolutions. In tutored and semi-open mode the decision authority exists — the implementing authority — and its acts are already traceable and contestable. Open mode is where control shifts to transparency, fiscalization, reputation, complaints, guarantees, and observability, and that is exactly the state Core v0 has not finished specifying. The correct reading is not that a captured open mode is authorized; it is that open-mode deployment is not yet authorized because its amendment mechanics are unwritten.

Under P001, current constitutions and by-laws also leave amendment rules to be interpreted, and organizations routinely operate for years under contested meta-rules; the platform's advantage is that it can refuse to open a self-governing mode at all until the amendment tier is fixed, and can make every protocol-change proposal public and reversible in the meantime. The honest position is that this is unresolved by design, and that the resolution is a gate: open mode must not ship until at least a minimal constitutional tier — entrenched rules, a fixed amendment rule that no proposal may define for itself, and participation metrics on protocol votes — exists. Shipping open mode without that would contradict the project's own commitments, which is itself the strongest internal defense against the capture the attack forecasts.

## Project-document basis

- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION#^r4ed28192|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]] states the system may evolve but rule changes must be visible, versioned, justified, non-surprising, and governed by the operating mode in effect.
- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION#^r8baa4b65|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]] records that the exact voting mechanics can remain future work — the deferral stated openly.
- [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION#^rdf942859|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]] requires that non-tutored protocol change must not be an invisible administrator edit.
- [[H017-meta-governance-protocol-evolution#^ra48a6bed|knowledge/hypotheses/H017-meta-governance-protocol-evolution.md]] sets the v0 requirement to prevent silent rule changes, hidden authority, surprise retroactivity, and untraceable software changes.
- [[H017-meta-governance-protocol-evolution#^rd26475e4|knowledge/hypotheses/H017-meta-governance-protocol-evolution.md]] states the exact approval mechanics may remain future work while protocol changes must not be invisible administrator edits.
- [[34_CORE_V0_SCOPE_FREEZE#^r2dfe7183|docs/34_CORE_V0_SCOPE_FREEZE.md]] states Core v0 does not force countries to exit tutored mode and requires tutored decisions and silence to become public civic objects.
- [[34_CORE_V0_SCOPE_FREEZE#^r0bcc0e34|docs/34_CORE_V0_SCOPE_FREEZE.md]] lists detailed non-tutored protocol voting mechanics as Extension v1+, confirming the deferral is declared.
- [[H058-operating-modes-for-transition#^r57196499|knowledge/hypotheses/H058-operating-modes-for-transition.md]] states open-mode control happens through transparency, fiscalization, reputation, complaints, guarantees, and observability — the state whose amendment rule remains unwritten.

## Bibliographic basis

- James Buchanan and Gordon Tullock, `The Calculus of Consent` (1962): constitutional rules require a stricter, higher-consent standard than in-period decisions, which supports gating open mode on a fixed constitutional amendment tier before deployment.
- Elinor Ostrom, `Governing the Commons` (1990): durable self-governance nests operational, collective-choice, and constitutional rule levels; adopting this tiering is the concrete resolution path the defense accepts.
- William Riker, `Liberalism Against Populism` (1982): without fixed structure, aggregation rules are manipulable, which is precisely why the project must not open a self-governing mode with an unspecified aggregation rule.
- Primavera De Filippi and Aaron Wright, `Blockchain and the Law` (2018): on-chain governance without constitutional constraints is routinely captured, a warning the defense treats as a deployment gate rather than a refutation.
- Jon Elster, `Ulysses and the Sirens` (1979): constitutions bind future majorities by making some rules costly to change, supporting a default entrenchment of identity, allocation authorization, and the amendment rule itself.

## Proposed improvements

Gate open-mode deployment on a minimal constitutional tier:

- define at least three protocol-rule tiers — operational, collective-choice, and constitutional — with escalating amendment requirements;
- require an open-mode proposal to name its approval body, weighting, and quorum before it can advance, so no proposal defines its own ratification;
- fix a minimal default amendment rule for constitutional-level changes, including no self-amendment of the amendment rule within one cycle;
- entrench verified identity, allocation authorization, and the amendment rule behind the constitutional tier by default;
- expose participation and concentration metrics on protocol-change votes;

## Applies to

- Protocol Change Proposal;
- operating modes, specifically open mode;
- Administrative Rule Change and System Implementation Change discipline;
- meta-governance rule tiers;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong that the deferral is declared and that the procedural shell and non-surprise principles forbid a silent self-ratifying amendment; weak on providing an actual open-mode amendment rule, which does not yet exist.

Residual risk: nothing in the current corpus mechanically prevents an implementer from opening a public function into open mode before the constitutional tier is designed. Until the gate is written as a hard precondition, the protection rests on principle rather than on an enforced check, and low-turnout capture of the eventual amendment rule remains possible.

## Decision

The attack is founded and explicitly unresolved by design. Phase 3 should treat open-mode deployment as gated on resolving constitutional-level decision mechanics — tiered rules, a fixed non-self-amending amendment rule, default entrenchment, and vote participation metrics — while full constitutional meta-governance remains Extension v1+.
