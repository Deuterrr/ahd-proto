import type { Locale } from "~/types/localized"
import type { ProductCategoryDefinition } from "~/types/product-category"

export const productCategories: ProductCategoryDefinition[] = [
  {
    label: {
      id: 'Unggas',
      en: 'Poultry',
    },
    segment: {
      id: 'unggas',
      en: 'poultry',
    },
    seoTitle: {
      id: 'Produk Unggas',
      en: 'Poultry Products',
    },
    seoDescription: {
      id: 'Jelajahi produk unggas AHD untuk mendukung performa, kesehatan, dan efisiensi pemeliharaan.',
      en: `Explore AHD's poultry products to support performance, health, and maintenance efficiency.`,
    }
  },
  {
    label: {
      id: 'Hewan Besar',
      en: 'Large Animal',
    },
    segment: {
      id: 'hewan-besar',
      en: 'large-animal',
    },
    seoTitle: {
      id: 'Produk Hewan Besar',
      en: 'Large Animal Products',
    },
    seoDescription: {
      id: 'Temukan solusi AHD untuk sapi, kambing, dan ternak ruminansia dengan dukungan nutrisi dan performa harian.',
      en: `Discover AHD's solutions for cattle, goats, and ruminants with daily nutritional and performance support.`,
    }
  },
  {
    label: {
      id: 'Pakan Ternak',
      en: 'Feedmill',
    },
    segment: {
      id: 'feedmill',
      en: 'feedmill',
    },
    seoTitle: {
      id: 'Produk Feedmill',
      en: 'Feedmill Products',
    },
    seoDescription: {
      id: 'Eksplor produk AHD untuk kebutuhan feedmill dan formulasi pakan yang lebih stabil dan efisien.',
      en: `Explore AHD's products for more stable and efficient feedmill and feed formulation needs.`,
    }
  },
  {
    label: {
      id: 'Peliharaan',
      en: 'Pet',
    },
    segment: {
      id: 'peliharaan',
      en: 'pet-animal',
    },
    seoTitle: {
      id: 'Produk Hewan Peliharaan',
      en: 'Pet Products',
    },
    seoDescription: {
      id: 'Lihat rangkaian produk AHD untuk mendukung kesehatan dan perawatan hewan peliharaan.',
      en: `Check out AHD's range of products to support pet health and care.`,
    }
  },
  {
    label: {
      id: 'Akuakultur',
      en: 'Aquaculture',
    },
    segment: {
      id: 'akuakultur',
      en: 'aquaculture',
    },
    seoTitle: {
      id: 'Produk Akuakultur',
      en: 'Aquaculture Products',
    },
    seoDescription: {
      id: 'Temukan solusi AHD untuk budidaya akuakultur yang lebih stabil, sehat, dan berkelanjutan.',
      en: `Discover AHD's solutions for more stable, healthy, and sustainable aquaculture.`,
    }
  }
]

export const getProductCategoryBySegment = (
  segment: string,
  lang: Locale
): ProductCategoryDefinition | undefined => {
  return productCategories.find(
    (category) => category.segment[lang] === segment
  )
}

export const getProductCategoryByLabel = (
  label: string,
  lang: Locale
): ProductCategoryDefinition | undefined => {
  return productCategories.find(
    (category) => category.label[lang] === label
  )
}

export const getProductCategorySegment = (
  label: string,
  lang: Locale
): string | undefined => {
  return getProductCategoryByLabel(label, lang)?.segment[lang]
}