<template>
  <div class="rounded-lg bg-gray-800 p-4 my-4 dark:bg-blue-500">{{ score }}</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  score: number
}>()
</script>
