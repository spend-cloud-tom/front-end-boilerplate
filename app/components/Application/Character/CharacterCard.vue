<script lang="ts" setup>
const props = defineProps(['data', 'loading', 'view'])

const route = useRoute()
</script>

<template>
  <section class="character">
    <!-- Display loading skeleton by default in Grid View -->
    <template v-if="props.loading">
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div v-for="i in 20" :key="i">
          <USkeleton class="h-[282px]" />
        </div>
      </div>
    </template>
    <template v-else>
      <!-- Display Character Card in Grid View -->
      <template v-if="props.view === 'grid'">
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          <div v-for="char in props.data" :key="char.id" class="bg-gray-800 rounded overflow-hidden shadow-lg flex flex-col duration-500 hover:scale-105 hover:shadow-xl">
            <NuxtLink :to="`${route.path.replace(/\/$/, '')}/${char.id}`">
              <div class="relative">
                <img class="w-full" :src="char.image" :alt="char.name">
              </div>
              <div class="my-2 flex justify-center">
                <p class="font-semibold text-lg inline-block transition duration-500 ease-in-out mb-2 first-letter:uppercase">
                  {{ char.name }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
      <!-- Display Character Card in List View -->
      <template v-else>
        <ul role="list" class="divide-y divide-gray-600">
          <li v-for="char in props.data" :key="char.id" class="bg-gray-800 rounded my-1 overflow-hidden shadow-lg duration-500 hover:scale-105 hover:shadow-xl hover:divide-grey-0">
            <NuxtLink :to="`${route.path.replace(/\/$/, '')}/${char.id}`" class="group block">
              <div class="flex items-center py-1 px-4 sm:py-4 sm:px-0">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0 ml-10">
                    <img class="size-12 flex-none rounded-full" :src="char.image" :alt="char.name">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <p class="truncate text-sm font-semibold first-letter:uppercase">
                      {{ char.name }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
    </template>
  </section>
</template>

<style></style>
