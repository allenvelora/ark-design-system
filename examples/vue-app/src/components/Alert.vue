<script setup>
/**
 * Alert component using Ark Design System semantic tokens
 * 
 * Token usage:
 * - Background: color.feedback.{type}.bg
 * - Border: color.feedback.{type}.border
 * - Text: color.feedback.{type}.text
 * - Border radius: radius.component.card
 * - Padding: spacing.component.padding.md
 */

defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (v) => ['success', 'warning', 'error', 'info'].includes(v),
  },
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div :class="['alert', `alert-${type}`]">
    {{ message }}
  </div>
</template>

<style scoped>
.alert {
  padding: var(--spacing-component-padding-md, 16px);
  border-radius: var(--radius-component-card, 8px);
  font-size: var(--typography-body-sm-font-size, 14px);
  border: 1px solid;
}

.alert-success {
  background-color: var(--color-feedback-success-bg, #f0fdf4);
  border-color: var(--color-feedback-success-border, #bbf7d0);
  color: var(--color-feedback-success-text, #15803d);
}

.alert-warning {
  background-color: var(--color-feedback-warning-bg, #fffbeb);
  border-color: var(--color-feedback-warning-border, #fde68a);
  color: var(--color-feedback-warning-text, #b45309);
}

.alert-error {
  background-color: var(--color-feedback-error-bg, #fef2f2);
  border-color: var(--color-feedback-error-border, #fecaca);
  color: var(--color-feedback-error-text, #b91c1c);
}

.alert-info {
  background-color: var(--color-feedback-info-bg, #eff6ff);
  border-color: var(--color-feedback-info-border, #bfdbfe);
  color: var(--color-feedback-info-text, #1d4ed8);
}
</style>
