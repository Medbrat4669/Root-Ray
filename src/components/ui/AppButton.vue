<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :type="!to ? type : null"
    class="app-button"
    :class="[`app-button--${variant}`]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'text'].includes(value)
  }
})
</script>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-base);
  border: 1px solid transparent;
  font-family: var(--font-sans);
}

.app-button--primary {
  background-color: var(--color-text);
  color: var(--color-white);
}

.app-button--primary:hover {
  opacity: 0.9;
}

.app-button--outline {
  background-color: transparent;
  border-color: var(--color-text);
  color: var(--color-text);
}

.app-button--outline:hover {
  background-color: var(--color-text);
  color: var(--color-white);
}

.app-button--text {
  padding: 0;
  background: none;
  color: var(--color-text);
  border: none;
}

.app-button--text:hover {
  opacity: 0.6;
}
</style>
