<template>
  <div class="bg-white p-4 dark:bg-rblue dark:bg-opacity-70 rounded-md">
    <h2 class="font-bold text-2xl font-rtext text-rblue dark:text-white">Raid</h2>
    <div v-for="[key, value] in expansionRaidMap" :key="key">
      <h3 class="dark:text-white italic">{{ key }}</h3>
    </div>
    <!--Highlight of current tier-->
    <!--Current expansion tiers > click to see stats-->
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
import { Raid, RaidExpansion } from '~/types/BlizzardTypes'
const wow = useWow()

const { data, pending } = await useAsyncData(
  'raids',
  () =>
    $fetch('/api/raids', {
      method: 'post',
      body: {
        character: wow.character
      }
    }),
  {
    pick: ['raids'],
    lazy: true
  }
)

const expansionRaidMap = computed((): Map<string, Raid[]> | undefined => {
  if (pending.value) return
  const expansionMap = new Map<string, Raid[]>()
  data.value.raids.forEach((expansion: RaidExpansion) => {
    expansionMap.set(expansion.expansion.name, expansion.instances)
  })
  return expansionMap
})
</script>
