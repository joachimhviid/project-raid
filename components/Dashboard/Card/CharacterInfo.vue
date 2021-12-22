<template>
  <div class="bg-white dark:bg-rblue dark:bg-opacity-70 bg-opacity-80 rounded-md p-4">
    <div class="flex-col float-left mx-2 pr-4">
      <div class="items-center w-36 h-36 mb-1 ml-10 overflow-hidden rounded-full border-4 border-rblue dark:border-white">
        <img class="h-full w-full object-cover" src="@/assets/img/sylv.jpg" alt="" />
      </div>
      <div class="w-56 text-center flex flex-col cursor-default">
        <span class="text-rblue dark:text-white font-rtext text-4xl tracking-wide font-bold">Sylvanas</span>
        <span class="text-rblue dark:text-white font-rtext text-xl tracking-wide">Kharazan EU</span>
        <span class="text-rblue dark:text-white font-rtext text-2xl tracking-wide font-semibold">Undead Hunter</span>
        <span class="text-rblue dark:text-white opacity-70 font-rtext text-xl tracking-wide">Odense, Denmark</span>
      </div>
    </div>
    <div class="flex-col mx-14 cursor-default">
      <span class="text-rblue dark:text-white font-rtext text-3xl tracking-wide font-bold">Bio</span>
      <p class="text-rblue dark:text-white font-rtext text-xl tracking-wide font-thin overflow-hidden">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing and web pages.</p>
    </div>

    <div class="flex bg-rblue dark:bg-white mt-4 mx-14 h-20 rounded-md px-8 py-1 justify-between">
      <div class="flex flex-col text-center">
        <span class="text-white dark:text-rblue font-rtext text-4xl font-bold tracking-widest">241</span>
        <span class="text-white dark:text-rblue font-rtext text-xl tracking-widest">Item Level</span>
      </div>
      <div class="flex flex-col text-center">
        <span class="text-white dark:text-rblue font-rtext text-4xl font-bold tracking-widest">60</span>
        <span class="text-white dark:text-rblue font-rtext text-xl tracking-widest">Level</span>
      </div>
      <div class="flex flex-col text-center">
        <span class="text-white dark:text-rblue font-rtext text-4xl font-bold tracking-widest">1975.5</span>
        <span class="text-white dark:text-rblue font-rtext text-xl tracking-widest">Mythic+ Score</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'CharacterInfo'
})
</script>
<style lang="scss" scoped></style>
