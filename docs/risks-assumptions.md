# Risks and Assumptions

## Key Assumptions

These assumptions underpin the operating model. If any prove false, the approach may need adjustment.

### Assumption 1: Teams Want Consistency

**We assume** that product teams genuinely want to build consistent experiences and will adopt tools that make this easier.

**If false:** The system becomes shelfware. Teams ignore tokens and continue with ad-hoc approaches.

**Mitigation:** Start with the most receptive team. Build proof points before expanding.

---

### Assumption 2: Tokens Are Sufficient

**We assume** that a shared semantic token layer provides enough consistency without requiring shared components.

**If false:** Products using the same tokens still look and feel disconnected.

**Mitigation:** Monitor early adoption. If token-only approach fails, consider lightweight shared components for high-impact patterns.

---

### Assumption 3: Divergence Reporting Will Happen

**We assume** teams will self-report when they diverge from the system.

**If false:** Divergence goes unreported, and we lose visibility into system gaps.

**Mitigation:** Make reporting frictionless (single JSON file edit). Celebrate divergence reports as valuable signal.

---

### Assumption 4: Governance Stays Lightweight

**We assume** lightweight async governance can protect quality without a dedicated committee.

**If false:** Decisions stall, or quality degrades without clear ownership.

**Mitigation:** Designate a rotating "system steward" role if async review consistently fails.

---

### Assumption 5: Documentation Stays Current

**We assume** teams will keep governance docs and decision trees updated as alignment evolves.

**If false:** Documentation drifts from reality, reducing trust in the system.

**Mitigation:** Link documentation updates to quarterly planning. Make it easy to edit (Markdown in repo).

---

## Identified Risks

### Risk 1: Low Initial Adoption

**Description:** Teams are too busy with product work to invest in token migration.

**Likelihood:** Medium  
**Impact:** High

**Mitigation:**
- Start with new features only (no migration requirement)
- Provide integration examples that show minimal effort
- Celebrate early wins visibly

---

### Risk 2: Token Naming Disputes

**Description:** Teams disagree on semantic token names or categories, blocking progress.

**Likelihood:** Medium  
**Impact:** Medium

**Mitigation:**
- Start with a small, uncontroversial token set
- Use async review with clear decision owner
- Document naming rationale to reduce future disputes

---

### Risk 3: Dashboard Becomes Vanity Metrics

**Description:** Leadership dashboard shows numbers that don't reflect real system health.

**Likelihood:** Medium  
**Impact:** Medium

**Mitigation:**
- Keep metrics simple and manually updated initially
- Focus on divergence patterns, not adoption percentages
- Include qualitative notes alongside numbers

---

### Risk 4: Governance Creep

**Description:** Lightweight governance gradually becomes heavyweight as edge cases accumulate.

**Likelihood:** Medium  
**Impact:** Medium

**Mitigation:**
- Document governance principles explicitly
- Review governance quarterly for accumulated cruft
- Default to "allow and document" over "prevent and approve"

---

### Risk 5: System Owner Burnout

**Description:** Without a dedicated team, system maintenance falls on whoever has time, leading to burnout or neglect.

**Likelihood:** High  
**Impact:** High

**Mitigation:**
- Define clear (limited) scope of system steward responsibilities
- Rotate stewardship across teams
- Keep the system intentionally simple to maintain

---

### Risk 6: Tech Stack Divergence

**Description:** React and Vue implementations drift apart despite shared tokens.

**Likelihood:** Low  
**Impact:** Medium

**Mitigation:**
- Tokens are the contract; implementation differences are acceptable
- Monitor for semantic drift (same token used for different purposes)
- Integration examples in both stacks

---

## Dependencies

| Dependency | Owner | Status | Risk if Missing |
|------------|-------|--------|-----------------|
| Access to all three product codebases | Engineering leads | Assumed | Cannot validate integration |
| Design leadership buy-in | Design Director | Assumed | Governance won't be respected |
| Engineering time for initial integration | Product teams | Assumed | Adoption stalls |
| Stakeholder alignment on success criteria | All | In progress | Misaligned expectations |

---

## Open Questions

1. **Who owns the design system day-to-day?**
   - Options: Rotating steward, dedicated part-time owner, distributed ownership
   - Recommendation: Start with rotating steward, reassess in 6 months

2. **What's the rollout order for products?**
   - Options: Start with smallest, start with most receptive, start with newest
   - Recommendation: Start with most receptive team regardless of product size

3. **How do we handle Design System A vs B conflicts?**
   - If both systems have a component for the same purpose, which tokens apply?
   - Recommendation: Semantic tokens are agnostic; both systems map to the same tokens

---

*Last updated: 2026-02-03*
