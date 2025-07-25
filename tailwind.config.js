/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",'./index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        tradingview: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
