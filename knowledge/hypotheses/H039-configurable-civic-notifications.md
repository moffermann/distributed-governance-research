# H039 — Configurable Civic Notifications

## Hypothesis

Citizen notifications in the distributed allocation system should be configurable. The platform should inform citizens about relevant allocation and project events without creating notification fatigue.

## Rationale

Citizens need transparency over where their civic budget is being assigned and what happens to projects they support. However, mandatory or excessive notifications may create fatigue, annoyance, or disengagement.

The system should therefore allow each citizen to configure notification intensity and channels.

## Notification types

Possible notification categories include:

- monthly civic budget allocation summary;
- projects funded by the citizen's profile;
- project reaching funding target;
- project entering execution;
- milestone completion;
- complaint or fiscalization opened on a supported project;
- pause, mitigation, or revocation events;
- guarantee execution or reputational damage;
- profile fallback activation;
- changes to default rules or official allocation profiles.

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

## Default behavior

The default should likely be simple and low-friction:

- monthly summary;
- critical alerts;
- major lifecycle events for projects the citizen directly supported.

## Principle

> Transparency should be available by default, but interruption should be configurable.

## Status

User-experience and participation hypothesis. Extends the civic wallet and allocation profile architecture.
