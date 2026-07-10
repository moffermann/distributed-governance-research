# Reviewer-Specific Briefs v0

> **⚠️ SUPERSEDED — DO NOT SEND AS-IS (2026-07-10).** These briefs target an earlier draft (v1.8-era) and its
> pre-Path-B evidence hierarchy (an F1–F8/eight-experiments framing with a compound multiplier). The project is
> now on **Path B**: the calibrated multiplier is **retired**; the one genuinely pre-registered confirmatory
> test is the **symmetry gate** (NO-GO — selection advantage positive but small, median Δ = 0.025 < 0.05).
> Current working draft is **v1.13**; controlling spec `research/claim-and-estimand-contract.md`. A refreshed
> v1.13 Path-B packet set + cover is a pending deliverable (roadmap R2-10). Retained for provenance only.

## Purpose

This document is an internal library of reviewer-specific briefs for the Distributed Governance System v0.

It complements:

```text
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
external-review/core-v0-review-packet.md
```

The published academic manuscript behind this model — formal propositions and an eight-experiment simulation, six experiments pre-registered — is `drafts/paper.md` (v1.8; the v1.7 edition is archived as DOI 10.5281/zenodo.21199738).

The purpose is to preserve one common project while adapting the entry point for different reviewers.

The model should not change by reviewer.

Only the review angle changes.

## Common anchor for all reviewers

This project asks whether modern technology can help realign institutional incentives enough to improve citizen participation, reduce corruption opportunities, increase accountability, and perform part of the work currently monopolized by state institutions without destroying the existing institutional order.

The minimal model proposes a bounded public-project governance layer where public resources can be allocated and controlled through projects that declare measurable value, receive conditional funding, produce contextualized evidence, undergo independent fiscalization, release funds by verified milestones, and update role-specific reputation according to verified fulfillment.

The model is not a proposal to abolish the state, vote on everything, replace all public institutions, or reduce public governance to blockchain/DAO mechanics.

It is a functional architecture for bounded public project governance.

## How to use these briefs

Use the common anchor in every outreach message.

Then select the reviewer-specific brief that matches the person.

Recommended reviewer types:

```text
1. Public-law / administrative-law reviewer
2. Academic / political economy / public administration reviewer
3. Systems architect / technologist reviewer
4. Public-sector / municipal practitioner reviewer
5. Intelligent non-expert reader
```

Each brief contains:

```text
reviewer-facing summary
why this reviewer matters
what to focus on
specific questions
short message template
```

## 1. Public-law / administrative-law reviewer brief

## Reviewer-facing summary

This project explores whether certain bounded public projects can be governed through a functional layer of conditional funding, evidence, fiscalization, milestone disbursement, complaint handling, closure accountability, and reputation, while preserving legally recognized public authority for rights, guarantees, budget frameworks, identity, treasury custody, sanctions, appeals, and country-specific implementation.

The model does not claim that a digital platform can replace administrative law.

It asks whether some project-level public governance functions can be made more transparent, contestable, and accountable through structured evidence and incentive alignment.

## Why this reviewer matters

A public-law reviewer is essential because the model may create effects that resemble public decisions:

```text
eligibility
funding allocation
disbursement blocking
complaint review
fiscalizer conclusions
reputation effects
guarantee activation
project closure
```

If any of these effects become legally binding, the model must address competence, procedure, due process, review rights, liability, and public authority boundaries.

## What to focus on

Please focus on:

- which system actions are merely informational;
- which actions are contractual;
- which actions could become administrative decisions;
- which actions require competent-authority ratification;
- where due process or appeal rights are missing;
- where reputation may become a de facto sanction;
- how this could be piloted without statutory reform;
- what would require legal reform.

## Specific questions

```text
1. Which parts of the model could produce legal effects?
2. Which parts can safely remain informational or reputational?
3. Where is administrative due process required?
4. Where would appeal or review rights be necessary?
5. Which actor would have legal competence to authorize, block, or reverse decisions?
6. What parts could operate through contract or voluntary pilot rules?
7. What parts would require legal or regulatory change?
8. Where is liability unclear?
9. What privacy or protected-identity risks appear?
10. What is the strongest legal objection to the model?
```

## Short message template

