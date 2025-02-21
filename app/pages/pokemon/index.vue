<script lang="ts" setup>
// Import character store
import { useCharacterStore } from '~/store'

const characterStore = useCharacterStore()
const pokemonCharacters = computed(() => characterStore.getPokemonCharacters)
const pokemonCharactersLoading = computed(() => characterStore.getIsPokemonCharactersLoading)
const pokemonCharactersError = computed(() => characterStore.getPokemonCharactersError)

onMounted(() => {
  if (!pokemonCharacters.value.length) {
    characterStore.loadPokemonCharacters()
  }
})

function loadMore() {
  characterStore.loadPokemonCharacters()
}
</script>

<template>
  <!-- Reads all the character list related to Pokemon and passes the information to Character component to display Character List -->
  <ApplicationCharacter
    :character-list="pokemonCharacters"
    :is-characters-loading="pokemonCharactersLoading"
    :error="pokemonCharactersError"
    title="Pokemon"
    @load-more="loadMore"
  />
</template>
