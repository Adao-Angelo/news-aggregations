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
      keyframes: {
        pulseUp: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
      },
      animation: {
        pulseUp: "pulseUp 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
