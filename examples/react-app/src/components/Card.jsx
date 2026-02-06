import React from 'react';

/**
 * Card component using Ark Design System semantic tokens
 * 
 * Token usage:
 * - Background: color.surface.primary
 * - Border: color.border.default
 * - Border radius: radius.component.card
 * - Padding: spacing.component.padding.md
 * - Typography: typography.heading.sm, typography.body.sm
 */
function Card({ title, description, children, style = {} }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface-primary, #fff)',
        border: '1px solid var(--color-border-default, #e4e4e7)',
        borderRadius: 'var(--radius-component-card, 8px)',
        padding: 'var(--spacing-component-padding-lg, 24px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-component-gap-md, 12px)',
        ...style,
      }}
    >
      {title && (
        <h3
          style={{
            fontFamily: 'var(--typography-heading-sm-font-family, inherit)',
            fontSize: 'var(--typography-heading-sm-font-size, 18px)',
            fontWeight: 'var(--typography-heading-sm-font-weight, 500)',
            lineHeight: 'var(--typography-heading-sm-line-height, 1.25)',
            color: 'var(--color-text-primary, #18181b)',
            margin: 0,
          }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          style={{
            fontFamily: 'var(--typography-body-sm-font-family, inherit)',
            fontSize: 'var(--typography-body-sm-font-size, 14px)',
            lineHeight: 'var(--typography-body-sm-line-height, 1.5)',
            color: 'var(--color-text-secondary, #52525b)',
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

export default Card;
