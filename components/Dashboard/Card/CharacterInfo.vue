<template>
  <div class="absolute w-10/12 h-5/6 ml-64 mt-20 rounded-lg">
    <div class="flex items-center m-6 space-x-4">
      <img class="w-16" src="@/assets/icons/pve_pvp.png" alt="" />
      <h2 class="text-rblue font-rtext text-4xl cursor-default">PROGRESS</h2>
    </div>

    <div class="bg-white bg-opacity-80 w-3/5 h-2/5 rounded-md p-4">
      <div class="flex-col float-left h-full mx-2 pr-4">
        <div class="items-center w-36 h-36 mb-1 ml-10 overflow-hidden rounded-full border-4 border-rblue">
          <img class="h-full w-full" src="@/assets/img/sylv.jpg" alt="" />
        </div>
        <div class="w-56 text-center flex flex-col cursor-default">
          <span class="text-rblue font-rtext text-4xl tracking-wide font-bold">Sylvanas</span>
          <span class="text-rblue font-rtext text-xl tracking-wide">Kharazan EU</span>
          <span class="text-rblue font-rtext text-2xl tracking-wide font-semibold">Undead Hunter</span>
          <span class="text-rblue opacity-70 font-rtext text-xl tracking-wide">Odense, Denmark</span>
        </div>
      </div>
      <div class="flex-col mx-14 cursor-default">
        <span class="text-rblue font-rtext text-3xl tracking-wide font-bold">Bio</span>
        <p class="text-rblue font-rtext text-xl tracking-wide font-thin overflow-hidden">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing and web pages.</p>
      </div>

      <div class="flex bg-rblue mt-4 mx-14 h-20 rounded-md px-12 py-1 justify-between cursor-default">
        <div class="flex flex-col text-center">
          <span class="text-white font-rtext text-4xl font-bold tracking-widest">241</span>
          <span class="text-white font-rtext text-2xl tracking-widest">Item Level</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-white font-rtext text-4xl font-bold tracking-widest">60</span>
          <span class="text-white font-rtext text-2xl tracking-widest">Level</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-white font-rtext text-4xl font-bold tracking-widest">1975.5</span>
          <span class="text-white font-rtext text-2xl tracking-widest">Mythic+ Score</span>
        </div>
      </div>
    </div>

    <div class="flex space-x-7 mt-2">
      <div class="bg-white bg-opacity-80 w-3/12 h-96 rounded-md my-5">
        <div class="flex-col py-6 px-10 space-y-7">
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/twitch_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">SylvTTV</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/twitter_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">SylvanasKhara</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/youtube_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">SylvanasKhara</span>
          </button>
          <button class="flex items-center space-x-4">
            <img class="w-16" src="@/assets/icons/discord_small.png" alt="" />
            <span class="text-rblue font-rtext text-3xl tracking-wide">SylvaCREW</span>
          </button>
        </div>
      </div>

      <div class="bg-white bg-opacity-80 w-4/12 h-96 rounded-md my-5 cursor-default">
        <div class="flex flex-col text-center py-6 space-y-2">
          <button class="text-rblue font-rtext text-5xl tracking-wide font-bold">Guildo Buildo</button>
          <span class="text-rblue font-rtext text-4xl tracking-wide">Officer</span>
          <button class="items-center w-44 h-44 overflow-hidden rounded-full border-4 border-rblue self-center">
            <img class="h-full w-full" src="@/assets/img/guild_icon.jpeg" alt="" />
          </button>
          <span class="text-rblue opacity-80 font-rtext text-4xl tracking-wide">62 Members</span>
        </div>
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
