<template>
  <div>
    <!--Section Title-->
    <h1 class="text-4xl text-indigo-400 font-bold mb-4">Progress</h1>
    <div class="grid grid-cols-4 grid-rows-2">
      <!--Card > Quick facts + bio-->
      <!--Card > Guild info-->
      <!--Card > raid stats-->
      <DashboardCardRaids />
      <!--Card > dungeon stats-->
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'progress'
})
</script>
<style lang="scss" scoped></style>
