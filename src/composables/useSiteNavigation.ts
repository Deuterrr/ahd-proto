import { computed } from 'vue'
import { useRoute } from '#app'
import { siteRoutes, type AppLink } from '../constants/routes'
import { productCategories } from '../data/productCategories'

export function useSiteNavigation() {
  const route = useRoute()

  const currentLang = computed<'id' | 'en'>(() => {
    // Determine language from the path prefix
    if (route.path.startsWith('/en/') || route.path === '/en') {
      return 'en'
    }
    return 'id'
  })

  const appRoutes = computed(() => siteRoutes[currentLang.value])

  const navbarLinks = computed<AppLink[]>(() => {
    const routes = appRoutes.value
    return [
      { label: currentLang.value === 'id' ? 'Produk Kami' : 'Our Products', to: routes.product.index },
      { label: currentLang.value === 'id' ? 'Hubungi Kami' : 'Contact Us', to: routes.contact }
    ]
  })

  const footerCompanyLinks = computed<AppLink[]>(() => {
    const routes = appRoutes.value
    return [
      { label: currentLang.value === 'id' ? 'Visi dan Misi' : 'Vision & Mission', to: '#' },
      { label: currentLang.value === 'id' ? 'Nilai Perusahaan' : 'Core Values', to: '#' }
    ]
  })

  const footerProductLinks = computed<AppLink[]>(() => {
    const routes = appRoutes.value
    return productCategories.map((category) => {
      let routeTo: string = routes.product.index

      if (category.segment.en === 'poultry') routeTo = routes.product.poultry
      if (category.segment.en === 'large-animal') routeTo = routes.product.largeAnimal
      if (category.segment.en === 'pet-animal') routeTo = routes.product.pets
      if (category.segment.en === 'feedmill') routeTo = routes.product.feedmill
      if (category.segment.en === 'aquaculture') routeTo = routes.product.aquaculture
      
      return {
        label: category.label[currentLang.value],
        to: routeTo
      }
    })
  })

  const footerInfoLinks = computed<AppLink[]>(() => {
    const routes = appRoutes.value
    return [
      { label: currentLang.value === 'id' ? 'Hubungi Kami' : 'Contact Us', to: routes.contact },
    ]
  })

  return {
    currentLang,
    appRoutes,
    navbarLinks,
    footerCompanyLinks,
    footerProductLinks,
    footerInfoLinks
  }
}
