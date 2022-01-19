<template>
  <main class="lg:ml-56 mt-28 lg:mt-20 px-4 lg:px-8 py-2">
    <div class="bg-white/10 w-full p-4 rounded-lg">
      <NuxtChild />
    </div>
  </main>
</template>
<script lang="ts">
export default defineComponent({
  layout: 'dashboard'
})
</script>
<script lang="ts" setup>
import { useWow } from '~/stores/wow'
import { Origins } from 'blizzard.js/dist/endpoints'

const wow = useWow()
const route = useRoute()

wow.setCharacter(route.params.name as string, route.params.realm as string, route.params.region as Origins)
await wow.getCharacterMedia()
</script>
