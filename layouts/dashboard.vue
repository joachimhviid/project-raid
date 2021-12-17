<template>
  <div class="absolute w-full h-screen bg-outland bg-cover overflow-hidden">
    <DashboardNavigation />
    <DashboardHeader />
    <DashboardCardCharacterInfo />
    <slot />
  </div>
</template>
<script lang="ts">
import '@/assets/tailwind.scss'
</script>
<style lang="scss" scoped>
.bg-outland {
  background-image: url('assets/img/thrallbg.png');
}
</style>
