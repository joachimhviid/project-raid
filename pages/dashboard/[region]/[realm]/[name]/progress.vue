<template>
  <div>
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/pve_pvp.png" alt="" />
      <h2 class="text-rblue dark:text-white font-rtext text-4xl">PROGRESS</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <DashboardCardCharacterInfo class="md:col-span-2 xl:col-span-4 2xl:col-span-2" />
      <DashboardCardCharacterSocials class="xl:col-span-2 2xl:row-start-2 2xl:col-span-1" />
      <DashboardCardCharacterGuild class="xl:col-span-2 2xl:row-start-2 2xl:col-span-1" />
      <DashboardCardRaids class="xl:col-span-2 2xl:row-span-2 2xl:col-span-1" />
      <DashboardCardDungeons class="xl:col-span-2 2xl:row-span-2 2xl:col-span-1" />
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
