/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#2dd4bf",
      },
      secondary: {
        DEFAULT: "#888",
      },
      gray:{
        DEFAULT: "#333",
      },
      white: {
        DEFAULT: "#fff",
      },
      black: {
        DEFAULT: "#000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Larsseit-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

