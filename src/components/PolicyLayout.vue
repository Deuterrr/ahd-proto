<script setup lang="ts">
import type { PolicyPageContent } from '../types/policy'

defineProps<{
  content: PolicyPageContent
}>()
</script>

<template>
  <div class="
    flex flex-col box-border gap-8 w-full
    md:gap-10
    max-w-6xl lg:mx-auto
    px-6 py-6 md:px-10 md:py-10 lg:px-16 lg:py-12 xl:px-24
  ">
    
    <header class="flex flex-col gap-3">
      <div class="flex flex-col gap-16 border-b border-b-black pb-4">
        <h1 class="
          text-4xl mb-2
          md:text-5xl md:mb-4
        ">{{ content.title }}</h1>
        <p class="text-sm">
          {{ content.lastUpdatedLabel }}
          <span class="text-navbar">{{ content.lastUpdatedDate }}</span>
        </p>
      </div>
    </header>

    <section class="flex flex-col gap-3">
        <p class="text-md">{{ content.intro }}</p>

        <div class="
          inline-flex flex-col gap-1
          md:gap-2
        ">
          <p
            v-for="value in content.contacts"
            :key="value.title"
            class="text-sm"
          >
            {{ value.title }}

            <template v-if="value.type === 'link'">
              <a
                :href="value.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-navbar underline"
              >
                {{ value.value }}
              </a>
            </template>

            <template v-else>
              <span class="text-navbar">
                {{ value.value }}
              </span>
            </template>
          </p>
      </div>
    </section>
    
    <section
      v-for="section in content.sections"
      :key="section.title"
      class="flex flex-col gap-3"
    >
      <h2>{{ section.title }}</h2>
      <template
        v-for="paragraph in section.paragraphs"
      >
        <h3 v-if="paragraph.title">{{ paragraph.title }}</h3>
        <p class="text-md">{{ paragraph.text }}</p>
      </template>
    </section>
  </div>
</template>
