<template>
  <div class="fixed top-0 flex ml-64 items-center">
    <span class="text-rblue font-rtitle text-5xl font-extrabold tracking-widest p-4" style="margin-right: 900px"
      >RAIDHUB</span
    >
    <div class="container flex mx-4 mt-4 max-h-12 border-2 rounded-full py-2 px-4 border-rblue">
      <img class="w-7 h-7" src="assets/icons/search.png" alt="" />
      <input type="text" class="px-4 py-2 w-80 outline-none bg-transparent text-rblue" placeholder="Search" />
    </div>
    <img class="w-8 h-8 mt-4" src="assets/icons/darkmode.png" alt="" />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'Header'
})
</script>
