<template>
  <nav class="fixed top-0 flex flex-col w-56 h-screen px-10 py-6 bg-white bg-opacity-90 items-center">
    <div class="flex flex-col mb-6 text-center">
      <div class="items-center w-32 h-32 mb-2 overflow-hidden rounded-full border-4 border-rblue">
        <img class="h-full w-full" src="@/assets/img/sylv.jpg" alt="" />
      </div>
      <span class="text-rblue font-rtext text-2xl tracking-wide font-bold">Sylvanas</span>
    </div>

    <div class="flex flex-col flex-grow space-y-4">
      <!--TODO: Make nav item component-->
      <NuxtLink
        to="/dashboard/progress"
        class="flex flex-col items-center text-rblue font-rtext text-xl text-center hover:bg-rblue hover:bg-opacity-25"
      >
        <img class="w-16" src="@/assets/icons/pve_pvp.png" alt="" />
        PROGRESS
      </NuxtLink>
      <NuxtLink
        to="/dashboard/equipment"
        class="flex flex-col items-center text-rblue font-rtext text-xl text-center hover:bg-rblue hover:bg-opacity-25"
      >
        <img class="w-12" src="@/assets/icons/equipment.png" alt="" />
        EQUIPMENT
      </NuxtLink>
      <NuxtLink
        to="/dashboard/collection"
        class="flex flex-col items-center text-rblue font-rtext text-xl text-center hover:bg-rblue hover:bg-opacity-25"
      >
        <img class="w-12" src="@/assets/icons/collections.png" alt="" />
        COLLECTION
      </NuxtLink>
      <NuxtLink
        to="/dashboard/guild"
        class="flex flex-col items-center text-rblue font-rtext text-xl text-center hover:bg-rblue hover:bg-opacity-25"
      >
        <img class="w-12" src="@/assets/icons/guild.png" alt="" />
        GUILD
      </NuxtLink>
      <NuxtLink
        to="/dashboard/settings"
        class="flex flex-col items-center text-rblue font-rtext text-xl text-center hover:bg-rblue hover:bg-opacity-25"
      >
        <img class="w-12" src="@/assets/icons/settings.png" alt="" />
        SETTINGS
      </NuxtLink>
    </div>

    <NuxtLink
      to="/login"
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
      >LOG OUT
    </NuxtLink>
  </nav>
</template>
<script lang="ts">
export default defineComponent({
  name: 'Navigation'
})
</script>
