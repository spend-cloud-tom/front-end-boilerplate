import { pwa } from './app/config/pwa'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-api-party',
    '@nuxt/fonts',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
    },
  },

  apiParty: {
    endpoints: {
      pokemon: {
        url: 'https://pokeapi.co/api/v2',
      },
      rickAndMorty: {
        url: 'https://rickandmortyapi.com/api',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  icon: {
    provider: 'iconify',
  },

  pwa,
})
