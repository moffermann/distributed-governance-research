# D035 - Defense Against A035: Administrative Capacity Cost of Tutored Operation

## Integration status

External-review round paired review completed. Accepted resolution: [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]]. Propagated into the core corpus.

## Attack reference

- Attack file: [[A035-administrative-capacity-cost-of-tutored-operation|attacks/A035-administrative-capacity-cost-of-tutored-operation.md]]
- Attack title: `A035 - Administrative Capacity Cost of Tutored Operation`
- Source: external-review round attack queue, public-sector practitioner reviewer.

## Attack summary

The attack argues that the architecture assigns the tutoring authority deadline-bound duties — reasoned Governance Resolutions within review windows, admissibility review, control coordination — without quantifying or budgeting the staffing they consume, and that timeouts convert under-staffing directly into automatic governance outcomes. In the stress scenario, a commune with one part-time reviewer suffers a timeout cascade, experiences the model as loss of control caused by software, and exits the pilot.

## Objective evaluation

- Classification: founded as a deployment precondition, comparatively bounded.
- Why it is founded: no corpus document declares, models, or measures the authority-side labor, and an unfunded reviewer post can produce governance outcomes through the timeout machinery.
- Why it is not fatal to the architecture: the review labor is not new — today an official already approves budgets and projects for every public program; the model changes the platform and the methodology of existing work, not its existence. What the model adds is visibility: today's approval labor is unmeasured and its delays are invisible, while here every review window, decision, and lapse is public and attributable. And the attack's sharpest edge — "the software becomes responsible" — misreads the corpus: a lapsed deadline does not produce an anonymous system action but a public Review Timeout Resolution that names the responsible authority, the dates, the decision result, and the case metrics, created precisely so that non-decision is attributed to who failed to decide, never to the platform.
- Difference of judgment: medium. How much capacity a scope needs is an empirical question no design document can settle.
- Editorial distortion risk: medium. The attack would distort the project if it converts an entry paper into an implementation-cost prospectus — the paper does not argue deployment economics, and operating costs are absorbed by the installing authority as a country-implementation matter — or if it treats attributable timeout outcomes as software blame.

## Response

The defense is comparative and definitional at once. Comparatively (P001): the official who must review these projects exists today, reviews today, and delays today — invisibly. The model re-platforms that existing labor under declared windows and public attribution; if anything, it is the first system in which the cost and speed of allocation review become measurable at all. Definitionally: the timeout machinery was designed against silent obstruction, and its output is an auditable governance object naming who approved or failed to approve, when, and under which policy — the exact opposite of blame diffusing into "the software."

What the attack gets right, and the resolution accepts, is that visibility without declared capacity misattributes failures: a timeout cascade caused by an unfunded post will read as model failure unless the staffing assumption was published. The accepted answer stays inside existing objects: an Administrative Capacity Declaration published with each Planning Scope (expected review volume, staffing assignment, effort assumptions), timeout policies calibrated to that declared capacity rather than copied between scopes, authority-side AI assistance for drafting and window tracking inside the existing assist-not-decide boundary, review-window performance feeding the existing maturity metrics, and hours-per-resolution measurement as an explicit first-pilot deliverable — the corpus's first empirical staffing data.

For Macul: a commune that declares one reviewer and configures visibility-only timeouts runs a slower but honest pilot; a commune that declares two and configures escalation runs a faster one; and in both, a cascade of lapses points publicly at the staffing line in the declaration, not at the model.

## Project-document basis

- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION#Review Timeout Resolution|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] shows the lapse output: a Review Timeout Resolution created automatically as a public object.
- [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION#^r0150e5d2|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] preserves decision type and decision result as case-level audit fields.
- [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION#^ra01bc110|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] preserves the responsible authority or authorized process — attribution, not anonymity.
- [[48_AI_ASSISTANCE_AND_C008_RESOLUTION#^r8d26dff0|docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md]] fixes the assistance boundary the resolution reuses for the authority side: AI assists; the protocol decides.
- [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION#^rb8432d7d|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]] is the precedent pattern — a published, versioned per-scope declaration — that the capacity declaration follows.
- [[H054-functional-transition-maturity-metrics#^raf79bbcc|knowledge/hypotheses/H054-functional-transition-maturity-metrics.md]] provides the maturity-metric surface that review-window performance joins.
- [[P001-comparative-critique-rule#^r27fc82cd|knowledge/principles/P001-comparative-critique-rule.md]] grounds the comparison against today's unmeasured approval labor.

## Bibliographic basis

- Matt Andrews, Lant Pritchett and Michael Woolcock, `Building State Capability` (2017): task load beyond real capability produces mimicry — the declaration exists to keep load and capability visibly matched.
- Francis Fukuyama, "What Is Governance?" (2013): governance quality is capacity relative to load, which is why both must be published together.
- Michael Lipsky, `Street-Level Bureaucracy` (1980): under-resourced reviewers ration by queue; the model surfaces the queue instead of hiding it.
- Christopher Pollitt and Geert Bouckaert, `Public Management Reform` (2011): transition-layer costs are the classically unbudgeted ones; the declaration budgets them.
- Herbert Simon, `Administrative Behavior` (1947): administrative attention is the scarce resource the timeout calibration allocates.

## Proposed improvements

Add an Administrative Capacity Declaration to tutored scope design:

- expected review volume, staffing assignment, and per-resolution effort assumptions, published with the Planning Scope;
- timeout policies calibrated to the declared capacity, never copied between scopes;
- authority-side AI assistance for resolution drafting, admissibility checklists, and window tracking, with decisions human and attributable;
- review-window performance joined to the functional transition maturity metrics;
- hours-per-resolution measurement committed as an explicit first-pilot deliverable.

## Applies to

- Planning Scope;
- Governance Resolution and Review Timeout Resolution;
- operating-mode timeout policies;
- AI assistance boundary;
- functional transition maturity metrics;
- country implementation.

## Defense strength and residual risk

Defense strength: strong on attribution (timeouts name the non-decider; the software is never the responsible party) and strong comparatively (the labor exists today, unmeasured). Moderate on quantification, which honestly does not exist yet.

Residual risk: until a pilot measures hours per resolution type, every capacity declaration is an assumption; an authority may still under-declare deliberately as an A016-style throttle wearing an operational excuse; and the paper's refusal to argue implementation economics leaves adoption decisions without cost figures the corpus cannot honestly supply.

## Decision

The attack is founded and integrates through existing objects: a published capacity declaration per scope, capacity-calibrated timeouts, bounded authority-side assistance, and maturity-metric visibility, with empirical measurement as a first-pilot deliverable. The declared limitations are twofold: the review labor's cost is real but pre-existing — the model re-platforms and reveals it rather than creating it, and its absorption is a country-implementation matter, not a commercial argument this paper makes; and no staffing number in the corpus is empirical until the first pilot produces one.
