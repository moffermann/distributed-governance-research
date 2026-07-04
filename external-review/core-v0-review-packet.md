# Core v0 External Review Packet

## Purpose

This document is a review packet for external readers of the Distributed Governance System v0.

Its purpose is not to persuade reviewers that the model is correct.

Its purpose is to help reviewers attack the model productively.

The project should improve through criticism. The most useful review is one that identifies where the model is unclear, naïve, internally inconsistent, politically implausible, legally fragile, technically overcomplex, or insufficiently grounded in existing literature and practice.

## Primary document to review

Start with:

```text
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

The published academic manuscript behind this model — formal propositions and a seven-experiment simulation, five experiments pre-registered — is `drafts/paper.md` (v1.7; the v1.6 edition is archived as DOI 10.5281/zenodo.21193847).

This is the shortest professional entry point into the project.

It summarizes the minimal publishable model without requiring the reviewer to read the full repository.

Only after reading that document, reviewers may optionally consult:

```text
docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md
docs/34_CORE_V0_SCOPE_FREEZE.md
docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md
docs/64_FORMAL_ENTITY_INVENTORY_V0.md
docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md
docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md
research/literature-map.md
```

Reviewers should not feel required to read the entire repository.

## Short project summary

This project asks whether modern technology can help realign institutional incentives enough to improve citizen participation, reduce corruption opportunities, increase accountability, and perform part of the work currently monopolized by state institutions without destroying the existing institutional order.

The minimal model proposes a bounded public-project governance layer.

In this layer, public resources are allocated and controlled through financeable projects that:

- declare measurable public value;
- receive conditional funding rather than immediate uncontrolled payment;
- define how promised value will be evidenced;
- require proportional fiscalization and control;
- release funds by milestone, evidence, and review;
- allow comments, objections, complaints, and corrections;
- close through accountability records;
- update role-specific reputation according to verified fulfillment.

The model is not a proposal to abolish the state, vote on everything, replace all public institutions, or reduce governance to blockchain/DAO mechanics.

It is a functional architecture for a bounded layer of public project governance.

## Core review posture

Please do not review this as a political manifesto.

Review it as a proposed institutional architecture.

The most useful question is not:

```text
Do I agree with the ideology?
```

The useful questions are:

```text
Does the mechanism make sense?
Where does it fail?
What incentives are misaligned?
What abuses remain possible?
What legal or political assumptions are too weak?
What would a pilot need to prove?
```

## What kind of feedback is requested

The review should focus on failure modes.

Useful feedback includes:

- unclear definitions;
- missing assumptions;
- excessive complexity;
- weak institutional realism;
- legal or administrative obstacles;
- incentive problems;
- corruption or capture risks;
- participation or legitimacy gaps;
- missing literature;
- missing comparisons with existing systems;
- weak pilot design;
- claims that are too ambitious;
- claims that should be reframed or narrowed.

Less useful feedback:

- general agreement without criticism;
- broad ideological reactions;
- comments that assume the project claims to replace the entire state;
- comments that ignore the stated bounded scope;
- criticism without identifying the specific mechanism that fails.

## Mandatory review questions

Please answer as many of these as possible.

## 1. Basic clarity

```text
After reading the minimal model, can you explain in your own words what problem the project is trying to solve?
```

If not, where did the explanation become unclear?

## 2. Core contribution

```text
What is the strongest contribution of the model?
```

Possible answers may involve project-based governance, conditional funding, evidential contracts, fiscalization, reputation, or the separation between state authority and distributed project execution.

## 3. Weakest claim

```text
What is the weakest or least justified claim in the model?
```

Identify the sentence, section, or mechanism that feels most vulnerable.

## 4. Naïve assumption

```text
What assumption seems politically, legally, socially, or technically naïve?
```

Explain why.

## 5. Abuse not solved

```text
What corruption, capture, manipulation, collusion, or gaming strategy remains insufficiently addressed?
```

Be specific.

## 6. Complexity risk

```text
Which part of the model is too complex for citizens, administrators, implementers, or pilot partners?
```

Suggest what should be simplified first.

## 7. Legitimacy risk

```text
Does the model sufficiently distinguish citizen funding/support from democratic legitimacy?
```

If not, what is missing?

## 8. Legal or administrative obstacle

```text
Where would this model collide with public law, procurement rules, administrative procedure, budget law, treasury rules, privacy rules, or due process?
```

Name the legal area if possible.

## 9. Institutional resistance

```text
Which existing actor would resist this model most strongly, and why?
```

Examples may include ministries, municipalities, procurement offices, incumbent contractors, political parties, unions, audit bodies, or platform operators.

## 10. Pilot test

```text
What would a small pilot need to prove for you to take the model more seriously?
```

Possible proof points:

- citizens understand the model;
- project promises become more measurable;
- evidence quality improves;
- disbursement becomes more disciplined;
- corruption risk becomes more visible;
- complaints become more actionable;
- reputation influences future trust;
- administrative burden remains proportional.

## 11. Comparison with existing models

```text
What existing model should this be compared against?
```

Possible comparisons:

- participatory budgeting;
- public procurement;
- grants and funds;
- concession models;
- social impact bonds;
- civic-tech platforms;
- DAOs;
- public-private partnerships;
- open contracting;
- community monitoring;
- municipal project funds.

## 12. Missing literature or cases

```text
What authors, papers, cases, countries, programs, or failed experiments should be reviewed before publication?
```

Please list specific sources if possible.

## Reviewer-specific prompts

## If you are an academic or researcher

Please focus on:

- theoretical contribution;
- relationship to existing literature;
- conceptual novelty;
- overclaiming;
- missing definitions;
- falsifiability;
- whether this is best framed as political economy, public administration, mechanism design, digital governance, institutional design, or civic technology.

Specific questions:

```text
1. What field would you place this in?
2. What literature is obviously missing?
3. What claim would a peer reviewer attack first?
4. What should be narrowed before submission as a paper?
5. Is the model more appropriate as a working paper, white paper, case proposal, or academic article?
```

## If you are a public-sector practitioner

Please focus on:

- pilot feasibility;
- administrative compatibility;
- legal risks;
- procurement and budget constraints;
- political resistance;
- implementation sequencing;
- which public function could realistically be tested first.

Specific questions:

```text
1. Which part would fail first inside a public institution?
2. Which office would object?
3. Which public function is safest for a pilot?
4. What would need legal authorization?
5. What can be tested without legal reform?
```

## If you are a technologist or systems architect

Please focus on:

- implementability;
- data model complexity;
- workflow complexity;
- identity and privacy;
- audit trail design;
- evidence integrity;
- integration with payments, treasury, and document systems;
- security and abuse risks.

Specific questions:

```text
1. Which part is implementable now?
2. Which part is overengineered?
3. Which object or flow should be built first?
4. Where is the data model too complex?
5. What would be the minimum prototype?
```

## If you are a lawyer or public-law expert

Please focus on:

- administrative law;
- procurement law;
- budget law;
- treasury custody;
- liability;
- appeals and due process;
- sanctions;
- privacy;
- public authority boundaries.

Specific questions:

```text
1. What part conflicts most clearly with current legal frameworks?
2. What would need statutory authorization?
3. What could be done as a voluntary pilot?
4. How should appeals or review rights be handled?
5. Where is liability unclear?
```

## If you are a non-expert reader

Please focus on clarity.

Specific questions:

```text
1. Did you understand the basic idea?
2. Where did you get lost?
3. What sounded suspicious or unrealistic?
4. What example would help you understand it better?
5. What sentence made the project click, if any?
```

## Suggested review format

Please respond using this structure if possible.

```text
Reviewer background:
[briefly describe your perspective]

