<script setup lang="ts">
import type { LordOfTheRingsCharacterCollectionItem } from '@nuxt/content'

const props = defineProps<{
  character: LordOfTheRingsCharacterCollectionItem
}>()

const backgroundSrc = computed(() => {
  return `url("${props.character.image}")`
})
</script>

<template>
  <div class="size-50 bg-cover bg-center rounded-full border border-blue-900 dark:border-blue-200 shadow-xl">
    <slot />
  </div>
</template>

<style scoped>
div {
  background-image: v-bind(backgroundSrc);
}
</style>
