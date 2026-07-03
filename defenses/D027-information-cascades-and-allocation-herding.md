# D027 - Defense Against A027: Information Cascades and Allocation Herding

## Integration status

Second-round paired review completed. Accepted resolution: `docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION.md`. Propagated into the core corpus.

## Attack reference

- Attack file: `attacks/A027-information-cascades-and-allocation-herding.md`
- Attack title: `A027 - Information Cascades and Allocation Herding`
- Source: second-round attack queue, information cascades and allocation herding.

## Attack summary

The attack argues that visible funding progress, active-support counts, and delegate follower numbers turn each citizen's allocation into a public signal that later citizens rationally imitate. A citizen with weak private information infers value from the crowd and follows it, so early, partly arbitrary advantages compound into cascades, Matthew effects, and funding bubbles only loosely correlated with underlying value, amplified by discovery orderings such as "most supported" and "almost funded." Unlike A008, the attack assumes a scrupulously neutral platform: the herding is citizens rationally reacting to honestly displayed social proof, a cumulative-advantage dynamic intrinsic to visible signals rather than a defect the operator introduced.

The Macul example imagines two comparable sports projects launching the same week. Project A gets three early large commitments and crosses 40% funding first; sorted "almost funded," it ranks above B on every screen; weakly-informed citizens fund A because it is winning, and B stalls and expires unfunded. A was not better, only earlier, and the cascade did the rest.

## Objective evaluation

- Classification: founded.
- Why it is founded: visible funding progress is intrinsic social proof, early arbitrary advantage compounds through accumulated-signal ordering and follower counts, and no current mechanism measures herding or correlates funding velocity with evidence maturity.
- Why it is not fatal to the architecture: several dampeners are structural rather than cosmetic, since funding closes at target, discovery ordering is user-switchable with visible reasons, support and financing are separated signals, and delivery gates run after funding regardless of how the money arrived.
- Difference of judgment: medium. Social proof is also how information legitimately aggregates; Salganik shows unpredictability and inequality, not that every socially observed market is dysfunctional.
- Editorial distortion risk: medium. The attack would distort the project if it implied funding visibility must be hidden, which would gut transparency. The project's position is that social proof must be observable and dampen-able, not concealed.

## Response

The defense is that the architecture already limits cumulative advantage through structural rules that the attack underweights, even though it correctly identifies that herding itself is not yet measured.

First, funding closes at target under H035, which forbids indefinite overfunding by default, so a viral project cannot absorb unbounded money; once its lane closes, surplus attention must spill to other projects rather than compounding without limit. Second, discovery is not a single engagement-maximizing feed: C025 requires every project list to show its ordering mode and lets citizens switch it, and the available modes include random rotation and need-based orderings that do not rank by accumulated funding, so cumulative-advantage ordering is a choice the citizen can leave. H031 keeps discovery a layer that organizes attention rather than a decision layer that allocates. Third, H026 separates social support from financial contribution and refuses to treat money as extra legitimacy, so a full funding bar is not, by protocol, a quality certificate. Fourth, and most importantly, herded funding does not skip accountability: evidence, fiscalization, design gates, and closure run after funding regardless of how the money arrived, and A008's resolution forbids compact surfaces from hiding pending required evidence, complaint status, or design gates. A project that was merely early still faces the same delivery gates as one that was genuinely strong.

For the Macul pair, the defense narrows but survives the example. A citizen who leaves the default "almost funded" sort for random rotation or "near me" does not see A's early lead amplified, and even if A is herded to full funding, its execution funds remain reserved behind design and control gates that thin evidence cannot pass. If A's funding velocity outran its evidence, that is exactly the signal the platform should surface. The attack is right that today it does not: there is no measure that flags funding concentration relative to expressed value, and no independence-of-assessment signal.

