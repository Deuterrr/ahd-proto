// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    domains: ['images.ctfassets.net', 'placehold.co'],
    format: ['webp']
  },
  devServer: {
    host: process.env.AHD_HOST || '',
    port: process.env.AHD_PORT 
      ? parseInt(process.env.AHD_PORT) 
      : (process.env.AHD_URL 
          ? (!isNaN(Number(process.env.AHD_URL)) 
              ? parseInt(process.env.AHD_URL) 
              : parseInt(new URL(process.env.AHD_URL.startsWith('http') ? process.env.AHD_URL : `http://${process.env.AHD_URL}`).port || '3000'))
          : undefined)
  },
  runtimeConfig: {
    public: {
      ahdHost: process.env.AHD_HOST,
      ahdUrl: (process.env.AHD_URL && !isNaN(Number(process.env.AHD_URL))) 
        ? `http://${process.env.AHD_HOST || '127.0.0.1'}:${process.env.AHD_URL}` 
        : process.env.AHD_URL,
    }
  },
  hooks: {
    'pages:extend'(pages) {
      const routePrefixes: Record<string, { id: string, en: string }> = {
        'index': { id: '', en: '' },
        'contact': { id: '/kontak-kami', en: '/contact-us' },
        'product': { id: '/produk', en: '/product' },
        'terms-and-conditions': { id: '/syarat-dan-ketentuan', en: '/terms-and-conditions' },
        'privacy-policy': { id: '/kebijakan-privasi', en: '/privacy-policy' }
      }

      const newPages: typeof pages = []
      
      for (const page of pages) {
        if (!page.name) continue
        
        const categorySegments = {
          'poultry': { id: 'unggas', en: 'poultry' },
          'large-animal': { id: 'hewan-besar', en: 'large-animal' },
          'pet-animal': { id: 'peliharaan', en: 'pet-animal' },
          'feedmill': { id: 'feedmill', en: 'feedmill' },
          'aquaculture': { id: 'akuakultur', en: 'aquaculture' }
        }

        if (page.name === 'product-category') {
          newPages.push({ ...page, name: 'product-category-root-id', path: '/id/produk' })
          newPages.push({ ...page, name: 'product-category-root-en', path: '/en/product' })
          
          for (const [segment, mapping] of Object.entries(categorySegments)) {
            newPages.push({
              ...page,
              name: `product-category-${segment}-id`,
              path: `/id/produk/${mapping.id}`,
              meta: { categorySegment: mapping.id }
            })
            newPages.push({
              ...page,
              name: `product-category-${segment}-en`,
              path: `/en/product/${mapping.en}`,
              meta: { categorySegment: mapping.en }
            })
          }
          continue
        }

        if (page.name === 'product-category-slug') {
          for (const [segment, mapping] of Object.entries(categorySegments)) {
            newPages.push({
              ...page,
              name: `product-category-${segment}-slug-id`,
              path: `/id/produk/${mapping.id}/:slug()`,
              meta: { categorySegment: mapping.id }
            })
            newPages.push({
              ...page,
              name: `product-category-${segment}-slug-en`,
              path: `/en/product/${mapping.en}/:slug()`,
              meta: { categorySegment: mapping.en }
            })
          }
          continue
        }

        // Find matching prefix base
        const baseKey = Object.keys(routePrefixes).find(k => page.name === k || page.name!.startsWith(`${k}-`))
        
        if (baseKey) {
          const mapping = routePrefixes[baseKey]
          
          let idPath = ''
          let enPath = ''
          
          if (baseKey === 'index') {
            idPath = '/id'
            enPath = '/en'
            // Keep the original root route to prevent Vue Router "No match" warning
            newPages.push(page)
          } else {
            // Replace the English base segment (e.g. '/product') with localized segment (e.g. '/produk')
            // page.path is like '/product/:category?'
            idPath = `/id${page.path.replace(new RegExp(`^/${baseKey}`), mapping!.id)}`
            enPath = `/en${page.path.replace(new RegExp(`^/${baseKey}`), mapping!.en)}`
          }

          // ID route
          newPages.push({
            ...page,
            name: `${page.name}-id`,
            path: idPath
          })
          // EN route
          newPages.push({
            ...page,
            name: `${page.name}-en`,
            path: enPath
          })
        }
      }
      
      // Replace all pages with localized pages
      pages.splice(0, pages.length, ...newPages)
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'lucide-vue-next',
      ]
    }
  },
})
