# D002 - Defense Against A002: Information Capture and Visibility Control

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A002-information-capture-and-visibility-control.md`
- Attack title: `A002 - Information Capture and Visibility Control`
- Roadmap source: Phase 3 priority objection, information capture.

## Attack summary

The attack argues that even a distributed system can be captured through what citizens see: project summaries, value claims, evidence selection, fiscalizer reports, AI summaries, discovery ordering, urgent labels, and citizen-facing project cards. In the Macul example, "sports access" could be promoted while bathroom, accessibility, noise, or public-access omissions are buried in Layer 5.

## Objective evaluation

- Classification: founded as a design and implementation risk.
- Why it is founded: information asymmetry does not disappear when decision-making is distributed; interface design and AI summaries can steer attention.
- Why it is not fatal to the architecture: Core v0 already contains material information claims, source-visible assisted deliberation, visible discovery rules, AI non-authority, verified discovery, and Layer 5 auditability.
- Difference of judgment: low. The risk is empirically plausible and supported by information economics and platform-accountability literature.
- Editorial distortion risk: medium. The attack would distort the project if it implies that citizens should not receive summaries or discovery assistance. The correct line is explainable and auditable assistance, not an undifferentiated raw data dump.

## Response

The defense is that the architecture treats visibility as a governance surface, not as a neutral UI detail.

The system should not allow a project card, AI summary, urgent slot, recommendation, or compact status label to hide material limitations. Every material label that can affect funding, legitimacy, disbursement, trust, or reputation should connect to a source record, material information claim, evidence item, fiscalization report, complaint status, or rule reason.

For the Macul project, a compact card may say "almost funded" or "sports access," but it should also expose material warnings such as "design gate pending," "bathroom/accessibility evidence not yet accepted," "noise antivalue under review," or "affected-party objection present" where those items are material.

## Project-document basis

- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#^r6da5e362|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] recognizes that discovery and recommendations can bias resource allocation by shaping attention.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#^rd7ea4ce8|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] states that discovery must not become a hidden allocator.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#Resolution|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] excludes opaque manual boosting in Core v0.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#^r590a7c23|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] requires discovery influence to be measured.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#C025 final resolution|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] requires switchable ordering, explained urgent highlights, explained recommendations, no paid promotion, and discovery-influence observability.
- [[48_AI_ASSISTANCE_AND_C008_RESOLUTION#^r318cb914|docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md]] states that AI may assist but cannot be final authority over projects, funds, evidence truth, complaints, sanctions, reputation, fiscalizers, citizen choices, or closure.
- [[H006-assisted-deliberation#^r89232a1b|knowledge/hypotheses/H006-assisted-deliberation.md]] requires assisted deliberation to remain source-visible, correctable, and non-binding.
- [[20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER#^r82c23f17|docs/20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER.md]] requires material discovery and visibility traces where they may affect funding or legitimacy.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0#Value, Evidence, and Evaluation Schemas|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] defines `MaterialInformationClaim` for statements affecting funding, readiness, disbursement, closure, risk, trust, or reputation.

## Bibliographic basis

- Friedrich Hayek, "The Use of Knowledge in Society" (1945): dispersed knowledge is valuable but hard to aggregate centrally.
- George Akerlof, "The Market for Lemons" (1970): information asymmetry can undermine trust and selection quality.
- George Stigler, "The Theory of Economic Regulation" (1971): regulated information environments can be captured.
- Douglass North, `Institutions, Institutional Change and Economic Performance` (1990): institutions structure incentives and information flows.
- Joshua Kroll et al., "Accountable Algorithms" (2017): algorithmic systems need procedural accountability.
- Frank Pasquale, `The Black Box Society` (2015): opaque intermediaries can create hidden power.

## Proposed improvements

Define minimum material-visibility rules:

- every material project claim has a `MaterialInformationClaim` or equivalent source reference;
- compact project cards surface unresolved material warnings;
- AI-generated summaries list source categories and limitations;
- discovery reasons are preserved where visibility can affect funding;
- verified discovery can correct omitted material information;
- citizen-facing labels distinguish popularity, funding state, evidence sufficiency, fiscalization status, complaint status, and design readiness.

## Applies to

- Home / discovery layer;
- compact project cards;
- full project sheets;
- Assisted Deliberation Context;
- MaterialInformationClaim;
- VerifiedDiscovery;
- technical audit trail;
- AI-assisted summaries and validators.

## Defense strength and residual risk

Defense strength: strong as a transparency principle, moderate as a UI implementation guard.

Residual risk: visual design and default ordering can bias attention even when rules are visible. Core v0 handles this through citizen-switchable views, visible reasons, material-warning visibility, and auditability; platform-influence metrics and periodic ranking audits remain Extension v1+ or implementation-level observability.

## Decision

The attack is founded but already anticipated by C008, C025, H006, material-claim traceability, and Layer 5 auditability. Phase 3 should strengthen the connection between material claims, compact visibility, verified discovery, and the A008 platform-influence boundary.
