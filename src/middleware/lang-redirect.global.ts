export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    // Detect preferred language from headers or navigator
    let preferredLang = 'id' // Default to id

    if (import.meta.client) {
      // Client-side detection
      const userLang = navigator.language || (navigator as any).userLanguage
      if (userLang && !userLang.toLowerCase().includes('id')) {
        preferredLang = 'en'
      }
    } else {
      // Server-side detection
      const reqLocale = useRequestHeaders(['accept-language'])['accept-language']
      if (reqLocale && !reqLocale.toLowerCase().includes('id')) {
        preferredLang = 'en'
      }
    }

    return navigateTo(`/${preferredLang}/`, { replace: true })
  }
})
