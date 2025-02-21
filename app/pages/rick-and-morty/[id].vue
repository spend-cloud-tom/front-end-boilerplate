<script lang="ts" setup>
// Import character store
import { useCharacterStore } from '~/store'

const characterStore = useCharacterStore()
const rickAndMortyCharacterDetails = computed(() => characterStore.getCharacterDetails)
const characterDetailsLoading = computed(() => characterStore.getcharacterDetailsLoading)
const characterDetailsError = computed(() => characterStore.getCharacterDetailsError)
const route = useRoute()

onMounted(() => {
  const { id } = route.params as { id: number }
  characterStore.loadRickAndMortyCharacterDetails(id)
})
</script>

<template>
  <!-- Dynamic page which reads the character ID from the parameters and display Character Details component -->
  <ApplicationCharacterDetails :data="rickAndMortyCharacterDetails || {}" :loading="characterDetailsLoading" :error="characterDetailsError" />
</template>
