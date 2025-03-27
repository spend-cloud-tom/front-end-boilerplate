<template>
  <UModal title="Wireframes" close-icon="mdi:close" :fullscreen="true">
    <div class="dark:bg-neutral-900 bg-neutral-100 p-4 rounded border border-neutral-500 shadow-lg group">
      <img src="/images/wireframes.svg" alt="Wireframes" class="group-hover:scale-110 transition-transform duration-500 rounded shadow">
    </div>
    <template #body>
      <img src="/images/wireframes.svg" alt="Wireframes" class="h-full w-full max-h-full max-w-full ">
    </template>
  </UModal>
</template>
