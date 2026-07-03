# A027 - Information Cascades and Allocation Herding

## Status

Proposed in second-round architecture attack. Pending paired Phase 3 review; no defense brief or resolution yet.

## Description

Visible funding progress, active-support counts, and delegate follower numbers turn each citizen's allocation into a public signal that later citizens can observe and imitate. A rational citizen with weak private information about a project's value will rationally infer value from the crowd and follow it, so early, partly arbitrary advantages compound into cascades, Matthew effects, and funding bubbles only loosely correlated with underlying value, amplified further by discovery ordering modes such as "most supported" and "almost funded." Unlike A008, where the platform manipulates citizens, this attack assumes a scrupulously neutral platform: the herding is citizens rationally reacting to each other through honestly displayed social proof, a cumulative-advantage dynamic intrinsic to visible signals rather than a defect the operator introduced.

## Location in current project

- `docs/15_CITIZEN_HOME_DISCOVERY_LAYER.md`, which surfaces urgent, almost-funded, and signal-count information on the home layer.
- `knowledge/hypotheses/H031-transparent-project-discovery-layer.md`, which lists "high social support" and "close to funding completion" as discovery signals.
- `knowledge/hypotheses/H026-support-vs-financing-signals.md`, which displays active support, funding, and follower signals separately but still publicly.
- `docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md`, whose "most supported" and "almost ready" ordering modes rank projects by accumulated signal.
- `docs/16_CITIZEN_COMPACT_PROJECT_LIST_LAYER.md`, whose compact cards show funding progress and support counts side by side for fast comparison.
- `docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md`, which bounds platform-introduced influence but not citizen-on-citizen herding through visible reasons.

## Problem

The discovery and card layers deliberately show, for each project, how much has been funded, how close it is to completion, how many citizens support it, and how many follow a delegate. These signals exist to help citizens find relevant projects, and the platform displays them honestly. But honest social proof is exactly what drives informational cascades: when private information is weak — as it usually is for a citizen glancing at a monthly list — the rational move is to defer to the visible choices of earlier funders. Once enough early funders line up, each subsequent citizen's optimal action is to imitate regardless of private doubt, so the aggregate stops incorporating new private information and instead locks onto an early trajectory. Ordering by "most supported" or "almost funded" mechanically feeds the leaders more visibility, converting a small early lead into a durable one.

The consequence is that funding outcomes reflect early, partly random advantages — who happened to fund first, which project caught the launch window, which delegate moved first — more than underlying value. Experimental work on cultural markets shows that identical items diverge wildly in success when participants can see prior choices, and that success becomes both more unequal and less predictable. Applied to public money, this means allocation can concentrate on projects that are merely early or lucky, produce bubbles that detach from value, and starve latecomers of equal value. The platform does nothing wrong in A008's sense; the pathology is structural to displaying cumulative social signals at all.

Example:

```text
Two comparable Macul sports projects launch the same week.
Project A gets three early large commitments and crosses 40% funding first.
The list, sorted "almost funded," ranks A above B on every citizen's screen.
Weakly-informed citizens fund A because it is winning; B stalls and expires unfunded.
A was not better; it was earlier. The cascade did the rest.
```

## Recommended resolution path

- Offer, as a visible and switchable default, discovery orderings that do not rank by accumulated funding or support (for example rotation, near-me, need-based, or randomized exposure), so cumulative advantage is not the baseline path.
- Distinguish, in the interface, "this project is close to funding" (a logistics fact) from "many people chose this" (a social-proof signal), and let citizens dampen or hide the latter.
- Consider decoupling the funding-progress display from the evaluation moment: show value thesis, evidence, and fiscalization status before, and social counts only on request, so private information is consulted first.
- Add cascade and cumulative-advantage observability: publish measures of how concentrated funding is relative to expressed value signals, and flag projects whose funding velocity outruns their support breadth or evidence.
- Preserve the H026 separation of support from financing, and extend it so that neither support nor funding counts are presented as evidence of quality, only as what they are.
- Treat advanced de-herding mechanisms (blind early windows, staged reveal, exposure equalization) as Extension v1+ options, gated by explainability and audit, rather than Core v0 mandates.

