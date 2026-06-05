<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSiteNavigation } from '../composables/useSiteNavigation'
import { useRoute, useRouter } from '#app'
import { Menu, X, Globe, ChevronRight } from 'lucide-vue-next'

const navbarMenuOpen = ref(false)

const { appRoutes, navbarLinks, currentLang } = useSiteNavigation()
const route = useRoute()
const router = useRouter()

const toggleMenu = () => {
  navbarMenuOpen.value = !navbarMenuOpen.value
}

const isMenuOpen = ref(false)
const isLangPanelOpen = ref(false)

const switchLanguage = (lang: 'id' | 'en') => {
  if (currentLang.value === lang) {
    isLangPanelOpen.value = false
    return
  }

  if (route.name) {
    const routeName = String(route.name)

    const baseName = routeName
      .replace(/-id$/, '')
      .replace(/-en$/, '')

    const newName = `${baseName}-${lang}`

    router.push({
      name: newName,
      params: route.params,
      query: route.query,
    })
  } else {
    router.push(`/${lang}/`)
  }

  isMenuOpen.value = false
  isLangPanelOpen.value = false
}

const toggleLangPanel = () => {
  isLangPanelOpen.value = !isLangPanelOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (!target.closest('[data-lang-switcher]')) {
    isLangPanelOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav
    aria-label="Main navigation"
    class="
      pt-3.5 pb-3.5 fixed top-0 left-0 w-full flex justify-between z-50
      bg-[--color-bg-primary]/10
      backdrop-blur-md
      border-b border-[--color-bg-primary]/20
      shadow-sm
    "
  >
    <!-- Left: Logo / Brand -->
    <div class="
      flex items-center z-[60]
      pl-6
      md:pl-14
      lg:pl-20
      xl:pl-24
    ">
      <NuxtLink :to="appRoutes.home" class="w-[8rem] xl:w-[12rem] block" @click="navbarMenuOpen = false">
        <p class="type-h2">AHD</p>
      </NuxtLink>
    </div>

    <!-- Right: Navigation -->
    <div class="
      flex justify-between items-center z-[60] gap-4
      pr-6
      md:pr-14
      lg:pr-20
      xl:pr-24
    ">
      
      <!-- Desktop Menu -->
      <ul class="
        hidden
        md:flex md:gap-1
        xl:gap-3
      ">
        <li v-for="(link, i) in navbarLinks" :key="link.to"
          class="
            group
            flex items-center gap-2 px-2 py-1 rounded-md
            bg-(--color-bg-primary) duration-200
            hover:bg-[--color-accent-primary]
          "
        >
          <div
            class="
              bg-black rounded-full
              opacity-0 scale-100 w-0 h-0
              group-hover:opacity-100 group-hover:scale-[1.4] group-hover:w-1 group-hover:h-1
              transition-all duration-200
            "
          ></div>

          <NuxtLink
            :to="link.to"
            class="text-navbar"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop & Mobile Lang Switcher -->
      <div class="relative">
        <button
          type="button"
          @click.stop="toggleLangPanel"
          :aria-expanded="isLangPanelOpen"
          aria-haspopup="menu"
          aria-label="Select language"
          class="flex items-center gap-2 px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
        >
          <Globe class="w-5 h-5 text-gray-600" :stroke-width="2.5" />
          
          <span class="text-sm font-medium uppercase">
            {{ currentLang }}
          </span>

          <ChevronRight class="w-5 h-5 text-gray-600" :stroke-width="2.5" />
        </button>
  
        <!-- Panel -->
        <Transition
          enter-active-class="transition duration-150 ease-out"
          leave-active-class="transition duration-100 ease-in"
          enter-from-class="opacity-0 scale-95 translate-y-1"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-1"
        >
          <div
            v-if="isLangPanelOpen"
            @click.stop
            class="
              absolute top-full right-0 mt-2 w-36 p-2 z-50
              flex flex-col gap-1
              rounded-lg border border-gray-200 bg-white shadow-lg
            "
          >
            <button
              @click="switchLanguage('id')"
              class="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors"
              :class="
                currentLang === 'id'
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              "
            >
              <span>Indonesia</span>
              <span>ID</span>
            </button>
  
            <button
              @click="switchLanguage('en')"
              class="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors"
              :class="
                currentLang === 'en'
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              "
            >
              <span>English</span>
              <span>EN</span>
            </button>
          </div>
        </Transition>
      </div>
      
      <!-- Mobile Hamburger -->
      <button
        class="
          flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors
          md:hidden
        "
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <Transition
          mode="out-in"
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-150 ease-in"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <Menu
            v-if="!navbarMenuOpen"
            key="menu"
            class="w-6 h-6 text-black"
          />

          <X
            v-else
            key="close"
            class="w-6 h-6 text-black"
          />
        </Transition>
      </button>

    </div>

    <!-- Mobile Menu Panel -->
    <div 
      class="fixed top-0 right-0 w-full sm:w-80 h-screen shadow-2xl transition-transform duration-500 ease-in-out z-50 flex flex-col pt-24 px-8 md:hidden"
      :class="navbarMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      style="background-color: var(--color-bg-primary, #ffffff);"
    >
      <ul class="flex flex-col gap-6">
        <li 
          v-for="(link, i) in navbarLinks" 
          :key="link.to"
          class="transition-all duration-500 transform"
          :class="navbarMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          :style="{ transitionDelay: navbarMenuOpen ? `${300 + (i * 100)}ms` : '0ms' }"
        >
          <NuxtLink
            :to="link.to"
            class="text-2xl font-medium text-black block w-full hover:text-[--color-accent-primary] transition-colors duration-200"
            @click="navbarMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Optional backdrop for mobile menu -->
    <div 
      v-if="navbarMenuOpen"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
      @click="navbarMenuOpen = false"
    ></div>
  </nav>
</template>
