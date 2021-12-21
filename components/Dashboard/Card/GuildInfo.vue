<template>
    <div class="bg-white dark:bg-rwhite bg-opacity-80 col-span-4 row-span-0 rounded-md p-4">
      <div class="flex">
        <div class="flex-col text-center space-y-2 mx-6 pr-9 pt-5">
          <span class="text-rblue dark:text-white font-rtext text-3xl font-bold">Guildo Buildo</span>
          <div class="items-center w-44 h-44 overflow-hidden rounded-full border-4 border-rblue dark:border-white self-center">
              <img class="h-full w-full object-cover" src="@/assets/img/guild_icon.jpeg" alt="" />
          </div>
          <span class="text-rblue dark:text-white opacity-80 font-rtext text-3xl tracking-wide">62 Members</span>
        </div>
      
        <div class="flex-col max-w-2xl space-y-4 mt-2 cursor-default">
          <span class="text-rblue dark:text-white font-rtext text-3xl tracking-wide underline decoration-rblue decoration-1">Description</span>
          <p class="text-rblue dark:text-white font-rtext text-xl tracking-wide font-thin max overflow-hidden">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'GuildInfo'
})
</script>
<style lang="scss" scoped></style>
