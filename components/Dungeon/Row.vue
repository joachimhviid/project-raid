<template>
  <div
    class="relative aspect-w-16 aspect-h-9 bg-cover bg-center"
    :style="{ 'background-image': `url('${dungeonSet.best.dungeonBackground}')` }"
  >
    <h3 class="text-white text-sm text-center py-2 font-medium bg-gradient-to-b from-black/50 text-shadow">
      {{ dungeonSet.best.name }}
    </h3>
    <div class="px-2 pt-2 xl:pt-0 xl:px-4 3xl:px-8 flex items-center justify-between">
      <span class="font-bold text-white text-xl text-shadow order-first 3xl:text-3xl">{{ totalScore }}</span>
      <div class="flex gap-4">
        <div
          class="flex flex-col text-white items-center leading-3"
          :class="[
            { 'text-gray-400': !dungeonSet.best.inTime },
            dungeonSet.best.metaAffix === 'Tyrannical' ? 'order-1' : 'order-2'
          ]"
        >
          <span class="text-xl 3xl:text-2xl font-bold text-shadow">{{ dungeonSet.best.keyLevel }}</span>
          <span class="text-xs font-bold text-shadow">{{ dungeonSet.best.clearTimeStamp }}</span>
        </div>
        <div
          class="flex flex-col text-white items-center leading-3"
          :class="[
            { 'text-gray-400': !dungeonSet.alt.inTime },
            dungeonSet.alt.metaAffix === 'Tyrannical' ? 'order-1' : 'order-2'
          ]"
        >
          <span class="text-xl 3xl:text-2xl font-bold text-shadow">{{ dungeonSet.alt.keyLevel }}</span>
          <span class="text-xs font-bold text-shadow">{{ dungeonSet.alt.clearTimeStamp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MythicPlusTopRuns } from '@/types/BlizzardTypes'

const props = defineProps<{
  dungeonSet: MythicPlusTopRuns
}>()

const totalScore = computed((): string => {
  return Number(props.dungeonSet.best.score + props.dungeonSet.alt.score).toFixed(1)
})
</script>
<style lang="scss" scoped>
.text-shadow {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
