export type ProductDetailContent = {
  error: {
    notFound: string;
  };
  body: {
    description: string;
    tags: string;
    specification: string;
    ingredients: string;
    dose: string;
    shape: string;
    packaging: string;
    benefit: string;
  };
}

const en: ProductDetailContent = {
  error: {
    notFound: "Product not found",
  },
  body: {
    description: "Description",
    tags: "Tags",
    specification: "Specification",
    ingredients: "Ingredients",
    dose: "Dose",
    shape: "Shape",
    packaging: "Packaging",
    benefit: "Benefits",
  },
}

const id: ProductDetailContent = {
  error: {
    notFound: "Produk tidak ditemukan",
  },
  body: {
    description: "Deskripsi",
    tags: "Tag",
    specification: "Spesifikasi",
    ingredients: "Bahan",
    dose: "Dosis",
    shape: "Bentuk",
    packaging: "Kemasan",
    benefit: "Manfaat",
  },
}

export const locales = { en, id }