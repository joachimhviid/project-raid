<template>
  <div class="bg-cover min-h-screen bg-thrall">
    <header class="btn-container">
      <NuxtLink to="/login" class="sign-up">SIGN UP</NuxtLink>
      <NuxtLink to="/login" class="btn">LOGIN</NuxtLink>
    </header>

    <div class="flex flex-col items-center text-center">
      <span class="text-rblue font-rtitle text-7xl font-extrabold tracking-widest p-4 mb-16 medium:pt-24 medium:p-0">
        RAIDHUB
      </span>
      <div class="flex flex-col max-w-lg p-10 border-2 border-rblue rounded-xl">
        <span class="text-white font-rtext text-3xl font-bold mb-4">
          The home for personal WoW statistics and tracking
        </span>
        <NuxtLink to="/login" class="btn self-center">GET STARTED</NuxtLink>
      </div>
    </div>

    <div
      class="
        flex
        medium:flex-col
        mx-44
        medium:mx-24
        mt-20
        medium:space-x-3 medium:space-y-8
        divide-x-2
        medium:divide-y-2 medium:divide-x-0
        divide-rblue
        items-center
        text-center
      "
    >
      <div class="flex-1 px-8 py-4 medium:px-12">
        <svg class="w-full h-12 fill-current text-rblue mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"
          />
        </svg>
        <span class="text-white font-rtext text-4xl large:text-2xl medium:text-2xl font-medium">
          Track your character progression in both PvE and PvP
        </span>
      </div>
      <div class="flex-1 px-14 py-4 medium:py-14 medium:px-18">
        <svg class="w-full h-12 fill-current text-rblue mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg>
        <span class="text-white font-rtext text-4xl large:text-2xl medium:text-2xl font-medium text-center">
          The all-in-one solution for keeping your WoW character data organized
        </span>
      </div>
      <div class="flex-1 px-8 py-4 medium:py-14 medium:px-18">
        <svg
          class="w-full h-12 fill-current text-rblue mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 465.39 465.39"
        >
          <g id="Cut_border_thick" data-name="Cut border thick">
            <path class="cls-1" d="M305.26,411.3a194,194,0,0,1-145.13,0L118.6,435.53a232.91,232.91,0,0,0,228.19,0Z" />
            <path
              class="cls-1"
              d="M405.71,77.1v70.56a193.53,193.53,0,0,1,0,170.06v70.57a232.67,232.67,0,0,0,0-311.19Z"
            />
            <path class="cls-1" d="M59.68,317.72a193.53,193.53,0,0,1,0-170.06V77.1a232.67,232.67,0,0,0,0,311.19Z" />
            <path class="cls-1" d="M290.92,7.34a234.61,234.61,0,0,0-116.45,0Z" />
          </g>
          <g id="Banner">
            <path
              class="cls-1"
              d="M350.46,23.34H114.94a39.22,39.22,0,0,0-15.28,3.08c-.59.25-1.17.51-1.74.79A39.43,39.43,0,0,0,79.55,45.58c-.27.57-.53,1.15-.78,1.73a39.08,39.08,0,0,0-3.09,15.28V442l157-91.59,157,91.59V62.59A39.25,39.25,0,0,0,350.46,23.34ZM212,285.33a6.43,6.43,0,0,1,0,9.11L205,301.51a6.44,6.44,0,0,1-7.6,1.12L173.6,289.89l-23.89,23.88a6.43,6.43,0,0,1-9.11,0l-9.11-9.11a6.43,6.43,0,0,1,0-9.11l23.88-23.89-12.74-23.77a6.46,6.46,0,0,1,1.12-7.6l7.07-7.06a6.43,6.43,0,0,1,9.11,0l9.94,9.94,21.5-21.49,32.22,32.22-21.5,21.49ZM135,147.05l-5.32-31.46a5.37,5.37,0,0,1,6.08-6.07l31.46,5.31L286.41,234.06l-32.22,32.22ZM333.91,304.66l-9.11,9.11a6.43,6.43,0,0,1-9.11,0L291.8,289.89,268,302.63a6.43,6.43,0,0,1-7.59-1.12l-7.07-7.07a6.45,6.45,0,0,1,0-9.11l52.11-52.1a6.43,6.43,0,0,1,9.11,0l7.07,7.06a6.45,6.45,0,0,1,1.12,7.6L310,271.66l23.88,23.89A6.43,6.43,0,0,1,333.91,304.66Zm1.84-189.07-5.32,31.46L274,203.45l-32.22-32.22,56.41-56.4,31.46-5.31A5.36,5.36,0,0,1,335.75,115.59Z"
            />
          </g>
        </svg>
        <span class="text-white font-rtext text-4xl large:text-2xl medium:text-2xl font-medium text-center">
          Guild feature for recruitment, rosters and realm/world rankings
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useMeta({
  title: 'Raidhub | World of Warcraft Dashboard',
  meta: [
    {
      name: 'og:title',
      content: 'Raidhub | World of Warcraft Dashboard'
    },
    {
      name: 'og:description',
      content: 'Your one-stop shop for all your relevant WoW data.'
    },
    {
      name: 'og:site_name',
      content: 'Raidhub'
    }
  ]
})
</script>
<style lang="scss" scoped>
.bg-thrall {
  background-image: url('assets/img/thrallbg.png');
}
</style>
