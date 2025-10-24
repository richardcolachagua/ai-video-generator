/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Shadcn-compatible system tokens
        border: "hsl(0, 0%, 85%)",
        ring: "hsl(0, 0%, 75%)",
        background: "#000000",
        foreground: "#ffffff",

        // Your custom Iron Man palette
        ironmanRed: "#b71c1c",
        ironmanGold: "#ffd700",
        ironmanSilver: "#c0c0c0",
        ironmanBlack: "#000000",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // ✅ plugin works fine with ESM
  ],
};
