<script setup>
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

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'destructive', 'ghost'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button 
    :class="['btn', `btn-${variant}`]" 
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-component-gap-sm, 8px);
  padding: var(--spacing-component-padding-sm, 8px) var(--spacing-component-padding-md, 16px);
  border-radius: var(--radius-component-button, 6px);
  font-family: var(--typography-ui-button-font-family, inherit);
  font-size: var(--typography-ui-button-font-size, 14px);
  font-weight: var(--typography-ui-button-font-weight, 500);
  line-height: var(--typography-ui-button-line-height, 1.25);
  cursor: pointer;
  border: none;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--color-action-primary-default, #2563eb);
  color: var(--color-text-inverse, #fff);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-action-primary-hover, #1d4ed8);
}

.btn-secondary {
  background-color: var(--color-action-secondary-default, #f4f4f5);
  color: var(--color-text-primary, #18181b);
  border: 1px solid var(--color-border-default, #e4e4e7);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-action-secondary-hover, #e4e4e7);
}

.btn-destructive {
  background-color: var(--color-action-destructive-default, #dc2626);
  color: var(--color-text-inverse, #fff);
}

.btn-destructive:hover:not(:disabled) {
  background-color: var(--color-action-destructive-hover, #b91c1c);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-text-link, #2563eb);
}

.btn-ghost:hover:not(:disabled) {
  background-color: var(--color-action-secondary-default, #f4f4f5);
}
</style>
