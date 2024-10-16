import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crumbs: "#BD5814",
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [daisyui],
};
