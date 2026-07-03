# A022 - Thin Markets for Fiscalization and Evidence Supply

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md` and propagated into the core corpus.

## Description

The control model assumes that independent fiscalizers and qualified evidence producers exist to submit offers, be selected through protocolized rules, and be reviewed for quality. This attack asks whether that supply exists at all in rural territories or specialized domains, where no independent qualified fiscalizer or accredited evidence producer may be available at any price a project can bear. Unlike A003, which assumes fiscalizers exist and can be captured, and A013, which assumes evidence producers exist and reviews the quality of what they submit, this attack targets the prior supply-side market failure: control becomes a credence good sold by a small local expert cartel, and the qualification requirements meant to protect quality mechanically raise entry barriers and worsen the scarcity.

## Location in current project

- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`, four-layer model, producer qualification, and anti-capture premise.
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`, admissible control package and offer economics.
- `docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md`, evidence producer qualification standard.
- `knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md`, distributed but protocol-selected fiscalization and remaining risks.
- `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`, Control Subproject selection rules.
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md`, qualification scoring without a closed cartel.

## Problem

The architecture solves the demand-side and integrity problems of control: the executor cannot pick or pay its own fiscalizer, offers compete, conflicts are disclosed, and hard KPIs require qualified producers with adequate method. All of this presupposes a market with more than one admissible, independent, unrelated, affordable supplier. In a small commune, a remote zone, or a narrow technical domain, that market may be a single firm, a single accredited professional, or a handful of people who are all related to the executor, the municipality, or each other. When supply is that thin, the protocol's own safeguards backfire: qualification and method standards raise the entry barrier, conflict-free selection becomes mathematically impossible because everyone qualified is connected, and the residual monopolist can price control at whatever the project can bear or decline the assignment entirely.

Control is also a credence good. The buyer cannot verify whether the fiscalization was adequate even after receiving it, so a local expert can under-perform, over-charge, or collude and still deliver a report that looks complete. In a thick market, competition and reputation discipline this; in a thin market, there is no competitor to switch to and no independent second opinion to commission. Small projects then face control costs that swamp their execution budget, and the parallel-closure model stalls at control package closure not because of capture but because no admissible package can be assembled at any feasible price.

Example:

```text
A rural water committee in a remote commune proposes a chlorination and storage upgrade.
The single sanitary engineer within 200 km is the cousin of the committee president and also advises the municipality.
No other accredited producer will travel for the offered control budget.
The protocol's conflict rule and qualification standard together leave zero admissible fiscalizers, so control never closes and the project cannot become execution-ready.
```

## Recommended resolution path

- Add a `Control Supply Thinness` indicator per Planning Scope and territory that measures how many independent, admissible, unrelated fiscalizers and qualified producers exist for a project's risk class, so scarcity is visible before publication rather than discovered at control closure.
- Allow proportionate remote and shared-control mechanisms: pooled fiscalizers rotating across many small projects in a territory, remote or instrument-assisted evidence with stronger metadata, and reinforced audit trails that substitute for physical presence where lawful.
- Define a graduated fallback when supply is genuinely absent: publicly-declared conflicted-but-disclosed control under stronger safeguards, secondary remote review, and a longer observation window, rather than an indefinite stall or a silent lowering of standards.
- Fund travel, logistics, and capacity building for control supply as an explicit territorial control-cost line, so thin-market projects are not killed purely by the fixed cost of getting a qualified producer to the site.
- Keep qualification and method standards as the Core v0 default, but treat the thinness indicator and shared-control patterns as Extension v1+ market-building instruments that expand the supplier base over time.
- Make cartel behavior observable through repeat-relationship, pricing-outlier, and dependency-concentration signals already present in the fiscalization model, so a local monopolist's rents and refusals are visible.

## Theoretical base and citations

- Uwe Dulleck and Rudolf Kerschbamer, "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods" (2006): when buyers cannot verify the quality or quantity of an expert service even after receiving it, competition and reputation are the only disciplines, and both fail in thin markets.
- Andrew Abbott, `The System of Professions` (1988): professions secure jurisdiction over expert tasks, and accreditation both guarantees competence and restricts entry into the supply of that expertise.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): small-numbers bargaining turns a once-competitive exchange into a bilateral monopoly where opportunism is hard to constrain.
- George Akerlof, "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism" (1970): quality uncertainty can cause a market to unravel, leaving only low-quality or no supply.
- Kenneth Arrow, "Uncertainty and the Welfare Economics of Medical Care" (1963): asymmetric information in expert services makes ordinary competitive markets incomplete and prone to non-market or reputational substitutes.

## Social reasons

The communities most in need of independent oversight are often the ones with the thinnest supply of it: remote, rural, poor, or specialized territories. If control supply is scarce, these communities face a cruel choice between no oversight, captured oversight, or oversight so expensive it consumes the project. A system that presumes a functioning expert market silently disadvantages exactly the places where centralized institutions already failed to deliver, reproducing spatial inequality under a participatory label.

## Conflicts of interest

- The single local expert may extract monopoly rents or refuse assignments that threaten local relationships.
- Executors in thin markets may quietly welcome the absence of independent control.
- Municipalities may steer the scarce qualified producer toward favored projects.
- Accreditation bodies may protect incumbent professionals by keeping qualification barriers high.
- Platform operators may prefer to report a stalled project as low demand rather than admit a structural supply gap.

## Inconsistencies to test

- The executor must not choose or pay its fiscalizer, but in a one-supplier market the only admissible fiscalizer is effectively predetermined regardless of who nominally selects.
- Qualification and method standards raise evidence quality, but they also shrink the admissible supplier set and can make conflict-free selection impossible.
- Offers are meant to compete, but a market with a single admissible producer has no competition to discipline price or effort.
- Control is a separated budget line proportional to project risk, but fixed travel and specialization costs can exceed a small project's entire execution budget.

## Stress scenario

A specialized domain, such as seismic verification of a small municipal structure, has three accredited firms in the country. Two are subsidiaries of the region's dominant contractor and one is fully booked. The protocol correctly flags the two subsidiaries as conflicted and the third as unavailable, leaving no admissible control package. The project cannot become execution-ready, but the same three firms routinely certify the incumbent institution's own works with no such scrutiny. The distributed system holds itself to a standard the surrounding market cannot supply, and the project dies not from capture but from an empty admissible set, while the centralized alternative proceeds uncontrolled.

## Review checklist

- Does the system measure how many independent, admissible, unrelated control suppliers exist for a given project and territory?
- Are thin-market projects flagged before publication rather than at control-package closure?
- Are proportionate remote, pooled, or shared-control mechanisms available where physical supply is scarce?
- Is there a graduated, disclosed fallback when no fully conflict-free admissible supplier exists?
- Are travel, logistics, and capacity-building costs treated as an explicit territorial control-cost line?
- Are monopoly pricing, refusals, and dependency concentration by scarce local experts observable?

## Resolution output

Resolved in `docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md`: classified partially founded and bounded with thin integrated observability under P007. Core v0 gained control-supply density observability by territory and domain — eligible fiscalizers and evidence producers per scope, offer rates, fee levels, and repeat-assignment concentration — surfaced before publication rather than at control closure, plus explicit thin-market handling routes (remote and documentary evidence, cross-territory and pooled assignment, relaxed-but-disclosed selection under stronger safeguards) as country-implementation choices, and priced compensation for weak verification per `research/formal-models.md` Proposition 2. Core v0 cannot conjure qualified verifiers; supply creation through training and accreditation subsidies is country implementation. In a genuinely empty market a monopolist controller remains a real unresolved scenario, and conflict-free selection can be impossible where everyone qualified is related.
