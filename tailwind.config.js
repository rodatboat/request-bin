/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#B8FF65",
      },
      secondary: {
        DEFAULT: "#aaa",
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

