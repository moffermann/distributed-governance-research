# Delegation Concentration Stress Thresholds and A010 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A010-delegation-concentration.md`
- Defense: `defenses/D010-delegation-concentration.md`

## Resolution decision

A010 is founded and does not distort the project when it targets hidden concentration rather than voluntary delegation itself. The accepted resolution is delegation-concentration stress thresholds and related-delegate observability.

## Rule added to Core v0

Delegation concentration remains allowed by default, but significant concentration should trigger visible stress indicators, report sufficiency, and related-delegate checks.

Minimum additions:

- represented-weight warning thresholds by scope and action type;
- related-delegate cluster indicators;
- disclosure of support-provider-and-delegate relationships;
- delegate funding to related projects observability;
- cap-effect disclosure where configured;
- report-sufficiency checks for high-concentration delegates.

## Macul example

If a local sports federation holds enough represented weight to fund most sports projects in a commune, the system should show the represented weight, related project actors, separate support funding, revocation path, and whether a configured cap changes counted weight.

## Citizen simplicity

Warnings should be short and non-shaming. Citizens should still be able to delegate voluntarily unless a public predeclared cap applies.

## Transparency and accountability effect

This preserves freedom of delegation while preventing delegated power from being hidden, automatically monetized, or disguised as one actor's personal action.

## Residual risks

- Citizens may ignore warnings.
- Related delegates may split influence through multiple entities.
- Configurable caps may be politically abused if not public and versioned.

## Integration target

This resolution should inform Delegation, Delegate role, delegated-action records, represented weight, reports, participation-support projects, and administrative observability.
