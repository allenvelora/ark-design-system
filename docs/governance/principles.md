# Governance Principles

These principles guide how we operate the cross-product design system. They inform day-to-day decisions and help resolve disagreements.

## Core Principles

### 1. Tokens Are the Contract, Not Components

**What this means:**
- Teams MUST use semantic tokens for colors, spacing, typography, and other design values
- Teams MAY use any component implementation that fits their stack (React, Vue, or custom)
- Visual consistency comes from shared tokens, not identical components

**Why:**
- Building and maintaining components for multiple frameworks is expensive
- Products have legitimately different interaction needs
- Tokens are easier to adopt incrementally than components

**In practice:**
- ✅ Use `var(--color-action-primary-default)` for button backgrounds
- ✅ Implement buttons differently in React vs Vue if needed
- ❌ Hardcode `#2563EB` instead of using the token
- ❌ Require all products to use the exact same Button component

---

### 2. Divergence Requires Documentation, Not Approval

**What this means:**
- Teams CAN deviate from the system without asking permission
- Teams MUST document divergence in the divergence log
- Divergence is treated as signal, not failure

**Why:**
- Approval gates become bottlenecks
- Requiring permission creates adversarial relationships
- Undocumented divergence is invisible and compounds over time

**In practice:**
- ✅ Ship a custom solution when the system doesn't meet your needs
- ✅ Add an entry to `data/divergence-log.json` explaining why
- ❌ Wait for design system team approval before shipping
- ❌ Diverge without documenting the reason

---

### 3. The System Serves Products, Not the Reverse

**What this means:**
- If the system blocks a team from shipping, the system is wrong
- Product velocity is sacred; the design system exists to enable it
- System improvements should make teams faster, not slower

**Why:**
- A design system that slows teams down won't be adopted
- The goal is better products, not system compliance
- Teams know their user needs better than the system does

**In practice:**
- ✅ Update the system when it doesn't meet real product needs
- ✅ Prioritize system changes based on team pain points
- ❌ Tell a team they can't ship because the system lacks a feature
- ❌ Measure success by compliance rates

---

### 4. Visibility Over Compliance

**What this means:**
- We optimize for seeing what's happening, not preventing "wrong" things
- The dashboard shows reality, including divergence and gaps
- Leadership can understand system health without auditing every PR

**Why:**
- Prevention creates friction and workarounds
- Visibility enables informed decisions at all levels
- Patterns in divergence data reveal where the system needs to improve

**In practice:**
- ✅ Surface divergence data in the dashboard
- ✅ Use divergence patterns to prioritize system improvements
- ❌ Build lint rules that block PRs with hardcoded values
- ❌ Hide divergence to make metrics look better

---

### 5. Prefer Semantic Systems Over Visual Sameness

**What this means:**
- Same intent should use same token, even if final appearance varies
- Products can have brand-appropriate variations within the token system
- Consistency is about shared language, not identical pixels

**Why:**
- Different products serve different user needs
- Rigid uniformity stifles appropriate product differentiation
- Semantic consistency is more durable than visual consistency

**In practice:**
- ✅ Both products use `color.feedback.success.text` for success messages
- ✅ Those tokens may resolve to slightly different greens per product (if needed)
- ❌ All products must use exactly the same shade of green
- ❌ Measure success by visual uniformity audits

---

### 6. Decision Frameworks Over Rigid Rules

**What this means:**
- Provide tools for making good decisions, not lists of rules to follow
- Decision trees help teams reason through tradeoffs
- "It depends" is a valid answer when you explain what it depends on

**Why:**
- Context matters; rules can't capture every situation
- Empowered teams make better decisions than compliant teams
- Understanding "why" leads to better outcomes than memorizing "what"

**In practice:**
- ✅ Use decision trees to guide component selection
- ✅ Document the reasoning behind system decisions
- ❌ Publish "you must always use X" rules
- ❌ Expect teams to memorize correct usage patterns

---

## Applying the Principles

When facing a decision, ask:

1. **Does this make teams faster or slower?** (Principle 3)
2. **Are we requiring approval or just visibility?** (Principles 2, 4)
3. **Are we enforcing visual sameness or semantic consistency?** (Principle 5)
4. **Are we giving teams tools to decide, or rules to follow?** (Principle 6)
5. **Is this about tokens or components?** (Principle 1)

---

## Updating These Principles

These principles can evolve as we learn. To propose a change:

1. Open a discussion with specific problems the change addresses
2. Document how the change affects existing guidance
3. Get input from at least one representative from Design, Engineering, and Product
4. Update this document and announce the change

---

*Last updated: 2026-02-03*
