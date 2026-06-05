export type ProductCategoryContent = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type IndexPageContent = {
  hero: {
    title: string;
    description: string;
    button: string;
  };
  partOf: {
    text: string;
    company: string;
  };
  categories: {
    button: string;
    content: ProductCategoryContent[];
  }
}

export const en: IndexPageContent = {
  hero: {
    title: "Building the Future of Animal Health",
    description: "Through innovation and quality, we provide solutions that support sustainability and productivity across the livestock ecosystem.",
    button: "Explore Our Products"
  },
  partOf: {
    text: "Part of",
    company: "Kalbe Company"
  },
  categories: {
    button: "See more",
    content: [
      {
        id: 1,
        slug: "poultry",
        title: "Poultry",
        description: "Supporting the poultry industry with integrated solutions focused on increasing productivity, operational efficiency, and yield quality through nutritional innovation and modern management.",
        tags: ["Antibiotic", "Anti Protozoa", "Feed Additive"],
        image: "/images/home/poultry.jpg"
      },
      {
        id: 2,
        slug: "largeAnimal",
        title: "Large Animals",
        description: "Comprehensive solutions to support the performance and health of large animals through a modern approach based on farming efficiency.",
        tags: ["Mineral", "Digestive Support", "Growth Booster"],
        image: "/images/home/large-animal.jpg"
      },
      {
        id: 3,
        slug: "feedmill",
        title: "Feedmill",
        description: "Increasing feedmill production efficiency through formulation innovation, raw material quality, and production process control.",
        tags: ["Feed Efficiency", "Raw Material", "Processing"],
        image: "/images/home/feedmill.jpg"
      },
      {
        id: 4,
        slug: "pets",
        title: "Pets",
        description: "Providing health and nutritional solutions for pets to grow healthy, active, and have a better quality of life.",
        tags: ["Vitamin", "Supplement", "Pet Nutrition"],
        image: "/images/home/pet-animal.jpg"
      },
      {
        id: 5,
        slug: "aquaculture",
        title: "Aquaculture",
        description: "Supporting the aquaculture industry with nutritional formulations and health management that help maintain production quality sustainably.",
        tags: ["Water Stability", "Fish Health", "Growth Formula"],
        image: "/images/home/aquaculture.jpg"
      },
    ]
  }
}

export const id: IndexPageContent = {
  hero: {
    title: "Membangun Masa Depan Kesehatan Hewan",
    description: "Melalui inovasi dan kualitas, kami menghadirkan solusi yang mendukung keberlanjutan dan produktivitas di seluruh ekosistem peternakan.",
    button: "Lihat Produk Kami"
  },
  partOf: {
    text: "Bagian dari",
    company: "Kalbe Company"
  },
  categories: {
    button: "Lihat detail",
    content: [
      {
        id: 1,
        slug: "poultry",
        title: "Unggas",
        description: "Mendukung industri unggas dengan solusi terintegrasi yang berfokus pada peningkatan produktivitas, efisiensi operasional, serta kualitas hasil melalui inovasi nutrisi dan manajemen modern.",
        tags: ["Antibiotic", "Anti Protozoa", "Feed Additive"],
        image: "/images/home/poultry.jpg"
      },
      {
        id: 2,
        slug: "largeAnimal",
        title: "Hewan Besar",
        description: "Solusi komprehensif untuk mendukung performa dan kesehatan hewan besar melalui pendekatan modern berbasis efisiensi peternakan.",
        tags: ["Mineral", "Digestive Support", "Growth Booster"],
        image: "/images/home/large-animal.jpg"
      },
      {
        id: 3,
        slug: "feedmill",
        title: "Feedmill",
        description: "Meningkatkan efisiensi produksi feedmill melalui inovasi formulasi, kualitas bahan baku, dan pengendalian proses produksi.",
        tags: ["Feed Efficiency", "Raw Material", "Processing"],
        image: "/images/home/feedmill.jpg"
      },
      {
        id: 4,
        slug: "pets",
        title: "Peliharaan",
        description: "Menghadirkan solusi kesehatan dan nutrisi untuk hewan peliharaan agar tumbuh sehat, aktif, dan memiliki kualitas hidup yang lebih baik.",
        tags: ["Vitamin", "Supplement", "Pet Nutrition"],
        image: "/images/home/pet-animal.jpg"
      },
      {
        id: 5,
        slug: "aquaculture",
        title: "Akuakultur",
        description: "Mendukung industri akuakultur dengan formulasi nutrisi dan pengelolaan kesehatan yang membantu menjaga kualitas produksi secara berkelanjutan.",
        tags: ["Water Stability", "Fish Health", "Growth Formula"],
        image: "/images/home/aquaculture.jpg"
      },
    ]
  }
}

export const locales = { en, id }
