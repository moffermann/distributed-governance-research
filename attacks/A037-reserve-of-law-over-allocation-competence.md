# A037 - Reserve of Law and the Non-Delegable Allocation Competence

## Status

Reviewed in paired review. Improvements accepted in [[106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION|docs/106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION.md]].

## Description

A034 asked what kind of legal act a citizen performs when allocating public money, and its resolution built a characterization menu with a vote-like pilot default. This attack targets what A034 assumed: that a valid allocation by citizens is legally possible at all. In the continental administrative tradition that governs the pilot jurisdiction and most of the region, the competence to dispose of public funds is conferred by law, exercised by named organs, and non-delegable to private parties or algorithms. The Allocation Mandate records an external authorization — but the corpus never establishes that an authorization of sufficient rank can exist under current law, nor names the instrument that would create it. Until it does, the architecture's binding mode describes an artifact that the target legal orders may simply not permit to be built.

## Location in current project

- [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] records the authorization to migrate budget share but treats the authorization's legal possibility as external.
- [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] characterizes the citizen's act while presupposing its validity.
- [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]] lists legal rights, treasury custody, and sanctions as country-specific without flagging the enabling-norm problem as a potential absolute barrier.
- [[paper|drafts/paper.md]] describes "non-withdrawable allocation capacity" over a "legally mandated share" without naming any instrument that could mandate it.
- [[H025-civic-tax-wallet-and-distributed-allocation|knowledge/hypotheses/H025-civic-tax-wallet-and-distributed-allocation.md]] defines the wallet whose binding character this attack questions.

## Problem

Three distinct legal objections compound, and none is a matter of implementation detail.

First, the reserve of law: in constitutions of the region, public expenditure is decided through the budget process by organs acting within legally conferred competence, and organs may not attribute to themselves — or cede — authority beyond what law confers. A binding citizen allocation requires an enabling norm of the correct rank. In the pilot jurisdiction, municipal budgets are approved by the council under an organic constitutional statute, and existing participation law authorizes *consultative* mechanisms only. A municipal ordinance cannot create binding citizen allocation; plausibly only statutory reform can.

