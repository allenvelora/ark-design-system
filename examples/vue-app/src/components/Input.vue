<script setup>
import { ref } from 'vue';

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

defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);

const isFocused = ref(false);
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="['input', { 'input-focused': isFocused, 'input-error': error }]"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <span v-if="error" class="input-error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-layout-stack-xs, 8px);
}

.input-label {
  font-family: var(--typography-ui-label-font-family, inherit);
  font-size: var(--typography-ui-label-font-size, 14px);
  font-weight: var(--typography-ui-label-font-weight, 500);
  line-height: var(--typography-ui-label-line-height, 1.25);
  color: var(--color-text-primary, #18181b);
}

.input {
  width: 100%;
  padding: var(--spacing-component-padding-sm, 8px) var(--spacing-component-padding-md, 16px);
  background-color: var(--color-surface-primary, #fff);
  border: 1px solid var(--color-border-default, #e4e4e7);
  border-radius: var(--radius-component-input, 6px);
  font-family: var(--typography-ui-input-font-family, inherit);
  font-size: var(--typography-ui-input-font-size, 16px);
  line-height: var(--typography-ui-input-line-height, 1.25);
  color: var(--color-text-primary, #18181b);
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input::placeholder {
  color: var(--color-text-muted, #a1a1aa);
}

.input-focused {
  border-color: var(--color-border-focus, #3b82f6);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-error {
  border-color: var(--color-feedback-error-border, #fecaca);
}

.input-error-message {
  font-size: var(--typography-ui-caption-font-size, 12px);
  color: var(--color-feedback-error-text, #b91c1c);
}
</style>
