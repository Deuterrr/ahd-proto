<script setup lang="ts">
import { computed } from 'vue'
import { getProductCategoryBySegment } from '../../data/productCategories'
import { useSiteNavigation } from '../../composables/useSiteNavigation'
import { locales } from './_locales'

const route = useRoute()
const { products: allProducts, getProductsByCategorySegment } = useProductCatalog()
const { currentLang } = useSiteNavigation()
const content = computed(() => locales[currentLang.value])

const categorySegment = computed(() => {
  const value = route.meta.categorySegment || route.params.category
  return typeof value === 'string' ? value : null
})

const category = computed(() => (
  categorySegment.value ? getProductCategoryBySegment(categorySegment.value, currentLang.value) : null
))

if (categorySegment.value && !category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: content.value.error.notFound
  })
}

const searchQuery = computed(() => (route.query.q as string || '').toLowerCase().trim())

const products = computed(() => {
  let list = categorySegment.value
    ? getProductsByCategorySegment(categorySegment.value)
    : allProducts.value

  if (searchQuery.value) {
    list = list.filter(item => {
      const titleMatch = item.title[currentLang.value].toLowerCase().includes(searchQuery.value)
      const overviewMatch = item.overview[currentLang.value].toLowerCase().includes(searchQuery.value)
      const descMatch = item.description[currentLang.value].toLowerCase().includes(searchQuery.value)
      const tagsMatch = item.tags?.some(tag => tag[currentLang.value].toLowerCase().includes(searchQuery.value))
      const categoryMatch = item.category[currentLang.value].toLowerCase().includes(searchQuery.value)
      return titleMatch || overviewMatch || descMatch || tagsMatch || categoryMatch
    })
  }

  return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

useSeoMeta({
  title: () => category.value?.seoTitle[currentLang.value] ?? (currentLang.value === 'id' ? 'Produk Kalbe Animal Health' : 'Kalbe Animal Health Products'),
  description: () => category.value?.seoDescription[currentLang.value] ?? (currentLang.value === 'id' ? 'Telusuri seluruh kategori produk Kalbe Animal Health untuk unggas, hewan besar, feedmill, hewan peliharaan, dan akuakultur.' : 'Explore all Kalbe Animal Health product categories for poultry, large animals, feedmill, pets, and aquaculture.')
})
</script>

<template>
  <div class="
    relative px-6 py-10 inline-flex flex-col gap-10 overflow-clip
    md:px-14
    lg:px-20
    xl:px-24
  ">

    <header class="flex flex-col items-center gap-6">

      <div class="
        grid grid-cols-1 w-full gap-6
        lg:grid-cols-8
      ">
        <div class="lg:col-span-4">
          <h1 class="w-full whitespace-pre-line">{{ content.header.title }}</h1>
        </div>
        <div class="lg:col-span-4"></div>
      </div>

      <div class="
        grid grid-cols-1 w-full gap-6
        lg:grid-cols-8
      ">
        <div class="lg:col-span-5"></div>
        <div class="lg:col-span-3">
          <p class="w-full text-md">
            {{ content.header.description }}
          </p>
        </div>
      </div>

    </header>

    <SearchFilterBar>
      <template #search>
        <SearchInput :placeholder="content.search.placeholder" />
      </template>

      <template #filter>
        <p class="text-sm text-[--color-bg-primary]">{{ content.search.category }}</p>

        <ProductCategorySelector
          :active-category="categorySegment ?? 'all'"
          include-all
        />
      </template>
    </SearchFilterBar>

    <section class="flex flex-col gap-6">
      <div
        v-if="category"
        class="flex gap-4 items-baseline"
      >
        <h2 class="text-2xl font-medium">
          {{ category.label[currentLang] }}
        </h2>
        <p class="text-sm text-[--color-text-muted]">
          {{ products.length }} {{ content.list.productCount }}
        </p>
      </div>

      <div class="
        group/cards grid grid-cols-2 gap-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      ">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>
