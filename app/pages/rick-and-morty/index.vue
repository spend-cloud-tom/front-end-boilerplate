<script lang="ts" setup>
// Import character store
import { useCharacterStore } from '~/store'

const characterStore = useCharacterStore()
const rickAndMortyCharacters = computed(() => characterStore.getRickAndMortyCharacters)
const rickAndMortyCharactersLoading = computed(() => characterStore.getIsRickAndMortyCharactersLoading)
const rickAndMortyCharactersError = computed(() => characterStore.getRickAndMortyCharactersError)

onMounted(() => {
  if (!rickAndMortyCharacters.value.length) {
    characterStore.loadRickAndMortyCharacters()
  }
})

function loadMore() {
  characterStore.loadRickAndMortyCharacters()
}
</script>

<template>
  <!-- Reads all the character list related to Rick and Morty and passes the information to Character component to display Character List -->
  <ApplicationCharacter
    :character-list="rickAndMortyCharacters"
    :is-characters-loading="rickAndMortyCharactersLoading"
    :error="rickAndMortyCharactersError"
    title="Rick and Morty"
    @load-more="loadMore"
  />
</template>
