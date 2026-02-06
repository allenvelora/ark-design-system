# React Integration Example

This example demonstrates how to integrate ARK Design System tokens into a React application.

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

In your main CSS or entry point:

```css
/* Import all tokens as CSS custom properties */
@import '@ark/tokens/css';
```

Or in JavaScript:

```javascript
import '@ark/tokens/css';
```

### 3. Use Tokens in Components

```jsx
function Button({ variant = 'primary', children }) {
  const styles = {
    primary: {
      backgroundColor: 'var(--color-action-primary-default)',
      color: 'var(--color-text-inverse)',
    },
    secondary: {
      backgroundColor: 'var(--color-action-secondary-default)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-default)',
    },
  };

  return (
    <button style={{
      ...styles[variant],
      padding: 'var(--spacing-component-padding-sm) var(--spacing-component-padding-md)',
      borderRadius: 'var(--radius-component-button)',
      fontFamily: 'var(--typography-ui-button-font-family)',
      fontSize: 'var(--typography-ui-button-font-size)',
      fontWeight: 'var(--typography-ui-button-font-weight)',
      cursor: 'pointer',
    }}>
      {children}
    </button>
  );
}
```

### 4. Using JavaScript Token Values

If you need token values in JavaScript (e.g., for animations):

```javascript
import { ColorActionPrimaryDefault, SpacingComponentPaddingMd } from '@ark/tokens';

// Use in JS calculations, animations, etc.
const animationConfig = {
  backgroundColor: ColorActionPrimaryDefault,
  duration: 200,
};
```

## File Structure

```
react-app/
├── src/
│   ├── main.jsx           # Entry point with token import
│   ├── App.jsx            # Main app component
│   ├── components/
│   │   ├── Button.jsx     # Example button using tokens
│   │   ├── Card.jsx       # Example card using tokens
│   │   └── Input.jsx      # Example input using tokens
│   └── styles/
│       └── global.css     # Global styles with token usage
├── package.json
└── vite.config.js
```

## Best Practices

1. **Always use semantic tokens** - Don't use primitive tokens directly
2. **Use CSS custom properties** - Prefer `var(--token-name)` over JS imports
3. **Document divergence** - If you can't use a token, log it
4. **Check the decision trees** - Use the dashboard's decision helper

## Reporting Divergence

If you need to deviate from the design system:

1. Try to find an appropriate semantic token first
2. If no token fits, use the token that's closest in intent
3. Add an entry to `data/divergence-log.json` explaining why
4. Add a code comment referencing the divergence ID
