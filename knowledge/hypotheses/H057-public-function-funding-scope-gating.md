# H057 — Public Function Funding Scope Gating

## Hypothesis

The distributed governance platform should not manage the political or administrative transition process of an implementing state. However, when a public function allocates budget through the platform, the platform must enforce the scope of that funding source so that only eligible projects can receive those resources.

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

## Funding source scope

Each public-function funding source should define eligibility rules.

A funding source may specify:

- public function or sector;
- eligible project categories;
- excluded categories;
- required declarations;
- required beneficiary types;
- required evidence or KPIs;
- territorial limits if applicable;
- related legal or institutional constraints if the implementing country adds them.

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
- beneficiaries;
- location;
- value thesis;
- KPIs;
- relationship to the funding-source scope.

The system can then determine whether the project is eligible, incomplete, or out of scope.

## Out-of-scope handling

If a project is out of scope for a funding source:

- it should not be funded by that source;
- it may be redirected to another eligible funding source if available;
- it may be reformulated;
- it may remain visible only if it satisfies general publication rules and does not misrepresent eligibility.

## Hidden or false scope declarations

If a project falsely claims eligibility or hides relevant information to access a funding source, this should be treated as a relevant information failure.

Consequences may include:

- observation;
- rejection from the funding source;
- fiscalization;
- reputational damage;
- pause;
- guarantee consequences;
- revocation depending on severity.

## Human burden minimization

The platform should reduce manual burden on officials by using structured project fields, eligibility checklists, automatic classification, and public observation mechanisms.

Officials should not need to manually reject every obviously out-of-scope project if the platform can prevent ineligible publication into that funding source.

## Principle

> The country manages the transition. The platform enforces the scope of the funding source.

## Status

Transition-implementation boundary hypothesis. Extends H053, H054, and H055.
