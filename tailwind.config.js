/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        ironmanRed: "#b71c1c",
        ironmanGold: "#ffd700",
        ironmanSilver: "#c0c0c0",
        ironmanBlack: "#000000",
      },
    },
  },
  plugins: [],
};
