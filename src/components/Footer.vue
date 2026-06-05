<script setup lang="ts">
import { socialMediaLinks } from '../constants/routes'
import { useSiteNavigation } from '../composables/useSiteNavigation'

type FooterContent = {
  phone: {
    title: string;
    value: string;
  };
  alt: string;
  policy: {
    privacy: string;
    terms: string;
  }
  section: {
    aboutCompany: string;
    productAndService: string;
    helpAndInformation: string;
    socialMedia: string;
  };
};

const en: FooterContent = {
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
};
const id: FooterContent = {
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
};

const locales = { en, id }

const {
  currentLang,
  appRoutes,
  footerCompanyLinks,
  footerInfoLinks,
  footerProductLinks
} = useSiteNavigation()

const content = computed(() => locales[currentLang.value])
</script>

<template>
  <div class="w-full inline-flex flex-col overflow-hidden">

    <!-- top -->
    <div class="w-ful pt-16 pb-6 flex flex-col gap-7">

      <div class="w-full inline-flex justify-start items-start px-8
        md:px-8 md:justify-start md:items-end
        lg:px-24"
      >
        <NuxtLink :to="appRoutes.home" class="block">
          <p class="type-h2">AHD</p>
        </NuxtLink>
      </div>
      
      <div class="flex flex-col gap-8 px-8
        md:grid md:grid-cols-7 md:gap-2 md:px-10
        lg:px-24 lg:gap-14"
      >

        <!-- left -->
        <div class="col-span-3 flex flex-col gap-14">

          <div class="w-full flex flex-col gap-4">
            <p class="flex flex-col gap-y-1">
              <span class="text-navbar tracking-(--tracking-tight-sm)">
                {{ content.phone.title }}:
              </span>
              <span class="text-sm">
                {{ content.phone.value }}
              </span>
            </p>
          </div>

        </div>

        <!-- right -->
        <div class="flex flex-col gap-8
          md:col-span-4 md:gap-2.5 md:grid md:grid-cols-4">

          <div class="inline-flex flex-col gap-2.5
            md:col-span-1"
          >
              <p class="w-fit text-sm">{{ content.section.aboutCompany }}</p>
              <template
                v-for="link in footerCompanyLinks"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="w-fit text-navbar"
                >
                  {{ link.label }}
                </NuxtLink>
              </template>
          </div>

          <div class="inline-flex flex-col gap-2.5
            md:col-span-1"
          >
              <p class="w-fit text-sm">{{ content.section.productAndService }}</p>
              <NuxtLink
                v-for="link in footerProductLinks"
                :key="link.label"
                :to="link.to"
                class="w-fit text-navbar"
              >
                {{ link.label }}
              </NuxtLink>
          </div>

          <div class="inline-flex flex-col gap-2.5
            md:col-span-1"
          >
              <p class="w-fit text-sm">{{ content.section.helpAndInformation }}</p>
              <template
                v-for="link in footerInfoLinks"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="w-fit text-navbar"
                >
                  {{ link.label }}
                </NuxtLink>
              </template>
          </div>

          <div class="inline-flex flex-col gap-2.5
            md:col-span-1 md:pl-4">
            <p class="w-fit text-sm">{{ content.section.socialMedia }}</p>
            <a
              v-for="link in socialMediaLinks"
              :key="link.label"
              :href="link.to"
              target="_blank"
              rel="noopener"
              class="w-fit text-navbar"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

      </div>

    </div>
    
    <!-- bottom -->
    <div class="w-full px-8 pt-7 pb-10 gap-4 flex flex-col
      md:grid md:grid-cols-7 md:gap-2 md:px-10 md:pb-12
      lg:px-24 lg:pb-14 lg:gap-14"
    >
      <p class="col-span-3 text-sm text-start">
        {{ content.alt }}
      </p>
      <div class="col-span-4 flex flex-wrap gap-2.5 
        md:justify-end"
      >
          <NuxtLink :to="appRoutes.privacyPolicy" class="text-sm font-light hover:underline whitespace-nowrap">
            {{ content.policy.privacy }}
          </NuxtLink>
          <p class="text-sm">/</p>
          <NuxtLink :to="appRoutes.termsAndConditions" class="text-sm font-light hover:underline whitespace-nowrap">
            {{ content.policy.terms }}
          </NuxtLink>
      </div>

    </div>
  </div>
</template>
