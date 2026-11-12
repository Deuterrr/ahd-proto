<script setup lang="ts">
import type { NuxtError } from '#app'
import { locales } from '~/locales/error'

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
