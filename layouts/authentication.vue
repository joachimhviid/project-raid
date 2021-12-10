<template>
  <div class="absolute w-full h-screen bg-bastion bg-cover overflow-hidden">
    <slot />
  </div>
</template>
<script lang="ts">
import '@/assets/tailwind.scss'
</script>
<style lang="scss" scoped>
.bg-bastion {
  background-image: url('assets/img/bastionbg.jpeg');
}
</style>
