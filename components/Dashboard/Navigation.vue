<template>
  <nav class="fixed top-0 flex flex-col w-56 h-screen px-10 py-6 bg-white bg-opacity-90 items-center">
    <div class="flex flex-col mb-4 text-center">
      <div class="items-center w-32 h-32 mb-2 overflow-hidden rounded-full border-4 border-rblue">
        <img class="h-full w-full" src="@/assets/img/sylv.jpg" alt="" />
      </div>
      <span class="text-rblue font-rtext text-2xl tracking-wide font-bold">Sylvanas</span>
    </div>

    <div class="flex flex-col flex-grow space-y-2 mb-2 w-56">
      <!--TODO: Make nav item component-->
      <NuxtLink
        v-for="(route, index) in dashboardRoutes"
        :key="index"
        :to="route"
        class="flex flex-col py-6 items-center text-rblue font-rtext text-xl text-center hover:bg-rblue/25"
        :class="[route === 'progress' ? 'order-first' : '']"
        append
      >
        <div class="w-full h-12" :class="route" />
        {{ route.toUpperCase() }}
      </NuxtLink>
    </div>

    <NuxtLink
      to="/login"
      class="
        hover:bg-rblue-hover
        cursor-pointer
        px-3
        py-2
        w-40
        bg-rblue
        text-white text-center
        font-rtext
        text-xl
        font-medium
        tracking-wider
        rounded-full
      "
      >LOG OUT
    </NuxtLink>
  </nav>
</template>
<script lang="ts" setup>
const router = useRouter()
const dashboardRoutes = computed((): string[] => {
  const childRoutes = router.options.routes.find((route) => route.name === 'dashboard').children
  return childRoutes.map((child) => {
    return child.path.match(/\w+$/g)[0]
  })
})
</script>
<style lang="scss" scoped>
.progress {
  background-image: url('/assets/icons/pve_pvp.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.guild {
  background-image: url('/assets/icons/guild.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
