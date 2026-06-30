# H020 — Proportional Procedural Burden

## Hypothesis

All projects should share the same conceptual structure, but not the same procedural burden.

The level of design, documents, guarantees, fiscalization, admissibility review, evidence, and evaluation should be proportional to the project's size, risk, complexity, irreversibility, vulnerable beneficiaries, territory, public-function sensitivity, common-good impact, technical requirements, and potential antivalue.

Where project phases are used, the phase plan and phase-gate deliverables should also be proportional. A small workshop should not need a heavy phase structure. A design-and-construction project may need explicit design and construction phases because later execution funding depends on accepted design deliverables.

## Resolution alignment

This hypothesis is now aligned with:

- `knowledge/hypotheses/H027-proportional-project-thresholds.md`;
- `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`;
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`;
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md`;
- `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md`;
- `docs/29_PROJECT_CREATION_AND_PUBLICATION_FLOW.md`;
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`.

H020 should not create a separate bureaucracy.

H027 defines the visible `Threshold Policy`. H020 defines the procedural depth of that policy through a `Procedural Burden Profile`.

C002 and C013 already define project-associated control work. H020 uses that model for independent admissibility review where a project requires expert or certifying review before publication, financing, execution-ready status, disbursement, or closure.

C020 controls tutored-mode authority review: when an operating mode assigns admissibility or scope review to a competent public authority, the result should be recorded as a public governance decision or review record, not as hidden moderation.

C008 controls AI: AI may assist classification, requirement discovery, anomaly detection, and explanation, but it does not become the binding authority.

## Rationale

If every small project must follow the same architecture as a hospital, highway, data center, or industrial plant, the system becomes a digital bureaucracy.

If large or risky projects face only light social validation, the system becomes unsafe and gameable.

The system therefore needs proportional procedural burden:

```text
same conceptual object
different depth of requirements
```

The ordinary citizen should see simple missing conditions. The technical layer should preserve the policy, rationale, reviewer, document requirements, and audit trace.

## Core rule

Every financeable project should expose:

```text
Threshold Policy
Procedural Burden Profile
Project Evidential Contract
Project Phase plan where applicable
Control requirements where applicable
Admissibility review requirements where applicable
```

The `Threshold Policy` says which conditions apply.

The `Procedural Burden Profile` says how deep those conditions must be.

## Procedural burden profiles

### 1. Light burden

Small, low-risk, reversible projects.

Examples:

- puppet show;
- small workshop;
- community event;
- small cultural activity.

Likely requirements:

- simple value thesis;
- simple budget;
- basic evidence of execution;
- comments and social signals;
- low or no guarantee;
- no complex fiscalization;
- no independent admissibility review unless a special risk appears.

### 2. Standard burden

Ordinary local services, programs, or initiatives.

Examples:

- educational program;
- local sports initiative;
- neighborhood repair;
- small social program.

Likely requirements:

- clearer metrics;
- milestones;
- basic reporting;
- beneficiary feedback;
- light fiscalization;
- possible retention or guarantee;
- required documents checked for completeness.

### 3. Reinforced burden

Projects with higher budget, infrastructure, vulnerable beneficiaries, meaningful related-party risk, relevant antivalues, technical complexity, or public-access commitments.

Examples:

- Macul multi-court facility;
- school expansion;
- clinic equipment;
- public infrastructure repair;
- large social program.

Likely requirements:

- stronger project modeling;
- explicit design and construction phases where design deliverables gate later execution;
- permits or land-use documents where applicable;
- guarantees or retentions;
- execution milestones;
- independent fiscalization;
- Project Evidential Contract with stronger corroboration;
- public-benefit safeguards where related-party use exists;
- admissibility review if the Threshold Policy requires expert or authority acceptance of documents.

### 4. Critical burden

Projects with high irreversibility, high environmental/social/legal risk, regulated activity, safety implications, major infrastructure, or competent-authority boundaries.

Examples:

- industrial plant;
- data center with intensive water use;
- mining extraction project;
- highway;
- hospital;
- energy infrastructure;
- major environmental impact project.

Likely requirements:

- full modeling;
- strong guarantees;
- independent and specialized review;
- expert fiscalization;
- externality and antivalue analysis;
- continuous monitoring where applicable;
- formal documents from competent authorities where required;
- competent-authority or independent admissibility review;
- clear legal/regulatory boundary;
- strong reputation and responsibility consequences.

## AI-assisted requirement discovery

AI may help identify what documents and requirements a project appears to need.

AI may:

- suggest a procedural burden profile;
- detect project features such as infrastructure, water use, vulnerable beneficiaries, health, safety, permits, land use, environmental risk, indigenous community impact, public-access commitments, or duplication risk;
- generate a candidate required-document checklist;
- detect missing fields or missing documents;
- explain why a requirement applies;
- propose a simpler profile if the project is overburdened;
- flag possible under-classification for human or policy review.

AI should not:

- validate that a legal permit is legally sufficient;
- certify that an environmental study is correct;
- decide that a consultation process is valid;
- approve regulated activity;
- reject a project as a sovereign authority;
- replace a competent authority, certifier, fiscalizer, court, regulator, or protocol-defined reviewer.

## Requirement discovery versus document acceptability

H020 distinguishes two tasks:

```text
Requirement discovery:
  What documents or reviews does this project need?

