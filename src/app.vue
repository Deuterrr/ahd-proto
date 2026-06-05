<script setup lang="ts">
import { useAppSeo } from '~/composables/useAppSeo'

useAppSeo()

console.log(`🐕 %cConsole%c

Thanks for visiting.

This website was built by humans,
maintained by developers,
and occasionally negotiated with CSS.

`,
'background:#01dc83;color:#000;padding:0px 6px;font-weight:bold;border-radius:3px;',
'background:#1f2937;color:#fff;padding:0px 6px;',
)

</script>

<template>
  <div class="relative min-h-screen bg-zinc-950 overflow-clip">
    <div class="relative w-full min-h-screen bg-[var(--color-bg-primary)] shadow-2xl">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>