Second, non-delegability: even with an enabling statute, the passive share is allocated by a weight vector — an algorithm — and the manuscript's Finding 2 makes that vector's quality the system's central carrier. A vector is not an organ. Administrative acts of expenditure require imputation to a competent authority, a public purpose, and stated reasons. The corpus never distinguishes the innocuous reading (citizen signals as *preference input* consumed by an authority's own reasoned act) from the load-bearing one (the vector's output *is* the allocation) — and the innocuous reading empties the core thesis, while the load-bearing one collides with the delegation doctrine.

Third, the demonstration gap: the region already shows what an enabling instrument looks like — Peru's participatory-budgeting statute and Brazil's city-statute framework created legal trajectories for binding participation. The corpus cites neither and exhibits no worked legal trajectory in any jurisdiction: which norm, of which rank, creating which acts, reviewable before which body. A worked trajectory is what distinguishes an honest external boundary from a shield.

Example:

```text
A municipality attempts the Macul pilot in binding mode under an
ordinance plus the national participation statute. The comptroller's
ex-ante legality review concludes that binding allocation of budget
items by citizens exceeds the competence the organic municipal statute
confers on any organ, and that no ordinance can confer it. The pilot
is reduced to consultative mode — the mode the corpus's own thesis
says changes nothing about who decides.
```

## Recommended resolution path

- Add to the Allocation Mandate a required **enabling-norm record**: the instrument, its rank, the competence it confers, and the organ to which allocations are imputed — with binding mode gated on that record naming a norm of sufficient rank, and consultative mode as the only default where none exists.
- Distinguish explicitly, in the mandate and the manuscript, the two readings of citizen allocation — preference input consumed by an authority's reasoned act versus directly binding disposition — and state which claims of the thesis survive under each.
- Work one reference legal trajectory end-to-end for the pilot jurisdiction (enabling statute, the administrative acts each gate produces, the review body for each), and cite the regional precedents that created comparable trajectories.
- Reclassify the "legally mandated share" language in the manuscript: mandated is a conclusion, not a premise, until an instrument is named.

## Theoretical base and citations

- Eduardo García de Enterría and Tomás-Ramón Fernández, `Curso de Derecho Administrativo` (2011): competence is conferred, reglada, and non-delegable; the organ cannot cede what the law assigned to it.
- Susan Rose-Ackerman and Peter Lindseth (eds.), `Comparative Administrative Law` (2010): delegation limits and their variation across legal families — what "country implementation" actually varies, and what it cannot vary away.
- Anwar Shah (ed.), `Participatory Budgeting` (World Bank, 2007): the legal instruments behind real participatory-budgeting regimes, including Peru's statutory framework — the enabling-norm genre the corpus does not cite.
- Paul Craig, `Administrative Law` (8th ed., 2016): ultra vires as the organizing doctrine — acts beyond conferred competence are void, not merely reviewable.
- Martin Loughlin, `Foundations of Public Law` (2010): the public-money power as constitutive of the state's legal form, not an administrative detail.

## Social reasons

Citizens invited to allocate will be told their choice is binding; if the legal order later voids the mechanism, the betrayal lands on the citizens and on the credibility of every future participation instrument. The inverse failure is quieter but as corrosive: a system that ships in consultative mode while its literature claims binding allocation teaches citizens that the wallet is decoration.

## Conflicts of interest

- The research effort benefits from deferring the enabling-norm question: the thesis reads stronger while validity is assumed.
- Implementing authorities may prefer consultative mode precisely because it preserves their disposition power while borrowing participatory legitimacy.
- Platform operators profit from deployment in any mode and have no incentive to flag the void-act risk.
- Legislators gain a veto point: whoever controls the enabling statute controls the architecture's existence, a dependency the corpus's fiscal-strangulation analysis (A021) models for money but not for law.

## Inconsistencies to test

- The manuscript's "non-withdrawable allocation capacity" presumes binding mode, while the corpus's only legally safe default under current law is consultative — the thesis and the deployable mode diverge.
- A034's characterization menu offers "preference input" as one option among peers, but under this attack it is the only lawful option absent statutory reform — a menu with one legal item is not a menu.
- The Fiscal Commitment Profile (docs/88) makes treasury defection visible but has no counterpart for *legal* defection — repeal or reinterpretation of the enabling norm.
- P001 requires comparing against real practice; real participatory budgeting achieved bindingness through named statutes, a comparison the corpus has not run.

## Stress scenario

The manuscript circulates among public-law scholars ahead of a pilot. The first response letter observes that the corpus contains a characterization menu for an act whose validity no document establishes, cites the comptroller doctrine on non-delegable expenditure competence, and concludes the architecture is unconstructible in binding mode in the very jurisdiction of its running example. The pilot's political sponsors withdraw rather than own a constitutional fight; the project is archived as legally naive — with the fix (an enabling-norm record and a consultative-mode-first trajectory) sitting unwritten.

## Review checklist

- Does every Allocation Mandate name the enabling instrument, its rank, and the organ of imputation?
- Is binding mode gated on an enabling norm of sufficient rank, with consultative mode the default otherwise?
- Do the manuscript and the publishable model state which thesis claims survive in consultative mode?
- Is one legal trajectory worked end-to-end for a named jurisdiction, with regional statutory precedents cited?
- Is repeal or reinterpretation of the enabling norm tracked as a visible risk, parallel to fiscal strangulation?

## Resolution output

The accepted resolution added an enabling-norm record and binding-mode gate to the Allocation Mandate, restated tutored-mode imputation as the doctrinal answer during pilots, adopted the two-readings clause across the manuscript surfaces, required a reference legal proposal (built on the Peruvian and Brazilian statutory precedents) before any binding deployment, and made legal defection a recorded governance event parallel to fiscal defection. Doctrine remains external legislative work.
