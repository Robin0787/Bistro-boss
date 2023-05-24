/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'featuredImg': "url('./featured.jpg')"
      }
    },
  },
  plugins: [require('daisyui')],
}

