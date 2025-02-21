import type { PokemonAPIResponse, PokemonInfo, PokemonResultsView, PokemonViewModel, RCAPIResponse, RCCharacterResults, RCCharacterViewModel } from '~/models'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('characterStore', {
  state: () => ({
    // Rick and Morty characters list
    rickAndMortyCharacters: [] as RCCharacterResults[],
    rickAndMortyCharacterNextPageUrl: '' as string,
    isRickAndMortyCharactersLoading: true as boolean,
    rickAndMortyCharactersError: '' as string | null,

    // Pokemon characters list
    pokemonCharacters: [] as PokemonResultsView[],
    pokemonCharactersNextPageUrl: '' as string,
    isPokemonCharactersLoading: true as boolean,
    pokemonCharactersError: '' as string | null,

    // Character details (Dynamic value used by both Rick and Morty or Pokemon)
    characterDetails: null as RCCharacterViewModel | PokemonViewModel | null,
    characterDetailsLoading: true as boolean,
    characterDetailsError: '' as string | null,
  }),
  getters: {
    getRickAndMortyCharacters: state => (state.rickAndMortyCharacters),
    getRickAndMortyCharacterPages: state => (state.rickAndMortyCharacterNextPageUrl),
    getIsRickAndMortyCharactersLoading: state => (state.isRickAndMortyCharactersLoading),
    getRickAndMortyCharactersError: state => (state.rickAndMortyCharactersError),
    getPokemonCharacters: state => (state.pokemonCharacters),
    getPokemonCharactersNextPageUrl: state => (state.pokemonCharactersNextPageUrl),
    getIsPokemonCharactersLoading: state => (state.isPokemonCharactersLoading),
    getPokemonCharactersError: state => (state.pokemonCharactersError),
    getCharacterDetails: state => (state.characterDetails),
    getcharacterDetailsLoading: state => (state.characterDetailsLoading),
    getCharacterDetailsError: state => (state.characterDetailsError),
  },
  actions: {
    // Fetch a list of Rick and Morty characters
    async loadRickAndMortyCharacters() {
      try {
        this.isRickAndMortyCharactersLoading = true
        this.rickAndMortyCharactersError = null
        let url = ''
        if (this.rickAndMortyCharacterNextPageUrl === '') {
          url = 'character'
        }
        else {
          const nextUrl = this.rickAndMortyCharacterNextPageUrl
          const result = nextUrl.split('/api/')[1]
          url = result || ''
        }

        const rickAndMortyData = await $rickAndMorty<RCAPIResponse>(`${url}`)
        if (rickAndMortyData.results) {
          this.isRickAndMortyCharactersLoading = false
          // Filter out duplicate characters before adding new ones
          const newCharacters = rickAndMortyData.results.filter(
            (newChar: { id: number }) => !this.rickAndMortyCharacters.some((char: { id: number }) => char.id === newChar.id),
          )
          this.rickAndMortyCharacters = [
            ...this.rickAndMortyCharacters,
            ...newCharacters,
          ]
          this.rickAndMortyCharacters = this.rickAndMortyCharacters.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
          // Update the next page URL
          this.rickAndMortyCharacterNextPageUrl = rickAndMortyData.info?.next || ''
        }
        else {
          this.isRickAndMortyCharactersLoading = false
          this.rickAndMortyCharacters = []
          this.rickAndMortyCharacterNextPageUrl = ''
        }
      }
      catch (error) {
        console.error('Error fetching Rick and Morty characters:', error)
        this.rickAndMortyCharactersError = `Failed to load character: ${(error as Error).message}`
      }
    },

    // Fetch details for a single Rick and Morty character
    async loadRickAndMortyCharacterDetails(characterId: number) {
      try {
        this.characterDetailsLoading = true
        this.characterDetailsError = null
        const char = await $rickAndMorty<RCCharacterResults>(`character/${characterId}`)
        if (!char) {
          this.characterDetailsLoading = false
          return
        }
        // Map API response to a cleaner character details object
        this.characterDetails = {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          location: char.location.name,
          image: char.image,
          episode: char.episode.length,
        }
        this.characterDetailsLoading = false
      }
      catch (error) {
        this.characterDetailsLoading = false
        console.error('Error fetching Rick and Morty character details:', error)
        this.characterDetailsError = `Failed to load Rick and Morty character details: ${(error as Error).message}`
      }
    },

    // Fetch a list of Pokemon characters
    async loadPokemonCharacters() {
      try {
        this.isPokemonCharactersLoading = true
        this.pokemonCharactersError = null
        let url = ''
        if (this.pokemonCharactersNextPageUrl === '') {
          url = 'pokemon'
        }
        else {
          const nextUrl = this.pokemonCharactersNextPageUrl
          const result = nextUrl.split('/v2/')[1]
          url = result || ''
        }

        const pokemonData = await $pokemon<PokemonAPIResponse>(`${url}`)
        if (pokemonData.results) {
          this.isPokemonCharactersLoading = false
          // Parse data to create character details required to display as list
          const newCharacters = pokemonData.results
            .map((char: { url: string, name: string }) => {
              const charId = this.getPokemonCharacterIdFromResponseResultsUrl(char.url)
              return {
                ...char,
                id: charId,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${charId}.png`,
              }
            })
            .filter(
              (newChar: { name: string }) => !this.pokemonCharacters.some((char: { name: string }) => char.name === newChar.name),
            )
          this.pokemonCharacters = [
            ...this.pokemonCharacters,
            ...newCharacters,
          ]

          // Filer out duplicates, append new characters and sort by ID
          this.pokemonCharacters = this.pokemonCharacters.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
          // Update the next page URL
          this.pokemonCharactersNextPageUrl = pokemonData.next || ''
        }
        else {
          this.isPokemonCharactersLoading = false
          this.pokemonCharacters = []
          this.pokemonCharactersNextPageUrl = ''
        }
      }
      catch (error) {
        console.error('Error fetching Pokemon characters:', error)
        this.pokemonCharactersError = `Failed to load Pokemon characters: ${(error as Error).message}`
      }
    },

    // Fetch details for a single Pokemon character
    async loadPokemonDetails(characterId: number) {
      try {
        this.characterDetailsLoading = true
        this.characterDetailsError = null
        const char = await $pokemon<PokemonInfo>(`pokemon/${characterId}`)
        if (!char) {
          this.characterDetailsLoading = false
          return
        }
        // Map API response to a cleaner character details object
        this.characterDetails = {
          id: char.id,
          name: char.name,
          height: char.height,
          weight: char.weight,
          abilities: char.abilities?.map((ability: { ability: { name: string } }) => ability.ability.name),
          image: char.sprites?.other?.home.front_default,
          types: char.types.map((type: { type: { name: string } }) => type.type.name),
        }
        this.characterDetailsLoading = false
      }
      catch (error) {
        this.characterDetailsLoading = false
        console.error('Error fetching Pokemon character details:', error)
        this.characterDetailsError = `Failed to load Pokemon character details: ${(error as Error).message}`
      }
    },

    // Extract Pokémon character ID from API response -> results[] -> url
    getPokemonCharacterIdFromResponseResultsUrl(url: string): number {
      const match = url.match(/\/(\d+)\/?$/)
      return match ? Number.parseInt(match[1] as string, 10) : 10000
    },
  },
})
