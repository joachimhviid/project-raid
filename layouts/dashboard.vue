<template>
  <div class="absolute w-full min-h-screen bg-thrall bg-cover bg-fixed">
    <Html class="lg:!overflow-visible" :class="[menuOpen ? 'overflow-hidden' : 'overflow-visible']" />
    <DashboardNavigation :class="[menuOpen ? 'flex' : 'hidden']" />
    <DashboardHeader @toggleMenu="toggleMenu" />
    <div
      class="fixed w-screen h-screen bg-white z-10 lg:!hidden"
      :class="[menuOpen ? 'flex' : 'hidden']"
      @click="toggleMenu"
    />
    <slot />
  </div>
</template>
<script lang="ts" setup>
import '@/assets/tailwind.scss'
import { Origins } from 'blizzard.js/dist/endpoints'
import { useWow } from '@/stores/wow'

const wow = useWow()
const route = useRoute()

let menuOpen = ref(false)

if (!wow.character)
  await wow.setCharacter(route.params.name as string, route.params.realm as string, route.params.region as Origins)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
<style lang="scss" scoped>
.bg-thrall {
  background-image: url('assets/img/thrallbg.png');
}
</style>
