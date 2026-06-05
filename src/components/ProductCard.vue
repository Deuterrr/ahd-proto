<script setup lang="ts">
import type { Product } from '../types/product'
import { useSiteNavigation } from '../composables/useSiteNavigation'

const props = defineProps<{
  product: Product
}>()

const { getProductPath } = useProductCatalog()
const { currentLang } = useSiteNavigation()

const isNew = computed(() => {
  if (!props.product.date) return false
  const productDate = new Date(props.product.date)
  const twoWeeksAgo = new Date()
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
  return productDate >= twoWeeksAgo
})
</script>

<template>
  <NuxtLink
    :to="getProductPath(props.product.slug.id)"
    class="
      group/card relative flex h-full min-h-[360px] flex-col overflow-hidden
      bg-[--color-bg-primary] rounded-lg
    "
  >
    <!-- Top -->
    <div
      class="
        relative z-0 w-full flex-[19_1_0%] overflow-hidden rounded-lg
      "
    >
      <div
        class="
          pointer-events-none absolute inset-0 z-10 bg-black/20
          transition-opacity duration-200 ease-out
          group-has-[:hover]/cards:opacity-100
        "
      >

        <!-- Newest Indicator -->
        <div
          v-if="isNew"
          class="
            new-badge absolute top-3 right-3 z-20 font-bold uppercase tracking-wider
            rounded bg-[--color-accent-primary] shadow-md px-2 py-1 text-[10px]
            flex items-center justify-center
          "
        >
          {{ currentLang === 'id' ? 'Baru lho!' : 'Neww!' }}
        </div>
        
        <AppImage
          :src="props.product.images[0] ?? ''"
          :alt="props.product.title[currentLang]"
          class="
            h-full w-full object-cover transition duration-200 ease-out
            group-hover/card:scale-[1.2]
            group-has-[:hover]/cards:saturate-[0.35] group-hover/card:!saturate-100
          "
        />

      </div>
    </div>

    <!-- body -->
    <div
      class="
        relative z-10 flex min-h-[132px] flex-[6_1_0%] flex-col items-center gap-1 p-4 transition-all
      "
    >
      <h3 class="
        w-full overflow-hidden text-center leading-[1.2] text-black transition-colors duration-300
        group-has-[:hover]/cards:text-gray-400 group-hover/card:!text-black
        [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]
      ">
        {{ props.product.title[currentLang] }}
      </h3>
      <p
        class="
          text-sm text-black transition-colors duration-300
          group-has-[:hover]/cards:text-gray-400 group-hover/card:!text-black
        ">
        {{ props.product.category[currentLang] }}
      </p>
    </div>
  
  </NuxtLink>
</template>
