/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "main-dark": "#252C33",
        "second-dark":"#161313",
        "secondary": "#3A4750",
        "main-yellow": "#F6C90E",
        "main-white": "#EEEEEE",
      },
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        prompt: ['Prompt', 'sans-serif']
      },
      spacing:{
        128: "32rem",
      }
    },
  },
  plugins: [],
}
