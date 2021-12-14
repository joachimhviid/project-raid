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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
