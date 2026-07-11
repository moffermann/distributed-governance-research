# D037 - Defense Against A037: Reserve of Law and the Non-Delegable Allocation Competence

## Integration status

Manuscript-review round paired review completed. Accepted resolution: [[106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION|docs/106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION.md]]. Corpus propagation tracked in the remediation roadmap (R2-22); resolution accepted, not on the publication critical path.

## Attack reference

- Attack file: [[A037-reserve-of-law-over-allocation-competence|attacks/A037-reserve-of-law-over-allocation-competence.md]]
- Attack title: `A037 - Reserve of Law and the Non-Delegable Allocation Competence`
- Source: manuscript v1.6 review round — public-law reviewer, reinforced by the public-sector-practitioner reviewer.

## Attack summary

The attack argues that A034 characterized the citizen allocation act while assuming its validity: in the continental tradition, the competence to dispose of public funds is legally conferred, exercised by named organs, and non-delegable to private parties or algorithms. No corpus document names an enabling instrument of sufficient rank, distinguishes preference input from binding disposition, or works a legal trajectory in any real jurisdiction — while the regional precedents that created binding participation (Peru's participatory-budgeting statute, Brazil's city statute) go uncited. Until an instrument is named, the architecture's binding mode may be legally unconstructible where it claims to deploy.

## Objective evaluation

- Classification: founded as a threshold gap at the system's legal foundation.
- Why it is founded: the corpus records authorization (Allocation Mandate) without establishing that an authorization of sufficient rank can exist; "legally mandated share" appears in the manuscript as a premise when it is a conclusion; and the enabling-instrument genre that real participatory budgeting used is absent from the literature map and the design.
- Why it is not fatal to the architecture: the barrier is contingent, not conceptual. The attack's own regional evidence proves enabling statutes for binding citizen participation are achievable — Peru legislated one nationally, Brazil created the municipal framework — so the question is sequencing and rank, not possibility. The architecture also already contains the legally safe entry the attack demands: the closed and tutored operating modes run every material decision through the implementing authority's own reasoned public resolutions, which keeps disposition formally in the competent organ while the citizen layer functions, at minimum, as structured preference input with full traceability. The corpus's declared boundary (the platform records what law constructs; it does not construct law) was stated before this attack, in A019 and A034.
- Difference of judgment: medium-high. Whether a given constitution permits binding citizen allocation under any statute is a doctrinal question that varies by jurisdiction and will ultimately be settled by legislatures and courts, not by this corpus.
- Editorial distortion risk: medium. The attack would distort the project if it demanded that a governance architecture contain constitutional reform as a deliverable, or if it read "consultative mode is currently the lawful default" as "the design is consultative" — the design is mode-layered precisely so that legal rank and platform capability can advance independently.

## Response

The defense accepts the attack's center: assuming validity was a gap, and the fix is to make legal possibility an explicit, recorded precondition rather than an ambient assumption. The mechanism is the one the corpus always uses — a record on an existing object with a gate. The Allocation Mandate gains an enabling-norm record: the instrument, its rank, the competence it confers, and the organ to which allocations are imputed. Binding mode is gated on that record naming a norm of sufficient rank; where none exists, the scope runs in consultative or tutored mode and says so on the citizen surface. That converts the attack's "possible absolute impediment" into a visible, jurisdiction-by-jurisdiction status — exactly how the corpus already treats fiscal reliability (A021) and open-mode constitutional mechanics (A023).

On the substance of delegation, the defense draws the distinction the attack correctly demands and the manuscript blurred. In tutored mode — the only deployment mode for pilots — the weight vector and the citizen signals are informational inputs to an allocation that remains imputed to the competent authority, whose approvals, rejections, and defaults are issued as reasoned public Governance Resolutions. Nothing is delegated to an algorithm that the authority does not adopt as its own act; what changes is that the adoption is recorded, motivated, and attributable, which strengthens rather than weakens the competence doctrine's purposes. The thesis is not emptied by this reading: the manuscript's own findings locate the delivered-value gains in verified delivery, metering, and reputational memory, all of which operate identically whether the selection input is binding or consultative — and E7's municipal-scale prediction expects selection to be a wash at pilot scale anyway. What genuinely requires binding allocation is the mature open mode, which the corpus has already gated behind unresolved constitutional mechanics (A023); this attack adds the enabling-norm requirement to the same gate, where it belongs.

