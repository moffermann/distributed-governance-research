# D022 - Defense Against A022: Thin Markets for Fiscalization and Evidence Supply

## Integration status

Second-round paired review completed. Accepted resolution: `docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A022-thin-markets-for-fiscalization-and-evidence-supply.md`
- Attack title: `A022 - Thin Markets for Fiscalization and Evidence Supply`
- Source: second-round attack queue, thin markets for fiscalization and evidence supply.

## Attack summary

The attack targets the supply side of control. Where A003 assumes fiscalizers exist and can be captured and A013 reviews the quality of what evidence producers submit, A022 asks whether independent qualified control supply exists at all in rural territories or narrow technical domains. It argues that control is a credence good whose quality the buyer cannot verify even after delivery, so in a thin market a single local expert can under-perform, over-charge, or collude with no competitor to switch to. Worse, the protocol's own safeguards backfire: qualification and method standards raise the entry barrier, and conflict-free selection becomes mathematically impossible when everyone qualified is related to the executor, the municipality, or each other.

In the example, a rural water committee proposes a chlorination and storage upgrade; the single sanitary engineer within two hundred kilometres is the cousin of the committee president and also advises the municipality, and no other accredited producer will travel for the offered control budget. The conflict rule and the qualification standard together leave zero admissible fiscalizers, so control never closes and the project cannot become execution-ready, while the centralized alternative certifies the same works with no such scrutiny.

## Objective evaluation

- Classification: partially founded.
- Why it is founded: in genuinely empty markets a specialized-domain monopoly fiscalizer is a real unresolved scenario, and conflict-free selection can be impossible where everyone qualified is connected; no protocol conjures supply that does not exist.
- Why it is not fatal to the architecture: proportional Threshold Policies and Procedural Burden Profiles already scale control to project size and risk, evidence-producer qualification applies only to hard KPIs and formal effects, and remote, pooled, and cross-territory control widen supply beyond the local expert pool.
- Difference of judgment: medium. The attack and the architecture disagree on how much of the control requirement is truly fixed versus proportional and remotely satisfiable.
- Editorial distortion risk: medium. The attack distorts the project if it reads the qualification requirement as universal for all evidence rather than as a standard reserved for paid, hard, formal-effect proof.

## Response

The defense is that the architecture already scales control to the project and reserves the heavy qualification standard for hard formal effects, so most thin-market projects do not face an infrastructure-grade control bill, while conceding that none of this manufactures supply where the qualified market is truly empty. Not every project should require the same combination of technical validation and institutional control, and procedural burden is proportional to size, risk, complexity, and territory. A small rural project sits in the light-burden band, where control can be executor self-report plus open observation plus voluntary fulfillment evidence, not a certified independent audit. The demanding producer-qualification standard applies only where evidence is paid or used for hard formal effects such as KPI verification, phase gates, and closure; ordinary citizen observation, beneficiary confirmation, and contradiction remain easy to submit and do not require accreditation.

Supply is also wider than the local expert pool. Control is a separated budget line funded from the parent project rather than paid by the executor, and low-risk control selection is rotation or random selection among admissible fiscalizers rather than a bespoke tender. Remote and instrument-assisted evidence, cross-territory fiscalizers rotating across many small projects, and explicit travel and logistics funding all extend reach into remote zones where the true cost of fiscalization includes travel and lodging. Supplemental control funding exists to reinforce packages where the minimum is thin.

For the rural water committee, the honest concession is that if the only accredited sanitary engineer within reach is the president's cousin and no one else will travel for the budget, the admissible set can genuinely be empty, and no observability layer changes that. What the architecture can add is a graduated, disclosed fallback: relaxed-but-disclosed conflicted selection under stronger safeguards, remote or secondary review, and a longer observation window, chosen openly as country implementation rather than hidden. The platform should make the thinness visible before publication instead of discovering it at control closure, so a structural supply gap is named as such rather than mislabelled as low demand.

## Project-document basis

- [[H027-proportional-project-thresholds#^r668ec788|knowledge/hypotheses/H027-proportional-project-thresholds.md]] states that not every project should require the same combination of financing, technical validation, or institutional control.
- [[H020-proportional-procedural-burden#^r42cc39cf|knowledge/hypotheses/H020-proportional-procedural-burden.md]] requires design, guarantees, fiscalization, and evidence to be proportional to the project's size, risk, complexity, and territory.
- [[10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL#Proportionality|docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md]] sets the small-project control model as executor self-report plus open observation plus voluntary fulfillment evidence.
- [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION#^re75cdb8c|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]] limits the higher producer-qualification standard to paid evidence or hard formal effects, keeping citizen observation easy.
- [[52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION#Relationship with execution-ready state|docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md]] recognizes remote and extreme-zone fiscalization cost, including travel, lodging, and multiple visits, as a fundable control component.
- [[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION#Low-risk projects|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]] sets low-risk control selection as rotation or random selection among admissible fiscalizers rather than a heavy procedure.
- [[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION#^r757f12a9|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]] funds the control subproject from the parent project's control budget, separating supply cost from the executor.
- [[H020-proportional-procedural-burden#^r26dda873|knowledge/hypotheses/H020-proportional-procedural-burden.md]] records the residual risk that independent reviewers may be scarce or expensive, the exact thin-market condition the attack names.

## Bibliographic basis

- Uwe Dulleck and Rudolf Kerschbamer, "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods" (2006): because control quality is unverifiable even after delivery, the architecture substitutes contradictability, repeat-relationship visibility, and secondary review for the competition that thin markets lack.
- Andrew Abbott, `The System of Professions` (1988): accreditation both guarantees competence and restricts entry, which is why the heavy qualification standard is reserved for hard formal effects rather than imposed on all evidence.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): small-numbers bargaining creates bilateral monopoly, so the defense relies on pooled, remote, and cross-territory supply to restore some contestability.
- George Akerlof, "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism" (1970): quality uncertainty can unravel a market, so a visible thinness indicator warns before publication rather than at control closure.
- Kenneth Arrow, "Uncertainty and the Welfare Economics of Medical Care" (1963): expert-service markets are incomplete and rely on non-market and reputational substitutes, which the disclosed graduated fallback formalizes.

## Proposed improvements

Add control-supply density observability and thin-market handling:

- a control-supply thinness indicator per Planning Scope and territory measuring how many independent, admissible, unrelated suppliers exist for a project's risk class;
- proportionate remote, pooled, and shared-control mechanisms for territories where physical supply is scarce;
- a disclosed graduated fallback of relaxed-but-disclosed conflicted selection under stronger safeguards, remote review, and longer observation windows as country implementation;
- an explicit territorial control-cost line funding travel, logistics, and capacity building so fixed access cost does not kill small projects.

## Applies to

- Fiscalizer and evidence-producer roles;
- Control Subproject selection;
- Threshold Policy and Procedural Burden Profile;
- territorial and administrative observability.

## Defense strength and residual risk

Defense strength: strong against the claim that qualification requirements are universal and that all projects carry an infrastructure-grade control bill; moderate against genuinely empty specialized markets.

Residual risk: in a truly empty admissible set, control cannot close on independent terms, and the only remaining options are disclosed conflicted control or no project. The thinness indicator and fallback make the gap visible and honest, but they do not create suppliers where none exist.

## Decision

The attack is partially founded. Phase 3 should add control-supply density observability and an explicit, disclosed thin-market fallback, while conceding that specialized-domain monopoly and unavoidable conflict remain real limits that observability surfaces rather than cures.
