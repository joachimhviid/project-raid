<template>
  <form @submit.prevent="submitCharacter" class="flex flex-col">
    <div class="grid grid-cols-4 grid-rows-2 gap-2 md:flex md:flex-row mb-4 md:space-x-2">
      <select
        name="region"
        id="region"
        class="rounded-lg h-14 p-2 md:p-4 bg-rblue text-white font-bold outline-none row-start-2"
        v-model="region"
      >
        <option v-for="(region, index) in $config.regions" :value="region" :key="index" v-text="region.toUpperCase()" />
      </select>
      <div class="relative col-span-4 md:flex-grow">
        <input
          type="text"
          id="characterName"
          class="h-14 border rounded-lg p-4 pb-2 transition focus:border-rblue focus:outline-none peer w-full"
          @input="name = $event.target.value.toLowerCase()"
          required
        />
        <label
          for="characterName"
          class="
            transition-all
            cursor-text
            text-gray-400
            font-bold
            absolute
            inset-4
            peer-focus:inset-y-1 peer-focus:text-xs peer-focus:text-rblue
            peer-valid:inset-y-1 peer-valid:text-xs peer-valid:text-rblue
          "
        >
          Character
        </label>
      </div>
      <RealmSelector :region="region" v-model="realm" class="col-span-3 row-start-2" />
    </div>
    <button
      type="submit"
      class="text-center w-full rounded-lg bg-rblue text-white p-4 font-bold transition hover:bg-rblue-hover"
    >
      Get Dashboard
    </button>
  </form>
</template>
<script lang="ts">
import { Origins } from 'blizzard.js/dist/endpoints'
import { useWow } from '@/stores/wow'

export default defineComponent({
  name: 'CharacterFinder',
  data() {
    return {
      region: 'eu' as Origins,
      name: '',
      realm: ''
    }
  },
  methods: {
    async submitCharacter() {
      const wow = useWow(this.$pinia)
      await wow.setCharacter(this.name, this.realm, this.region)
      this.$router.push(`/dashboard/${this.region}/${this.realm}/${this.name}/progress`)
    }
  }
})
</script>
