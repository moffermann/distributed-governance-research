# A035 - Administrative Capacity Cost of Tutored Operation

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]].

## Description

The architecture assigns the tutoring authority concrete, deadline-bound duties — reasoned Governance Resolutions inside declared review windows, admissibility review, scope maintenance, control coordination — but nowhere quantifies or even models the administrative capacity those duties consume. Unlike A012, which attacks procedural complexity imposed on projects and citizens, this attack targets the unbudgeted labor imposed on the implementing authority itself: the municipal staff who must operate the tutored scope, without whom the timeout machinery converts under-staffing directly into automatic governance outcomes.

## Location in current project

- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] creates the resolution and timeout duties without a capacity model.
- [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]] disciplines project-side burden but not authority-side staffing.
- [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]] makes fiscal delivery observable but not the administrative capacity that fiscal operation requires.
- [[48_AI_ASSISTANCE_AND_C008_RESOLUTION|docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md]] provides drafting assistance to proposers, only partially to the authority.
- [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]] names this gap as a declared open cost.

## Problem

Real pilots die quietly of unstaffed administration. A tutored scope at even five percent of a municipal sports budget generates a continuous stream of admissibility reviews, reasoned resolutions with legal exposure, scope interpretations, and control coordination — plausibly one to two dedicated professionals that no corpus document budgets, describes, or assigns. The architecture makes authority inaction visible and consequential through timeouts, which is correct, but visibility converts a staffing gap into automatic approvals, community overrides, or a paralyzed pilot blamed on the model rather than on the unfunded post.

Example:

```text
Commune X opens a tutored sports scope with existing staff. Thirty
projects arrive in the first quarter. The single part-time reviewer
misses review windows; timeout policy escalates to community override;
the mayor's office experiences the model as loss of control caused by
software, and the council votes to exit the pilot.
```

## Recommended resolution path

- Add an administrative capacity declaration to pilot design: expected review volume, staffing assignment, and per-resolution effort assumptions, published with the Planning Scope.
- Extend AI assistance explicitly to the authority side — drafting resolution skeletons, checking admissibility criteria, tracking windows — while keeping decisions human and attributable.
- Feed review-window performance into the H054 maturity metrics so under-capacity is diagnosed as staffing, not as model failure.
- Calibrate timeout policies to declared capacity: a scope staffed at one reviewer should not configure aggressive automatic-approval timeouts.
- Treat capacity quantification as an explicit pilot deliverable: measured hours per resolution type from the first pilot become the corpus's first empirical staffing data.

## Theoretical base and citations

- Matt Andrews, Lant Pritchett and Michael Woolcock, `Building State Capability` (2017): reforms fail when task load exceeds actual implementation capability, producing isomorphic mimicry.
- Francis Fukuyama, "What Is Governance?" (2013): governance quality depends on capacity relative to load, not on institutional design alone.
- Michael Lipsky, `Street-Level Bureaucracy` (1980): under-resourced administrators ration by queue and shortcut, reshaping policy from below.
- Christopher Pollitt and Geert Bouckaert, `Public Management Reform` (2011): reform costs concentrate in the transition layer that reformers most often leave unbudgeted.
- Herbert Simon, `Administrative Behavior` (1947): administrative attention is the scarce resource around which procedure must be designed.

## Social reasons

The people who bear an unbudgeted capacity cost are municipal employees with existing jobs, and the citizens whose projects stall in queues. A model that improves accountability by generating reviewable duties owes an honest account of who performs them, or it exports its costs to the weakest link of the chain it is trying to strengthen.

## Conflicts of interest

- Implementing authorities may understaff deliberately to slow a pilot while blaming the model (an A016 tactic wearing an operational excuse).
- Platform advocates may minimize capacity estimates to ease adoption.
- Consultancies may inflate them to sell support services.
- Municipal unions may resist duties added without posts.

## Inconsistencies to test

- Timeouts make authority silence consequential, but where silence is caused by unfunded capacity, consequences punish the pilot rather than the budget decision.
- The complexity budget disciplines what projects must produce, but no symmetric discipline governs what the authority must absorb.
- AI assistance reduces proposer-side drafting cost, but the review bottleneck it feeds is the under-modeled authority side.

## Stress scenario

Three municipalities launch tutored pilots the same year. The one that assigned two trained reviewers shows clean maturity metrics; the two that assigned nobody produce timeout cascades and exit. Published comparisons attribute the divergence to political will; the actual variable — budgeted reviewer hours — was never declared anywhere, so the lesson is lost and the model's reputation absorbs the damage.

## Review checklist

- Does every pilot publish an administrative capacity declaration alongside its Planning Scope?
- Are review-window performance and staffing levels jointly visible in maturity metrics?
- Are timeout policies calibrated to declared capacity rather than copied between scopes?
- Does authority-side AI assistance exist for resolution drafting and window tracking, with decisions remaining human?
- Does the first pilot commit to measuring hours per resolution type as an explicit deliverable?

## Resolution output

The accepted resolution defined an Administrative Capacity Declaration for tutored scopes, authority-side assistance boundaries, and capacity-calibrated timeout configuration, with empirical staffing measurement as a first-pilot deliverable.
