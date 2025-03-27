<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="rounded shadow shadow-neutral-100 dark:shadow-neutral-900 bg-neutral-200 dark:bg-neutral-800 border border-neutral-500 dark:border-neutral-600">
    <header class="border-b border-b-neutral-200 dark:border-b-neutral-600 p-4">
      <h2 class="text-center text-2xl font-bold tracking-wide text-neutral-700 dark:text-neutral-300">
        {{ props.title }}
      </h2>
    </header>
    <main class="p-4">
      <slot />
    </main>
  </section>
</template>
