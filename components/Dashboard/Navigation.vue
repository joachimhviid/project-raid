<template>
  <nav class="fixed top-0 flex flex-col w-56 h-screen p-6 bg-white dark:bg-rblue/70 bg-opacity-90 items-center">
    <div class="flex flex-col mb-4 items-center text-center">
      <img class="w-28 h-28 mb-2 rounded-full border-4 border-rblue dark:border-white" :src="characterAvatar" alt="Character avatar" />
      <span class="text-rblue dark:text-white font-rtext text-2xl font-bold">
        {{ character.raw.name }}
      </span>
      <span class="text-rblue dark:text-white/70 font-bold text-sm">
        ({{ character.region.toUpperCase() }}) {{ character.raw.realm.name }}
      </span>
    </div>

    <div class="flex flex-col flex-grow space-y-2 mb-2 w-56">
      <NuxtLink
        v-for="(route, index) in dashboardRoutes"
        :key="index"
        :to="route"
        class="flex flex-col py-6 items-center text-rblue dark:text-white font-rtext text-xl text-center hover:bg-rblue/25 dark:hover:bg-white/50"
        :class="[route === 'progress' ? 'order-first' : '']"
        append
      >
        <div class="w-full h-12 bg-no-repeat bg-center bg-contain" :class="route" />
        {{ route.toUpperCase() }}
      </NuxtLink>
    </div>

    <NuxtLink
      to="/login"
      class="
        hover:bg-rblue-hover dark:hover:bg-white/80
        cursor-pointer
        px-3
        py-2
        w-40
        bg-rblue dark:bg-white
        text-white text-center dark:text-rblue
        font-rtext
        text-xl
        font-medium dark:font-bold
        tracking-wider
        rounded-full
      "
      >LOG OUT
    </NuxtLink>
  </nav>
</template>
<script lang="ts" setup>
import { useWow } from '@/stores/wow'
import { CharacterProps } from '@/types/BlizzardTypes'

const wow = useWow()
const router = useRouter()

const dashboardRoutes = computed((): string[] => {
  const childRoutes = router.options.routes.find((route) => route.name === 'dashboard').children
  return childRoutes.map((child) => {
    return child.path.match(/\w+$/g)[0]
  })
})

const characterAvatar = computed((): string => {
  if (!wow.character.media) return ''
  return wow.character.media.find((media) => {
    return media.key === 'avatar'
  }).value
})

const character = computed((): CharacterProps => {
  return wow.character
})
</script>
<style lang="scss" scoped>
.progress {
  background-image: url('/assets/icons/pve_pvp.png');
}
.guild {
  background-image: url('/assets/icons/guild.png');
}
</style>
