# H028 — Related-Party Conflict of Interest

## Hypothesis

A distributed public-resource allocation system must prevent actors from redirecting public resources toward projects that primarily benefit themselves, their companies, family members, controllers, or related parties.

Related-party links do not automatically make a project illegitimate. They must be declared, classified, exposed to public scrutiny, and handled with proportional safeguards. ^r8a873e54

## Resolution alignment

This hypothesis is aligned with:

- [[33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT|docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md]];
- [[34_CORE_V0_SCOPE_FREEZE|docs/34_CORE_V0_SCOPE_FREEZE.md]];
- [[35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP|docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md]];
- [[10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL|docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md]];
- [[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]];
- [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]];
- [[52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION|docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md]].

H028 defines the anti-self-benefit boundary. C002 and C013 define how independent control is selected and funded. C012 defines when hidden or misrepresented conflicts can become role-specific responsibility.

Under [[../../docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|A014]], this boundary is reinforced by a minimum related-party relationship graph and severity model expressed through existing declarations and `RelatedPartyConflictReview` rather than a new primary entity. The graph makes ownership and control chains, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, and authority-linked operator status visible where material, escalating hidden or control-relevant relationships to correction, blocking, exclusion, complaint, responsibility, or reputation effects while declared proximity stays proportional. The same graph serves A018 collusion observability, and beneficial-ownership verification remains a country-implementation decision.

## Rationale

If citizens can assign part of their taxes to projects, a wealthy actor could attempt to create a project, fund it with assignable taxes, execute it through a related company, operate the resulting asset, and capture the benefits.

This would turn distributed public funding into a hidden form of private self-financing.

At the same time, small communities, clubs, cooperatives, neighborhood groups, and local organizations may naturally overlap as proposers, users, operators, or indirect beneficiaries. The system should not punish legitimate proximity. It should distinguish declared public-value overlap from hidden private capture.

## Required declarations

Every project should declare:

- who proposes it;
- who models it;
- who executes it;
- who fiscalizes it;
- who produces paid evidence where applicable;
- who operates it;
- who owns the resulting asset;
- who receives revenue;
- who receives non-monetary benefits;
- who the final beneficiaries are;
- relationships among funders, modelers, executors, fiscalizers, evidence producers, operators, owners, revenue recipients, and beneficiaries.

These declarations should be structured fields in the project and control-offer flows, not a separate legal bureaucracy for every project.

## Proportional conflict handling

Related-party conflict handling should use a proportional classification:

```text
Declared low or indirect conflict
  Public disclosure, citizen-facing warning, and ordinary or targeted review.

Relevant conflict
  Public disclosure, explicit public-benefit safeguards, independent fiscalization or fulfillment/control evidence requirements, and visible access, pricing, ownership, or revenue rules where relevant.

Severe conflict
  Block, reject, reformulate, exclude the conflicted actor or supplier, require non-related execution/control, or prevent financing through assignable public resources.

Hidden or misrepresented conflict
  Complaint or review trigger, possible pause or disbursement block, correction requirement, and possible role-specific Responsibility Event when proven.
```

The key distinction is not whether a relationship exists. The key distinction is whether public resources are being used transparently for public value or secretly redirected toward private self-benefit.

## Citizen-facing simplicity

Ordinary citizens should not need to interpret a full conflict-of-interest legal file before participating.

The surface should show simple signals such as:

```text
Related-party warning:
The executor has a declared relationship with a proposed supplier.

Safeguards:
Independent control required.
Access rules published.
Revenue destination declared.

Status:
Allowed with safeguards / Requires reformulation / Blocked.
```

The full relationship record, classification reason, safeguards, objections, and audit trail remain available in the technical layers.

## Rule examples

### Community sports facility

A local sports organization proposes a multi-court complex in Macul. Its members will use the facility, but the project also guarantees public access hours, transparent beneficiary rules, published operating conditions, and independent fiscalization.

This may be legitimate if the relationship and benefit are declared, the public value is real, and safeguards prevent private capture.

### Hidden family supplier

The executor of the same Macul project hires a sibling's construction company without declaring the relationship.

This is not just a visible overlap. It is a hidden related-party conflict. It may justify blocking disbursements, requiring supplier replacement, opening review, and creating a Responsibility Event if the concealment is proven.

### Design-and-build holding

A company proposes a parent project called `Design and Construction of Multi-court Facility in Macul`. One holding company designs the facility and a related company builds it.

This is not automatically illegitimate if the relationship is declared. However, the project should expose the relationship, use a phase plan, and require independent design-gate verification where the Threshold Policy requires it. Construction funds may be reserved while design is pending, but they should not be released until the design package satisfies the minimum public-value baseline.

### Private business asset

If a project mainly benefits the funder's own company, it should not be financed through assignable public tax resources unless the private benefit is subordinated to a clear public-return structure with enforceable safeguards.

### Mixed public-private project

If a private actor proposes a project with real public value but also private benefit, the project must define:

- public beneficiaries;
- access guarantees;
- pricing rules if relevant;
- ownership structure;
- revenue destination;
- public return;
- fiscalization;
- conflict disclosure;
- independent support.

### Defense asset

A private actor may help fund an asset, but if the function is defense, operational control belongs under the competent defense institution or external public authority defined by the legal framework. Distributed funding does not create private control over coercive or strategic functions.

## What the system must not do

H028 rejects:

- hidden self-financing through civic tax assignment;
- executor-controlled fiscalization or evidence production;
- public-value language used to disguise mainly private benefit;
- undisclosed related ownership, revenue, subcontracting, or operational control;
- automatic approval merely because a project has funding;
- automatic rejection of every declared relationship regardless of severity.

## Principle

> Distributed public funding cannot become a mechanism for redirecting taxes toward private self-benefit.

> Declared proximity is not the same as hidden capture. The system should expose relationships, apply proportional safeguards, and reserve blocking or responsibility consequences for severe or concealed conflicts.

## Status

Core anti-capture hypothesis. Aligned with the v0 control, reputation, auditability, and citizen-simplicity rules.
