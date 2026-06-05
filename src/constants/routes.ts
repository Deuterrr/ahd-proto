export interface AppLink {
  label: string
  to: string
}

export const siteRoutes = {
  id: {
    home: '/id',
    product: {
      index: '/id/produk',
      poultry: '/id/produk/unggas',
      largeAnimal: '/id/produk/hewan-besar',
      pets: '/id/produk/peliharaan',
      feedmill: '/id/produk/feedmill',
      aquaculture: '/id/produk/akuakultur'
    },
    contact: '/id/kontak-kami',
    privacyPolicy: '/id/kebijakan-privasi',
    termsAndConditions: '/id/syarat-dan-ketentuan'
  },
  en: {
    home: '/en',
    product: {
      index: '/en/product',
      poultry: '/en/product/poultry',
      largeAnimal: '/en/product/large-animal',
      pets: '/en/product/pet-animal',
      feedmill: '/en/product/feedmill',
      aquaculture: '/en/product/aquaculture'
    },
    contact: '/en/contact-us',
    privacyPolicy: '/en/privacy-policy',
    termsAndConditions: '/en/terms-and-conditions'
  }
} as const


export const socialMediaLinks: AppLink[] = [
  { label: 'Instagram', to: '#' },
  { label: 'LinkedIn', to: '#' },
  { label: 'Tiktok', to: '#' },
  { label: 'X', to: '#' },
  { label: 'Youtube', to: '#' },
]

export const isInternalRoute = (to: string) => to.startsWith('/')
