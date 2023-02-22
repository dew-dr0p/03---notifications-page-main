/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': '#F65351',
      'blue': {
        DEFAULT: '#0A317B',
        veryDark: '#1C202B',
      },
      'white': '#FFFFFF',
      'grayishBlue': {
        veryLight: '#F7FAFD',
        light1: '#E5EFFA',
        light2: '#DDE7EE',
        DEFAULT: '#939DAE',
        dark: '#5E6778',
      }
    },
    extend: {},
  },
  plugins: [],
}