## Theoretical base and citations

- Sushil Bikhchandani, David Hirshleifer, and Ivo Welch, "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades" (1992): once enough predecessors act alike, rational agents ignore private information and imitate, so aggregates lock onto early moves.
- Matthew Salganik, Peter Dodds, and Duncan Watts, "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market" (2006): making prior choices visible makes outcomes both more unequal and less predictable, weakening the link between quality and success.
- Robert Merton, "The Matthew Effect in Science" (1968): accumulated advantage compounds, so early recognition attracts disproportionate further recognition.
- Cass Sunstein, `Infotopia: How Many Minds Produce Knowledge` (2006): aggregation mechanisms that expose participants to each other's judgments can suppress the independent private signals that make aggregation informative.
- Duncan Watts, `Everything Is Obvious: Once You Know the Answer` (2011): success in socially observed markets is substantially path-dependent and cannot be read backward as proof of intrinsic merit.

## Social reasons

Citizens deciding among many projects with little time will sensibly treat the crowd as a shortcut for quality, and following visible momentum feels both efficient and safe. But when everyone reasons this way, the shortcut stops carrying independent information and the crowd follows itself. For public money this is corrosive: value that is real but unfashionable, local, or slow to attract early backers is systematically underfunded, while early or well-connected projects accumulate beyond their merit. The people least able to mount an early funding push — smaller or marginal proposers — are precisely those the cascade leaves behind.

## Conflicts of interest

- Early large funders and first-moving delegates benefit when their initial choices become self-fulfilling through cascade.
- Proposers who can orchestrate a fast launch burst gain durable ranking advantage unrelated to project quality.
- Delegates with large follower counts benefit from social-proof displays that recruit further delegation.
- Projects positioned near completion benefit from "almost funded" ordering that pulls in imitative funding.
- Any actor able to seed early visible support can convert a small, cheap head start into disproportionate allocation.

## Inconsistencies to test

- H026 insists money is not extra legitimacy, but a visible funding bar functions as a legitimacy cue that later funders herd on.
- C025 excludes paid and opaque boosting, but "most supported" and "almost funded" ordering grant boosting through honest accumulated signal.
- Discovery is defended as helping citizens find value, but ranking by prior choices can propagate early luck rather than value.
- Support and funding are shown as separate planes, but placed side by side on the same card they jointly drive imitation.

## Stress scenario

At the launch of a national cycle, a set of projects backed by well-organized proposers secures rapid early funding and support. Default and popular ordering modes surface these projects first on every citizen's list. Weakly-informed citizens, funding monthly with little time, defer to the visible leaders; the leaders' bars fill, their rank rises, and more imitative funding follows. By mid-cycle, funding is highly concentrated among the early movers, several of which have thin evidence and narrow support breadth, while comparable or stronger latecomers expire unfunded. Post-cycle analysis finds funding success is well predicted by launch-week timing and poorly predicted by independent value indicators. The platform introduced no bias of its own; it simply displayed accumulating social proof, and rational citizens did the rest.

## Review checklist

- Can a citizen choose, and can the system default to, discovery orderings that do not rank by accumulated funding or support?
- Are logistics facts (closing soon, almost funded) distinguishable from social-proof signals (many supporters), and can the latter be dampened?
- Is value, evidence, and fiscalization information available before social counts at the evaluation moment?
- Does the system publish measures of funding concentration relative to expressed value and evidence?
- Are projects whose funding velocity outruns their support breadth or evidence flagged for review?
- Is neither support count nor funding progress presented, in any surface, as evidence of project quality?

## Expected resolution output

A future Phase 3 review round should define a herding-resistance and cumulative-advantage observability standard covering non-accumulative default orderings, separation of logistics from social-proof cues at the evaluation moment, and published measures that flag funding concentration and velocity detached from value and evidence.
