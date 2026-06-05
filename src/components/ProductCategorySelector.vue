<script setup lang="ts">
import { useSiteNavigation } from '../composables/useSiteNavigation'

const props = withDefaults(defineProps<{
  activeCategory?: string | null
  includeAll?: boolean
}>(), {
  activeCategory: null,
  includeAll: false
})

const { categories } = useProductCatalog()
const { appRoutes, currentLang } = useSiteNavigation()

const options = computed(() => {
  const routes = appRoutes.value.product
  const items = categories.value.map((category) => {
    let to: string = routes.index

    if (category.segment.en === 'poultry') to = routes.poultry
    if (category.segment.en === 'large-animal') to = routes.largeAnimal
    if (category.segment.en === 'pet-animal') to = routes.pets
    if (category.segment.en === 'feedmill') to = routes.feedmill
    if (category.segment.en === 'aquaculture') to = routes.aquaculture

    return {
      label: category.label[currentLang.value],
      to,
      value: category.segment[currentLang.value]
    }
  })

  if (!props.includeAll) {
    return items
  }

  return [
    {
      label: currentLang.value === 'id' ? 'Semua' : 'All',
      to: routes.index,
      value: 'all'
    },
    ...items
  ]
})
</script>

<template>
  <PillSelector
    :options="options"
    :active-value="activeCategory ?? null"
  />
</template>
