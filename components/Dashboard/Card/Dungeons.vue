<template>
  <div class="bg-white p-4 rounded-lg">
    <h2 class="font-bold text-xl">Dungeons</h2>
    <DungeonInfo :score="dungeons.mythic_plus_scores_by_season[0].scores.all" />
    <!--List of current season dungeon bests fort/tyr-->
    <div class="grid grid-cols-2 rounded-lg overflow-hidden">
      <DungeonRow v-for="[key, value] in mythicPlusDungeonMap" :key="key" :dungeonSet="value" />
    </div>
    <div class="flex justify-end gap-4 mt-3">
      <span class="text-sm text-gray-500">Rating</span>
      <span class="text-sm text-gray-500">Tyrannical</span>
      <span class="text-sm text-gray-500">Fortified</span>
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
