<script setup lang="ts">
const route = useRoute()
const error = useError()

const showBreadcrumb = computed(() => {
  const isHome = /^\/(id|en)?\/?$/.test(route.path)
  return !isHome && !error.value
})

</script>

<template>
  <div class="min-h-screen bg-(--color-bg-primary)">
    <Navbar />
    <main class="flex flex-col">
      <div 
        v-if="showBreadcrumb"
        class="
          pt-[6rem]
          lg:pt-[6.75rem]
          xl:pt-[7.75rem]
        "
      >
        <Breadcrumb />
        <slot />
      </div>
      <slot v-else />
    </main>
    <Footer />
  </div>
</template>
