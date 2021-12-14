<template>
  <div class="bg-cover min-h-screen" style="background-image: url('assets/img/thrallbg.png')">
    <header class="btn-container">
      <a href="" class="sign-up">SIGN UP</a>
      <NuxtLink to="/login" class="btn">LOGIN</NuxtLink>
    </header>

    <div class="flex flex-col items-center text-center">
      <span class="text-rblue font-rtitle text-7xl font-extrabold tracking-widest p-4 mb-16">RAIDHUB</span>
      <div class="flex flex-col max-w-lg p-10 border-2 border-rblue rounded-xl">
        <span class="text-white font-rtext text-3xl font-bold mb-4">
          The home for personal WoW statistics and tracking
        </span>
        <a href="" class="btn self-center">GET STARTED</a>
      </div>
    </div>

    <div class="flex mx-56 mt-20 space-x-10 divide-x-2 divide-rblue items-end text-center">
      <div class="flex-1 px-8 py-12">
        <img class="w-24 mb-14 ml-36" src="assets/icons/pve_pvp.png" alt="" />
        <span class="text-white font-rtext text-4xl font-medium">
          Track your character progression in both PvE and PvP
        </span>
      </div>
      <div class="flex-1 px-14 py-12">
        <img class="w-24 mb-14 ml-36" src="assets/icons/search_analytics.png" alt="" />
        <span class="text-white font-rtext text-4xl font-medium text-center">
          The all-in-one solution for keeping your WoW character data organized
        </span>
      </div>
      <div class="flex-1 px-8 py-12">
        <img class="w-24 mb-14 ml-36" src="assets/icons/guild.png" alt="" />
        <span class="text-white font-rtext text-4xl font-medium text-center">
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
