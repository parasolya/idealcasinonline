/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      notMd: { max: "767.98px" },
      md: "768px",
      notLg: { max: "1279.98px" },
      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.25rem",
        md: "2rem",
        lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#EC8205",
        lightBrown: "#EFEAE4",
        brown: "#3E2810",
        titleBrown: "#452C0E",
        darkBrown: "#120C05",
      },
      
      spacing: {
        "26": "5.8rem",
      },
    },
  },
  plugins: [],
};
