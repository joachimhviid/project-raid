<template>
  <div class="absolute w-10/12 h-5/6 ml-64 mt-20 rounded-lg">
    <div class="flex items-center m-6 space-x-4">
      <img class="w-14" src="@/assets/icons/guild.png" alt="" />
      <h2 class="text-rblue font-rtext text-4xl cursor-default">GUILD</h2>
    </div>

    <div class="bg-white bg-opacity-80 w-3/4 h-2/5 rounded-md p-4">
      <div class="flex-col float-left text-center space-y-2 h-full mx-6 pr-9">
        <span class="text-rblue font-rtext text-3xl tracking-wide font-bold">Guildo Buildo</span>
        <div class="items-center w-44 h-44 overflow-hidden rounded-full border-4 border-rblue self-center">
            <img class="h-full w-full" src="@/assets/img/guild_icon.jpeg" alt="" />
        </div>
         <span class="text-rblue opacity-80 font-rtext text-3xl tracking-wide">62 Members</span>
      </div>
      <div class="flex max-w-3xl">
      <div class="flex-col mx-4 max-w-5xl space-y-4 cursor-default">
        <span class="text-rblue font-rtext text-3xl tracking-wide underline decoration-rblue decoration-1">Description</span>
        <p class="text-rblue font-rtext text-xl tracking-wide font-thin overflow-hidden">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
      <div>
        <img src="@/assets/icons/pve_banner.png" alt="" class="absolute pb-4">
      </div>
      </div>
    </div>

    <div class="flex space-x-7 mt-2">
      <div class="bg-white bg-opacity-80 w-3/12 h-96 rounded-md my-5">
        <div class="flex-col py-6 px-10 space-y-7">
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/twitch_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">GuildoBuildoTTV</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/twitter_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">GuildoBuildoEU</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/youtube_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">GuildoBuildoEU</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/discord_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">discord.gg/gDerFt</span>
          </button>
        </div>
      </div>

      <div class="bg-white bg-opacity-80 w-2/4 h-96 rounded-md my-5 cursor-default">
        <div class="flex flex-col mx-6 my-3 max-w-5xl space-y-4 cursor-default">
          <span class="text-rblue font-rtext text-3xl tracking-wide underline decoration-rblue decoration-1">Members</span>

          <div class="flex flex-wrap gap-x-6 gap-y-5 overflow-auto h-72">
            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>
            
            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>

            <div class="flex bg-rblue w-80 h-24 rounded-md space-x-2 items-center">
              <div class="relative w-28 h-24 rounded-md overflow-hidden">
                <img src="@/assets/img/sylv.jpg" alt="" class="w-full h-full object-cover border-rblue border-4 rounded-lg">
                <span class="text-white font-rtext text-center text-sm absolute w-2/3 rounded-t-md bottom-0 bg-rblue">Level 60</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-rtext text-xl tracking-wide font-light">Sylvanas</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Undead Hunter</span>
                <span class="text-white font-rtext text-xl tracking-wide font-light">Kharazan EU</span>
              </div>
            </div>
            
          </div>
        </div>
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
