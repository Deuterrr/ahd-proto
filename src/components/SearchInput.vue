<script setup lang="ts">
import { ref, watch } from 'vue'
import { Search } from 'lucide-vue-next'
import { useSiteNavigation } from '../composables/useSiteNavigation'

const props = withDefaults(defineProps<{
  placeholder?: string
}>(), {
  placeholder: 'Cari...'
})

const route = useRoute()
const router = useRouter()
const { currentLang } = useSiteNavigation()

const searchQuery = ref(route.query.q as string || '')

watch(() => route.query.q, (newQ) => {
  searchQuery.value = newQ as string || ''
})

const handleSubmit = () => {
  const query: Record<string, any> = { ...route.query }
  
  if (searchQuery.value) {
    query.q = searchQuery.value
  } else {
    delete query.q
  }
  
  if (query.page) {
    delete query.page // Reset pagination on new search
  }
  
  router.push({
    path: route.path,
    query
  })
}

const handleCancel = () => {
  searchQuery.value = ''
  handleSubmit()
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    :action="route.path"
    method="GET"
    class="
      flex h-[44px] min-w-0 flex-1 items-center rounded-[8rem]
      border-[1.2px] border-gray-400 bg-[--color-bg-primary] px-6 py-2.5 shadow-lg
      transition-[flex-basis,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
      focus-within:border-black focus-within:ring-1 focus-within:ring-black
    "
  >
    <input
      type="search"
      name="q"
      v-model="searchQuery"
      :placeholder="props.placeholder"
      class="search-input w-full bg-transparent outline-none text-[--color-text-primary] placeholder-gray-500"
    />
    
    <button 
      v-if="route.query.q || searchQuery" 
      type="button" 
      @click="handleCancel"
      class="ml-2 text-sm font-medium text-gray-500 hover:text-black transition-colors shrink-0"
    >
      {{ currentLang === 'id' ? 'Batal' : 'Cancel' }}
    </button>
    <button 
      v-else
      type="submit" 
      class="ml-2 flex items-center justify-center text-gray-500 hover:text-black transition-colors shrink-0" 
      aria-label="Search"
    >
      <Search class="w-5 h-5" />
    </button>
  </form>
</template>

<style scoped>
/* Hide the default browser 'x' clear button for search inputs */
.search-input::-webkit-search-decoration,
.search-input::-webkit-search-cancel-button,
.search-input::-webkit-search-results-button,
.search-input::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
</style>
