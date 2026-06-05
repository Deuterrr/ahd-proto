<script setup lang="ts">
import { computed } from 'vue'
import { socialMediaLinks } from '../../constants/routes'
import { useSiteNavigation } from '../../composables/useSiteNavigation'
import { locales } from './_locales'

const { currentLang } = useSiteNavigation()
const content = computed(() => locales[currentLang.value])

useSeoMeta({
  title: computed(() => currentLang.value === 'id' ? 'Kontak Kami | Kalbe Animal Health' : 'Contact Us | Kalbe Animal Health'),
  description: computed(() => currentLang.value === 'id' ? 'Hubungi kami untuk pertanyaan, informasi produk, dan kemitraan.' : 'Contact us for inquiries, product information, and partnerships.')
})
</script>

<template>
  <section class="flex flex-col">
    <div class="
      px-6 py-10 inline-flex flex-col gap-10 overflow-clip
      md:px-14
      lg:px-20
      xl:px-24
    ">
      <!-- header / hero -->
      <header class="flex flex-col items-center gap-6">

        <div class="
          grid grid-cols-1 w-full gap-6
          lg:grid-cols-8
        ">
          <div class="lg:col-span-4">
            <h1 class="w-full whitespace-pre-line">{{ content.header.title }}</h1>
          </div>
          <div class="lg:col-span-4"></div>
        </div>
        
        <div class="
          grid grid-cols-1 w-full gap-6
          lg:grid-cols-8
        ">
          <div class="lg:col-span-5"></div>
          <div class="lg:col-span-3">
            <p class="w-full text-md">
              {{ content.header.description }}
            </p>
          </div>
        </div>

      </header>

      <!-- body -->
      <section class="
        flex flex-col gap-6
      ">
        <div class="
          border-y border-y-black
          py-6 inline-flex flex-col gap-8
          md:flex-row md:gap-20 md:border-none
          lg:py-12 lg:gap-24
        ">
          <div class="flex-1 inline-flex flex-col gap-2.5">
            <p class="text-sm">{{ content.info.contact.label }}</p>
            <p class="text-navbar" v-html="content.info.contact.value"></p>
          </div>
          <div class="flex-1 inline-flex flex-col gap-2.5">
            <p class="text-sm">{{ content.info.timeAndPlace.label }}</p>
            <p class="text-navbar">{{ content.info.timeAndPlace.value }}</p>
          </div>
          <div class="flex-1 inline-flex flex-col gap-2.5">
            <p class="text-sm">{{ content.info.socialMedia.label }}</p>
            <div class="flex flex-col gap-1.5">
              <a
                v-for="link in socialMediaLinks"
                :key="link.label"
                :href="link.to"
                class="text-navbar"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
  
        <div class="
          flex flex-col
          md:grid md:grid-cols-5 md:gap-x-20
        ">
  
          <div class="col-span-2 py-6 inline-flex flex-col gap-9 overflow-hidden">
            <span class="type-h2">
              {{ content.form.title }}
            </span>
          </div>
  
          <div class="col-span-3 py-8 inline-flex flex-col gap-4 overflow-hidden">
  
            <div class="flex flex-col justify-center gap-4">
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.name }}</p>
                </div>
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.institution }}</p>
                </div>
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.email }}</p>
                </div>
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.phone }}</p>
                </div>
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.subject }}</p>
                </div>
                <div class="px-4 py-3 border-b border-zinc-800/50 inline-flex justify-between">
                  <p class="text-md text-[--color-text-secondary]">{{ content.form.fields.message }}</p>
                </div>
            </div>
            
            <div class="py-8 flex flex-col items-start gap-2.5">
              <SecondaryButton type="button">
                {{ content.form.submit }}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

    </div>

  </section>
</template>
