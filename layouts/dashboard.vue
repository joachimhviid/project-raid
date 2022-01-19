<template>
  <div class="absolute w-full min-h-screen bg-thrall bg-cover bg-fixed">
    <Html class="lg:!overflow-visible" :class="[menuOpen ? 'overflow-hidden' : 'overflow-visible']" />
    <DashboardNavigation :class="[menuOpen ? 'flex' : 'hidden']" />
    <DashboardHeader @toggleMenu="toggleMenu" />
    <div
      class="fixed w-screen h-screen bg-black/50 z-10 lg:!hidden"
      :class="[menuOpen ? 'flex' : 'hidden']"
      @click="toggleMenu"
    />
    <slot />
  </div>
</template>
<script lang="ts" setup>
import '@/assets/tailwind.scss'

let menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
<style lang="scss" scoped>
.bg-thrall {
  background-image: url('assets/img/thrallbg.png');
}
</style>
