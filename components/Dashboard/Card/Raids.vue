<template>
  <div class="bg-white/80 p-4 dark:bg-rblue/70 rounded-md">
    <h2 class="font-bold text-2xl font-rtext text-rblue dark:text-white/90 tracking-wide">Raid</h2>
    <!--Highlight of current tier-->
    <!--Current expansion tiers > click to see stats-->
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
const wow = useWow()

const { data, pending } = await useAsyncData('raids', () =>
  $fetch('/api/raids', {
    method: 'post',
    body: {
      character: wow.character
    }
  })
)
//
// const expansionRaidMap = computed(() => {
//   if (pending.value) return {}
//   const expansionMap = new Map()
//   data.value.raids.forEach((expansion) => {
//     expansionMap.set(expansion.expansion.name, expansion.instances)
//   })
//   return expansionMap
// })
</script>
