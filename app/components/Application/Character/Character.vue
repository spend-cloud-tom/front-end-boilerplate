<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps(['title', 'characterList', 'isCharactersLoading', 'error'])
const emit = defineEmits(['loadMore'])
const selectedView = ref<'grid' | 'list'>('grid')

function changeView(view: 'grid' | 'list') {
  selectedView.value = view
}

function loadMore() {
  emit('loadMore')
}
</script>

<template>
  <!-- This component reads the information passed by a specific api in generic format and does the basic mapping of reading
   the page title and checks if the data is loaded properly or of there is an error
   -->
  <div class="py-8">
    <UContainer>
      <div class="flex items-center border-b mb-8 ">
        <header class="py-2 text-xl">
          <h1>Welcome to {{ props.title }}</h1>
        </header>
        <!-- Grid/List options -->
        <div v-if="!props.error" class="ml-auto">
          <div class="bg-gray-500 text-sm text-gray-500 leading-none border-2 border-gray-600 rounded-full inline-flex mb-2">
            <UButton label="Grid" data-label="Grid" icon="i-fluent:grid-28-filled" variant="solid" class="inline-flex items-center transition-colors duration-300 ease-in rounded-l-full px-4 py-2" :color="selectedView === 'grid' ? 'blue' : 'gray'" @click="changeView('grid')" />
            <UButton label="List" data-label="List" icon="i-fluent:text-bullet-list-ltr-16-filled" variant="solid" class="inline-flex items-center transition-colors duration-300 ease-in rounded-r-full px-4 py-2" :color="selectedView === 'list' ? 'blue' : 'gray'" @click="changeView('list')" />
          </div>
        </div>
      </div>
      <template v-if="!props.error">
        <!-- Display Character cards by passing characterList and loading properties to CharacterCard component -->
        <ApplicationCharacterCard :data="props.characterList" :loading="props.characterList.length === 0" :view="selectedView" />
        <div class="flex justify-center my-10">
          <UButton class="px-20 py-2 rounded-full" color="green" :loading="props.isCharactersLoading" label="Load More" data-label="load-more" variant="solid" @click="loadMore" />
        </div>
      </template>
      <!-- Display error message when loading character list is failed -->
      <div v-if="props.error" class="error-notification bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-center" role="alert">
        <strong class="font-bold">Error! </strong>
        <span class="block sm:inline">{{ props.error }}</span>
      </div>
    </UContainer>
  </div>
</template>

<style>

</style>
