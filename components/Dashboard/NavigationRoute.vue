<template>
  <NuxtLink
    :to="route"
    class="
      flex flex-col
      py-6
      items-center
      text-rblue
      dark:text-white
      font-rtext
      text-xl text-center
      hover:bg-rblue/25
      dark:hover:bg-white/40
    "
    append
  >
    <slot />
    {{ route.toUpperCase() }}
  </NuxtLink>
</template>
<script lang="ts">
export default defineComponent({
  name: 'NavigationRoute',
  props: {
    route: {
      type: String,
      default: '/'
    }
  }
})
</script>
