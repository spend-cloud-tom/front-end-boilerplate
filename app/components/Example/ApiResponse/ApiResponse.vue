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
  <pre class="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 overflow-y-scroll overflow-x-hidden max-h-[30ch] text-sm border border-blue-600 dark:border-blue-100 rounded">
    {{ response }}
  </pre>
</template>