Document acceptability:
  Are the submitted documents valid, sufficient, current, and applicable?
```

The system and AI can support requirement discovery.

Completeness checks may be automatic:

```text
required document uploaded
required field completed
format accepted
expiration date present
issuer declared
project reference declared
```

Acceptability checks should follow the active Threshold Policy.

## Project Admissibility Review

Some projects require a review of submitted documents or technical assumptions before they can be published, financed, marked execution-ready, receive disbursement, or close.

This project-level review should be called:

```text
Project Admissibility Review
```

It answers:

```text
Are the required documents and technical assumptions sufficient for this project to advance to the next state?
```

It does not answer:

```text
Should citizens fund this project?
Is the value thesis politically desirable?
Has execution already succeeded?
```

## Tutored mode treatment

In tutored mode, the competent authority may perform admissibility, eligibility, duplication, scope, or compatibility review where the operating mode grants that authority.

Examples:

```text
Ministry of Sports reviews whether a Macul multi-court project duplicates an already approved public project.

Municipality reviews whether land-use documentation is acceptable for publication.
```

The result should be traceable through a Governance Resolution, review record, or configured public decision object under C020.

## Non-tutored or open-mode treatment

In non-tutored or open modes, a required admissibility review should be handled by:

- an independent qualified reviewer;
- a professional certifier;
- an expert organization;
- a protocol-approved review body;
- another competent reviewer defined by the active Threshold Policy.

When review requires paid work, it may be modeled as a specialized Control Subproject:

```text
Control Subproject: Project Admissibility Review
```

This preserves the C002/C013 control model:

- linked to the parent project;
- scoped;
- budgeted;
- conflict-declared;
- selected through protocolized rules;
- not selected or privately paid by the executor;
- deliverables and decision public;
- reputation effects where review quality matters.

## Examples

### Small sports workshop

AI may detect:

```text
low budget
low irreversibility
no construction
ordinary beneficiaries
basic attendance evidence enough
```

Citizen-facing requirements:

```text
Funding complete.
Expected attendance declared.
Basic evidence plan accepted.
No blocking complaint.
```

No independent admissibility review is required unless the policy detects a special risk.

### Macul multi-court facility

AI may detect:

```text
physical infrastructure
land or venue use
public access commitment
design deliverables gating construction
possible duplication with ministry projects
construction milestones
related-party use risk if a local club benefits
```

Candidate requirements:

```text
design phase package
construction phase release block until design accepted
land-use document
municipal compatibility or permit where applicable
public-access conditions
construction milestones
independent control package
tutored duplication review if sports function is in tutored mode
```

In tutored mode, the Ministry of Sports or configured authority reviews duplication or scope and issues a public decision.

In non-tutored mode, an independent admissibility reviewer or certifier may review the land-use and feasibility documents if the Threshold Policy requires it.

### Data center with intensive water use

AI may detect:

```text
water-intensive infrastructure
environmental risk
territorial impact
technical permits
affected parties
competent-authority boundary
```

Candidate requirements:

```text
technical documents
water-use information
environmental documents where applicable
affected-party channels
specialized fiscalization
competent-authority or certified admissibility review
```

The platform may require documents and expose public traceability. It does not certify environmental legality or stop the project without competent authority or judicial action where applicable.

## Citizen simplicity rule

Ordinary citizens should see the result as simple missing conditions:

```text
This project still needs:
Funding.
Permit document.
Admissibility review.
One fiscalizer.
No unresolved blocking complaint.
```

Layer 5 preserves:

- profile classification;
- requirement source;
- AI assistance output where material;
- reviewer or authority;
- document checklist;
- completeness status;
- acceptability status;
- decision reason;
- audit references.

## Remaining risks

- Administrators may configure profiles too lightly for risky projects.
- Administrators may configure profiles too heavily and discourage participation.
- Proposers may try to under-classify risky projects.
- Independent reviewers may be scarce or expensive.
- Paid admissibility review may become a gatekeeping market.
- Authorities may delay tutored admissibility review.
- AI may over-trigger documents and create unnecessary paperwork.

## Mitigations

- keep citizen-facing conditions simple;
- expose profile rationale and source;
- use visible Threshold Policies;
- let AI suggest and explain but not bind;
- route paid review through Control Subproject rules;
- require conflict declarations and independence checks for reviewers;
- use C020 review windows and timeout policies where tutored authority review applies;
- allow public objections to under-classification or over-classification;
- preserve audit traces for profile changes.

## Principle

> The system must avoid both extremes: bureaucracy for small projects and insufficient control for high-risk projects.

> AI may help discover requirements, but accountable rules, competent authorities, independent reviewers, fiscalizers, or protocol-defined bodies validate acceptability where validation is required.

## Status

Aligned Core v0 usability and viability hypothesis.

H020 now functions as the procedural-depth layer of H027 Threshold Policies, with admissibility review handled through C020 authority review or C002/C013 Control Subproject rules where needed.
