import { useRoute } from 'vue-router'
import { seoData } from '~/data/seo'
import { useSiteNavigation } from '~/composables/useSiteNavigation'

// Coordinates localized page SEO metadata and multilingual document attributes.
export function useAppSeo() {
  const route = useRoute()
  const { currentLang } = useSiteNavigation()

  useHead({
    htmlAttrs: {
      lang: () => currentLang.value
    }
  })

  useSeoMeta({
    title: () => {
      const routeName = String(route.name)
      return seoData[routeName]?.title ?? null
    },
    description: () => {
      const routeName = String(route.name)
      return seoData[routeName]?.description ?? null
    },
    ogTitle: () => {
      const routeName = String(route.name)
      return seoData[routeName]?.title ?? null
    },
    ogDescription: () => {
      const routeName = String(route.name)
      return seoData[routeName]?.description ?? null
    },
    ogLocale: () => currentLang.value === 'id' ? 'id_ID' : 'en_US'
  })
}
