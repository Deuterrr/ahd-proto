import { computed } from 'vue'
import { getProductCategoryByLabel, productCategories, getProductCategoryBySegment } from '../data/productCategories'
import { productCatalog } from '../data/products'
import { useSiteNavigation } from './useSiteNavigation'

export const useProductCatalog = () => {
  const { appRoutes, currentLang } = useSiteNavigation()
  const products = computed(() => productCatalog)

  const categories = computed(() => productCategories)

  const getProductsByCategorySegment = (segment: string) => {
    const category = getProductCategoryBySegment(segment, currentLang.value)

    if (!category) {
      return []
    }

    return productCatalog.filter((product) => product.category.id === category.label.id)
  }

  const getProductBySlug = (slug: string) => {
    return productCatalog.find((product) => product.slug.id === slug)
  }

  const getProductByCategoryAndSlug = (categorySegment: string, slug: string) => {
    const category = getProductCategoryBySegment(categorySegment, currentLang.value)

    if (!category) {
      return undefined
    }

    return productCatalog.find((product) => (
      product.slug.id === slug && product.category.id === category.label.id
    ))
  }

  const getProductPath = (slug: string) => {
    const product = getProductBySlug(slug)
    const segment = product ? getProductCategoryByLabel(product.category.id, 'id')?.segment : undefined

    if (segment?.en === 'poultry') return `${appRoutes.value.product.poultry}/${slug}`
    if (segment?.en === 'large-animal') return `${appRoutes.value.product.largeAnimal}/${slug}`
    if (segment?.en === 'pet-animal') return `${appRoutes.value.product.pets}/${slug}`
    if (segment?.en === 'feedmill') return `${appRoutes.value.product.feedmill}/${slug}`
    if (segment?.en === 'aquaculture') return `${appRoutes.value.product.aquaculture}/${slug}`

    return `${appRoutes.value.product.index}/${slug}`
  }

  return {
    categories,
    products,
    getProductByCategoryAndSlug,
    getProductPath,
    getProductsByCategorySegment,
    getProductBySlug
  }
}
