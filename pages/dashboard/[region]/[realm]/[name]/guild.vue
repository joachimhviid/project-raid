<template>
  <div>
    <!--Section Title-->
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/guild.png" alt="" />
      <h2 class="text-rblue dark:text-white font-rtext text-4xl">GUILD</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <DashboardCardGuildInfo class="md:col-span-3 xl:col-span-4 2xl:col-span-3" />
      <DashboardCardGuildSocials class="md:col-span-2 2xl:row-start-2 xl:col-span-1" />
      <DashboardCardGuildMembers class="md:col-span-2" />
      <DashboardCardRaids class="md:col-span-2 2xl:row-start-1 2xl:col-start-4 2xl:row-span-2 xl:col-span-1" />
    </div>
  </div>
</template>
