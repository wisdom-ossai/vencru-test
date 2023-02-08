/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          300: "#D0D5DD",
          500: "#667085",
          700: "#344054",
          900: "#101828",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        sm: "2rem",
        md: "6px",
        lg: "",
        none: "0",
        DEFAULT: "8px",
      },
    },
    screens: {
      xs: "480",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
