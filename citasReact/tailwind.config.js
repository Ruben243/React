module.exports = {
  purge: ["index.html","./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {screens: {
      'xs': { 'min': '340px' }
  },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
