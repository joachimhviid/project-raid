<template>
  <div
    class="
      bg-white
      dark:bg-rblue dark:bg-opacity-70
      rounded-lg
      p-4
      flex flex-col
      md:flex-row
      gap-4
      md:gap-8
      justify-between
    "
  >
    <div class="flex flex-col items-center text-center flex-shrink-0">
      <h2 class="text-rblue dark:text-white font-rtext text-3xl font-bold">Guildo Buildo</h2>
      <img
        class="items-center w-28 h-28 overflow-hidden rounded-full border-4 border-rblue dark:border-white"
        src="@/assets/img/guild_icon.jpeg"
        alt="Guild icon"
      />
      <span class="text-rblue dark:text-white opacity-80 font-rtext text-2xl">62 Members</span>
    </div>
    <div class="flex flex-col">
      <h2 class="text-rblue dark:text-white font-rtext text-2xl font-bold">Description</h2>
      <p class="text-rblue dark:text-white font-rtext">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'GuildInfo'
})
</script>
<style lang="scss" scoped></style>
