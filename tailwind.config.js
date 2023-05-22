const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[900],
        primaryLight: colors.blue[600],
        secondary: colors.white,
        border: colors.blue[200],
        accent: colors.red[500],
        textAccent: colors.white,
      },
      spacing: {
        "section-sides": "10rem",
      },
    },
  },
  plugins: [],
};
