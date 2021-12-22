<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import '@/assets/tailwind.scss'
let isDarkmode = false
if (process.client) {
  isDarkmode = JSON.parse(localStorage.getItem('darkmode'))
  if (isDarkmode) {
    document.body.classList.add('dark')
    localStorage.setItem('darkmode', 'true')
  } else {
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode', 'false')
  }
}
</script>
