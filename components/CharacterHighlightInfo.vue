<script setup lang="ts">
import { CharacterProfile } from '~/components/Dashboard/Card/CharacterInfo.vue'

const props = defineProps<{ characterProfile: CharacterProfile }>()
</script>

<template>
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
      <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{ props.characterProfile.level }}</span>
      <span class="text-white dark:text-rblue font-rtext text-lg">Level</span>
    </div>
    <div class="flex flex-col text-center">
      <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
        props.characterProfile.equipped_item_level
      }}</span>
      <span class="hidden xl:block text-white dark:text-rblue font-rtext text-lg">Item Level</span>
      <span class="block xl:hidden text-white dark:text-rblue font-rtext text-lg">Ilvl</span>
    </div>
    <div class="flex flex-col text-center">
      <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
        props.characterProfile.covenant_progress.renown_level
      }}</span>
      <span class="text-white dark:text-rblue font-rtext text-lg">{{
        props.characterProfile.covenant_progress.chosen_covenant.name
      }}</span>
    </div>
    <div class="flex flex-col text-center">
      <span class="text-white dark:text-rblue font-rtext text-3xl font-bold">{{
        props.characterProfile.achievement_points
      }}</span>
      <span class="hidden xl:block text-white dark:text-rblue font-rtext text-lg">Achievement Points</span>
      <span class="block xl:hidden text-white dark:text-rblue font-rtext text-lg">Ach. Points</span>
    </div>
  </div>
</template>
