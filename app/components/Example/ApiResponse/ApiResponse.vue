<script setup lang="ts">
const props = defineProps<{
  response: any
}>()

const response = computed(() => {
  let stringifiedResponse

  try {
    stringifiedResponse = JSON.stringify(props.response, null, 2)
  }
  catch {
    stringifiedResponse = 'Error parsing response'
  }

  return stringifiedResponse
})
</script>

<template>
  <pre class="bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 overflow-y-scroll overflow-x-hidden max-h-[30ch] text-sm rounded">
    {{ response }}
  </pre>
</template>
