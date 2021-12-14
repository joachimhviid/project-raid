<template>
  <div class="dark bg-white dark:bg-gray-800 rounded-lg p-8 max-w-screen-sm mx-4 sm:mx-auto mt-12">
    <h1
      class="
        relative
        font-bold
        text-gray-700 text-2xl text-center
        pb-2
        mb-4
        after:bg-rblue after:h-px after:w-1/2 after:mx-auto after:absolute after:bottom-0 after:inset-x-0
      "
    >
      Select your character
    </h1>
    <CharacterFinder />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  layout: 'authentication'
})
</script>
