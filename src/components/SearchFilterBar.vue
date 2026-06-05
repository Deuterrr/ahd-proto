<script setup lang="ts">
const props = withDefaults(defineProps<{
  closedLabel?: string
  openLabel?: string
  filterClosedWidth?: number
  searchMinWidth?: number
  controlGap?: number
}>(), {
  closedLabel: 'Filter',
  openLabel: 'Tutup',
  filterClosedWidth: 128,
  searchMinWidth: 330,
  controlGap: 12
})

const route = useRoute()
const isFilterPanelOpen = ref(false)
const controlBarRef = ref<HTMLElement | null>(null)
const filterOpenWidth = ref(284)
let filterWidthObserver: ResizeObserver | null = null

const filterWrapperStyle = computed(() => ({
  width: `${isFilterPanelOpen.value ? filterOpenWidth.value : props.filterClosedWidth}px`
}))

const toggleFilterPanel = () => {
  isFilterPanelOpen.value = !isFilterPanelOpen.value
}

watch(() => route.fullPath, () => {
  isFilterPanelOpen.value = false
})

onMounted(() => {
  if (!controlBarRef.value) {
    return
  }

  const updateFilterWidth = () => {
    if (!controlBarRef.value) {
      return
    }

    const controlBarWidth = Math.round(controlBarRef.value.clientWidth)
    let expandedWidth = controlBarWidth - props.searchMinWidth - props.controlGap
    
    // On mobile/smaller screens, the expanded width might be smaller than closed width.
    // In this case, we split the total width 50/50 between search and filter panels.
    if (expandedWidth < props.filterClosedWidth) {
      expandedWidth = (controlBarWidth - props.controlGap) / 2
    }

    filterOpenWidth.value = Math.max(
      props.filterClosedWidth,
      expandedWidth
    )
  }

  updateFilterWidth()

  filterWidthObserver = new ResizeObserver(updateFilterWidth)
  filterWidthObserver.observe(controlBarRef.value)
})

onBeforeUnmount(() => {
  filterWidthObserver?.disconnect()
})
</script>

<template>
  <section class="
    sticky top-[5rem] z-40 flex flex-col items-center
    md:top-[5.25rem]
    xl:top-[7.25rem]
  ">
    <div class="flex w-full justify-center">
      <div
        ref="controlBarRef"
        class="relative flex w-full max-w-2xl items-center justify-center gap-3"
      >
        <slot name="search" />

        <div class="relative shrink-0 rounded-[8rem] shadow-lg">
          <div
            class="
              relative transition-[width] duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            :style="filterWrapperStyle"
          >
            <div class="h-[44px] overflow-hidden rounded-[8rem]">
              <button
                type="button"
                @click="toggleFilterPanel"
                class="
                  flex h-[44px] w-full items-center justify-center rounded-[8rem]
                  bg-[--color-text-primary] px-6 py-2.5 text-[--color-bg-primary]
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <span>{{ !isFilterPanelOpen ? props.closedLabel : props.openLabel }}</span>
              </button>
            </div>

            <Transition
              enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              enter-from-class="translate-y-3 scale-x-95 opacity-0"
              enter-to-class="translate-y-0 scale-x-100 opacity-100"
              leave-active-class="transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              leave-from-class="translate-y-0 scale-x-100 opacity-100"
              leave-to-class="translate-y-3 scale-x-95 opacity-0"
            >
              <div
                v-if="isFilterPanelOpen"
                class="
                  absolute right-0 top-[calc(100%+0.75rem)] z-50 w-full origin-top-right
                  rounded-[1rem] bg-[--color-text-primary] shadow-[0_20px_60px_rgba(0,0,0,0.16)]
                "
              >
                <div class="flex flex-col gap-4 px-6 py-4">
                  <slot name="filter" />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
