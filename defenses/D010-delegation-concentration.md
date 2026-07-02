# D010 - Defense Against A010: Delegation Concentration

## Attack reference

- Attack file: `attacks/A010-delegation-concentration.md`
- Attack title: `A010 - Delegation Concentration`
- Roadmap source: Phase 3 priority objection, delegation concentration.

## Attack summary

The attack argues that delegation can create new power centers. Citizens may ignore warnings, reports may be weak, related delegates may split influence, and participation-support projects may become delegation-acquisition channels. In Macul, a sports federation could accumulate enough represented weight to fund related projects while appearing formally transparent.

## Objective evaluation

- Classification: founded as a concentration risk.
- Why it is founded: delegation can include low-capacity citizens, but it can also consolidate power.
- Why it is not fatal to the architecture: Core v0 already allows concentration by citizen choice only with visibility, represented-weight disclosure, reports, revocation, no automatic delegation commissions, and configurable caps where a public rule chooses them.
- Difference of judgment: medium. Whether to impose hard caps by default is a normative and implementation choice; Core v0 deliberately avoids a universal cap.
- Editorial distortion risk: medium. The attack would distort the project if it treats every voluntary delegation concentration as illegitimate. The project's position is not anti-delegation; it is anti-hidden concentration.

## Response

The defense is that delegation is scoped, accepted, visible, reportable, revocable, and non-ownership of citizen power.

Delegation should reduce participation burden without becoming hidden asset management. A delegate can act only inside accepted scope, with represented weight visible when acting. The citizen can revoke future delegation, and reports should be generated from the audit trail rather than depend on voluntary manual reporting.

For Macul, a high-concentration sports delegate can remain legitimate if citizens knowingly delegated to it after seeing concentration, conflicts, related-party warnings, reporting history, separate support funding, and cap effects where applicable. The risk becomes unacceptable when concentration is hidden, automatically monetized, or split through related entities to evade observability.

## Project-document basis

- `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md:11` states that delegated concentration must be visible, auditable, revocable, and configurable where stricter limits are chosen.
- `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md:19` states that the system must expose concentration, not override citizen choice with a universal anti-concentration rule.
- `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md:162` requires represented weight to be visible when a delegate acts.
- `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md:185` allows configurable caps but does not impose them globally.
- `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md:326` summarizes the v0 rule: visible before delegation, during delegated action, in reports, and in administrative observability.
- `docs/27_CITIZEN_DELEGATION_FLOW.md:7` defines delegation as simple, explicit, accepted, and immediately revocable for future actions.
- `docs/27_CITIZEN_DELEGATION_FLOW.md:266` requires baseline reports to be generated primarily from the delegated-action audit trail.
- `knowledge/hypotheses/H043-transparent-delegation-concentration.md:159` states that delegation concentration is not forbidden, but must never be hidden, automatically monetized, or reported as personal-only action.

## Bibliographic basis

- Robert Michels, `Political Parties` (1911): organized representation can drift toward oligarchy.
- Christian Blum and Christina Isabel Zuber, "Liquid Democracy: Potentials, Problems, and Perspectives" (2016): liquid delegation offers flexibility but creates concentration risks.
- Anson Kahng, Simon Mackenzie, and Ariel Procaccia, "Liquid Democracy: An Algorithmic Perspective" (2018): delegation networks can create structural concentration.
- Mancur Olson, `The Logic of Collective Action` (1965): organized groups can dominate diffuse citizens.
- Robert Dahl, `Who Governs?` (1961): power distribution must be empirically visible.

## Proposed improvements

Add delegation-concentration stress thresholds:

- high represented-weight warning thresholds by scope and action type;
- related-delegate cluster indicators;
- support-provider-and-delegate relationship disclosure;
- delegate funding to related projects observability;
- cap-effect disclosure where configured;
- report-sufficiency checks for high-concentration delegates.

## Applies to

- Delegation;
- Delegate role;
- delegated-action records;
- represented weight;
- delegation reports;
- participation-support projects;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong against hidden concentration, moderate against voluntary concentration.

Residual risk: citizens may ignore warnings and reports. The system can make concentration visible and revocable; it should not silently override every voluntary concentration unless a public, predeclared cap applies.

## Decision

The attack is founded but does not defeat delegation. Phase 3 should add stress thresholds, related-delegate observability, and report-sufficiency rules.
