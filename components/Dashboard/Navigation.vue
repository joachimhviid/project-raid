<template>
  <aside class="fixed top-0 flex flex-col w-56 max-h-screen px-10 py-6 bg-white bg-opacity-90 items-center">
    <div class="flex flex-col mb-6 text-center">
      <div class="items-center w-32 h-32 mb-2 overflow-hidden rounded-full border-4 border-rblue">
        <img class="h-full w-full" src="assets/img/sylv.jpg" alt="" />
      </div>
      <span class="text-rblue font-rtext text-2xl tracking-wide font-bold">Sylvanas</span>
    </div>

    <div class="flex flex-col">
      <div class="pt-2 w-56 h-32 cursor-pointer hover:bg-rblue hover:bg-opacity-25">
        <img class="w-16 mt-4 mb-1" src="assets/icons/pve_pvp.png" alt="" style="margin-left: 5rem" />
        <span class="text-rblue font-rtext text-xl" style="margin-left: 4.4rem">PROGRESS</span>
      </div>
      <div class="pt-2 w-56 h-32 cursor-pointer hover:bg-rblue hover:bg-opacity-25">
        <img class="w-12 mt-4 mb-1" src="assets/icons/equipment.png" alt="" style="margin-left: 5.5rem" />
        <span class="text-rblue font-rtext text-xl" style="margin-left: 3.9rem">EQUIPMENT</span>
      </div>
      <div class="pt-2 w-56 h-32 cursor-pointer hover:bg-rblue hover:bg-opacity-25">
        <img class="w-12 mt-4 mb-1" src="assets/icons/collections.png" alt="" style="margin-left: 5.5rem" />
        <span class="text-rblue font-rtext text-xl" style="margin-left: 3.3rem">COLLECTIONS</span>
      </div>
      <div class="pt-2 w-56 h-32 cursor-pointer hover:bg-rblue hover:bg-opacity-25">
        <img class="w-12 mt-4 mb-1" src="assets/icons/guild.png" alt="" style="margin-left: 5.3rem" />
        <span class="text-rblue font-rtext text-xl" style="margin-left: 5.2rem">GUILD</span>
      </div>
      <div class="pt-2 w-56 h-32 cursor-pointer hover:bg-rblue hover:bg-opacity-25">
        <img class="w-12 mt-4 mb-1" src="assets/icons/settings.png" alt="" style="margin-left: 5.3rem" />
        <span class="text-rblue font-rtext text-xl" style="margin-left: 4.4rem">SETTINGS</span>
      </div>
    </div>

    <a
      class="
        hover:bg-rblue-hover
        cursor-pointer
        px-3
        py-2
        w-40
        m-4
        bg-rblue
        text-white text-center
        font-rtext
        text-xl
        font-medium
        tracking-wider
        rounded-full
      "
      >LOG OUT</a
    >
  </aside>
</template>
<script lang="ts">
export default defineComponent({
  name: 'Navigation'
})
</script>
