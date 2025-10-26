/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to bottom, #1d4ed8, #0ea5e9, #22d3ee)',
      },
    },
  },
  plugins: [],
};