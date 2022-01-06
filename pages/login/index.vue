<template>
  <div class="dark bg-white dark:bg-gray-800 rounded-lg p-8 max-w-screen-sm mx-4 sm:mx-auto mt-12">
    <h1
      class="
        relative
        font-bold
        text-rblue text-3xl
        pb-2
        mb-6
      "
    >
      SELECT YOUR CHARACTER
    </h1>
    <CharacterFinder />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  layout: 'authentication',
  setup() {
    useMeta({
      title: 'Raidhub | Select your character',
      meta: [
        {
          name: 'og:title',
          content: 'Raidhub | Select your character'
        },
        {
          name: 'og:description',
          content: 'Your one-stop shop for all your relevant WoW data.'
        },
        {
          name: 'og:site_name',
          content: 'Raidhub'
        }
      ]
    })
  }
})
</script>
