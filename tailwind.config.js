/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4f8cff',
        'primary-dark': '#2d6cdf',
        'primary-light': '#e3f0ff',
      }
    },
  },
  plugins: [],
}