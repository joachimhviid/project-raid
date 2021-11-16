<template>
  <div>
    <div class="font-bold text-red-600 mb-8">Callback page</div>
    <p>{{ $route.query }}</p>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      test: 'hello'
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
})
</script>
