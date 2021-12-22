<template>
  <div class="dark bg-white dark:bg-gray-800 rounded-lg p-8 max-w-screen-sm mx-4 sm:mx-auto mt-12">
    <h1
      class="
        relative
        font-bold
        text-gray-700 text-2xl text-center
        dark:text-white dark:after:bg-white
        pb-2
        mb-4
        after:bg-rblue after:h-px after:w-1/2 after:mx-auto after:absolute after:bottom-0 after:inset-x-0
      "
    >
      Select your character
    </h1>
    <!--TODO: Create loading state-->
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
