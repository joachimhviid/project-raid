<template>
  <div>
    <div class="font-bold text-red-600 mb-8">landing page</div>
    <NuxtLink to="/login">Login</NuxtLink>
    <!--    <NuxtLink to="/dashboard" class="p-4 bg-indigo-500 rounded-full">Go to dashboard</NuxtLink>-->
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
// const apiRes = await $fetch('http://localhost:5000/test')

export default defineComponent({
  // data() {
  //   return {
  //     response: apiRes
  //   }
  // }
})
</script>
