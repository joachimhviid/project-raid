<template>
  <div class="flex flex-col rounded-lg bg-rblue p-4 my-4 dark:bg-white">
    <span class="text-white dark:text-rblue font-bold text-center text-2xl">
      {{ score }}
    </span>
    <span class="text-white dark:text-rblue font-bold text-xs text-center">Overall score</span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  score: number
}>()
</script>
