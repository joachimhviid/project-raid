<template>
  <div class="flex flex-col bg-white dark:bg-rblue dark:bg-opacity-70 rounded-lg p-4">
    <h2 class="text-rblue dark:text-white font-rtext font-bold text-2xl mb-4">Members</h2>

    <div class="grid grid-cols-2 gap-4 overflow-y-scroll max-h-64">
      <div v-for="i in 10" :key="i" class="flex bg-rblue dark:bg-white w-full h-28 rounded-md items-center">
        <div class="relative w-28 h-28 rounded-lg">
          <img
            src="@/assets/img/sylv.jpg"
            alt=""
            class="w-full h-full object-cover border-rblue dark:border-white border-4 rounded-lg"
          />
          <span
            class="
              text-white
              dark:text-rblue
              font-rtext
              text-center text-sm
              dark:font-medium
              absolute
              w-2/3
              rounded-t-md
              bottom-0
              bg-rblue
              dark:bg-white
            "
            >Level 60
          </span>
        </div>
        <div class="flex flex-col">
          <span class="text-white dark:text-rblue font-rtext text-xl font-light dark:font-medium">Sylvanas</span>
          <span class="text-white dark:text-rblue font-rtext text-xl font-light dark:font-medium">Undead Hunter</span>
          <span class="text-white dark:text-rblue font-rtext text-xl font-light dark:font-medium">Kharazan EU</span>
        </div>
      </div>
    </div>
  </div>
</template>
