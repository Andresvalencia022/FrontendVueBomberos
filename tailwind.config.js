/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bebasNeue': ['Bebas Neue', 'sans-serif'], 
        'PoetsenOne': ['Poetsen One', 'sans-serif'], 
        'Neuton': ['Neuton', 'serif'], 
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'], 

      }, 
      backgroundImage: {
        'backgroundImage': "url('./src/assets/img/backgroundImage/fondoGanador.png')"
      }
    },
  },
  plugins: [],
}
