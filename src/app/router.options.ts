import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const isProductListingRoute = (path: string) => {
      return path === '/product' || /^\/product\/[^/]+$/.test(path)
    }

    if (savedPosition) {
      return savedPosition
    }

    if (isProductListingRoute(to.path) && isProductListingRoute(from.path)) {
      return false
    }

    if (to.path !== from.path || to.query.page !== from.query.page) {
      return {
        left: 0,
        top: 0
      }
    }

    return undefined
  }
}
