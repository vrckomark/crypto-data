/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        bg: "#09B1EC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
