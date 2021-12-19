module.exports = {
  mode: 'jit',
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        rblue: '#426DF0',
        // rblue: '#7F9CF5',
        'rblue-hover': '#6C8DF1',
        rwhite: '#FFFFFF',
      },
      fontFamily: {
        rtitle: 'Cambria',
        rtext: 'Calibri'
      },
      screens: {
        'large': {'min': '1151px','max': '1600px'},
        'medium': {'max': '1150px'},
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
