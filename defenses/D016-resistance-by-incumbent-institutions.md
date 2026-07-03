# D016 - Defense Against A016: Resistance by Incumbent Institutions

## Integration status

Phase 3 paired review completed. Accepted resolution: [[82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION|docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md]], refined under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]] before core propagation. Propagated into the core corpus.

## Attack reference

- Attack file: [[A016-resistance-by-incumbent-institutions|attacks/A016-resistance-by-incumbent-institutions.md]]
- Attack title: `A016 - Resistance by Incumbent Institutions`
- Roadmap source: Phase 3 priority objection, resistance by incumbent institutions.

## Attack summary

The attack argues that incumbent institutions can resist, absorb, co-opt, delay, defund, legally constrain, or symbolically adopt the system while preserving existing control. A ministry could open a narrow tutored pilot, delay independent projects, approve authority-linked operators, and present the result as participatory.

## Objective evaluation

- Classification: founded as a transition and political-economy risk.
- Why it is founded: institutions preserve power through scope control, eligibility rules, budget integration, data access, legal authority, narratives, and delay.
- Why it is not fatal to the architecture: the model does not claim that a platform can force institutional transition. It can make tutored governance, scope control, authority-linked operators, timeouts, decisions, and moderation patterns visible and comparable.
- Difference of judgment: medium. Some resistance is legitimate legal control; some is capture.
- Editorial distortion risk: medium. The attack would distort the project if it makes implementation politics invisible or if it implies that institutional resistance proves the functional architecture is conceptually invalid.

## Response

The defense is comparative and observational.

The platform cannot force a country, ministry, or municipality to decentralize a public function. It can, however, prevent a tutored pilot from hiding rejection patterns, delay, operator privileges, scope narrowing, or silent gatekeeping behind the language of participation.

For a tutored sports pilot, the system should show scope opened, budget share, approval/rejection counts, reasons, review windows, timeouts, operator concentration, authority-linked operators, and whether decisions favor a controlled entity.

## Project-document basis

- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION#^r4325fc0d|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] states that the platform should not pretend to decide when a country must move from tutored to open mode.
- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION#C020 final resolution|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] requires every material tutored decision and silence to become public through Governance Resolutions or Review Timeout Resolutions.
- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION#^r0a7c9421|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] states that the platform cannot force distributed governance onto a country, but can prevent tutored governance from hiding behind the platform.
- [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION#^ree650ebd|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]] states that a public authority may not be judge and party inside the same scope.
- [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION#^rb1a52f8e|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]] states that public/private status is not the primary boundary; authority, control, privilege, contestability, accountability, and operating mode are.
- [[59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION#C021 final resolution|docs/59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION.md]] requires a minimal administrative observability baseline across lifecycle, funding, disbursement, evidence, fiscalization, complaints, operating-mode decisions, governance resolutions, timeouts, rule changes, and concentration indicators.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0#Control, Fiscalization, and Review Schemas|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] defines complaint admissibility/referral records that may route to scoped platform effects or external authority references.
- [[P007-integrate-or-bound-rule#^r520eddb3|knowledge/principles/P007-integrate-or-bound-rule.md]] classifies this as a bounded resolution: indicators over existing objects, with the political limit recorded openly rather than mechanized away.

## Bibliographic basis

- Douglass North, `Institutions, Institutional Change and Economic Performance` (1990): institutions persist through rules, incentives, and path dependence.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): governance structures reflect transaction costs and opportunism.
- George Stigler, "The Theory of Economic Regulation" (1971): regulation can be captured by interested actors.
- Mancur Olson, `The Rise and Decline of Nations` (1982): distributional coalitions can resist change.
- Elinor Ostrom, `Governing the Commons` (1990): institutional change requires rule fit, monitoring, and accountability.

## Proposed improvements

Add incumbent-resistance indicators:

- scope share opened to distributed financing;
- approval/rejection and timeout rates;
- rejection reason comparability;
- authority-linked operator participation;
- public operator privileges, subsidies, guarantees, or data access;
- independent versus controlled fiscalization rates;
- pilot outcomes compared with the incumbent baseline.

## Applies to

- tutored and semi-open operating modes;
- public authority boundary;
- state-owned operator eligibility;
- Planning Scope definition;
- Governance Resolutions;
- Review Timeout Resolutions;
- administrative observability.

## Defense strength and residual risk

Defense strength: moderate. The architecture can make resistance visible, but cannot eliminate political resistance by design.

Residual risk: incumbent institutions may comply formally while preserving control through legal, budgetary, or data choke points. That should be treated as an implementation limitation and measured openly.

## Decision

The attack is founded and bounded. The integrated answer is transition-pilot observability and incumbent-resistance indicators over existing OperatingMode, PlanningScope, and timeout objects. The declared limitation is political: a determined incumbent can still strangle a pilot through scope, budget, and legal choke points — the fiscal channel is attacked separately in A021 — and the architecture's claim is only that such strangulation becomes measurable and comparable instead of invisible.
