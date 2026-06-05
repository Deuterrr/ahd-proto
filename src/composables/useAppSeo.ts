import { useRoute } from 'vue-router'
import { seoData } from '~/data/seo'

export function useAppSeo() {
  const route = useRoute()

  // Use a computed wrapper so that whenever the route changes,
  // the meta tags update automatically
  useSeoMeta({
    title: () => {
      const routeName = String(route.name)
      if (seoData[routeName]?.title) {
        return seoData[routeName].title
      }

      return null
    },
    description: () => {
      const routeName = String(route.name)
      if (seoData[routeName]?.description) {
        return seoData[routeName].description
      }
      return null
    }
  })
}
