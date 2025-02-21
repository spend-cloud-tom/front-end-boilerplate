<script lang="ts" setup>
const props = defineProps(['data', 'loading', 'error'])
</script>

<template>
  <div class="py-8">
    <UContainer>
      <!-- Link to get back to all characters -->
      <div class="flex min-w-0 gap-x-4">
        <NuxtLink to="./">
          <UButton class="px-5 py-2" label="Back to all characters" color="gray" icon="i-heroicons-arrow-left-20-solid" variant="link" data-label="back-button" />
        </NuxtLink>
      </div>
      <!-- Display loading skeleton -->
      <template v-if="props.loading">
        <div class="py-8">
          <div class="flex justify-center">
            <USkeleton class="h-[350px] w-[650px]" />
          </div>
        </div>
      </template>
      <!-- Display Character details card by using Object.keys as label and value as details -->
      <template v-else>
        <div v-if="!props.error" class="py-8">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1">
                <!-- Display the image to the left side of the card -->
                <div class="rounded rounded-r-none bg-gray-300 dark:bg-gray-800">
                  <img class="w-full h-full object-cover" :src="props.data?.image" :alt="props.data?.name">
                </div>
              </div>
              <!-- Display character info in simple label:value format to the right side of the card -->
              <div class="md:flex-1 px-6 rounded rounded-l-none border border-gray-300 dark:border-gray-700 border-l-0">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mt-6 mb-2 first-letter:uppercase">
                  {{ props.data?.name }}
                </h2>
                <div v-for="key in Object.keys(props.data)" :key="key" class="mb-3">
                  <dl v-if="key !== 'image' && key !== 'name'" class="flex">
                    <dt class="font-bold text-gray-700 dark:text-gray-300 first-letter:uppercase mr-2">
                      {{ key }}:
                    </dt>
                    <!-- If the key is an Array the value is displayed as a sentence with each array item with comma(,) seperated -->
                    <dd v-if="Array.isArray(props.data[key])" class="text-gray-600 dark:text-gray-300 first-letter:uppercase">
                      {{ props.data[key].join(', ') }}
                    </dd>
                    <dd v-else class=" text-gray-600 dark:text-gray-300 first-letter:uppercase">
                      {{ props.data[key] }}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- Display error message when loading character list is failed -->
      <div v-if="props.error" class="error-notification bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-8 rounded flex justify-center" role="alert">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">{{ props.error }}</span>
      </div>
    </UContainer>
  </div>
</template>

<style>
</style>
