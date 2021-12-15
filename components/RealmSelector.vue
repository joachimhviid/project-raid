<template>
  <div class="relative">
    <input
      id="realmName"
      class="h-14 border rounded-lg p-4 pb-2 transition focus:border-rblue focus:outline-none peer w-full"
      type="text"
      list="realms"
      @input="onInput($event.target.value)"
      required
    />
    <label
      for="realmName"
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
      Realm
    </label>
    <datalist id="realms">
      <option v-for="(realm, index) in regionRealms" :key="index" :value="realm.name" />
    </datalist>
  </div>
</template>
<!--<script lang="ts" setup>-->
<!--const { data: realms } = await useAsyncData('realms', () =>-->
<!--  $fetch('/api/realms', {-->
<!--    method: 'post',-->
<!--    body: { region: 'eu', locale: 'en_GB' }-->
<!--  })-->
<!--)-->
<!--</script>-->
<script lang="ts">
import { Origins } from 'blizzard.js/dist/endpoints'
import { useWow } from '@/stores/wow'
import { Realm } from '@/types/BlizzardTypes'
import { slugify } from '@/utils/StringHelpers'

export default defineComponent({
  name: 'RealmSelector',
  props: {
    region: {
      type: String as PropType<Origins>,
      default: 'eu'
    },
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      realm: ''
    }
  },
  async setup() {
    const { data } = await useAsyncData(
      'realms',
      () =>
        $fetch('/api/realms', {
          method: 'post',
          body: { region: 'eu', locale: 'en_GB' }
        }),
      { pick: ['realms'] }
    )
    return {
      data
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
      return wow.realms ?? this.data.realms
    }
  },
  methods: {
    onInput(input: string) {
      this.realm = slugify(input)
      this.$emit('update:modelValue', this.realm)
    }
  }
})
</script>
