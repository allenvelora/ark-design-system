# Problem Statement

## Current State

Our organization operates three products with partial, inconsistent design system adoption:

| Product | Stack | Current System | Adoption Level |
|---------|-------|----------------|----------------|
| Keela (CRM) | React | Design System B | Partial |
| Aplos (Accounting) | React | Design System A | Partial |
| Raisely (Fundraising) | Vue | Design System A | Partial |

### Key Observations

- **Two separate design systems** exist (A and B), creating fragmentation
- **No unified token layer** means visual consistency requires manual coordination
- **Decision-making is distributed** with no clear framework for when to use system components vs. deviate
- **Divergence goes untracked** until it surfaces as user-facing inconsistency or technical debt

## Impact

### Design Impact
- Time spent on ad-hoc consistency reviews instead of strategic work
- Brand coherence risk as products evolve independently
- Duplicate design effort when similar patterns are created in isolation
- Difficulty maintaining design documentation across systems

### Engineering Impact
- Duplicate component implementations across products
- Migration friction when moving between systems or updating shared code
- Inconsistent accessibility implementations
- Technical debt accumulates without visibility

### Product Impact
- User experience gaps between products in the same suite
- Slower feature delivery due to design/engineering alignment overhead
- Difficulty sharing features or UI patterns across products
- Onboarding friction for users who use multiple products

## Root Causes (Hypothesis)

1. **Adoption friction**: Existing systems don't fit how teams actually work
   - Too rigid for product-specific needs
   - Integration overhead discourages adoption
   - Documentation doesn't match real-world use cases

2. **Decision ambiguity**: Teams don't know when to use the system vs. deviate
   - No clear criteria for "acceptable divergence"
   - No shared language for discussing tradeoffs
   - Each product has developed its own informal rules

3. **No feedback loop**: Divergence isn't detected until too late
   - No visibility into where products have drifted
   - No mechanism for surfacing system gaps
   - Inconsistency discovered reactively, not proactively

4. **Split ownership**: Two systems means no single source of truth
   - Design System A and B evolved independently
   - No clear path to convergence
   - Teams default to local solutions

## What This Initiative Addresses

This cross-product design system operating model aims to:

- Create a **unified semantic token layer** that works across all products regardless of which design system they use
- Establish **decision frameworks** that help teams make consistent choices
- Build **visibility mechanisms** that surface drift as signal, not failure
- Define **governance processes** that protect quality without blocking shipping

## What This Initiative Does NOT Address

See [Non-Goals](./non-goals.md) for explicit scope boundaries.

---

*Last updated: 2026-02-03*
