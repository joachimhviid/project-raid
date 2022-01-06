<template>
  <div
    class="
      bg-white
      dark:bg-rblue dark:bg-opacity-70
      rounded-lg
      p-4
      flex flex-col
      md:flex-row
      gap-4
      md:gap-8
      justify-between
    "
  >
    <div class="flex flex-col items-center text-center flex-shrink-0">
      <img
        class="w-28 h-28 mb-2 rounded-full border-4 border-rblue dark:border-white"
        :src="characterAvatar"
        alt="Character avatar"
      />
      <span class="text-rblue dark:text-white font-rtext text-2xl font-bold">
        {{ characterProfile.name }}
      </span>
      <span class="text-gray-500 dark:text-white font-bold text-sm">
        ({{ character.region.toUpperCase() }}) {{ characterProfile.realm.name }}
      </span>
      <span class="text-gray-500 dark:text-white text-sm">{{ characterProfile.race.name }}</span>
      <span class="text-gray-500 dark:text-white text-sm"
        >{{ characterProfile.active_spec.name }} {{ characterProfile.character_class.name }}</span
      >
    </div>
    <div class="flex flex-col">
      <h2 class="text-rblue dark:text-white font-rtext text-2xl font-bold">Bio</h2>
      <p class="text-rblue dark:text-white font-rtext">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing and
        web pages.
      </p>
      <div
        class="
          grid grid-rows-2 grid-cols-2
          gap-4
          md:flex
          bg-rblue
          dark:bg-white
          mt-4
          rounded-md
          py-4
          px-4
          xl:px-8
          justify-between
          max-w-lg
          self-center
          md:self-start
        "
      >
        <div class="flex flex-col text-center">
          <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{ characterProfile.level }}</span>
          <span class="text-white dark:text-rblue font-rtext text-lg">Level</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
            characterProfile.equipped_item_level
          }}</span>
          <span class="hidden xl:block text-white dark:text-rblue font-rtext text-lg">Item Level</span>
          <span class="block xl:hidden text-white dark:text-rblue font-rtext text-lg">Ilvl</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
            characterProfile.covenant_progress.renown_level
          }}</span>
          <span class="text-white dark:text-rblue font-rtext text-lg">{{
            characterProfile.covenant_progress.chosen_covenant.name
          }}</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
            characterProfile.achievement_points
          }}</span>
          <span class="hidden xl:block text-white dark:text-rblue font-rtext text-lg">Achievement Points</span>
          <span class="block xl:hidden text-white dark:text-rblue font-rtext text-lg">Ach. Points</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useWow } from '@/stores/wow'
import { CharacterProps } from '@/types/BlizzardTypes'
import { useAsyncData } from '#app'

const wow = useWow()

const { data: profile, pending } = await useAsyncData(
  'profile',
  () =>
    $fetch('/api/profile', {
      method: 'post',
      body: wow.character
    }),
  {
    pick: [
      'equipped_item_level',
      'achievement_points',
      'character_class',
      'active_spec',
      'covenant_progress',
      'faction',
      'gender',
      'guild',
      'level',
      'name',
      'race',
      'realm'
    ],
    lazy: true
  }
)

const characterAvatar = computed((): string => {
  if (!wow.character.media) return ''
  return wow.character.media.find((media) => {
    return media.key === 'avatar'
  }).value
})

const character = computed((): CharacterProps => {
  return wow.character
})

const characterProfile = computed(() => {
  if (pending.value) return
  return profile.value
})
</script>
