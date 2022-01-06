<template>
  <div>
    <div class="flex items-center space-x-3 mb-4">
      <svg
        class="h-12 fill-current dark:text-white text-rblue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 465.39 465.39"
      >
        <g id="Cut_border_thick" data-name="Cut border thick">
          <path class="cls-1" d="M305.26,411.3a194,194,0,0,1-145.13,0L118.6,435.53a232.91,232.91,0,0,0,228.19,0Z" />
          <path class="cls-1" d="M405.71,77.1v70.56a193.53,193.53,0,0,1,0,170.06v70.57a232.67,232.67,0,0,0,0-311.19Z" />
          <path class="cls-1" d="M59.68,317.72a193.53,193.53,0,0,1,0-170.06V77.1a232.67,232.67,0,0,0,0,311.19Z" />
          <path class="cls-1" d="M290.92,7.34a234.61,234.61,0,0,0-116.45,0Z" />
        </g>
        <g id="Banner">
          <path
            class="cls-1"
            d="M350.46,23.34H114.94a39.22,39.22,0,0,0-15.28,3.08c-.59.25-1.17.51-1.74.79A39.43,39.43,0,0,0,79.55,45.58c-.27.57-.53,1.15-.78,1.73a39.08,39.08,0,0,0-3.09,15.28V442l157-91.59,157,91.59V62.59A39.25,39.25,0,0,0,350.46,23.34ZM212,285.33a6.43,6.43,0,0,1,0,9.11L205,301.51a6.44,6.44,0,0,1-7.6,1.12L173.6,289.89l-23.89,23.88a6.43,6.43,0,0,1-9.11,0l-9.11-9.11a6.43,6.43,0,0,1,0-9.11l23.88-23.89-12.74-23.77a6.46,6.46,0,0,1,1.12-7.6l7.07-7.06a6.43,6.43,0,0,1,9.11,0l9.94,9.94,21.5-21.49,32.22,32.22-21.5,21.49ZM135,147.05l-5.32-31.46a5.37,5.37,0,0,1,6.08-6.07l31.46,5.31L286.41,234.06l-32.22,32.22ZM333.91,304.66l-9.11,9.11a6.43,6.43,0,0,1-9.11,0L291.8,289.89,268,302.63a6.43,6.43,0,0,1-7.59-1.12l-7.07-7.07a6.45,6.45,0,0,1,0-9.11l52.11-52.1a6.43,6.43,0,0,1,9.11,0l7.07,7.06a6.45,6.45,0,0,1,1.12,7.6L310,271.66l23.88,23.89A6.43,6.43,0,0,1,333.91,304.66Zm1.84-189.07-5.32,31.46L274,203.45l-32.22-32.22,56.41-56.4,31.46-5.31A5.36,5.36,0,0,1,335.75,115.59Z"
          />
        </g>
      </svg>
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
