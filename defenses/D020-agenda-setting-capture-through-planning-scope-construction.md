# D020 - Defense Against A020: Agenda-Setting Capture Through Planning Scope Construction

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A020-agenda-setting-capture-through-planning-scope-construction.md`
- Attack title: `A020 - Agenda-Setting Capture Through Planning Scope Construction`
- Source: second-round attack queue, agenda-setting and scope construction.

## Attack summary

The attack argues that whoever constructs Planning Scopes exercises the second face of power: they decide what citizens may fund at all, before any allocation, support, or fiscalization occurs. Core v0 requires every financeable project to align with an active Planning Scope but explicitly defers the governance of scope construction itself to an open question, leaving the largest gatekeeping power in the system undefended. Agenda control needs no visible veto: a scope that never lists an option makes that option unfundable and its absence invisible, so suppression leaves no complaint, objection, or Governance Resolution because nothing was ever proposed inside a scope that excluded it.

In the Macul example, the sports pilot opens a scope defined as "local sports infrastructure, child sports programs, and club equipment renewal." Residents who want funding for women's leagues, disability-access retrofits, or informal street-sport spaces find no eligible category. No project is rejected; the demand simply has nowhere to attach, and the scope's framing looks neutral and complete on the citizen surface.

## Objective evaluation

- Classification: founded.
- Why it is founded: the corpus itself classifies roadmap and planning-area construction as an unresolved open question and pushes it to Extension v1+, so the decisive gatekeeping act — drawing scope boundaries, categories, and eligibility framing — is genuinely undefended in Core v0. The attack confirms a self-identified gap rather than discovering a hidden one.
- Why it is not fatal to the architecture: Core v0 already requires the active scope used for eligibility to be visible, versioned, and auditable, requires no silent removal of project categories from financing, and forces tutored scope decisions to surface as public Governance Resolutions with declared review windows and timeout policies — more agenda observability than any current ministry provides under P001. Out-of-scope demand also stays visible because an Idea can be captured, supported, and objected to even when no active scope will fund it.
- Difference of judgment: medium. Whether Core v0 must define scope-construction governance before any pilot, or whether visible-but-unresolved construction is an acceptable interim state, is a matter of degree rather than principle.
- Editorial distortion risk: low-medium. The attack would distort the project only if it treated the declared open question as concealment; read plainly, it correctly names a top open item.

## Response

The defense is that scope construction is the corpus's own top open question, not a hidden flaw, and that Core v0's interim protections — scope-change observability and out-of-scope demand visibility — bound the harm even before construction governance is designed.

The architecture does not hide the gatekeeping power the attack targets; it flags it as unfinished. The roadmap-construction open question states that Core v0 does not yet define how the planning scope or national roadmap is built, and its working principle is explicit that Core v0 should not pretend roadmap construction is solved while keeping projects aligned to visible active scopes. H009 makes the same admission and, crucially, constrains what an active scope may do while construction stays unresolved: visible scope source, versioned rules, public reason where scope changes materially, and no silent removal of project categories from financing. The attack's strongest move — that suppression leaves no trace — is exactly what these rules push against: a category that is removed or narrowed must leave a versioned, reasoned trace, and in tutored mode the scope decision becomes a public Governance Resolution that citizens can comment on, support, object to, and follow. Whoever draws the Macul boundary cannot do so silently; the boundary and its material changes are civic objects.

The second interim protection is that excluded demand does not vanish. An Idea is a separate civic entity that expresses public value or social demand before it becomes a project, and H009 states plainly that outside-scope does not mean socially worthless — it means not currently eligible for execution financing under the active scope. The Macul residents who want women's leagues or disability-access retrofits are not silenced; they can raise those as Ideas, accumulate support and structured objections, and leave a durable record of demand that has nowhere to attach. That converts the attack's invisible suppression into visible unmet demand, which is precisely the signal a future scope-construction mechanism would consume.

Under P001, the comparison is against a current ministry that defines its own program categories in internal planning documents with no public exclusion statement, no versioned reason for each boundary, and no citizen channel to register demand the categories omit. Core v0 already beats that baseline on observability while conceding, honestly, that it does not yet govern who draws the boundary. The interim defense is not that the gap is closed; it is that the gap is visible, bounded, and instrumented, and that the suppressed demand the attack fears is capturable as Ideas rather than erased.

## Project-document basis

- `knowledge/open-questions/distributed-roadmap-construction-governance.md:13` states that Core v0 does not yet define how the planning scope or national roadmap itself is built.
- `knowledge/open-questions/distributed-roadmap-construction-governance.md:102` sets the working principle that Core v0 should not pretend roadmap construction is solved while keeping projects aligned to visible active scopes.
- `docs/34_CORE_V0_SCOPE_FREEZE.md:183` requires every financeable project to align with an active Planning Scope that is visible, versioned, and auditable, while stating Core v0 does not define the full roadmap-construction mechanism.
- `knowledge/hypotheses/H009-binding-evolutionary-planning.md:104` requires no silent removal of project categories from financing, against which agenda-narrowing must leave a trace.
- `knowledge/hypotheses/H009-binding-evolutionary-planning.md:156` states that outside-scope does not mean socially worthless, only not currently eligible for execution financing.
- `knowledge/hypotheses/H057-public-function-funding-scope-gating.md:11` states the authority may define or interpret the active Planning Scope in tutored mode, but the scope and material scope decisions must be public, versioned, and auditable.
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md:104` requires every material tutored governance decision to create a public Governance Resolution object.
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md:119` lists planning-scope interpretation or change among the decisions that must become Governance Resolutions.
- `docs/39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION.md:23` defines an Idea as a civic proposal expressing public value or social demand before it becomes projects, keeping out-of-scope demand visible.

## Bibliographic basis

- Peter Bachrach and Morton Baratz, "Two Faces of Power" (1962): agenda confinement is real power, which is why Core v0 requires scope boundaries and their material changes to be versioned and reasoned rather than tacit.
- E. E. Schattschneider, `The Semisovereign People` (1960): the definition of alternatives is the supreme instrument of power, so a published, auditable scope with no-silent-removal rules is the minimum defensible constraint.
- Steven Lukes, `Power: A Radical View` (1974): the third dimension shapes which demands even form; capturing excluded demand as visible Ideas is a partial counter to preference-shaping invisibility.
- William Riker, `The Art of Political Manipulation` (1986): whoever structures the choice set controls outcomes, which is exactly why the corpus refuses to declare scope construction solved and preserves it as an open governance problem.
- Richard McKelvey, "Intransitivities in Multidimensional Voting Models" (1976): agenda control can drive majority outcomes almost anywhere, reinforcing that scope-construction governance is a genuine unresolved requirement, not a detail.

## Proposed improvements

Advance scope construction from open question toward a versioned governance object:

- make scope construction a visible, versioned, attributable governance object recording who defined each scope, its category set, and its eligibility framing;
- require a public statement of what each scope excludes alongside what it includes, so omission becomes inspectable;
- add a citizen path to propose a scope, category, or eligibility change that leaves a visible trace even where advisory in tutored mode;
- expose observability metrics on scope churn, category concentration, and boundary-rejected demand;
- treat category and eligibility framing as higher-scrutiny changes than ordinary parameter edits;

## Applies to

- Planning Scope;
- Planning Scope construction authority;
- tutored-mode Governance Resolutions;
- Idea entity;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong on the interim protections — scope-change observability, no-silent-removal, and out-of-scope demand capture — and honest that these do not amount to scope-construction governance.

Residual risk: an authority can still frame a scope narrowly from the outset, and a first-instance narrow framing produces no removed-category trace because nothing was ever included. Idea capture surfaces the unmet demand but does not compel the authority to act on it. The gap is genuinely unresolved until roadmap-construction governance is designed.

## Decision

The attack is founded and partially unresolved: Core v0 does not yet govern scope construction. Phase 3 should carry scope-change observability and out-of-scope demand visibility as the interim defense while designing an attributable, versioned Planning Scope Construction object; full distributed roadmap construction remains Extension v1+.
