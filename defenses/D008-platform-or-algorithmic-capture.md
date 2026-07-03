# D008 - Defense Against A008: Platform or Algorithmic Capture

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A008-platform-or-algorithmic-capture.md`
- Attack title: `A008 - Platform or Algorithmic Capture`
- Roadmap source: Phase 3 priority objection, platform or algorithmic capture.

## Attack summary

The attack argues that even if algorithms do not formally decide, platform logic can become hidden authority by shaping discovery, warnings, validation assistance, summaries, recommendation reasons, evidence review assistance, and citizen attention. In Macul, an AI summary could frame objections as minor while promoting funding urgency.

## Objective evaluation

- Classification: founded and central to the model.
- Why it is founded: interface defaults, ranking, AI summaries, and validators can steer behavior without formal decision authority.
- Why it is not fatal to the architecture: the project already defines algorithms as coordinators, not sovereign deciders; AI cannot be final authority; discovery must be visible, switchable, explainable, non-commercial, and auditable.
- Difference of judgment: low. Algorithmic and platform capture are established risks.
- Editorial distortion risk: high if the attack pushes the project toward platform technocracy or toward rejecting all algorithmic assistance. The project's line is source-visible, correctable assistance under human/protocol/legal effect paths.

## Response

The defense is that platform influence must itself be auditable.

The system can use AI and platform logic to summarize, warn, validate completeness, detect anomalies, translate, or organize attention. But material platform influence must not silently become allocation, truth certification, fiscalization, reputation, or legal authority.

For Macul, an AI assistant may summarize objections about noise, bathrooms, and accessibility. It may not downgrade them as "minor resistance" unless the source basis and classification rule are visible, correctable, and reviewable.

## Project-document basis

- `knowledge/concepts/algorithm-as-coordinator.md:1` defines the central boundary: algorithm as coordinator, not decider.
- `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md:7` states that AI may assist, detect, summarize, suggest, transform, and warn, but is not an actor and does not make final civic, financial, reputational, or legal decisions.
- `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md:207` states that AI cannot be final authority over projects, funds, evidence truth, complaints, sanctions, reputation, fiscalizers, citizen choices, or closure.
- `docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md:17` states that discovery may organize attention but must not become a hidden allocator.
- `docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md:428` requires visible and switchable ordering, explained recommendations, no paid promotion, no opaque manual boosting, and bounded discovery observability.
- `docs/20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER.md:824` requires material discovery and visibility traces where they may affect funding or legitimacy.
- `docs/20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER.md:836` requires reviewers to reconstruct whether discovery acted as a hidden allocator.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:206` defines AssistedDeliberationContext as a read model that helps citizens review actions but does not decide, rank, certify truth, allocate funds, or suppress dissent.

## Bibliographic basis

- Joshua Kroll et al., "Accountable Algorithms" (2017): algorithmic systems need procedural accountability and contestability.
- Nicholas Diakopoulos, "Accountability in Algorithmic Decision Making" (2016): algorithmic power requires explanation, transparency, and audit.
- Frank Pasquale, `The Black Box Society` (2015): opaque intermediaries can hide power and accountability gaps.
- Lawrence Lessig, `Code and Other Laws of Cyberspace` (1999): code can regulate behavior like law.
- NIST, `AI Risk Management Framework 1.0` (2023): AI risk management requires governance, mapping, measurement, and management.

## Proposed improvements

Apply a platform-influence boundary through existing mechanisms:

- record material AI assistance for validation, publication, funding, evidence, complaints, disbursement, discovery, and rule changes;
- record recommendation and urgent-slot reasons;
- show when AI or platform summaries were corrected;
- separate technical implementation changes from substantive governance changes;
- preserve user-controlled ordering and search alternatives;
- keep advanced exposure-to-funding analytics, per-impression logs, and ranking-bias dashboards as Extension v1+ or implementation-level observability rather than Core v0 gates.

## Applies to

- AI assistance;
- AssistedDeliberationContext;
- discovery and recommendation surfaces;
- validation completeness checks;
- evidence review assistance;
- system implementation changes;
- audit-trail records.

## Defense strength and residual risk

Defense strength: strong as a principle, moderate as an empirical safeguard.

Residual risk: visual emphasis, language tone, default ordering, and summary framing can bias attention even if formally auditable. Later implementations may need metrics for actual platform influence, but Core v0 should not add a new citizen-facing audit burden for this alone.

## Decision

The attack is founded but directly anticipated by C008 and C025. Phase 3 resolves it as a platform-influence boundary: visible reasons, user controls, source-linked AI assistance, correction paths, and rule-change auditability, without adding a separate Core v0 platform-influence entity.
