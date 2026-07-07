# Deterrence-Stack Integrity Check and A041 Resolution v0

## Status

Accepted resolution for the ablation-round pair:

- Attack: [[A041-partial-deterrence-stack-deployment|attacks/A041-partial-deterrence-stack-deployment.md]]
- Defense: [[D041-partial-deterrence-stack-deployment|defenses/D041-partial-deterrence-stack-deployment.md]]

Author verdict (2026-07-06): accepted as recommended by D041 — a deployment-configuration
guardrail through existing objects, per the P007 integrate-or-bound rule. The attack is the
first sourced from the program's own stress-testing (the satellite ablation, engine v0.5)
rather than from a reviewer, and its evidence *confirms* the architecture: the deterrence
stack, deployed whole, is what delivers the headline; deployed partially, it can underperform
the status quo it replaces.

## Resolution decision

**The deterrence-stack integrity check.** Every scope's operating configuration computes and
publishes its deterrence-inequality margin — the incentive-compatibility threshold of the
formal companion note (Propositions 1–2), evaluated with the deployment's actual parameters
(detection resourcing, retention, guarantee, reputational memory horizon, future-selection
exposure) against the declared opportunist cost support of
[[105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION|docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md]] —
at launch and recomputed on every change to any deterrence term.

Deterrence terms are **complements, not substitutes**: at the designed operating point each
term's marginal contribution is near zero precisely because the others carry the inequality,
so marginal measurement systematically undervalues every component of a redundant system. A
deployment negotiated cut by cut — each concession defensible with its marginal number — can
cross the threshold invisibly and end below the status quo while looking instrumented. The
published margin makes the joint constraint the visible object of every such negotiation.

Consequential rules:

1. Reductions of any deterrence term are **administrative rule changes of the material
   class** under [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]]:
   visible, versioned, justified, never retroactive, and carrying the recomputed margin.
2. A **positive published margin is a precondition** of any semi-open automatic-approval
   envelope ([[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]]):
   where approval is automatic, no human stands between configuration and disbursement, so
   the configuration itself must prove the incentive floor holds.
3. Program evaluations **stratify results by margin compliance**, so a program cannot be
   judged on the average of above-threshold and below-threshold deployments.

## Rule added to Core v0

The scope operating-configuration record gains one derived, published field: the
deterrence-inequality margin, computed from values the configuration already records (the
Financial Assurance Profile's retention and guarantee, the control-budget resourcing of
docs/40 and docs/52 as the detection input, and the reputational memory policy). No new
entity, no new mechanism, no discretion added anywhere — the margin is arithmetic over the
existing configuration, following the published-declaration pattern of
[[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]].

## Macul example

The pilot negotiation proceeds exactly as before — counsel proposes waiving guarantee bonds
for small contractors, the budget office proposes keeping municipal inspection as-is, the
privacy review proposes capping reputational memory at twelve months. Each memo now carries
the recomputed margin. The first two concessions pass with the margin shrinking visibly in
the configuration record; the third arrives at a screen that reads: "margin: negative — this
configuration no longer deters diversion and cannot be published as compliant." The
negotiation does not end; it continues against the visible joint constraint — perhaps the
memory cap is lifted, perhaps the inspection budget is restored — instead of against three
disconnected marginal numbers that were each, individually, true.

## Citizen simplicity

Citizens see nothing new in daily use. The scope's public configuration card gains one plain
line — "anti-diversion protection: margin positive" — and the project cards change nothing.
The check protects citizens precisely by being boring: it prevents the deployment whose
failure they would otherwise discover through undelivered works.

## Transparency and accountability effect

The margin converts a silent institutional failure mode into a visible configuration state.
Every concession that touches the incentive floor becomes a versioned, reasoned, public rule
change with its consequence attached; a deployment that operates below threshold can no
longer claim it did not know, and a program evaluator can reconstruct, per deployment and
per period, whether the incentive floor held. The satellite ablation's numbers
(`distributed-governance-experiments`, ablation results of 2026-07-06) are the standing
quantification: single terms ≤ 0.003 apparent cost, joint removal −60% verified value and
0.87× against the status quo.

## Scope boundary and limitation

Per P007, this is a bounded integration: a derived field and a classification rule over
existing objects. It does not adjudicate what margin is *sufficient* beyond positivity —
safety buffers above zero are country or program configuration; it does not certify
deployment success (a scope can hold a positive margin and still fail on administrative
capacity, docs/103, or planning quality, docs/87); and it does not constrain the terms
themselves — any stack that holds the inequality is admissible, preserving jurisdictional
flexibility over which instruments carry the load.

## Residual risks

- The margin is computed against a **declared** opportunist cost support; a deployment can
  hold a formally positive margin against a mis-declared support. The docs/105 evidence
  discipline and pilot recalibration are the standing mitigations.
- Sophisticated capture could target the declaration itself (understating opportunist costs
  to make weak stacks look compliant); the declaration is public and category-matched to the
  audit evidence base, which makes the manipulation visible but not impossible.
- The complementarity warning depends on being read: the corpus states it where the
  disbursement terms are introduced, but prose cannot force a negotiator to open the
  document. The margin field is the mechanical backstop for exactly that case.

## Integration target

- The complements-not-substitutes warning is added to
  [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]]
  ("Funding is conditional") — done with this resolution.
- docs/110's semi-open envelope preconditions reference this check — done with this resolution.
- The manuscript adds the complementarity warning and the ablation evidence at its next
  version (v1.9 queue), in Section 5 (formal analysis) or Finding 7's vicinity.
- The satellite repository's traceability matrix gains the resolution anchor.
