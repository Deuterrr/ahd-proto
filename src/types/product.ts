import type { LocalizedText } from "./localized"

export interface Product {
  id: string

  slug: LocalizedText
  title: LocalizedText
  
  images: string[]

  overview: LocalizedText
  tags: LocalizedText[]

  category: LocalizedText

  description: LocalizedText

  specification: {
    ingredients: LocalizedText[]
    shape: LocalizedText
    dose: LocalizedText
    packaging: LocalizedText
  }

  benefit: LocalizedText[]

  date: Date
}
