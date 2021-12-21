<template>
  <main class="ml-56 mt-20 px-8 py-2">
    <div class="bg-white/10 w-full p-4 rounded-lg">
      <NuxtChild />
    </div>
  </main>
</template>
<script lang="ts">
export default defineComponent({
  layout: 'dashboard'
})
</script>
