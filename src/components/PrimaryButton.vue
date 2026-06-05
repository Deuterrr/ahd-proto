<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)
const oriDown = ref(false)
const exiting = ref(false)
const noTransition = ref(false)

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), {
  type: 'button',
  disabled: false
})

const onLeave = () => {
  hover.value = false
  exiting.value = true

  setTimeout(() => {
    oriDown.value = true        // snap to bottom instantly (no transition)
    noTransition.value = true
    exiting.value = false
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        noTransition.value = false  // re-enable transition
        oriDown.value = false       // now it's ready at translate-y-full for next hover
      })
    })
  }, 250)
}
</script>

<template>
  <ButtonBase
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
  >
    <div
      class="relative overflow-hidden inline-block cursor-pointer bg-black px-8 py-3"
      @mouseenter="hover = true"
      @mouseleave="onLeave"
    >
      <!-- Background -->
      <span
        class="absolute inset-0 bg-[--color-accent-primary] z-0 duration-[420ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        :class="[
          noTransition ? '!transition-none' : 'transition-transform',
          hover            ? 'translate-y-0'
          : exiting        ? '-translate-y-full'
          :                  'translate-y-full'
        ]"
      ></span>

      <span class="relative block overflow-hidden z-10">
        <!-- Primary label -->
        <span
          class="text-white block ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
          :class="[
            noTransition ? ['!transition-none', 'duration-[400ms]'] : 'transition-transform',
            oriDown   ? ['translate-y-full', 'duration-[400ms]']    // snapped to bottom (no transition)
            : hover   ? ['-translate-y-full', 'duration-[400ms]']   // active hover: exit upward
            : exiting ? ['-translate-y-full', 'duration-[200ms]']   // leaving: continue upward
            :           'translate-y-0'       // idle
          ]"
        >
          <slot />
        </span>

        <!-- Clone label -->
        <span
          class="absolute left-0 top-full block text-black duration-[420ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
          :class="[
            noTransition ? '!transition-none' : 'transition-transform',
            oriDown      ? 'translate-y-full'
            : hover          ? '-translate-y-full'
            : exiting      ? '-translate-y-[200%]'
            :                'translate-y-0'
          ]"
        >
          <slot />
        </span>
      </span>
    </div>
  </ButtonBase>
</template>
