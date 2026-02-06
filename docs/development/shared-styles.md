# Shared Styles System

The ARK Design System uses a centralized shared styles architecture to ensure consistency, reduce code duplication, and improve maintainability across all pages.

## File Location

All shared styles are located in:
```
dashboard/public/shared-styles.css
```

This file is automatically included via `Layout.astro` and available on all pages.

## Available Components

### Resource Links

Used for external links like Figma, GitHub, documentation, etc.

```html
<a href="..." class="resource-link">
  <svg>...</svg>
  Figma
</a>

<!-- Compact variant for sticky headers -->
<a href="..." class="resource-link resource-link-sm">
  <svg>...</svg>
  GitHub
</a>
```

**Features:**
- Consistent styling across light and dark modes
- Hover states with brand color highlights
- Compact variant for space-constrained areas

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
```

### Cards

```html
<div class="card">Standard card</div>
<div class="card card-interactive">Clickable card</div>
```

### Badges

```html
<span class="badge badge-success">Stable</span>
<span class="badge badge-warning">Beta</span>
<span class="badge badge-error">Deprecated</span>
<span class="badge badge-info">Draft</span>
```

### Form Elements

```html
<input type="text" class="input" placeholder="Search...">
```

### Grid Layouts

```html
<div class="grid grid-2">2-column grid</div>
<div class="grid grid-3">3-column grid</div>
<div class="grid grid-4">4-column grid</div>
<div class="grid grid-auto">Auto-fill grid (responsive)</div>
```

## Dark Mode Support

All shared components automatically support dark mode via `[data-theme="dark"]` selectors. No additional work is needed when using shared styles.

## Design Principles

### 1. Token-First Approach
Always use CSS custom properties (tokens) for colors, spacing, and other values:
```css
/* Good */
color: var(--color-text-primary, #18181b);

/* Avoid */
color: #18181b;
```

### 2. Fallback Values
Always provide fallback values for tokens:
```css
background: var(--brand-primary, #18181b);
```

### 3. Semantic Naming
Use semantic token names that describe purpose, not appearance:
```css
/* Good */
--color-text-primary
--semantic-neutral-bg-hover

/* Avoid */
--color-gray-900
--bg-light-hover
```

### 4. Component Scoping
When adding component-specific styles, use local `<style>` blocks for overrides only. Base styles should live in shared-styles.css.

## Adding New Shared Styles

When creating new reusable patterns:

1. **Identify repetition** - If a pattern appears 3+ times, it should be shared
2. **Add to shared-styles.css** - Include both light and dark mode variants
3. **Use tokens** - Reference design tokens for all values
4. **Exclude from global overrides** - If you create a new link-like component, add it to the exclusion list in `brand-overrides.css`:
   ```css
   a:not(.nav-link):not(.logo):not(.your-new-class) {
     color: var(--brand-primary-text);
   }
   ```
5. **Document** - Update this file with usage examples
6. **Test** - Verify in both light and dark modes, all brands

## Brand Compatibility

Shared styles use `--brand-*` tokens which automatically adapt to the selected brand (Neutral, Aplos, Keela, Raisely). This ensures components look correct regardless of which brand is active.
