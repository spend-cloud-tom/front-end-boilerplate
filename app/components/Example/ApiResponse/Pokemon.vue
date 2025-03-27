<script setup lang="ts">
const { data, status } = usePokemonData('pokemon')
</script>

<template>
  <ExampleApiResponseContainer :status="status" :data="data" />
</template>
