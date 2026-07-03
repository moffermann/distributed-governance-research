# A014 - Related-Party Projects and Hidden Control

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] and propagated into the core corpus.

## Description

The architecture allows related-party projects when declared and proportionally safeguarded. This attack asks whether hidden ownership, holding structures, related suppliers, authority-controlled operators, or repeated relationships can turn the system into self-dealing.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objection: related-party projects.
- [[H028-related-party-conflict-of-interest|knowledge/hypotheses/H028-related-party-conflict-of-interest.md]].
- [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]].
- [[65_RESPONSIBILITY_MATRIX_BY_ROLE_V0|docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md]].
- [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]] object `Related-Party Conflict Review`.
- [[09_PROJECT_OBJECT_MODEL|docs/09_PROJECT_OBJECT_MODEL.md]].

## Problem

The system correctly avoids banning related parties by default, because design and execution may legitimately be performed by related firms. The failure mode is hidden control or weak safeguards, especially where the same holding benefits from design, execution, evidence, fiscalization, supply, or delegated funding.

Example:

```text
The Macul project is proposed by one company, designed by an affiliate, executed by another affiliate, and supplied by a related construction firm.
All appear as separate actors unless control relationships are declared and reviewed.
```

## Recommended resolution path

- Require ownership/control declarations for project roles and relevant suppliers.
- Classify conflict severity by role, control, benefit, disclosure, and formal effect.
- Allow declared low-risk relationships with visible warnings.
- Require independent control, fiscalization, or role exclusion for material conflicts.
- Treat hidden conflicts as stronger responsibility events than declared conflicts.

## Theoretical base and citations

- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agency costs arise when control and incentives diverge.
- George Stigler, "The Theory of Economic Regulation" (1971): regulated actors can shape control systems for their own benefit.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): capture can operate through information and interest-group influence.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): transaction costs and opportunism shape governance structures.
- George Akerlof, "The Market for Lemons" (1970): hidden information can undermine trust and selection.

## Social reasons

Related-party projects can be efficient and legitimate, but hidden self-dealing destroys trust. The social problem is not relationship itself; it is undisclosed control plus weak independent review.

## Conflicts of interest

- Related companies may split roles to appear independent.
- Fiscalizers may be indirectly tied through repeat business.
- Delegates may fund related organizations.
- Public authorities may favor controlled operators in tutored scopes.

## Inconsistencies to test

- Design-and-execution by one actor is allowed, but independent phase gate review is required where risk demands it.
- Public ownership alone does not exclude operators, but authority control in tutored scopes does.
- Related-party status is not automatic invalidity, but hidden related-party status may be severe.

## Stress scenario

A fiscalizer approves design deliverables for a company later found to share directors with the project executor and evidence producer.

## Review checklist

- Are ownership and control fields sufficient?
- Are supplier relationships included where material?
- Are repeated relationships visible?
- Are safeguards proportional to role and risk?
- Are hidden conflicts punished more strongly than disclosed conflicts?

## Resolution output

Resolved in [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]]: a minimum related-party relationship graph and severity model, integrated as observability over declarations already required by `RelatedPartyConflictReview` and the role model rather than a new primary entity. The graph covers ownership and control chains, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, and authority-linked operator status; declared proximity is handled proportionally, while hidden or control-relevant relationships escalate to correction, blocking, exclusion, complaint, responsibility, or reputation effects. The same graph serves A018 collusion observability. Core v0 does not require beneficial-ownership verification or corporate-registry integration; verification depth is a country-implementation decision and graph analytics remain Extension v1+.
