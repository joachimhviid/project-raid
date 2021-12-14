<template>
  <header class="fixed top-0 inset-x-0 pl-56 w-full">
    <div class="flex justify-between items-center h-24 p-8">
      <span class="text-rblue font-rtitle text-5xl font-extrabold tracking-widest cursor-pointer">RAIDHUB</span>
      <div class="flex items-center">
        <!--TODO: Make search component. Also what are we searching for? Maybe this should be repurposed as a new character selector-->
        <div class="flex items-center mx-4 border-2 rounded-full h-12 py-2 px-4 border-rblue">
          <img class="w-6 h-6" src="~/assets/icons/search.png" alt="" />
          <input type="text" class="px-4 py-2 w-80 medium:w-40 outline-none bg-transparent text-rblue" placeholder="Search" />
        </div>
        <img class="w-8 h-8 cursor-pointer" src="~/assets/icons/darkmode.png" alt="" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default defineComponent({
  name: 'Header'
})
</script>
