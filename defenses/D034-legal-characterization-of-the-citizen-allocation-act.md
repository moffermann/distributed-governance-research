# D034 - Defense Against A034: Legal Characterization of the Citizen Allocation Act

## Integration status

External-review round paired review completed. Accepted resolution: `docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A034-legal-characterization-of-the-citizen-allocation-act.md`
- Attack title: `A034 - Legal Characterization of the Citizen Allocation Act`
- Source: external-review round attack queue, public-law reviewer.

## Attack summary

The attack argues that the corpus specifies the mechanics of the citizen's funding act — non-withdrawable commitment, external custody, conditional release, rule-based reassignment — but never characterizes that act in administrative-law terms. Whether it is an administrative act, a sui generis participation act, or a mere preference input determines standing, review rights over reassignments, and citizen accountability, and a pilot's legal counsel will ask on day one. In Macul, a funder whose expired commitment is reassigned has no stated answer about whether she holds a reviewable claim.

## Objective evaluation

- Classification: founded as a characterization gap at the legal interface.
- Why it is founded: no corpus document names what kind of legal act the citizen performs, and the three candidate characterizations produce incompatible answers to standing, review, and accountability questions.
- Why it is not fatal to the architecture: the correct comparator is the act the citizen act replaces — a state official's discretionary allocation decision. That act is formally an administrative act wrapped in responsibility regimes, yet when funded projects fail, individualized accountability is rare in practice: discretion is diffuse, no per-decision trace exists, and the official's characterization has never delivered the clarity the attack demands of the new model. The distributed act is, at minimum, fully traceable, and its characterization can be recorded, versioned, and disclosed through the existing Allocation Mandate — no new entity.
- Difference of judgment: medium. Which characterization is right is a legislative and doctrinal choice per jurisdiction, not an architectural property.
- Editorial distortion risk: medium. The attack would distort the project if it demands that a platform construct administrative-law doctrine, or if it holds the new model to a characterization standard the current system has never met for the official's own allocation act.

## Response

The defense begins with the comparison the attack omits. Today the citizen delegates financing decisions to a public official. That official's allocation act has a formal legal characterization and formal responsibility regimes — administrative, comptroller, civil, penal — and yet when a funded project fails, the practical answer to "who answers, under which parameters?" is usually: nobody identifiable, because discretionary allocation diffuses responsibility and leaves no per-decision record. The attack asks the new model a question the old model answers only on paper.

The architecture's honest position is therefore not to invent doctrine but to record and disclose what only law can construct. The Allocation Mandate already carries, per scope, the external authorization for budget migration and formula choice; the resolution extends it with a characterization field chosen from a bounded menu — administrative act, sui generis participation act, or preference input — as a country-implementation decision, with a pilot default of vote-like citizen immunity and no individual review right over rule-based reassignments, while the complaint path remains open for rule violations. The citizen surface discloses the characterization in plain language before the first allocation.

For Macul, the funder whose commitment is reassigned on expiry sees, before ever committing, that reassignment under the visible default rule is not individually contestable — and sees equally that every such reassignment is traced, attributed, and auditable, which is more than any citizen can see today about the official who reallocates the same budget by memo.

## Project-document basis

- [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION#^r00dec5ee|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]] fixes the mechanics: financing is a serious commitment until closure, not a reversible like.
- [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION#^r12952ee4|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]] governs expiry reassignment by visible rule and states it creates no ordinary voluntary withdrawal.
- [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION#^rc81aea66|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]] defines the citizen balance as a ledger of authorized civic funding capacity, not personal money.
- [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION#^rc17d69ad|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] establishes the Allocation Mandate as the record of externally supplied authorization — the natural carrier for the characterization.
- [[P001-comparative-critique-rule#^r27fc82cd|knowledge/principles/P001-comparative-critique-rule.md]] requires the attack to be measured against how the current model characterizes the official's allocation act in practice.

## Bibliographic basis

- Paul Craig, `Administrative Law` (2016): characterization determines standing, review intensity, and remedies — which is why it must be recorded, not implied.
- Carol Harlow and Richard Rawlings, `Law and Administration` (2009): uncharacterized governance instruments migrate toward litigation; naming the instrument is the cheapest protection.
- Eduardo García de Enterría and Tomás-Ramón Fernández, `Curso de Derecho Administrativo` (2011): the continental doctrine of the administrative act against which the official-comparator must be read.
- Jerry Mashaw, `Bureaucratic Justice` (1983): internal process shapes effective rights more than formal categories — the traceability argument's foundation.
- Susan Rose-Ackerman, "American Administrative Law Under Siege" (1994): participation instruments need defined legal status to avoid asymmetric contestation.

## Proposed improvements

Extend the Allocation Mandate with an allocation-act characterization record:

- a bounded characterization menu (administrative act, sui generis participation act, preference input) chosen per country implementation;
- a pilot default of vote-like citizen immunity with no individual review right over rule-based reassignments;
- preservation of the complaint path for rule violations, unchanged;
- plain-language disclosure of the characterization on the citizen surface before first allocation;
- a documented comparator note recording how the replaced official act is characterized and reviewed in the pilot jurisdiction.

## Applies to

- Allocation Mandate record;
- Planning Scope;
- Funding Commitment and reassignment rules;
- citizen-facing disclosure surfaces;
- complaint path;
- country implementation.

## Defense strength and residual risk

Defense strength: strong on the comparative claim (the official-comparator's practical accountability is weaker than the attack implies the baseline to be) and strong on mechanics (the record rides an existing object). Moderate on the doctrinal core, which no record can settle.

Residual risk: a jurisdiction may reject the pilot default and impose administrative-act status with full review rights, importing litigation load the architecture did not design for; and until any court rules on a reassignment dispute, every characterization remains untested doctrine.

## Decision

The attack is founded and integrates minimally: a characterization menu, pilot default, and disclosure recorded in the existing Allocation Mandate, with doctrinal construction explicitly external. The declared limitation is that the platform records the characterization law chooses; it cannot supply the doctrine, and no characterization has been tested in any jurisdiction.
