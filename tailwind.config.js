/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black":"#000000",
        "white":"#ffffff",
        "white-200":"#f5f5f5",
        "black-800":"#111111",
        "black-600":"#d1d1d1",
        "gray-400":"#292929"
      },
      fontSize:{
        "4xl":["236px", "210px"],
        "xxl":["170px","140px"],
        "3xl":["119px","85px"],
        "2xl":["42px", "51px"]
      }
    },
  },
  plugins: [],
};
