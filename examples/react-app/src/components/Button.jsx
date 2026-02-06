import React from 'react';

/**
 * Button component using Ark Design System semantic tokens
 * 
 * Token usage:
 * - Background: color.action.{variant}.default/hover/active
 * - Text: color.text.{inverse|primary}
 * - Padding: spacing.component.padding.{sm|md}
 * - Border radius: radius.component.button
 * - Typography: typography.ui.button
 */
function Button({ 
  variant = 'primary', 
  children, 
  disabled = false,
  style = {},
  ...props 
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-component-gap-sm, 8px)',
    padding: 'var(--spacing-component-padding-sm, 8px) var(--spacing-component-padding-md, 16px)',
    borderRadius: 'var(--radius-component-button, 6px)',
    fontFamily: 'var(--typography-ui-button-font-family, inherit)',
    fontSize: 'var(--typography-ui-button-font-size, 14px)',
    fontWeight: 'var(--typography-ui-button-font-weight, 500)',
    lineHeight: 'var(--typography-ui-button-line-height, 1.25)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-action-primary-default, #2563eb)',
      color: 'var(--color-text-inverse, #fff)',
    },
    secondary: {
      backgroundColor: 'var(--color-action-secondary-default, #f4f4f5)',
      color: 'var(--color-text-primary, #18181b)',
      border: '1px solid var(--color-border-default, #e4e4e7)',
    },
    destructive: {
      backgroundColor: 'var(--color-action-destructive-default, #dc2626)',
      color: 'var(--color-text-inverse, #fff)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-link, #2563eb)',
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyles = {
    primary: {
      backgroundColor: 'var(--color-action-primary-hover, #1d4ed8)',
    },
    secondary: {
      backgroundColor: 'var(--color-action-secondary-hover, #e4e4e7)',
    },
    destructive: {
      backgroundColor: 'var(--color-action-destructive-hover, #b91c1c)',
    },
    ghost: {
      backgroundColor: 'var(--color-action-secondary-default, #f4f4f5)',
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...(isHovered && !disabled ? hoverStyles[variant] : {}),
        ...style,
      }}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