```text
Hi [Name],

I am developing an independent research project on distributed public project governance.

The project asks whether some public project functions can be made more transparent and accountable through measurable value promises, conditional funding, evidence, fiscalization, milestone disbursement, complaints, closure records, and role-specific reputation — without replacing the existing legal order.

I would especially value your review from a public-law perspective.

The main question for you is not whether the architecture is technically interesting, but where it collides with administrative law, public competence, due process, budget rules, procurement, liability, appeals, privacy, or control of legality.

Please be critical. I am trying to identify where the model is legally fragile or under-specified.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## 2. Academic / political economy / public administration reviewer brief

## Reviewer-facing summary

This project proposes a functional architecture for distributed public project governance. It decomposes public-resource allocation into a lifecycle of Planning Scopes, project value theses, evidential contracts, conditional funding, fiscalization, milestone disbursement, closure accountability, and reputation.

The theoretical claim is that the state should not be analyzed as a single institutional block. Public functions contain separable layers, some of which may require central authority, some hybrid governance, and some distributed verification, allocation, and accountability.

## Why this reviewer matters

An academic reviewer is needed to test whether the contribution is conceptually clear, whether it is already covered by existing literature, whether it overclaims, and which discipline should own the first paper.

The model touches multiple fields:

```text
political economy
public administration
institutional economics
mechanism design
digital governance
civic technology
polycentric governance
participatory budgeting
public accountability
```

The first publication must be framed carefully or it will appear too broad.

## What to focus on

Please focus on:

- conceptual novelty;
- closest literature;
- overclaiming;
- theoretical framing;
- falsifiability;
- whether the architecture should be narrowed;
- whether the model is a working paper, white paper, pilot proposal, or academic article;
- what a peer reviewer would attack first.

## Specific questions

```text
1. What field would you place this project in?
2. What existing literature most directly anticipates or challenges it?
3. What is the clearest theoretical contribution?
4. What claim is too broad or under-supported?
5. What definitions need tightening?
6. What comparison is missing?
7. What would a skeptical peer reviewer attack first?
8. What should be removed or deferred before publication?
9. What would need empirical validation?
10. Is this best published first as a working paper, white paper, conference paper, or journal article?
```

## Short message template

```text
Hi [Name],

I am preparing an independent working paper on distributed public project governance.

The core idea is that public-resource allocation can be decomposed into a project lifecycle: public scope, measurable value thesis, evidence contract, conditional funding, independent fiscalization, milestone disbursement, closure accountability, and role-specific reputation.

I would value your review from an academic/theoretical perspective.

I am especially interested in whether the contribution is clear, what literature it belongs to, what it overclaims, and what a skeptical reviewer would attack first.

Please be direct. I am not looking for validation; I am looking for the strongest objections before public release.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## 3. Systems architect / technologist reviewer brief

## Reviewer-facing summary

This project can be read as a workflow and data architecture for institutional accountability.

It defines actors, roles, project objects, evidence contexts, funding commitments, milestone gates, fiscalization assignments, complaints, audit events, closure records, and reputation updates.

The technical question is whether this can become an implementable system without collapsing under object complexity, workflow complexity, data-quality problems, privacy risk, or integration burden.

## Why this reviewer matters

A technologist can identify whether the architecture is implementable, whether the data model is too complex, which objects should be collapsed, which states are unnecessary, which parts should remain manual in a pilot, and what the minimum viable prototype should include.

## What to focus on

Please focus on:

- object model complexity;
- workflow/state complexity;
- MVP sequencing;
- identity and permissions;
- evidence integrity;
- audit trail design;
- privacy and protected identities;
- integration with payments, treasury, documents, and notification systems;
- manual versus automated operations;
- AI usage boundaries.

## Specific questions

```text
1. What is the minimum viable technical prototype?
2. Which object or flow is overengineered?
3. Which object is missing from an implementation perspective?
4. Where are there too many states?
5. Which data would be hardest to capture reliably?
6. Which decisions should remain manual in v0?
7. Where would identity, permissions, or privacy become difficult?
8. How should evidence integrity be handled in a minimal pilot?
9. What systems would this need to integrate with first?
10. What would you build first in 90 days?
```

## Short message template

```text
Hi [Name],

I am working on a research/prototype architecture for distributed public project governance.

You can read it as an institutional workflow system: actors, roles, projects, evidence, fiscalization, conditional funding, milestone disbursement, complaints, audit trail, closure, and reputation.

I would value your review as a systems architect/technologist.

Please focus on implementability: what is overengineered, what is missing, what should be manual first, what the MVP should contain, and where the data model or workflow becomes too complex.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## 4. Public-sector / municipal practitioner reviewer brief

## Reviewer-facing summary

This project proposes a bounded pilotable layer for public projects. It does not seek to replace a municipality, ministry, or public agency. It asks whether certain project domains can be made more transparent and accountable by requiring measurable value promises, evidence, proportional fiscalization, conditional disbursement, complaints, closure records, and reputation.

A public authority may still define the scope, budget lane, legal limits, eligibility, protected service floors, and operating mode.

## Why this reviewer matters

A public-sector practitioner can identify where the model would fail in real administration:

```text
political incentives
internal resistance
budget cycles
procurement constraints
staff capacity
provider behavior
citizen confusion
control bodies
legal review
operational overload
```

## What to focus on

Please focus on:

- pilot feasibility;
- what a municipality or ministry would resist;
- what could be tested without legal reform;
- which public function is safest;
- administrative burden;
- how officials, providers, and citizens would actually behave;
- what would be impossible in a real office.

## Specific questions

```text
1. Which part would fail first inside a public institution?
2. Which office or actor would resist it most?
3. What existing process does this most resemble?
4. What could be piloted without changing the law?
5. What would require a formal program rule or ordinance?
6. Which project domain is safest for a first pilot?
7. What would create too much administrative burden?
8. What would confuse citizens or local organizations?
9. What would contractors or providers try to game?
10. What would a pilot need to prove for you to recommend expanding it?
```

## Short message template

```text
Hi [Name],

