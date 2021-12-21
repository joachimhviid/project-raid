<template>
  <div>
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/pve_pvp.png" alt="" />
      <h2 class="text-rblue font-rtext text-4xl cursor-default">PROGRESS</h2>
    </div>
    <div class="grid grid-cols-4 grid-rows-2 gap-8">
      <DashboardCardCharacterInfo class="col-span-2" />
      <DashboardCardCharacterGuild />
      <DashboardCardCharacterSocials />
      <DashboardCardRaids class="row-span-2" />
      <DashboardCardDungeons class="row-span-2" />   
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
import { Origins } from 'blizzard.js/dist/endpoints'

const wow = useWow()
const route = useRoute()
if (!wow.character)
  wow.setCharacter(route.params.name as string, route.params.realm as string, route.params.region as Origins)
const { data: encounters } = await useAsyncData('encounters', () =>
  $fetch('/api/progress', {
    method: 'post',
    body: {
      character: wow.character
    }
  })
)
</script>
<style lang="scss" scoped></style>
