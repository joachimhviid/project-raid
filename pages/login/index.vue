<template>
  <div>
    <form>
      <select name="region" id="region" v-model="region">
        <option v-for="(region, index) in $config.regions" :value="region" :key="index" v-text="region.toUpperCase()" />
      </select>
      <input type="text" id="characterName" placeholder="Character name" v-model="name" />
      <select name="realm" id="realm" v-model="realm">
        <option v-for="(realm, index) in regionRealms" :value="realm.slug" :key="index" v-text="realm.name" />
      </select>
    </form>
  </div>
</template>
<script lang="ts">
import { useWow } from '@/stores/wow'
import { Realm } from '@/types/BlizzardTypes'
import { Origins } from 'blizzard.js/dist/endpoints'

export default defineComponent({
  layout: 'authentication',
  async setup() {
    const wow = useWow()
    await wow.getRealms()
  },
  data() {
    return {
      region: 'eu' as Origins,
      name: '',
      realm: ''
    }
  },
  watch: {
    async region() {
      const wow = useWow(this.$pinia)
      wow.setRegion(this.region)
      await wow.getRealms()
      this.realm = ''
    }
  },
  computed: {
    regionRealms(): Realm[] {
      const wow = useWow(this.$pinia)
      return wow.realms
    }
  }
})
</script>
