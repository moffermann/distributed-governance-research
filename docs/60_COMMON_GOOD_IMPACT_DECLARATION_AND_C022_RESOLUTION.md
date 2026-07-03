# Common-Good Impact Declaration and C022 Resolution v0

## Purpose

This document resolves contradiction C022 from the v0 contradiction checklist.

C022 was originally framed as a tension between classifying common-good governance programs as Extension v1+ while recognizing that Core v0 projects may affect common goods such as rivers, parks, plazas, schools, cultural assets, shared infrastructure, ecosystems, or public spaces.

The accepted resolution separates full common-good governance from project-level common-good impact declaration.

Core v0 does not include the full common-good charter system. However, Core v0 should require projects to declare relevant common-good impacts through the ordinary project fields for affected assets, affected parties, risks, antivalues, evidence, and fiscalization. ^r589e643c

## Status

Accepted as the v0 resolution for C022.

## Core principle

> A common-good governance program is an extension. A project-level common-good impact declaration is Core v0 when a project materially affects a common good. ^r07dbbf7d

The system should not ignore common-good conflicts merely because full common-good charter governance is not part of Core v0.

## The contradiction

The project already makes a clear distinction:

```text
Project:
  funded.

Common-good governance program:
  approved.
```

A full common-good governance program may define a long-term charter, compatibility rules, voting thresholds, derogation rules, and registry mechanics. That belongs to Extension v1+.

But a normal v0 project can still affect a common good.

If the project model does not ask about that impact, v0 could fund projects that alter shared resources without making the conflict visible.

## Example: public plaza

Project:

```text
Repair and illuminate a neighborhood plaza.
```

Declared value:

```text
Improve safety, night use, and community activity.
```

Common good affected:

```text
Public plaza.
```

Possible antivalues:

```text
night noise
reduced dark-sky conditions
displacement of informal uses
maintenance costs
conflict over who controls scheduled use
```

Required evidence may include:

```text
location map
photos
lighting plan
maintenance plan
affected-user observations
post-execution evidence
```

The project does not need a full common-good charter before it can exist. But it must declare that it affects a public plaza and expose the relevant risks, affected parties, evidence, and fiscalization needs.

## Example: river cleanup

Project:

```text
Clean part of a riverbank and install public access paths.
```

Common good affected:

```text
River basin / riverbank.
```

Relationship:

```text
improves access and environmental condition,
but may affect habitat, nearby residents, informal users, or future maintenance obligations.
```

The project should declare:

```text
common-good impact: yes
common-good type: river / ecosystem
relationship: restoration and public access
affected parties: nearby residents, users, environmental groups, local authorities
risks: erosion, habitat disturbance, maintenance failure
evidence: environmental observations, before/after photos, maintenance records
```

## Common-good governance program remains Extension v1+

Core v0 should not include:

- full common-good registry mechanics;
- governance charter approval process;
- charter voting thresholds;
- subordinate charters;
- charter derogation process;
- complete compatibility rule engine;
- national inventory of all common goods;
- full legal authority model for common-good governance.

These remain Extension v1+ or country implementation work.

The reason is scope control. Core v0 should remain focused on the first coherent project-based system.

## Common-good impact declaration is Core v0

Core v0 should include a lightweight field or structured section:

```text
Common-good impact declaration
```

This declaration is required when a project materially affects a common good.

It can also allow:

```text
No known common-good impact
Uncertain common-good impact
Common-good impact declared
```

The uncertain option matters because project proponents may not always know whether an asset counts as a common good or whether a charter exists.

## Minimum declaration fields

When common-good impact is declared or uncertain, the project should include:

```text
common-good impact status
common good affected, if identifiable
common-good type
location or scope
relationship to the common good
affected parties
beneficiary parties
known risks
known antivalues or externalities
mitigation plan, if applicable
evidence required
fiscalization needs
active charter relationship, if an active charter exists
uncertainties or unknowns
```

Common-good types may include:

```text
river
forest
coastline
park
plaza
school facility
shared infrastructure
heritage asset
ecosystem
air quality zone
water system
public cultural asset
other shared resource
```

## Relationship categories

A project may relate to a common good in different ways:

```text
improves
maintains
uses
modifies
restricts
extracts from
depends on
protects
mitigates harm to
creates risk for
creates conflict around
```

The relationship should be visible because "affects a common good" does not always mean "harms a common good."

Some projects exist precisely to protect, restore, or improve a common good.

## No automatic block when no charter exists

