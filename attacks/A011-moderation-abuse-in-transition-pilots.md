# A011 - Moderation Abuse in Transition Pilots

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md`.

## Description

Tutored and semi-open operating modes allow external authorities or administrators to review eligibility, duplication, scope, and compatibility. This attack asks whether moderation can become discretionary control, ideological filtering, incumbent protection, or hidden resource allocation.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: moderation abuse in transition pilots.
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md`.
- `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md`.
- `knowledge/hypotheses/H058-operating-modes-for-transition.md`.
- `docs/diagrams/v0-operating-mode-transition-state.md`.
- `docs/diagrams/v0-governance-resolution-sequence.md`.

## Problem

Tutored mode is allowed, possibly permanently, but material tutored decisions must be public. The failure mode is that authorities use review power to reject competitors, delay uncomfortable projects, favor controlled operators, or define scope so narrowly that distribution becomes symbolic.

Example:

```text
A municipal authority rejects private sports facility projects as "duplicate" while preserving its own traditional sports budget or controlled operator.
```

## Recommended resolution path

- Require Governance Resolution or Review Timeout Resolution for material tutored decisions.
- Preserve structured rejection reasons, delays, timeout status, scope decisions, authority/process references, and known authority-linked operator relationships for audit.
- Separate external authority review from internal participation.
- Flag authority-controlled operators by default in tutored scopes.
- Define citizen audit, clarification, correction, or appeal paths without pretending the platform itself creates legal reversal.
- Treat full moderation-abuse dashboards, automatic abuse warnings, operator-concentration analytics, and cross-actor comparability tests as Extension v1+ or country/administrator observability.

## Theoretical base and citations

- George Stigler, "The Theory of Economic Regulation" (1971): regulatory processes can be captured by interested actors.
- Jean-Jacques Laffont and Jean Tirole, "The Politics of Government Decision-Making" (1991): government decision processes can reflect interest-group incentives.
- Mark Bovens, "Analysing and Assessing Accountability" (2007): public decisions need answerability and possible consequences.
- Michael Lipsky, `Street-Level Bureaucracy` (1980): implementation discretion can reshape formal policy.
- Jurgen Habermas, `Between Facts and Norms` (1996): legitimacy requires public justification for public authority.

## Social reasons

Transition pilots will often begin inside existing institutions. If moderation remains opaque, citizens may experience the system as another administrative gate, not a real accountability shift.

## Conflicts of interest

- Authorities may protect existing programs.
- Authority-controlled operators may receive hidden advantages.
- Administrators may delay projects that reveal policy failures.
- Reviewers may use broad "compatibility" language to hide preference.

## Inconsistencies to test

- C020 allows permanent tutored mode, but the broader theory seeks reduced opaque monopoly power.
- C007 excludes public authorities from internal roles, but state-owned operators may participate where not conflicted.
- Governance Resolutions create visibility, but visibility alone may not change incentives.

## Stress scenario

The tutored authority repeatedly rejects projects from independent executors as outside scope while approving similar projects by a publicly owned operator with privileged access.

## Review checklist

- Are rejection reasons standardized enough for comparison?
- Are review delays and timeout policies visible?
- Are controlled operators identified?
- Is the data needed for later aggregate moderation-pattern audit preserved?
- Is platform effect separated from legal effect?

## Expected resolution output

A Phase 3 resolution should define a tutored-moderation abuse boundary: Core v0 preserves minimum case-level and administrative-observability data, while formal abuse tests and citizen-facing moderation-pattern dashboards remain Extension v1+ or country/administrator observability.