I am developing a project on distributed public project governance.

The idea is not to replace public institutions, but to test whether some bounded public project areas can be governed with clearer value promises, conditional funding, evidence, fiscalization, milestone disbursement, complaints, closure records, and reputation.

I would value your review from a practical public-sector perspective.

Please focus on what would or would not work in a real municipality, ministry, program, budget lane, or public office.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## 5. Intelligent non-expert reader brief

## Reviewer-facing summary

This project asks a simple question in a complex area:

```text
Can some public projects be made more transparent and accountable if they must promise measurable value, receive money conditionally, show evidence, be checked by independent reviewers, and leave a reputation record based on whether they actually delivered?
```

The project is not trying to replace the entire state.

It is trying to design a better way to handle some public projects so citizens can understand what is promised, how money is released, what evidence exists, who checked it, what failed, and who should be trusted next time.

## Why this reviewer matters

A non-expert reader is essential because the system must eventually be understandable to ordinary citizens.

If the model only makes sense to lawyers, academics, or technologists, it fails one of its own goals.

## What to focus on

Please focus on:

- whether the basic idea is understandable;
- where the language becomes too abstract;
- what sounds suspicious;
- what sounds unrealistic;
- what example would help;
- whether the project feels useful or too complicated.

## Specific questions

```text
1. Can you explain the idea in your own words?
2. Where did you get lost?
3. What sounded unrealistic?
4. What sounded politically suspicious?
5. What sounded technically confusing?
6. What example would help you understand it better?
7. What sentence made the idea click?
8. What sentence felt like jargon?
9. Would you trust a project governed this way more than a normal public project? Why or why not?
10. What would you need to see in practice to believe it works?
```

## Short message template

```text
Hi [Name],

I am working on a project about making some public projects more transparent and accountable.

The basic idea is that a public project should clearly say what value it promises, how that value will be measured, what evidence will prove it, when money can be released, who checks the result, what happens if people complain, and how the executor's reputation changes afterward.

I do not need a technical review from you. I need to know whether the idea is understandable and what sounds unclear, suspicious, unrealistic, or too complicated.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## Optional additional reviewer profiles

The first round should stay small, but later rounds may include more specific profiles.

## Civic-tech / govtech founder

Focus:

```text
product-market fit for public-sector pilots
sales/adoption path
pilot packaging
platform risk
implementation sequencing
```

Questions:

```text
1. Who would buy or sponsor this first?
2. What is the smallest paid pilot?
3. What feature creates immediate value?
4. What is too theoretical for adoption?
5. What would make this credible to public-sector buyers?
```

## Anti-corruption / audit expert

Focus:

```text
corruption patterns
audit trail sufficiency
collusion
false evidence
related-party conflicts
control independence
```

Questions:

```text
1. What corruption pattern remains easiest?
2. What evidence would be most often manipulated?
3. How should audit sampling work?
4. How can fiscalizers be captured?
5. What should be visible to deter abuse?
```

## Community organization / local executor

Focus:

```text
burden on small organizations
understandability
ability to produce evidence
cash-flow constraints
fear of sanctions
```

Questions:

```text
1. Could a small organization use this?
2. What requirements would be too heavy?
3. What evidence could you realistically produce?
4. What would make you afraid to participate?
5. What support would you need?
```

## Suggested use sequence

Recommended sequence for the first review round:

```text
1. Send the non-expert brief to one intelligent non-expert.
2. Send the public-sector brief to one practitioner.
3. Send the public-law brief to one lawyer.
4. Send the systems brief to one technologist.
5. Send the academic brief to one academic or researcher.
```

Do not send all briefs to everyone.

Do not ask reviewers to read the full repository.

Do not ask reviewers to produce attack files.

Ask them to produce honest criticism in their own language.

Then convert the useful objections into the internal attack/defense workflow.

## Internal processing rule

Reviewer-specific briefs are for eliciting better criticism.

They are not separate versions of the theory.

After reviews arrive, preserve the raw feedback and classify each point as:

```text
clarity issue
framing issue
literature gap
legal risk
implementation risk
legitimacy risk
incentive problem
complexity problem
pilot-design issue
new attack
already resolved
out of scope
```

Only serious unresolved objections should become formal attack files.