If no active common-good charter exists, the project should not be automatically blocked merely because it affects a common good. ^r1bd1788b

Accepted pattern:

```text
No active charter exists.
The project declares common-good impact.
The impact becomes visible through project fields, comments, evidence, fiscalization, complaint paths, and audit trail.
```

Rejected pattern:

```text
No common-good charter exists.
Therefore the project cannot be published or funded.
```

That would make Core v0 depend on the Extension v1+ common-good governance system.

## If an active charter exists

If the system already has an active common-good charter for the affected common good and scope, the project should declare its relationship to that charter.

Possible statuses:

```text
compatible
compatibility uncertain
potentially incompatible
not applicable
```

The project should explain the declared status.

If the project intersects with an active charter and omits that relationship, the omission should be treated as a relevant information failure.

Depending on severity, it may trigger:

- observation;
- fiscalization;
- complaint admission;
- reformulation;
- reputation impact;
- guarantee or retention consequences;
- pause;
- revocation.

## Not a hidden authority

The common-good impact declaration should not create a hidden central authority that decides which goods matter. ^r8f1f50c6

The system should surface the information and allow society, affected parties, fiscalizers, and reviewers to evaluate it.

This follows the project's principle that society is sovereign in assigning value and antivalue, while projects remain responsible for declaring known or reasonably foreseeable harms.

## Citizen-facing explanation

The citizen-facing view should be simple.

Example:

```text
Common-good impact:
Yes - Public plaza.

Relationship:
Improves lighting and repairs shared space.

Declared risks:
Night noise and maintenance burden.

Fiscalization:
Community evidence after installation.
```

The ordinary user does not need to understand the full common-good charter model.

## Project-owner guidance

Project owners should receive assisted prompts, not a complex legal questionnaire.

Example prompts:

```text
Does the project use, modify, restrict, or depend on a shared public asset?
Does it affect a river, park, plaza, school, shared infrastructure, heritage site, or ecosystem?
Could any group lose access, suffer noise, face environmental harm, or assume maintenance costs?
Is there an active charter or rule for this common good?
What evidence could show that the impact was handled responsibly?
```

AI assistance may suggest possible common-good impacts, but the responsibility for the declaration remains with the project actors.

## Relationship with risks, antivalues, affected parties, and evidence

The common-good impact declaration should not create a separate heavy process.

It should be implemented through existing v0 fields:

- affected assets;
- affected parties;
- beneficiaries;
- risks;
- antivalues;
- externalities;
- fulfillment evidence obligations;
- fiscalization requirements;
- comments;
- complaints;
- audit trail.

This keeps the system coherent and avoids duplicating the project model.

## C022 final resolution

C022 is resolved as follows:

```text
Core v0 does not include full common-good charter governance. However, projects must declare relevant common-good impacts through the ordinary project fields for affected assets, affected parties, risks, antivalues, evidence, and fiscalization. If an active common-good charter exists, the project must declare its relationship to that charter. If no active charter exists, the project is not automatically blocked, but the common-good impact remains visible, commentable, fiscalizable, and auditable. Full common-good governance programs, registry mechanics, charter voting, derogation, and subordinate charters remain Extension v1+.
```

Final rule:

> A project can affect a common good before the system has a full common-good governance program. That impact must be declared, visible, and auditable in Core v0.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- contradiction checklist;
- project object model;
- project creation and publication flow;
- citizen full project sheet;
- citizen project dashboard;
- fiscalization and evidence model;
- complaint flow;
- reformulation, pause, and revocation flow;
- scope classification matrix;
- common-good governance hypothesis;
- distributed governance system blueprint;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Project proponents may underdeclare common-good impact.
- The "uncertain" option may be overused to avoid responsibility.
- Some common-good conflicts may require legal or environmental expertise outside Core v0.
- Projects may affect unregistered common goods that the platform cannot automatically identify.
- Existing charters may be incomplete, contested, or legally ambiguous.
- Too many common-good prompts may increase project creation burden.

## Mitigations

- keep the declaration lightweight;
- allow "uncertain" while requiring explanation;
- use AI assistance to suggest possible common-good impacts without making the AI sovereign;
- allow affected parties to comment, object, and provide evidence;
- connect omissions to fiscalization, complaints, reputation, guarantees, pause, or revocation;
- require compatibility declaration only when an active charter exists;
- leave full charter governance to Extension v1+.

## Design rule

> Do not import the full common-good governance system into Core v0, but do not let Core v0 projects hide their impact on common goods.
