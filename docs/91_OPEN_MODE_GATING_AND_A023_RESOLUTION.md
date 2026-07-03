# Open Mode Gating and A023 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A023-meta-governance-vacuum-in-open-mode.md`
- Defense: `defenses/D023-meta-governance-vacuum-in-open-mode.md`

## Resolution decision

A023 is founded as an admitted deferral. C019 and H017 define the procedural envelope of rule change — change types, versioning, non-surprise, effective dates, transition rules, and rollback — but explicitly decline to specify how a non-tutored, open-mode protocol change is decided: who votes, with what weights, under what quorum, and how constitutional-level rules are protected differently from operational parameters. Rule-level capture is the highest-leverage attack surface in any governance system, so an open mode shipped with an unspecified amendment rule invites whoever first proposes a concrete mechanism to entrench themselves. The accepted resolution is a gate: open mode must not deploy until constitutional-level decision mechanics are resolved and published.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution bounds — it formalizes the gate, not the mechanics. It records open-mode deployment as gated on future constitutional work while leaving the C019 procedural shell binding in every mode, rather than inventing an amendment rule in one review round, which test 3 forbids. The missing piece is a fixed constitutional tier, not a blank check, and defining it is future constitutional design, not configuration.

## Rule added to Core v0

Open-mode deployment is gated: no public function may exit into open mode until constitutional-level decision mechanics are resolved and published, while C019's procedural shell remains binding in every mode. Tutored and semi-open pilots may run indefinitely under existing Governance Resolution and Review Timeout machinery.

Minimum elements:

- no open-mode deployment until constitutional-level decision mechanics — who votes on protocol changes, with what weights and quorum, and how constitutional rules differ from operational ones — are resolved and published;
- the C019 procedural shell (change types, versioning, non-surprise, effective dates, transition and adaptation periods, rollback) remains binding in every mode;
- tutored and semi-open pilots may run indefinitely, where the implementing authority is the decision authority and its acts and silences become public civic objects through Governance Resolutions and Review Timeout Resolutions;
- when the mechanics are later designed, no proposal may define the mechanism by which it is itself ratified, and identity, allocation authorization, and the amendment rule are entrenched behind the constitutional tier;
- participation and concentration metrics on any eventual protocol-change vote, since low turnout is the classic capture vector.

## Macul example

The Macul sports pilot runs in tutored or semi-open mode, where the implementing authority decides protocol changes and every decision and timeout is a traceable, contestable civic object. It cannot exit into open mode by configuration: until the constitutional tier exists, a delegate bloc that proposed both a threshold-lowering change and the mechanism by which its own proposal is ratified would be attempting exactly the silent self-ratifying amendment that C019's non-surprise principle forbids. The gate makes premature open-mode deployment a violation of the architecture's own commitments rather than an available option.

## Citizen simplicity

Citizens should see which mode a public function operates in and that self-governing open mode is not yet available, with a plain statement such as `protocol changes here are decided by the tutoring authority and are fully versioned; open self-governance is gated until its amendment rules are published`.

## Transparency and accountability effect

The deferral is recorded as a hard gate rather than a hidden vacuum, so an implementer cannot quietly open a public function into a mode whose amendment rule is undefined, and the difference between a declared, documented deferral and concealed concealment is made explicit.

## Scope boundary and limitation

Core v0 fixes the gate and keeps the procedural shell binding; it does not define the open-mode amendment mechanics, which remain undefined by design. Tiered protocol-rule levels, a fixed non-self-amending amendment rule, default entrenchment, and vote-participation metrics are the future constitutional work, and full constitutional meta-governance remains Extension v1+.

Limitation statement: the architecture's mature state is unspecified at its highest-leverage layer, so any premature open-mode deployment would face rule-level capture with no defense, and until the gate is written as an enforced precondition the protection rests on principle rather than on a mechanical check.

## Residual risks

- Nothing in the current corpus mechanically prevents an implementer from opening a public function before the constitutional tier is designed.
- Low-turnout capture of the eventual amendment rule remains possible once open mode is defined.
- The open-mode amendment rule does not yet exist, so the strongest current protection is that shipping it undefined contradicts the project's own principles.

## Integration target

This resolution should inform the Protocol Change Proposal, operating modes and specifically open mode, the Administrative Rule Change and System Implementation Change discipline, meta-governance rule tiers, and administrative observability.
