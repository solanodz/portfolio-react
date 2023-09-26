/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "gray": "#20262E",
      "white": "#ffffff",
      "black": "#000000",
      // "accent": "#72CECE",
      "secondary": "#3C434B",
      "accent": "#43B17A"
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      delaGothicOne: ['Dela Gothic One', 'cursive']
    }
  },
  plugins: [],
}

