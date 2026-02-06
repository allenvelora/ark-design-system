# Non-Goals

## What This Initiative Will NOT Do

Explicit boundaries help teams understand scope and avoid scope creep. These are conscious decisions, not oversights.

### 1. Build a Full Component Library

**We will not** create a comprehensive shared component library that all products must use.

**Why not:**
- Components require framework parity (React + Vue = 2x maintenance)
- Products have legitimately different interaction needs
- Component libraries create adoption friction and version lock-in
- The existing Design Systems A and B already provide components

**Instead:** Tokens are the contract. Teams use whichever component implementation fits their stack, styled with shared semantic tokens.

---

### 2. Require Full Rewrites

**We will not** ask any product to rewrite existing UI to adopt the new system.

**Why not:**
- Full rewrites are expensive and risky
- Adoption must be incremental to succeed
- Products are actively shipping features; we can't pause them

**Instead:** New features use tokens; existing UI migrates opportunistically during normal maintenance.

---

### 3. Enforce Visual Uniformity

**We will not** measure success by how visually identical the products look.

**Why not:**
- Products serve different user needs and contexts
- Rigid uniformity stifles appropriate product differentiation
- "Looks the same" is a poor proxy for "works well together"

**Instead:** We optimize for semantic consistency (same intent = same token) and decision clarity.

---

### 4. Create Approval Gates

**We will not** require design system approval before teams can ship features.

**Why not:**
- Approval gates become bottlenecks
- They create adversarial relationships between system and product teams
- Slow feedback loops reduce system quality, not improve it

**Instead:** Teams can deviate freely but must document divergence. Visibility, not permission.

---

### 5. Consolidate Design Systems A and B

**We will not** attempt to merge the two existing design systems into one.

**Why not:**
- Consolidation is a large, risky undertaking
- It's not necessary if we have a shared token layer
- Teams have invested in their current systems

**Instead:** Both systems consume the same semantic tokens. Convergence can happen organically over time.

---

### 6. Automate Everything

**We will not** build sophisticated automated drift detection in the initial phase.

**Why not:**
- Automated detection requires significant tooling investment
- Manual reporting surfaces more context about *why* divergence happened
- We need to understand patterns before automating detection

**Instead:** Start with manual divergence reporting; add automation based on learned patterns.

---

### 7. Solve Organizational Alignment

**We will not** attempt to fix broader organizational coordination issues through tooling.

**Why not:**
- Design systems can't solve people problems
- Governance works only when teams want it to work
- Tooling without buy-in creates resentment

**Instead:** Focus on making the right thing easy; assume good faith from teams.

---

## Revisiting Non-Goals

These boundaries are not permanent. As the system matures, some non-goals may become goals:

| Current Non-Goal | When It Might Change |
|------------------|---------------------|
| Full component library | If token adoption is high and teams request shared components |
| Automated drift detection | Once manual patterns are well understood |
| System consolidation | If organic convergence naturally reduces the gap |

---

*Last updated: 2026-02-03*
