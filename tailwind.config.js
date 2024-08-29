/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        hitam: "#000000",
        krem: "#D9D9D9",
        hijau: "#1ABC9C",
        coklat: "#8B5D43",
      },
    },
  },
  plugins: [],
};
