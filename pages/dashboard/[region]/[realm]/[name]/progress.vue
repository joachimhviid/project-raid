<template>
  <div>
    <!--Section Title-->
    <h1 class="text-4xl text-indigo-400 font-bold mb-4">Progress</h1>
    <div class="grid grid-cols-4 grid-rows-2 gap-8">
      <!--Card > Quick facts + bio-->
      <DashboardCardCharacterInfo class="col-span-2" />
      <!--Card > raid stats-->
      <DashboardCardRaids class="row-span-2" />
      <!--Card > dungeon stats-->
      <DashboardCardDungeons class="row-span-2" />
      <!--Card > Guild info-->
      <DashboardCardGuildInfo />
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
