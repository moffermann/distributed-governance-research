# Reviewer Send Packets

This folder contains standalone review packets by reviewer profile.

Each subfolder contains a `review-packet.md` that can be sent directly to a reviewer in that profile.

## Packets

```text
Public-Law/review-packet.md
Academic/review-packet.md
Systems-Architect/review-packet.md
Public-Sector-Practitioner/review-packet.md
Non-Expert-Reader/review-packet.md
```

## Common source documents

These packets are derived from:

```text
docs/58_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
external-review/core-v0-review-packet.md
external-review/reviewer-briefs-v0.md
```

## Use rule

Send only the packet that matches the reviewer.

Do not send every packet to every reviewer.

The purpose is to keep the project consistent while highlighting the layer where each reviewer can provide the most useful criticism.

## Internal processing rule

Reviewers should not be asked to produce attack files.

They should give criticism in their own language.

After feedback is received, preserve the raw feedback and internally classify it as:

```text
clarity issue
framing issue
literature gap
legal risk
implementation risk
legitimacy risk
incentive problem
complexity problem
pilot-design issue
new attack
already resolved
out of scope
```

Only serious unresolved objections should become formal attack files.
