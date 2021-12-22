<template>
  <div class="rounded-lg bg-rblue text-white dark:text-rblue p-4 my-4 dark:bg-white font-rtext font-bold text-center text-2xl tracking-wide">{{ score }}</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  score: number
}>()
</script>
