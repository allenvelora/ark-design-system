<script setup>
/**
 * Card component using Ark Design System semantic tokens
 * 
 * Token usage:
 * - Background: color.surface.primary
 * - Border: color.border.default
 * - Border radius: radius.component.card
 * - Padding: spacing.component.padding.lg
 * - Typography: typography.heading.sm, typography.body.sm
 */

defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="card">
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <p v-if="description" class="card-description">{{ description }}</p>
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-surface-primary, #fff);
  border: 1px solid var(--color-border-default, #e4e4e7);
  border-radius: var(--radius-component-card, 8px);
  padding: var(--spacing-component-padding-lg, 24px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-component-gap-md, 12px);
}

.card-title {
  font-family: var(--typography-heading-sm-font-family, inherit);
  font-size: var(--typography-heading-sm-font-size, 18px);
  font-weight: var(--typography-heading-sm-font-weight, 500);
  line-height: var(--typography-heading-sm-line-height, 1.25);
  color: var(--color-text-primary, #18181b);
  margin: 0;
}

.card-description {
  font-family: var(--typography-body-sm-font-family, inherit);
  font-size: var(--typography-body-sm-font-size, 14px);
  line-height: var(--typography-body-sm-line-height, 1.5);
  color: var(--color-text-secondary, #52525b);
  margin: 0;
}
</style>
