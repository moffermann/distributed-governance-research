# Diagram - Tutored Mode Governance Resolution v0

## Purpose

Show how tutored-mode decisions remain external authority decisions while becoming public civic objects for audit, comment, support, objection, and follow-up.

Related resolutions: C007, C020, C021.

```mermaid
sequenceDiagram
    participant P as Proposer
    participant S as System
    participant A as External Authority
    participant C as Citizens
    participant T as Audit Trail

    P->>S: Submit project or request for tutored review
    S->>A: Open review window with configured timeout
    S->>T: Record submission, responsible authority, and deadline

    alt Authority decides before timeout
        A->>S: Approve, reject, or request changes with reasons
        S->>C: Publish Governance Resolution
        S->>T: Record decision, reasons, criteria, and authority
    else Review window expires
        S->>C: Publish Review Timeout Resolution
        S->>T: Record expiration and configured automatic effect
    end

    C->>S: Comment, support, object, or follow resolution
    S->>T: Record public civic response and status changes
```

## Rule

> Core v0 does not force a country to leave tutored mode. It requires material tutored decisions and review silence to become visible, time-bounded, auditable civic objects.
