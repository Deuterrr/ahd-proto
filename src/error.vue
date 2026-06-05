<script setup lang="ts">
import type { NuxtError } from '#app'

type errorContent = {
  notFound: {
    title: string;
    message: string;
  };
  internalErr: {
    title: string;
    message: string;
  }
  button: string;
}

const id: errorContent = {
  notFound: {
    title: "Halaman Tidak Ditemukan",
    message: "Maaf, halaman yang Anda coba akses tidak dapat ditemukan.",
  },
  internalErr: {
    title: "Terjadi Kesalahan",
    message: "string",
  },
  button: "Kembali ke Beranda"
}

const en: errorContent = {
  notFound: {
    title: "Page Not Found",
    message: "Sorry, the page you are trying to access cannot be found.",
  },
  internalErr: {
    title: "Something Went Wrong",
    message: "Sorry, there was an error in our system.",
  },
  button: "Back to Home"
}

const locales = { id, en }

const { currentLang } = useSiteNavigation()
const content = computed(() => locales[currentLang.value])

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })

const route = useRoute()
watch(() => route.path, () => {
  clearError()
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 class="text-9xl font-bold text-black">
        {{ error?.statusCode || 404 }}
      </h1>
      <h2 class="mt-6 text-3xl font-semibold text-black">
        {{ error?.statusCode === 404 ? content.notFound.title : content.internalErr.title }}
      </h2>
      <p class="mt-4 text-lg text-[--color-text-secondary] max-w-lg mb-10">
        {{ 
          error?.statusCode === 404 
            ? content.notFound.message
            : error?.message || content.internalErr.message 
        }}
      </p>
      
      <div @click="handleError">
        <PrimaryButton>
          {{ content.button }}
        </PrimaryButton>
      </div>
    </div>
  </NuxtLayout>
</template>
