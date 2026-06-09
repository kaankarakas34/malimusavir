/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07172f",
          900: "#09244a",
          800: "#0d3568",
          700: "#10457e"
        },
        skybrand: {
          50: "#eef8ff",
          100: "#d9efff",
          500: "#1590d5",
          600: "#0877bc"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(7, 23, 47, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
