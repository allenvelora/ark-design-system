# Vue Integration Example

This example demonstrates how to integrate ARK Design System tokens into a Vue application.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Integration Steps

### 1. Install the Tokens Package

```bash
npm install @ark/tokens
# or link locally during development
npm link ../../../tokens
```

### 2. Import CSS Variables

In your main entry point (`main.js`):

```javascript
import '@ark/tokens/css/variables.css';
```

### 3. Use Tokens in Components

```vue
<template>
  <button :class="['btn', `btn-${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: var(--spacing-component-padding-sm) var(--spacing-component-padding-md);
  border-radius: var(--radius-component-button);
  font-family: var(--typography-ui-button-font-family);
  font-size: var(--typography-ui-button-font-size);
  font-weight: var(--typography-ui-button-font-weight);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--color-action-primary-default);
  color: var(--color-text-inverse);
}

.btn-primary:hover {
  background-color: var(--color-action-primary-hover);
}
</style>
```

### 4. Using JavaScript Token Values

If you need token values in JavaScript:

```javascript
import { ColorActionPrimaryDefault } from '@ark/tokens';

// Use in JS
const themeColor = ColorActionPrimaryDefault;
```

## File Structure

```
vue-app/
├── src/
│   ├── main.js            # Entry point with token import
│   ├── App.vue            # Main app component
│   ├── components/
│   │   ├── Button.vue     # Example button using tokens
│   │   ├── Card.vue       # Example card using tokens
│   │   └── Input.vue      # Example input using tokens
│   └── assets/
│       └── global.css     # Global styles with token usage
├── package.json
└── vite.config.js
```

## Best Practices

1. **Always use semantic tokens** - Don't use primitive tokens directly
2. **Use CSS custom properties** - Prefer `var(--token-name)` in styles
3. **Document divergence** - If you can't use a token, log it
4. **Check the decision trees** - Use the dashboard's decision helper

## Reporting Divergence

If you need to deviate from the design system:

1. Try to find an appropriate semantic token first
2. If no token fits, use the token that's closest in intent
3. Add an entry to `data/divergence-log.json` explaining why
4. Add a code comment referencing the divergence ID
