<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), {
  type: 'button',
  disabled: false
})

const tagName = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const linkAttrs = computed(() => {
  if (props.to) {
    return { to: props.to }
  }

  if (props.href) {
    return { href: props.href }
  }

  return { type: props.type, disabled: props.disabled }
})
</script>

<template>
  <component
    :is="tagName"
    v-bind="linkAttrs"
    :aria-disabled="disabled && (to || href) ? 'true' : undefined"
    :tabindex="disabled && (to || href) ? -1 : undefined"
  >
    <slot />
  </component>
</template>