Comparatively, per P001: the current system does not solve this problem better — it avoids it by never asking citizens. Real participatory budgeting faced exactly this threshold and crossed it with statutes; the corpus now cites that genre and requires the analogue before any binding claim. The residual honesty the defense owes is stated in the limitation: until one legal trajectory is worked end-to-end in a named jurisdiction, "pilot-ready" means consultative-or-tutored-ready.

## Project-document basis

- [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] already establishes that the mandate records externally supplied authorization — the natural carrier for the enabling-norm record this defense proposes.
- [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] supplies the characterization menu whose "preference input" option is the lawful default this attack shows current law compels in the pilot jurisdiction.
- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]] keeps every material tutored-mode decision imputed to the authority as a reasoned public resolution — the doctrinal answer to the delegation objection during pilots.
- [[91_OPEN_MODE_GATING_AND_A023_RESOLUTION|docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md]] is the existing gate to which the enabling-norm requirement attaches: binding open-mode deployment was already conditioned on unresolved constitutional mechanics.
- [[H058-operating-modes-for-transition|knowledge/hypotheses/H058-operating-modes-for-transition.md]] defines the mode ladder that lets legal rank and platform capability advance independently.

## Bibliographic basis

- Eduardo García de Enterría and Tomás-Ramón Fernández, `Curso de Derecho Administrativo` (2011): conferred, non-delegable competence — the doctrine the tutored-mode imputation design must and does satisfy.
- Susan Rose-Ackerman and Peter Lindseth (eds.), `Comparative Administrative Law` (2010): delegation limits vary by legal family; a jurisdiction-agnostic architecture must record, not assume, its jurisdiction's answer.
- Anwar Shah (ed.), `Participatory Budgeting` (World Bank, 2007): the enabling-statute genre — Peru's national law and Brazil's municipal frameworks — proving the threshold is crossable and providing the template the mandate record should reference.
- Paul Craig, `Administrative Law` (2016): ultra vires as the void-not-voidable consequence that makes the enabling-norm gate a deployment precondition rather than a compliance detail.
- Brian Wampler, `Participatory Budgeting in Brazil` (2007): binding participation emerged inside existing legal orders through explicit instruments and political sponsorship — the comparative existence proof.

## Proposed improvements

Add an enabling-norm record and gate to the existing mandate machinery:

- an enabling-norm record on the Allocation Mandate: instrument, rank, conferred competence, organ of imputation, and review path;
- a binding-mode gate: no scope operates in binding mode without a recorded norm of sufficient rank; consultative and tutored modes are the defaults otherwise, disclosed on the citizen surface;
- an explicit two-readings clause in the manuscript and the publishable model: which thesis claims survive under preference-input status (delivery, metering, memory — all of them at pilot scale) and which require binding status (mature open-mode allocation);
- one worked reference trajectory for the pilot jurisdiction as a country-implementation annex, citing the regional statutory precedents;
- legal-defection visibility: repeal or adverse reinterpretation of the enabling norm surfaces as a recorded governance event, parallel to the fiscal-reliability indicators.

## Applies to

- Allocation Mandate record;
- Planning Scope and operating-mode configuration;
- tutored-mode Governance Resolutions;
- open-mode gating conditions;
- the manuscript's funding section and Section 9;
- country implementation.

## Defense strength and residual risk

Defense strength: strong on architecture (the mode ladder and tutored-mode imputation already embody the lawful entry path; the gate rides an existing object) and strong comparatively (the enabling-statute genre proves contingency, not impossibility). Moderate on the manuscript, whose "legally mandated share" language currently outruns the record.

Residual risk: a jurisdiction whose organic law forecloses even statutory delegation of allocation would cap deployment at consultative mode indefinitely, and the corpus cannot legislate its way out; and the two-readings clause, once written, must honestly concede that the fully distributed thesis awaits a legal instrument no pilot will supply.

## Decision

The attack is founded and integrates as an enabling-norm record with a binding-mode gate on the existing Allocation Mandate, a two-readings clause in the manuscript, and one worked legal trajectory as country implementation — with doctrine, as always, external. The declared limitation is that until a named instrument of sufficient rank exists somewhere, the architecture's binding mode is a designed capability awaiting law, and its lawful deployments are consultative and tutored.
