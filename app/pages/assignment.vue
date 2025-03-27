<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <UContainer class="max-w-3xl py-20">
    <ContentRenderer v-if="page" :value="page" class="prose prose-xl prose-strong:text-secondary-950 dark:prose-strong:text-secondary-100 lg:prose-2xl prose-headings:font-serif prose-headings:text-secondary-900 prose-headings:prose-a:text-secondary-900 dark:prose-headings:text-secondary-100 dark:prose-headings:prose-a:text-secondary-100 !max-w-none dark:prose-invert prose-headings:prose-a:no-underline" />
  </UContainer>
</template>
