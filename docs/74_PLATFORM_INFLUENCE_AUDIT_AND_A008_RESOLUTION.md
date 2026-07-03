# Platform Influence Boundary and A008 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A008-platform-or-algorithmic-capture|attacks/A008-platform-or-algorithmic-capture.md]]
- Defense: [[D008-platform-or-algorithmic-capture|defenses/D008-platform-or-algorithmic-capture.md]]

## Resolution decision

A008 is founded as a boundary problem: platform defaults, AI summaries, validation assistance, urgency labels, and recommendation surfaces can steer attention even when they do not formally decide.

The accepted resolution is not a new Core v0 entity, panel, or platform-influence module. C008 and C025 already provide the main defense: AI remains assistance infrastructure, discovery remains user-configurable navigation, recommendation and urgency reasons are visible, unresolved material warnings cannot be hidden, paid promotion is excluded, and opaque manual boosting is excluded.

Core v0 therefore treats A008 as a platform-influence boundary check over existing mechanisms.

## Rule added to Core v0

Core v0 requires only proportional controls:

- Home and discovery remain navigation surfaces, not hidden allocation feeds;
- citizens may reorder, pin, collapse, follow, hide, and reset Home categories;
- project lists must show and allow switching ordering modes;
- urgent, recommended, nearby, followed-scope, closing-soon, almost-funded, or similar attention labels must show their reason where material;
- compact surfaces must not hide unresolved material warnings, conditional approvals, pending required evidence, complaint status, design gates, or legitimacy-profile conditions; ^r546ebdf3
- paid promotion and opaque manual boosting are excluded;
- AI summaries or assistance that materially affect validation, publication, funding, evidence, complaints, disbursement, discovery, or rule changes must be labeled, source-linked, traceable, and correctable;
- validation or completeness assistance must not certify truth, accept evidence, approve projects, release funds, update reputation, or create legal consequences by itself;
- material changes to ordering rules, urgent-slot rules, recommendation logic, default Home behavior, AI-summary generation, validation logic, warning suppression, or citizen-facing labels must be handled through the existing `SystemImplementationChange`, `AdministrativeRuleChange`, `GovernanceResolution`, `ProtocolChangeProposal`, and `AuditEvent` paths where applicable.

Core v0 does not add:

- a separate `PlatformInfluenceRecord`;
- per-impression ranking logs as a universal requirement;
- causal exposure-to-funding attribution as a Core v0 gate; ^re763e768
- a public algorithmic audit dashboard for ordinary citizens;
- a new Layer 2+ surface dedicated to platform influence.

Advanced exposure analytics, bias dashboards, causal discovery-to-funding metrics, and detailed ranking audits may be useful as Extension v1+ or country/administrator observability, but they are not required for the first coherent model.

## Macul example

If a Macul multi-court project appears because it is nearby, followed by the citizen, almost funded, or close to a funding deadline, the card should say that plainly. If the same card has a pending design gate, unresolved bathroom/accessibility objection, or required consultation evidence, the compact warning must remain visible.

If an AI summary frames accessibility objections as minor local resistance while highlighting sports benefits and funding urgency, the source basis and correction path should be reviewable. Core v0 does not require a per-impression causal audit of every citizen who saw the card.

## Citizen simplicity

Citizens should see why a project appears, switch ordering modes, reset personalization, and open source material when a warning matters. They should not need to inspect a technical ranking audit to participate.

## Transparency and accountability effect

The platform remains a coordinator and assistance layer, not a hidden allocator, hidden evaluator, or hidden legitimacy producer. The key safeguard is visible citizen control plus source-linked material warnings, not a heavy new audit bureaucracy.

## Residual risks

- UI emphasis can bias attention even under visible rules.
- Model bias may be hard to detect.
- Default ordering can still influence citizens who never customize their view.
- Advanced influence measurement may be technically complex and should be tested later.

## Integration target

This resolution should inform AssistedDeliberationContext, Home/Discovery, recommendation surfaces, AI assistance traces, SystemImplementationChange, Layer 5 audit trail, C025 discovery controls, and C008 AI-assistance boundaries.
