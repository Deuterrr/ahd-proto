<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), {
  type: 'button',
  disabled: false
})
</script>

<template>
  <ButtonBase
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
  >
    <div class="
      relative overflow-hidden inline-block w-fit
      cursor-pointer border border-black rounded-[20rem]
      px-5 py-[7px] min-w-[6rem]
    ">
      <slot />
    </div>
  </ButtonBase>
</template>
