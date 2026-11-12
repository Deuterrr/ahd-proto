// Localized footer navigation, contact information, and legal links.
export type FooterContent = {
  phone: {
    title: string
    value: string
  }
  alt: string
  policy: {
    privacy: string
    terms: string
  }
  section: {
    aboutCompany: string
    productAndService: string
    helpAndInformation: string
    socialMedia: string
  }
}

export const en: FooterContent = {
  phone: {
    title: 'Phone',
    value: '(021) 5086 7668',
  },
  alt: '© Copyright AHD 2026. All Right Reserved.',
  policy: {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  section: {
    aboutCompany: 'About Company',
    productAndService: 'Product and Service',
    helpAndInformation: 'Help and Information',
    socialMedia: 'Social Media',
  },
}

export const id: FooterContent = {
  phone: {
    title: 'Telp',
    value: '(021) 5086 7668',
  },
  alt: '© Hak Cipta AHD 2026. Semua Hak Dilindungi Undang-Undang.',
  policy: {
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat dan Ketentuan',
  },
  section: {
    aboutCompany: 'Tentang Perusahaan',
    productAndService: 'Produk dan layanan',
    helpAndInformation: 'Bantuan dan Informasi',
    socialMedia: 'Media Sosial',
  },
}

export const locales = { en, id }
