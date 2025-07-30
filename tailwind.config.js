/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'], // A beautiful, professional serif font
        'sans': ['Inter', 'sans-serif'],      // A clean, modern sans-serif font
        'logo': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}