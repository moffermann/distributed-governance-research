# H057 — Public Function Funding Scope Gating

## Hypothesis

The distributed governance platform should not manage the political or administrative transition process of an implementing state. However, when a public function allocates budget through the platform, the platform must enforce the scope of that funding source so that only eligible projects can receive those resources.

Eligibility must be based not only on a broad social category such as "sports" or "culture," but on the official mandate, legal scope, exclusions, and existing commitments of the specific funding source.

## Rationale

If a country decides to pilot distributed allocation in a specific public function, such as sports, the detailed implementation work will likely be coordinated by officials, agencies, or institutional teams outside the platform.

The platform should not prescribe that administrative process.

However, the platform must prevent out-of-scope projects from using function-specific funds.

Example:

```text
Funding source:
  Sports pilot budget.

Eligible:
  sports equipment, athlete support, club infrastructure, local tournaments.

Not eligible:
  unrelated cultural, commercial, health, or infrastructure projects unless they satisfy the sports-scope rules.
```

## Core distinction

```text
Transition implementation:
  managed by the country or institution.

Funding scope enforcement:
  handled by the platform.
```

## Funding source mandate charter

Each public-function funding source should have a mandate charter configured by the implementing country or institution.

This mandate charter defines what the funding source can and cannot finance.

It may specify:

- public function or sector;
- legal or institutional mandate;
- official categories;
- eligible project types;
- excluded project types;
- required declarations;
- required beneficiary types;
- required evidence or KPIs;
- territorial limits if applicable;
- relationship with existing institutional programs;
- duplication or overlap rules;
- related legal or institutional constraints.

## Social category versus official eligibility

A project may be socially recognized as belonging to a broad category while still being ineligible for a specific public funding source.

Example:

```text
Project:
  Traditional spinning-top competition.

Social interpretation:
  Some citizens may see it as sport or recreation.

Official funding eligibility:
  The sports funding source may not recognize it as an eligible sport.
  It may instead belong to culture, heritage, education, or community recreation.
```

The platform should not decide the official mandate by itself. The implementing country defines the funding-source mandate. The platform enforces it transparently.

## Existing institutional portfolio and duplication

A funding-source scope should also account for the institution's existing portfolio, especially during partial transition.

Example:

```text
Sports budget:
  5% distributed pilot
  95% traditional institutional allocation
```

A project in the distributed 5% may be genuinely sports-related but duplicate or compete with a program already funded by the traditional 95%.

Therefore, the platform should distinguish:

```text
Eligible by category:
  This project belongs to sports.

Eligible by mandate:
  This project fits the official sports funding rules.

Non-duplicative / complementary:
  This project does not improperly duplicate an already funded institutional program, unless duplication or competition is explicitly allowed.
```

The implementing institution should provide or configure enough information about existing commitments, funded programs, exclusions, and known overlaps for the platform to flag possible duplication.

## Project access to funds

A project can exist in the platform only if it satisfies the publication rules of the platform.

But to receive money from a specific funding source, it must also satisfy that funding source's eligibility rules.

Therefore, the system should distinguish:

```text
Project validity:
  can this project exist in the platform?

Funding-source eligibility:
  can this project receive money from this specific budget source?
```

A project may be valid but not eligible for a specific funding source.

## Scope validation

When a project requests access to a function-specific funding source, the platform should require structured declarations such as:

- project category;
- public function addressed;
- official funding source requested;
- beneficiaries;
- location;
- value thesis;
- KPIs;
- relationship to the funding-source mandate;
- relationship to existing institutional programs;
- duplication or complementarity declaration.

The system can then determine whether the project is eligible, incomplete, duplicate/overlapping, or out of scope.

## Out-of-scope or duplicate handling

If a project is out of scope for a funding source:

- it should not be funded by that source;
- it may be redirected to another eligible funding source if available;
- it may be reformulated;
- it may remain visible only if it satisfies general publication rules and does not misrepresent eligibility.

If a project appears to duplicate an existing institutional program:

- it should be flagged;
- it may require a complementarity justification;
- it may be rejected from that funding source;
- it may proceed only if the funding-source mandate permits overlapping or competing initiatives.

## Hidden or false scope declarations

If a project falsely claims eligibility, hides relevant information, or omits a known overlap with existing programs to access a funding source, this should be treated as a relevant information failure.

Consequences may include:

- observation;
- rejection from the funding source;
- fiscalization;
- reputational damage;
- pause;
- guarantee consequences;
- revocation depending on severity.

## Human burden minimization

The platform should reduce manual burden on officials by using structured project fields, eligibility checklists, automatic classification, overlap detection, and public observation mechanisms.

Officials should not need to manually reject every obviously out-of-scope project if the platform can prevent ineligible publication into that funding source.

## Principle

> The country manages the transition. The platform enforces the mandate, scope, and eligibility of each funding source.

## Status

Transition-implementation boundary hypothesis. Extends H053, H054, and H055.
