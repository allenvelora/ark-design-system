# Change Flow

How changes to the design system are proposed, reviewed, and adopted.

## Guiding Philosophy

- **Lightweight over heavyweight**: No committees, no multi-week review cycles
- **Async over sync**: Reviews happen in issues/PRs, not meetings
- **Bias to action**: Default to accepting changes that don't break things
- **Clear escalation**: When async doesn't resolve, someone decides

---

## Change Types

| Type | Examples | Review Level | Timeline |
|------|----------|--------------|----------|
| **Token value** | Adjust spacing, update color | Light | < 3 days |
| **New token** | Add semantic token for new use case | Standard | < 1 week |
| **Token structure** | Rename category, reorganize hierarchy | Elevated | < 2 weeks |
| **Documentation** | Update guidance, fix errors | Light | < 3 days |
| **Governance** | Change principles, update process | Elevated | < 2 weeks |

---

## Change Flow Diagram

```
┌──────────────────┐
│     PROPOSE      │
│                  │
│ • Open issue     │
│ • Describe need  │
│ • Show impact    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│     REVIEW       │
│                  │
│ • Async in issue │
│ • 1 design +     │
│   1 eng reviewer │
│ • 48hr window    │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────┐
│ APPROVE│ │ DECLINE│
│        │ │        │
│ → PR   │ │ Doc why│
│ → Merge│ │ Close  │
│ → Pub  │ └────────┘
└────────┘
```

---

## Detailed Process

### 1. Propose

**Who can propose:** Anyone (designers, engineers, product managers)

**How to propose:**
1. Open an issue in the design system repository
2. Use the appropriate template (token change, new token, etc.)
3. Include:
   - **What**: Specific change requested
   - **Why**: Problem this solves or use case it enables
   - **Impact**: Which products/areas affected
   - **Alternatives considered** (optional but helpful)

**Example proposal:**
```markdown
## Token Change Request

**What:** Add `color.surface.overlay` semantic token

**Why:** Multiple products need a semi-transparent overlay for modals 
and drawers. Currently each team hardcodes `rgba(0,0,0,0.5)`.

**Impact:** Keela modal, Aplos drawer, Raisely lightbox

**Proposed value:** Reference to `color.primitive.black` with 50% opacity
```

### 2. Review

**Who reviews:**
- Light changes: 1 reviewer from either design or engineering
- Standard changes: 1 design + 1 engineering reviewer
- Elevated changes: 1 design + 1 engineering + 1 product representative

**Review criteria:**
- Does this align with governance principles?
- Is the naming consistent with existing tokens?
- Will this break existing usage?
- Is there a simpler solution?

**Timeline:**
- Reviewers have 48 hours to respond
- No response = implicit approval (for Light and Standard)
- Elevated changes require explicit approval

**Async first:**
- All discussion happens in the issue
- No meetings required for standard changes
- If async doesn't resolve in the timeline, escalate

### 3. Approve or Decline

**If approved:**
1. Create PR with the change
2. Merge to main
3. Automated build publishes new tokens
4. Announce in design system channel

**If declined:**
1. Document the reason in the issue
2. Close with label `declined`
3. Proposer can appeal to product leadership if they disagree

### 4. Escalation

When async review doesn't resolve (rare):

1. Product leads have final say on tie-breakers
2. Escalation should happen within 1 week
3. Document the decision and reasoning

---

## Emergency Changes

For urgent production issues:

1. **Ship first**: Make the change, document later
2. **Notify**: Post in design system channel immediately
3. **Formalize**: Open retroactive issue within 24 hours
4. **Review**: Async review can happen after the fact

---

## Version and Release

- **Semantic versioning**: Major.Minor.Patch
- **Patch**: Token value changes, documentation updates
- **Minor**: New tokens, non-breaking additions
- **Major**: Breaking changes (rare, requires migration guide)

**Release cadence:**
- Patches release immediately upon merge
- Minor releases batch weekly (or immediately if urgent)
- Major releases are planned and announced in advance

---

## Templates

### Token Value Change

```markdown
## Token Value Change

**Token:** [token name]
**Current value:** [current]
**Proposed value:** [proposed]
**Reason:** [why change is needed]
**Products affected:** [list]
```

### New Token Request

```markdown
## New Token Request

**Proposed name:** [semantic.category.name]
**Category:** [color/spacing/typography/etc.]
**Value:** [value or reference]
**Use case:** [what problem this solves]
**Products that will use this:** [list]
**Alternatives considered:** [other approaches]
```

### Structure Change

```markdown
## Token Structure Change

**Current structure:** [description]
**Proposed structure:** [description]
**Migration required:** [yes/no, with details]
**Reason:** [why restructure is needed]
**Impact assessment:** [detailed impact]
```

---

*Last updated: 2026-02-03*
