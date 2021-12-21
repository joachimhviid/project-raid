module.exports = {
  mode: 'jit',
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rblue: '#426DF0',
        // rblue: '#7F9CF5',
        'rblue-hover': '#6C8DF1'
      },
      fontFamily: {
        rtitle: 'Cambria',
        rtext: 'Calibri'
      },
      screens: {
        large: { min: '1151px', max: '1600px' },
        medium: { max: '1150px' },
        '3xl': '2200px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
