# D031 - Defense Against A031: Polarization and Symbolic Capture of Allocation

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A031-polarization-and-symbolic-capture-of-allocation.md`
- Attack title: `A031 - Polarization and Symbolic Capture of Allocation`
- Source: second-round attack queue, affective polarization and symbolic capture.

## Attack summary

The attack argues that allocation can become an identity battleground rather than a public-value judgment: funding and defunding turn into tribal signaling, coordinated boycott or brigade-funding campaigns mobilize around projects, value/antivalue declarations become culture-war terrain, and affective polarization degrades the deliberation the system depends on. It targets motivated, expressive, group-identity-driven participation by citizens fully able to act but acting to punish an out-group or reward an in-group rather than to assess value. The system's value-icon and support-signal vocabulary hands polarization a public scoreboard on which tribes can keep score.

In the Macul example, a migrant-run football school and a rival club's facility become proxies in a local identity dispute. One faction brigades the migrant project with coordinated justified objections and contested antivalue declarations about "noise" and "safety"; the other counter-mobilizes brigade funding and mass support signals. Allocation now tracks tribal mobilization, not the projects' evidence or declared value, and the comment thread deters neutral residents entirely.

## Objective evaluation

- Classification: partially founded.
- Why it is founded: coordinated mobilization can flood a project with support or objections and can weaponize antivalue-ceiling declarations, and aggregate signals cannot by themselves distinguish a broadly legitimate project from a well-mobilized one; polarization does degrade the deliberation surface the system relies on.
- Why it is not fatal to the architecture: expressive, identity-driven allocation is legitimate citizen choice, and the system's job under P002 is not to police motive but to keep material harm gated regardless of motive. Antivalue declarations, affected-party evidence, common-good impact declarations, and threshold policies bind projects identically whether funded tribally or deliberatively, and the funding-target closure rule plus the separation of support from financing signals prevent brigading from becoming unbounded.
- Difference of judgment: high. Whether expressive, identity-driven allocation is a pathology to be suppressed or a legitimate form of democratic participation is a deep normative disagreement.
- Editorial distortion risk: high. The attack would distort the project if it implied the platform should judge citizens' motives; a system that discounted "tribal" support would arrogate to itself exactly the authority over value that P002 denies it.

## Response

The defense is that motives stay free while material effects stay gated: the platform does not adjudicate whether a citizen funded a project out of conviction or tribal loyalty, but it binds every project to the same evidence-backed value floors, antivalue ceilings, and closure rules regardless of the mobilization behind it.

P002 makes society sovereign in assigning value and refuses a central authority that decides which harms matter; the same principle forbids the platform from ruling that in-group or out-group motivation is illegitimate value judgment. The architecture's protection is therefore not motive-policing but harm-gating. An antivalue is managed through measurement, fulfillment and control evidence, fiscalization, correction, and disbursement or closure effects, not treated as a complaint by default — and a contested antivalue-ceiling declaration can support a complaint only if someone explicitly files it and it follows the ordinary complaint process. That is precisely what disarms the attack's brigading of "noise" and "safety" declarations against the Macul migrant project: a contested antivalue does not become a free-standing reputational weapon that defunds a rival by assertion; it routes through evidence and fiscalization, where a coordinated campaign without measurements changes nothing material. The common-good impact declaration reinforces this by refusing to create a hidden central authority that decides which goods matter, keeping the judgment evidence-linked rather than tribal.

The signal architecture also refuses to let mobilization masquerade as legitimacy. Support, justified objection, funding, and formal complaint are separate planes that do not automatically substitute for each other, and large funding concentration must not become hidden extra civic weight. A brigade-funded project is financially viable but does not thereby acquire broad social legitimacy; a project flooded with objections is not thereby defunded. The funding-target closure rule caps the counter-mobilization the attack describes: a project closes its execution lane at target and Core v0 does not allow indefinite overfunding by default, so a faction cannot pour unbounded brigade funding into a favored project to overwhelm a rival. Support and objection are reversible civic signals, so a citizen swept into a mobilization can withdraw, and the active count reflects current judgment rather than a permanent tribal tally.

Where the attack is genuinely founded is that aggregate signals cannot distinguish diffuse civic judgment from reciprocal mobilization, and that the comment surface can become hostile enough to drive out moderates. The honest boundary is that these are observability and deliberation-protection problems, not motive problems. The platform should surface mobilization-pattern indicators — synchronized timing, shared origin, reciprocal brigading across paired projects — as research and administrative observability only, so a well-brigaded project is not read as broadly legitimate, without discounting either side's signals or judging why citizens acted. For Macul, the two paired projects keep their expressive support and objections; what the system adds is a visible mobilization-pattern read for observers and unchanged evidence gating on the antivalue claims, so tribal funding buys feasibility but not a waiver from the noise measurements, the affected-party evidence, or the closure rule.

## Project-document basis

- [[P002-social-sovereignty-over-value#^r37610f41|knowledge/principles/P002-social-sovereignty-over-value.md]] states society is sovereign in assigning value, which forbids the platform from policing whether a citizen's motive is expressive or deliberative.
- [[P002-social-sovereignty-over-value#^r005f4f9f|knowledge/principles/P002-social-sovereignty-over-value.md]] requires the system to surface harms, require declarations, and activate guarantees when undeclared harms appear, letting society evaluate net value rather than a central authority.
- [[H012-distributed-value-antivalue-management#^r5baf4f5e|knowledge/hypotheses/H012-distributed-value-antivalue-management.md]] states an antivalue is managed through measurement, evidence, fiscalization, correction, and disbursement or closure effects rather than treated as a complaint by default.
- [[H012-distributed-value-antivalue-management#^rf0e403dd|knowledge/hypotheses/H012-distributed-value-antivalue-management.md]] states evidence can support a complaint only if someone explicitly files one following the complaint process, so a contested antivalue is not a free-standing weapon.
- [[H026-support-vs-financing-signals#^r60e9026a|knowledge/hypotheses/H026-support-vs-financing-signals.md]] states support, objection, funding, and complaint signals do not automatically substitute for each other.
- [[H026-support-vs-financing-signals#^rb2249dfb|knowledge/hypotheses/H026-support-vs-financing-signals.md]] states large funding concentration must not become hidden extra civic weight.
- [[60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION#^r8f1f50c6|docs/60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION.md]] states the common-good impact declaration must not create a hidden central authority that decides which goods matter.
- [[H035-funding-target-closure-rule#^r12302376|knowledge/hypotheses/H035-funding-target-closure-rule.md]] states the system should not allow indefinite overfunding by default, bounding brigade funding at the funding target.

## Bibliographic basis

- Shanto Iyengar, Gaurav Sood, and Yphtach Lelkes, "Affect, Not Ideology: A Social Identity Perspective on Polarization" (2012): polarization is increasingly affective, which the defense treats as a deliberation-quality problem to observe, not a motive to sanction.
- Cass Sunstein, "The Law of Group Polarization" (2002): like-minded deliberation moves to extremes, supporting deliberation-surface protection and mobilization-pattern visibility rather than signal suppression.
- Lilliana Mason, `Uncivil Agreement` (2018): stacked identities turn ordinary choices into loyalty expressions, which is why the platform gates material effects rather than judging the loyalty behind a choice.
- Jan-Werner Müller, `What Is Populism?` (2016): identity-based enemy framing delegitimizes out-groups, so contextual protected identity for targeted proposers and beneficiaries is a legitimate deliberation safeguard.
- Chantal Mouffe, `The Democratic Paradox` (2000): passionate, identity-laden contestation is constitutive of democracy rather than a defect, supporting the defense's refusal to treat expressive allocation as a pathology to be filtered out.

## Proposed improvements

Add polarization observability while keeping motive free and effects gated:

- distinguish, in observability, diffuse support from coordinated bursts through synchronized timing, shared origin, and reciprocal brigading across paired projects, without discounting either;
- surface mobilization-pattern indicators as research and administrative observability so a well-brigaded project is not read as broadly legitimate;
- require contested antivalue-ceiling declarations to route through evidence and fiscalization rather than functioning as reputational weapons;
- protect the comment and deliberation surface with civility and anti-brigading affordances and contextual protected identity for targeted proposers and beneficiaries;
- present value icons as evidence-linked promises rather than tribal badges;

## Applies to

- support and justified-objection signals;
- value icons and antivalue-ceiling declarations;
- common-good impact declaration;
- funding-target closure rule;
- comment and deliberation surface;
- administrative and research observability.

## Defense strength and residual risk

Defense strength: strong on the boundary that material harm stays gated regardless of motive and that brigaded signals do not convert into legitimacy or unbounded funding; deliberately limited on the expressive side, since the platform neither can nor should judge why citizens allocate.

Residual risk: aggregate signals still cannot fully separate diffuse judgment from reciprocal mobilization, mobilization-pattern indicators can themselves be gamed or contested, and a hostile comment surface can drive out moderate participants before any evidence gate engages. Deliberation quality degrades under polarization even when material effects are contained.

## Decision

The attack is partially founded. Phase 3 should add mobilization-pattern observability as research and administrative signals, keep contested antivalue declarations routed through evidence, and protect the deliberation surface — while holding the boundary that motives stay free and material effects stay gated, without the platform judging citizens' motives.
