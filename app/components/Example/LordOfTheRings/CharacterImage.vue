<script setup lang="ts">
import type { LordOfTheRingsCharacterCollectionItem } from '@nuxt/content'

const props = defineProps<{
  character: LordOfTheRingsCharacterCollectionItem
}>()
</script>

<template>
  <UModal title="Character Image" :props="props.character" :fullscreen="true">
    <template #default>
      <img
        :src="props.character.image"
        :alt="props.character.nameFirst"
        class="size-50 rounded-full border border-neutral-900 dark:border-neutral-200 shadow-xl overflow-hidden object-cover object-center"
      >
    </template>
    <template #body>
      <div class="justify-center items-center">
        <img
          :src="props.character.image"
          :alt="props.character.nameFirst"
        >
      </div>
    </template>
  </UModal>
</template>
