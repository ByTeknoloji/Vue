/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        handro: '#32445a',
        twitter: '#00acee'
        
      },
      spacing:{
        '15':'3.75rem'
      }
    },
  },
  plugins: [],
}