The concession is real. Visible funding progress is intrinsic social proof that cannot be fully neutralized without hiding transparency the project refuses to hide; default orderings still influence citizens who never switch them; and A008 explicitly leaves causal exposure-to-funding attribution outside the Core v0 gate. So cascades can still form, and the architecture currently lacks the observability to name them when they do.

## Project-document basis

- [[H035-funding-target-closure-rule#^r76961cf6|knowledge/hypotheses/H035-funding-target-closure-rule.md]] states that a project closes each funding round at its declared target and commitments are not freely withdrawable, capping how much a viral project can absorb.
- [[H035-funding-target-closure-rule#^r12302376|knowledge/hypotheses/H035-funding-target-closure-rule.md]] states that the system should not allow indefinite overfunding by default, forcing surplus attention to spill elsewhere.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#^rd7ea4ce8|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] states that discovery may organize attention but must not become a hidden allocator.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION#Project list order|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]] lists random rotation among the switchable ordering modes, providing a non-accumulative alternative to "most supported."
- [[H031-transparent-project-discovery-layer#Distinction|knowledge/hypotheses/H031-transparent-project-discovery-layer.md]] distinguishes the decision layer that allocates resources from the discovery layer that only helps people find projects.
- [[H026-support-vs-financing-signals#^r60e9026a|knowledge/hypotheses/H026-support-vs-financing-signals.md]] states that support, funding, and complaint signals do not automatically substitute for each other, keeping social proof separate from feasibility.
- [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION#^r546ebdf3|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]] forbids compact surfaces from hiding pending required evidence, complaint status, or design gates, so delivery accountability survives herded funding.
- [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION#^re763e768|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]] records that causal exposure-to-funding attribution is not a Core v0 gate, confirming herding is not yet measured.

## Bibliographic basis

- Sushil Bikhchandani, David Hirshleifer, and Ivo Welch, "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades" (1992): cascades lock aggregates onto early moves, which the defense counters with target closure and switchable non-accumulative ordering.
- Matthew Salganik, Peter Dodds, and Duncan Watts, "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market" (2006): visible prior choices increase inequality and unpredictability but do not guarantee dysfunction, so the remedy is observability rather than concealment.
- Robert Merton, "The Matthew Effect in Science" (1968): accumulated advantage compounds, motivating measures that flag funding velocity detached from evidence.
- Cass Sunstein, `Infotopia: How Many Minds Produce Knowledge` (2006): exposure to others' judgments can suppress independent private signals, supporting separation of logistics facts from social-proof cues at the evaluation moment.
- Duncan Watts, `Everything Is Obvious: Once You Know the Answer` (2011): success in socially observed markets is path-dependent and cannot be read backward as merit, which is why post-funding delivery gates, not funding bars, decide value.

## Proposed improvements

Add herding observability and cumulative-advantage flags:

- funding-velocity versus evidence-maturity indicators that flag projects whose money outruns their evidence or support breadth;
- independence-of-assessment signals distinguishing considered evaluation from imitation at the aggregate level;
- interface separation of logistics facts (closing soon, almost funded) from social-proof cues (many supporters), with the latter dampen-able;
- published measures of funding concentration relative to expressed value signals.

## Applies to

- Funding-target closure;
- discovery and project-list ordering;
- support versus financing signals;
- administrative observability;
- audit trail.

## Defense strength and residual risk

Defense strength: strong on the structural dampeners (target closure, switchable ordering, support/financing separation, post-funding delivery gates), which meaningfully reduce how far an early lead can compound.

Residual risk: visible funding progress remains intrinsic social proof, default orderings still steer citizens who never switch them, and the platform cannot yet measure herding or correlate funding velocity with evidence maturity, so early-mover cascades can still misallocate attention and starve stronger latecomers. Staged-visibility experiments such as blind early windows remain Extension v1+.

## Decision

The attack is founded. Phase 3 should add herding observability, including funding-velocity-versus-evidence-maturity indicators and independence-of-assessment signals, while leaving advanced de-herding mechanisms to Extension v1+.
