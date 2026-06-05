<script setup lang="ts">
import { getProductCategoryBySegment } from '../data/productCategories'
import { useSiteNavigation } from '../composables/useSiteNavigation'
import { computed } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const { getProductByCategoryAndSlug } = useProductCatalog()

const { appRoutes, currentLang } = useSiteNavigation()

const labelMap: Record<string, { id: string; en: string }> = {
  product: { id: 'Produk', en: 'Products' },
  'produk': { id: 'Produk', en: 'Products' },
  'products': { id: 'Produk', en: 'Products' },
  contact: { id: 'Hubungi Kami', en: 'Contact Us' },
  'kontak-kami': { id: 'Hubungi Kami', en: 'Contact Us' },
  'contact-us': { id: 'Hubungi Kami', en: 'Contact Us' },
  'terms-and-conditions': { id: 'Syarat & Ketentuan', en: 'Terms & Conditions' },
  'syarat-dan-ketentuan': { id: 'Syarat & Ketentuan', en: 'Terms & Conditions' },
  'privacy-policy': { id: 'Kebijakan Privasi', en: 'Privacy Policy' },
  'kebijakan-privasi': { id: 'Kebijakan Privasi', en: 'Privacy Policy' }
}

const segmentToDomain: Record<string, string> = {
  'produk': 'product',
  'products': 'product',
}

const crumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)

  const langPrefix: 'id' | 'en' =
    segments[0] === 'en' || segments[0] === 'id'
      ? segments[0]
      : 'id'

  const pathSegments = segments.filter(
    s => s !== 'id' && s !== 'en'
  )

  const firstSegment = pathSegments[0]

  const domain = firstSegment
    ? segmentToDomain[firstSegment] || firstSegment
    : undefined

  return pathSegments.map((segment, index) => {
    const to = `/${langPrefix}/${pathSegments
      .slice(0, index + 1)
      .join('/')}`

    const categorySegment = pathSegments[1]

    const category =
      domain === 'product' && index >= 1
        ? getProductCategoryBySegment(
            categorySegment ?? segment,
            langPrefix
          )
        : undefined

    const product =
      domain === 'product' &&
      index === 2 &&
      categorySegment
        ? getProductByCategoryAndSlug(
            categorySegment,
            segment
          )
        : undefined

    return {
      to,
      label:
        product?.title[langPrefix] ??
        category?.label[langPrefix] ??
        labelMap[segment]?.[langPrefix] ??
        segment
    }
  })
})

const homeLabel = computed(() => currentLang.value === 'en' ? 'Home' : 'Beranda')
</script>

<template>
  <nav
    v-if="crumbs.length > 0"
    aria-label="Breadcrumb"
    class="
      flex flex-wrap items-center gap-2.5
      px-6 py-2
      md:px-14
      lg:px-20
      xl:px-24
    "
  >
    <NuxtLink :to="appRoutes.home" class="text-md text-[--color-text-primary] !tracking-[--tracking-tight-normal]">
      {{ homeLabel }}
    </NuxtLink>

    <template v-for="crumb in crumbs" :key="crumb.to">
      <span class="text-md text-[--color-text-primary]">/</span>

      <NuxtLink
        v-if="crumb.to !== route.path"
        :to="crumb.to"
        class="text-md text-[--color-text-primary] !tracking-[--tracking-tight-normal]"
      >
        {{ crumb.label }}
      </NuxtLink>

      <span
        v-else
        class="text-md font-medium text-[--color-text-muted] !tracking-[--tracking-tight-normal]"
      >
        {{ crumb.label }}
      </span>
    </template>
  </nav>
</template>