One-paragraph understanding of the model:
[explain what you think the project proposes]

Strongest part:
[what works best]

Weakest part:
[what fails, is unclear, or is overclaimed]

Most important objection:
[the single most important challenge]

Complexity risk:
[what should be simplified]

Legitimacy / legal / political risk:
[where relevant]

Implementation risk:
[where relevant]

Missing literature or cases:
[list]

Pilot recommendation:
[what should be tested first]

Bottom-line judgment:
[worth developing / promising but unclear / too broad / not viable / other]
```

## Suggested scoring rubric

Optional 1–5 scores:

```text
Clarity: __ / 5
Originality: __ / 5
Institutional realism: __ / 5
Legal plausibility: __ / 5
Technical plausibility: __ / 5
Pilotability: __ / 5
Risk handling: __ / 5
Publication readiness: __ / 5
```

Use the scores only as shorthand. The written criticism matters more.

## Suggested first reviewer group

The first external review round should be small.

Recommended reviewers:

```text
1. One public-law or administrative-law expert.
2. One academic or researcher in political economy, public administration, institutional economics, or digital governance.
3. One technologist or systems architect.
4. One person with direct public-sector or municipal experience.
5. One intelligent non-expert reader.
```

Do not send the first version to a large audience.

The purpose of the first round is to discover comprehension failures and major objections before public release.

## Message template for reviewers

```text
Hi [Name],

I am developing an independent research project on distributed public project governance.

The central question is whether modern technology can help realign institutional incentives to improve citizen participation, reduce corruption opportunities, increase accountability, and allow some public functions to be governed through measurable projects, conditional funding, evidence, fiscalization, and reputation — without destroying the existing institutional order.

I am not asking you to validate it. I am asking you to attack it.

The main document is:

docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md

If you have time, I would be especially grateful for criticism on:

1. what is unclear;
2. what is naïve;
3. what is legally, politically, or technically fragile;
4. what abuse or failure mode remains unresolved;
5. what would need to be proven in a small pilot.

You do not need to read the full repository. The minimal document is the intended entry point.

Thank you — direct criticism is more useful than general encouragement.
```

## How to process feedback

After receiving reviews, do not immediately rewrite the whole model.

First classify feedback into:

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
out-of-scope suggestion
```

Then decide whether each item should become:

```text
1. a revision to the minimal publishable model;
2. a new objection in the attack queue;
3. a note in the literature map;
4. a pilot-design requirement;
5. an implementation/schema issue;
6. an out-of-scope item.
```

## Review round success criteria

The review round is successful if it produces at least:

- one serious legal objection;
- one serious institutional or political objection;
- one serious technical or implementation objection;
- one clarity failure;
- one comparison to an existing model or real case;
- one concrete pilot requirement.

If all reviewers simply say the idea is interesting, the review round failed.

## Final instruction to reviewers

Please be direct.

The project improves more from precise objections than from polite agreement.
