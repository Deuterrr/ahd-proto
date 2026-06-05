import type { Product } from '../types/product'

export const productCatalog: Product[] = [
  {
    id: 'broiler-boost-max',
    slug: {
      id: 'broiler-boost-max',
      en: 'broiler-boost-max' 
    },
    title: {
      id: 'Broiler Boost Max',
      en: 'Broiler Boost Max' 
    },
    images: ['/images/product-temp.jpg', '/images/product-temp.jpg', '/images/product-temp.jpg', '/images/product-temp.jpg'],
    overview: {
      id: 'Suplemen peningkat pertumbuhan premium untuk ayam broiler.',
      en: 'Premium growth enhancer for broiler chickens.' 
    },
    tags: [{
      id: 'Pertumbuhan',
      en: 'Growth'
    },
    {
      id: 'Unggas',
      en: 'Poultry'
    },
    {
      id: 'Organik',
      en: 'Organic' }
    ],
    category: {
      id: 'Unggas',
      en: 'Poultry' 
    },
    description: {
      id: 'Formula khusus yang dirancang untuk mempercepat peningkatan berat badan yang sehat pada unggas sekaligus menjaga kesehatan usus.',
      en: 'A specialized formula designed to accelerate healthy weight gain in poultry while maintaining gut health.' 
    },
    specification: {
      ingredients: [{
        id: 'Jagung',
        en: 'Corn'
      },
      {
        id: 'Tepung Kedelai',
        en: 'Soybean Meal'
      },
      {
        id: 'Premiks Vitamin',
        en: 'Vitamin Premix'
      },
      {
        id: 'Probiotik',
        en: 'Probiotics' }
      ],
      shape: {
        id: 'Remah-remah halus',
        en: 'Fine Crumble' 
      },
      dose: {
        id: '50g per 10 ekor burung setiap hari',
        en: '50g per 10 birds daily' 
      },
      packaging: {
        id: 'Tas Anyaman 25kg',
        en: '25kg Woven Bag'
       }
    },
    benefit: [{
      id: 'Tingkat pertumbuhan yang lebih cepat',
      en: 'Faster growth rates'
    },
    {
      id: 'Peningkatan kualitas bulu',
      en: 'Improved feather quality'
    },
    {
      id: 'Peningkatan kekebalan tubuh',
      en: 'Enhanced immunity' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'bovine-calcium-plus',
    slug: {
      id: 'bovine-calcium-plus',
      en: 'bovine-calcium-plus' 
    },
    title: {
      id: 'Bovine Calcium Plus',
      en: 'Bovine Calcium Plus' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Suplemen mineral penting untuk sapi perah.',
      en: 'Essential mineral supplement for dairy cows.' 
    },
    tags: [{
      id: 'Produk susu',
      en: 'Dairy'
    },
    {
      id: 'Ternak',
      en: 'Cattle'
    },
    {
      id: 'Mineral',
      en: 'Minerals' }
    ],
    category: {
      id: 'Hewan Besar',
      en: 'Large Animal' 
    },
    description: {
      id: 'Suplemen kalsium berdaya serap tinggi untuk mencegah demam susu dan mendukung kepadatan tulang pada ternak besar.',
      en: 'High-absorption calcium supplement to prevent milk fever and support bone density in large livestock.' 
    },
    specification: {
      ingredients: [{
        id: 'Kalsium Karbonat',
        en: 'Calcium Carbonate'
      },
      {
        id: 'Magnesium Oksida',
        en: 'Magnesium Oxide'
      },
      {
        id: 'Vitamin D3',
        en: 'Vitamin D3' }
      ],
      shape: {
        id: 'Bolus/Tablet besar',
        en: 'Large Bolus/Tablet' 
      },
      dose: {
        id: '1 tablet per sapi dewasa setelah melahirkan',
        en: '1 tablet per adult cow post-calving' 
      },
      packaging: {
        id: 'Kotak berisi 10 Bolus',
        en: 'Box of 10 Boluses'
       }
    },
    benefit: [{
      id: 'Mencegah demam susu',
      en: 'Prevents milk fever'
    },
    {
      id: 'Mendukung produksi ASI',
      en: 'Supports lactation'
    },
    {
      id: 'Memperkuat struktur tulang',
      en: 'Strengthens bone structure' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'universal-silage-mix',
    slug: {
      id: 'universal-silage-mix',
      en: 'universal-silage-mix' 
    },
    title: {
      id: 'Universal Silage Mix',
      en: 'Universal Silage Mix' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Fermented high-energy forage for general livestock.',
      en: 'Fermented high-energy forage for general livestock.' 
    },
    tags: [{
      id: 'Forage',
      en: 'Forage'
    },
    {
      id: 'Fermented',
      en: 'Fermented'
    },
    {
      id: 'Energy',
      en: 'Energy' }
    ],
    category: {
      id: 'Pakan Ternak',
      en: 'Feedmill' 
    },
    description: {
      id: 'A balanced mix of fermented grasses and maize to provide year-round nutrition.',
      en: 'A balanced mix of fermented grasses and maize to provide year-round nutrition.' 
    },
    specification: {
      ingredients: [{
        id: 'Napier Grass',
        en: 'Napier Grass'
      },
      {
        id: 'Maize Silage',
        en: 'Maize Silage'
      },
      {
        id: 'Molasses',
        en: 'Molasses' }
      ],
      shape: {
        id: 'Shredded Fiber',
        en: 'Shredded Fiber' 
      },
      dose: {
        id: 'Ad libitum (Available at all times)',
        en: 'Ad libitum (Available at all times)' 
      },
      packaging: {
        id: '50kg Vacuum Sealed Bag',
        en: '50kg Vacuum Sealed Bag'
       }
    },
    benefit: [{
      id: 'Highly digestible',
      en: 'Highly digestible'
    },
    {
      id: 'Long shelf life',
      en: 'Long shelf life'
    },
    {
      id: 'Cost-effective feed source',
      en: 'Cost-effective feed source' 
    }],
    date: new Date(2026, 5, 3),
  },

  {
    id: 'omega-feline-kibble',
    slug: {
      id: 'omega-feline-kibble',
      en: 'omega-feline-kibble' 
    },
    title: {
      id: 'Omega Feline Kibble',
      en: 'Omega Feline Kibble' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Grain-free dry food for adult cats.',
      en: 'Grain-free dry food for adult cats.' 
    },
    tags: [{
      id: 'Cat Food',
      en: 'Cat Food'
    },
    {
      id: 'Grain-Free',
      en: 'Grain-Free'
    },
    {
      id: 'Omega-3',
      en: 'Omega-3' }
    ],
    category: {
      id: 'Peliharaan',
      en: 'Pet' 
    },
    description: {
      id: 'A gourmet blend of salmon and sweet potato designed for indoor cats with sensitive stomachs.',
      en: 'A gourmet blend of salmon and sweet potato designed for indoor cats with sensitive stomachs.' 
    },
    specification: {
      ingredients: [{
        id: 'Salmon',
        en: 'Salmon'
      },
      {
        id: 'Sweet Potato',
        en: 'Sweet Potato'
      },
      {
        id: 'Fish Oil',
        en: 'Fish Oil'
      },
      {
        id: 'Taurine',
        en: 'Taurine' }
      ],
      shape: {
        id: 'Small Heart-shaped Kibble',
        en: 'Small Heart-shaped Kibble' 
      },
      dose: {
        id: '60g - 80g per day based on weight',
        en: '60g - 80g per day based on weight' 
      },
      packaging: {
        id: '2kg Resealable Pouch',
        en: '2kg Resealable Pouch'
       }
    },
    benefit: [{
      id: 'Shiny coat',
      en: 'Shiny coat'
    },
    {
      id: 'Reduced hairballs',
      en: 'Reduced hairballs'
    },
    {
      id: 'Supports heart health',
      en: 'Supports heart health' 
    }],
    date: new Date(2026, 5, 3),
  },

  {
    id: 'aqua-grow-shrimp-pellets',
    slug: {
      id: 'aqua-grow-shrimp-pellets',
      en: 'aqua-grow-shrimp-pellets' 
    },
    title: {
      id: 'AquaGrow Shrimp Pellets',
      en: 'AquaGrow Shrimp Pellets' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Sinking pellets for Vannamei shrimp.',
      en: 'Sinking pellets for Vannamei shrimp.' 
    },
    tags: [{
      id: 'Shrimp',
      en: 'Shrimp'
    },
    {
      id: 'Aquaculture',
      en: 'Aquaculture'
    },
    {
      id: 'High Protein',
      en: 'High Protein' }
    ],
    category: {
      id: 'Akuakultur',
      en: 'Aquaculture' 
    },
    description: {
      id: 'Water-stable pellets that provide complete nutrition for intensive shrimp farming environments.',
      en: 'Water-stable pellets that provide complete nutrition for intensive shrimp farming environments.' 
    },
    specification: {
      ingredients: [{
        id: 'Fish Meal',
        en: 'Fish Meal'
      },
      {
        id: 'Squid Meal',
        en: 'Squid Meal'
      },
      {
        id: 'Wheat Flour',
        en: 'Wheat Flour'
      },
      {
        id: 'Cholesterol',
        en: 'Cholesterol' }
      ],
      shape: {
        id: '0.5mm Sinking Pellets',
        en: '0.5mm Sinking Pellets' 
      },
      dose: {
        id: '3% of biomass daily, split into 4 feedings',
        en: '3% of biomass daily, split into 4 feedings' 
      },
      packaging: {
        id: '20kg Waterproof Bag',
        en: '20kg Waterproof Bag'
       }
    },
    benefit: [{
      id: 'Low water pollution',
      en: 'Low water pollution'
    },
    {
      id: 'High survival rate',
      en: 'High survival rate'
    },
    {
      id: 'Excellent attractant properties',
      en: 'Excellent attractant properties' 
    }],
    date: new Date(2026, 5, 4),
  },

  {
    id: 'egg-o-matic-incubator',
    slug: {
      id: 'egg-o-matic-incubator',
      en: 'egg-o-matic-incubator' 
    },
    title: {
      id: 'Egg-O-Matic Pro Incubator',
      en: 'Egg-O-Matic Pro Incubator' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Fully automated digital incubator for various poultry eggs.',
      en: 'Fully automated digital incubator for various poultry eggs.' 
    },
    tags: [{
      id: 'Equipment',
      en: 'Equipment'
    },
    {
      id: 'Hatchery',
      en: 'Hatchery'
    },
    {
      id: 'Digital',
      en: 'Digital' }
    ],
    category: {
      id: 'Unggas',
      en: 'Poultry' 
    },
    description: {
      id: 'A high-precision incubator featuring automatic egg turning and humidity control to maximize hatch rates.',
      en: 'A high-precision incubator featuring automatic egg turning and humidity control to maximize hatch rates.' 
    },
    specification: {
      ingredients: [{
        id: 'N/A (Hardware)',
        en: 'N/A (Hardware)' }
      ],
      shape: {
        id: 'Rectangular Plastic Housing',
        en: 'Rectangular Plastic Housing' 
      },
      dose: {
        id: 'Capacity: 48 Chicken Eggs',
        en: 'Capacity: 48 Chicken Eggs' 
      },
      packaging: {
        id: 'Padded Shipping Crate',
        en: 'Padded Shipping Crate'
       }
    },
    benefit: [{
      id: '95% hatch rate success',
      en: '95% hatch rate success'
    },
    {
      id: 'Low energy consumption',
      en: 'Low energy consumption'
    },
    {
      id: 'Easy to clean',
      en: 'Easy to clean' 
    }],
    date: new Date(2026, 6, 2),
  },

  {
    id: 'equine-joint-support-gel',
    slug: {
      id: 'equine-joint-support-gel',
      en: 'equine-joint-support-gel' 
    },
    title: {
      id: 'Equine Joint Support Gel',
      en: 'Equine Joint Support Gel' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Topical analgesic for performance horses.',
      en: 'Topical analgesic for performance horses.' 
    },
    tags: [{
      id: 'Horse',
      en: 'Horse'
    },
    {
      id: 'Recovery',
      en: 'Recovery'
    },
    {
      id: 'Topical',
      en: 'Topical' }
    ],
    category: {
      id: 'Hewan Besar',
      en: 'Large Animal' 
    },
    description: {
      id: 'Fast-acting cooling gel to reduce inflammation in tendons and joints after heavy training or racing.',
      en: 'Fast-acting cooling gel to reduce inflammation in tendons and joints after heavy training or racing.' 
    },
    specification: {
      ingredients: [{
        id: 'Menthol',
        en: 'Menthol'
      },
      {
        id: 'Camphor',
        en: 'Camphor'
      },
      {
        id: 'Arnica Extract',
        en: 'Arnica Extract'
      },
      {
        id: 'Aloe Vera',
        en: 'Aloe Vera' }
      ],
      shape: {
        id: 'Viscous Blue Gel',
        en: 'Viscous Blue Gel' 
      },
      dose: {
        id: 'Apply liberally to affected area twice daily',
        en: 'Apply liberally to affected area twice daily' 
      },
      packaging: {
        id: '500ml Pump Bottle',
        en: '500ml Pump Bottle'
       }
    },
    benefit: [{
      id: 'Rapid cooling effect',
      en: 'Rapid cooling effect'
    },
    {
      id: 'Reduces swelling',
      en: 'Reduces swelling'
    },
    {
      id: 'Non-greasy formula',
      en: 'Non-greasy formula' 
    }],
    date: new Date(2026, 6, 2),
  },

  {
    id: 'pro-growth-mineral-block',
    slug: {
      id: 'pro-growth-mineral-block',
      en: 'pro-growth-mineral-block' 
    },
    title: {
      id: 'Pro-Growth Mineral Lick Block',
      en: 'Pro-Growth Mineral Lick Block' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Weather-resistant salt lick for pasture-fed livestock.',
      en: 'Weather-resistant salt lick for pasture-fed livestock.' 
    },
    tags: [{
      id: 'Minerals',
      en: 'Minerals'
    },
    {
      id: 'Pasture',
      en: 'Pasture'
    },
    {
      id: 'Self-Feeding',
      en: 'Self-Feeding' }
    ],
    category: {
      id: 'Pakan Ternak',
      en: 'Feedmill' 
    },
    description: {
      id: 'A compressed mineral block designed to provide essential trace elements that are often missing in natural grass.',
      en: 'A compressed mineral block designed to provide essential trace elements that are often missing in natural grass.' 
    },
    specification: {
      ingredients: [{
        id: 'Sodium Chloride',
        en: 'Sodium Chloride'
      },
      {
        id: 'Zinc',
        en: 'Zinc'
      },
      {
        id: 'Copper',
        en: 'Copper'
      },
      {
        id: 'Selenium',
        en: 'Selenium'
      },
      {
        id: 'Iodine',
        en: 'Iodine' }
      ],
      shape: {
        id: 'Solid 5kg Square Block',
        en: 'Solid 5kg Square Block' 
      },
      dose: {
        id: 'Place 1 block per 10-15 head of cattle',
        en: 'Place 1 block per 10-15 head of cattle' 
      },
      packaging: {
        id: 'Shrink-wrapped',
        en: 'Shrink-wrapped'
       }
    },
    benefit: [{
      id: 'Prevents mineral deficiency',
      en: 'Prevents mineral deficiency'
    },
    {
      id: 'Weatherproof for outdoor use',
      en: 'Weatherproof for outdoor use'
    },
    {
      id: 'Improves reproductive health',
      en: 'Improves reproductive health' 
    }],
    date: new Date(2026, 6, 2),
  },

  {
    id: 'canine-multi-vit-chews',
    slug: {
      id: 'canine-multi-vit-chews',
      en: 'canine-multi-vit-chews' 
    },
    title: {
      id: 'Canine Multi-Vit Soft Chews',
      en: 'Canine Multi-Vit Soft Chews' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Daily multivitamin for senior dogs.',
      en: 'Daily multivitamin for senior dogs.' 
    },
    tags: [{
      id: 'Dog',
      en: 'Dog'
    },
    {
      id: 'Senior Care',
      en: 'Senior Care'
    },
    {
      id: 'Vitamins',
      en: 'Vitamins' }
    ],
    category: {
      id: 'Peliharaan',
      en: 'Pet' 
    },
    description: {
      id: 'Comprehensive nutritional support tailored for the needs of aging dogs, including hip and joint protection.',
      en: 'Comprehensive nutritional support tailored for the needs of aging dogs, including hip and joint protection.' 
    },
    specification: {
      ingredients: [{
        id: 'Glucosamine',
        en: 'Glucosamine'
      },
      {
        id: 'Chondroitin',
        en: 'Chondroitin'
      },
      {
        id: 'Vitamin B12',
        en: 'Vitamin B12'
      },
      {
        id: 'CoQ10',
        en: 'CoQ10' }
      ],
      shape: {
        id: 'Heart-shaped Soft Chew',
        en: 'Heart-shaped Soft Chew' 
      },
      dose: {
        id: '1 chew per 10kg of body weight',
        en: '1 chew per 10kg of body weight' 
      },
      packaging: {
        id: '90-count Plastic Jar',
        en: '90-count Plastic Jar'
       }
    },
    benefit: [{
      id: 'Increases mobility',
      en: 'Increases mobility'
    },
    {
      id: 'Boosts cognitive function',
      en: 'Boosts cognitive function'
    },
    {
      id: 'Supports heart health',
      en: 'Supports heart health' 
    }],
    date: new Date(2026, 6, 4),
  },

  {
    id: 'algae-stop-water-clarifier',
    slug: {
      id: 'algae-stop-water-clarifier',
      en: 'algae-stop-water-clarifier' 
    },
    title: {
      id: 'Algae-Stop Water Clarifier',
      en: 'Algae-Stop Water Clarifier' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Eco-friendly algae control for commercial fish ponds.',
      en: 'Eco-friendly algae control for commercial fish ponds.' 
    },
    tags: [{
      id: 'Water Treatment',
      en: 'Water Treatment'
    },
    {
      id: 'Pond Care',
      en: 'Pond Care'
    },
    {
      id: 'Eco-Friendly',
      en: 'Eco-Friendly' }
    ],
    category: {
      id: 'Akuakultur',
      en: 'Aquaculture' 
    },
    description: {
      id: 'A biological water treatment that breaks down excess nutrients to prevent algae blooms without harming fish.',
      en: 'A biological water treatment that breaks down excess nutrients to prevent algae blooms without harming fish.' 
    },
    specification: {
      ingredients: [{
        id: 'Beneficial Bacteria Strains',
        en: 'Beneficial Bacteria Strains'
      },
      {
        id: 'Barley Straw Extract',
        en: 'Barley Straw Extract' }
      ],
      shape: {
        id: 'Liquid Concentrate',
        en: 'Liquid Concentrate' 
      },
      dose: {
        id: '100ml per 1,000 liters of water',
        en: '100ml per 1,000 liters of water' 
      },
      packaging: {
        id: '5L Gallon Jug',
        en: '5L Gallon Jug'
       }
    },
    benefit: [{
      id: 'Clears murky water',
      en: 'Clears murky water'
    },
    {
      id: 'Safe for all aquatic life',
      en: 'Safe for all aquatic life'
    },
    {
      id: 'Balances pond ecosystem',
      en: 'Balances pond ecosystem' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'Unggas-vax-newcastle',
    slug: {
      id: 'Unggas-vax-newcastle',
      en: 'poultry-vax-newcastle' 
    },
    title: {
      id: 'AvianGuard ND Vaccine',
      en: 'AvianGuard ND Vaccine' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Live virus vaccine against Newcastle Disease.',
      en: 'Live virus vaccine against Newcastle Disease.' 
    },
    tags: [{
      id: 'Vaccine',
      en: 'Vaccine'
    },
    {
      id: 'Health',
      en: 'Health'
    },
    {
      id: 'Biosecurity',
      en: 'Biosecurity' }
    ],
    category: {
      id: 'Unggas',
      en: 'Poultry' 
    },
    description: {
      id: 'A freeze-dried live vaccine for the active immunization of healthy chickens against Newcastle Disease.',
      en: 'A freeze-dried live vaccine for the active immunization of healthy chickens against Newcastle Disease.' 
    },
    specification: {
      ingredients: [{
        id: 'LaSota Strain Virus',
        en: 'LaSota Strain Virus'
      },
      {
        id: 'Stabilizer',
        en: 'Stabilizer'
      },
      {
        id: 'Gentamicin',
        en: 'Gentamicin' }
      ],
      shape: {
        id: 'Freeze-dried Pellet (Vial)',
        en: 'Freeze-dried Pellet (Vial)' 
      },
      dose: {
        id: '1 dose per bird via drinking water or eye drop',
        en: '1 dose per bird via drinking water or eye drop' 
      },
      packaging: {
        id: 'Vial of 1,000 doses',
        en: 'Vial of 1,000 doses'
       }
    },
    benefit: [{
      id: 'High titer protection',
      en: 'High titer protection'
    },
    {
      id: 'Easy mass administration',
      en: 'Easy mass administration'
    },
    {
      id: 'Proven safety record',
      en: 'Proven safety record' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'equine-automatic-waterer',
    slug: {
      id: 'equine-automatic-waterer',
      en: 'equine-automatic-waterer' 
    },
    title: {
      id: 'HydraFlow Livestock Fountain',
      en: 'HydraFlow Livestock Fountain' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Heavy-duty automatic watering system for horses and cattle.',
      en: 'Heavy-duty automatic watering system for horses and cattle.' 
    },
    tags: [{
      id: 'Infrastructure',
      en: 'Infrastructure'
    },
    {
      id: 'Stable',
      en: 'Stable'
    },
    {
      id: 'Hydration',
      en: 'Hydration' }
    ],
    category: {
      id: 'Hewan Besar',
      en: 'Large Animal' 
    },
    description: {
      id: 'Stainless steel, wall-mounted automatic waterer with a float valve to ensure livestock always have fresh water.',
      en: 'Stainless steel, wall-mounted automatic waterer with a float valve to ensure livestock always have fresh water.' 
    },
    specification: {
      ingredients: [{
        id: '304 Stainless Steel',
        en: '304 Stainless Steel'
      },
      {
        id: 'Brass Valve',
        en: 'Brass Valve' }
      ],
      shape: {
        id: 'Wall-mounted Basin',
        en: 'Wall-mounted Basin' 
      },
      dose: {
        id: 'N/A (Connect to 1/2 inch pipe)',
        en: 'N/A (Connect to 1/2 inch pipe)' 
      },
      packaging: {
        id: 'Heavy-duty Cardboard Box',
        en: 'Heavy-duty Cardboard Box'
       }
    },
    benefit: [{
      id: 'Prevents water stagnation',
      en: 'Prevents water stagnation'
    },
    {
      id: 'Durable and rust-proof',
      en: 'Durable and rust-proof'
    },
    {
      id: 'Reduces labor time',
      en: 'Reduces labor time' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'soy-protein-concentrate',
    slug: {
      id: 'soy-protein-concentrate',
      en: 'soy-protein-concentrate' 
    },
    title: {
      id: 'MaxiLean Soy Concentrate',
      en: 'MaxiLean Soy Concentrate' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'High-protein additive for custom feed mixing.',
      en: 'High-protein additive for custom feed mixing.' 
    },
    tags: [{
      id: 'Protein',
      en: 'Protein'
    },
    {
      id: 'Raw Material',
      en: 'Raw Material'
    },
    {
      id: 'Growth',
      en: 'Growth' }
    ],
    category: {
      id: 'Pakan Ternak',
      en: 'Feedmill' 
    },
    description: {
      id: 'A refined soy protein source with high digestibility, perfect for weaning animals or high-performance livestock.',
      en: 'A refined soy protein source with high digestibility, perfect for weaning animals or high-performance livestock.' 
    },
    specification: {
      ingredients: [{
        id: 'Dehulled Soybean Meal',
        en: 'Dehulled Soybean Meal'
      },
      {
        id: 'Enzymes',
        en: 'Enzymes' }
      ],
      shape: {
        id: 'Fine Yellow Powder',
        en: 'Fine Yellow Powder' 
      },
      dose: {
        id: 'Mix 10-15% into total feed ration',
        en: 'Mix 10-15% into total feed ration' 
      },
      packaging: {
        id: '50kg Industrial Bag',
        en: '50kg Industrial Bag'
       }
    },
    benefit: [{
      id: 'Optimizes muscle development',
      en: 'Optimizes muscle development'
    },
    {
      id: 'High amino acid profile',
      en: 'High amino acid profile'
    },
    {
      id: 'Low anti-nutritional factors',
      en: 'Low anti-nutritional factors' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'reptile-uvb-habitat-kit',
    slug: {
      id: 'reptile-uvb-habitat-kit',
      en: 'reptile-uvb-habitat-kit' 
    },
    title: {
      id: 'Desert-Sun UVB Lighting Kit',
      en: 'Desert-Sun UVB Lighting Kit' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Essential UV lighting for desert-dwelling reptiles.',
      en: 'Essential UV lighting for desert-dwelling reptiles.' 
    },
    tags: [{
      id: 'Reptiles',
      en: 'Reptiles'
    },
    {
      id: 'Lighting',
      en: 'Lighting'
    },
    {
      id: 'Habitat',
      en: 'Habitat' }
    ],
    category: {
      id: 'Peliharaan',
      en: 'Pet' 
    },
    description: {
      id: 'A full-spectrum UVB T5 bulb and fixture designed to mimic natural sunlight for Bearded Dragons and other desert pets.',
      en: 'A full-spectrum UVB T5 bulb and fixture designed to mimic natural sunlight for Bearded Dragons and other desert pets.' 
    },
    specification: {
      ingredients: [{
        id: 'Glass',
        en: 'Glass'
      },
      {
        id: 'Aluminum',
        en: 'Aluminum'
      },
      {
        id: 'UV Coating',
        en: 'UV Coating' }
      ],
      shape: {
        id: '24-inch Linear Tube',
        en: '24-inch Linear Tube' 
      },
      dose: {
        id: 'Illuminate 10-12 hours per day',
        en: 'Illuminate 10-12 hours per day' 
      },
      packaging: {
        id: 'Reinforced Tube Box',
        en: 'Reinforced Tube Box'
       }
    },
    benefit: [{
      id: 'Prevents Metabolic Bone Disease',
      en: 'Prevents Metabolic Bone Disease'
    },
    {
      id: 'Enhances natural colors',
      en: 'Enhances natural colors'
    },
    {
      id: 'Stimulates appetite',
      en: 'Stimulates appetite' 
    }],
    date: new Date(2026, 2, 1),
  },

  {
    id: 'koi-color-enhance-pellets',
    slug: {
      id: 'koi-color-enhance-pellets',
      en: 'koi-color-enhance-pellets' 
    },
    title: {
      id: 'Nishiki Premium Color Food',
      en: 'Nishiki Premium Color Food' 
    },
    images: ['/images/product-temp.jpg'],
    overview: {
      id: 'Specialized floating food to enhance Koi pigmentation.',
      en: 'Specialized floating food to enhance Koi pigmentation.' 
    },
    tags: [{
      id: 'Koi',
      en: 'Koi'
    },
    {
      id: 'Ornamental',
      en: 'Ornamental'
    },
    {
      id: 'Color',
      en: 'Color' }
    ],
    category: {
      id: 'Akuakultur',
      en: 'Aquaculture' 
    },
    description: {
      id: 'Premium floating pellets enriched with Spirulina and Astaxanthin to bring out deep reds and whites in ornamental fish.',
      en: 'Premium floating pellets enriched with Spirulina and Astaxanthin to bring out deep reds and whites in ornamental fish.' 
    },
    specification: {
      ingredients: [{
        id: 'White Fish Meal',
        en: 'White Fish Meal'
      },
      {
        id: 'Spirulina',
        en: 'Spirulina'
      },
      {
        id: 'Wheat Germ',
        en: 'Wheat Germ'
      },
      {
        id: 'Astaxanthin',
        en: 'Astaxanthin' }
      ],
      shape: {
        id: 'Medium Floating Pellets (4mm)',
        en: 'Medium Floating Pellets (4mm)' 
      },
      dose: {
        id: 'Feed 2-3 times daily as much as fish eat in 5 mins',
        en: 'Feed 2-3 times daily as much as fish eat in 5 mins' 
      },
      packaging: {
        id: '5kg Resealable Bucket',
        en: '5kg Resealable Bucket'
       }
    },
    benefit: [{
      id: 'Vibrant skin pigmentation',
      en: 'Vibrant skin pigmentation'
    },
    {
      id: 'Does not cloud water',
      en: 'Does not cloud water'
    },
    {
      id: 'Supports liver function',
      en: 'Supports liver function' 
    }],
    date: new Date(2026, 2, 1),
  }

];