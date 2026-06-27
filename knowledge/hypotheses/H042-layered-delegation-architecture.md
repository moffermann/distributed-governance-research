# H042 — Layered Delegation Architecture

## Hypothesis

Delegation of civic participation should be flexible but layered, so citizens can delegate easily without turning the interface into a complex control panel.

## Rationale

Not every citizen will want to review projects, configure allocation rules, evaluate evidence, or participate directly in every governance decision.

Delegation makes the system viable by allowing citizens to participate through trusted people, organizations, institutions, or rules.

However, excessive delegation options can make the system difficult to use. The interface should therefore provide simple defaults and deeper configuration only when requested.

The goal is to validate a first version of the model, not to build the most granular delegation system imaginable.

## First-version simplicity

The first version should avoid unnecessary complexity.

As a default design rule:

- one delegate per area or action scope;
- no subdelegation;
- simple delegation available as a quick action;
- detailed configuration available only in advanced settings.

The system can become more granular later if real use shows that it is needed.

## Layered delegation

### 1. Simple delegation

The citizen can delegate the whole allocation profile to a trusted person or organization.

Example:

```text
Delegate my civic allocation to Organization X.
```

This should be available as a quick action.

### 2. Area-based delegation

The citizen can delegate by domain.

Examples:

```text
Education → University A
Health → Foundation B
Fiscalization → Local watchdog group
Science → Research council profile
Local projects → Community organization
```

### 3. Action-based delegation

The citizen can delegate only certain actions.

Examples:

```text
Delegate project discovery, but not final funding.
Delegate fiscalization decisions.
Delegate complaint support.
Delegate profile configuration.
Delegate evaluation review.
Delegate protocol-change votes.
Delegate project comments or reviews.
```

### 4. Time-bounded delegation

Delegation may be temporary.

Examples:

```text
Delegate for 3 months.
Delegate for 1 year.
Delegate until revoked.
```

### 5. Custom delegation

Advanced users can create detailed delegation rules.

Custom delegation should be available, but not forced into the main interface.

## Delegated action scope

Delegation can apply beyond budget allocation. It may include voting, commenting, complaint support, fiscalization support, project evaluation, or protocol-change participation.

However, these capabilities should be configurable by layers rather than exposed all at once.

The basic interface should remain simple. Advanced controls can allow the citizen to decide which actions a delegate can perform on their behalf.

## No subdelegation in the core design

Delegates should not be able to subdelegate by default.

Subdelegation adds complexity and may obscure who is actually exercising delegated authority.

If a citizen wants another actor to exercise authority, the citizen should delegate directly to that actor.

This keeps delegation transparent and understandable.

## Usability principle

The default interface should not expose every delegation option at once.

A citizen should first see simple options, with an advanced configuration path available for those who want more control.

## Requirements

Delegation should be:

- voluntary;
- revocable;
- transparent;
- auditable;
- visible in monthly reports;
- role-specific when configured;
- action-specific when configured;
- compatible with profiles and default allocation rules;
- non-subdelegable by default.

## Principle

> Delegation should be simple at the surface and flexible under the hood, without allowing delegated authority to become opaque through subdelegation or excessive interface complexity.

## Status

Participation and delegation hypothesis. Extends H025, H034, and H041.
