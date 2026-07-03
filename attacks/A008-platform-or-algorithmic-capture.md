# A008 - Platform or Algorithmic Capture

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md`.

## Description

The architecture rejects algorithms as sovereign decision-makers, but the platform still structures attention, validation, warnings, matching, summaries, evidence review assistance, and audit visibility. This attack asks whether platform logic can become hidden authority.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: platform or algorithmic capture.
- `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md`.
- `docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md`.
- `knowledge/concepts/algorithm-as-coordinator.md`.
- `knowledge/hypotheses/H006-assisted-deliberation.md`.
- `docs/20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER.md`.

## Problem

Even if algorithms do not formally decide, they can shape which projects are seen, which risks are noticed, which evidence appears sufficient, and which summaries users trust.

Example:

```text
An AI assistant repeatedly frames Macul court objections as "minor local resistance" while highlighting sports benefits and funding urgency.
No formal rule is broken, but citizen attention is steered.
```

## Recommended resolution path

- Record material AI assistance when it affects validation, publication, funding, evidence, complaints, disbursement, or rule changes.
- Require source-visible summaries and correction channels.
- Keep ordering and recommendation reasons visible and switchable.
- Distinguish validation assistance from formal acceptance.
- Preserve material discovery and AI-assistance traces through existing audit and rule-change mechanisms.
- Treat advanced influence analytics, per-impression ranking logs, and causal exposure-to-funding metrics as Extension v1+ or implementation-level observability rather than Core v0 requirements.

## Theoretical base and citations

- Joshua Kroll et al., "Accountable Algorithms" (2017): algorithmic systems need procedural accountability and contestability.
- Nicholas Diakopoulos, "Accountability in Algorithmic Decision Making" (2016): algorithmic power requires explanation, transparency, and audit.
- Frank Pasquale, `The Black Box Society` (2015): opaque intermediaries can hide power and accountability gaps.
- NIST, `AI Risk Management Framework 1.0` (2023): AI risk management requires governance, mapping, measurement, and management.
- Lawrence Lessig, `Code and Other Laws of Cyberspace` (1999): code can regulate behavior like law.

## Social reasons

If platform defaults steer allocation, the system becomes a new centralized allocator disguised as citizen choice. Citizens need help, but not invisible behavioral control.

## Conflicts of interest

- Platform operators may optimize engagement or political acceptability.
- Public authorities may pressure platform configuration in tutored pilots.
- Project proponents may optimize content for recommendation rules.
- AI vendors may hide model behavior or training limitations.

## Inconsistencies to test

- AI may assist but not decide, yet validation gates and summaries can strongly affect outcomes.
- User customization reduces feed capture, but defaults still matter.
- Audit trails record events, but may not capture interface exposure or ranking effects.

## Stress scenario

Two projects are equally eligible. One is repeatedly shown as "recommended" because its evidence package is easier for the system to summarize. Funding concentrates there.

## Review checklist

- Are material recommendation reasons recorded?
- Can citizens switch ordering modes?
- Are AI outputs labeled and source-linked?
- Can affected actors challenge misleading summaries?
- Are implementation changes separated from policy changes?

## Expected resolution output

A Phase 3 resolution should define a platform-influence boundary for discovery, assisted deliberation, validation assistance, and AI-generated summaries, using existing C008/C025 controls instead of adding a new Core v0 entity.
