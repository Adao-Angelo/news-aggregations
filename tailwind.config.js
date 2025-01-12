/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#f2f2f2",
        grayDark: "#6b6b6b",
        stroke: "#e0e0e0",
        lightBorder: "#e0e0e0",
        primaryBlack: "#1c1c1c",
        vibrantRed: "#df4a4a",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        popOne: ["PopOne", "cursive"],
      },
    },
  },
  plugins: [],
};
