# A031 - Polarization and Symbolic Capture of Allocation

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION|docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md]] and propagated into the core corpus.

## Description

Allocation can become an identity battleground rather than a public-value judgment: funding and defunding turn into tribal signaling, coordinated boycott or brigade-funding campaigns mobilize around projects, and value/antivalue declarations become culture-war terrain, while affective polarization degrades the deliberation the system depends on. Unlike A009, which targets unequal capacity to participate, this attack targets motivated, expressive, group-identity-driven participation by citizens who are fully able to act but act to punish an out-group or reward an in-group rather than to assess value; it also differs from informational herding, where citizens copy others for lack of information, because here the driver is affective and identity-based, not informational. The system's value-icon and support-signal vocabulary hands polarization a public scoreboard on which tribes can keep score.

## Location in current project

- [[13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR|docs/13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR.md]] value-icon catalog and support-signal vocabulary that can become identity markers.
- [[H012-distributed-value-antivalue-management|knowledge/hypotheses/H012-distributed-value-antivalue-management.md]] value floors and antivalue ceilings open to contested value framing.
- [[H026-support-vs-financing-signals|knowledge/hypotheses/H026-support-vs-financing-signals.md]] reversible support and justified-objection signals that can be brigaded.
- [[P002-social-sovereignty-over-value|knowledge/principles/P002-social-sovereignty-over-value.md]] social sovereignty over value assignment.
- [[25_CITIZEN_COMMENT_AND_QUESTION_FLOW|docs/25_CITIZEN_COMMENT_AND_QUESTION_FLOW.md]] comment and question flow as a deliberation surface exposed to polarization.
- [[60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION|docs/60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION.md]] common-good impact declarations that can be contested along identity lines.

## Problem

The architecture rightly refuses to let a central authority define value, entrusting value and antivalue judgments to society through icons, support signals, objections, and comments. But social sovereignty over value assumes that citizens judge value; affective polarization makes them judge sides. When identity attachment is high, a project's category, sponsor, or associated group can trigger reward or punishment allocation regardless of its declared value or evidence. The very signals designed to surface authentic civic preference — support counts, objection counts, value icons, antivalue declarations — become instruments and trophies of group conflict. Coordinated campaigns can flood a project with support or objections, weaponize antivalue-ceiling declarations against disfavored proposers, and turn the comment flow into a hostility surface that drives moderate citizens out of deliberation.

Example:

```text
A Macul migrant-run football school and a rival club's facility become
proxies in a local identity dispute.
One faction brigades the migrant project with coordinated justified
objections and contested antivalue declarations about "noise" and "safety";
the other counter-mobilizes brigade funding and mass support signals.
Allocation now tracks tribal mobilization, not the projects' evidence or
declared value, and the comment thread deters neutral residents entirely.
```

## Recommended resolution path

- Distinguish, in observability, broad diffuse support from narrow coordinated bursts (synchronized timing, shared origin, reciprocal brigading across paired projects) without automatically discounting either.
- Keep support and objection as reversible civic signals but surface mobilization-pattern indicators so a well-brigaded project is not read as broadly legitimate.
- Require that contested antivalue-ceiling declarations still route through evidence and fiscalization rather than functioning as free-standing reputational weapons.
- Protect the comment and deliberation surface with civility and anti-brigading affordances, and preserve contextual protected identity for targeted proposers and beneficiaries.
- Present value icons as evidence-linked promises, not tribal badges, and avoid interface patterns that turn allocation into a live in-group/out-group scoreboard.
- Keep hard suppression of expressive participation out of Core v0 in favor of pattern visibility, evidence routing, and deliberation protection, consistent with the house philosophy.

## Theoretical base and citations

- Shanto Iyengar, Gaurav Sood, and Yphtach Lelkes, "Affect, Not Ideology: A Social Identity Perspective on Polarization" (2012): polarization is increasingly affective and identity-based, driving in-group reward and out-group hostility independent of policy content.
- Cass Sunstein, "The Law of Group Polarization" (2002): deliberating like-minded groups move toward more extreme positions, so open participation surfaces can amplify rather than temper division.
- Lilliana Mason, `Uncivil Agreement` (2018): stacked social identities intensify hostility and turn ordinary choices into expressions of group loyalty.
- Jan-Werner Müller, `What Is Populism?` (2016): identity-based "real people versus enemies" framing delegitimizes pluralist contestation and the standing of out-groups.

## Social reasons

Allocation of shared resources is emotionally charged, and identity gives citizens a fast, satisfying heuristic for whom to reward and whom to punish. But when allocation becomes a way to signal belonging or to defeat a rival group, minority, unpopular, or out-group projects lose funding regardless of their public value, and moderate citizens withdraw from a deliberation space that has become hostile. The people most harmed are those attached to socially marked identities, who become targets rather than participants.

## Conflicts of interest

- Organized identity factions can convert mobilization capacity into allocation outcomes against out-group projects.
- Proposers can invoke identity solidarity to attract funding and support unrelated to their project's declared value.
- Political entrepreneurs can use antivalue declarations as reputational weapons against rivals.
- Platform engagement dynamics may reward polarizing projects and comments with more visibility.

## Inconsistencies to test

- P002 entrusts value to society, but coordinated identity mobilization is not the deliberative social judgment the principle assumes.
- Support and objection are meant as civic signals, but brigading turns them into mobilization counts detached from value.
- Antivalue ceilings are meant to protect affected parties through evidence, but they can be wielded as free-standing symbolic attacks.
- The comment flow is meant to clarify and improve projects, but affective polarization can turn it into a deterrent to participation.

## Stress scenario

Two paired projects associated with rival social identities enter the same scope. Coordinated campaigns brigade one with objections and contested antivalue declarations while flooding the other with support and funding, and the comment threads fill with hostility. Aggregate signals show one project as broadly opposed and the other as broadly supported, but the pattern is reciprocal mobilization, not diffuse civic judgment. Neutral residents stop participating. The system faithfully records every reversible signal and every declaration, yet cannot distinguish a broadly legitimate project from a well-mobilized one, and cannot protect the deliberation surface it relies on.

## Review checklist

- Can observability distinguish diffuse support from coordinated, synchronized mobilization bursts?
- Are mobilization-pattern indicators surfaced so brigaded projects are not read as broadly legitimate?
- Do contested antivalue declarations still require evidence and fiscalization rather than standing as reputational weapons?
- Is the comment and deliberation surface protected by civility and anti-brigading affordances?
- Is contextual protected identity available to targeted proposers and beneficiaries?
- Do value icons read as evidence-linked promises rather than tribal badges?

## Resolution output

Resolved in [[99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION|docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md]] as a partially founded attack under P007: a bounded resolution fixing a motive-neutrality boundary. Citizens' reasons for funding are not platform business (P002), and material effects stay gated identically regardless of motive — antivalue declarations route through measurement and fiscalization, affected-party evidence and threshold policies bind, and a contested antivalue supports a complaint only if someone files one. Core v0 adds funding-bloc correlation observability (synchronized timing, shared origin, reciprocal brigading) as research and administrative data only, without discounting either side's signals, and funding-target closure (H035) bounds brigade amplitude on any single project. There is no motive policing, no viewpoint moderation of allocation, and no polarization score with platform effects. Expressive allocation can still shift aggregate spending toward symbolic battlegrounds; the architecture guarantees the fights stay materially accountable, not that they stop being fights — a declared limitation for the paper.
