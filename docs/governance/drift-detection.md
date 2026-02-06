# Drift Detection

How we identify, categorize, and respond to design system drift.

## Philosophy

**Drift is signal, not failure.** When teams diverge from the system, it tells us something:
- The system has a gap
- The documentation is unclear
- The constraint isn't appropriate

Our goal is visibility into drift, not prevention of drift.

---

## Drift Categories

### Intentional Divergence

**Definition:** Team knowingly deviated from the system with documented reasoning.

**Examples:**
- Custom component for unique product need
- Modified token value for specific context
- Experimental pattern being tested

**Response:**
- ✅ Accept as valid signal
- ✅ Review for potential system improvements
- ❌ Pressure team to "fix"

**In divergence log:** Category = `intentional`, Status = `accepted`

---

### Unintentional Drift

**Definition:** Team bypassed the system without realizing it.

**Examples:**
- Hardcoded color value instead of token
- Copy-pasted styles instead of using shared tokens
- New engineer didn't know tokens existed

**Response:**
- ✅ Identify in review and document
- ✅ Provide guidance for fixing (when convenient)
- ✅ Improve onboarding/documentation
- ❌ Block PR or shame developer

**In divergence log:** Category = `unintentional`, Status = `open` or `resolved`

---

### Technical Debt

**Definition:** Known inconsistency that will be addressed later.

**Examples:**
- Legacy code predates the design system
- Migration planned but not prioritized
- Workaround for known system limitation

**Response:**
- ✅ Track in divergence log with ticket link
- ✅ Include in quarterly debt review
- ❌ Require immediate fix
- ❌ Pretend it doesn't exist

**In divergence log:** Category = `technical-debt`, Status = `open`

---

### Blocked by System

**Definition:** Team wanted to use the system but couldn't.

**Examples:**
- Missing token for needed use case
- Component doesn't support required variation
- Performance issue with token consumption

**Response:**
- ✅ High priority for system improvement
- ✅ Track the workaround used
- ✅ Fast-track related change proposals
- ❌ Let it sit without action

**In divergence log:** Category = `blocked`, Status = `open`

---

## Detection Methods

### 1. Self-Reporting (Primary)

Teams document their own divergence in `data/divergence-log.json`.

**When to report:**
- When you knowingly use something other than a semantic token
- When you build a custom component instead of using shared tokens
- When you discover existing code that doesn't use the system

**How to report:**
1. Add entry to `data/divergence-log.json`
2. Fill in all relevant fields
3. Link to ticket if applicable

**Make it easy:**
- Single JSON file, simple structure
- No approval needed
- Celebrate reporting as valuable contribution

### 2. Code Review (Secondary)

Reviewers flag potential drift during PR review.

**What to look for:**
- Hardcoded color values (hex codes, rgb())
- Hardcoded spacing values (px, rem without token)
- Styles that duplicate token intent

**What NOT to do:**
- Block PRs for drift
- Require immediate fixes
- Make developers feel bad

**Preferred approach:**
- "I noticed this uses a hardcoded value - mind adding to divergence log?"
- "This looks like it should use `color.feedback.error.text` - is there a reason it doesn't?"

### 3. Automated Scanning (Future)

Planned tooling for passive drift detection.

**Potential approaches:**
- ESLint rule that warns (not errors) on hardcoded values
- Quarterly automated scan of CSS/styles
- Token usage analytics in build output

**Not implemented yet because:**
- We want to understand patterns manually first
- Tooling without context creates noise
- False positives damage trust

---

## Responding to Drift

### Monthly Review

Quick async review of divergence log:
1. Scan new entries from past month
2. Categorize any miscategorized items
3. Identify patterns (multiple products, same gap)
4. Create issues for system improvements

### Quarterly Deep Dive

More thorough assessment:
1. Review all open drift entries
2. Update status on resolved items
3. Prioritize system improvements based on drift data
4. Update metrics dashboard
5. Share summary with leadership

### Immediate Action Triggers

Some drift requires faster response:
- Multiple teams blocked by same system gap → Fast-track improvement
- Security/accessibility issue in workaround → Escalate immediately
- Drift spreading (copied between teams) → Address root cause

---

## Metrics

Track these to understand drift health:

| Metric | What it tells us |
|--------|------------------|
| Total divergence count | Overall system coverage |
| Divergence by category | Whether drift is intentional or problematic |
| Time to resolution | How responsive the system is |
| Repeat divergences | Patterns that need addressing |
| Divergence by product | Which products need more support |

**Dashboard shows:**
- Current divergence count by category
- Trend over time
- Recent entries

---

## Divergence Log Entry Format

```json
{
  "id": "div-XXX",
  "date": "YYYY-MM-DD",
  "product": "keela|aplos|raisely",
  "category": "intentional|unintentional|technical-debt|blocked",
  "status": "open|accepted|resolved|wont-fix",
  "summary": "Brief description",
  "description": "Detailed explanation",
  "tokensAffected": ["list", "of", "tokens"],
  "alternativeUsed": "What was used instead",
  "rationale": "Why this approach was taken",
  "ticket": "JIRA-XXX or null",
  "reportedBy": "Team or person",
  "reviewedBy": "Who reviewed (if any)",
  "resolvedDate": "YYYY-MM-DD or null",
  "resolution": "How it was resolved (if resolved)"
}
```

---

## FAQ

**Q: What if our whole product is divergent?**
A: Start tracking new divergences. Don't try to document all legacy drift at once. Migration happens opportunistically.

**Q: Is there a "divergence budget"?**
A: No. We don't limit divergence. We observe and respond to patterns.

**Q: Who reviews divergence entries?**
A: Monthly review is async among design system stewards. Anyone can comment on entries.

**Q: What if I don't know which tokens I should have used?**
A: Document what you used and add a note: "unsure which tokens apply." The review process will help clarify.

---

*Last updated: 2026-02-03*
