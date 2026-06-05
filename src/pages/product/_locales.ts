export type ProductPageContent = {
  error: {
    notFound: string;
  };
  header: {
    title: string;
    description: string;
  };
  search: {
    placeholder: string;
    category: string;
  };
  list: {
    productCount: string; // "produk" / "products"
  };
}

export const en: ProductPageContent = {
  error: {
    notFound: 'Product category not found'
  },
  header: {
    title: 'Products for \n Every Category',
    description: 'Explore our comprehensive range of high-quality animal health products designed to support sustainability and productivity across various farming ecosystems.'
  },
  search: {
    placeholder: 'Search products...',
    category: 'Category'
  },
  list: {
    productCount: 'products'
  }
}

export const id: ProductPageContent = {
  error: {
    notFound: 'Kategori produk tidak ditemukan'
  },
  header: {
    title: 'Produk untuk \n Setiap Kategori',
    description: 'Telusuri rangkaian komprehensif produk kesehatan hewan berkualitas tinggi kami yang dirancang untuk mendukung keberlanjutan dan produktivitas di berbagai ekosistem peternakan.'
  },
  search: {
    placeholder: 'Cari produk...',
    category: 'Kategori'
  },
  list: {
    productCount: 'produk'
  }
}

export const locales = { en, id }
