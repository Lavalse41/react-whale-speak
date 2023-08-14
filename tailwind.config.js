/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caprasimo: ["Caprasimo", "serif"],
        vollkorn: ["Vollkorn", "serif"],
        comic_neue: ["Comic Neue", "serif"],
        ki_comic: ["Ki Comic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
