# Delegation Concentration Stress Thresholds and A010 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A010-delegation-concentration.md`
- Defense: `defenses/D010-delegation-concentration.md`

## Resolution decision

A010 is founded and does not distort the project when it targets hidden concentration rather than voluntary delegation itself. The accepted resolution is a proportional reinforcement of C023: delegation-concentration stress thresholds, report sufficiency, and related-delegate observability should be added through existing delegation, reporting, disclosure, audit, and administrative-observability mechanisms.

Core v0 should not create a new delegation-concentration authority, a separate primary entity, or a universal anti-concentration veto.

## Rule added to Core v0

Delegation concentration remains allowed by default, but significant concentration should trigger visible stress indicators, report-sufficiency requirements, and related-delegate checks.

Stress thresholds are warning and escalation rules over existing records. They are not a new default cap and do not block voluntary delegation unless a public, explicit, predeclared cap or rule applies.

Minimum additions:

- represented-weight warning thresholds by scope and action type;
- threshold source or rule reference;
- related-delegate cluster indicators;
- disclosure of support-provider-and-delegate relationships;
- delegate funding to related projects observability;
- cap-effect disclosure where configured;
- report-sufficiency checks for high-concentration delegates;
- immediate revocation path visibility.

Core v0 implementation target:

- `Delegation` records hold scope, delegate, acceptance, revocation, reporting preference, concentration signal, configured cap reference, and linked participation-support disclosures.
- `DelegatedActionRecord` records hold represented weight, action type, target, cap effect where configured, stress-warning reference, and audit reference.
- delegated-action reports show concentration signal, represented weight, cap effect where configured, related-party/support-provider warnings, and source-linked action summaries.
- administrative observability may aggregate stress status by scope, territory, action type, delegate, related delegate, or related project.

## Macul example

If a local sports federation holds enough represented weight to fund most sports projects in a commune, the system should show the represented weight, the scope where concentration is high, related project actors, separate support funding, report sufficiency, revocation path, and whether a configured cap changes counted weight.

## Citizen simplicity

Warnings should be short and non-shaming. Citizens should still be able to delegate voluntarily unless a public predeclared cap applies. Details should be available on demand rather than forced into every ordinary citizen screen.

## Transparency and accountability effect

This preserves freedom of delegation while preventing delegated power from being hidden, automatically monetized, or disguised as one actor's personal action.

## Residual risks

- Citizens may ignore warnings.
- Related delegates may split influence through multiple entities.
- Configurable caps may be politically abused if not public and versioned.
- Heavy network-analysis requirements could overload v0 if treated as mandatory project-blocking logic.

## Integration target

This resolution should inform Delegation, Delegate role, delegated-action records, represented weight, reports, participation-support projects, related-party disclosures, AuditEvents, and administrative observability.
