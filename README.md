# ARK Design System

A cross-product design system operating model for organizations with multiple products and tech stacks.

## Overview

This project provides:

- **Semantic Design Tokens** - Framework-agnostic design values (colors, spacing, typography)
- **Decision Frameworks** - Interactive guides for making consistent design choices
- **Governance Documentation** - Principles, processes, and contracts for cross-team collaboration
- **Health Dashboard** - Visibility into adoption, divergence, and system health
- **Integration Examples** - Working examples for React and Vue applications

## Quick Start

```bash
# Install dependencies
npm install

# Build tokens
npm run tokens:build

# Start dashboard
npm run dashboard:dev
```

Open http://localhost:3000 to view the dashboard.

## Project Structure

```
ark-design-system/
├── docs/                    # Operating model documentation
│   ├── problem-statement.md
│   ├── success-criteria.md
│   ├── non-goals.md
│   ├── risks-assumptions.md
│   ├── governance/          # Governance documentation
│   │   ├── principles.md
│   │   ├── change-flow.md
│   │   └── drift-detection.md
│   └── contracts/
│       └── qa-checklist.md
│
├── tokens/                  # Semantic token system
│   ├── src/
│   │   ├── primitive/       # Raw values (don't use directly)
│   │   └── semantic/        # Intent-based tokens (use these)
│   └── build/               # Generated outputs (CSS, JS, JSON)
│
├── data/                    # Runtime data (edit without rebuild)
│   ├── decision-trees/      # YAML decision guides
│   ├── divergence-log.json  # Track divergences here
│   ├── products.json        # Product metadata
│   └── metrics.json         # Adoption metrics
│
├── dashboard/               # Astro-based dashboard
│   └── src/pages/
│
└── examples/                # Integration examples
    ├── react-app/
    └── vue-app/
```

## Key Principles

1. **Tokens are the contract, not components** - Use semantic tokens; component implementation can vary
2. **Divergence requires documentation, not approval** - Log why you deviated, don't ask permission
3. **The system serves products, not the reverse** - If it blocks shipping, it's wrong
4. **Visibility over compliance** - See what's happening, don't prevent it
5. **Configuration over code** - Edit data files to change behavior, no rebuilds needed

## For Products

### Installing Tokens

```bash
npm install @ark/tokens
```

### Using Tokens (CSS)

```css
.button {
  background: var(--color-action-primary-default);
  padding: var(--spacing-component-padding-sm) var(--spacing-component-padding-md);
  border-radius: var(--radius-component-button);
}
```

### Using Tokens (JavaScript)

```javascript
import { ColorActionPrimaryDefault } from '@ark/tokens';
```

## For System Maintainers

### Editing Tokens

1. Edit JSON files in `tokens/src/semantic/` or `tokens/src/primitive/`
2. Run `npm run tokens:build` (or use watch mode)
3. Outputs regenerate in `tokens/build/`

### Editing Decision Trees

1. Edit YAML files in `data/decision-trees/`
2. Refresh the dashboard - changes appear immediately

### Recording Divergence

1. Edit `data/divergence-log.json`
2. Add entry to the `entries` array
3. Refresh dashboard to see the update

### Updating Governance

1. Edit markdown files in `docs/governance/`
2. Changes are reflected in the dashboard docs page

## Commands

| Command | Description |
|---------|-------------|
| `npm run setup` | Install dependencies and build tokens |
| `npm run dev` | Build tokens and start dashboard |
| `npm run tokens:build` | Build token outputs (CSS, JS, JSON) |
| `npm run tokens:watch` | Watch tokens and rebuild on change |
| `npm run dashboard:dev` | Start dashboard development server |
| `npm run dashboard:build` | Build dashboard for production |

## Documentation

- [Problem Statement](docs/problem-statement.md)
- [Success Criteria](docs/success-criteria.md)
- [Non-Goals](docs/non-goals.md)
- [Risks & Assumptions](docs/risks-assumptions.md)
- [Governance Principles](docs/governance/principles.md)
- [Change Flow](docs/governance/change-flow.md)
- [Drift Detection](docs/governance/drift-detection.md)
- [QA Checklist](docs/contracts/qa-checklist.md)

## Products

| Product | Stack | Current System |
|---------|-------|----------------|
| Keela (CRM) | React | Design System B |
| Aplos (Accounting) | React | Design System A |
| Raisely (Fundraising) | Vue | Design System A |

## License

MIT
