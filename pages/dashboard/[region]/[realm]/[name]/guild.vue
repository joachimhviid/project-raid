<template>
  <div>
    <!--Section Title-->
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/guild.png" alt="" />
      <h2 class="text-rblue dark:text-white font-rtext text-4xl">GUILD</h2>
    </div>
    <div class="grid grid-cols-5 grid-rows-2 gap-8">
      <DashboardCardGuildInfo class="col-span-4 row-span-0" />
      <DashboardCardRaids class="col-span-2 row-span-2" />
      <DashboardCardGuildSocials class="col-end-1" />
      <DashboardCardGuildMembers class="col-span-3" />
    </div>
  </div>
</template>
