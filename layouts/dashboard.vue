<template>
  <div class="absolute w-full h-screen bg-outland bg-cover bg-fixed">
    <DashboardNavigation />
    <DashboardHeader />
    <slot />
  </div>
</template>
<script lang="ts" setup>
import '@/assets/tailwind.scss'
import { Origins } from 'blizzard.js/dist/endpoints'
import { useWow } from '@/stores/wow'

const wow = useWow()
const route = useRoute()

if (!wow.character)
  await wow.setCharacter(route.params.name as string, route.params.realm as string, route.params.region as Origins)
</script>
<style lang="scss" scoped>
.bg-outland {
  background-image: url('assets/img/thrallbg.png');
}
</style>
