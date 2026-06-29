# H039 — Configurable Civic Notifications

## Hypothesis

Citizen notifications in the distributed allocation system should be configurable. The platform should inform citizens about relevant allocation, delegation, project, and governance events without creating notification fatigue.

The key distinction is between:

```text
In-app civic record:
  A durable item in the app, following area, civic inbox, report, or audit-linked history.

External interruption:
  Push notification, email, SMS, or other channel that actively interrupts the citizen.
```

Core v0 should let citizens configure interruptions, but it should not let critical civic records disappear from the app.

## Rationale

Citizens need transparency over where their civic budget is being assigned and what happens to projects they support. However, mandatory or excessive notifications may create fatigue, annoyance, or disengagement.

The system should therefore allow each citizen to configure notification intensity and channels.

Configurable notification intensity is not the same as hidden governance. A citizen may silence push notifications, but material events should remain visible inside the app and linked to the relevant project, profile, delegation, or governance object.

## Notification types

Possible notification categories include:

- monthly civic budget allocation summary;
- projects funded by the citizen's profile;
- project reaching funding target;
- project entering execution;
- milestone completion;
- complaint or fiscalization opened on a supported project;
- pause, reformulation, mitigation, or revocation events;
- guarantee execution or reputational damage;
- profile fallback activation;
- automatic profile allocation summary;
- delegate resignation or delegation fallback activation;
- delegated-action report;
- material Governance Resolution or Review Timeout Resolution involving a project the citizen follows, funded, or participates in;
- changes to default rules or official allocation profiles.

## Critical in-app baseline

Some events should always create an in-app record for affected citizens, even when external interruptions are muted:

- material reformulation of a funded or followed project;
- pause, revocation, closure, or funding-treatment event affecting a funded project;
- complaint, fiscalization, or evidence issue requiring the citizen's action or attention;
- delegation resignation, revocation confirmation, rejected delegation, or fallback activation;
- automatic allocation run and skipped rule caused by active delegation;
- material change to the citizen's selected allocation profile or official profile;
- Governance Resolution or Review Timeout Resolution affecting a project the citizen follows, funded, created, fiscalizes, or is otherwise materially linked to.

This baseline does not require a new bureaucratic process. It means the app must preserve a simple civic inbox, following area, report, or activity history item so the citizen can later understand what happened.

## Configuration levels

Citizens should be able to choose notification modes such as:

```text
Minimal:
  only critical alerts and monthly summary.

Standard:
  monthly summary plus relevant project lifecycle events.

Detailed:
  all events for supported projects and allocation profile behavior.

Silent / app-only:
  no push notifications; information remains available inside the app.
```

Channel configuration should be separate from intensity:

```text
Channels:
  in-app only
  push
  email
  SMS where country implementation supports it

Frequency:
  immediate for selected critical events
  daily digest
  weekly digest
  monthly summary
```

## Default behavior

The default should likely be simple and low-friction:

- monthly summary;
- critical in-app alerts;
- major lifecycle events for projects the citizen directly supported.

External push alerts should be configurable. The app may recommend critical push notifications, but Core v0 should at minimum preserve the in-app record.

## Example

A citizen funded a Macul sports multi-court project and later sets notifications to `Silent / app-only`.

If the project enters material reformulation, the system does not need to send a push notification if the citizen disabled push. But the app must still show:

```text
Project:
Macul Multi-Court Complex

Event:
Material reformulation proposed

Funding effect:
Eligible unreleased funds follow the active reformulation policy.

Action:
View proposal, comment, object, or follow the decision path if the policy grants a response window.
```

The same principle applies if the citizen delegated sports allocation and the delegate resigns. Push may be muted, but the app must show that the base allocation profile resumed.

## Principle

> Transparency should be available by default, but interruption should be configurable.

> Citizens may silence external notifications, but the system must not silently hide critical civic records from the app.

## Status

Core v0 user-experience and transparency hypothesis. Extends the civic wallet, allocation profile, following, delegation, and project lifecycle architecture.
