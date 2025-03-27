<script setup lang="ts">
const { data, status } = useRickAndMortyData('character')
</script>

<template>
  <ExampleApiResponseContainer :status="status" :data="data" />
</template>
