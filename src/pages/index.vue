<script setup lang="ts">
import { 
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'
import { useSiteNavigation } from '~/composables/useSiteNavigation'
import { locales } from './_index.locales'

const { currentLang, appRoutes } = useSiteNavigation()

const content = computed(() => locales[currentLang.value])

const activeIndex = ref(0);
const scrollContainer = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const rect = scrollContainer.value.getBoundingClientRect();
  const vh = window.innerHeight / 100;
  const itemHeight = 50 * vh;
  
  let newIndex = Math.floor(-rect.top / itemHeight);
  newIndex = Math.max(0, Math.min(content.value.categories.content.length - 1, newIndex));

  activeIndex.value = newIndex;
};

onMounted(() => {
  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener(
    "scroll",
    handleScroll
  );
});
</script>

<template>
  <div class="flex flex-col justify-between box-border">

    <section class="
      px-6 py-8 pt-28 flex flex-col h-screen max-h-screen justify-between
      md:px-14
      lg:px-20
      xl:px-24
    ">
      <header class="inline-flex flex-col h-full pb-10 justify-center gap-12 overflow-hidden">
  
        <!-- todo: hero image -->
        <div class="flex justify-center">
          <AppImage class="h-[8rem] lg:h-[12rem]" src="/images/home/hero-ahd.png" alt="Hero Temporary" loading="eager" />
        </div>
        
        <div class="flex items-center flex-col gap-6">
          <h1 class="
            w-4/5 text-center
            md:w-3/5
          ">
            {{ content.hero.title }}
          </h1>
          <p class="
            w-4/5 text-center text-md whitespace-pre-line
            sm:w-3/5
            lg:w-2/5
          ">
            {{ content.hero.description }}
          </p>
        </div>
        
        <div class="flex justify-center">
          <PrimaryButton :to="appRoutes.product.index">
            {{ content.hero.button }}
          </PrimaryButton>
        </div>
        
      </header>

    </section>
    
  </div>
</template>