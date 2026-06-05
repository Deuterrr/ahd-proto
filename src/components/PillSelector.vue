<script setup lang="ts">
interface PillOption {
  label: string
  to?: string
  value: string
}

const props = withDefaults(defineProps<{
  activeValue?: string | null
  options: PillOption[]
}>(), {
  activeValue: null
})

const isActive = (value: string) => props.activeValue === value
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li v-for="option in options" :key="option.value">
      <NuxtLink
        v-if="option.to"
        :to="option.to"
        class="
          inline-flex items-center
          text-md !tracking-[--tracking-tight-md] text-md transition-colors duration-200
        "
        :class="isActive(option.value)
          ? 'text-[--color-accent-primary]'
          : 'text-[--color-bg-primary] hover:text-gray-400'"
      >
        {{ option.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
