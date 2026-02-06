import React from 'react';

/**
 * Input component using Ark Design System semantic tokens
 * 
 * Token usage:
 * - Background: color.surface.primary
 * - Border: color.border.default, color.border.focus
 * - Border radius: radius.component.input
 * - Padding: spacing.component.padding
 * - Typography: typography.ui.input, typography.ui.label
 */
function Input({ 
  label, 
  type = 'text', 
  placeholder, 
  error,
  style = {},
  ...props 
}) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-layout-stack-xs, 8px)' }}>
      {label && (
        <label
          style={{
            fontFamily: 'var(--typography-ui-label-font-family, inherit)',
            fontSize: 'var(--typography-ui-label-font-size, 14px)',
            fontWeight: 'var(--typography-ui-label-font-weight, 500)',
            lineHeight: 'var(--typography-ui-label-line-height, 1.25)',
            color: 'var(--color-text-primary, #18181b)',
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: '100%',
          padding: 'var(--spacing-component-padding-sm, 8px) var(--spacing-component-padding-md, 16px)',
          backgroundColor: 'var(--color-surface-primary, #fff)',
          border: `1px solid ${
            error 
              ? 'var(--color-feedback-error-border, #fecaca)'
              : isFocused 
                ? 'var(--color-border-focus, #3b82f6)' 
                : 'var(--color-border-default, #e4e4e7)'
          }`,
          borderRadius: 'var(--radius-component-input, 6px)',
          fontFamily: 'var(--typography-ui-input-font-family, inherit)',
          fontSize: 'var(--typography-ui-input-font-size, 16px)',
          lineHeight: 'var(--typography-ui-input-line-height, 1.25)',
          color: 'var(--color-text-primary, #18181b)',
          outline: 'none',
          transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          boxShadow: isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none',
          ...style,
        }}
        {...props}
      />
      {error && (
        <span
          style={{
            fontSize: 'var(--typography-ui-caption-font-size, 12px)',
            color: 'var(--color-feedback-error-text, #b91c1c)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
