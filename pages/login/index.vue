<template>
  <div>
    <div class="font-bold text-red-600">login</div>
    <!--    <p class="my-6">Page visits {{ data }}</p>-->
    <NuxtLink to="/" class="p-4 bg-indigo-500 rounded-full">Go to landing page</NuxtLink>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  layout: 'authentication'
})
</script>
