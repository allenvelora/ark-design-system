# Design QA Checklist

A shared contract between Design, Engineering, and Product for maintaining design quality.

## Purpose

This checklist helps teams:
- Know what to check at each stage
- Understand who owns what
- Avoid surprises late in the process
- Ship confidently without excessive review cycles

---

## Checklist by Stage

### Design Review (Before Engineering)

**Owner:** Design  
**When:** Before handoff to engineering

| Check | Questions to Ask |
|-------|------------------|
| ✅ **Token usage documented** | Are all colors, spacing, and typography specified with semantic token names? |
| ✅ **Decision tree consulted** | Did you use the decision helper for component choices? |
| ✅ **States specified** | Are hover, focus, active, disabled, and error states defined? |
| ✅ **Responsive behavior** | How does this adapt at different viewport sizes? |
| ✅ **Loading/empty states** | What does the user see before data loads or when there's no data? |
| ✅ **Accessibility basics** | Color contrast sufficient? Touch targets large enough? |

**If divergence is needed:**
- Document rationale before handoff
- Note which tokens you'd use if the system supported this case

---

### Engineering Implementation (PR Review)

**Owner:** Engineering  
**When:** Code review before merge

| Check | Questions to Ask |
|-------|------------------|
| ✅ **Tokens used** | Are semantic tokens used instead of hardcoded values? |
| ✅ **No primitive tokens** | Are you using semantic tokens, not primitive (raw) tokens? |
| ✅ **Semantic match** | Does the token match the intent? (e.g., error color for errors, not just red) |
| ✅ **Accessibility implemented** | ARIA labels, keyboard navigation, focus management? |
| ✅ **Responsive implemented** | Does it work at specified breakpoints? |
| ✅ **States implemented** | Are all interactive states from design present? |

**If divergence is present:**
- Is it documented in the divergence log?
- Is there a comment explaining why?

---

### Cross-Functional Review (Complex Features)

**Owner:** Design + Engineering + Product  
**When:** Major features, cross-product patterns

| Check | Questions to Ask |
|-------|------------------|
| ✅ **Consistency with other products** | Does this pattern exist elsewhere? Are they aligned? |
| ✅ **Token coverage** | Do existing tokens cover this use case? |
| ✅ **System gap identified?** | If not, should we propose new tokens? |
| ✅ **Documentation needed?** | Should this pattern be added to decision trees? |
| ✅ **User experience consistency** | Will users of multiple products have a coherent experience? |

---

### Pre-Release Check (QA)

**Owner:** QA / Product  
**When:** Before release to production

| Check | Questions to Ask |
|-------|------------------|
| ✅ **Visual match** | Does implementation match design specs? |
| ✅ **Interactive behavior** | Do all states work as designed? |
| ✅ **Edge cases** | Long text, empty states, error states handled? |
| ✅ **Accessibility audit** | Screen reader friendly? Keyboard accessible? |
| ✅ **Cross-browser** | Works in supported browsers? |

---

## Ownership Matrix

| Responsibility | Design | Engineering | Product |
|----------------|--------|-------------|---------|
| Token selection | ✅ Primary | Consults | - |
| Token implementation | - | ✅ Primary | - |
| Accessibility (design) | ✅ Primary | Reviews | - |
| Accessibility (code) | Reviews | ✅ Primary | - |
| Divergence decision | ✅ Primary | Consults | Aware |
| Divergence documentation | Reports | ✅ Primary | Aware |
| Cross-product consistency | ✅ Primary | Consults | ✅ Primary |
| User experience | ✅ Primary | Implements | ✅ Primary |
| Technical constraints | Aware | ✅ Primary | Mediates |

---

## What This Checklist Does NOT Cover

- **Feature completeness**: That's product management
- **Business logic correctness**: That's QA and engineering
- **Performance**: That's engineering
- **Security**: That's engineering and security team

This checklist focuses specifically on design system adherence and design quality.

---

## Quick Reference Card

Print this or keep it handy:

```
BEFORE ENGINEERING:
□ Tokens documented
□ All states specified  
□ Responsive defined
□ Accessibility considered

DURING IMPLEMENTATION:
□ Semantic tokens used
□ No hardcoded values
□ All states built
□ Keyboard accessible

IF DIVERGING:
□ Documented rationale
□ Added to divergence log
□ Code commented
```

---

## Handling Disagreements

**Design says one thing, engineering says another?**

1. Check if this is covered by decision trees
2. Consult the governance principles
3. If still unclear, product lead decides
4. Document the decision for future reference

**"This is technically difficult"**

1. Engineering explains the constraint
2. Design explores alternatives
3. Agree on acceptable tradeoff
4. Document as intentional divergence if needed

**"This doesn't match the design"**

1. Compare implementation to spec
2. Identify specific differences
3. Determine if fix is needed or design should update
4. Don't ship until aligned

---

## Improving This Checklist

This checklist should evolve based on:
- Patterns in QA findings
- Repeated questions from teams
- New capabilities in the design system

To propose changes:
1. Open an issue with specific improvement
2. Include examples of what the change addresses
3. Review async with design + engineering representatives
4. Update and announce

---

*Last updated: 2026-02-03*
