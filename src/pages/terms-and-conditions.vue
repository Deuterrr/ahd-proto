<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRuntimeConfig } from '#app'
import { useSiteNavigation } from '~/composables/useSiteNavigation'
import { locales } from './_terms-and-conditions.locales'
import PolicyLayout from '~/components/PolicyLayout.vue'

const { currentLang } = useSiteNavigation()
const route = useRoute()
const config = useRuntimeConfig()
const ahdUrl = config.public.ahdUrl || 'https://AHD.co.id'

const content = computed(() => locales[currentLang.value])

const canonicalUrl = `${ahdUrl}${route.path}`

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": ahdUrl,
        "name": "AHD",
        "publisher": {
          "@type": "Organization",
          "name": "AHD",
          "url": ahdUrl
        }
      })
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": ahdUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": content.value.title,
            "item": canonicalUrl
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: `${content.value.seo.title}`,
  description: content.value.seo.desc,
  robots: content.value.seo.robots
})
</script>

<template>
  <PolicyLayout :content="content" />
</template>
