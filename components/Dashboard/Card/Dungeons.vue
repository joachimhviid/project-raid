<template>
  <div class="bg-white bg-opacity-80 p-4 dark:bg-rblue dark:bg-opacity-70 rounded-md">
    <h2 class="font-bold text-2xl font-rtext text-rblue dark:text-white/90 tracking-wide">Dungeons</h2>
    <DungeonInfo :score="dungeons.mythic_plus_scores_by_season[0].scores.all" />
    <div class="grid grid-cols-2 rounded-md overflow-hidden dark:border dark:border-white">
      <DungeonRow v-for="[key, value] in mythicPlusDungeonMap" :key="key" :dungeonSet="value" />
    </div>
    <div class="flex justify-end gap-4 mt-3">
      <span class="text-m font-medium text-rblue dark:text-white/90">Rating</span>
      <span class="text-m text-rblue dark:text-white/90">Tyrannical</span>
      <span class="text-m text-rblue dark:text-white/90">Fortified</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
import { MythicPlusDungeon } from '@/types/MythicPlus'
import { useAsyncData } from '#app'
import { MythicPlusProps, MythicPlusTopRuns } from '~/types/BlizzardTypes'
const wow = useWow()

const { data: dungeons, pending } = await useAsyncData('dungeons', () =>
  $fetch('/api/dungeons', {
    method: 'post',
    body: {
      character: wow.character
    }
  })
)

const topMythicPlusDungeons = computed((): MythicPlusTopRuns[] => {
  if (pending.value) return []
  return dungeons.value.mythic_plus_best_runs.map((dungeon: MythicPlusProps) => {
    return {
      best: new MythicPlusDungeon(dungeon),
      alt: new MythicPlusDungeon(
        dungeons.value.mythic_plus_alternate_runs.find(
          (altDungeon: MythicPlusProps) => altDungeon.map_challenge_mode_id === dungeon.map_challenge_mode_id
        )
      )
    }
  })
})

const mythicPlusDungeonMap = computed((): Map<string, MythicPlusTopRuns> => {
  const dungeonMap = new Map<string, MythicPlusTopRuns>()

  topMythicPlusDungeons.value.forEach((dungeonSet) => {
    dungeonMap.set(dungeonSet.best.shortName, dungeonSet)
  })

  return dungeonMap
})

const mythicPlusScores = computed((): number => {
  if (pending.value) return
  return dungeons.value.mythic_plus_scores_by_season[0].scores.all
})
</script>
