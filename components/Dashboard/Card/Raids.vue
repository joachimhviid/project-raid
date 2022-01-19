<template>
  <div class="bg-white p-4 dark:bg-rblue dark:bg-opacity-70 rounded-md">
    <h2 class="font-bold text-2xl font-rtext text-rblue dark:text-white">Raid</h2>
    <!--Highlight of current tier-->
    <!--Current expansion tiers > click to see stats-->
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
const wow = useWow()

const { data: raids } = await useAsyncData('raids', () =>
  $fetch('/api/raids', {
    method: 'post',
    body: {
      character: wow.character
    }
  })
)
</script>
