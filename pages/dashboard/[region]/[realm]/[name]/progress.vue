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

const wow = useWow()

useMeta({
  title: `${wow.character.name} @ ${wow.character.realm} (${wow.character.region}) | Raidhub`,
  meta: [
    {
      name: 'og:title',
      content: `Raidhub |${wow.character.name} @ ${wow.character.realm} (${wow.character.region})`
    },
    {
      name: 'og:description',
      content: 'Class/Spec - ilvl - m+ score - raid prog'
    },
    {
      name: 'og:site_name',
      content: 'Raidhub'
    }
  ]
})
</script>
