<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app'

const props = defineProps<{
  data: any
  status: MaybeRefOrGetter<AsyncDataRequestStatus>
}>()
</script>

<template>
  <ExampleApiResponse v-if="props.status === 'success' && props.data" :response="props.data" />
  <div v-if="props.status === 'success' && !props.data">
    No data
  </div>
  <div v-if="props.status === 'error'">
    Error
  </div>
  <div v-if="props.status === 'pending'">
    Loading...
  </div>
</template>
