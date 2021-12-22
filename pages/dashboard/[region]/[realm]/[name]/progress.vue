<template>
  <div>
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/pve_pvp.png" alt="" />
      <h2 class="text-rblue dark:text-white font-rtext text-4xl">PROGRESS</h2>
    </div>
    <div class="grid grid-cols-4 grid-rows-2 gap-8">
      <DashboardCardCharacterInfo class="col-span-2" />
      <DashboardCardCharacterSocials class="row-start-2" />
      <DashboardCardCharacterGuild class="row-start-2" />
      <DashboardCardRaids class="row-span-2" />
      <DashboardCardDungeons class="row-span-2" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'

const wow = useWow()

useMeta({
  title: `${wow.character.raw.name ?? wow.character.name} @ ${
    wow.character.raw.realm.name ?? wow.character.realm
  } (${wow.character.region.toUpperCase()}) | Raidhub`,
  meta: [
    {
      name: 'og:title',
      content: `Raidhub | ${wow.character.raw.name ?? wow.character.name} @ ${
        wow.character.raw.realm.name ?? wow.character.realm
      } (${wow.character.region.toUpperCase()})`
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
