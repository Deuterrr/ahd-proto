<script setup>
import { ref, computed, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: false, default: '' },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined },
  sizes: { type: String, default: 'sm:400px md:800px lg:1200px xl:1600px' },
  loading: { type: String, default: 'lazy' },
  fit: { type: String, default: undefined },
  quality: { type: [String, Number], default: 80 },
  format: { type: String, default: 'webp' }
})

const attrs = useAttrs()
const filteredAttrs = computed(() => {
  const { class: _, ...rest } = attrs
  return rest
})

const isLoaded = ref(false)

const onLoad = () => {
  isLoaded.value = true
}
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :loading="loading"
    :fit="fit"
    :quality="quality"
    :format="format"
    :class="[
      isLoaded ? '' : 'bg-[--color-bg-secondary] animate-pulse',
      $attrs.class
    ]"
    @load="onLoad"
    v-bind="filteredAttrs"
  />
</template>
