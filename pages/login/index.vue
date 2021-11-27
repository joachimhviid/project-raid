<template>
  <div>
    <form>
      <select name="region" id="region">
        <option v-for="(region, index) in $config.regions" :value="region" :key="index" v-text="region.toUpperCase()" />
      </select>
      <input type="text" id="characterName" placeholder="Character name" />
      <select name="realm" id="realm">
        <option v-for="(realm, index) in apiRealms" :value="realm.slug" :key="index" v-text="realm.name" />
      </select>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
// import { useWow } from '@/stores/wow'

const { realms } = await $fetch('/api/blizzard')

export default defineComponent({
  layout: 'authentication',
  // setup() {
  //   const wow = useWow()
  //   wow.createClient()
  //   wow.getRealms()
  //   const realms = wow.realms
  //   return {
  //     realms
  //   }
  // },
  data() {
    return {
      apiRealms: realms
    }
  }
})
</script>
