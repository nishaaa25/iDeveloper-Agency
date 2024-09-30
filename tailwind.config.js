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
        "black-800":"#111111"
      },
      fontSize:{
        "4xl":["236px", "210px"]
      }
    },
  },
  plugins: [],
};
