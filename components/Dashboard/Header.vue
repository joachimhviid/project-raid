<template>
  <header
    class="
      fixed
      lg:absolute
      top-0
      inset-x-0
      lg:pl-56
      w-full
      bg-white
      dark:bg-rblue dark:lg:bg-transparent
      lg:bg-transparent
      z-20
    "
  >
    <div class="flex justify-between items-center h-24 p-8">
      <button class="w-8 h-8 lg:hidden" @click="toggleNavigation">
        <svg class="fill-current text-rblue dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </button>
      <span
        class="
          text-rblue
          dark:text-white
          font-rtitle
          text-3xl
          lg:text-5xl
          font-extrabold
          tracking-widest
          cursor-pointer
        "
      >
        RAIDHUB
      </span>
      <div class="flex items-center">
        <!--TODO: Make search component. Also what are we searching for? Maybe this should be repurposed as a new character selector-->
        <div class="hidden lg:flex items-center mx-4 border-2 rounded-full h-12 py-2 px-4 border-rblue">
          <img class="w-6 h-6" src="~/assets/icons/search.png" alt="" />
          <input
            type="text"
            class="px-4 py-2 w-80 medium:w-40 outline-none bg-transparent text-rblue"
            placeholder="Search"
          />
        </div>
        <button class="w-8 h-8" @click="toggleDarkMode">
          <svg class="fill-current text-rblue dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const emit = defineEmits(['toggleMenu'])

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
function toggleDarkMode() {
  if (process.client) localStorage.setItem('darkmode', `${!isDarkmode}`)
  document.body.classList.toggle('dark')
}

function toggleNavigation() {
  emit('toggleMenu')
}
</script>
