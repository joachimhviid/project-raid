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
      <option v-if="!regionRealms">Loading realm options...</option>
      <option v-for="(realm, index) in regionRealms" :key="index" :value="realm.name" />
    </datalist>
  </div>
</template>
<script lang="ts" setup>
import { Origins } from 'blizzard.js/dist/endpoints'
import { slugify } from '@/utils/StringHelpers'
import { useWow } from '@/stores/wow'
import { Realm } from '@/types/BlizzardTypes'

const { data: realms, pending } = await useAsyncData(
  'realms',
  () =>
    $fetch('/api/realms', {
      method: 'post',
      body: { region: 'eu', locale: 'en_GB' }
    }),
  { pick: ['realms'], lazy: true }
)

const wow = useWow()

const props = withDefaults(
  defineProps<{
    region: Origins
    modelValue: string
  }>(),
  {
    region: 'eu'
  }
)

wow.setRegion(props.region)

const emit = defineEmits(['update:modelValue'])

const regionRealms = computed((): Realm[] => {
  if (pending.value) return []
  return wow.realms ?? realms.value.realms
})

function onInput(input: string) {
  const realm = slugify(input)
  emit('update:modelValue', realm)
}

watch(
  () => props.region,
  async () => {
    wow.setRegion(props.region)
    await wow.getRealms()
  }
)
</script>
