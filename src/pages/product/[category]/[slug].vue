<script setup lang="ts">
import { getProductCategoryBySegment } from '../../../data/productCategories'
import { useSiteNavigation } from '../../../composables/useSiteNavigation'
import { locales } from './_locales'

const route = useRoute()
const { getProductByCategoryAndSlug } = useProductCatalog()
const { currentLang } = useSiteNavigation()

const content = computed(() => locales[currentLang.value])

const categorySegment = computed(() => (route.meta.categorySegment || route.params.category) as string)
const productSlug = computed(() => route.params.slug as string)
const category = computed(() => getProductCategoryBySegment(categorySegment.value, currentLang.value))
const product = computed(() => getProductByCategoryAndSlug(categorySegment.value, productSlug.value))

const isNew = computed(() => {
  if (!product.value?.date) return false
  const productDate = new Date(product.value.date)
  const twoWeeksAgo = new Date()
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
  return productDate >= twoWeeksAgo
})

const otherImages = computed(() => {
  return product.value?.images.slice(1) ?? []
})

if (!category.value || !product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: content.value.error.notFound
  })
}

useSeoMeta({
  title: () => `${product.value?.title[currentLang.value]} | ${category.value?.seoTitle[currentLang.value] ?? 'Produk AHD'}`,
  description: () => product.value?.overview[currentLang.value] ?? category.value?.seoDescription[currentLang.value]
})
</script>

<template>
  <div
    v-if="product && category"
    class="
      flex flex-col gap-12 overflow-hidden px-6 py-10
      md:px-14
      lg:px-20
      xl:px-24
    "
  >
    <header class="
      flex flex-col gap-6
      md:grid md:grid-cols-2 md:gap-8
    ">
      <div class="
        flex flex-col gap-6
        md:col-span-2 
      ">
        <h1 class="w-full">
          <!-- Newest Indicator -->
          <span
            v-if="isNew"
            class="
              new-badge font-bold uppercase tracking-wider w-fit
              rounded bg-[--color-accent-primary] shadow-md px-3 py-1.5 text-xs
              flex items-center justify-center
            "
          >
            {{ currentLang === 'id' ? 'Baru lho!' : 'Neww!' }}
          </span>
          
          <span>
            {{ product.title[currentLang] }}
          </span>

          <span class="text-sm font-medium !tracking-[--tracking-tight-sm]">
            &nbsp;&nbsp;({{ product.category[currentLang] }})
          </span>
        </h1>

        
        <p class="text-md leading-7">
          {{ product.overview[currentLang] }}
        </p>
      </div>
    </header>

    <section class="
      flex flex-col gap-8
      lg:grid lg:grid-cols-2 lg:gap-14
    ">
      <div class="col-span-1">
        <div class="
          overflow-hidden flex flex-col gap-2
          md:gap-2.5
        ">
          <AppImage
            :src="product.images[0] != undefined ? product.images[0] : ''"
            :alt="product.title[currentLang]"
            class="h-full w-full object-cover bg-[--color-bg-secondary] rounded-lg"
          />
          <ul class="
            flex gap-2
            md:gap-2.5
          ">
            <li v-for="(img, index) in otherImages" :key="index">
              <AppImage
                :src="img"
                :alt="product.title[currentLang]"
                class="
                  w-full object-cover bg-[--color-bg-secondary] rounded-lg
                  h-14
                  md:h-24
                  lg:h-28
                "
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-1 flex flex-col gap-12">

        <!-- description -->
        <div class="flex flex-col gap-4">
          <div>
            <span class="uppercase font-medium tracking-[16%] text-[--color-text-secondary]">
              {{ content.body.description }}
            </span>
          </div>

          <div class="flex flex-col gap-3">
            <p class="text-md leading-7">
              {{ product.description[currentLang] }}
            </p>
          </div>
        </div>

        <!-- tags -->
        <div class="col-span-1 flex flex-col gap-4">
          <span class="uppercase font-medium tracking-[16%] text-[--color-text-secondary]">
            {{ content.body.tags }}
          </span>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in product.tags"
              :key="item.id"
              class="
                text-sm font-normal tracking-tighter text-[--color-text-primary]
                px-4 py-1 border rounded-[8rem]
              "
            >
              {{ item[currentLang] }}
            </li>
          </ul>
        </div>

        <!-- specification -->
        <div class="flex flex-col gap-4">
          <span class="uppercase font-medium tracking-[16%] text-[--color-text-secondary]">
            {{ content.body.specification }}
          </span>
          <div class="grid grid-cols-2 gap-2">
            <div class="col-span-1 grid grid-rows-2 gap-2">
              <div class="
                row-span-1 flex flex-col gap-1.5 bg-[--color-bg-secondary]
                px-4 py-2.5 rounded-md
              ">
                <p class="text-sm text-[--color-text-muted]">
                  {{ content.body.ingredients }}
                </p>
                <ul class="flex flex-wrap">
                  <li
                    v-for="(ing, index) in product?.specification.ingredients"
                    :key="ing.id"
                  >
                    <span class="text-md font-light">
                      {{ ing[currentLang] }}<span v-if="index < product.specification.ingredients.length - 1">,&nbsp;</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="
                row-span-1 flex flex-col gap-2 bg-[--color-bg-secondary]
                p-3 rounded-md
              ">
                <p class="text-sm text-[--color-text-muted]">
                  {{ content.body.shape }}
                </p>
                <p class="text-md leading-7">{{ product.specification.shape[currentLang] }}</p>
              </div>
            </div>

            <div class="col-span-1 grid grid-rows-2 gap-2">
              <div class="
                row-span-1 flex flex-col gap-2 bg-[--color-bg-secondary]
                p-3 rounded-md
              ">
                <p class="text-sm text-[--color-text-muted]">
                  {{ content.body.dose }}
                </p>
                <p class="text-md leading-7">{{ product.specification.dose[currentLang] }}</p>
              </div>
              <div class="
                row-span-1 flex flex-col gap-2 bg-[--color-bg-secondary]
                p-3 rounded-md
              ">
                <p class="text-sm text-[--color-text-muted]">
                  {{ content.body.packaging }}
                </p>
                <p class="text-md leading-7">{{ product.specification.packaging[currentLang] }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- benefits -->
        <div class="flex flex-col gap-4">
          <div>
            <span class="uppercase font-medium tracking-[16%] text-[--color-text-secondary]">
              {{ content.body.benefit }}
            </span>
          </div>

          <div class="row-span-5">
            <ul class="list-disc space-y-3 pl-5">
              <li
                v-for="item in product.benefit"
                :key="item.id"
                class="text-md font-light text-[--color-text-primary]"
              >
                {{ item[currentLang] }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
