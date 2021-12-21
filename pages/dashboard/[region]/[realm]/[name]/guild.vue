<template>
  <div>
    <!--Section Title-->
    <div class="flex items-center space-x-3 mb-4">
      <img class="w-14" src="@/assets/icons/guild.png" alt="" />
      <h2 class="text-rblue font-rtext text-4xl cursor-default">GUILD</h2>
    </div>
    <div class="grid grid-cols-5 grid-rows-2 gap-8">
      <DashboardCardGuildInfo />
      <DashboardCardGuildSocials />
      <DashboardCardGuildMembers />
    </div>
  </div>
</template>
