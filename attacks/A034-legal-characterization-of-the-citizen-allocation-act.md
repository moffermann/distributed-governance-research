# A034 - Legal Characterization of the Citizen Allocation Act

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] and propagated into the core corpus.

## Description

The architecture mechanically specifies the citizen's funding act — a non-withdrawable commitment over externally custodied public money, recorded in a ledger, released only through conditional disbursement — but never characterizes that act in administrative-law terms. Unlike A019, which targets the democratic authorization of the system itself, this attack targets the doctrinal nature of each individual allocation: what kind of legal act a citizen performs when directing a share of public budget, and what follows from that characterization.

## Location in current project

- [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]] fixes the commitment as non-withdrawable until closure but does not characterize the act.
- [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]] defines the ledger and custody mechanics without a doctrinal frame.
- [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] records the authorization to migrate budget, not the nature of the citizen's exercise of it.
- [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]] governs reassignment on expiry without stating any funder review right.
- [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]] names this gap as an open question.

## Problem

The moment a citizen directs public money to a project is the moment a private preference becomes a disposition of public funds. The corpus leaves three doctrinal questions unanswered: whether the allocation act is an administrative act, a participation act sui generis, or a mere preference input consumed by an administrative process; whether a funder whose committed funds are reassigned on expiry, failure, or reformulation holds any review or objection right; and whether the citizen bears any accountability for the allocation choice — or enjoys explicit immunity, as voters do for their vote. Different characterizations produce different answers to standing, appeal, liability, and audit questions that a real pilot's legal service will ask on day one.

Example:

```text
A citizen in Macul commits allocation to the sports school; the project
later expires unfunded and the commitment is reassigned under the default
rule. The citizen objects to the reassignment. Under current corpus rules
the reassignment is valid and visible — but whether the citizen has any
reviewable claim, and before whom, has no answer in any document.
```

## Recommended resolution path

- Characterize the allocation act explicitly as a country-implementation decision with a bounded menu (administrative act, sui generis participation act, preference input), documenting the consequences of each option for standing and review.
- State a default for pilots: the allocation act carries no personal accountability for the citizen (vote-like immunity) and no individual review right over rule-based reassignments, while preserving the complaint path for rule violations.
- Require the citizen-facing surface to disclose that characterization in plain language before the first allocation.
- Record the chosen characterization in the Planning Scope's Allocation Mandate record, versioned like its other fields.
- Keep full doctrinal construction external: the platform records the characterization; courts and legislation define it.

## Theoretical base and citations

- Paul Craig, `Administrative Law` (8th ed., 2016): the characterization of an act determines standing, review intensity, and remedies.
- Carol Harlow and Richard Rawlings, `Law and Administration` (3rd ed., 2009): new governance instruments strain classical act categories, and uncharacterized instruments migrate toward litigation.
- Eduardo García de Enterría and Tomás-Ramón Fernández, `Curso de Derecho Administrativo` (2011): the doctrine of the administrative act and its review in the continental tradition most relevant to the pilot jurisdiction.
- Jerry Mashaw, `Bureaucratic Justice` (1983): internal administrative process shapes rights as much as formal adjudication.
- Susan Rose-Ackerman, "American Administrative Law Under Siege" (1994): participation instruments without defined legal status create asymmetric contestation power.

## Social reasons

Citizens are being invited to perform an act whose legal meaning nobody has stated. If reassignments are contestable, the system inherits litigation load; if they are not, citizens should know before committing. Ambiguity here damages both trust and the pilot's legal defensibility.

## Conflicts of interest

- Implementing authorities may prefer the characterization that minimizes their review exposure.
- Platform operators may prefer preference-input status to avoid administrative-procedure duties.
- Organized funders may seek act status to gain standing that atomized citizens will not exercise.
- Legal services may block pilots entirely rather than operate under an uncharacterized instrument.

## Inconsistencies to test

- The corpus makes every allocation traceable and versioned, but traceability without characterization answers "what happened" and not "what can be contested".
- Funding commitments are non-withdrawable to protect projects, but non-withdrawability without stated review rights may be legally fragile in jurisdictions with strong audi alteram partem doctrine.
- The complaint path covers rule violations, but reassignment under valid rules is precisely the case it does not cover.

## Stress scenario

A pilot municipality's legal counsel reviews the platform before launch and asks: is the citizen's allocation an administrative act we must be able to review, and can a reassigned funder sue us? No corpus document answers. Counsel recommends suspending the pilot pending legislation, and the incumbent uses the pause as evidence the model is legally unworkable.

## Review checklist

- Is the allocation act's characterization recorded, versioned, and disclosed to citizens before first use?
- Does each pilot state whether funders hold review rights over rule-based reassignments, and before which body?
- Is citizen immunity for allocation choices stated explicitly rather than assumed?
- Does the Allocation Mandate record carry the characterization alongside the authorization?
- Has the country-implementation menu documented the consequences of each characterization option?

## Resolution output

The accepted resolution defined a characterization menu and pilot default for the citizen allocation act, recorded in the Allocation Mandate and disclosed on the citizen surface, with doctrinal construction explicitly external.
